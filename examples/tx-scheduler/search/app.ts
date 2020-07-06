// tslint:disable: no-console

import * as util from 'util'

import { TransactionClient } from '../../../src/http/tx-scheduler'

export const start = async () => {
  try {
    const txScheduler = new TransactionClient('http://localhost:8041')

    // Note: next statement is an example of how to get a transaction by UUID
    // const res = await txScheduler.getOne('87a5722a-0cfb-4cc9-a382-013965b36cb2')

    const res = await txScheduler.search({
      idempotencyKeys: ['ExampleStep01', 'ExampleStep02']
    })

    console.log(util.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
