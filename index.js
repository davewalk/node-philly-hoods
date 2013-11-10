var request = require('request');

module.exports = {

  findByCoords: function (lat, lng, callback) {
    request('http://api.phillyhoods.net/v1/locations/' + lat + ',' + lng, function (err, res, body) {
      if (err) return callback(err);

      return callback(null, JSON.parse(body));
    });
  },

  findByName: function (name, callback) {
    request('http://api.phillyhoods.net/v1/neighborhoods/' + name, function (err, res, body) {

      if (err) return callback(err);

      return callback(null, JSON.parse(body));
    });
  }
};