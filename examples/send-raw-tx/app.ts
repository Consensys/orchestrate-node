// tslint:disable: no-console

import { utils, Wallet } from 'ethers'
import * as cutil from 'util'

import { TransactionClient } from '../../src'

export const start = async () => {
  try {
    const txClient = new TransactionClient('http://localhost:8031')

    // For development usage only, never expose your private key!
    const privateKey = '0x56202652fdffd802b7252a456dbd8f3ecc0352bbde76c23b40afe8aebd714e2e'
    const wallet = new Wallet(privateKey)

    console.log('Generated address:', wallet.address)

    // We send 1 ETH to some other account
    const signedTransaction = await wallet.sign({
      nonce: 0,
      gasLimit: 21000,
      to: '0xdbb881a51cd4023e4400cef3ef73046743f08da3',
      value: utils.parseEther('1')
    })

    const res = await txClient.sendRaw(
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
