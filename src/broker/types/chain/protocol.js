import protocol_pb from './protocol_pb'
import { arrayToObject } from '../../utils/formatters'
import BiMap from 'bimap'

export const ProtocolType = {
    EthereumConstantinople: 'ethereum.constantinople',
    QuorumConstellation: 'quorum.constellation',
    QuorumTessera: 'quorum.tessera',
    PantheonOrion: 'pantheon.orion',
}

const bimap = new BiMap()
bimap.push(ProtocolType.EthereumConstantinople, protocol_pb.ProtocolType.ETHEREUM_CONSTANTINOPLE)
bimap.push(ProtocolType.QuorumConstellation, protocol_pb.ProtocolType.QUORUM_CONSTELLATION)
bimap.push(ProtocolType.QuorumTessera, protocol_pb.ProtocolType.QUORUM_TESSERA)
bimap.push(ProtocolType.PantheonOrion, protocol_pb.ProtocolType.PANTHEON_ORION)

export const marshallProtocol = (envelope, msg) => {
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

export const unmarshallProtocol = protocol => {
    const result = {}
    if (protocol.extraMap.length > 0) {
        result.extra = arrayToObject(protocol.extraMap)
    } else {
        result.extra = {}
    }
    result.type = fromProtobufProtocolType(protocol.type)
    return result
}

function toProtobufProtocolType(protocolType) {
    const pbProtoType = bimap.key(protocolType)
    if (pbProtoType === undefined) {
        throw new Error(`Cannot convert protocol type "${protocolType}"`)
    }
    return pbProtoType
}

function fromProtobufProtocolType(pbProtoType) {
    return bimap.val(pbProtoType)
}
