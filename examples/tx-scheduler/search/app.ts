// tslint:disable: no-console

import * as util from 'util'

import { TxSchedulerTransactions } from '../../../src/http/tx-scheduler/transactions'

export const start = async () => {
  try {
    const txScheduler = new TxSchedulerTransactions('http://localhost:8041')

    // const res = await txScheduler.getOne('88de2fcb-9e08-4fff-9c18-0c18b9cedf50')

    const res = await txScheduler.search({
      idempotencyKeys: ['ExampleStep01', 'ExampleStep02']
    })

    console.log(util.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
