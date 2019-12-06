import chain_pb from './chain_pb'
import * as web3utils from 'web3-utils'
import { b64ToHex } from '../../utils/formatters'

/**
 * [marshalChain sets the chain Id of the transaction on our chain protobuff]
 * @param  {number}         msg    [chain Id]
 * @return {Object | Error} chain  [protobuff object with chain Id set]
 */
export const marshalChain = msg => {
    const chain = new chain_pb.Chain()
    if (isNaN(msg)) {
        throw new Error(`marshalChain: "${msg}" is not a number`)
    }
    const bn = new web3utils.BN(msg).toBuffer();
    chain.setId(bn)
    return chain
}

/**
 * [unmarshalChain reads the chain Id of the envelop and decodes it]
 * @param  {Object} msg   [chainId object]
 * @return {string} msg   [chainId as a string]
 */
export const unmarshalChain = msg => {
    if (msg['id']) {
        msg['id'] = web3utils.hexToNumberString(b64ToHex(msg['id']))
    }
    return msg
}