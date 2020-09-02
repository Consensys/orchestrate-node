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
  }
}

export interface ITransferRequest extends IBaseRequest {
  params: {
    from: string
    to: string
    value: string
    gas?: string
    gasPrice?: string
    gasPricePolicy?: IGasPricePolicy
  }
}

export interface ISearchRequest extends ParsedQs {
  idempotency_keys: string[]
}

export interface ITransactionResponse {
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
  args?: any[]
}

interface IPrivateTransactionParams {
  protocol?: ProtocolType
  privateFrom?: string
  privateFor?: string[]
  privacyGroupId?: string
}
