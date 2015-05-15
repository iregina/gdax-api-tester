/**
 * Get currencies
 *
 * Docs:
 *   https://docs.exchange.coinbase.com/#get-currencies
 */

var publicClient = require('../../../client').publicClient;


publicClient.getCurrencies(function(err, response) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(response.body);
});