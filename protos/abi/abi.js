import abi_pb from './abi_pb'

const abiToProto = abi => {
    return Buffer.from(JSON.stringify(abi))
}

export const marshallContract = (call, msg) => {
    let contract = call.getContract()
    if (contract == null) {
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
                        contract.setName(value)
                        break;
                    case 'tag':
                        contract.setTag(value)
                        break;
                    case 'abi':
                        contract.setAbi(abiToProto(value))
                        break;
                    case 'bytecode':
                        contract.setBytecode(value)
                        break;
                }
            })
            break;
    }
    call.setContract(contract)
}

export const marshallMethod = (call, msg) => {
    let method = call.getMethod()
    if (method == null) {
        method = new abi_pb.Method()
    }
    switch (typeof msg) {
        case 'string':
            method.setName(msg)
            break;
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'name':
                        method.setName(value)
                        break;
                    case 'abi':
                        method.setAbi(abiToProto(value))
                        break;
                }
            })
            break;
    }
    call.setMethod(method)
}
