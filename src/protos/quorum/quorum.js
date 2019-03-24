import quorum_pb from './quorum_pb'

export const marshallQuorum = (call, msg) => {
    let quorum = call.getQuorum()
    if (quorum == null) {
        quorum = new quorum_pb.Quorum()
    }
    switch (typeof msg) {
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'version':
                        quorum.setVersion(value)
                        break;
                    case 'privateFrom':
                        quorum.setPrivateFrom(value)
                        break;
                    case 'privateFor':
                        quorum.setPrivateForList(value)
                        break;
                    case 'privateTxType':
                        quorum.setPrivateTxType(value)
                        break;
                    default:
                        throw new Error('Quorum message do not expect a "' + key + '" field')
                }
            })
            break;
        default:
            throw new Error('Quorum message not in a valid format')

    }
    call.setQuorum(quorum)
}