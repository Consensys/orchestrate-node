// tslint:disable: no-console

import * as util from 'util'

import { IdentityClient } from '../../src'

export const start = async () => {
  try {
    const identityClient = new IdentityClient('http://localhost:8041')

    const privateKey = 'f368b15ea01bafd199d4d39daee2b1d281bf78193c590ef79c233016b3b43f81'
    const account = await identityClient.importAccount({ privateKey })

    console.log(util.inspect(account, false, null, true))
  } catch (error) {
    console.error(error)
  }
}
