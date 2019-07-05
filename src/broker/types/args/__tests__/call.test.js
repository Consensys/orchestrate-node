import { 
    marshallCall,
    marshallArgs,
    formatCall,
    formatArgsAndSignature,
    formatArraySliceArg,
    formatIntUintArg,
    formatBoolArg,
    formatAddressArg,
    formatByteArg,
} from '../call'
import envelope_pb from '../../envelope/envelope_pb'
import call_pb from '../call_pb'

let args

describe("# marshallCall ", () => {

    beforeEach(() => {
        args = new envelope_pb.Args()
    })

    test("set invalid format", () => {
        const testMsg = 'testName'
        expect(() => {
            marshallCall(args, testMsg)
        }).toThrow();
    })

    test("set invalid object format", () => {
        const testMsg = {error: 'testError'}

        expect(() => {
            marshallCall(args, testMsg)
        }).toThrow();
    })

    test("set object", () => {
        const testMsg = {
            contract: 'testContract',
            method: 'testMethod(string)',
            args: ['testArgs'],

        }
        marshallCall(args, testMsg)
        const call = args.getCall().toObject()
        expect(call.contract.id.name).toEqual(testMsg.contract)
        expect(call.method.signature).toEqual(testMsg.method)
        expect(call.argsList).toEqual(testMsg.args)
    })

    test("marshall multiple times", () => {
        const testMsg = {
            contract: 'testContract' 
        }
        marshallCall(args, testMsg)
        let getCall = args.getCall().toObject()
        expect(getCall.contract.id.name).toEqual(testMsg.contract)
        expect(getCall.method).toBeUndefined()
        expect(getCall.argsList).toEqual([])

        const testMsg1 = {
            method: 'testMethod(string)',
            args: ['testArgs'],
        }
        marshallCall(args, testMsg1)
        getCall = args.getCall().toObject()
        expect(getCall.contract.id.name).toEqual(testMsg.contract)
        expect(getCall.method.signature).toEqual(testMsg1.method)
        expect(getCall.argsList).toEqual(testMsg1.args)
    })

})

let call

describe("# marshallArgs ", () => {

    beforeEach(() => {
        call = new call_pb.Call()
    })

    test("set args", () => {
        const testMsg = ['arg1', 'arg2', 'arg3']
        marshallArgs(call, testMsg)
        expect(call.getArgsList()).toEqual(testMsg)
    })

})


describe("# formatCall ", () => {
    test("formatCall without error", () => {
        const testSet = [
            [{ method: { signature: 'test(uint256)' }, args: [10] }, {args: ["0xa"], method: {signature: 'test(uint256)'}}]
        ]
        testSet.forEach(([input, expectedOutput]) => {
            expect(formatCall(input)).toEqual(expectedOutput)
        })
    })

    test("formatArgsAndSignature with error", () => {
        const testSet = [
            { method: { signature: 'test(uint256)' }, args: [] },
            { method: { signature: 'test(uin256)' }, args: [2000] },
            { method: { signatre: 'test(uint256)' }, args: [2000] },
            { method: { signature: 'test(uint256)' }, args: [2000, 'test'] },
            { method: { signature: 'test(uint256)' }, args: '' },
            { method: { signature: 'test()' }, args: ['true'] },
            { method: { signature: 'test()' }, args: 'true' },
        ]
        testSet.forEach(input => {
            expect(() => formatCall(input)).toThrow()
        })
    })
})


describe("# formatArgsAndSignature ", () => {
    test("formatArgsAndSignature without error", () => {
        const testSet = [
            [[true, 10], ['bool', 'uint256'], ["true","0xa"]],
            [['test', 10, [false, false]], ['string', 'uint256', 'bool[]'], ["test","0xa","[\"false\",\"false\"]"]],
        ]
        testSet.forEach(([args, sigArgTypes, expectedOutput]) => {
            expect(formatArgsAndSignature(args, sigArgTypes)).toEqual(expectedOutput)
        })

    })

    test("formatArgsAndSignature with error", () => {
        const sigArgTypes = '(uint256,address)'
        const args = [{
            a: 10,
            b: '0xc1912fee45d61c87cc5ea59dae31190fffff232d'
        }]
        expect(() => formatArgsAndSignature(args, sigArgTypes)).toThrow()
    })
})

describe("# formatArraySliceArg ", () => {
    test("formatArraySliceArg without error", () => {
        const testSet = [
            [[10, 20], 'uint256[]', '["0xa","0x14"]'],
            [[true, true, false], 'bool[3]', '["true","true","false"]'],
            [['0xc1912fee45d61c87cc5ea59dae31190fffff232d'], 'address[]', '["0xc1912fee45d61c87cc5ea59dae31190fffff232d"]'],
            [['0x111122223333444455556666777788889999AAAABBBBCCCCDDDDEEEEFFFFCCCC', '0x111122223333444455556666777788889999AAAABBBBCCCCDDDDEEEEFFFFCCCC'], 'bytes32[]', '["0x111122223333444455556666777788889999AAAABBBBCCCCDDDDEEEEFFFFCCCC","0x111122223333444455556666777788889999AAAABBBBCCCCDDDDEEEEFFFFCCCC"]'],
        ]
        testSet.forEach(([arg, sig, expectedOutput]) => {
            expect(formatArraySliceArg(arg, sig)).toEqual(expectedOutput)
        })  
    })

    test("formatArraySliceArg with error", () => {
        const test = 'test'
        expect(() => formatArraySliceArg(test)).toThrow()
    })
})

describe("# formatIntUintArg ", () => {
    test("formatIntUintArg without error", () => {
        const testSet = [
            [123, '0x7b'],
            ['0x7b', '0x7b'],
            ['0x1', '0x1'],
            ['100', '0x64'],
        ]
        testSet.forEach(([input, expectedOutput]) => {
            expect(formatIntUintArg(input)).toEqual(expectedOutput)
        })  
    })

    test("formatBoolArg with error", () => {
        const test = 'test'
        expect(() => formatIntUintArg(test)).toThrow()
    })
})

describe("# formatBoolArg ", () => {
    test("formatBoolArg without error", () => {
        const testSet = [
            [true, 'true'],
            [false, 'false'],
        ]
        testSet.forEach(([input, expectedOutput]) => {
            expect(formatBoolArg(input)).toEqual(expectedOutput)
        })  
    })

    test("formatBoolArg with error", () => {
        const test = '64'
        expect(() => formatBoolArg(test)).toThrow()
    })
})

describe("# formatAddressArg ", () => {
    test("formatAddressArg without error", () => {
        const testSet = [
            ['0xc1912fee45d61c87cc5ea59dae31190fffff232d'],
            ['c1912fee45d61c87cc5ea59dae31190fffff232d'],
        ]
        testSet.forEach(input => {
            expect(formatAddressArg(input)).toEqual(input)
        })  
    })

    test("formatByteArg with error", () => {
        const test = 'h1912fee45d61c87cc5ea59dae31190fffff232d'
        expect(() => formatAddressArg(test)).toThrow()
    })
})

describe("# formatByteArg ", () => {
    test("formatByteArg without error", () => {
        const test = '0x64'
        expect(formatByteArg(test)).toEqual(test)
    })

    test("formatByteArg with error", () => {
        const test = '64'
        expect(() => formatByteArg(test)).toThrow()
    })
})
