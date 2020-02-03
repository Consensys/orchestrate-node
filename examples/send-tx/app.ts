// tslint:disable: no-console

import { Producer } from '../../src'

export const start = async () => {
  try {
    const producer = new Producer(['localhost:9092'])
    await producer.connect()

    // Deploy a new SimpleToken contract
    await producer.sendTransaction({
      chainName: 'besu',
      contractName: 'SimpleToken',
      methodSignature: 'constructor()',
      from: '0x7e654d251da770a068413677967f6d3ea2fea9e4', // Default Orchestrate account in development mode
      gas: 2000000
    })
  } catch (error) {
    console.error(error)
  }
}
