// tslint:disable: no-console

import { OrchestrateClient } from '../../src'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    await client.registerChain({
      name: 'besu',
      urls: ['http://validator2:8545'],
      listener: {
        externalTxEnabled: true,
        backoffDuration: '5s',
        fromBlock: '0'
      }
    })

    const chains = await client.searchChains()
    console.log(chains)
  } catch (error) {
    console.error(error)
  }
}
