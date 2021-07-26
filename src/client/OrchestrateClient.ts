/**
 * Class that enables interaction with the Orchestrate API
 */

import { IHeaders } from 'kafkajs'

import { HttpClient } from './HttpClient'
import * as types from './types'
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
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async getTransaction(txUUID: string, headers?: IHeaders): Promise<types.ITransaction> {
    const req: IHttpGETRequest = {
      path: `${TRANSACTIONS_ENDPOINT}/${txUUID}`
    }

    try {
      const res: IHttpResponse = await this.client.get(req, headers)
      return res.data
    } catch (e) {
      throw e
    }
  }

  /**
   * Search for transactions
   *
   * @param searchRequest transaction search request data
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async searchTransactions(
    searchRequest: types.ISearchTransactionRequest,
    headers?: IHeaders
  ): Promise<types.ITransaction[]> {
    const req: IHttpGETRequest = {
      path: TRANSACTIONS_ENDPOINT,
      query: searchRequest
    }

    try {
      const res: IHttpResponse = await this.client.get(req, headers)
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
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async deployContract(
    deployRequest: types.IDeployContractRequest,
    idempotencyKey?: string,
    headers?: IHeaders
  ): Promise<types.ITransaction> {
    try {
      return await this._postWithIdempotencyKey(
        `${TRANSACTIONS_ENDPOINT}/deploy-contract`,
        deployRequest,
        headers || {},
        idempotencyKey
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
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async sendTransaction(
    sendRequest: types.ISendTransactionRequest,
    idempotencyKey?: string,
    headers?: IHeaders
  ): Promise<types.ITransaction> {
    try {
      return await this._postWithIdempotencyKey(
        `${TRANSACTIONS_ENDPOINT}/send`,
        sendRequest,
        headers || {},
        idempotencyKey
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
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async sendRawTransaction(
    sendRawRequest: types.ISendRawRequest,
    idempotencyKey?: string,
    headers?: IHeaders
  ): Promise<types.ITransaction> {
    try {
      return await this._postWithIdempotencyKey(
        `${TRANSACTIONS_ENDPOINT}/send-raw`,
        sendRawRequest,
        headers || {},
        idempotencyKey
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
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async transfer(
    transferRequest: types.ITransferRequest,
    idempotencyKey?: string,
    headers?: IHeaders
  ): Promise<types.ITransaction> {
    try {
      return await this._postWithIdempotencyKey(
        `${TRANSACTIONS_ENDPOINT}/transfer`,
        transferRequest,
        headers || {},
        idempotencyKey
      )
    } catch (e) {
      throw e
    }
  }

  /**
   * Fetch list of registered chains
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async searchChains(headers?: IHeaders): Promise<types.IChain[]> {
    const req: IHttpGETRequest = {
      path: '/chains'
    }

    try {
      const res: IHttpResponse = await this.client.get(req, headers)
      return res.data
    } catch (e) {
      throw e
    }
  }

  /**
   * Register a new chain
   * @param chainRequest register chain request data
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async registerChain(chainRequest: types.IRegisterChainRequest, headers?: IHeaders): Promise<types.IChain> {
    try {
      return await this.client.post('/chains', chainRequest, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Update a registered chain
   * @param chainUUID uuid of registered chain
   * @param chainRequest register chain request data
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async updateChain(
    chainUUID: string,
    chainRequest: types.IUpdateChainRequest,
    headers?: IHeaders
  ): Promise<types.IChain> {
    try {
      return await this.client.patch(`/chains/${chainUUID}`, chainRequest, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Delete a registered chain
   * @param chainUUID uuid of registered chain
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async deleteChain(chainUUID: string, headers?: IHeaders): Promise<types.IChain> {
    try {
      return await this.client.delete(`/chains/${chainUUID}`, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Fetch list of registered faucets
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async searchFaucets(headers?: IHeaders): Promise<types.IFaucet[]> {
    const req: IHttpGETRequest = { path: '/faucets' }

    try {
      const res: IHttpResponse = await this.client.get(req, headers)
      return res.data
    } catch (e) {
      throw e
    }
  }

  /**
   * Register a faucet account
   * @param faucetRequest register faucet request data
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async registerFaucet(faucetRequest: types.IRegisterFaucetRequest, headers?: IHeaders): Promise<types.IFaucet> {
    try {
      return await this.client.post('/faucets', faucetRequest, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Fetch a list of registered contract names
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async getContractsCatalog(headers?: IHeaders): Promise<string[]> {
    const req: IHttpGETRequest = {
      path: CONTRACTS_ENDPOINT
    }

    try {
      const res: IHttpResponse = await this.client.get(req, headers)
      return res.data
    } catch (e) {
      throw e
    }
  }

  /**
   * Gets all the tags of a contract by name
   *
   * @param name - Contract name
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   * @returns the tags of the contract
   */
  public async getContractTags(name: string, headers?: IHeaders): Promise<string[]> {
    const req: IHttpGETRequest = {
      path: `${CONTRACTS_ENDPOINT}/${name}`
    }

    try {
      const res: IHttpResponse = await this.client.get(req, headers)
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
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   * @returns the contract details
   */
  public async getContract(name: string, tag?: string, headers?: IHeaders): Promise<types.IContract> {
    const req: IHttpGETRequest = { path: `${CONTRACTS_ENDPOINT}/${name}/${tag || 'latest'}` }

    try {
      const res: IHttpResponse = await this.client.get(req, headers)
      return res.data
    } catch (e) {
      throw e
    }
  }

  /**
   * Register a new contract
   * @param contractRequest register contract request payload
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async registerContract(
    contractRequest: types.IRegisterContractRequest,
    headers?: IHeaders
  ): Promise<types.IContract> {
    try {
      return await this.client.post(CONTRACTS_ENDPOINT, contractRequest, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Search for accounts
   *
   * @param searchRequest accounts search filters
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async searchAccounts(
    searchRequest?: types.ISearchAccountsRequest,
    headers?: IHeaders
  ): Promise<types.IAccount[]> {
    const req: IHttpGETRequest = {
      path: '/accounts',
      query: searchRequest
    }

    try {
      const res: IHttpResponse = await this.client.get(req, headers)
      return res.data
    } catch (e) {
      throw e
    }
  }

  /**
   * Fetch an account by address
   *
   * @param address account's Ethereum address
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async getAccount(address: string, headers?: IHeaders): Promise<types.IAccount> {
    const req: IHttpGETRequest = { path: `/accounts/${address}` }

    try {
      const res: IHttpResponse = await this.client.get(req, headers)
      return res.data
    } catch (e) {
      throw e
    }
  }

  /**
   * Creates a new account
   *
   * @param request account creation request data
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async createAccount(request?: types.ICreateAccountRequest, headers?: IHeaders): Promise<types.IAccount> {
    try {
      return await this.client.post('/accounts', request || {}, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Imports an account
   *
   * @param request account import request data
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async importAccount(request: types.IImportAccountRequest, headers?: IHeaders): Promise<types.IAccount> {
    try {
      return await this.client.post('/accounts/import', request, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Signs a message using a registered Ethereum account
   *
   * @param address account's Ethereum address
   * @param data payload to sign
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async sign(address: string, data: string, headers?: IHeaders): Promise<string> {
    try {
      return await this.client.post(`/accounts/${address}/sign`, { data }, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Updates an account's information
   *
   * @param address account's Ethereum address
   * @param request update request data
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async updateAccount(
    address: string,
    request: types.IUpdateAccountRequest,
    headers?: IHeaders
  ): Promise<string> {
    try {
      return await this.client.patch(`/accounts/${address}`, request, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Signs a typed data message using a registered Ethereum account
   *
   * @param address account's Ethereum address
   * @param request sign typed data request
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async signTypedData(
    address: string,
    request: types.ISignTypedDataRequest,
    headers?: IHeaders
  ): Promise<string> {
    try {
      return await this.client.post(`/accounts/${address}/sign-typed-data`, request, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Verifies the signature of a message
   *
   * @param request update request data
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async verifySignature(request: types.IVerifySignatureRequest, headers?: IHeaders): Promise<void> {
    try {
      await this.client.post(`/accounts/verify-signature`, request, headers)
    } catch (e) {
      throw e
    }
  }

  /**
   * Verifies the signature of a typed data message
   *
   * @param request update request data
   * @param headers HTTP request headers. Authorization is required when using multi-tenancy
   */
  public async verifyTypedDataSignature(
    request: types.IVerifyTypedDataSignatureRequest,
    headers?: IHeaders
  ): Promise<void> {
    try {
      await this.client.post(`/accounts/verify-typed-data-signature`, request, headers)
    } catch (e) {
      throw e
    }
  }

  private async _postWithIdempotencyKey<T>(
    path: string,
    data: any,
    headers: IHeaders,
    idempotencyKey?: string
  ): Promise<T> {
    const newHeaders = { ...headers }
    if (idempotencyKey) {
      newHeaders['X-Idempotency-Key'] = idempotencyKey
    }

    return await this.client.post(path, data, newHeaders)
  }
}
