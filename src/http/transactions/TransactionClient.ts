/**
 * Class that enables interaction with the Transaction Scheduler ('/transactions')
 */

import { HttpClient } from '../HttpClient'
import {
  IDeployContractRequest,
  ISearchRequest,
  ISendRawRequest,
  ISendTransactionRequest,
  ITransaction,
  ITransferRequest
} from '../types'
import { IHttpGETRequest, IHttpPOSTRequest, IHttpResponse } from '../types/IHttpClient'

export class TransactionClient {
  private client: HttpClient

  /**
   * Creates a new TransactionClient instance
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
   *
   * @param txUUID transaction UUID
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async get(txUUID: string, authToken?: string): Promise<ITransaction> {
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
   *
   * @param searchRequest transaction request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async search(searchRequest: ISearchRequest, authToken?: string): Promise<ITransaction[]> {
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
   * Deploy contract request
   *
   * @param deployRequest deploy contract request data
   * @param idempotencyKey Optional transaction unique identifier
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async deployContract(
    deployRequest: IDeployContractRequest,
    idempotencyKey?: string,
    authToken?: string
  ): Promise<ITransaction> {
    try {
      return await this._postRequest('/transactions/deploy-contract', deployRequest, idempotencyKey, authToken)
    } catch (e) {
      throw e
    }
  }

  /**
   * Send contract transaction request
   *
   * @param sendRequest transaction request data
   * @param idempotencyKey Optional transaction unique identifier
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async send(
    sendRequest: ISendTransactionRequest,
    idempotencyKey?: string,
    authToken?: string
  ): Promise<ITransaction> {
    try {
      return await this._postRequest('/transactions/send', sendRequest, idempotencyKey, authToken)
    } catch (e) {
      throw e
    }
  }

  /**
   * Send raw transaction request
   *
   * @param sendRawRequest raw transaction request data
   * @param idempotencyKey Optional transaction unique identifier
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async sendRaw(
    sendRawRequest: ISendRawRequest,
    idempotencyKey?: string,
    authToken?: string
  ): Promise<ITransaction> {
    try {
      return await this._postRequest('/transactions/send-raw', sendRawRequest, idempotencyKey, authToken)
    } catch (e) {
      throw e
    }
  }

  /**
   * Send transfer transaction request
   *
   * @param transferRequest transfer transaction request data
   * @param idempotencyKey Optional transaction unique identifier
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async transfer(
    transferRequest: ITransferRequest,
    idempotencyKey?: string,
    authToken?: string
  ): Promise<ITransaction> {
    try {
      return await this._postRequest('/transactions/transfer', transferRequest, idempotencyKey, authToken)
    } catch (e) {
      throw e
    }
  }

  private async _postRequest<T>(path: string, data: any, idempotencyKey?: string, authToken?: string): Promise<T> {
    const req: IHttpPOSTRequest = {
      path,
      data,
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
