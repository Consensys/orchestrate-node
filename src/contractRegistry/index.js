const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

/**
 * Declare the path to the protobuf and load the class specific objects
 */

const PROTO_FILE = 'types/contract-registry/registry.proto';

const PACKAGE_DEFINITION = protoLoader.loadSync(PROTO_FILE, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    includeDirs: [
        __dirname,
        path.normalize(path.join(__dirname, "..")),
        path.normalize(path.join(__dirname, "../.."))
    ]
});

const PROTO_DESCRIPTOR = grpc.loadPackageDefinition(PACKAGE_DEFINITION);

/**
 * [ContractRegistry is a gRPC client for the contract registry]
 */
export class ContractRegistry {

    /**
     * [constructor init a gRPC client for the contract registry]
     * @param {String} endpoint     [mandatory params, indicate the endpoint of the remote gRPC server]
     * @param {Object} options      [optional params, can be used to pass custom credentials]
     */
    constructor(endpoint, options={}) {
        this.endpoint = endpoint;
        let credentials = options.credentials || grpc.credentials.createInsecure();
        
        this.stub = new PROTO_DESCRIPTOR.contractregistry.ContractRegistry(
            endpoint,
            credentials,
        );

        this.stubSsl = new PROTO_DESCRIPTOR.contractregistry.ContractRegistry(
            endpoint,
            grpc.credentials.createSsl(),
        );
    }

    /**
     * [Returns a preformatted request object that can be used by the gRPC client]
     * @param {Object} contract     [An abi.Contract object]
     * @return {Object}             [A preformatted instance of proto RegisterContractRequest]
     */
    formatRegisterRequest = (contract) => { return { contract }; }

    /**
     * Call performs the inputted call and update the SSL configuration if necessary
     * @param {function} call
     * @return {Promise} A promise that resolves if the call succeed
     */
    performCall = (call) => {
        return call(this.stub)
        .catch((err) => {
            if (err.code === 14) {
                this.stub = this.stubSsl;
                return call(this.stubSsl)
            }
        })
    }

    /**
     * createRegisterCall returns a promisified request to register a contract
     * @param {Object} contract     [An abi.Contract object]
     * @return {Promise}            [A promised contract registering request]
     */
    createRegisterCall = (contract) => {
        return (stub) => {
            return new Promise((resolve, reject) => {
                stub.RegisterContract(this.formatRegisterRequest(contract),
                    // Resolve or reject the promise as a callback
                    (err, response) => {
                        if (err) { reject(err); return; }
                        resolve(response);
                    },
                )
            });
        }
    }

    /**
     * createGetCatalogCall returns the list of available contract names in the registry
     * @return {Promise}            [A promised contract catalog request]
     */
    createGetCatalogCall = () => {
        return (stub) => {
            return new Promise((resolve, reject) => {
                stub.GetCatalog({}, 
                    // Resolve or reject the promise as a callback
                    (err, response) => {
                        if (err) { reject(err); return; }
                        resolve(response);
                    },
                )
            });
        }
    }

    /**
     * createGetCatalogCall returns the list of registered tags in the registry
     * @param {String} name          [Name of the contract to query tags for]
     * @return {Promise}             [A promised contract getTag request]
     */
    createGetTagsCall = (name) => {
        return (stub) => {
            return new Promise((resolve, reject) => {
                stub.GetTags({ name }, 
                    // Resolve or reject the promise as a callback
                    (err, response) => {
                        if (err) { reject(err); return; }
                        resolve(response);
                    },
                )
            });
        }
    }

    /**
     * createGetCatalogCall returns the list of registered tags in the registry
     * @param {String} name          [Name of the contract to query tags for]
     * @return {Promise}             [A promised contract getTag request]
     */
    createGetContractCall = (contractId) => {
        return (stub) => {
            return new Promise((resolve, reject) => {
                stub.GetContract({ contractId }, 
                    // Resolve or reject the promise as a callback
                    (err, response) => {
                        if (err) { reject(err); return; }
                        resolve(response);
                    },
                )
            });
        }
    }
}
