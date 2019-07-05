import { marshallChain, unmarshallChain } from '../chain'

describe("# marshallChain ", () => {
    test("set default", () => {
        const testMsg = '10'
        const chain = marshallChain(testMsg)
        const id = chain.getId()
        const chainId = unmarshallChain({id})

        expect(chainId.id).toEqual(testMsg)
    })
})