---
id: w3auth
title: ''
hide_table_of_contents: false
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction

**W3Auth Tokens** are Http Bearer Tokens used to authentication against Crust Cloud Http APIs.

The format of Crust Cloud Http API headers is:

```
Authorization: Bearer <W3Auth Token>
```

**W3Auth Tokens** are generated in following approach: 

```
base64(JSON.stringify({
  data: <Typed Data to Sign>,
  signature: <Typed Data Signature>
}))
```

The essential part of a W3Auth Token is a typed data and its ethereum signature in compliance with [EIP712](https://eips.ethereum.org/EIPS/eip-712).

## Typed Data to Sign

Below is a sample *typed data* to sign:

```json
{
  domain: {
    chainId: '1',
    name: 'cloud3.cc',
    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
    version: '1',
  },
  message: {
    description: 'Sign for W3 Bucket Access Authentication',
    signingAddress: '0x2E189548D45E24A84CDD8270B5A38071B4dA325D',
    tokenAddress: '0xB0B0b0b0b0b0B000000000000000000000000000',
    tokenId: '1000001',
    effectiveTimestamp: 1665386666,
    expirationTimestamp: 0
  },
  primaryType: 'W3Bucket',
  types: {
    W3Bucket: [
      { name: 'description', type: 'string' },
      { name: 'signingAddress', type: 'address' },
      { name: 'tokenAddress', type: 'address' },
      { name: 'tokenId', type: 'string' },
      { name: 'effectiveTimestamp', type: 'uint256' },
      { name: 'expirationTimestamp', type: 'uint256' },
    ],
  },
};
```

where

- domain
  - `chainId`: Chaid ID of Ethereum-compatible blockchain, which are defined by [EIP-155](https://eips.ethereum.org/EIPS/eip-155)
  - `name`:  Name of the dapp where the signature is generated
  - `verifyingContract`: Address of the smart contract that are intended to verify the signature
- message
  - `signingAddress`: Account address to sign the typed data
  - `tokenAddress`: Contract address of the W3Bucket NFT
  - `tokenId`: W3Bucket token ID
  - `effectiveTimestamp`: Unix timestamp (seconds since 1970-01-01 00:00:00 UTC) when the signature will be valid from
  - `expirationTimestamp`: Unix timestamp  (seconds since 1970-01-01 00:00:00 UTC) when the signature will expire. `0` for never expire

Crust Cloud API services will perform a series validations against a W3Auth Token:

- Verify `signature` is signed by `data.message.signingAddress`
- Verify `data.message.signingAddress` is the owner of NFT token specified by `data.message.tokenAddress` and `data.message.tokenId`
- Verify `signature` is still valid via `data.message.effectiveTimestamp` and `data.message.expirationTimestamp`
- Verify `data.message.chainId` match the chain on which the NFT contract is deployed

## MetaMask Signing

[EIP712](https://eips.ethereum.org/EIPS/eip-712) *typed data* could be signed using [MetaMask](https://docs.metamask.io/guide/signing-data.html#signing-data).

Below is a sample signing dialog MetaMask shows when signing a *typed data*:

<img src={useBaseUrl('/img/w3bucket-signing.jpeg')} /><br/>

## Sample Code

```javascript
const typedData = {
  domain: {
    chainId: '1',
    name: 'cloud3.cc',
    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
    version: '1',
  },
  message: {
    description: 'Sign for W3 Bucket Access Authentication',
    signingAddress: '0x2E189548D45E24A84CDD8270B5A38071B4dA325D',
    tokenAddress: '0xB0B0b0b0b0b0B000000000000000000000000000',
    tokenId: '1000001',
    effectiveTimestamp: 1665386666,
    expirationTimestamp: 0
  },
  primaryType: 'W3Bucket',
  types: {
    W3Bucket: [
      { name: 'description', type: 'string' },
      { name: 'signingAddress', type: 'address' },
      { name: 'tokenAddress', type: 'address' },
      { name: 'tokenId', type: 'string' },
      { name: 'effectiveTimestamp', type: 'uint256' },
      { name: 'expirationTimestamp', type: 'uint256' },
    ],
  },
};

// Sign


const signature = await provider.getSigner(account)._signTypedData(typedData.domain, typedData.types, typedData.message);

/**
 * Sign use @metamask/eth-sig-util
 * 
 * import { signTypedData, SignTypedDataVersion } from "@metamask/eth-sig-util"
 * 
 * const dataForMetaMask = {
 *  ...data,
 *  types: {
 *    ...data.types,
 *    EIP712Domain: [
 *      { name: "name", type: "string" },
 *      { name: "version", type: "string" },
 *      { name: "chainId", type: "uint256" },
 *      { name: "verifyingContract", type: "address" }
 *    ]
 *  }
 * }
 * const signature = signTypedData({ privateKey, data: dataForMetaMask, version: SignTypedDataVersion.V4})
 */

console.log('signature', signature);

// Verify Signature
const hash = ethers.utils._TypedDataEncoder.hash(typedData.domain, typedData.types, typedData.message);
console.log('hash', hash);
const recoverAddress = ethers.utils.recoverAddress(hash, signature);
console.log('recoverAddress', recoverAddress);
console.log(`signature valid: ${recoverAddress == account}`);

// Generate Bearer Token
const bearerTokenData = {
  data: typedData,
  signature: signature
};
const bearerToken = window.btoa(JSON.stringify(bearerTokenData));
console.log('Bearer token', bearerToken);
console.log('Bearer token decoded', JSON.parse(window.atob(bearerToken)));
```


## Reference

- https://eips.ethereum.org/EIPS/eip-712
- https://docs.metamask.io/guide/signing-data.html#signing-data
- https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26
