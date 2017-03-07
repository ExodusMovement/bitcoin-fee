const test = require('tape')
global.fetch = require('node-fetch')
const BTCfee = require('..')

test('SERVICES works', t => {
  const services = BTCfee.SERVICES
  t.ok(services.length > 0, 'SERVICES is an array')
  services.forEach(service => t.is(typeof service, 'string', 'item is a string'))
  t.end()
})

test('fetchFee() works', t => {
  t.plan(BTCfee.SERVICES.length)
  Promise.all(BTCfee.SERVICES.map(service => BTCfee.fetchFee(service)))
  .then(arr => {
    arr.forEach((item, i) => t.is(typeof item, 'number', `result for ${BTCfee.SERVICES[i]} is a number (${item})`))
    t.end()
  })
  .catch(t.end)
})
