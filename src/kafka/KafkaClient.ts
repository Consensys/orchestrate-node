import { EventEmitter } from 'events'
import * as KafkaJS from 'kafkajs'

/**
 * @hidden
 * Kafka client abstract class
 */
export abstract class KafkaClient extends EventEmitter {
  protected readonly kafka: KafkaJS.Kafka
  protected isReady = false

  /**
   * Instantiates a new Kafka client
   *
   * @param brokers - List of brokers to connect to
   * @param kafkaConfig - Kafka client configuration
   */
  protected constructor(kafkaConfig: KafkaJS.KafkaConfig) {
    super()

    this.kafka = new KafkaJS.Kafka({
      clientId: 'orchestrate-sdk',
      ...kafkaConfig
    })
  }

  /**
   * Returns true if the Producer is ready to produce messages
   */
  public ready(): boolean {
    return this.isReady
  }
}
