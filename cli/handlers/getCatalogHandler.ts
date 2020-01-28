import { ContractRegistry } from '../../src/grpc'

import { IEndpointOptions } from './types'

export async function getCatalogHandler(options: IEndpointOptions) {
  if (!options.endpoint) {
    // tslint:disable-next-line: no-console
    console.log('No endpoint specified. See get-catalog --help for usage')
    return
  }

  const registry = new ContractRegistry(options.endpoint)

  try {
    const catalog = await registry.getCatalog()
    // tslint:disable-next-line: no-console
    console.log(catalog)
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.log(`Failed to get catalog: ${error}`)
    return
  }
}
