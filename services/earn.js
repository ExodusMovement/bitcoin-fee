exports.fetchFee = function () {
  return fetch('https://bitcoinfees.earn.com/api/v1/fees/recommended')
  .then(res => res.json())
  .then(json => json.fastestFee)
}
