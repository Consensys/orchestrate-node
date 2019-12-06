import envelope_pb from './envelope_pb'
import { marshalChain, unmarshalChain } from '../chain/chain'
import { marshalProtocol } from '../chain/protocol'
import { marshalTransaction, unmarshalRawTx } from '../ethereum/transaction'
import { marshalAccount } from '../ethereum/base'
import { marshalCall } from '../args/call'
import { marshalPrivate } from '../args/private'
import { mapToObject, rawToHex } from '../../utils/formatters'
import { unmarshalRawReceipt } from '../ethereum/receipt'

/**
 * [MarshalEnvelope takes a transaction payload as an input and output a protoBuff version of it called an envelop]
 * @param  {Object}   msg     [transaction payload]
 * @return {Object | Error}   [envelop protoBuff object or an error if the input is not an object]
 */
export const marshalEnvelope = msg => {
    const envelope = new envelope_pb.Envelope()
    switch (typeof msg) {
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'chainId':
                        envelope.setChain(marshalChain(value))
                        break;
                    case 'protocol':
                        marshalProtocol(envelope, value)
                        break;
                    case 'to':
                    case 'value':
                    case 'gas':
                    case 'gasPrice':
                    case 'data':
                    case 'nonce':
                    case 'raw':
                    case 'hash':
                        marshalTransaction(envelope, {[key]: value})
                        break;
                    case 'from':
                        envelope.setFrom(marshalAccount(value))
                        break;
                    case 'call':
                        marshalArgs(envelope, {call: value})
                        break;
                    case 'privateFrom':
                    case 'privateFor':
                    case 'privateTxType':
                        marshalArgs(envelope, {private: {[key]: value}})
                        break;
                    case 'metadata':
                        marshalMetadata(envelope, value)
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
 * [marshalArgs takes the call object of the transaction as an input and set its value in our protoBuff]
 * @param  {Object}   envelope     [envelope protoBuff]
 * @param  {Object}   msg          [call object of the transaction]
 */
export const marshalArgs = (envelope, msg) => {
    let args = envelope.getArgs()
    if (!args) {
        args = new envelope_pb.Args()
    }
    switch (typeof msg) {
    case 'object':
        Object.entries(msg).forEach(([key, value]) => {
        switch(key) {
            case 'call':
                marshalCall(args, value)
                break;
            case 'private':
                marshalPrivate(args, value)
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
 * [marshalMetadata takes the metadata object of the transaction as an input and set its value in our protoBuff]
 * @param  {Object}         envelope     [envelope protoBuff]
 * @param  {Object}         msg          [metadata object of the transaction]
 */
export const marshalMetadata = (envelope, msg) => {
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
 * [UnmarshalEnvelope takes an envelop as input and return a transaction payload]
 * @param  {Object}   msg        [envelope of the transaction to deserialize]
 * @return {Object}   envelope   [transaction payload]
 */
export const unmarshalEnvelope = msg => {
    const envelope = envelope_pb.Envelope.deserializeBinary(msg)
    const objEnvelope = envelope.toObject()

    if(objEnvelope['from']) { objEnvelope['from'] = rawToHex(objEnvelope['from']) }
    if(objEnvelope['chain']) { objEnvelope['chain'] = unmarshalChain(objEnvelope['chain']) }
    if(objEnvelope['receipt']) { objEnvelope['receipt'] = unmarshalRawReceipt(objEnvelope['receipt']) }
    if(objEnvelope['tx']) { objEnvelope['tx'] = unmarshalRawTx(objEnvelope['tx']) }

    return mapToObject(objEnvelope)
}
