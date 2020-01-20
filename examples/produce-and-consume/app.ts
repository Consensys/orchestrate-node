import { Consumer, Producer, ResponseMessage } from '../../src'
import { EventType } from '../../src/definitions'

const consume = async (consumer: Consumer) => {
  await consumer.connect()

  // Register the event listener before calling consume
  consumer.on(EventType.Response, async (message: ResponseMessage) => {
    const { offset, topic } = message.content()

    // We commit every multiple of 10: 0, 10, 20, ...
    if (Number(offset) % 10 === 0) {
      await message.commit()
    }

    // tslint:disable-next-line: no-console
    console.log('Message received !', { offset, topic })
  })

  await consumer.consume()
}

const produce = async (producer: Producer) => {
  await producer.connect()
  await producer.generateWallet()
}

export const start = async () => {
  try {
    const consumer = new Consumer(['localhost:9092'])
    const producer = new Producer(['localhost:9092'])

    await consume(consumer)
    await produce(producer)
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error)
  }
}
