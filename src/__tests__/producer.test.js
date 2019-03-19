import { CoreStackProducer } from '../producer'
import { unmarshallTrace } from '../protos/trace/trace'
import kafka from 'kafka-node'

const mockProducer = jest.fn(() => ({
    send: jest.fn((payload, cb) => {
        if(payload[0].key != '3-testFrom') {
            cb('error')
        } else {
            cb('', {[payload[0].topic]: 100})
        }
    })
}))                        

kafka.Producer = mockProducer;

let topic, CSProducer
describe("# CoreStackProducer ", () => {
    beforeEach(() => {
        topic = 'testTopic'
        CSProducer = new CoreStackProducer('', topic, 0)
    })

    test('Init CoreStackProducer', async () => {
        expect(typeof CSProducer.marshall).toBe('function')
        expect(typeof CSProducer.send).toBe('function')
        expect(typeof CSProducer.producer).toBe('object')
        expect(CSProducer.topic).toEqual(topic)   
    })

    test('marshall', async () => {
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
        const bin = CSProducer.marshall(testMsg)
        const unmarshallT = unmarshallTrace(bin)
        const expected = { 
            chain: { id: '0x3', iseip155: false },
            sender: { id: '', addr: 'testFrom' },
            receiver: undefined,
            call: { 
                contract: { name: 'testContract', tag: '', abi: '', bytecode: '' },
                method: { name: 'testMethod', abi: '' },
                argsList: [ 'arg1', 'arg2' ] 
            },
            tx: { 
                txData: {
                    nonce: 0,
                    to: 'testTo',
                    value: 'testValue',
                    gas: 100000,
                    gasPrice: 'testGasPrice',
                    data: '' 
                },
                raw: '',
                hash: '' 
            },
            receipt: undefined,
            errorsList: [],
            metadata: { id: 'testMetadata', extraMap: [] }
        }
        expect(unmarshallT).toEqual(expected)
    })

    test('send without error', async () => {
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
            metadata: { id: 'testMetadata' }
        }
        const kafkaReturn = await CSProducer.send(testMsg)
        expect(kafkaReturn).toEqual({
            offset: 100,
            id: testMsg.metadata.id
        })
    })

    test('send without metadata', async () => {
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
        }
        const kafkaReturn = await CSProducer.send(testMsg)
        expect(kafkaReturn.offset).toEqual(100)
    })

    test('send with error', async () => {
        const testMsg = {
            chainId: '3',
            to: 'testTo',
            value: 'testValue',
            gas: '100000',
            gasPrice: 'testGasPrice',
            from: 'testFromError',
            call: {
                contract: 'testContract',
                method: 'testMethod',
                args: ['arg1', 'arg2'],

            },
            metadata: { id: 'testMetadata' }
        }
        try {
            await CSProducer.send(testMsg)
        } catch(e) {
            expect(e).toEqual('error')
    
        }
    })
})
