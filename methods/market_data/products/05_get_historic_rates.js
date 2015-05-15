/**
 * Get product historic rates
 *
 * Docs:
 *   https://docs.exchange.coinbase.com/#get-historic-rates
 */

var publicClient = require('../../../client').publicClient;


publicClient.getProductHistoricRates(function(err, response) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(response.body);
});


// Alternatively, you can include extra parameters if needed
// publicClient.getProductHistoricRates({granularity: 3000}, function(err, response) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//
//   console.log(response.body);
// });