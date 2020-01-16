import { DEFAULT_TOPIC_WALLET_GENERATOR } from '../constants'

import { Producer } from './Producer'

const mockKafkaProducer = {
  connect: jest.fn(),
  disconnect: jest.fn(),
  send: jest.fn()
}

jest.mock('kafkajs', () => ({
  Kafka: jest.fn().mockImplementation(() => ({
    producer: jest.fn().mockImplementation(() => mockKafkaProducer)
  }))
}))

const brokers = ['kafkaHost:6000', 'kafkaHost:6001']
const topic = 'topic'
const mockMessage = {
  field: 'myField',
  value: 'myValue'
}
const mockResult = { field: 'myResult' }

describe('Producer', () => {
  let producer: Producer

  beforeEach(() => {
    mockKafkaProducer.send.mockResolvedValueOnce([mockResult])

    producer = new Producer(brokers)
  })

  describe('getBrokers', () => {
    it('should return the kafka host successfully', () => {
      expect(producer.getBrokers()).toEqual(brokers)
    })
  })

  describe('connect', () => {
    it('ready() should return false if connect() has not been called', () => {
      expect(producer.ready()).toEqual(false)
    })

    it('should connect successfully', async () => {
      await producer.connect()

      expect(mockKafkaProducer.connect).toHaveBeenCalled()
      expect(producer.ready()).toEqual(true)
    })

    it('should return an error if connect() fails', async () => {
      const error = new Error()
      mockKafkaProducer.connect.mockRejectedValueOnce(error)

      await expect(producer.connect()).rejects.toThrow(error)
    })
  })

  describe('disconnect', () => {
    it('should fail if the producer is not connected', async () => {
      await expect(producer.disconnect()).rejects.toThrowError(
        new Error('Producer is not currently connected, did you forget to call connect()?')
      )
    })

    it('should disconnect successfully ', async () => {
      await producer.connect()
      await producer.disconnect()

      expect(mockKafkaProducer.disconnect).toHaveBeenCalled()
      expect(producer.ready()).toEqual(false)
    })
  })

  describe('produce', () => {
    it('should fail if the producer is not connected', async () => {
      await expect(producer.produce(topic, mockMessage as any)).rejects.toThrowError(
        new Error('Producer is not currently connected, did you forget to call connect()?')
      )
    })

    it('should produce a message successfully ', async () => {
      await producer.connect()
      const result = await producer.produce(topic, mockMessage as any)

      expect(mockKafkaProducer.send).toHaveBeenCalledWith({ topic, messages: [mockMessage] })
      expect(result).toEqual(mockResult)
    })
  })

  describe('sendTransaction', () => {
    it('should fail if the producer is not connected', async () => {
      await expect(producer.produce(topic, mockMessage as any)).rejects.toThrowError(
        new Error('Producer is not currently connected, did you forget to call connect()?')
      )
    })

    it('should produce a message successfully ', async () => {
      await producer.connect()
      const result = await producer.produce(topic, mockMessage as any)

      expect(mockKafkaProducer.send).toHaveBeenCalledWith({ topic, messages: [mockMessage] })
      expect(result).toEqual(mockResult)
    })
  })

  describe('generateWallet', () => {
    it('should fail if the producer is not connected', async () => {
      await expect(producer.generateWallet()).rejects.toThrowError(
        new Error('Producer is not currently connected, did you forget to call connect()?')
      )
    })

    it('should generate message to create a wallet succesfully', async () => {
      const extraData = { extraDataField: 'extraDataField' }
      const requestId = 'requestId'

      await producer.connect()
      const result = await producer.generateWallet(topic, requestId, extraData)

      // TODO: Test unmarshal method is used instead of JSON.stringify
      const expectedMessage = {
        value: JSON.stringify({
          metadata: {
            id: requestId,
            extra: extraData
          }
        })
      }

      expect(mockKafkaProducer.send).toHaveBeenCalledWith({ topic, messages: [expectedMessage] })
      expect(result).toEqual(mockResult)
    })

    it('should use default topic iand generate a random id if none is specified', async () => {
      await producer.connect()
      const result = await producer.generateWallet()

      expect(mockKafkaProducer.send).toHaveBeenCalledWith({
        topic: DEFAULT_TOPIC_WALLET_GENERATOR,
        messages: expect.any(Array)
      })
      expect(result).toEqual(mockResult)
    })
  })
})
