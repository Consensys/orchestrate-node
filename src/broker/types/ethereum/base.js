import base_pb from './base_pb'
import * as web3utils from 'web3-utils'
import { rawToHex } from '../../utils/formatters'

/**
 * [marshallAccount takes an ethereum address as an input and sets it in our Account protoBuff]
 * @param  {Object}         msg      [ethereum address]
 * @return {Object | Error} account  [Account protoBuff object or an error if the input is not an object]
 */
export const marshallAccount = msg => {
    const account = new base_pb.Account()
    if(!web3utils.isAddress(msg)) {
        throw new Error(`marshallAccount: ${msg} is not a valid address`)
    }
    account.setRaw(Buffer.from(msg.substr(2), 'hex'))
    return account
}

/**
 * [marshallHash: sets the Hash protoBuff and returns it]
 * @param  {Object}          msg    [hash value]
 * @return {Object | Error}  hash   [hash protoBuff object or an error if the input si not formated as a hexadecimal]
 */
export const marshallHash = msg => {
    const hash = new base_pb.Hash()
    if(!web3utils.isHexStrict(msg)) {
        throw new Error(`marshallHash: ${msg} is not a valid hash`)
    }
    hash.setRaw(Buffer.from(msg.substr(2), 'hex'))
    return hash
}

/**
 * [marshallQuantity: sets quantity values like the gasPrice or value object of the transaction in our ProtoBuff]
 * @param  {Object}          msg        [input object, e.g: gasPrice]
 * @return {Object | Error}  quantity   [quantity protoBuff or an error if the input is not a number]
 */
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

/**
 * [marshallData: sets the raw object of the transaction in our ProtoBuff]
 * @param  {Object}          msg    [value of the raw object]
 * @return {Object | Error}  data   [data protoBuff of an error if the input is not formated as a hexadecimal]
 */
export const marshallData = msg => {
    const data = new base_pb.Data()
    if(!web3utils.isHexStrict(msg)) {
        throw new Error(`marshallData: ${msg} is not a valid data hash`)
    }
    data.setRaw(Buffer.from(msg.substr(2), 'hex'))
    return data
}

/**
 * [unmarshallQuantity: deserialize a base64 value into a string]
 * @param  {Object}  rawObj    [number formated as a base64 value]
 * @return {string}            [human readable and stringified value of rawObj]
 */
export const unmarshallQuantity = rawObj => {
    if (typeof rawObj === 'object') {
        return web3utils.hexToNumberString(rawToHex(rawObj))
    }
}