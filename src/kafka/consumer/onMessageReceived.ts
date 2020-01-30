import * as KakfaJS from 'kafkajs'

import { EventType } from '../../types'
import { unmarshalEnvelope } from '../helpers'

import { Consumer } from './Consumer'
import { ResponseMessage } from './ResponseMessage'

/**
 * Unmarshalls the message value and emit an enriched message event
 *
 * @param payload Kafka message
 * @param consumer Orchestrate Consumer
 */
export function onMessageReceived(payload: KakfaJS.EachMessagePayload, consumer: Consumer) {
  const { topic, partition, message } = payload

  const responseMessage = new ResponseMessage(consumer, {
    ...message,
    key: message.key.toString(),
    value: unmarshalEnvelope(message.value),
    topic,
    partition
  })

  consumer.emit(EventType.Response, responseMessage)
}
