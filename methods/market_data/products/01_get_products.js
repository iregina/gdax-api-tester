/**
 * Get products
 *
 * Docs:
 *   https://docs.exchange.coinbase.com/#get-products
 */

var publicClient = require('../../../client').publicClient;


publicClient.getProducts(function(err, response, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});