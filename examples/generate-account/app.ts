// tslint:disable: no-console

import * as util from 'util'

import { IdentityClient } from '../../src'

export const start = async () => {
  try {
    const identityClient = new IdentityClient('http://localhost:8041')

    const accounts = await Promise.all([
      identityClient.createAccount({ alias: 'account_1' }),
      identityClient.createAccount(),
      identityClient.createAccount(),
      identityClient.createAccount()
    ])

    console.log(util.inspect(accounts, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
