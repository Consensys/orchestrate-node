import private_pb from './private_pb'
import { capitalize } from '../../utils/formatters'

/**
 * [marshalPrivate: marshal the private object contained int the Call object of the transaction payload and sets it as the contractId field in our protoBuff]
 * @param  {Object}  args    [protoBuff to be set]
 * @param  {Object}  msg     [private object contained in the Call object]
 */
export const marshalPrivate = (args, msg) => {
    let privateProto = args.getPrivate()
    if (!privateProto) {
        privateProto = new private_pb.Private()
    }
    switch (typeof msg) {
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'privateFrom':
                    case 'privateTxType':
                        privateProto[`set${capitalize(key)}`](value)
                        break;
                    case 'privateFor':
                        privateProto.setPrivateForList(value)
                        break;
                    default:
                        throw new Error(`Private proto message do not expect a "${key}" field`)
                }
            })
            break;
        default:
            throw new Error('Private proto message not in a valid format')

    }
    args.setPrivate(privateProto)
}
