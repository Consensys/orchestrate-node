// tslint:disable: no-console

import { OrchestrateClient } from '../../src'

export const start = async () => {
  try {
    const client = new OrchestrateClient('http://localhost:8031')

    const chain = await client.registerChain(
      {
        name: 'besu',
        urls: ['http://validator2:8545'],
        listener: {
          fromBlock: 'latest'
        },
        labels: {
          my_label: 'testing labels'
        }
      },
      {
        Authorization:
          'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiaHR0cHM6Ly9hdXRoMC5jb20vYXBpL3YyLyJdLCJleHAiOjE2MjczODg5OTQsImlhdCI6MTYyNzMwMjU5NCwiaXNzIjoiT3JjaGVzdHJhdGUiLCJqdGkiOiI2ZmM5YWUxYS1lYWE0LTQxNmYtYWU5OS0wNDE2MTA2MWI0ZWMiLCJuYmYiOjE2MjczMDI1OTQsIm9yY2hlc3RyYXRlLm5hbWVzcGFjZSI6eyJ0ZW5hbnRfaWQiOiJkYXJpbyJ9LCJzY3AiOlsicmVhZDp1c2VycyIsInVwZGF0ZTp1c2VycyIsImNyZWF0ZTp1c2VycyJdLCJzdWIiOiJlMmUtdGVzdCJ9.lsl1KzN8MxMxaQPwF2x9Gnd0AR93WW-OkgNRngWOQNi0QvxXrsEmzUbUM2e4k8wvFMoA8PS-tb2obOxZ57WwLkbZbj-9WA3Ng6AR3QlDt5f-otybJHxP38o1W0OhS92GmU4ds0TG1jHcyAV1bf7Cm3LXg6ijqdR87mVkoRsHwVFNGt-XYTLq4hrmJt2gmle149gZ5X0WbYYR9qvDJHhla4n6CNSn6Wt4yXfSYZcxOysh96lSGXnfqjiBjwAq9iqbj7JvTaDKuhBrAzl7pRO_B3Ai1Uov34lfwD5pRPcFfGr5D51cgGOJMdVavDEjNef0e6MYV_PXy3bgOupmGt16Eg'
      }
    )

    console.log(chain)
  } catch (error) {
    console.error(error)
  }
}
