exports.SERVICES = [
  '21.co',
  'blockcypher',
  'bitpay',
  'btc.com'
]

const endpoints = {}
exports.SERVICES.forEach(service => {
  endpoints[service] = require('./services/' + service)
})

exports.fetchFee = function (service) {
  return endpoints[service].fetchFee()
}
