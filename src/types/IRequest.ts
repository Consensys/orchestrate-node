import { IExtraData } from './IExtraData'

export interface IRequest {
  chainId?: string
  protocol?: IProtocol
  hash?: string
  contract?: IContract
  method?: IMethod
  args?: any[]
  requestId?: string
  extraData?: IExtraData
}

interface IProtocol {
  type: ProtocolType
  extra?: IExtraData
}

export enum ProtocolType {
  EthereumConstantinople = 0,
  QuorumConstellation = 1,
  QuorumTessera = 2,
  BesuOrion = 3
}

export interface IContract {
  registry?: string
  name: string
  tag?: string
  abi?: object
  bytecode?: string
  deployedBytecode?: string
  methods?: object[]
  events?: object[]
}

export interface IMethod {
  signature: string
  abi?: string
}
