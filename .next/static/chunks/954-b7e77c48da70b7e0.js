"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[954],{6299:function(e,r,o){o.d(r,{F:function(){return n},e:function(){return l}});var t=o(8402);function n(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function l(...e){return t.useCallback(n(...e),e)}},752:function(e,r,o){o.d(r,{WV:function(){return s},jH:function(){return a}});var t=o(8402),n=o(5761),l=o(9839),i=o(1701),s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let o=t.forwardRef((e,o)=>{let{asChild:t,...n}=e,s=t?l.g7:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(s,{...n,ref:o})});return o.displayName=`Primitive.${r}`,{...e,[r]:o}},{});function a(e,r){e&&n.flushSync(()=>e.dispatchEvent(r))}},9839:function(e,r,o){o.d(r,{g7:function(){return i}});var t=o(8402),n=o(6299),l=o(1701),i=t.forwardRef((e,r)=>{let{children:o,...n}=e,i=t.Children.toArray(o),a=i.find(d);if(a){let e=a.props.children,o=i.map(r=>r!==a?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,l.jsx)(s,{...n,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,o):null})}return(0,l.jsx)(s,{...n,ref:r,children:o})});i.displayName="Slot";var s=t.forwardRef((e,r)=>{let{children:o,...l}=e;if(t.isValidElement(o)){let e,i;let s=(e=Object.getOwnPropertyDescriptor(o.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?o.ref:(e=Object.getOwnPropertyDescriptor(o,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?o.props.ref:o.props.ref||o.ref;return t.cloneElement(o,{...function(e,r){let o={...r};for(let t in r){let n=e[t],l=r[t];/^on[A-Z]/.test(t)?n&&l?o[t]=(...e)=>{l(...e),n(...e)}:n&&(o[t]=n):"style"===t?o[t]={...n,...l}:"className"===t&&(o[t]=[n,l].filter(Boolean).join(" "))}return{...e,...o}}(l,o.props),ref:r?(0,n.F)(r,s):s})}return t.Children.count(o)>1?t.Children.only(null):null});s.displayName="SlotClone";var a=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function d(e){return t.isValidElement(e)&&e.type===a}},2571:function(e,r,o){o.d(r,{j:function(){return l}});let t=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,n=function(){for(var e,r,o=0,t="";o<arguments.length;)(e=arguments[o++])&&(r=function e(r){var o,t,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r))for(o=0;o<r.length;o++)r[o]&&(t=e(r[o]))&&(n&&(n+=" "),n+=t);else for(o in r)r[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(t&&(t+=" "),t+=r);return t},l=(e,r)=>o=>{var l;if((null==r?void 0:r.variants)==null)return n(e,null==o?void 0:o.class,null==o?void 0:o.className);let{variants:i,defaultVariants:s}=r,a=Object.keys(i).map(e=>{let r=null==o?void 0:o[e],n=null==s?void 0:s[e];if(null===r)return null;let l=t(r)||t(n);return i[e][l]}),d=o&&Object.entries(o).reduce((e,r)=>{let[o,t]=r;return void 0===t||(e[o]=t),e},{});return n(e,a,null==r?void 0:null===(l=r.compoundVariants)||void 0===l?void 0:l.reduce((e,r)=>{let{class:o,className:t,...n}=r;return Object.entries(n).every(e=>{let[r,o]=e;return Array.isArray(o)?o.includes({...s,...d}[r]):({...s,...d})[r]===o})?[...e,o,t]:e},[]),null==o?void 0:o.class,null==o?void 0:o.className)}},4229:function(e,r,o){o.d(r,{W:function(){return t}});function t(){for(var e,r,o=0,t="",n=arguments.length;o<n;o++)(e=arguments[o])&&(r=function e(r){var o,t,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(o=0;o<l;o++)r[o]&&(t=e(r[o]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t)}return n}(e))&&(t&&(t+=" "),t+=r);return t}},1263:function(e,r,o){o.d(r,{m6:function(){return L}});let t=e=>{let r=s(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;return{getClassGroupId:e=>{let o=e.split("-");return""===o[0]&&1!==o.length&&o.shift(),n(o,r)||i(e)},getConflictingClassGroupIds:(e,r)=>{let n=o[e]||[];return r&&t[e]?[...n,...t[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let o=e[0],t=r.nextPart.get(o),l=t?n(e.slice(1),t):void 0;if(l)return l;if(0===r.validators.length)return;let i=e.join("-");return r.validators.find(({validator:e})=>e(i))?.classGroupId},l=/^\[(.+)\]$/,i=e=>{if(l.test(e)){let r=l.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}},s=e=>{let{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]};return u(Object.entries(e.classGroups),o).forEach(([e,o])=>{a(o,t,e,r)}),t},a=(e,r,o,t)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:d(r,e)).classGroupId=o;return}if("function"==typeof e){if(c(e)){a(e(t),r,o,t);return}r.validators.push({validator:e,classGroupId:o});return}Object.entries(e).forEach(([e,n])=>{a(n,d(r,e),o,t)})})},d=(e,r)=>{let o=e;return r.split("-").forEach(e=>{o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)}),o},c=e=>e.isThemeGetter,u=(e,r)=>r?e.map(([e,o])=>[e,o.map(e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,o])=>[r+e,o])):e)]):e,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,o=new Map,t=new Map,n=(n,l)=>{o.set(n,l),++r>e&&(r=0,t=o,o=new Map)};return{get(e){let r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set(e,r){o.has(e)?o.set(e,r):n(e,r)}}},b=e=>{let{separator:r,experimentalParseClassName:o}=e,t=1===r.length,n=r[0],l=r.length,i=e=>{let o;let i=[],s=0,a=0;for(let d=0;d<e.length;d++){let c=e[d];if(0===s){if(c===n&&(t||e.slice(d,d+l)===r)){i.push(e.slice(a,d)),a=d+l;continue}if("/"===c){o=d;continue}}"["===c?s++:"]"===c&&s--}let d=0===i.length?e:e.substring(a),c=d.startsWith("!"),u=c?d.substring(1):d;return{modifiers:i,hasImportantModifier:c,baseClassName:u,maybePostfixModifierPosition:o&&o>a?o-a:void 0}};return o?e=>o({className:e,parseClassName:i}):i},f=e=>{if(e.length<=1)return e;let r=[],o=[];return e.forEach(e=>{"["===e[0]?(r.push(...o.sort(),e),o=[]):o.push(e)}),r.push(...o.sort()),r},m=e=>({cache:p(e.cacheSize),parseClassName:b(e),...t(e)}),g=/\s+/,h=(e,r)=>{let{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:n}=r,l=[],i=e.trim().split(g),s="";for(let e=i.length-1;e>=0;e-=1){let r=i[e],{modifiers:a,hasImportantModifier:d,baseClassName:c,maybePostfixModifierPosition:u}=o(r),p=!!u,b=t(p?c.substring(0,u):c);if(!b){if(!p||!(b=t(c))){s=r+(s.length>0?" "+s:s);continue}p=!1}let m=f(a).join(":"),g=d?m+"!":m,h=g+b;if(l.includes(h))continue;l.push(h);let y=n(b,p);for(let e=0;e<y.length;++e){let r=y[e];l.push(g+r)}s=r+(s.length>0?" "+s:s)}return s};function y(){let e,r,o=0,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=v(e))&&(t&&(t+=" "),t+=r);return t}let v=e=>{let r;if("string"==typeof e)return e;let o="";for(let t=0;t<e.length;t++)e[t]&&(r=v(e[t]))&&(o&&(o+=" "),o+=r);return o},x=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},w=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,z=new Set(["px","full","screen"]),j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,E=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,N=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,S=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,P=e=>G(e)||z.has(e)||k.test(e),O=e=>B(e,"length",H),G=e=>!!e&&!Number.isNaN(Number(e)),R=e=>B(e,"number",G),W=e=>!!e&&Number.isInteger(Number(e)),A=e=>e.endsWith("%")&&G(e.slice(0,-1)),$=e=>w.test(e),M=e=>j.test(e),I=new Set(["length","size","percentage"]),V=e=>B(e,I,Z),_=e=>B(e,"position",Z),F=new Set(["image","url"]),q=e=>B(e,F,K),D=e=>B(e,"",J),T=()=>!0,B=(e,r,o)=>{let t=w.exec(e);return!!t&&(t[1]?"string"==typeof r?t[1]===r:r.has(t[1]):o(t[2]))},H=e=>C.test(e)&&!E.test(e),Z=()=>!1,J=e=>N.test(e),K=e=>S.test(e),L=function(e,...r){let o,t,n;let l=function(s){return t=(o=m(r.reduce((e,r)=>r(e),e()))).cache.get,n=o.cache.set,l=i,i(s)};function i(e){let r=t(e);if(r)return r;let l=h(e,o);return n(e,l),l}return function(){return l(y.apply(null,arguments))}}(()=>{let e=x("colors"),r=x("spacing"),o=x("blur"),t=x("brightness"),n=x("borderColor"),l=x("borderRadius"),i=x("borderSpacing"),s=x("borderWidth"),a=x("contrast"),d=x("grayscale"),c=x("hueRotate"),u=x("invert"),p=x("gap"),b=x("gradientColorStops"),f=x("gradientColorStopPositions"),m=x("inset"),g=x("margin"),h=x("opacity"),y=x("padding"),v=x("saturate"),w=x("scale"),k=x("sepia"),z=x("skew"),j=x("space"),C=x("translate"),E=()=>["auto","contain","none"],N=()=>["auto","hidden","clip","visible","scroll"],S=()=>["auto",$,r],I=()=>[$,r],F=()=>["",P,O],B=()=>["auto",G,$],H=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Z=()=>["solid","dashed","dotted","double","none"],J=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],K=()=>["start","end","center","between","around","evenly","stretch"],L=()=>["","0",$],Q=()=>["auto","avoid","all","avoid-page","page","left","right","column"],U=()=>[G,$];return{cacheSize:500,separator:":",theme:{colors:[T],spacing:[P,O],blur:["none","",M,$],brightness:U(),borderColor:[e],borderRadius:["none","","full",M,$],borderSpacing:I(),borderWidth:F(),contrast:U(),grayscale:L(),hueRotate:U(),invert:L(),gap:I(),gradientColorStops:[e],gradientColorStopPositions:[A,O],inset:S(),margin:S(),opacity:U(),padding:I(),saturate:U(),scale:U(),sepia:L(),skew:U(),space:I(),translate:I()},classGroups:{aspect:[{aspect:["auto","square","video",$]}],container:["container"],columns:[{columns:[M]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...H(),$]}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",W,$]}],basis:[{basis:S()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",$]}],grow:[{grow:L()}],shrink:[{shrink:L()}],order:[{order:["first","last","none",W,$]}],"grid-cols":[{"grid-cols":[T]}],"col-start-end":[{col:["auto",{span:["full",W,$]},$]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[T]}],"row-start-end":[{row:["auto",{span:[W,$]},$]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",$]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",$]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...K()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...K(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...K(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",$,r]}],"min-w":[{"min-w":[$,r,"min","max","fit"]}],"max-w":[{"max-w":[$,r,"none","full","min","max","fit","prose",{screen:[M]},M]}],h:[{h:[$,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[$,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[$,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[$,r,"auto","min","max","fit"]}],"font-size":[{text:["base",M,O]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",R]}],"font-family":[{font:[T]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",$]}],"line-clamp":[{"line-clamp":["none",G,R]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",P,$]}],"list-image":[{"list-image":["none",$]}],"list-style-type":[{list:["none","disc","decimal",$]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Z(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",P,O]}],"underline-offset":[{"underline-offset":["auto",P,$]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",$]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",$]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...H(),_]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",V]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},q]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[f]}],"gradient-via-pos":[{via:[f]}],"gradient-to-pos":[{to:[f]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...Z(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:Z()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...Z()]}],"outline-offset":[{"outline-offset":[P,$]}],"outline-w":[{outline:[P,O]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:F()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[P,O]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",M,D]}],"shadow-color":[{shadow:[T]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...J(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":J()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",M,$]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[c]}],invert:[{invert:[u]}],saturate:[{saturate:[v]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[c]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",$]}],duration:[{duration:U()}],ease:[{ease:["linear","in","out","in-out",$]}],delay:[{delay:U()}],animate:[{animate:["none","spin","ping","pulse","bounce",$]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[W,$]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[z]}],"skew-y":[{"skew-y":[z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",$]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",$]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",$]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[P,O,R]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);