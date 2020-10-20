/**
 * Class that enables interaction with the Identity Manager ('/accounts')
 */

import { HttpClient } from '../HttpClient'
import { IAccount, ICreateAccountRequest, IImportAccountRequest } from '../types'
import { IHttpPOSTRequest, IHttpResponse } from '../types/IHttpClient'

export class IdentityClient {
  private client: HttpClient

  /**
   * Creates a new IdentityClient instance
   *
   * @param identityManagerHost - URL and port of the Identity Manager service
   */
  constructor(identityManagerHost: string) {
    this.client = new HttpClient({
      host: identityManagerHost
    })
  }

  /**
   * Creates a new account
   *
   * @param request account creation request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async createAccount(request?: ICreateAccountRequest, authToken?: string): Promise<IAccount> {
    try {
      return await this._postRequest('/accounts', request || {}, authToken)
    } catch (e) {
      throw e
    }
  }

  /**
   * Imports an account
   *
   * @param request account import request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async importAccount(request: IImportAccountRequest, authToken?: string): Promise<IAccount> {
    try {
      return await this._postRequest('/accounts/import', request, authToken)
    } catch (e) {
      throw e
    }
  }

  private async _postRequest<T>(path: string, data: any, authToken?: string): Promise<T> {
    const req: IHttpPOSTRequest = {
      path,
      data,
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
