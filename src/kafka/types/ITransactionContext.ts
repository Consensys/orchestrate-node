export interface ITransactionContext {
  from?: string
  to?: string
  gas?: number
  gasPrice?: string
  nonce?: number
  value?: string
  input?: string
  raw?: string
  txHash?: string
}
