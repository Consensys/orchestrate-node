/**
 * Class that enables interaction with the TxScheduler ('/transactions')
 */

import { HttpClient } from '../client/http'
import { IHttpGETRequest, IHttpPOSTRequest, IHttpResponse } from '../types'
import {
  IDeployContractRequest,
  ISearchRequest,
  ISendTransactionRequest,
  ITransactionResponse
} from '../types/ITransaction'

export class TxSchedulerTransactions {
  private client: HttpClient

  /**
   * Creates a new TxSchedulerTransaction instance
   *
   * @param txSchedulerHost - URL and port of the Transaction Scheduler service
   */
  constructor(txSchedulerHost: string) {
    this.client = new HttpClient({
      host: txSchedulerHost
    })
  }

  /**
   * Fetch a transaction by UUID
   * @param txUUID transaction UUID
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async getOne(txUUID: string, authToken?: string): Promise<ITransactionResponse> {
    const req: IHttpGETRequest = {
      path: `/transactions/${txUUID}`,
      authToken
    }

    try {
      const res: IHttpResponse = await this.client.get(req)
      return res.data
    } catch (e) {
      throw e
    }
  }

  /**
   * Search for transactions
   * @param searchRequest transaction request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async search(searchRequest: ISearchRequest, authToken?: string): Promise<ITransactionResponse> {
    const req: IHttpGETRequest = {
      path: '/transactions',
      query: searchRequest,
      authToken
    }

    try {
      const res: IHttpResponse = await this.client.get(req)
      return res.data
    } catch (e) {
      throw e
    }
  }

  /**
   * Send contract transaction request
   * @param sendRequest transaction request data
   * @param idempotencyKey Optipnal transaction unique identifier
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async send(
    sendRequest: ISendTransactionRequest,
    idempotencyKey?: string,
    authToken?: string
  ): Promise<ITransactionResponse> {
    const req: IHttpPOSTRequest = {
      path: '/transactions/send',
      data: sendRequest,
      authToken
    }

    const headers: { 'X-Idempotency-Key'?: string } = {}
    if (idempotencyKey) {
      headers['X-Idempotency-Key'] = idempotencyKey
    }

    try {
      const res: IHttpResponse = await this.client.post(req, headers)
      return res.data
    } catch (e) {
      throw e
    }
  }

  /**
   * Deploy contract request
   * @param deployRequest deploy contract request data
   * @param idempotencyKey Optipnal transaction unique identifier
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async deployContract(
    deployRequest: IDeployContractRequest,
    idempotencyKey?: string,
    authToken?: string
  ): Promise<ITransactionResponse> {
    const req: IHttpPOSTRequest = {
      path: '/transactions/deploy-contract',
      data: deployRequest,
      authToken
    }

    const headers: { 'X-Idempotency-Key'?: string } = {}
    if (idempotencyKey) {
      headers['X-Idempotency-Key'] = idempotencyKey
    }

    try {
      const res: IHttpResponse = await this.client.post(req, headers)
      return res.data
    } catch (e) {
      throw e
    }
  }
}
