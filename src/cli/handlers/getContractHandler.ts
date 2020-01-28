import { ContractRegistry } from '../../grpc'

import { IGetContractOptions } from './types'

export async function getContractHandler(options: IGetContractOptions) {
  if (!options.name || !options.endpoint) {
    // tslint:disable-next-line: no-console
    console.log('Not all options where submitted. See get-contract --help for usage')
    return
  }

  const registry = new ContractRegistry(options.endpoint)

  try {
    const contract = await registry.get(options.name, options.tag)
    // tslint:disable-next-line: no-console
    console.log(contract)
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.log(`Failed to get conttract: ${error}`)
    return
  }
}
