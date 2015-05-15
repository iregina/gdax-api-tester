/**
 * Get 24 hour stats
 *
 * Docs:
 *   https://docs.exchange.coinbase.com/#get-24hr-stats
 */

var publicClient = require('../../../client').publicClient;


publicClient.getProduct24HrStats(function(err, response) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(response.body);
});