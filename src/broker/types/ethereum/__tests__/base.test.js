import {
    marshallAccount, 
    marshallHash,
    marshallQuantity,
    unmarshallQuantity,
    marshallData
} from '../base'
import * as web3utils from 'web3-utils'

describe("# marshallAccount ", () => {
    test("set default", () => {
        const testMsg = '0xc1912fee45d61c87cc5ea59dae31190fffff232d'
        const account = marshallAccount(testMsg)
        const raw = account.getRaw()
        expect(raw.toString('hex')).toEqual(testMsg.substr(2))
    })

    test("set non-hex account", () => {
        const testMsg = 'test'
        try {
            marshallAccount(testMsg)
        } catch(e) {
            expect(e.message).toEqual(`marshallAccount: ${testMsg} is not a valid address`)
        }
    })
})

describe("# marshallHash ", () => {
    test("set default", () => {
        const testMsg = '0x72c9a04f5af7b512172c5283ca138c25bca64dd210e70a15dfe015aa4fe67b1a'
        const account = marshallHash(testMsg)
        const raw = account.getRaw()
        expect(raw.toString('hex')).toEqual(testMsg.substr(2))
    })

    test("set non-hex account", () => {
        const testMsg = 'test'
        try {
            marshallHash(testMsg)
        } catch(e) {
            expect(e.message).toEqual(`marshallHash: ${testMsg} is not a valid hash`)
        }
    })
})

describe("# marshallQuantity ", () => {
    test("set default", () => {
        const testMsg = '1'
        const quantity = marshallQuantity(testMsg)
        const raw = quantity.getRaw()
        expect(unmarshallQuantity({raw})).toEqual(testMsg)
    })


    test("set hex", () => {
        const testMsg = '0x2710'
        const quantity = marshallQuantity(testMsg)
        const raw = quantity.getRaw()
        expect(unmarshallQuantity({raw})).toEqual(web3utils.hexToNumberString(testMsg))
    })
})

describe("# marshallData ", () => {
    test("set default", () => {
        const testMsg = '0x72c9a04f5af7b512172c5283ca138c25bca64dd210e70a15dfe015aa4fe67b1a'
        const data = marshallData(testMsg)
        const raw = data.getRaw()
        expect(raw.toString('hex')).toEqual(testMsg.substr(2))
    })

    test("set non hex hash", () => {
        const testMsg = 'test'
        try {
            marshallData(testMsg)
        } catch(e) {
            expect(e.message).toEqual(`marshallData: ${testMsg} is not a valid data hash`)
        }
    })
})