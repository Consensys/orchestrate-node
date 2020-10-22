/**
 * Class that enables interaction with the Identity Manager ('/accounts')
 */

import { HttpClient } from '../HttpClient'
import {
  IAccount,
  ICreateAccountRequest,
  IImportAccountRequest,
  ISearchAccountsRequest,
  IUpdateAccountRequest
} from '../types'
import { IHttpGETRequest, IHttpPATCHRequest, IHttpPOSTRequest, IHttpResponse } from '../types/IHttpClient'

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
   * Search for accounts
   *
   * @param searchRequest accounts search filters
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async search(searchRequest?: ISearchAccountsRequest, authToken?: string): Promise<IAccount[]> {
    const req: IHttpGETRequest = {
      path: '/accounts',
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
   * Fetch an account by address
   *
   * @param address account's Ethereum address
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async get(address: string, authToken?: string): Promise<IAccount> {
    const req: IHttpGETRequest = {
      path: `/accounts/${address}`,
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
   * Creates a new account
   *
   * @param request account creation request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async createAccount(request?: ICreateAccountRequest, authToken?: string): Promise<IAccount> {
    try {
      return await this.postRequest('/accounts', request || {}, authToken)
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
      return await this.postRequest('/accounts/import', request, authToken)
    } catch (e) {
      throw e
    }
  }

  /**
   * Signs a message using a registered Ethereum account
   *
   * @param data payload to sign
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async sign(address: string, data: string, authToken?: string): Promise<string> {
    try {
      return await this.postRequest(`/accounts/${address}/sign`, { data }, authToken)
    } catch (e) {
      throw e
    }
  }

  /**
   * Updates an account's information
   *
   * @param request update request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async update(address: string, request: IUpdateAccountRequest, authToken?: string): Promise<string> {
    try {
      return await this.patchRequest(`/accounts/${address}`, request, authToken)
    } catch (e) {
      throw e
    }
  }

  private async postRequest<T>(path: string, data: any, authToken?: string): Promise<T> {
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

  private async patchRequest<T>(path: string, data: any, authToken?: string): Promise<T> {
    const req: IHttpPATCHRequest = {
      path,
      data,
      authToken
    }

    try {
      const res: IHttpResponse = await this.client.patch(req)
      return res.data
    } catch (e) {
      throw e
    }
  }
}
