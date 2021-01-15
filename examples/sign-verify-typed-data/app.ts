// tslint:disable: no-console

import { ISignTypedDataRequest, OrchestrateClient } from '../../src'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    const privateKey = 'f368b15ea01bafd199d4d39daee2b1d281bf78193c590ef79c233016b3b43f89'
    const account = await client.importAccount({ privateKey })

    const data: ISignTypedDataRequest = {
      messageType: 'Mail',
      domainSeparator: {
        name: 'orchestrate',
        version: 'v2.6.0',
        chainID: 1337,
        verifyingContract: '0x905B88EFf8Bda1543d4d6f4aA05afef143D27E18'
      },
      message: {
        sender: '0x905B88EFf8Bda1543d4d6f4aA05afef143D27E18',
        recipient: '0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73',
        content: 'my content',
        example: {
          test: 'my test example',
          field: 'example field'
        }
      },
      types: {
        Mail: [
          {
            name: 'sender',
            type: 'address'
          },
          {
            name: 'recipient',
            type: 'address'
          },
          {
            name: 'content',
            type: 'string'
          },
          {
            name: 'example',
            type: 'Example'
          }
        ],
        Example: [
          {
            name: 'test',
            type: 'string'
          },
          {
            name: 'field',
            type: 'string'
          }
        ]
      }
    }
    const signature = await client.signTypedData(account.address, data)

    await client.verifyTypedDataSignature({ address: account.address, data, signature })

    console.log('signature ', signature, 'verified successfully')
  } catch (error) {
    console.error(error)
  }
}
