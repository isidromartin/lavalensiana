import{r as a,j as t,m as d}from"./index-Bt8UhTGm.js";import{m as s}from"./index-CauUwUSR.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m=(...o)=>o.filter((e,r,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=a.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:l,iconNode:c,...x},f)=>a.createElement("svg",{ref:f,...b,width:e,height:e,stroke:o,strokeWidth:n?Number(r)*24/Number(e):r,className:m("lucide",i),...x},[...c.map(([h,p])=>a.createElement(h,p)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(o,e)=>{const r=a.forwardRef(({className:n,...i},l)=>a.createElement(j,{ref:l,iconNode:e,className:m(`lucide-${k(o)}`,n),...i}));return r.displayName=`${o}`,r};/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],g=u("Menu",y);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],w=u("X",N),L=()=>{const[o,e]=a.useState(!1),[r,n]=a.useState(!1),[i,l]=a.useState(!1);return a.useEffect(()=>{const c=()=>{window.scrollY>100?(n(!0),l(!0)):(n(!1),l(!1))};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),t.jsxs(d.nav,{className:`fixed top-0 left-0 w-full z-50 p-4 transition-all ${i?"bg-[#F8F1E5] shadow-lg":"bg-transparent"} ${r?"block":"hidden"}`,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:[t.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[t.jsx("a",{href:"/",className:"flex items-center space-x-2",children:t.jsx("img",{src:i?"images/logo_negro.svg":"images/logo_blanco.svg",alt:"",className:"h-8 md:h-10 transition-all duration-300 ml-4 scale-90"})}),t.jsxs("ul",{className:`hidden md:flex space-x-6 text-lg transition-all duration-300 ${i?"text-black":"text-white"}`,children:[t.jsx("li",{children:t.jsx(s.Link,{to:"about",smooth:!0,duration:800,offset:-80,className:"cursor-pointer hover:text-primary transition",as:"a",href:"/#about",children:"Sobre Nosotros"})}),t.jsx("li",{children:t.jsx(s.Link,{to:"menu",smooth:!0,duration:800,offset:-80,className:"cursor-pointer hover:text-primary transition",as:"a",href:"/#menu",children:"Carta"})}),t.jsx("li",{children:t.jsx(s.Link,{to:"catering",smooth:!0,duration:800,offset:-80,className:"cursor-pointer hover:text-primary transition",as:"a",href:"/#catering",children:"Catering"})}),t.jsx("li",{children:t.jsx(s.Link,{to:"testimonials",smooth:!0,duration:800,offset:-80,className:"cursor-pointer hover:text-primary transition",as:"a",href:"/#testimonials",children:"Testimonios"})}),t.jsx("li",{children:t.jsx(s.Link,{to:"contacto",smooth:!0,duration:800,offset:-80,className:"cursor-pointer hover:text-primary transition",as:"a",href:"/#contacto",children:"Contacto"})})]}),t.jsx("button",{onClick:()=>e(!o),className:`md:hidden transition-all duration-300 ${i?"text-black":"text-white"}`,children:o?t.jsx(w,{size:30}):t.jsx(g,{size:30})})]}),o&&t.jsxs(d.div,{className:"absolute top-16 left-0 w-full bg-[#F8F1E5] p-6 flex flex-col items-center space-y-4 md:hidden",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.3},children:[t.jsx(s.Link,{to:"about",smooth:!0,duration:800,offset:-80,className:"text-black text-xl cursor-pointer",onClick:()=>e(!1),as:"a",href:"/#about",children:"Sobre Nosotros"}),t.jsx(s.Link,{to:"menu",smooth:!0,duration:800,offset:-80,className:"text-black text-xl cursor-pointer",onClick:()=>e(!1),as:"a",href:"/#menu",children:"Carta"}),t.jsx(s.Link,{to:"catering",smooth:!0,duration:800,offset:-80,className:"text-black text-xl cursor-pointer",onClick:()=>e(!1),as:"a",href:"/#catering",children:"Catering"}),t.jsx(s.Link,{to:"testimonials",smooth:!0,duration:800,offset:-80,className:"text-black text-xl cursor-pointer",onClick:()=>e(!1),as:"a",href:"/#testimonials",children:"Testimonios"}),t.jsx(s.Link,{to:"contacto",smooth:!0,duration:800,offset:-80,className:"text-black text-xl cursor-pointer",onClick:()=>e(!1),as:"a",href:"/#contacto",children:"Contacto"})]})]})};export{L as default};
