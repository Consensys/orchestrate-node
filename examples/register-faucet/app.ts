// tslint:disable: no-console

import { FaucetRegistry } from '../../src'

export const start = async () => {
  try {
    const faucetRegistry = new FaucetRegistry('localhost:8011')

    await faucetRegistry.registerFaucet({
      name: 'faucet1',
      chainRule: '9b3c85ef-6443-46e6-a7af-9e74a40ceb60',
      creditorAccount: '0x6230592812dE2E256D1512504c3E8A3C49975f07',
      amount: '60000000000000000',
      maxBalance: '100000000000000000',
      cooldown: '10s'
    })

    const faucets = await faucetRegistry.faucets()
    console.log(faucets)
  } catch (error) {
    console.error(error)
  }
}
