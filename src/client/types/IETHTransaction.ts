export interface IETHTransaction {
  hash?: string
  from?: string
  to?: string
  value?: string
  nonce?: string
  gas?: string
  gasPrice?: string
  maxFeePerGas?: string
  transactionType?: string
  maxPriorityFeePerGas?: string
  accessList?: any[]
  data?: string
  raw?: string
  privateFrom?: string
  privateFor?: string[]
  mandatoryFor?: string[]
  privateGroupId?: string
  privacyFlag?: number
  createdAt?: Date
  updatedAt?: Date
}
