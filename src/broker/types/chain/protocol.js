import protocol_pb from './protocol_pb'
import { capitalize, arrayToObject } from '../../utils/formatters';

export const marshallProtocol = (envelope, msg) => {
    let protocol = envelope.getProtocol()
    if (!protocol) {
        protocol = new protocol_pb.Protocol()
    }
    switch (typeof msg) {
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'name':
                    case 'tag':
                        protocol[`set${capitalize(key)}`](value)
                        break;
                    case 'extra':
                        const extra = protocol.getExtraMap()
                        Object.entries(value).forEach(([keyMap, valueMap]) => {
                            extra.set(keyMap, valueMap)
                        })
                        break;
                    default:
                        throw new Error(`Protocol message do not expect a "${key}" field`)
                }
            })
            break;
        default:
            throw new Error('Protocol message not in a valid format')
    }
    envelope.setProtocol(protocol)
}

export const unmarshallProtocol = protocol => {
    if (protocol['extraMap'].length > 0) {
        protocol['extraMap'] =  arrayToObject(protocol['extraMap'])
    }
    return protocol
}