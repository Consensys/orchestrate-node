// tslint:disable: no-console

import * as util from 'util'

import { IdentityClient } from '../../src'

export const start = async () => {
  try {
    const identityClient = new IdentityClient('http://localhost:8041')

    const accounts = await Promise.all([
      identityClient.createAccount({ alias: 'account_1' }),
      identityClient.createAccount({ alias: 'account_2' }),
      identityClient.createAccount({ alias: 'account_3' }),
      identityClient.createAccount({ alias: 'account_4' })
    ])

    console.log(util.inspect(accounts, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
