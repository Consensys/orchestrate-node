import { marshalChain, unmarshalChain } from '../chain'

describe("# marshalChain ", () => {
    test("set default", () => {
        const testMsg = '10000000000000000'
        const chain = marshalChain(testMsg)
        const id = chain.getId()
        const chainId = unmarshalChain({id})

        expect(chainId.id).toEqual(testMsg)
    })
})