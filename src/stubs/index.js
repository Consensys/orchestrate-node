/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.abi = (function() {
    
        /**
         * Namespace abi.
         * @exports abi
         * @namespace
         */
        var abi = {};
    
        abi.ContractId = (function() {
    
            /**
             * Properties of a ContractId.
             * @memberof abi
             * @interface IContractId
             * @property {string|null} [registry] ContractId registry
             * @property {string|null} [name] ContractId name
             * @property {string|null} [tag] ContractId tag
             */
    
            /**
             * Constructs a new ContractId.
             * @memberof abi
             * @classdesc Represents a ContractId.
             * @implements IContractId
             * @constructor
             * @param {abi.IContractId=} [properties] Properties to set
             */
            function ContractId(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ContractId registry.
             * @member {string} registry
             * @memberof abi.ContractId
             * @instance
             */
            ContractId.prototype.registry = "";
    
            /**
             * ContractId name.
             * @member {string} name
             * @memberof abi.ContractId
             * @instance
             */
            ContractId.prototype.name = "";
    
            /**
             * ContractId tag.
             * @member {string} tag
             * @memberof abi.ContractId
             * @instance
             */
            ContractId.prototype.tag = "";
    
            /**
             * Creates a new ContractId instance using the specified properties.
             * @function create
             * @memberof abi.ContractId
             * @static
             * @param {abi.IContractId=} [properties] Properties to set
             * @returns {abi.ContractId} ContractId instance
             */
            ContractId.create = function create(properties) {
                return new ContractId(properties);
            };
    
            /**
             * Encodes the specified ContractId message. Does not implicitly {@link abi.ContractId.verify|verify} messages.
             * @function encode
             * @memberof abi.ContractId
             * @static
             * @param {abi.IContractId} message ContractId message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ContractId.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.registry != null && message.hasOwnProperty("registry"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.registry);
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.tag != null && message.hasOwnProperty("tag"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.tag);
                return writer;
            };
    
            /**
             * Encodes the specified ContractId message, length delimited. Does not implicitly {@link abi.ContractId.verify|verify} messages.
             * @function encodeDelimited
             * @memberof abi.ContractId
             * @static
             * @param {abi.IContractId} message ContractId message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ContractId.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ContractId message from the specified reader or buffer.
             * @function decode
             * @memberof abi.ContractId
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {abi.ContractId} ContractId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ContractId.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.abi.ContractId();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.registry = reader.string();
                        break;
                    case 2:
                        message.name = reader.string();
                        break;
                    case 3:
                        message.tag = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ContractId message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof abi.ContractId
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {abi.ContractId} ContractId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ContractId.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ContractId message.
             * @function verify
             * @memberof abi.ContractId
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ContractId.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.registry != null && message.hasOwnProperty("registry"))
                    if (!$util.isString(message.registry))
                        return "registry: string expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.tag != null && message.hasOwnProperty("tag"))
                    if (!$util.isString(message.tag))
                        return "tag: string expected";
                return null;
            };
    
            /**
             * Creates a ContractId message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof abi.ContractId
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {abi.ContractId} ContractId
             */
            ContractId.fromObject = function fromObject(object) {
                if (object instanceof $root.abi.ContractId)
                    return object;
                var message = new $root.abi.ContractId();
                if (object.registry != null)
                    message.registry = String(object.registry);
                if (object.name != null)
                    message.name = String(object.name);
                if (object.tag != null)
                    message.tag = String(object.tag);
                return message;
            };
    
            /**
             * Creates a plain object from a ContractId message. Also converts values to other types if specified.
             * @function toObject
             * @memberof abi.ContractId
             * @static
             * @param {abi.ContractId} message ContractId
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ContractId.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.registry = "";
                    object.name = "";
                    object.tag = "";
                }
                if (message.registry != null && message.hasOwnProperty("registry"))
                    object.registry = message.registry;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.tag != null && message.hasOwnProperty("tag"))
                    object.tag = message.tag;
                return object;
            };
    
            /**
             * Converts this ContractId to JSON.
             * @function toJSON
             * @memberof abi.ContractId
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ContractId.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ContractId;
        })();
    
        abi.Contract = (function() {
    
            /**
             * Properties of a Contract.
             * @memberof abi
             * @interface IContract
             * @property {abi.IContractId|null} [id] Contract id
             * @property {string|null} [abi] Contract abi
             * @property {string|null} [bytecode] Contract bytecode
             * @property {Array.<abi.IMethod>|null} [methods] Contract methods
             * @property {Array.<abi.IEvent>|null} [events] Contract events
             * @property {string|null} [deployedBytecode] Contract deployedBytecode
             */
    
            /**
             * Constructs a new Contract.
             * @memberof abi
             * @classdesc Represents a Contract.
             * @implements IContract
             * @constructor
             * @param {abi.IContract=} [properties] Properties to set
             */
            function Contract(properties) {
                this.methods = [];
                this.events = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Contract id.
             * @member {abi.IContractId|null|undefined} id
             * @memberof abi.Contract
             * @instance
             */
            Contract.prototype.id = null;
    
            /**
             * Contract abi.
             * @member {string} abi
             * @memberof abi.Contract
             * @instance
             */
            Contract.prototype.abi = "";
    
            /**
             * Contract bytecode.
             * @member {string} bytecode
             * @memberof abi.Contract
             * @instance
             */
            Contract.prototype.bytecode = "";
    
            /**
             * Contract methods.
             * @member {Array.<abi.IMethod>} methods
             * @memberof abi.Contract
             * @instance
             */
            Contract.prototype.methods = $util.emptyArray;
    
            /**
             * Contract events.
             * @member {Array.<abi.IEvent>} events
             * @memberof abi.Contract
             * @instance
             */
            Contract.prototype.events = $util.emptyArray;
    
            /**
             * Contract deployedBytecode.
             * @member {string} deployedBytecode
             * @memberof abi.Contract
             * @instance
             */
            Contract.prototype.deployedBytecode = "";
    
            /**
             * Creates a new Contract instance using the specified properties.
             * @function create
             * @memberof abi.Contract
             * @static
             * @param {abi.IContract=} [properties] Properties to set
             * @returns {abi.Contract} Contract instance
             */
            Contract.create = function create(properties) {
                return new Contract(properties);
            };
    
            /**
             * Encodes the specified Contract message. Does not implicitly {@link abi.Contract.verify|verify} messages.
             * @function encode
             * @memberof abi.Contract
             * @static
             * @param {abi.IContract} message Contract message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Contract.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    $root.abi.ContractId.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.abi != null && message.hasOwnProperty("abi"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.abi);
                if (message.bytecode != null && message.hasOwnProperty("bytecode"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.bytecode);
                if (message.methods != null && message.methods.length)
                    for (var i = 0; i < message.methods.length; ++i)
                        $root.abi.Method.encode(message.methods[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.events != null && message.events.length)
                    for (var i = 0; i < message.events.length; ++i)
                        $root.abi.Event.encode(message.events[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.deployedBytecode != null && message.hasOwnProperty("deployedBytecode"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.deployedBytecode);
                return writer;
            };
    
            /**
             * Encodes the specified Contract message, length delimited. Does not implicitly {@link abi.Contract.verify|verify} messages.
             * @function encodeDelimited
             * @memberof abi.Contract
             * @static
             * @param {abi.IContract} message Contract message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Contract.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Contract message from the specified reader or buffer.
             * @function decode
             * @memberof abi.Contract
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {abi.Contract} Contract
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Contract.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.abi.Contract();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = $root.abi.ContractId.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.abi = reader.string();
                        break;
                    case 3:
                        message.bytecode = reader.string();
                        break;
                    case 4:
                        if (!(message.methods && message.methods.length))
                            message.methods = [];
                        message.methods.push($root.abi.Method.decode(reader, reader.uint32()));
                        break;
                    case 5:
                        if (!(message.events && message.events.length))
                            message.events = [];
                        message.events.push($root.abi.Event.decode(reader, reader.uint32()));
                        break;
                    case 6:
                        message.deployedBytecode = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Contract message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof abi.Contract
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {abi.Contract} Contract
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Contract.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Contract message.
             * @function verify
             * @memberof abi.Contract
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Contract.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id")) {
                    var error = $root.abi.ContractId.verify(message.id);
                    if (error)
                        return "id." + error;
                }
                if (message.abi != null && message.hasOwnProperty("abi"))
                    if (!$util.isString(message.abi))
                        return "abi: string expected";
                if (message.bytecode != null && message.hasOwnProperty("bytecode"))
                    if (!$util.isString(message.bytecode))
                        return "bytecode: string expected";
                if (message.methods != null && message.hasOwnProperty("methods")) {
                    if (!Array.isArray(message.methods))
                        return "methods: array expected";
                    for (var i = 0; i < message.methods.length; ++i) {
                        var error = $root.abi.Method.verify(message.methods[i]);
                        if (error)
                            return "methods." + error;
                    }
                }
                if (message.events != null && message.hasOwnProperty("events")) {
                    if (!Array.isArray(message.events))
                        return "events: array expected";
                    for (var i = 0; i < message.events.length; ++i) {
                        var error = $root.abi.Event.verify(message.events[i]);
                        if (error)
                            return "events." + error;
                    }
                }
                if (message.deployedBytecode != null && message.hasOwnProperty("deployedBytecode"))
                    if (!$util.isString(message.deployedBytecode))
                        return "deployedBytecode: string expected";
                return null;
            };
    
            /**
             * Creates a Contract message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof abi.Contract
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {abi.Contract} Contract
             */
            Contract.fromObject = function fromObject(object) {
                if (object instanceof $root.abi.Contract)
                    return object;
                var message = new $root.abi.Contract();
                if (object.id != null) {
                    if (typeof object.id !== "object")
                        throw TypeError(".abi.Contract.id: object expected");
                    message.id = $root.abi.ContractId.fromObject(object.id);
                }
                if (object.abi != null)
                    message.abi = String(object.abi);
                if (object.bytecode != null)
                    message.bytecode = String(object.bytecode);
                if (object.methods) {
                    if (!Array.isArray(object.methods))
                        throw TypeError(".abi.Contract.methods: array expected");
                    message.methods = [];
                    for (var i = 0; i < object.methods.length; ++i) {
                        if (typeof object.methods[i] !== "object")
                            throw TypeError(".abi.Contract.methods: object expected");
                        message.methods[i] = $root.abi.Method.fromObject(object.methods[i]);
                    }
                }
                if (object.events) {
                    if (!Array.isArray(object.events))
                        throw TypeError(".abi.Contract.events: array expected");
                    message.events = [];
                    for (var i = 0; i < object.events.length; ++i) {
                        if (typeof object.events[i] !== "object")
                            throw TypeError(".abi.Contract.events: object expected");
                        message.events[i] = $root.abi.Event.fromObject(object.events[i]);
                    }
                }
                if (object.deployedBytecode != null)
                    message.deployedBytecode = String(object.deployedBytecode);
                return message;
            };
    
            /**
             * Creates a plain object from a Contract message. Also converts values to other types if specified.
             * @function toObject
             * @memberof abi.Contract
             * @static
             * @param {abi.Contract} message Contract
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Contract.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.methods = [];
                    object.events = [];
                }
                if (options.defaults) {
                    object.id = null;
                    object.abi = "";
                    object.bytecode = "";
                    object.deployedBytecode = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = $root.abi.ContractId.toObject(message.id, options);
                if (message.abi != null && message.hasOwnProperty("abi"))
                    object.abi = message.abi;
                if (message.bytecode != null && message.hasOwnProperty("bytecode"))
                    object.bytecode = message.bytecode;
                if (message.methods && message.methods.length) {
                    object.methods = [];
                    for (var j = 0; j < message.methods.length; ++j)
                        object.methods[j] = $root.abi.Method.toObject(message.methods[j], options);
                }
                if (message.events && message.events.length) {
                    object.events = [];
                    for (var j = 0; j < message.events.length; ++j)
                        object.events[j] = $root.abi.Event.toObject(message.events[j], options);
                }
                if (message.deployedBytecode != null && message.hasOwnProperty("deployedBytecode"))
                    object.deployedBytecode = message.deployedBytecode;
                return object;
            };
    
            /**
             * Converts this Contract to JSON.
             * @function toJSON
             * @memberof abi.Contract
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Contract.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Contract;
        })();
    
        abi.Method = (function() {
    
            /**
             * Properties of a Method.
             * @memberof abi
             * @interface IMethod
             * @property {string|null} [signature] Method signature
             * @property {string|null} [abi] Method abi
             */
    
            /**
             * Constructs a new Method.
             * @memberof abi
             * @classdesc Represents a Method.
             * @implements IMethod
             * @constructor
             * @param {abi.IMethod=} [properties] Properties to set
             */
            function Method(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Method signature.
             * @member {string} signature
             * @memberof abi.Method
             * @instance
             */
            Method.prototype.signature = "";
    
            /**
             * Method abi.
             * @member {string} abi
             * @memberof abi.Method
             * @instance
             */
            Method.prototype.abi = "";
    
            /**
             * Creates a new Method instance using the specified properties.
             * @function create
             * @memberof abi.Method
             * @static
             * @param {abi.IMethod=} [properties] Properties to set
             * @returns {abi.Method} Method instance
             */
            Method.create = function create(properties) {
                return new Method(properties);
            };
    
            /**
             * Encodes the specified Method message. Does not implicitly {@link abi.Method.verify|verify} messages.
             * @function encode
             * @memberof abi.Method
             * @static
             * @param {abi.IMethod} message Method message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Method.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.signature != null && message.hasOwnProperty("signature"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.signature);
                if (message.abi != null && message.hasOwnProperty("abi"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.abi);
                return writer;
            };
    
            /**
             * Encodes the specified Method message, length delimited. Does not implicitly {@link abi.Method.verify|verify} messages.
             * @function encodeDelimited
             * @memberof abi.Method
             * @static
             * @param {abi.IMethod} message Method message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Method.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Method message from the specified reader or buffer.
             * @function decode
             * @memberof abi.Method
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {abi.Method} Method
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Method.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.abi.Method();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.signature = reader.string();
                        break;
                    case 2:
                        message.abi = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Method message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof abi.Method
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {abi.Method} Method
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Method.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Method message.
             * @function verify
             * @memberof abi.Method
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Method.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.signature != null && message.hasOwnProperty("signature"))
                    if (!$util.isString(message.signature))
                        return "signature: string expected";
                if (message.abi != null && message.hasOwnProperty("abi"))
                    if (!$util.isString(message.abi))
                        return "abi: string expected";
                return null;
            };
    
            /**
             * Creates a Method message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof abi.Method
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {abi.Method} Method
             */
            Method.fromObject = function fromObject(object) {
                if (object instanceof $root.abi.Method)
                    return object;
                var message = new $root.abi.Method();
                if (object.signature != null)
                    message.signature = String(object.signature);
                if (object.abi != null)
                    message.abi = String(object.abi);
                return message;
            };
    
            /**
             * Creates a plain object from a Method message. Also converts values to other types if specified.
             * @function toObject
             * @memberof abi.Method
             * @static
             * @param {abi.Method} message Method
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Method.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.signature = "";
                    object.abi = "";
                }
                if (message.signature != null && message.hasOwnProperty("signature"))
                    object.signature = message.signature;
                if (message.abi != null && message.hasOwnProperty("abi"))
                    object.abi = message.abi;
                return object;
            };
    
            /**
             * Converts this Method to JSON.
             * @function toJSON
             * @memberof abi.Method
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Method.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Method;
        })();
    
        abi.Event = (function() {
    
            /**
             * Properties of an Event.
             * @memberof abi
             * @interface IEvent
             * @property {string|null} [signature] Event signature
             * @property {string|null} [abi] Event abi
             */
    
            /**
             * Constructs a new Event.
             * @memberof abi
             * @classdesc Represents an Event.
             * @implements IEvent
             * @constructor
             * @param {abi.IEvent=} [properties] Properties to set
             */
            function Event(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Event signature.
             * @member {string} signature
             * @memberof abi.Event
             * @instance
             */
            Event.prototype.signature = "";
    
            /**
             * Event abi.
             * @member {string} abi
             * @memberof abi.Event
             * @instance
             */
            Event.prototype.abi = "";
    
            /**
             * Creates a new Event instance using the specified properties.
             * @function create
             * @memberof abi.Event
             * @static
             * @param {abi.IEvent=} [properties] Properties to set
             * @returns {abi.Event} Event instance
             */
            Event.create = function create(properties) {
                return new Event(properties);
            };
    
            /**
             * Encodes the specified Event message. Does not implicitly {@link abi.Event.verify|verify} messages.
             * @function encode
             * @memberof abi.Event
             * @static
             * @param {abi.IEvent} message Event message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Event.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.signature != null && message.hasOwnProperty("signature"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.signature);
                if (message.abi != null && message.hasOwnProperty("abi"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.abi);
                return writer;
            };
    
            /**
             * Encodes the specified Event message, length delimited. Does not implicitly {@link abi.Event.verify|verify} messages.
             * @function encodeDelimited
             * @memberof abi.Event
             * @static
             * @param {abi.IEvent} message Event message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Event.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Event message from the specified reader or buffer.
             * @function decode
             * @memberof abi.Event
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {abi.Event} Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Event.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.abi.Event();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.signature = reader.string();
                        break;
                    case 2:
                        message.abi = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Event message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof abi.Event
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {abi.Event} Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Event.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Event message.
             * @function verify
             * @memberof abi.Event
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Event.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.signature != null && message.hasOwnProperty("signature"))
                    if (!$util.isString(message.signature))
                        return "signature: string expected";
                if (message.abi != null && message.hasOwnProperty("abi"))
                    if (!$util.isString(message.abi))
                        return "abi: string expected";
                return null;
            };
    
            /**
             * Creates an Event message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof abi.Event
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {abi.Event} Event
             */
            Event.fromObject = function fromObject(object) {
                if (object instanceof $root.abi.Event)
                    return object;
                var message = new $root.abi.Event();
                if (object.signature != null)
                    message.signature = String(object.signature);
                if (object.abi != null)
                    message.abi = String(object.abi);
                return message;
            };
    
            /**
             * Creates a plain object from an Event message. Also converts values to other types if specified.
             * @function toObject
             * @memberof abi.Event
             * @static
             * @param {abi.Event} message Event
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Event.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.signature = "";
                    object.abi = "";
                }
                if (message.signature != null && message.hasOwnProperty("signature"))
                    object.signature = message.signature;
                if (message.abi != null && message.hasOwnProperty("abi"))
                    object.abi = message.abi;
                return object;
            };
    
            /**
             * Converts this Event to JSON.
             * @function toJSON
             * @memberof abi.Event
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Event.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Event;
        })();
    
        return abi;
    })();
    
    $root.common = (function() {
    
        /**
         * Namespace common.
         * @exports common
         * @namespace
         */
        var common = {};
    
        common.AccountInstance = (function() {
    
            /**
             * Properties of an AccountInstance.
             * @memberof common
             * @interface IAccountInstance
             * @property {string|null} [chainId] AccountInstance chainId
             * @property {string|null} [account] AccountInstance account
             */
    
            /**
             * Constructs a new AccountInstance.
             * @memberof common
             * @classdesc Represents an AccountInstance.
             * @implements IAccountInstance
             * @constructor
             * @param {common.IAccountInstance=} [properties] Properties to set
             */
            function AccountInstance(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AccountInstance chainId.
             * @member {string} chainId
             * @memberof common.AccountInstance
             * @instance
             */
            AccountInstance.prototype.chainId = "";
    
            /**
             * AccountInstance account.
             * @member {string} account
             * @memberof common.AccountInstance
             * @instance
             */
            AccountInstance.prototype.account = "";
    
            /**
             * Creates a new AccountInstance instance using the specified properties.
             * @function create
             * @memberof common.AccountInstance
             * @static
             * @param {common.IAccountInstance=} [properties] Properties to set
             * @returns {common.AccountInstance} AccountInstance instance
             */
            AccountInstance.create = function create(properties) {
                return new AccountInstance(properties);
            };
    
            /**
             * Encodes the specified AccountInstance message. Does not implicitly {@link common.AccountInstance.verify|verify} messages.
             * @function encode
             * @memberof common.AccountInstance
             * @static
             * @param {common.IAccountInstance} message AccountInstance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AccountInstance.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.chainId != null && message.hasOwnProperty("chainId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.chainId);
                if (message.account != null && message.hasOwnProperty("account"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.account);
                return writer;
            };
    
            /**
             * Encodes the specified AccountInstance message, length delimited. Does not implicitly {@link common.AccountInstance.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.AccountInstance
             * @static
             * @param {common.IAccountInstance} message AccountInstance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AccountInstance.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AccountInstance message from the specified reader or buffer.
             * @function decode
             * @memberof common.AccountInstance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.AccountInstance} AccountInstance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AccountInstance.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.AccountInstance();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.chainId = reader.string();
                        break;
                    case 2:
                        message.account = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an AccountInstance message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.AccountInstance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.AccountInstance} AccountInstance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AccountInstance.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AccountInstance message.
             * @function verify
             * @memberof common.AccountInstance
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AccountInstance.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.chainId != null && message.hasOwnProperty("chainId"))
                    if (!$util.isString(message.chainId))
                        return "chainId: string expected";
                if (message.account != null && message.hasOwnProperty("account"))
                    if (!$util.isString(message.account))
                        return "account: string expected";
                return null;
            };
    
            /**
             * Creates an AccountInstance message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof common.AccountInstance
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {common.AccountInstance} AccountInstance
             */
            AccountInstance.fromObject = function fromObject(object) {
                if (object instanceof $root.common.AccountInstance)
                    return object;
                var message = new $root.common.AccountInstance();
                if (object.chainId != null)
                    message.chainId = String(object.chainId);
                if (object.account != null)
                    message.account = String(object.account);
                return message;
            };
    
            /**
             * Creates a plain object from an AccountInstance message. Also converts values to other types if specified.
             * @function toObject
             * @memberof common.AccountInstance
             * @static
             * @param {common.AccountInstance} message AccountInstance
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AccountInstance.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.chainId = "";
                    object.account = "";
                }
                if (message.chainId != null && message.hasOwnProperty("chainId"))
                    object.chainId = message.chainId;
                if (message.account != null && message.hasOwnProperty("account"))
                    object.account = message.account;
                return object;
            };
    
            /**
             * Converts this AccountInstance to JSON.
             * @function toJSON
             * @memberof common.AccountInstance
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AccountInstance.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return AccountInstance;
        })();
    
        return common;
    })();
    
    $root.contractregistry = (function() {
    
        /**
         * Namespace contractregistry.
         * @exports contractregistry
         * @namespace
         */
        var contractregistry = {};
    
        contractregistry.ContractRegistry = (function() {
    
            /**
             * Constructs a new ContractRegistry service.
             * @memberof contractregistry
             * @classdesc Represents a ContractRegistry
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function ContractRegistry(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }
    
            (ContractRegistry.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ContractRegistry;
    
            /**
             * Creates new ContractRegistry service using the specified rpc implementation.
             * @function create
             * @memberof contractregistry.ContractRegistry
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {ContractRegistry} RPC service. Useful where requests and/or responses are streamed.
             */
            ContractRegistry.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };
    
            /**
             * Callback as used by {@link contractregistry.ContractRegistry#registerContract}.
             * @memberof contractregistry.ContractRegistry
             * @typedef RegisterContractCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contractregistry.RegisterContractResponse} [response] RegisterContractResponse
             */
    
            /**
             * Calls RegisterContract.
             * @function registerContract
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IRegisterContractRequest} request RegisterContractRequest message or plain object
             * @param {contractregistry.ContractRegistry.RegisterContractCallback} callback Node-style callback called with the error, if any, and RegisterContractResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ContractRegistry.prototype.registerContract = function registerContract(request, callback) {
                return this.rpcCall(registerContract, $root.contractregistry.RegisterContractRequest, $root.contractregistry.RegisterContractResponse, request, callback);
            }, "name", { value: "RegisterContract" });
    
            /**
             * Calls RegisterContract.
             * @function registerContract
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IRegisterContractRequest} request RegisterContractRequest message or plain object
             * @returns {Promise<contractregistry.RegisterContractResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contractregistry.ContractRegistry#deregisterContract}.
             * @memberof contractregistry.ContractRegistry
             * @typedef DeregisterContractCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contractregistry.DeregisterContractResponse} [response] DeregisterContractResponse
             */
    
            /**
             * Calls DeregisterContract.
             * @function deregisterContract
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IDeregisterContractRequest} request DeregisterContractRequest message or plain object
             * @param {contractregistry.ContractRegistry.DeregisterContractCallback} callback Node-style callback called with the error, if any, and DeregisterContractResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ContractRegistry.prototype.deregisterContract = function deregisterContract(request, callback) {
                return this.rpcCall(deregisterContract, $root.contractregistry.DeregisterContractRequest, $root.contractregistry.DeregisterContractResponse, request, callback);
            }, "name", { value: "DeregisterContract" });
    
            /**
             * Calls DeregisterContract.
             * @function deregisterContract
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IDeregisterContractRequest} request DeregisterContractRequest message or plain object
             * @returns {Promise<contractregistry.DeregisterContractResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contractregistry.ContractRegistry#deleteArtifact}.
             * @memberof contractregistry.ContractRegistry
             * @typedef DeleteArtifactCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contractregistry.DeleteArtifactResponse} [response] DeleteArtifactResponse
             */
    
            /**
             * Calls DeleteArtifact.
             * @function deleteArtifact
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IDeleteArtifactRequest} request DeleteArtifactRequest message or plain object
             * @param {contractregistry.ContractRegistry.DeleteArtifactCallback} callback Node-style callback called with the error, if any, and DeleteArtifactResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ContractRegistry.prototype.deleteArtifact = function deleteArtifact(request, callback) {
                return this.rpcCall(deleteArtifact, $root.contractregistry.DeleteArtifactRequest, $root.contractregistry.DeleteArtifactResponse, request, callback);
            }, "name", { value: "DeleteArtifact" });
    
            /**
             * Calls DeleteArtifact.
             * @function deleteArtifact
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IDeleteArtifactRequest} request DeleteArtifactRequest message or plain object
             * @returns {Promise<contractregistry.DeleteArtifactResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contractregistry.ContractRegistry#getContract}.
             * @memberof contractregistry.ContractRegistry
             * @typedef GetContractCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contractregistry.GetContractResponse} [response] GetContractResponse
             */
    
            /**
             * Calls GetContract.
             * @function getContract
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IGetContractRequest} request GetContractRequest message or plain object
             * @param {contractregistry.ContractRegistry.GetContractCallback} callback Node-style callback called with the error, if any, and GetContractResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ContractRegistry.prototype.getContract = function getContract(request, callback) {
                return this.rpcCall(getContract, $root.contractregistry.GetContractRequest, $root.contractregistry.GetContractResponse, request, callback);
            }, "name", { value: "GetContract" });
    
            /**
             * Calls GetContract.
             * @function getContract
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IGetContractRequest} request GetContractRequest message or plain object
             * @returns {Promise<contractregistry.GetContractResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contractregistry.ContractRegistry#getContractABI}.
             * @memberof contractregistry.ContractRegistry
             * @typedef GetContractABICallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contractregistry.GetContractABIResponse} [response] GetContractABIResponse
             */
    
            /**
             * Calls GetContractABI.
             * @function getContractABI
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IGetContractRequest} request GetContractRequest message or plain object
             * @param {contractregistry.ContractRegistry.GetContractABICallback} callback Node-style callback called with the error, if any, and GetContractABIResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ContractRegistry.prototype.getContractABI = function getContractABI(request, callback) {
                return this.rpcCall(getContractABI, $root.contractregistry.GetContractRequest, $root.contractregistry.GetContractABIResponse, request, callback);
            }, "name", { value: "GetContractABI" });
    
            /**
             * Calls GetContractABI.
             * @function getContractABI
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IGetContractRequest} request GetContractRequest message or plain object
             * @returns {Promise<contractregistry.GetContractABIResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contractregistry.ContractRegistry#getContractBytecode}.
             * @memberof contractregistry.ContractRegistry
             * @typedef GetContractBytecodeCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contractregistry.GetContractBytecodeResponse} [response] GetContractBytecodeResponse
             */
    
            /**
             * Calls GetContractBytecode.
             * @function getContractBytecode
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IGetContractRequest} request GetContractRequest message or plain object
             * @param {contractregistry.ContractRegistry.GetContractBytecodeCallback} callback Node-style callback called with the error, if any, and GetContractBytecodeResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ContractRegistry.prototype.getContractBytecode = function getContractBytecode(request, callback) {
                return this.rpcCall(getContractBytecode, $root.contractregistry.GetContractRequest, $root.contractregistry.GetContractBytecodeResponse, request, callback);
            }, "name", { value: "GetContractBytecode" });
    
            /**
             * Calls GetContractBytecode.
             * @function getContractBytecode
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IGetContractRequest} request GetContractRequest message or plain object
             * @returns {Promise<contractregistry.GetContractBytecodeResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contractregistry.ContractRegistry#getContractDeployedBytecode}.
             * @memberof contractregistry.ContractRegistry
             * @typedef GetContractDeployedBytecodeCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contractregistry.GetContractDeployedBytecodeResponse} [response] GetContractDeployedBytecodeResponse
             */
    
            /**
             * Calls GetContractDeployedBytecode.
             * @function getContractDeployedBytecode
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IGetContractRequest} request GetContractRequest message or plain object
             * @param {contractregistry.ContractRegistry.GetContractDeployedBytecodeCallback} callback Node-style callback called with the error, if any, and GetContractDeployedBytecodeResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ContractRegistry.prototype.getContractDeployedBytecode = function getContractDeployedBytecode(request, callback) {
                return this.rpcCall(getContractDeployedBytecode, $root.contractregistry.GetContractRequest, $root.contractregistry.GetContractDeployedBytecodeResponse, request, callback);
            }, "name", { value: "GetContractDeployedBytecode" });
    
            /**
             * Calls GetContractDeployedBytecode.
             * @function getContractDeployedBytecode
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IGetContractRequest} request GetContractRequest message or plain object
             * @returns {Promise<contractregistry.GetContractDeployedBytecodeResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contractregistry.ContractRegistry#getCatalog}.
             * @memberof contractregistry.ContractRegistry
             * @typedef GetCatalogCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contractregistry.GetCatalogResponse} [response] GetCatalogResponse
             */
    
            /**
             * Calls GetCatalog.
             * @function getCatalog
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IGetCatalogRequest} request GetCatalogRequest message or plain object
             * @param {contractregistry.ContractRegistry.GetCatalogCallback} callback Node-style callback called with the error, if any, and GetCatalogResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ContractRegistry.prototype.getCatalog = function getCatalog(request, callback) {
                return this.rpcCall(getCatalog, $root.contractregistry.GetCatalogRequest, $root.contractregistry.GetCatalogResponse, request, callback);
            }, "name", { value: "GetCatalog" });
    
            /**
             * Calls GetCatalog.
             * @function getCatalog
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IGetCatalogRequest} request GetCatalogRequest message or plain object
             * @returns {Promise<contractregistry.GetCatalogResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contractregistry.ContractRegistry#getTags}.
             * @memberof contractregistry.ContractRegistry
             * @typedef GetTagsCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contractregistry.GetTagsResponse} [response] GetTagsResponse
             */
    
            /**
             * Calls GetTags.
             * @function getTags
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IGetTagsRequest} request GetTagsRequest message or plain object
             * @param {contractregistry.ContractRegistry.GetTagsCallback} callback Node-style callback called with the error, if any, and GetTagsResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ContractRegistry.prototype.getTags = function getTags(request, callback) {
                return this.rpcCall(getTags, $root.contractregistry.GetTagsRequest, $root.contractregistry.GetTagsResponse, request, callback);
            }, "name", { value: "GetTags" });
    
            /**
             * Calls GetTags.
             * @function getTags
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IGetTagsRequest} request GetTagsRequest message or plain object
             * @returns {Promise<contractregistry.GetTagsResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contractregistry.ContractRegistry#getMethodsBySelector}.
             * @memberof contractregistry.ContractRegistry
             * @typedef GetMethodsBySelectorCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contractregistry.GetMethodsBySelectorResponse} [response] GetMethodsBySelectorResponse
             */
    
            /**
             * Calls GetMethodsBySelector.
             * @function getMethodsBySelector
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IGetMethodsBySelectorRequest} request GetMethodsBySelectorRequest message or plain object
             * @param {contractregistry.ContractRegistry.GetMethodsBySelectorCallback} callback Node-style callback called with the error, if any, and GetMethodsBySelectorResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ContractRegistry.prototype.getMethodsBySelector = function getMethodsBySelector(request, callback) {
                return this.rpcCall(getMethodsBySelector, $root.contractregistry.GetMethodsBySelectorRequest, $root.contractregistry.GetMethodsBySelectorResponse, request, callback);
            }, "name", { value: "GetMethodsBySelector" });
    
            /**
             * Calls GetMethodsBySelector.
             * @function getMethodsBySelector
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IGetMethodsBySelectorRequest} request GetMethodsBySelectorRequest message or plain object
             * @returns {Promise<contractregistry.GetMethodsBySelectorResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contractregistry.ContractRegistry#getEventsBySigHash}.
             * @memberof contractregistry.ContractRegistry
             * @typedef GetEventsBySigHashCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contractregistry.GetEventsBySigHashResponse} [response] GetEventsBySigHashResponse
             */
    
            /**
             * Calls GetEventsBySigHash.
             * @function getEventsBySigHash
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IGetEventsBySigHashRequest} request GetEventsBySigHashRequest message or plain object
             * @param {contractregistry.ContractRegistry.GetEventsBySigHashCallback} callback Node-style callback called with the error, if any, and GetEventsBySigHashResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ContractRegistry.prototype.getEventsBySigHash = function getEventsBySigHash(request, callback) {
                return this.rpcCall(getEventsBySigHash, $root.contractregistry.GetEventsBySigHashRequest, $root.contractregistry.GetEventsBySigHashResponse, request, callback);
            }, "name", { value: "GetEventsBySigHash" });
    
            /**
             * Calls GetEventsBySigHash.
             * @function getEventsBySigHash
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.IGetEventsBySigHashRequest} request GetEventsBySigHashRequest message or plain object
             * @returns {Promise<contractregistry.GetEventsBySigHashResponse>} Promise
             * @variation 2
             */
    
            /**
             * Callback as used by {@link contractregistry.ContractRegistry#setAccountCodeHash}.
             * @memberof contractregistry.ContractRegistry
             * @typedef SetAccountCodeHashCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {contractregistry.SetAccountCodeHashResponse} [response] SetAccountCodeHashResponse
             */
    
            /**
             * Calls SetAccountCodeHash.
             * @function setAccountCodeHash
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.ISetAccountCodeHashRequest} request SetAccountCodeHashRequest message or plain object
             * @param {contractregistry.ContractRegistry.SetAccountCodeHashCallback} callback Node-style callback called with the error, if any, and SetAccountCodeHashResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ContractRegistry.prototype.setAccountCodeHash = function setAccountCodeHash(request, callback) {
                return this.rpcCall(setAccountCodeHash, $root.contractregistry.SetAccountCodeHashRequest, $root.contractregistry.SetAccountCodeHashResponse, request, callback);
            }, "name", { value: "SetAccountCodeHash" });
    
            /**
             * Calls SetAccountCodeHash.
             * @function setAccountCodeHash
             * @memberof contractregistry.ContractRegistry
             * @instance
             * @param {contractregistry.ISetAccountCodeHashRequest} request SetAccountCodeHashRequest message or plain object
             * @returns {Promise<contractregistry.SetAccountCodeHashResponse>} Promise
             * @variation 2
             */
    
            return ContractRegistry;
        })();
    
        contractregistry.RegisterContractRequest = (function() {
    
            /**
             * Properties of a RegisterContractRequest.
             * @memberof contractregistry
             * @interface IRegisterContractRequest
             * @property {abi.IContract|null} [contract] RegisterContractRequest contract
             */
    
            /**
             * Constructs a new RegisterContractRequest.
             * @memberof contractregistry
             * @classdesc Represents a RegisterContractRequest.
             * @implements IRegisterContractRequest
             * @constructor
             * @param {contractregistry.IRegisterContractRequest=} [properties] Properties to set
             */
            function RegisterContractRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RegisterContractRequest contract.
             * @member {abi.IContract|null|undefined} contract
             * @memberof contractregistry.RegisterContractRequest
             * @instance
             */
            RegisterContractRequest.prototype.contract = null;
    
            /**
             * Creates a new RegisterContractRequest instance using the specified properties.
             * @function create
             * @memberof contractregistry.RegisterContractRequest
             * @static
             * @param {contractregistry.IRegisterContractRequest=} [properties] Properties to set
             * @returns {contractregistry.RegisterContractRequest} RegisterContractRequest instance
             */
            RegisterContractRequest.create = function create(properties) {
                return new RegisterContractRequest(properties);
            };
    
            /**
             * Encodes the specified RegisterContractRequest message. Does not implicitly {@link contractregistry.RegisterContractRequest.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.RegisterContractRequest
             * @static
             * @param {contractregistry.IRegisterContractRequest} message RegisterContractRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterContractRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.contract != null && message.hasOwnProperty("contract"))
                    $root.abi.Contract.encode(message.contract, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified RegisterContractRequest message, length delimited. Does not implicitly {@link contractregistry.RegisterContractRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.RegisterContractRequest
             * @static
             * @param {contractregistry.IRegisterContractRequest} message RegisterContractRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterContractRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RegisterContractRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.RegisterContractRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.RegisterContractRequest} RegisterContractRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterContractRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.RegisterContractRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.contract = $root.abi.Contract.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RegisterContractRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.RegisterContractRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.RegisterContractRequest} RegisterContractRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterContractRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RegisterContractRequest message.
             * @function verify
             * @memberof contractregistry.RegisterContractRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RegisterContractRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.contract != null && message.hasOwnProperty("contract")) {
                    var error = $root.abi.Contract.verify(message.contract);
                    if (error)
                        return "contract." + error;
                }
                return null;
            };
    
            /**
             * Creates a RegisterContractRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.RegisterContractRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.RegisterContractRequest} RegisterContractRequest
             */
            RegisterContractRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.RegisterContractRequest)
                    return object;
                var message = new $root.contractregistry.RegisterContractRequest();
                if (object.contract != null) {
                    if (typeof object.contract !== "object")
                        throw TypeError(".contractregistry.RegisterContractRequest.contract: object expected");
                    message.contract = $root.abi.Contract.fromObject(object.contract);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a RegisterContractRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.RegisterContractRequest
             * @static
             * @param {contractregistry.RegisterContractRequest} message RegisterContractRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RegisterContractRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.contract = null;
                if (message.contract != null && message.hasOwnProperty("contract"))
                    object.contract = $root.abi.Contract.toObject(message.contract, options);
                return object;
            };
    
            /**
             * Converts this RegisterContractRequest to JSON.
             * @function toJSON
             * @memberof contractregistry.RegisterContractRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RegisterContractRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RegisterContractRequest;
        })();
    
        contractregistry.RegisterContractResponse = (function() {
    
            /**
             * Properties of a RegisterContractResponse.
             * @memberof contractregistry
             * @interface IRegisterContractResponse
             */
    
            /**
             * Constructs a new RegisterContractResponse.
             * @memberof contractregistry
             * @classdesc Represents a RegisterContractResponse.
             * @implements IRegisterContractResponse
             * @constructor
             * @param {contractregistry.IRegisterContractResponse=} [properties] Properties to set
             */
            function RegisterContractResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new RegisterContractResponse instance using the specified properties.
             * @function create
             * @memberof contractregistry.RegisterContractResponse
             * @static
             * @param {contractregistry.IRegisterContractResponse=} [properties] Properties to set
             * @returns {contractregistry.RegisterContractResponse} RegisterContractResponse instance
             */
            RegisterContractResponse.create = function create(properties) {
                return new RegisterContractResponse(properties);
            };
    
            /**
             * Encodes the specified RegisterContractResponse message. Does not implicitly {@link contractregistry.RegisterContractResponse.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.RegisterContractResponse
             * @static
             * @param {contractregistry.IRegisterContractResponse} message RegisterContractResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterContractResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified RegisterContractResponse message, length delimited. Does not implicitly {@link contractregistry.RegisterContractResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.RegisterContractResponse
             * @static
             * @param {contractregistry.IRegisterContractResponse} message RegisterContractResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterContractResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RegisterContractResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.RegisterContractResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.RegisterContractResponse} RegisterContractResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterContractResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.RegisterContractResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RegisterContractResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.RegisterContractResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.RegisterContractResponse} RegisterContractResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterContractResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RegisterContractResponse message.
             * @function verify
             * @memberof contractregistry.RegisterContractResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RegisterContractResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a RegisterContractResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.RegisterContractResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.RegisterContractResponse} RegisterContractResponse
             */
            RegisterContractResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.RegisterContractResponse)
                    return object;
                return new $root.contractregistry.RegisterContractResponse();
            };
    
            /**
             * Creates a plain object from a RegisterContractResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.RegisterContractResponse
             * @static
             * @param {contractregistry.RegisterContractResponse} message RegisterContractResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RegisterContractResponse.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this RegisterContractResponse to JSON.
             * @function toJSON
             * @memberof contractregistry.RegisterContractResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RegisterContractResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RegisterContractResponse;
        })();
    
        contractregistry.DeregisterContractRequest = (function() {
    
            /**
             * Properties of a DeregisterContractRequest.
             * @memberof contractregistry
             * @interface IDeregisterContractRequest
             * @property {abi.IContractId|null} [contractId] DeregisterContractRequest contractId
             */
    
            /**
             * Constructs a new DeregisterContractRequest.
             * @memberof contractregistry
             * @classdesc Represents a DeregisterContractRequest.
             * @implements IDeregisterContractRequest
             * @constructor
             * @param {contractregistry.IDeregisterContractRequest=} [properties] Properties to set
             */
            function DeregisterContractRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeregisterContractRequest contractId.
             * @member {abi.IContractId|null|undefined} contractId
             * @memberof contractregistry.DeregisterContractRequest
             * @instance
             */
            DeregisterContractRequest.prototype.contractId = null;
    
            /**
             * Creates a new DeregisterContractRequest instance using the specified properties.
             * @function create
             * @memberof contractregistry.DeregisterContractRequest
             * @static
             * @param {contractregistry.IDeregisterContractRequest=} [properties] Properties to set
             * @returns {contractregistry.DeregisterContractRequest} DeregisterContractRequest instance
             */
            DeregisterContractRequest.create = function create(properties) {
                return new DeregisterContractRequest(properties);
            };
    
            /**
             * Encodes the specified DeregisterContractRequest message. Does not implicitly {@link contractregistry.DeregisterContractRequest.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.DeregisterContractRequest
             * @static
             * @param {contractregistry.IDeregisterContractRequest} message DeregisterContractRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeregisterContractRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.contractId != null && message.hasOwnProperty("contractId"))
                    $root.abi.ContractId.encode(message.contractId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified DeregisterContractRequest message, length delimited. Does not implicitly {@link contractregistry.DeregisterContractRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.DeregisterContractRequest
             * @static
             * @param {contractregistry.IDeregisterContractRequest} message DeregisterContractRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeregisterContractRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeregisterContractRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.DeregisterContractRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.DeregisterContractRequest} DeregisterContractRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeregisterContractRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.DeregisterContractRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.contractId = $root.abi.ContractId.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeregisterContractRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.DeregisterContractRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.DeregisterContractRequest} DeregisterContractRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeregisterContractRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeregisterContractRequest message.
             * @function verify
             * @memberof contractregistry.DeregisterContractRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeregisterContractRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.contractId != null && message.hasOwnProperty("contractId")) {
                    var error = $root.abi.ContractId.verify(message.contractId);
                    if (error)
                        return "contractId." + error;
                }
                return null;
            };
    
            /**
             * Creates a DeregisterContractRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.DeregisterContractRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.DeregisterContractRequest} DeregisterContractRequest
             */
            DeregisterContractRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.DeregisterContractRequest)
                    return object;
                var message = new $root.contractregistry.DeregisterContractRequest();
                if (object.contractId != null) {
                    if (typeof object.contractId !== "object")
                        throw TypeError(".contractregistry.DeregisterContractRequest.contractId: object expected");
                    message.contractId = $root.abi.ContractId.fromObject(object.contractId);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a DeregisterContractRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.DeregisterContractRequest
             * @static
             * @param {contractregistry.DeregisterContractRequest} message DeregisterContractRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeregisterContractRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.contractId = null;
                if (message.contractId != null && message.hasOwnProperty("contractId"))
                    object.contractId = $root.abi.ContractId.toObject(message.contractId, options);
                return object;
            };
    
            /**
             * Converts this DeregisterContractRequest to JSON.
             * @function toJSON
             * @memberof contractregistry.DeregisterContractRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeregisterContractRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeregisterContractRequest;
        })();
    
        contractregistry.DeregisterContractResponse = (function() {
    
            /**
             * Properties of a DeregisterContractResponse.
             * @memberof contractregistry
             * @interface IDeregisterContractResponse
             */
    
            /**
             * Constructs a new DeregisterContractResponse.
             * @memberof contractregistry
             * @classdesc Represents a DeregisterContractResponse.
             * @implements IDeregisterContractResponse
             * @constructor
             * @param {contractregistry.IDeregisterContractResponse=} [properties] Properties to set
             */
            function DeregisterContractResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new DeregisterContractResponse instance using the specified properties.
             * @function create
             * @memberof contractregistry.DeregisterContractResponse
             * @static
             * @param {contractregistry.IDeregisterContractResponse=} [properties] Properties to set
             * @returns {contractregistry.DeregisterContractResponse} DeregisterContractResponse instance
             */
            DeregisterContractResponse.create = function create(properties) {
                return new DeregisterContractResponse(properties);
            };
    
            /**
             * Encodes the specified DeregisterContractResponse message. Does not implicitly {@link contractregistry.DeregisterContractResponse.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.DeregisterContractResponse
             * @static
             * @param {contractregistry.IDeregisterContractResponse} message DeregisterContractResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeregisterContractResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified DeregisterContractResponse message, length delimited. Does not implicitly {@link contractregistry.DeregisterContractResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.DeregisterContractResponse
             * @static
             * @param {contractregistry.IDeregisterContractResponse} message DeregisterContractResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeregisterContractResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeregisterContractResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.DeregisterContractResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.DeregisterContractResponse} DeregisterContractResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeregisterContractResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.DeregisterContractResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeregisterContractResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.DeregisterContractResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.DeregisterContractResponse} DeregisterContractResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeregisterContractResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeregisterContractResponse message.
             * @function verify
             * @memberof contractregistry.DeregisterContractResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeregisterContractResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a DeregisterContractResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.DeregisterContractResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.DeregisterContractResponse} DeregisterContractResponse
             */
            DeregisterContractResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.DeregisterContractResponse)
                    return object;
                return new $root.contractregistry.DeregisterContractResponse();
            };
    
            /**
             * Creates a plain object from a DeregisterContractResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.DeregisterContractResponse
             * @static
             * @param {contractregistry.DeregisterContractResponse} message DeregisterContractResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeregisterContractResponse.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this DeregisterContractResponse to JSON.
             * @function toJSON
             * @memberof contractregistry.DeregisterContractResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeregisterContractResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeregisterContractResponse;
        })();
    
        contractregistry.DeleteArtifactRequest = (function() {
    
            /**
             * Properties of a DeleteArtifactRequest.
             * @memberof contractregistry
             * @interface IDeleteArtifactRequest
             * @property {string|null} [bytecodeHash] DeleteArtifactRequest bytecodeHash
             */
    
            /**
             * Constructs a new DeleteArtifactRequest.
             * @memberof contractregistry
             * @classdesc Represents a DeleteArtifactRequest.
             * @implements IDeleteArtifactRequest
             * @constructor
             * @param {contractregistry.IDeleteArtifactRequest=} [properties] Properties to set
             */
            function DeleteArtifactRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DeleteArtifactRequest bytecodeHash.
             * @member {string} bytecodeHash
             * @memberof contractregistry.DeleteArtifactRequest
             * @instance
             */
            DeleteArtifactRequest.prototype.bytecodeHash = "";
    
            /**
             * Creates a new DeleteArtifactRequest instance using the specified properties.
             * @function create
             * @memberof contractregistry.DeleteArtifactRequest
             * @static
             * @param {contractregistry.IDeleteArtifactRequest=} [properties] Properties to set
             * @returns {contractregistry.DeleteArtifactRequest} DeleteArtifactRequest instance
             */
            DeleteArtifactRequest.create = function create(properties) {
                return new DeleteArtifactRequest(properties);
            };
    
            /**
             * Encodes the specified DeleteArtifactRequest message. Does not implicitly {@link contractregistry.DeleteArtifactRequest.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.DeleteArtifactRequest
             * @static
             * @param {contractregistry.IDeleteArtifactRequest} message DeleteArtifactRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteArtifactRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bytecodeHash != null && message.hasOwnProperty("bytecodeHash"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.bytecodeHash);
                return writer;
            };
    
            /**
             * Encodes the specified DeleteArtifactRequest message, length delimited. Does not implicitly {@link contractregistry.DeleteArtifactRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.DeleteArtifactRequest
             * @static
             * @param {contractregistry.IDeleteArtifactRequest} message DeleteArtifactRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteArtifactRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeleteArtifactRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.DeleteArtifactRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.DeleteArtifactRequest} DeleteArtifactRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteArtifactRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.DeleteArtifactRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.bytecodeHash = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeleteArtifactRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.DeleteArtifactRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.DeleteArtifactRequest} DeleteArtifactRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteArtifactRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeleteArtifactRequest message.
             * @function verify
             * @memberof contractregistry.DeleteArtifactRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteArtifactRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bytecodeHash != null && message.hasOwnProperty("bytecodeHash"))
                    if (!$util.isString(message.bytecodeHash))
                        return "bytecodeHash: string expected";
                return null;
            };
    
            /**
             * Creates a DeleteArtifactRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.DeleteArtifactRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.DeleteArtifactRequest} DeleteArtifactRequest
             */
            DeleteArtifactRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.DeleteArtifactRequest)
                    return object;
                var message = new $root.contractregistry.DeleteArtifactRequest();
                if (object.bytecodeHash != null)
                    message.bytecodeHash = String(object.bytecodeHash);
                return message;
            };
    
            /**
             * Creates a plain object from a DeleteArtifactRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.DeleteArtifactRequest
             * @static
             * @param {contractregistry.DeleteArtifactRequest} message DeleteArtifactRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteArtifactRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.bytecodeHash = "";
                if (message.bytecodeHash != null && message.hasOwnProperty("bytecodeHash"))
                    object.bytecodeHash = message.bytecodeHash;
                return object;
            };
    
            /**
             * Converts this DeleteArtifactRequest to JSON.
             * @function toJSON
             * @memberof contractregistry.DeleteArtifactRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteArtifactRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeleteArtifactRequest;
        })();
    
        contractregistry.DeleteArtifactResponse = (function() {
    
            /**
             * Properties of a DeleteArtifactResponse.
             * @memberof contractregistry
             * @interface IDeleteArtifactResponse
             */
    
            /**
             * Constructs a new DeleteArtifactResponse.
             * @memberof contractregistry
             * @classdesc Represents a DeleteArtifactResponse.
             * @implements IDeleteArtifactResponse
             * @constructor
             * @param {contractregistry.IDeleteArtifactResponse=} [properties] Properties to set
             */
            function DeleteArtifactResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new DeleteArtifactResponse instance using the specified properties.
             * @function create
             * @memberof contractregistry.DeleteArtifactResponse
             * @static
             * @param {contractregistry.IDeleteArtifactResponse=} [properties] Properties to set
             * @returns {contractregistry.DeleteArtifactResponse} DeleteArtifactResponse instance
             */
            DeleteArtifactResponse.create = function create(properties) {
                return new DeleteArtifactResponse(properties);
            };
    
            /**
             * Encodes the specified DeleteArtifactResponse message. Does not implicitly {@link contractregistry.DeleteArtifactResponse.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.DeleteArtifactResponse
             * @static
             * @param {contractregistry.IDeleteArtifactResponse} message DeleteArtifactResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteArtifactResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified DeleteArtifactResponse message, length delimited. Does not implicitly {@link contractregistry.DeleteArtifactResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.DeleteArtifactResponse
             * @static
             * @param {contractregistry.IDeleteArtifactResponse} message DeleteArtifactResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteArtifactResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a DeleteArtifactResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.DeleteArtifactResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.DeleteArtifactResponse} DeleteArtifactResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteArtifactResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.DeleteArtifactResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a DeleteArtifactResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.DeleteArtifactResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.DeleteArtifactResponse} DeleteArtifactResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteArtifactResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a DeleteArtifactResponse message.
             * @function verify
             * @memberof contractregistry.DeleteArtifactResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteArtifactResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a DeleteArtifactResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.DeleteArtifactResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.DeleteArtifactResponse} DeleteArtifactResponse
             */
            DeleteArtifactResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.DeleteArtifactResponse)
                    return object;
                return new $root.contractregistry.DeleteArtifactResponse();
            };
    
            /**
             * Creates a plain object from a DeleteArtifactResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.DeleteArtifactResponse
             * @static
             * @param {contractregistry.DeleteArtifactResponse} message DeleteArtifactResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteArtifactResponse.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this DeleteArtifactResponse to JSON.
             * @function toJSON
             * @memberof contractregistry.DeleteArtifactResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteArtifactResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return DeleteArtifactResponse;
        })();
    
        contractregistry.GetContractRequest = (function() {
    
            /**
             * Properties of a GetContractRequest.
             * @memberof contractregistry
             * @interface IGetContractRequest
             * @property {abi.IContractId|null} [contractId] GetContractRequest contractId
             */
    
            /**
             * Constructs a new GetContractRequest.
             * @memberof contractregistry
             * @classdesc Represents a GetContractRequest.
             * @implements IGetContractRequest
             * @constructor
             * @param {contractregistry.IGetContractRequest=} [properties] Properties to set
             */
            function GetContractRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetContractRequest contractId.
             * @member {abi.IContractId|null|undefined} contractId
             * @memberof contractregistry.GetContractRequest
             * @instance
             */
            GetContractRequest.prototype.contractId = null;
    
            /**
             * Creates a new GetContractRequest instance using the specified properties.
             * @function create
             * @memberof contractregistry.GetContractRequest
             * @static
             * @param {contractregistry.IGetContractRequest=} [properties] Properties to set
             * @returns {contractregistry.GetContractRequest} GetContractRequest instance
             */
            GetContractRequest.create = function create(properties) {
                return new GetContractRequest(properties);
            };
    
            /**
             * Encodes the specified GetContractRequest message. Does not implicitly {@link contractregistry.GetContractRequest.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.GetContractRequest
             * @static
             * @param {contractregistry.IGetContractRequest} message GetContractRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetContractRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.contractId != null && message.hasOwnProperty("contractId"))
                    $root.abi.ContractId.encode(message.contractId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified GetContractRequest message, length delimited. Does not implicitly {@link contractregistry.GetContractRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.GetContractRequest
             * @static
             * @param {contractregistry.IGetContractRequest} message GetContractRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetContractRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetContractRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.GetContractRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.GetContractRequest} GetContractRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetContractRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.GetContractRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.contractId = $root.abi.ContractId.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetContractRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.GetContractRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.GetContractRequest} GetContractRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetContractRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetContractRequest message.
             * @function verify
             * @memberof contractregistry.GetContractRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetContractRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.contractId != null && message.hasOwnProperty("contractId")) {
                    var error = $root.abi.ContractId.verify(message.contractId);
                    if (error)
                        return "contractId." + error;
                }
                return null;
            };
    
            /**
             * Creates a GetContractRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.GetContractRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.GetContractRequest} GetContractRequest
             */
            GetContractRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.GetContractRequest)
                    return object;
                var message = new $root.contractregistry.GetContractRequest();
                if (object.contractId != null) {
                    if (typeof object.contractId !== "object")
                        throw TypeError(".contractregistry.GetContractRequest.contractId: object expected");
                    message.contractId = $root.abi.ContractId.fromObject(object.contractId);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a GetContractRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.GetContractRequest
             * @static
             * @param {contractregistry.GetContractRequest} message GetContractRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetContractRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.contractId = null;
                if (message.contractId != null && message.hasOwnProperty("contractId"))
                    object.contractId = $root.abi.ContractId.toObject(message.contractId, options);
                return object;
            };
    
            /**
             * Converts this GetContractRequest to JSON.
             * @function toJSON
             * @memberof contractregistry.GetContractRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetContractRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetContractRequest;
        })();
    
        contractregistry.GetContractResponse = (function() {
    
            /**
             * Properties of a GetContractResponse.
             * @memberof contractregistry
             * @interface IGetContractResponse
             * @property {abi.IContract|null} [contract] GetContractResponse contract
             */
    
            /**
             * Constructs a new GetContractResponse.
             * @memberof contractregistry
             * @classdesc Represents a GetContractResponse.
             * @implements IGetContractResponse
             * @constructor
             * @param {contractregistry.IGetContractResponse=} [properties] Properties to set
             */
            function GetContractResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetContractResponse contract.
             * @member {abi.IContract|null|undefined} contract
             * @memberof contractregistry.GetContractResponse
             * @instance
             */
            GetContractResponse.prototype.contract = null;
    
            /**
             * Creates a new GetContractResponse instance using the specified properties.
             * @function create
             * @memberof contractregistry.GetContractResponse
             * @static
             * @param {contractregistry.IGetContractResponse=} [properties] Properties to set
             * @returns {contractregistry.GetContractResponse} GetContractResponse instance
             */
            GetContractResponse.create = function create(properties) {
                return new GetContractResponse(properties);
            };
    
            /**
             * Encodes the specified GetContractResponse message. Does not implicitly {@link contractregistry.GetContractResponse.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.GetContractResponse
             * @static
             * @param {contractregistry.IGetContractResponse} message GetContractResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetContractResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.contract != null && message.hasOwnProperty("contract"))
                    $root.abi.Contract.encode(message.contract, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified GetContractResponse message, length delimited. Does not implicitly {@link contractregistry.GetContractResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.GetContractResponse
             * @static
             * @param {contractregistry.IGetContractResponse} message GetContractResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetContractResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetContractResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.GetContractResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.GetContractResponse} GetContractResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetContractResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.GetContractResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.contract = $root.abi.Contract.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetContractResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.GetContractResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.GetContractResponse} GetContractResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetContractResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetContractResponse message.
             * @function verify
             * @memberof contractregistry.GetContractResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetContractResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.contract != null && message.hasOwnProperty("contract")) {
                    var error = $root.abi.Contract.verify(message.contract);
                    if (error)
                        return "contract." + error;
                }
                return null;
            };
    
            /**
             * Creates a GetContractResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.GetContractResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.GetContractResponse} GetContractResponse
             */
            GetContractResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.GetContractResponse)
                    return object;
                var message = new $root.contractregistry.GetContractResponse();
                if (object.contract != null) {
                    if (typeof object.contract !== "object")
                        throw TypeError(".contractregistry.GetContractResponse.contract: object expected");
                    message.contract = $root.abi.Contract.fromObject(object.contract);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a GetContractResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.GetContractResponse
             * @static
             * @param {contractregistry.GetContractResponse} message GetContractResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetContractResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.contract = null;
                if (message.contract != null && message.hasOwnProperty("contract"))
                    object.contract = $root.abi.Contract.toObject(message.contract, options);
                return object;
            };
    
            /**
             * Converts this GetContractResponse to JSON.
             * @function toJSON
             * @memberof contractregistry.GetContractResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetContractResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetContractResponse;
        })();
    
        contractregistry.GetContractABIResponse = (function() {
    
            /**
             * Properties of a GetContractABIResponse.
             * @memberof contractregistry
             * @interface IGetContractABIResponse
             * @property {string|null} [abi] GetContractABIResponse abi
             */
    
            /**
             * Constructs a new GetContractABIResponse.
             * @memberof contractregistry
             * @classdesc Represents a GetContractABIResponse.
             * @implements IGetContractABIResponse
             * @constructor
             * @param {contractregistry.IGetContractABIResponse=} [properties] Properties to set
             */
            function GetContractABIResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetContractABIResponse abi.
             * @member {string} abi
             * @memberof contractregistry.GetContractABIResponse
             * @instance
             */
            GetContractABIResponse.prototype.abi = "";
    
            /**
             * Creates a new GetContractABIResponse instance using the specified properties.
             * @function create
             * @memberof contractregistry.GetContractABIResponse
             * @static
             * @param {contractregistry.IGetContractABIResponse=} [properties] Properties to set
             * @returns {contractregistry.GetContractABIResponse} GetContractABIResponse instance
             */
            GetContractABIResponse.create = function create(properties) {
                return new GetContractABIResponse(properties);
            };
    
            /**
             * Encodes the specified GetContractABIResponse message. Does not implicitly {@link contractregistry.GetContractABIResponse.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.GetContractABIResponse
             * @static
             * @param {contractregistry.IGetContractABIResponse} message GetContractABIResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetContractABIResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.abi != null && message.hasOwnProperty("abi"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.abi);
                return writer;
            };
    
            /**
             * Encodes the specified GetContractABIResponse message, length delimited. Does not implicitly {@link contractregistry.GetContractABIResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.GetContractABIResponse
             * @static
             * @param {contractregistry.IGetContractABIResponse} message GetContractABIResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetContractABIResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetContractABIResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.GetContractABIResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.GetContractABIResponse} GetContractABIResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetContractABIResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.GetContractABIResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.abi = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetContractABIResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.GetContractABIResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.GetContractABIResponse} GetContractABIResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetContractABIResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetContractABIResponse message.
             * @function verify
             * @memberof contractregistry.GetContractABIResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetContractABIResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.abi != null && message.hasOwnProperty("abi"))
                    if (!$util.isString(message.abi))
                        return "abi: string expected";
                return null;
            };
    
            /**
             * Creates a GetContractABIResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.GetContractABIResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.GetContractABIResponse} GetContractABIResponse
             */
            GetContractABIResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.GetContractABIResponse)
                    return object;
                var message = new $root.contractregistry.GetContractABIResponse();
                if (object.abi != null)
                    message.abi = String(object.abi);
                return message;
            };
    
            /**
             * Creates a plain object from a GetContractABIResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.GetContractABIResponse
             * @static
             * @param {contractregistry.GetContractABIResponse} message GetContractABIResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetContractABIResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.abi = "";
                if (message.abi != null && message.hasOwnProperty("abi"))
                    object.abi = message.abi;
                return object;
            };
    
            /**
             * Converts this GetContractABIResponse to JSON.
             * @function toJSON
             * @memberof contractregistry.GetContractABIResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetContractABIResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetContractABIResponse;
        })();
    
        contractregistry.GetContractBytecodeResponse = (function() {
    
            /**
             * Properties of a GetContractBytecodeResponse.
             * @memberof contractregistry
             * @interface IGetContractBytecodeResponse
             * @property {string|null} [bytecode] GetContractBytecodeResponse bytecode
             */
    
            /**
             * Constructs a new GetContractBytecodeResponse.
             * @memberof contractregistry
             * @classdesc Represents a GetContractBytecodeResponse.
             * @implements IGetContractBytecodeResponse
             * @constructor
             * @param {contractregistry.IGetContractBytecodeResponse=} [properties] Properties to set
             */
            function GetContractBytecodeResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetContractBytecodeResponse bytecode.
             * @member {string} bytecode
             * @memberof contractregistry.GetContractBytecodeResponse
             * @instance
             */
            GetContractBytecodeResponse.prototype.bytecode = "";
    
            /**
             * Creates a new GetContractBytecodeResponse instance using the specified properties.
             * @function create
             * @memberof contractregistry.GetContractBytecodeResponse
             * @static
             * @param {contractregistry.IGetContractBytecodeResponse=} [properties] Properties to set
             * @returns {contractregistry.GetContractBytecodeResponse} GetContractBytecodeResponse instance
             */
            GetContractBytecodeResponse.create = function create(properties) {
                return new GetContractBytecodeResponse(properties);
            };
    
            /**
             * Encodes the specified GetContractBytecodeResponse message. Does not implicitly {@link contractregistry.GetContractBytecodeResponse.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.GetContractBytecodeResponse
             * @static
             * @param {contractregistry.IGetContractBytecodeResponse} message GetContractBytecodeResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetContractBytecodeResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.bytecode != null && message.hasOwnProperty("bytecode"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.bytecode);
                return writer;
            };
    
            /**
             * Encodes the specified GetContractBytecodeResponse message, length delimited. Does not implicitly {@link contractregistry.GetContractBytecodeResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.GetContractBytecodeResponse
             * @static
             * @param {contractregistry.IGetContractBytecodeResponse} message GetContractBytecodeResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetContractBytecodeResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetContractBytecodeResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.GetContractBytecodeResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.GetContractBytecodeResponse} GetContractBytecodeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetContractBytecodeResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.GetContractBytecodeResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.bytecode = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetContractBytecodeResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.GetContractBytecodeResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.GetContractBytecodeResponse} GetContractBytecodeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetContractBytecodeResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetContractBytecodeResponse message.
             * @function verify
             * @memberof contractregistry.GetContractBytecodeResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetContractBytecodeResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.bytecode != null && message.hasOwnProperty("bytecode"))
                    if (!$util.isString(message.bytecode))
                        return "bytecode: string expected";
                return null;
            };
    
            /**
             * Creates a GetContractBytecodeResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.GetContractBytecodeResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.GetContractBytecodeResponse} GetContractBytecodeResponse
             */
            GetContractBytecodeResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.GetContractBytecodeResponse)
                    return object;
                var message = new $root.contractregistry.GetContractBytecodeResponse();
                if (object.bytecode != null)
                    message.bytecode = String(object.bytecode);
                return message;
            };
    
            /**
             * Creates a plain object from a GetContractBytecodeResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.GetContractBytecodeResponse
             * @static
             * @param {contractregistry.GetContractBytecodeResponse} message GetContractBytecodeResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetContractBytecodeResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.bytecode = "";
                if (message.bytecode != null && message.hasOwnProperty("bytecode"))
                    object.bytecode = message.bytecode;
                return object;
            };
    
            /**
             * Converts this GetContractBytecodeResponse to JSON.
             * @function toJSON
             * @memberof contractregistry.GetContractBytecodeResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetContractBytecodeResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetContractBytecodeResponse;
        })();
    
        contractregistry.GetContractDeployedBytecodeResponse = (function() {
    
            /**
             * Properties of a GetContractDeployedBytecodeResponse.
             * @memberof contractregistry
             * @interface IGetContractDeployedBytecodeResponse
             * @property {string|null} [deployedBytecode] GetContractDeployedBytecodeResponse deployedBytecode
             */
    
            /**
             * Constructs a new GetContractDeployedBytecodeResponse.
             * @memberof contractregistry
             * @classdesc Represents a GetContractDeployedBytecodeResponse.
             * @implements IGetContractDeployedBytecodeResponse
             * @constructor
             * @param {contractregistry.IGetContractDeployedBytecodeResponse=} [properties] Properties to set
             */
            function GetContractDeployedBytecodeResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetContractDeployedBytecodeResponse deployedBytecode.
             * @member {string} deployedBytecode
             * @memberof contractregistry.GetContractDeployedBytecodeResponse
             * @instance
             */
            GetContractDeployedBytecodeResponse.prototype.deployedBytecode = "";
    
            /**
             * Creates a new GetContractDeployedBytecodeResponse instance using the specified properties.
             * @function create
             * @memberof contractregistry.GetContractDeployedBytecodeResponse
             * @static
             * @param {contractregistry.IGetContractDeployedBytecodeResponse=} [properties] Properties to set
             * @returns {contractregistry.GetContractDeployedBytecodeResponse} GetContractDeployedBytecodeResponse instance
             */
            GetContractDeployedBytecodeResponse.create = function create(properties) {
                return new GetContractDeployedBytecodeResponse(properties);
            };
    
            /**
             * Encodes the specified GetContractDeployedBytecodeResponse message. Does not implicitly {@link contractregistry.GetContractDeployedBytecodeResponse.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.GetContractDeployedBytecodeResponse
             * @static
             * @param {contractregistry.IGetContractDeployedBytecodeResponse} message GetContractDeployedBytecodeResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetContractDeployedBytecodeResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.deployedBytecode != null && message.hasOwnProperty("deployedBytecode"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.deployedBytecode);
                return writer;
            };
    
            /**
             * Encodes the specified GetContractDeployedBytecodeResponse message, length delimited. Does not implicitly {@link contractregistry.GetContractDeployedBytecodeResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.GetContractDeployedBytecodeResponse
             * @static
             * @param {contractregistry.IGetContractDeployedBytecodeResponse} message GetContractDeployedBytecodeResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetContractDeployedBytecodeResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetContractDeployedBytecodeResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.GetContractDeployedBytecodeResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.GetContractDeployedBytecodeResponse} GetContractDeployedBytecodeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetContractDeployedBytecodeResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.GetContractDeployedBytecodeResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.deployedBytecode = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetContractDeployedBytecodeResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.GetContractDeployedBytecodeResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.GetContractDeployedBytecodeResponse} GetContractDeployedBytecodeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetContractDeployedBytecodeResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetContractDeployedBytecodeResponse message.
             * @function verify
             * @memberof contractregistry.GetContractDeployedBytecodeResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetContractDeployedBytecodeResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.deployedBytecode != null && message.hasOwnProperty("deployedBytecode"))
                    if (!$util.isString(message.deployedBytecode))
                        return "deployedBytecode: string expected";
                return null;
            };
    
            /**
             * Creates a GetContractDeployedBytecodeResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.GetContractDeployedBytecodeResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.GetContractDeployedBytecodeResponse} GetContractDeployedBytecodeResponse
             */
            GetContractDeployedBytecodeResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.GetContractDeployedBytecodeResponse)
                    return object;
                var message = new $root.contractregistry.GetContractDeployedBytecodeResponse();
                if (object.deployedBytecode != null)
                    message.deployedBytecode = String(object.deployedBytecode);
                return message;
            };
    
            /**
             * Creates a plain object from a GetContractDeployedBytecodeResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.GetContractDeployedBytecodeResponse
             * @static
             * @param {contractregistry.GetContractDeployedBytecodeResponse} message GetContractDeployedBytecodeResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetContractDeployedBytecodeResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.deployedBytecode = "";
                if (message.deployedBytecode != null && message.hasOwnProperty("deployedBytecode"))
                    object.deployedBytecode = message.deployedBytecode;
                return object;
            };
    
            /**
             * Converts this GetContractDeployedBytecodeResponse to JSON.
             * @function toJSON
             * @memberof contractregistry.GetContractDeployedBytecodeResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetContractDeployedBytecodeResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetContractDeployedBytecodeResponse;
        })();
    
        contractregistry.GetCatalogRequest = (function() {
    
            /**
             * Properties of a GetCatalogRequest.
             * @memberof contractregistry
             * @interface IGetCatalogRequest
             */
    
            /**
             * Constructs a new GetCatalogRequest.
             * @memberof contractregistry
             * @classdesc Represents a GetCatalogRequest.
             * @implements IGetCatalogRequest
             * @constructor
             * @param {contractregistry.IGetCatalogRequest=} [properties] Properties to set
             */
            function GetCatalogRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new GetCatalogRequest instance using the specified properties.
             * @function create
             * @memberof contractregistry.GetCatalogRequest
             * @static
             * @param {contractregistry.IGetCatalogRequest=} [properties] Properties to set
             * @returns {contractregistry.GetCatalogRequest} GetCatalogRequest instance
             */
            GetCatalogRequest.create = function create(properties) {
                return new GetCatalogRequest(properties);
            };
    
            /**
             * Encodes the specified GetCatalogRequest message. Does not implicitly {@link contractregistry.GetCatalogRequest.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.GetCatalogRequest
             * @static
             * @param {contractregistry.IGetCatalogRequest} message GetCatalogRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetCatalogRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified GetCatalogRequest message, length delimited. Does not implicitly {@link contractregistry.GetCatalogRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.GetCatalogRequest
             * @static
             * @param {contractregistry.IGetCatalogRequest} message GetCatalogRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetCatalogRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetCatalogRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.GetCatalogRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.GetCatalogRequest} GetCatalogRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetCatalogRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.GetCatalogRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetCatalogRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.GetCatalogRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.GetCatalogRequest} GetCatalogRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetCatalogRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetCatalogRequest message.
             * @function verify
             * @memberof contractregistry.GetCatalogRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetCatalogRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a GetCatalogRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.GetCatalogRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.GetCatalogRequest} GetCatalogRequest
             */
            GetCatalogRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.GetCatalogRequest)
                    return object;
                return new $root.contractregistry.GetCatalogRequest();
            };
    
            /**
             * Creates a plain object from a GetCatalogRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.GetCatalogRequest
             * @static
             * @param {contractregistry.GetCatalogRequest} message GetCatalogRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetCatalogRequest.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this GetCatalogRequest to JSON.
             * @function toJSON
             * @memberof contractregistry.GetCatalogRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetCatalogRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetCatalogRequest;
        })();
    
        contractregistry.GetCatalogResponse = (function() {
    
            /**
             * Properties of a GetCatalogResponse.
             * @memberof contractregistry
             * @interface IGetCatalogResponse
             * @property {Array.<string>|null} [names] GetCatalogResponse names
             */
    
            /**
             * Constructs a new GetCatalogResponse.
             * @memberof contractregistry
             * @classdesc Represents a GetCatalogResponse.
             * @implements IGetCatalogResponse
             * @constructor
             * @param {contractregistry.IGetCatalogResponse=} [properties] Properties to set
             */
            function GetCatalogResponse(properties) {
                this.names = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetCatalogResponse names.
             * @member {Array.<string>} names
             * @memberof contractregistry.GetCatalogResponse
             * @instance
             */
            GetCatalogResponse.prototype.names = $util.emptyArray;
    
            /**
             * Creates a new GetCatalogResponse instance using the specified properties.
             * @function create
             * @memberof contractregistry.GetCatalogResponse
             * @static
             * @param {contractregistry.IGetCatalogResponse=} [properties] Properties to set
             * @returns {contractregistry.GetCatalogResponse} GetCatalogResponse instance
             */
            GetCatalogResponse.create = function create(properties) {
                return new GetCatalogResponse(properties);
            };
    
            /**
             * Encodes the specified GetCatalogResponse message. Does not implicitly {@link contractregistry.GetCatalogResponse.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.GetCatalogResponse
             * @static
             * @param {contractregistry.IGetCatalogResponse} message GetCatalogResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetCatalogResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.names != null && message.names.length)
                    for (var i = 0; i < message.names.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.names[i]);
                return writer;
            };
    
            /**
             * Encodes the specified GetCatalogResponse message, length delimited. Does not implicitly {@link contractregistry.GetCatalogResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.GetCatalogResponse
             * @static
             * @param {contractregistry.IGetCatalogResponse} message GetCatalogResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetCatalogResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetCatalogResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.GetCatalogResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.GetCatalogResponse} GetCatalogResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetCatalogResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.GetCatalogResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.names && message.names.length))
                            message.names = [];
                        message.names.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetCatalogResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.GetCatalogResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.GetCatalogResponse} GetCatalogResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetCatalogResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetCatalogResponse message.
             * @function verify
             * @memberof contractregistry.GetCatalogResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetCatalogResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.names != null && message.hasOwnProperty("names")) {
                    if (!Array.isArray(message.names))
                        return "names: array expected";
                    for (var i = 0; i < message.names.length; ++i)
                        if (!$util.isString(message.names[i]))
                            return "names: string[] expected";
                }
                return null;
            };
    
            /**
             * Creates a GetCatalogResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.GetCatalogResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.GetCatalogResponse} GetCatalogResponse
             */
            GetCatalogResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.GetCatalogResponse)
                    return object;
                var message = new $root.contractregistry.GetCatalogResponse();
                if (object.names) {
                    if (!Array.isArray(object.names))
                        throw TypeError(".contractregistry.GetCatalogResponse.names: array expected");
                    message.names = [];
                    for (var i = 0; i < object.names.length; ++i)
                        message.names[i] = String(object.names[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a GetCatalogResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.GetCatalogResponse
             * @static
             * @param {contractregistry.GetCatalogResponse} message GetCatalogResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetCatalogResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.names = [];
                if (message.names && message.names.length) {
                    object.names = [];
                    for (var j = 0; j < message.names.length; ++j)
                        object.names[j] = message.names[j];
                }
                return object;
            };
    
            /**
             * Converts this GetCatalogResponse to JSON.
             * @function toJSON
             * @memberof contractregistry.GetCatalogResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetCatalogResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetCatalogResponse;
        })();
    
        contractregistry.GetTagsRequest = (function() {
    
            /**
             * Properties of a GetTagsRequest.
             * @memberof contractregistry
             * @interface IGetTagsRequest
             * @property {string|null} [name] GetTagsRequest name
             */
    
            /**
             * Constructs a new GetTagsRequest.
             * @memberof contractregistry
             * @classdesc Represents a GetTagsRequest.
             * @implements IGetTagsRequest
             * @constructor
             * @param {contractregistry.IGetTagsRequest=} [properties] Properties to set
             */
            function GetTagsRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetTagsRequest name.
             * @member {string} name
             * @memberof contractregistry.GetTagsRequest
             * @instance
             */
            GetTagsRequest.prototype.name = "";
    
            /**
             * Creates a new GetTagsRequest instance using the specified properties.
             * @function create
             * @memberof contractregistry.GetTagsRequest
             * @static
             * @param {contractregistry.IGetTagsRequest=} [properties] Properties to set
             * @returns {contractregistry.GetTagsRequest} GetTagsRequest instance
             */
            GetTagsRequest.create = function create(properties) {
                return new GetTagsRequest(properties);
            };
    
            /**
             * Encodes the specified GetTagsRequest message. Does not implicitly {@link contractregistry.GetTagsRequest.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.GetTagsRequest
             * @static
             * @param {contractregistry.IGetTagsRequest} message GetTagsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetTagsRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                return writer;
            };
    
            /**
             * Encodes the specified GetTagsRequest message, length delimited. Does not implicitly {@link contractregistry.GetTagsRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.GetTagsRequest
             * @static
             * @param {contractregistry.IGetTagsRequest} message GetTagsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetTagsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetTagsRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.GetTagsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.GetTagsRequest} GetTagsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetTagsRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.GetTagsRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetTagsRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.GetTagsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.GetTagsRequest} GetTagsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetTagsRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetTagsRequest message.
             * @function verify
             * @memberof contractregistry.GetTagsRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetTagsRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };
    
            /**
             * Creates a GetTagsRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.GetTagsRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.GetTagsRequest} GetTagsRequest
             */
            GetTagsRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.GetTagsRequest)
                    return object;
                var message = new $root.contractregistry.GetTagsRequest();
                if (object.name != null)
                    message.name = String(object.name);
                return message;
            };
    
            /**
             * Creates a plain object from a GetTagsRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.GetTagsRequest
             * @static
             * @param {contractregistry.GetTagsRequest} message GetTagsRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetTagsRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.name = "";
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                return object;
            };
    
            /**
             * Converts this GetTagsRequest to JSON.
             * @function toJSON
             * @memberof contractregistry.GetTagsRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetTagsRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetTagsRequest;
        })();
    
        contractregistry.GetTagsResponse = (function() {
    
            /**
             * Properties of a GetTagsResponse.
             * @memberof contractregistry
             * @interface IGetTagsResponse
             * @property {Array.<string>|null} [tags] GetTagsResponse tags
             */
    
            /**
             * Constructs a new GetTagsResponse.
             * @memberof contractregistry
             * @classdesc Represents a GetTagsResponse.
             * @implements IGetTagsResponse
             * @constructor
             * @param {contractregistry.IGetTagsResponse=} [properties] Properties to set
             */
            function GetTagsResponse(properties) {
                this.tags = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetTagsResponse tags.
             * @member {Array.<string>} tags
             * @memberof contractregistry.GetTagsResponse
             * @instance
             */
            GetTagsResponse.prototype.tags = $util.emptyArray;
    
            /**
             * Creates a new GetTagsResponse instance using the specified properties.
             * @function create
             * @memberof contractregistry.GetTagsResponse
             * @static
             * @param {contractregistry.IGetTagsResponse=} [properties] Properties to set
             * @returns {contractregistry.GetTagsResponse} GetTagsResponse instance
             */
            GetTagsResponse.create = function create(properties) {
                return new GetTagsResponse(properties);
            };
    
            /**
             * Encodes the specified GetTagsResponse message. Does not implicitly {@link contractregistry.GetTagsResponse.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.GetTagsResponse
             * @static
             * @param {contractregistry.IGetTagsResponse} message GetTagsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetTagsResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.tags != null && message.tags.length)
                    for (var i = 0; i < message.tags.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.tags[i]);
                return writer;
            };
    
            /**
             * Encodes the specified GetTagsResponse message, length delimited. Does not implicitly {@link contractregistry.GetTagsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.GetTagsResponse
             * @static
             * @param {contractregistry.IGetTagsResponse} message GetTagsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetTagsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetTagsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.GetTagsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.GetTagsResponse} GetTagsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetTagsResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.GetTagsResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetTagsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.GetTagsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.GetTagsResponse} GetTagsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetTagsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetTagsResponse message.
             * @function verify
             * @memberof contractregistry.GetTagsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetTagsResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.tags != null && message.hasOwnProperty("tags")) {
                    if (!Array.isArray(message.tags))
                        return "tags: array expected";
                    for (var i = 0; i < message.tags.length; ++i)
                        if (!$util.isString(message.tags[i]))
                            return "tags: string[] expected";
                }
                return null;
            };
    
            /**
             * Creates a GetTagsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.GetTagsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.GetTagsResponse} GetTagsResponse
             */
            GetTagsResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.GetTagsResponse)
                    return object;
                var message = new $root.contractregistry.GetTagsResponse();
                if (object.tags) {
                    if (!Array.isArray(object.tags))
                        throw TypeError(".contractregistry.GetTagsResponse.tags: array expected");
                    message.tags = [];
                    for (var i = 0; i < object.tags.length; ++i)
                        message.tags[i] = String(object.tags[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a GetTagsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.GetTagsResponse
             * @static
             * @param {contractregistry.GetTagsResponse} message GetTagsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetTagsResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.tags = [];
                if (message.tags && message.tags.length) {
                    object.tags = [];
                    for (var j = 0; j < message.tags.length; ++j)
                        object.tags[j] = message.tags[j];
                }
                return object;
            };
    
            /**
             * Converts this GetTagsResponse to JSON.
             * @function toJSON
             * @memberof contractregistry.GetTagsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetTagsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetTagsResponse;
        })();
    
        contractregistry.GetMethodsBySelectorRequest = (function() {
    
            /**
             * Properties of a GetMethodsBySelectorRequest.
             * @memberof contractregistry
             * @interface IGetMethodsBySelectorRequest
             * @property {Uint8Array|null} [selector] GetMethodsBySelectorRequest selector
             * @property {common.IAccountInstance|null} [accountInstance] GetMethodsBySelectorRequest accountInstance
             */
    
            /**
             * Constructs a new GetMethodsBySelectorRequest.
             * @memberof contractregistry
             * @classdesc Represents a GetMethodsBySelectorRequest.
             * @implements IGetMethodsBySelectorRequest
             * @constructor
             * @param {contractregistry.IGetMethodsBySelectorRequest=} [properties] Properties to set
             */
            function GetMethodsBySelectorRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetMethodsBySelectorRequest selector.
             * @member {Uint8Array} selector
             * @memberof contractregistry.GetMethodsBySelectorRequest
             * @instance
             */
            GetMethodsBySelectorRequest.prototype.selector = $util.newBuffer([]);
    
            /**
             * GetMethodsBySelectorRequest accountInstance.
             * @member {common.IAccountInstance|null|undefined} accountInstance
             * @memberof contractregistry.GetMethodsBySelectorRequest
             * @instance
             */
            GetMethodsBySelectorRequest.prototype.accountInstance = null;
    
            /**
             * Creates a new GetMethodsBySelectorRequest instance using the specified properties.
             * @function create
             * @memberof contractregistry.GetMethodsBySelectorRequest
             * @static
             * @param {contractregistry.IGetMethodsBySelectorRequest=} [properties] Properties to set
             * @returns {contractregistry.GetMethodsBySelectorRequest} GetMethodsBySelectorRequest instance
             */
            GetMethodsBySelectorRequest.create = function create(properties) {
                return new GetMethodsBySelectorRequest(properties);
            };
    
            /**
             * Encodes the specified GetMethodsBySelectorRequest message. Does not implicitly {@link contractregistry.GetMethodsBySelectorRequest.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.GetMethodsBySelectorRequest
             * @static
             * @param {contractregistry.IGetMethodsBySelectorRequest} message GetMethodsBySelectorRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMethodsBySelectorRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.selector != null && message.hasOwnProperty("selector"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.selector);
                if (message.accountInstance != null && message.hasOwnProperty("accountInstance"))
                    $root.common.AccountInstance.encode(message.accountInstance, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified GetMethodsBySelectorRequest message, length delimited. Does not implicitly {@link contractregistry.GetMethodsBySelectorRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.GetMethodsBySelectorRequest
             * @static
             * @param {contractregistry.IGetMethodsBySelectorRequest} message GetMethodsBySelectorRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMethodsBySelectorRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetMethodsBySelectorRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.GetMethodsBySelectorRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.GetMethodsBySelectorRequest} GetMethodsBySelectorRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMethodsBySelectorRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.GetMethodsBySelectorRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.selector = reader.bytes();
                        break;
                    case 2:
                        message.accountInstance = $root.common.AccountInstance.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetMethodsBySelectorRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.GetMethodsBySelectorRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.GetMethodsBySelectorRequest} GetMethodsBySelectorRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMethodsBySelectorRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetMethodsBySelectorRequest message.
             * @function verify
             * @memberof contractregistry.GetMethodsBySelectorRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetMethodsBySelectorRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.selector != null && message.hasOwnProperty("selector"))
                    if (!(message.selector && typeof message.selector.length === "number" || $util.isString(message.selector)))
                        return "selector: buffer expected";
                if (message.accountInstance != null && message.hasOwnProperty("accountInstance")) {
                    var error = $root.common.AccountInstance.verify(message.accountInstance);
                    if (error)
                        return "accountInstance." + error;
                }
                return null;
            };
    
            /**
             * Creates a GetMethodsBySelectorRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.GetMethodsBySelectorRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.GetMethodsBySelectorRequest} GetMethodsBySelectorRequest
             */
            GetMethodsBySelectorRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.GetMethodsBySelectorRequest)
                    return object;
                var message = new $root.contractregistry.GetMethodsBySelectorRequest();
                if (object.selector != null)
                    if (typeof object.selector === "string")
                        $util.base64.decode(object.selector, message.selector = $util.newBuffer($util.base64.length(object.selector)), 0);
                    else if (object.selector.length)
                        message.selector = object.selector;
                if (object.accountInstance != null) {
                    if (typeof object.accountInstance !== "object")
                        throw TypeError(".contractregistry.GetMethodsBySelectorRequest.accountInstance: object expected");
                    message.accountInstance = $root.common.AccountInstance.fromObject(object.accountInstance);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a GetMethodsBySelectorRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.GetMethodsBySelectorRequest
             * @static
             * @param {contractregistry.GetMethodsBySelectorRequest} message GetMethodsBySelectorRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetMethodsBySelectorRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if (options.bytes === String)
                        object.selector = "";
                    else {
                        object.selector = [];
                        if (options.bytes !== Array)
                            object.selector = $util.newBuffer(object.selector);
                    }
                    object.accountInstance = null;
                }
                if (message.selector != null && message.hasOwnProperty("selector"))
                    object.selector = options.bytes === String ? $util.base64.encode(message.selector, 0, message.selector.length) : options.bytes === Array ? Array.prototype.slice.call(message.selector) : message.selector;
                if (message.accountInstance != null && message.hasOwnProperty("accountInstance"))
                    object.accountInstance = $root.common.AccountInstance.toObject(message.accountInstance, options);
                return object;
            };
    
            /**
             * Converts this GetMethodsBySelectorRequest to JSON.
             * @function toJSON
             * @memberof contractregistry.GetMethodsBySelectorRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetMethodsBySelectorRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetMethodsBySelectorRequest;
        })();
    
        contractregistry.GetMethodsBySelectorResponse = (function() {
    
            /**
             * Properties of a GetMethodsBySelectorResponse.
             * @memberof contractregistry
             * @interface IGetMethodsBySelectorResponse
             * @property {string|null} [method] GetMethodsBySelectorResponse method
             * @property {Array.<string>|null} [defaultMethods] GetMethodsBySelectorResponse defaultMethods
             */
    
            /**
             * Constructs a new GetMethodsBySelectorResponse.
             * @memberof contractregistry
             * @classdesc Represents a GetMethodsBySelectorResponse.
             * @implements IGetMethodsBySelectorResponse
             * @constructor
             * @param {contractregistry.IGetMethodsBySelectorResponse=} [properties] Properties to set
             */
            function GetMethodsBySelectorResponse(properties) {
                this.defaultMethods = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetMethodsBySelectorResponse method.
             * @member {string} method
             * @memberof contractregistry.GetMethodsBySelectorResponse
             * @instance
             */
            GetMethodsBySelectorResponse.prototype.method = "";
    
            /**
             * GetMethodsBySelectorResponse defaultMethods.
             * @member {Array.<string>} defaultMethods
             * @memberof contractregistry.GetMethodsBySelectorResponse
             * @instance
             */
            GetMethodsBySelectorResponse.prototype.defaultMethods = $util.emptyArray;
    
            /**
             * Creates a new GetMethodsBySelectorResponse instance using the specified properties.
             * @function create
             * @memberof contractregistry.GetMethodsBySelectorResponse
             * @static
             * @param {contractregistry.IGetMethodsBySelectorResponse=} [properties] Properties to set
             * @returns {contractregistry.GetMethodsBySelectorResponse} GetMethodsBySelectorResponse instance
             */
            GetMethodsBySelectorResponse.create = function create(properties) {
                return new GetMethodsBySelectorResponse(properties);
            };
    
            /**
             * Encodes the specified GetMethodsBySelectorResponse message. Does not implicitly {@link contractregistry.GetMethodsBySelectorResponse.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.GetMethodsBySelectorResponse
             * @static
             * @param {contractregistry.IGetMethodsBySelectorResponse} message GetMethodsBySelectorResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMethodsBySelectorResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.method != null && message.hasOwnProperty("method"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.method);
                if (message.defaultMethods != null && message.defaultMethods.length)
                    for (var i = 0; i < message.defaultMethods.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.defaultMethods[i]);
                return writer;
            };
    
            /**
             * Encodes the specified GetMethodsBySelectorResponse message, length delimited. Does not implicitly {@link contractregistry.GetMethodsBySelectorResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.GetMethodsBySelectorResponse
             * @static
             * @param {contractregistry.IGetMethodsBySelectorResponse} message GetMethodsBySelectorResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetMethodsBySelectorResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetMethodsBySelectorResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.GetMethodsBySelectorResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.GetMethodsBySelectorResponse} GetMethodsBySelectorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMethodsBySelectorResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.GetMethodsBySelectorResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.method = reader.string();
                        break;
                    case 2:
                        if (!(message.defaultMethods && message.defaultMethods.length))
                            message.defaultMethods = [];
                        message.defaultMethods.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetMethodsBySelectorResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.GetMethodsBySelectorResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.GetMethodsBySelectorResponse} GetMethodsBySelectorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetMethodsBySelectorResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetMethodsBySelectorResponse message.
             * @function verify
             * @memberof contractregistry.GetMethodsBySelectorResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetMethodsBySelectorResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.method != null && message.hasOwnProperty("method"))
                    if (!$util.isString(message.method))
                        return "method: string expected";
                if (message.defaultMethods != null && message.hasOwnProperty("defaultMethods")) {
                    if (!Array.isArray(message.defaultMethods))
                        return "defaultMethods: array expected";
                    for (var i = 0; i < message.defaultMethods.length; ++i)
                        if (!$util.isString(message.defaultMethods[i]))
                            return "defaultMethods: string[] expected";
                }
                return null;
            };
    
            /**
             * Creates a GetMethodsBySelectorResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.GetMethodsBySelectorResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.GetMethodsBySelectorResponse} GetMethodsBySelectorResponse
             */
            GetMethodsBySelectorResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.GetMethodsBySelectorResponse)
                    return object;
                var message = new $root.contractregistry.GetMethodsBySelectorResponse();
                if (object.method != null)
                    message.method = String(object.method);
                if (object.defaultMethods) {
                    if (!Array.isArray(object.defaultMethods))
                        throw TypeError(".contractregistry.GetMethodsBySelectorResponse.defaultMethods: array expected");
                    message.defaultMethods = [];
                    for (var i = 0; i < object.defaultMethods.length; ++i)
                        message.defaultMethods[i] = String(object.defaultMethods[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a GetMethodsBySelectorResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.GetMethodsBySelectorResponse
             * @static
             * @param {contractregistry.GetMethodsBySelectorResponse} message GetMethodsBySelectorResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetMethodsBySelectorResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.defaultMethods = [];
                if (options.defaults)
                    object.method = "";
                if (message.method != null && message.hasOwnProperty("method"))
                    object.method = message.method;
                if (message.defaultMethods && message.defaultMethods.length) {
                    object.defaultMethods = [];
                    for (var j = 0; j < message.defaultMethods.length; ++j)
                        object.defaultMethods[j] = message.defaultMethods[j];
                }
                return object;
            };
    
            /**
             * Converts this GetMethodsBySelectorResponse to JSON.
             * @function toJSON
             * @memberof contractregistry.GetMethodsBySelectorResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetMethodsBySelectorResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetMethodsBySelectorResponse;
        })();
    
        contractregistry.GetEventsBySigHashRequest = (function() {
    
            /**
             * Properties of a GetEventsBySigHashRequest.
             * @memberof contractregistry
             * @interface IGetEventsBySigHashRequest
             * @property {string|null} [sigHash] GetEventsBySigHashRequest sigHash
             * @property {common.IAccountInstance|null} [accountInstance] GetEventsBySigHashRequest accountInstance
             * @property {number|null} [indexedInputCount] GetEventsBySigHashRequest indexedInputCount
             */
    
            /**
             * Constructs a new GetEventsBySigHashRequest.
             * @memberof contractregistry
             * @classdesc Represents a GetEventsBySigHashRequest.
             * @implements IGetEventsBySigHashRequest
             * @constructor
             * @param {contractregistry.IGetEventsBySigHashRequest=} [properties] Properties to set
             */
            function GetEventsBySigHashRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetEventsBySigHashRequest sigHash.
             * @member {string} sigHash
             * @memberof contractregistry.GetEventsBySigHashRequest
             * @instance
             */
            GetEventsBySigHashRequest.prototype.sigHash = "";
    
            /**
             * GetEventsBySigHashRequest accountInstance.
             * @member {common.IAccountInstance|null|undefined} accountInstance
             * @memberof contractregistry.GetEventsBySigHashRequest
             * @instance
             */
            GetEventsBySigHashRequest.prototype.accountInstance = null;
    
            /**
             * GetEventsBySigHashRequest indexedInputCount.
             * @member {number} indexedInputCount
             * @memberof contractregistry.GetEventsBySigHashRequest
             * @instance
             */
            GetEventsBySigHashRequest.prototype.indexedInputCount = 0;
    
            /**
             * Creates a new GetEventsBySigHashRequest instance using the specified properties.
             * @function create
             * @memberof contractregistry.GetEventsBySigHashRequest
             * @static
             * @param {contractregistry.IGetEventsBySigHashRequest=} [properties] Properties to set
             * @returns {contractregistry.GetEventsBySigHashRequest} GetEventsBySigHashRequest instance
             */
            GetEventsBySigHashRequest.create = function create(properties) {
                return new GetEventsBySigHashRequest(properties);
            };
    
            /**
             * Encodes the specified GetEventsBySigHashRequest message. Does not implicitly {@link contractregistry.GetEventsBySigHashRequest.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.GetEventsBySigHashRequest
             * @static
             * @param {contractregistry.IGetEventsBySigHashRequest} message GetEventsBySigHashRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetEventsBySigHashRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sigHash != null && message.hasOwnProperty("sigHash"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.sigHash);
                if (message.accountInstance != null && message.hasOwnProperty("accountInstance"))
                    $root.common.AccountInstance.encode(message.accountInstance, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.indexedInputCount != null && message.hasOwnProperty("indexedInputCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.indexedInputCount);
                return writer;
            };
    
            /**
             * Encodes the specified GetEventsBySigHashRequest message, length delimited. Does not implicitly {@link contractregistry.GetEventsBySigHashRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.GetEventsBySigHashRequest
             * @static
             * @param {contractregistry.IGetEventsBySigHashRequest} message GetEventsBySigHashRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetEventsBySigHashRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetEventsBySigHashRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.GetEventsBySigHashRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.GetEventsBySigHashRequest} GetEventsBySigHashRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetEventsBySigHashRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.GetEventsBySigHashRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.sigHash = reader.string();
                        break;
                    case 2:
                        message.accountInstance = $root.common.AccountInstance.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.indexedInputCount = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetEventsBySigHashRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.GetEventsBySigHashRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.GetEventsBySigHashRequest} GetEventsBySigHashRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetEventsBySigHashRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetEventsBySigHashRequest message.
             * @function verify
             * @memberof contractregistry.GetEventsBySigHashRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetEventsBySigHashRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.sigHash != null && message.hasOwnProperty("sigHash"))
                    if (!$util.isString(message.sigHash))
                        return "sigHash: string expected";
                if (message.accountInstance != null && message.hasOwnProperty("accountInstance")) {
                    var error = $root.common.AccountInstance.verify(message.accountInstance);
                    if (error)
                        return "accountInstance." + error;
                }
                if (message.indexedInputCount != null && message.hasOwnProperty("indexedInputCount"))
                    if (!$util.isInteger(message.indexedInputCount))
                        return "indexedInputCount: integer expected";
                return null;
            };
    
            /**
             * Creates a GetEventsBySigHashRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.GetEventsBySigHashRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.GetEventsBySigHashRequest} GetEventsBySigHashRequest
             */
            GetEventsBySigHashRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.GetEventsBySigHashRequest)
                    return object;
                var message = new $root.contractregistry.GetEventsBySigHashRequest();
                if (object.sigHash != null)
                    message.sigHash = String(object.sigHash);
                if (object.accountInstance != null) {
                    if (typeof object.accountInstance !== "object")
                        throw TypeError(".contractregistry.GetEventsBySigHashRequest.accountInstance: object expected");
                    message.accountInstance = $root.common.AccountInstance.fromObject(object.accountInstance);
                }
                if (object.indexedInputCount != null)
                    message.indexedInputCount = object.indexedInputCount >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a GetEventsBySigHashRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.GetEventsBySigHashRequest
             * @static
             * @param {contractregistry.GetEventsBySigHashRequest} message GetEventsBySigHashRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetEventsBySigHashRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.sigHash = "";
                    object.accountInstance = null;
                    object.indexedInputCount = 0;
                }
                if (message.sigHash != null && message.hasOwnProperty("sigHash"))
                    object.sigHash = message.sigHash;
                if (message.accountInstance != null && message.hasOwnProperty("accountInstance"))
                    object.accountInstance = $root.common.AccountInstance.toObject(message.accountInstance, options);
                if (message.indexedInputCount != null && message.hasOwnProperty("indexedInputCount"))
                    object.indexedInputCount = message.indexedInputCount;
                return object;
            };
    
            /**
             * Converts this GetEventsBySigHashRequest to JSON.
             * @function toJSON
             * @memberof contractregistry.GetEventsBySigHashRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetEventsBySigHashRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetEventsBySigHashRequest;
        })();
    
        contractregistry.GetEventsBySigHashResponse = (function() {
    
            /**
             * Properties of a GetEventsBySigHashResponse.
             * @memberof contractregistry
             * @interface IGetEventsBySigHashResponse
             * @property {string|null} [event] GetEventsBySigHashResponse event
             * @property {Array.<string>|null} [defaultEvents] GetEventsBySigHashResponse defaultEvents
             */
    
            /**
             * Constructs a new GetEventsBySigHashResponse.
             * @memberof contractregistry
             * @classdesc Represents a GetEventsBySigHashResponse.
             * @implements IGetEventsBySigHashResponse
             * @constructor
             * @param {contractregistry.IGetEventsBySigHashResponse=} [properties] Properties to set
             */
            function GetEventsBySigHashResponse(properties) {
                this.defaultEvents = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GetEventsBySigHashResponse event.
             * @member {string} event
             * @memberof contractregistry.GetEventsBySigHashResponse
             * @instance
             */
            GetEventsBySigHashResponse.prototype.event = "";
    
            /**
             * GetEventsBySigHashResponse defaultEvents.
             * @member {Array.<string>} defaultEvents
             * @memberof contractregistry.GetEventsBySigHashResponse
             * @instance
             */
            GetEventsBySigHashResponse.prototype.defaultEvents = $util.emptyArray;
    
            /**
             * Creates a new GetEventsBySigHashResponse instance using the specified properties.
             * @function create
             * @memberof contractregistry.GetEventsBySigHashResponse
             * @static
             * @param {contractregistry.IGetEventsBySigHashResponse=} [properties] Properties to set
             * @returns {contractregistry.GetEventsBySigHashResponse} GetEventsBySigHashResponse instance
             */
            GetEventsBySigHashResponse.create = function create(properties) {
                return new GetEventsBySigHashResponse(properties);
            };
    
            /**
             * Encodes the specified GetEventsBySigHashResponse message. Does not implicitly {@link contractregistry.GetEventsBySigHashResponse.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.GetEventsBySigHashResponse
             * @static
             * @param {contractregistry.IGetEventsBySigHashResponse} message GetEventsBySigHashResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetEventsBySigHashResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.event != null && message.hasOwnProperty("event"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.event);
                if (message.defaultEvents != null && message.defaultEvents.length)
                    for (var i = 0; i < message.defaultEvents.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.defaultEvents[i]);
                return writer;
            };
    
            /**
             * Encodes the specified GetEventsBySigHashResponse message, length delimited. Does not implicitly {@link contractregistry.GetEventsBySigHashResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.GetEventsBySigHashResponse
             * @static
             * @param {contractregistry.IGetEventsBySigHashResponse} message GetEventsBySigHashResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetEventsBySigHashResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GetEventsBySigHashResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.GetEventsBySigHashResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.GetEventsBySigHashResponse} GetEventsBySigHashResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetEventsBySigHashResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.GetEventsBySigHashResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.event = reader.string();
                        break;
                    case 2:
                        if (!(message.defaultEvents && message.defaultEvents.length))
                            message.defaultEvents = [];
                        message.defaultEvents.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GetEventsBySigHashResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.GetEventsBySigHashResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.GetEventsBySigHashResponse} GetEventsBySigHashResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetEventsBySigHashResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GetEventsBySigHashResponse message.
             * @function verify
             * @memberof contractregistry.GetEventsBySigHashResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetEventsBySigHashResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.event != null && message.hasOwnProperty("event"))
                    if (!$util.isString(message.event))
                        return "event: string expected";
                if (message.defaultEvents != null && message.hasOwnProperty("defaultEvents")) {
                    if (!Array.isArray(message.defaultEvents))
                        return "defaultEvents: array expected";
                    for (var i = 0; i < message.defaultEvents.length; ++i)
                        if (!$util.isString(message.defaultEvents[i]))
                            return "defaultEvents: string[] expected";
                }
                return null;
            };
    
            /**
             * Creates a GetEventsBySigHashResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.GetEventsBySigHashResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.GetEventsBySigHashResponse} GetEventsBySigHashResponse
             */
            GetEventsBySigHashResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.GetEventsBySigHashResponse)
                    return object;
                var message = new $root.contractregistry.GetEventsBySigHashResponse();
                if (object.event != null)
                    message.event = String(object.event);
                if (object.defaultEvents) {
                    if (!Array.isArray(object.defaultEvents))
                        throw TypeError(".contractregistry.GetEventsBySigHashResponse.defaultEvents: array expected");
                    message.defaultEvents = [];
                    for (var i = 0; i < object.defaultEvents.length; ++i)
                        message.defaultEvents[i] = String(object.defaultEvents[i]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a GetEventsBySigHashResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.GetEventsBySigHashResponse
             * @static
             * @param {contractregistry.GetEventsBySigHashResponse} message GetEventsBySigHashResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetEventsBySigHashResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.defaultEvents = [];
                if (options.defaults)
                    object.event = "";
                if (message.event != null && message.hasOwnProperty("event"))
                    object.event = message.event;
                if (message.defaultEvents && message.defaultEvents.length) {
                    object.defaultEvents = [];
                    for (var j = 0; j < message.defaultEvents.length; ++j)
                        object.defaultEvents[j] = message.defaultEvents[j];
                }
                return object;
            };
    
            /**
             * Converts this GetEventsBySigHashResponse to JSON.
             * @function toJSON
             * @memberof contractregistry.GetEventsBySigHashResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetEventsBySigHashResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GetEventsBySigHashResponse;
        })();
    
        contractregistry.SetAccountCodeHashRequest = (function() {
    
            /**
             * Properties of a SetAccountCodeHashRequest.
             * @memberof contractregistry
             * @interface ISetAccountCodeHashRequest
             * @property {common.IAccountInstance|null} [accountInstance] SetAccountCodeHashRequest accountInstance
             * @property {string|null} [codeHash] SetAccountCodeHashRequest codeHash
             */
    
            /**
             * Constructs a new SetAccountCodeHashRequest.
             * @memberof contractregistry
             * @classdesc Represents a SetAccountCodeHashRequest.
             * @implements ISetAccountCodeHashRequest
             * @constructor
             * @param {contractregistry.ISetAccountCodeHashRequest=} [properties] Properties to set
             */
            function SetAccountCodeHashRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SetAccountCodeHashRequest accountInstance.
             * @member {common.IAccountInstance|null|undefined} accountInstance
             * @memberof contractregistry.SetAccountCodeHashRequest
             * @instance
             */
            SetAccountCodeHashRequest.prototype.accountInstance = null;
    
            /**
             * SetAccountCodeHashRequest codeHash.
             * @member {string} codeHash
             * @memberof contractregistry.SetAccountCodeHashRequest
             * @instance
             */
            SetAccountCodeHashRequest.prototype.codeHash = "";
    
            /**
             * Creates a new SetAccountCodeHashRequest instance using the specified properties.
             * @function create
             * @memberof contractregistry.SetAccountCodeHashRequest
             * @static
             * @param {contractregistry.ISetAccountCodeHashRequest=} [properties] Properties to set
             * @returns {contractregistry.SetAccountCodeHashRequest} SetAccountCodeHashRequest instance
             */
            SetAccountCodeHashRequest.create = function create(properties) {
                return new SetAccountCodeHashRequest(properties);
            };
    
            /**
             * Encodes the specified SetAccountCodeHashRequest message. Does not implicitly {@link contractregistry.SetAccountCodeHashRequest.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.SetAccountCodeHashRequest
             * @static
             * @param {contractregistry.ISetAccountCodeHashRequest} message SetAccountCodeHashRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetAccountCodeHashRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.accountInstance != null && message.hasOwnProperty("accountInstance"))
                    $root.common.AccountInstance.encode(message.accountInstance, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.codeHash != null && message.hasOwnProperty("codeHash"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.codeHash);
                return writer;
            };
    
            /**
             * Encodes the specified SetAccountCodeHashRequest message, length delimited. Does not implicitly {@link contractregistry.SetAccountCodeHashRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.SetAccountCodeHashRequest
             * @static
             * @param {contractregistry.ISetAccountCodeHashRequest} message SetAccountCodeHashRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetAccountCodeHashRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SetAccountCodeHashRequest message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.SetAccountCodeHashRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.SetAccountCodeHashRequest} SetAccountCodeHashRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetAccountCodeHashRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.SetAccountCodeHashRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.accountInstance = $root.common.AccountInstance.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.codeHash = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SetAccountCodeHashRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.SetAccountCodeHashRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.SetAccountCodeHashRequest} SetAccountCodeHashRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetAccountCodeHashRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SetAccountCodeHashRequest message.
             * @function verify
             * @memberof contractregistry.SetAccountCodeHashRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetAccountCodeHashRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.accountInstance != null && message.hasOwnProperty("accountInstance")) {
                    var error = $root.common.AccountInstance.verify(message.accountInstance);
                    if (error)
                        return "accountInstance." + error;
                }
                if (message.codeHash != null && message.hasOwnProperty("codeHash"))
                    if (!$util.isString(message.codeHash))
                        return "codeHash: string expected";
                return null;
            };
    
            /**
             * Creates a SetAccountCodeHashRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.SetAccountCodeHashRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.SetAccountCodeHashRequest} SetAccountCodeHashRequest
             */
            SetAccountCodeHashRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.SetAccountCodeHashRequest)
                    return object;
                var message = new $root.contractregistry.SetAccountCodeHashRequest();
                if (object.accountInstance != null) {
                    if (typeof object.accountInstance !== "object")
                        throw TypeError(".contractregistry.SetAccountCodeHashRequest.accountInstance: object expected");
                    message.accountInstance = $root.common.AccountInstance.fromObject(object.accountInstance);
                }
                if (object.codeHash != null)
                    message.codeHash = String(object.codeHash);
                return message;
            };
    
            /**
             * Creates a plain object from a SetAccountCodeHashRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.SetAccountCodeHashRequest
             * @static
             * @param {contractregistry.SetAccountCodeHashRequest} message SetAccountCodeHashRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetAccountCodeHashRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.accountInstance = null;
                    object.codeHash = "";
                }
                if (message.accountInstance != null && message.hasOwnProperty("accountInstance"))
                    object.accountInstance = $root.common.AccountInstance.toObject(message.accountInstance, options);
                if (message.codeHash != null && message.hasOwnProperty("codeHash"))
                    object.codeHash = message.codeHash;
                return object;
            };
    
            /**
             * Converts this SetAccountCodeHashRequest to JSON.
             * @function toJSON
             * @memberof contractregistry.SetAccountCodeHashRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetAccountCodeHashRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SetAccountCodeHashRequest;
        })();
    
        contractregistry.SetAccountCodeHashResponse = (function() {
    
            /**
             * Properties of a SetAccountCodeHashResponse.
             * @memberof contractregistry
             * @interface ISetAccountCodeHashResponse
             */
    
            /**
             * Constructs a new SetAccountCodeHashResponse.
             * @memberof contractregistry
             * @classdesc Represents a SetAccountCodeHashResponse.
             * @implements ISetAccountCodeHashResponse
             * @constructor
             * @param {contractregistry.ISetAccountCodeHashResponse=} [properties] Properties to set
             */
            function SetAccountCodeHashResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new SetAccountCodeHashResponse instance using the specified properties.
             * @function create
             * @memberof contractregistry.SetAccountCodeHashResponse
             * @static
             * @param {contractregistry.ISetAccountCodeHashResponse=} [properties] Properties to set
             * @returns {contractregistry.SetAccountCodeHashResponse} SetAccountCodeHashResponse instance
             */
            SetAccountCodeHashResponse.create = function create(properties) {
                return new SetAccountCodeHashResponse(properties);
            };
    
            /**
             * Encodes the specified SetAccountCodeHashResponse message. Does not implicitly {@link contractregistry.SetAccountCodeHashResponse.verify|verify} messages.
             * @function encode
             * @memberof contractregistry.SetAccountCodeHashResponse
             * @static
             * @param {contractregistry.ISetAccountCodeHashResponse} message SetAccountCodeHashResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetAccountCodeHashResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified SetAccountCodeHashResponse message, length delimited. Does not implicitly {@link contractregistry.SetAccountCodeHashResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof contractregistry.SetAccountCodeHashResponse
             * @static
             * @param {contractregistry.ISetAccountCodeHashResponse} message SetAccountCodeHashResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SetAccountCodeHashResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SetAccountCodeHashResponse message from the specified reader or buffer.
             * @function decode
             * @memberof contractregistry.SetAccountCodeHashResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {contractregistry.SetAccountCodeHashResponse} SetAccountCodeHashResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetAccountCodeHashResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contractregistry.SetAccountCodeHashResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SetAccountCodeHashResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof contractregistry.SetAccountCodeHashResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {contractregistry.SetAccountCodeHashResponse} SetAccountCodeHashResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SetAccountCodeHashResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SetAccountCodeHashResponse message.
             * @function verify
             * @memberof contractregistry.SetAccountCodeHashResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SetAccountCodeHashResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a SetAccountCodeHashResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof contractregistry.SetAccountCodeHashResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {contractregistry.SetAccountCodeHashResponse} SetAccountCodeHashResponse
             */
            SetAccountCodeHashResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.contractregistry.SetAccountCodeHashResponse)
                    return object;
                return new $root.contractregistry.SetAccountCodeHashResponse();
            };
    
            /**
             * Creates a plain object from a SetAccountCodeHashResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof contractregistry.SetAccountCodeHashResponse
             * @static
             * @param {contractregistry.SetAccountCodeHashResponse} message SetAccountCodeHashResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SetAccountCodeHashResponse.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this SetAccountCodeHashResponse to JSON.
             * @function toJSON
             * @memberof contractregistry.SetAccountCodeHashResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SetAccountCodeHashResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SetAccountCodeHashResponse;
        })();
    
        return contractregistry;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.api = (function() {
    
            /**
             * Namespace api.
             * @memberof google
             * @namespace
             */
            var api = {};
    
            api.Http = (function() {
    
                /**
                 * Properties of a Http.
                 * @memberof google.api
                 * @interface IHttp
                 * @property {Array.<google.api.IHttpRule>|null} [rules] Http rules
                 */
    
                /**
                 * Constructs a new Http.
                 * @memberof google.api
                 * @classdesc Represents a Http.
                 * @implements IHttp
                 * @constructor
                 * @param {google.api.IHttp=} [properties] Properties to set
                 */
                function Http(properties) {
                    this.rules = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Http rules.
                 * @member {Array.<google.api.IHttpRule>} rules
                 * @memberof google.api.Http
                 * @instance
                 */
                Http.prototype.rules = $util.emptyArray;
    
                /**
                 * Creates a new Http instance using the specified properties.
                 * @function create
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp=} [properties] Properties to set
                 * @returns {google.api.Http} Http instance
                 */
                Http.create = function create(properties) {
                    return new Http(properties);
                };
    
                /**
                 * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp} message Http message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Http.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.rules != null && message.rules.length)
                        for (var i = 0; i < message.rules.length; ++i)
                            $root.google.api.HttpRule.encode(message.rules[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp} message Http message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Http.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Http message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.Http
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.Http} Http
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Http.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.Http();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.rules && message.rules.length))
                                message.rules = [];
                            message.rules.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Http message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.Http
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.Http} Http
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Http.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Http message.
                 * @function verify
                 * @memberof google.api.Http
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Http.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.rules != null && message.hasOwnProperty("rules")) {
                        if (!Array.isArray(message.rules))
                            return "rules: array expected";
                        for (var i = 0; i < message.rules.length; ++i) {
                            var error = $root.google.api.HttpRule.verify(message.rules[i]);
                            if (error)
                                return "rules." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a Http message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.Http
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.Http} Http
                 */
                Http.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.Http)
                        return object;
                    var message = new $root.google.api.Http();
                    if (object.rules) {
                        if (!Array.isArray(object.rules))
                            throw TypeError(".google.api.Http.rules: array expected");
                        message.rules = [];
                        for (var i = 0; i < object.rules.length; ++i) {
                            if (typeof object.rules[i] !== "object")
                                throw TypeError(".google.api.Http.rules: object expected");
                            message.rules[i] = $root.google.api.HttpRule.fromObject(object.rules[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a Http message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.Http} message Http
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Http.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.rules = [];
                    if (message.rules && message.rules.length) {
                        object.rules = [];
                        for (var j = 0; j < message.rules.length; ++j)
                            object.rules[j] = $root.google.api.HttpRule.toObject(message.rules[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this Http to JSON.
                 * @function toJSON
                 * @memberof google.api.Http
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Http.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Http;
            })();
    
            api.HttpRule = (function() {
    
                /**
                 * Properties of a HttpRule.
                 * @memberof google.api
                 * @interface IHttpRule
                 * @property {string|null} [get] HttpRule get
                 * @property {string|null} [put] HttpRule put
                 * @property {string|null} [post] HttpRule post
                 * @property {string|null} ["delete"] HttpRule delete
                 * @property {string|null} [patch] HttpRule patch
                 * @property {google.api.ICustomHttpPattern|null} [custom] HttpRule custom
                 * @property {string|null} [selector] HttpRule selector
                 * @property {string|null} [body] HttpRule body
                 * @property {Array.<google.api.IHttpRule>|null} [additionalBindings] HttpRule additionalBindings
                 */
    
                /**
                 * Constructs a new HttpRule.
                 * @memberof google.api
                 * @classdesc Represents a HttpRule.
                 * @implements IHttpRule
                 * @constructor
                 * @param {google.api.IHttpRule=} [properties] Properties to set
                 */
                function HttpRule(properties) {
                    this.additionalBindings = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * HttpRule get.
                 * @member {string} get
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.get = "";
    
                /**
                 * HttpRule put.
                 * @member {string} put
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.put = "";
    
                /**
                 * HttpRule post.
                 * @member {string} post
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.post = "";
    
                /**
                 * HttpRule delete.
                 * @member {string} delete
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype["delete"] = "";
    
                /**
                 * HttpRule patch.
                 * @member {string} patch
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.patch = "";
    
                /**
                 * HttpRule custom.
                 * @member {google.api.ICustomHttpPattern|null|undefined} custom
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.custom = null;
    
                /**
                 * HttpRule selector.
                 * @member {string} selector
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.selector = "";
    
                /**
                 * HttpRule body.
                 * @member {string} body
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.body = "";
    
                /**
                 * HttpRule additionalBindings.
                 * @member {Array.<google.api.IHttpRule>} additionalBindings
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.additionalBindings = $util.emptyArray;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * HttpRule pattern.
                 * @member {"get"|"put"|"post"|"delete"|"patch"|"custom"|undefined} pattern
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                Object.defineProperty(HttpRule.prototype, "pattern", {
                    get: $util.oneOfGetter($oneOfFields = ["get", "put", "post", "delete", "patch", "custom"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new HttpRule instance using the specified properties.
                 * @function create
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule=} [properties] Properties to set
                 * @returns {google.api.HttpRule} HttpRule instance
                 */
                HttpRule.create = function create(properties) {
                    return new HttpRule(properties);
                };
    
                /**
                 * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HttpRule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.selector);
                    if (message.get != null && message.hasOwnProperty("get"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.get);
                    if (message.put != null && message.hasOwnProperty("put"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.put);
                    if (message.post != null && message.hasOwnProperty("post"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.post);
                    if (message["delete"] != null && message.hasOwnProperty("delete"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message["delete"]);
                    if (message.patch != null && message.hasOwnProperty("patch"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.patch);
                    if (message.body != null && message.hasOwnProperty("body"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.body);
                    if (message.custom != null && message.hasOwnProperty("custom"))
                        $root.google.api.CustomHttpPattern.encode(message.custom, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.additionalBindings != null && message.additionalBindings.length)
                        for (var i = 0; i < message.additionalBindings.length; ++i)
                            $root.google.api.HttpRule.encode(message.additionalBindings[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HttpRule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a HttpRule message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.HttpRule} HttpRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HttpRule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.HttpRule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            message.get = reader.string();
                            break;
                        case 3:
                            message.put = reader.string();
                            break;
                        case 4:
                            message.post = reader.string();
                            break;
                        case 5:
                            message["delete"] = reader.string();
                            break;
                        case 6:
                            message.patch = reader.string();
                            break;
                        case 8:
                            message.custom = $root.google.api.CustomHttpPattern.decode(reader, reader.uint32());
                            break;
                        case 1:
                            message.selector = reader.string();
                            break;
                        case 7:
                            message.body = reader.string();
                            break;
                        case 11:
                            if (!(message.additionalBindings && message.additionalBindings.length))
                                message.additionalBindings = [];
                            message.additionalBindings.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a HttpRule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.HttpRule} HttpRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HttpRule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a HttpRule message.
                 * @function verify
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HttpRule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.get != null && message.hasOwnProperty("get")) {
                        properties.pattern = 1;
                        if (!$util.isString(message.get))
                            return "get: string expected";
                    }
                    if (message.put != null && message.hasOwnProperty("put")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.put))
                            return "put: string expected";
                    }
                    if (message.post != null && message.hasOwnProperty("post")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.post))
                            return "post: string expected";
                    }
                    if (message["delete"] != null && message.hasOwnProperty("delete")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message["delete"]))
                            return "delete: string expected";
                    }
                    if (message.patch != null && message.hasOwnProperty("patch")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.patch))
                            return "patch: string expected";
                    }
                    if (message.custom != null && message.hasOwnProperty("custom")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        {
                            var error = $root.google.api.CustomHttpPattern.verify(message.custom);
                            if (error)
                                return "custom." + error;
                        }
                    }
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        if (!$util.isString(message.selector))
                            return "selector: string expected";
                    if (message.body != null && message.hasOwnProperty("body"))
                        if (!$util.isString(message.body))
                            return "body: string expected";
                    if (message.additionalBindings != null && message.hasOwnProperty("additionalBindings")) {
                        if (!Array.isArray(message.additionalBindings))
                            return "additionalBindings: array expected";
                        for (var i = 0; i < message.additionalBindings.length; ++i) {
                            var error = $root.google.api.HttpRule.verify(message.additionalBindings[i]);
                            if (error)
                                return "additionalBindings." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.HttpRule} HttpRule
                 */
                HttpRule.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.HttpRule)
                        return object;
                    var message = new $root.google.api.HttpRule();
                    if (object.get != null)
                        message.get = String(object.get);
                    if (object.put != null)
                        message.put = String(object.put);
                    if (object.post != null)
                        message.post = String(object.post);
                    if (object["delete"] != null)
                        message["delete"] = String(object["delete"]);
                    if (object.patch != null)
                        message.patch = String(object.patch);
                    if (object.custom != null) {
                        if (typeof object.custom !== "object")
                            throw TypeError(".google.api.HttpRule.custom: object expected");
                        message.custom = $root.google.api.CustomHttpPattern.fromObject(object.custom);
                    }
                    if (object.selector != null)
                        message.selector = String(object.selector);
                    if (object.body != null)
                        message.body = String(object.body);
                    if (object.additionalBindings) {
                        if (!Array.isArray(object.additionalBindings))
                            throw TypeError(".google.api.HttpRule.additionalBindings: array expected");
                        message.additionalBindings = [];
                        for (var i = 0; i < object.additionalBindings.length; ++i) {
                            if (typeof object.additionalBindings[i] !== "object")
                                throw TypeError(".google.api.HttpRule.additionalBindings: object expected");
                            message.additionalBindings[i] = $root.google.api.HttpRule.fromObject(object.additionalBindings[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.HttpRule} message HttpRule
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HttpRule.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.additionalBindings = [];
                    if (options.defaults) {
                        object.selector = "";
                        object.body = "";
                    }
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        object.selector = message.selector;
                    if (message.get != null && message.hasOwnProperty("get")) {
                        object.get = message.get;
                        if (options.oneofs)
                            object.pattern = "get";
                    }
                    if (message.put != null && message.hasOwnProperty("put")) {
                        object.put = message.put;
                        if (options.oneofs)
                            object.pattern = "put";
                    }
                    if (message.post != null && message.hasOwnProperty("post")) {
                        object.post = message.post;
                        if (options.oneofs)
                            object.pattern = "post";
                    }
                    if (message["delete"] != null && message.hasOwnProperty("delete")) {
                        object["delete"] = message["delete"];
                        if (options.oneofs)
                            object.pattern = "delete";
                    }
                    if (message.patch != null && message.hasOwnProperty("patch")) {
                        object.patch = message.patch;
                        if (options.oneofs)
                            object.pattern = "patch";
                    }
                    if (message.body != null && message.hasOwnProperty("body"))
                        object.body = message.body;
                    if (message.custom != null && message.hasOwnProperty("custom")) {
                        object.custom = $root.google.api.CustomHttpPattern.toObject(message.custom, options);
                        if (options.oneofs)
                            object.pattern = "custom";
                    }
                    if (message.additionalBindings && message.additionalBindings.length) {
                        object.additionalBindings = [];
                        for (var j = 0; j < message.additionalBindings.length; ++j)
                            object.additionalBindings[j] = $root.google.api.HttpRule.toObject(message.additionalBindings[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this HttpRule to JSON.
                 * @function toJSON
                 * @memberof google.api.HttpRule
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HttpRule.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return HttpRule;
            })();
    
            api.CustomHttpPattern = (function() {
    
                /**
                 * Properties of a CustomHttpPattern.
                 * @memberof google.api
                 * @interface ICustomHttpPattern
                 * @property {string|null} [kind] CustomHttpPattern kind
                 * @property {string|null} [path] CustomHttpPattern path
                 */
    
                /**
                 * Constructs a new CustomHttpPattern.
                 * @memberof google.api
                 * @classdesc Represents a CustomHttpPattern.
                 * @implements ICustomHttpPattern
                 * @constructor
                 * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
                 */
                function CustomHttpPattern(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CustomHttpPattern kind.
                 * @member {string} kind
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 */
                CustomHttpPattern.prototype.kind = "";
    
                /**
                 * CustomHttpPattern path.
                 * @member {string} path
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 */
                CustomHttpPattern.prototype.path = "";
    
                /**
                 * Creates a new CustomHttpPattern instance using the specified properties.
                 * @function create
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern instance
                 */
                CustomHttpPattern.create = function create(properties) {
                    return new CustomHttpPattern(properties);
                };
    
                /**
                 * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CustomHttpPattern.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.kind);
                    if (message.path != null && message.hasOwnProperty("path"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
                    return writer;
                };
    
                /**
                 * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CustomHttpPattern.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CustomHttpPattern message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CustomHttpPattern.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.CustomHttpPattern();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.kind = reader.string();
                            break;
                        case 2:
                            message.path = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CustomHttpPattern.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CustomHttpPattern message.
                 * @function verify
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CustomHttpPattern.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        if (!$util.isString(message.kind))
                            return "kind: string expected";
                    if (message.path != null && message.hasOwnProperty("path"))
                        if (!$util.isString(message.path))
                            return "path: string expected";
                    return null;
                };
    
                /**
                 * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 */
                CustomHttpPattern.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.CustomHttpPattern)
                        return object;
                    var message = new $root.google.api.CustomHttpPattern();
                    if (object.kind != null)
                        message.kind = String(object.kind);
                    if (object.path != null)
                        message.path = String(object.path);
                    return message;
                };
    
                /**
                 * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.CustomHttpPattern} message CustomHttpPattern
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CustomHttpPattern.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.kind = "";
                        object.path = "";
                    }
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        object.kind = message.kind;
                    if (message.path != null && message.hasOwnProperty("path"))
                        object.path = message.path;
                    return object;
                };
    
                /**
                 * Converts this CustomHttpPattern to JSON.
                 * @function toJSON
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CustomHttpPattern.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return CustomHttpPattern;
            })();
    
            return api;
        })();
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.FileDescriptorSet = (function() {
    
                /**
                 * Properties of a FileDescriptorSet.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorSet
                 * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
                 */
    
                /**
                 * Constructs a new FileDescriptorSet.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorSet.
                 * @implements IFileDescriptorSet
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 */
                function FileDescriptorSet(properties) {
                    this.file = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorSet file.
                 * @member {Array.<google.protobuf.IFileDescriptorProto>} file
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 */
                FileDescriptorSet.prototype.file = $util.emptyArray;
    
                /**
                 * Creates a new FileDescriptorSet instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
                 */
                FileDescriptorSet.create = function create(properties) {
                    return new FileDescriptorSet(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file != null && message.file.length)
                        for (var i = 0; i < message.file.length; ++i)
                            $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorSet message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorSet.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.file != null && message.hasOwnProperty("file")) {
                        if (!Array.isArray(message.file))
                            return "file: array expected";
                        for (var i = 0; i < message.file.length; ++i) {
                            var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                            if (error)
                                return "file." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorSet)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorSet();
                    if (object.file) {
                        if (!Array.isArray(object.file))
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                        message.file = [];
                        for (var i = 0; i < object.file.length; ++i) {
                            if (typeof object.file[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                            message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorSet.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.file = [];
                    if (message.file && message.file.length) {
                        object.file = [];
                        for (var j = 0; j < message.file.length; ++j)
                            object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorSet to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorSet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorSet;
            })();
    
            protobuf.FileDescriptorProto = (function() {
    
                /**
                 * Properties of a FileDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorProto
                 * @property {string|null} [name] FileDescriptorProto name
                 * @property {string|null} ["package"] FileDescriptorProto package
                 * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
                 * @property {Array.<number>|null} [publicDependency] FileDescriptorProto publicDependency
                 * @property {Array.<number>|null} [weakDependency] FileDescriptorProto weakDependency
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [messageType] FileDescriptorProto messageType
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] FileDescriptorProto enumType
                 * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
                 * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
                 * @property {google.protobuf.ISourceCodeInfo|null} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
                 * @property {string|null} [syntax] FileDescriptorProto syntax
                 */
    
                /**
                 * Constructs a new FileDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorProto.
                 * @implements IFileDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 */
                function FileDescriptorProto(properties) {
                    this.dependency = [];
                    this.publicDependency = [];
                    this.weakDependency = [];
                    this.messageType = [];
                    this.enumType = [];
                    this.service = [];
                    this.extension = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.name = "";
    
                /**
                 * FileDescriptorProto package.
                 * @member {string} package
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype["package"] = "";
    
                /**
                 * FileDescriptorProto dependency.
                 * @member {Array.<string>} dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto publicDependency.
                 * @member {Array.<number>} publicDependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.publicDependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto weakDependency.
                 * @member {Array.<number>} weakDependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.weakDependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto messageType.
                 * @member {Array.<google.protobuf.IDescriptorProto>} messageType
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.messageType = $util.emptyArray;
    
                /**
                 * FileDescriptorProto enumType.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.enumType = $util.emptyArray;
    
                /**
                 * FileDescriptorProto service.
                 * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.service = $util.emptyArray;
    
                /**
                 * FileDescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * FileDescriptorProto options.
                 * @member {google.protobuf.IFileOptions|null|undefined} options
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.options = null;
    
                /**
                 * FileDescriptorProto sourceCodeInfo.
                 * @member {google.protobuf.ISourceCodeInfo|null|undefined} sourceCodeInfo
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.sourceCodeInfo = null;
    
                /**
                 * FileDescriptorProto syntax.
                 * @member {string} syntax
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.syntax = "";
    
                /**
                 * Creates a new FileDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
                 */
                FileDescriptorProto.create = function create(properties) {
                    return new FileDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                    if (message.dependency != null && message.dependency.length)
                        for (var i = 0; i < message.dependency.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                    if (message.messageType != null && message.messageType.length)
                        for (var i = 0; i < message.messageType.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.enumType != null && message.enumType.length)
                        for (var i = 0; i < message.enumType.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.service != null && message.service.length)
                        for (var i = 0; i < message.service.length; ++i)
                            $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                        $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.publicDependency != null && message.publicDependency.length)
                        for (var i = 0; i < message.publicDependency.length; ++i)
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                    if (message.weakDependency != null && message.weakDependency.length)
                        for (var i = 0; i < message.weakDependency.length; ++i)
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message["package"] = reader.string();
                            break;
                        case 3:
                            if (!(message.dependency && message.dependency.length))
                                message.dependency = [];
                            message.dependency.push(reader.string());
                            break;
                        case 10:
                            if (!(message.publicDependency && message.publicDependency.length))
                                message.publicDependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.publicDependency.push(reader.int32());
                            } else
                                message.publicDependency.push(reader.int32());
                            break;
                        case 11:
                            if (!(message.weakDependency && message.weakDependency.length))
                                message.weakDependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.weakDependency.push(reader.int32());
                            } else
                                message.weakDependency.push(reader.int32());
                            break;
                        case 4:
                            if (!(message.messageType && message.messageType.length))
                                message.messageType = [];
                            message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.service && message.service.length))
                                message.service = [];
                            message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                            break;
                        case 12:
                            message.syntax = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        if (!$util.isString(message["package"]))
                            return "package: string expected";
                    if (message.dependency != null && message.hasOwnProperty("dependency")) {
                        if (!Array.isArray(message.dependency))
                            return "dependency: array expected";
                        for (var i = 0; i < message.dependency.length; ++i)
                            if (!$util.isString(message.dependency[i]))
                                return "dependency: string[] expected";
                    }
                    if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                        if (!Array.isArray(message.publicDependency))
                            return "publicDependency: array expected";
                        for (var i = 0; i < message.publicDependency.length; ++i)
                            if (!$util.isInteger(message.publicDependency[i]))
                                return "publicDependency: integer[] expected";
                    }
                    if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                        if (!Array.isArray(message.weakDependency))
                            return "weakDependency: array expected";
                        for (var i = 0; i < message.weakDependency.length; ++i)
                            if (!$util.isInteger(message.weakDependency[i]))
                                return "weakDependency: integer[] expected";
                    }
                    if (message.messageType != null && message.hasOwnProperty("messageType")) {
                        if (!Array.isArray(message.messageType))
                            return "messageType: array expected";
                        for (var i = 0; i < message.messageType.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.messageType[i]);
                            if (error)
                                return "messageType." + error;
                        }
                    }
                    if (message.enumType != null && message.hasOwnProperty("enumType")) {
                        if (!Array.isArray(message.enumType))
                            return "enumType: array expected";
                        for (var i = 0; i < message.enumType.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                            if (error)
                                return "enumType." + error;
                        }
                    }
                    if (message.service != null && message.hasOwnProperty("service")) {
                        if (!Array.isArray(message.service))
                            return "service: array expected";
                        for (var i = 0; i < message.service.length; ++i) {
                            var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                            if (error)
                                return "service." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FileOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                        var error = $root.google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                        if (error)
                            return "sourceCodeInfo." + error;
                    }
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        if (!$util.isString(message.syntax))
                            return "syntax: string expected";
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object["package"] != null)
                        message["package"] = String(object["package"]);
                    if (object.dependency) {
                        if (!Array.isArray(object.dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                        message.dependency = [];
                        for (var i = 0; i < object.dependency.length; ++i)
                            message.dependency[i] = String(object.dependency[i]);
                    }
                    if (object.publicDependency) {
                        if (!Array.isArray(object.publicDependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                        message.publicDependency = [];
                        for (var i = 0; i < object.publicDependency.length; ++i)
                            message.publicDependency[i] = object.publicDependency[i] | 0;
                    }
                    if (object.weakDependency) {
                        if (!Array.isArray(object.weakDependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                        message.weakDependency = [];
                        for (var i = 0; i < object.weakDependency.length; ++i)
                            message.weakDependency[i] = object.weakDependency[i] | 0;
                    }
                    if (object.messageType) {
                        if (!Array.isArray(object.messageType))
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                        message.messageType = [];
                        for (var i = 0; i < object.messageType.length; ++i) {
                            if (typeof object.messageType[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                            message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                        }
                    }
                    if (object.enumType) {
                        if (!Array.isArray(object.enumType))
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                        message.enumType = [];
                        for (var i = 0; i < object.enumType.length; ++i) {
                            if (typeof object.enumType[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                            message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                        }
                    }
                    if (object.service) {
                        if (!Array.isArray(object.service))
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                        message.service = [];
                        for (var i = 0; i < object.service.length; ++i) {
                            if (typeof object.service[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                            message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                    }
                    if (object.sourceCodeInfo != null) {
                        if (typeof object.sourceCodeInfo !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                        message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                    }
                    if (object.syntax != null)
                        message.syntax = String(object.syntax);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.dependency = [];
                        object.messageType = [];
                        object.enumType = [];
                        object.service = [];
                        object.extension = [];
                        object.publicDependency = [];
                        object.weakDependency = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object["package"] = "";
                        object.options = null;
                        object.sourceCodeInfo = null;
                        object.syntax = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        object["package"] = message["package"];
                    if (message.dependency && message.dependency.length) {
                        object.dependency = [];
                        for (var j = 0; j < message.dependency.length; ++j)
                            object.dependency[j] = message.dependency[j];
                    }
                    if (message.messageType && message.messageType.length) {
                        object.messageType = [];
                        for (var j = 0; j < message.messageType.length; ++j)
                            object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                    }
                    if (message.enumType && message.enumType.length) {
                        object.enumType = [];
                        for (var j = 0; j < message.enumType.length; ++j)
                            object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                    }
                    if (message.service && message.service.length) {
                        object.service = [];
                        for (var j = 0; j < message.service.length; ++j)
                            object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                        object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                    if (message.publicDependency && message.publicDependency.length) {
                        object.publicDependency = [];
                        for (var j = 0; j < message.publicDependency.length; ++j)
                            object.publicDependency[j] = message.publicDependency[j];
                    }
                    if (message.weakDependency && message.weakDependency.length) {
                        object.weakDependency = [];
                        for (var j = 0; j < message.weakDependency.length; ++j)
                            object.weakDependency[j] = message.weakDependency[j];
                    }
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        object.syntax = message.syntax;
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorProto;
            })();
    
            protobuf.DescriptorProto = (function() {
    
                /**
                 * Properties of a DescriptorProto.
                 * @memberof google.protobuf
                 * @interface IDescriptorProto
                 * @property {string|null} [name] DescriptorProto name
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [nestedType] DescriptorProto nestedType
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] DescriptorProto enumType
                 * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extensionRange] DescriptorProto extensionRange
                 * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneofDecl] DescriptorProto oneofDecl
                 * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
                 * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reservedRange] DescriptorProto reservedRange
                 * @property {Array.<string>|null} [reservedName] DescriptorProto reservedName
                 */
    
                /**
                 * Constructs a new DescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a DescriptorProto.
                 * @implements IDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 */
                function DescriptorProto(properties) {
                    this.field = [];
                    this.extension = [];
                    this.nestedType = [];
                    this.enumType = [];
                    this.extensionRange = [];
                    this.oneofDecl = [];
                    this.reservedRange = [];
                    this.reservedName = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.name = "";
    
                /**
                 * DescriptorProto field.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.field = $util.emptyArray;
    
                /**
                 * DescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * DescriptorProto nestedType.
                 * @member {Array.<google.protobuf.IDescriptorProto>} nestedType
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.nestedType = $util.emptyArray;
    
                /**
                 * DescriptorProto enumType.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.enumType = $util.emptyArray;
    
                /**
                 * DescriptorProto extensionRange.
                 * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extensionRange
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extensionRange = $util.emptyArray;
    
                /**
                 * DescriptorProto oneofDecl.
                 * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneofDecl
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.oneofDecl = $util.emptyArray;
    
                /**
                 * DescriptorProto options.
                 * @member {google.protobuf.IMessageOptions|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.options = null;
    
                /**
                 * DescriptorProto reservedRange.
                 * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reservedRange
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reservedRange = $util.emptyArray;
    
                /**
                 * DescriptorProto reservedName.
                 * @member {Array.<string>} reservedName
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reservedName = $util.emptyArray;
    
                /**
                 * Creates a new DescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
                 */
                DescriptorProto.create = function create(properties) {
                    return new DescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.field != null && message.field.length)
                        for (var i = 0; i < message.field.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.nestedType != null && message.nestedType.length)
                        for (var i = 0; i < message.nestedType.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.enumType != null && message.enumType.length)
                        for (var i = 0; i < message.enumType.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.extensionRange != null && message.extensionRange.length)
                        for (var i = 0; i < message.extensionRange.length; ++i)
                            $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.oneofDecl != null && message.oneofDecl.length)
                        for (var i = 0; i < message.oneofDecl.length; ++i)
                            $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.reservedRange != null && message.reservedRange.length)
                        for (var i = 0; i < message.reservedRange.length; ++i)
                            $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.reservedName != null && message.reservedName.length)
                        for (var i = 0; i < message.reservedName.length; ++i)
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.field && message.field.length))
                                message.field = [];
                            message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            if (!(message.nestedType && message.nestedType.length))
                                message.nestedType = [];
                            message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.extensionRange && message.extensionRange.length))
                                message.extensionRange = [];
                            message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            if (!(message.oneofDecl && message.oneofDecl.length))
                                message.oneofDecl = [];
                            message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                            break;
                        case 9:
                            if (!(message.reservedRange && message.reservedRange.length))
                                message.reservedRange = [];
                            message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                            break;
                        case 10:
                            if (!(message.reservedName && message.reservedName.length))
                                message.reservedName = [];
                            message.reservedName.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.field != null && message.hasOwnProperty("field")) {
                        if (!Array.isArray(message.field))
                            return "field: array expected";
                        for (var i = 0; i < message.field.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                            if (error)
                                return "field." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                        if (!Array.isArray(message.nestedType))
                            return "nestedType: array expected";
                        for (var i = 0; i < message.nestedType.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                            if (error)
                                return "nestedType." + error;
                        }
                    }
                    if (message.enumType != null && message.hasOwnProperty("enumType")) {
                        if (!Array.isArray(message.enumType))
                            return "enumType: array expected";
                        for (var i = 0; i < message.enumType.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                            if (error)
                                return "enumType." + error;
                        }
                    }
                    if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                        if (!Array.isArray(message.extensionRange))
                            return "extensionRange: array expected";
                        for (var i = 0; i < message.extensionRange.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                            if (error)
                                return "extensionRange." + error;
                        }
                    }
                    if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                        if (!Array.isArray(message.oneofDecl))
                            return "oneofDecl: array expected";
                        for (var i = 0; i < message.oneofDecl.length; ++i) {
                            var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                            if (error)
                                return "oneofDecl." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MessageOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                        if (!Array.isArray(message.reservedRange))
                            return "reservedRange: array expected";
                        for (var i = 0; i < message.reservedRange.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                            if (error)
                                return "reservedRange." + error;
                        }
                    }
                    if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                        if (!Array.isArray(message.reservedName))
                            return "reservedName: array expected";
                        for (var i = 0; i < message.reservedName.length; ++i)
                            if (!$util.isString(message.reservedName[i]))
                                return "reservedName: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.field) {
                        if (!Array.isArray(object.field))
                            throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                        message.field = [];
                        for (var i = 0; i < object.field.length; ++i) {
                            if (typeof object.field[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                            message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.nestedType) {
                        if (!Array.isArray(object.nestedType))
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                        message.nestedType = [];
                        for (var i = 0; i < object.nestedType.length; ++i) {
                            if (typeof object.nestedType[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                            message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                        }
                    }
                    if (object.enumType) {
                        if (!Array.isArray(object.enumType))
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                        message.enumType = [];
                        for (var i = 0; i < object.enumType.length; ++i) {
                            if (typeof object.enumType[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                            message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                        }
                    }
                    if (object.extensionRange) {
                        if (!Array.isArray(object.extensionRange))
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                        message.extensionRange = [];
                        for (var i = 0; i < object.extensionRange.length; ++i) {
                            if (typeof object.extensionRange[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                            message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                        }
                    }
                    if (object.oneofDecl) {
                        if (!Array.isArray(object.oneofDecl))
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                        message.oneofDecl = [];
                        for (var i = 0; i < object.oneofDecl.length; ++i) {
                            if (typeof object.oneofDecl[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                            message.oneofDecl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                    }
                    if (object.reservedRange) {
                        if (!Array.isArray(object.reservedRange))
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                        message.reservedRange = [];
                        for (var i = 0; i < object.reservedRange.length; ++i) {
                            if (typeof object.reservedRange[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                            message.reservedRange[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                        }
                    }
                    if (object.reservedName) {
                        if (!Array.isArray(object.reservedName))
                            throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                        message.reservedName = [];
                        for (var i = 0; i < object.reservedName.length; ++i)
                            message.reservedName[i] = String(object.reservedName[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto} message DescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.field = [];
                        object.nestedType = [];
                        object.enumType = [];
                        object.extensionRange = [];
                        object.extension = [];
                        object.oneofDecl = [];
                        object.reservedRange = [];
                        object.reservedName = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.field && message.field.length) {
                        object.field = [];
                        for (var j = 0; j < message.field.length; ++j)
                            object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                    }
                    if (message.nestedType && message.nestedType.length) {
                        object.nestedType = [];
                        for (var j = 0; j < message.nestedType.length; ++j)
                            object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                    }
                    if (message.enumType && message.enumType.length) {
                        object.enumType = [];
                        for (var j = 0; j < message.enumType.length; ++j)
                            object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                    }
                    if (message.extensionRange && message.extensionRange.length) {
                        object.extensionRange = [];
                        for (var j = 0; j < message.extensionRange.length; ++j)
                            object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                    if (message.oneofDecl && message.oneofDecl.length) {
                        object.oneofDecl = [];
                        for (var j = 0; j < message.oneofDecl.length; ++j)
                            object.oneofDecl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
                    }
                    if (message.reservedRange && message.reservedRange.length) {
                        object.reservedRange = [];
                        for (var j = 0; j < message.reservedRange.length; ++j)
                            object.reservedRange[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
                    }
                    if (message.reservedName && message.reservedName.length) {
                        object.reservedName = [];
                        for (var j = 0; j < message.reservedName.length; ++j)
                            object.reservedName[j] = message.reservedName[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this DescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                DescriptorProto.ExtensionRange = (function() {
    
                    /**
                     * Properties of an ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IExtensionRange
                     * @property {number|null} [start] ExtensionRange start
                     * @property {number|null} [end] ExtensionRange end
                     */
    
                    /**
                     * Constructs a new ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents an ExtensionRange.
                     * @implements IExtensionRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     */
                    function ExtensionRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ExtensionRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.start = 0;
    
                    /**
                     * ExtensionRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.end = 0;
    
                    /**
                     * Creates a new ExtensionRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                     */
                    ExtensionRange.create = function create(properties) {
                        return new ExtensionRange(properties);
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && message.hasOwnProperty("start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an ExtensionRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExtensionRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtensionRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ExtensionRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExtensionRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ExtensionRange;
                })();
    
                DescriptorProto.ReservedRange = (function() {
    
                    /**
                     * Properties of a ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IReservedRange
                     * @property {number|null} [start] ReservedRange start
                     * @property {number|null} [end] ReservedRange end
                     */
    
                    /**
                     * Constructs a new ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents a ReservedRange.
                     * @implements IReservedRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     */
                    function ReservedRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReservedRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.start = 0;
    
                    /**
                     * ReservedRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new ReservedRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                     */
                    ReservedRange.create = function create(properties) {
                        return new ReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && message.hasOwnProperty("start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReservedRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReservedRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     */
                    ReservedRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReservedRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ReservedRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReservedRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ReservedRange;
                })();
    
                return DescriptorProto;
            })();
    
            protobuf.FieldDescriptorProto = (function() {
    
                /**
                 * Properties of a FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFieldDescriptorProto
                 * @property {string|null} [name] FieldDescriptorProto name
                 * @property {number|null} [number] FieldDescriptorProto number
                 * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
                 * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
                 * @property {string|null} [typeName] FieldDescriptorProto typeName
                 * @property {string|null} [extendee] FieldDescriptorProto extendee
                 * @property {string|null} [defaultValue] FieldDescriptorProto defaultValue
                 * @property {number|null} [oneofIndex] FieldDescriptorProto oneofIndex
                 * @property {string|null} [jsonName] FieldDescriptorProto jsonName
                 * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
                 */
    
                /**
                 * Constructs a new FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldDescriptorProto.
                 * @implements IFieldDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 */
                function FieldDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.name = "";
    
                /**
                 * FieldDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.number = 0;
    
                /**
                 * FieldDescriptorProto label.
                 * @member {google.protobuf.FieldDescriptorProto.Label} label
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.label = 1;
    
                /**
                 * FieldDescriptorProto type.
                 * @member {google.protobuf.FieldDescriptorProto.Type} type
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type = 1;
    
                /**
                 * FieldDescriptorProto typeName.
                 * @member {string} typeName
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.typeName = "";
    
                /**
                 * FieldDescriptorProto extendee.
                 * @member {string} extendee
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.extendee = "";
    
                /**
                 * FieldDescriptorProto defaultValue.
                 * @member {string} defaultValue
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.defaultValue = "";
    
                /**
                 * FieldDescriptorProto oneofIndex.
                 * @member {number} oneofIndex
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.oneofIndex = 0;
    
                /**
                 * FieldDescriptorProto jsonName.
                 * @member {string} jsonName
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.jsonName = "";
    
                /**
                 * FieldDescriptorProto options.
                 * @member {google.protobuf.IFieldOptions|null|undefined} options
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new FieldDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
                 */
                FieldDescriptorProto.create = function create(properties) {
                    return new FieldDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                    if (message.number != null && message.hasOwnProperty("number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                    if (message.label != null && message.hasOwnProperty("label"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.number = reader.int32();
                            break;
                        case 4:
                            message.label = reader.int32();
                            break;
                        case 5:
                            message.type = reader.int32();
                            break;
                        case 6:
                            message.typeName = reader.string();
                            break;
                        case 2:
                            message.extendee = reader.string();
                            break;
                        case 7:
                            message.defaultValue = reader.string();
                            break;
                        case 9:
                            message.oneofIndex = reader.int32();
                            break;
                        case 10:
                            message.jsonName = reader.string();
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.label != null && message.hasOwnProperty("label"))
                        switch (message.label) {
                        default:
                            return "label: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        }
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        if (!$util.isString(message.typeName))
                            return "typeName: string expected";
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        if (!$util.isString(message.extendee))
                            return "extendee: string expected";
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        if (!$util.isString(message.defaultValue))
                            return "defaultValue: string expected";
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        if (!$util.isInteger(message.oneofIndex))
                            return "oneofIndex: integer expected";
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        if (!$util.isString(message.jsonName))
                            return "jsonName: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FieldOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FieldDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    switch (object.label) {
                    case "LABEL_OPTIONAL":
                    case 1:
                        message.label = 1;
                        break;
                    case "LABEL_REQUIRED":
                    case 2:
                        message.label = 2;
                        break;
                    case "LABEL_REPEATED":
                    case 3:
                        message.label = 3;
                        break;
                    }
                    switch (object.type) {
                    case "TYPE_DOUBLE":
                    case 1:
                        message.type = 1;
                        break;
                    case "TYPE_FLOAT":
                    case 2:
                        message.type = 2;
                        break;
                    case "TYPE_INT64":
                    case 3:
                        message.type = 3;
                        break;
                    case "TYPE_UINT64":
                    case 4:
                        message.type = 4;
                        break;
                    case "TYPE_INT32":
                    case 5:
                        message.type = 5;
                        break;
                    case "TYPE_FIXED64":
                    case 6:
                        message.type = 6;
                        break;
                    case "TYPE_FIXED32":
                    case 7:
                        message.type = 7;
                        break;
                    case "TYPE_BOOL":
                    case 8:
                        message.type = 8;
                        break;
                    case "TYPE_STRING":
                    case 9:
                        message.type = 9;
                        break;
                    case "TYPE_GROUP":
                    case 10:
                        message.type = 10;
                        break;
                    case "TYPE_MESSAGE":
                    case 11:
                        message.type = 11;
                        break;
                    case "TYPE_BYTES":
                    case 12:
                        message.type = 12;
                        break;
                    case "TYPE_UINT32":
                    case 13:
                        message.type = 13;
                        break;
                    case "TYPE_ENUM":
                    case 14:
                        message.type = 14;
                        break;
                    case "TYPE_SFIXED32":
                    case 15:
                        message.type = 15;
                        break;
                    case "TYPE_SFIXED64":
                    case 16:
                        message.type = 16;
                        break;
                    case "TYPE_SINT32":
                    case 17:
                        message.type = 17;
                        break;
                    case "TYPE_SINT64":
                    case 18:
                        message.type = 18;
                        break;
                    }
                    if (object.typeName != null)
                        message.typeName = String(object.typeName);
                    if (object.extendee != null)
                        message.extendee = String(object.extendee);
                    if (object.defaultValue != null)
                        message.defaultValue = String(object.defaultValue);
                    if (object.oneofIndex != null)
                        message.oneofIndex = object.oneofIndex | 0;
                    if (object.jsonName != null)
                        message.jsonName = String(object.jsonName);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.extendee = "";
                        object.number = 0;
                        object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                        object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                        object.typeName = "";
                        object.defaultValue = "";
                        object.options = null;
                        object.oneofIndex = 0;
                        object.jsonName = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        object.extendee = message.extendee;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.label != null && message.hasOwnProperty("label"))
                        object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        object.typeName = message.typeName;
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        object.defaultValue = message.defaultValue;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        object.oneofIndex = message.oneofIndex;
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        object.jsonName = message.jsonName;
                    return object;
                };
    
                /**
                 * Converts this FieldDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Type enum.
                 * @name google.protobuf.FieldDescriptorProto.Type
                 * @enum {string}
                 * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
                 * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
                 * @property {number} TYPE_INT64=3 TYPE_INT64 value
                 * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
                 * @property {number} TYPE_INT32=5 TYPE_INT32 value
                 * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
                 * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
                 * @property {number} TYPE_BOOL=8 TYPE_BOOL value
                 * @property {number} TYPE_STRING=9 TYPE_STRING value
                 * @property {number} TYPE_GROUP=10 TYPE_GROUP value
                 * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
                 * @property {number} TYPE_BYTES=12 TYPE_BYTES value
                 * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
                 * @property {number} TYPE_ENUM=14 TYPE_ENUM value
                 * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
                 * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
                 * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
                 * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
                 */
                FieldDescriptorProto.Type = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                    values[valuesById[2] = "TYPE_FLOAT"] = 2;
                    values[valuesById[3] = "TYPE_INT64"] = 3;
                    values[valuesById[4] = "TYPE_UINT64"] = 4;
                    values[valuesById[5] = "TYPE_INT32"] = 5;
                    values[valuesById[6] = "TYPE_FIXED64"] = 6;
                    values[valuesById[7] = "TYPE_FIXED32"] = 7;
                    values[valuesById[8] = "TYPE_BOOL"] = 8;
                    values[valuesById[9] = "TYPE_STRING"] = 9;
                    values[valuesById[10] = "TYPE_GROUP"] = 10;
                    values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                    values[valuesById[12] = "TYPE_BYTES"] = 12;
                    values[valuesById[13] = "TYPE_UINT32"] = 13;
                    values[valuesById[14] = "TYPE_ENUM"] = 14;
                    values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                    values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                    values[valuesById[17] = "TYPE_SINT32"] = 17;
                    values[valuesById[18] = "TYPE_SINT64"] = 18;
                    return values;
                })();
    
                /**
                 * Label enum.
                 * @name google.protobuf.FieldDescriptorProto.Label
                 * @enum {string}
                 * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
                 * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
                 * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
                 */
                FieldDescriptorProto.Label = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                    values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                    values[valuesById[3] = "LABEL_REPEATED"] = 3;
                    return values;
                })();
    
                return FieldDescriptorProto;
            })();
    
            protobuf.OneofDescriptorProto = (function() {
    
                /**
                 * Properties of an OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IOneofDescriptorProto
                 * @property {string|null} [name] OneofDescriptorProto name
                 * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
                 */
    
                /**
                 * Constructs a new OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofDescriptorProto.
                 * @implements IOneofDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 */
                function OneofDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.name = "";
    
                /**
                 * OneofDescriptorProto options.
                 * @member {google.protobuf.IOneofOptions|null|undefined} options
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new OneofDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
                 */
                OneofDescriptorProto.create = function create(properties) {
                    return new OneofDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.OneofOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 */
                OneofDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.OneofDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this OneofDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OneofDescriptorProto;
            })();
    
            protobuf.EnumDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumDescriptorProto
                 * @property {string|null} [name] EnumDescriptorProto name
                 * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
                 * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumDescriptorProto.
                 * @implements IEnumDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 */
                function EnumDescriptorProto(properties) {
                    this.value = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.name = "";
    
                /**
                 * EnumDescriptorProto value.
                 * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.value = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto options.
                 * @member {google.protobuf.IEnumOptions|null|undefined} options
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
                 */
                EnumDescriptorProto.create = function create(properties) {
                    return new EnumDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.value != null && message.value.length)
                        for (var i = 0; i < message.value.length; ++i)
                            $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.value != null && message.hasOwnProperty("value")) {
                        if (!Array.isArray(message.value))
                            return "value: array expected";
                        for (var i = 0; i < message.value.length; ++i) {
                            var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                            if (error)
                                return "value." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.value) {
                        if (!Array.isArray(object.value))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                        message.value = [];
                        for (var i = 0; i < object.value.length; ++i) {
                            if (typeof object.value[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                            message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.value = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.value && message.value.length) {
                        object.value = [];
                        for (var j = 0; j < message.value.length; ++j)
                            object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumDescriptorProto;
            })();
    
            protobuf.EnumValueDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumValueDescriptorProto
                 * @property {string|null} [name] EnumValueDescriptorProto name
                 * @property {number|null} [number] EnumValueDescriptorProto number
                 * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueDescriptorProto.
                 * @implements IEnumValueDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 */
                function EnumValueDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.name = "";
    
                /**
                 * EnumValueDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.number = 0;
    
                /**
                 * EnumValueDescriptorProto options.
                 * @member {google.protobuf.IEnumValueOptions|null|undefined} options
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumValueDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
                 */
                EnumValueDescriptorProto.create = function create(properties) {
                    return new EnumValueDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number != null && message.hasOwnProperty("number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.number = reader.int32();
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumValueDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.number = 0;
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumValueDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueDescriptorProto;
            })();
    
            protobuf.ServiceDescriptorProto = (function() {
    
                /**
                 * Properties of a ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IServiceDescriptorProto
                 * @property {string|null} [name] ServiceDescriptorProto name
                 * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
                 * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
                 */
    
                /**
                 * Constructs a new ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceDescriptorProto.
                 * @implements IServiceDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 */
                function ServiceDescriptorProto(properties) {
                    this.method = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.name = "";
    
                /**
                 * ServiceDescriptorProto method.
                 * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.method = $util.emptyArray;
    
                /**
                 * ServiceDescriptorProto options.
                 * @member {google.protobuf.IServiceOptions|null|undefined} options
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new ServiceDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
                 */
                ServiceDescriptorProto.create = function create(properties) {
                    return new ServiceDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.method != null && message.method.length)
                        for (var i = 0; i < message.method.length; ++i)
                            $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.method && message.method.length))
                                message.method = [];
                            message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.method != null && message.hasOwnProperty("method")) {
                        if (!Array.isArray(message.method))
                            return "method: array expected";
                        for (var i = 0; i < message.method.length; ++i) {
                            var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                            if (error)
                                return "method." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.ServiceDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.method) {
                        if (!Array.isArray(object.method))
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                        message.method = [];
                        for (var i = 0; i < object.method.length; ++i) {
                            if (typeof object.method[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                            message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.method = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.method && message.method.length) {
                        object.method = [];
                        for (var j = 0; j < message.method.length; ++j)
                            object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this ServiceDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceDescriptorProto;
            })();
    
            protobuf.MethodDescriptorProto = (function() {
    
                /**
                 * Properties of a MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IMethodDescriptorProto
                 * @property {string|null} [name] MethodDescriptorProto name
                 * @property {string|null} [inputType] MethodDescriptorProto inputType
                 * @property {string|null} [outputType] MethodDescriptorProto outputType
                 * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
                 * @property {boolean|null} [clientStreaming] MethodDescriptorProto clientStreaming
                 * @property {boolean|null} [serverStreaming] MethodDescriptorProto serverStreaming
                 */
    
                /**
                 * Constructs a new MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodDescriptorProto.
                 * @implements IMethodDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 */
                function MethodDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.name = "";
    
                /**
                 * MethodDescriptorProto inputType.
                 * @member {string} inputType
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.inputType = "";
    
                /**
                 * MethodDescriptorProto outputType.
                 * @member {string} outputType
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.outputType = "";
    
                /**
                 * MethodDescriptorProto options.
                 * @member {google.protobuf.IMethodOptions|null|undefined} options
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.options = null;
    
                /**
                 * MethodDescriptorProto clientStreaming.
                 * @member {boolean} clientStreaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.clientStreaming = false;
    
                /**
                 * MethodDescriptorProto serverStreaming.
                 * @member {boolean} serverStreaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.serverStreaming = false;
    
                /**
                 * Creates a new MethodDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
                 */
                MethodDescriptorProto.create = function create(properties) {
                    return new MethodDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.inputType = reader.string();
                            break;
                        case 3:
                            message.outputType = reader.string();
                            break;
                        case 4:
                            message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.clientStreaming = reader.bool();
                            break;
                        case 6:
                            message.serverStreaming = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        if (!$util.isString(message.inputType))
                            return "inputType: string expected";
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        if (!$util.isString(message.outputType))
                            return "outputType: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MethodOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        if (typeof message.clientStreaming !== "boolean")
                            return "clientStreaming: boolean expected";
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        if (typeof message.serverStreaming !== "boolean")
                            return "serverStreaming: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.MethodDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.inputType != null)
                        message.inputType = String(object.inputType);
                    if (object.outputType != null)
                        message.outputType = String(object.outputType);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                    }
                    if (object.clientStreaming != null)
                        message.clientStreaming = Boolean(object.clientStreaming);
                    if (object.serverStreaming != null)
                        message.serverStreaming = Boolean(object.serverStreaming);
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.inputType = "";
                        object.outputType = "";
                        object.options = null;
                        object.clientStreaming = false;
                        object.serverStreaming = false;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        object.inputType = message.inputType;
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        object.outputType = message.outputType;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        object.clientStreaming = message.clientStreaming;
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        object.serverStreaming = message.serverStreaming;
                    return object;
                };
    
                /**
                 * Converts this MethodDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MethodDescriptorProto;
            })();
    
            protobuf.FileOptions = (function() {
    
                /**
                 * Properties of a FileOptions.
                 * @memberof google.protobuf
                 * @interface IFileOptions
                 * @property {string|null} [javaPackage] FileOptions javaPackage
                 * @property {string|null} [javaOuterClassname] FileOptions javaOuterClassname
                 * @property {boolean|null} [javaMultipleFiles] FileOptions javaMultipleFiles
                 * @property {boolean|null} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
                 * @property {boolean|null} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8
                 * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimizeFor] FileOptions optimizeFor
                 * @property {string|null} [goPackage] FileOptions goPackage
                 * @property {boolean|null} [ccGenericServices] FileOptions ccGenericServices
                 * @property {boolean|null} [javaGenericServices] FileOptions javaGenericServices
                 * @property {boolean|null} [pyGenericServices] FileOptions pyGenericServices
                 * @property {boolean|null} [deprecated] FileOptions deprecated
                 * @property {boolean|null} [ccEnableArenas] FileOptions ccEnableArenas
                 * @property {string|null} [objcClassPrefix] FileOptions objcClassPrefix
                 * @property {string|null} [csharpNamespace] FileOptions csharpNamespace
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FileOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new FileOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileOptions.
                 * @implements IFileOptions
                 * @constructor
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 */
                function FileOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileOptions javaPackage.
                 * @member {string} javaPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaPackage = "";
    
                /**
                 * FileOptions javaOuterClassname.
                 * @member {string} javaOuterClassname
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaOuterClassname = "";
    
                /**
                 * FileOptions javaMultipleFiles.
                 * @member {boolean} javaMultipleFiles
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaMultipleFiles = false;
    
                /**
                 * FileOptions javaGenerateEqualsAndHash.
                 * @member {boolean} javaGenerateEqualsAndHash
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaGenerateEqualsAndHash = false;
    
                /**
                 * FileOptions javaStringCheckUtf8.
                 * @member {boolean} javaStringCheckUtf8
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaStringCheckUtf8 = false;
    
                /**
                 * FileOptions optimizeFor.
                 * @member {google.protobuf.FileOptions.OptimizeMode} optimizeFor
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.optimizeFor = 1;
    
                /**
                 * FileOptions goPackage.
                 * @member {string} goPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.goPackage = "";
    
                /**
                 * FileOptions ccGenericServices.
                 * @member {boolean} ccGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.ccGenericServices = false;
    
                /**
                 * FileOptions javaGenericServices.
                 * @member {boolean} javaGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaGenericServices = false;
    
                /**
                 * FileOptions pyGenericServices.
                 * @member {boolean} pyGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.pyGenericServices = false;
    
                /**
                 * FileOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.deprecated = false;
    
                /**
                 * FileOptions ccEnableArenas.
                 * @member {boolean} ccEnableArenas
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.ccEnableArenas = false;
    
                /**
                 * FileOptions objcClassPrefix.
                 * @member {string} objcClassPrefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.objcClassPrefix = "";
    
                /**
                 * FileOptions csharpNamespace.
                 * @member {string} csharpNamespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.csharpNamespace = "";
    
                /**
                 * FileOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new FileOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FileOptions} FileOptions instance
                 */
                FileOptions.create = function create(properties) {
                    return new FileOptions(properties);
                };
    
                /**
                 * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.javaPackage = reader.string();
                            break;
                        case 8:
                            message.javaOuterClassname = reader.string();
                            break;
                        case 10:
                            message.javaMultipleFiles = reader.bool();
                            break;
                        case 20:
                            message.javaGenerateEqualsAndHash = reader.bool();
                            break;
                        case 27:
                            message.javaStringCheckUtf8 = reader.bool();
                            break;
                        case 9:
                            message.optimizeFor = reader.int32();
                            break;
                        case 11:
                            message.goPackage = reader.string();
                            break;
                        case 16:
                            message.ccGenericServices = reader.bool();
                            break;
                        case 17:
                            message.javaGenericServices = reader.bool();
                            break;
                        case 18:
                            message.pyGenericServices = reader.bool();
                            break;
                        case 23:
                            message.deprecated = reader.bool();
                            break;
                        case 31:
                            message.ccEnableArenas = reader.bool();
                            break;
                        case 36:
                            message.objcClassPrefix = reader.string();
                            break;
                        case 37:
                            message.csharpNamespace = reader.string();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileOptions message.
                 * @function verify
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        if (!$util.isString(message.javaPackage))
                            return "javaPackage: string expected";
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        if (!$util.isString(message.javaOuterClassname))
                            return "javaOuterClassname: string expected";
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        if (typeof message.javaMultipleFiles !== "boolean")
                            return "javaMultipleFiles: boolean expected";
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                            return "javaGenerateEqualsAndHash: boolean expected";
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        if (typeof message.javaStringCheckUtf8 !== "boolean")
                            return "javaStringCheckUtf8: boolean expected";
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        switch (message.optimizeFor) {
                        default:
                            return "optimizeFor: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        if (!$util.isString(message.goPackage))
                            return "goPackage: string expected";
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        if (typeof message.ccGenericServices !== "boolean")
                            return "ccGenericServices: boolean expected";
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        if (typeof message.javaGenericServices !== "boolean")
                            return "javaGenericServices: boolean expected";
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        if (typeof message.pyGenericServices !== "boolean")
                            return "pyGenericServices: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        if (typeof message.ccEnableArenas !== "boolean")
                            return "ccEnableArenas: boolean expected";
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        if (!$util.isString(message.objcClassPrefix))
                            return "objcClassPrefix: string expected";
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        if (!$util.isString(message.csharpNamespace))
                            return "csharpNamespace: string expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileOptions)
                        return object;
                    var message = new $root.google.protobuf.FileOptions();
                    if (object.javaPackage != null)
                        message.javaPackage = String(object.javaPackage);
                    if (object.javaOuterClassname != null)
                        message.javaOuterClassname = String(object.javaOuterClassname);
                    if (object.javaMultipleFiles != null)
                        message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                    if (object.javaGenerateEqualsAndHash != null)
                        message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                    if (object.javaStringCheckUtf8 != null)
                        message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                    switch (object.optimizeFor) {
                    case "SPEED":
                    case 1:
                        message.optimizeFor = 1;
                        break;
                    case "CODE_SIZE":
                    case 2:
                        message.optimizeFor = 2;
                        break;
                    case "LITE_RUNTIME":
                    case 3:
                        message.optimizeFor = 3;
                        break;
                    }
                    if (object.goPackage != null)
                        message.goPackage = String(object.goPackage);
                    if (object.ccGenericServices != null)
                        message.ccGenericServices = Boolean(object.ccGenericServices);
                    if (object.javaGenericServices != null)
                        message.javaGenericServices = Boolean(object.javaGenericServices);
                    if (object.pyGenericServices != null)
                        message.pyGenericServices = Boolean(object.pyGenericServices);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.ccEnableArenas != null)
                        message.ccEnableArenas = Boolean(object.ccEnableArenas);
                    if (object.objcClassPrefix != null)
                        message.objcClassPrefix = String(object.objcClassPrefix);
                    if (object.csharpNamespace != null)
                        message.csharpNamespace = String(object.csharpNamespace);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions} message FileOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.javaPackage = "";
                        object.javaOuterClassname = "";
                        object.optimizeFor = options.enums === String ? "SPEED" : 1;
                        object.javaMultipleFiles = false;
                        object.goPackage = "";
                        object.ccGenericServices = false;
                        object.javaGenericServices = false;
                        object.pyGenericServices = false;
                        object.javaGenerateEqualsAndHash = false;
                        object.deprecated = false;
                        object.javaStringCheckUtf8 = false;
                        object.ccEnableArenas = false;
                        object.objcClassPrefix = "";
                        object.csharpNamespace = "";
                    }
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        object.javaPackage = message.javaPackage;
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        object.javaOuterClassname = message.javaOuterClassname;
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        object.javaMultipleFiles = message.javaMultipleFiles;
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        object.goPackage = message.goPackage;
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        object.ccGenericServices = message.ccGenericServices;
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        object.javaGenericServices = message.javaGenericServices;
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        object.pyGenericServices = message.pyGenericServices;
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        object.ccEnableArenas = message.ccEnableArenas;
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        object.objcClassPrefix = message.objcClassPrefix;
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        object.csharpNamespace = message.csharpNamespace;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * OptimizeMode enum.
                 * @name google.protobuf.FileOptions.OptimizeMode
                 * @enum {string}
                 * @property {number} SPEED=1 SPEED value
                 * @property {number} CODE_SIZE=2 CODE_SIZE value
                 * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
                 */
                FileOptions.OptimizeMode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "SPEED"] = 1;
                    values[valuesById[2] = "CODE_SIZE"] = 2;
                    values[valuesById[3] = "LITE_RUNTIME"] = 3;
                    return values;
                })();
    
                return FileOptions;
            })();
    
            protobuf.MessageOptions = (function() {
    
                /**
                 * Properties of a MessageOptions.
                 * @memberof google.protobuf
                 * @interface IMessageOptions
                 * @property {boolean|null} [messageSetWireFormat] MessageOptions messageSetWireFormat
                 * @property {boolean|null} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
                 * @property {boolean|null} [deprecated] MessageOptions deprecated
                 * @property {boolean|null} [mapEntry] MessageOptions mapEntry
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MessageOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new MessageOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MessageOptions.
                 * @implements IMessageOptions
                 * @constructor
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 */
                function MessageOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MessageOptions messageSetWireFormat.
                 * @member {boolean} messageSetWireFormat
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.messageSetWireFormat = false;
    
                /**
                 * MessageOptions noStandardDescriptorAccessor.
                 * @member {boolean} noStandardDescriptorAccessor
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.noStandardDescriptorAccessor = false;
    
                /**
                 * MessageOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.deprecated = false;
    
                /**
                 * MessageOptions mapEntry.
                 * @member {boolean} mapEntry
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.mapEntry = false;
    
                /**
                 * MessageOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new MessageOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MessageOptions} MessageOptions instance
                 */
                MessageOptions.create = function create(properties) {
                    return new MessageOptions(properties);
                };
    
                /**
                 * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.messageSetWireFormat = reader.bool();
                            break;
                        case 2:
                            message.noStandardDescriptorAccessor = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 7:
                            message.mapEntry = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MessageOptions message.
                 * @function verify
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        if (typeof message.messageSetWireFormat !== "boolean")
                            return "messageSetWireFormat: boolean expected";
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        if (typeof message.noStandardDescriptorAccessor !== "boolean")
                            return "noStandardDescriptorAccessor: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        if (typeof message.mapEntry !== "boolean")
                            return "mapEntry: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MessageOptions)
                        return object;
                    var message = new $root.google.protobuf.MessageOptions();
                    if (object.messageSetWireFormat != null)
                        message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                    if (object.noStandardDescriptorAccessor != null)
                        message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.mapEntry != null)
                        message.mapEntry = Boolean(object.mapEntry);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions} message MessageOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.messageSetWireFormat = false;
                        object.noStandardDescriptorAccessor = false;
                        object.deprecated = false;
                        object.mapEntry = false;
                    }
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        object.messageSetWireFormat = message.messageSetWireFormat;
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        object.mapEntry = message.mapEntry;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this MessageOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MessageOptions;
            })();
    
            protobuf.FieldOptions = (function() {
    
                /**
                 * Properties of a FieldOptions.
                 * @memberof google.protobuf
                 * @interface IFieldOptions
                 * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
                 * @property {boolean|null} [packed] FieldOptions packed
                 * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
                 * @property {boolean|null} [lazy] FieldOptions lazy
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
                 * @property {boolean|null} [weak] FieldOptions weak
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new FieldOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldOptions.
                 * @implements IFieldOptions
                 * @constructor
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 */
                function FieldOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldOptions ctype.
                 * @member {google.protobuf.FieldOptions.CType} ctype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.ctype = 0;
    
                /**
                 * FieldOptions packed.
                 * @member {boolean} packed
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.packed = false;
    
                /**
                 * FieldOptions jstype.
                 * @member {google.protobuf.FieldOptions.JSType} jstype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.jstype = 0;
    
                /**
                 * FieldOptions lazy.
                 * @member {boolean} lazy
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.lazy = false;
    
                /**
                 * FieldOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.deprecated = false;
    
                /**
                 * FieldOptions weak.
                 * @member {boolean} weak
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.weak = false;
    
                /**
                 * FieldOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new FieldOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions} FieldOptions instance
                 */
                FieldOptions.create = function create(properties) {
                    return new FieldOptions(properties);
                };
    
                /**
                 * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.ctype = reader.int32();
                            break;
                        case 2:
                            message.packed = reader.bool();
                            break;
                        case 6:
                            message.jstype = reader.int32();
                            break;
                        case 5:
                            message.lazy = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 10:
                            message.weak = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldOptions message.
                 * @function verify
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        switch (message.ctype) {
                        default:
                            return "ctype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        if (typeof message.packed !== "boolean")
                            return "packed: boolean expected";
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        switch (message.jstype) {
                        default:
                            return "jstype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        if (typeof message.lazy !== "boolean")
                            return "lazy: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        if (typeof message.weak !== "boolean")
                            return "weak: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldOptions)
                        return object;
                    var message = new $root.google.protobuf.FieldOptions();
                    switch (object.ctype) {
                    case "STRING":
                    case 0:
                        message.ctype = 0;
                        break;
                    case "CORD":
                    case 1:
                        message.ctype = 1;
                        break;
                    case "STRING_PIECE":
                    case 2:
                        message.ctype = 2;
                        break;
                    }
                    if (object.packed != null)
                        message.packed = Boolean(object.packed);
                    switch (object.jstype) {
                    case "JS_NORMAL":
                    case 0:
                        message.jstype = 0;
                        break;
                    case "JS_STRING":
                    case 1:
                        message.jstype = 1;
                        break;
                    case "JS_NUMBER":
                    case 2:
                        message.jstype = 2;
                        break;
                    }
                    if (object.lazy != null)
                        message.lazy = Boolean(object.lazy);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.weak != null)
                        message.weak = Boolean(object.weak);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions} message FieldOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.ctype = options.enums === String ? "STRING" : 0;
                        object.packed = false;
                        object.deprecated = false;
                        object.lazy = false;
                        object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                        object.weak = false;
                    }
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        object.packed = message.packed;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        object.lazy = message.lazy;
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        object.weak = message.weak;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FieldOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * CType enum.
                 * @name google.protobuf.FieldOptions.CType
                 * @enum {string}
                 * @property {number} STRING=0 STRING value
                 * @property {number} CORD=1 CORD value
                 * @property {number} STRING_PIECE=2 STRING_PIECE value
                 */
                FieldOptions.CType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STRING"] = 0;
                    values[valuesById[1] = "CORD"] = 1;
                    values[valuesById[2] = "STRING_PIECE"] = 2;
                    return values;
                })();
    
                /**
                 * JSType enum.
                 * @name google.protobuf.FieldOptions.JSType
                 * @enum {string}
                 * @property {number} JS_NORMAL=0 JS_NORMAL value
                 * @property {number} JS_STRING=1 JS_STRING value
                 * @property {number} JS_NUMBER=2 JS_NUMBER value
                 */
                FieldOptions.JSType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "JS_NORMAL"] = 0;
                    values[valuesById[1] = "JS_STRING"] = 1;
                    values[valuesById[2] = "JS_NUMBER"] = 2;
                    return values;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.OneofOptions = (function() {
    
                /**
                 * Properties of an OneofOptions.
                 * @memberof google.protobuf
                 * @interface IOneofOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] OneofOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new OneofOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofOptions.
                 * @implements IOneofOptions
                 * @constructor
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 */
                function OneofOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 */
                OneofOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new OneofOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 * @returns {google.protobuf.OneofOptions} OneofOptions instance
                 */
                OneofOptions.create = function create(properties) {
                    return new OneofOptions(properties);
                };
    
                /**
                 * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofOptions message.
                 * @function verify
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 */
                OneofOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofOptions)
                        return object;
                    var message = new $root.google.protobuf.OneofOptions();
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.OneofOptions} message OneofOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this OneofOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OneofOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Properties of an EnumOptions.
                 * @memberof google.protobuf
                 * @interface IEnumOptions
                 * @property {boolean|null} [allowAlias] EnumOptions allowAlias
                 * @property {boolean|null} [deprecated] EnumOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new EnumOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumOptions.
                 * @implements IEnumOptions
                 * @constructor
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 */
                function EnumOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumOptions allowAlias.
                 * @member {boolean} allowAlias
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.allowAlias = false;
    
                /**
                 * EnumOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.deprecated = false;
    
                /**
                 * EnumOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new EnumOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumOptions} EnumOptions instance
                 */
                EnumOptions.create = function create(properties) {
                    return new EnumOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            message.allowAlias = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        if (typeof message.allowAlias !== "boolean")
                            return "allowAlias: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumOptions();
                    if (object.allowAlias != null)
                        message.allowAlias = Boolean(object.allowAlias);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions} message EnumOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.allowAlias = false;
                        object.deprecated = false;
                    }
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        object.allowAlias = message.allowAlias;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumOptions;
            })();
    
            protobuf.EnumValueOptions = (function() {
    
                /**
                 * Properties of an EnumValueOptions.
                 * @memberof google.protobuf
                 * @interface IEnumValueOptions
                 * @property {boolean|null} [deprecated] EnumValueOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumValueOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new EnumValueOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueOptions.
                 * @implements IEnumValueOptions
                 * @constructor
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 */
                function EnumValueOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.deprecated = false;
    
                /**
                 * EnumValueOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new EnumValueOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
                 */
                EnumValueOptions.create = function create(properties) {
                    return new EnumValueOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumValueOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumValueOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueOptions;
            })();
    
            protobuf.ServiceOptions = (function() {
    
                /**
                 * Properties of a ServiceOptions.
                 * @memberof google.protobuf
                 * @interface IServiceOptions
                 * @property {boolean|null} [deprecated] ServiceOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ServiceOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new ServiceOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceOptions.
                 * @implements IServiceOptions
                 * @constructor
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 */
                function ServiceOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.deprecated = false;
    
                /**
                 * ServiceOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new ServiceOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
                 */
                ServiceOptions.create = function create(properties) {
                    return new ServiceOptions(properties);
                };
    
                /**
                 * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceOptions message.
                 * @function verify
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceOptions)
                        return object;
                    var message = new $root.google.protobuf.ServiceOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions} message ServiceOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this ServiceOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceOptions;
            })();
    
            protobuf.MethodOptions = (function() {
    
                /**
                 * Properties of a MethodOptions.
                 * @memberof google.protobuf
                 * @interface IMethodOptions
                 * @property {boolean|null} [deprecated] MethodOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MethodOptions uninterpretedOption
                 * @property {google.api.IHttpRule|null} [".google.api.http"] MethodOptions .google.api.http
                 */
    
                /**
                 * Constructs a new MethodOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodOptions.
                 * @implements IMethodOptions
                 * @constructor
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 */
                function MethodOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.deprecated = false;
    
                /**
                 * MethodOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * MethodOptions .google.api.http.
                 * @member {google.api.IHttpRule|null|undefined} .google.api.http
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype[".google.api.http"] = null;
    
                /**
                 * Creates a new MethodOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MethodOptions} MethodOptions instance
                 */
                MethodOptions.create = function create(properties) {
                    return new MethodOptions(properties);
                };
    
                /**
                 * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http"))
                        $root.google.api.HttpRule.encode(message[".google.api.http"], writer.uint32(/* id 72295728, wireType 2 =*/578365826).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 72295728:
                            message[".google.api.http"] = $root.google.api.HttpRule.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodOptions message.
                 * @function verify
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http")) {
                        var error = $root.google.api.HttpRule.verify(message[".google.api.http"]);
                        if (error)
                            return ".google.api.http." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodOptions)
                        return object;
                    var message = new $root.google.protobuf.MethodOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".google.api.http"] != null) {
                        if (typeof object[".google.api.http"] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions..google.api.http: object expected");
                        message[".google.api.http"] = $root.google.api.HttpRule.fromObject(object[".google.api.http"]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions} message MethodOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.deprecated = false;
                        object[".google.api.http"] = null;
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http"))
                        object[".google.api.http"] = $root.google.api.HttpRule.toObject(message[".google.api.http"], options);
                    return object;
                };
    
                /**
                 * Converts this MethodOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MethodOptions;
            })();
    
            protobuf.UninterpretedOption = (function() {
    
                /**
                 * Properties of an UninterpretedOption.
                 * @memberof google.protobuf
                 * @interface IUninterpretedOption
                 * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
                 * @property {string|null} [identifierValue] UninterpretedOption identifierValue
                 * @property {number|Long|null} [positiveIntValue] UninterpretedOption positiveIntValue
                 * @property {number|Long|null} [negativeIntValue] UninterpretedOption negativeIntValue
                 * @property {number|null} [doubleValue] UninterpretedOption doubleValue
                 * @property {Uint8Array|null} [stringValue] UninterpretedOption stringValue
                 * @property {string|null} [aggregateValue] UninterpretedOption aggregateValue
                 */
    
                /**
                 * Constructs a new UninterpretedOption.
                 * @memberof google.protobuf
                 * @classdesc Represents an UninterpretedOption.
                 * @implements IUninterpretedOption
                 * @constructor
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 */
                function UninterpretedOption(properties) {
                    this.name = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UninterpretedOption name.
                 * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.name = $util.emptyArray;
    
                /**
                 * UninterpretedOption identifierValue.
                 * @member {string} identifierValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.identifierValue = "";
    
                /**
                 * UninterpretedOption positiveIntValue.
                 * @member {number|Long} positiveIntValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * UninterpretedOption negativeIntValue.
                 * @member {number|Long} negativeIntValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * UninterpretedOption doubleValue.
                 * @member {number} doubleValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.doubleValue = 0;
    
                /**
                 * UninterpretedOption stringValue.
                 * @member {Uint8Array} stringValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.stringValue = $util.newBuffer([]);
    
                /**
                 * UninterpretedOption aggregateValue.
                 * @member {string} aggregateValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.aggregateValue = "";
    
                /**
                 * Creates a new UninterpretedOption instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
                 */
                UninterpretedOption.create = function create(properties) {
                    return new UninterpretedOption(properties);
                };
    
                /**
                 * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.name.length)
                        for (var i = 0; i < message.name.length; ++i)
                            $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                    return writer;
                };
    
                /**
                 * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.identifierValue = reader.string();
                            break;
                        case 4:
                            message.positiveIntValue = reader.uint64();
                            break;
                        case 5:
                            message.negativeIntValue = reader.int64();
                            break;
                        case 6:
                            message.doubleValue = reader.double();
                            break;
                        case 7:
                            message.stringValue = reader.bytes();
                            break;
                        case 8:
                            message.aggregateValue = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UninterpretedOption message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UninterpretedOption.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        if (!Array.isArray(message.name))
                            return "name: array expected";
                        for (var i = 0; i < message.name.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                            if (error)
                                return "name." + error;
                        }
                    }
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        if (!$util.isString(message.identifierValue))
                            return "identifierValue: string expected";
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                            return "positiveIntValue: integer|Long expected";
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                            return "negativeIntValue: integer|Long expected";
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        if (typeof message.doubleValue !== "number")
                            return "doubleValue: number expected";
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                            return "stringValue: buffer expected";
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        if (!$util.isString(message.aggregateValue))
                            return "aggregateValue: string expected";
                    return null;
                };
    
                /**
                 * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption();
                    if (object.name) {
                        if (!Array.isArray(object.name))
                            throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                        message.name = [];
                        for (var i = 0; i < object.name.length; ++i) {
                            if (typeof object.name[i] !== "object")
                                throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                            message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                        }
                    }
                    if (object.identifierValue != null)
                        message.identifierValue = String(object.identifierValue);
                    if (object.positiveIntValue != null)
                        if ($util.Long)
                            (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                        else if (typeof object.positiveIntValue === "string")
                            message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                        else if (typeof object.positiveIntValue === "number")
                            message.positiveIntValue = object.positiveIntValue;
                        else if (typeof object.positiveIntValue === "object")
                            message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                    if (object.negativeIntValue != null)
                        if ($util.Long)
                            (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                        else if (typeof object.negativeIntValue === "string")
                            message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                        else if (typeof object.negativeIntValue === "number")
                            message.negativeIntValue = object.negativeIntValue;
                        else if (typeof object.negativeIntValue === "object")
                            message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                    if (object.doubleValue != null)
                        message.doubleValue = Number(object.doubleValue);
                    if (object.stringValue != null)
                        if (typeof object.stringValue === "string")
                            $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                        else if (object.stringValue.length)
                            message.stringValue = object.stringValue;
                    if (object.aggregateValue != null)
                        message.aggregateValue = String(object.aggregateValue);
                    return message;
                };
    
                /**
                 * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UninterpretedOption.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.name = [];
                    if (options.defaults) {
                        object.identifierValue = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.positiveIntValue = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.negativeIntValue = options.longs === String ? "0" : 0;
                        object.doubleValue = 0;
                        if (options.bytes === String)
                            object.stringValue = "";
                        else {
                            object.stringValue = [];
                            if (options.bytes !== Array)
                                object.stringValue = $util.newBuffer(object.stringValue);
                        }
                        object.aggregateValue = "";
                    }
                    if (message.name && message.name.length) {
                        object.name = [];
                        for (var j = 0; j < message.name.length; ++j)
                            object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                    }
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        object.identifierValue = message.identifierValue;
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        if (typeof message.positiveIntValue === "number")
                            object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                        else
                            object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        if (typeof message.negativeIntValue === "number")
                            object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                        else
                            object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        object.aggregateValue = message.aggregateValue;
                    return object;
                };
    
                /**
                 * Converts this UninterpretedOption to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UninterpretedOption.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                UninterpretedOption.NamePart = (function() {
    
                    /**
                     * Properties of a NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @interface INamePart
                     * @property {string} namePart NamePart namePart
                     * @property {boolean} isExtension NamePart isExtension
                     */
    
                    /**
                     * Constructs a new NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @classdesc Represents a NamePart.
                     * @implements INamePart
                     * @constructor
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     */
                    function NamePart(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NamePart namePart.
                     * @member {string} namePart
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.namePart = "";
    
                    /**
                     * NamePart isExtension.
                     * @member {boolean} isExtension
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.isExtension = false;
    
                    /**
                     * Creates a new NamePart instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                     */
                    NamePart.create = function create(properties) {
                        return new NamePart(properties);
                    };
    
                    /**
                     * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.namePart = reader.string();
                                break;
                            case 2:
                                message.isExtension = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("namePart"))
                            throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                        if (!message.hasOwnProperty("isExtension"))
                            throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NamePart message.
                     * @function verify
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NamePart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.namePart))
                            return "namePart: string expected";
                        if (typeof message.isExtension !== "boolean")
                            return "isExtension: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                            return object;
                        var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        if (object.namePart != null)
                            message.namePart = String(object.namePart);
                        if (object.isExtension != null)
                            message.isExtension = Boolean(object.isExtension);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NamePart.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.namePart = "";
                            object.isExtension = false;
                        }
                        if (message.namePart != null && message.hasOwnProperty("namePart"))
                            object.namePart = message.namePart;
                        if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                            object.isExtension = message.isExtension;
                        return object;
                    };
    
                    /**
                     * Converts this NamePart to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NamePart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return NamePart;
                })();
    
                return UninterpretedOption;
            })();
    
            protobuf.SourceCodeInfo = (function() {
    
                /**
                 * Properties of a SourceCodeInfo.
                 * @memberof google.protobuf
                 * @interface ISourceCodeInfo
                 * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
                 */
    
                /**
                 * Constructs a new SourceCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a SourceCodeInfo.
                 * @implements ISourceCodeInfo
                 * @constructor
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 */
                function SourceCodeInfo(properties) {
                    this.location = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SourceCodeInfo location.
                 * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 */
                SourceCodeInfo.prototype.location = $util.emptyArray;
    
                /**
                 * Creates a new SourceCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
                 */
                SourceCodeInfo.create = function create(properties) {
                    return new SourceCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.location != null && message.location.length)
                        for (var i = 0; i < message.location.length; ++i)
                            $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.location && message.location.length))
                                message.location = [];
                            message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SourceCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SourceCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.location != null && message.hasOwnProperty("location")) {
                        if (!Array.isArray(message.location))
                            return "location: array expected";
                        for (var i = 0; i < message.location.length; ++i) {
                            var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                            if (error)
                                return "location." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo();
                    if (object.location) {
                        if (!Array.isArray(object.location))
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                        message.location = [];
                        for (var i = 0; i < object.location.length; ++i) {
                            if (typeof object.location[i] !== "object")
                                throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                            message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (message.location && message.location.length) {
                        object.location = [];
                        for (var j = 0; j < message.location.length; ++j)
                            object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this SourceCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SourceCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                SourceCodeInfo.Location = (function() {
    
                    /**
                     * Properties of a Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @interface ILocation
                     * @property {Array.<number>|null} [path] Location path
                     * @property {Array.<number>|null} [span] Location span
                     * @property {string|null} [leadingComments] Location leadingComments
                     * @property {string|null} [trailingComments] Location trailingComments
                     * @property {Array.<string>|null} [leadingDetachedComments] Location leadingDetachedComments
                     */
    
                    /**
                     * Constructs a new Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @classdesc Represents a Location.
                     * @implements ILocation
                     * @constructor
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     */
                    function Location(properties) {
                        this.path = [];
                        this.span = [];
                        this.leadingDetachedComments = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Location path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.path = $util.emptyArray;
    
                    /**
                     * Location span.
                     * @member {Array.<number>} span
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.span = $util.emptyArray;
    
                    /**
                     * Location leadingComments.
                     * @member {string} leadingComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leadingComments = "";
    
                    /**
                     * Location trailingComments.
                     * @member {string} trailingComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.trailingComments = "";
    
                    /**
                     * Location leadingDetachedComments.
                     * @member {Array.<string>} leadingDetachedComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leadingDetachedComments = $util.emptyArray;
    
                    /**
                     * Creates a new Location instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                     */
                    Location.create = function create(properties) {
                        return new Location(properties);
                    };
    
                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.span != null && message.span.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.span.length; ++i)
                                writer.int32(message.span[i]);
                            writer.ldelim();
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                        if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                            for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                if (!(message.span && message.span.length))
                                    message.span = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.span.push(reader.int32());
                                } else
                                    message.span.push(reader.int32());
                                break;
                            case 3:
                                message.leadingComments = reader.string();
                                break;
                            case 4:
                                message.trailingComments = reader.string();
                                break;
                            case 6:
                                if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                    message.leadingDetachedComments = [];
                                message.leadingDetachedComments.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Location message.
                     * @function verify
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.span != null && message.hasOwnProperty("span")) {
                            if (!Array.isArray(message.span))
                                return "span: array expected";
                            for (var i = 0; i < message.span.length; ++i)
                                if (!$util.isInteger(message.span[i]))
                                    return "span: integer[] expected";
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            if (!$util.isString(message.leadingComments))
                                return "leadingComments: string expected";
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            if (!$util.isString(message.trailingComments))
                                return "trailingComments: string expected";
                        if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                            if (!Array.isArray(message.leadingDetachedComments))
                                return "leadingDetachedComments: array expected";
                            for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                                if (!$util.isString(message.leadingDetachedComments[i]))
                                    return "leadingDetachedComments: string[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                            return object;
                        var message = new $root.google.protobuf.SourceCodeInfo.Location();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.span) {
                            if (!Array.isArray(object.span))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                            message.span = [];
                            for (var i = 0; i < object.span.length; ++i)
                                message.span[i] = object.span[i] | 0;
                        }
                        if (object.leadingComments != null)
                            message.leadingComments = String(object.leadingComments);
                        if (object.trailingComments != null)
                            message.trailingComments = String(object.trailingComments);
                        if (object.leadingDetachedComments) {
                            if (!Array.isArray(object.leadingDetachedComments))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                            message.leadingDetachedComments = [];
                            for (var i = 0; i < object.leadingDetachedComments.length; ++i)
                                message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location} message Location
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.path = [];
                            object.span = [];
                            object.leadingDetachedComments = [];
                        }
                        if (options.defaults) {
                            object.leadingComments = "";
                            object.trailingComments = "";
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.span && message.span.length) {
                            object.span = [];
                            for (var j = 0; j < message.span.length; ++j)
                                object.span[j] = message.span[j];
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            object.leadingComments = message.leadingComments;
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            object.trailingComments = message.trailingComments;
                        if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                            object.leadingDetachedComments = [];
                            for (var j = 0; j < message.leadingDetachedComments.length; ++j)
                                object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this Location to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Location;
                })();
    
                return SourceCodeInfo;
            })();
    
            protobuf.GeneratedCodeInfo = (function() {
    
                /**
                 * Properties of a GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @interface IGeneratedCodeInfo
                 * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
                 */
    
                /**
                 * Constructs a new GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a GeneratedCodeInfo.
                 * @implements IGeneratedCodeInfo
                 * @constructor
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 */
                function GeneratedCodeInfo(properties) {
                    this.annotation = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * GeneratedCodeInfo annotation.
                 * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 */
                GeneratedCodeInfo.prototype.annotation = $util.emptyArray;
    
                /**
                 * Creates a new GeneratedCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
                 */
                GeneratedCodeInfo.create = function create(properties) {
                    return new GeneratedCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.annotation != null && message.annotation.length)
                        for (var i = 0; i < message.annotation.length; ++i)
                            $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.annotation && message.annotation.length))
                                message.annotation = [];
                            message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a GeneratedCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GeneratedCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.annotation != null && message.hasOwnProperty("annotation")) {
                        if (!Array.isArray(message.annotation))
                            return "annotation: array expected";
                        for (var i = 0; i < message.annotation.length; ++i) {
                            var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                            if (error)
                                return "annotation." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 */
                GeneratedCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo();
                    if (object.annotation) {
                        if (!Array.isArray(object.annotation))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                        message.annotation = [];
                        for (var i = 0; i < object.annotation.length; ++i) {
                            if (typeof object.annotation[i] !== "object")
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                            message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeneratedCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.annotation = [];
                    if (message.annotation && message.annotation.length) {
                        object.annotation = [];
                        for (var j = 0; j < message.annotation.length; ++j)
                            object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this GeneratedCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                GeneratedCodeInfo.Annotation = (function() {
    
                    /**
                     * Properties of an Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @interface IAnnotation
                     * @property {Array.<number>|null} [path] Annotation path
                     * @property {string|null} [sourceFile] Annotation sourceFile
                     * @property {number|null} [begin] Annotation begin
                     * @property {number|null} [end] Annotation end
                     */
    
                    /**
                     * Constructs a new Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @classdesc Represents an Annotation.
                     * @implements IAnnotation
                     * @constructor
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     */
                    function Annotation(properties) {
                        this.path = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Annotation path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.path = $util.emptyArray;
    
                    /**
                     * Annotation sourceFile.
                     * @member {string} sourceFile
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.sourceFile = "";
    
                    /**
                     * Annotation begin.
                     * @member {number} begin
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.begin = 0;
    
                    /**
                     * Annotation end.
                     * @member {number} end
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.end = 0;
    
                    /**
                     * Creates a new Annotation instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                     */
                    Annotation.create = function create(properties) {
                        return new Annotation(properties);
                    };
    
                    /**
                     * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                message.sourceFile = reader.string();
                                break;
                            case 3:
                                message.begin = reader.int32();
                                break;
                            case 4:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an Annotation message.
                     * @function verify
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Annotation.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            if (!$util.isString(message.sourceFile))
                                return "sourceFile: string expected";
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            if (!$util.isInteger(message.begin))
                                return "begin: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     */
                    Annotation.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                            return object;
                        var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.sourceFile != null)
                            message.sourceFile = String(object.sourceFile);
                        if (object.begin != null)
                            message.begin = object.begin | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Annotation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.path = [];
                        if (options.defaults) {
                            object.sourceFile = "";
                            object.begin = 0;
                            object.end = 0;
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            object.sourceFile = message.sourceFile;
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            object.begin = message.begin;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this Annotation to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Annotation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Annotation;
                })();
    
                return GeneratedCodeInfo;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();
    
    $root.envelopestore = (function() {
    
        /**
         * Namespace envelopestore.
         * @exports envelopestore
         * @namespace
         */
        var envelopestore = {};
    
        return envelopestore;
    })();
    
    $root.error = (function() {
    
        /**
         * Namespace error.
         * @exports error
         * @namespace
         */
        var error = {};
    
        error.Error = (function() {
    
            /**
             * Properties of an Error.
             * @memberof error
             * @interface IError
             * @property {string|null} [message] Error message
             * @property {number|Long|null} [code] Error code
             * @property {string|null} [component] Error component
             * @property {Object.<string,string>|null} [extra] Error extra
             */
    
            /**
             * Constructs a new Error.
             * @memberof error
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {error.IError=} [properties] Properties to set
             */
            function Error(properties) {
                this.extra = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Error message.
             * @member {string} message
             * @memberof error.Error
             * @instance
             */
            Error.prototype.message = "";
    
            /**
             * Error code.
             * @member {number|Long} code
             * @memberof error.Error
             * @instance
             */
            Error.prototype.code = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Error component.
             * @member {string} component
             * @memberof error.Error
             * @instance
             */
            Error.prototype.component = "";
    
            /**
             * Error extra.
             * @member {Object.<string,string>} extra
             * @memberof error.Error
             * @instance
             */
            Error.prototype.extra = $util.emptyObject;
    
            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof error.Error
             * @static
             * @param {error.IError=} [properties] Properties to set
             * @returns {error.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };
    
            /**
             * Encodes the specified Error message. Does not implicitly {@link error.Error.verify|verify} messages.
             * @function encode
             * @memberof error.Error
             * @static
             * @param {error.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.code);
                if (message.component != null && message.hasOwnProperty("component"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.component);
                if (message.extra != null && message.hasOwnProperty("extra"))
                    for (var keys = Object.keys(message.extra), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.extra[keys[i]]).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link error.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof error.Error
             * @static
             * @param {error.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof error.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {error.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.error.Error(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    case 2:
                        message.code = reader.uint64();
                        break;
                    case 3:
                        message.component = reader.string();
                        break;
                    case 4:
                        reader.skip().pos++;
                        if (message.extra === $util.emptyObject)
                            message.extra = {};
                        key = reader.string();
                        reader.pos++;
                        message.extra[key] = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof error.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {error.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Error message.
             * @function verify
             * @memberof error.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                        return "code: integer|Long expected";
                if (message.component != null && message.hasOwnProperty("component"))
                    if (!$util.isString(message.component))
                        return "component: string expected";
                if (message.extra != null && message.hasOwnProperty("extra")) {
                    if (!$util.isObject(message.extra))
                        return "extra: object expected";
                    var key = Object.keys(message.extra);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.extra[key[i]]))
                            return "extra: string{k:string} expected";
                }
                return null;
            };
    
            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof error.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {error.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.error.Error)
                    return object;
                var message = new $root.error.Error();
                if (object.message != null)
                    message.message = String(object.message);
                if (object.code != null)
                    if ($util.Long)
                        (message.code = $util.Long.fromValue(object.code)).unsigned = true;
                    else if (typeof object.code === "string")
                        message.code = parseInt(object.code, 10);
                    else if (typeof object.code === "number")
                        message.code = object.code;
                    else if (typeof object.code === "object")
                        message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber(true);
                if (object.component != null)
                    message.component = String(object.component);
                if (object.extra) {
                    if (typeof object.extra !== "object")
                        throw TypeError(".error.Error.extra: object expected");
                    message.extra = {};
                    for (var keys = Object.keys(object.extra), i = 0; i < keys.length; ++i)
                        message.extra[keys[i]] = String(object.extra[keys[i]]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof error.Error
             * @static
             * @param {error.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.extra = {};
                if (options.defaults) {
                    object.message = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.code = options.longs === String ? "0" : 0;
                    object.component = "";
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.code != null && message.hasOwnProperty("code"))
                    if (typeof message.code === "number")
                        object.code = options.longs === String ? String(message.code) : message.code;
                    else
                        object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber(true) : message.code;
                if (message.component != null && message.hasOwnProperty("component"))
                    object.component = message.component;
                var keys2;
                if (message.extra && (keys2 = Object.keys(message.extra)).length) {
                    object.extra = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.extra[keys2[j]] = message.extra[keys2[j]];
                }
                return object;
            };
    
            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof error.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Error;
        })();
    
        return error;
    })();
    
    $root.ethereum = (function() {
    
        /**
         * Namespace ethereum.
         * @exports ethereum
         * @namespace
         */
        var ethereum = {};
    
        ethereum.Log = (function() {
    
            /**
             * Properties of a Log.
             * @memberof ethereum
             * @interface ILog
             * @property {string|null} [address] Log address
             * @property {Array.<string>|null} [topics] Log topics
             * @property {string|null} [data] Log data
             * @property {string|null} [event] Log event
             * @property {Object.<string,string>|null} [decodedData] Log decodedData
             * @property {number|Long|null} [blockNumber] Log blockNumber
             * @property {string|null} [txHash] Log txHash
             * @property {number|Long|null} [txIndex] Log txIndex
             * @property {string|null} [blockHash] Log blockHash
             * @property {number|Long|null} [index] Log index
             * @property {boolean|null} [removed] Log removed
             */
    
            /**
             * Constructs a new Log.
             * @memberof ethereum
             * @classdesc Represents a Log.
             * @implements ILog
             * @constructor
             * @param {ethereum.ILog=} [properties] Properties to set
             */
            function Log(properties) {
                this.topics = [];
                this.decodedData = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Log address.
             * @member {string} address
             * @memberof ethereum.Log
             * @instance
             */
            Log.prototype.address = "";
    
            /**
             * Log topics.
             * @member {Array.<string>} topics
             * @memberof ethereum.Log
             * @instance
             */
            Log.prototype.topics = $util.emptyArray;
    
            /**
             * Log data.
             * @member {string} data
             * @memberof ethereum.Log
             * @instance
             */
            Log.prototype.data = "";
    
            /**
             * Log event.
             * @member {string} event
             * @memberof ethereum.Log
             * @instance
             */
            Log.prototype.event = "";
    
            /**
             * Log decodedData.
             * @member {Object.<string,string>} decodedData
             * @memberof ethereum.Log
             * @instance
             */
            Log.prototype.decodedData = $util.emptyObject;
    
            /**
             * Log blockNumber.
             * @member {number|Long} blockNumber
             * @memberof ethereum.Log
             * @instance
             */
            Log.prototype.blockNumber = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Log txHash.
             * @member {string} txHash
             * @memberof ethereum.Log
             * @instance
             */
            Log.prototype.txHash = "";
    
            /**
             * Log txIndex.
             * @member {number|Long} txIndex
             * @memberof ethereum.Log
             * @instance
             */
            Log.prototype.txIndex = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Log blockHash.
             * @member {string} blockHash
             * @memberof ethereum.Log
             * @instance
             */
            Log.prototype.blockHash = "";
    
            /**
             * Log index.
             * @member {number|Long} index
             * @memberof ethereum.Log
             * @instance
             */
            Log.prototype.index = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Log removed.
             * @member {boolean} removed
             * @memberof ethereum.Log
             * @instance
             */
            Log.prototype.removed = false;
    
            /**
             * Creates a new Log instance using the specified properties.
             * @function create
             * @memberof ethereum.Log
             * @static
             * @param {ethereum.ILog=} [properties] Properties to set
             * @returns {ethereum.Log} Log instance
             */
            Log.create = function create(properties) {
                return new Log(properties);
            };
    
            /**
             * Encodes the specified Log message. Does not implicitly {@link ethereum.Log.verify|verify} messages.
             * @function encode
             * @memberof ethereum.Log
             * @static
             * @param {ethereum.ILog} message Log message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Log.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.address != null && message.hasOwnProperty("address"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
                if (message.topics != null && message.topics.length)
                    for (var i = 0; i < message.topics.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.topics[i]);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.data);
                if (message.event != null && message.hasOwnProperty("event"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.event);
                if (message.decodedData != null && message.hasOwnProperty("decodedData"))
                    for (var keys = Object.keys(message.decodedData), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.decodedData[keys[i]]).ldelim();
                if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.blockNumber);
                if (message.txHash != null && message.hasOwnProperty("txHash"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.txHash);
                if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.txIndex);
                if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.blockHash);
                if (message.index != null && message.hasOwnProperty("index"))
                    writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.index);
                if (message.removed != null && message.hasOwnProperty("removed"))
                    writer.uint32(/* id 11, wireType 0 =*/88).bool(message.removed);
                return writer;
            };
    
            /**
             * Encodes the specified Log message, length delimited. Does not implicitly {@link ethereum.Log.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ethereum.Log
             * @static
             * @param {ethereum.ILog} message Log message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Log.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Log message from the specified reader or buffer.
             * @function decode
             * @memberof ethereum.Log
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ethereum.Log} Log
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Log.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ethereum.Log(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.address = reader.string();
                        break;
                    case 2:
                        if (!(message.topics && message.topics.length))
                            message.topics = [];
                        message.topics.push(reader.string());
                        break;
                    case 3:
                        message.data = reader.string();
                        break;
                    case 4:
                        message.event = reader.string();
                        break;
                    case 5:
                        reader.skip().pos++;
                        if (message.decodedData === $util.emptyObject)
                            message.decodedData = {};
                        key = reader.string();
                        reader.pos++;
                        message.decodedData[key] = reader.string();
                        break;
                    case 6:
                        message.blockNumber = reader.uint64();
                        break;
                    case 7:
                        message.txHash = reader.string();
                        break;
                    case 8:
                        message.txIndex = reader.uint64();
                        break;
                    case 9:
                        message.blockHash = reader.string();
                        break;
                    case 10:
                        message.index = reader.uint64();
                        break;
                    case 11:
                        message.removed = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Log message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ethereum.Log
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ethereum.Log} Log
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Log.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Log message.
             * @function verify
             * @memberof ethereum.Log
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Log.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.address != null && message.hasOwnProperty("address"))
                    if (!$util.isString(message.address))
                        return "address: string expected";
                if (message.topics != null && message.hasOwnProperty("topics")) {
                    if (!Array.isArray(message.topics))
                        return "topics: array expected";
                    for (var i = 0; i < message.topics.length; ++i)
                        if (!$util.isString(message.topics[i]))
                            return "topics: string[] expected";
                }
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!$util.isString(message.data))
                        return "data: string expected";
                if (message.event != null && message.hasOwnProperty("event"))
                    if (!$util.isString(message.event))
                        return "event: string expected";
                if (message.decodedData != null && message.hasOwnProperty("decodedData")) {
                    if (!$util.isObject(message.decodedData))
                        return "decodedData: object expected";
                    var key = Object.keys(message.decodedData);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.decodedData[key[i]]))
                            return "decodedData: string{k:string} expected";
                }
                if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                    if (!$util.isInteger(message.blockNumber) && !(message.blockNumber && $util.isInteger(message.blockNumber.low) && $util.isInteger(message.blockNumber.high)))
                        return "blockNumber: integer|Long expected";
                if (message.txHash != null && message.hasOwnProperty("txHash"))
                    if (!$util.isString(message.txHash))
                        return "txHash: string expected";
                if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                    if (!$util.isInteger(message.txIndex) && !(message.txIndex && $util.isInteger(message.txIndex.low) && $util.isInteger(message.txIndex.high)))
                        return "txIndex: integer|Long expected";
                if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                    if (!$util.isString(message.blockHash))
                        return "blockHash: string expected";
                if (message.index != null && message.hasOwnProperty("index"))
                    if (!$util.isInteger(message.index) && !(message.index && $util.isInteger(message.index.low) && $util.isInteger(message.index.high)))
                        return "index: integer|Long expected";
                if (message.removed != null && message.hasOwnProperty("removed"))
                    if (typeof message.removed !== "boolean")
                        return "removed: boolean expected";
                return null;
            };
    
            /**
             * Creates a Log message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ethereum.Log
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ethereum.Log} Log
             */
            Log.fromObject = function fromObject(object) {
                if (object instanceof $root.ethereum.Log)
                    return object;
                var message = new $root.ethereum.Log();
                if (object.address != null)
                    message.address = String(object.address);
                if (object.topics) {
                    if (!Array.isArray(object.topics))
                        throw TypeError(".ethereum.Log.topics: array expected");
                    message.topics = [];
                    for (var i = 0; i < object.topics.length; ++i)
                        message.topics[i] = String(object.topics[i]);
                }
                if (object.data != null)
                    message.data = String(object.data);
                if (object.event != null)
                    message.event = String(object.event);
                if (object.decodedData) {
                    if (typeof object.decodedData !== "object")
                        throw TypeError(".ethereum.Log.decodedData: object expected");
                    message.decodedData = {};
                    for (var keys = Object.keys(object.decodedData), i = 0; i < keys.length; ++i)
                        message.decodedData[keys[i]] = String(object.decodedData[keys[i]]);
                }
                if (object.blockNumber != null)
                    if ($util.Long)
                        (message.blockNumber = $util.Long.fromValue(object.blockNumber)).unsigned = true;
                    else if (typeof object.blockNumber === "string")
                        message.blockNumber = parseInt(object.blockNumber, 10);
                    else if (typeof object.blockNumber === "number")
                        message.blockNumber = object.blockNumber;
                    else if (typeof object.blockNumber === "object")
                        message.blockNumber = new $util.LongBits(object.blockNumber.low >>> 0, object.blockNumber.high >>> 0).toNumber(true);
                if (object.txHash != null)
                    message.txHash = String(object.txHash);
                if (object.txIndex != null)
                    if ($util.Long)
                        (message.txIndex = $util.Long.fromValue(object.txIndex)).unsigned = true;
                    else if (typeof object.txIndex === "string")
                        message.txIndex = parseInt(object.txIndex, 10);
                    else if (typeof object.txIndex === "number")
                        message.txIndex = object.txIndex;
                    else if (typeof object.txIndex === "object")
                        message.txIndex = new $util.LongBits(object.txIndex.low >>> 0, object.txIndex.high >>> 0).toNumber(true);
                if (object.blockHash != null)
                    message.blockHash = String(object.blockHash);
                if (object.index != null)
                    if ($util.Long)
                        (message.index = $util.Long.fromValue(object.index)).unsigned = true;
                    else if (typeof object.index === "string")
                        message.index = parseInt(object.index, 10);
                    else if (typeof object.index === "number")
                        message.index = object.index;
                    else if (typeof object.index === "object")
                        message.index = new $util.LongBits(object.index.low >>> 0, object.index.high >>> 0).toNumber(true);
                if (object.removed != null)
                    message.removed = Boolean(object.removed);
                return message;
            };
    
            /**
             * Creates a plain object from a Log message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ethereum.Log
             * @static
             * @param {ethereum.Log} message Log
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Log.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.topics = [];
                if (options.objects || options.defaults)
                    object.decodedData = {};
                if (options.defaults) {
                    object.address = "";
                    object.data = "";
                    object.event = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.blockNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.blockNumber = options.longs === String ? "0" : 0;
                    object.txHash = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.txIndex = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.txIndex = options.longs === String ? "0" : 0;
                    object.blockHash = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.index = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.index = options.longs === String ? "0" : 0;
                    object.removed = false;
                }
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = message.address;
                if (message.topics && message.topics.length) {
                    object.topics = [];
                    for (var j = 0; j < message.topics.length; ++j)
                        object.topics[j] = message.topics[j];
                }
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = message.data;
                if (message.event != null && message.hasOwnProperty("event"))
                    object.event = message.event;
                var keys2;
                if (message.decodedData && (keys2 = Object.keys(message.decodedData)).length) {
                    object.decodedData = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.decodedData[keys2[j]] = message.decodedData[keys2[j]];
                }
                if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                    if (typeof message.blockNumber === "number")
                        object.blockNumber = options.longs === String ? String(message.blockNumber) : message.blockNumber;
                    else
                        object.blockNumber = options.longs === String ? $util.Long.prototype.toString.call(message.blockNumber) : options.longs === Number ? new $util.LongBits(message.blockNumber.low >>> 0, message.blockNumber.high >>> 0).toNumber(true) : message.blockNumber;
                if (message.txHash != null && message.hasOwnProperty("txHash"))
                    object.txHash = message.txHash;
                if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                    if (typeof message.txIndex === "number")
                        object.txIndex = options.longs === String ? String(message.txIndex) : message.txIndex;
                    else
                        object.txIndex = options.longs === String ? $util.Long.prototype.toString.call(message.txIndex) : options.longs === Number ? new $util.LongBits(message.txIndex.low >>> 0, message.txIndex.high >>> 0).toNumber(true) : message.txIndex;
                if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                    object.blockHash = message.blockHash;
                if (message.index != null && message.hasOwnProperty("index"))
                    if (typeof message.index === "number")
                        object.index = options.longs === String ? String(message.index) : message.index;
                    else
                        object.index = options.longs === String ? $util.Long.prototype.toString.call(message.index) : options.longs === Number ? new $util.LongBits(message.index.low >>> 0, message.index.high >>> 0).toNumber(true) : message.index;
                if (message.removed != null && message.hasOwnProperty("removed"))
                    object.removed = message.removed;
                return object;
            };
    
            /**
             * Converts this Log to JSON.
             * @function toJSON
             * @memberof ethereum.Log
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Log.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Log;
        })();
    
        ethereum.Receipt = (function() {
    
            /**
             * Properties of a Receipt.
             * @memberof ethereum
             * @interface IReceipt
             * @property {string|null} [txHash] Receipt txHash
             * @property {string|null} [blockHash] Receipt blockHash
             * @property {number|Long|null} [blockNumber] Receipt blockNumber
             * @property {number|Long|null} [txIndex] Receipt txIndex
             * @property {string|null} [contractAddress] Receipt contractAddress
             * @property {string|null} [postState] Receipt postState
             * @property {number|Long|null} [status] Receipt status
             * @property {string|null} [bloom] Receipt bloom
             * @property {Array.<ethereum.ILog>|null} [logs] Receipt logs
             * @property {number|Long|null} [gasUsed] Receipt gasUsed
             * @property {number|Long|null} [cumulativeGasUsed] Receipt cumulativeGasUsed
             * @property {string|null} [revertReason] Receipt revertReason
             */
    
            /**
             * Constructs a new Receipt.
             * @memberof ethereum
             * @classdesc Represents a Receipt.
             * @implements IReceipt
             * @constructor
             * @param {ethereum.IReceipt=} [properties] Properties to set
             */
            function Receipt(properties) {
                this.logs = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Receipt txHash.
             * @member {string} txHash
             * @memberof ethereum.Receipt
             * @instance
             */
            Receipt.prototype.txHash = "";
    
            /**
             * Receipt blockHash.
             * @member {string} blockHash
             * @memberof ethereum.Receipt
             * @instance
             */
            Receipt.prototype.blockHash = "";
    
            /**
             * Receipt blockNumber.
             * @member {number|Long} blockNumber
             * @memberof ethereum.Receipt
             * @instance
             */
            Receipt.prototype.blockNumber = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Receipt txIndex.
             * @member {number|Long} txIndex
             * @memberof ethereum.Receipt
             * @instance
             */
            Receipt.prototype.txIndex = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Receipt contractAddress.
             * @member {string} contractAddress
             * @memberof ethereum.Receipt
             * @instance
             */
            Receipt.prototype.contractAddress = "";
    
            /**
             * Receipt postState.
             * @member {string} postState
             * @memberof ethereum.Receipt
             * @instance
             */
            Receipt.prototype.postState = "";
    
            /**
             * Receipt status.
             * @member {number|Long} status
             * @memberof ethereum.Receipt
             * @instance
             */
            Receipt.prototype.status = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Receipt bloom.
             * @member {string} bloom
             * @memberof ethereum.Receipt
             * @instance
             */
            Receipt.prototype.bloom = "";
    
            /**
             * Receipt logs.
             * @member {Array.<ethereum.ILog>} logs
             * @memberof ethereum.Receipt
             * @instance
             */
            Receipt.prototype.logs = $util.emptyArray;
    
            /**
             * Receipt gasUsed.
             * @member {number|Long} gasUsed
             * @memberof ethereum.Receipt
             * @instance
             */
            Receipt.prototype.gasUsed = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Receipt cumulativeGasUsed.
             * @member {number|Long} cumulativeGasUsed
             * @memberof ethereum.Receipt
             * @instance
             */
            Receipt.prototype.cumulativeGasUsed = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Receipt revertReason.
             * @member {string} revertReason
             * @memberof ethereum.Receipt
             * @instance
             */
            Receipt.prototype.revertReason = "";
    
            /**
             * Creates a new Receipt instance using the specified properties.
             * @function create
             * @memberof ethereum.Receipt
             * @static
             * @param {ethereum.IReceipt=} [properties] Properties to set
             * @returns {ethereum.Receipt} Receipt instance
             */
            Receipt.create = function create(properties) {
                return new Receipt(properties);
            };
    
            /**
             * Encodes the specified Receipt message. Does not implicitly {@link ethereum.Receipt.verify|verify} messages.
             * @function encode
             * @memberof ethereum.Receipt
             * @static
             * @param {ethereum.IReceipt} message Receipt message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Receipt.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.txHash != null && message.hasOwnProperty("txHash"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.txHash);
                if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.blockHash);
                if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.blockNumber);
                if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.txIndex);
                if (message.contractAddress != null && message.hasOwnProperty("contractAddress"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.contractAddress);
                if (message.postState != null && message.hasOwnProperty("postState"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.postState);
                if (message.status != null && message.hasOwnProperty("status"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.status);
                if (message.bloom != null && message.hasOwnProperty("bloom"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.bloom);
                if (message.logs != null && message.logs.length)
                    for (var i = 0; i < message.logs.length; ++i)
                        $root.ethereum.Log.encode(message.logs[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                    writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.gasUsed);
                if (message.cumulativeGasUsed != null && message.hasOwnProperty("cumulativeGasUsed"))
                    writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.cumulativeGasUsed);
                if (message.revertReason != null && message.hasOwnProperty("revertReason"))
                    writer.uint32(/* id 14, wireType 2 =*/114).string(message.revertReason);
                return writer;
            };
    
            /**
             * Encodes the specified Receipt message, length delimited. Does not implicitly {@link ethereum.Receipt.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ethereum.Receipt
             * @static
             * @param {ethereum.IReceipt} message Receipt message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Receipt.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Receipt message from the specified reader or buffer.
             * @function decode
             * @memberof ethereum.Receipt
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ethereum.Receipt} Receipt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Receipt.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ethereum.Receipt();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.txHash = reader.string();
                        break;
                    case 2:
                        message.blockHash = reader.string();
                        break;
                    case 3:
                        message.blockNumber = reader.uint64();
                        break;
                    case 4:
                        message.txIndex = reader.uint64();
                        break;
                    case 6:
                        message.contractAddress = reader.string();
                        break;
                    case 7:
                        message.postState = reader.string();
                        break;
                    case 8:
                        message.status = reader.uint64();
                        break;
                    case 10:
                        message.bloom = reader.string();
                        break;
                    case 11:
                        if (!(message.logs && message.logs.length))
                            message.logs = [];
                        message.logs.push($root.ethereum.Log.decode(reader, reader.uint32()));
                        break;
                    case 12:
                        message.gasUsed = reader.uint64();
                        break;
                    case 13:
                        message.cumulativeGasUsed = reader.uint64();
                        break;
                    case 14:
                        message.revertReason = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Receipt message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ethereum.Receipt
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ethereum.Receipt} Receipt
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Receipt.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Receipt message.
             * @function verify
             * @memberof ethereum.Receipt
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Receipt.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.txHash != null && message.hasOwnProperty("txHash"))
                    if (!$util.isString(message.txHash))
                        return "txHash: string expected";
                if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                    if (!$util.isString(message.blockHash))
                        return "blockHash: string expected";
                if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                    if (!$util.isInteger(message.blockNumber) && !(message.blockNumber && $util.isInteger(message.blockNumber.low) && $util.isInteger(message.blockNumber.high)))
                        return "blockNumber: integer|Long expected";
                if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                    if (!$util.isInteger(message.txIndex) && !(message.txIndex && $util.isInteger(message.txIndex.low) && $util.isInteger(message.txIndex.high)))
                        return "txIndex: integer|Long expected";
                if (message.contractAddress != null && message.hasOwnProperty("contractAddress"))
                    if (!$util.isString(message.contractAddress))
                        return "contractAddress: string expected";
                if (message.postState != null && message.hasOwnProperty("postState"))
                    if (!$util.isString(message.postState))
                        return "postState: string expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isInteger(message.status) && !(message.status && $util.isInteger(message.status.low) && $util.isInteger(message.status.high)))
                        return "status: integer|Long expected";
                if (message.bloom != null && message.hasOwnProperty("bloom"))
                    if (!$util.isString(message.bloom))
                        return "bloom: string expected";
                if (message.logs != null && message.hasOwnProperty("logs")) {
                    if (!Array.isArray(message.logs))
                        return "logs: array expected";
                    for (var i = 0; i < message.logs.length; ++i) {
                        var error = $root.ethereum.Log.verify(message.logs[i]);
                        if (error)
                            return "logs." + error;
                    }
                }
                if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                    if (!$util.isInteger(message.gasUsed) && !(message.gasUsed && $util.isInteger(message.gasUsed.low) && $util.isInteger(message.gasUsed.high)))
                        return "gasUsed: integer|Long expected";
                if (message.cumulativeGasUsed != null && message.hasOwnProperty("cumulativeGasUsed"))
                    if (!$util.isInteger(message.cumulativeGasUsed) && !(message.cumulativeGasUsed && $util.isInteger(message.cumulativeGasUsed.low) && $util.isInteger(message.cumulativeGasUsed.high)))
                        return "cumulativeGasUsed: integer|Long expected";
                if (message.revertReason != null && message.hasOwnProperty("revertReason"))
                    if (!$util.isString(message.revertReason))
                        return "revertReason: string expected";
                return null;
            };
    
            /**
             * Creates a Receipt message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ethereum.Receipt
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ethereum.Receipt} Receipt
             */
            Receipt.fromObject = function fromObject(object) {
                if (object instanceof $root.ethereum.Receipt)
                    return object;
                var message = new $root.ethereum.Receipt();
                if (object.txHash != null)
                    message.txHash = String(object.txHash);
                if (object.blockHash != null)
                    message.blockHash = String(object.blockHash);
                if (object.blockNumber != null)
                    if ($util.Long)
                        (message.blockNumber = $util.Long.fromValue(object.blockNumber)).unsigned = true;
                    else if (typeof object.blockNumber === "string")
                        message.blockNumber = parseInt(object.blockNumber, 10);
                    else if (typeof object.blockNumber === "number")
                        message.blockNumber = object.blockNumber;
                    else if (typeof object.blockNumber === "object")
                        message.blockNumber = new $util.LongBits(object.blockNumber.low >>> 0, object.blockNumber.high >>> 0).toNumber(true);
                if (object.txIndex != null)
                    if ($util.Long)
                        (message.txIndex = $util.Long.fromValue(object.txIndex)).unsigned = true;
                    else if (typeof object.txIndex === "string")
                        message.txIndex = parseInt(object.txIndex, 10);
                    else if (typeof object.txIndex === "number")
                        message.txIndex = object.txIndex;
                    else if (typeof object.txIndex === "object")
                        message.txIndex = new $util.LongBits(object.txIndex.low >>> 0, object.txIndex.high >>> 0).toNumber(true);
                if (object.contractAddress != null)
                    message.contractAddress = String(object.contractAddress);
                if (object.postState != null)
                    message.postState = String(object.postState);
                if (object.status != null)
                    if ($util.Long)
                        (message.status = $util.Long.fromValue(object.status)).unsigned = true;
                    else if (typeof object.status === "string")
                        message.status = parseInt(object.status, 10);
                    else if (typeof object.status === "number")
                        message.status = object.status;
                    else if (typeof object.status === "object")
                        message.status = new $util.LongBits(object.status.low >>> 0, object.status.high >>> 0).toNumber(true);
                if (object.bloom != null)
                    message.bloom = String(object.bloom);
                if (object.logs) {
                    if (!Array.isArray(object.logs))
                        throw TypeError(".ethereum.Receipt.logs: array expected");
                    message.logs = [];
                    for (var i = 0; i < object.logs.length; ++i) {
                        if (typeof object.logs[i] !== "object")
                            throw TypeError(".ethereum.Receipt.logs: object expected");
                        message.logs[i] = $root.ethereum.Log.fromObject(object.logs[i]);
                    }
                }
                if (object.gasUsed != null)
                    if ($util.Long)
                        (message.gasUsed = $util.Long.fromValue(object.gasUsed)).unsigned = true;
                    else if (typeof object.gasUsed === "string")
                        message.gasUsed = parseInt(object.gasUsed, 10);
                    else if (typeof object.gasUsed === "number")
                        message.gasUsed = object.gasUsed;
                    else if (typeof object.gasUsed === "object")
                        message.gasUsed = new $util.LongBits(object.gasUsed.low >>> 0, object.gasUsed.high >>> 0).toNumber(true);
                if (object.cumulativeGasUsed != null)
                    if ($util.Long)
                        (message.cumulativeGasUsed = $util.Long.fromValue(object.cumulativeGasUsed)).unsigned = true;
                    else if (typeof object.cumulativeGasUsed === "string")
                        message.cumulativeGasUsed = parseInt(object.cumulativeGasUsed, 10);
                    else if (typeof object.cumulativeGasUsed === "number")
                        message.cumulativeGasUsed = object.cumulativeGasUsed;
                    else if (typeof object.cumulativeGasUsed === "object")
                        message.cumulativeGasUsed = new $util.LongBits(object.cumulativeGasUsed.low >>> 0, object.cumulativeGasUsed.high >>> 0).toNumber(true);
                if (object.revertReason != null)
                    message.revertReason = String(object.revertReason);
                return message;
            };
    
            /**
             * Creates a plain object from a Receipt message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ethereum.Receipt
             * @static
             * @param {ethereum.Receipt} message Receipt
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Receipt.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.logs = [];
                if (options.defaults) {
                    object.txHash = "";
                    object.blockHash = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.blockNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.blockNumber = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.txIndex = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.txIndex = options.longs === String ? "0" : 0;
                    object.contractAddress = "";
                    object.postState = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.status = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.status = options.longs === String ? "0" : 0;
                    object.bloom = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.gasUsed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.gasUsed = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.cumulativeGasUsed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.cumulativeGasUsed = options.longs === String ? "0" : 0;
                    object.revertReason = "";
                }
                if (message.txHash != null && message.hasOwnProperty("txHash"))
                    object.txHash = message.txHash;
                if (message.blockHash != null && message.hasOwnProperty("blockHash"))
                    object.blockHash = message.blockHash;
                if (message.blockNumber != null && message.hasOwnProperty("blockNumber"))
                    if (typeof message.blockNumber === "number")
                        object.blockNumber = options.longs === String ? String(message.blockNumber) : message.blockNumber;
                    else
                        object.blockNumber = options.longs === String ? $util.Long.prototype.toString.call(message.blockNumber) : options.longs === Number ? new $util.LongBits(message.blockNumber.low >>> 0, message.blockNumber.high >>> 0).toNumber(true) : message.blockNumber;
                if (message.txIndex != null && message.hasOwnProperty("txIndex"))
                    if (typeof message.txIndex === "number")
                        object.txIndex = options.longs === String ? String(message.txIndex) : message.txIndex;
                    else
                        object.txIndex = options.longs === String ? $util.Long.prototype.toString.call(message.txIndex) : options.longs === Number ? new $util.LongBits(message.txIndex.low >>> 0, message.txIndex.high >>> 0).toNumber(true) : message.txIndex;
                if (message.contractAddress != null && message.hasOwnProperty("contractAddress"))
                    object.contractAddress = message.contractAddress;
                if (message.postState != null && message.hasOwnProperty("postState"))
                    object.postState = message.postState;
                if (message.status != null && message.hasOwnProperty("status"))
                    if (typeof message.status === "number")
                        object.status = options.longs === String ? String(message.status) : message.status;
                    else
                        object.status = options.longs === String ? $util.Long.prototype.toString.call(message.status) : options.longs === Number ? new $util.LongBits(message.status.low >>> 0, message.status.high >>> 0).toNumber(true) : message.status;
                if (message.bloom != null && message.hasOwnProperty("bloom"))
                    object.bloom = message.bloom;
                if (message.logs && message.logs.length) {
                    object.logs = [];
                    for (var j = 0; j < message.logs.length; ++j)
                        object.logs[j] = $root.ethereum.Log.toObject(message.logs[j], options);
                }
                if (message.gasUsed != null && message.hasOwnProperty("gasUsed"))
                    if (typeof message.gasUsed === "number")
                        object.gasUsed = options.longs === String ? String(message.gasUsed) : message.gasUsed;
                    else
                        object.gasUsed = options.longs === String ? $util.Long.prototype.toString.call(message.gasUsed) : options.longs === Number ? new $util.LongBits(message.gasUsed.low >>> 0, message.gasUsed.high >>> 0).toNumber(true) : message.gasUsed;
                if (message.cumulativeGasUsed != null && message.hasOwnProperty("cumulativeGasUsed"))
                    if (typeof message.cumulativeGasUsed === "number")
                        object.cumulativeGasUsed = options.longs === String ? String(message.cumulativeGasUsed) : message.cumulativeGasUsed;
                    else
                        object.cumulativeGasUsed = options.longs === String ? $util.Long.prototype.toString.call(message.cumulativeGasUsed) : options.longs === Number ? new $util.LongBits(message.cumulativeGasUsed.low >>> 0, message.cumulativeGasUsed.high >>> 0).toNumber(true) : message.cumulativeGasUsed;
                if (message.revertReason != null && message.hasOwnProperty("revertReason"))
                    object.revertReason = message.revertReason;
                return object;
            };
    
            /**
             * Converts this Receipt to JSON.
             * @function toJSON
             * @memberof ethereum.Receipt
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Receipt.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Receipt;
        })();
    
        ethereum.Transaction = (function() {
    
            /**
             * Properties of a Transaction.
             * @memberof ethereum
             * @interface ITransaction
             * @property {string|null} [from] Transaction from
             * @property {string|null} [nonce] Transaction nonce
             * @property {string|null} [to] Transaction to
             * @property {string|null} [value] Transaction value
             * @property {string|null} [gas] Transaction gas
             * @property {string|null} [gasPrice] Transaction gasPrice
             * @property {string|null} [data] Transaction data
             * @property {string|null} [raw] Transaction raw
             * @property {string|null} [txHash] Transaction txHash
             */
    
            /**
             * Constructs a new Transaction.
             * @memberof ethereum
             * @classdesc Represents a Transaction.
             * @implements ITransaction
             * @constructor
             * @param {ethereum.ITransaction=} [properties] Properties to set
             */
            function Transaction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Transaction from.
             * @member {string} from
             * @memberof ethereum.Transaction
             * @instance
             */
            Transaction.prototype.from = "";
    
            /**
             * Transaction nonce.
             * @member {string} nonce
             * @memberof ethereum.Transaction
             * @instance
             */
            Transaction.prototype.nonce = "";
    
            /**
             * Transaction to.
             * @member {string} to
             * @memberof ethereum.Transaction
             * @instance
             */
            Transaction.prototype.to = "";
    
            /**
             * Transaction value.
             * @member {string} value
             * @memberof ethereum.Transaction
             * @instance
             */
            Transaction.prototype.value = "";
    
            /**
             * Transaction gas.
             * @member {string} gas
             * @memberof ethereum.Transaction
             * @instance
             */
            Transaction.prototype.gas = "";
    
            /**
             * Transaction gasPrice.
             * @member {string} gasPrice
             * @memberof ethereum.Transaction
             * @instance
             */
            Transaction.prototype.gasPrice = "";
    
            /**
             * Transaction data.
             * @member {string} data
             * @memberof ethereum.Transaction
             * @instance
             */
            Transaction.prototype.data = "";
    
            /**
             * Transaction raw.
             * @member {string} raw
             * @memberof ethereum.Transaction
             * @instance
             */
            Transaction.prototype.raw = "";
    
            /**
             * Transaction txHash.
             * @member {string} txHash
             * @memberof ethereum.Transaction
             * @instance
             */
            Transaction.prototype.txHash = "";
    
            /**
             * Creates a new Transaction instance using the specified properties.
             * @function create
             * @memberof ethereum.Transaction
             * @static
             * @param {ethereum.ITransaction=} [properties] Properties to set
             * @returns {ethereum.Transaction} Transaction instance
             */
            Transaction.create = function create(properties) {
                return new Transaction(properties);
            };
    
            /**
             * Encodes the specified Transaction message. Does not implicitly {@link ethereum.Transaction.verify|verify} messages.
             * @function encode
             * @memberof ethereum.Transaction
             * @static
             * @param {ethereum.ITransaction} message Transaction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Transaction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.from != null && message.hasOwnProperty("from"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.from);
                if (message.nonce != null && message.hasOwnProperty("nonce"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.nonce);
                if (message.to != null && message.hasOwnProperty("to"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.to);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.value);
                if (message.gas != null && message.hasOwnProperty("gas"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.gas);
                if (message.gasPrice != null && message.hasOwnProperty("gasPrice"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.gasPrice);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.data);
                if (message.raw != null && message.hasOwnProperty("raw"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.raw);
                if (message.txHash != null && message.hasOwnProperty("txHash"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.txHash);
                return writer;
            };
    
            /**
             * Encodes the specified Transaction message, length delimited. Does not implicitly {@link ethereum.Transaction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ethereum.Transaction
             * @static
             * @param {ethereum.ITransaction} message Transaction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Transaction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Transaction message from the specified reader or buffer.
             * @function decode
             * @memberof ethereum.Transaction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ethereum.Transaction} Transaction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Transaction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ethereum.Transaction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.from = reader.string();
                        break;
                    case 2:
                        message.nonce = reader.string();
                        break;
                    case 3:
                        message.to = reader.string();
                        break;
                    case 4:
                        message.value = reader.string();
                        break;
                    case 5:
                        message.gas = reader.string();
                        break;
                    case 6:
                        message.gasPrice = reader.string();
                        break;
                    case 7:
                        message.data = reader.string();
                        break;
                    case 8:
                        message.raw = reader.string();
                        break;
                    case 9:
                        message.txHash = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Transaction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ethereum.Transaction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ethereum.Transaction} Transaction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Transaction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Transaction message.
             * @function verify
             * @memberof ethereum.Transaction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Transaction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.from != null && message.hasOwnProperty("from"))
                    if (!$util.isString(message.from))
                        return "from: string expected";
                if (message.nonce != null && message.hasOwnProperty("nonce"))
                    if (!$util.isString(message.nonce))
                        return "nonce: string expected";
                if (message.to != null && message.hasOwnProperty("to"))
                    if (!$util.isString(message.to))
                        return "to: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                if (message.gas != null && message.hasOwnProperty("gas"))
                    if (!$util.isString(message.gas))
                        return "gas: string expected";
                if (message.gasPrice != null && message.hasOwnProperty("gasPrice"))
                    if (!$util.isString(message.gasPrice))
                        return "gasPrice: string expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!$util.isString(message.data))
                        return "data: string expected";
                if (message.raw != null && message.hasOwnProperty("raw"))
                    if (!$util.isString(message.raw))
                        return "raw: string expected";
                if (message.txHash != null && message.hasOwnProperty("txHash"))
                    if (!$util.isString(message.txHash))
                        return "txHash: string expected";
                return null;
            };
    
            /**
             * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ethereum.Transaction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ethereum.Transaction} Transaction
             */
            Transaction.fromObject = function fromObject(object) {
                if (object instanceof $root.ethereum.Transaction)
                    return object;
                var message = new $root.ethereum.Transaction();
                if (object.from != null)
                    message.from = String(object.from);
                if (object.nonce != null)
                    message.nonce = String(object.nonce);
                if (object.to != null)
                    message.to = String(object.to);
                if (object.value != null)
                    message.value = String(object.value);
                if (object.gas != null)
                    message.gas = String(object.gas);
                if (object.gasPrice != null)
                    message.gasPrice = String(object.gasPrice);
                if (object.data != null)
                    message.data = String(object.data);
                if (object.raw != null)
                    message.raw = String(object.raw);
                if (object.txHash != null)
                    message.txHash = String(object.txHash);
                return message;
            };
    
            /**
             * Creates a plain object from a Transaction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ethereum.Transaction
             * @static
             * @param {ethereum.Transaction} message Transaction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Transaction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.from = "";
                    object.nonce = "";
                    object.to = "";
                    object.value = "";
                    object.gas = "";
                    object.gasPrice = "";
                    object.data = "";
                    object.raw = "";
                    object.txHash = "";
                }
                if (message.from != null && message.hasOwnProperty("from"))
                    object.from = message.from;
                if (message.nonce != null && message.hasOwnProperty("nonce"))
                    object.nonce = message.nonce;
                if (message.to != null && message.hasOwnProperty("to"))
                    object.to = message.to;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                if (message.gas != null && message.hasOwnProperty("gas"))
                    object.gas = message.gas;
                if (message.gasPrice != null && message.hasOwnProperty("gasPrice"))
                    object.gasPrice = message.gasPrice;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = message.data;
                if (message.raw != null && message.hasOwnProperty("raw"))
                    object.raw = message.raw;
                if (message.txHash != null && message.hasOwnProperty("txHash"))
                    object.txHash = message.txHash;
                return object;
            };
    
            /**
             * Converts this Transaction to JSON.
             * @function toJSON
             * @memberof ethereum.Transaction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Transaction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Transaction;
        })();
    
        return ethereum;
    })();
    
    $root.tx = (function() {
    
        /**
         * Namespace tx.
         * @exports tx
         * @namespace
         */
        var tx = {};
    
        tx.TxRequest = (function() {
    
            /**
             * Properties of a TxRequest.
             * @memberof tx
             * @interface ITxRequest
             * @property {Object.<string,string>|null} [headers] TxRequest headers
             * @property {string|null} [chain] TxRequest chain
             * @property {tx.Method|null} [method] TxRequest method
             * @property {tx.IParams|null} [params] TxRequest params
             * @property {string|null} [id] TxRequest id
             * @property {Object.<string,string>|null} [contextLabels] TxRequest contextLabels
             */
    
            /**
             * Constructs a new TxRequest.
             * @memberof tx
             * @classdesc Represents a TxRequest.
             * @implements ITxRequest
             * @constructor
             * @param {tx.ITxRequest=} [properties] Properties to set
             */
            function TxRequest(properties) {
                this.headers = {};
                this.contextLabels = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TxRequest headers.
             * @member {Object.<string,string>} headers
             * @memberof tx.TxRequest
             * @instance
             */
            TxRequest.prototype.headers = $util.emptyObject;
    
            /**
             * TxRequest chain.
             * @member {string} chain
             * @memberof tx.TxRequest
             * @instance
             */
            TxRequest.prototype.chain = "";
    
            /**
             * TxRequest method.
             * @member {tx.Method} method
             * @memberof tx.TxRequest
             * @instance
             */
            TxRequest.prototype.method = 0;
    
            /**
             * TxRequest params.
             * @member {tx.IParams|null|undefined} params
             * @memberof tx.TxRequest
             * @instance
             */
            TxRequest.prototype.params = null;
    
            /**
             * TxRequest id.
             * @member {string} id
             * @memberof tx.TxRequest
             * @instance
             */
            TxRequest.prototype.id = "";
    
            /**
             * TxRequest contextLabels.
             * @member {Object.<string,string>} contextLabels
             * @memberof tx.TxRequest
             * @instance
             */
            TxRequest.prototype.contextLabels = $util.emptyObject;
    
            /**
             * Creates a new TxRequest instance using the specified properties.
             * @function create
             * @memberof tx.TxRequest
             * @static
             * @param {tx.ITxRequest=} [properties] Properties to set
             * @returns {tx.TxRequest} TxRequest instance
             */
            TxRequest.create = function create(properties) {
                return new TxRequest(properties);
            };
    
            /**
             * Encodes the specified TxRequest message. Does not implicitly {@link tx.TxRequest.verify|verify} messages.
             * @function encode
             * @memberof tx.TxRequest
             * @static
             * @param {tx.ITxRequest} message TxRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TxRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.headers != null && message.hasOwnProperty("headers"))
                    for (var keys = Object.keys(message.headers), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.headers[keys[i]]).ldelim();
                if (message.chain != null && message.hasOwnProperty("chain"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.chain);
                if (message.method != null && message.hasOwnProperty("method"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.method);
                if (message.params != null && message.hasOwnProperty("params"))
                    $root.tx.Params.encode(message.params, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.id);
                if (message.contextLabels != null && message.hasOwnProperty("contextLabels"))
                    for (var keys = Object.keys(message.contextLabels), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.contextLabels[keys[i]]).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified TxRequest message, length delimited. Does not implicitly {@link tx.TxRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tx.TxRequest
             * @static
             * @param {tx.ITxRequest} message TxRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TxRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TxRequest message from the specified reader or buffer.
             * @function decode
             * @memberof tx.TxRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tx.TxRequest} TxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TxRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tx.TxRequest(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.headers === $util.emptyObject)
                            message.headers = {};
                        key = reader.string();
                        reader.pos++;
                        message.headers[key] = reader.string();
                        break;
                    case 2:
                        message.chain = reader.string();
                        break;
                    case 3:
                        message.method = reader.int32();
                        break;
                    case 4:
                        message.params = $root.tx.Params.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.id = reader.string();
                        break;
                    case 6:
                        reader.skip().pos++;
                        if (message.contextLabels === $util.emptyObject)
                            message.contextLabels = {};
                        key = reader.string();
                        reader.pos++;
                        message.contextLabels[key] = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TxRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tx.TxRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tx.TxRequest} TxRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TxRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TxRequest message.
             * @function verify
             * @memberof tx.TxRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TxRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.headers != null && message.hasOwnProperty("headers")) {
                    if (!$util.isObject(message.headers))
                        return "headers: object expected";
                    var key = Object.keys(message.headers);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.headers[key[i]]))
                            return "headers: string{k:string} expected";
                }
                if (message.chain != null && message.hasOwnProperty("chain"))
                    if (!$util.isString(message.chain))
                        return "chain: string expected";
                if (message.method != null && message.hasOwnProperty("method"))
                    switch (message.method) {
                    default:
                        return "method: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.params != null && message.hasOwnProperty("params")) {
                    var error = $root.tx.Params.verify(message.params);
                    if (error)
                        return "params." + error;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.contextLabels != null && message.hasOwnProperty("contextLabels")) {
                    if (!$util.isObject(message.contextLabels))
                        return "contextLabels: object expected";
                    var key = Object.keys(message.contextLabels);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.contextLabels[key[i]]))
                            return "contextLabels: string{k:string} expected";
                }
                return null;
            };
    
            /**
             * Creates a TxRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tx.TxRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tx.TxRequest} TxRequest
             */
            TxRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.tx.TxRequest)
                    return object;
                var message = new $root.tx.TxRequest();
                if (object.headers) {
                    if (typeof object.headers !== "object")
                        throw TypeError(".tx.TxRequest.headers: object expected");
                    message.headers = {};
                    for (var keys = Object.keys(object.headers), i = 0; i < keys.length; ++i)
                        message.headers[keys[i]] = String(object.headers[keys[i]]);
                }
                if (object.chain != null)
                    message.chain = String(object.chain);
                switch (object.method) {
                case "ETH_SENDRAWTRANSACTION":
                case 0:
                    message.method = 0;
                    break;
                case "ETH_SENDPRIVATETRANSACTION":
                case 1:
                    message.method = 1;
                    break;
                case "ETH_SENDRAWPRIVATETRANSACTION":
                case 2:
                    message.method = 2;
                    break;
                case "EEA_SENDPRIVATETRANSACTION":
                case 3:
                    message.method = 3;
                    break;
                }
                if (object.params != null) {
                    if (typeof object.params !== "object")
                        throw TypeError(".tx.TxRequest.params: object expected");
                    message.params = $root.tx.Params.fromObject(object.params);
                }
                if (object.id != null)
                    message.id = String(object.id);
                if (object.contextLabels) {
                    if (typeof object.contextLabels !== "object")
                        throw TypeError(".tx.TxRequest.contextLabels: object expected");
                    message.contextLabels = {};
                    for (var keys = Object.keys(object.contextLabels), i = 0; i < keys.length; ++i)
                        message.contextLabels[keys[i]] = String(object.contextLabels[keys[i]]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TxRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tx.TxRequest
             * @static
             * @param {tx.TxRequest} message TxRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TxRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults) {
                    object.headers = {};
                    object.contextLabels = {};
                }
                if (options.defaults) {
                    object.chain = "";
                    object.method = options.enums === String ? "ETH_SENDRAWTRANSACTION" : 0;
                    object.params = null;
                    object.id = "";
                }
                var keys2;
                if (message.headers && (keys2 = Object.keys(message.headers)).length) {
                    object.headers = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.headers[keys2[j]] = message.headers[keys2[j]];
                }
                if (message.chain != null && message.hasOwnProperty("chain"))
                    object.chain = message.chain;
                if (message.method != null && message.hasOwnProperty("method"))
                    object.method = options.enums === String ? $root.tx.Method[message.method] : message.method;
                if (message.params != null && message.hasOwnProperty("params"))
                    object.params = $root.tx.Params.toObject(message.params, options);
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.contextLabels && (keys2 = Object.keys(message.contextLabels)).length) {
                    object.contextLabels = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.contextLabels[keys2[j]] = message.contextLabels[keys2[j]];
                }
                return object;
            };
    
            /**
             * Converts this TxRequest to JSON.
             * @function toJSON
             * @memberof tx.TxRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TxRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TxRequest;
        })();
    
        tx.TxEnvelope = (function() {
    
            /**
             * Properties of a TxEnvelope.
             * @memberof tx
             * @interface ITxEnvelope
             * @property {tx.ITxRequest|null} [txRequest] TxEnvelope txRequest
             * @property {tx.ITxResponse|null} [txResponse] TxEnvelope txResponse
             * @property {Object.<string,string>|null} [internalLabels] TxEnvelope internalLabels
             */
    
            /**
             * Constructs a new TxEnvelope.
             * @memberof tx
             * @classdesc Represents a TxEnvelope.
             * @implements ITxEnvelope
             * @constructor
             * @param {tx.ITxEnvelope=} [properties] Properties to set
             */
            function TxEnvelope(properties) {
                this.internalLabels = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TxEnvelope txRequest.
             * @member {tx.ITxRequest|null|undefined} txRequest
             * @memberof tx.TxEnvelope
             * @instance
             */
            TxEnvelope.prototype.txRequest = null;
    
            /**
             * TxEnvelope txResponse.
             * @member {tx.ITxResponse|null|undefined} txResponse
             * @memberof tx.TxEnvelope
             * @instance
             */
            TxEnvelope.prototype.txResponse = null;
    
            /**
             * TxEnvelope internalLabels.
             * @member {Object.<string,string>} internalLabels
             * @memberof tx.TxEnvelope
             * @instance
             */
            TxEnvelope.prototype.internalLabels = $util.emptyObject;
    
            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;
    
            /**
             * TxEnvelope msg.
             * @member {"txRequest"|"txResponse"|undefined} msg
             * @memberof tx.TxEnvelope
             * @instance
             */
            Object.defineProperty(TxEnvelope.prototype, "msg", {
                get: $util.oneOfGetter($oneOfFields = ["txRequest", "txResponse"]),
                set: $util.oneOfSetter($oneOfFields)
            });
    
            /**
             * Creates a new TxEnvelope instance using the specified properties.
             * @function create
             * @memberof tx.TxEnvelope
             * @static
             * @param {tx.ITxEnvelope=} [properties] Properties to set
             * @returns {tx.TxEnvelope} TxEnvelope instance
             */
            TxEnvelope.create = function create(properties) {
                return new TxEnvelope(properties);
            };
    
            /**
             * Encodes the specified TxEnvelope message. Does not implicitly {@link tx.TxEnvelope.verify|verify} messages.
             * @function encode
             * @memberof tx.TxEnvelope
             * @static
             * @param {tx.ITxEnvelope} message TxEnvelope message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TxEnvelope.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.internalLabels != null && message.hasOwnProperty("internalLabels"))
                    for (var keys = Object.keys(message.internalLabels), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.internalLabels[keys[i]]).ldelim();
                if (message.txRequest != null && message.hasOwnProperty("txRequest"))
                    $root.tx.TxRequest.encode(message.txRequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.txResponse != null && message.hasOwnProperty("txResponse"))
                    $root.tx.TxResponse.encode(message.txResponse, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified TxEnvelope message, length delimited. Does not implicitly {@link tx.TxEnvelope.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tx.TxEnvelope
             * @static
             * @param {tx.ITxEnvelope} message TxEnvelope message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TxEnvelope.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TxEnvelope message from the specified reader or buffer.
             * @function decode
             * @memberof tx.TxEnvelope
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tx.TxEnvelope} TxEnvelope
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TxEnvelope.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tx.TxEnvelope(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.txRequest = $root.tx.TxRequest.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.txResponse = $root.tx.TxResponse.decode(reader, reader.uint32());
                        break;
                    case 1:
                        reader.skip().pos++;
                        if (message.internalLabels === $util.emptyObject)
                            message.internalLabels = {};
                        key = reader.string();
                        reader.pos++;
                        message.internalLabels[key] = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TxEnvelope message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tx.TxEnvelope
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tx.TxEnvelope} TxEnvelope
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TxEnvelope.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TxEnvelope message.
             * @function verify
             * @memberof tx.TxEnvelope
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TxEnvelope.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.txRequest != null && message.hasOwnProperty("txRequest")) {
                    properties.msg = 1;
                    {
                        var error = $root.tx.TxRequest.verify(message.txRequest);
                        if (error)
                            return "txRequest." + error;
                    }
                }
                if (message.txResponse != null && message.hasOwnProperty("txResponse")) {
                    if (properties.msg === 1)
                        return "msg: multiple values";
                    properties.msg = 1;
                    {
                        var error = $root.tx.TxResponse.verify(message.txResponse);
                        if (error)
                            return "txResponse." + error;
                    }
                }
                if (message.internalLabels != null && message.hasOwnProperty("internalLabels")) {
                    if (!$util.isObject(message.internalLabels))
                        return "internalLabels: object expected";
                    var key = Object.keys(message.internalLabels);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.internalLabels[key[i]]))
                            return "internalLabels: string{k:string} expected";
                }
                return null;
            };
    
            /**
             * Creates a TxEnvelope message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tx.TxEnvelope
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tx.TxEnvelope} TxEnvelope
             */
            TxEnvelope.fromObject = function fromObject(object) {
                if (object instanceof $root.tx.TxEnvelope)
                    return object;
                var message = new $root.tx.TxEnvelope();
                if (object.txRequest != null) {
                    if (typeof object.txRequest !== "object")
                        throw TypeError(".tx.TxEnvelope.txRequest: object expected");
                    message.txRequest = $root.tx.TxRequest.fromObject(object.txRequest);
                }
                if (object.txResponse != null) {
                    if (typeof object.txResponse !== "object")
                        throw TypeError(".tx.TxEnvelope.txResponse: object expected");
                    message.txResponse = $root.tx.TxResponse.fromObject(object.txResponse);
                }
                if (object.internalLabels) {
                    if (typeof object.internalLabels !== "object")
                        throw TypeError(".tx.TxEnvelope.internalLabels: object expected");
                    message.internalLabels = {};
                    for (var keys = Object.keys(object.internalLabels), i = 0; i < keys.length; ++i)
                        message.internalLabels[keys[i]] = String(object.internalLabels[keys[i]]);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TxEnvelope message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tx.TxEnvelope
             * @static
             * @param {tx.TxEnvelope} message TxEnvelope
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TxEnvelope.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.internalLabels = {};
                var keys2;
                if (message.internalLabels && (keys2 = Object.keys(message.internalLabels)).length) {
                    object.internalLabels = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.internalLabels[keys2[j]] = message.internalLabels[keys2[j]];
                }
                if (message.txRequest != null && message.hasOwnProperty("txRequest")) {
                    object.txRequest = $root.tx.TxRequest.toObject(message.txRequest, options);
                    if (options.oneofs)
                        object.msg = "txRequest";
                }
                if (message.txResponse != null && message.hasOwnProperty("txResponse")) {
                    object.txResponse = $root.tx.TxResponse.toObject(message.txResponse, options);
                    if (options.oneofs)
                        object.msg = "txResponse";
                }
                return object;
            };
    
            /**
             * Converts this TxEnvelope to JSON.
             * @function toJSON
             * @memberof tx.TxEnvelope
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TxEnvelope.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TxEnvelope;
        })();
    
        /**
         * Method enum.
         * @name tx.Method
         * @enum {string}
         * @property {number} ETH_SENDRAWTRANSACTION=0 ETH_SENDRAWTRANSACTION value
         * @property {number} ETH_SENDPRIVATETRANSACTION=1 ETH_SENDPRIVATETRANSACTION value
         * @property {number} ETH_SENDRAWPRIVATETRANSACTION=2 ETH_SENDRAWPRIVATETRANSACTION value
         * @property {number} EEA_SENDPRIVATETRANSACTION=3 EEA_SENDPRIVATETRANSACTION value
         */
        tx.Method = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ETH_SENDRAWTRANSACTION"] = 0;
            values[valuesById[1] = "ETH_SENDPRIVATETRANSACTION"] = 1;
            values[valuesById[2] = "ETH_SENDRAWPRIVATETRANSACTION"] = 2;
            values[valuesById[3] = "EEA_SENDPRIVATETRANSACTION"] = 3;
            return values;
        })();
    
        tx.Params = (function() {
    
            /**
             * Properties of a Params.
             * @memberof tx
             * @interface IParams
             * @property {string|null} [from] Params from
             * @property {string|null} [to] Params to
             * @property {string|null} [gas] Params gas
             * @property {string|null} [gasPrice] Params gasPrice
             * @property {string|null} [value] Params value
             * @property {string|null} [nonce] Params nonce
             * @property {string|null} [data] Params data
             * @property {string|null} [contract] Params contract
             * @property {string|null} [methodSignature] Params methodSignature
             * @property {Array.<string>|null} [args] Params args
             * @property {string|null} [raw] Params raw
             * @property {Array.<string>|null} [privateFor] Params privateFor
             * @property {string|null} [privateFrom] Params privateFrom
             * @property {string|null} [privateTxType] Params privateTxType
             * @property {string|null} [privacyGroupId] Params privacyGroupId
             */
    
            /**
             * Constructs a new Params.
             * @memberof tx
             * @classdesc Represents a Params.
             * @implements IParams
             * @constructor
             * @param {tx.IParams=} [properties] Properties to set
             */
            function Params(properties) {
                this.args = [];
                this.privateFor = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Params from.
             * @member {string} from
             * @memberof tx.Params
             * @instance
             */
            Params.prototype.from = "";
    
            /**
             * Params to.
             * @member {string} to
             * @memberof tx.Params
             * @instance
             */
            Params.prototype.to = "";
    
            /**
             * Params gas.
             * @member {string} gas
             * @memberof tx.Params
             * @instance
             */
            Params.prototype.gas = "";
    
            /**
             * Params gasPrice.
             * @member {string} gasPrice
             * @memberof tx.Params
             * @instance
             */
            Params.prototype.gasPrice = "";
    
            /**
             * Params value.
             * @member {string} value
             * @memberof tx.Params
             * @instance
             */
            Params.prototype.value = "";
    
            /**
             * Params nonce.
             * @member {string} nonce
             * @memberof tx.Params
             * @instance
             */
            Params.prototype.nonce = "";
    
            /**
             * Params data.
             * @member {string} data
             * @memberof tx.Params
             * @instance
             */
            Params.prototype.data = "";
    
            /**
             * Params contract.
             * @member {string} contract
             * @memberof tx.Params
             * @instance
             */
            Params.prototype.contract = "";
    
            /**
             * Params methodSignature.
             * @member {string} methodSignature
             * @memberof tx.Params
             * @instance
             */
            Params.prototype.methodSignature = "";
    
            /**
             * Params args.
             * @member {Array.<string>} args
             * @memberof tx.Params
             * @instance
             */
            Params.prototype.args = $util.emptyArray;
    
            /**
             * Params raw.
             * @member {string} raw
             * @memberof tx.Params
             * @instance
             */
            Params.prototype.raw = "";
    
            /**
             * Params privateFor.
             * @member {Array.<string>} privateFor
             * @memberof tx.Params
             * @instance
             */
            Params.prototype.privateFor = $util.emptyArray;
    
            /**
             * Params privateFrom.
             * @member {string} privateFrom
             * @memberof tx.Params
             * @instance
             */
            Params.prototype.privateFrom = "";
    
            /**
             * Params privateTxType.
             * @member {string} privateTxType
             * @memberof tx.Params
             * @instance
             */
            Params.prototype.privateTxType = "";
    
            /**
             * Params privacyGroupId.
             * @member {string} privacyGroupId
             * @memberof tx.Params
             * @instance
             */
            Params.prototype.privacyGroupId = "";
    
            /**
             * Creates a new Params instance using the specified properties.
             * @function create
             * @memberof tx.Params
             * @static
             * @param {tx.IParams=} [properties] Properties to set
             * @returns {tx.Params} Params instance
             */
            Params.create = function create(properties) {
                return new Params(properties);
            };
    
            /**
             * Encodes the specified Params message. Does not implicitly {@link tx.Params.verify|verify} messages.
             * @function encode
             * @memberof tx.Params
             * @static
             * @param {tx.IParams} message Params message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Params.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.from != null && message.hasOwnProperty("from"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.from);
                if (message.to != null && message.hasOwnProperty("to"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.to);
                if (message.gas != null && message.hasOwnProperty("gas"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.gas);
                if (message.gasPrice != null && message.hasOwnProperty("gasPrice"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.gasPrice);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.value);
                if (message.nonce != null && message.hasOwnProperty("nonce"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.nonce);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.data);
                if (message.contract != null && message.hasOwnProperty("contract"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.contract);
                if (message.methodSignature != null && message.hasOwnProperty("methodSignature"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.methodSignature);
                if (message.args != null && message.args.length)
                    for (var i = 0; i < message.args.length; ++i)
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.args[i]);
                if (message.raw != null && message.hasOwnProperty("raw"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.raw);
                if (message.privateFor != null && message.privateFor.length)
                    for (var i = 0; i < message.privateFor.length; ++i)
                        writer.uint32(/* id 13, wireType 2 =*/106).string(message.privateFor[i]);
                if (message.privateFrom != null && message.hasOwnProperty("privateFrom"))
                    writer.uint32(/* id 14, wireType 2 =*/114).string(message.privateFrom);
                if (message.privateTxType != null && message.hasOwnProperty("privateTxType"))
                    writer.uint32(/* id 15, wireType 2 =*/122).string(message.privateTxType);
                if (message.privacyGroupId != null && message.hasOwnProperty("privacyGroupId"))
                    writer.uint32(/* id 16, wireType 2 =*/130).string(message.privacyGroupId);
                return writer;
            };
    
            /**
             * Encodes the specified Params message, length delimited. Does not implicitly {@link tx.Params.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tx.Params
             * @static
             * @param {tx.IParams} message Params message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Params.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Params message from the specified reader or buffer.
             * @function decode
             * @memberof tx.Params
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tx.Params} Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Params.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tx.Params();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.from = reader.string();
                        break;
                    case 2:
                        message.to = reader.string();
                        break;
                    case 4:
                        message.gas = reader.string();
                        break;
                    case 5:
                        message.gasPrice = reader.string();
                        break;
                    case 6:
                        message.value = reader.string();
                        break;
                    case 7:
                        message.nonce = reader.string();
                        break;
                    case 8:
                        message.data = reader.string();
                        break;
                    case 9:
                        message.contract = reader.string();
                        break;
                    case 10:
                        message.methodSignature = reader.string();
                        break;
                    case 11:
                        if (!(message.args && message.args.length))
                            message.args = [];
                        message.args.push(reader.string());
                        break;
                    case 12:
                        message.raw = reader.string();
                        break;
                    case 13:
                        if (!(message.privateFor && message.privateFor.length))
                            message.privateFor = [];
                        message.privateFor.push(reader.string());
                        break;
                    case 14:
                        message.privateFrom = reader.string();
                        break;
                    case 15:
                        message.privateTxType = reader.string();
                        break;
                    case 16:
                        message.privacyGroupId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Params message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tx.Params
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tx.Params} Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Params.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Params message.
             * @function verify
             * @memberof tx.Params
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Params.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.from != null && message.hasOwnProperty("from"))
                    if (!$util.isString(message.from))
                        return "from: string expected";
                if (message.to != null && message.hasOwnProperty("to"))
                    if (!$util.isString(message.to))
                        return "to: string expected";
                if (message.gas != null && message.hasOwnProperty("gas"))
                    if (!$util.isString(message.gas))
                        return "gas: string expected";
                if (message.gasPrice != null && message.hasOwnProperty("gasPrice"))
                    if (!$util.isString(message.gasPrice))
                        return "gasPrice: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                if (message.nonce != null && message.hasOwnProperty("nonce"))
                    if (!$util.isString(message.nonce))
                        return "nonce: string expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!$util.isString(message.data))
                        return "data: string expected";
                if (message.contract != null && message.hasOwnProperty("contract"))
                    if (!$util.isString(message.contract))
                        return "contract: string expected";
                if (message.methodSignature != null && message.hasOwnProperty("methodSignature"))
                    if (!$util.isString(message.methodSignature))
                        return "methodSignature: string expected";
                if (message.args != null && message.hasOwnProperty("args")) {
                    if (!Array.isArray(message.args))
                        return "args: array expected";
                    for (var i = 0; i < message.args.length; ++i)
                        if (!$util.isString(message.args[i]))
                            return "args: string[] expected";
                }
                if (message.raw != null && message.hasOwnProperty("raw"))
                    if (!$util.isString(message.raw))
                        return "raw: string expected";
                if (message.privateFor != null && message.hasOwnProperty("privateFor")) {
                    if (!Array.isArray(message.privateFor))
                        return "privateFor: array expected";
                    for (var i = 0; i < message.privateFor.length; ++i)
                        if (!$util.isString(message.privateFor[i]))
                            return "privateFor: string[] expected";
                }
                if (message.privateFrom != null && message.hasOwnProperty("privateFrom"))
                    if (!$util.isString(message.privateFrom))
                        return "privateFrom: string expected";
                if (message.privateTxType != null && message.hasOwnProperty("privateTxType"))
                    if (!$util.isString(message.privateTxType))
                        return "privateTxType: string expected";
                if (message.privacyGroupId != null && message.hasOwnProperty("privacyGroupId"))
                    if (!$util.isString(message.privacyGroupId))
                        return "privacyGroupId: string expected";
                return null;
            };
    
            /**
             * Creates a Params message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tx.Params
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tx.Params} Params
             */
            Params.fromObject = function fromObject(object) {
                if (object instanceof $root.tx.Params)
                    return object;
                var message = new $root.tx.Params();
                if (object.from != null)
                    message.from = String(object.from);
                if (object.to != null)
                    message.to = String(object.to);
                if (object.gas != null)
                    message.gas = String(object.gas);
                if (object.gasPrice != null)
                    message.gasPrice = String(object.gasPrice);
                if (object.value != null)
                    message.value = String(object.value);
                if (object.nonce != null)
                    message.nonce = String(object.nonce);
                if (object.data != null)
                    message.data = String(object.data);
                if (object.contract != null)
                    message.contract = String(object.contract);
                if (object.methodSignature != null)
                    message.methodSignature = String(object.methodSignature);
                if (object.args) {
                    if (!Array.isArray(object.args))
                        throw TypeError(".tx.Params.args: array expected");
                    message.args = [];
                    for (var i = 0; i < object.args.length; ++i)
                        message.args[i] = String(object.args[i]);
                }
                if (object.raw != null)
                    message.raw = String(object.raw);
                if (object.privateFor) {
                    if (!Array.isArray(object.privateFor))
                        throw TypeError(".tx.Params.privateFor: array expected");
                    message.privateFor = [];
                    for (var i = 0; i < object.privateFor.length; ++i)
                        message.privateFor[i] = String(object.privateFor[i]);
                }
                if (object.privateFrom != null)
                    message.privateFrom = String(object.privateFrom);
                if (object.privateTxType != null)
                    message.privateTxType = String(object.privateTxType);
                if (object.privacyGroupId != null)
                    message.privacyGroupId = String(object.privacyGroupId);
                return message;
            };
    
            /**
             * Creates a plain object from a Params message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tx.Params
             * @static
             * @param {tx.Params} message Params
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Params.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.args = [];
                    object.privateFor = [];
                }
                if (options.defaults) {
                    object.from = "";
                    object.to = "";
                    object.gas = "";
                    object.gasPrice = "";
                    object.value = "";
                    object.nonce = "";
                    object.data = "";
                    object.contract = "";
                    object.methodSignature = "";
                    object.raw = "";
                    object.privateFrom = "";
                    object.privateTxType = "";
                    object.privacyGroupId = "";
                }
                if (message.from != null && message.hasOwnProperty("from"))
                    object.from = message.from;
                if (message.to != null && message.hasOwnProperty("to"))
                    object.to = message.to;
                if (message.gas != null && message.hasOwnProperty("gas"))
                    object.gas = message.gas;
                if (message.gasPrice != null && message.hasOwnProperty("gasPrice"))
                    object.gasPrice = message.gasPrice;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                if (message.nonce != null && message.hasOwnProperty("nonce"))
                    object.nonce = message.nonce;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = message.data;
                if (message.contract != null && message.hasOwnProperty("contract"))
                    object.contract = message.contract;
                if (message.methodSignature != null && message.hasOwnProperty("methodSignature"))
                    object.methodSignature = message.methodSignature;
                if (message.args && message.args.length) {
                    object.args = [];
                    for (var j = 0; j < message.args.length; ++j)
                        object.args[j] = message.args[j];
                }
                if (message.raw != null && message.hasOwnProperty("raw"))
                    object.raw = message.raw;
                if (message.privateFor && message.privateFor.length) {
                    object.privateFor = [];
                    for (var j = 0; j < message.privateFor.length; ++j)
                        object.privateFor[j] = message.privateFor[j];
                }
                if (message.privateFrom != null && message.hasOwnProperty("privateFrom"))
                    object.privateFrom = message.privateFrom;
                if (message.privateTxType != null && message.hasOwnProperty("privateTxType"))
                    object.privateTxType = message.privateTxType;
                if (message.privacyGroupId != null && message.hasOwnProperty("privacyGroupId"))
                    object.privacyGroupId = message.privacyGroupId;
                return object;
            };
    
            /**
             * Converts this Params to JSON.
             * @function toJSON
             * @memberof tx.Params
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Params.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Params;
        })();
    
        tx.TxResponse = (function() {
    
            /**
             * Properties of a TxResponse.
             * @memberof tx
             * @interface ITxResponse
             * @property {Object.<string,string>|null} [headers] TxResponse headers
             * @property {string|null} [id] TxResponse id
             * @property {Object.<string,string>|null} [contextLabels] TxResponse contextLabels
             * @property {ethereum.ITransaction|null} [transaction] TxResponse transaction
             * @property {ethereum.IReceipt|null} [receipt] TxResponse receipt
             * @property {Array.<error.IError>|null} [errors] TxResponse errors
             */
    
            /**
             * Constructs a new TxResponse.
             * @memberof tx
             * @classdesc Represents a TxResponse.
             * @implements ITxResponse
             * @constructor
             * @param {tx.ITxResponse=} [properties] Properties to set
             */
            function TxResponse(properties) {
                this.headers = {};
                this.contextLabels = {};
                this.errors = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TxResponse headers.
             * @member {Object.<string,string>} headers
             * @memberof tx.TxResponse
             * @instance
             */
            TxResponse.prototype.headers = $util.emptyObject;
    
            /**
             * TxResponse id.
             * @member {string} id
             * @memberof tx.TxResponse
             * @instance
             */
            TxResponse.prototype.id = "";
    
            /**
             * TxResponse contextLabels.
             * @member {Object.<string,string>} contextLabels
             * @memberof tx.TxResponse
             * @instance
             */
            TxResponse.prototype.contextLabels = $util.emptyObject;
    
            /**
             * TxResponse transaction.
             * @member {ethereum.ITransaction|null|undefined} transaction
             * @memberof tx.TxResponse
             * @instance
             */
            TxResponse.prototype.transaction = null;
    
            /**
             * TxResponse receipt.
             * @member {ethereum.IReceipt|null|undefined} receipt
             * @memberof tx.TxResponse
             * @instance
             */
            TxResponse.prototype.receipt = null;
    
            /**
             * TxResponse errors.
             * @member {Array.<error.IError>} errors
             * @memberof tx.TxResponse
             * @instance
             */
            TxResponse.prototype.errors = $util.emptyArray;
    
            /**
             * Creates a new TxResponse instance using the specified properties.
             * @function create
             * @memberof tx.TxResponse
             * @static
             * @param {tx.ITxResponse=} [properties] Properties to set
             * @returns {tx.TxResponse} TxResponse instance
             */
            TxResponse.create = function create(properties) {
                return new TxResponse(properties);
            };
    
            /**
             * Encodes the specified TxResponse message. Does not implicitly {@link tx.TxResponse.verify|verify} messages.
             * @function encode
             * @memberof tx.TxResponse
             * @static
             * @param {tx.ITxResponse} message TxResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TxResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.headers != null && message.hasOwnProperty("headers"))
                    for (var keys = Object.keys(message.headers), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.headers[keys[i]]).ldelim();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
                if (message.contextLabels != null && message.hasOwnProperty("contextLabels"))
                    for (var keys = Object.keys(message.contextLabels), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.contextLabels[keys[i]]).ldelim();
                if (message.transaction != null && message.hasOwnProperty("transaction"))
                    $root.ethereum.Transaction.encode(message.transaction, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.receipt != null && message.hasOwnProperty("receipt"))
                    $root.ethereum.Receipt.encode(message.receipt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.errors != null && message.errors.length)
                    for (var i = 0; i < message.errors.length; ++i)
                        $root.error.Error.encode(message.errors[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified TxResponse message, length delimited. Does not implicitly {@link tx.TxResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof tx.TxResponse
             * @static
             * @param {tx.ITxResponse} message TxResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TxResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a TxResponse message from the specified reader or buffer.
             * @function decode
             * @memberof tx.TxResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {tx.TxResponse} TxResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TxResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.tx.TxResponse(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.headers === $util.emptyObject)
                            message.headers = {};
                        key = reader.string();
                        reader.pos++;
                        message.headers[key] = reader.string();
                        break;
                    case 2:
                        message.id = reader.string();
                        break;
                    case 3:
                        reader.skip().pos++;
                        if (message.contextLabels === $util.emptyObject)
                            message.contextLabels = {};
                        key = reader.string();
                        reader.pos++;
                        message.contextLabels[key] = reader.string();
                        break;
                    case 4:
                        message.transaction = $root.ethereum.Transaction.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.receipt = $root.ethereum.Receipt.decode(reader, reader.uint32());
                        break;
                    case 6:
                        if (!(message.errors && message.errors.length))
                            message.errors = [];
                        message.errors.push($root.error.Error.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a TxResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof tx.TxResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {tx.TxResponse} TxResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TxResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a TxResponse message.
             * @function verify
             * @memberof tx.TxResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TxResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.headers != null && message.hasOwnProperty("headers")) {
                    if (!$util.isObject(message.headers))
                        return "headers: object expected";
                    var key = Object.keys(message.headers);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.headers[key[i]]))
                            return "headers: string{k:string} expected";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.contextLabels != null && message.hasOwnProperty("contextLabels")) {
                    if (!$util.isObject(message.contextLabels))
                        return "contextLabels: object expected";
                    var key = Object.keys(message.contextLabels);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.contextLabels[key[i]]))
                            return "contextLabels: string{k:string} expected";
                }
                if (message.transaction != null && message.hasOwnProperty("transaction")) {
                    var error = $root.ethereum.Transaction.verify(message.transaction);
                    if (error)
                        return "transaction." + error;
                }
                if (message.receipt != null && message.hasOwnProperty("receipt")) {
                    var error = $root.ethereum.Receipt.verify(message.receipt);
                    if (error)
                        return "receipt." + error;
                }
                if (message.errors != null && message.hasOwnProperty("errors")) {
                    if (!Array.isArray(message.errors))
                        return "errors: array expected";
                    for (var i = 0; i < message.errors.length; ++i) {
                        var error = $root.error.Error.verify(message.errors[i]);
                        if (error)
                            return "errors." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a TxResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof tx.TxResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {tx.TxResponse} TxResponse
             */
            TxResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.tx.TxResponse)
                    return object;
                var message = new $root.tx.TxResponse();
                if (object.headers) {
                    if (typeof object.headers !== "object")
                        throw TypeError(".tx.TxResponse.headers: object expected");
                    message.headers = {};
                    for (var keys = Object.keys(object.headers), i = 0; i < keys.length; ++i)
                        message.headers[keys[i]] = String(object.headers[keys[i]]);
                }
                if (object.id != null)
                    message.id = String(object.id);
                if (object.contextLabels) {
                    if (typeof object.contextLabels !== "object")
                        throw TypeError(".tx.TxResponse.contextLabels: object expected");
                    message.contextLabels = {};
                    for (var keys = Object.keys(object.contextLabels), i = 0; i < keys.length; ++i)
                        message.contextLabels[keys[i]] = String(object.contextLabels[keys[i]]);
                }
                if (object.transaction != null) {
                    if (typeof object.transaction !== "object")
                        throw TypeError(".tx.TxResponse.transaction: object expected");
                    message.transaction = $root.ethereum.Transaction.fromObject(object.transaction);
                }
                if (object.receipt != null) {
                    if (typeof object.receipt !== "object")
                        throw TypeError(".tx.TxResponse.receipt: object expected");
                    message.receipt = $root.ethereum.Receipt.fromObject(object.receipt);
                }
                if (object.errors) {
                    if (!Array.isArray(object.errors))
                        throw TypeError(".tx.TxResponse.errors: array expected");
                    message.errors = [];
                    for (var i = 0; i < object.errors.length; ++i) {
                        if (typeof object.errors[i] !== "object")
                            throw TypeError(".tx.TxResponse.errors: object expected");
                        message.errors[i] = $root.error.Error.fromObject(object.errors[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a TxResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof tx.TxResponse
             * @static
             * @param {tx.TxResponse} message TxResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TxResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.errors = [];
                if (options.objects || options.defaults) {
                    object.headers = {};
                    object.contextLabels = {};
                }
                if (options.defaults) {
                    object.id = "";
                    object.transaction = null;
                    object.receipt = null;
                }
                var keys2;
                if (message.headers && (keys2 = Object.keys(message.headers)).length) {
                    object.headers = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.headers[keys2[j]] = message.headers[keys2[j]];
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.contextLabels && (keys2 = Object.keys(message.contextLabels)).length) {
                    object.contextLabels = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.contextLabels[keys2[j]] = message.contextLabels[keys2[j]];
                }
                if (message.transaction != null && message.hasOwnProperty("transaction"))
                    object.transaction = $root.ethereum.Transaction.toObject(message.transaction, options);
                if (message.receipt != null && message.hasOwnProperty("receipt"))
                    object.receipt = $root.ethereum.Receipt.toObject(message.receipt, options);
                if (message.errors && message.errors.length) {
                    object.errors = [];
                    for (var j = 0; j < message.errors.length; ++j)
                        object.errors[j] = $root.error.Error.toObject(message.errors[j], options);
                }
                return object;
            };
    
            /**
             * Converts this TxResponse to JSON.
             * @function toJSON
             * @memberof tx.TxResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TxResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return TxResponse;
        })();
    
        return tx;
    })();

    return $root;
});
