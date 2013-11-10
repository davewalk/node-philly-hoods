var hoods = require('./index');

hoods.findByCoords(39.972176, -75.158587, function (err, res) {
  if (err) console.log(err);

  return console.log(res.results.features[0].properties.name);
});

hoods.findByName('bella', function (err, res) {
  if (err) console.log(err);

  return console.log(res);
});