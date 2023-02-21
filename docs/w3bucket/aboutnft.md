---
id: aboutnft
title: ''
hide_table_of_contents: false
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## What is W3Bucket?  

Crust Cloud is a Web3 Cloud Storage solution where you can store your files in IPFS W3Bucket and you are granted with: 1) decentralized storage. 2) guaranteed storage by decentralized protocols. 3) all the files stored in W3Bucket are alive on IPFS, or 100% IPFS-compatible. 

Crust Cloud define what cloud storage should look like in Web3 - **Every storage bucket is a NFT**.

In Crust Cloud, we use `W3Bucket`, `W3Buket NFT`, or `W3BKT` interchangeably, as W3Buckets are all tokenized as mintable and transferrable NFTs.  

## Simple Facts to Know about W3Buckets  

- It’s a NFT -- Each W3Bucket is an [ERC721](https://eips.ethereum.org/EIPS/eip-721) NFT token (with symbol name *W3BKT*) that can be minted, transferred, and traded on NFT marketplaces like [OpenSea](https://opensea.io).
- All user rights and benefits belong to the current NFT holder. Everything goes with the NFT.
- The NFT can be freely transferred and traded. Everyone with an ethereum account can mint new buckets via crypto payments to the contract.
- Each NFT is endowed with two attributes, the bucket type and the bucket size. Currently we have only one bucket type, which is the `Permanent W3Bucket`. All the following features are applicable to this type.
- Each W3Bucket has a unique `IPNS name`, born with the NFT and stored in the metadata, permanently and immutably points to the file history (the file list). The file history is an IPFS file that can be consistently updated with the use of W3Bucket.
- Each W3Bucket guarantees files stored inside with permanent (or very long-term) persistence on IPFS as long as the upper limit of the size has not been reached. 
- W3Bucket can be accessed (user storing new files) via WebUI or API calling with W3Auth: the user who holds the NFT is asked to sign a typed/structured message (referring `ERC-712`) to get accessed to uploading new files into the bucket. 
- All metadata, including the `.json` file and NFT image, are stored decentralized on IPFS.
- All files, including metadata and file history/file list, can be retrieved from any IPFS gateway or IPFS node.  

## Q & A about W3Bucket  

**How many replicas can I get from W3Bucket?**  
Every file stored in W3Bucket will be guaranteed with at least 3 IPFS replicas, while normally you can expect much higher replica amount varying between 10-100 according to file size, network capacity and other factors.

**What’s inside a W3Bucket NFT?**  
Every W3Bucket NFT will be given several immutable attributes in the metadata when minted, including: the bucket type and size information, a unique bucket identifier, a unique `IPNS name` that points to the bucket history (which also serves as the file list), a profile image that indicates all the above information. The metadata is permanently immutable and be store decentralized on IPFS.

**What happens if I transfer my W3Bucket to someone else?**  
All user rights and benefits belong to the current NFT holder. Everything goes with the NFT. Crust Cloud guarantees this by the innovative NFT-gated W3Auth scheme. So if you transfer the W3Bucket to someone else, you can no longer use this W3Bucket.

**How can I access my W3Bucket?**  
W3Bucket can be access via WebUI or API calling with NFT-gated W3Auth: the user who holds the NFT will be asked to sign a typed/structured message (compatible to `ERC-712`) to get accessed to uploading new files into the bucket.

**How do I pay for a W3Bucket?**  
You pay to the contract when you mint your W3Bucket NFT. You only need to pay once. The price of W3Bucket may be dynamically adjusted according to the cost and demand/supply condition of the underlying [Crust Network](https://crust.network).



