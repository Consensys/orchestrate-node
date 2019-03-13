import FakeClient from '../tests-utils/mockClient';
import { CoreStackConsummer, CoreStackConsummerGroup } from '../consumer'

test('init CoreStackConsummer', async () => {
    
    const client = new FakeClient();
    const CSConsumer = new CoreStackConsummer(client, 'topic', 0)
    console.log(CSConsumer)

});

test('init CoreStackConsummerGroup', async () => {
    
    const client = new FakeClient();
    const CSConsumerGroup = new CoreStackConsummerGroup(client, 'topic', 0)
    console.log(CSConsumerGroup)

});
