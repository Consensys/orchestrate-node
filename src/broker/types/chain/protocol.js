import protocol_pb from './protocol_pb'
import { arrayToObject } from '../../utils/formatters'
import BiMap from 'bimap'

export const ProtocolType = {
    EthereumConstantinople: 'ethereum.constantinople',
    QuorumConstellation: 'quorum.constellation',
    QuorumTessera: 'quorum.tessera',
    BesuOrion: 'besu.orion',
}

const bimap = new BiMap()
bimap.push(ProtocolType.EthereumConstantinople, protocol_pb.ProtocolType.ETHEREUM_CONSTANTINOPLE)
bimap.push(ProtocolType.QuorumConstellation, protocol_pb.ProtocolType.QUORUM_CONSTELLATION)
bimap.push(ProtocolType.QuorumTessera, protocol_pb.ProtocolType.QUORUM_TESSERA)
bimap.push(ProtocolType.BesuOrion, protocol_pb.ProtocolType.BESU_ORION)

/**
 * [marshalProtocol: marshal the protocol part of the envelope and sets it as the Protocol field in our protobuff]
 * @param  {Object}         envelope    [enveloppe protoBuff]
 * @param  {Object}         msg         [protocol object of the transaction payload]
 */
export const marshalProtocol = (envelope, msg) => {
    let protocol = envelope.getProtocol()
    if (!protocol) {
        protocol = new protocol_pb.Protocol()
    }
    switch (typeof msg) {
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'type':
                        protocol.setType(toProtobufProtocolType(value))
                        break;
                    case 'extra':
                        const extra = protocol.getExtraMap()
                        Object.entries(value).forEach(([keyMap, valueMap]) => {
                            extra.set(keyMap, valueMap)
                        })
                        break;
                    default:
                        throw new Error(`Protocol message do not expect "${key}" field`)
                }
            })
            break;
        default:
            throw new Error('Protocol message has invalid format')
    }
    envelope.setProtocol(protocol)
}

/**
 * [unmarshalProtocol: retrieve the protocol data from the envelop]
 * @param  {Object} protocol  [protocol object of the envelop]
 * @return {Object} result    [protocol payload]
 */
export const unmarshalProtocol = protocol => {
    const result = {}
    if (protocol.extraMap.length > 0) {
        result.extra = arrayToObject(protocol.extraMap)
    } else {
        result.extra = {}
    }
    result.type = fromProtobufProtocolType(protocol.type)
    return result
}

/**
 * [toProtobufProtocolType: retrieve the type of the protocol of the procol payload]
 * @param  {Object}         protocolType  [protocol type]
 * @return {Object | Error} protocolType  [protocol payload type or an error if it is undefined]
 */
const toProtobufProtocolType = protocolType => {
    const pbProtoType = bimap.key(protocolType)
    if (pbProtoType === undefined) {
        throw new Error(`Cannot convert protocol type "${protocolType}"`)
    }
    return pbProtoType
}

/**
 * [fromProtobufProtocolType: convert the protocol ProtoBuff into a protocol payload]
 * @param  {Object} pbProtoType  [type of the protocol]
 * @return {Object} protocol     [protocol payload]
 */
const fromProtobufProtocolType = pbProtoType => {
    return bimap.val(pbProtoType)
}
