/**
 * Class that enables interaction with the Orchestrate API
 */

import { HttpClient } from './HttpClient'
import * as types from './types'
import { IHeaders } from './types'
import { IHttpGETRequest, IHttpResponse } from './types/IHttpClient'

const TRANSACTIONS_ENDPOINT: string = '/transactions'
const CONTRACTS_ENDPOINT: string = '/contracts'

export class OrchestrateClient {
  private client: HttpClient

  /**
   * Creates a new OrchestrateClient instance
   *
   * @param host - URL and port of the Orchestrate API
   */
  constructor(host: string) {
    this.client = new HttpClient({ host })
  }

  /**
   * Fetch a transaction by UUID
   *
   * @param txUUID transaction UUID
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async getTransaction(txUUID: string, authToken?: string, headers?: IHeaders): Promise<types.ITransaction> {
    const req: IHttpGETRequest = {
      path: `${TRANSACTIONS_ENDPOINT}/${txUUID}`
    }

    try {
      const res: IHttpResponse = await this.client.get(req, authToken, headers)
      return res.data
    } catch (e) {
      throw e
    }
  }

  /**
   * Search for transactions
   *
   * @param searchRequest transaction search request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async searchTransactions(
    searchRequest: types.ISearchTransactionRequest,
    authToken?: string,
    headers?: IHeaders
  ): Promise<types.ITransaction[]> {
    const req: IHttpGETRequest = {
      path: TRANSACTIONS_ENDPOINT,
      query: searchRequest
    }

    try {
      const res: IHttpResponse = await this.client.get(req, authToken, headers)
      return res.data
    } catch (e) {
      throw e
    }
  }

  /**
   * Deploy contract request
   *
   * @param deployRequest deploy contract request data
   * @param idempotencyKey Optional transaction unique identifier
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async deployContract(
    deployRequest: types.IDeployContractRequest,
    idempotencyKey?: string,
    authToken?: string,
    headers?: IHeaders
  ): Promise<types.ITransaction> {
    try {
      return await this._postWithIdempotencyKey(
        `${TRANSACTIONS_ENDPOINT}/deploy-contract`,
        deployRequest,
        authToken,
        idempotencyKey,
        headers
      )
    } catch (e) {
      throw e
    }
  }

  /**
   * Send contract transaction request
   *
   * @param sendRequest transaction request data
   * @param idempotencyKey Optional transaction unique identifier
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async sendTransaction(
    sendRequest: types.ISendTransactionRequest,
    idempotencyKey?: string,
    authToken?: string,
    headers?: IHeaders
  ): Promise<types.ITransaction> {
    try {
      return await this._postWithIdempotencyKey(
        `${TRANSACTIONS_ENDPOINT}/send`,
        sendRequest,
        authToken,
        idempotencyKey,
        headers
      )
    } catch (e) {
      throw e
    }
  }

  /**
   * Send raw transaction request
   *
   * @param sendRawRequest raw transaction request data
   * @param idempotencyKey Optional transaction unique identifier
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async sendRawTransaction(
    sendRawRequest: types.ISendRawRequest,
    idempotencyKey?: string,
    authToken?: string,
    headers?: IHeaders
  ): Promise<types.ITransaction> {
    try {
      return await this._postWithIdempotencyKey(
        `${TRANSACTIONS_ENDPOINT}/send-raw`,
        sendRawRequest,
        authToken,
        idempotencyKey,
        headers
      )
    } catch (e) {
      throw e
    }
  }

  /**
   * Send transfer transaction request
   *
   * @param transferRequest transfer transaction request data
   * @param idempotencyKey Optional transaction unique identifier
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async transfer(
    transferRequest: types.ITransferRequest,
    idempotencyKey?: string,
    authToken?: string,
    headers?: IHeaders
  ): Promise<types.ITransaction> {
    try {
      return await this._postWithIdempotencyKey(
        `${TRANSACTIONS_ENDPOINT}/transfer`,
        transferRequest,
        authToken,
        idempotencyKey,
        headers
      )
    } catch (e) {
      throw e
    }
  }

  /**
   * Fetch list of registered chains
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async searchChains(authToken?: string, headers?: IHeaders): Promise<types.IChain[]> {
    const req: IHttpGETRequest = { path: '/chains' }

    try {
      const res: IHttpResponse = await this.client.get(req, authToken, headers)
      return res.data
    } catch (e) {
      throw e
    }
  }

  /**
   * Register a new chain
   * @param chainRequest register chain request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async registerChain(
    chainRequest: types.IRegisterChainRequest,
    authToken?: string,
    headers?: IHeaders
  ): Promise<types.IChain> {
    try {
      return await this.client.post('/chains', chainRequest, authToken, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Update a registered chain
   * @param chainUUID uuid of registered chain
   * @param chainRequest register chain request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async updateChain(
    chainUUID: string,
    chainRequest: types.IUpdateChainRequest,
    authToken?: string,
    headers?: IHeaders
  ): Promise<types.IChain> {
    try {
      return await this.client.patch(`/chains/${chainUUID}`, chainRequest, authToken, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Delete a registered chain
   * @param chainUUID uuid of registered chain
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async deleteChain(chainUUID: string, authToken?: string, headers?: IHeaders): Promise<void> {
    try {
      return await this.client.delete(`/chains/${chainUUID}`, authToken, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Fetch list of registered faucets
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async searchFaucets(authToken?: string, headers?: IHeaders): Promise<types.IFaucet[]> {
    const req: IHttpGETRequest = { path: '/faucets' }

    try {
      const res: IHttpResponse = await this.client.get(req, authToken, headers)
      return res.data
    } catch (e) {
      throw e
    }
  }

  /**
   * Register a faucet account
   * @param faucetRequest register faucet request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async registerFaucet(
    faucetRequest: types.IRegisterFaucetRequest,
    authToken?: string,
    headers?: IHeaders
  ): Promise<types.IFaucet> {
    try {
      return await this.client.post('/faucets', faucetRequest, authToken, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Fetch a list of registered contract names
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async getContractsCatalog(authToken?: string, headers?: IHeaders): Promise<string[]> {
    const req: IHttpGETRequest = { path: CONTRACTS_ENDPOINT }

    try {
      const res: IHttpResponse = await this.client.get(req, authToken, headers)
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
   * @param headers HTTP request headers.
   * @returns the tags of the contract
   */
  public async getContractTags(name: string, authToken?: string, headers?: IHeaders): Promise<string[]> {
    const req: IHttpGETRequest = {
      path: `${CONTRACTS_ENDPOINT}/${name}`
    }

    try {
      const res: IHttpResponse = await this.client.get(req, authToken, headers)
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
   * @param headers HTTP request headers.
   * @returns the contract details
   */
  public async getContract(
    name: string,
    tag?: string,
    authToken?: string,
    headers?: IHeaders
  ): Promise<types.IContract> {
    const req: IHttpGETRequest = { path: `${CONTRACTS_ENDPOINT}/${name}/${tag || 'latest'}` }

    try {
      const res: IHttpResponse = await this.client.get(req, authToken, headers)
      return res.data
    } catch (e) {
      throw e
    }
  }

  /**
   * Register a new contract
   * @param contractRequest register contract request payload
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async registerContract(
    contractRequest: types.IRegisterContractRequest,
    authToken?: string,
    headers?: IHeaders
  ): Promise<types.IContract> {
    try {
      return await this.client.post(CONTRACTS_ENDPOINT, contractRequest, authToken, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Search for accounts
   *
   * @param searchRequest accounts search filters
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async searchAccounts(
    searchRequest?: types.ISearchAccountsRequest,
    authToken?: string,
    headers?: IHeaders
  ): Promise<types.IAccount[]> {
    const req: IHttpGETRequest = {
      path: '/accounts',
      query: searchRequest
    }

    try {
      const res: IHttpResponse = await this.client.get(req, authToken, headers)
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
   * @param headers HTTP request headers.
   */
  public async getAccount(address: string, authToken?: string, headers?: IHeaders): Promise<types.IAccount> {
    const req: IHttpGETRequest = {
      path: `/accounts/${address}`
    }

    try {
      const res: IHttpResponse = await this.client.get(req, authToken, headers)
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
   * @param headers HTTP request headers.
   */
  public async createAccount(
    request?: types.ICreateAccountRequest,
    authToken?: string,
    headers?: IHeaders
  ): Promise<types.IAccount> {
    try {
      return await this.client.post('/accounts', request || {}, authToken, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Imports an account
   *
   * @param request account import request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async importAccount(
    request: types.IImportAccountRequest,
    authToken?: string,
    headers?: IHeaders
  ): Promise<types.IAccount> {
    try {
      return await this.client.post('/accounts/import', request, authToken, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Signs a message using a registered Ethereum account
   *
   * @param address account's Ethereum address
   * @param data payload to sign
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async sign(address: string, data: string, authToken?: string, headers?: IHeaders): Promise<string> {
    try {
      return await this.client.post(`/accounts/${address}/sign`, { data }, authToken, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Updates an account's information
   *
   * @param address account's Ethereum address
   * @param request update request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async updateAccount(
    address: string,
    request: types.IUpdateAccountRequest,
    authToken?: string,
    headers?: IHeaders
  ): Promise<string> {
    try {
      return await this.client.patch(`/accounts/${address}`, request, authToken, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Signs a typed data message using a registered Ethereum account
   *
   * @param address account's Ethereum address
   * @param request sign typed data request
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async signTypedData(
    address: string,
    request: types.ISignTypedDataRequest,
    authToken?: string,
    headers?: IHeaders
  ): Promise<string> {
    try {
      return await this.client.post(`/accounts/${address}/sign-typed-data`, request, authToken, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Verifies the signature of a message
   *
   * @param request update request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async verifySignature(
    request: types.IVerifySignatureRequest,
    authToken?: string,
    headers?: IHeaders
  ): Promise<void> {
    try {
      await this.client.post(`/accounts/verify-signature`, request, authToken, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Verifies the signature of a typed data message
   *
   * @param request update request data
   * @param authToken Bearer token. Required when multi-tenancy is enabled
   * @param headers HTTP request headers.
   */
  public async verifyTypedDataSignature(
    request: types.IVerifyTypedDataSignatureRequest,
    authToken?: string,
    headers?: IHeaders
  ): Promise<void> {
    try {
      await this.client.post(`/accounts/verify-typed-data-signature`, request, authToken, headers)
    } catch (e) {
      throw e
    }
  }

  private async _postWithIdempotencyKey<T>(
    path: string,
    data: any,
    authToken?: string,
    idempotencyKey?: string,
    headers?: IHeaders
  ): Promise<T> {
    const newHeaders: IHeaders = { ...headers }
    if (idempotencyKey) {
      newHeaders['X-Idempotency-Key'] = idempotencyKey
    }

    return await this.client.post(path, data, authToken, newHeaders)
  }
}
