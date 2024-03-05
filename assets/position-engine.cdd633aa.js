import{c as I}from"./selection.4f7a2eae.js";import{r as j,U as Y,ab as S,Y as N,ac as $,w as W,o as Q,K,g as U,ad as X,ae as L,af as D}from"./index.d4fcaa5c.js";import{p as q}from"./use-timeout.eb49d9bc.js";import{a as F}from"./scroll.8f8aa5ca.js";const it={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function nt({showing:t,avoidEmit:l,configureAnchorEl:i}){const{props:e,proxy:a,emit:s}=U(),o=j(null);let c=null;function d(n){return o.value===null?!1:n===void 0||n.touches===void 0||n.touches.length<=1}const u={};i===void 0&&(Object.assign(u,{hide(n){a.hide(n)},toggle(n){a.toggle(n),n.qAnchorHandled=!0},toggleKey(n){Y(n,13)===!0&&u.toggle(n)},contextClick(n){a.hide(n),S(n),N(()=>{a.show(n),n.qAnchorHandled=!0})},prevent:S,mobileTouch(n){if(u.mobileCleanup(n),d(n)!==!0)return;a.hide(n),o.value.classList.add("non-selectable");const r=n.target;$(u,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{c=null,a.show(n),n.qAnchorHandled=!0},300)},mobileCleanup(n){o.value.classList.remove("non-selectable"),c!==null&&(clearTimeout(c),c=null),t.value===!0&&n!==void 0&&I()}}),i=function(n=e.contextMenu){if(e.noParentEvent===!0||o.value===null)return;let r;n===!0?a.$q.platform.is.mobile===!0?r=[[o.value,"touchstart","mobileTouch","passive"]]:r=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:r=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],$(u,"anchor",r)});function f(){X(u,"anchor")}function H(n){for(o.value=n;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;i()}function p(){if(e.target===!1||e.target===""||a.$el.parentNode===null)o.value=null;else if(e.target===!0)H(a.$el.parentNode);else{let n=e.target;if(typeof e.target=="string")try{n=document.querySelector(e.target)}catch{n=void 0}n!=null?(o.value=n.$el||n,i()):(o.value=null,console.error(`Anchor: target "${e.target}" not found`))}}return W(()=>e.contextMenu,n=>{o.value!==null&&(f(),i(n))}),W(()=>e.target,()=>{o.value!==null&&f(),p()}),W(()=>e.noParentEvent,n=>{o.value!==null&&(n===!0?f():i())}),Q(()=>{p(),l!==!0&&e.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),K(()=>{c!==null&&clearTimeout(c),f()}),{anchorEl:o,canShow:d,anchorEvents:u}}function ot(t,l){const i=j(null);let e;function a(c,d){const u=`${d!==void 0?"add":"remove"}EventListener`,f=d!==void 0?d:e;c!==window&&c[u]("scroll",f,L.passive),window[u]("scroll",f,L.passive),e=d}function s(){i.value!==null&&(a(i.value),i.value=null)}const o=W(()=>t.noParentEvent,()=>{i.value!==null&&(s(),l())});return K(o),{localScrollTarget:i,unconfigureScrollTarget:s,changeScrollEvent:a}}const{notPassiveCapture:E}=L,g=[];function M(t){const l=t.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let i=q.length-1;for(;i>=0;){const e=q[i].$;if(e.type.name==="QTooltip"){i--;continue}if(e.type.name!=="QDialog")break;if(e.props.seamless!==!0)return;i--}for(let e=g.length-1;e>=0;e--){const a=g[e];if((a.anchorEl.value===null||a.anchorEl.value.contains(l)===!1)&&(l===document.body||a.innerRef.value!==null&&a.innerRef.value.contains(l)===!1))t.qClickOutside=!0,a.onClickOutside(t);else return}}function at(t){g.push(t),g.length===1&&(document.addEventListener("mousedown",M,E),document.addEventListener("touchstart",M,E))}function rt(t){const l=g.findIndex(i=>i===t);l>-1&&(g.splice(l,1),g.length===0&&(document.removeEventListener("mousedown",M,E),document.removeEventListener("touchstart",M,E)))}let A,B;function ut(t){const l=t.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function st(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const z={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{z[`${t}#ltr`]=t,z[`${t}#rtl`]=t});function ct(t,l){const i=t.split(" ");return{vertical:i[0],horizontal:z[`${i[1]}#${l===!0?"rtl":"ltr"}`]}}function G(t,l){let{top:i,left:e,right:a,bottom:s,width:o,height:c}=t.getBoundingClientRect();return l!==void 0&&(i-=l[1],e-=l[0],s+=l[1],a+=l[0],o+=l[0],c+=l[1]),{top:i,bottom:s,height:c,left:e,right:a,width:o,middle:e+(a-e)/2,center:i+(s-i)/2}}function J(t,l,i){let{top:e,left:a}=t.getBoundingClientRect();return e+=l.top,a+=l.left,i!==void 0&&(e+=i[1],a+=i[0]),{top:e,bottom:e+1,height:1,left:a,right:a+1,width:1,middle:a,center:e}}function Z(t,l){return{top:0,center:l/2,bottom:l,left:0,middle:t/2,right:t}}function P(t,l,i,e){return{top:t[i.vertical]-l[e.vertical],left:t[i.horizontal]-l[e.horizontal]}}function _(t,l=0){if(t.targetEl===null||t.anchorEl===null||l>5)return;if(t.targetEl.offsetHeight===0||t.targetEl.offsetWidth===0){setTimeout(()=>{_(t,l+1)},10);return}const{targetEl:i,offset:e,anchorEl:a,anchorOrigin:s,selfOrigin:o,absoluteOffset:c,fit:d,cover:u,maxHeight:f,maxWidth:H}=t;if(D.is.ios===!0&&window.visualViewport!==void 0){const y=document.body.style,{offsetLeft:b,offsetTop:v}=window.visualViewport;b!==A&&(y.setProperty("--q-pe-left",b+"px"),A=b),v!==B&&(y.setProperty("--q-pe-top",v+"px"),B=v)}const{scrollLeft:p,scrollTop:n}=i,r=c===void 0?G(a,u===!0?[0,0]:e):J(a,c,e);Object.assign(i.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:H||"100vw",maxHeight:f||"100vh",visibility:"visible"});const{offsetWidth:k,offsetHeight:T}=i,{elWidth:R,elHeight:V}=d===!0||u===!0?{elWidth:Math.max(r.width,k),elHeight:u===!0?Math.max(r.height,T):T}:{elWidth:k,elHeight:T};let m={maxWidth:H,maxHeight:f};(d===!0||u===!0)&&(m.minWidth=r.width+"px",u===!0&&(m.minHeight=r.height+"px")),Object.assign(i.style,m);const x=Z(R,V);let h=P(r,x,s,o);if(c===void 0||e===void 0)C(h,r,x,s,o);else{const{top:y,left:b}=h;C(h,r,x,s,o);let v=!1;if(h.top!==y){v=!0;const w=2*e[1];r.center=r.top-=w,r.bottom-=w+2}if(h.left!==b){v=!0;const w=2*e[0];r.middle=r.left-=w,r.right-=w+2}v===!0&&(h=P(r,x,s,o),C(h,r,x,s,o))}m={top:h.top+"px",left:h.left+"px"},h.maxHeight!==void 0&&(m.maxHeight=h.maxHeight+"px",r.height>h.maxHeight&&(m.minHeight=m.maxHeight)),h.maxWidth!==void 0&&(m.maxWidth=h.maxWidth+"px",r.width>h.maxWidth&&(m.minWidth=m.maxWidth)),Object.assign(i.style,m),i.scrollTop!==n&&(i.scrollTop=n),i.scrollLeft!==p&&(i.scrollLeft=p)}function C(t,l,i,e,a){const s=i.bottom,o=i.right,c=F(),d=window.innerHeight-c,u=document.body.clientWidth;if(t.top<0||t.top+s>d)if(a.vertical==="center")t.top=l[e.vertical]>d/2?Math.max(0,d-s):0,t.maxHeight=Math.min(s,d);else if(l[e.vertical]>d/2){const f=Math.min(d,e.vertical==="center"?l.center:e.vertical===a.vertical?l.bottom:l.top);t.maxHeight=Math.min(s,f),t.top=Math.max(0,f-s)}else t.top=Math.max(0,e.vertical==="center"?l.center:e.vertical===a.vertical?l.top:l.bottom),t.maxHeight=Math.min(s,d-t.top);if(t.left<0||t.left+o>u)if(t.maxWidth=Math.min(o,u),a.horizontal==="middle")t.left=l[e.horizontal]>u/2?Math.max(0,u-o):0;else if(l[e.horizontal]>u/2){const f=Math.min(u,e.horizontal==="middle"?l.middle:e.horizontal===a.horizontal?l.right:l.left);t.maxWidth=Math.min(o,f),t.left=Math.max(0,f-t.maxWidth)}else t.left=Math.max(0,e.horizontal==="middle"?l.middle:e.horizontal===a.horizontal?l.left:l.right),t.maxWidth=Math.min(o,u-t.left)}export{st as a,ot as b,nt as c,at as d,ct as p,rt as r,_ as s,it as u,ut as v};
