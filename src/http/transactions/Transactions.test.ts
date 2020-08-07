import {
  IDeployContractRequest,
  IETHTransactionParams,
  IJobResponse,
  ILog,
  IScheduleResponse,
  ISearchRequest,
  ISendRawRequest,
  ISendTransactionRequest,
  ITransactionResponse,
  ITransferRequest,
  ProtocolType
} from '../types'
import { IHttpGETRequest, IHttpPOSTRequest } from '../types/IHttpClient'

import { TransactionClient } from './Transactions'

const mockJobLogRes: ILog = {
  message: 'Job Created',
  status: 'CREATED',
  createdAt: new Date()
}

const mockJobRes: IJobResponse = {
  uuid: 'jobUUID',
  chainUUID: 'chainUUID',
  logs: [mockJobLogRes],
  transaction: {},
  status: 'STARTED',
  type: 'eth://ethereum/transaction',
  createdAt: new Date()
}

const mockScheduleRes: IScheduleResponse = {
  uuid: 'scheduleUUID',
  jobs: [mockJobRes],
  createdAt: new Date()
}

const mockETHParams: IETHTransactionParams = {}

const mockTransactionResp: ITransactionResponse = {
  uuid: 'transactionUUID',
  idempotencyKey: 'idempotencyKey',
  params: mockETHParams,
  schedule: mockScheduleRes,
  createdAt: new Date()
}

const authToken = 'MyTenantAuthToken'

const mockHTTPClient = {
  get: jest.fn(),
  post: jest.fn()
}

jest.mock('../HttpClient', () => ({
  HttpClient: jest.fn().mockImplementation(() => mockHTTPClient)
}))

describe('TxSchedulerClient', () => {
  let txScheduler: TransactionClient

  beforeAll(() => {
    txScheduler = new TransactionClient('endpoint:8081')
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  describe('get', () => {
    it('should fetch one transaction by UUID successfully', async () => {
      const req: IHttpGETRequest = {
        path: `/transactions/${mockTransactionResp.uuid}`
      }

      mockHTTPClient.get.mockResolvedValueOnce({
        data: mockTransactionResp,
        status: 200,
        headers: {}
      })
      const data = await txScheduler.get(mockTransactionResp.uuid)

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
      expect(data).toEqual(mockTransactionResp)
    })

    it('should fail to fetch one transaction by UUID', async () => {
      const req: IHttpGETRequest = {
        path: `/transactions/${mockTransactionResp.uuid}`,
        authToken
      }
      const err = new Error('MyError')

      mockHTTPClient.get.mockRejectedValueOnce(err)
      try {
        await txScheduler.get(mockTransactionResp.uuid, authToken)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })
  })

  describe('search', () => {
    it('should fetch filtered transaction successfully', async () => {
      const creq: ISearchRequest = {
        idempotency_keys: [mockTransactionResp.idempotencyKey]
      }
      const req: IHttpGETRequest = {
        path: `/transactions`,
        query: creq,
        authToken
      }

      mockHTTPClient.get.mockResolvedValueOnce({
        data: [mockTransactionResp],
        status: 200,
        headers: {}
      })

      const data = await txScheduler.search(creq, authToken)

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
      expect(data).toEqual([mockTransactionResp])
    })

    it('should fail to filter transactions', async () => {
      const creq: ISearchRequest = {
        idempotency_keys: [mockTransactionResp.idempotencyKey]
      }
      const req: IHttpGETRequest = {
        path: `/transactions`,
        query: creq
      }

      const err = new Error('MyError')
      mockHTTPClient.get.mockRejectedValueOnce(err)
      try {
        await txScheduler.search(creq)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })
  })

  describe('deployContract', () => {
    it('should deploy contract transaction successfully', async () => {
      const creq: IDeployContractRequest = {
        chain: 'MyChain',
        params: {
          contractName: 'SimpleContract',
          args: ['arg1', 'arg2']
        }
      }
      const req: IHttpPOSTRequest = {
        path: `/transactions/deploy-contract`,
        data: creq
      }

      mockHTTPClient.post.mockResolvedValueOnce({
        data: mockTransactionResp,
        status: 200,
        headers: {}
      })

      const data = await txScheduler.deployContract(creq)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req, {})
      expect(data).toEqual(mockTransactionResp)
    })
  })

  describe('send', () => {
    it('should send a contract transaction successfully', async () => {
      const creq: ISendTransactionRequest = {
        chain: 'MyChain',
        params: {
          from: '0xFromAddr',
          to: '0xContractAddr',
          methodSignature: 'transfer(address, unit256)',
          args: ['0xToAddr', '1000']
        }
      }
      const req: IHttpPOSTRequest = {
        path: `/transactions/send`,
        data: creq
      }

      mockHTTPClient.post.mockResolvedValueOnce({
        data: mockTransactionResp,
        status: 200,
        headers: {}
      })

      const data = await txScheduler.send(creq, mockTransactionResp.idempotencyKey)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req, {
        'X-Idempotency-Key': mockTransactionResp.idempotencyKey
      })
      expect(data).toEqual(mockTransactionResp)
    })
  })

  describe('send private', () => {
    it('should send a contract transaction successfully', async () => {
      const creq: ISendTransactionRequest = {
        chain: 'MyChain',
        params: {
          from: '0xFromAddr',
          to: '0xContractAddr',
          methodSignature: 'transfer(address, unit256)',
          args: ['0xToAddr', '1000'],
          protocol: ProtocolType.Orion,
          privateFor: ['0xpubkey1', '0xpubkey2'],
          privateFrom: '0xpubkey'
        }
      }
      const req: IHttpPOSTRequest = {
        path: `/transactions/send`,
        data: creq
      }

      mockHTTPClient.post.mockResolvedValueOnce({
        data: mockTransactionResp,
        status: 200,
        headers: {}
      })

      const data = await txScheduler.send(creq, mockTransactionResp.idempotencyKey)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req, {
        'X-Idempotency-Key': mockTransactionResp.idempotencyKey
      })
      expect(data).toEqual(mockTransactionResp)
    })
  })

  describe('sendRaw', () => {
    it('should send a contract transaction successfully', async () => {
      const creq: ISendRawRequest = {
        chain: 'MyChain',
        params: {
          raw: '0xRawTransactionData'
        }
      }
      const req: IHttpPOSTRequest = {
        path: `/transactions/send-raw`,
        data: creq,
        authToken
      }

      mockHTTPClient.post.mockResolvedValueOnce({
        data: mockTransactionResp,
        status: 200,
        headers: {}
      })

      const data = await txScheduler.sendRaw(creq, mockTransactionResp.idempotencyKey, authToken)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req, {
        'X-Idempotency-Key': mockTransactionResp.idempotencyKey
      })
      expect(data).toEqual(mockTransactionResp)
    })
  })

  describe('sendTransfer', () => {
    it('should send a transfer transaction successfully', async () => {
      const creq: ITransferRequest = {
        chain: 'MyChain',
        params: {
          from: '0xFromAddr',
          to: '0xToAddr',
          value: '10000'
        }
      }
      const req: IHttpPOSTRequest = {
        path: `/transactions/transfer`,
        data: creq,
        authToken
      }

      mockHTTPClient.post.mockResolvedValueOnce({
        data: mockTransactionResp,
        status: 200,
        headers: {}
      })

      const data = await txScheduler.transfer(creq, undefined, authToken)

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req, {})
      expect(data).toEqual(mockTransactionResp)
    })

    it('should fail to send a transfer transaction', async () => {
      const creq: ITransferRequest = {
        chain: 'MyChain',
        params: {
          from: '0xFromAddr',
          to: '0xToAddr',
          value: '10000'
        }
      }
      const req: IHttpPOSTRequest = {
        path: `/transactions/transfer`,
        data: creq
      }

      const err = new Error('MyError')
      mockHTTPClient.post.mockRejectedValueOnce(err)
      try {
        await txScheduler.transfer(creq)
        fail('expected failed request')
      } catch (e) {
        expect(e).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req, {})
    })
  })
})
