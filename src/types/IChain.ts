import { ProtocolType } from './ProtocolType'

export interface IChain {
  // nodeId?: string
  // nodeName?: string
  chainId?: string // TODO: To be removed for nodeId and nodeName
  protocol?: ProtocolType
}
