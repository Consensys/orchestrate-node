import chain_pb from './chain_pb'
import * as Utils from 'web3-utils';

export const marshallChain = (trace, msg) => {
    let chain = trace.getChain()
    if (chain == null) {
        chain = new chain_pb.Chain()
    }
    switch (typeof msg) {
        case 'string':
            chain.setId(Utils.toHex(msg))
            break;
        case 'object':
            Object.entries(msg).forEach(([key, value]) => {
                switch(key) {
                    case 'id':
                        chain.setId(Utils.toHex(value))
                        break;
                    case 'isEIP155':
                        chain.setIseip155(value)
                        break;
                }
            })
            break;
    }
    trace.setChain(chain)
}
