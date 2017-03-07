exports.fetchFee = function () {
  return fetch('https://insight.bitpay.com/api/utils/estimatefee')
  .then(res => res.json())
  .then(json => json[2] * 100000)
}
