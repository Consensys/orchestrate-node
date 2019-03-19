import abi_pb from './abi_pb'

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
                        const abi = Buffer.from(JSON.stringify(value))
                        contract.setAbi(abi)
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
                        const abi = Buffer.from(JSON.stringify(value))
                        method.setAbi(abi)
                        break;
                }
            })
            break;
    }
    call.setMethod(method)
}
