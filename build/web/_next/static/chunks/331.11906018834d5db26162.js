"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[331],{96465:function(e,t,n){n.d(t,{_:function(){return c}});n(67294);var r=n(51004),a=n(35005),s=n(66229),i=n(85893);function c(e){var t=e.title,n=e.message,c=e.icon,l=e.onOk,o=e.iconColor,u=e.modalShow,d=e.onCancel;return(0,i.jsxs)(r.Z,{show:u,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,i.jsx)(r.Z.Header,{children:(0,i.jsx)(r.Z.Title,{id:"contained-modal-title-vcenter",children:(0,i.jsxs)("div",{className:"d-flex align-items-center",children:[(0,i.jsx)(s.Wb,{className:"h2 mr-2",icon:c,color:o}),(0,i.jsx)("div",{className:"px-2",children:t})]})})}),(0,i.jsx)(r.Z.Body,{children:n}),(0,i.jsxs)(r.Z.Footer,{children:[(0,i.jsx)(a.Z,{onClick:l,variant:"primary",children:"Ok"}),(0,i.jsx)(a.Z,{onClick:d,variant:"secondary",children:"Cancel"})]})]})}},97331:function(e,t,n){n.r(t),n.d(t,{SelfMintView:function(){return V}});var r=n(30266),a=n(92809),s=n(80318),i=n(809),c=n.n(i),l=n(67294),o=n(5977),u=n(10682),d=n(34051),f=n(31555),h=n(46431),p=n(94716),x=n(35005),b=n(36968),m=n(56379),v=n(13356),j=n(71611),y=n(17574),w=n(79456),g=n(66014),Z=n(41408),k=n(42929),N=n(52153),S=n.n(N),C=n(49685),D=n(7995),P=n(16890),O=n(28216),R=n(60410),K=n(96465),A=n(26075),B=n(85893);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"20px",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",cursor:"pointer",transition:"border .24s ease-in-out"},F={borderColor:"#2196f3"},M={borderColor:"#00e676"},H={borderColor:"#ff1744"},V=(0,l.memo)((function(e){var t=(0,v.uI)({maxFiles:2}),n=t.getRootProps,a=t.getInputProps,i=t.isDragActive,N=t.isDragAccept,L=t.isDragReject,V=t.acceptedFiles,U=(0,j.Os)(),_=(0,Z.Z)(),z=_.loading,G=_.setLoading,T=l.useState(null),Y=(0,s.Z)(T,2),J=Y[0],X=Y[1],q=l.useState(""),Q=(0,s.Z)(q,2),I=Q[0],$=Q[1],ee=l.useState([]),te=(0,s.Z)(ee,2),ne=te[0],re=te[1],ae=l.useState(""),se=(0,s.Z)(ae,2),ie=se[0],ce=se[1],le=l.useState(""),oe=(0,s.Z)(le,2),ue=oe[0],de=oe[1],fe=l.useState(""),he=(0,s.Z)(fe,2),pe=he[0],xe=he[1],be=l.useState(!1),me=(0,s.Z)(be,2),ve=me[0],je=me[1],ye=(0,l.useState)(!1),we=ye[0],ge=ye[1],Ze=(0,l.useState)(!1),ke=Ze[0],Ne=Ze[1],Se=l.useState(""),Ce=(0,s.Z)(Se,2),De=Ce[0],Pe=Ce[1],Oe=(0,o.k6)(),Re=(0,O.v9)(R.Gl),Ke=(0,k.$0)(),Ae=(0,w.Z)().solanaCluster,Be=(0,l.useMemo)((function(){return W(W(W(W({},E),i?F:{}),N?M:{}),L?H:{})}),[i,L,N]),Le=function(e){if(Re)for(var t=0,n=Object.entries(Re);t<n.length;t++){var r=(0,s.Z)(n[t],2)[1];if("attributes"in r){var a=r;if(a)for(var i=0;i<(null===(c=a.attributes)||void 0===c?void 0:c.length);i++){var c;if(a.attributes){var l=a.attributes[i];if("SHA256"===l.trait_type&&l.value===e)return console.log(a),console.log(e),!0}}}}return!1};function We(e,t){return Ee.apply(this,arguments)}function Ee(){return(Ee=(0,r.Z)(c().mark((function e(t,n){var r,a,s,i,l,o,u,d,f;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=(0,P.lv)(1,100),a=g.V[r%g.V.length],U&&U.wallet){e.next=6;break}Oe.push("/wallet"),e.next=31;break;case 6:return i={},l={solanaCluster:Ae,userPublicKey:null===(s=U.publicKey)||void 0===s?void 0:s.toBase58(),treasurerPublicKey:a.toBase58(),success:!0,cacheStorage:i,sha256:t},e.prev=8,G(!0),(o=JSON.parse(I)).attributes.push({trait_type:"Mint date",value:(new Date).toLocaleDateString()}),o.attributes.push({trait_type:"SHA256",value:t}),l.metaData=o,e.next=16,(0,C.Q)(n,o,U,Ae,"0.01",(function(e){Pe((0,y.nb)(e))}),a,i);case 16:(u=e.sent)&&(d=u.metadataAccount,f=u.arweaveLink,l.metaAccount=d,l.arweaveLink=f,l.success=!0),G(!1),l.arweaveLink&&l.arweaveLink.length>0?(Ke.dropConfetti(),ge(!0)):(G(!1),Ne(!0)),e.next=29;break;case 22:e.prev=22,e.t0=e.catch(8),G(!1),l.success=!1,l.metaAccount="",l.arweaveLink="",Ne(!0);case 29:return e.next=31,(0,D.SX)(l);case 31:case"end":return e.stop()}}),e,null,[[8,22]])})))).apply(this,arguments)}l.useEffect((function(){if(I){var e=JSON.parse(I),t=[];e&&e.attributes&&(ce(e.name),de(e.description),e.attributes.forEach((function(e){"sha256"!==e.trait_type.toLowerCase()&&t.push(e)}))),re(t)}}),[I]),l.useEffect((0,r.Z)(c().mark((function e(){var t,n,r,a,s,i,l,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=V,2!==V.length){e.next=28;break}if(console.log(V),n=t.find((function(e){return e.name.endsWith("png")})),r=t.find((function(e){return e.name.endsWith("json")})),a=!0,!n||!r){e.next=25;break}if(s=n.name.replace(".png",""),i=r.name.replace(".json",""),s!==i){e.next=19;break}return(l=new FileReader).readAsDataURL(n),l.addEventListener("load",(function(){X(this.result)})),e.next=15,r.text();case 15:o=e.sent,$(o),e.next=23;break;case 19:a=!1,X(null),$(""),console.log("file name is different ".concat(s,":").concat(i));case 23:e.next=27;break;case 25:a=!1,console.log("file name is null");case 27:a||Ne(!0);case 28:case"end":return e.stop()}}),e)}))),[V]);var Fe=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=V.find((function(e){return e.name.endsWith("png")})),e.next=3,(0,A.s3)(t);case 3:if(n=e.sent,r=n.replace("data:image/png;base64,",""),a=S()(r).toString(),xe(a),ge(!1),Ne(!1),Le(a)){e.next=14;break}return e.next=12,We(a,t);case 12:e.next=15;break;case 14:je(!0);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Me=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return je(!1),t=V[0],n=pe,e.next=5,We(n,t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,B.jsxs)("div",{className:"my-2",children:[(0,B.jsx)("section",{className:"hero",children:(0,B.jsx)(u.Z,{children:(0,B.jsx)("div",{className:"hero-content",children:(0,B.jsx)("h1",{className:"mb-5",children:"DIY Your NFT With Image and Meta Files"})})})}),(0,B.jsx)("section",{style:{minHeight:"calc(100vh - 280px)"},children:(0,B.jsxs)(u.Z,{children:[(0,B.jsx)(d.Z,{children:(0,B.jsx)(f.Z,{md:"10",className:"text-center mx-auto",children:(0,B.jsxs)("div",W(W({},n({style:Be})),{},{children:[(0,B.jsx)("input",W({},a())),(0,B.jsx)("p",{children:"Drag 'n' drop one PNG image and one Meta JSON file here, or click to select the files"})]}))})}),(0,B.jsx)(d.Z,{children:(0,B.jsx)(f.Z,{md:"10",className:"mx-auto my-3",children:(0,B.jsxs)("div",{className:"d-flex align-items-center ",children:[(0,B.jsx)("div",{className:"d-block mx-auto border-1",children:(0,B.jsx)("img",{width:400,height:400,src:J,className:"bg-white"})}),(0,B.jsxs)("div",{className:"d-flex flex-column w-100 px-2 justify-content-end",children:[(0,B.jsxs)(h.Z,{className:"mb-3",children:[(0,B.jsx)(h.Z.Text,{id:"inputGroup-name",style:{width:"110px"},children:"Name"}),(0,B.jsx)(p.Z,{className:"bg-white","aria-label":"Name","aria-describedby":"inputGroup-name",value:ie,disabled:!0})]}),(0,B.jsxs)(h.Z,{className:"mb-3",children:[(0,B.jsx)(h.Z.Text,{id:"inputGroup-desc",style:{width:"110px"},children:"Description"}),(0,B.jsx)(p.Z,{as:"textarea",rows:3,className:"bg-white","aria-label":"Description","aria-describedby":"inputGroup-desc",value:ue,disabled:!0})]}),ne.map((function(e,t){return(0,B.jsxs)(h.Z,{className:"mb-3",children:[(0,B.jsx)(h.Z.Text,{id:"inputGroup-attr-1",style:{width:"110px"},children:e.trait_type}),(0,B.jsx)(p.Z,{"aria-label":"Attribute 1","aria-describedby":"inputGroup-attr-1",value:e.value,disabled:!0,className:"bg-white"})]},t)})),(0,B.jsx)(K._,{title:"Duplicates",iconColor:"red",message:"You've already had current image in your wallet, are you sure to continue?",icon:"mdi:alert",onOk:Me,modalShow:ve,onCancel:function(){je(!1)}}),(0,B.jsxs)("div",{className:"d-flex flex-row w-100",children:[(0,B.jsxs)(x.Z,{disabled:!J||z||!I,variant:"success",onClick:Fe,children:[z?(0,B.jsx)(b.Z,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}):null,"Mint"]}),z?(0,B.jsx)("div",{className:"d-flex p-2 text-info ",children:De}):null,(0,B.jsxs)("div",{className:"d-flex justify-content-center",children:[(0,B.jsx)(m.Z,{onClose:function(){return ge(!1)},show:we,delay:3e3,autohide:!0,bg:"success",className:"text-white",children:(0,B.jsx)(m.Z.Body,{children:"Successfully mint your token, please check collectibles in your wallet."})}),(0,B.jsx)(m.Z,{onClose:function(){return Ne(!1)},show:ke,delay:3e3,autohide:!0,bg:"danger",className:"text-white",children:(0,B.jsx)(m.Z.Body,{children:"Failed to mint the token,please try again later"})})]})]})]})]})})})]})})]})}))},66014:function(e,t,n){n.d(t,{V:function(){return a}});var r=n(59917),a=[new r.PublicKey("BPoWLHZXnv4mU9JxsWUsHB1FpBDbbiwKpb2RaSNNbRvF"),new r.PublicKey("DYbrSmqCzPSBgcCp3rSL2kBUvXVCCPRBdfqKxoWGNE4B"),new r.PublicKey("4UcR8QnmyvNS3z34MXwJ4ofKyWkEXaZjP86f3m7dUecj"),new r.PublicKey("CcQdXi8rifxxBh33xRTWZH1J6SAufoicDTA8VM3nA19"),new r.PublicKey("F1rAfpL2Dot6RCv8Cq9kHzqzuDfTuHDDJwHn88XDevVw"),new r.PublicKey("6YwWBr8zSYaSvapuzU9RwkWEroV1v8fiFbwLuBVsukoU"),new r.PublicKey("BRRbZZ6gm2UXoacMCC7PNsnAdfHbR15u7xJfyxngG1QA"),new r.PublicKey("7RRSp4kZRBdqVaeDLAD975WFBR3iDy335YjKfdejjMWY"),new r.PublicKey("HMhVSCVLtZ8xF7AuurgT6S2gqrpywhMvC1KQRYQREAmR"),new r.PublicKey("8kDKUBU9b6AuKa3ZzgRnmAubf6Y1LMBi5ErLJ4zTiKsa")]}}]);