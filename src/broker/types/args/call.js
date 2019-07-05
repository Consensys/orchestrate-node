import call_pb from './call_pb'
import { marshallContract, marshallMethod } from '../abi/abi'
import { parseSignature } from '../../utils/solidity'
import * as web3utils from 'web3-utils'

/**
 * [marshallCall description]
 * @param  {proto} args [proto args]
 * @param  {Object} msg   [call message object - fields: contract, method, args]
 * @return {[type]}       [description]
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
 * [formatCall description]
 * @param  {Object} msg   [call message object]
 * @return {[type]}       [description]
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
 * 
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
 * [marshallArgs description]
 * @param  {[type]} call [description]
 * @param  {[type]} msg  [description]
 * @return {[type]}      [description]
 */
export const marshallArgs = (call, msg) => {
    call.setArgsList(msg)
}

export const formatArraySliceArg = (args, sigArgType) => {
    if (!(typeof args === 'object')) {
        throw new Error(`formatArraySliceArg: "${args}" is not an array/slice`)
    }
    const formatedArray = args.map(arg => formatElementaryType(arg, sigArgType))
    return JSON.stringify(formatedArray)
}

export const formatIntUintArg = arg => {
    if (isNaN(arg)) {
        throw new Error(`formatIntUintArg: "${arg}" is not a number`)
    }
    return web3utils.numberToHex(arg)
}

export const formatBoolArg = arg => {
    if (typeof arg != 'boolean') {
        throw new Error(`formatBoolArg: "${arg}" is not a boolean`) 
    }
    return arg.toString()
}

export const formatAddressArg = arg => {
    if (!web3utils.isAddress(arg)) {
        throw new Error(`formatAddressArg: "${arg}" is not an address`) 
    }
    return arg
}

export const formatByteArg = arg => {
    if (!web3utils.isHexStrict(arg)) {
        throw new Error(`formatByteArg: "${arg}" is not a Hex string with a 0x prefix`) 
    }
    return arg
}