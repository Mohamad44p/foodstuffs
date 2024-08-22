(()=>{var e={};e.id=655,e.ids=[655],e.modules={53524:e=>{"use strict";e.exports=require("@prisma/client")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},15673:e=>{"use strict";e.exports=require("node:events")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},47261:e=>{"use strict";e.exports=require("node:util")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},45121:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),a(25388),a(27426),a(49883),a(11606);var r=a(45230),s=a(39565),i=a(19426),l=a.n(i),n=a(74870),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);a.d(t,o);let d=["",{children:["admin",{children:["clients",{children:["add",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,25388)),"D:\\foodstuffs\\app\\admin\\clients\\add\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,27426)),"D:\\foodstuffs\\app\\admin\\layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,16563))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,49883)),"D:\\foodstuffs\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,11606,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,16563))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\foodstuffs\\app\\admin\\clients\\add\\page.tsx"],u="/admin/clients/add/page",p={require:a,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/admin/clients/add/page",pathname:"/admin/clients/add",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},28155:(e,t,a)=>{let r={"048b1eeae86f3901096c9775afc8e85cbd451519":()=>Promise.resolve().then(a.bind(a,45101)).then(e=>e.addClient)};async function s(e,...t){return(await r[e]()).apply(null,t)}e.exports={"048b1eeae86f3901096c9775afc8e85cbd451519":s.bind(null,"048b1eeae86f3901096c9775afc8e85cbd451519")}},68069:(e,t,a)=>{Promise.resolve().then(a.bind(a,13413))},13413:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g});var r=a(42666),s=a(59500),i=a(86524),l=a(38678),n=a(13879),o=a(18085),d=a(86688),c=a(78637),u=a(81507),p=a(17604);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let m=(0,a(64518).Z)("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);var x=a(10072),f=a(51);a(7947);var h=(0,a(41498).$)("048b1eeae86f3901096c9775afc8e85cbd451519");function g(){let e=(0,n.useRouter)(),[t,a]=(0,s.useState)({title:"",link:"",buttonColor:"#3b82f6",bgColor:"#f3f4f6",image:null}),[g,b]=(0,s.useState)(null),[y,v]=(0,s.useState)(!1),[j,w]=(0,s.useState)(null),C=e=>{let{name:t,value:r}=e.target;a(e=>({...e,[t]:r}))},N=async a=>{a.preventDefault(),v(!0),w(null);let r=new FormData;r.append("title",t.title),r.append("link",t.link),r.append("buttonColor",t.buttonColor),r.append("bgColor",t.bgColor),r.append("image",t.image||"");let s=await h(r);"error"in s?w(s.error||"Failed to add client. Please try again."):e.push("/admin/clients"),v(!1)};return r.jsx("div",{className:"min-h-screen bg-background",children:(0,r.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[r.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Add Brand Client"}),(0,r.jsxs)("div",{className:"grid md:grid-cols-2 gap-8",children:[(0,r.jsxs)(o.Zb,{children:[r.jsx(o.Ol,{children:r.jsx(o.ll,{children:"Brand Client Details"})}),r.jsx(o.aY,{children:(0,r.jsxs)("form",{onSubmit:N,className:"space-y-4",children:[(0,r.jsxs)("div",{className:"space-y-2",children:[r.jsx(c._,{htmlFor:"title",children:"Title"}),r.jsx(d.I,{id:"title",name:"title",value:t.title,onChange:C,placeholder:"Enter brand client title",required:!0})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[r.jsx(c._,{htmlFor:"link",children:"Link"}),r.jsx(d.I,{id:"link",name:"link",type:"url",value:t.link,onChange:C,placeholder:"https://example.com",required:!0})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[r.jsx(c._,{htmlFor:"buttonColor",children:"Button Color"}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[r.jsx(d.I,{id:"buttonColor",name:"buttonColor",type:"color",value:t.buttonColor,onChange:C,className:"w-12 h-12 p-1 rounded"}),r.jsx("span",{children:t.buttonColor})]})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[r.jsx(c._,{htmlFor:"bgColor",children:"Background Color"}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[r.jsx(d.I,{id:"bgColor",name:"bgColor",type:"color",value:t.bgColor,onChange:C,className:"w-12 h-12 p-1 rounded"}),r.jsx("span",{children:t.bgColor})]})]}),(0,r.jsxs)("div",{className:"space-y-2",children:[r.jsx(c._,{htmlFor:"image",children:"Upload Image"}),r.jsx(d.I,{id:"image",name:"image",type:"file",onChange:e=>{let t=e.target.files?.[0];if(t){let e=new FileReader;e.onloadend=()=>{a(t=>({...t,image:e.result}))},e.readAsDataURL(t)}},accept:"image/*",className:"hidden"}),(0,r.jsxs)(u.z,{type:"button",variant:"outline",onClick:()=>document.getElementById("image")?.click(),className:"w-full",children:[r.jsx(p.Z,{className:"mr-2 h-4 w-4"})," Upload Image"]})]}),r.jsx(u.z,{type:"submit",className:"w-full",disabled:y,children:y?"Adding...":(0,r.jsxs)(r.Fragment,{children:[r.jsx(m,{className:"mr-2 h-4 w-4"})," Add Brand Client"]})}),j&&r.jsx("p",{className:"text-red-500 mt-2",children:j})]})})]}),(0,r.jsxs)(o.Zb,{children:[r.jsx(o.Ol,{children:r.jsx(o.ll,{children:"Preview"})}),r.jsx(o.aY,{children:(0,r.jsxs)(i.E.div,{className:"flex flex-col items-center group relative",variants:{hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:100}}},initial:"hidden",animate:"visible",onHoverStart:()=>b(0),onHoverEnd:()=>b(null),children:[(0,r.jsxs)("div",{className:`rounded-full w-72 h-72 flex items-center justify-center mb-6 relative overflow-hidden transform transition-all duration-300 ease-in-out ${0===g?"scale-105 shadow-xl":""}`,style:{backgroundColor:t.bgColor},children:[t.image?r.jsx(i.E.img,{src:t.image,alt:"Brand Logo",className:"w-56 h-auto absolute",style:{rotate:-12},animate:{y:0===g?-10:0,rotateY:0===g?10:0},transition:{type:"spring",stiffness:300}}):r.jsx(x.Z,{className:"w-32 h-32 text-gray-400"}),r.jsx(i.E.div,{className:"absolute inset-0 bg-black bg-opacity-20 opacity-0 transition-opacity duration-300",animate:{opacity:0===g?1:0}})]}),(0,r.jsxs)(i.E.button,{className:"mt-5 text-white font-bold py-2 px-6 rounded-sm uppercase text-lg relative overflow-hidden",style:{backgroundColor:t.buttonColor,clipPath:"polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)"},whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,r.jsxs)(l.default,{className:"flex items-center justify-center gap-x-5",href:t.link||"#",target:"_blank",children:[t.title||"Visit Website"," ",r.jsx(f.Z,{className:"w-5 h-5 text-white"})]}),r.jsx(i.E.div,{className:"absolute inset-0 bg-white",initial:{x:"-100%"},whileHover:{x:"100%"},transition:{duration:.3},style:{opacity:.3}})]})]})})]})]})]})})}},18085:(e,t,a)=>{"use strict";a.d(t,{Ol:()=>n,SZ:()=>d,Zb:()=>l,aY:()=>c,eW:()=>u,ll:()=>o});var r=a(42666),s=a(59500),i=a(71089);let l=s.forwardRef(({className:e,...t},a)=>r.jsx("div",{ref:a,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));l.displayName="Card";let n=s.forwardRef(({className:e,...t},a)=>r.jsx("div",{ref:a,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",e),...t}));n.displayName="CardHeader";let o=s.forwardRef(({className:e,...t},a)=>r.jsx("h3",{ref:a,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t}));o.displayName="CardTitle";let d=s.forwardRef(({className:e,...t},a)=>r.jsx("p",{ref:a,className:(0,i.cn)("text-sm text-muted-foreground",e),...t}));d.displayName="CardDescription";let c=s.forwardRef(({className:e,...t},a)=>r.jsx("div",{ref:a,className:(0,i.cn)("p-6 pt-0",e),...t}));c.displayName="CardContent";let u=s.forwardRef(({className:e,...t},a)=>r.jsx("div",{ref:a,className:(0,i.cn)("flex items-center p-6 pt-0",e),...t}));u.displayName="CardFooter"},86688:(e,t,a)=>{"use strict";a.d(t,{I:()=>l});var r=a(42666),s=a(59500),i=a(71089);let l=s.forwardRef(({className:e,type:t,...a},s)=>r.jsx("input",{type:t,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:s,...a}));l.displayName="Input"},78637:(e,t,a)=>{"use strict";a.d(t,{_:()=>c});var r=a(42666),s=a(59500),i=a(67989),l=s.forwardRef((e,t)=>(0,r.jsx)(i.WV.label,{...e,ref:t,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));l.displayName="Label";var n=a(72391),o=a(71089);let d=(0,n.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef(({className:e,...t},a)=>r.jsx(l,{ref:a,className:(0,o.cn)(d(),e),...t}));c.displayName=l.displayName},51:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,a(64518).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},10072:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,a(64518).Z)("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]])},17604:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,a(64518).Z)("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]])},45101:(e,t,a)=>{"use strict";a.r(t),a.d(t,{addClient:()=>l});var r=a(77829);a(43311);var s=a(91600),i=a(61714);async function l(e){let t=e.get("title"),a=e.get("link"),r=e.get("buttonColor"),l=e.get("bgColor"),n=e.get("image");if(!t||!a||!r||!l||!n)return{error:"All fields are required"};try{let e=await s.default.client.create({data:{id:Date.now().toString(),title:t,Link:a,ButtonColor:r,BackgroundColor:l,ImageUrl:n}});return(0,i.revalidatePath)("/admin/clients"),{success:!0,client:e}}catch(e){return console.error("Failed to add client:",e),{error:"Failed to add client. Please try again."}}}(0,a(24970).ensureServerEntryExports)([l]),(0,r.registerServerReference)("048b1eeae86f3901096c9775afc8e85cbd451519",l)},25388:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>l,__esModule:()=>i,default:()=>n});var r=a(59662);let s=(0,r.createProxy)(String.raw`D:\foodstuffs\app\admin\clients\add\page.tsx`),{__esModule:i,$$typeof:l}=s;s.default;let n=(0,r.createProxy)(String.raw`D:\foodstuffs\app\admin\clients\add\page.tsx#default`)},91600:(e,t,a)=>{"use strict";a.d(t,{default:()=>s});var r=a(53524);let s=globalThis.prisma??new r.PrismaClient}};var t=require("../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[812,261,13,581,615,510,647,694,86],()=>a(45121));module.exports=r})();