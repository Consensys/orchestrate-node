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
          from: '0x7e654d251da770a068413677967f6d3ea2fea9e4', // Default Orchestrate account in development mode
          to: '0x6009608a02a7a15fd6689d6dad560c44e9ab61ff',
          value: '100000000'
        }
      },
      'ExampleTransfer'
    )

    console.log(cutil.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
