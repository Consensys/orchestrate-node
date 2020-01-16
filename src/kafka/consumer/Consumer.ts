import { EventEmitter } from 'events'
import * as KakfaJS from 'kafkajs'

import { IOrchestrateMessage } from '../../types'

import { onMessageReceived } from './helpers'

/**
 * Consumes and decodes Orchestrate messages
 */
export class Consumer extends EventEmitter {
  private readonly consumer: KakfaJS.Consumer
  private isReady = false

  /**
   * Creates a new instance of the Consumer
   *
   * @param kafkaHost - URL of the Kafka host
   * @param topics - List of topics to consume
   * @param id - ID of the consumer
   */
  constructor(
    private readonly kafkaHost: string,
    private readonly topics: string[],
    id?: string,
    loglevel?: KakfaJS.logLevel
  ) {
    super()

    const kafka = new KakfaJS.Kafka({
      logLevel: loglevel || KakfaJS.logLevel.INFO,
      brokers: [this.kafkaHost],
      clientId: 'orchestrate-consumer'
    })
    this.consumer = kafka.consumer({ groupId: id || 'orchestrate-consumer-group' })
  }

  /**
   * Returns the Kafka host
   */
  public getHost(): string {
    return this.kafkaHost
  }

  /**
   * Returns the list of topics
   */
  public getTopics(): string[] {
    return this.topics
  }

  /**
   * Returns true if the Consumer is ready to consume messages
   */
  public ready(): boolean {
    return this.isReady
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
  public async commit(message: IOrchestrateMessage): Promise<void> {
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
