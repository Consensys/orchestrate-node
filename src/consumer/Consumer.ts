import { EventEmitter } from 'events'
import { ConsumerStreamMessage, KafkaConsumer } from 'node-rdkafka'

import { EventType } from '../types'

/**
 * Consumes and decodes Orchestrate messages
 */
export class Consumer extends EventEmitter {
  private readonly consumer: KafkaConsumer
  private isReady = false

  /**
   * Creates a new instance of the ConsumerGroup
   *
   * @param kafkaHost - URL of the Kafka host
   * @param topics - List of topics to consume
   * @param options - Options
   */
  constructor(private readonly kafkaHost: string, private readonly topics: string[], groupId?: string) {
    super()

    this.consumer = new KafkaConsumer(
      {
        'group.id': groupId || 'orchestrate-consumer-group',
        'metadata.broker.list': kafkaHost,
        'enable.auto.commit': false
      },
      {}
    )
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
  public async connect(): Promise<Consumer> {
    return new Promise((resolve, reject) => {
      if (this.isReady) {
        resolve(this)
      }

      this.consumer.on('ready', () => {
        this.consumer.subscribe(this.topics)
        this.isReady = true

        resolve(this)
      })

      this.consumer.on('connection.failure', error => reject(error))

      this.consumer.connect()
    })
  }

  /**
   * Disconnects from the Broker and unsubscribes from the topics
   *
   * @returns a Promise that resolves if the connection is disconnected successfully
   */
  public async disconnect(): Promise<Consumer> {
    this.checkReadiness()

    return new Promise((resolve, _) => {
      this.consumer.on('disconnected', () => {
        this.consumer.unsubscribe()
        this.isReady = false

        resolve(this)
      })

      this.consumer.disconnect()
    })
  }

  /**
   * Starts consuming messages
   */
  public consume(): void {
    // Not absolutely necessary but enforces user to call connect() before calling consume()
    this.checkReadiness()

    this.consumer.on('event.error', error => this.onError(error, EventType.EventError))
    this.consumer.on('data', message => this.onMessage(message))

    this.consumer.consume()
  }

  /**
   * Commits the offsets specified by the message
   *
   * @param message - Message from which to get the offset
   */
  public commit(message: ConsumerStreamMessage) {
    this.checkReadiness()

    this.consumer.commitMessage(message)
  }

  private onMessage(message: ConsumerStreamMessage) {
    // TODO: Implement unmarshallers when the new enveloppe format is ready
    const unmarshaller = (msg: ConsumerStreamMessage) => msg.value

    this.emit(EventType.Message, {
      ...message,
      value: unmarshaller(message)
    })
  }

  private onError(error: any, errorType: EventType) {
    this.emit(errorType, error)
  }

  private checkReadiness() {
    if (!this.isReady) {
      throw new Error('Consumer is not currently connected, did you forget to call connect()?')
    }
  }
}
