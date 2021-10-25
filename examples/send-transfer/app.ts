// tslint:disable: no-console

import * as cutil from 'util'

import { OrchestrateClient } from '../../src'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    const res = await client.transfer(
      {
        chain: 'besu',
        params: {
          from: '[ETH_ACCOUNT]',
          to: '0x6009608a02a7a15fd6689d6dad560c44e9ab61ff',
          value: '100000000',
          transactionType: 'legacy'
        }
      },
      'ExampleTransfer'
    )

    console.log(cutil.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
