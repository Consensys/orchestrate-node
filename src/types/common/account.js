import account_pb from './account_pb'
import { capitalize } from '../../utils/formatters'

/**
 * [marshallSender description]
 * @param  {[type]} envelope [description]
 * @param  {[type]} msg   [description]
 * @return {[type]}       [description]
 */
export const marshallSender = (envelope, msg) => {
    let sender = envelope.getSender()
    if (!sender) {
        sender = new account_pb.Account()
    }
    marshallAccount(sender, msg)
    envelope.setSender(sender)
}

/**
 * [marshallReceiver description]
 * @param  {[type]} envelope [description]
 * @param  {[type]} msg   [description]
 * @return {[type]}       [description]
 */
export const marshallReceiver = (envelope, msg) => {
    let receiver = envelope.getReceiver()
    if (!receiver) {
        receiver = new account_pb.Account()
    }
    marshallAccount(receiver, msg)
    envelope.setReceiver(receiver)
}

/**
 * [marshallAccount description]
 * @param  {[type]} account [description]
 * @param  {[type]} msg     [description]
 * @return {[type]}         [description]
 */
const marshallAccount = (account, msg) => {
    switch (typeof msg) {
        case 'string':
            account.setAddr(msg)
            break;
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'id':
                    case 'addr':
                        account[`set${capitalize(key)}`](value)
                        break;
                    default:
                        throw new Error(`Account message do not expect a "${key}" field`)
                }
            })
            break;
        default:
            throw new Error('Account message not in a valid format')
    }


}
