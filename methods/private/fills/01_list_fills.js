/**
 * List fills
 *
 * Docs:
 *   https://docs.exchange.coinbase.com/#list-fills
 */

var authedClient  = require('../../../client.js').authedClient;


authedClient.getFills(function(err, response, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});