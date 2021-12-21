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
        abi?: (string|null);

        /** Contract bytecode */
        bytecode?: (string|null);

        /** Contract methods */
        methods?: (abi.IMethod[]|null);

        /** Contract events */
        events?: (abi.IEvent[]|null);

        /** Contract deployedBytecode */
        deployedBytecode?: (string|null);
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
        public abi: string;

        /** Contract bytecode. */
        public bytecode: string;

        /** Contract methods. */
        public methods: abi.IMethod[];

        /** Contract events. */
        public events: abi.IEvent[];

        /** Contract deployedBytecode. */
        public deployedBytecode: string;

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
        abi?: (string|null);
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
        public abi: string;

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
        abi?: (string|null);
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
        public abi: string;

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

/** Namespace common. */
export namespace common {

    /** Properties of an AccountInstance. */
    interface IAccountInstance {

        /** AccountInstance chainId */
        chainId?: (string|null);

        /** AccountInstance account */
        account?: (string|null);
    }

    /** Represents an AccountInstance. */
    class AccountInstance implements IAccountInstance {

        /**
         * Constructs a new AccountInstance.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IAccountInstance);

        /** AccountInstance chainId. */
        public chainId: string;

        /** AccountInstance account. */
        public account: string;

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
        bytecodeHash?: (string|null);
    }

    /** Represents a DeleteArtifactRequest. */
    class DeleteArtifactRequest implements IDeleteArtifactRequest {

        /**
         * Constructs a new DeleteArtifactRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IDeleteArtifactRequest);

        /** DeleteArtifactRequest bytecodeHash. */
        public bytecodeHash: string;

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
        abi?: (string|null);
    }

    /** Represents a GetContractABIResponse. */
    class GetContractABIResponse implements IGetContractABIResponse {

        /**
         * Constructs a new GetContractABIResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetContractABIResponse);

        /** GetContractABIResponse abi. */
        public abi: string;

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
        bytecode?: (string|null);
    }

    /** Represents a GetContractBytecodeResponse. */
    class GetContractBytecodeResponse implements IGetContractBytecodeResponse {

        /**
         * Constructs a new GetContractBytecodeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetContractBytecodeResponse);

        /** GetContractBytecodeResponse bytecode. */
        public bytecode: string;

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
        deployedBytecode?: (string|null);
    }

    /** Represents a GetContractDeployedBytecodeResponse. */
    class GetContractDeployedBytecodeResponse implements IGetContractDeployedBytecodeResponse {

        /**
         * Constructs a new GetContractDeployedBytecodeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetContractDeployedBytecodeResponse);

        /** GetContractDeployedBytecodeResponse deployedBytecode. */
        public deployedBytecode: string;

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
        method?: (string|null);

        /** GetMethodsBySelectorResponse defaultMethods */
        defaultMethods?: (string[]|null);
    }

    /** Represents a GetMethodsBySelectorResponse. */
    class GetMethodsBySelectorResponse implements IGetMethodsBySelectorResponse {

        /**
         * Constructs a new GetMethodsBySelectorResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetMethodsBySelectorResponse);

        /** GetMethodsBySelectorResponse method. */
        public method: string;

        /** GetMethodsBySelectorResponse defaultMethods. */
        public defaultMethods: string[];

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
        sigHash?: (string|null);

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
        public sigHash: string;

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
        event?: (string|null);

        /** GetEventsBySigHashResponse defaultEvents */
        defaultEvents?: (string[]|null);
    }

    /** Represents a GetEventsBySigHashResponse. */
    class GetEventsBySigHashResponse implements IGetEventsBySigHashResponse {

        /**
         * Constructs a new GetEventsBySigHashResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: contractregistry.IGetEventsBySigHashResponse);

        /** GetEventsBySigHashResponse event. */
        public event: string;

        /** GetEventsBySigHashResponse defaultEvents. */
        public defaultEvents: string[];

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
        codeHash?: (string|null);
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
        public codeHash: string;

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

    /** Properties of a Log. */
    interface ILog {

        /** Log address */
        address?: (string|null);

        /** Log topics */
        topics?: (string[]|null);

        /** Log data */
        data?: (string|null);

        /** Log event */
        event?: (string|null);

        /** Log decodedData */
        decodedData?: ({ [k: string]: string }|null);

        /** Log blockNumber */
        blockNumber?: (number|Long|null);

        /** Log txHash */
        txHash?: (string|null);

        /** Log txIndex */
        txIndex?: (number|Long|null);

        /** Log blockHash */
        blockHash?: (string|null);

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
        public address: string;

        /** Log topics. */
        public topics: string[];

        /** Log data. */
        public data: string;

        /** Log event. */
        public event: string;

        /** Log decodedData. */
        public decodedData: { [k: string]: string };

        /** Log blockNumber. */
        public blockNumber: (number|Long);

        /** Log txHash. */
        public txHash: string;

        /** Log txIndex. */
        public txIndex: (number|Long);

        /** Log blockHash. */
        public blockHash: string;

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
        txHash?: (string|null);

        /** Receipt blockHash */
        blockHash?: (string|null);

        /** Receipt blockNumber */
        blockNumber?: (number|Long|null);

        /** Receipt txIndex */
        txIndex?: (number|Long|null);

        /** Receipt contractAddress */
        contractAddress?: (string|null);

        /** Receipt postState */
        postState?: (string|null);

        /** Receipt status */
        status?: (number|Long|null);

        /** Receipt bloom */
        bloom?: (string|null);

        /** Receipt logs */
        logs?: (ethereum.ILog[]|null);

        /** Receipt gasUsed */
        gasUsed?: (number|Long|null);

        /** Receipt cumulativeGasUsed */
        cumulativeGasUsed?: (number|Long|null);

        /** Receipt effectiveGasPrice */
        effectiveGasPrice?: (string|null);

        /** Receipt revertReason */
        revertReason?: (string|null);

        /** Receipt output */
        output?: (string|null);

        /** Receipt privateFrom */
        privateFrom?: (string|null);

        /** Receipt privateFor */
        privateFor?: (string[]|null);

        /** Receipt privacyGroupId */
        privacyGroupId?: (string|null);

        /** Receipt contractName */
        contractName?: (string|null);

        /** Receipt contractTag */
        contractTag?: (string|null);
    }

    /** Represents a Receipt. */
    class Receipt implements IReceipt {

        /**
         * Constructs a new Receipt.
         * @param [properties] Properties to set
         */
        constructor(properties?: ethereum.IReceipt);

        /** Receipt txHash. */
        public txHash: string;

        /** Receipt blockHash. */
        public blockHash: string;

        /** Receipt blockNumber. */
        public blockNumber: (number|Long);

        /** Receipt txIndex. */
        public txIndex: (number|Long);

        /** Receipt contractAddress. */
        public contractAddress: string;

        /** Receipt postState. */
        public postState: string;

        /** Receipt status. */
        public status: (number|Long);

        /** Receipt bloom. */
        public bloom: string;

        /** Receipt logs. */
        public logs: ethereum.ILog[];

        /** Receipt gasUsed. */
        public gasUsed: (number|Long);

        /** Receipt cumulativeGasUsed. */
        public cumulativeGasUsed: (number|Long);

        /** Receipt effectiveGasPrice. */
        public effectiveGasPrice: string;

        /** Receipt revertReason. */
        public revertReason: string;

        /** Receipt output. */
        public output: string;

        /** Receipt privateFrom. */
        public privateFrom: string;

        /** Receipt privateFor. */
        public privateFor: string[];

        /** Receipt privacyGroupId. */
        public privacyGroupId: string;

        /** Receipt contractName. */
        public contractName: string;

        /** Receipt contractTag. */
        public contractTag: string;

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

    /** Properties of a Transaction. */
    interface ITransaction {

        /** Transaction from */
        from?: (string|null);

        /** Transaction nonce */
        nonce?: (string|null);

        /** Transaction to */
        to?: (string|null);

        /** Transaction value */
        value?: (string|null);

        /** Transaction gas */
        gas?: (string|null);

        /** Transaction gasPrice */
        gasPrice?: (string|null);

        /** Transaction data */
        data?: (string|null);

        /** Transaction raw */
        raw?: (string|null);

        /** Transaction txHash */
        txHash?: (string|null);

        /** Transaction gasFeeCap */
        gasFeeCap?: (string|null);

        /** Transaction gasTipCap */
        gasTipCap?: (string|null);

        /** Transaction accessList */
        accessList?: (ethereum.IAccessTuple[]|null);

        /** Transaction txType */
        txType?: (string|null);
    }

    /** Represents a Transaction. */
    class Transaction implements ITransaction {

        /**
         * Constructs a new Transaction.
         * @param [properties] Properties to set
         */
        constructor(properties?: ethereum.ITransaction);

        /** Transaction from. */
        public from: string;

        /** Transaction nonce. */
        public nonce: string;

        /** Transaction to. */
        public to: string;

        /** Transaction value. */
        public value: string;

        /** Transaction gas. */
        public gas: string;

        /** Transaction gasPrice. */
        public gasPrice: string;

        /** Transaction data. */
        public data: string;

        /** Transaction raw. */
        public raw: string;

        /** Transaction txHash. */
        public txHash: string;

        /** Transaction gasFeeCap. */
        public gasFeeCap: string;

        /** Transaction gasTipCap. */
        public gasTipCap: string;

        /** Transaction accessList. */
        public accessList: ethereum.IAccessTuple[];

        /** Transaction txType. */
        public txType: string;

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

    /** Properties of an AccessTuple. */
    interface IAccessTuple {

        /** AccessTuple address */
        address?: (string|null);

        /** AccessTuple storageKeys */
        storageKeys?: (string[]|null);
    }

    /** Represents an AccessTuple. */
    class AccessTuple implements IAccessTuple {

        /**
         * Constructs a new AccessTuple.
         * @param [properties] Properties to set
         */
        constructor(properties?: ethereum.IAccessTuple);

        /** AccessTuple address. */
        public address: string;

        /** AccessTuple storageKeys. */
        public storageKeys: string[];

        /**
         * Creates a new AccessTuple instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccessTuple instance
         */
        public static create(properties?: ethereum.IAccessTuple): ethereum.AccessTuple;

        /**
         * Encodes the specified AccessTuple message. Does not implicitly {@link ethereum.AccessTuple.verify|verify} messages.
         * @param message AccessTuple message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ethereum.IAccessTuple, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccessTuple message, length delimited. Does not implicitly {@link ethereum.AccessTuple.verify|verify} messages.
         * @param message AccessTuple message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ethereum.IAccessTuple, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccessTuple message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccessTuple
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ethereum.AccessTuple;

        /**
         * Decodes an AccessTuple message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccessTuple
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ethereum.AccessTuple;

        /**
         * Verifies an AccessTuple message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccessTuple message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccessTuple
         */
        public static fromObject(object: { [k: string]: any }): ethereum.AccessTuple;

        /**
         * Creates a plain object from an AccessTuple message. Also converts values to other types if specified.
         * @param message AccessTuple
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ethereum.AccessTuple, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccessTuple to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace tx. */
export namespace tx {

    /** Properties of a TxRequest. */
    interface ITxRequest {

        /** TxRequest headers */
        headers?: ({ [k: string]: string }|null);

        /** TxRequest chain */
        chain?: (string|null);

        /** TxRequest method */
        method?: (tx.Method|null);

        /** TxRequest params */
        params?: (tx.IParams|null);

        /** TxRequest id */
        id?: (string|null);

        /** TxRequest contextLabels */
        contextLabels?: ({ [k: string]: string }|null);

        /** TxRequest jobType */
        jobType?: (tx.JobType|null);
    }

    /** Represents a TxRequest. */
    class TxRequest implements ITxRequest {

        /**
         * Constructs a new TxRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: tx.ITxRequest);

        /** TxRequest headers. */
        public headers: { [k: string]: string };

        /** TxRequest chain. */
        public chain: string;

        /** TxRequest method. */
        public method: tx.Method;

        /** TxRequest params. */
        public params?: (tx.IParams|null);

        /** TxRequest id. */
        public id: string;

        /** TxRequest contextLabels. */
        public contextLabels: { [k: string]: string };

        /** TxRequest jobType. */
        public jobType: tx.JobType;

        /**
         * Creates a new TxRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TxRequest instance
         */
        public static create(properties?: tx.ITxRequest): tx.TxRequest;

        /**
         * Encodes the specified TxRequest message. Does not implicitly {@link tx.TxRequest.verify|verify} messages.
         * @param message TxRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tx.ITxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TxRequest message, length delimited. Does not implicitly {@link tx.TxRequest.verify|verify} messages.
         * @param message TxRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tx.ITxRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TxRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TxRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tx.TxRequest;

        /**
         * Decodes a TxRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TxRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tx.TxRequest;

        /**
         * Verifies a TxRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TxRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TxRequest
         */
        public static fromObject(object: { [k: string]: any }): tx.TxRequest;

        /**
         * Creates a plain object from a TxRequest message. Also converts values to other types if specified.
         * @param message TxRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tx.TxRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TxRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TxEnvelope. */
    interface ITxEnvelope {

        /** TxEnvelope txRequest */
        txRequest?: (tx.ITxRequest|null);

        /** TxEnvelope txResponse */
        txResponse?: (tx.ITxResponse|null);

        /** TxEnvelope internalLabels */
        internalLabels?: ({ [k: string]: string }|null);
    }

    /** Represents a TxEnvelope. */
    class TxEnvelope implements ITxEnvelope {

        /**
         * Constructs a new TxEnvelope.
         * @param [properties] Properties to set
         */
        constructor(properties?: tx.ITxEnvelope);

        /** TxEnvelope txRequest. */
        public txRequest?: (tx.ITxRequest|null);

        /** TxEnvelope txResponse. */
        public txResponse?: (tx.ITxResponse|null);

        /** TxEnvelope internalLabels. */
        public internalLabels: { [k: string]: string };

        /** TxEnvelope msg. */
        public msg?: ("txRequest"|"txResponse");

        /**
         * Creates a new TxEnvelope instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TxEnvelope instance
         */
        public static create(properties?: tx.ITxEnvelope): tx.TxEnvelope;

        /**
         * Encodes the specified TxEnvelope message. Does not implicitly {@link tx.TxEnvelope.verify|verify} messages.
         * @param message TxEnvelope message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tx.ITxEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TxEnvelope message, length delimited. Does not implicitly {@link tx.TxEnvelope.verify|verify} messages.
         * @param message TxEnvelope message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tx.ITxEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TxEnvelope message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TxEnvelope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tx.TxEnvelope;

        /**
         * Decodes a TxEnvelope message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TxEnvelope
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tx.TxEnvelope;

        /**
         * Verifies a TxEnvelope message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TxEnvelope message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TxEnvelope
         */
        public static fromObject(object: { [k: string]: any }): tx.TxEnvelope;

        /**
         * Creates a plain object from a TxEnvelope message. Also converts values to other types if specified.
         * @param message TxEnvelope
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tx.TxEnvelope, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TxEnvelope to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Method enum. */
    enum Method {
        ETH_SENDRAWTRANSACTION = 0,
        ETH_SENDPRIVATETRANSACTION = 1,
        ETH_SENDRAWPRIVATETRANSACTION = 2,
        EEA_SENDPRIVATETRANSACTION = 3
    }

    /** JobType enum. */
    enum JobType {
        ETH_TX = 0,
        ETH_RAW_TX = 1,
        ETH_EEA_MARKING_TX = 2,
        ETH_EEA_PRIVATE_TX = 3,
        ETH_TESSERA_MARKING_TX = 4,
        ETH_TESSERA_PRIVATE_TX = 5
    }

    /** Properties of a Params. */
    interface IParams {

        /** Params from */
        from?: (string|null);

        /** Params to */
        to?: (string|null);

        /** Params gas */
        gas?: (string|null);

        /** Params gasPrice */
        gasPrice?: (string|null);

        /** Params gasFeeCap */
        gasFeeCap?: (string|null);

        /** Params gasTipCap */
        gasTipCap?: (string|null);

        /** Params value */
        value?: (string|null);

        /** Params nonce */
        nonce?: (string|null);

        /** Params data */
        data?: (string|null);

        /** Params transactionType */
        transactionType?: (string|null);

        /** Params accessList */
        accessList?: (ethereum.IAccessTuple[]|null);

        /** Params raw */
        raw?: (string|null);

        /** Params contract */
        contract?: (string|null);

        /** Params methodSignature */
        methodSignature?: (string|null);

        /** Params args */
        args?: (string[]|null);

        /** Params privateFor */
        privateFor?: (string[]|null);

        /** Params privateFrom */
        privateFrom?: (string|null);

        /** Params privateTxType */
        privateTxType?: (string|null);

        /** Params privacyGroupId */
        privacyGroupId?: (string|null);

        /** Params mandatoryFor */
        mandatoryFor?: (string[]|null);

        /** Params privacyFlag */
        privacyFlag?: (number|null);
    }

    /** Represents a Params. */
    class Params implements IParams {

        /**
         * Constructs a new Params.
         * @param [properties] Properties to set
         */
        constructor(properties?: tx.IParams);

        /** Params from. */
        public from: string;

        /** Params to. */
        public to: string;

        /** Params gas. */
        public gas: string;

        /** Params gasPrice. */
        public gasPrice: string;

        /** Params gasFeeCap. */
        public gasFeeCap: string;

        /** Params gasTipCap. */
        public gasTipCap: string;

        /** Params value. */
        public value: string;

        /** Params nonce. */
        public nonce: string;

        /** Params data. */
        public data: string;

        /** Params transactionType. */
        public transactionType: string;

        /** Params accessList. */
        public accessList: ethereum.IAccessTuple[];

        /** Params raw. */
        public raw: string;

        /** Params contract. */
        public contract: string;

        /** Params methodSignature. */
        public methodSignature: string;

        /** Params args. */
        public args: string[];

        /** Params privateFor. */
        public privateFor: string[];

        /** Params privateFrom. */
        public privateFrom: string;

        /** Params privateTxType. */
        public privateTxType: string;

        /** Params privacyGroupId. */
        public privacyGroupId: string;

        /** Params mandatoryFor. */
        public mandatoryFor: string[];

        /** Params privacyFlag. */
        public privacyFlag: number;

        /**
         * Creates a new Params instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Params instance
         */
        public static create(properties?: tx.IParams): tx.Params;

        /**
         * Encodes the specified Params message. Does not implicitly {@link tx.Params.verify|verify} messages.
         * @param message Params message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tx.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Params message, length delimited. Does not implicitly {@link tx.Params.verify|verify} messages.
         * @param message Params message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tx.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Params message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Params
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tx.Params;

        /**
         * Decodes a Params message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Params
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tx.Params;

        /**
         * Verifies a Params message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Params message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Params
         */
        public static fromObject(object: { [k: string]: any }): tx.Params;

        /**
         * Creates a plain object from a Params message. Also converts values to other types if specified.
         * @param message Params
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tx.Params, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Params to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TxResponse. */
    interface ITxResponse {

        /** TxResponse headers */
        headers?: ({ [k: string]: string }|null);

        /** TxResponse id */
        id?: (string|null);

        /** TxResponse jobUUID */
        jobUUID?: (string|null);

        /** TxResponse contextLabels */
        contextLabels?: ({ [k: string]: string }|null);

        /** TxResponse transaction */
        transaction?: (ethereum.ITransaction|null);

        /** TxResponse receipt */
        receipt?: (ethereum.IReceipt|null);

        /** TxResponse chain */
        chain?: (string|null);

        /** TxResponse errors */
        errors?: (error.IError[]|null);
    }

    /** Represents a TxResponse. */
    class TxResponse implements ITxResponse {

        /**
         * Constructs a new TxResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: tx.ITxResponse);

        /** TxResponse headers. */
        public headers: { [k: string]: string };

        /** TxResponse id. */
        public id: string;

        /** TxResponse jobUUID. */
        public jobUUID: string;

        /** TxResponse contextLabels. */
        public contextLabels: { [k: string]: string };

        /** TxResponse transaction. */
        public transaction?: (ethereum.ITransaction|null);

        /** TxResponse receipt. */
        public receipt?: (ethereum.IReceipt|null);

        /** TxResponse chain. */
        public chain: string;

        /** TxResponse errors. */
        public errors: error.IError[];

        /**
         * Creates a new TxResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TxResponse instance
         */
        public static create(properties?: tx.ITxResponse): tx.TxResponse;

        /**
         * Encodes the specified TxResponse message. Does not implicitly {@link tx.TxResponse.verify|verify} messages.
         * @param message TxResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: tx.ITxResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TxResponse message, length delimited. Does not implicitly {@link tx.TxResponse.verify|verify} messages.
         * @param message TxResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: tx.ITxResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TxResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TxResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): tx.TxResponse;

        /**
         * Decodes a TxResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TxResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): tx.TxResponse;

        /**
         * Verifies a TxResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TxResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TxResponse
         */
        public static fromObject(object: { [k: string]: any }): tx.TxResponse;

        /**
         * Creates a plain object from a TxResponse message. Also converts values to other types if specified.
         * @param message TxResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: tx.TxResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TxResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
