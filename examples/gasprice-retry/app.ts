// tslint:disable: no-console

import * as cutil from 'util'

import { OrchestrateClient, Priority } from '../../src'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    // Try to send a transfer transaction with a lower gas price than the network requires.
    // This strategy might lower the transaction fee but also increases the risk of not being mined.
    // To mitigate this risk we also add a retry policy of the gas price.
    // The low priority will set the gas price 20% lower than what the node return as gas price of the network.
    // The retry policy will increment the gas price by 10% every 10s until reaching 40% increase.
    const res = await client.transfer(
      {
        chain: 'besu',
        params: {
          from: '[ETH_ACCOUNT]',
          to: '0x6009608a02a7a15fd6689d6dad560c44e9ab61ff',
          value: '0x5F5E100',
          gasPricePolicy: {
            priority: Priority.Low,
            retryPolicy: {
              increment: 0.1,
              limit: 0.4,
              interval: '10s'
            }
          }
        }
      },
      'ExampleTransferWithGasPriceRetryPolicy'
    )

    console.log(cutil.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
