import { CoreStackProducer } from '../producer'
import { unmarshallEnvelope } from '../types/envelope/envelope'
import kafka from 'kafka-node'

const mockProducer = ready => jest.fn(() => ({
    ready,
    send: jest.fn((payload, cb) => {
        if(payload[0].key != '3-testFrom') {
            cb('error')
        } else {
            cb('', {[payload[0].topic]: {'0': 100}})
        }
    }),
    on: (msg, cb) => {
        if(msg == 'ready') {
            cb()
        } else if (msg == 'error') {
            cb('error')
        }
    }
}))

let topic, CSProducer
describe("# CoreStackProducer ", () => {
    beforeEach(() => {
        kafka.Producer = mockProducer(true);
        topic = 'testTopic'
        CSProducer = new CoreStackProducer('', topic)
    })

    test('Init CoreStackProducer', async () => {
        expect(typeof CSProducer.connect).toBe('function')
        expect(typeof CSProducer.marshall).toBe('function')
        expect(typeof CSProducer.send).toBe('function')
        expect(typeof CSProducer.producer).toBe('object')
        expect(CSProducer.topic).toEqual(topic)
    })

    describe("# connect", () => {

      describe("connect an already ready producer", () => {

        test("Resolves the CSProducer", async () => {
          const resolvedProducer = await CSProducer.connect();
          expect(resolvedProducer).toEqual(CSProducer)
        })
      })

      describe("connect an unready producer", () => {

        beforeEach(() => {
          kafka.Producer = mockProducer(false);
          CSProducer = new CoreStackProducer('', topic)
        })

        describe("when there is no error", () => {

          test("Resolves the CSProducer", async () => {
            const resolvedProducer = await CSProducer.connect();
            expect(resolvedProducer).toEqual(CSProducer)
          })
        })

        describe("when there is an error", () => {

        })
      })
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
        const unmarshallT = unmarshallEnvelope(bin)
        const expected = {
            chain: { id: '3', iseip155: false },
            sender: { id: '', addr: 'testFrom' },
            receiver: undefined,
            call: {
                contract: { name: 'testContract', tag: '', abi: '', bytecode: '', deployedbytecode: '', registry: '' },
                method: { signature: 'testMethod', abi: '' },
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
            metadata: { id: 'testMetadata', extraMap: {} }
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

    test('send without metadata id', async () => {
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
                extra: {
                    extra1: 'testExtra1',
                    extra2: 'testExtra2'
                }
            }
        }
        const kafkaReturn = await CSProducer.send(testMsg)
        expect(kafkaReturn.offset).toEqual(100)
    })

    test('send without metadata object', async () => {
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
            metadata: 'testMetadata'
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
            expect(e.message).toEqual('Producer: could not send message')

        }
    })
})
