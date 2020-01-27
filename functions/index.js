const functions = require('firebase-functions');
const beaches = require('./beaches.json');

exports.getBeaches = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.json(200, beaches);
});