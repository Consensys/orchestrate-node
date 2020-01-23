import { marshalRequest, marshalTransactionRequest } from '../helpers'

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
const extraData = { extraDataField: 'extraDataField' }
const requestId = 'requestId'
const mockFrom = '0xc1912fee45d61c87cc5ea59dae31190fffff2333'

describe('Producer', () => {
  let producer: Producer

  beforeEach(() => {
    mockKafkaProducer.connect.mockClear()
    mockKafkaProducer.send.mockClear()
    mockKafkaProducer.disconnect.mockClear()

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
      await expect(producer.sendTransaction({} as any)).rejects.toThrowError(
        new Error('Producer is not currently connected, did you forget to call connect()?')
      )
    })

    it('should send a transaction successfully', async () => {
      const request = {
        from: mockFrom,
        id: requestId,
        extraData,
        chainId: '1',
        contractName: 'contract'
      }

      await producer.connect()
      const result = await producer.sendTransaction(request, topic)

      expect(mockKafkaProducer.send).toHaveBeenCalledWith({ topic, messages: [marshalTransactionRequest(request)] })
      expect(result).toEqual(requestId)
    })

    it('should send a transaction request with default parameters', async () => {
      const request = {
        from: mockFrom,
        contractName: 'contractName'
      }

      await producer.connect()
      const result = await producer.sendTransaction(request, topic)

      expect(mockKafkaProducer.send).toHaveBeenCalledWith({ topic, messages: [marshalTransactionRequest(request)] })
      expect(result).toEqual(expect.any(String))
    })

    it('should use default topic iand generate a random id if none is specified', async () => {
      await producer.connect()
      const result = await producer.generateWallet()

      expect(result).toEqual(expect.any(String))
    })
  })

  describe('generateWallet', () => {
    it('should fail if the producer is not connected', async () => {
      await expect(producer.generateWallet()).rejects.toThrowError(
        new Error('Producer is not currently connected, did you forget to call connect()?')
      )
    })

    it('should generate message to create a wallet succesfully', async () => {
      const request = { id: requestId, extraData }
      await producer.connect()
      const result = await producer.generateWallet(request, topic)

      expect(mockKafkaProducer.send).toHaveBeenCalledWith({ topic, messages: [marshalRequest(request)] })
      expect(result).toEqual(request.id)
    })

    it('should use default topic iand generate a random id if none is specified', async () => {
      await producer.connect()
      const result = await producer.generateWallet()

      expect(result).toEqual(expect.any(String))
    })
  })
})
