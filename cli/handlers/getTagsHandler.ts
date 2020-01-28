import { ContractRegistry } from '../../src/grpc'

import { IGetTagsOptions } from './types'

export async function getTagsHandler(options: IGetTagsOptions) {
  if (!options.name || !options.endpoint) {
    // tslint:disable-next-line: no-console
    console.log('Not all options where submitted. See get-tags --help for usage')
    return
  }

  const registry = new ContractRegistry(options.endpoint)

  try {
    const tags = await registry.getTags(options.name)
    // tslint:disable-next-line: no-console
    console.log(tags)
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.log(`Failed to get tags: ${error}`)
    return
  }
}
