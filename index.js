const endpoints = {
  earn: require('./services/earn'),
  blockcypher: require('./services/blockcypher'),
  bitpay: require('./services/bitpay'),
  'btc.com': require('./services/btc.com')
}

exports.SERVICES = Object.keys(endpoints)

exports.fetchFee = function (service) {
  return endpoints[service].fetchFee()
}
