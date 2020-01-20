import { KafkaMessage } from 'kafkajs'

export interface IResponse extends KafkaMessage {
  partition: number
  topic: string
}
