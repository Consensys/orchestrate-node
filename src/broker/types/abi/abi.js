import abi_pb from './abi_pb'
import { capitalize } from '../../utils/formatters';

/**
 * [marshalContract: marshal the contract part of the envelope and sets it as the contract field in our protobuff]
 * @param  {Object}            proto  [protoBuff to be set]
 * @param  {string | object}   msg    [part of the envelop to be marshaled]
 */
export const marshalContract = (proto, msg) => {
    let contract = proto.getContract()
    if (!contract) {
        contract = new abi_pb.Contract()
    }
    switch (typeof msg) {
        case 'string':
            marshalContractId(contract, msg)
            break;
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'registry':
                    case 'name':
                    case 'tag':
                        marshalContractId(contract, {[key]: value})
                        break;
                    case 'abi':
                        const abi = Buffer.from(JSON.stringify(value))
                        contract.setAbi(abi)
                        break;
                    case 'bytecode':
                    case 'deployedBytecode':
                        contract[`set${capitalize(key)}`](Buffer.from(value.substr(2), 'hex'))
                        break;
                    case 'methods':
                    case 'events':
                        contract[`set${capitalize(key)}List`](value)
                        break;
                    default:
                        throw new Error('Contract message not valid')
                }
            })
            break;
    }
    proto.setContract(contract)
}

/**
 * [marshalContractId: marshal the registry, name and tag of the envelope and sets it as the contractId field in our protobuff]
 * @param  {Object}            proto  [protoBuff to be set]
 * @param  {string | object}   msg    [part of the envelop to be marshaled]
 */
export const marshalContractId = (proto, msg) => {
    let contractId = proto.getId()
    if (!contractId) {
        contractId = new abi_pb.ContractId()
    }
    switch (typeof msg) {
        case 'string':
            contractId.setName(msg)
            break;
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'registry':
                    case 'name':
                    case 'tag':
                        contractId[`set${capitalize(key)}`](value)
                        break;
                    default:
                        throw new Error('ContractId message not valid')
                }
            })
            break;
    }
    proto.setId(contractId)
}

/**
 * [marshalMethod: marshal the signature and abi of the envelope and sets it as the contractId field in our protobuff]
 * @param  {Object}           proto   [protoBuff to be set]
 * @param  {object | string}  msg     [description]
 */
export const marshalMethod = (proto, msg) => {
    let method = proto.getMethod()
    if (!method) {
        method = new abi_pb.Method()
    }
    switch (typeof msg) {
        case 'string':
            method.setSignature(msg)
            break;
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'signature':
                        method[`set${capitalize(key)}`](value)
                        break;
                    case 'abi':
                        const abi = Buffer.from(JSON.stringify(value))
                        method.setAbi(abi)
                        break;
                }
            })
            break;
    }
    proto.setMethod(method)
}
