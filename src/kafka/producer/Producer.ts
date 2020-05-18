import * as KakfaJS from 'kafkajs'
import { v4 as uuidv4 } from 'uuid'

import { DEFAULT_TOPIC_ACCOUNT_GENERATOR, DEFAULT_TOPIC_TX_CRAFTER, DEFAULT_TOPIC_TX_SENDER } from '../constants'
import { marshalGenerateAccountRequest, marshalRawTransactionRequest, marshalTransactionRequest } from '../helpers'
import { KafkaClient } from '../KafkaClient'
import { IGenerateAccountRequest, IRawTransactionRequest, ITransactionRequest } from '../types'

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

  constructor(
    brokers: string[],
    kafkaConfig?: Omit<KakfaJS.KafkaConfig, 'brokers'>,
    producerConfig?: KakfaJS.ProducerConfig
  ) {
    super({ clientId: 'orchestrate-sdk-producer', ...kafkaConfig, brokers })
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
  public async produce(topic: string, message: KakfaJS.Message): Promise<KakfaJS.RecordMetadata> {
    this.checkReadiness()

    try {
      const result = await this.producer.send({ topic, messages: [message] })
      return result[0]
    } catch (error) {
      throw error
    }
  }

  /**
   * Sends an Ethereum transaction
   *
   * @param request - Transaction request
   * @param topic - Topic name. Sends to Transaction Crafter by default
   * @returns The ID of the message
   */
  public async sendTransaction(request: ITransactionRequest, topic = DEFAULT_TOPIC_TX_CRAFTER): Promise<string> {
    this.checkReadiness()

    request.id = request.id ? request.id : uuidv4()
    await this.produce(topic, marshalTransactionRequest(request))

    return request.id
  }

  /**
   * Sends a raw Ethereum transaction
   *
   * @param request - Raw transaction request
   * @param topic - Topic name. Sends to Transaction Sender by default
   * @returns The ID of the message
   */
  public async sendRawTransaction(request: IRawTransactionRequest, topic = DEFAULT_TOPIC_TX_SENDER): Promise<string> {
    this.checkReadiness()

    request.id = request.id ? request.id : uuidv4()
    await this.produce(topic, marshalRawTransactionRequest(request))

    return request.id
  }

  /**
   * Generates a new Ethereum account
   *
   * @param request - Account generation request
   * @param topic - topic of the wallet generator if modified
   * @returns the ID of the message
   */
  public async generateAccount(
    request?: IGenerateAccountRequest,
    topic = DEFAULT_TOPIC_ACCOUNT_GENERATOR
  ): Promise<string> {
    this.checkReadiness()

    if (!request || !request.id) {
      request = { id: uuidv4(), ...request }
    }

    await this.produce(topic, marshalGenerateAccountRequest(request))

    return request.id!
  }

  private checkReadiness() {
    if (!this.isReady) {
      throw new Error('Producer is not currently connected, did you forget to call connect()?')
    }
  }
}
