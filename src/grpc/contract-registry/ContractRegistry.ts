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
 *
 */
export class ContractRegistry {
  private readonly rpcClient: grpc.Client
  private readonly registry: contractregistry.ContractRegistry

  /**
   *
   * @param endpoint
   * @param credentials
   * @param options
   */
  constructor(endpoint: string, credentials = grpc.credentials.createInsecure(), options?: ChannelOptions) {
    const Client = grpc.makeClientConstructor({}, 'contractregistry')

    this.rpcClient = new Client(endpoint, credentials, options)
    this.registry = new contractregistry.ContractRegistry(this.rpc.bind(this) as any)
  }

  /**
   *
   * @param timeout
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
   *
   * @param request
   */
  public async register(request: IRegisterContractRequest): Promise<void> {
    await this.registry.registerContract({
      contract: {
        id: {
          name: request.name,
          tag: request.tag
        },
        abi: Buffer.from(JSON.stringify(request.abi)),
        bytecode: utils.arrayify(request.bytecode),
        deployedBytecode: utils.arrayify(request.deployedBytecode)
      }
    })
  }

  /**
   *
   * @param request
   */
  public async deregister(request: IContractRequest): Promise<void> {
    await this.registry.deregisterContract(this.formatContractId(request))
  }

  /**
   *
   * @param bytecodeHash
   */
  public async deleteArtifact(bytecodeHash: string): Promise<void> {
    await this.registry.deleteArtifact({
      bytecodeHash: utils.arrayify(bytecodeHash)
    })
  }

  /**
   *
   */
  public async getCatalog(): Promise<string[]> {
    const response = await this.registry.getCatalog({})
    return response.names
  }

  /**
   *
   */
  public async get(request: IContractRequest): Promise<abi.IContract | null> {
    const response = await this.registry.getContract(this.formatContractId(request))
    return response.contract ? response.contract : null
  }

  /**
   *
   */
  public async getABI(request: IContractRequest): Promise<string | null> {
    const response = await this.registry.getContractABI(this.formatContractId(request))
    return response.abi ? JSON.parse(response.abi.toString()) : null
  }

  /**
   *
   */
  public async getBytecode(request: IContractRequest): Promise<string | null> {
    const response = await this.registry.getContractBytecode(this.formatContractId(request))
    return response.bytecode ? utils.hexlify(response.bytecode) : null
  }

  /**
   *
   */
  public async getDeployedBytecode(request: IContractRequest): Promise<string | null> {
    const response = await this.registry.getContractDeployedBytecode(this.formatContractId(request))
    return response.deployedBytecode ? utils.hexlify(response.deployedBytecode) : null
  }

  /**
   *
   */
  public async getTags(contractName: string): Promise<string[]> {
    const response = await this.registry.getTags({ name: contractName })
    return response.tags
  }

  /**
   *
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
   *
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
