// tslint:disable: no-console

import { ChainRegistry } from '../../src'

export const start = async () => {
  try {
    const chainRegistry = new ChainRegistry('http://localhost:8011')

    await chainRegistry.registerChain({
      name: 'besu',
      urls: ['http://validator2:8545'],
      listener: {
        externalTxEnabled: true,
        backoffDuration: '5s',
        fromBlock: '0'
      }
    })

    const chains = await chainRegistry.chains()
    console.log(chains)
  } catch (error) {
    console.error(error)
  }
}
