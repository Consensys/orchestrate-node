export const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

export const mapToObject = envelope => {
    if (envelope['receipt']) {
        const logs = envelope.receipt.logsList
        const newLogs = logs.map(log => ({...log, decodedDataMap: arrayToObject(log.decodedDataMap)}))
        envelope.receipt['logsList'] = newLogs
    }
    if (envelope['protocol']) {
        if(envelope['protocol']['extraMap']) {
            envelope['protocol']['extraMap'] = arrayToObject(envelope['protocol']['extraMap'])
        }
    }
    if (!envelope['metadata']) {
        return envelope
    }
    if (envelope['metadata']['extraMap']) {
        envelope.metadata['extraMap'] =  arrayToObject(envelope['metadata'].extraMap)
    }
    return envelope
}

export const arrayToObject = array => array.reduce(
  (obj, [ key, value ]) => ({ ...obj, [key]: value }),
  {}
)

export const unmarshalRawObj = (obj, elmt) => {
    if(!obj) {
        return
    }
    for (let i of elmt) {
        if (typeof obj[i] === 'object') {
            obj[i] = rawToHex(obj[i])
        }
    }
}

export const rawToHex = rawObj => {
    return rawObj ? b64ToHex(rawObj.raw) : ''
}

export const b64ToHex = b64 => {
    const buf = Buffer.from(b64, 'base64')
    return '0x' + buf.toString('hex')
}

export const hexToB64 = hex => {
    const buf = Buffer.from(hex.substr(2), 'hex')
    return buf.toString('base64')
}