/**
 * Get product order book
 *
 * Docs:
 *   https://docs.exchange.coinbase.com/#get-product-order-book
 */

var publicClient = require('../../../client').publicClient;


publicClient.getProductOrderBook(function(err, response) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(response.body);
});


// Alternatively, you get the order book at a specific level of detail (1,2,3)
// publicClient.getProductOrderBook({level: 2}, function(err, response) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//
//   console.log(response.body);
// });