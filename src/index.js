import kafka from 'kafka-node'
import { CoreStackConsummer, CoreStackConsummerGroup } from './consumer'
import { CoreStackProducer } from './producer'

class CoreStack {
    constructor(hostname, options) {
        this.hostname = hostname
        this.client = new kafka.KafkaClient({kafkaHost: hostname, ...options})
    }

    producer = (topic, options) => new Promise((resolve, reject) => {
        const CSProducer = new CoreStackProducer(this.client, topic, options)
        if (CSProducer.producer.ready) {
            resolve(CSProducer)
        } else {
            CSProducer.producer.on('ready', () => {
                resolve(CSProducer)
            })
            CSProducer.producer.on('error', err => {
                reject(err)
            })
        }
    })

    getLatestOffset = topic => new Promise((resolve, reject) => {
        const offset = new kafka.Offset(this.client)
        offset.fetchLatestOffsets([topic], (err, offsets) => {
            if(err) {
                reject(err)
            } else {
                resolve(offsets[topic][0])
            }
        })
    })

    consumer = async (topic, options) => new Promise(async (resolve, reject) => {
        const latestOffset = await this.getLatestOffset(topic)
        const CSConsumer = new CoreStackConsummer(this.client, topic, latestOffset, options)
        if (CSConsumer.consumer.ready) {
            resolve(CSConsumer)
        } else {
            CSConsumer.consumer.on('ready', () => {
                resolve(CSConsumer)
            })
            CSConsumer.consumer.on('error', err => {
                reject(err)
            })
        }
    })

    consumerGroup = (topic, options) => new Promise(async (resolve, reject) => {
        const CSConsumerGroup =  new CoreStackConsummerGroup(this.hostname, topic, options)
        if (CSConsumerGroup.consumer.ready) {
            resolve(CSConsumerGroup)
        } else {
            resolve(CSConsumerGroup)
            CSConsumerGroup.consumer.on('connect', () => {
                resolve(CSConsumerGroup)
            })
            CSConsumerGroup.consumer.on('error', err => {
                reject(err)
            })
        }
    })
}

export default CoreStack