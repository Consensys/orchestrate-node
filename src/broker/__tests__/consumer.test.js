import { Consumer, ConsumerGroup } from '../consumer'
import kafka from 'kafka-node'
import { marshalEnvelope } from '../types/envelope/envelope'
jest.mock('events')

const testMsg = {
    chainId: '3',
    to: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
    value: '1000000',
    gas: 100000,
    gasPrice: '1000000',
    from: '0xaf84242d70ae9d268e2be3616ed497ba28a7b62c',
    call: {
        contract: 'testContract',
        method: 'testMethod(string,string)',
        args: ['arg1', 'arg2'],
    },
    metadata: {
        id: 'testMetadata'
    }
}
const bin = Buffer.from(marshalEnvelope(testMsg).serializeBinary())

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
const mockUnmarshaler = msg => msg
const client = new kafka.KafkaClient({kafkaHost: 'testHost:9092'})

let CSConsumer
describe("# Consumer", () => {

  beforeEach(() => {
    kafka.Consumer = mockConsumer(true);
    CSConsumer = new Consumer('', topics, mockUnmarshaler)
  })

  test('init Consumer', async () => {
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
        CSConsumer = new Consumer(mockConsumer(false));
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
describe("# ConsumerGroup", () => {

  beforeEach(() => {
    kafka.ConsumerGroup = mockConsumer(true);
    CSConsumerGroup = new ConsumerGroup(client, topics, mockUnmarshaler)

  })

  test('init Consumer', async () => {
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
        CSConsumerGroup = new ConsumerGroup(client, topics, mockUnmarshaler)
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
