// tslint:disable: no-console

import { Producer } from '../../src'

export const start = async () => {
  try {
    const producer = new Producer(['localhost:9092'])
    await producer.connect()

    const envelopeId = await producer.sendTransaction({
      chain: 'besu',
      contractName: 'SimpleToken',
      methodSignature: 'constructor()',
      contextLabels: {
        txFrom: 'one-time-key'
      }
    })

    console.log(`Envelope ID: ${envelopeId}`)
  } catch (error) {
    console.error(error)
  }
}
