const Eos = require('../../node_modules/eosjs');
const Crypto = require('./crypto');
const Data = require('./data');
const Chain = require('./chain');
const Poll = require('./poll');

const populate = require('./populate').populate;
populate();

// Crypto usage
// let pair = Crypto.newKeyPair(8 * 100);
// let txt = "LOL";
// let enc = Crypto.encrypt(pair['public'], txt);
// let dec = Crypto.decrypt(pair['private'], enc);
