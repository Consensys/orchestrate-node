// tslint:disable: no-console

import { OrchestrateClient } from '../../src'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    const privateKey = 'f368b15ea01bafd199d4d39daee2b1d281bf78193c590ef79c233016b3b43f81'
    const account = await client.importAccount({ privateKey })

    const data = 'my data to sign'
    const signature = await client.sign(account.address, data)

    await client.verifySignature({
      address: account.address,
      data,
      signature
    })

    console.log('signature ', signature, 'verified successfully')
  } catch (error) {
    console.error(error)
  }
}
