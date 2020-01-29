import { ProtocolType } from './ProtocolType'

export interface IChain {
  chainUUID?: string
  chainName?: string
  protocol?: ProtocolType
}
