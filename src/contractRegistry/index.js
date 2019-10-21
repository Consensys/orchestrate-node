const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

/**
 * Declare the path to the protobuff and load the class specific objects
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
 * [CoreStackContractRegistry is a gRPC client for the contract registry]
 */
export class CoreStackContractRegistry {

    /**
     * [constructor init a gRPC client for the contract registry]
     * @param {String} endpoint     [mandatory params, indicate the endpoint of the remote gRPC server]
     * @param {Object} options      [optional params, can be used to pass custom credentials]
     */
    constructor(endpoint, options={}) {
        this.endpoint = endpoint;
        let credentials = options.credentials || grpc.credentials.createInsecure();

        this.stub = new PROTO_DESCRIPTOR.contractregistry.Registry(
            endpoint,
            credentials,
        );
    }

    /**
     * [Returns a preformatted request object that can be used by the gRPC client]
     * @param {Object} contract     [An abi.Contract object]
     * @return {Object}             [A preformatted instance of proto RegisterContractRequest]
     */
    formatRegisterRequest = (contract) => { return { contract }; }

    /**
     * Returns a promisified request to register a contract
     * @param {Object} contract     [An abi.Contract object]
     * @return {Promise}            [A promisied contract registering request]
     */
    register = (contract) => {
        return new Promise((resolve, reject) => {
            this.stub.RegisterContract(this.formatRegisterRequest(contract),
                // Resolve or reject the promise as a callback
                (err) => {
                    if (err) { reject(err); return; }
                    resolve();
                },
            )
        });
    }

    /**
     * getCatalog returns the list of available contract names in the registry
     * @return {Promise}            [A promisied contract catalog request]
     */
    getCatalog = () => {
        return new Promise((resolve, reject) => {
            this.stub.GetCatalog({}, 
                // Resolve or reject the promise as a callback
                (err, response) => {
                    if (err) { reject(err); return; }
                    resolve(response);
                },
            )
        });
    }

    /**
     * getTag returns the list of registered tags in the registry
     * @param {String} name          [Name of the contract to query tags for]
     * @return {Promise}             [A promisified contract getTag request]
     */
    getTags = (name) => {
        return new Promise((resolve, reject) => {
            this.stub.GetTags({ name }, 
                // Resolve or reject the promise as a callback
                (err, response) => {
                    if (err) { reject(err); return; }
                    resolve(response);
                },
            )
        });
    }
}