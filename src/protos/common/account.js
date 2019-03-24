import account_pb from './account_pb'

export const marshallSender = (trace, msg) => {
    let sender = trace.getSender()
    if (sender == null) {
        sender = new account_pb.Account()
    }
    marshallAccount(sender, msg)
    trace.setSender(sender)
}

export const marshallReceiver = (trace, msg) => {
    let receiver = trace.getReceiver()
    if (receiver == null) {
        receiver = new account_pb.Account()
    }
    marshallAccount(receiver, msg)
    trace.setReceiver(receiver)
}

const marshallAccount = (account, msg) => {
    switch (typeof msg) {
        case 'string':
            account.setAddr(msg)
            break;
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'id':
                        account.setId(value)
                        break;
                    case 'addr':
                        account.setAddr(value)
                        break;
                    default:
                        throw new Error('Account message do not expect a "' + key + '" field')
                }
            })
            break;
        default:
            throw new Error('Account message not in a valid format')
    }


}