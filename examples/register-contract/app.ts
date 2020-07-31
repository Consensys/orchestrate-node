// tslint:disable: no-console

import { ContractRegistry } from '../../src'
import { SimpleToken } from '../artifacts/SimpleToken'

export const start = async () => {
  try {
    const contractRegistry = new ContractRegistry('localhost:8020')

    const authToken =
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiaHR0cHM6Ly9hdXRoMC5jb20vYXBpL3YyLyJdLCJleHAiOjE1OTYxMjQwNDcsImh0dHA6Ly9vcmNoZXN0cmF0ZS5pbmZvIjp7InRlbmFudF9pZCI6ImRhcmlvIn0sImlhdCI6MTU5NjEyMDQ0NywiaXNzIjoiT3JjaGVzdHJhdGUiLCJqdGkiOiJhYWI5Yjc0OC02MmQwLTQ1ZDgtODNjNC04OWMzZDczOTM0NzUiLCJuYmYiOjE1OTYxMjA0NDcsInNjcCI6WyJyZWFkOnVzZXJzIiwidXBkYXRlOnVzZXJzIiwiY3JlYXRlOnVzZXJzIl0sInN1YiI6ImUyZS10ZXN0In0.eftpqgmy5445E6vfpvqa0lxMfUK_-5GedMDoM0V4PsdmeVYo1QdtK9WYOHt-xCYmCdKWWKdecTHYk-kRHWBu-d4D45c3Q9xaS9D56SCrER6hGDoOKB_QfvHOxj5ut0qUlLryQAhlQ-wXwXbjVOozFym1qn6oGR9zDYnr9q2hUTpnYqJ2Wh7nxHZRJ-nbBSbUUEs2PPGejNpui4-QGH-2wKH9BQICUNzeNbCYRGjfC6Ix_HlVoBpii3rkaSIHlpOPgrpno98aOMFyzBxhV1e_J4j4JOsHaVzsBLXf_uZWC4MUFvjpwmo-Gvxu-5sfgliMHydYzNlQIIxqoGEIwR03sQ'

    await contractRegistry.register({
      name: 'SimpleToken',
      abi: SimpleToken.abi,
      bytecode: SimpleToken.bytecode,
      deployedBytecode: SimpleToken.deployedBytecode,
      authToken
    })

    console.log(await contractRegistry.getCatalog())
  } catch (error) {
    console.error(error)
  }
}
