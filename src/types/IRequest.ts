import { IExtraData } from './IExtraData'
import { ProtocolType } from './ProtocolType'

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

interface IContract {
  registry?: string
  name: string
  tag?: string
  abi?: object
  bytecode?: string
  deployedBytecode?: string
  methods?: object[]
  events?: object[]
}

interface IMethod {
  signature: string
  abi?: string
}
