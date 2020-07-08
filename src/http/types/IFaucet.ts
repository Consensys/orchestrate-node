export interface IRegisterFaucetRequest {
  name: string
  creditorAccount: string
  chainRule: string
  cooldown: string
  amount: string
  maxBalance: string
}

export interface IFaucet {
  uuid: string
  name: string
  tenantID: string
  chainRule: string
  creditorAccount: string
  cooldown: string
  amount: string
  maxBalance: string
  createdAt: Date
  updatedAt: Date
}
