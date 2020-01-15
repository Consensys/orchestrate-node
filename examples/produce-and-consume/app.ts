import { Consumer } from '../../src/consumer'
import { EventType, IOrchestrateMessage } from '../../src/types'

export const start = async () => {
  try {
    const consumer = new Consumer('localhost:9092', ['topic-tx-decoded'], 'orchestrate-sdk-example')

    await consumer.connect()

    consumer.on(EventType.Message, async (msg: IOrchestrateMessage) => {
      if (Number(msg.offset) % 10 === 0) {
        await consumer.commit(msg)
      }
      // tslint:disable-next-line: no-console
      console.log('Message received !', { offset: msg.offset, partition: msg.partition, topic: msg.topic })
    })

    consumer.consume()
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error)
  }
}
