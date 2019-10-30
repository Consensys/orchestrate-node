import Broker from '../index'
import { Producer } from '../producer'
import { Consumer, ConsumerGroup } from '../consumer'
import kafka from 'kafka-node'
jest.mock('../producer')
jest.mock('../consumer')
jest.mock('kafka-node')


describe("# Test client ", () => {

    let broker
    const host = 'testHost'
    beforeEach(() => {
        broker = new Broker(host)

    })

    describe("# constructor ", () => {
        test('Init broker', async () => {
            broker = new Broker(host)
            expect(broker.endpoint).toEqual(host)
        })
    })

    describe("# producer ", () => {
        test('Init producer with Producer already ready', async () => {
            Producer.mockImplementation(() => ({
                connect: () => ({
                  producer: {
                      ready: true
                  }
                }),
                // producer: {
                //     ready: true
                // }
            }))
            const topic = 'testTopic'
            const producer = await broker.producer(topic)
            expect(producer.producer.ready).toBeTruthy();
        })

        test('Init Producer with Producer not yet ready', async () => {
            Producer.mockImplementation(() => ({
              connect: () => ({
                  producer: {
                      ready: false
                  }
                }),
                // producer: {
                //     ready: false,
                //     on: (msg, cb) => {
                //         if(msg == 'ready') {
                //             cb()
                //         } else if (msg == 'error') {
                //             cb('error')
                //         }
                //     }
                // }
            }))
            const topic = 'testTopic'
            const producer = await broker.producer(topic)
            expect(producer.producer.ready).toBeFalsy();
        })
    })

    describe("# getLatestOffset ", () => {
        test('getLatestOffset', async () => {
            const testOffset = 100
            const topic = 'testTopic'
            const topicError = 'testTopicError'

            kafka.Offset.mockImplementation(() => ({
                fetchLatestOffsets: (topic, cb) => {
                    if(topic[0] == topicError) {
                        cb(topicError)
                    } else {
                        cb(null, {[topic]: {'0': testOffset}})
                    }
                }
            }))
            const getLatestOffset = await broker.getLatestOffset(topic)
            expect(getLatestOffset).toEqual({[topic]: testOffset})

            try {
                await broker.getLatestOffset(topicError)
            } catch(e) {
                expect(e).toEqual(topicError)
            }
        })
    })

    describe("# consumer ", () => {
        test('Init Consumer with Consumer already ready', async () => {
            Consumer.mockImplementation(() => ({
                connect: () => ({
                  consumer: {
                      ready: true
                  }
                })
            }))
            const topic = 'testTopic'
            const consumer = await broker.consumer(topic)
            expect(consumer.consumer.ready).toBeTruthy();
        })

        test('Init Producer with Consumer not yet ready', async () => {
            Consumer.mockImplementation(() => ({
                connect: () => ({
                  consumer: {
                      ready: false
                  }
                }),
                // consumer: {
                //     ready: false,
                //     on: (msg, cb) => {
                //         if(msg == 'ready') {
                //             cb()
                //         } else if (msg == 'error') {
                //             cb('error')
                //         }
                //     }
                // }
            }))
            const topic = 'testTopic'
            const consumer = await broker.consumer(topic)
            expect(consumer.consumer.ready).toBeFalsy();
        })
    })

    describe("# consumerGroup ", () => {
        test('Init ConsumerGroup with ConsumerGroup already ready', async () => {
            ConsumerGroup.mockImplementation(() => ({
                connect: () => ({
                  consumer: {
                      ready: true
                  }
                }),
                // consumer: {
                //     ready: true
                // }
            }))
            const topic = 'testTopic'
            const consumerGroup = await broker.consumerGroup(topic)
            expect(consumerGroup.consumer.ready).toBeTruthy();
        })

        test('Init Producer with ConsumerGroup not yet ready', async () => {
            ConsumerGroup.mockImplementation(() => ({
                connect: () => ({
                  consumer: {
                      ready: false
                  }
                }),
                // consumer: {
                //     ready: false,
                //     on: (msg, cb) => {
                //         if(msg == 'connect') {
                //             cb()
                //         } else if (msg == 'error') {
                //             cb('error')
                //         }
                //     }
                // }
            }))
            const topic = 'testTopic'
            const consumerGroup = await broker.consumerGroup(topic)
            expect(consumerGroup.consumer.ready).toBeFalsy();
        })
    })
})
