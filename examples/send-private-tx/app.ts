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
          protocol: ProtocolType.EEA,
          privateFor: ['QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc='], // EEA default node 2 public key in development mode
          privateFrom: 'BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=' // EEA default node 1 public key in development mode
        }
      },
      'ExampleSendPrivate'
    )

    console.log(cutil.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
