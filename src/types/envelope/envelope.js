import envelope_pb from './envelope_pb'
import { marshallChain } from '../common/chain'
import { marshallTransaction } from '../ethereum/transaction'
import { marshallSender } from '../common/account'
import { marshallCall } from '../common/call'
import { mapToObject } from '../../utils/formatters'

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
                        marshallChain(envelope, value)
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
                        marshallSender(envelope, value)
                        break;
                    case 'call':
                        marshallCall(envelope, value)
                        break;
                    case 'privateFrom':
                    case 'privateFor':
                        marshallCall(envelope, {quorum: {[key]: value}})
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
    return mapToObject(objEnvelope)
}
