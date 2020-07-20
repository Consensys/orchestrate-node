/**
 * Class that enables interaction with the Chain Registry ('/chains`)
 */

import { HttpClient } from '../client/http'
import { IChain, IRegisterChainRequest } from '../types'
import { IHttpGETRequest, IHttpPOSTRequest, IHttpResponse } from '../types/IHttpClient'

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

  /**
   * Fetch list of registered chains
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
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

  /**
   * Register a new chain
   * @param chain Data corresponding to the new chain
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
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
