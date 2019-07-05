const nameRegex = '[a-zA-Z_][a-zA-Z0-9_]*'
const subTypeRegex = '\\[[0-9]*\\]'

const dynamicTypes = ["bytes", "string"]
const staticTypesAliases = ["uint", "int", "byte"]
const staticTypes = ["address", "bool"]

let signatureRegexp

(() =>
{
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
    signatureRegexp = new RegExp(pattern)
})()

export const parseSignature = sig => {
    const res = signatureRegexp.exec(sig)
    if (!res) {
        throw new Error(`parseSignature: invalid signature format, expecting fctName(address,uint256) received: ${sig}`)
    }
    if (res.length != 3) {
        throw new Error(`parseSignature: invalid signature format, expecting fctName(address,uint256) received: ${sig}, ${res}`)
    }
    let sigArgTypes
    if (res[2]) {
        sigArgTypes = res[2].split(',')
    }
    return {methodName: res[1], sigArgTypes}
}

export const isValidSignature = sig => {
    return signatureRegexp.test(sig)
}
