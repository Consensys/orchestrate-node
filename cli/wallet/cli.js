import Orchestrate from '../../src'
const commander = require('commander');
const program = new commander.Command();

export const handleGenerateWallet = async options => {
    if (!options.endpoint) {
        // eslint-disable-next-line no-console
        console.log('No kafka endpoint provided');
        return;
    }

    const orch = new Orchestrate()
    const broker = new orch.broker(options.endpoint);
    const walletGenerator = await broker.walletGenerator()
    
    let err = await walletGenerator.generate(options.chain, options.value)
        .then(res => {
            // eslint-disable-next-line no-console
            console.log("Account created:", res)
        })
        .catch(err => err);
    
    if (err) {
        // eslint-disable-next-line no-console
        console.log(err.details);
        process.exit(1)
    }

    process.exit(0)
}

program
    .command('generate-wallet')
    .description('Generate a wallet')
    .option('-c, --chain <str>', 'Chain on which to credit new wallet')
    .option('-v, --value <str>', 'Value to credit to new wallet')
    .option('-e, --endpoint <host:port>', 'Kafka URL host:port')
    .action(handleGenerateWallet);

export const cli = args => {
    program.parse(args)
}
    