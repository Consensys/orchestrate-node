export const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`

export const mapToObject = objTrace => {
    if (objTrace['receipt']) {
        const logs = objTrace.receipt.logsList
        const newLogs = logs.map(log => ({...log, decodedDataMap: arrayToObject(log.decodedDataMap)}))
        objTrace.receipt['logsList'] = newLogs
    }
    if (objTrace['metadata']) {
        if (objTrace['metadata'].extraMap) {
            objTrace.metadata['extraMap'] =  arrayToObject(objTrace['metadata'].extraMap)
        }
    }
    return objTrace
}

const arrayToObject = array => array.reduce(
  (obj, [ key, value ]) => ({ ...obj, [key]: value }),
  {}
)
