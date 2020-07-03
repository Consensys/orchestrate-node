// tslint:disable: no-console

import * as util from 'util'

import { TxSchedulerTransactions } from '../../../src/http/tx-scheduler/transactions'

export const start = async () => {
  try {
    const txScheduler = new TxSchedulerTransactions('http://localhost:8041')

    // Note: next statement is an example of how to get a transaction by UUID
    const res = await txScheduler.getOne('66060598-1d29-40a7-8385-b1092735bdfb')

    // const res = await txScheduler.search({
    //   idempotencyKeys: ['ExampleStep01', 'ExampleStep02', 'ExampleStep03', 'ExampleStep04', 'ExampleStep06']
    // })

    console.log(util.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
