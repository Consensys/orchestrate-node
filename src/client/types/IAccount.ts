import { ParsedQs } from 'qs'

export interface IAccount {
  alias?: string
  address: string
  publicKey: string
  compressedPublicKey: string
  tenantID: string
  active: boolean
  attributes?: object
  storeID?: string
  createdAt: Date
  updatedAt: Date
}

export interface ICreateAccountRequest {
  alias?: string
  chain?: string
  attributes?: object
  storeID?: string
}

export interface IImportAccountRequest extends ICreateAccountRequest {
  privateKey: string
  storeID?: string
}

export interface ISearchAccountsRequest extends ParsedQs {
  aliases: string[]
}

export interface IUpdateAccountRequest {
  alias: string
  attributes: object
  storeID?: string
}

export interface ISignMessageRequest {
  message: string
  storeID?: string
}

export interface ISignTypedDataRequest {
  domainSeparator: {
    name: string
    version: string
    chainID: number
    verifyingContract?: string
    salt?: string
  }
  types: {
    [key: string]: {
      name: string
      type: string
    }[]
  }
  message: object
  messageType: string
  storeID?: string
}

export interface IVerifyTypedDataSignatureRequest {
  data: ISignTypedDataRequest
  signature: string
  address: string
}

export interface IVerifyMessageRequest {
  data: string
  signature: string
  address: string
}
