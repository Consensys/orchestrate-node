// tslint:disable: no-console

import { readFileSync } from 'fs'

import { OrchestrateClient } from '../../client'

import { IEndpointOptions, IGetContractOptions, IGetTagsOptions, IRegisterContractOptions } from './types'

export async function getCatalogHandler(options: IEndpointOptions) {
  const registry = new OrchestrateClient(options.endpoint)

  try {
    const catalog = await registry.getContractsCatalog()
    console.log(catalog)
  } catch (error) {
    console.log(`Failed to get catalog: ${error}`)
  }
}

export async function getContractHandler(options: IGetContractOptions) {
  const registry = new OrchestrateClient(options.endpoint)

  try {
    const contract = await registry.getContract(options.name, options.tag)
    console.log(contract)
  } catch (error) {
    console.log(`Failed to get contract: ${error}`)
  }
}

export async function getTagsHandler(options: IGetTagsOptions) {
  const registry = new OrchestrateClient(options.endpoint)

  try {
    const tags = await registry.getContractTags(options.name)
    console.log(tags)
  } catch (error) {
    console.log(`Failed to get tags: ${error}`)
  }
}

export async function registerContractHandler(options: IRegisterContractOptions) {
  const registry = new OrchestrateClient(options.endpoint)

  let artifact

  try {
    artifact = JSON.parse(readFileSync(options.filepath).toString())
    checkArtifact(artifact)

    await registry.registerContract({
      name: options.name,
      tag: options.tag,
      abi: artifact.abi,
      bytecode: artifact.bytecode,
      deployedBytecode: artifact.deployedBytecode
    })

    console.log('Contract successfully registered')
  } catch (error) {
    console.log(`Failed to register contract: ${error}`)
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
