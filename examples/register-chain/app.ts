// tslint:disable: no-console

import { OrchestrateClient } from '../../src'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    const chain = await client.registerChain({
      name: 'besu',
      urls: ['http://validator2:8545'],
      listener: {
        fromBlock: 'latest'
      },
      labels: {
        my_label: 'testing labels'
      }
    })

    console.log(chain)
  } catch (error) {
    console.error(error)
  }
}
