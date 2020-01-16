import { Producer } from './Producer'

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

describe('Producer', () => {
  let producer: Producer

  beforeEach(() => {
    producer = new Producer(brokers)
  })

  describe('getBrokers', () => {
    it('should return the kafka host successfully', () => {
      expect(producer.getBrokers()).toEqual(brokers)
    })
  })
})
