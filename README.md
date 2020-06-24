[![Website](https://img.shields.io/website?label=documentation&url=https%3A%2F%2Fdocs.orchestrate.pegasys.tech%2F)](https://docs.orchestrate.pegasys.tech/)
[![Website](https://img.shields.io/website?label=website&url=https%3A%2F%2Fpegasys.tech%2Forchestrate%2F)](https://pegasys.tech/orchestrate/)

[![npm](https://img.shields.io/npm/v/pegasys-orchestrate)](https://www.npmjs.com/package/pegasys-orchestrate)
[![npm](https://img.shields.io/npm/dw/pegasys-orchestrate)](https://www.npmjs.com/package/pegasys-orchestrate)

[![CircleCI](https://img.shields.io/circleci/build/gh/PegaSysEng/orchestrate-node?token=b950a12c7c5f1ba8ae60273360c99d832301057a)](https://circleci.com/gh/PegaSysEng/orchestrate-node)
[![Known Vulnerabilities](https://snyk.io/test/github/PegaSysEng/orchestrate-node/badge.svg?targetFile=package.json)](https://snyk.io/test/github/PegaSysEng/orchestrate-node?targetFile=package.json)

# PegaSys-Orchestrate Node.js Library

The PegaSys Orchestrate library provides convenient access to the PegaSys Orchestrate API from applications written in server-side JavaScript

## Compatibility

| SDK versions        | Orchestrate versions             |
| ------------------- | -------------------------------- |
| master/HEAD         | Orchestrate v2.1.0-rc4 or higher |
| SDK v2.2.x          | Orchestrate v2.1.0-rc4 or higher |
| SDK v2.1.x          | Orchestrate v2.1.0-rc3           |
| SDK v2.0.x          | Orchestrate v2.0.x               |
| SDK v1.0.x or lower | Orchestrate v1.0.x or lower      |

## Orchestrate documentation

You can consult all [PegaSys Orchestrate's documentation here.](https://docs.orchestrate.pegasys.tech/)

Please contact us at [support@pegasys.tech](mailto:support@pegasys.tech?subject=Orchestrate Node SDK)

## Orchestrate Node SDK CLI reference

In addition to the programatic API provided by the library, you can run some actions directly from
the command line using the `pegasys-orchestrate` module.

### Install pegasys-orchestrate

Run `npm install pegasys-orchestrate -g` to globally access Pegasys Orchestrate command line tool on your system.

### Orchestrate command

Run `orchestrate` with subcommands and options to interact with Orchestrate Contract registry
and accounts.

Each command can have subcommands and options.

#### Help

Run `orchestrate -h` to output usage information.

#### Usage

`orchestrate [options] [command]`

##### Options

- `-V`, `--version`: output the Orchestrate SDK version number.
- `-h`, `--help`: output usage information.

##### Commands

- `contracts`: Interact with the Contract Registry, see [Contract command](#contract-command) for options.
- `accounts`: Interact with the Contract Registry.
- `help [command]`: display help for the command. Same as using the `-h` or `--help` option.

### Contract command

Orchestrate `contract` command allows to manipulate smart contracts in the contract registry.

#### Help

Run `orchestrate contracts -h` to get contract command usage information.

#### Usage

`orchestrate contracts [options] [command]`

##### Options

- `-h`, `--help`: output contracts command usage information.

##### Commands

- `register [options]`:
  Insert a new contract in Orchestrate contract registry ###### Options:

      - `-n, --name  <string>`: Name of the contract.
      - `-f, --filepath <file>`: Path of the JSON artifact file for the compiled contract.
      - `-e, --endpoint <host:port>`: Contract registry endpoint.
      - `-t, --tag <string>`: Tag to be attached to the contract, can be used as the version but any other value is possible.
      - `-h, --help`: Output register command usage.

      	**Register command example:**

      	```bash
      	orchestrate contracts register -e localhost:8020 -n Counter -t 1.2.3 -f build/contracts/Counter.json
      	```

      	**Sucessful output** displays `Contract successfully registered`.

- `catalog [options]`:

      	Lists all the registered contracts names.

      	Output is a JSON formated list of strings.

      	If the registry is empty, an empty list `[]` is returned.

      	###### Options:

      	- `-e, --endpoint <host:port>`: Contract registry endpoint.
      	- `-h, --help`: Output catalog command usage.

      	**Contracts catalog command example:**

      	```bash
      	orchestrate contracts catalog -e localhost:8020
      	```

      	**Output example:**

      	```json
      	[ 'Counter' ]
      	```

- `contract [options]`:

      	Returns the registered contract by name and tag (usually used as the contract version).

      	###### Options:

      	- `-n, --name  <string>`: Name of the contract.
      	- `-e, --endpoint <host:port>`: Contract registry endpoint.
      	- `-t, --tag <string>`: Optional tag of the contract.
      	- `-h, --help`: Output contract command usage.

      	**Contract command example:**

      	```bash
      	orchestrate contracts contract -n Counter -t 1.2.3 -e localhost:8020
      	```

      	**Output example:**

      	```json
      	{
      	  name: 'Counter',
      	  tag: '1.2.3',
      	  abi: [
      	    {
      	      anonymous: false,
      	      inputs: [Array],
      	      name: 'Incremented',
      	      type: 'event'
      	    },
      	    {
      	      constant: false,
      	      inputs: [Array],
      	      name: 'increment',
      	      outputs: [],
      	      payable: false,
      	      stateMutability: 'nonpayable',
      	      type: 'function'
      	    }
      	  ],
      	  bytecode: '0x6080604052348015600f57600080fd5b5061010a8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80637cf5dab014602d575b600080fd5b605660048036036020811015604157600080fd5b81019080803590602001909291905050506058565b005b8060008082825401925050819055507f38ac789ed44572701765277c4d0970f2db1c1a571ed39e84358095ae4eaa54203382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15056fea265627a7a72315820b1e04b5f7796f256da0d265a961b4fbeeb62170cae31a34546c6cbceb31884d664736f6c63430005100032',
      	  deployedBytecode: '0x6080604052348015600f57600080fd5b506004361060285760003560e01c80637cf5dab014602d575b600080fd5b605660048036036020811015604157600080fd5b81019080803590602001909291905050506058565b005b8060008082825401925050819055507f38ac789ed44572701765277c4d0970f2db1c1a571ed39e84358095ae4eaa54203382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15056fea265627a7a72315820b1e04b5f7796f256da0d265a961b4fbeeb62170cae31a34546c6cbceb31884d664736f6c63430005100032'
      	}
      	```

- `tags [options]`:

      	Returns all the associated tags of a registered contract.

      	###### Options:

      	- `-n, --name  <string>`: Name of the contract.
      	- `-e, --endpoint <host:port>`: Contract registry endpoint.
      	- `-h, --help`: Output tags command usage.

      	**Tags command example:**

      	```bash
      	orchestrate contracts tags -n Counter -e localhost:8020
      	```

      	**Output example:**

      	```json
      	[ '1.2.3', 'latest' ]
      	```

#### Account command

Orchestrate `accounts` command allows to manipulate Orchestrate accounts.

#### Help

Run `orchestrate accounts -h` to get contract command usage information.

#### Usage

`orchestrate accounts [options] [command]`

##### Options

- `-h`, `--help`: output accounts command usage information.

##### Commands

- `generate [options]`:
  Create a new account in Orchestrate.

      	###### Options:

      - `-e, --endpoint <host:port>`: Kafka endpoint.
      	- `-c, --chain <string>`: Optional chain on which to credit the new account.
      - `-h, --help`: Output generate command usage.

      	**Generate command example:**

      	```bash
      	orchestrate accounts generate -c besu -e localhost:9092
      	```

      	**Output example:**

      	```json
      	{"level":"INFO","timestamp":"2020-06-24T17:29:07.230Z","logger":"kafkajs","message":"[Consumer] Starting","groupId":"wallet-generator-sdk-consumer"}
      	{"level":"INFO","timestamp":"2020-06-24T17:29:10.255Z","logger":"kafkajs","message":"[Runner] Consumer has joined the group","groupId":"wallet-generator-sdk-consumer","memberId":"orchestrate-sdk-consumer-bc78503d-2605-4b4c-b87e-6ab58342e378","leaderId":"orchestrate-sdk-consumer-bc78503d-2605-4b4c-b87e-6ab58342e378","isLeader":true,"memberAssignment":{"topic-account-generated":[0]},"groupProtocol":"RoundRobinAssigner","duration":3022}
      	0xD562A0739aD90995c188E04f6A13AbE698c3834D
      	{"level":"INFO","timestamp":"2020-06-24T17:29:11.324Z","logger":"kafkajs","message":"[Consumer] Stopped","groupId":"wallet-generator-sdk-consumer"}
      	```

      	Where `0xD562A0739aD90995c188E04f6A13AbE698c3834D` is the generated Ethereum address.
