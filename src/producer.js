import kafka from 'kafka-node'
import uuidv4 from 'uuid/v4'
import { marshallTrace } from './protos/trace/trace';

export class CoreStackProducer {
    constructor(client, topic, options) {
        this.producer = new kafka.Producer(client, options)
        this.topic = topic
    }

    marshall = msg => {
        const trace = marshallTrace(msg);
        return Buffer.from(trace.serializeBinary())
    }

    send = (msg, kafkaOptions) => new Promise((resolve, reject) => {

        // Init an id
        switch(typeof msg['metadata']) {
            case 'undefined':
                msg['metadata'] = {id: uuidv4()}
                break;
            case 'string':
                msg['metadata'] = {id: msg['metadata']}
                break;
            case 'object':
                if(!msg['metadata']['id']) {
                    msg['metadata']['id'] = uuidv4()
                }
                break;
        }
        
        const id = msg['metadata']['id']
        const payloads = [
            { 
                topic: this.topic, 
                key: msg['chainId'] + '-' + msg['from'], 
                ...kafkaOptions,
                messages: this.marshall(msg) 
            },
        ]

        this.producer.send(payloads, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve({offset: data[this.topic]['0'], id})
            }     
        })
    })
}
