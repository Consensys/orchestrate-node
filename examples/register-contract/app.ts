// tslint:disable: no-console

import { OrchestrateClient } from '../../src'
import { SimpleToken } from '../artifacts/SimpleToken'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    const contract = await client.registerContract({
      name: 'SimpleToken',
      abi: SimpleToken.abi,
      bytecode: SimpleToken.bytecode,
      deployedBytecode: SimpleToken.deployedBytecode
    })

    console.log(contract)
  } catch (error) {
    console.error(error)
  }
}
