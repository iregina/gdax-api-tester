var CoinbaseExchange = require('coinbase-exchange');

/**
 * Enter your Coinbase Exchange Sandbox API key, API secret, and the passphrase
 * you specified when creating the API key pair.
 */

var key = 'your-coinbase-exchange-sandbox-api-key';
var b64secret = 'your-coinbase-exchange-sandbox-api-secret';
var passphrase = '123456789abcdef';


// For the sandbox, use this
var apiURL = 'https://api-public.sandbox.exchange.coinbase.com';
var authedClient = new CoinbaseExchange.AuthenticatedClient(key, b64secret, passphrase, apiURL);

// For the live API, use this. Example only. Please use the sandbox while testing.
// var authedClient = new CoinbaseExchange.AuthenticatedClient(key, b64secret, passphrase);


exports.authedClient = authedClient;
exports.publicClient = new CoinbaseExchange.PublicClient();