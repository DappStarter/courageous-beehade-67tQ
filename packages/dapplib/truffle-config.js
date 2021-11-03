require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom knife frame security iron response still grant give clinic foam search'; 
let testAccounts = [
"0x37c95e7558afbe0907d6cdcaecb88a290fbe568d6f3457dccd2964a85145004f",
"0x60c394fdd7310828d2da94edcc367e041c62a662485eb81cfc001fc84feb2c97",
"0x211f0aa4feed199d9bdd0e0b56b5eed828b475f07972047468b7b67639a82aeb",
"0x88c05cb0753fb983112d0aab625a61c545b7f46f2bd635f57cec0a27c9831f05",
"0xcbb11601a51509407f3d8bd44f2fb2a1561d26296567568778a4808a0cbe9ad7",
"0x884dcc80142a95568aced047d118ff21178caec1ada6fd32415cc2435b8a4630",
"0x86b587c373d6f01ed504c41f83b4e877f2cb706115fe306a459a46000e0f6ca9",
"0xb93de4fb3811cef187b10cfe571cc3190c0152083c2beb16807dc2b53e11eef4",
"0x25830f3202e28334eeb647e1bf04006e5b0793ad916f303f49482929f9186323",
"0x74639b0fbcd3b363bc63df38d63fd27f4c3b631ecb786e834836f4c6236e2a97"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

