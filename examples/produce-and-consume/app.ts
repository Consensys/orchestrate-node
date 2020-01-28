import { Consumer, EventType, Producer, ResponseMessage } from '../../lib'

const consume = async (consumer: Consumer) => {
  await consumer.connect()

  // Register the event listener before calling consume
  consumer.on(EventType.Response, async (message: ResponseMessage) => {
    const { offset, topic, value } = message.content()

    // tslint:disable-next-line: no-console
    console.log('Message received !', { offset, topic })
    if (value.errors && value.errors.length !== 0) {
      // tslint:disable-next-line: no-console
      console.log('Transaction failed!', { errors: value.errors, txContext: value.txContext })
    } else {
      // tslint:disable-next-line: no-console
      console.log('Receipt:', value.receipt)
    }

    // We commit every messgage
    await message.commit()
  })

  await consumer.consume()
}

const produce = async (producer: Producer) => {
  await producer.connect()

  // Deploy a new SimpleToken contract
  await producer.sendTransaction({
    nodeName: 'geth',
    contractName: 'SimpleToken',
    methodSignature: 'constructor()',
    from: '0x7e654d251da770a068413677967f6d3ea2fea9e4'
  })
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
