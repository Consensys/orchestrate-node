import { OrchestrateClient } from './OrchestrateClient'
import * as types from './types'
import { IHeaders } from './types'
import { IHttpGETRequest, IHttpPOSTRequest } from './types/IHttpClient'

const mockJobLogRes: types.ILog = {
  message: 'Job Created',
  status: 'CREATED',
  at: new Date()
}

const mockChain: types.IChain = {
  name: 'testChain',
  tenantID: 'tenantID',
  urls: ['endpoint:8545'],
  uuid: 'uuid',
  labels: {
    label: 'value'
  },
  createdAt: new Date(),
  updatedAt: new Date()
}

const mockFaucet: types.IFaucet = {
  name: 'testChain',
  tenantID: 'tenantID',
  uuid: 'uuid',
  chainRule: 'chainUUID',
  creditorAccount: '0xCreditorAddrAcc',
  amount: '1000',
  cooldown: '1s',
  maxBalance: '1000',
  createdAt: new Date(),
  updatedAt: new Date()
}

const mockAccountResp: types.IAccount = {
  alias: 'myAlias',
  tenantID: '_',
  active: true,
  address: '0xaddress',
  publicKey: '0xpublicKey',
  compressedPublicKey: '0xcompressedPublicKey',
  createdAt: new Date(),
  updatedAt: new Date()
}

const mockContract: types.IContract = {
  name: 'name',
  tag: 'tag',
  abi: [
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [
        {
          name: '',
          type: 'string'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    }
  ],
  bytecode: '0xbytecode',
  deployedBytecode: '0xdeployedBytecode'
}

const mockJobRes: types.IJobResponse = {
  uuid: 'jobUUID',
  chainUUID: 'chainUUID',
  logs: [mockJobLogRes],
  transaction: {},
  status: 'STARTED',
  type: 'eth://ethereum/transaction',
  createdAt: new Date(),
  updatedAt: new Date()
}

const mockScheduleRes: types.IScheduleResponse = {
  uuid: 'scheduleUUID',
  jobs: [mockJobRes],
  createdAt: new Date()
}

const mockETHParams: types.IETHTransactionParams = {}

const mockTransactionResp: types.ITransaction = {
  uuid: 'transactionUUID',
  idempotencyKey: 'idempotencyKey',
  chain: 'MyChain',
  params: mockETHParams,
  schedule: mockScheduleRes,
  createdAt: new Date()
}

const authToken = 'MyTenantAuthToken'
const headers: IHeaders = {
  'X-Tenant-ID': 'user'
}

const mockHTTPClient = {
  get: jest.fn(),
  post: jest.fn(),
  patch: jest.fn(),
  delete: jest.fn()
}

jest.mock('./HttpClient', () => ({
  HttpClient: jest.fn().mockImplementation(() => mockHTTPClient)
}))

describe('OrchestrateClient', () => {
  let client: OrchestrateClient

  beforeAll(() => {
    client = new OrchestrateClient('endpoint:8081')
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  describe('getTransaction', () => {
    it('should fetch one transaction by UUID successfully', async () => {
      const req: IHttpGETRequest = {
        path: `/transactions/${mockTransactionResp.uuid}`
      }

      mockHTTPClient.get.mockResolvedValueOnce({
        data: mockTransactionResp,
        status: 200,
        headers: {}
      })
      const data = await client.getTransaction(mockTransactionResp.uuid, authToken, headers)

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, headers)
      expect(data).toEqual(mockTransactionResp)
    })

    it('should fail to fetch one transaction by UUID', async () => {
      const req: IHttpGETRequest = {
        path: `/transactions/${mockTransactionResp.uuid}`
      }
      const err = new Error('MyError')

      mockHTTPClient.get.mockRejectedValueOnce(err)
      try {
        await client.getTransaction(mockTransactionResp.uuid, authToken, headers)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, headers)
    })
  })

  describe('searchTransactions', () => {
    it('should fetch filtered transaction successfully', async () => {
      const creq: types.ISearchTransactionRequest = {
        idempotency_keys: [mockTransactionResp.idempotencyKey]
      }
      const req: IHttpGETRequest = {
        path: `/transactions`,
        query: creq
      }

      mockHTTPClient.get.mockResolvedValueOnce({
        data: [mockTransactionResp],
        status: 200,
        headers: {}
      })

      const data = await client.searchTransactions(creq, authToken, headers)

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, headers)
      expect(data).toEqual([mockTransactionResp])
    })

    it('should fail to filter transactions', async () => {
      const creq: types.ISearchTransactionRequest = {
        idempotency_keys: [mockTransactionResp.idempotencyKey]
      }
      const req: IHttpGETRequest = {
        path: `/transactions`,
        query: creq
      }

      const err = new Error('MyError')
      mockHTTPClient.get.mockRejectedValueOnce(err)
      try {
        await client.searchTransactions(creq)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, undefined, undefined)
    })
  })

  describe('deployContract', () => {
    it('should deploy contract transaction successfully', async () => {
      const creq: types.IDeployContractRequest = {
        chain: 'MyChain',
        params: {
          contractName: 'SimpleContract',
          args: ['arg1', 'arg2']
        }
      }

      mockHTTPClient.post.mockResolvedValueOnce(mockTransactionResp)

      const data = await client.deployContract(creq)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(`/transactions/deploy-contract`, creq, undefined, {})
      expect(data).toEqual(mockTransactionResp)
    })
  })

  describe('sendTransaction', () => {
    it('should send a contract transaction successfully', async () => {
      const creq: types.ISendTransactionRequest = {
        chain: 'MyChain',
        params: {
          from: '0xFromAddr',
          to: '0xContractAddr',
          methodSignature: 'transfer(address, unit256)',
          args: ['0xToAddr', '1000']
        }
      }

      mockHTTPClient.post.mockResolvedValueOnce(mockTransactionResp)

      const data = await client.sendTransaction(creq, mockTransactionResp.idempotencyKey)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(`/transactions/send`, creq, undefined, {
        'X-Idempotency-Key': mockTransactionResp.idempotencyKey
      })
      expect(data).toEqual(mockTransactionResp)
    })
  })

  describe('send private transaction', () => {
    it('should send a contract transaction successfully', async () => {
      const creq: types.ISendTransactionRequest = {
        chain: 'MyChain',
        params: {
          from: '0xFromAddr',
          to: '0xContractAddr',
          methodSignature: 'transfer(address, unit256)',
          args: ['0xToAddr', '1000'],
          protocol: types.ProtocolType.Orion,
          privateFor: ['0xpubkey1', '0xpubkey2'],
          privateFrom: '0xpubkey'
        }
      }

      mockHTTPClient.post.mockResolvedValueOnce(mockTransactionResp)

      const data = await client.sendTransaction(creq, mockTransactionResp.idempotencyKey)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(`/transactions/send`, creq, undefined, {
        'X-Idempotency-Key': mockTransactionResp.idempotencyKey
      })
      expect(data).toEqual(mockTransactionResp)
    })
  })

  describe('sendRawTransaction', () => {
    it('should send a contract transaction successfully', async () => {
      const creq: types.ISendRawRequest = {
        chain: 'MyChain',
        params: {
          raw: '0xRawTransactionData'
        }
      }

      mockHTTPClient.post.mockResolvedValueOnce(mockTransactionResp)

      const data = await client.sendRawTransaction(creq, mockTransactionResp.idempotencyKey, authToken)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(`/transactions/send-raw`, creq, authToken, {
        'X-Idempotency-Key': mockTransactionResp.idempotencyKey
      })
      expect(data).toEqual(mockTransactionResp)
    })
  })

  describe('transfer', () => {
    it('should send a transfer transaction successfully', async () => {
      const creq: types.ITransferRequest = {
        chain: 'MyChain',
        params: {
          from: '0xFromAddr',
          to: '0xToAddr',
          value: '10000'
        }
      }

      mockHTTPClient.post.mockResolvedValueOnce(mockTransactionResp)

      const data = await client.transfer(creq, undefined, authToken)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(`/transactions/transfer`, creq, authToken, {})
      expect(data).toEqual(mockTransactionResp)
    })

    it('should fail to send a transfer transaction', async () => {
      const creq: types.ITransferRequest = {
        chain: 'MyChain',
        params: {
          from: '0xFromAddr',
          to: '0xToAddr',
          value: '10000'
        }
      }

      const err = new Error('MyError')
      mockHTTPClient.post.mockRejectedValueOnce(err)
      try {
        await client.transfer(creq)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(`/transactions/transfer`, creq, undefined, {})
    })
  })

  describe('searchChains', () => {
    it('should fetch chains successfully', async () => {
      const req: IHttpGETRequest = {
        path: '/chains'
      }

      mockHTTPClient.get.mockResolvedValueOnce({
        data: [mockChain],
        status: 200,
        headers: {}
      })

      await client.searchChains()

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, undefined, undefined)
    })

    it('should fetch chains with jwt successfully', async () => {
      const req: IHttpGETRequest = {
        path: '/chains'
      }

      try {
        mockHTTPClient.get.mockResolvedValueOnce({
          data: [mockChain],
          status: 200,
          headers: {}
        })
        const res = await client.searchChains(authToken, headers)
        expect(res).toEqual([mockChain])
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, headers)
    })

    it('should fetch chains with jwt with errors', async () => {
      const req: IHttpGETRequest = {
        path: '/chains'
      }

      const err = new Error('fail message')
      try {
        mockHTTPClient.get.mockRejectedValueOnce({
          data: err,
          status: 500,
          headers: {}
        })
        await client.searchChains(authToken)
        fail('expected to fail')
      } catch (e) {
        expect(e.data).toEqual(err)
        expect(e.status).toEqual(500)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, undefined)
    })
  })

  describe('registerChain', () => {
    it('should register a new chain successfully', async () => {
      const chain: types.IRegisterChainRequest = {
        name: 'chainName',
        urls: ['localhost:8545'],
        labels: {
          label: 'value'
        }
      }

      try {
        mockHTTPClient.post.mockResolvedValueOnce(mockChain)

        const res = await client.registerChain(chain)
        expect(res).toEqual(mockChain)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith('/chains', chain, undefined, undefined)
    })

    it('should register a new chain with jwt successfully', async () => {
      const chain: types.IRegisterChainRequest = {
        name: 'chainName',
        urls: ['localhost:8545'],
        labels: {
          label: 'value'
        }
      }

      mockHTTPClient.post.mockResolvedValueOnce(mockChain)

      try {
        const res = await client.registerChain(chain, authToken, headers)
        expect(res).toEqual(mockChain)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith('/chains', chain, authToken, headers)
    })

    it('should to register a new chain and return and error', async () => {
      const chain: types.IRegisterChainRequest = {
        name: 'chainName',
        urls: ['localhost:8545']
      }

      const err = new Error('fail message')
      try {
        mockHTTPClient.post.mockRejectedValueOnce({
          data: err,
          status: 500,
          headers: {}
        })
        await client.registerChain(chain)
        fail(`expected to fail`)
      } catch (e) {
        expect(e.data).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith('/chains', chain, undefined, undefined)
    })

    it('should error to register a new chain', async () => {
      const chain: types.IRegisterChainRequest = {
        name: 'chainName',
        urls: ['localhost:8545']
      }
      const err = new Error('fail message')

      try {
        mockHTTPClient.post.mockRejectedValueOnce(err)
        await client.registerChain(chain)
        fail(`expected to fail`)
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith('/chains', chain, undefined, undefined)
    })
  })

  describe('updateChain', () => {
    it('should update a new chain successfully', async () => {
      const chain: types.IUpdateChainRequest = {
        name: 'chainName2',
        labels: {
          label2: 'value2'
        }
      }

      mockHTTPClient.patch.mockResolvedValueOnce(mockChain)

      try {
        const res = await client.updateChain(mockChain.uuid, chain)
        expect(res).toEqual(mockChain)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.patch).toHaveBeenCalledWith(`/chains/${mockChain.uuid}`, chain, undefined, undefined)
    })

    it('should update a new chain with jwt successfully', async () => {
      const chain: types.IUpdateChainRequest = {
        name: 'chainName3',
        labels: {
          label3: 'value3'
        }
      }

      mockHTTPClient.patch.mockResolvedValueOnce(mockChain)

      try {
        const res = await client.updateChain(mockChain.uuid, chain, authToken, headers)
        expect(res).toEqual(mockChain)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.patch).toHaveBeenCalledWith(`/chains/${mockChain.uuid}`, chain, authToken, headers)
    })

    it('should to update a registered chain and return and error', async () => {
      const chain: types.IUpdateChainRequest = {
        name: 'chainName'
      }

      const err = new Error('fail message')
      try {
        mockHTTPClient.patch.mockRejectedValueOnce({
          data: err,
          status: 500,
          headers: {}
        })
        await client.updateChain(mockChain.uuid, chain)
        fail(`expected to fail`)
      } catch (e) {
        expect(e.data).toEqual(err)
      }

      expect(mockHTTPClient.patch).toHaveBeenCalledWith(`/chains/${mockChain.uuid}`, chain, undefined, undefined)
    })

    it('should to delete a chain successfully', async () => {
      try {
        await client.deleteChain(mockChain.uuid, authToken, headers)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.delete).toHaveBeenCalledWith(`/chains/${mockChain.uuid}`, authToken, headers)
    })
  })

  describe('searchFaucets', () => {
    it('should fetch faucets successfully', async () => {
      const req: IHttpPOSTRequest = {
        path: '/faucets'
      }

      try {
        mockHTTPClient.get.mockResolvedValueOnce({
          status: 200,
          headers: {},
          data: [mockFaucet]
        })
        const res = await client.searchFaucets()
        expect(res).toEqual([mockFaucet])
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, undefined, undefined)
    })

    it('should fetch a faucets with jwt successfully', async () => {
      const req: IHttpPOSTRequest = {
        path: '/faucets'
      }

      try {
        mockHTTPClient.get.mockResolvedValueOnce({
          status: 200,
          headers: {},
          data: [mockFaucet]
        })
        const res = await client.searchFaucets(authToken, headers)
        expect(res).toEqual([mockFaucet])
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, headers)
    })

    it('should fetch faucets with jwt with errors', async () => {
      const req: IHttpGETRequest = {
        path: '/faucets'
      }

      const err = new Error('fail message')
      try {
        mockHTTPClient.get.mockRejectedValueOnce({
          data: err,
          status: 500,
          headers: {}
        })
        await client.searchFaucets(authToken, headers)
        fail('expected to fail')
      } catch (e) {
        expect(e.data).toEqual(err)
        expect(e.status).toEqual(500)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, headers)
    })
  })

  describe('registerFaucet', () => {
    it('should register a new faucet successfully', async () => {
      const faucet: types.IRegisterFaucetRequest = {
        ...mockFaucet,
        cooldown: '10s',
        maxBalance: '100000000000',
        amount: '1000000'
      }

      try {
        mockHTTPClient.post.mockResolvedValueOnce(mockFaucet)
        const res = await client.registerFaucet(faucet)
        expect(res).toEqual(mockFaucet)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith('/faucets', faucet, undefined, undefined)
    })

    it('should register a new faucet with jwt successfully', async () => {
      const faucet: types.IRegisterFaucetRequest = {
        ...mockFaucet,
        cooldown: '10s',
        maxBalance: '100000000000',
        amount: '1000000'
      }

      try {
        mockHTTPClient.post.mockResolvedValueOnce(mockFaucet)
        const res = await client.registerFaucet(faucet, authToken, headers)
        expect(res).toEqual(mockFaucet)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith('/faucets', faucet, authToken, headers)
    })

    it('should register a new faucet with errors', async () => {
      const faucet: types.IRegisterFaucetRequest = {
        ...mockFaucet,
        cooldown: '10s',
        maxBalance: '100000000000',
        amount: '1000000'
      }

      const err = new Error('fail message')
      try {
        mockHTTPClient.post.mockRejectedValueOnce({
          data: err,
          status: 420,
          headers: {}
        })
        await client.registerFaucet(faucet)
        fail('expected to fail')
      } catch (e) {
        expect(e.data).toEqual(err)
        expect(e.status).toEqual(420)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith('/faucets', faucet, undefined, undefined)
    })
  })

  describe('list', () => {
    it('should fetch contracts successfully', async () => {
      const req: IHttpGETRequest = {
        path: '/contracts'
      }

      mockHTTPClient.get.mockResolvedValueOnce({
        data: [mockContract],
        status: 200,
        headers: {}
      })
      await client.getContractsCatalog()

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, undefined, undefined)
    })

    it('should fetch contracts with jwt successfully', async () => {
      const req: IHttpGETRequest = {
        path: '/contracts'
      }

      try {
        mockHTTPClient.get.mockResolvedValueOnce({
          data: [mockContract.name],
          status: 200,
          headers: {}
        })
        const res = await client.getContractsCatalog(authToken, headers)
        expect(res).toEqual([mockContract.name])
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, headers)
    })

    it('should fetch contracts with jwt with errors', async () => {
      const req: IHttpGETRequest = {
        path: '/contracts'
      }

      const err = new Error('fail message')
      try {
        mockHTTPClient.get.mockRejectedValueOnce({
          data: err,
          status: 500,
          headers: {}
        })
        await client.getContractsCatalog(authToken, headers)
        fail('expected to fail')
      } catch (e) {
        expect(e.data).toEqual(err)
        expect(e.status).toEqual(500)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, headers)
    })
  })

  describe('getTags', () => {
    const name = 'MyContract'

    it('should fetch tags successfully', async () => {
      const req: IHttpGETRequest = {
        path: `/contracts/${name}`
      }

      mockHTTPClient.get.mockResolvedValueOnce({
        data: ['v1.0.0'],
        status: 200,
        headers: {}
      })
      await client.getContractTags(name, authToken, headers)

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, headers)
    })

    it('should fetch tags with jwt successfully', async () => {
      const req: IHttpGETRequest = {
        path: `/contracts/${name}`
      }

      try {
        mockHTTPClient.get.mockResolvedValueOnce({
          data: [mockContract.tag],
          status: 200,
          headers: {}
        })
        const res = await client.getContractTags(name, authToken, headers)
        expect(res).toEqual([mockContract.tag])
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, headers)
    })

    it('should fail with an error if call fails', async () => {
      const req: IHttpGETRequest = {
        path: `/contracts/${name}`
      }

      const err = new Error('fail message')
      try {
        mockHTTPClient.get.mockRejectedValueOnce({
          data: err,
          status: 500,
          headers: {}
        })
        await client.getContractTags(name, authToken)
        fail('expected to fail')
      } catch (e) {
        expect(e.data).toEqual(err)
        expect(e.status).toEqual(500)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, undefined)
    })
  })

  describe('getContract', () => {
    const name = 'MyContract'
    const tag = 'v1.0.0'

    it('should fetch a contract successfully', async () => {
      const req: IHttpGETRequest = {
        path: `/contracts/${name}/${tag}`
      }

      mockHTTPClient.get.mockResolvedValueOnce({
        data: [mockContract],
        status: 200,
        headers: {}
      })
      await client.getContract(name, tag, authToken, headers)

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, headers)
    })

    it('should fetch contract with jwt successfully', async () => {
      const req: IHttpGETRequest = {
        path: `/contracts/${name}/${tag}`
      }

      try {
        mockHTTPClient.get.mockResolvedValueOnce({
          data: mockContract,
          status: 200,
          headers: {}
        })
        const res = await client.getContract(name, tag, authToken, headers)
        expect(res).toEqual(mockContract)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, headers)
    })

    it('should fetch contract with latest tag', async () => {
      const req: IHttpGETRequest = {
        path: `/contracts/${name}/latest`
      }

      try {
        mockHTTPClient.get.mockResolvedValueOnce({
          data: mockContract,
          status: 200,
          headers: {}
        })
        const res = await client.getContract(name, undefined, authToken, headers)
        expect(res).toEqual(mockContract)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, headers)
    })

    it('should fail with an error if call fails', async () => {
      const req: IHttpGETRequest = {
        path: `/contracts/${name}/${tag}`
      }

      const err = new Error('fail message')
      try {
        mockHTTPClient.get.mockRejectedValueOnce({
          data: err,
          status: 500,
          headers: {}
        })
        await client.getContract(name, tag, authToken)
        fail('expected to fail')
      } catch (e) {
        expect(e.data).toEqual(err)
        expect(e.status).toEqual(500)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, undefined)
    })
  })

  describe('registerContract', () => {
    const contract: types.IRegisterContractRequest = {
      name: 'MyContract',
      tag: 'v.1.0.0',
      abi: mockContract.abi,
      bytecode: mockContract.bytecode,
      deployedBytecode: mockContract.deployedBytecode
    }

    it('should register a new chain successfully', async () => {
      try {
        mockHTTPClient.post.mockResolvedValueOnce(mockContract)
        const res = await client.registerContract(contract)
        expect(res).toEqual(mockContract)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith('/contracts', contract, undefined, undefined)
    })

    it('should register a new contract with jwt successfully', async () => {
      mockHTTPClient.post.mockResolvedValueOnce(mockContract)

      try {
        const res = await client.registerContract(contract, authToken, headers)
        expect(res).toEqual(mockContract)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith('/contracts', contract, authToken, headers)
    })

    it('should fail with an error if call fails', async () => {
      const err = new Error('fail message')
      try {
        mockHTTPClient.post.mockRejectedValueOnce({
          data: err,
          status: 500,
          headers: {}
        })
        await client.registerContract(contract)
        fail(`expected to fail`)
      } catch (e) {
        expect(e.data).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith('/contracts', contract, undefined, undefined)
    })
  })

  describe('searchAccounts', () => {
    it('should fetch filtered accounts successfully', async () => {
      const creq: types.ISearchAccountsRequest = {
        aliases: ['alias']
      }
      const req: IHttpGETRequest = {
        path: `/accounts`,
        query: creq
      }

      mockHTTPClient.get.mockResolvedValueOnce({
        data: [mockAccountResp],
        status: 200,
        headers: {}
      })

      const data = await client.searchAccounts(creq, authToken, headers)

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, headers)
      expect(data).toEqual([mockAccountResp])
    })

    it('should fail to filter accounts', async () => {
      const req: IHttpGETRequest = {
        path: `/accounts`
      }

      const err = new Error('MyError')
      mockHTTPClient.get.mockRejectedValueOnce(err)
      try {
        await client.searchAccounts()
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, undefined, undefined)
    })
  })

  describe('getAccount', () => {
    it('should fetch one account by address successfully', async () => {
      const address = '0xaddress'
      const req: IHttpGETRequest = {
        path: `/accounts/${address}`
      }

      mockHTTPClient.get.mockResolvedValueOnce({
        data: mockAccountResp,
        status: 200,
        headers: {}
      })
      const data = await client.getAccount(address, authToken, headers)

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, headers)
      expect(data).toEqual(mockAccountResp)
    })

    it('should fail to fetch one account by address', async () => {
      const address = '0xaddress'
      const req: IHttpGETRequest = {
        path: `/accounts/${address}`
      }
      const err = new Error('MyError')

      mockHTTPClient.get.mockRejectedValueOnce(err)
      try {
        await client.getAccount(address, authToken, headers)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req, authToken, headers)
    })
  })

  describe('createAccount', () => {
    const creq: types.ICreateAccountRequest = {
      chain: 'MyChain',
      alias: 'MyAlias',
      attributes: {
        attr0: 'attribute0',
        attr1: 'attribute1'
      }
    }

    it('should create a new account successfully', async () => {
      mockHTTPClient.post.mockResolvedValueOnce(mockAccountResp)

      const data = await client.createAccount(creq, authToken, headers)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(`/accounts`, creq, authToken, headers)
      expect(data).toEqual(mockAccountResp)
    })

    it('should create a new account successfully with empty request', async () => {
      mockHTTPClient.post.mockResolvedValueOnce(mockAccountResp)

      const data = await client.createAccount()

      expect(mockHTTPClient.post).toHaveBeenCalledWith(`/accounts`, {}, undefined, undefined)
      expect(data).toEqual(mockAccountResp)
    })

    it('should fail to create an account', async () => {
      const err = new Error('MyError')
      mockHTTPClient.post.mockRejectedValueOnce(err)
      try {
        await client.createAccount(creq)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(`/accounts`, creq, undefined, undefined)
    })
  })

  describe('importAccount', () => {
    const creq: types.IImportAccountRequest = {
      chain: 'MyChain',
      alias: 'MyAlias',
      attributes: {
        attr0: 'attribute0',
        attr1: 'attribute1'
      },
      privateKey: '0xprivateKey'
    }

    it('should import an account successfully', async () => {
      mockHTTPClient.post.mockResolvedValueOnce(mockAccountResp)

      const data = await client.importAccount(creq, authToken, headers)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(`/accounts/import`, creq, authToken, headers)
      expect(data).toEqual(mockAccountResp)
    })

    it('should fail to import an account', async () => {
      const err = new Error('MyError')
      mockHTTPClient.post.mockRejectedValueOnce(err)
      try {
        await client.importAccount(creq)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(`/accounts/import`, creq, undefined, undefined)
    })
  })

  describe('sign', () => {
    const address = '0xaddress'
    const signature = '0xsignature'
    const message = 'my data to sign'

    it('should sign a message successfully', async () => {
      mockHTTPClient.post.mockResolvedValueOnce(signature)

      const response = await client.signMessage(address, message, authToken, headers)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(
        `/accounts/${address}/sign-message`,
        { message },
        authToken,
        headers
      )
      expect(response).toEqual(signature)
    })

    it('should fail to sign a message', async () => {
      const err = new Error('MyError')
      mockHTTPClient.post.mockRejectedValueOnce(err)
      try {
        await client.signMessage(address, 'my data to sign')
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(
        `/accounts/${address}/sign-message`,
        { message },
        undefined,
        undefined
      )
    })
  })

  describe('update', () => {
    const address = '0xaddress'
    const creq: types.IUpdateAccountRequest = {
      alias: 'MyAlias',
      attributes: { attr1: 'val1' }
    }

    it('should update an account successfully', async () => {
      mockHTTPClient.patch.mockResolvedValueOnce(mockAccountResp)

      const data = await client.updateAccount(address, creq, authToken, headers)

      expect(mockHTTPClient.patch).toHaveBeenCalledWith(`/accounts/${address}`, creq, authToken, headers)
      expect(data).toEqual(mockAccountResp)
    })

    it('should fail to update an account', async () => {
      const err = new Error('MyError')
      mockHTTPClient.patch.mockRejectedValueOnce(err)
      try {
        await client.updateAccount(address, creq)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.patch).toHaveBeenCalledWith(`/accounts/${address}`, creq, undefined, undefined)
    })
  })

  describe('signTypedData', () => {
    const address = '0xaddress'
    const signature = '0xsignature'
    const request: types.ISignTypedDataRequest = {
      domainSeparator: {
        chainID: 1,
        name: 'myApp',
        salt: 'mySalt',
        version: 'v1.0.0'
      },
      message: {},
      messageType: '',
      types: {}
    }

    it('should sign a message successfully', async () => {
      mockHTTPClient.post.mockResolvedValueOnce(signature)

      const response = await client.signTypedData(address, request, authToken, headers)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(
        `/accounts/${address}/sign-typed-data`,
        request,
        authToken,
        headers
      )
      expect(response).toEqual(signature)
    })

    it('should fail to sign a typed data message', async () => {
      const err = new Error('MyError')
      mockHTTPClient.post.mockRejectedValueOnce(err)
      try {
        await client.signTypedData(address, request)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(
        `/accounts/${address}/sign-typed-data`,
        request,
        undefined,
        undefined
      )
    })
  })

  describe('verifySignature', () => {
    const request: types.IVerifyMessageRequest = {
      data: 'my data to sign',
      address: '0xaddress',
      signature: '0xsignature'
    }

    it('should verify a signature successfully', async () => {
      mockHTTPClient.post.mockResolvedValueOnce({
        status: 204,
        headers: {}
      })

      await client.verifyMessage(request, authToken, headers)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(`/accounts/verify-message`, request, authToken, headers)
    })

    it('should fail to verify a signature', async () => {
      const err = new Error('MyError')
      mockHTTPClient.post.mockRejectedValueOnce(err)
      try {
        await client.verifyMessage(request)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(`/accounts/verify-message`, request, undefined, undefined)
    })
  })

  describe('verifyTypedDataSignature', () => {
    const request: types.IVerifyTypedDataSignatureRequest = {
      data: {
        domainSeparator: {
          chainID: 1,
          name: 'myApp',
          salt: 'mySalt',
          version: 'v1.0.0'
        },
        message: {},
        messageType: '',
        types: {}
      },
      address: '0xaddress',
      signature: '0xsignature'
    }

    it('should verify a typed message successfully', async () => {
      mockHTTPClient.post.mockResolvedValueOnce({
        status: 204,
        headers: {}
      })

      await client.verifyTypedDataSignature(request, authToken, headers)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(
        `/accounts/verify-typed-data-signature`,
        request,
        authToken,
        headers
      )
    })

    it('should fail to verify a typed data message', async () => {
      const err = new Error('MyError')
      mockHTTPClient.post.mockRejectedValueOnce(err)
      try {
        await client.verifyTypedDataSignature(request, authToken, headers)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(
        `/accounts/verify-typed-data-signature`,
        request,
        authToken,
        headers
      )
    })
  })
})
