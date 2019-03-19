import kafka from 'kafka-node'
import uuidv4 from 'uuid/v4'
import { marshallTrace, marshallMetadata } from './protos/trace/trace';

export class CoreStackProducer {
    constructor(client, topic, options) {
        this.producer = new kafka.Producer(client, options)
        this.topic = topic
    }

    marshall = (msg, id) => {
        const trace = marshallTrace(msg);

        marshallMetadata(trace, id)

        return Buffer.from(trace.serializeBinary())
    }

    send = (msg, kafkaOptions) => new Promise((resolve, reject) => {

        // Init an id
        let id
        if(msg['metadata']) {
            id = msg['metadata'].id
        } else {
            id = uuidv4()
        }
        
        const payloads = [
            { 
                topic: this.topic, 
                key: msg['chainId'] + '-' + msg['from'], 
                ...kafkaOptions,
                messages: this.marshall(msg, id) 
            },
        ];

        this.producer.send(payloads, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve({offset: data[this.topic], id})
            }     
        })
    })
    
}
