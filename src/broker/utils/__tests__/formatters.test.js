import { unmarshalRawObj, hexToB64, mapToObject } from '../formatters'

describe("# unmarshalRawObj", () => {

    test('unmarshalRawObj will null object', async () => {
        expect(unmarshalRawObj(null, [])).toBeUndefined()
    });

})

describe("# hexToB64", () => {

    test('hexToB64', async () => {
        const b64 = hexToB64('0x123456')
        expect('EjRW').toEqual(b64)
    });

})

describe("# mapToObject", () => {

    test('mapToObject should be idempotent when no changes are expected', async () => {
        const test = {test: ''}
        const obj = mapToObject(test)
        expect(obj).toEqual(obj)

        const test2 = {test: '', metadata: {test: ''}}
        const obj2 = mapToObject(test2)
        expect(obj2).toEqual(obj2)
    });

})