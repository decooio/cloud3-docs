---
id: nftmetadata
title: ''
hide_table_of_contents: false
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Background  

This is a detailed explanation on the `metadata` of the W3Bucket NFT.  

This topic is worth mentioning because the metadata of W3Bucket NFTs contain essential information about the buckets, including the IPNS name of the bucket, File History, Bucket Type & Size (Capacity), and NFT image. All of the infotmation in the metadata is **immutable**.

## W3BKT NFT Metadata

Below is a sample of *W3BKT NFT* metadata:

```json
{
  "name": "W3BKT (100GB, lnv0v8, O)",
  "description": "This is a Web3 Bucket NFT (W3Bucket) that guarantees decentralized, immutable and timeless file storage by Cloud3.\n\n**W3Bucket Type**: Original\n\n**W3Bucket Size**: 100GB\n\n**W3Bucket IPNS**: k51qzi5uqu5dlvj2baxnqndepeb86cbk3ng7n3i46uzyxzyqj2xjonzllnv0v8",
  "image": "ipfs://QmVvigK7jfLyHcDjnNYr2mAReFW9FCFWf41UNB9tbK8rWw",
  "external_url": "https://ipfs-scan.io?cid=QmVvigK7jfLyHcDjnNYr2mAReFW9FCFWf41UNB9tbK8rWw",
  "file_history": "ipns://k51qzi5uqu5dktricedv5isy1c69oc6i7q15p7lzhkgyyarkdgz350emmvwnwa",
  "attributes": [
    {
      "trait_type": "dStorage Platform", 
      "value": "Crust"
    },
    {
      "trait_type": "Edition", 
      "value": "1"
    },
    {
      "trait_type": "Capacity (GB)", 
      "value": "1024"
    }
  ],
  "dStorage": {
    "platform": "Crust",
    "description": "Crust Network, the Incentive Layer of IPFS",
    "persistence_mechanism": "contract-based",
    "challenge_mechanism": "mpow",
    "consensus": "gpos",
    "dstorage_note": "0x466ab180124de1718d30cd2e018e7fe013a07c4860674110ccd13e97eb31ae16"
  }
}
```

where:

- `image`: Asset image of the NFT, which are stored on IPFS and incentived by Crust Network
- `external_url`: External url to view decentralized storage state of the image file on IPFS
- `file_history`: An [IPNS](https://docs.ipfs.tech/concepts/ipns) URL which resolves to the CID of the bucket's *File History* file
- `attributes`: An array of attribute key/value pairs of the bucket, like its capacity, edition id, etc
- `dStorage`: [EIP-5625: NFT Metadata JSON Schema dStorage Extension](https://eips.ethereum.org/EIPS/eip-5625) implementation, which provides information about how the NFT image data are stored.
  - `platform`: All *W3BKT NFT* images are stored on Crust Platform
  - `dstorage_note`: Crust place_order transaction id of the corresponding NFT image



