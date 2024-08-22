"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[407],{2755:function(e,t,n){n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,u={},a=0,i=function(e){return e&&(e.host||i(e.parentNode))},c=function(e,t,n,c){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=i(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});u[n]||(u[n]=new WeakMap);var s=u[n],d=[],f=new Set,v=new Set(l),m=function(e){!e||f.has(e)||(f.add(e),m(e.parentNode))};l.forEach(m);var p=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))p(e);else try{var t=e.getAttribute(c),u=null!==t&&"false"!==t,a=(r.get(e)||0)+1,i=(s.get(e)||0)+1;r.set(e,a),s.set(e,i),d.push(e),1===a&&u&&o.set(e,!0),1===i&&e.setAttribute(n,"true"),u||e.setAttribute(c,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return p(t),f.clear(),a++,function(){d.forEach(function(e){var t=r.get(e)-1,u=s.get(e)-1;r.set(e,t),s.set(e,u),t||(o.has(e)||e.removeAttribute(c),o.delete(e)),u||e.removeAttribute(n)}),--a||(r=new WeakMap,r=new WeakMap,o=new WeakMap,u={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),c(r,o,n,"aria-hidden")):function(){return null}}},1968:function(e,t,n){var r=n(894);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}})},5214:function(e,t,n){n.d(t,{Z:function(){return q}});var r,o,u,a,i,c,l,s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var f=n(8402),v="right-scroll-bar-position",m="width-before-scroll-bar";function p(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var h="undefined"!=typeof window?f.useLayoutEffect:f.useEffect,g=new WeakMap,y=(void 0===o&&(o={}),(void 0===u&&(u=function(e){return e}),a=[],i=!1,c={read:function(){if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var t=u(e,i);return a.push(t),function(){a=a.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(i=!0;a.length;){var t=a;a=[],t.forEach(e)}a={push:function(t){return e(t)},filter:function(){return a}}},assignMedium:function(e){i=!0;var t=[];if(a.length){var n=a;a=[],n.forEach(e),t=a}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),a={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),a}}}}).options=s({async:!0,ssr:!1},o),c),E=function(){},b=f.forwardRef(function(e,t){var n,r,o,u,a=f.useRef(null),i=f.useState({onScrollCapture:E,onWheelCapture:E,onTouchMoveCapture:E}),c=i[0],l=i[1],v=e.forwardProps,m=e.children,b=e.className,w=e.removeScrollBar,N=e.enabled,C=e.shards,S=e.sideCar,L=e.noIsolation,M=e.inert,T=e.allowPinchZoom,P=e.as,O=e.gapMode,R=d(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=(n=[a,t],r=function(e){return n.forEach(function(t){return p(t,e)})},(o=(0,f.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,u=o.facade,h(function(){var e=g.get(u);if(e){var t=new Set(e),r=new Set(n),o=u.current;t.forEach(function(e){r.has(e)||p(e,null)}),r.forEach(function(e){t.has(e)||p(e,o)})}g.set(u,n)},[n]),u),k=s(s({},R),c);return f.createElement(f.Fragment,null,N&&f.createElement(S,{sideCar:y,removeScrollBar:w,shards:C,noIsolation:L,inert:M,setCallbacks:l,allowPinchZoom:!!T,lockRef:a,gapMode:O}),v?f.cloneElement(f.Children.only(m),s(s({},k),{ref:x})):f.createElement(void 0===P?"div":P,s({},k,{className:b,ref:x}),m))});b.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},b.classNames={fullWidth:m,zeroRight:v};var w=function(e){var t=e.sideCar,n=d(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return f.createElement(r,s({},n))};w.isSideCarExport=!0;var N=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var u,a;(u=t).styleSheet?u.styleSheet.cssText=o:u.appendChild(document.createTextNode(o)),a=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},C=function(){var e=N();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},S=function(){var e=C();return function(t){return e(t.styles,t.dynamic),null}},L={left:0,top:0,right:0,gap:0},M=function(e){return parseInt(e||"",10)||0},T=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[M(n),M(r),M(o)]},P=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return L;var t=T(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},O=S(),R="data-scroll-locked",x=function(e,t,n,r){var o=e.left,u=e.top,a=e.right,i=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(i,"px ").concat(r,";\n  }\n  body[").concat(R,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(u,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(v," {\n    right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(m," {\n    margin-right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(v," .").concat(v," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(m," .").concat(m," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(R,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(i,"px;\n  }\n")},k=function(){var e=parseInt(document.body.getAttribute(R)||"0",10);return isFinite(e)?e:0},A=function(){f.useEffect(function(){return document.body.setAttribute(R,(k()+1).toString()),function(){var e=k()-1;e<=0?document.body.removeAttribute(R):document.body.setAttribute(R,e.toString())}},[])},W=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;A();var u=f.useMemo(function(){return P(o)},[o]);return f.createElement(O,{styles:x(u,!t,o,n?"":"!important")})},D=!1;if("undefined"!=typeof window)try{var I=Object.defineProperty({},"passive",{get:function(){return D=!0,!0}});window.addEventListener("test",I,I),window.removeEventListener("test",I,I)}catch(e){D=!1}var j=!!D&&{passive:!1},F=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},_=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),B(e,r)){var o=U(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},B=function(e,t){return"v"===e?F(t,"overflowY"):F(t,"overflowX")},U=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},K=function(e,t,n,r,o){var u,a=(u=window.getComputedStyle(t).direction,"h"===e&&"rtl"===u?-1:1),i=a*r,c=n.target,l=t.contains(c),s=!1,d=i>0,f=0,v=0;do{var m=U(e,c),p=m[0],h=m[1]-m[2]-a*p;(p||h)&&B(e,c)&&(f+=h,v+=p),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&1>Math.abs(f)||!o&&i>f)?s=!0:!d&&(o&&1>Math.abs(v)||!o&&-i>v)&&(s=!0),s},X=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},$=function(e){return[e.deltaX,e.deltaY]},z=function(e){return e&&"current"in e?e.current:e},Y=0,H=[],Z=(l=function(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),o=f.useState(Y++)[0],u=f.useState(S)[0],a=f.useRef(e);f.useEffect(function(){a.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(z),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=f.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!a.current.allowPinchZoom;var o,u=X(e),i=n.current,c="deltaX"in e?e.deltaX:i[0]-u[0],l="deltaY"in e?e.deltaY:i[1]-u[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=_(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=_(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var v=r.current||o;return K(v,t,e,"h"===v?c:l,!0)},[]),c=f.useCallback(function(e){if(H.length&&H[H.length-1]===u){var n="deltaY"in e?$(e):X(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(a.current.shards||[]).map(z).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?i(e,o[0]):!a.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=f.useCallback(function(e,n,r,o){var u={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(u),setTimeout(function(){t.current=t.current.filter(function(e){return e!==u})},1)},[]),s=f.useCallback(function(e){n.current=X(e),r.current=void 0},[]),d=f.useCallback(function(t){l(t.type,$(t),t.target,i(t,e.lockRef.current))},[]),v=f.useCallback(function(t){l(t.type,X(t),t.target,i(t,e.lockRef.current))},[]);f.useEffect(function(){return H.push(u),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:v}),document.addEventListener("wheel",c,j),document.addEventListener("touchmove",c,j),document.addEventListener("touchstart",s,j),function(){H=H.filter(function(e){return e!==u}),document.removeEventListener("wheel",c,j),document.removeEventListener("touchmove",c,j),document.removeEventListener("touchstart",s,j)}},[]);var m=e.removeScrollBar,p=e.inert;return f.createElement(f.Fragment,null,p?f.createElement(u,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,m?f.createElement(W,{gapMode:e.gapMode}):null)},y.useMedium(l),w),V=f.forwardRef(function(e,t){return f.createElement(b,s({},e,{ref:t,sideCar:Z}))});V.classNames=b.classNames;var q=V},6001:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},7539:function(e,t,n){n.d(t,{b:function(){return a},k:function(){return u}});var r=n(8402),o=n(1701);function u(e,t){let n=r.createContext(t);function u(e){let{children:t,...u}=e,a=r.useMemo(()=>u,Object.values(u));return(0,o.jsx)(n.Provider,{value:a,children:t})}return u.displayName=e+"Provider",[u,function(o){let u=r.useContext(n);if(u)return u;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function a(e,t=[]){let n=[],u=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return u.scopeName=e,[function(t,u){let a=r.createContext(u),i=n.length;function c(t){let{scope:n,children:u,...c}=t,l=n?.[e][i]||a,s=r.useMemo(()=>c,Object.values(c));return(0,o.jsx)(l.Provider,{value:s,children:u})}return n=[...n,u],c.displayName=t+"Provider",[c,function(n,o){let c=o?.[e][i]||a,l=r.useContext(c);if(l)return l;if(void 0!==u)return u;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(u,...t)]}},453:function(e,t,n){n.d(t,{gm:function(){return u}});var r=n(8402);n(1701);var o=r.createContext(void 0);function u(e){let t=r.useContext(o);return e||t||"ltr"}},7325:function(e,t,n){n.d(t,{XB:function(){return f}});var r,o=n(8402),u=n(6001),a=n(752),i=n(6299),c=n(8455),l=n(1701),s="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=o.forwardRef((e,t)=>{var n,f;let{disableOutsidePointerEvents:p=!1,onEscapeKeyDown:h,onPointerDownOutside:g,onFocusOutside:y,onInteractOutside:E,onDismiss:b,...w}=e,N=o.useContext(d),[C,S]=o.useState(null),L=null!==(f=null==C?void 0:C.ownerDocument)&&void 0!==f?f:null===(n=globalThis)||void 0===n?void 0:n.document,[,M]=o.useState({}),T=(0,i.e)(t,e=>S(e)),P=Array.from(N.layers),[O]=[...N.layersWithOutsidePointerEventsDisabled].slice(-1),R=P.indexOf(O),x=C?P.indexOf(C):-1,k=N.layersWithOutsidePointerEventsDisabled.size>0,A=x>=R,W=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,c.W)(e),u=o.useRef(!1),a=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!u.current){let t=function(){m("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",a.current),a.current=t,n.addEventListener("click",a.current,{once:!0})):t()}else n.removeEventListener("click",a.current);u.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",a.current)}},[n,r]),{onPointerDownCapture:()=>u.current=!0}}(e=>{let t=e.target,n=[...N.branches].some(e=>e.contains(t));!A||n||(null==g||g(e),null==E||E(e),e.defaultPrevented||null==b||b())},L),D=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,c.W)(e),u=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!u.current&&m("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>u.current=!0,onBlurCapture:()=>u.current=!1}}(e=>{let t=e.target;[...N.branches].some(e=>e.contains(t))||(null==y||y(e),null==E||E(e),e.defaultPrevented||null==b||b())},L);return!function(e,t=globalThis?.document){let n=(0,c.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{x!==N.layers.size-1||(null==h||h(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},L),o.useEffect(()=>{if(C)return p&&(0===N.layersWithOutsidePointerEventsDisabled.size&&(r=L.body.style.pointerEvents,L.body.style.pointerEvents="none"),N.layersWithOutsidePointerEventsDisabled.add(C)),N.layers.add(C),v(),()=>{p&&1===N.layersWithOutsidePointerEventsDisabled.size&&(L.body.style.pointerEvents=r)}},[C,L,p,N]),o.useEffect(()=>()=>{C&&(N.layers.delete(C),N.layersWithOutsidePointerEventsDisabled.delete(C),v())},[C,N]),o.useEffect(()=>{let e=()=>M({});return document.addEventListener(s,e),()=>document.removeEventListener(s,e)},[]),(0,l.jsx)(a.WV.div,{...w,ref:T,style:{pointerEvents:k?A?"auto":"none":void 0,...e.style},onFocusCapture:(0,u.M)(e.onFocusCapture,D.onFocusCapture),onBlurCapture:(0,u.M)(e.onBlurCapture,D.onBlurCapture),onPointerDownCapture:(0,u.M)(e.onPointerDownCapture,W.onPointerDownCapture)})});function v(){let e=new CustomEvent(s);document.dispatchEvent(e)}function m(e,t,n,r){let{discrete:o}=r,u=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&u.addEventListener(e,t,{once:!0}),o?(0,a.jH)(u,i):u.dispatchEvent(i)}f.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(d),r=o.useRef(null),u=(0,i.e)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(a.WV.div,{...e,ref:u})}).displayName="DismissableLayerBranch"},1161:function(e,t,n){n.d(t,{EW:function(){return u}});var r=n(8402),o=0;function u(){r.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:a()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:a()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function a(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},797:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(8402),u=n(6299),a=n(752),i=n(8455),c=n(1701),l="focusScope.autoFocusOnMount",s="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},f=o.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:g,...y}=e,[E,b]=o.useState(null),w=(0,i.W)(f),N=(0,i.W)(g),C=o.useRef(null),S=(0,u.e)(t,e=>b(e)),L=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(r){let e=function(e){if(L.paused||!E)return;let t=e.target;E.contains(t)?C.current=t:p(C.current,{select:!0})},t=function(e){if(L.paused||!E)return;let t=e.relatedTarget;null===t||E.contains(t)||p(C.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&p(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,E,L.paused]),o.useEffect(()=>{if(E){h.add(L);let e=document.activeElement;if(!E.contains(e)){let t=new CustomEvent(l,d);E.addEventListener(l,w),E.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(p(r,{select:t}),document.activeElement!==n)return}(v(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&p(E))}return()=>{E.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(s,d);E.addEventListener(s,N),E.dispatchEvent(t),t.defaultPrevented||p(null!=e?e:document.body,{select:!0}),E.removeEventListener(s,N),h.remove(L)},0)}}},[E,w,N,L]);let M=o.useCallback(e=>{if(!n&&!r||L.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,u]=function(e){let t=v(e);return[m(t,e),m(t.reverse(),e)]}(t);r&&u?e.shiftKey||o!==u?e.shiftKey&&o===r&&(e.preventDefault(),n&&p(u,{select:!0})):(e.preventDefault(),n&&p(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,L.paused]);return(0,c.jsx)(a.WV.div,{tabIndex:-1,...y,ref:S,onKeyDown:M})});function v(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function m(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function p(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}f.displayName="FocusScope";var h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=g(r,e)).unshift(e)},remove(e){var t;null===(t=(r=g(r,e))[0])||void 0===t||t.resume()}});function g(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},308:function(e,t,n){n.d(t,{M:function(){return c}});var r,o=n(8402),u=n(4970),a=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),i=0;function c(e){let[t,n]=o.useState(a());return(0,u.b)(()=>{e||n(e=>e??String(i++))},[e]),e||(t?`radix-${t}`:"")}},6406:function(e,t,n){n.d(t,{h:function(){return c}});var r=n(8402),o=n(5761),u=n(752),a=n(4970),i=n(1701),c=r.forwardRef((e,t)=>{var n,c;let{container:l,...s}=e,[d,f]=r.useState(!1);(0,a.b)(()=>f(!0),[]);let v=l||d&&(null===(c=globalThis)||void 0===c?void 0:null===(n=c.document)||void 0===n?void 0:n.body);return v?o.createPortal((0,i.jsx)(u.WV.div,{...s,ref:t}),v):null});c.displayName="Portal"},2404:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(8402),o=n(5761),u=n(6299),a=n(4970),i=e=>{var t,n;let i,l;let{present:s,children:d}=e,f=function(e){var t,n;let[u,i]=r.useState(),l=r.useRef({}),s=r.useRef(e),d=r.useRef("none"),[f,v]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=c(l.current);d.current="mounted"===f?e:"none"},[f]),(0,a.b)(()=>{let t=l.current,n=s.current;if(n!==e){let r=d.current,o=c(t);e?v("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?v("UNMOUNT"):n&&r!==o?v("ANIMATION_OUT"):v("UNMOUNT"),s.current=e}},[e,v]),(0,a.b)(()=>{if(u){let e=e=>{let t=c(l.current).includes(e.animationName);e.target===u&&t&&o.flushSync(()=>v("ANIMATION_END"))},t=e=>{e.target===u&&(d.current=c(l.current))};return u.addEventListener("animationstart",t),u.addEventListener("animationcancel",e),u.addEventListener("animationend",e),()=>{u.removeEventListener("animationstart",t),u.removeEventListener("animationcancel",e),u.removeEventListener("animationend",e)}}v("ANIMATION_END")},[u,v]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:r.useCallback(e=>{e&&(l.current=getComputedStyle(e)),i(e)},[])}}(s),v="function"==typeof d?d({present:f.isPresent}):r.Children.only(d),m=(0,u.e)(f.ref,(i=null===(t=Object.getOwnPropertyDescriptor(v.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in i&&i.isReactWarning?v.ref:(i=null===(n=Object.getOwnPropertyDescriptor(v,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in i&&i.isReactWarning?v.props.ref:v.props.ref||v.ref);return"function"==typeof d||f.isPresent?r.cloneElement(v,{ref:m}):null};function c(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},8455:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(8402);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},5835:function(e,t,n){n.d(t,{T:function(){return u}});var r=n(8402),o=n(8455);function u({prop:e,defaultProp:t,onChange:n=()=>{}}){let[u,a]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[u]=n,a=r.useRef(u),i=(0,o.W)(t);return r.useEffect(()=>{a.current!==u&&(i(u),a.current=u)},[u,a,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,c=i?e:u,l=(0,o.W)(n);return[c,r.useCallback(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else a(t)},[i,e,a,l])]}},4970:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(8402),o=globalThis?.document?r.useLayoutEffect:()=>{}}}]);