import { IHeaders, KafkaMessage } from 'kafkajs'

import { IResponseValue } from './IResponseValue'

export interface IResponse extends Omit<KafkaMessage, 'key' | 'value'> {
  key: string
  value: IResponseValue
  timestamp: string
  size: number
  attributes: number
  offset: string
  headers?: IHeaders
  partition: number
  topic: string
}
