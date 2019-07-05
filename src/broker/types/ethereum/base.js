import base_pb from './base_pb'
import * as web3utils from 'web3-utils'
import { rawToHex } from '../../utils/formatters'


export const marshallAccount = msg => {
    const account = new base_pb.Account()
    if(!web3utils.isAddress(msg)) {
        throw new Error(`marshallAccount: ${msg} is not a valid address`)
    }
    account.setRaw(Buffer.from(msg.substr(2), 'hex'))
    return account
}

export const marshallHash = msg => {
    const hash = new base_pb.Hash()
    if(!web3utils.isHexStrict(msg)) {
        throw new Error(`marshallHash: ${msg} is not a valid hash`)
    }
    hash.setRaw(Buffer.from(msg.substr(2), 'hex'))
    return hash
}

export const marshallQuantity = msg => {
    const quantity = new base_pb.Quantity()
    if (isNaN(msg)) {
        throw new Error(`marshallQuantity: "${msg}" is not a number`)
    }
    if (web3utils.isHexStrict(msg)) {
        msg = web3utils.hexToNumberString(msg)
    }
    const bn = new web3utils.BN(msg);
    quantity.setRaw(bn.toBuffer())
    return quantity
}

export const marshallData = msg => {
    const data = new base_pb.Data()
    if(!web3utils.isHexStrict(msg)) {
        throw new Error(`marshallData: ${msg} is not a valid data hash`)
    }
    data.setRaw(Buffer.from(msg.substr(2), 'hex'))
    return data
}

export const unmarshallQuantity = rawObj => {
    if (typeof rawObj === 'object') {
        return web3utils.hexToNumberString(rawToHex(rawObj))
    }
}