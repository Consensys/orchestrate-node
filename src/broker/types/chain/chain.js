import chain_pb from './chain_pb'
import * as web3utils from 'web3-utils'
import { b64ToHex } from '../../utils/formatters'

/**
 * [marshallChain description]
 * @param  {[type]} envelope [description]
 * @param  {[type]} msg   [description]
 * @return {[type]}       [description]
 */
export const marshallChain = msg => {
    const chain = new chain_pb.Chain()
    if (isNaN(msg)) {
        throw new Error(`marshallChain: "${msg}" is not a number`)
    }
    const bn = new web3utils.BN(msg).toBuffer();
    chain.setId(bn)
    return chain
}

export const unmarshallChain = msg => {
    if (msg['id']) {
        msg['id'] = web3utils.hexToNumberString(b64ToHex(msg['id']))
    }
    return msg
}