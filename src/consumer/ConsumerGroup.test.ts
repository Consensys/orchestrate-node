import createMockInstance from 'jest-create-mock-instance'
import * as Kafka from 'kafka-node'

import { ConsumerGroup } from './ConsumerGroup'
jest.mock('events')
jest.mock('kafka-node', () => ({
  ConsumerGroup: 'salut'
}))

const kafkaHost = 'kafkaHost:6000'
const topics = ['topic0', 'topic1']
const options = { groupId: 'groupId' }

describe('ConsumerGroup', () => {
  let consumer: ConsumerGroup
  let kafkaConsumerGroup: jest.Mocked<Kafka.ConsumerGroup>

  beforeEach(() => {
    kafkaConsumerGroup = createMockInstance(Kafka.ConsumerGroup)

    consumer = new ConsumerGroup(kafkaHost, topics, options)
  })

  describe('getHost', () => {
    it('should return the kafka host successfully', () => {
      expect(consumer.getHost()).toEqual(kafkaHost)
    })
  })
})
