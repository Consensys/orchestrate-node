import { CoreStackConsummer, CoreStackConsummerGroup } from '../consumer'
import kafka from 'kafka-node'
import { marshallTrace } from '../protos/trace/trace'

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
        if (msg == 'message') {
            cb({value: bin}) 
        }
        
    }),
}))     

kafka.Consumer = mockConsumer;

test('init CoreStackConsummer', async () => {
    const topic = 'topic'
    const CSConsumer = new CoreStackConsummer('', topic, 0)
    expect(typeof CSConsumer.consumer).toBe('object')
    expect(typeof CSConsumer.emitter).toBe('object')
    expect(CSConsumer.topic).toEqual(topic)   

    CSConsumer.consume()
});

test('init CoreStackConsummerGroup', async () => {
    const topic = 'topic'
    const CSConsumerGroup = new CoreStackConsummerGroup('hostname', topic, 0)
    expect(typeof CSConsumerGroup.consume).toBe('function')
    expect(typeof CSConsumerGroup.consumer).toBe('object')

});
