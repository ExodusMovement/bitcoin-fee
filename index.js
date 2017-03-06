exports.SERVICES = ['21.co', 'blockcypher']

const endpoints = {}
exports.SERVICES.forEach(service => {
  endpoints[service] = require('./services/' + service)
})

exports.fetchFee = function (service) {
  return endpoints[service].fetchFee()
}
