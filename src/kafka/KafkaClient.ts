import { EventEmitter } from 'events'
import * as KakfaJS from 'kafkajs'

/**
 * Kafka client abstract class
 */
export abstract class KafkaClient extends EventEmitter {
  protected readonly kafka: KakfaJS.Kafka
  protected isReady = false

  /**
   * Creates a new instance of the Kafka client
   *
   * @param clientId - ID of the client
   * @param kafkaHost - URL of the Kafka host
   * @param loglevel - log level
   */
  constructor(clientId: string, private readonly kafkaHost: string, loglevel?: KakfaJS.logLevel) {
    super()

    this.kafka = new KakfaJS.Kafka({
      logLevel: loglevel || KakfaJS.logLevel.INFO,
      brokers: [this.kafkaHost],
      clientId
    })
  }

  /**
   * Returns the Kafka host
   */
  public getHost(): string {
    return this.kafkaHost
  }

  /**
   * Returns true if the Producer is ready to produce messages
   */
  public ready(): boolean {
    return this.isReady
  }
}
