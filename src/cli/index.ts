#!/usr/bin/env node

import { Command } from 'commander'

const program = new Command()

program
  .version('2.0.0')
  .description('Orchestrate CLI')
  .command('contracts', 'Contract Registry management')
  .command('accounts', 'Accounts management')
  .parse(process.argv)
