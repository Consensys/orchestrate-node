import { envelope } from '../../stubs'

export function unmarshalEnvelope(data: Buffer) {
  const { decode, verify } = envelope.Envelope

  const envelopeMessage = decode(data)
  verify(envelopeMessage)

  return envelopeMessage
}
