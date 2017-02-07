/**
 * Get Product Order Book
 *
 * https://docs.gdax.com/#get-product-order-book
 */

var publicClient = require('../../../client').publicClient;


publicClient.getProductOrderBook(function(err, response, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
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