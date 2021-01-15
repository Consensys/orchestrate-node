// tslint:disable: no-console

import { OrchestrateClient } from '../../src'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    const faucet = await client.registerFaucet({
      name: 'faucet',
      chainRule: '[CHAIN_UUID]',
      creditorAccount: '[FUNDED_ACCOUNT]',
      amount: '60000000000000000',
      maxBalance: '100000000000000000',
      cooldown: '10s'
    })

    console.log(faucet)
  } catch (error) {
    console.error(error)
  }
}
