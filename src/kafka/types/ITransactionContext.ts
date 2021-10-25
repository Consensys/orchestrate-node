export interface ITransactionContext {
  from?: string
  to?: string
  gas?: number
  gasPrice?: string
  gasFeeCap?: string
  gasTipCap?: string
  txType?: string
  nonce?: number
  value?: string
  input?: string
  raw?: string
  txHash?: string
}
