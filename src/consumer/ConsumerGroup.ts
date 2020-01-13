import Kafka, { ConsumerGroupOptions } from 'kafka-node'

import { EncodingTypes } from '../types'

export class ConsumerGroup {
  private readonly consumer: Kafka.ConsumerGroup

  constructor(private readonly kafkaHost: string, private readonly topics: string[], options: ConsumerGroupOptions) {
    this.consumer = new Kafka.ConsumerGroup({ kafkaHost, encoding: EncodingTypes.Buffer, ...options }, topics)
  }

  public getHost(): string {
    return this.kafkaHost
  }

  public getTopics(): string[] {
    return this.topics
  }

  public connect() {
    // TODO
  }

  public consume() {
    // TODO
  }
}
