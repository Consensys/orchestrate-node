/**
 * Class that enables interaction with the TxScheduler ('/transactions')
 */

import { HttpClient } from '../client/http'
import { IHttpPOSTRequest, IHttpResponse } from '../types'
import { IDeployContractRequest, ISendTransactionRequest, ITransactionResponse } from '../types/ITransaction'

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
   * Send contract transaction request
   * @param txRequest transaction request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async send(txRequest: ISendTransactionRequest, authToken?: string): Promise<ITransactionResponse> {
    const req: IHttpPOSTRequest = {
      path: '/transactions/send',
      data: txRequest,
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
   * @param txRequest deploy contract request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async deployContract(txRequest: IDeployContractRequest, authToken?: string): Promise<ITransactionResponse> {
    const req: IHttpPOSTRequest = {
      path: '/transactions/deploy-contract',
      data: txRequest,
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
