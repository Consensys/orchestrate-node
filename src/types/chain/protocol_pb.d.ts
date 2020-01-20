// package: chain
// file: types/chain/protocol.proto

import * as jspb from 'google-protobuf'

export class Protocol extends jspb.Message {
  getType(): ProtocolTypeMap[keyof ProtocolTypeMap]
  setType(value: ProtocolTypeMap[keyof ProtocolTypeMap]): void

  getExtraMap(): jspb.Map<string, string>
  clearExtraMap(): void
  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): Protocol.AsObject
  static toObject(includeInstance: boolean, msg: Protocol): Protocol.AsObject
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
  static extensionsBinary: { [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message> }
  static serializeBinaryToWriter(message: Protocol, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): Protocol
  static deserializeBinaryFromReader(message: Protocol, reader: jspb.BinaryReader): Protocol
}

export namespace Protocol {
  export type AsObject = {
    type: ProtocolTypeMap[keyof ProtocolTypeMap]
    extraMap: Array<[string, string]>
  }
}

export interface ProtocolTypeMap {
  ETHEREUM_CONSTANTINOPLE: 0
  QUORUM_CONSTELLATION: 1
  QUORUM_TESSERA: 2
  BESU_ORION: 3
}

export const ProtocolType: ProtocolTypeMap
