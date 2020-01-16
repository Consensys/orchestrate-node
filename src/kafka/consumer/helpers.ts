import * as KakfaJS from 'kafkajs'

import { EventType } from '../../types'

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

  // TODO: Implement unmarshallers when the new enveloppe format is ready
  const unmarshaller = (msg: KakfaJS.KafkaMessage) => msg.value

  const responseMessage = new ResponseMessage(consumer, {
    ...message,
    topic,
    partition,
    value: unmarshaller(message)
  })

  consumer.emit(EventType.Response, responseMessage)
}
