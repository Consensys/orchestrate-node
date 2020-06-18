import { EventEmitter } from 'events'

import { ResponseMessage } from '../consumer'
import { EventType } from '../types'

import { AccountGenerator } from './AccountGenerator'

const mockConsumer: any = new EventEmitter()
const mockProducer = {
  connect: jest.fn(),
  disconnect: jest.fn(),
  generateAccount: jest.fn()
}
let mockResponseMessage = {
  content: jest.fn()
}

jest.mock('../consumer', () => ({
  Consumer: jest.fn().mockImplementation(() => mockConsumer),
  ResponseMessage: jest.fn().mockImplementation(() => mockResponseMessage)
}))

jest.mock('../producer', () => ({
  Producer: jest.fn().mockImplementation(() => mockProducer)
}))

describe('AccountGenerator', () => {
  let accountGenerator: AccountGenerator

  beforeEach(async () => {
    mockConsumer.connect = jest.fn()
    mockConsumer.disconnect = jest.fn()
    mockConsumer.ready = jest.fn()
    mockConsumer.consume = jest.fn()
    mockProducer.connect = jest.fn()
    mockProducer.disconnect = jest.fn()
    mockProducer.generateAccount = jest.fn()

    accountGenerator = new AccountGenerator(['endpoint:port'])
  })

  describe('connect', () => {
    it('should connect successfully if not connected', async () => {
      await accountGenerator.connect()

      expect(mockProducer.connect).toHaveBeenCalled()
      expect(mockConsumer.connect).toHaveBeenCalled()
      expect(mockConsumer.consume).toHaveBeenCalled()
      expect(accountGenerator.ready()).toEqual(true)
    })

    it('should not connect if already connected', async () => {
      await accountGenerator.connect()
      await accountGenerator.connect()

      expect(mockConsumer.connect).toHaveBeenCalledTimes(1)
      expect(mockProducer.connect).toHaveBeenCalledTimes(1)
      expect(mockConsumer.consume).toHaveBeenCalledTimes(1)
      expect(accountGenerator.ready()).toEqual(true)
    })
  })

  describe('disconnect', () => {
    it('should disconnect successfully if connected', async () => {
      await accountGenerator.connect()
      await accountGenerator.disconnect()

      expect(mockProducer.disconnect).toHaveBeenCalled()
      expect(mockConsumer.disconnect).toHaveBeenCalled()
      expect(accountGenerator.ready()).toEqual(false)
    })

    it('should not disconnect if already disconnected', async () => {
      await accountGenerator.disconnect()

      expect(mockConsumer.disconnect).not.toHaveBeenCalled()
      expect(mockProducer.disconnect).not.toHaveBeenCalled()
      expect(accountGenerator.ready()).toEqual(false)
    })
  })

  describe('generateAccount', () => {
    it('should generate an account successfully', async (done) => {
      mockProducer.generateAccount.mockResolvedValueOnce('id')
      const request = { authToken: 'Bearer token', chain: 'chain', value: '5000' }

      await accountGenerator.connect()

      // tslint:disable-next-line: no-floating-promises
      accountGenerator.generateAccount(request).then((address) => {
        expect(address).toEqual('0xaddress1')
        expect(mockProducer.generateAccount).toHaveBeenCalledWith(request)
        done()
      })

      // We need to await a bit for the account generator to register a listener
      setTimeout(() => {
        // Will be ignored because the Id is not registered
        mockResponseMessage = {
          content: jest.fn().mockReturnValueOnce({ value: { id: 'unknownId', txContext: { from: '0xaddress0' } } })
        }
        mockConsumer.emit(EventType.Response, new ResponseMessage(mockConsumer, mockResponseMessage as any))

        // Will be consumed and returned
        mockResponseMessage = {
          content: jest.fn().mockReturnValueOnce({ value: { id: 'id', txContext: { from: '0xaddress1' } } })
        }
        mockConsumer.emit(EventType.Response, new ResponseMessage(mockConsumer, mockResponseMessage as any))
      }, 100)
    })

    it('should fail if not connected', async () => {
      await expect(accountGenerator.generateAccount()).rejects.toThrowError(
        new Error('AccountGenerator is not currently connected, did you forget to call connect()?')
      )
    })

    it('should fail if timeout is reached', async () => {
      await accountGenerator.connect()
      await expect(accountGenerator.generateAccount(undefined, 1)).rejects.toEqual('Request timed out')
    })
  })
})
