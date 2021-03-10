import * as KafkaJS from 'kafkajs'

import { unmarshalEnvelope } from '../../helpers'
import { EventType } from '../../types'
import { Consumer } from '../Consumer'
import { ResponseMessage } from '../ResponseMessage'

/**
 * Unmarshalls the message value and emit an enriched message event
 *
 * @param payload Kafka message
 * @param consumer Orchestrate Consumer
 */
export function onMessageReceived(payload: KafkaJS.EachMessagePayload, consumer: Consumer) {
  const { topic, partition, message } = payload

  const responseMessage = new ResponseMessage(consumer, {
    ...message,
    key: message.key?.toString(),
    value: unmarshalEnvelope(message.value as Buffer),
    topic,
    partition
  })

  consumer.emit(EventType.Response, responseMessage)
}
