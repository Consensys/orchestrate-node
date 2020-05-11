// tslint:disable: no-console

import { Producer } from '../../src'

export const start = async () => {
  try {
    const producer = new Producer(['localhost:9092'])
    await producer.connect()

    // Deploy a new SimpleToken contract
    // const envelopeId = await producer.sendTransaction({
    //   chainName: 'besu',
    //   contractName: 'SimpleToken',
    //   methodSignature: 'transfer(address,uint256)',
    //   args: ['0x7e654d251da770a068413677967f6d3ea2fea9e5', 5000],
    //   from: '0x7e654d251da770a068413677967f6d3ea2fea9e4', // Default Orchestrate account in development mode
    //   to: '0xe5ce65038f9d1c841a33CC816eE674F8a0E31E74'
    // })

    const envelopeId = await producer.sendTransaction({
      chainName: 'besu',
      contractName: 'SimpleToken',
      methodSignature: 'constructor()',
      from: '0x7e654d251da770a068413677967f6d3ea2fea9e4' // Default Orchestrate account in development mode
    })

    console.log(`Envelope ID: ${envelopeId}`)
  } catch (error) {
    console.error(error)
  }
}
