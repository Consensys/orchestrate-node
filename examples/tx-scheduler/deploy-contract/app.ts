// tslint:disable: no-console

import * as util from 'util'

import { TxSchedulerTransactions } from '../../../src/http/tx-scheduler'

export const start = async () => {
  try {
    const txScheduler = new TxSchedulerTransactions('http://localhost:8041')

    const res = await txScheduler.deployContract(
      {
        chain: 'MyChain',
        labels: {},
        params: {
          from: '0x6009608a02a7a15fd6689d6dad560c44e9ab61ff',
          contractName: 'SimpleToken'
        }
      },
      'ExampleStep01'
    )

    console.log(util.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
