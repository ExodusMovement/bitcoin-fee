exports.fetchFee = function () {
  return fetch('https://api.breadwallet.com/fee-per-kb')
  .then(res => res.json())
  .then(json => json.fee_per_kb / 1000)
}
