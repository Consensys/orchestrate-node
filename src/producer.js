import trace_pb from '../protobuf/trace/trace_pb'
import ethereum_pb from '../protobuf/ethereum/ethereum_pb'
import kafka from 'kafka-node'
import uuidv4 from 'uuid/v4'
import * as Utils from 'web3-utils';

export class CoreStackProducer {
    constructor(client, topic, options) {
        this.producer = new kafka.Producer(client, options)
        this.topic = topic
    }

    marshallChainId = (trace, value) => {
        const chain = new trace_pb.Chain()
        chain.setId(Utils.toHex(value))
        trace.setChain(chain)
    }

    marshallFrom = (trace, value) => {
        const sender = new trace_pb.Account()
        sender.setAddress(value)
        trace.setSender(sender)
    }

    marshallTo = (trace, value) => {
        const transaction = new ethereum_pb.Transaction()
        const txData = new ethereum_pb.TxData()
        txData.setTo(value)
        transaction.setTxdata(txData)
        trace.setTransaction(transaction)
    }

    marshallCall = (trace, value) => {
        const call = new trace_pb.Call()

        if (value['method'] && value['contract']) {
            call.setMethodid(value['method'] + '@' + value['contract'])
        }
        if (value['args']) {
            call.setArgsList(value['args'])
        }

        trace.setCall(call)
    }

    marshall = (msg, id) => {
        const trace = new trace_pb.Trace();

        Object.entries(msg).forEach(([key, value]) => {
            switch(key) {
                case 'chainId':
                    this.marshallChainId(trace, value)
                    break;
                case 'from':
                    this.marshallFrom(trace, value)
                    break;
                case 'to':
                    this.marshallTo(trace, value)
                    break;
                case 'call':
                    this.marshallCall(trace, value)
                    break;
            }
        })

        const metadata = new trace_pb.Metadata()
        metadata.setId(id)
        trace.setMetadata(metadata)

        return Buffer.from(trace.serializeBinary())
    }

    send = (msg, kafkaOptions) => new Promise((resolve, reject) => {
        let id
        if(msg['metadata']) {
            id = msg['metadata'].id
        } else {
            id = uuidv4()
        }
        
        const payloads = [
            { topic: this.topic, key: msg['chainId'] + '-' + msg['from'], ...kafkaOptions, messages: this.marshall(msg, id) },
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
