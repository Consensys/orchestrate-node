// tslint:disable: no-console

import * as cutil from 'util'

import { ProtocolType, TransactionClient } from '../../src'

export const start = async () => {
  try {
    const txClient = new TransactionClient('http://localhost:8041')

    const res = await txClient.deployContract(
      {
        chain: 'besu',
        params: {
          contractName: 'SimpleToken',
          from: '0x7e654d251da770a068413677967f6d3ea2fea9e4', // Default Orchestrate account in development mode
          protocol: ProtocolType.Orion,
          privateFor: ['QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc='], // Orion default node 2 public key in development mode
          privateFrom: 'BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=' // Orion default node 1 public key in development mode
        }
      },
      'ExampleSendPrivate'
    )

    console.log(cutil.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
