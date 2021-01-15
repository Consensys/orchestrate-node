// tslint:disable: no-console

import * as util from 'util'

import { OrchestrateClient } from '../../src'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    const res = await client.sendTransaction(
      {
        chain: 'besu',
        params: {
          from: '[ETH_ACCOUNT]',
          to: '[DEPLOYED_CONTRACT_ADDRESS]',
          methodSignature: 'transfer(address,uint256)',
          args: ['0x6009608a02a7a15fd6689d6dad560c44e9ab61ff', 5000]
        }
      },
      'ExampleSendTransaction'
    )

    console.log(util.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
