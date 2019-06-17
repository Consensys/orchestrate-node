import chain_pb from './chain_pb'

/**
 * [marshallChain description]
 * @param  {[type]} envelope [description]
 * @param  {[type]} msg   [description]
 * @return {[type]}       [description]
 */
export const marshallChain = (envelope, msg) => {
    let chain = envelope.getChain()
    if (!chain) {
        chain = new chain_pb.Chain()
    }
    switch (typeof msg) {
        case 'string':
        case 'number':
            chain.setId(msg)
            break;
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'id':
                        chain.setId(value)
                        break;
                    case 'iseip155':
                        chain.setIseip155(value)
                        break;
                    default:
                        throw new Error(`Chain message do not expect a "${key}" field`)
                }
            })
            break;
        default:
            throw new Error('Chain message not in a valid format')
    }
    envelope.setChain(chain)
}
