import { CoreStackConsumer, CoreStackConsumerGroup } from '../consumer'
import kafka from 'kafka-node'
import { marshallEnvelope } from '../types/envelope/envelope'
jest.mock('events')

const testMsg = {
    chainId: '3',
    to: 'testTo',
    value: 'testValue',
    gas: '100000',
    gasPrice: 'testGasPrice',
    from: 'testFrom',
    call: {
        contract: 'testContract',
        method: 'testMethod',
        args: ['arg1', 'arg2'],
    },
    metadata: {
        id: 'testMetadata'
    }
}
const bin = Buffer.from(marshallEnvelope(testMsg).serializeBinary())

const mockConsumer = ready => jest.fn(() => ({
    ready,
    on: (msg, cb) => {
        if (msg == 'connect') {
          cb()
        } else if(msg == 'message') {
            cb({value: bin})
        } else if(msg == 'error') {
            cb({msg: 'error'})
        } else if(msg == 'offsetOutOfRange') {
            cb({msg: 'offsetOutOfRange'})
        }
    }
}))

const topics = ['topic']
const mockUnmarshaller = msg => msg
const client = new kafka.KafkaClient({kafkaHost: 'testHost:9092'})

let CSConsumer
describe("# CoreStackConsumer", () => {

  beforeEach(() => {
    kafka.Consumer = mockConsumer(true);
    CSConsumer = new CoreStackConsumer('', topics, mockUnmarshaller)
  })

  test('init CoreStackConsumer', async () => {
      expect(typeof CSConsumer.connect).toBe('function')
      expect(typeof CSConsumer.consume).toBe('function')
      expect(typeof CSConsumer.consumer).toBe('object')
      expect(typeof CSConsumer.emitter).toBe('object')
      expect(CSConsumer.topics).toEqual(topics)

      CSConsumer.consume()
  });

  describe("# connect", () => {

    describe("connect an already ready consumer", () => {

      test("Resolves the Consumer", async () => {
        const resolvedProducer = await CSConsumer.connect();
        expect(resolvedProducer).toEqual(CSConsumer)
      })
    })

    describe("connect an unready consumer", () => {

      beforeEach(() => {
        kafka.Consumer = mockConsumer(false);
        CSConsumer = new CoreStackConsumer(mockConsumer(false));
      })

      describe("when there is no error", () => {

        // test("Resolves the Consumer", async () => {
        //   const resolvedProducer = await CSConsumer.connect();
        //   expect(resolvedProducer).toEqual(CSConsumer)
        // })
      })

      describe("when there is an error", () => {

      })
    })
  })
})

let CSConsumerGroup
describe("# CoreStackConsumerGroup", () => {

  beforeEach(() => {
    kafka.ConsumerGroup = mockConsumer(true);
    CSConsumerGroup = new CoreStackConsumerGroup(client, topics, mockUnmarshaller)

  })

  test('init CoreStackConsumer', async () => {
      expect(typeof CSConsumerGroup.connect).toBe('function')
      expect(typeof CSConsumerGroup.consume).toBe('function')
      expect(typeof CSConsumerGroup.consumer).toBe('object')
      expect(typeof CSConsumerGroup.emitter).toBe('object')

  });

  describe("# connect", () => {

    describe("connect an already ready consumer", () => {

      test("Resolves the Consumer", async () => {
        const resolvedProducer = await CSConsumerGroup.connect();
        expect(resolvedProducer).toEqual(CSConsumerGroup)
      })
    })

    describe("connect an unready consumer", () => {

      beforeEach(() => {
        kafka.ConsumerGroup = mockConsumer(true);
        CSConsumerGroup = new CoreStackConsumerGroup(client, topics, mockUnmarshaller)
      })

      describe("when there is no error", () => {

        test("Resolves the Consumer", async () => {
          const resolvedProducer = await CSConsumerGroup.connect();
          expect(resolvedProducer).toEqual(CSConsumerGroup)
        })
      })

      describe("when there is an error", () => {

      })
    })
  })
})
