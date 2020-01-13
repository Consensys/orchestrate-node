import assert from 'assert'
import { EventEmitter } from 'events'
import * as Kafka from 'kafka-node'

import { EventType } from '../types'

/**
 * Consumes and decodes Orchestrate messages
 */
export class ConsumerGroup extends EventEmitter {
  private readonly consumer: Kafka.ConsumerGroup
  private isReady = false

  /**
   * Creates a new instance of the ConsumerGroup
   *
   * @param kafkaHost - URL of the Kafka host
   * @param topics - List of topics to consume
   * @param options - Options
   */
  constructor(
    private readonly kafkaHost: string,
    private readonly topics: string[],
    options: Kafka.ConsumerGroupOptions
  ) {
    super()

    this.consumer = new Kafka.ConsumerGroup({ kafkaHost, encoding: 'buffer', ...options }, topics)
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
   * Waits until a connection to Kafka is successfully established or fails
   *
   * @returns a Promise that resolves if the connection is successful and rejects otherwise
   * @throws Error if the client cannot connect to the Kafka node
   */
  public connect(): Promise<ConsumerGroup> {
    return new Promise((resolve, reject) => {
      if (this.isReady) {
        return resolve(this)
      }

      this.consumer.on('connect', () => {
        this.isReady = true
        resolve(this)
      })

      this.consumer.on('error', error => reject(error))
    })
  }

  /**
   * Consumes and decodes messages given topics
   */
  public consume(): void {
    // Not absolutely necessary but enforces user to call connect() before calling consume()
    assert(this.isReady, 'ConsumerGroup is not ready to consume, did you forget to call connect()?')

    this.consumer.on('message', this.onMessage)
    this.consumer.on('error', error => this.onError(error, EventType.Error))
    this.consumer.on('offsetOutOfRange', error => this.onError(error, EventType.OffsetError))
  }

  private onMessage(message: Kafka.Message) {
    // TODO: Implement unmarshallers when the new enveloppe format is ready
    const unmarshaller = (msg: Kafka.Message) => msg

    this.emit(EventType.Message, {
      ...message,
      value: unmarshaller(message)
    })
  }

  private onError(error: any, errorType: EventType) {
    this.emit(errorType, error)
  }
}
