import { Consumer } from '../../src/consumer'
import { EventType } from '../../src/types'

export const connect = async (consumer: Consumer) => {
  try {
    await consumer.connect()
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error)
  }
}

export const consume = async (consumer: Consumer) => {
  try {
    // tslint:disable-next-line: no-console
    consumer.on(EventType.Message, console.log)
    consumer.consume()
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error)
  }
}

export const getConsumer = () => {
  return new Consumer('localhost:9092', ['topic-tx-decoded'], 'salut')
}
