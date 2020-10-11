import * as KafkaJS from 'kafkajs'
import { v4 as uuidv4 } from 'uuid'

import { DEFAULT_TOPIC_ACCOUNT_GENERATOR } from '../constants'
import { marshalRequest } from '../helpers'
import { KafkaClient } from '../KafkaClient'
import { IGenerateAccountRequest } from '../types'

/**
 * @hidden
 * Class used to send messages to Orchestrate
 */
export class Producer extends KafkaClient {
  private readonly producer: KafkaJS.Producer

  /**
   * Creates a new instance of the Producer
   *
   * @param brokers - List of brokers to connect to
   * @param kafkaConfig - Kafka client configuration
   * @param producerConfig - Producer configuration
   */

  constructor(
    brokers: string[],
    kafkaConfig?: Omit<KafkaJS.KafkaConfig, 'brokers'>,
    producerConfig?: KafkaJS.ProducerConfig
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
  public async produce(topic: string, message: KafkaJS.Message): Promise<KafkaJS.RecordMetadata> {
    this.checkReadiness()

    try {
      const result = await this.producer.send({ topic, messages: [message] })
      return result[0]
    } catch (error) {
      throw error
    }
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

    await this.produce(topic, marshalRequest(request))

    return request.id!
  }

  private checkReadiness() {
    if (!this.isReady) {
      throw new Error('Producer is not currently connected, did you forget to call connect()?')
    }
  }
}
