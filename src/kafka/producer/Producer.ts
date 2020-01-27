import * as KakfaJS from 'kafkajs'
import { v4 as uuidv4 } from 'uuid'

import { DEFAULT_TOPIC_TX_CRAFTER, DEFAULT_TOPIC_WALLET_GENERATOR } from '../constants'
import { marshalRequest, marshalTransactionRequest } from '../helpers'
import { KafkaClient } from '../KafkaClient'
import { ITransactionRequest } from '../types'
import { IRequest } from '../types/IRequest'

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
  public async produce(topic: string, message: KakfaJS.Message): Promise<KakfaJS.RecordMetadata> {
    this.checkReadiness()

    const result = await this.producer.send({ topic, messages: [message] })
    return result[0]
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
   * Generates a new Ethereum wallet
   *
   * @param topic - topic of the wallet generator if modified
   * @param requestId - id of the message
   * @param extraData - extra metadata of the message
   * @returns the ID of the message
   */
  public async generateWallet(request?: IRequest, topic = DEFAULT_TOPIC_WALLET_GENERATOR): Promise<string> {
    this.checkReadiness()

    if (!request || !request.id) {
      request = { id: uuidv4(), ...request }
    }

    await this.produce(topic, marshalRequest(request))

    return request.id!
  }

  private checkReadiness() {
    if (!this.isReady) {
      throw new Error('Producer is not currently connected, did you forget to call connect()?')
    }
  }
}
