import { utils } from 'ethers'
import { isBigNumber, numberToHex } from 'web3-utils'

const signatureRegex = (() => {
  const nameRegex = '[a-zA-Z_][a-zA-Z0-9_]*'
  const subTypeRegex = '\\[[0-9]*\\]'
  const dynamicTypes = ['bytes', 'string']
  const staticTypesAliases = ['uint', 'int', 'byte']
  const staticTypes = ['address', 'bool']

  for (let i = 8; i < 257; i += 8) {
    staticTypes.push(`uint${i}`)
    staticTypes.push(`int${i}`)
  }
  for (let i = 1; i < 33; i++) {
    staticTypes.push(`bytes${i}`)
  }
  const types = staticTypes.concat(dynamicTypes, staticTypesAliases)
  const typeRegex = types.join('|')
  const pattern = `^(${nameRegex})\\(((?:${typeRegex})(?:${subTypeRegex})*(?:,(?:${typeRegex})(?:${subTypeRegex})*)*)?\\)$`

  return new RegExp(pattern)
})()

export function formatMethodArgs(methodSignature?: string, parameters?: any[]) {
  if (!methodSignature || !parameters || parameters.length === 0) {
    return
  }

  const types = parseSignatureTypes(methodSignature)

  const abiCoder = new utils.AbiCoder()
  const encodedParams = abiCoder.encode(types, parameters)
  const decodedParams = abiCoder.decode(types, encodedParams)

  return decodedParams.map((param: any) => {
    if (isBigNumber(param)) {
      return numberToHex(param)
    }

    if (Array.isArray(param)) {
      const paramArray = param.map(value => {
        if (isBigNumber(value)) {
          return numberToHex(value)
        }

        return value
      })

      return JSON.stringify(paramArray)
    }

    return param.toString()
  })
}

function parseSignatureTypes(sig: string) {
  const res = signatureRegex.exec(sig)
  if (!res || res.length !== 3) {
    throw new Error(`Invalid signature format, expecting fctName(type0,type1) received: ${sig}, ${res}`)
  }

  return res[2].split(',')
}
