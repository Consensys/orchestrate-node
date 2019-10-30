import { Producer } from '../producer'
import { unmarshallEnvelope } from '../types/envelope/envelope'
import kafka from 'kafka-node'

const mockProducer = ready => jest.fn(() => ({
    ready,
    send: jest.fn((payload, cb) => {
        if(payload[0].key != '3-0xaf84242d70ae9d268e2be3616ed497ba28a7b62c') {
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
describe("# Producer ", () => {
    beforeEach(() => {
        kafka.Producer = mockProducer(true);
        topic = 'testTopic'
        CSProducer = new Producer('', topic)
    })

    test('Init Producer', async () => {
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

        describe("when there is no error", () => {

          test("Resolves the CSProducer", async () => {
            const resolvedProducer = await CSProducer.connect();
            expect(resolvedProducer).toEqual(CSProducer)
          })
        })

      })
    })

    test('marshall', async () => {
        const testMsg = {
            chainId: '3',
            to: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
            value: '20000000000',
            gas: '1000000000',
            gasPrice: '200000',
            hash: '0x000000000000000000000000b5747835141b46f7c472393b31f8f5a57f74a44f',
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
        const bin = CSProducer.marshall(testMsg)
        const unmarshallT = 
        unmarshallEnvelope(bin)
        const expected = {
            chain: { id: '3' },
            protocol: undefined,
            from: '0xaf84242d70ae9d268e2be3616ed497ba28a7b62c',
            tx: {
                txData: {
                    nonce: 0,
                    to: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
                    value: '20000000000',
                    gas: 1000000000,
                    gasPrice: '200000',
                    data: undefined
                },
                raw: undefined,
                hash: '0x000000000000000000000000b5747835141b46f7c472393b31f8f5a57f74a44f'
            },
            receipt: undefined,
            errorsList: [],
            args: {
                call: {
                    contract: { id: { name: 'testContract', registry: '', tag: ''}, abi: '', bytecode: '', deployedbytecode: '', eventsList: [], methodsList: [] },
                    method: { signature: 'testMethod(string,string)', abi: '' },
                    argsList: ['arg1', 'arg2']
                },
                pb_private: undefined
            },
            metadata: { id: 'testMetadata', extraMap: {} }
        }
        expect(unmarshallT).toEqual(expected)
    })

    test('send without error', async () => {
        const testMsg = {
            chainId: '3',
            to: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
            value: '100000000',
            gas: '100000',
            gasPrice: '200000',
            from: '0xaf84242d70ae9d268e2be3616ed497ba28a7b62c',
            call: {
                contract: 'testContract',
                method: 'testMethod(string,string)',
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
            to: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
            value: '100000000',
            gas: '100000',
            gasPrice: '200000',
            from: '0xaf84242d70ae9d268e2be3616ed497ba28a7b62c',
            call: {
                contract: 'testContract',
                method: 'testMethod(string,string)',
                args: ['arg1', 'arg2'],
            },
        }
        const kafkaReturn = await CSProducer.send(testMsg)
        expect(kafkaReturn.offset).toEqual(100)
    })

    test('send without metadata id', async () => {
        const testMsg = {
            chainId: '3',
            to: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
            value: '100000000',
            gas: '100000',
            gasPrice: '200000',
            from: '0xaf84242d70ae9d268e2be3616ed497ba28a7b62c',
            call: {
                contract: 'testContract',
                method: 'testMethod(string,string)',
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
            to: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
            value: '100000000',
            gas: '100000',
            gasPrice: '200000',
            from: '0xaf84242d70ae9d268e2be3616ed497ba28a7b62c',
            call: {
                contract: 'testContract',
                method: 'testMethod(string,string)',
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
            to: '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
            value: '100000000',
            gas: '100000',
            gasPrice: '200000',
            from: 'testFromError',
            call: {
                contract: 'testContract',
                method: 'testMethod(string,string)',
                args: ['arg1', 'arg2'],

            },
            metadata: { id: 'testMetadata' }
        }
        try {
            await CSProducer.send(testMsg)
        } catch(e) {
            expect(e.message).toEqual('marshallAccount: testFromError is not a valid address')

        }
    })
})
