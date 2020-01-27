import * as $protobuf from "protobufjs";
/** Namespace abi. */
export namespace abi {

    /** Properties of a ContractId. */
    interface IContractId {

        /** ContractId registry */
        registry?: (string|null);

        /** ContractId name */
        name?: (string|null);

        /** ContractId tag */
        tag?: (string|null);
    }

    /** Represents a ContractId. */
    class ContractId implements IContractId {

        /**
         * Constructs a new ContractId.
         * @param [properties] Properties to set
         */
        constructor(properties?: abi.IContractId);

        /** ContractId registry. */
        public registry: string;

        /** ContractId name. */
        public name: string;

        /** ContractId tag. */
        public tag: string;

        /**
         * Creates a new ContractId instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContractId instance
         */
        public static create(properties?: abi.IContractId): abi.ContractId;

        /**
         * Encodes the specified ContractId message. Does not implicitly {@link abi.ContractId.verify|verify} messages.
         * @param message ContractId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: abi.IContractId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContractId message, length delimited. Does not implicitly {@link abi.ContractId.verify|verify} messages.
         * @param message ContractId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: abi.IContractId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContractId message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContractId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): abi.ContractId;

        /**
         * Decodes a ContractId message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContractId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): abi.ContractId;

        /**
         * Verifies a ContractId message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContractId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContractId
         */
        public static fromObject(object: { [k: string]: any }): abi.ContractId;

        /**
         * Creates a plain object from a ContractId message. Also converts values to other types if specified.
         * @param message ContractId
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: abi.ContractId, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContractId to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Contract. */
    interface IContract {

        /** Contract id */
        id?: (abi.IContractId|null);

        /** Contract abi */
        abi?: (Uint8Array|null);

        /** Contract bytecode */
        bytecode?: (Uint8Array|null);

        /** Contract methods */
        methods?: (abi.IMethod[]|null);

        /** Contract events */
        events?: (abi.IEvent[]|null);

        /** Contract deployedBytecode */
        deployedBytecode?: (Uint8Array|null);
    }

    /** Represents a Contract. */
    class Contract implements IContract {

        /**
         * Constructs a new Contract.
         * @param [properties] Properties to set
         */
        constructor(properties?: abi.IContract);

        /** Contract id. */
        public id?: (abi.IContractId|null);

        /** Contract abi. */
        public abi: Uint8Array;

        /** Contract bytecode. */
        public bytecode: Uint8Array;

        /** Contract methods. */
        public methods: abi.IMethod[];

        /** Contract events. */
        public events: abi.IEvent[];

        /** Contract deployedBytecode. */
        public deployedBytecode: Uint8Array;

        /**
         * Creates a new Contract instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Contract instance
         */
        public static create(properties?: abi.IContract): abi.Contract;

        /**
         * Encodes the specified Contract message. Does not implicitly {@link abi.Contract.verify|verify} messages.
         * @param message Contract message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: abi.IContract, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Contract message, length delimited. Does not implicitly {@link abi.Contract.verify|verify} messages.
         * @param message Contract message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: abi.IContract, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Contract message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Contract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): abi.Contract;

        /**
         * Decodes a Contract message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Contract
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): abi.Contract;

        /**
         * Verifies a Contract message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Contract message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Contract
         */
        public static fromObject(object: { [k: string]: any }): abi.Contract;

        /**
         * Creates a plain object from a Contract message. Also converts values to other types if specified.
         * @param message Contract
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: abi.Contract, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Contract to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Method. */
    interface IMethod {

        /** Method signature */
        signature?: (string|null);

        /** Method abi */
        abi?: (Uint8Array|null);
    }

    /** Represents a Method. */
    class Method implements IMethod {

        /**
         * Constructs a new Method.
         * @param [properties] Properties to set
         */
        constructor(properties?: abi.IMethod);

        /** Method signature. */
        public signature: string;

        /** Method abi. */
        public abi: Uint8Array;

        /**
         * Creates a new Method instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Method instance
         */
        public static create(properties?: abi.IMethod): abi.Method;

        /**
         * Encodes the specified Method message. Does not implicitly {@link abi.Method.verify|verify} messages.
         * @param message Method message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: abi.IMethod, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Method message, length delimited. Does not implicitly {@link abi.Method.verify|verify} messages.
         * @param message Method message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: abi.IMethod, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Method message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Method
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): abi.Method;

        /**
         * Decodes a Method message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Method
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): abi.Method;

        /**
         * Verifies a Method message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Method message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Method
         */
        public static fromObject(object: { [k: string]: any }): abi.Method;

        /**
         * Creates a plain object from a Method message. Also converts values to other types if specified.
         * @param message Method
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: abi.Method, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Method to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Event. */
    interface IEvent {

        /** Event signature */
        signature?: (string|null);

        /** Event abi */
        abi?: (Uint8Array|null);
    }

    /** Represents an Event. */
    class Event implements IEvent {

        /**
         * Constructs a new Event.
         * @param [properties] Properties to set
         */
        constructor(properties?: abi.IEvent);

        /** Event signature. */
        public signature: string;

        /** Event abi. */
        public abi: Uint8Array;

        /**
         * Creates a new Event instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Event instance
         */
        public static create(properties?: abi.IEvent): abi.Event;

        /**
         * Encodes the specified Event message. Does not implicitly {@link abi.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: abi.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Event message, length delimited. Does not implicitly {@link abi.Event.verify|verify} messages.
         * @param message Event message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: abi.IEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Event message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): abi.Event;

        /**
         * Decodes an Event message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Event
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): abi.Event;

        /**
         * Verifies an Event message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Event message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Event
         */
        public static fromObject(object: { [k: string]: any }): abi.Event;

        /**
         * Creates a plain object from an Event message. Also converts values to other types if specified.
         * @param message Event
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: abi.Event, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Event to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace args. */
export namespace args {

    /** Properties of a Call. */
    interface ICall {

        /** Call contract */
        contract?: (abi.IContract|null);

        /** Call method */
        method?: (abi.IMethod|null);

        /** Call args */
        args?: (string[]|null);
    }

    /** Represents a Call. */
    class Call implements ICall {

        /**
         * Constructs a new Call.
         * @param [properties] Properties to set
         */
        constructor(properties?: args.ICall);

        /** Call contract. */
        public contract?: (abi.IContract|null);

        /** Call method. */
        public method?: (abi.IMethod|null);

        /** Call args. */
        public args: string[];

        /**
         * Creates a new Call instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Call instance
         */
        public static create(properties?: args.ICall): args.Call;

        /**
         * Encodes the specified Call message. Does not implicitly {@link args.Call.verify|verify} messages.
         * @param message Call message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: args.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Call message, length delimited. Does not implicitly {@link args.Call.verify|verify} messages.
         * @param message Call message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: args.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Call message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Call
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): args.Call;

        /**
         * Decodes a Call message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Call
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): args.Call;

        /**
         * Verifies a Call message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Call message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Call
         */
        public static fromObject(object: { [k: string]: any }): args.Call;

        /**
         * Creates a plain object from a Call message. Also converts values to other types if specified.
         * @param message Call
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: args.Call, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Call to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Private. */
    interface IPrivate {

        /** Private privateFrom */
        privateFrom?: (string|null);

        /** Private privateFor */
        privateFor?: (string[]|null);

        /** Private privateTxType */
        privateTxType?: (string|null);
    }

    /** Represents a Private. */
    class Private implements IPrivate {

        /**
         * Constructs a new Private.
         * @param [properties] Properties to set
         */
        constructor(properties?: args.IPrivate);

        /** Private privateFrom. */
        public privateFrom: string;

        /** Private privateFor. */
        public privateFor: string[];

        /** Private privateTxType. */
        public privateTxType: string;

        /**
         * Creates a new Private instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Private instance
         */
        public static create(properties?: args.IPrivate): args.Private;

        /**
         * Encodes the specified Private message. Does not implicitly {@link args.Private.verify|verify} messages.
         * @param message Private message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: args.IPrivate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Private message, length delimited. Does not implicitly {@link args.Private.verify|verify} messages.
         * @param message Private message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: args.IPrivate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Private message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Private
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): args.Private;

        /**
         * Decodes a Private message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Private
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): args.Private;

        /**
         * Verifies a Private message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Private message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Private
         */
        public static fromObject(object: { [k: string]: any }): args.Private;

        /**
         * Creates a plain object from a Private message. Also converts values to other types if specified.
         * @param message Private
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: args.Private, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Private to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace chain. */
export namespace chain {

    /** Properties of a Chain. */
    interface IChain {

        /** Chain id */
        id?: (Uint8Array|null);

        /** Chain nodeId */
        nodeId?: (string|null);

        /** Chain nodeName */
        nodeName?: (string|null);
    }

    /** Represents a Chain. */
    class Chain implements IChain {

        /**
         * Constructs a new Chain.
         * @param [properties] Properties to set
         */
        constructor(properties?: chain.IChain);

        /** Chain id. */
        public id: Uint8Array;

        /** Chain nodeId. */
        public nodeId: string;

        /** Chain nodeName. */
        public nodeName: string;

        /**
         * Creates a new Chain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chain instance
         */
        public static create(properties?: chain.IChain): chain.Chain;

        /**
         * Encodes the specified Chain message. Does not implicitly {@link chain.Chain.verify|verify} messages.
         * @param message Chain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chain.IChain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Chain message, length delimited. Does not implicitly {@link chain.Chain.verify|verify} messages.
         * @param message Chain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chain.IChain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chain message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chain.Chain;

        /**
         * Decodes a Chain message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Chain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chain.Chain;

        /**
         * Verifies a Chain message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Chain message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Chain
         */
        public static fromObject(object: { [k: string]: any }): chain.Chain;

        /**
         * Creates a plain object from a Chain message. Also converts values to other types if specified.
         * @param message Chain
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chain.Chain, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Chain to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Protocol. */
    interface IProtocol {

        /** Protocol type */
        type?: (chain.ProtocolType|null);

        /** Protocol extra */
        extra?: ({ [k: string]: string }|null);
    }

    /** Represents a Protocol. */
    class Protocol implements IProtocol {

        /**
         * Constructs a new Protocol.
         * @param [properties] Properties to set
         */
        constructor(properties?: chain.IProtocol);

        /** Protocol type. */
        public type: chain.ProtocolType;

        /** Protocol extra. */
        public extra: { [k: string]: string };

        /**
         * Creates a new Protocol instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Protocol instance
         */
        public static create(properties?: chain.IProtocol): chain.Protocol;

        /**
         * Encodes the specified Protocol message. Does not implicitly {@link chain.Protocol.verify|verify} messages.
         * @param message Protocol message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chain.IProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Protocol message, length delimited. Does not implicitly {@link chain.Protocol.verify|verify} messages.
         * @param message Protocol message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chain.IProtocol, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Protocol message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Protocol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chain.Protocol;

        /**
         * Decodes a Protocol message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Protocol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chain.Protocol;

        /**
         * Verifies a Protocol message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Protocol message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Protocol
         */
        public static fromObject(object: { [k: string]: any }): chain.Protocol;

        /**
         * Creates a plain object from a Protocol message. Also converts values to other types if specified.
         * @param message Protocol
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chain.Protocol, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Protocol to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ProtocolType enum. */
    enum ProtocolType {
        ETHEREUM_CONSTANTINOPLE = 0,
        QUORUM_CONSTELLATION = 1,
        QUORUM_TESSERA = 2,
        BESU_ORION = 3
    }
}

/** Namespace common. */
export namespace common {

    /** Properties of an AccountInstance. */
    interface IAccountInstance {

        /** AccountInstance chain */
        chain?: (chain.IChain|null);

        /** AccountInstance account */
        account?: (ethereum.IAccount|null);
    }

    /** Represents an AccountInstance. */
    class AccountInstance implements IAccountInstance {

        /**
         * Constructs a new AccountInstance.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IAccountInstance);

        /** AccountInstance chain. */
        public chain?: (chain.IChain|null);

        /** AccountInstance account. */
        public account?: (ethereum.IAccount|null);

        /**
         * Creates a new AccountInstance instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountInstance instance
         */
        public static create(properties?: common.IAccountInstance): common.AccountInstance;

        /**
         * Encodes the specified AccountInstance message. Does not implicitly {@link common.AccountInstance.verify|verify} messages.
         * @param message AccountInstance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IAccountInstance, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountInstance message, length delimited. Does not implicitly {@link common.AccountInstance.verify|verify} messages.
         * @param message AccountInstance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IAccountInstance, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountInstance message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountInstance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.AccountInstance;

        /**
         * Decodes an AccountInstance message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountInstance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.AccountInstance;

        /**
         * Verifies an AccountInstance message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountInstance message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountInstance
         */
        public static fromObject(object: { [k: string]: any }): common.AccountInstance;

        /**
         * Creates a plain object from an AccountInstance message. Also converts values to other types if specified.
         * @param message AccountInstance
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.AccountInstance, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountInstance to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace contractregistry. */
export namespace contractregistry {

    /** Represents a ContractRegistry */
    class ContractRegistry extends $protobuf.rpc.Service {

        /**
         * Constructs a new ContractRegistry service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new ContractRegistry service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ContractRegistry;

        /**
         * Calls RegisterContract.
         * @param request RegisterContractRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and RegisterContractResponse
         */
        public registerContract(request: contractregistry.IRegisterContractRequest, callback: contractregistry.ContractRegistry.RegisterContractCallback): void;

        /**
         * Calls RegisterContract.
         * @param request RegisterContractRequest message or plain object
         * @returns Promise
         */
        public registerContract(request: contractregistry.IRegisterContractRequest): Promise<contractregistry.RegisterContractResponse>;

        /**
         * Calls DeregisterContract.
         * @param request DeregisterContractRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DeregisterContractResponse
         */
        public deregisterContract(request: contractregistry.IDeregisterContractRequest, callback: contractregistry.ContractRegistry.DeregisterContractCallback): void;

        /**
         * Calls DeregisterContract.
         * @param request DeregisterContractRequest message or plain object
         * @returns Promise
         */
        public deregisterContract(request: contractregistry.IDeregisterContractRequest): Promise<contractregistry.DeregisterContractResponse>;

        /**
         * Calls DeleteArtifact.
         * @param request DeleteArtifactRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteArtifactResponse
         */
        public deleteArtifact(request: contractregistry.IDeleteArtifactRequest, callback: contractregistry.ContractRegistry.DeleteArtifactCallback): void;

        /**
         * Calls DeleteArtifact.
         * @param request DeleteArtifactRequest message or plain object
         * @returns Promise
         */
        public deleteArtifact(request: contractregistry.IDeleteArtifactRequest): Promise<contractregistry.DeleteArtifactResponse>;

        /**
         * Calls GetContract.
         * @param request GetContractRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetContractResponse
         */
        public getContract(request: contractregistry.IGetContractRequest, callback: contractregistry.ContractRegistry.GetContractCallback): void;

        /**
         * Calls GetContract.
         * @param request GetContractRequest message or plain object
         * @returns Promise
         */
        public getContract(request: contractregistry.IGetContractRequest): Promise<contractregistry.GetContractResponse>;

        /**
         * Calls GetContractABI.
         * @param request GetContractRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetContractABIResponse
         */
        public getContractABI(request: contractregistry.IGetContractRequest, callback: contractregistry.ContractRegistry.GetContractABICallback): void;

        /**
         * Calls GetContractABI.
         * @param request GetContractRequest message or plain object
         * @returns Promise
         */
        public getContractABI(request: contractregistry.IGetContractRequest): Promise<contractregistry.GetContractABIResponse>;

        /**
         * Calls GetContractBytecode.
         * @param request GetContractRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetContractBytecodeResponse
         */
        public getContractBytecode(request: contractregistry.IGetContractRequest, callback: contractregistry.ContractRegistry.GetContractBytecodeCallback): void;

        /**
         * Calls GetContractBytecode.
         * @param request GetContractRequest message or plain object
         * @returns Promise
         */
        public getContractBytecode(request: contractregistry.IGetContractRequest): Promise<contractregistry.GetContractBytecodeResponse>;

        /**
         * Calls GetContractDeployedBytecode.
         * @param request GetContractRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetContractDeployedBytecodeResponse
         */
        public getContractDeployedBytecode(request: contractregistry.IGetContractRequest, callback: contractregistry.ContractRegistry.GetContractDeployedBytecodeCallback): void;

        /**
         * Calls GetContractDeployedBytecode.
         * @param request GetContractRequest message or plain object
         * @returns Promise
         */
        public getContractDeployedBytecode(request: contractregistry.IGetContractRequest): Promise<contractregistry.GetContractDeployedBytecodeResponse>;

        /**
         * Calls GetCatalog.
         * @param request GetCatalogRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetCatalogResponse
         */
        public getCatalog(request: contractregistry.IGetCatalogRequest, callback: contractregistry.ContractRegistry.GetCatalogCallback): void;

        /**
         * Calls GetCatalog.
         * @param request GetCatalogRequest message or plain object
         * @returns Promise
         */
        public getCatalog(request: contractregistry.IGetCatalogRequest): Promise<contractregistry.GetCatalogResponse>;

        /**
         * Calls GetTags.
         * @param request GetTagsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetTagsResponse
         */
        public getTags(request: contractregistry.IGetTagsRequest, callback: contractregistry.ContractRegistry.GetTagsCallback): void;

        /**
         * Calls GetTags.
         * @param request GetTagsRequest message or plain object
         * @returns Promise
         */
        public getTags(request: contractregistry.IGetTagsRequest): Promise<contractregistry.GetTagsResponse>;

        /**
         * Calls GetMethodsBySelector.
         * @param request GetMethodsBySelectorRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetMethodsBySelectorResponse
         */
        public getMethodsBySelector(request: contractregistry.IGetMethodsBySelectorRequest, callback: contractregistry.ContractRegistry.GetMethodsBySelectorCallback): void;

        /**
         * Calls GetMethodsBySelector.
         * @param request GetMethodsBySelectorRequest message or plain object
         * @returns Promise
         */
        public getMethodsBySelector(request: contractregistry.IGetMethodsBySelectorRequest): Promise<contractregistry.GetMethodsBySelectorResponse>;

        /**
         * Calls GetEventsBySigHash.
         * @param request GetEventsBySigHashRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetEventsBySigHashResponse
         */
        public getEventsBySigHash(request: contractregistry.IGetEventsBySigHashRequest, callback: contractregistry.ContractRegistry.GetEventsBySigHashCallback): void;

        /**
         * Calls GetEventsBySigHash.
         * @param request GetEventsBySigHashRequest message or plain object
         * @returns Promise
         */
        public getEventsBySigHash(request: contractregistry.IGetEventsBySigHashRequest): Promise<contractregistry.GetEventsBySigHashResponse>;

        /**
         * Calls SetAccountCodeHash.
         * @param request SetAccountCodeHashRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SetAccountCodeHashResponse
         */
        public setAccountCodeHash(request: contractregistry.ISetAccountCodeHashRequest, callback: contractregistry.ContractRegistry.SetAccountCodeHashCallback): void;

        /**
         * Calls SetAccountCodeHash.
         * @param request SetAccountCodeHashRequest message or plain object
         * @returns Promise
         */
        public setAccountCodeHash(request: contractregistry.ISetAccountCodeHashRequest): Promise<contractregistry.SetAccountCodeHashResponse>;
    }

    namespace ContractRegistry {

        /**
         * Callback as used by {@link contractregistry.ContractRegistry#registerContract}.
         * @param error Error, if any
         * @param [response] RegisterContractResponse
         */
        type RegisterContractCallback = (error: (Error|null), response?: contractregistry.RegisterContractResponse) => void;

        /**
         * Callback as used by {@link contractregistry.ContractRegistry#deregisterContract}.
         * @param error Error, if any
         * @param [response] DeregisterContractResponse
         */
        type DeregisterContractCallback = (error: (Error|null), response?: contractregistry.DeregisterContractResponse) => void;

        /**
         * Callback as used by {@link contractregistry.ContractRegistry#deleteArtifact}.
         * @param error Error, if any
         * @param [response] DeleteArtifactResponse
         */
        type DeleteArtifactCallback = (error: (Error|null), response?: contractregistry.DeleteArtifactResponse) => void;

        /**
         * Callback as used by {@link contractregistry.ContractRegistry#getContract}.
         * @param error Error, if any
         * @param [response] GetContractResponse
         */
        type GetContractCallback = (error: (Error|null), response?: contractregistry.GetContractResponse) => void;

        /**
         * Callback as used by {@link contractregistry.ContractRegistry#getContractABI}.
         * @param error Error, if any
         * @param [response] GetContractABIResponse
         */
        type GetContractABICallback = (error: (Error|null), response?: contractregistry.GetContractABIResponse) => void;

        /**
         * Callback as used by {@link contractregistry.ContractRegistry#getContractBytecode}.
         * @param error Error, if any
         * @param [response] GetContractBytecodeResponse
         */
        type GetContractBytecodeCallback = (error: (Error|null), response?: contractregistry.GetContractBytecodeResponse) => void;

        /**
         * Callback as used by {@link contractregistry.ContractRegistry#getContractDeployedBytecode}.
         * @param error Error, if any
         * @param [response] GetContractDeployedBytecodeResponse
         */
        type GetContractDeployedBytecodeCallback = (error: (Error|null), response?: contractregistry.GetContractDeployedBytecodeResponse) => void;

        /**
         * Callback as used by {@link contractregistry.ContractRegistry#getCatalog}.
         * @param error Error, if any
         * @param [response] GetCatalogResponse
         */
        type GetCatalogCallback = (error: (Error|null), response?: contractregistry.GetCatalogResponse) => void;

        /**
         * Callback as used by {@link contractregistry.ContractRegistry#getTags}.
         * @param error Error, if any
         * @param [response] GetTagsResponse
         */
        type GetTagsCallback = (error: (Error|null), response?: contractregistry.GetTagsResponse) => void;

        /**
         * Callback as used by {@link contractregistry.ContractRegistry#getMethodsBySelector}.
         * @param error Error, if any
         * @param [response] GetMethodsBySelectorResponse
         */
        type GetMethodsBySelectorCallback = (error: (Error|null), response?: contractregistry.GetMethodsBySelectorResponse) => void;

        /**
         * Callback as used by {@link contractregistry.ContractRegistry#getEventsBySigHash}.
         * @param error Error, if any
         * @param [response] GetEventsBySigHashResponse
         */
        type GetEventsBySigHashCallback = (error: (Error|null), response?: contractregistry.GetEventsBySigHashResponse) => void;

        /**
         * Callback as used by {@link contractregistry.ContractRegistry#setAccountCodeHash}.
         * @param error Error, if any
         * @param [response] SetAccountCodeHashResponse
         */
        type SetAccountCodeHashCallback = (error: (Error|null), response?: contractregistry.SetAccountCodeHashResponse) => void;
    }

    /** Properties of a RegisterContractRequest. */
    interface IRegisterContractRequest {

        /** RegisterContractRequest contract */
        contract?: (abi.IContract|null);
    }

    /** Represents a RegisterContractRequest. */
    class RegisterContractRequest implements IRegisterContractRequest {

        /**
         * Constructs a new RegisterContractRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IRegisterContractRequest);

        /** RegisterContractRequest contract. */
        public contract?: (abi.IContract|null);

        /**
         * Creates a new RegisterContractRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterContractRequest instance
         */
        public static create(properties?: contractregistry.IRegisterContractRequest): contractregistry.RegisterContractRequest;

        /**
         * Encodes the specified RegisterContractRequest message. Does not implicitly {@link contractregistry.RegisterContractRequest.verify|verify} messages.
         * @param message RegisterContractRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IRegisterContractRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterContractRequest message, length delimited. Does not implicitly {@link contractregistry.RegisterContractRequest.verify|verify} messages.
         * @param message RegisterContractRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IRegisterContractRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterContractRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterContractRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.RegisterContractRequest;

        /**
         * Decodes a RegisterContractRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterContractRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.RegisterContractRequest;

        /**
         * Verifies a RegisterContractRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterContractRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterContractRequest
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.RegisterContractRequest;

        /**
         * Creates a plain object from a RegisterContractRequest message. Also converts values to other types if specified.
         * @param message RegisterContractRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.RegisterContractRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterContractRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegisterContractResponse. */
    interface IRegisterContractResponse {
    }

    /** Represents a RegisterContractResponse. */
    class RegisterContractResponse implements IRegisterContractResponse {

        /**
         * Constructs a new RegisterContractResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IRegisterContractResponse);

        /**
         * Creates a new RegisterContractResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterContractResponse instance
         */
        public static create(properties?: contractregistry.IRegisterContractResponse): contractregistry.RegisterContractResponse;

        /**
         * Encodes the specified RegisterContractResponse message. Does not implicitly {@link contractregistry.RegisterContractResponse.verify|verify} messages.
         * @param message RegisterContractResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IRegisterContractResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterContractResponse message, length delimited. Does not implicitly {@link contractregistry.RegisterContractResponse.verify|verify} messages.
         * @param message RegisterContractResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IRegisterContractResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterContractResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterContractResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.RegisterContractResponse;

        /**
         * Decodes a RegisterContractResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterContractResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.RegisterContractResponse;

        /**
         * Verifies a RegisterContractResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterContractResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterContractResponse
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.RegisterContractResponse;

        /**
         * Creates a plain object from a RegisterContractResponse message. Also converts values to other types if specified.
         * @param message RegisterContractResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.RegisterContractResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterContractResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeregisterContractRequest. */
    interface IDeregisterContractRequest {

        /** DeregisterContractRequest contractId */
        contractId?: (abi.IContractId|null);
    }

    /** Represents a DeregisterContractRequest. */
    class DeregisterContractRequest implements IDeregisterContractRequest {

        /**
         * Constructs a new DeregisterContractRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IDeregisterContractRequest);

        /** DeregisterContractRequest contractId. */
        public contractId?: (abi.IContractId|null);

        /**
         * Creates a new DeregisterContractRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeregisterContractRequest instance
         */
        public static create(properties?: contractregistry.IDeregisterContractRequest): contractregistry.DeregisterContractRequest;

        /**
         * Encodes the specified DeregisterContractRequest message. Does not implicitly {@link contractregistry.DeregisterContractRequest.verify|verify} messages.
         * @param message DeregisterContractRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IDeregisterContractRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeregisterContractRequest message, length delimited. Does not implicitly {@link contractregistry.DeregisterContractRequest.verify|verify} messages.
         * @param message DeregisterContractRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IDeregisterContractRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeregisterContractRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeregisterContractRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.DeregisterContractRequest;

        /**
         * Decodes a DeregisterContractRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeregisterContractRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.DeregisterContractRequest;

        /**
         * Verifies a DeregisterContractRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeregisterContractRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeregisterContractRequest
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.DeregisterContractRequest;

        /**
         * Creates a plain object from a DeregisterContractRequest message. Also converts values to other types if specified.
         * @param message DeregisterContractRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.DeregisterContractRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeregisterContractRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeregisterContractResponse. */
    interface IDeregisterContractResponse {
    }

    /** Represents a DeregisterContractResponse. */
    class DeregisterContractResponse implements IDeregisterContractResponse {

        /**
         * Constructs a new DeregisterContractResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IDeregisterContractResponse);

        /**
         * Creates a new DeregisterContractResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeregisterContractResponse instance
         */
        public static create(properties?: contractregistry.IDeregisterContractResponse): contractregistry.DeregisterContractResponse;

        /**
         * Encodes the specified DeregisterContractResponse message. Does not implicitly {@link contractregistry.DeregisterContractResponse.verify|verify} messages.
         * @param message DeregisterContractResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IDeregisterContractResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeregisterContractResponse message, length delimited. Does not implicitly {@link contractregistry.DeregisterContractResponse.verify|verify} messages.
         * @param message DeregisterContractResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IDeregisterContractResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeregisterContractResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeregisterContractResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.DeregisterContractResponse;

        /**
         * Decodes a DeregisterContractResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeregisterContractResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.DeregisterContractResponse;

        /**
         * Verifies a DeregisterContractResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeregisterContractResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeregisterContractResponse
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.DeregisterContractResponse;

        /**
         * Creates a plain object from a DeregisterContractResponse message. Also converts values to other types if specified.
         * @param message DeregisterContractResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.DeregisterContractResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeregisterContractResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteArtifactRequest. */
    interface IDeleteArtifactRequest {

        /** DeleteArtifactRequest bytecodeHash */
        bytecodeHash?: (Uint8Array|null);
    }

    /** Represents a DeleteArtifactRequest. */
    class DeleteArtifactRequest implements IDeleteArtifactRequest {

        /**
         * Constructs a new DeleteArtifactRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IDeleteArtifactRequest);

        /** DeleteArtifactRequest bytecodeHash. */
        public bytecodeHash: Uint8Array;

        /**
         * Creates a new DeleteArtifactRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteArtifactRequest instance
         */
        public static create(properties?: contractregistry.IDeleteArtifactRequest): contractregistry.DeleteArtifactRequest;

        /**
         * Encodes the specified DeleteArtifactRequest message. Does not implicitly {@link contractregistry.DeleteArtifactRequest.verify|verify} messages.
         * @param message DeleteArtifactRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IDeleteArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteArtifactRequest message, length delimited. Does not implicitly {@link contractregistry.DeleteArtifactRequest.verify|verify} messages.
         * @param message DeleteArtifactRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IDeleteArtifactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteArtifactRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteArtifactRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.DeleteArtifactRequest;

        /**
         * Decodes a DeleteArtifactRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteArtifactRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.DeleteArtifactRequest;

        /**
         * Verifies a DeleteArtifactRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteArtifactRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteArtifactRequest
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.DeleteArtifactRequest;

        /**
         * Creates a plain object from a DeleteArtifactRequest message. Also converts values to other types if specified.
         * @param message DeleteArtifactRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.DeleteArtifactRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteArtifactRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteArtifactResponse. */
    interface IDeleteArtifactResponse {
    }

    /** Represents a DeleteArtifactResponse. */
    class DeleteArtifactResponse implements IDeleteArtifactResponse {

        /**
         * Constructs a new DeleteArtifactResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IDeleteArtifactResponse);

        /**
         * Creates a new DeleteArtifactResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteArtifactResponse instance
         */
        public static create(properties?: contractregistry.IDeleteArtifactResponse): contractregistry.DeleteArtifactResponse;

        /**
         * Encodes the specified DeleteArtifactResponse message. Does not implicitly {@link contractregistry.DeleteArtifactResponse.verify|verify} messages.
         * @param message DeleteArtifactResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IDeleteArtifactResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteArtifactResponse message, length delimited. Does not implicitly {@link contractregistry.DeleteArtifactResponse.verify|verify} messages.
         * @param message DeleteArtifactResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IDeleteArtifactResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteArtifactResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteArtifactResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.DeleteArtifactResponse;

        /**
         * Decodes a DeleteArtifactResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteArtifactResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.DeleteArtifactResponse;

        /**
         * Verifies a DeleteArtifactResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteArtifactResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteArtifactResponse
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.DeleteArtifactResponse;

        /**
         * Creates a plain object from a DeleteArtifactResponse message. Also converts values to other types if specified.
         * @param message DeleteArtifactResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.DeleteArtifactResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteArtifactResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContractRequest. */
    interface IGetContractRequest {

        /** GetContractRequest contractId */
        contractId?: (abi.IContractId|null);
    }

    /** Represents a GetContractRequest. */
    class GetContractRequest implements IGetContractRequest {

        /**
         * Constructs a new GetContractRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetContractRequest);

        /** GetContractRequest contractId. */
        public contractId?: (abi.IContractId|null);

        /**
         * Creates a new GetContractRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContractRequest instance
         */
        public static create(properties?: contractregistry.IGetContractRequest): contractregistry.GetContractRequest;

        /**
         * Encodes the specified GetContractRequest message. Does not implicitly {@link contractregistry.GetContractRequest.verify|verify} messages.
         * @param message GetContractRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IGetContractRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContractRequest message, length delimited. Does not implicitly {@link contractregistry.GetContractRequest.verify|verify} messages.
         * @param message GetContractRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IGetContractRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContractRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContractRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.GetContractRequest;

        /**
         * Decodes a GetContractRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContractRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.GetContractRequest;

        /**
         * Verifies a GetContractRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContractRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContractRequest
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.GetContractRequest;

        /**
         * Creates a plain object from a GetContractRequest message. Also converts values to other types if specified.
         * @param message GetContractRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.GetContractRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContractRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContractResponse. */
    interface IGetContractResponse {

        /** GetContractResponse contract */
        contract?: (abi.IContract|null);
    }

    /** Represents a GetContractResponse. */
    class GetContractResponse implements IGetContractResponse {

        /**
         * Constructs a new GetContractResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetContractResponse);

        /** GetContractResponse contract. */
        public contract?: (abi.IContract|null);

        /**
         * Creates a new GetContractResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContractResponse instance
         */
        public static create(properties?: contractregistry.IGetContractResponse): contractregistry.GetContractResponse;

        /**
         * Encodes the specified GetContractResponse message. Does not implicitly {@link contractregistry.GetContractResponse.verify|verify} messages.
         * @param message GetContractResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IGetContractResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContractResponse message, length delimited. Does not implicitly {@link contractregistry.GetContractResponse.verify|verify} messages.
         * @param message GetContractResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IGetContractResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContractResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContractResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.GetContractResponse;

        /**
         * Decodes a GetContractResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContractResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.GetContractResponse;

        /**
         * Verifies a GetContractResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContractResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContractResponse
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.GetContractResponse;

        /**
         * Creates a plain object from a GetContractResponse message. Also converts values to other types if specified.
         * @param message GetContractResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.GetContractResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContractResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContractABIResponse. */
    interface IGetContractABIResponse {

        /** GetContractABIResponse abi */
        abi?: (Uint8Array|null);
    }

    /** Represents a GetContractABIResponse. */
    class GetContractABIResponse implements IGetContractABIResponse {

        /**
         * Constructs a new GetContractABIResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetContractABIResponse);

        /** GetContractABIResponse abi. */
        public abi: Uint8Array;

        /**
         * Creates a new GetContractABIResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContractABIResponse instance
         */
        public static create(properties?: contractregistry.IGetContractABIResponse): contractregistry.GetContractABIResponse;

        /**
         * Encodes the specified GetContractABIResponse message. Does not implicitly {@link contractregistry.GetContractABIResponse.verify|verify} messages.
         * @param message GetContractABIResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IGetContractABIResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContractABIResponse message, length delimited. Does not implicitly {@link contractregistry.GetContractABIResponse.verify|verify} messages.
         * @param message GetContractABIResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IGetContractABIResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContractABIResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContractABIResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.GetContractABIResponse;

        /**
         * Decodes a GetContractABIResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContractABIResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.GetContractABIResponse;

        /**
         * Verifies a GetContractABIResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContractABIResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContractABIResponse
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.GetContractABIResponse;

        /**
         * Creates a plain object from a GetContractABIResponse message. Also converts values to other types if specified.
         * @param message GetContractABIResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.GetContractABIResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContractABIResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContractBytecodeResponse. */
    interface IGetContractBytecodeResponse {

        /** GetContractBytecodeResponse bytecode */
        bytecode?: (Uint8Array|null);
    }

    /** Represents a GetContractBytecodeResponse. */
    class GetContractBytecodeResponse implements IGetContractBytecodeResponse {

        /**
         * Constructs a new GetContractBytecodeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetContractBytecodeResponse);

        /** GetContractBytecodeResponse bytecode. */
        public bytecode: Uint8Array;

        /**
         * Creates a new GetContractBytecodeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContractBytecodeResponse instance
         */
        public static create(properties?: contractregistry.IGetContractBytecodeResponse): contractregistry.GetContractBytecodeResponse;

        /**
         * Encodes the specified GetContractBytecodeResponse message. Does not implicitly {@link contractregistry.GetContractBytecodeResponse.verify|verify} messages.
         * @param message GetContractBytecodeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IGetContractBytecodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContractBytecodeResponse message, length delimited. Does not implicitly {@link contractregistry.GetContractBytecodeResponse.verify|verify} messages.
         * @param message GetContractBytecodeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IGetContractBytecodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContractBytecodeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContractBytecodeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.GetContractBytecodeResponse;

        /**
         * Decodes a GetContractBytecodeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContractBytecodeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.GetContractBytecodeResponse;

        /**
         * Verifies a GetContractBytecodeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContractBytecodeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContractBytecodeResponse
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.GetContractBytecodeResponse;

        /**
         * Creates a plain object from a GetContractBytecodeResponse message. Also converts values to other types if specified.
         * @param message GetContractBytecodeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.GetContractBytecodeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContractBytecodeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContractDeployedBytecodeResponse. */
    interface IGetContractDeployedBytecodeResponse {

        /** GetContractDeployedBytecodeResponse deployedBytecode */
        deployedBytecode?: (Uint8Array|null);
    }

    /** Represents a GetContractDeployedBytecodeResponse. */
    class GetContractDeployedBytecodeResponse implements IGetContractDeployedBytecodeResponse {

        /**
         * Constructs a new GetContractDeployedBytecodeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetContractDeployedBytecodeResponse);

        /** GetContractDeployedBytecodeResponse deployedBytecode. */
        public deployedBytecode: Uint8Array;

        /**
         * Creates a new GetContractDeployedBytecodeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContractDeployedBytecodeResponse instance
         */
        public static create(properties?: contractregistry.IGetContractDeployedBytecodeResponse): contractregistry.GetContractDeployedBytecodeResponse;

        /**
         * Encodes the specified GetContractDeployedBytecodeResponse message. Does not implicitly {@link contractregistry.GetContractDeployedBytecodeResponse.verify|verify} messages.
         * @param message GetContractDeployedBytecodeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IGetContractDeployedBytecodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContractDeployedBytecodeResponse message, length delimited. Does not implicitly {@link contractregistry.GetContractDeployedBytecodeResponse.verify|verify} messages.
         * @param message GetContractDeployedBytecodeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IGetContractDeployedBytecodeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContractDeployedBytecodeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContractDeployedBytecodeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.GetContractDeployedBytecodeResponse;

        /**
         * Decodes a GetContractDeployedBytecodeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContractDeployedBytecodeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.GetContractDeployedBytecodeResponse;

        /**
         * Verifies a GetContractDeployedBytecodeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContractDeployedBytecodeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContractDeployedBytecodeResponse
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.GetContractDeployedBytecodeResponse;

        /**
         * Creates a plain object from a GetContractDeployedBytecodeResponse message. Also converts values to other types if specified.
         * @param message GetContractDeployedBytecodeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.GetContractDeployedBytecodeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContractDeployedBytecodeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCatalogRequest. */
    interface IGetCatalogRequest {
    }

    /** Represents a GetCatalogRequest. */
    class GetCatalogRequest implements IGetCatalogRequest {

        /**
         * Constructs a new GetCatalogRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetCatalogRequest);

        /**
         * Creates a new GetCatalogRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCatalogRequest instance
         */
        public static create(properties?: contractregistry.IGetCatalogRequest): contractregistry.GetCatalogRequest;

        /**
         * Encodes the specified GetCatalogRequest message. Does not implicitly {@link contractregistry.GetCatalogRequest.verify|verify} messages.
         * @param message GetCatalogRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IGetCatalogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCatalogRequest message, length delimited. Does not implicitly {@link contractregistry.GetCatalogRequest.verify|verify} messages.
         * @param message GetCatalogRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IGetCatalogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCatalogRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCatalogRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.GetCatalogRequest;

        /**
         * Decodes a GetCatalogRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCatalogRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.GetCatalogRequest;

        /**
         * Verifies a GetCatalogRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCatalogRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCatalogRequest
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.GetCatalogRequest;

        /**
         * Creates a plain object from a GetCatalogRequest message. Also converts values to other types if specified.
         * @param message GetCatalogRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.GetCatalogRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCatalogRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetCatalogResponse. */
    interface IGetCatalogResponse {

        /** GetCatalogResponse names */
        names?: (string[]|null);
    }

    /** Represents a GetCatalogResponse. */
    class GetCatalogResponse implements IGetCatalogResponse {

        /**
         * Constructs a new GetCatalogResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetCatalogResponse);

        /** GetCatalogResponse names. */
        public names: string[];

        /**
         * Creates a new GetCatalogResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCatalogResponse instance
         */
        public static create(properties?: contractregistry.IGetCatalogResponse): contractregistry.GetCatalogResponse;

        /**
         * Encodes the specified GetCatalogResponse message. Does not implicitly {@link contractregistry.GetCatalogResponse.verify|verify} messages.
         * @param message GetCatalogResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IGetCatalogResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetCatalogResponse message, length delimited. Does not implicitly {@link contractregistry.GetCatalogResponse.verify|verify} messages.
         * @param message GetCatalogResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IGetCatalogResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetCatalogResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCatalogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.GetCatalogResponse;

        /**
         * Decodes a GetCatalogResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCatalogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.GetCatalogResponse;

        /**
         * Verifies a GetCatalogResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetCatalogResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetCatalogResponse
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.GetCatalogResponse;

        /**
         * Creates a plain object from a GetCatalogResponse message. Also converts values to other types if specified.
         * @param message GetCatalogResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.GetCatalogResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetCatalogResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTagsRequest. */
    interface IGetTagsRequest {

        /** GetTagsRequest name */
        name?: (string|null);
    }

    /** Represents a GetTagsRequest. */
    class GetTagsRequest implements IGetTagsRequest {

        /**
         * Constructs a new GetTagsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetTagsRequest);

        /** GetTagsRequest name. */
        public name: string;

        /**
         * Creates a new GetTagsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTagsRequest instance
         */
        public static create(properties?: contractregistry.IGetTagsRequest): contractregistry.GetTagsRequest;

        /**
         * Encodes the specified GetTagsRequest message. Does not implicitly {@link contractregistry.GetTagsRequest.verify|verify} messages.
         * @param message GetTagsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IGetTagsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetTagsRequest message, length delimited. Does not implicitly {@link contractregistry.GetTagsRequest.verify|verify} messages.
         * @param message GetTagsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IGetTagsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTagsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTagsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.GetTagsRequest;

        /**
         * Decodes a GetTagsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTagsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.GetTagsRequest;

        /**
         * Verifies a GetTagsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetTagsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTagsRequest
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.GetTagsRequest;

        /**
         * Creates a plain object from a GetTagsRequest message. Also converts values to other types if specified.
         * @param message GetTagsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.GetTagsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTagsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTagsResponse. */
    interface IGetTagsResponse {

        /** GetTagsResponse tags */
        tags?: (string[]|null);
    }

    /** Represents a GetTagsResponse. */
    class GetTagsResponse implements IGetTagsResponse {

        /**
         * Constructs a new GetTagsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetTagsResponse);

        /** GetTagsResponse tags. */
        public tags: string[];

        /**
         * Creates a new GetTagsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTagsResponse instance
         */
        public static create(properties?: contractregistry.IGetTagsResponse): contractregistry.GetTagsResponse;

        /**
         * Encodes the specified GetTagsResponse message. Does not implicitly {@link contractregistry.GetTagsResponse.verify|verify} messages.
         * @param message GetTagsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IGetTagsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetTagsResponse message, length delimited. Does not implicitly {@link contractregistry.GetTagsResponse.verify|verify} messages.
         * @param message GetTagsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IGetTagsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTagsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTagsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.GetTagsResponse;

        /**
         * Decodes a GetTagsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTagsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.GetTagsResponse;

        /**
         * Verifies a GetTagsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetTagsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTagsResponse
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.GetTagsResponse;

        /**
         * Creates a plain object from a GetTagsResponse message. Also converts values to other types if specified.
         * @param message GetTagsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.GetTagsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTagsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetMethodsBySelectorRequest. */
    interface IGetMethodsBySelectorRequest {

        /** GetMethodsBySelectorRequest selector */
        selector?: (Uint8Array|null);

        /** GetMethodsBySelectorRequest accountInstance */
        accountInstance?: (common.IAccountInstance|null);
    }

    /** Represents a GetMethodsBySelectorRequest. */
    class GetMethodsBySelectorRequest implements IGetMethodsBySelectorRequest {

        /**
         * Constructs a new GetMethodsBySelectorRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetMethodsBySelectorRequest);

        /** GetMethodsBySelectorRequest selector. */
        public selector: Uint8Array;

        /** GetMethodsBySelectorRequest accountInstance. */
        public accountInstance?: (common.IAccountInstance|null);

        /**
         * Creates a new GetMethodsBySelectorRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMethodsBySelectorRequest instance
         */
        public static create(properties?: contractregistry.IGetMethodsBySelectorRequest): contractregistry.GetMethodsBySelectorRequest;

        /**
         * Encodes the specified GetMethodsBySelectorRequest message. Does not implicitly {@link contractregistry.GetMethodsBySelectorRequest.verify|verify} messages.
         * @param message GetMethodsBySelectorRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IGetMethodsBySelectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetMethodsBySelectorRequest message, length delimited. Does not implicitly {@link contractregistry.GetMethodsBySelectorRequest.verify|verify} messages.
         * @param message GetMethodsBySelectorRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IGetMethodsBySelectorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetMethodsBySelectorRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMethodsBySelectorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.GetMethodsBySelectorRequest;

        /**
         * Decodes a GetMethodsBySelectorRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMethodsBySelectorRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.GetMethodsBySelectorRequest;

        /**
         * Verifies a GetMethodsBySelectorRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetMethodsBySelectorRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMethodsBySelectorRequest
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.GetMethodsBySelectorRequest;

        /**
         * Creates a plain object from a GetMethodsBySelectorRequest message. Also converts values to other types if specified.
         * @param message GetMethodsBySelectorRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.GetMethodsBySelectorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetMethodsBySelectorRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetMethodsBySelectorResponse. */
    interface IGetMethodsBySelectorResponse {

        /** GetMethodsBySelectorResponse method */
        method?: (Uint8Array|null);

        /** GetMethodsBySelectorResponse defaultMethods */
        defaultMethods?: (Uint8Array[]|null);
    }

    /** Represents a GetMethodsBySelectorResponse. */
    class GetMethodsBySelectorResponse implements IGetMethodsBySelectorResponse {

        /**
         * Constructs a new GetMethodsBySelectorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetMethodsBySelectorResponse);

        /** GetMethodsBySelectorResponse method. */
        public method: Uint8Array;

        /** GetMethodsBySelectorResponse defaultMethods. */
        public defaultMethods: Uint8Array[];

        /**
         * Creates a new GetMethodsBySelectorResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetMethodsBySelectorResponse instance
         */
        public static create(properties?: contractregistry.IGetMethodsBySelectorResponse): contractregistry.GetMethodsBySelectorResponse;

        /**
         * Encodes the specified GetMethodsBySelectorResponse message. Does not implicitly {@link contractregistry.GetMethodsBySelectorResponse.verify|verify} messages.
         * @param message GetMethodsBySelectorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IGetMethodsBySelectorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetMethodsBySelectorResponse message, length delimited. Does not implicitly {@link contractregistry.GetMethodsBySelectorResponse.verify|verify} messages.
         * @param message GetMethodsBySelectorResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IGetMethodsBySelectorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetMethodsBySelectorResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetMethodsBySelectorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.GetMethodsBySelectorResponse;

        /**
         * Decodes a GetMethodsBySelectorResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetMethodsBySelectorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.GetMethodsBySelectorResponse;

        /**
         * Verifies a GetMethodsBySelectorResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetMethodsBySelectorResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetMethodsBySelectorResponse
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.GetMethodsBySelectorResponse;

        /**
         * Creates a plain object from a GetMethodsBySelectorResponse message. Also converts values to other types if specified.
         * @param message GetMethodsBySelectorResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.GetMethodsBySelectorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetMethodsBySelectorResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetEventsBySigHashRequest. */
    interface IGetEventsBySigHashRequest {

        /** GetEventsBySigHashRequest sigHash */
        sigHash?: (Uint8Array|null);

        /** GetEventsBySigHashRequest accountInstance */
        accountInstance?: (common.IAccountInstance|null);

        /** GetEventsBySigHashRequest indexedInputCount */
        indexedInputCount?: (number|null);
    }

    /** Represents a GetEventsBySigHashRequest. */
    class GetEventsBySigHashRequest implements IGetEventsBySigHashRequest {

        /**
         * Constructs a new GetEventsBySigHashRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetEventsBySigHashRequest);

        /** GetEventsBySigHashRequest sigHash. */
        public sigHash: Uint8Array;

        /** GetEventsBySigHashRequest accountInstance. */
        public accountInstance?: (common.IAccountInstance|null);

        /** GetEventsBySigHashRequest indexedInputCount. */
        public indexedInputCount: number;

        /**
         * Creates a new GetEventsBySigHashRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEventsBySigHashRequest instance
         */
        public static create(properties?: contractregistry.IGetEventsBySigHashRequest): contractregistry.GetEventsBySigHashRequest;

        /**
         * Encodes the specified GetEventsBySigHashRequest message. Does not implicitly {@link contractregistry.GetEventsBySigHashRequest.verify|verify} messages.
         * @param message GetEventsBySigHashRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IGetEventsBySigHashRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEventsBySigHashRequest message, length delimited. Does not implicitly {@link contractregistry.GetEventsBySigHashRequest.verify|verify} messages.
         * @param message GetEventsBySigHashRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IGetEventsBySigHashRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEventsBySigHashRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEventsBySigHashRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.GetEventsBySigHashRequest;

        /**
         * Decodes a GetEventsBySigHashRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEventsBySigHashRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.GetEventsBySigHashRequest;

        /**
         * Verifies a GetEventsBySigHashRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEventsBySigHashRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEventsBySigHashRequest
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.GetEventsBySigHashRequest;

        /**
         * Creates a plain object from a GetEventsBySigHashRequest message. Also converts values to other types if specified.
         * @param message GetEventsBySigHashRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.GetEventsBySigHashRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEventsBySigHashRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetEventsBySigHashResponse. */
    interface IGetEventsBySigHashResponse {

        /** GetEventsBySigHashResponse event */
        event?: (Uint8Array|null);

        /** GetEventsBySigHashResponse defaultEvents */
        defaultEvents?: (Uint8Array[]|null);
    }

    /** Represents a GetEventsBySigHashResponse. */
    class GetEventsBySigHashResponse implements IGetEventsBySigHashResponse {

        /**
         * Constructs a new GetEventsBySigHashResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetEventsBySigHashResponse);

        /** GetEventsBySigHashResponse event. */
        public event: Uint8Array;

        /** GetEventsBySigHashResponse defaultEvents. */
        public defaultEvents: Uint8Array[];

        /**
         * Creates a new GetEventsBySigHashResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetEventsBySigHashResponse instance
         */
        public static create(properties?: contractregistry.IGetEventsBySigHashResponse): contractregistry.GetEventsBySigHashResponse;

        /**
         * Encodes the specified GetEventsBySigHashResponse message. Does not implicitly {@link contractregistry.GetEventsBySigHashResponse.verify|verify} messages.
         * @param message GetEventsBySigHashResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.IGetEventsBySigHashResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetEventsBySigHashResponse message, length delimited. Does not implicitly {@link contractregistry.GetEventsBySigHashResponse.verify|verify} messages.
         * @param message GetEventsBySigHashResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.IGetEventsBySigHashResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetEventsBySigHashResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetEventsBySigHashResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.GetEventsBySigHashResponse;

        /**
         * Decodes a GetEventsBySigHashResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetEventsBySigHashResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.GetEventsBySigHashResponse;

        /**
         * Verifies a GetEventsBySigHashResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetEventsBySigHashResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetEventsBySigHashResponse
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.GetEventsBySigHashResponse;

        /**
         * Creates a plain object from a GetEventsBySigHashResponse message. Also converts values to other types if specified.
         * @param message GetEventsBySigHashResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.GetEventsBySigHashResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetEventsBySigHashResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetAccountCodeHashRequest. */
    interface ISetAccountCodeHashRequest {

        /** SetAccountCodeHashRequest accountInstance */
        accountInstance?: (common.IAccountInstance|null);

        /** SetAccountCodeHashRequest codeHash */
        codeHash?: (Uint8Array|null);
    }

    /** Represents a SetAccountCodeHashRequest. */
    class SetAccountCodeHashRequest implements ISetAccountCodeHashRequest {

        /**
         * Constructs a new SetAccountCodeHashRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.ISetAccountCodeHashRequest);

        /** SetAccountCodeHashRequest accountInstance. */
        public accountInstance?: (common.IAccountInstance|null);

        /** SetAccountCodeHashRequest codeHash. */
        public codeHash: Uint8Array;

        /**
         * Creates a new SetAccountCodeHashRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetAccountCodeHashRequest instance
         */
        public static create(properties?: contractregistry.ISetAccountCodeHashRequest): contractregistry.SetAccountCodeHashRequest;

        /**
         * Encodes the specified SetAccountCodeHashRequest message. Does not implicitly {@link contractregistry.SetAccountCodeHashRequest.verify|verify} messages.
         * @param message SetAccountCodeHashRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.ISetAccountCodeHashRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetAccountCodeHashRequest message, length delimited. Does not implicitly {@link contractregistry.SetAccountCodeHashRequest.verify|verify} messages.
         * @param message SetAccountCodeHashRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.ISetAccountCodeHashRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetAccountCodeHashRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetAccountCodeHashRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.SetAccountCodeHashRequest;

        /**
         * Decodes a SetAccountCodeHashRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetAccountCodeHashRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.SetAccountCodeHashRequest;

        /**
         * Verifies a SetAccountCodeHashRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetAccountCodeHashRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetAccountCodeHashRequest
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.SetAccountCodeHashRequest;

        /**
         * Creates a plain object from a SetAccountCodeHashRequest message. Also converts values to other types if specified.
         * @param message SetAccountCodeHashRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.SetAccountCodeHashRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetAccountCodeHashRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetAccountCodeHashResponse. */
    interface ISetAccountCodeHashResponse {
    }

    /** Represents a SetAccountCodeHashResponse. */
    class SetAccountCodeHashResponse implements ISetAccountCodeHashResponse {

        /**
         * Constructs a new SetAccountCodeHashResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.ISetAccountCodeHashResponse);

        /**
         * Creates a new SetAccountCodeHashResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetAccountCodeHashResponse instance
         */
        public static create(properties?: contractregistry.ISetAccountCodeHashResponse): contractregistry.SetAccountCodeHashResponse;

        /**
         * Encodes the specified SetAccountCodeHashResponse message. Does not implicitly {@link contractregistry.SetAccountCodeHashResponse.verify|verify} messages.
         * @param message SetAccountCodeHashResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contractregistry.ISetAccountCodeHashResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetAccountCodeHashResponse message, length delimited. Does not implicitly {@link contractregistry.SetAccountCodeHashResponse.verify|verify} messages.
         * @param message SetAccountCodeHashResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contractregistry.ISetAccountCodeHashResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetAccountCodeHashResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetAccountCodeHashResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contractregistry.SetAccountCodeHashResponse;

        /**
         * Decodes a SetAccountCodeHashResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetAccountCodeHashResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contractregistry.SetAccountCodeHashResponse;

        /**
         * Verifies a SetAccountCodeHashResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetAccountCodeHashResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetAccountCodeHashResponse
         */
        public static fromObject(object: { [k: string]: any }): contractregistry.SetAccountCodeHashResponse;

        /**
         * Creates a plain object from a SetAccountCodeHashResponse message. Also converts values to other types if specified.
         * @param message SetAccountCodeHashResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contractregistry.SetAccountCodeHashResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetAccountCodeHashResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace envelopestore. */
export namespace envelopestore {

    /** Status enum. */
    enum Status {
        STORED = 0,
        PENDING = 1,
        MINED = 2,
        ERROR = 3
    }

    /** Represents an EnvelopeStore */
    class EnvelopeStore extends $protobuf.rpc.Service {

        /**
         * Constructs a new EnvelopeStore service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new EnvelopeStore service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): EnvelopeStore;

        /**
         * Calls Store.
         * @param request StoreRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and StoreResponse
         */
        public store(request: envelopestore.IStoreRequest, callback: envelopestore.EnvelopeStore.StoreCallback): void;

        /**
         * Calls Store.
         * @param request StoreRequest message or plain object
         * @returns Promise
         */
        public store(request: envelopestore.IStoreRequest): Promise<envelopestore.StoreResponse>;

        /**
         * Calls LoadByID.
         * @param request LoadByIDRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and StoreResponse
         */
        public loadByID(request: envelopestore.ILoadByIDRequest, callback: envelopestore.EnvelopeStore.LoadByIDCallback): void;

        /**
         * Calls LoadByID.
         * @param request LoadByIDRequest message or plain object
         * @returns Promise
         */
        public loadByID(request: envelopestore.ILoadByIDRequest): Promise<envelopestore.StoreResponse>;

        /**
         * Calls LoadByTxHash.
         * @param request LoadByTxHashRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and StoreResponse
         */
        public loadByTxHash(request: envelopestore.ILoadByTxHashRequest, callback: envelopestore.EnvelopeStore.LoadByTxHashCallback): void;

        /**
         * Calls LoadByTxHash.
         * @param request LoadByTxHashRequest message or plain object
         * @returns Promise
         */
        public loadByTxHash(request: envelopestore.ILoadByTxHashRequest): Promise<envelopestore.StoreResponse>;

        /**
         * Calls SetStatus.
         * @param request SetStatusRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and StatusResponse
         */
        public setStatus(request: envelopestore.ISetStatusRequest, callback: envelopestore.EnvelopeStore.SetStatusCallback): void;

        /**
         * Calls SetStatus.
         * @param request SetStatusRequest message or plain object
         * @returns Promise
         */
        public setStatus(request: envelopestore.ISetStatusRequest): Promise<envelopestore.StatusResponse>;

        /**
         * Calls LoadPending.
         * @param request LoadPendingRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and LoadPendingResponse
         */
        public loadPending(request: envelopestore.ILoadPendingRequest, callback: envelopestore.EnvelopeStore.LoadPendingCallback): void;

        /**
         * Calls LoadPending.
         * @param request LoadPendingRequest message or plain object
         * @returns Promise
         */
        public loadPending(request: envelopestore.ILoadPendingRequest): Promise<envelopestore.LoadPendingResponse>;
    }

    namespace EnvelopeStore {

        /**
         * Callback as used by {@link envelopestore.EnvelopeStore#store}.
         * @param error Error, if any
         * @param [response] StoreResponse
         */
        type StoreCallback = (error: (Error|null), response?: envelopestore.StoreResponse) => void;

        /**
         * Callback as used by {@link envelopestore.EnvelopeStore#loadByID}.
         * @param error Error, if any
         * @param [response] StoreResponse
         */
        type LoadByIDCallback = (error: (Error|null), response?: envelopestore.StoreResponse) => void;

        /**
         * Callback as used by {@link envelopestore.EnvelopeStore#loadByTxHash}.
         * @param error Error, if any
         * @param [response] StoreResponse
         */
        type LoadByTxHashCallback = (error: (Error|null), response?: envelopestore.StoreResponse) => void;

        /**
         * Callback as used by {@link envelopestore.EnvelopeStore#setStatus}.
         * @param error Error, if any
         * @param [response] StatusResponse
         */
        type SetStatusCallback = (error: (Error|null), response?: envelopestore.StatusResponse) => void;

        /**
         * Callback as used by {@link envelopestore.EnvelopeStore#loadPending}.
         * @param error Error, if any
         * @param [response] LoadPendingResponse
         */
        type LoadPendingCallback = (error: (Error|null), response?: envelopestore.LoadPendingResponse) => void;
    }

    /** Properties of a StatusInfo. */
    interface IStatusInfo {

        /** StatusInfo status */
        status?: (envelopestore.Status|null);

        /** StatusInfo storedAt */
        storedAt?: (google.protobuf.ITimestamp|null);

        /** StatusInfo sentAt */
        sentAt?: (google.protobuf.ITimestamp|null);

        /** StatusInfo minedAt */
        minedAt?: (google.protobuf.ITimestamp|null);

        /** StatusInfo errorAt */
        errorAt?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a StatusInfo. */
    class StatusInfo implements IStatusInfo {

        /**
         * Constructs a new StatusInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: envelopestore.IStatusInfo);

        /** StatusInfo status. */
        public status: envelopestore.Status;

        /** StatusInfo storedAt. */
        public storedAt?: (google.protobuf.ITimestamp|null);

        /** StatusInfo sentAt. */
        public sentAt?: (google.protobuf.ITimestamp|null);

        /** StatusInfo minedAt. */
        public minedAt?: (google.protobuf.ITimestamp|null);

        /** StatusInfo errorAt. */
        public errorAt?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new StatusInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatusInfo instance
         */
        public static create(properties?: envelopestore.IStatusInfo): envelopestore.StatusInfo;

        /**
         * Encodes the specified StatusInfo message. Does not implicitly {@link envelopestore.StatusInfo.verify|verify} messages.
         * @param message StatusInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: envelopestore.IStatusInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatusInfo message, length delimited. Does not implicitly {@link envelopestore.StatusInfo.verify|verify} messages.
         * @param message StatusInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: envelopestore.IStatusInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatusInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StatusInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): envelopestore.StatusInfo;

        /**
         * Decodes a StatusInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StatusInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): envelopestore.StatusInfo;

        /**
         * Verifies a StatusInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StatusInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StatusInfo
         */
        public static fromObject(object: { [k: string]: any }): envelopestore.StatusInfo;

        /**
         * Creates a plain object from a StatusInfo message. Also converts values to other types if specified.
         * @param message StatusInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: envelopestore.StatusInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StatusInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StoreRequest. */
    interface IStoreRequest {

        /** StoreRequest envelope */
        envelope?: (envelope.IEnvelope|null);
    }

    /** Represents a StoreRequest. */
    class StoreRequest implements IStoreRequest {

        /**
         * Constructs a new StoreRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: envelopestore.IStoreRequest);

        /** StoreRequest envelope. */
        public envelope?: (envelope.IEnvelope|null);

        /**
         * Creates a new StoreRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StoreRequest instance
         */
        public static create(properties?: envelopestore.IStoreRequest): envelopestore.StoreRequest;

        /**
         * Encodes the specified StoreRequest message. Does not implicitly {@link envelopestore.StoreRequest.verify|verify} messages.
         * @param message StoreRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: envelopestore.IStoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StoreRequest message, length delimited. Does not implicitly {@link envelopestore.StoreRequest.verify|verify} messages.
         * @param message StoreRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: envelopestore.IStoreRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StoreRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StoreRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): envelopestore.StoreRequest;

        /**
         * Decodes a StoreRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StoreRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): envelopestore.StoreRequest;

        /**
         * Verifies a StoreRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StoreRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StoreRequest
         */
        public static fromObject(object: { [k: string]: any }): envelopestore.StoreRequest;

        /**
         * Creates a plain object from a StoreRequest message. Also converts values to other types if specified.
         * @param message StoreRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: envelopestore.StoreRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StoreRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StoreResponse. */
    interface IStoreResponse {

        /** StoreResponse envelope */
        envelope?: (envelope.IEnvelope|null);

        /** StoreResponse statusInfo */
        statusInfo?: (envelopestore.IStatusInfo|null);
    }

    /** Represents a StoreResponse. */
    class StoreResponse implements IStoreResponse {

        /**
         * Constructs a new StoreResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: envelopestore.IStoreResponse);

        /** StoreResponse envelope. */
        public envelope?: (envelope.IEnvelope|null);

        /** StoreResponse statusInfo. */
        public statusInfo?: (envelopestore.IStatusInfo|null);

        /**
         * Creates a new StoreResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StoreResponse instance
         */
        public static create(properties?: envelopestore.IStoreResponse): envelopestore.StoreResponse;

        /**
         * Encodes the specified StoreResponse message. Does not implicitly {@link envelopestore.StoreResponse.verify|verify} messages.
         * @param message StoreResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: envelopestore.IStoreResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StoreResponse message, length delimited. Does not implicitly {@link envelopestore.StoreResponse.verify|verify} messages.
         * @param message StoreResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: envelopestore.IStoreResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StoreResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StoreResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): envelopestore.StoreResponse;

        /**
         * Decodes a StoreResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StoreResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): envelopestore.StoreResponse;

        /**
         * Verifies a StoreResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StoreResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StoreResponse
         */
        public static fromObject(object: { [k: string]: any }): envelopestore.StoreResponse;

        /**
         * Creates a plain object from a StoreResponse message. Also converts values to other types if specified.
         * @param message StoreResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: envelopestore.StoreResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StoreResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoadByIDRequest. */
    interface ILoadByIDRequest {

        /** LoadByIDRequest id */
        id?: (string|null);
    }

    /** Represents a LoadByIDRequest. */
    class LoadByIDRequest implements ILoadByIDRequest {

        /**
         * Constructs a new LoadByIDRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: envelopestore.ILoadByIDRequest);

        /** LoadByIDRequest id. */
        public id: string;

        /**
         * Creates a new LoadByIDRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoadByIDRequest instance
         */
        public static create(properties?: envelopestore.ILoadByIDRequest): envelopestore.LoadByIDRequest;

        /**
         * Encodes the specified LoadByIDRequest message. Does not implicitly {@link envelopestore.LoadByIDRequest.verify|verify} messages.
         * @param message LoadByIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: envelopestore.ILoadByIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoadByIDRequest message, length delimited. Does not implicitly {@link envelopestore.LoadByIDRequest.verify|verify} messages.
         * @param message LoadByIDRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: envelopestore.ILoadByIDRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoadByIDRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoadByIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): envelopestore.LoadByIDRequest;

        /**
         * Decodes a LoadByIDRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoadByIDRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): envelopestore.LoadByIDRequest;

        /**
         * Verifies a LoadByIDRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoadByIDRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoadByIDRequest
         */
        public static fromObject(object: { [k: string]: any }): envelopestore.LoadByIDRequest;

        /**
         * Creates a plain object from a LoadByIDRequest message. Also converts values to other types if specified.
         * @param message LoadByIDRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: envelopestore.LoadByIDRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoadByIDRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoadByTxHashRequest. */
    interface ILoadByTxHashRequest {

        /** LoadByTxHashRequest chain */
        chain?: (chain.IChain|null);

        /** LoadByTxHashRequest txHash */
        txHash?: (ethereum.IHash|null);
    }

    /** Represents a LoadByTxHashRequest. */
    class LoadByTxHashRequest implements ILoadByTxHashRequest {

        /**
         * Constructs a new LoadByTxHashRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: envelopestore.ILoadByTxHashRequest);

        /** LoadByTxHashRequest chain. */
        public chain?: (chain.IChain|null);

        /** LoadByTxHashRequest txHash. */
        public txHash?: (ethereum.IHash|null);

        /**
         * Creates a new LoadByTxHashRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoadByTxHashRequest instance
         */
        public static create(properties?: envelopestore.ILoadByTxHashRequest): envelopestore.LoadByTxHashRequest;

        /**
         * Encodes the specified LoadByTxHashRequest message. Does not implicitly {@link envelopestore.LoadByTxHashRequest.verify|verify} messages.
         * @param message LoadByTxHashRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: envelopestore.ILoadByTxHashRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoadByTxHashRequest message, length delimited. Does not implicitly {@link envelopestore.LoadByTxHashRequest.verify|verify} messages.
         * @param message LoadByTxHashRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: envelopestore.ILoadByTxHashRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoadByTxHashRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoadByTxHashRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): envelopestore.LoadByTxHashRequest;

        /**
         * Decodes a LoadByTxHashRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoadByTxHashRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): envelopestore.LoadByTxHashRequest;

        /**
         * Verifies a LoadByTxHashRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoadByTxHashRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoadByTxHashRequest
         */
        public static fromObject(object: { [k: string]: any }): envelopestore.LoadByTxHashRequest;

        /**
         * Creates a plain object from a LoadByTxHashRequest message. Also converts values to other types if specified.
         * @param message LoadByTxHashRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: envelopestore.LoadByTxHashRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoadByTxHashRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetStatusRequest. */
    interface ISetStatusRequest {

        /** SetStatusRequest id */
        id?: (string|null);

        /** SetStatusRequest status */
        status?: (envelopestore.Status|null);
    }

    /** Represents a SetStatusRequest. */
    class SetStatusRequest implements ISetStatusRequest {

        /**
         * Constructs a new SetStatusRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: envelopestore.ISetStatusRequest);

        /** SetStatusRequest id. */
        public id: string;

        /** SetStatusRequest status. */
        public status: envelopestore.Status;

        /**
         * Creates a new SetStatusRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetStatusRequest instance
         */
        public static create(properties?: envelopestore.ISetStatusRequest): envelopestore.SetStatusRequest;

        /**
         * Encodes the specified SetStatusRequest message. Does not implicitly {@link envelopestore.SetStatusRequest.verify|verify} messages.
         * @param message SetStatusRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: envelopestore.ISetStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetStatusRequest message, length delimited. Does not implicitly {@link envelopestore.SetStatusRequest.verify|verify} messages.
         * @param message SetStatusRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: envelopestore.ISetStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetStatusRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetStatusRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): envelopestore.SetStatusRequest;

        /**
         * Decodes a SetStatusRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetStatusRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): envelopestore.SetStatusRequest;

        /**
         * Verifies a SetStatusRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetStatusRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetStatusRequest
         */
        public static fromObject(object: { [k: string]: any }): envelopestore.SetStatusRequest;

        /**
         * Creates a plain object from a SetStatusRequest message. Also converts values to other types if specified.
         * @param message SetStatusRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: envelopestore.SetStatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetStatusRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StatusResponse. */
    interface IStatusResponse {

        /** StatusResponse statusInfo */
        statusInfo?: (envelopestore.IStatusInfo|null);
    }

    /** Represents a StatusResponse. */
    class StatusResponse implements IStatusResponse {

        /**
         * Constructs a new StatusResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: envelopestore.IStatusResponse);

        /** StatusResponse statusInfo. */
        public statusInfo?: (envelopestore.IStatusInfo|null);

        /**
         * Creates a new StatusResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatusResponse instance
         */
        public static create(properties?: envelopestore.IStatusResponse): envelopestore.StatusResponse;

        /**
         * Encodes the specified StatusResponse message. Does not implicitly {@link envelopestore.StatusResponse.verify|verify} messages.
         * @param message StatusResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: envelopestore.IStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatusResponse message, length delimited. Does not implicitly {@link envelopestore.StatusResponse.verify|verify} messages.
         * @param message StatusResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: envelopestore.IStatusResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatusResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): envelopestore.StatusResponse;

        /**
         * Decodes a StatusResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StatusResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): envelopestore.StatusResponse;

        /**
         * Verifies a StatusResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StatusResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StatusResponse
         */
        public static fromObject(object: { [k: string]: any }): envelopestore.StatusResponse;

        /**
         * Creates a plain object from a StatusResponse message. Also converts values to other types if specified.
         * @param message StatusResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: envelopestore.StatusResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StatusResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoadPendingRequest. */
    interface ILoadPendingRequest {

        /** LoadPendingRequest duration */
        duration?: (google.protobuf.IDuration|null);
    }

    /** Represents a LoadPendingRequest. */
    class LoadPendingRequest implements ILoadPendingRequest {

        /**
         * Constructs a new LoadPendingRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: envelopestore.ILoadPendingRequest);

        /** LoadPendingRequest duration. */
        public duration?: (google.protobuf.IDuration|null);

        /**
         * Creates a new LoadPendingRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoadPendingRequest instance
         */
        public static create(properties?: envelopestore.ILoadPendingRequest): envelopestore.LoadPendingRequest;

        /**
         * Encodes the specified LoadPendingRequest message. Does not implicitly {@link envelopestore.LoadPendingRequest.verify|verify} messages.
         * @param message LoadPendingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: envelopestore.ILoadPendingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoadPendingRequest message, length delimited. Does not implicitly {@link envelopestore.LoadPendingRequest.verify|verify} messages.
         * @param message LoadPendingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: envelopestore.ILoadPendingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoadPendingRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoadPendingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): envelopestore.LoadPendingRequest;

        /**
         * Decodes a LoadPendingRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoadPendingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): envelopestore.LoadPendingRequest;

        /**
         * Verifies a LoadPendingRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoadPendingRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoadPendingRequest
         */
        public static fromObject(object: { [k: string]: any }): envelopestore.LoadPendingRequest;

        /**
         * Creates a plain object from a LoadPendingRequest message. Also converts values to other types if specified.
         * @param message LoadPendingRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: envelopestore.LoadPendingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoadPendingRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoadPendingResponse. */
    interface ILoadPendingResponse {

        /** LoadPendingResponse responses */
        responses?: (envelopestore.IStoreResponse[]|null);
    }

    /** Represents a LoadPendingResponse. */
    class LoadPendingResponse implements ILoadPendingResponse {

        /**
         * Constructs a new LoadPendingResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: envelopestore.ILoadPendingResponse);

        /** LoadPendingResponse responses. */
        public responses: envelopestore.IStoreResponse[];

        /**
         * Creates a new LoadPendingResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoadPendingResponse instance
         */
        public static create(properties?: envelopestore.ILoadPendingResponse): envelopestore.LoadPendingResponse;

        /**
         * Encodes the specified LoadPendingResponse message. Does not implicitly {@link envelopestore.LoadPendingResponse.verify|verify} messages.
         * @param message LoadPendingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: envelopestore.ILoadPendingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoadPendingResponse message, length delimited. Does not implicitly {@link envelopestore.LoadPendingResponse.verify|verify} messages.
         * @param message LoadPendingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: envelopestore.ILoadPendingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoadPendingResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoadPendingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): envelopestore.LoadPendingResponse;

        /**
         * Decodes a LoadPendingResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoadPendingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): envelopestore.LoadPendingResponse;

        /**
         * Verifies a LoadPendingResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoadPendingResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoadPendingResponse
         */
        public static fromObject(object: { [k: string]: any }): envelopestore.LoadPendingResponse;

        /**
         * Creates a plain object from a LoadPendingResponse message. Also converts values to other types if specified.
         * @param message LoadPendingResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: envelopestore.LoadPendingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoadPendingResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule body. */
            public body: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace envelope. */
export namespace envelope {

    /** Properties of a Metadata. */
    interface IMetadata {

        /** Metadata id */
        id?: (string|null);

        /** Metadata extra */
        extra?: ({ [k: string]: string }|null);
    }

    /** Represents a Metadata. */
    class Metadata implements IMetadata {

        /**
         * Constructs a new Metadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: envelope.IMetadata);

        /** Metadata id. */
        public id: string;

        /** Metadata extra. */
        public extra: { [k: string]: string };

        /**
         * Creates a new Metadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Metadata instance
         */
        public static create(properties?: envelope.IMetadata): envelope.Metadata;

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link envelope.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: envelope.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Metadata message, length delimited. Does not implicitly {@link envelope.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: envelope.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): envelope.Metadata;

        /**
         * Decodes a Metadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): envelope.Metadata;

        /**
         * Verifies a Metadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Metadata
         */
        public static fromObject(object: { [k: string]: any }): envelope.Metadata;

        /**
         * Creates a plain object from a Metadata message. Also converts values to other types if specified.
         * @param message Metadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: envelope.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Metadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Args. */
    interface IArgs {

        /** Args call */
        call?: (args.ICall|null);

        /** Args private */
        "private"?: (args.IPrivate|null);

        /** Args data */
        data?: (ethereum.IData|null);
    }

    /** Represents an Args. */
    class Args implements IArgs {

        /**
         * Constructs a new Args.
         * @param [properties] Properties to set
         */
        constructor(properties?: envelope.IArgs);

        /** Args call. */
        public call?: (args.ICall|null);

        /** Args private. */
        public private?: (args.IPrivate|null);

        /** Args data. */
        public data?: (ethereum.IData|null);

        /**
         * Creates a new Args instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Args instance
         */
        public static create(properties?: envelope.IArgs): envelope.Args;

        /**
         * Encodes the specified Args message. Does not implicitly {@link envelope.Args.verify|verify} messages.
         * @param message Args message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: envelope.IArgs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Args message, length delimited. Does not implicitly {@link envelope.Args.verify|verify} messages.
         * @param message Args message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: envelope.IArgs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Args message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Args
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): envelope.Args;

        /**
         * Decodes an Args message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Args
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): envelope.Args;

        /**
         * Verifies an Args message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Args message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Args
         */
        public static fromObject(object: { [k: string]: any }): envelope.Args;

        /**
         * Creates a plain object from an Args message. Also converts values to other types if specified.
         * @param message Args
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: envelope.Args, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Args to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Envelope. */
    interface IEnvelope {

        /** Envelope chain */
        chain?: (chain.IChain|null);

        /** Envelope protocol */
        protocol?: (chain.IProtocol|null);

        /** Envelope from */
        from?: (ethereum.IAccount|null);

        /** Envelope tx */
        tx?: (ethereum.ITransaction|null);

        /** Envelope receipt */
        receipt?: (ethereum.IReceipt|null);

        /** Envelope errors */
        errors?: (error.IError[]|null);

        /** Envelope args */
        args?: (envelope.IArgs|null);

        /** Envelope metadata */
        metadata?: (envelope.IMetadata|null);
    }

    /** Represents an Envelope. */
    class Envelope implements IEnvelope {

        /**
         * Constructs a new Envelope.
         * @param [properties] Properties to set
         */
        constructor(properties?: envelope.IEnvelope);

        /** Envelope chain. */
        public chain?: (chain.IChain|null);

        /** Envelope protocol. */
        public protocol?: (chain.IProtocol|null);

        /** Envelope from. */
        public from?: (ethereum.IAccount|null);

        /** Envelope tx. */
        public tx?: (ethereum.ITransaction|null);

        /** Envelope receipt. */
        public receipt?: (ethereum.IReceipt|null);

        /** Envelope errors. */
        public errors: error.IError[];

        /** Envelope args. */
        public args?: (envelope.IArgs|null);

        /** Envelope metadata. */
        public metadata?: (envelope.IMetadata|null);

        /**
         * Creates a new Envelope instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Envelope instance
         */
        public static create(properties?: envelope.IEnvelope): envelope.Envelope;

        /**
         * Encodes the specified Envelope message. Does not implicitly {@link envelope.Envelope.verify|verify} messages.
         * @param message Envelope message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: envelope.IEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Envelope message, length delimited. Does not implicitly {@link envelope.Envelope.verify|verify} messages.
         * @param message Envelope message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: envelope.IEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Envelope message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Envelope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): envelope.Envelope;

        /**
         * Decodes an Envelope message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Envelope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): envelope.Envelope;

        /**
         * Verifies an Envelope message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Envelope message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Envelope
         */
        public static fromObject(object: { [k: string]: any }): envelope.Envelope;

        /**
         * Creates a plain object from an Envelope message. Also converts values to other types if specified.
         * @param message Envelope
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: envelope.Envelope, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Envelope to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace error. */
export namespace error {

    /** Properties of an Error. */
    interface IError {

        /** Error message */
        message?: (string|null);

        /** Error code */
        code?: (number|Long|null);

        /** Error component */
        component?: (string|null);

        /** Error extra */
        extra?: ({ [k: string]: string }|null);
    }

    /** Represents an Error. */
    class Error implements IError {

        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        constructor(properties?: error.IError);

        /** Error message. */
        public message: string;

        /** Error code. */
        public code: (number|Long);

        /** Error component. */
        public component: string;

        /** Error extra. */
        public extra: { [k: string]: string };

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: error.IError): error.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link error.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: error.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link error.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: error.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): error.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): error.Error;

        /**
         * Verifies an Error message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Error
         */
        public static fromObject(object: { [k: string]: any }): error.Error;

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @param message Error
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: error.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Error to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace ethereum. */
export namespace ethereum {

    /** Properties of an Account. */
    interface IAccount {

        /** Account raw */
        raw?: (Uint8Array|null);
    }

    /** Represents an Account. */
    class Account implements IAccount {

        /**
         * Constructs a new Account.
         * @param [properties] Properties to set
         */
        constructor(properties?: ethereum.IAccount);

        /** Account raw. */
        public raw: Uint8Array;

        /**
         * Creates a new Account instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Account instance
         */
        public static create(properties?: ethereum.IAccount): ethereum.Account;

        /**
         * Encodes the specified Account message. Does not implicitly {@link ethereum.Account.verify|verify} messages.
         * @param message Account message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ethereum.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Account message, length delimited. Does not implicitly {@link ethereum.Account.verify|verify} messages.
         * @param message Account message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ethereum.IAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Account message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ethereum.Account;

        /**
         * Decodes an Account message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Account
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ethereum.Account;

        /**
         * Verifies an Account message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Account message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Account
         */
        public static fromObject(object: { [k: string]: any }): ethereum.Account;

        /**
         * Creates a plain object from an Account message. Also converts values to other types if specified.
         * @param message Account
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ethereum.Account, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Account to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Hash. */
    interface IHash {

        /** Hash raw */
        raw?: (Uint8Array|null);
    }

    /** Represents a Hash. */
    class Hash implements IHash {

        /**
         * Constructs a new Hash.
         * @param [properties] Properties to set
         */
        constructor(properties?: ethereum.IHash);

        /** Hash raw. */
        public raw: Uint8Array;

        /**
         * Creates a new Hash instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hash instance
         */
        public static create(properties?: ethereum.IHash): ethereum.Hash;

        /**
         * Encodes the specified Hash message. Does not implicitly {@link ethereum.Hash.verify|verify} messages.
         * @param message Hash message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ethereum.IHash, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hash message, length delimited. Does not implicitly {@link ethereum.Hash.verify|verify} messages.
         * @param message Hash message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ethereum.IHash, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hash message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hash
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ethereum.Hash;

        /**
         * Decodes a Hash message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hash
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ethereum.Hash;

        /**
         * Verifies a Hash message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Hash message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hash
         */
        public static fromObject(object: { [k: string]: any }): ethereum.Hash;

        /**
         * Creates a plain object from a Hash message. Also converts values to other types if specified.
         * @param message Hash
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ethereum.Hash, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hash to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Quantity. */
    interface IQuantity {

        /** Quantity raw */
        raw?: (Uint8Array|null);
    }

    /** Represents a Quantity. */
    class Quantity implements IQuantity {

        /**
         * Constructs a new Quantity.
         * @param [properties] Properties to set
         */
        constructor(properties?: ethereum.IQuantity);

        /** Quantity raw. */
        public raw: Uint8Array;

        /**
         * Creates a new Quantity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Quantity instance
         */
        public static create(properties?: ethereum.IQuantity): ethereum.Quantity;

        /**
         * Encodes the specified Quantity message. Does not implicitly {@link ethereum.Quantity.verify|verify} messages.
         * @param message Quantity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ethereum.IQuantity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Quantity message, length delimited. Does not implicitly {@link ethereum.Quantity.verify|verify} messages.
         * @param message Quantity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ethereum.IQuantity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Quantity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Quantity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ethereum.Quantity;

        /**
         * Decodes a Quantity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Quantity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ethereum.Quantity;

        /**
         * Verifies a Quantity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Quantity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Quantity
         */
        public static fromObject(object: { [k: string]: any }): ethereum.Quantity;

        /**
         * Creates a plain object from a Quantity message. Also converts values to other types if specified.
         * @param message Quantity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ethereum.Quantity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Quantity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Data. */
    interface IData {

        /** Data raw */
        raw?: (Uint8Array|null);
    }

    /** Represents a Data. */
    class Data implements IData {

        /**
         * Constructs a new Data.
         * @param [properties] Properties to set
         */
        constructor(properties?: ethereum.IData);

        /** Data raw. */
        public raw: Uint8Array;

        /**
         * Creates a new Data instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Data instance
         */
        public static create(properties?: ethereum.IData): ethereum.Data;

        /**
         * Encodes the specified Data message. Does not implicitly {@link ethereum.Data.verify|verify} messages.
         * @param message Data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ethereum.IData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Data message, length delimited. Does not implicitly {@link ethereum.Data.verify|verify} messages.
         * @param message Data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ethereum.IData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Data message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ethereum.Data;

        /**
         * Decodes a Data message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ethereum.Data;

        /**
         * Verifies a Data message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Data message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Data
         */
        public static fromObject(object: { [k: string]: any }): ethereum.Data;

        /**
         * Creates a plain object from a Data message. Also converts values to other types if specified.
         * @param message Data
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ethereum.Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Data to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Log. */
    interface ILog {

        /** Log address */
        address?: (ethereum.IAccount|null);

        /** Log topics */
        topics?: (ethereum.IHash[]|null);

        /** Log data */
        data?: (Uint8Array|null);

        /** Log event */
        event?: (string|null);

        /** Log decodedData */
        decodedData?: ({ [k: string]: string }|null);

        /** Log blockNumber */
        blockNumber?: (number|Long|null);

        /** Log txHash */
        txHash?: (ethereum.IHash|null);

        /** Log txIndex */
        txIndex?: (number|Long|null);

        /** Log blockHash */
        blockHash?: (ethereum.IHash|null);

        /** Log index */
        index?: (number|Long|null);

        /** Log removed */
        removed?: (boolean|null);
    }

    /** Represents a Log. */
    class Log implements ILog {

        /**
         * Constructs a new Log.
         * @param [properties] Properties to set
         */
        constructor(properties?: ethereum.ILog);

        /** Log address. */
        public address?: (ethereum.IAccount|null);

        /** Log topics. */
        public topics: ethereum.IHash[];

        /** Log data. */
        public data: Uint8Array;

        /** Log event. */
        public event: string;

        /** Log decodedData. */
        public decodedData: { [k: string]: string };

        /** Log blockNumber. */
        public blockNumber: (number|Long);

        /** Log txHash. */
        public txHash?: (ethereum.IHash|null);

        /** Log txIndex. */
        public txIndex: (number|Long);

        /** Log blockHash. */
        public blockHash?: (ethereum.IHash|null);

        /** Log index. */
        public index: (number|Long);

        /** Log removed. */
        public removed: boolean;

        /**
         * Creates a new Log instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Log instance
         */
        public static create(properties?: ethereum.ILog): ethereum.Log;

        /**
         * Encodes the specified Log message. Does not implicitly {@link ethereum.Log.verify|verify} messages.
         * @param message Log message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ethereum.ILog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Log message, length delimited. Does not implicitly {@link ethereum.Log.verify|verify} messages.
         * @param message Log message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ethereum.ILog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Log message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Log
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ethereum.Log;

        /**
         * Decodes a Log message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Log
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ethereum.Log;

        /**
         * Verifies a Log message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Log message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Log
         */
        public static fromObject(object: { [k: string]: any }): ethereum.Log;

        /**
         * Creates a plain object from a Log message. Also converts values to other types if specified.
         * @param message Log
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ethereum.Log, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Log to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Receipt. */
    interface IReceipt {

        /** Receipt txHash */
        txHash?: (ethereum.IHash|null);

        /** Receipt blockHash */
        blockHash?: (ethereum.IHash|null);

        /** Receipt blockNumber */
        blockNumber?: (number|Long|null);

        /** Receipt txIndex */
        txIndex?: (number|Long|null);

        /** Receipt contractAddress */
        contractAddress?: (ethereum.IAccount|null);

        /** Receipt postState */
        postState?: (Uint8Array|null);

        /** Receipt status */
        status?: (number|Long|null);

        /** Receipt bloom */
        bloom?: (Uint8Array|null);

        /** Receipt logs */
        logs?: (ethereum.ILog[]|null);

        /** Receipt gasUsed */
        gasUsed?: (number|Long|null);

        /** Receipt cumulativeGasUsed */
        cumulativeGasUsed?: (number|Long|null);
    }

    /** Represents a Receipt. */
    class Receipt implements IReceipt {

        /**
         * Constructs a new Receipt.
         * @param [properties] Properties to set
         */
        constructor(properties?: ethereum.IReceipt);

        /** Receipt txHash. */
        public txHash?: (ethereum.IHash|null);

        /** Receipt blockHash. */
        public blockHash?: (ethereum.IHash|null);

        /** Receipt blockNumber. */
        public blockNumber: (number|Long);

        /** Receipt txIndex. */
        public txIndex: (number|Long);

        /** Receipt contractAddress. */
        public contractAddress?: (ethereum.IAccount|null);

        /** Receipt postState. */
        public postState: Uint8Array;

        /** Receipt status. */
        public status: (number|Long);

        /** Receipt bloom. */
        public bloom: Uint8Array;

        /** Receipt logs. */
        public logs: ethereum.ILog[];

        /** Receipt gasUsed. */
        public gasUsed: (number|Long);

        /** Receipt cumulativeGasUsed. */
        public cumulativeGasUsed: (number|Long);

        /**
         * Creates a new Receipt instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Receipt instance
         */
        public static create(properties?: ethereum.IReceipt): ethereum.Receipt;

        /**
         * Encodes the specified Receipt message. Does not implicitly {@link ethereum.Receipt.verify|verify} messages.
         * @param message Receipt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ethereum.IReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Receipt message, length delimited. Does not implicitly {@link ethereum.Receipt.verify|verify} messages.
         * @param message Receipt message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ethereum.IReceipt, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Receipt message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Receipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ethereum.Receipt;

        /**
         * Decodes a Receipt message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Receipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ethereum.Receipt;

        /**
         * Verifies a Receipt message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Receipt message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Receipt
         */
        public static fromObject(object: { [k: string]: any }): ethereum.Receipt;

        /**
         * Creates a plain object from a Receipt message. Also converts values to other types if specified.
         * @param message Receipt
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ethereum.Receipt, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Receipt to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TxData. */
    interface ITxData {

        /** TxData nonce */
        nonce?: (number|Long|null);

        /** TxData to */
        to?: (ethereum.IAccount|null);

        /** TxData value */
        value?: (ethereum.IQuantity|null);

        /** TxData gas */
        gas?: (number|Long|null);

        /** TxData gasPrice */
        gasPrice?: (ethereum.IQuantity|null);

        /** TxData data */
        data?: (ethereum.IData|null);
    }

    /** Represents a TxData. */
    class TxData implements ITxData {

        /**
         * Constructs a new TxData.
         * @param [properties] Properties to set
         */
        constructor(properties?: ethereum.ITxData);

        /** TxData nonce. */
        public nonce: (number|Long);

        /** TxData to. */
        public to?: (ethereum.IAccount|null);

        /** TxData value. */
        public value?: (ethereum.IQuantity|null);

        /** TxData gas. */
        public gas: (number|Long);

        /** TxData gasPrice. */
        public gasPrice?: (ethereum.IQuantity|null);

        /** TxData data. */
        public data?: (ethereum.IData|null);

        /**
         * Creates a new TxData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TxData instance
         */
        public static create(properties?: ethereum.ITxData): ethereum.TxData;

        /**
         * Encodes the specified TxData message. Does not implicitly {@link ethereum.TxData.verify|verify} messages.
         * @param message TxData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ethereum.ITxData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TxData message, length delimited. Does not implicitly {@link ethereum.TxData.verify|verify} messages.
         * @param message TxData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ethereum.ITxData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TxData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TxData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ethereum.TxData;

        /**
         * Decodes a TxData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TxData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ethereum.TxData;

        /**
         * Verifies a TxData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TxData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TxData
         */
        public static fromObject(object: { [k: string]: any }): ethereum.TxData;

        /**
         * Creates a plain object from a TxData message. Also converts values to other types if specified.
         * @param message TxData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ethereum.TxData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TxData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Transaction. */
    interface ITransaction {

        /** Transaction txData */
        txData?: (ethereum.ITxData|null);

        /** Transaction raw */
        raw?: (ethereum.IData|null);

        /** Transaction hash */
        hash?: (ethereum.IHash|null);
    }

    /** Represents a Transaction. */
    class Transaction implements ITransaction {

        /**
         * Constructs a new Transaction.
         * @param [properties] Properties to set
         */
        constructor(properties?: ethereum.ITransaction);

        /** Transaction txData. */
        public txData?: (ethereum.ITxData|null);

        /** Transaction raw. */
        public raw?: (ethereum.IData|null);

        /** Transaction hash. */
        public hash?: (ethereum.IHash|null);

        /**
         * Creates a new Transaction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Transaction instance
         */
        public static create(properties?: ethereum.ITransaction): ethereum.Transaction;

        /**
         * Encodes the specified Transaction message. Does not implicitly {@link ethereum.Transaction.verify|verify} messages.
         * @param message Transaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ethereum.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Transaction message, length delimited. Does not implicitly {@link ethereum.Transaction.verify|verify} messages.
         * @param message Transaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ethereum.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Transaction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ethereum.Transaction;

        /**
         * Decodes a Transaction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ethereum.Transaction;

        /**
         * Verifies a Transaction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Transaction
         */
        public static fromObject(object: { [k: string]: any }): ethereum.Transaction;

        /**
         * Creates a plain object from a Transaction message. Also converts values to other types if specified.
         * @param message Transaction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ethereum.Transaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Transaction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace faucet. */
export namespace faucet {

    /** Represents a Faucet */
    class Faucet extends $protobuf.rpc.Service {

        /**
         * Constructs a new Faucet service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Faucet service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Faucet;

        /**
         * Calls Credit.
         * @param request CreditRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreditResponse
         */
        public credit(request: faucet.ICreditRequest, callback: faucet.Faucet.CreditCallback): void;

        /**
         * Calls Credit.
         * @param request CreditRequest message or plain object
         * @returns Promise
         */
        public credit(request: faucet.ICreditRequest): Promise<faucet.CreditResponse>;
    }

    namespace Faucet {

        /**
         * Callback as used by {@link faucet.Faucet#credit}.
         * @param error Error, if any
         * @param [response] CreditResponse
         */
        type CreditCallback = (error: (Error|null), response?: faucet.CreditResponse) => void;
    }

    /** Properties of a CreditRequest. */
    interface ICreditRequest {

        /** CreditRequest chain */
        chain?: (chain.IChain|null);

        /** CreditRequest beneficiary */
        beneficiary?: (ethereum.IAccount|null);

        /** CreditRequest creditor */
        creditor?: (ethereum.IAccount|null);

        /** CreditRequest amount */
        amount?: (ethereum.IQuantity|null);
    }

    /** Represents a CreditRequest. */
    class CreditRequest implements ICreditRequest {

        /**
         * Constructs a new CreditRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: faucet.ICreditRequest);

        /** CreditRequest chain. */
        public chain?: (chain.IChain|null);

        /** CreditRequest beneficiary. */
        public beneficiary?: (ethereum.IAccount|null);

        /** CreditRequest creditor. */
        public creditor?: (ethereum.IAccount|null);

        /** CreditRequest amount. */
        public amount?: (ethereum.IQuantity|null);

        /**
         * Creates a new CreditRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreditRequest instance
         */
        public static create(properties?: faucet.ICreditRequest): faucet.CreditRequest;

        /**
         * Encodes the specified CreditRequest message. Does not implicitly {@link faucet.CreditRequest.verify|verify} messages.
         * @param message CreditRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: faucet.ICreditRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreditRequest message, length delimited. Does not implicitly {@link faucet.CreditRequest.verify|verify} messages.
         * @param message CreditRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: faucet.ICreditRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreditRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreditRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): faucet.CreditRequest;

        /**
         * Decodes a CreditRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreditRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): faucet.CreditRequest;

        /**
         * Verifies a CreditRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreditRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreditRequest
         */
        public static fromObject(object: { [k: string]: any }): faucet.CreditRequest;

        /**
         * Creates a plain object from a CreditRequest message. Also converts values to other types if specified.
         * @param message CreditRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: faucet.CreditRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreditRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreditResponse. */
    interface ICreditResponse {

        /** CreditResponse creditor */
        creditor?: (ethereum.IAccount|null);

        /** CreditResponse amount */
        amount?: (ethereum.IQuantity|null);

        /** CreditResponse error */
        error?: (error.IError|null);
    }

    /** Represents a CreditResponse. */
    class CreditResponse implements ICreditResponse {

        /**
         * Constructs a new CreditResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: faucet.ICreditResponse);

        /** CreditResponse creditor. */
        public creditor?: (ethereum.IAccount|null);

        /** CreditResponse amount. */
        public amount?: (ethereum.IQuantity|null);

        /** CreditResponse error. */
        public error?: (error.IError|null);

        /**
         * Creates a new CreditResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreditResponse instance
         */
        public static create(properties?: faucet.ICreditResponse): faucet.CreditResponse;

        /**
         * Encodes the specified CreditResponse message. Does not implicitly {@link faucet.CreditResponse.verify|verify} messages.
         * @param message CreditResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: faucet.ICreditResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreditResponse message, length delimited. Does not implicitly {@link faucet.CreditResponse.verify|verify} messages.
         * @param message CreditResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: faucet.ICreditResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreditResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreditResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): faucet.CreditResponse;

        /**
         * Decodes a CreditResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreditResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): faucet.CreditResponse;

        /**
         * Verifies a CreditResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreditResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreditResponse
         */
        public static fromObject(object: { [k: string]: any }): faucet.CreditResponse;

        /**
         * Creates a plain object from a CreditResponse message. Also converts values to other types if specified.
         * @param message CreditResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: faucet.CreditResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreditResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
