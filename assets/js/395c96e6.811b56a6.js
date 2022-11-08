"use strict";(self.webpackChunkcloud3_docs=self.webpackChunkcloud3_docs||[]).push([[984],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,h=s["".concat(u,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4254:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));n(4996);const o={id:"uploadfile",title:"",hide_table_of_contents:!1},i=void 0,l={unversionedId:"w3bucket/uploadfile",id:"w3bucket/uploadfile",title:"",description:"",source:"@site/docs/w3bucket/uploadfile.md",sourceDirName:"w3bucket",slug:"/w3bucket/uploadfile",permalink:"/w3bucket/uploadfile",draft:!1,tags:[],version:"current",frontMatter:{id:"uploadfile",title:"",hide_table_of_contents:!1},sidebar:"mySidebar",previous:{title:"",permalink:"/w3bucket/nftmetadata"},next:{title:"",permalink:"/w3auth"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Generate W3Auth Token",id:"generate-w3auth-token",level:2},{value:"Upload File to IPFS Gateway",id:"upload-file-to-ipfs-gateway",level:2},{value:"Pin with CID",id:"pin-with-cid",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Once minted, you could directly upload files to a W3Bucket via Http API."),(0,a.kt)("p",null,"Generally, there are 3 steps to take:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Generate a ",(0,a.kt)("a",{parentName:"li",href:"../w3auth"},"W3Auth Token"),", with information like W3BKT NFT contract address and target tokenId encoded."),(0,a.kt)("li",{parentName:"ol"},"Upload file to a selected gateway via the standand ",(0,a.kt)("a",{parentName:"li",href:"https://docs.ipfs.tech/reference/kubo/rpc/#api-v0-add"},"IPFS API"),", to get the CID. The ",(0,a.kt)("a",{parentName:"li",href:"../w3auth"},"W3Auth Token")," generated above will be used as Http Bearer Token for authentication."),(0,a.kt)("li",{parentName:"ol"},"Pin the CID with the standard ",(0,a.kt)("a",{parentName:"li",href:"https://ipfs.github.io/pinning-services-api-spec/#operation/addPin"},"IPFS Pinning Service API"),". Similarly, the ",(0,a.kt)("a",{parentName:"li",href:"../w3auth"},"W3Auth Token")," generated above will be used as Http Bearer Token for authentication.")),(0,a.kt)("h2",{id:"generate-w3auth-token"},"Generate W3Auth Token"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../w3auth"},"W3Auth Token")," could be generated either from Dapp with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.metamask.io/guide/signing-data.html#signing-data"},"MetaMask"),", or from some backend scripts using SDKs like ",(0,a.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/"},"web3.js")," or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ethers.io/"},"ethers.js")," with some hot wallet secret."),(0,a.kt)("h2",{id:"upload-file-to-ipfs-gateway"},"Upload File to IPFS Gateway"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ curl --location --request POST 'https://<GATEWAY_HOST>/api/v0/add?pin=true' \\\n--header 'Authorization: Bearer <W3AUTH_TOKEN>' \\\n--form 'path=@\"<FILE_PATH>\"'\n")),(0,a.kt)("h2",{id:"pin-with-cid"},"Pin with CID"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ curl --location --request POST 'https://beta-pin.cloud3.cc/psa/pins' \\\n--header 'Authorization: Bearer <W3AUTH_TOKEN>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"cid\": \"<FILE_CID>\",\n    \"name\": \"<FILE_NAME>\"\n}'\n")))}d.isMDXComponent=!0}}]);