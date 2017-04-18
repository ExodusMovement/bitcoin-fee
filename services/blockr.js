exports.fetchFee = function () {
  return fetch('http://btc.blockr.io/api/v1/block/info/last')
  .then(res => res.json())
  .then(json => (json.data.fee * 100000000) / json.data.size)
}
