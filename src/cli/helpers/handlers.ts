// tslint:disable: no-console

import { readFileSync } from 'fs'

import { ContractRegistry } from '../../grpc'
import { AccountGenerator } from '../../kafka'

import {
  IEndpointOptions,
  IGenerateAccountsOptions,
  IGetContractOptions,
  IGetTagsOptions,
  IRegisterContractOptions
} from './types'

export async function getCatalogHandler(options: IEndpointOptions) {
  const registry = new ContractRegistry(options.endpoint)

  try {
    const catalog = await registry.getCatalog()
    console.log(catalog)
  } catch (error) {
    console.log(`Failed to get catalog: ${error}`)
  }
}

export async function getContractHandler(options: IGetContractOptions) {
  const registry = new ContractRegistry(options.endpoint)

  try {
    const contract = await registry.get(options.name, options.tag)
    console.log(contract)
  } catch (error) {
    console.log(`Failed to get contract: ${error}`)
  }
}

export async function getTagsHandler(options: IGetTagsOptions) {
  const registry = new ContractRegistry(options.endpoint)

  try {
    const tags = await registry.getTags(options.name)
    console.log(tags)
  } catch (error) {
    console.log(`Failed to get tags: ${error}`)
  }
}

export async function registerContractHandler(options: IRegisterContractOptions) {
  const registry = new ContractRegistry(options.endpoint)

  let artifact

  try {
    artifact = JSON.parse(readFileSync(options.filepath).toString())
    checkArtifact(artifact)

    await registry.register({
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

export async function generateAccountHandler(options: IGenerateAccountsOptions) {
  const accountGenerator = new AccountGenerator([options.endpoint])

  try {
    await accountGenerator.connect()
    const address = await accountGenerator.generateAccount({
      chain: options.chain,
      value: options.value
    })
    console.log(address)
  } catch (error) {
    console.log(`Failed to generate account: ${error}`)
  } finally {
    await accountGenerator.disconnect()
    process.exit()
  }
}
