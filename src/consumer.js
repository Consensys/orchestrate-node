import EventEmitter from 'events'
import trace_pb from '../protobuf/trace/trace_pb'
import kafka from 'kafka-node'

class Consumer {

    constructor(consumer) {
        this.consumer = consumer
        this.emitter = new EventEmitter()
    }

    unmarshal = data => {
        const trace = trace_pb.Trace.deserializeBinary(data)
        return trace.toObject()
    }

    consume = () => {
        this.consumer.on('message', msg => {
            this.emitter.emit('message', this.unmarshal(msg.value));
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
            }
            , topic
        )
        super(consumer)
    }
}