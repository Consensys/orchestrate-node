import chain_pb from './chain_pb'
import * as Utils from 'web3-utils'

export const marshallChain = (trace, msg) => {
    let chain = trace.getChain()
    if (chain == null) {
        chain = new chain_pb.Chain()
    }
    switch (typeof msg) {
        case 'string':
        case 'number':
            chain.setId(Utils.toHex(msg))
            break;
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'id':
                        chain.setId(Utils.toHex(value))
                        break;
                    case 'iseip155':
                        chain.setIseip155(value)
                        break;
                    default:
                        throw new Error('Chain message do not expect a "' + key + '" field')
                }
            })
            break;
        default:
            throw new Error('Chain message not in a valid format')
    }
    trace.setChain(chain)
}
