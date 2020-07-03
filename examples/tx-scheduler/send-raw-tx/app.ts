// tslint:disable: no-console

import { utils, Wallet } from 'ethers'
import * as cutil from 'util'

import { TxSchedulerTransactions } from '../../../src/http/tx-scheduler/transactions'

export const start = async () => {
  try {
    const txScheduler = new TxSchedulerTransactions('http://localhost:8041')

    // For development usage only, never expose your private key!
    const privateKey = '0xc4b172e72033581bc41c36fa0448fcf031e9a31c4a3e300e541802dfb7248307'
    const wallet = new Wallet(privateKey)

    console.log('Generated address:', wallet.address)

    // We send 1 ETH to some other account
    const signedTransaction = await wallet.sign({
      nonce: 0,
      gasLimit: 21000,
      to: '0x7e654d251da770a068413677967f6d3ea2fea9e5',
      value: utils.parseEther('1')
    })

    const res = await txScheduler.sendRaw(
      {
        chain: 'MyChain',
        params: {
          raw: signedTransaction
        }
      },
      'ExampleStep06'
    )

    console.log(cutil.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
