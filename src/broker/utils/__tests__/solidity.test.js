import { parseSignature, isValidSignature } from '../solidity'

describe("# parseSignature", () => {

    test('parseSignature without error', async () => {
        const testSet = [
            ['test(address,bytes32,uint256)', 'test', ['address','bytes32','uint256']],
            ['test(uint256,uint256,uint256)', 'test', ['uint256','uint256','uint256']],
            ['test()', 'test', undefined],
            ['test(address[],bytes32,uint256)', 'test', ['address[]','bytes32','uint256']],
        ]
        testSet.forEach(([input, expectedMethodName, expectedSigArgTypes]) => {

            const { methodName, sigArgTypes } = parseSignature(input)
            expect(expectedMethodName).toEqual(methodName)
            expect(expectedSigArgTypes).toEqual(sigArgTypes)
        })
    });

    test('parseSignature with error', async () => {
        const testSet = [
            '()',
            '()test',
            'test[)',
            'test(addresss)',
            'test(())'
        ]
        testSet.forEach(input => {
            expect(() => parseSignature(input)).toThrow()
        })
    });

})

describe("# isValidSignature", () => {

    test('isValidSignature', async () => {
        const testSet = [
            ['test(address,bytes32,uint256)', true],
            ['testaddress(bytes32,uint256)', true],
            ['uint999(address,bytes32[])', true],
            ['false(adress,bytes16[],)', false],
        ]
        testSet.forEach(([input, expectedBool]) => {

            const bool = isValidSignature(input)
            expect(expectedBool).toEqual(bool)
        })
    });

})