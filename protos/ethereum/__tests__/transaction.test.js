import trace_pb from '../../trace/trace_pb'
import { marshallTransaction } from '../transaction'


describe("# marshallTransaction ", () => {

    let trace 
    beforeEach(async () => {
        trace = new trace_pb.Trace()
    })

    // test("set object", async () => {
    //     trace = new trace_pb.Trace()

    //     const testMsg = {
    //         to: 'testTo',
    //         value: 'testValue',
    //         gas: '100000',
    //         gasPrice: 'testGasPrice',
    //         data: 'testData',
    //         raw: 'testRaw',
    //         hash: 'testHash',
    //     }
    //     marshallTransaction(trace, testMsg)
    //     const tx = trace.getTx().toObject()

    //     expect(tx.txData.to).toEqual(testMsg.to)
    //     expect(tx.txData.value).toEqual(testMsg.value)
    //     expect(tx.txData.gas).toEqual(testMsg.gas)
    //     expect(tx.txData.gasPrice).toEqual(testMsg.gasPrice)
    //     expect(tx.txData.data).toEqual(testMsg.data)
    //     expect(tx.raw).toEqual(testMsg.raw)
    //     expect(tx.hash).toEqual(testMsg.hash)
    // })

    // test("marshall multiple times", async () => {
    //     const testMsg = {
    //         value: 'testValue',
    //     }
    //     marshallTransaction(trace, testMsg)
    //     tx = trace.getTx().toObject()
    //     expect(tx.txData.to).toEqual('')
    //     expect(tx.txData.value).toEqual(testMsg.value)

    //     const testMsg2 = {
    //         to: 'testTo',
    //     }
    //     marshallTransaction(trace, testMsg2)
    //     let tx = trace.getTx().toObject()
    //     expect(tx.txData.to).toEqual(testMsg2.to)
    //     expect(tx.txData.value).toEqual(testMsg.value)
    // })

    test("marshallTo", async () => {
        const testMsg = {
            to: 'testTo',
        }
        marshallTransaction(trace, testMsg)
        const tx = trace.getTx().toObject()
        expect(tx.txData.to).toEqual(testMsg.to)
    })

    test("marshallValue", async () => {
        const testMsg = {
            value: 'testValue',
        }
        await marshallTransaction(trace, testMsg)
        const tx = trace.getTx().toObject()
        console.log(tx)
        expect(tx.txData.value).toEqual(testMsg.value)
    })

    // test("marshallGas", async () => {
    //     const testMsg = {
    //         gas: 'testGas',
    //     }
    //     marshallTransaction(trace, testMsg)
    //     const tx = trace.getTx().toObject()
    //     expect(tx.txData.gas).toEqual(testMsg.gas)
    // })

    // test("marshallGasPrice", async () => {
    //     const testMsg = {
    //         gasPrice: 'testGasPrice',
    //     }
    //     marshallTransaction(trace, testMsg)
    //     const tx = trace.getTx().toObject()
    //     expect(tx.txData.gasPrice).toEqual(testMsg.gasPrice)
    // })

    // test("marshallData", async() => {
    //     const testMsg = {
    //         data: 'testData',
    //     }
    //     marshallTransaction(trace, testMsg)
    //     const tx = trace.getTx().toObject()
    //     expect(tx.txData.data).toEqual(testMsg.data)
    // })
})