// tslint:disable: no-console

import { utils, Wallet } from 'ethers'
import * as cutil from 'util'

import { OrchestrateClient } from '../../src'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    // For development usage only, never expose your private key!
    const privateKey = '0x5FBB50BFF6DFAD35C4A374C9237BA2F7EAED9C6868E0108CB259B62D68029B1A'
    const wallet = new Wallet(privateKey)

    console.log('Generated address:', wallet.address)

    // We send 1 ETH to some other account
    const signedTransaction = await wallet.signTransaction({
      nonce: 0,
      gasLimit: 21000,
      to: '0xdbb881a51cd4023e4400cef3ef73046743f08da3',
      value: utils.parseEther('1').toHexString()
    })

    const res = await client.sendRawTransaction(
      {
        chain: 'besu',
        params: {
          raw: signedTransaction
        }
      },
      'ExampleSendRaw'
    )

    console.log(cutil.inspect(res, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
