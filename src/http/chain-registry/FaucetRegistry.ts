/**
 * Class that enables interaction with the Chain Registry ('/faucets`)
 */

import { HttpClient } from '../HttpClient'
import { IFaucet, IRegisterFaucetRequest } from '../types'
import { IHttpGETRequest, IHttpPOSTRequest, IHttpResponse } from '../types/IHttpClient'

export class FaucetRegistry {
  private client: HttpClient

  /**
   * Creates a new ChainRegistry instance
   *
   * @param chainRegistryHost - the URL and port of the Chain Registry service
   */
  constructor(chainRegistryHost: string) {
    this.client = new HttpClient({
      host: chainRegistryHost
    })
  }

  /**
   * Fetch list of registered faucets
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async faucets(authToken?: string): Promise<IFaucet[]> {
    const req: IHttpGETRequest = {
      path: '/faucets',
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
   * Register a faucet account
   * @param faucet Data corresponding to the new faucet
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async registerFaucet(faucet: IRegisterFaucetRequest, authToken?: string): Promise<IFaucet> {
    const req: IHttpPOSTRequest = {
      path: '/faucets',
      authToken,
      data: faucet
    }

    try {
      const res: IHttpResponse = await this.client.post(req)
      return res.data
    } catch (e) {
      throw e
    }
  }
}
