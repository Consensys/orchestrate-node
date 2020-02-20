#!/usr/bin/env node

import { Command } from 'commander'

import { getCatalogHandler, getContractHandler, getTagsHandler, registerContractHandler } from './helpers'

const program = new Command()

program
  .command('register')
  .description('Registers a new contract in the remote registry')
  .requiredOption('-n, --name <str>', 'Name of the contract')
  .requiredOption('-f, --filepath <filepath>', 'Location of the artifact.json file of the contract')
  .requiredOption('-e, --endpoint <host:port>', 'Contract registry endpoint in the form host:port')
  .option('-t, --tag <str>', 'Tag to be attached to the contract')
  .action(registerContractHandler)

program
  .command('catalog')
  .description('Returns all the registered contract names')
  .requiredOption('-e, --endpoint <host:port>', 'Contract registry endpoint in the form host:port')
  .action(getCatalogHandler)

program
  .command('contract')
  .description('Returns the registered contract by name and tag')
  .requiredOption('-n, --name <str>', 'Name of the contract')
  .requiredOption('-e, --endpoint <host:port>', 'Contract registry endpoint in the form host:port')
  .option('-t, --tag <str>', '(optional) Tag of the contract')
  .action(getContractHandler)

program
  .command('tags')
  .description('Returns all the registered tags of a given contract')
  .requiredOption('-n, --name <str>', 'Name of the contract')
  .requiredOption('-e, --endpoint <host:port>', 'Contract registry endpoint in the form host:port')
  .action(getTagsHandler)

program.parse(process.argv)
