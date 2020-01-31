// tslint:disable: no-console

import { AccountGenerator } from '../../src'

export const start = async () => {
  try {
    const accountGenerator = new AccountGenerator(['localhost:9092'])

    await accountGenerator.connect()
    const addresses = await Promise.all([
      accountGenerator.generateAccount(),
      accountGenerator.generateAccount(),
      accountGenerator.generateAccount(),
      accountGenerator.generateAccount()
    ])
    await accountGenerator.disconnect()

    console.log(addresses)
  } catch (error) {
    console.error(error)
  }
}
