export interface IETHTransaction {
  hash: string
  from: string
  to: string
  value: string
  nonce: string
  gas: string
  gasPrice: string
  data: string
  raw: string
  privateFrom: string
  privateFor: string[]
  privateGroupId: string
  createdAt: Date
  updatedAt: Date
}
