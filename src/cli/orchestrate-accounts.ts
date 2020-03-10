#!/usr/bin/env node

import { Command } from 'commander'

import { generateAccountHandler } from './helpers'

const program = new Command()

program
  .command('generate')
  .description('Generate a new Ethereum account that can be automatically credited')
  .requiredOption('-e, --endpoint <host:port>', 'Kafka URL host:port')
  .option('-c, --chain <str>', '(optional) Chain on which to credit new accounts')
  .action(generateAccountHandler)

program.parse(process.argv)
