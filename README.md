# bitcoin-fee

## Install

    npm install bitcoin-fee


## Usage

```js
const BTCfee = require('bitcoin-fee')
```


### `BTCfee.fetchFee(service)`

`service` is a String. It must be the name of one of the services in `BTCfee.SERVICES`.

Returns a Promise that resolves to the recommended satoshi/byte as a number.

Example:

```js
BTCfee.fetchFee('21.co')
.then(fee => console.log(fee))
// -> 240
```


### `BTCfee.SERVICES`

This is an array of available services to query.


## License

MIT
