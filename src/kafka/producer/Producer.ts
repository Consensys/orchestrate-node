import * as KakfaJS from 'kafkajs'
import { v4 as uuidv4 } from 'uuid'

import { IExtraData, ITransactionRequest, ProtocolType } from '../../types'
import { DEFAULT_TOPIC_TX_CRAFTER, DEFAULT_TOPIC_WALLET_GENERATOR, MAINNET_CHAIN_ID } from '../constants'
import { KafkaClient } from '../KafkaClient'

/**
 * Class used to send messages to Orchestrate
 */
export class Producer extends KafkaClient {
  private readonly producer: KakfaJS.Producer

  /**
   * Creates a new instance of the Producer
   *
   * @param brokers - List of brokers to connect to
   * @param kafkaConfig - Kafka client configuration
   * @param producerConfig - Producer configuration
   */

  constructor(brokers: string[], kafkaConfig?: KakfaJS.KafkaConfig, producerConfig?: KakfaJS.ProducerConfig) {
    super(brokers, kafkaConfig)
    this.producer = this.kafka.producer(producerConfig)
  }

  /**
   * Connects to Kafka
   *
   * @returns a Promise that resolves if the connection is successful and rejects otherwise
   */
  public async connect(): Promise<void> {
    await this.producer.connect()
    this.isReady = true
  }

  /**
   * Disconnects from the broker
   *
   * @returns a Promise that resolves if the connection is disconnected successfully
   */
  public async disconnect(): Promise<void> {
    this.checkReadiness()
    await this.producer.disconnect()
    this.isReady = false
  }

  /**
   * Sends a message to Kafka
   *
   * @param topic - topic
   * @param message - Kafka message
   */
  public async produce(topic: string, message: KakfaJS.Message) {
    this.checkReadiness()

    const result = await this.producer.send({ topic, messages: [message] })
    return result[0]
  }

  /**
   * Sends an Ethereum transaction
   *
   * @param request - Transaction request
   * @param topic - Topic name
   */
  public async sendTransaction(
    request: ITransactionRequest,
    topic = DEFAULT_TOPIC_TX_CRAFTER
  ): Promise<KakfaJS.RecordMetadata> {
    this.checkReadiness()

    // Field default initialization
    request.chainId = request.chainId ? request.chainId : MAINNET_CHAIN_ID
    request.protocol = request.protocol ? request.protocol : { type: ProtocolType.EthereumConstantinople }
    request.requestId = request.requestId ? request.requestId : uuidv4()

    return this.produce(topic, this.createTxMessage(request))
  }

  /**
   * Generates a new wallet
   *
   * @param topic - topic of the wallet generator if modified
   * @param requestId - id of the message
   * @param extraData - extra metadata of the message
   */
  public async generateWallet(
    topic?: string,
    requestId?: string,
    extraData?: IExtraData
  ): Promise<KakfaJS.RecordMetadata> {
    this.checkReadiness()

    const value = {
      metadata: {
        id: requestId ? requestId : uuidv4(),
        extra: extraData
      }
    }

    return this.produce(topic || DEFAULT_TOPIC_WALLET_GENERATOR, {
      value: this.marshal(value)
    })
  }

  private checkReadiness() {
    if (!this.isReady) {
      throw new Error('Producer is not currently connected, did you forget to call connect()?')
    }
  }

  private createTxMessage(request: ITransactionRequest): KakfaJS.Message {
    const messagePayload = {
      metadata: {
        id: request.requestId,
        extra: request.extraData
      },
      call: {
        contract: request.contract,
        method: request.method,
        args: request.args
      },
      ...request
    }

    // Clean object of unnecessary fields
    delete messagePayload.extraData
    delete messagePayload.requestId
    delete messagePayload.contract
    delete messagePayload.method
    delete messagePayload.args

    return {
      key: `${request.chainId}-${request.from}`,
      value: this.marshal(messagePayload)
    }
  }

  private marshal(data: any) {
    // TODO: Implement marshalEnvelope when new envelope format is defined
    const marshalEnvelope = (payload: any) => payload

    const envelope = marshalEnvelope(data)
    return JSON.stringify(envelope)
  }
}
