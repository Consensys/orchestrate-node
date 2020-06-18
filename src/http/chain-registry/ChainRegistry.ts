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
   * @param chainRegistryHost - the URL and port of the chain registry RPC
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

    const res: IHttpResponse = await this.client.get(req, {})
    if (res.err) {
      throw res.err
    }

    return res.data
  }

  public async registerChain(chain: IRegisterChainRequest, authToken?: string): Promise<IChain> {
    const req: IHttpPOSTRequest = {
      path: '/chains',
      data: chain,
      authToken
    }

    const res: IHttpResponse = await this.client.post(req, {})
    if (res.err) {
      throw res.err
    }

    return res.data
  }
}
