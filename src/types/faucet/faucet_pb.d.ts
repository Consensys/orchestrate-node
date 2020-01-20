// package: faucet
// file: types/faucet/faucet.proto

import * as jspb from 'google-protobuf'
import * as types_error_error_pb from '../../types/error/error_pb'
import * as types_ethereum_base_pb from '../../types/ethereum/base_pb'
import * as types_chain_chain_pb from '../../types/chain/chain_pb'

export class CreditRequest extends jspb.Message {
  hasChain(): boolean
  clearChain(): void
  getChain(): types_chain_chain_pb.Chain | undefined
  setChain(value?: types_chain_chain_pb.Chain): void

  hasBeneficiary(): boolean
  clearBeneficiary(): void
  getBeneficiary(): types_ethereum_base_pb.Account | undefined
  setBeneficiary(value?: types_ethereum_base_pb.Account): void

  hasCreditor(): boolean
  clearCreditor(): void
  getCreditor(): types_ethereum_base_pb.Account | undefined
  setCreditor(value?: types_ethereum_base_pb.Account): void

  hasAmount(): boolean
  clearAmount(): void
  getAmount(): types_ethereum_base_pb.Quantity | undefined
  setAmount(value?: types_ethereum_base_pb.Quantity): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): CreditRequest.AsObject
  static toObject(includeInstance: boolean, msg: CreditRequest): CreditRequest.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: CreditRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): CreditRequest
  static deserializeBinaryFromReader(message: CreditRequest, reader: jspb.BinaryReader): CreditRequest
}

export namespace CreditRequest {
  export type AsObject = {
    chain?: types_chain_chain_pb.Chain.AsObject
    beneficiary?: types_ethereum_base_pb.Account.AsObject
    creditor?: types_ethereum_base_pb.Account.AsObject
    amount?: types_ethereum_base_pb.Quantity.AsObject
  }
}

export class CreditResponse extends jspb.Message {
  hasCreditor(): boolean
  clearCreditor(): void
  getCreditor(): types_ethereum_base_pb.Account | undefined
  setCreditor(value?: types_ethereum_base_pb.Account): void

  hasAmount(): boolean
  clearAmount(): void
  getAmount(): types_ethereum_base_pb.Quantity | undefined
  setAmount(value?: types_ethereum_base_pb.Quantity): void

  hasError(): boolean
  clearError(): void
  getError(): types_error_error_pb.Error | undefined
  setError(value?: types_error_error_pb.Error): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): CreditResponse.AsObject
  static toObject(includeInstance: boolean, msg: CreditResponse): CreditResponse.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: CreditResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): CreditResponse
  static deserializeBinaryFromReader(message: CreditResponse, reader: jspb.BinaryReader): CreditResponse
}

export namespace CreditResponse {
  export type AsObject = {
    creditor?: types_ethereum_base_pb.Account.AsObject
    amount?: types_ethereum_base_pb.Quantity.AsObject
    error?: types_error_error_pb.Error.AsObject
  }
}
