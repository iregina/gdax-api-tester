/**
 * List accounts
 *
 * Docs:
 *   https://docs.exchange.coinbase.com/#list-accounts
 */

var authedClient = require('../../../client').authedClient;


authedClient.getAccounts(function(err, response, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});