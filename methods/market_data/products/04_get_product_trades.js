/**
 * Get product trades
 *
 * Docs:
 *   https://docs.exchange.coinbase.com/#get-trades
 */

var publicClient = require('../../../client').publicClient;


// coinbase-exchange's Read Me says this should work. Currently does not. Issue created.
// publicClient.getProductTrades(function(err, response) {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(response.body);
// });


// To make paginated requests, include page parameters
publicClient.getProductTrades({after: 1000}, function(err, response, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});