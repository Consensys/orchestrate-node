[![Website](https://img.shields.io/website?label=documentation&url=https%3A%2F%2Fdocs.orchestrate.pegasys.tech%2F)](https://docs.orchestrate.pegasys.tech/)
[![Website](https://img.shields.io/website?label=website&url=https%3A%2F%2Fpegasys.tech%2Forchestrate%2F)](https://pegasys.tech/orchestrate/)

[![npm](https://img.shields.io/npm/v/pegasys-orchestrate)](https://www.npmjs.com/package/pegasys-orchestrate)
[![npm](https://img.shields.io/npm/dw/pegasys-orchestrate)](https://www.npmjs.com/package/pegasys-orchestrate)

[![CircleCI](https://img.shields.io/circleci/build/gh/PegaSysEng/orchestrate-node?token=b950a12c7c5f1ba8ae60273360c99d832301057a)](https://circleci.com/gh/PegaSysEng/orchestrate-node)
[![Known Vulnerabilities](https://snyk.io/test/github/PegaSysEng/orchestrate-node/badge.svg?targetFile=package.json)](https://snyk.io/test/github/PegaSysEng/orchestrate-node?targetFile=package.json)

# PegaSys-Orchestrate Node.js Library

The PegaSys Orchestrate library provides convenient access to the PegaSys Orchestrate API from applications written in server-side JavaScript

# Compatibility

| SDK versions        | Orchestrate versions             |
| ------------------- | -------------------------------- |
| master/HEAD         | Orchestrate v2.1.0-rc4 or higher |
| SDK v2.2.x          | Orchestrate v2.1.0-rc4 or higher |
| SDK v2.1.x          | Orchestrate v2.1.0-rc3           |
| SDK v2.0.x          | Orchestrate v2.0.x               |
| SDK v1.0.x or lower | Orchestrate v1.0.x or lower      |

# Orchestrate Node SDK CLI reference

In addition to the programatic API provided by the library, you can run some actions directly from
the command line using the `pegasys-orchestrate` module `orchestrate` bin script.

## Install pegasys-orchestrate

Run `npm install pegasys-orchestrate -g` to globally access pegasys-orchestrate CLI on your system.

## Orchestrate command

Run `orchestrate` with subcommands and options to interact with Orchestrate Contract registry
and accounts.

Each command can have subcommands and options.

### Help

Run `orchestrate -h` to output usage information.

### Usage

orchestrate [options][command]

#### Options

- `-V`, `--version`: output the Orchestrate SDK version number.
- `-h`, `--help`: output usage information.

#### Commands

- contracts: Interact with the Contract Registry, see [Contract command](#contract-command) for options.
- accounts: Interact with the Contract Registry.
- help [command]: display help for the command. Same as using the `-h` or `--help` option.

## Contract command

Orchestrate contract command allows to manipulate Smart contracts in the Contract registry.

### Help

Run `orchestrate contracts -h` to get contract related command usage information.

### Usage

orchestrate contracts [options][command]

#### Options

- `-h`, `--help`: output contracts command usage information.

#### Commands

- register [options] Registers a new contract in the remote registry
  catalog [options] Returns all the registered contract names
  contract [options] Returns the registered contract by name and tag
  tags [options] Returns all the registered tags of a given contract

````

### Account command

Run `orchestrate help accounts` to get account related command help:

```bash
% orchestrate help accounts
Usage: orchestrate-accounts [options] [command]

Options:
  -h, --help          output usage information

Commands:
  generate [options]  Generate a new Ethereum account that can be automatically credited
````

# Orchestrate documentation

You can consult all [PegaSys Orchestrate's documentation here.](https://docs.orchestrate.pegasys.tech/)

Please contact us at [support@pegasys.tech](mailto:support@pegasys.tech?subject=Orchestrate Node SDK)
