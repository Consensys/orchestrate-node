export interface ITransaction {
  data?: string
  raw?: string
  gas?: number
  gasPrice?: string
  nonce?: number
  to?: string
  value?: string
  from: string
}
