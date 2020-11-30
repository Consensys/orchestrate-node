/**
 * Class that enables interaction with the Contract Registry ('/contracts`)
 */

import { HttpClient } from '../HttpClient'
import { IChain, IContract, IRegisterContractRequest } from '../types'
import { IHttpGETRequest, IHttpPOSTRequest, IHttpResponse } from '../types/IHttpClient'

export class ContractRegistry {
  private client: HttpClient

  /**
   * Creates a new ContractRegistry instance
   *
   * @param contractRegistryHost - the URL and port of the Contract Registry service
   */
  constructor(contractRegistryHost: string) {
    this.client = new HttpClient({
      host: contractRegistryHost
    })
  }

  /**
   * Fetch a list of registered contract names
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async list(authToken?: string): Promise<string[]> {
    const req: IHttpGETRequest = {
      path: '/contracts',
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
   * Gets all the tags of a contract by name
   *
   * @param name - Contract name
   * @param authToken - authorization token
   * @returns the tags of the contract
   */
  public async getTags(name: string, authToken?: string): Promise<string[]> {
    const req: IHttpGETRequest = {
      path: `/contracts/${name}`,
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
   * Fetch a contract by name and tag
   *
   * @param name - Contract name
   * @param tag - Contract tag
   * @param authToken - authorization token
   * @returns the contract details
   */
  public async get(name: string, tag?: string, authToken?: string): Promise<IContract> {
    const req: IHttpGETRequest = {
      path: `/contracts/${name}/${tag || 'latest'}`,
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
   * Register a new contract
   * @param contract New contract payload
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   */
  public async register(contract: IRegisterContractRequest, authToken?: string): Promise<IChain> {
    const req: IHttpPOSTRequest = {
      path: '/contracts',
      data: contract,
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
