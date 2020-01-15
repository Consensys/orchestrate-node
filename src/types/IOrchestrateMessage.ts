import { KafkaMessage } from 'kafkajs'

export interface IOrchestrateMessage extends KafkaMessage {
  partition: number
  topic: string
}
