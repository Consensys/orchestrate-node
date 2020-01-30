import createMockInstance from 'jest-create-mock-instance'

import { Producer } from '../producer'

import { AccountGenerator } from './AccountGenerator'

const mockConsumer = {
  connect: jest.fn(),
  disconnect: jest.fn(),
  ready: jest.fn()
}

jest.mock('../consumer', () => ({
  Consumer: jest.fn().mockImplementation(() => mockConsumer)
}))

describe('AccountGenerator', () => {
  let accountGenerator: AccountGenerator
  let mockProducer: jest.Mocked<Producer>

  beforeEach(async () => {
    mockProducer = createMockInstance(Producer)

    accountGenerator = new AccountGenerator(mockProducer)
  })

  describe('connect', () => {
    it('should connect successfully if producer is disconnected', async () => {
      mockConsumer.ready.mockReturnValueOnce(true)
      mockProducer.ready.mockReturnValueOnce(false)

      await accountGenerator.connect()

      expect(mockProducer.connect).toHaveBeenCalled()
      expect(mockConsumer.connect).not.toHaveBeenCalled()
      expect(accountGenerator.ready()).toEqual(true)
    })

    it('should connect successfully if consumer is disconnected', async () => {
      mockProducer.ready.mockReturnValueOnce(true)
      mockConsumer.ready.mockReturnValueOnce(false)

      await accountGenerator.connect()

      expect(mockConsumer.connect).toHaveBeenCalled()
      expect(mockProducer.connect).not.toHaveBeenCalled()
      expect(accountGenerator.ready()).toEqual(true)
    })
  })

  describe('disconnect', () => {
    it('should disconnect successfully if producer is connected', async () => {
      mockProducer.ready.mockReturnValueOnce(true)
      mockConsumer.ready.mockReturnValueOnce(false)

      await accountGenerator.disconnect()

      expect(mockProducer.disconnect).toHaveBeenCalled()
      expect(mockConsumer.disconnect).not.toHaveBeenCalled()
      expect(accountGenerator.ready()).toEqual(false)
    })

    it('should connect successfully if producer is disconnected', async () => {
      mockConsumer.ready.mockReturnValueOnce(true)
      mockProducer.ready.mockReturnValueOnce(false)

      await accountGenerator.disconnect()

      expect(mockConsumer.disconnect).toHaveBeenCalled()
      expect(mockProducer.disconnect).not.toHaveBeenCalled()
      expect(accountGenerator.ready()).toEqual(false)
    })
  })

  describe('generateAccounts', () => {
    it('should generate 5 accounts successfully', async () => {
      await accountGenerator.generateAccounts(
        5,
        'authToken',
        {
          field: 'field'
        },
        true
      )
    })
  })
})
