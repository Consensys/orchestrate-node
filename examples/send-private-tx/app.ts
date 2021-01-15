// tslint:disable: no-console

import * as cutil from 'util'

import { OrchestrateClient, ProtocolType } from '../../src'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    const res = await client.deployContract(
      {
        chain: 'besu',
        params: {
          contractName: 'SimpleToken',
          from: '[ETH_ACCOUNT]',
          protocol: ProtocolType.Orion,
          privateFor: ['k2zXEin4Ip/qBGlRkJejnGWdP9cjkK+DAvKNW31L2C8='], // Orion default node 2 public key in development mode
          privateFrom: 'Ko2bVqD+nNlNYL5EE7y3IdOnviftjiizpjRt+HTuFBs=' // Orion default node 1 public key in development mode
        }
      },
      'ExampleSendPrivate'
    )

    console.log(cutil.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
