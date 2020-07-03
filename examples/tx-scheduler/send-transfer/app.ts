// tslint:disable: no-console

import * as cutil from 'util'

import { TxSchedulerTransactions } from '../../../src/http/tx-scheduler/transactions'

export const start = async () => {
  try {
    const txScheduler = new TxSchedulerTransactions('http://localhost:8041')

    const res = await txScheduler.sendTransfer({
      chain: 'MyChain',
      params: {
        from: '0x6009608a02a7a15fd6689d6dad560c44e9ab61ff',
        to: '0x4a435585d27cd7e6dae2c714be8e414b5fd7d257',
        value: '100',
        gas: '21000'
      }
    })

    console.log(cutil.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
