import CoreStackSDK from '../index'
import { CoreStackProducer } from '../producer'
import { CoreStackConsumer, CoreStackConsumerGroup } from '../consumer'
import kafka from 'kafka-node'
jest.mock('../producer')
jest.mock('../consumer')
jest.mock('kafka-node')


describe("# CoreStack ", () => {

    let CoreStack
    const host = 'testHost'
    beforeEach(() => {
        CoreStack = new CoreStackSDK(host)

    })

    describe("# constructor ", () => {
        test('Init CoreStack', async () => {
            CoreStack = new CoreStackSDK(host)
            expect(CoreStack.hostname).toEqual(host)
        })
    })

    describe("# producer ", () => {
        test('Init CoreStackProducer with Producer already ready', async () => {
            CoreStackProducer.mockImplementation(() => ({
                producer: {
                    ready: true
                }
            }))
            const topic = 'testTopic'
            const producer = await CoreStack.producer(topic)
            expect(producer.producer.ready).toBeTruthy();
        })
    
        test('Init CoreStackProducer with Producer not yet ready', async () => {
            CoreStackProducer.mockImplementation(() => ({
                producer: {
                    ready: false,
                    on: (msg, cb) => {
                        if(msg == 'ready') {
                            cb()
                        } else if (msg == 'error') {
                            cb('error')
                        }
                    }
                }
            }))
            const topic = 'testTopic'
            const producer = await CoreStack.producer(topic)
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
            const getLatestOffset = await CoreStack.getLatestOffset(topic)
            expect(getLatestOffset).toEqual(testOffset)

            try {
                await CoreStack.getLatestOffset(topicError)
            } catch(e) {
                expect(e).toEqual(topicError)
            }
        })
    })

    describe("# consumer ", () => {
        test('Init CoreStackConsumer with Consumer already ready', async () => {
            CoreStackConsumer.mockImplementation(() => ({
                consumer: {
                    ready: true
                }
            }))
            const topic = 'testTopic'
            const consumer = await CoreStack.consumer(topic)
            expect(consumer.consumer.ready).toBeTruthy();
        })
    
        test('Init CoreStackProducer with Consumer not yet ready', async () => {
            CoreStackConsumer.mockImplementation(() => ({
                consumer: {
                    ready: false,
                    on: (msg, cb) => {
                        if(msg == 'ready') {
                            cb()
                        } else if (msg == 'error') {
                            cb('error')
                        }
                    }
                }
            }))
            const topic = 'testTopic'
            const consumer = await CoreStack.consumer(topic)
            expect(consumer.consumer.ready).toBeFalsy();
        })
    })

    describe("# consumerGroup ", () => {
        test('Init CoreStackConsumerGroup with ConsumerGroup already ready', async () => {
            CoreStackConsumerGroup.mockImplementation(() => ({
                consumer: {
                    ready: true
                }
            }))
            const topic = 'testTopic'
            const consumerGroup = await CoreStack.consumerGroup(topic)
            expect(consumerGroup.consumer.ready).toBeTruthy();
        })
    
        test('Init CoreStackProducer with ConsumerGroup not yet ready', async () => {
            CoreStackConsumerGroup.mockImplementation(() => ({
                consumer: {
                    ready: false,
                    on: (msg, cb) => {
                        if(msg == 'connect') {
                            cb()
                        } else if (msg == 'error') {
                            cb('error')
                        }
                    }
                }
            }))
            const topic = 'testTopic'
            const consumerGroup = await CoreStack.consumerGroup(topic)
            expect(consumerGroup.consumer.ready).toBeFalsy();
        })
    })
})

