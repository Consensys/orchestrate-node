# Orchestrate Node SDK CLI reference

In addition to the programmatic API provided by the library, you can run some actions directly from
the command line using the `pegasys-orchestrate` module.

## Important requirement

**The Orchestrate SDK requires Orchestrate to be installed.**

> **Important:** Orchestrate is only available for Orchestrate customers and
> [ConsenSys partners](https://consensys.net/solutions/partnerships/).
>
> [Contact ConsenSys](https://codefi.consensys.net/orchestrate-get-in-touch) if you want to purchase Orchestrate
> or are interested in our [partner program](https://consensys.net/solutions/partnerships/).
>
> If you are already a partner or customer but we did not provide the credentials to access the
> Docker registry, send an email from your company email to [orchestrate@consensys.net](mailto:orchestrate@consensys.net).
>
> You can use this Quickstart only if you have received these credentials from ConsenSys to connect to the registry.
>
> **You cannot continue without the registry credentials.**

> **Tip** Try a free trial of Orchestrate with the [Quorum Dev Quickstart](https://github.com/PegaSysEng/quorum-dev-quickstart#iv-orchestrate-network-). 

## Install pegasys-orchestrate

Run `npm install pegasys-orchestrate -g` to globally access Pegasys Orchestrate command line tool on your system.

---

## Orchestrate command

Run `orchestrate` with subcommands and options to interact with Orchestrate Contract registry
and accounts.

Each subcommand can have subcommands and options.

### Help

Run `orchestrate -h` to output usage information.

### Usage

`orchestrate [options] [subcommand]`

### Options

- `-V`, `--version`: output the Orchestrate SDK version number.
- `-h`, `--help`: output usage information.

### Subcommands

- `contracts`: Interact with the Contract Registry, see [Contract subcommand](#contract-subcommand) for options.
- `accounts`: Interact with the Contract Registry.
- `help [command]`: display help for the command. Same as using the `-h` or `--help` option.

---

### Contract subcommand

Orchestrate `contract` subcommand allows to manipulate smart contracts in the contract registry.

#### Help

Run `orchestrate contracts -h` to get contract subcommand usage information.

#### Usage

`orchestrate contracts [options] [subcommand]`

#### Options

- `-h`, `--help`: output contracts subcommand usage information.

#### Subcommands

- `register [options]`:

  Insert a new contract in Orchestrate contract registry

  ##### Options

  - `-n, --name <string>`: Name of the contract.
  - `-f, --filepath <file>`: Path of the JSON artifact file for the compiled contract.
  - `-e, --endpoint <host:port>`: Contract registry endpoint.
  - `-t, --tag <string>`: Tag to be attached to the contract, can be used as the version but any other value is possible.
  - `-h, --help`: Output register subcommand usage.

  ##### Register subcommand example

  ```bash
  orchestrate contracts register -e localhost:8020 -n Counter -t 1.2.3 -f build/contracts/Counter.json
  ```

  ##### Successful output

  `Contract successfully registered`.

- `catalog [options]`:

  Lists all the registered contracts names.

  Output is a JSON formated list of strings.

  If the registry is empty, an empty list `[]` is returned.

  ##### Options

  - `-e, --endpoint <host:port>`: Contract registry endpoint.
  - `-h, --help`: Output catalog subcommand usage.

  ##### Contracts catalog subcommand example

  ```bash
  orchestrate contracts catalog -e localhost:8020
  ```

  ##### Output example

  ```json
  [ 'Counter' ]
  ```

- `contract [options]`:

  Returns the registered contract by name and tag (usually used as the contract version).

  ##### Options

  - `-n, --name <string>`: Name of the contract.
  - `-e, --endpoint <host:port>`: Contract registry endpoint.
  - `-t, --tag <string>`: Optional tag of the contract.
  - `-h, --help`: Output contract subcommand usage.

  ##### Contract subcommand example

  ```bash
  orchestrate contracts contract -n Counter -t 1.2.3 -e localhost:8020
  ```

  ##### Output example

  ```json
  {
    "name": "Counter",
    "tag": "1.2.3",
    "abi": [
      {
        "anonymous": false,
        "inputs": [Array],
        "name": "Incremented",
        "type": "event"
      },
      {
        "constant": false,
        "inputs": [Array],
        "name": "increment",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "bytecode": "0x6080604052348015600f57600080fd5b5061010a8061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80637cf5dab014602d575b600080fd5b605660048036036020811015604157600080fd5b81019080803590602001909291905050506058565b005b8060008082825401925050819055507f38ac789ed44572701765277c4d0970f2db1c1a571ed39e84358095ae4eaa54203382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15056fea265627a7a72315820b1e04b5f7796f256da0d265a961b4fbeeb62170cae31a34546c6cbceb31884d664736f6c63430005100032",
    "deployedBytecode": "0x6080604052348015600f57600080fd5b506004361060285760003560e01c80637cf5dab014602d575b600080fd5b605660048036036020811015604157600080fd5b81019080803590602001909291905050506058565b005b8060008082825401925050819055507f38ac789ed44572701765277c4d0970f2db1c1a571ed39e84358095ae4eaa54203382604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390a15056fea265627a7a72315820b1e04b5f7796f256da0d265a961b4fbeeb62170cae31a34546c6cbceb31884d664736f6c63430005100032"
  }
  ```

- `tags [options]`:

	Returns all the associated tags of a registered contract.

	##### Options

	- `-n, --name  <string>`: Name of the contract.
	- `-e, --endpoint <host:port>`: Contract registry endpoint.
	- `-h, --help`: Output tags subcommand usage.

	##### Tags subcommand example

	```bash
	orchestrate contracts tags -n Counter -e localhost:8020
	```

	##### Output example

	```json
	[ '1.2.3', 'latest' ]
	```

---

### Account subcommand

Orchestrate `accounts` subcommand allows to manipulate Orchestrate accounts.

#### Help

Run `orchestrate accounts -h` to get contract subcommand usage information.

#### Usage

`orchestrate accounts [options] [subcommand]`

#### Options

- `-h`, `--help`: output accounts subcommand usage information.

#### Subcommands

- `generate [options]`:
  Create a new account in Orchestrate.

	##### Options

  - `-e, --endpoint <host:port>`: Kafka endpoint.
  - `-c, --chain <string>`: Optional chain on which to credit the new account.
  - `-h, --help`: Output generate subcommand usage.

	**Generate subcommand example:**

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

  In this example, `0xD562A0739aD90995c188E04f6A13AbE698c3834D` is the generated Ethereum address.
