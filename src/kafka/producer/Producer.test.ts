import { marshalGenerateAccountRequest, marshalRawTransactionRequest, marshalTransactionRequest } from '../helpers'

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
const mockSignedTx =
  '0xf86780808252089488a5c2d9919e46f883eb62f7b8dd9d0cc45bc2908806f05b59d3b20000801ba0cf1f0ee7b02637e3d9c334ae5689c3e1fe102faf6c21486976b271c811098ef9a06b0bd4227f2d4fe4e59c09a47ec3770c63c165c4dce40d076bae22f780bebc50'

describe('Producer', () => {
  let producer: Producer

  beforeEach(() => {
    mockKafkaProducer.connect.mockClear()
    mockKafkaProducer.send.mockClear()
    mockKafkaProducer.disconnect.mockClear()

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

    it('should fail if send fails', async () => {
      await producer.connect()
      mockKafkaProducer.send.mockRejectedValueOnce(new Error('Failed to send'))

      await expect(producer.produce(topic, mockMessage as any)).rejects.toThrowError(new Error('Failed to send'))
    })

    it('should produce a message successfully ', async () => {
      await producer.connect()
      mockKafkaProducer.send.mockResolvedValueOnce([mockResult])

      const result = await producer.produce(topic, mockMessage as any)

      expect(mockKafkaProducer.send).toHaveBeenCalledWith({ topic, messages: [mockMessage] })
      expect(result).toEqual(mockResult)
    })
  })

  describe('sendTransaction', () => {
    const mockRequest = {
      from: mockFrom,
      id: requestId,
      extraData,
      chain: 'chain',
      contractName: 'contract'
    }

    it('should fail if the producer is not connected', async () => {
      await expect(producer.sendTransaction({} as any)).rejects.toThrowError(
        new Error('Producer is not currently connected, did you forget to call connect()?')
      )
    })

    it('should fail if produce fails', async () => {
      mockKafkaProducer.send.mockRejectedValueOnce(new Error('Failed to send'))

      await producer.connect()

      await expect(producer.sendTransaction(mockRequest, topic)).rejects.toThrowError(new Error('Failed to send'))
    })

    it('should send a transaction successfully', async () => {
      mockKafkaProducer.send.mockResolvedValueOnce([mockResult])

      await producer.connect()
      const result = await producer.sendTransaction(mockRequest, topic)

      expect(mockKafkaProducer.send).toHaveBeenCalledWith({ topic, messages: [marshalTransactionRequest(mockRequest)] })
      expect(result).toEqual(requestId)
    })

    it('should send a transaction request with default parameters', async () => {
      const request = {
        from: mockFrom,
        contractName: 'contractName',
        chain: 'chain'
      }
      mockKafkaProducer.send.mockResolvedValueOnce([mockResult])

      await producer.connect()
      const result = await producer.sendTransaction(request, topic)

      expect(mockKafkaProducer.send).toHaveBeenCalledWith({ topic, messages: [marshalTransactionRequest(request)] })
      expect(result).toEqual(expect.any(String))
    })
  })

  describe('sendRawTransaction', () => {
    beforeEach(() => {
      mockKafkaProducer.send.mockResolvedValueOnce([mockResult])
    })

    it('should fail if the producer is not connected', async () => {
      await expect(producer.sendRawTransaction({} as any)).rejects.toThrowError(
        new Error('Producer is not currently connected, did you forget to call connect()?')
      )
    })

    it('should send a raw transaction successfully', async () => {
      const request = {
        id: requestId,
        extraData,
        chain: 'chain',
        signedTransaction: mockSignedTx
      }

      await producer.connect()
      const result = await producer.sendRawTransaction(request, topic)

      expect(mockKafkaProducer.send).toHaveBeenCalledWith({ topic, messages: [marshalRawTransactionRequest(request)] })
      expect(result).toEqual(requestId)
    })

    it('should send a transaction request with default parameters', async () => {
      const request = {
        signedTransaction: mockSignedTx,
        chain: 'chain'
      }

      await producer.connect()
      const result = await producer.sendRawTransaction(request, topic)

      expect(mockKafkaProducer.send).toHaveBeenCalledWith({ topic, messages: [marshalRawTransactionRequest(request)] })
      expect(result).toEqual(expect.any(String))
    })
  })

  describe('generateAccount', () => {
    beforeEach(() => {
      mockKafkaProducer.send.mockResolvedValueOnce([mockResult])
    })

    it('should fail if the producer is not connected', async () => {
      await expect(producer.generateAccount()).rejects.toThrowError(
        new Error('Producer is not currently connected, did you forget to call connect()?')
      )
    })

    it('should generate message to create a wallet succesfully', async () => {
      const request = { id: requestId, authToken: 'Bearer: token', extraData, chain: 'chainId' }
      await producer.connect()
      const result = await producer.generateAccount(request, topic)

      expect(mockKafkaProducer.send).toHaveBeenCalledWith({ topic, messages: [marshalGenerateAccountRequest(request)] })
      expect(result).toEqual(request.id)
    })

    it('should use default topic and generate a random id if none is specified', async () => {
      await producer.connect()
      const result = await producer.generateAccount()

      expect(result).toEqual(expect.any(String))
    })
  })
})
