import { connect, consume, getConsumer } from './app'

const consumer = getConsumer()
connect(consumer).then(() => {
  consume(consumer)
})
