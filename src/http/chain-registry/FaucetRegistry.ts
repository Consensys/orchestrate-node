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
   * @param chainRegistryHost - the URL and port of the chain registry RPC
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

    const res: IHttpResponse = await this.client.get(req, {})
    if (res.err) {
      throw res.err
    }

    return res.data
  }

  public async registerFaucet(faucet: IRegisterFaucetRequest, authToken?: string): Promise<IFaucet> {
    const req: IHttpPOSTRequest = {
      path: '/faucets',
      authToken,
      data: faucet
    }

    const res: IHttpResponse = await this.client.post(req, {})
    if (res.err) {
      throw res.err
    }

    return res.data
  }
}
