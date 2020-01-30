import {
  generateAccountsHandler,
  getCatalogHandler,
  getContractHandler,
  getTagsHandler,
  registerContractHandler
} from './handlers'

const mockContractRegistry = {
  getCatalog: jest.fn(),
  get: jest.fn(),
  getTags: jest.fn(),
  register: jest.fn()
}

const mockAccountGenerator = {
  generateAccounts: jest.fn()
}

const mockProducer = {}

jest.mock('fs')
jest.mock('../../grpc', () => ({
  ContractRegistry: jest.fn().mockImplementation(() => mockContractRegistry)
}))
jest.mock('../../kafka', () => ({
  Producer: jest.fn().mockImplementation(() => mockProducer),
  AccountGenerator: jest.fn().mockImplementation(() => mockAccountGenerator)
}))

const mockEndpoint = 'endpoint:5000'
const mockName = 'myContract'
const mockTag = 'v1'

describe('handlers', () => {
  describe('getCatalogHandler', () => {
    it('should return and not fail if registry fails', async () => {
      mockContractRegistry.getCatalog.mockRejectedValueOnce(new Error())

      await getCatalogHandler({
        endpoint: mockEndpoint
      })

      expect(mockContractRegistry.getCatalog).toHaveBeenCalled()
    })

    it('should call the handler successfully', async () => {
      mockContractRegistry.getCatalog.mockResolvedValueOnce(['contract0', 'contract1'])

      await getCatalogHandler({
        endpoint: mockEndpoint
      })

      expect(mockContractRegistry.getCatalog).toHaveBeenCalled()
    })
  })

  describe('getContractHandler', () => {
    it('should return and not fail if registry fails', async () => {
      mockContractRegistry.get.mockRejectedValueOnce(new Error())

      await getContractHandler({
        endpoint: mockEndpoint,
        name: mockName
      })

      expect(mockContractRegistry.get).toHaveBeenCalled()
    })

    it('should call the handler successfully', async () => {
      mockContractRegistry.get.mockResolvedValueOnce('0xbytecodeHash')

      await getContractHandler({
        endpoint: mockEndpoint,
        name: mockName,
        tag: mockTag
      })

      expect(mockContractRegistry.get).toHaveBeenCalledWith(mockName, mockTag)
    })
  })

  describe('getTagsHandler', () => {
    it('should return and not fail if registry fails', async () => {
      mockContractRegistry.getTags.mockRejectedValueOnce(new Error())

      await getTagsHandler({
        endpoint: mockEndpoint,
        name: mockName
      })

      expect(mockContractRegistry.getTags).toHaveBeenCalled()
    })

    it('should call the handler successfully', async () => {
      mockContractRegistry.getTags.mockResolvedValueOnce('0xbytecodeHash')

      await getTagsHandler({
        endpoint: mockEndpoint,
        name: mockName
      })

      expect(mockContractRegistry.getTags).toHaveBeenCalledWith(mockName)
    })
  })

  describe('registerContractHandler', () => {
    const mockFilePath = 'path'
    const mockArtifact = {
      abi: [
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
      ],
      bytecode: '0xfefe',
      deployedBytecode: '0xdede'
    }

    let fs: any

    beforeEach(async () => {
      fs = await require('fs')
    })

    it('should return and not fail if reading artifacts fails', async () => {
      fs.readFileSync.mockImplementationOnce(() => {
        throw new Error()
      })

      await registerContractHandler({
        endpoint: mockEndpoint,
        name: mockName,
        filePath: mockFilePath
      })

      expect(fs.readFileSync).toHaveBeenCalledWith(mockFilePath)
      expect(mockContractRegistry.register).not.toHaveBeenCalled()
    })

    it('should throw if no ABI in the artifacts', async () => {
      fs.readFileSync.mockReturnValueOnce({ toString: () => JSON.stringify({ ...mockArtifact, abi: undefined }) })

      await registerContractHandler({
        endpoint: mockEndpoint,
        name: mockName,
        tag: mockTag,
        filePath: mockFilePath
      })

      expect(mockContractRegistry.register).not.toHaveBeenCalled()
    })

    it('should throw if no bytecode in the artifacts', async () => {
      fs.readFileSync.mockReturnValueOnce({ toString: () => JSON.stringify({ ...mockArtifact, bytecode: undefined }) })

      await registerContractHandler({
        endpoint: mockEndpoint,
        name: mockName,
        tag: mockTag,
        filePath: mockFilePath
      })

      expect(mockContractRegistry.register).not.toHaveBeenCalled()
    })

    it('should throw if no deployedBytecode in the artifacts', async () => {
      fs.readFileSync.mockReturnValueOnce({
        toString: () => JSON.stringify({ ...mockArtifact, deployedBytecode: undefined })
      })

      await registerContractHandler({
        endpoint: mockEndpoint,
        name: mockName,
        tag: mockTag,
        filePath: mockFilePath
      })

      expect(mockContractRegistry.register).not.toHaveBeenCalled()
    })

    it('should call the handler successfully', async () => {
      fs.readFileSync.mockReturnValueOnce({ toString: () => JSON.stringify(mockArtifact) })

      await registerContractHandler({
        endpoint: mockEndpoint,
        name: mockName,
        tag: mockTag,
        filePath: mockFilePath
      })

      expect(mockContractRegistry.register).toHaveBeenCalledWith({
        name: mockName,
        tag: mockTag,
        abi: mockArtifact.abi,
        bytecode: mockArtifact.bytecode,
        deployedBytecode: mockArtifact.deployedBytecode
      })
    })
  })

  describe('generateAccountsHandler', () => {
    const mockAmount = 5
    const mockChain = 'chain'
    const mockValue = '5000'

    it('should return and not fail if account generator fails', async () => {
      mockAccountGenerator.generateAccounts.mockRejectedValueOnce(new Error())

      await generateAccountsHandler({
        endpoint: mockEndpoint
      })

      expect(mockAccountGenerator.generateAccounts).toHaveBeenCalled()
    })

    it('should call the handler successfully', async () => {
      mockAccountGenerator.generateAccounts.mockResolvedValueOnce(['address'])

      await generateAccountsHandler({
        endpoint: mockEndpoint,
        amount: mockAmount,
        chain: mockChain,
        value: mockValue
      })

      expect(mockAccountGenerator.generateAccounts).toHaveBeenCalledWith(mockAmount, {
        chain: mockChain,
        value: mockValue
      })
    })
  })
})
