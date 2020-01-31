// tslint:disable: no-console

import { utils, Wallet } from 'ethers'

import { Producer } from '../../src'

const wait = async (ms: number) => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export const start = async () => {
  try {
    const producer = new Producer(['localhost:9092'])
    await producer.connect()

    const privateKey = '0x3141592653589793238462643383279502884197169399375105820974944592'
    const wallet = new Wallet(privateKey)

    console.log('Generated address:', wallet.address)

    // Funding the newly created account to be able to send a raw transaction
    await producer.sendTransaction({
      chainName: 'geth',
      from: '0x7e654d251da770a068413677967f6d3ea2fea9e4',
      value: utils.parseEther('1.0').toString(),
      to: wallet.address
    })

    // wait for mining
    await wait(5000)

    // We send 1 ETH to some other account
    const transaction = {
      nonce: 0,
      gasLimit: 21000,
      to: '0x88a5C2d9919e46F883EB62F7b8Dd9d0CC45bc290',
      value: utils.parseEther('1.0')
    }
    const signedTransaction = await wallet.sign(transaction)

    await producer.sendRawTransaction(
      {
        chainName: 'geth',
        signedTransaction
      },
      'topic-tx-sender'
    )
  } catch (error) {
    console.error(error)
  }
}
