import { ChannelCredentials, Client, Metadata } from '@grpc/grpc-js'
// tslint:disable-next-line: no-submodule-imports
import { ChannelOptions } from '@grpc/grpc-js/build/src/channel-options'
// tslint:disable-next-line: no-submodule-imports
import { UnaryCallback } from '@grpc/grpc-js/build/src/client'
import { Reader, Writer } from 'protobufjs'

import { abi, contractregistry } from '../../stubs'
import { IContract, IRegisterContractRequest } from '../types'

/**
 * Class that enables interaction with the Contract Registry
 */
export class ContractRegistry {
  private readonly rpcClient: Client

  /**
   * Creates a new ContractRegistry instance
   *
   * @param endpoint - the URL and port of the contract registry RPC
   * @param options - optional gRPC channel options
   */
  constructor(endpoint: string, options?: ChannelOptions) {
    this.rpcClient = new Client(endpoint, ChannelCredentials.createInsecure(), options)
  }

  /**
   * Registers a new contract in the contract registry
   *
   * @param request - contract registration request
   */
  public async register(request: IRegisterContractRequest): Promise<contractregistry.RegisterContractResponse> {
    const response = await this.executeCall(
      contractregistry.RegisterContractRequest.encode,
      contractregistry.RegisterContractResponse.decode,
      {
        contract: {
          id: {
            name: request.name,
            tag: request.tag
          },
          abi: JSON.stringify(request.abi),
          bytecode: request.bytecode,
          deployedBytecode: request.deployedBytecode
        }
      },
      contractregistry.ContractRegistry.prototype.registerContract.name,
      request.authToken
    )

    return response as contractregistry.RegisterContractResponse
  }

  /**
   * Gets all the contract names from the contract registry
   *
   * @param authToken - authorization token
   * @returns the list of contract names
   */
  public async getCatalog(authToken?: string): Promise<string[]> {
    const response = (await this.executeCall(
      contractregistry.GetCatalogRequest.encode,
      contractregistry.GetCatalogResponse.decode,
      {},
      contractregistry.ContractRegistry.prototype.getCatalog.name,
      authToken
    )) as contractregistry.GetCatalogResponse

    return response.names
  }

  /**
   * Gets a contract
   *
   * @param name - Contract name
   * @param tag - Contract tag
   * @param authToken - authorization token
   * @returns the contract details
   */
  public async get(name: string, tag?: string, authToken?: string): Promise<IContract> {
    const response = (await this.executeCall(
      contractregistry.GetContractRequest.encode,
      contractregistry.GetContractResponse.decode,
      this.formatContractId(name, tag),
      contractregistry.ContractRegistry.prototype.getContract.name,
      authToken
    )) as contractregistry.GetContractResponse

    return this.parseContract(response.contract!)
  }

  /**
   * Gets a contract's ABI
   *
   * @param name - Contract name
   * @param tag - Contract tag
   * @param authToken - authorization token
   * @returns the contract ABI
   */
  public async getABI(name: string, tag?: string, authToken?: string): Promise<string> {
    const response = (await this.executeCall(
      contractregistry.GetContractRequest.encode,
      contractregistry.GetContractABIResponse.decode,
      this.formatContractId(name, tag),
      contractregistry.ContractRegistry.prototype.getContractABI.name,
      authToken
    )) as contractregistry.GetContractABIResponse

    return JSON.parse(response.abi)
  }

  /**
   * Gets a contract's bytecode
   *
   * @param name - Contract name
   * @param tag - Contract tag
   * @param authToken - authorization token
   * @returns the contract bytecode
   */
  public async getBytecode(name: string, tag?: string, authToken?: string): Promise<string> {
    const response = (await this.executeCall(
      contractregistry.GetContractRequest.encode,
      contractregistry.GetContractBytecodeResponse.decode,
      this.formatContractId(name, tag),
      contractregistry.ContractRegistry.prototype.getContractBytecode.name,
      authToken
    )) as contractregistry.GetContractBytecodeResponse

    return response.bytecode
  }

  /**
   * Gets a contract's deployed bytecode
   *
   * @param name - Contract name
   * @param tag - Contract tag
   * @param authToken - authorization token
   * @returns the contract deployed bytecode
   */
  public async getDeployedBytecode(name: string, tag?: string, authToken?: string): Promise<string> {
    const response = (await this.executeCall(
      contractregistry.GetContractRequest.encode,
      contractregistry.GetContractDeployedBytecodeResponse.decode,
      this.formatContractId(name, tag),
      contractregistry.ContractRegistry.prototype.getContractDeployedBytecode.name,
      authToken
    )) as contractregistry.GetContractDeployedBytecodeResponse

    return response.deployedBytecode
  }

  /**
   * Gets all the tags of a contract by name
   *
   * @param name - Contract name
   * @param authToken - authorization token
   * @returns the tags of the contract
   */
  public async getTags(name: string, authToken?: string): Promise<string[]> {
    const response = (await this.executeCall(
      contractregistry.GetTagsRequest.encode,
      contractregistry.GetTagsResponse.decode,
      { name },
      contractregistry.ContractRegistry.prototype.getTags.name,
      authToken
    )) as contractregistry.GetTagsResponse

    return response.tags
  }

  private executeCall(
    encodeFunc: (request: any) => Writer,
    decodeFunc: (response: Reader | Uint8Array) => any,
    request: any,
    methodName: string,
    authToken?: string
  ) {
    return new Promise((resolve, reject) => {
      const requestData = encodeFunc(request).finish() as Buffer
      const callback: UnaryCallback<Buffer> = (err, responseBuffer) => {
        if (err) {
          return reject(err)
        }
        return resolve(decodeFunc(responseBuffer as Uint8Array))
      }

      this.rpc(methodName, requestData, callback, authToken)
    })
  }

  private rpc(method: string, requestData: Buffer, callback: UnaryCallback<Buffer>, authToken?: string) {
    const serializeF = (request: Buffer) => request
    const deSerializeF = (response: Buffer) => response

    const metadata = new Metadata()
    if (authToken) {
      metadata.set('Authorization', authToken)
    }

    this.rpcClient.makeUnaryRequest(
      `contractregistry.ContractRegistry/${method}`,
      serializeF,
      deSerializeF,
      requestData,
      metadata,
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
      abi: JSON.parse(message.abi!),
      bytecode: message.bytecode!,
      deployedBytecode: message.deployedBytecode!
    }
  }
}
