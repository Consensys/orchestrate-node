import { ParsedQs } from 'qs'

import { IScheduleResponse } from './ISchedule'
import { Priority } from './Priority'
import { ProtocolType } from './ProtocolType'

export interface ISendTransactionRequest extends IBaseRequest {
  params: ITransactionParams
}

export interface IDeployContractRequest extends IBaseRequest {
  params: IDeployContractParams
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
    priority?: Priority
  }
}

export interface ISearchRequest extends ParsedQs {
  idempotency_keys: string[]
}

export interface ITransactionResponse {
  uuid: string
  idempotencyKey: string
  params: IETHTransactionParams
  schedule: IScheduleResponse
  createdAt: Date
}

interface IBaseRequest {
  chain: string
  labels?: object
}

interface ITransactionParams extends IBaseTransactionParams, IPrivateTransactionParams {
  methodSignature: string
  oneTimeKey?: boolean
  priority?: Priority
}

interface IDeployContractParams extends IBaseTransactionParams, IPrivateTransactionParams {
  contractName: string
  contractTag?: string
  oneTimeKey?: boolean
  priority?: Priority
}

export interface IETHTransactionParams extends IBaseTransactionParams, IPrivateTransactionParams {
  raw?: string
  nonce?: string
}

interface IBaseTransactionParams {
  from?: string
  to?: string
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
