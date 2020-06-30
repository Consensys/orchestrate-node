/**
 * Class that enables interaction with the Contract Registry
 */

import { HttpClient } from '../client/http'
import { IFaucet, IHttpGETRequest, IHttpPOSTRequest, IHttpResponse, IRegisterFaucetRequest } from '../types'

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
