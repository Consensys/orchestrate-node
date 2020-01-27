import { ChannelCredentials, Client } from '@grpc/grpc-js'
// tslint:disable-next-line: no-submodule-imports
import { ClientOptions } from '@grpc/grpc-js/build/src/client'
import { utils } from 'ethers'
import { Method } from 'protobufjs'

import { contractregistry } from '../../stubs'
import { IRegisterContractRequest } from '../types'

export class ContractRegistry {
  private readonly rpcClient: Client
  private readonly contractRegistryService: contractregistry.ContractRegistry

  constructor(
    endpoint: string,
    credentials: ChannelCredentials = ChannelCredentials.createInsecure(),
    options?: ClientOptions
  ) {
    this.rpcClient = new Client(endpoint, credentials, options)
    this.contractRegistryService = new contractregistry.ContractRegistry(this.rpc.bind(this) as any)
  }

  public async connect() {
    return new Promise((resolve, reject) => {
      this.rpcClient.waitForReady(500000, err => {
        if (err) {
          reject(err)
        }

        resolve()
      })
    })
  }

  public async register(request: IRegisterContractRequest): Promise<contractregistry.RegisterContractResponse> {
    const response = await this.contractRegistryService.registerContract({
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

    return response
  }

  private rpc(method: any, requestData: Uint8Array, callback: (err: any, resp: any) => void) {
    this.rpcClient.makeUnaryRequest(
      `ContractRegistry/${method.name}`,
      requestBuffer => requestBuffer as Buffer,
      responseBuffer => responseBuffer,
      requestData,
      (err, resp) => {
        // tslint:disable-next-line: no-console
        console.log(resp)
        callback(err, Buffer.from('resp'))
      }
    )
  }
}
