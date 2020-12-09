import { ParsedQs } from 'qs'

export interface IAccount {
  alias?: string
  address: string
  publicKey: string
  compressedPublicKey: string
  tenantID: string
  active: boolean
  attributes?: object
  createdAt: Date
  updatedAt: Date
}

export interface ICreateAccountRequest {
  alias?: string
  chain?: string
  attributes?: object
}

export interface IImportAccountRequest extends ICreateAccountRequest {
  privateKey: string
}

export interface ISearchAccountsRequest extends ParsedQs {
  aliases: string[]
}

export interface IUpdateAccountRequest {
  alias: string
  attributes: object
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
    }
  }
  message: object
  messageType: string
}

export interface IVerifyTypedDataSignatureRequest {
  data: ISignTypedDataRequest
  signature: string
  address: string
}

export interface IVerifySignatureRequest {
  data: string
  signature: string
  address: string
}
