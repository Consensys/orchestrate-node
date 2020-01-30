import { Client, credentials as grpcCredentials } from '@grpc/grpc-js'
// tslint:disable-next-line: no-submodule-imports
import { ChannelOptions } from '@grpc/grpc-js/build/src/channel-options'
// tslint:disable-next-line: no-submodule-imports
import { UnaryCallback } from '@grpc/grpc-js/build/src/client'
import { utils } from 'ethers'
import { Method } from 'protobufjs'

import { abi, contractregistry } from '../../stubs'
import { IContract, IRegisterContractRequest } from '../types'

/**
 * Class that enables interaction with the Contract Registry
 */
export class ContractRegistry {
  private readonly rpcClient: Client
  private readonly registry: contractregistry.ContractRegistry

  /**
   * Creates a new ContractRegistry instance
   *
   * @param endpoint - the URL and port of the contract registry RPC
   * @param credentials - gRPC credentials to use, insecure by default
   * @param options - optional gRPC channel options
   */
  constructor(endpoint: string, credentials = grpcCredentials.createInsecure(), options?: ChannelOptions) {
    this.rpcClient = new Client(endpoint, credentials, options)
    this.registry = new contractregistry.ContractRegistry(this.rpc.bind(this) as any)
  }

  /**
   * Registers a new contract in the contract registry
   *
   * @param request - contrect registration request
   */
  public async register(request: IRegisterContractRequest): Promise<void> {
    await this.registry.registerContract({
      contract: {
        id: {
          name: request.name,
          tag: request.tag
        },
        abi: utils.toUtf8Bytes(JSON.stringify(request.abi)),
        bytecode: utils.arrayify(request.bytecode),
        deployedBytecode: utils.arrayify(request.deployedBytecode)
      }
    })
  }

  /**
   * Removes a contract from the contract registry
   *
   * @param name - Contract name
   * @param tag - Contract tag
   */
  public async deregister(name: string, tag?: string): Promise<void> {
    await this.registry.deregisterContract(this.formatContractId(name, tag))
  }

  /**
   * Deletes the artifacts related to a contract but keeps the contract in the contract registry
   *
   * @param bytecodeHash - hash of the bytecode
   */
  public async deleteArtifact(bytecodeHash: string): Promise<void> {
    await this.registry.deleteArtifact({
      bytecodeHash: utils.arrayify(bytecodeHash)
    })
  }

  /**
   * Gets all the contract names from the contract registry
   *
   * @returns the list of contract names
   */
  public async getCatalog(): Promise<string[]> {
    const response = await this.registry.getCatalog({})
    return response.names
  }

  /**
   * Gets a contract
   *
   * @param name - Contract name
   * @param tag - Contract tag
   * @returns the contract details
   */
  public async get(name: string, tag?: string): Promise<IContract> {
    const response = await this.registry.getContract(this.formatContractId(name, tag))
    return this.parseContract(response.contract!)
  }

  /**
   * Gets a contract's ABI
   *
   * @param name - Contract name
   * @param tag - Contract tag
   * @returns the contract ABI
   */
  public async getABI(name: string, tag?: string): Promise<string | null> {
    const response = await this.registry.getContractABI(this.formatContractId(name, tag))
    return response.abi ? JSON.parse(utils.toUtf8String(response.abi)) : null
  }

  /**
   * Gets a contract's bytecode
   *
   * @param name - Contract name
   * @param tag - Contract tag
   * @returns the contract bytecode
   */
  public async getBytecode(name: string, tag?: string): Promise<string | null> {
    const response = await this.registry.getContractBytecode(this.formatContractId(name, tag))
    return response.bytecode ? utils.hexlify(response.bytecode) : null
  }

  /**
   * Gets a contract's deployed bytecode
   *
   * @param name - Contract name
   * @param tag - Contract tag
   * @returns the contract deployed bytecode
   */
  public async getDeployedBytecode(name: string, tag?: string): Promise<string | null> {
    const response = await this.registry.getContractDeployedBytecode(this.formatContractId(name, tag))
    return response.deployedBytecode ? utils.hexlify(response.deployedBytecode) : null
  }

  /**
   * Gets all the tags of a contract by name
   *
   * @param name - Contract name
   * @returns the tags of the contract
   */
  public async getTags(name: string): Promise<string[]> {
    const response = await this.registry.getTags({ name })
    return response.tags
  }

  private rpc(method: Method, requestData: Buffer, callback: UnaryCallback<Buffer>) {
    const serializeF = (request: Buffer) => request
    const deSerializeF = (response: Buffer) => response

    this.rpcClient.makeUnaryRequest(
      `contractregistry.ContractRegistry/${method.name}`,
      serializeF,
      deSerializeF,
      requestData,
      callback
    )
  }

  private formatContractId(name: string, tag?: string) {
    return {
      contractId: {
        name,
        tag
      }
    }
  }

  private parseContract(message: abi.IContract): IContract {
    return {
      name: message.id!.name!,
      tag: message.id!.tag!,
      abi: message.abi ? JSON.parse(utils.toUtf8String(message.abi)) : undefined,
      bytecode: message.bytecode ? utils.hexlify(message.bytecode) : undefined,
      deployedBytecode: message.deployedBytecode ? utils.hexlify(message.deployedBytecode) : undefined
    }
  }
}
