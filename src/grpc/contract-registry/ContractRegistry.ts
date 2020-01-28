import * as grpc from '@grpc/grpc-js'
// tslint:disable-next-line: no-submodule-imports
import { ChannelOptions } from '@grpc/grpc-js/build/src/channel-options'
// tslint:disable-next-line: no-submodule-imports
import { UnaryCallback } from '@grpc/grpc-js/build/src/client'
import { utils } from 'ethers'
import { Method } from 'protobufjs'

import { abi, contractregistry } from '../../stubs'
import { IRegisterContractRequest } from '../types'
import { IContractRequest } from '../types/IContractRequest'

/**
 * Class that enables interaction with the Contract Registry
 */
export class ContractRegistry {
  private readonly rpcClient: grpc.Client
  private readonly registry: contractregistry.ContractRegistry

  /**
   * Creates a new ContractRegistry instance
   *
   * @param endpoint - the URL and port of the contract registry RPC
   * @param credentials - gRPC credentials to use, insecure by default
   * @param options - optional gRPC channel options
   */
  constructor(endpoint: string, credentials = grpc.credentials.createInsecure(), options?: ChannelOptions) {
    const Client = grpc.makeClientConstructor({}, 'contractregistry')

    this.rpcClient = new Client(endpoint, credentials, options)
    this.registry = new contractregistry.ContractRegistry(this.rpc.bind(this) as any)
  }

  /**
   * Waits for a connection or time out
   *
   * @param timeout - time out value in milliseconds
   */
  public async connect(timeout: number): Promise<void> {
    return new Promise((resolve, reject) => {
      this.rpcClient.waitForReady(timeout, (error?: Error) => {
        if (error) {
          reject(error)
        }

        resolve()
      })
    })
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
   * @param request - Contract details
   */
  public async deregister(request: IContractRequest): Promise<void> {
    await this.registry.deregisterContract(this.formatContractId(request))
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
   * @param request - Contract details
   * @returns the contract details
   */
  public async get(request: IContractRequest): Promise<abi.IContract | null> {
    const response = await this.registry.getContract(this.formatContractId(request))
    return response.contract ? response.contract : null
  }

  /**
   * Gets a contract's ABI
   *
   * @param request - Contract details
   * @returns the contract ABI
   */
  public async getABI(request: IContractRequest): Promise<string | null> {
    const response = await this.registry.getContractABI(this.formatContractId(request))
    return response.abi ? JSON.parse(utils.toUtf8String(response.abi)) : null
  }

  /**
   * Gets a contract's bytecode
   *
   * @param request - Contract details
   * @returns the contract bytecode
   */
  public async getBytecode(request: IContractRequest): Promise<string | null> {
    const response = await this.registry.getContractBytecode(this.formatContractId(request))
    return response.bytecode ? utils.hexlify(response.bytecode) : null
  }

  /**
   * Gets a contract's deployed bytecode
   *
   * @param request - Contract details
   * @returns the contract deployed bytecode
   */
  public async getDeployedBytecode(request: IContractRequest): Promise<string | null> {
    const response = await this.registry.getContractDeployedBytecode(this.formatContractId(request))
    return response.deployedBytecode ? utils.hexlify(response.deployedBytecode) : null
  }

  /**
   * Gets all the tags of a contract by name
   *
   * @param contractName - Contract name
   * @returns the tags of the contract
   */
  public async getTags(contractName: string): Promise<string[]> {
    const response = await this.registry.getTags({ name: contractName })
    return response.tags
  }

  /**
   * Retrieve methods using 4 bytes unique selector
   *
   * @param account - account address
   * @param selector - selector
   * @param nodeId - node id
   * @param nodeName - node name
   */
  public async getMethodsBySelector(
    account: string,
    selector: string,
    nodeId?: string,
    nodeName?: string
  ): Promise<contractregistry.IGetMethodsBySelectorResponse> {
    return this.registry.getMethodsBySelector({
      accountInstance: { account: { raw: utils.arrayify(account) }, chain: { nodeId, nodeName } },
      selector: Buffer.from(selector)
    })
  }

  /**
   * Retrieve events using hash of signature
   *
   * @param account - account address
   * @param sigHash - hash of the signature of the event
   * @param nodeId - node id
   * @param nodeName - node name
   * @param indexedInputCount - count of indexed inputs in event abi
   */
  public async getEventsBySigHash(
    account: string,
    sigHash: string,
    nodeId?: string,
    nodeName?: string,
    indexedInputCount?: number
  ): Promise<contractregistry.IGetEventsBySigHashResponse> {
    return this.registry.getEventsBySigHash({
      accountInstance: { account: { raw: utils.arrayify(account) }, chain: { nodeId, nodeName } },
      sigHash: utils.arrayify(sigHash),
      indexedInputCount
    })
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

  private formatContractId(request: IContractRequest) {
    return {
      contractId: {
        name: request.name,
        tag: request.tag
      }
    }
  }
}
