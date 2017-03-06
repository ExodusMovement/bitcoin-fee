exports.fetchFee = function () {
  return fetch('https://bitcoinfees.21.co/api/v1/fees/recommended')
  .then(res => res.json())
  .then(json => json.fastestFee)
}
