import envelope_pb from './envelope_pb'
import { marshallChain, unmarshallChain } from '../chain/chain'
import { marshallProtocol } from '../chain/protocol'
import { marshallTransaction, unmarshallRawTx } from '../ethereum/transaction'
import { marshallAccount } from '../ethereum/base'
import { marshallCall } from '../args/call'
import { marshallPrivate } from '../args/private'
import { mapToObject, rawToHex } from '../../utils/formatters'
import { unmarshallRawReceipt } from '../ethereum/receipt'

/**
 * [marshallEnvelope description]
 * @param  {[type]} msg [description]
 * @return {[type]}     [description]
 */
export const marshallEnvelope = msg => {
    const envelope = new envelope_pb.Envelope()
    switch (typeof msg) {
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'chainId':
                        envelope.setChain(marshallChain(value))
                        break;
                    case 'protocol':
                        marshallProtocol(envelope, value)
                        break;
                    case 'to':
                    case 'value':
                    case 'gas':
                    case 'gasPrice':
                    case 'data':
                    case 'raw':
                    case 'hash':
                        marshallTransaction(envelope, {[key]: value})
                        break;
                    case 'from':
                        envelope.setFrom(marshallAccount(value))
                        break;
                    case 'call':
                        marshallArgs(envelope, {call: value})
                        break;
                    case 'privateFrom':
                    case 'privateFor':
                    case 'privateTxType':
                        marshallArgs(envelope, {private: {[key]: value}})
                        break;
                    case 'metadata':
                        marshallMetadata(envelope, value)
                        break;
                    default:
                        throw new Error(`Envelope message do not expect a "${key}" field`)
                }
            })
            break;
        default:
            throw new Error('Envelope message not in a valid format')
    }
    return envelope
}

export const marshallArgs = (envelope, msg) => {
    let args = envelope.getArgs()
    if (!args) {
        args = new envelope_pb.Args()
    }
    switch (typeof msg) {
    case 'object':
        Object.entries(msg).forEach(([key, value]) => {
        switch(key) {
            case 'call':
                marshallCall(args, value)
                break;
            case 'private':
                marshallPrivate(args, value)
                break;
            default:
                throw new Error('Args message not in a valid format')
            }
        })
        break;
    default:
        throw new Error('Args message not in a valid format')
    }
    envelope.setArgs(args)
}

/**
 * [marshallMetadata description]
 * @param  {[type]} envelope [description]
 * @param  {[type]} msg   [description]
 * @return {[type]}       [description]
 */
export const marshallMetadata = (envelope, msg) => {
    let metadata = envelope.getMetadata()
    if (!metadata) {
        metadata = new envelope_pb.Metadata()
    }
    switch (typeof msg) {
        case 'string':
            metadata.setId(msg)
            break;
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'id':
                        metadata.setId(value)
                        break;
                    case 'extra':
                        const extra = metadata.getExtraMap()
                        Object.entries(value).forEach(([keyMap, valueMap]) => {
                            extra.set(keyMap, valueMap)
                        })
                        break;
                    default:
                        throw new Error(`Metadata message do not expect a "${key}" field`)

                }
            })
            break;
        default:
            throw new Error('Metadata message not valid')

    }
    envelope.setMetadata(metadata)
}

/**
 * [unmarshallEnvelope description]
 * @param  {[type]} msg [description]
 * @return {[type]}     [description]
 */
export const unmarshallEnvelope = msg => {
    const envelope = envelope_pb.Envelope.deserializeBinary(msg)
    const objEnvelope = envelope.toObject()

    if(objEnvelope['from']) { objEnvelope['from'] = rawToHex(objEnvelope['from']) }
    if(objEnvelope['chain']) { objEnvelope['chain'] = unmarshallChain(objEnvelope['chain']) }
    if(objEnvelope['receipt']) { objEnvelope['receipt'] = unmarshallRawReceipt(objEnvelope['receipt']) }
    if(objEnvelope['tx']) { objEnvelope['tx'] = unmarshallRawTx(objEnvelope['tx']) }

    return mapToObject(objEnvelope)
}
