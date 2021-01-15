// tslint:disable: no-console

import { OrchestrateClient } from '../../src'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    await client.registerFaucet({
      name: 'faucet1',
      chainRule: '9b3c85ef-6443-46e6-a7af-9e74a40ceb60',
      creditorAccount: '0x6230592812dE2E256D1512504c3E8A3C49975f07',
      amount: '60000000000000000',
      maxBalance: '100000000000000000',
      cooldown: '10s'
    })

    const faucets = await client.searchFaucets()
    console.log(faucets)
  } catch (error) {
    console.error(error)
  }
}
