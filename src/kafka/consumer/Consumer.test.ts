import { Consumer } from './Consumer'

const mockKafkaConsumer = {
  connect: jest.fn(),
  disconnect: jest.fn(),
  subscribe: jest.fn(),
  run: jest.fn(),
  commitOffsets: jest.fn()
}

jest.mock('kafkajs', () => ({
  Consumer: jest.fn().mockImplementation(() => mockKafkaConsumer),
  Kafka: jest.fn().mockImplementation(() => ({
    consumer: jest.fn().mockImplementation(() => mockKafkaConsumer)
  })),
  logLevel: {
    INFO: 'info'
  }
}))

const brokers = ['kafkaHost:6000', 'kafkaHost:6001']
const topics = ['topic0', 'topic1']
const mockMessage = {
  partition: 50,
  topic: 'topic0',
  offset: '0',
  value: new Buffer('myValue')
}

describe('Consumer', () => {
  let consumer: Consumer

  beforeEach(() => {
    consumer = new Consumer(topics, brokers)
  })

  describe('getBrokers', () => {
    it('should return the kafka host successfully', () => {
      expect(consumer.getBrokers()).toEqual(brokers)
    })
  })

  describe('getTopics', () => {
    it('should return the topics successfully', () => {
      expect(consumer.getTopics()).toEqual(topics)
    })
  })

  describe('connect', () => {
    it('ready() should return false if connect() has not been called', () => {
      expect(consumer.ready()).toEqual(false)
    })

    it('should connect and subscribe to each topic successfully', async () => {
      await consumer.connect()

      expect(mockKafkaConsumer.connect).toHaveBeenCalled()
      for (let i = 1; i < topics.length; i++) {
        expect(mockKafkaConsumer.subscribe).toHaveBeenNthCalledWith(i, { topic: topics[i - 1] })
      }
      expect(consumer.ready()).toEqual(true)
    })

    it('should return an error if connect() fails', async () => {
      const error = new Error()
      mockKafkaConsumer.connect.mockRejectedValueOnce(error)

      await expect(consumer.connect()).rejects.toThrow(error)
    })
  })

  describe('disconnect', () => {
    it('should fail if the consumer is not connected', async () => {
      await expect(consumer.disconnect()).rejects.toThrowError(
        new Error('Consumer is not currently connected, did you forget to call connect()?')
      )
    })

    it('should disconnect successfully ', async () => {
      await consumer.connect()
      await consumer.disconnect()

      expect(mockKafkaConsumer.disconnect).toHaveBeenCalled()
      expect(consumer.ready()).toEqual(false)
    })
  })

  describe('consume', () => {
    it('should fail if the consumer is not connected', async () => {
      await expect(consumer.consume()).rejects.toThrowError(
        new Error('Consumer is not currently connected, did you forget to call connect()?')
      )
    })

    it('should start consuming messages with autoCommit false', async () => {
      await consumer.connect()
      await consumer.consume()

      expect(mockKafkaConsumer.run).toHaveBeenCalledWith({
        autoCommit: false,
        eachMessage: expect.any(Function)
      })
    })

    it('should reject if the consumer fails to run', async () => {
      mockKafkaConsumer.run.mockRejectedValueOnce(new Error())

      await expect(consumer.consume()).rejects.toThrow()
    })
  })

  describe('commit', () => {
    it('should fail if the Consumer is not connected', async () => {
      await expect(consumer.commit(mockMessage as any)).rejects.toThrowError(
        new Error('Consumer is not currently connected, did you forget to call connect()?')
      )
    })

    it('should commit successfully', async () => {
      await consumer.connect()
      await consumer.commit(mockMessage as any)

      expect(mockKafkaConsumer.commitOffsets).toHaveBeenCalledWith([
        {
          offset: mockMessage.offset,
          topic: mockMessage.topic,
          partition: mockMessage.partition
        }
      ])
    })
  })
})
