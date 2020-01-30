import { utils } from 'ethers'

import { formatMethodArgs } from './solidity-formatters'

describe('solidity-formatters', () => {
  describe('formatMethodArgs', () => {
    it('should verify the validity and return the list of parameters', () => {
      const argsList = formatMethodArgs(`myMethod(uint256,bytes,string,address,bool,string[],uint256[],bool[])`, [
        50,
        utils.arrayify('0x000000ea'),
        'myString',
        '0xc1912fee45d61c87cc5ea59dae31190fffff232d',
        false,
        ['string1', 'string2'],
        ['1', '2'],
        [true, false]
      ])

      expect(argsList).toEqual([
        '0x32',
        '0x000000ea',
        'myString',
        utils.getAddress('0xc1912fee45d61c87cc5ea59dae31190fffff232d'),
        'false',
        JSON.stringify(['string1', 'string2']),
        JSON.stringify(['0x1', '0x2']),
        JSON.stringify(['true', 'false'])
      ])
    })

    it('should fail if signature is wrongly formatted', () => {
      const testSet = ['()', '()test', 'test[)', 'test(addresss)', 'test(())']

      testSet.forEach(test => {
        expect(() => formatMethodArgs(test, ['arg'])).toThrow()
      })
    })

    it('should fail if types are wrong: address', () => {
      expect(() => formatMethodArgs(`myMethod(address)`, ['notAnAddress'])).toThrow()
    })

    it('should fail if types are wrong: uint', () => {
      expect(() => formatMethodArgs(`myMethod(uint)`, ['notAUint'])).toThrow()
    })

    it('should fail if types are wrong: string', () => {
      expect(() => formatMethodArgs(`myMethod(string)`, [666])).toThrow()
    })

    it('should fail if types are wrong: bytes', () => {
      expect(() => formatMethodArgs(`myMethod(bytes)`, ['NotBytes'])).toThrow()
    })

    it('should fail if types are wrong: boolean', () => {
      expect(() => formatMethodArgs(`myMethod(boolean)`, ['NotABoolean'])).toThrow()
    })

    it('should fail if types are wrong: array of string', () => {
      expect(() => formatMethodArgs(`myMethod(string[])`, [[20, 30]])).toThrow()
    })

    it('should fail if types are wrong: array of integers', () => {
      expect(() => formatMethodArgs(`myMethod(uint256[])`, [['hi', 'there']])).toThrow()
    })

    it('should fail if types are wrong: array of booleans', () => {
      expect(() => formatMethodArgs(`myMethod(bool[])`, ['notAnArray'])).toThrow()
    })

    it('should fail if number of types is not equal to number of params', () => {
      expect(() => formatMethodArgs(`myMethod(string,string)`, ['myString'])).toThrow()
    })

    it('should return undefined if methodSignature is undefined', () => {
      expect(formatMethodArgs()).toBeUndefined()
    })

    it('should return undefined if parameters is undefined', () => {
      expect(formatMethodArgs(`myMethod(boolean)`)).toBeUndefined()
    })

    it('should return undefined if parameters is empty', () => {
      expect(formatMethodArgs(`myMethod(boolean)`, [])).toBeUndefined()
    })
  })
})
