import{r as n,j as t,m as d}from"./index-llTSygC2.js";import{m as s}from"./index-BaS3sH7V.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m=(...o)=>o.filter((e,r,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=n.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:i,className:a="",children:l,iconNode:c,...x},f)=>n.createElement("svg",{ref:f,...b,width:e,height:e,stroke:o,strokeWidth:i?Number(r)*24/Number(e):r,className:m("lucide",a),...x},[...c.map(([h,p])=>n.createElement(h,p)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(o,e)=>{const r=n.forwardRef(({className:i,...a},l)=>n.createElement(j,{ref:l,iconNode:e,className:m(`lucide-${k(o)}`,i),...a}));return r.displayName=`${o}`,r};/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],N=u("Menu",y);/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],g=u("X",w),L=()=>{const[o,e]=n.useState(!1),[r,i]=n.useState(!1),[a,l]=n.useState(!1);return n.useEffect(()=>{const c=()=>{window.scrollY>100?(i(!0),l(!0)):(i(!1),l(!1))};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),t.jsxs(d.nav,{className:`fixed top-0 left-0 w-full z-50 p-4 transition-all ${a?"bg-[#F8F1E5] shadow-lg":"bg-transparent"} ${r?"block":"hidden"}`,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:[t.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[t.jsx("a",{href:"/",className:"flex items-center space-x-2",children:t.jsx("img",{src:a?"images/logo_negro.svg":"images/logo_blanco.svg",alt:"",className:"h-8 md:h-10 transition-all duration-300 ml-4 scale-90"})}),t.jsxs("ul",{className:`hidden md:flex space-x-6 text-lg transition-all duration-300 ${a?"text-black":"text-white"}`,children:[t.jsx("li",{children:t.jsx(s.Link,{to:"about",smooth:!0,duration:800,offset:-80,className:"cursor-pointer hover:text-primary transition",children:"Sobre Nosotros"})}),t.jsx("li",{children:t.jsx(s.Link,{to:"menu",smooth:!0,duration:800,offset:-80,className:"cursor-pointer hover:text-primary transition",children:"Carta"})}),t.jsx("li",{children:t.jsx(s.Link,{to:"catering",smooth:!0,duration:800,offset:-80,className:"cursor-pointer hover:text-primary transition",children:"Catering"})}),t.jsx("li",{children:t.jsx(s.Link,{to:"testimonials",smooth:!0,duration:800,offset:-80,className:"cursor-pointer hover:text-primary transition",children:"Testimonios"})}),t.jsx("li",{children:t.jsx(s.Link,{to:"contacto",smooth:!0,duration:800,offset:-80,className:"cursor-pointer hover:text-primary transition",children:"Contacto"})})]}),t.jsx("button",{onClick:()=>e(!o),className:`md:hidden transition-all duration-300 ${a?"text-black":"text-white"}`,children:o?t.jsx(g,{size:30}):t.jsx(N,{size:30})})]}),o&&t.jsxs(d.div,{className:"absolute top-16 left-0 w-full bg-[#F8F1E5] p-6 flex flex-col items-center space-y-4 md:hidden",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.3},children:[t.jsx(s.Link,{to:"about",smooth:!0,duration:800,offset:-80,className:"text-black text-xl cursor-pointer",onClick:()=>e(!1),children:"Sobre Nosotros"}),t.jsx(s.Link,{to:"menu",smooth:!0,duration:800,offset:-80,className:"text-black text-xl cursor-pointer",onClick:()=>e(!1),children:"Carta"}),t.jsx(s.Link,{to:"catering",smooth:!0,duration:800,offset:-80,className:"text-black text-xl cursor-pointer",onClick:()=>e(!1),children:"Catering"}),t.jsx(s.Link,{to:"testimonials",smooth:!0,duration:800,offset:-80,className:"text-black text-xl cursor-pointer",onClick:()=>e(!1),children:"Testimonios"}),t.jsx(s.Link,{to:"contacto",smooth:!0,duration:800,offset:-80,className:"text-black text-xl cursor-pointer",onClick:()=>e(!1),children:"Contacto"})]})]})};export{L as default};
