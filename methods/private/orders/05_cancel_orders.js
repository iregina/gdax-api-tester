/**
 * Cancel all orders
 *
 * Docs:
 *   https://docs.exchange.coinbase.com/#cancel-all
 */

var authedClient = require('../../../client').authedClient;


authedClient.cancelOrders(function(err, response, result) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(result);
});
