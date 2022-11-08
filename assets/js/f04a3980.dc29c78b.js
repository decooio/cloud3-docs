"use strict";(self.webpackChunkcloud3_docs=self.webpackChunkcloud3_docs||[]).push([[465],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4872:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var r=n(3117),i=(n(7294),n(3905));n(4996);const o={id:"toolkits",title:"",hide_table_of_contents:!1},a=void 0,l={unversionedId:"toolkits",id:"toolkits",title:"",description:"",source:"@site/docs/toolkits.md",sourceDirName:".",slug:"/toolkits",permalink:"/toolkits",draft:!1,tags:[],version:"current",frontMatter:{id:"toolkits",title:"",hide_table_of_contents:!1},sidebar:"mySidebar",previous:{title:"",permalink:"/w3auth"}},s={},p=[{value:"Introduction to Cloud3 Toolkits",id:"introduction-to-cloud3-toolkits",level:2},{value:"IPFS Scan",id:"ipfs-scan",level:2},{value:"How to Use IPFS Scan",id:"how-to-use-ipfs-scan",level:3},{value:"Explaining Search Results",id:"explaining-search-results",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction-to-cloud3-toolkits"},"Introduction to Cloud3 Toolkits"),(0,i.kt)("p",null,"Cloud3 provides toolkits to better serve developers and users based on IPFS and Crust Network.  "),(0,i.kt)("p",null,"Toolkits now includes:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ipfs-scan.io"},"IPFS Scan"),"  "),(0,i.kt)("li",{parentName:"ul"},"W3Editor (Coming Soon)  ")),(0,i.kt)("h2",{id:"ipfs-scan"},"IPFS Scan"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ipfs-scan.io"},"IPFS Scan")," is a free, handy and open IPFS explorer application that help you quickly scan IPFS replicas with any given CID."),(0,i.kt)("h3",{id:"how-to-use-ipfs-scan"},"How to Use IPFS Scan"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Enter a file CID and search  ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A Content Identifier ",(0,i.kt)("inlineCode",{parentName:"li"},"CID")," is a self-describing content-addressed label used to point to the data stored on IPFS. It is the core identifier used for IPFS."),(0,i.kt)("li",{parentName:"ul"},"CIDs are short, regardless of the size of their underlying content. CIDs are based on the content\u2019s cryptographic hash."))),(0,i.kt)("li",{parentName:"ol"},"The results from IPFS Scan tells you how IPFS stores a file (by the given CID), including:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Dose this file exist on IPFS?"),(0,i.kt)("li",{parentName:"ul"},"Is this file available in different locations across the globe?"),(0,i.kt)("li",{parentName:"ul"},"How many IPFS replicas and where are they stored?"),(0,i.kt)("li",{parentName:"ul"},"Which IPFS Pinning Service(s) stores the replicas?  ")))),(0,i.kt)("h3",{id:"explaining-search-results"},"Explaining Search Results"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reporting Gateways"),"  "),(0,i.kt)("p",null,"We have several reporting gateways wide spread across the world.  "),(0,i.kt)("p",null,"Reporting gateways respond to search requests from IPFS Scan independently. Reports generated by each reporting gateway reflects the information that the gateway sees from its own perspective. More results from independent reporting gateways means higher credibility and reliability.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Availability"),"  "),(0,i.kt)("p",null,"Availability refers to the result from IPFS API ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v0/dag/get"),".  "),(0,i.kt)("p",null,"Availability indicates whether the file (or the content) is available or not from the reporting gateway's point of view.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Connected Providing Peers"),"  "),(0,i.kt)("p",null,"Connected Providing Peers (shown as ",(0,i.kt)("inlineCode",{parentName:"p"},"/dht/findprovs"),") refers to the result from IPFS API ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v0/dht/findprovs"),".  "),(0,i.kt)("p",null,"Connected Providing Peers indicate which IPFS peers can provide a replica for the specified file.  "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: ",(0,i.kt)("inlineCode",{parentName:"em"},"/api/v0/dag/get")," and ",(0,i.kt)("inlineCode",{parentName:"em"},"/api/v0/dht/findprovs")," may give contradict results in occasional case because they come from two different APIs responses.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Assurance"),"  "),(0,i.kt)("p",null,"Assurance is a positive declaration intended to give confidence or promise on something. In our scenario of IPFS storage, we focus on:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Whether your file will be stored on IPFS  "),(0,i.kt)("li",{parentName:"ol"},"For how long your file will be stored on IPFS  "),(0,i.kt)("li",{parentName:"ol"},"Who will guarantee 1.&2. for you  ")),(0,i.kt)("p",null,"Assurance is extremely crucial for some high-value contents, such as NFT metadata and sensitive data, when they are going to be stored on a distributed / decentralized network.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Results from IPFS Pinning Service"),"  "),(0,i.kt)("p",null,"IPFS remote pinning services allow users pin their IPFS files to remote stable IPFS nodes to ensure file's reliability and accesibility.  "),(0,i.kt)("p",null,"Usually, they are paid services and are consequently expected to provide Assurance to their users.  "),(0,i.kt)("p",null,"IPFS Scan allow any third-party IPFS pinning services to register as a trusted data provider.  "),(0,i.kt)("p",null,"Any 'trusted' pinning service is asked to provide on request detailed information, including file availability, replicas distribution as well as how the given file is assured to be stored on IPFS by the pinning service."))}u.isMDXComponent=!0}}]);