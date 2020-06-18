import { contractregistry } from '../../stubs'

import { ContractRegistry } from './ContractRegistry'

const mockRPCClient = {
  makeUnaryRequest: jest.fn()
}
const mockMetadata = {
  set: jest.fn()
}

jest.mock('@grpc/grpc-js', () => ({
  Client: jest.fn().mockImplementation(() => mockRPCClient),
  ChannelCredentials: { createInsecure: jest.fn() },
  Metadata: jest.fn().mockImplementation(() => mockMetadata)
}))

const mockABI = [
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
]
const mockBytecode = '0xfefe'
const mockDeployedBytecode = '0xdede'
const mockContractName = 'myContract'
const mockTag = 'tag'
const mockAuthToken = 'authToken'

describe('ContractRegistry', () => {
  let contractRegistry: ContractRegistry

  beforeEach(() => {
    contractRegistry = new ContractRegistry('endpoint:3000')
  })

  describe('register', () => {
    it('should register a new contract successfully', async () => {
      mockUnaryRequest(contractregistry.RegisterContractResponse.encode({}).finish())

      const request = {
        name: 'myContract',
        tag: '1',
        abi: mockABI,
        bytecode: mockBytecode,
        deployedBytecode: mockDeployedBytecode,
        authToken: mockAuthToken
      }

      const expectedRequestData = contractregistry.RegisterContractRequest.encode({
        contract: {
          id: {
            name: request.name,
            tag: request.tag
          },
          abi: JSON.stringify(request.abi),
          bytecode: request.bytecode,
          deployedBytecode: request.deployedBytecode
        }
      }).finish()

      await contractRegistry.register(request)

      expectUnaryRequest('RegisterContract', expectedRequestData)
      expect(mockMetadata.set).toHaveBeenCalledWith('Authorization', mockAuthToken)
    })

    it('should fail to register a new contract', async () => {
      mockUnaryRequestFailure()
      try {
        await contractRegistry.register({ wrongField: 'wrongRequest' } as any)
        fail('Expected failure')
      } catch (error) {
        expect(error).toEqual(new Error('unary request callBack failed'))
      }
    })
  })

  describe('getCatalog', () => {
    const mockNames = ['contract1', 'contract2']

    beforeEach(() => {
      mockUnaryRequest(contractregistry.GetCatalogResponse.encode({ names: mockNames }).finish())
    })

    it('should get a list of all contract names successfully', async () => {
      const expectedRequestData = contractregistry.GetCatalogRequest.encode({}).finish()

      const catalog = await contractRegistry.getCatalog(mockAuthToken)

      expectUnaryRequest('GetCatalog', expectedRequestData)
      expect(catalog).toEqual(mockNames)
      expect(mockMetadata.set).toHaveBeenCalledWith('Authorization', mockAuthToken)
    })
  })

  describe('get', () => {
    beforeEach(() => {
      mockUnaryRequest(
        contractregistry.GetContractResponse.encode({
          contract: {
            abi: JSON.stringify(mockABI),
            bytecode: mockBytecode,
            deployedBytecode: mockDeployedBytecode,
            id: {
              name: mockContractName,
              tag: mockTag
            }
          }
        }).finish()
      )
    })

    it('should get a contract successfully', async () => {
      const expectedRequestData = contractregistry.GetContractRequest.encode({
        contractId: {
          name: mockContractName,
          tag: mockTag
        }
      }).finish()

      const contract = await contractRegistry.get(mockContractName, mockTag, mockAuthToken)

      expectUnaryRequest('GetContract', expectedRequestData)
      expect(contract).toEqual({
        name: mockContractName,
        tag: mockTag,
        abi: mockABI,
        bytecode: mockBytecode,
        deployedBytecode: mockDeployedBytecode
      })
      expect(mockMetadata.set).toHaveBeenCalledWith('Authorization', mockAuthToken)
    })
  })

  describe('getABI', () => {
    beforeEach(() => {
      mockUnaryRequest(
        contractregistry.GetContractABIResponse.encode({
          abi: JSON.stringify(mockABI)
        }).finish()
      )
    })

    it('should get a contract ABI successfully', async () => {
      const expectedRequestData = contractregistry.GetContractRequest.encode({
        contractId: {
          name: mockContractName,
          tag: mockTag
        }
      }).finish()

      const abi = await contractRegistry.getABI(mockContractName, mockTag, mockAuthToken)

      expectUnaryRequest('GetContractABI', expectedRequestData)
      expect(abi).toEqual(mockABI)
      expect(mockMetadata.set).toHaveBeenCalledWith('Authorization', mockAuthToken)
    })
  })

  describe('getBytecode', () => {
    beforeEach(() => {
      mockUnaryRequest(
        contractregistry.GetContractBytecodeResponse.encode({
          bytecode: mockBytecode
        }).finish()
      )
    })

    it('should get a contract bytecode successfully', async () => {
      const expectedRequestData = contractregistry.GetContractRequest.encode({
        contractId: {
          name: mockContractName,
          tag: mockTag
        }
      }).finish()

      const bytecode = await contractRegistry.getBytecode(mockContractName, mockTag, mockAuthToken)

      expectUnaryRequest('GetContractBytecode', expectedRequestData)
      expect(bytecode).toEqual(mockBytecode)
      expect(mockMetadata.set).toHaveBeenCalledWith('Authorization', mockAuthToken)
    })
  })

  describe('getDeployedBytecode', () => {
    beforeEach(() => {
      mockUnaryRequest(
        contractregistry.GetContractDeployedBytecodeResponse.encode({
          deployedBytecode: mockDeployedBytecode
        }).finish()
      )
    })

    it('should get a contract deployed bytecode successfully', async () => {
      const expectedRequestData = contractregistry.GetContractRequest.encode({
        contractId: {
          name: mockContractName,
          tag: mockTag
        }
      }).finish()

      const bytecode = await contractRegistry.getDeployedBytecode(mockContractName, mockTag, mockAuthToken)

      expectUnaryRequest('GetContractDeployedBytecode', expectedRequestData)
      expect(bytecode).toEqual(mockDeployedBytecode)
      expect(mockMetadata.set).toHaveBeenCalledWith('Authorization', mockAuthToken)
    })
  })

  describe('getTags', () => {
    const mockTags = ['tag1', 'tag2']

    beforeEach(() => {
      mockUnaryRequest(
        contractregistry.GetTagsResponse.encode({
          tags: mockTags
        }).finish()
      )
    })

    it('should get a contract tags successfully', async () => {
      const expectedRequestData = contractregistry.GetTagsRequest.encode({
        name: mockContractName
      }).finish()

      const tags = await contractRegistry.getTags(mockContractName, mockAuthToken)

      expectUnaryRequest('GetTags', expectedRequestData)
      expect(tags).toEqual(mockTags)
      expect(mockMetadata.set).toHaveBeenCalledWith('Authorization', mockAuthToken)
    })
  })

  const mockUnaryRequest = (data: Uint8Array) => {
    mockRPCClient.makeUnaryRequest = jest
      .fn()
      .mockImplementationOnce(
        (method: any, serialize: any, deserialize: any, requestData, callMetadata: any, callback: any) => {
          callback(undefined, data)
        }
      )
  }

  const mockUnaryRequestFailure = () => {
    mockRPCClient.makeUnaryRequest = jest
      .fn()
      .mockImplementationOnce(
        (method: any, serialize: any, deserialize: any, requestData, callMetadata: any, callback: any) => {
          callback(new Error('unary request callBack failed'), undefined)
        }
      )
  }

  const expectUnaryRequest = (methodName: string, expectedRequestData?: Uint8Array) => {
    expect(mockRPCClient.makeUnaryRequest).toHaveBeenCalledWith(
      `contractregistry.ContractRegistry/${methodName}`,
      expect.any(Function),
      expect.any(Function),
      expectedRequestData,
      mockMetadata,
      expect.any(Function)
    )
  }
})
