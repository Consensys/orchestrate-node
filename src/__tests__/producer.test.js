import FakeClient from '../tests-utils/mockClient';
import { CoreStackProducer } from '../producer'

test('Init CoreStackProducer', async () => {
    const client = new FakeClient();
    const CSProducer = new CoreStackProducer(client, 'topic', 0)
    console.log(CSProducer)
});