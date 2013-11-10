var test = require('tap').test,
teddybear = require('teddybear'),
  hoods = require('../');

test('find by name', function (t) {
  t.plan(1);

  hoods.findByName('bella', function (err, res) {
    t.equal(res.results.features[0].properties.name, 'Bella Vista');
  });
});

test('find by name multiple results', function (t) {
  t.plan(1);

  hoods.findByName('germantown', function (err, res) {
    t.equal(res.results.features.length, 6);
  });
});

test('find by coords', function (t) {
  t.plan(1);

  hoods.findByCoords(39.951198, -75.176868, function (err, res) {
    t.equal(res.results.features[0].properties.name, 'Rittenhouse');
  });
});

teddybear(1000);

test('find by coords outside of city', function (t) {
  t.plan(1);

  hoods.findByCoords(41.878114, -87.629798, function (err, res) {
    t.equal(res.results.error.message, 'Coordinates requested aren\'t within Philadelphia');
  });
});