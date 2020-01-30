import { EventEmitter } from 'events'
import createMockInstance from 'jest-create-mock-instance'

import { ResponseMessage } from '../consumer'
import { Producer } from '../producer'
import { EventType } from '../types'

import { AccountGenerator } from './AccountGenerator'

const mockConsumer: any = new EventEmitter()
let mockResponseMessage = {
  content: jest.fn()
}

jest.mock('../consumer', () => ({
  Consumer: jest.fn().mockImplementation(() => mockConsumer),
  ResponseMessage: jest.fn().mockImplementation(() => mockResponseMessage)
}))

describe('AccountGenerator', () => {
  let accountGenerator: AccountGenerator
  let mockProducer: jest.Mocked<Producer>

  beforeEach(async () => {
    mockProducer = createMockInstance(Producer)
    mockConsumer.connect = jest.fn()
    mockConsumer.disconnect = jest.fn()
    mockConsumer.ready = jest.fn()
    mockConsumer.consume = jest.fn()

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
    it('should generate 3 accounts successfully', async done => {
      mockProducer.generateAccount
        .mockResolvedValueOnce('1')
        .mockResolvedValueOnce('2')
        .mockResolvedValueOnce('3')

      const amount = 3

      // tslint:disable-next-line: no-floating-promises
      accountGenerator.generateAccounts(amount).then(addresses => {
        expect(addresses).toEqual(['0xaddress1', '0xaddress2', '0xaddress3'])
        expect(mockConsumer.connect).toHaveBeenCalled()
        expect(mockProducer.connect).toHaveBeenCalled()
        expect(mockConsumer.consume).toHaveBeenCalled()
        expect(mockProducer.generateAccount).toHaveBeenCalledTimes(amount)

        done()
      })

      // We need to await a bit for the account generator to register a listener
      setTimeout(() => {
        // ID 0 is discarded because not returned by generateAccounts
        for (let i = 0; i < amount + 1; i++) {
          mockResponseMessage = {
            content: jest.fn().mockReturnValueOnce({ value: { id: i.toString(), from: `0xaddress${i}` } })
          }
          mockConsumer.emit(EventType.Response, new ResponseMessage(mockConsumer, mockResponseMessage as any))
        }
      }, 100)
    })
  })
})
