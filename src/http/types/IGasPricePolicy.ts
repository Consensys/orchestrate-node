import { Priority } from './Priority'

export interface IGasPricePolicy {
  priority?: Priority
  retryPolicy?: IRetryPolicy
}

export interface IRetryPolicy {
  increment: number
  limit: number
  interval: string
}
