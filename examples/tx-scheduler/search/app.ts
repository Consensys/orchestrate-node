// tslint:disable: no-console

import * as util from 'util'

import { TxSchedulerTransactions } from '../../../src/http/tx-scheduler/transactions'

export const start = async () => {
  try {
    const txScheduler = new TxSchedulerTransactions('http://localhost:8041')

    const res = await txScheduler.search({
      idempotencyKeys: ['qFMvPo5N5OGshCFg']
    })

    console.log(util.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
