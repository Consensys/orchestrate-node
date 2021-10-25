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
  privateGroupId?: string
  createdAt?: Date
  updatedAt?: Date
}
