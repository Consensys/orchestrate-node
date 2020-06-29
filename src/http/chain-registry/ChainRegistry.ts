/**
 * Class that enables interaction with the Contract Registry
 */

import { HttpClient } from '../client/http'
import { IChain, IHttpGETRequest, IHttpPOSTRequest, IHttpResponse, IRegisterChainRequest } from '../types'

export class ChainRegistry {
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

  public async chains(authToken?: string): Promise<IChain[]> {
    const req: IHttpGETRequest = {
      path: '/chains',
      authToken
    }

    try {
      const res: IHttpResponse = await this.client.get(req)
      return res.data
    } catch (e) {
      throw e
    }
  }

  public async registerChain(chain: IRegisterChainRequest, authToken?: string): Promise<IChain> {
    const req: IHttpPOSTRequest = {
      path: '/chains',
      data: chain,
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
