export interface IRegisterChainRequest {
  name: string
  urls: string[]
  listener?: {
    depth?: number
    fromBlock?: string
    backoffDuration?: string
    externalTxEnabled?: boolean
  }
  privateTxManager?: {
    url: string
    type: string
  }
}

export interface IChain {
  uuid: string
  name: string
  tenantID: string
  urls: string[]
  listenerDepth?: number
  listenerCurrentBlock?: number
  listenerStartingBlock?: number
  listenerBackOffDuration?: string
  ListenerExternalTxEnabled?: boolean
  privateTxManagers?: IPrivateTxManager[]
  createdAt: Date
  updatedAt: Date
}

export interface IPrivateTxManager {
  uuid: string
  ChainUUID: string
  url: string
  type: string
  createAt: string
}
