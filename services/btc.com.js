exports.fetchFee = function () {
  return fetch('https://chain.api.btc.com/v3/block/latest/')
  .then(res => res.json())
  .then(json => json.data.reward_fees / json.data.size)
}
