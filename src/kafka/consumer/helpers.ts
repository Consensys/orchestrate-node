import * as KakfaJS from 'kafkajs'

import { EventType } from '../../types'

import { Consumer } from './Consumer'

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

  consumer.emit(EventType.Message, {
    ...message,
    topic,
    partition,
    value: unmarshaller(message)
  })
}
