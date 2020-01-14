import { EventEmitter } from 'events'

import { EventType } from '../types'

import { Consumer } from './Consumer'

const mockEventEmitter = new EventEmitter()
const mockKafkaConsumer = {
  connect: jest.fn(),
  disconnect: jest.fn(),
  subscribe: jest.fn(),
  unsubscribe: jest.fn(),
  consume: jest.fn(),
  commitMessage: jest.fn(),
  on: mockEventEmitter.on,
  emit: mockEventEmitter.emit
}

jest.mock('node-rdkafka', () => ({
  KafkaConsumer: jest.fn().mockImplementation(() => mockKafkaConsumer)
}))

const kafkaHost = 'kafkaHost:6000'
const topics = ['topic0', 'topic1']
const groupId = 'groupId'
const mockMessage = {
  chainId: '3',
  to: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
  value: '1000000',
  gas: 100000,
  gasPrice: '1000000',
  from: '0xaf84242d70ae9d268e2be3616ed497ba28a7b62c',
  call: {
    contract: 'testContract',
    method: 'testMethod(string,string)',
    args: ['arg1', 'arg2']
  },
  metadata: {
    id: 'testMetadata'
  }
}
const mockError = { message: 'My Error' }

describe('ConsumerGroup', () => {
  let consumer: Consumer

  beforeEach(() => {
    consumer = new Consumer(kafkaHost, topics, groupId)
  })

  describe('getHost', () => {
    it('should return the kafka host successfully', () => {
      expect(consumer.getHost()).toEqual(kafkaHost)
    })
  })

  describe('getTopics', () => {
    it('should return the topics successfully', () => {
      expect(consumer.getTopics()).toEqual(topics)
    })
  })

  describe('connect', () => {
    it('should return false if the "ready" event has not been triggered', () => {
      expect(consumer.ready()).toEqual(false)
    })

    it('should return true if the "ready" event has been triggered', async done => {
      connect(() => {
        expect(mockKafkaConsumer.connect).toHaveBeenCalled()
        expect(mockKafkaConsumer.subscribe).toHaveBeenCalledWith(topics)
        done()
      })
    })

    it('should return an error if the "connection.failure" event has been triggered', async done => {
      consumer.connect().catch(error => {
        expect(mockKafkaConsumer.connect).toHaveBeenCalled()
        expect(error).toEqual(mockError)
        expect(consumer.ready()).toEqual(false)

        done()
      })

      mockKafkaConsumer.emit('connection.failure', mockError)
    })
  })

  describe('disconnect', () => {
    beforeEach(() => {
      connect()
    })

    it('should return false if the "disconnected" event has been triggered', async done => {
      consumer.disconnect().then(() => {
        expect(mockKafkaConsumer.unsubscribe).toHaveBeenCalled()
        expect(consumer.ready()).toEqual(false)

        done()
      })

      mockKafkaConsumer.emit('disconnected', mockError)
    })

    it('should fail if the consumer is not currently connected', async done => {
      consumer.disconnect().then(async () => {
        expect(mockKafkaConsumer.unsubscribe).toHaveBeenCalled()
        expect(consumer.ready()).toEqual(false)

        await expect(consumer.disconnect()).rejects.toThrowError(
          new Error('Consumer is not currently connected, did you forget to call connect()?')
        )

        done()
      })

      mockKafkaConsumer.emit('disconnected', mockError)
    })
  })

  describe('consume', () => {
    beforeEach(() => {
      connect()
    })

    it('should decode and emit a "data" event when a message is consumed', done => {
      consumer.on(EventType.Message, message => {
        expect(message).toEqual(mockMessage)
        done()
      })
      consumer.consume()

      mockKafkaConsumer.emit('data', mockMessage)
    })

    it('should emit an event error message when the consumer receives an "event.error" event', done => {
      consumer.on(EventType.EventError, error => {
        expect(error).toEqual(mockError)
        done()
      })
      consumer.consume()

      mockKafkaConsumer.emit('event.error', mockError)
    })

    it('fail if the Consumer is not connected', done => {
      consumer.disconnect().then(() => {
        expect(mockKafkaConsumer.unsubscribe).toHaveBeenCalled()
        expect(consumer.ready()).toEqual(false)

        expect(() => consumer.consume()).toThrowError(
          new Error('Consumer is not currently connected, did you forget to call connect()?')
        )

        done()
      })

      mockKafkaConsumer.emit('disconnected', mockError)
    })
  })

  describe('commit', () => {
    beforeEach(() => {
      connect()
    })

    it('should commit successfully', () => {
      consumer.commit(mockMessage as any)

      expect(mockKafkaConsumer.commitMessage).toHaveBeenCalledWith(mockMessage)
    })

    it('fail if the Consumer is not connected', done => {
      consumer.disconnect().then(() => {
        expect(mockKafkaConsumer.unsubscribe).toHaveBeenCalled()
        expect(consumer.ready()).toEqual(false)

        expect(() => consumer.commit(mockMessage as any)).toThrowError(
          new Error('Consumer is not currently connected, did you forget to call connect()?')
        )

        done()
      })

      mockKafkaConsumer.emit('disconnected', mockError)
    })
  })

  const connect = (cb?: () => void) => {
    consumer.connect().then(() => {
      expect(consumer.ready()).toEqual(true)
      if (cb) {
        cb()
      }
    })

    mockKafkaConsumer.emit('ready')
  }
})
