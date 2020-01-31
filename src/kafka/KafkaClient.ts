import { EventEmitter } from 'events'
import * as KakfaJS from 'kafkajs'

/**
 * Kafka client abstract class
 */
export abstract class KafkaClient extends EventEmitter {
  protected readonly kafka: KakfaJS.Kafka
  protected readonly brokers: string[]
  protected isReady = false

  /**
   * Instantiates a new Kafka client
   *
   * @param brokers - List of brokers to connect to
   * @param kafkaConfig - Kafka client configuration
   */
  constructor(kafkaConfig: KakfaJS.KafkaConfig) {
    super()

    this.brokers = kafkaConfig.brokers
    this.kafka = new KakfaJS.Kafka({
      clientId: 'orchestrate-sdk',
      ...kafkaConfig
    })
  }

  /**
   * Returns the Kafka brokers
   */
  public getBrokers(): string[] {
    return this.brokers
  }

  /**
   * Returns true if the Producer is ready to produce messages
   */
  public ready(): boolean {
    return this.isReady
  }
}
