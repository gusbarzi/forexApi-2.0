const Binance = require('node-binance-api');
const binance = new Binance().options({
    APIKEY: 'ZNOzVgJ2EAc0BsOmzbVfAbATQsQBirw6MLUullTB2iKDhkgC1FeCBp8zRkE2lIFD',
    APISECRET: 'XfECWx96dkEs8vc56yGxRHrIVZhMqmmTvX0REThKOSOmIQQKE1ugFP43dxYyTxOj'
});

module.exports = binance;