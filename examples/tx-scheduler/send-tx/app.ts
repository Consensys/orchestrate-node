// tslint:disable: no-console

import * as util from 'util'

import { TxSchedulerTransactions } from '../../../src/http/tx-scheduler'

export const start = async () => {
  try {
    const txScheduler = new TxSchedulerTransactions('http://localhost:8041')

    const res = await txScheduler.send(
      {
        chain: 'MyChain',
        params: {
          from: '0x6009608a02a7a15fd6689d6dad560c44e9ab61ff',
          to: '0x4a435585d27cd7e6dae2c714be8e414b5fd7d257',
          methodSignature: 'transfer(address,uint256)',
          args: ['0x7e654d251da770a068413677967f6d3ea2fea9e5', 5000]
        }
      },
      'ExampleStep02'
    )

    console.log(util.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
