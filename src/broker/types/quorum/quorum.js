import quorum_pb from './quorum_pb'
import { capitalize } from '../../utils/formatters'

/**
 * [marshallQuorum description]
 * @param  {[type]} call [description]
 * @param  {[type]} msg  [description]
 * @return {[type]}      [description]
 */
export const marshallQuorum = (call, msg) => {
    let quorum = call.getQuorum()
    if (!quorum) {
        quorum = new quorum_pb.Quorum()
    }
    switch (typeof msg) {
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'version':
                    case 'privateFrom':
                    case 'privateTxType':
                        quorum[`set${capitalize(key)}`](value)
                        break;
                    case 'privateFor':
                        quorum.setPrivateForList(value)
                        break;
                    default:
                        throw new Error(`Quorum message do not expect a "${key}" field`)
                }
            })
            break;
        default:
            throw new Error('Quorum message not in a valid format')

    }
    call.setQuorum(quorum)
}
