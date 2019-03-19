import EventEmitter from 'events'
import  { unmarshallTrace } from '../protos/trace/trace'
import kafka from 'kafka-node'

class Consumer {

    constructor(consumer) {
        this.consumer = consumer
        this.emitter = new EventEmitter()
    }

    consume = () => {
        this.consumer.on('message', msg => {
            this.emitter.emit('message', unmarshallTrace(msg.value));
        });
        
        this.consumer.on('error', error => {
            this.emitter.emit('error', error)
        });
        
        this.consumer.on('offsetOutOfRange', error => {
            this.emitter.emit('offsetOutOfRange', error)
        });

        return this.emitter
    }
}

export class CoreStackConsummer extends Consumer {
    constructor(client, topic, latestOffset, options) {
        const consumer = new kafka.Consumer(
            client,
            [
                { topic: topic, offset: latestOffset },
            ],
            {
                encoding: 'buffer',
                fromOffset: true,
                ...options
            }
        )
        super(consumer)
        this.topic = topic
    }
}

export class CoreStackConsummerGroup extends Consumer {
    constructor(hostname, topic, options) {
        const consumer = new kafka.ConsumerGroup(
            {
                kafkaHost: hostname,
                encoding: 'buffer',
                ...options
            },
            topic
        )
        super(consumer)
    }
}