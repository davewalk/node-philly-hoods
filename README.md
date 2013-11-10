# philly hoods (Node wrapper)

A wrapper for the [phillyhoods.net](http://phillyhoods.net) API.

[![build status](https://secure.travis-ci.org/davewalk/node-philly-hoods.png)](http://travis-ci.org/davewalk/node-philly-hoods)

### Installation

`npm install philly-hoods`

### Usage
```javascript
var hoods = require('philly-hoods');  

hoods.findByCoords(39.972176, -75.158587, function (err, res) {
  if (err) console.log(err);

  return console.log(res);
});

hoods.findByName('bella', function (err, res) {
  if (err) console.log(err);

  return console.log(res);
});
```