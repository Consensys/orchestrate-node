import { IContract, IRegisterContractRequest } from '../types'
import { IHttpGETRequest, IHttpPOSTRequest } from '../types/IHttpClient'

import { ContractRegistry } from './ContractRegistry'

const mockHTTPClient = {
  get: jest.fn(),
  post: jest.fn()
}

jest.mock('../HttpClient', () => ({
  HttpClient: jest.fn().mockImplementation(() => mockHTTPClient)
}))

const mockContract: IContract = {
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

describe('ContractRegistry', () => {
  const authToken = 'validJWT'
  let contractRegistry: ContractRegistry

  beforeAll(() => {
    contractRegistry = new ContractRegistry('endpoint:8081')
  })

  afterEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
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
      await contractRegistry.list()

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })

    it('should fetch contracts with jwt successfully', async () => {
      const req: IHttpGETRequest = {
        path: '/contracts',
        authToken
      }

      try {
        mockHTTPClient.get.mockResolvedValueOnce({
          data: [mockContract.name],
          status: 200,
          headers: {}
        })
        const res = await contractRegistry.list(authToken)
        expect(res).toEqual([mockContract.name])
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })

    it('should fetch contracts with jwt with errors', async () => {
      const req: IHttpGETRequest = {
        path: '/contracts',
        authToken
      }

      const err = new Error('fail message')
      try {
        mockHTTPClient.get.mockRejectedValueOnce({
          data: err,
          status: 500,
          headers: {}
        })
        await contractRegistry.list(authToken)
        fail('expected to fail')
      } catch (e) {
        expect(e.data).toEqual(err)
        expect(e.status).toEqual(500)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
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
      await contractRegistry.getTags(name)

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })

    it('should fetch tags with jwt successfully', async () => {
      const req: IHttpGETRequest = {
        path: `/contracts/${name}`,
        authToken
      }

      try {
        mockHTTPClient.get.mockResolvedValueOnce({
          data: [mockContract.tag],
          status: 200,
          headers: {}
        })
        const res = await contractRegistry.getTags(name, authToken)
        expect(res).toEqual([mockContract.tag])
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })

    it('should fail with an error if call fails', async () => {
      const req: IHttpGETRequest = {
        path: `/contracts/${name}`,
        authToken
      }

      const err = new Error('fail message')
      try {
        mockHTTPClient.get.mockRejectedValueOnce({
          data: err,
          status: 500,
          headers: {}
        })
        await contractRegistry.getTags(name, authToken)
        fail('expected to fail')
      } catch (e) {
        expect(e.data).toEqual(err)
        expect(e.status).toEqual(500)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })
  })

  describe('get', () => {
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
      await contractRegistry.get(name, tag)

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })

    it('should fetch contract with jwt successfully', async () => {
      const req: IHttpGETRequest = {
        path: `/contracts/${name}/${tag}`,
        authToken
      }

      try {
        mockHTTPClient.get.mockResolvedValueOnce({
          data: mockContract,
          status: 200,
          headers: {}
        })
        const res = await contractRegistry.get(name, tag, authToken)
        expect(res).toEqual(mockContract)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })

    it('should fetch contract with latest tag', async () => {
      const req: IHttpGETRequest = {
        path: `/contracts/${name}/latest`,
        authToken
      }

      try {
        mockHTTPClient.get.mockResolvedValueOnce({
          data: mockContract,
          status: 200,
          headers: {}
        })
        const res = await contractRegistry.get(name, undefined, authToken)
        expect(res).toEqual(mockContract)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })

    it('should fail with an error if call fails', async () => {
      const req: IHttpGETRequest = {
        path: `/contracts/${name}/${tag}`,
        authToken
      }

      const err = new Error('fail message')
      try {
        mockHTTPClient.get.mockRejectedValueOnce({
          data: err,
          status: 500,
          headers: {}
        })
        await contractRegistry.get(name, tag, authToken)
        fail('expected to fail')
      } catch (e) {
        expect(e.data).toEqual(err)
        expect(e.status).toEqual(500)
      }

      expect(mockHTTPClient.get).toHaveBeenCalledWith(req)
    })
  })

  describe('register', () => {
    const contract: IRegisterContractRequest = {
      name: 'MyContract',
      tag: 'v.1.0.0',
      abi: mockContract.abi,
      bytecode: mockContract.bytecode,
      deployedBytecode: mockContract.deployedBytecode
    }

    it('should register a new chain successfully', async () => {
      const req: IHttpPOSTRequest = {
        path: '/contracts',
        data: contract
      }

      try {
        mockHTTPClient.post.mockResolvedValueOnce({
          data: mockContract,
          status: 200,
          headers: {}
        })
        const res = await contractRegistry.register(contract)
        expect(res).toEqual(mockContract)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
    })

    it('should register a new contract with jwt successfully', async () => {
      const req: IHttpPOSTRequest = {
        path: '/contracts',
        data: contract,
        authToken
      }

      mockHTTPClient.post.mockResolvedValueOnce({
        data: mockContract,
        status: 200,
        headers: {}
      })

      try {
        const res = await contractRegistry.register(contract, authToken)
        expect(res).toEqual(mockContract)
      } catch (e) {
        fail(e)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
    })

    it('should fail with an error if call fails', async () => {
      const req: IHttpPOSTRequest = {
        path: '/contracts',
        data: contract
      }

      const err = new Error('fail message')
      try {
        mockHTTPClient.post.mockRejectedValueOnce({
          data: err,
          status: 500,
          headers: {}
        })
        await contractRegistry.register(contract)
        fail(`expected to fail`)
      } catch (e) {
        expect(e.data).toEqual(err)
      }

      expect(mockHTTPClient.post).toHaveBeenCalledWith(req)
    })
  })
})
