import { tx } from '../../stubs'
import { ProtocolType } from '../types/ProtocolType'

export function formatContract(name?: string, tag?: string): string | null {
  if (!name) {
    return null
  } else if (!tag) {
    return name
  }
  return `${name}[${tag}]`
}

export function formatProtocol(type?: ProtocolType) {
  let method: tx.Method = tx.Method.ETH_SENDRAWTRANSACTION

  switch (type) {
    case ProtocolType.BesuOrion:
      method = tx.Method.EEA_SENDPRIVATETRANSACTION
      break
    case ProtocolType.QuorumConstellation:
      method = tx.Method.ETH_SENDPRIVATETRANSACTION
      break
    case ProtocolType.QuorumTessera:
      method = tx.Method.ETH_SENDRAWPRIVATETRANSACTION
      break
    default:
      method = tx.Method.ETH_SENDRAWTRANSACTION
      break
  }

  return method
}
