import { ParsedQs } from 'qs'

import { IGasPricePolicy } from './IGasPricePolicy'
import { IScheduleResponse } from './ISchedule'
import { ProtocolType } from './ProtocolType'

interface IBaseRequest {
  chain: string
  labels?: object
}

export interface ISendTransactionRequest extends IBaseRequest {
  params: ITransactionParams
}
interface ITransactionParams extends IBaseTransactionParams, IPrivateTransactionParams {
  to: string
  contractName: string
  contractTag?: string
  methodSignature: string
  gasPricePolicy?: IGasPricePolicy
  oneTimeKey?: boolean
}

export interface IDeployContractRequest extends IBaseRequest {
  params: IDeployContractParams
}
interface IDeployContractParams extends IBaseTransactionParams, IPrivateTransactionParams {
  contractName: string
  contractTag?: string
  gasPricePolicy?: IGasPricePolicy
  oneTimeKey?: boolean
}

export interface ISendRawRequest extends IBaseRequest {
  params: {
    raw: string
    retryPolicy: {
      interval: string
    }
  }
}

export interface ITransferRequest extends IBaseRequest {
  params: {
    from: string
    to: string
    value: string
    gas?: string
    gasPrice?: string
    maxFeePerGas?: string
    maxPriorityFeePerGas?: string
    transactionType?: string
    gasPricePolicy?: IGasPricePolicy
  }
}

export interface ISearchTransactionRequest extends ParsedQs {
  idempotency_keys: string[]
}

export interface ITransaction {
  uuid: string
  idempotencyKey: string
  chain: string
  params: IETHTransactionParams
  schedule: IScheduleResponse
  createdAt: Date
}

export interface IETHTransactionParams extends IBaseTransactionParams, IPrivateTransactionParams {
  raw?: string
}

interface IBaseTransactionParams {
  from?: string
  value?: string
  gas?: string
  gasPrice?: string
  maxFeePerGas?: string
  maxPriorityFeePerGas?: string
  transactionType?: string
  accessList?: any[]
  args?: any[]
}

interface IPrivateTransactionParams {
  protocol?: ProtocolType
  privateFrom?: string
  privateFor?: string[]
  mandatoryFor?: string[]
  privacyGroupId?: string
  privacyFlag?: number
}
