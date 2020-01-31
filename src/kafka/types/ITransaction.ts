export interface ITransaction {
  data?: string
  gas?: number
  gasPrice?: string
  nonce?: number
  to?: string
  value?: string
  from: string
}
