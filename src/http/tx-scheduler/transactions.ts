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
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async send(sendRequest: ISendTransactionRequest, authToken?: string): Promise<ITransactionResponse> {
    const req: IHttpPOSTRequest = {
      path: '/transactions/send',
      data: sendRequest,
      authToken
    }

    try {
      const res: IHttpResponse = await this.client.post(req)
      return res.data
    } catch (e) {
      throw e
    }
  }

  /**
   * Deploy contract request
   * @param deployRequest deploy contract request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async deployContract(
    deployRequest: IDeployContractRequest,
    authToken?: string
  ): Promise<ITransactionResponse> {
    const req: IHttpPOSTRequest = {
      path: '/transactions/deploy-contract',
      data: deployRequest,
      authToken
    }

    try {
      const res: IHttpResponse = await this.client.post(req)
      return res.data
    } catch (e) {
      throw e
    }
  }
}
