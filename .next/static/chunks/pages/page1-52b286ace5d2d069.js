(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[356],{6211:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page1",function(){return n(8448)}])},1645:function(e,t,n){"use strict";var s=n(5893),a=n(7294);t.Z=e=>{let{optionNum:t}=e,[n,l]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let e="";switch(t){case 1:e="http://localhost:3000/api/hello";break;case 2:e="http://localhost:3000/api/hello2";break;case 3:e="http://localhost:3000/api/hello3";break;case 4:e="http://localhost:3000/api/hello4";break;default:e=""}console.log("API ".concat(e)),(async()=>{""!==e&&await fetch(e).then(e=>e.json()).then(e=>{l(e)}).catch(e=>{console.log(e)})})()},[t]),(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"d-flex align-items-center",children:[(0,s.jsx)("div",{className:"me-3",children:"Right"}),(0,s.jsx)("div",{className:"display-1",children:n&&n.name||""})]})})}},8448:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Home}});var s=n(5893),a=n(9008),l=n.n(a),c=n(9873),i=n.n(c),components_Left=e=>{let{setOptionNum:t}=e,n=["選項1","選項22","選項333","選項4444"],doClick=e=>{t(e)};return(0,s.jsx)("div",{className:i().left,children:(0,s.jsxs)("div",{className:"dropdown",children:[(0,s.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"選項"}),(0,s.jsx)("ul",{className:"dropdown-menu",children:n&&n.map((e,t)=>(0,s.jsx)("li",{children:(0,s.jsx)("div",{className:"dropdown-item",onClick:e=>{doClick(t+1)},children:e})},t))})]})})},o=n(1645),r=n(7294);function Home(){let[e,t]=(0,r.useState)(0);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l(),{children:[(0,s.jsx)("title",{children:"Create Next App"}),(0,s.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("main",{className:"container d-md-flex mt-5",children:[(0,s.jsx)(components_Left,{setOptionNum:t}),(0,s.jsx)(o.Z,{optionNum:e})]})]})}},9873:function(e){e.exports={left:"Left_left__KgpYr"}},9008:function(e,t,n){e.exports=n(4605)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6211)}),_N_E=e.O()}]);