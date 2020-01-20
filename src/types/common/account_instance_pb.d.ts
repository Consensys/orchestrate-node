// package: common
// file: types/common/account_instance.proto

import * as jspb from 'google-protobuf'
import * as types_ethereum_base_pb from '../../types/ethereum/base_pb'
import * as types_chain_chain_pb from '../../types/chain/chain_pb'

export class AccountInstance extends jspb.Message {
  hasChain(): boolean
  clearChain(): void
  getChain(): types_chain_chain_pb.Chain | undefined
  setChain(value?: types_chain_chain_pb.Chain): void

  hasAccount(): boolean
  clearAccount(): void
  getAccount(): types_ethereum_base_pb.Account | undefined
  setAccount(value?: types_ethereum_base_pb.Account): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): AccountInstance.AsObject
  static toObject(includeInstance: boolean, msg: AccountInstance): AccountInstance.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: AccountInstance, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): AccountInstance
  static deserializeBinaryFromReader(message: AccountInstance, reader: jspb.BinaryReader): AccountInstance
}

export namespace AccountInstance {
  export type AsObject = {
    chain?: types_chain_chain_pb.Chain.AsObject
    account?: types_ethereum_base_pb.Account.AsObject
  }
}
