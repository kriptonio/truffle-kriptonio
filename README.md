# truffle-kriptonio

[Kriptonio](https://kriptonio.com/) plugin for [Truffle](https://trufflesuite.com/)

This plugin allows you to upload compiled hardhat smart contract artifacts to Kriptonio. On kriptonio side new smart contract will be created with attached artifacts, which you can afterward deploy and manage via kriptonio.

## Installation

```bash
npm install @kriptonio/truffle-kriptonio
```

## Setup

Add `@kriptonio/truffle-kriptonio` to plugins in your `truffle-config.js` file.

```js
plugins: [
  '@kriptonio/truffle-kriptonio',
],
```

Next, add truffle-kriptonio config to your `truffle-config.js` file.

### Configuration Options

| option                 | Description                                                                                                                                                                 |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accessToken (required) | Kriptonio organization level access token. You can find it in your [settings page](https://app.kriptonio.com/settings/access-tokens).                                       |
| blockchain (required)  | Blockchain where your smart contract will be deployed. Currently supported values for this fields are `polygon`, `ethereum` and `bsc`.                                      |
| contract (required)    | Smart contract name which you want to upload to kriptonio                                                                                                                   |
| wallet (required)      | Address of kriptonio wallet to use with this smart contract. This wallet will allow you to interact with your smart contract, and will be used for paying transaction fees. |
| name (optional)        | Name of kriptonio smart contract project to be created. Defaults to contract name.                                                                                          |

Example configuration:

```js
kriptonio: {
  name: 'My Token on Kriptonio',
  contract: 'MyERC20',
  accessToken: '<kriptonio-access-token>',
  wallet: '<wallet-address>',
  blockchain: 'polygon',
},
```

## Run

Before running truffle-kriptonio plugin, run compile.

```bash
truffle compile
```

Now you are ready to upload your smart contract to kriptonio.

```bash
truffle run kriptonio-upload
```
