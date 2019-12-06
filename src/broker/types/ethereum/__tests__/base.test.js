import {
    marshalAccount, 
    marshalHash,
    marshalQuantity,
    unmarshalQuantity,
    marshalData
} from '../base'
import * as web3utils from 'web3-utils'

describe("# marshalAccount ", () => {
    test("set default", () => {
        const testMsg = '0xc1912fee45d61c87cc5ea59dae31190fffff232d'
        const account = marshalAccount(testMsg)
        const raw = account.getRaw()
        expect(raw.toString('hex')).toEqual(testMsg.substr(2))
    })

    test("set non-hex account", () => {
        const testMsg = 'test'
        try {
            marshalAccount(testMsg)
        } catch(e) {
            expect(e.message).toEqual(`marshalAccount: ${testMsg} is not a valid address`)
        }
    })
})

describe("# marshalHash ", () => {
    test("set default", () => {
        const testMsg = '0x72c9a04f5af7b512172c5283ca138c25bca64dd210e70a15dfe015aa4fe67b1a'
        const account = marshalHash(testMsg)
        const raw = account.getRaw()
        expect(raw.toString('hex')).toEqual(testMsg.substr(2))
    })

    test("set non-hex account", () => {
        const testMsg = 'test'
        try {
            marshalHash(testMsg)
        } catch(e) {
            expect(e.message).toEqual(`marshalHash: ${testMsg} is not a valid hash`)
        }
    })
})

describe("# marshalQuantity ", () => {
    test("set default", () => {
        const testMsg = '1'
        const quantity = marshalQuantity(testMsg)
        const raw = quantity.getRaw()
        expect(unmarshalQuantity({raw})).toEqual(testMsg)
    })


    test("set hex", () => {
        const testMsg = '0x2710'
        const quantity = marshalQuantity(testMsg)
        const raw = quantity.getRaw()
        expect(unmarshalQuantity({raw})).toEqual(web3utils.hexToNumberString(testMsg))
    })
})

describe("# marshalData ", () => {
    test("set default", () => {
        const testMsg = '0x72c9a04f5af7b512172c5283ca138c25bca64dd210e70a15dfe015aa4fe67b1a'
        const data = marshalData(testMsg)
        const raw = data.getRaw()
        expect(raw.toString('hex')).toEqual(testMsg.substr(2))
    })

    test("set non hex hash", () => {
        const testMsg = 'test'
        try {
            marshalData(testMsg)
        } catch(e) {
            expect(e.message).toEqual(`marshalData: ${testMsg} is not a valid data hash`)
        }
    })
})