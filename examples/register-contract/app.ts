// tslint:disable: no-console

import { ContractRegistry } from '../../src'
import { SimpleToken } from '../artifacts/SimpleToken'

export const start = async () => {
  try {
    const contractRegistry = new ContractRegistry('localhost:8020')

    await contractRegistry.register({
      name: 'SimpleToken',
      abi: SimpleToken.abi,
      bytecode: SimpleToken.bytecode,
      deployedBytecode: SimpleToken.deployedBytecode
    })

    console.log(await contractRegistry.getCatalog())
  } catch (error) {
    console.error(error)
  }
}
