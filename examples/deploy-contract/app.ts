// tslint:disable: no-console

import * as util from 'util'

import { OrchestrateClient } from '../../src'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    const res = await client.deployContract(
      {
        chain: 'besu',
        labels: {},
        params: {
          from: '0x7e654d251da770a068413677967f6d3ea2fea9e4', // Default Orchestrate account in development mode
          contractName: 'SimpleToken'
        }
      },
      'ExampleDeployContract'
    )

    console.log(util.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
