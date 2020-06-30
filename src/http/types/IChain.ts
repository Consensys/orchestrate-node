export interface IRegisterChainRequest {
  name: string
  urls: string[]
}

export interface IChain {
  uuid: string
  name: string
  tenantID: string
  urls: string[]
}
