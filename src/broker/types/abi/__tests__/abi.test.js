import { marshallContract, marshallMethod } from '../abi'
import call_pb from '../../args/call_pb'

let call

const protoToObject = proto => {
    const buf = Buffer.from(proto, 'base64')
    return JSON.parse(buf.toString('ascii'))
}

describe("# marshallContract ", () => {

    beforeEach(() => {
        call = new call_pb.Call()
    })

    test("set default", () => {
        const testMsg = 'testName'
        marshallContract(call, testMsg)
        const contract = call.getContract().toObject()
        expect(contract.id.name).toEqual(testMsg)
        expect(contract.id.tag).toEqual('')
        expect(contract.abi).toEqual('')
        expect(contract.bytecode).toEqual('')
    })

    test("Error", () => {
        const testMsg = {
            error: 'test'
        }
        try {
            marshallContract(call, testMsg)
        } catch(e) {
            expect(e.message).toEqual('Contract message not valid')

        }
    })

    test("set object", () => {
        const testMsg = {
            name: 'testName',
            tag: 'testTag',
            abi: [{
                constant: true ,
                inputs: [],
                name: 'name',
                outputs: [
                    {name: '',type: 'string'}
                ],
                payable: false,
                stateMutability: 'view',
                type: 'function'
            },
            {
                constant: false,
                inputs: [
                    {name: 'partition', type: 'bytes32'},
                    {name: 'operator',type: 'address'}
                ],
                name: 'authorizeOperatorByPartition',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function'
            },
            {
                constant: false,
                inputs: [
                    {name: 'partition', type: 'bytes32'},
                    {name: 'operator', type: 'address'}
                ],
                name: 'revokeOperatorByPartition',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayabsle',
                type: 'function'
            }],
            bytecode: '0x608060405234801561001057600080fd5b5061160a806100206000396000f3006080604052600436106100955763ffffffff60e060020a60003504166316d390bf811461009a5780633c8ac88e146100c357806353faa9a91461015157806373b40a5c14610178578063781f5a83146101e7578063898d5a5b1461020e578063995fac'
        }
        marshallContract(call, testMsg)
        const contract = call.getContract().toObject()
        expect(testMsg.name).toEqual(contract.id.name)
        expect(testMsg.tag).toEqual(contract.id.tag)
        expect(testMsg.abi).toEqual(protoToObject(contract.abi))
        const buf = Buffer.from(contract.bytecode, 'base64') 
        expect(testMsg.bytecode).toEqual('0x' + buf.toString('hex'))
    })

    test("marshall multiple times", () => {
        const testMsg = {
            bytecode: '0x608060405234801561001057600080fd5b5061160a806100206000396000f3006080604052600436106100955763ffffffff60e060020a60003504166316d390bf811461009a5780633c8ac88e146100c357806353faa9a91461015157806373b40a5c14610178578063781f5a83146101e7578063898d5a5b1461020e578063995fac',
        }
        marshallContract(call, testMsg)
        let contract = call.getContract().toObject()
        const buf = Buffer.from(contract.bytecode, 'base64') 
        expect('0x' + buf.toString('hex')).toEqual(testMsg.bytecode)
        expect(contract.id).toBeUndefined()
        expect(contract.abi).toEqual('')

        const testMsg2 = {
            tag: 'testTag',
        }
        marshallContract(call, testMsg2)
        contract = call.getContract().toObject()
        expect('0x' + buf.toString('hex')).toEqual(testMsg.bytecode)
        expect(contract.id.tag).toEqual(testMsg2.tag)
        expect(contract.abi).toEqual('')
        expect(contract.id.registry).toEqual('')
    })
})


describe("# marshallMethod ", () => {

    beforeEach(() => {
        call = new call_pb.Call()
    })

    test("set default", () => {
        const testMsg = 'testName'
        marshallMethod(call, testMsg)
        const method = call.getMethod().toObject()
        expect(method.signature).toEqual(testMsg)
        expect(method.abi).toEqual('')

    })

    test("set object", () => {
        const testMsg = {
            signature: 'testName',
            abi: {
                constant: false,
                inputs: [
                    {name: 'partition', type: 'bytes32'},
                    {name: 'operator',type: 'address'}
                ],
                name: 'authorizeOperatorByPartition',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function'
            },
        }
        marshallMethod(call, testMsg)
        const method = call.getMethod().toObject()
        expect(testMsg.signature).toEqual(method.signature)
        expect(testMsg.abi).toEqual(protoToObject(method.abi))
    })

    test("marshall multiple times", () => {
        const testMsg = {
            signature: 'testName',
        }
        marshallMethod(call, testMsg)
        let method = call.getMethod().toObject()
        expect(method.signature).toEqual(testMsg.signature)
        expect(method.abi).toEqual('')

        const testMsg2 = {
            abi: [{
                constant: false,
                inputs: [
                    {name: 'partition', type: 'bytes32'},
                    {name: 'operator',type: 'address'}
                ],
                name: 'authorizeOperatorByPartition',
                outputs: [],
                payable: false,
                stateMutability: 'nonpayable',
                type: 'function'
            }],
        }
        marshallMethod(call, testMsg2)
        method = call.getMethod().toObject()

        expect(testMsg.signature).toEqual(method.signature)
        expect(testMsg2.abi).toEqual(protoToObject(method.abi))

    })
})