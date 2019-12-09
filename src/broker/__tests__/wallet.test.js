import { WalletGenerator } from '../wallet'
import kafka from 'kafka-node'
import { Consumer } from '../consumer'
import { Producer } from '../producer'


const testMsg = {
    sender: { addr : 'testAddr' },
    metadata: { id: 'testMetadata' }
}


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

const mockConsumer = ready => jest.fn(() => ({
    ready,
    on: (msg, cb) => {
        if (msg == 'connect') {
          cb()
        } else if(msg == 'message') {
            cb({value: testMsg})
        } else if(msg == 'error') {
            cb({msg: 'error'})
        } else if(msg == 'offsetOutOfRange') {
            cb({msg: 'offsetOutOfRange'})
        }
    },
    pause: () => {},
    resume: () => {}, 
}))

const topics = ['topic']
const mockUnmarshaller = msg => msg
const client = new kafka.KafkaClient({kafkaHost: 'testHost:9092'})
const CSConsumer = new Consumer(client, topics, mockUnmarshaller)
const CSProducer = new Producer(client, topics[0])

let CSWallet
describe("# Consumer", () => {

    beforeEach(() => {
        kafka.Consumer = mockConsumer(true);
        kafka.Producer = mockProducer(true);

        CSWallet = new WalletGenerator(CSProducer, CSConsumer)
    })

    test('init WalletGenerator', async () => {
        expect(typeof CSWallet.producer).toBe('object')
        expect(typeof CSWallet.consumer).toBe('object')
        expect(typeof CSWallet.pendingWallets).toBe('object')
    });

    test('pause', async () => {
        CSWallet.pause()
    });
    
    test('resume', async () => {
        CSWallet.resume()
    });
    
    test('listening', async () => {
        CSWallet.listening()
    });
    
    test('generatedWalletHandler', async () => {

        const metadata = 'testMetadata'
        const newWallet = 'testSender'

        new Promise((resolve, reject) => {
            CSWallet.pendingWallets[metadata] = {resolve, reject}
        })

        const kafkaMsg = {
            value: {
                metadata: {
                    id: metadata
                },
                sender: {
                    addr: newWallet
                }
            }
        }
        CSWallet.generatedWalletHandler(kafkaMsg)
    });

})