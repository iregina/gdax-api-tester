/**
 * Trailing Volume
 *
 * Docs:
 *   https://docs.gdax.com/#user-account
 */

var async = require('async');
var authedClient = require('../../../client').authedClient;


authedClient.getTrailingVolume(function(err, response, data) {
  if (err) {
    console.log(err);
    return;
  }

  if (data.length) {
    console.log(data);
  } else {
    console.log('Trailing volume unavailable because no trades in past 30 days');
  }
});

