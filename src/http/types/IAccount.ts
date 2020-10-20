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
