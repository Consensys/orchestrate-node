import * as KakfaJS from 'kafkajs'

import { IResponse } from '../../types'
import { KafkaClient } from '../KafkaClient'

import { onMessageReceived } from './helpers'

/**
 * Consumes and decodes Orchestrate messages
 */
export class Consumer extends KafkaClient {
  private readonly consumer: KakfaJS.Consumer

  /**
   * Creates a new instance of the Consumer
   *
   * @param topics - List of topics to consume
   * @param brokers - List of brokers to connect to
   * @param kafkaConfig - Kafka client configuration
   * @param consumerConfig
   */
  constructor(
    private readonly topics: string[],
    brokers: string[],
    kafkaConfig?: KakfaJS.KafkaConfig,
    consumerConfig?: KakfaJS.ConsumerConfig
  ) {
    super(brokers, kafkaConfig)
    this.consumer = this.kafka.consumer({ groupId: 'orchestrate-consumer-group', ...consumerConfig })
  }

  /**
   * Returns the list of topics
   */
  public getTopics(): string[] {
    return this.topics
  }

  /**
   * Connects to Kafka and subscribes to each topic
   *
   * @returns a Promise that resolves if the connection is successful and rejects otherwise
   */
  public async connect(): Promise<void> {
    await this.consumer.connect()

    for (const topic of this.topics) {
      await this.consumer.subscribe({ topic })
    }

    this.isReady = true
  }

  /**
   * Disconnects from the broker and unsubscribes from the topics
   *
   * @returns a Promise that resolves if the connection is disconnected successfully
   */
  public async disconnect(): Promise<void> {
    this.checkReadiness()
    await this.consumer.disconnect()
    this.isReady = false
  }

  /**
   * Starts consuming messages
   */
  public async consume(): Promise<void> {
    // Not absolutely necessary but enforces user to call connect() before calling consume()
    this.checkReadiness()

    await this.consumer.run({
      autoCommit: false,
      eachMessage: async payload => {
        onMessageReceived(payload, this)
      }
    })
  }

  /**
   * Commits the offsets specified by the message
   *
   * @param message - Message from which to get the offset
   */
  public async commit(message: IResponse): Promise<void> {
    this.checkReadiness()

    await this.consumer.commitOffsets([
      {
        offset: message.offset,
        topic: message.topic,
        partition: message.partition
      }
    ])
  }

  private checkReadiness() {
    if (!this.isReady) {
      throw new Error('Consumer is not currently connected, did you forget to call connect()?')
    }
  }
}
