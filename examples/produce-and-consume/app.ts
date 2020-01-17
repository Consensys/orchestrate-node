import { Consumer, ResponseMessage } from '../../src'
import { EventType } from '../../src/types'

export const start = async () => {
  try {
    const consumer = new Consumer(['topic-tx-decoded'], ['localhost:9092'])

    await consumer.connect()

    // Register the event listener before calling consume
    consumer.on(EventType.Response, async (message: ResponseMessage) => {
      const { offset, topic } = message.content()

      if (Number(offset) % 10 === 0) {
        await message.commit()
      }
      // tslint:disable-next-line: no-console
      console.log('Message received !', { offset, topic })
    })

    await consumer.consume()
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error)
  }
}
