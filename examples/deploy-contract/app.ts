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
          from: '[ETH_ACCOUNT]',
          contractName: 'SimpleToken',
          maxPriorityFeePerGas: '1500000000'
        }
      },
      'ExampleDeployContract'
    )

    console.log(util.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
