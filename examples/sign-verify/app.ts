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

    const privateKey = '0xf368b15ea01bafd199d4d39daee2b1d281bf78193c590ef79c233016b3b43f81'
    const account = await client.importAccount({ privateKey })

    const message = convertToHex('my data to sign')
    const signature = await client.signMessage(account.address, { message })

    await client.verifyMessage({
      address: account.address,
      data: message,
      signature
    })

    console.log('signature ', signature, 'verified successfully')
  } catch (error) {
    console.error(error)
  }
}
