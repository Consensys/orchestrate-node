import call_pb from './call_pb'
import { marshallContract, marshallMethod } from '../abi/abi'
import { parseSignature } from '../../utils/solidity'
import * as web3utils from 'web3-utils'

/**
 * [marshallContract: marshall the contract part of the envelope and sets it as the contract field in our protobuff]
 * @param  {Object}   args  [protoBuff to be set]
 * @param  {Object}   msg   [message object from the transaction payload to be marhaslled]
 */
export const marshallCall = (args, msg) => {
    let call = args.getCall()
    if (!call) {
        call = new call_pb.Call()
    }
    msg = formatCall(msg)
    switch (typeof msg) {
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'contract':
                        marshallContract(call, value)
                        break;
                    case 'method':
                        marshallMethod(call, value)
                        break;
                    case 'args':
                        marshallArgs(call, value)
                        break;
                    default:
                        throw new Error(`marshallCall: Call message do not expect a "${key}" field`)
                }
            })
            break;
        default:
            throw new Error('marshallCall: Call message not in a valid format')
    }
    args.setCall(call)
}

/**
 * [formatCall format the Call part of the envelop to format it so it can be marshalled after]
 * @param  {Object} msg   [call message object from the transaction payload]
 * @return {Object} msg   [protobuff formated message]
 */
export const formatCall = msg => {
    const signature = getSignsature(msg['method'])
    if (signature) {
        const { sigArgTypes } = parseSignature(signature)
        if (sigArgTypes) {
            if (!(typeof msg['args'] === 'object')) {

                throw new Error(`checkCall: "${msg}" is not an array`)
            }
            if(sigArgTypes.length != msg['args'].length) {
                throw new Error(`checkCall: method expects ${sigArgTypes.length} inputs but got ${msg['args'].length} args`)
            }
            msg['args'] = formatArgsAndSignature(msg['args'], sigArgTypes)
        } else if (msg['args']) {
            throw new Error(`checkCall: no input expected in the signature ${signature} but got the following args: "${msg['args']}"`)
        }
    } else {
        if (msg['args']) {
            throw new Error(`checkCall: "${msg['args']}" is not expected, no signature provided`)
        }
    }
    return msg
}

/**
 * [formatArgsAndSignature format the args and signature part of the envelop and returns it to formatCall]
 * @param  {Object} args   [call message object]
 * @return {Object} args   [formated args]
 */
export const formatArgsAndSignature = (args, sigArgTypes) => {
    args.forEach((arg, i) => {
        switch (true) {
            case sigArgTypes[i].includes('['):
                args[i] = formatArraySliceArg(arg, sigArgTypes[i])
                break
            case sigArgTypes[i].includes('('):
                throw new Error(`marshallCall: tuple types are not yet supported`) 
            default:
                args[i] = formatElementaryType(arg, sigArgTypes[i])
        }
    })
    return args
}

/**
 * [formatElementaryType format the signature part depending of it's type]
 * @param  {Object} args         [call message object]
 * @param  {Object} sigArgType   [type of the signature to be formated]
 * @return {string} arg          [formated signature]
 */
export const formatElementaryType = (arg, sigArgType) => {
    switch (true) {
        case /uint|int/.test(sigArgType):
            return formatIntUintArg(arg)
        case /bool/.test(sigArgType):
            return formatBoolArg(arg)
        case /address/.test(sigArgType):
            return formatAddressArg(arg)
        case /byte/.test(sigArgType):
            return formatByteArg(arg)
        default:
            return arg
    }
}

/**
 * [getSignsature looks for the method signature and returns it]
 * @param  {string | Object}  method     [method's name or object]
 * @return {string | null}    method     [method's signature]
 */
export const getSignsature = method => {
    switch (typeof method) {
        case 'string':
            return method
        case 'object':
            return method['signature']
        default:
            return null
    }
}

/**
 * [marshallArgs set the protobuff Args array with the value we provide]
 * @param  {Object} call [protoBuff to be set]
 * @param  {Object} msg  [Args value from the transaction payload]
 */
export const marshallArgs = (call, msg) => {
    call.setArgsList(msg)
}

/**
 * [formatArraySliceArg format the Args array of the transaction payload]
 * @param  {Object} call      [value to be formated]
 * @param  {Object} msg       [Args value from the transaction payload]
 * @return {string | Error}   [correctly formated array or throw an error]
 */
export const formatArraySliceArg = (args, sigArgType) => {
    if (!(typeof args === 'object')) {
        throw new Error(`formatArraySliceArg: "${args}" is not an array/slice`)
    }
    const formatedArray = args.map(arg => formatElementaryType(arg, sigArgType))
    return JSON.stringify(formatedArray)
}

/**
 * [formatIntUintArg makes sure your arg is formated as a number]
 * @param  {any}              arg        [value to be formated]
 * @return {string | Error}              [correctly formated string or throw an error]
 */
export const formatIntUintArg = arg => {
    if (isNaN(arg)) {
        throw new Error(`formatIntUintArg: "${arg}" is not a number`)
    }
    return web3utils.numberToHex(arg)
}

/**
 * [formatBoolArg makes sure your arg is formated as a boolean]
 * @param  {any}              arg        [value to be formated]
 * @return {string | Error}              [correctly formated string or throw an error]
 */
export const formatBoolArg = arg => {
    if (typeof arg != 'boolean') {
        throw new Error(`formatBoolArg: "${arg}" is not a boolean`) 
    }
    return arg.toString()
}

/**
 * [formatAddressArg makes sure your arg is formated as an Ethereum Address]
 * @param  {any}              arg        [value to be formated]
 * @return {string | Error}              [correctly formated string or throw an error]
 */
export const formatAddressArg = arg => {
    if (!web3utils.isAddress(arg)) {
        throw new Error(`formatAddressArg: "${arg}" is not an address`) 
    }
    return arg
}

/**
 * [formatByteArg makes sure your arg is formated as an hexadecimal]
 * @param  {any}              arg        [value to be formated]
 * @return {string | Error}              [correctly formated string or throw an error]
 */
export const formatByteArg = arg => {
    if (!web3utils.isHexStrict(arg)) {
        throw new Error(`formatByteArg: "${arg}" is not a Hex string with a 0x prefix`) 
    }
    return arg
}