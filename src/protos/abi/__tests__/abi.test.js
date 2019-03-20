import { marshallContract, marshallMethod } from '../abi'
import call_pb from '../../common/call_pb'

let call

const protoToObject = proto => {
    const buf = new Buffer(proto, 'base64')
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
        expect(contract.name).toEqual(testMsg)
        expect(contract.tag).toEqual('')
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
            bytecode: '0x608060405234801561001057600080fd5b5061160a806100206000396000f3006080604052600436106100955763ffffffff60e060020a60003504166316d390bf811461009a5780633c8ac88e146100c357806353faa9a91461015157806373b40a5c14610178578063781f5a83146101e7578063898d5a5b1461020e578063995fac1'
        }
        marshallContract(call, testMsg)
        const contract = call.getContract().toObject()
        expect(testMsg.name).toEqual(contract.name)
        expect(testMsg.tag).toEqual(contract.tag)
        expect(testMsg.abi).toEqual(protoToObject(contract.abi))
        expect(testMsg.bytecode).toEqual(contract.bytecode)
    })

    test("marshall multiple times", () => {
        const testMsg = {
            name: 'testName',
        }
        marshallContract(call, testMsg)
        let contract = call.getContract().toObject()
        expect(contract.name).toEqual(testMsg.name)
        expect(contract.tag).toEqual('')
        expect(contract.abi).toEqual('')
        expect(contract.bytecode).toEqual('')

        const testMsg2 = {
            tag: 'testTag',
        }
        marshallContract(call, testMsg2)
        contract = call.getContract().toObject()
        expect(contract.name).toEqual(testMsg.name)
        expect(contract.tag).toEqual(testMsg2.tag)
        expect(contract.abi).toEqual('')
        expect(contract.bytecode).toEqual('')
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
        expect(method.name).toEqual(testMsg)
        expect(method.abi).toEqual('')

    })

    test("set object", () => {
        const testMsg = {
            name: 'testName',
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
        marshallMethod(call, testMsg)
        const method = call.getMethod().toObject()
        expect(testMsg.name).toEqual(method.name)
        expect(testMsg.abi).toEqual(protoToObject(method.abi))
    })

    test("marshall multiple times", () => {
        const testMsg = {
            name: 'testName',
        }
        marshallMethod(call, testMsg)
        let method = call.getMethod().toObject()
        expect(method.name).toEqual(testMsg.name)
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

        expect(testMsg.name).toEqual(method.name)
        expect(testMsg2.abi).toEqual(protoToObject(method.abi))

    })
})