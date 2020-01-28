import * as grpc from '@grpc/grpc-js'
// tslint:disable-next-line: no-submodule-imports
import { ChannelOptions } from '@grpc/grpc-js/build/src/channel-options'
// tslint:disable-next-line: no-submodule-imports
import { UnaryCallback } from '@grpc/grpc-js/build/src/client'
import { utils } from 'ethers'
import { Method } from 'protobufjs'

import { contractregistry } from '../../stubs'
import { IRegisterContractRequest } from '../types'

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
   */
  public async getCatalog(): Promise<string[]> {
    const response = await this.registry.getCatalog({})
    return response.names
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
}
