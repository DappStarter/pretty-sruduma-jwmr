require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name rifle six prosper install help equal gift'; 
let testAccounts = [
"0xdf6ca09fb29e78e546eb7c095176086e8bb1eecc990462bb50849e61597f9a71",
"0x1c4e85250587a3be5bb2ca072fb6578059873dd87fc5c924ca983b3fe47af417",
"0xf2df99a2d3a6c9016152cd4a11e5412114c189220b7e8b6f7c0de4cfd15db858",
"0x25e6ea94a52f307481b239853bc1d8ccfea948f591a60f68638af37ac1eb628b",
"0x140540365d4ac1d8c7daaf1c74bca4f8c8af6f855708d195b76bf04fd3335970",
"0x7754007ebe608e4078d1a7898f708f16de476fce086eb56590da1170c04bb278",
"0xb3f3f4461f83d004fe56f504dcdc4d83bb1df25cc77cb846156ce05f36c17f55",
"0x9a7903dedf918290d3f3dab6590277193e61aa444ec48206b3a82dc67b239a45",
"0x273a70d37a94c5c0652c4f511216f4de02c51caeab2f3ed7a7ab6c4456a018d9",
"0xe3e89d39144289aed70e912d576efd921a7a12fcd73d5237de95e8fe09f96b8b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

