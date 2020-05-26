// tslint:disable: no-console

import { Consumer, EventType, ResponseMessage } from '../../src'

const consume = async (consumer: Consumer) => {
  await consumer.connect()

  // Register the event listener before calling consume
  consumer.on(EventType.Response, async (message: ResponseMessage) => {
    const { offset, topic, value } = message.content()

    console.log('Message received !', { envelopeId: value.id, offset, topic, chain: value.chain })
    if (value.errors && value.errors.length !== 0) {
      console.log('Transaction failed!', { errors: value.errors, txContext: value.txContext })
    } else {
      console.log('Receipt:', value.receipt)
    }

    // We commit every message
    await message.commit()
    console.log('Message committed')
  })

  await consumer.consume()
}

export const start = async () => {
  try {
    const consumer = new Consumer(['localhost:9092'])
    await consume(consumer)
  } catch (error) {
    console.error(error)
  }
}
