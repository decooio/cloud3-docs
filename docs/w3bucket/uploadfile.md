---
id: uploadfile
title: ''
hide_table_of_contents: false
---

## Introduction

Once minted, you could directly upload files to a W3Bucket via Http API.

Generally, there are 3 steps to take:

1. Generate a [W3Auth Token](../w3auth), with information like W3BKT NFT contract address and target tokenId encoded.
2. Upload file to a selected gateway via the standand [IPFS API](https://docs.ipfs.tech/reference/kubo/rpc/#api-v0-add), to get the CID. The [W3Auth Token](../w3auth) generated above will be used as Http Bearer Token for authentication.
3. Pin the CID with the standard [IPFS Pinning Service API](https://ipfs.github.io/pinning-services-api-spec/#operation/addPin). Similarly, the [W3Auth Token](../w3auth) generated above will be used as Http Bearer Token for authentication.

## Generate W3Auth Token 

[W3Auth Token](../w3auth) could be generated either from Dapp with [MetaMask](https://docs.metamask.io/guide/signing-data.html#signing-data), or from some backend scripts using SDKs like [web3.js](https://web3js.readthedocs.io/) or [ethers.js](https://docs.ethers.io/) with some hot wallet secret.

## Upload File to IPFS Gateway

```sh
$ curl --location --request POST 'https://<GATEWAY_HOST>/api/v0/add?pin=true' \
--header 'Authorization: Bearer <W3AUTH_TOKEN>' \
--form 'path=@"<FILE_PATH>"'
```

## Pin with CID

```sh
$ curl --location --request POST 'https://beta-pin.cloud3.cc/psa/pins' \
--header 'Authorization: Bearer <W3AUTH_TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "cid": "<FILE_CID>",
    "name": "<FILE_NAME>"
}'
```



