import { CoreStackConsumer, CoreStackConsumerGroup } from '../consumer'
import kafka from 'kafka-node'
import { marshallTrace } from '../protos/trace/trace'
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
const bin = Buffer.from(marshallTrace(testMsg).serializeBinary())

const mockConsumer = jest.fn(() => ({
    on: jest.fn((msg, cb) => {
        if(msg == 'message') {
            cb({value: bin}) 
        } else if(msg == 'error') {
            cb({msg: 'error'}) 
        } else if(msg == 'offsetOutOfRange') {
            cb({msg: 'offsetOutOfRange'}) 
        }
    }),
}))     

kafka.Consumer = mockConsumer;

test('init CoreStackConsumer', async () => {
    const topic = 'topic'
    const CSConsumer = new CoreStackConsumer('', topic, 0)
    expect(typeof CSConsumer.consumer).toBe('object')
    expect(typeof CSConsumer.emitter).toBe('object')
    expect(CSConsumer.topic).toEqual(topic)   

    CSConsumer.consume()
});

test('init CoreStackConsmmerGroup', async () => {
    const topic = 'topic'
    const CSConsumerGroup = new CoreStackConsumerGroup('hostname', topic, 0)
    expect(typeof CSConsumerGroup.consume).toBe('function')
    expect(typeof CSConsumerGroup.consumer).toBe('object')

});
