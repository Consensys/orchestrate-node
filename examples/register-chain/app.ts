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
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiaHR0cHM6Ly9hdXRoMC5jb20vYXBpL3YyLyJdLCJleHAiOjE2Mjc0MDM5NTgsImlhdCI6MTYyNzMxNzU1OCwiaXNzIjoiT3JjaGVzdHJhdGUiLCJqdGkiOiI0ZWI3NDFmMC04MDQxLTQ1OWItOGJkMy0zMzg1YmMwY2I4MzkiLCJuYmYiOjE2MjczMTc1NTgsIm9yY2hlc3RyYXRlLm5hbWVzcGFjZSI6eyJ0ZW5hbnRfaWQiOiIqIn0sInNjcCI6WyJyZWFkOnVzZXJzIiwidXBkYXRlOnVzZXJzIiwiY3JlYXRlOnVzZXJzIl0sInN1YiI6ImUyZS10ZXN0In0.GVWaU_-fs8qLcRJYeqSU6BaDNCdb1TBa2Oklcx8xuyrWF1jI46guZQW4bBNyMG2nTCEu7epO4GSXUjEwETCXBgo-kHsaVlO3N08_J1JNEZ3OHpdD8epjd1HTrtPNI6vYYI2o5DGpqtZJ8V0Eb-xPSZfxs8CkR2jn43sr5um0zfjDf0kWVrFmlNP3207ITbXN9tgG9Rqg9B8fTsGGUjJqOrQHRwnNy6a4FYu6P1NvYm6nEaFPK0ZQA2KpA4d4RndqbV4bH12qFRJhmGmD9Elahx8YYzy7KB3yNXzfAsKvoRr2VRqwIu_KkQeNXYaJOLEw5KjpfNWs0ZHE5ZwGzc5qfw'
    )

    console.log(chain)
  } catch (error) {
    console.error(error)
  }
}
