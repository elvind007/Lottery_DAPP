(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{18:function(e,t,a){e.exports=a(39)},23:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(4),c=a.n(s),o=(a(23),a(1)),i=a.n(o),l=a(3),m=a(11),u=a(12),p=a(16),d=a(13),h=a(17),f=a(14),v=a.n(f),b=(a(37),a(15)),y=a.n(b),k=window.web3?new y.a(window.web3.currentProvider):null,E="0x8C9815E2372bC6F9Dec915751B31666aB08b2edb",g=E,w=[{constant:!0,inputs:[],name:"manager",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"pickWinner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"random",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getPlayers",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"enter",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"players",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"}],N=k?new k.eth.Contract(w,g):null,M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={manager:"",players:[],balance:"",balanceEther:"",value:"",message:"",isMetaMaskPluginAvailable:!1,isTransactionIsRunning:!1,startWarning:!1,errorMessage:""},a.onSubmit=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.setState({errorMessage:""}),a.state.isMetaMaskPluginAvailable){e.next=5;break}return e.abrupt("return",a.metaMaskNotAvailable());case 5:return e.next=7,window.ethereum.enable();case 7:return e.next=9,k.eth.getAccounts();case 9:return n=e.sent,a.setState({message:"Transaction is processing. This might take 12 to 30 seconds.",isTransactionIsRunning:!0}),e.prev=11,e.next=14,N.methods.enter().send({from:n[0],value:k.utils.toWei(a.state.value,"ether")});case 14:a.updateContractInfo(),a.setState({message:"You entered to the lottery",value:""}),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(11),a.setState({errorMessage:e.t0.message});case 21:a.setState({isTransactionIsRunning:!1});case 22:case"end":return e.stop()}}),e,null,[[11,18]])})));return function(t){return e.apply(this,arguments)}}(),a.onClickPickWinner=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.state.isMetaMaskPluginAvailable){e.next=4;break}return e.abrupt("return",a.metaMaskNotAvailable());case 4:return e.next=6,window.ethereum.enable();case 6:return e.next=8,k.eth.getAccounts();case 8:return n=e.sent,a.setState({message:"Transaction is processing. This might take 9 to 15 seconds.",isTransactionIsRunning:!0}),e.prev=10,e.next=13,N.methods.pickWinner().send({from:n[0]});case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:a.setState({message:"Winner picked"}),a.setState({isTransactionIsRunning:!1});case 19:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t){return e.apply(this,arguments)}}(),a.metaMaskNotAvailable=function(){a.setState({startWarning:!0})},a.onClickUpdateAnnouncement=function(){a.updateContractInfo()},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=k&&N,this.setState({isMetaMaskPluginAvailable:t}),this.updateContractInfo();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateContractInfo",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/contract-info").then((function(e){return e.json()})).then((function(e){var a=e.manager,n=e.players,r=e.balanceWei,s=e.balanceEther;t.setState({manager:a,players:n,balance:r,balanceEther:s})})).catch(console.log);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"mainWindow",value:function(){var e=this.state,t=e.isMetaMaskPluginAvailable,a=e.startWarning,n=e.errorMessage;return r.a.createElement("div",{className:"container-contact100"},r.a.createElement("div",{className:"wrap-contact100"},r.a.createElement("form",{onSubmit:this.onSubmit,className:"contact100-form validate-form"},r.a.createElement("span",{className:"contact100-form-title"},"Try Your Luck"),!t&&!a&&r.a.createElement("div",{className:"metamask-not-found"},"Metamask Not Found"),!t&&a&&r.a.createElement("div",{className:"metamask-not-found warning"},"Metamask Not Found"),n&&r.a.createElement("div",{className:"metamask-not-found error-message"},n),this.inputForm(),this.announcements()),this.rules()))}},{key:"rules",value:function(){return r.a.createElement("div",{className:"contact100-more flex-col-c-m"},r.a.createElement("div",{className:"flex-w size1 p-b-47"},r.a.createElement("div",{className:"txt1 p-r-25"},r.a.createElement("span",{className:"lnr lnr-book"})),r.a.createElement("div",{className:"flex-col size2"},r.a.createElement("span",{className:"txt1 p-b-20"},"Decentralized Lottery App"),r.a.createElement("span",{className:"txt2"},"This lottery contract has a prize pool and a list of people who have entered the prize pool. People send some amount of money(ether) in the contract. As soon as people send some amount of money, they are being recorded as a player. Ethers, that the players send, directly goes to the contract account. After a certain times, contract manager make the contract to pick a winner. Then the contract pick a winner randomly and transfer all money from the prize pool to the winner. At that point, the lottery contract resets and becomes ready to accept a new list of players."),r.a.createElement("div",{className:"contract-info-container"},r.a.createElement("div",null,"Contract Address: ",E),r.a.createElement("div",null,"Monitor Contract Transaction in"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"remote-link",href:"https://rinkeby.etherscan.io/tx/0x3349da25727612e32d292b2fd1f1d2ac5d07b35b9b0f62f356f60d3aa65c6241"},"EtherScan")),r.a.createElement("div",null,"Source Code:"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"remote-link",href:"https://github.com/bmshamsnahid/Decentralized-Lottery-App"},"Github")),r.a.createElement("div",null,"Inspired from"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"remote-link",href:"https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide"},"Stephen Grider Course")),r.a.createElement("div",null,"Powered By"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"remote-link",href:"https://www.ethereum.org/"},"Ethereum Network")),r.a.createElement("div",null,"Developed By"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"remote-link",href:"https://shams-nahid.herokuapp.com/"},"Shams Nahid"))))))}},{key:"announcements",value:function(){var e=this.state,t=e.manager,a=e.players,n=e.balanceEther;return r.a.createElement("div",{className:"announcement-container"},r.a.createElement("div",{className:"announcement-title"},"Announcements",r.a.createElement("div",{className:"refresh-button",onClick:this.onClickUpdateAnnouncement},r.a.createElement("span",{className:"refresh-text"},"Update Announcements"),r.a.createElement("span",{className:"lnr lnr-sync refresh-icon"}))),r.a.createElement("div",{className:"announcement-section"},r.a.createElement("span",{className:"lnr lnr-bullhorn announcement-icon"}),r.a.createElement("div",{className:"announcement-status"},"Minimum ",r.a.createElement("span",{className:"marked-number"},"0.10")," ether is required.")),r.a.createElement("div",{className:"announcement-section"},r.a.createElement("span",{className:"lnr lnr-bullhorn announcement-icon"}),r.a.createElement("div",{className:"announcement-status"},"The contract is managed by"," ",r.a.createElement("span",{className:"manager-address"},t),".")),r.a.createElement("div",{className:"announcement-section"},r.a.createElement("span",{className:"lnr lnr-bullhorn announcement-icon"}),r.a.createElement("div",{className:"announcement-status"},"Total ",r.a.createElement("span",{className:"marked-number"},a.length)," ","players already joined here.")),r.a.createElement("div",{className:"announcement-section"},r.a.createElement("span",{className:"lnr lnr-bullhorn announcement-icon"}),r.a.createElement("div",{className:"announcement-status"},"You may win ",r.a.createElement("span",{className:"marked-number"},n)," ","ether !!!.")),r.a.createElement("div",{className:"manager-section"},r.a.createElement("div",{className:"manager-warning"},"(Only For Contract Manager)"),r.a.createElement("button",{onClick:this.onClickPickWinner,className:"custom-button"},"Pick Winner")))}},{key:"inputForm",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"wrap-input100 validate-input"},r.a.createElement("input",{id:"email",className:"input100",type:"text",name:"email",placeholder:"Example: 0.50",value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}}),r.a.createElement("span",{className:"focus-input100"})),r.a.createElement("div",{className:"container-contact100-form-btn"},r.a.createElement("button",{className:"contact100-form-btn"},"Join")),r.a.createElement("span",{className:"network-warning"},"This app is running on Rinkeby test network and dealing with fake ether."))}},{key:"render",value:function(){var e=this.state,t=e.isTransactionIsRunning,a=e.message;return r.a.createElement(v.a,{active:t,spinner:!0,text:a},this.mainWindow())}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.afb950b7.chunk.js.map