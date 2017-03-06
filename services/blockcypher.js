exports.fetchFee = function () {
  return fetch('https://api.blockcypher.com/v1/btc/main')
  .then(res => res.json())
  .then(json => json.high_fee_per_kb / 1000)
}
