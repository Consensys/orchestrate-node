import abi_pb from './abi_pb'
import { capitalize } from '../../utils/formatters';

/**
 * [marshallContract description]
 * @param  {[type]} proto [description]
 * @param  {[type]} msg   [description]
 * @return {[type]}       [description]
 */
export const marshallContract = (proto, msg) => {
    let contract = proto.getContract()
    if (!contract) {
        contract = new abi_pb.Contract()
    }
    switch (typeof msg) {
        case 'string':
            contract.setName(msg)
            break;
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'name':
                    case 'tag':
                        contract[`set${capitalize(key)}`](value)
                        break;
                    case 'abi':
                        const abi = Buffer.from(JSON.stringify(value))
                        contract.setAbi(abi)
                        break;
                    case 'bytecode':
                        contract.setBytecode(Buffer.from(value.substr(2), 'hex'))
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
 * [marshallMethod description]
 * @param  {[type]} proto [description]
 * @param  {[type]} msg   [description]
 * @return {[type]}       [description]
 */
export const marshallMethod = (proto, msg) => {
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
