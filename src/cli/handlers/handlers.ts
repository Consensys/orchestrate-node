import { readFileSync } from 'fs'

import { ContractRegistry } from '../../grpc'

import { IEndpointOptions, IGetContractOptions, IGetTagsOptions, IRegisterContractOptions } from './types'

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
    console.log(`Failed to get contract: ${error}`)
    return
  }
}

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

export async function registerContractHandler(options: IRegisterContractOptions) {
  if (!options.name || !options.filePath || !options.endpoint) {
    // tslint:disable-next-line: no-console
    console.log('Not all options where submitted. See register-contract --help for usage')
    return
  }

  const registry = new ContractRegistry(options.endpoint)

  let artifact

  try {
    artifact = JSON.parse(readFileSync(options.filePath).toString())
    checkArtifact(artifact)
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.log(`Failed to import artifacts: ${error}`)
    return
  }

  try {
    const response = await registry.register({
      name: options.name,
      tag: options.tag,
      abi: artifact.abi,
      bytecode: artifact.bytecode,
      deployedBytecode: artifact.deployedBytecode
    })

    // tslint:disable-next-line: no-console
    console.log(response)
  } catch (error) {
    // tslint:disable-next-line: no-console
    console.log(`Failed to register contract: ${error}`)
    return
  }
}

const checkArtifact = (artifact: any) => {
  if (!artifact.abi || typeof artifact.abi !== 'object') {
    throw new Error('No abi in artifact')
  }

  if (!artifact.deployedBytecode || typeof artifact.deployedBytecode !== 'string') {
    throw new Error('No deployedBytecode in artifact')
  }

  if (!artifact.bytecode || typeof artifact.bytecode !== 'string') {
    throw new Error('No bytecode in artifact')
  }

  return true
}
