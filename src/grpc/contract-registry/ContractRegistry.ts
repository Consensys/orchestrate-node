import * as grpc from '@grpc/grpc-js'
import { utils } from 'ethers'
import { Method } from 'protobufjs'

import { contractregistry } from '../../stubs'
import { IRegisterContractRequest } from '../types'

export class ContractRegistry {
  private readonly rpcClient: grpc.Client
  private readonly registry: contractregistry.ContractRegistry

  constructor(endpoint: string, credentials = grpc.credentials.createInsecure()) {
    const Client = grpc.makeClientConstructor({}, 'contractregistry')

    this.rpcClient = new Client(endpoint, credentials)
    this.registry = new contractregistry.ContractRegistry(this.rpc.bind(this) as any)
  }

  public async register(request: IRegisterContractRequest): Promise<any> {
    const message = contractregistry.RegisterContractRequest.create({
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

    return this.registry.registerContract(message)
  }

  public async getCatalog(): Promise<any> {
    const message = contractregistry.GetCatalogRequest.create({})
    return this.registry.getCatalog(message)
  }

  private rpc(method: Method, requestData: any, callback: any) {
    this.rpcClient.makeUnaryRequest(
      `contractregistry.ContractRegistry/${method.name}`, // method.fullName is undefined here for some reason
      arg => arg,
      arg => arg,
      requestData,
      callback
    )
  }
}
