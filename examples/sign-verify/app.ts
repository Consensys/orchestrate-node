// tslint:disable: no-console

import { OrchestrateClient } from '../../src'

function convertToHex(str: string): string {
  let hex = ''
  for (let i = 0; i < str.length; i++) {
    hex += '' + str.charCodeAt(i).toString(16)
  }

  return '0x' + hex
}

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    const privateKey = 'f368b15ea01bafd199d4d39daee2b1d281bf78193c590ef79c233016b3b43f81'
    const account = await client.importAccount({ privateKey })

    const data = convertToHex('my data to sign')
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
