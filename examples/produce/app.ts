// tslint:disable: no-console

import { Producer } from '../../src'

const produce = async (producer: Producer) => {
  await producer.connect()

  // Deploy a new SimpleToken contract
  await producer.sendTransaction({
    nodeName: 'geth',
    contractName: 'SimpleToken',
    methodSignature: 'constructor()',
    from: '0x7e654d251da770a068413677967f6d3ea2fea9e4',
    gas: 2000000
  })
}

export const start = async () => {
  try {
    const producer = new Producer(['localhost:9092'])
    await produce(producer)
  } catch (error) {
    console.error(error)
  }
}
