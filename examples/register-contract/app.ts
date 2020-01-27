// import { ContractRegistry } from '../../lib'
import { ContractRegistry } from '../../src'

export const start = async () => {
  try {
    const contractRegistry = new ContractRegistry('localhost:8020')
    // await contractRegistry.connect()

    const response = await contractRegistry.register({
      name: 'myContract',
      tag: 'v1',
      abi: [
        {
          constant: true,
          inputs: [],
          name: 'name',
          outputs: [
            {
              internalType: 'string',
              name: '',
              type: 'string'
            }
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function'
        }
      ],
      bytecode: '0xfefe',
      deployedBytecode: '0xdede'
    })

    // tslint:disable-next-line: no-console
    console.log(response)
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.error(error)
  }
}
