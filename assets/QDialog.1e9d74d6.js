import{k as te,r as T,c,w as R,p as oe,h as d,P as O,t as ie,g as ne,a3 as ae}from"./index.40958af9.js";import{u as le,r as K,c as L,a as se,b as ue,d as re}from"./use-prevent-scroll.caf2d2b0.js";import{u as ce,d as de,a as fe,b as me,e as ge,f as ve,g as he,c as xe}from"./use-timeout.fb1ed49c.js";import{a as ye}from"./focus-manager.b507780d.js";let v=0;const be={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},$={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Te=te({name:"QDialog",inheritAttrs:!1,props:{...ce,...de,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...fe,"shake","click","escapeKey"],setup(e,{slots:A,emit:s,attrs:E}){const h=ne(),i=T(null),l=T(!1),u=T(!1);let n=null,a=null,f,x;const S=c(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:_}=se(),{registerTimeout:C}=me(),{registerTick:I,removeTick:F}=ge(),{transitionProps:j,transitionStyle:z}=ve(e,()=>$[e.position][0],()=>$[e.position][1]),{showPortal:D,hidePortal:H,portalIsAccessible:p,renderPortal:Q}=he(h,i,ee,"dialog"),{hide:m}=xe({showing:l,hideOnRouteChange:S,handleShow:N,handleHide:X,processOnMount:!0}),{addToHistory:V,removeFromHistory:W}=le(l,m,S),U=c(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${be[e.position]}`+(u.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),g=c(()=>l.value===!0&&e.seamless!==!0),G=c(()=>e.autoClose===!0?{onClick:Y}:{}),J=c(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${g.value===!0?"modal":"seamless"}`,E.class]);R(()=>e.maximized,t=>{l.value===!0&&q(t)}),R(g,t=>{_(t),t===!0?(ue(k),re(b)):(K(k),L(b))});function N(t){V(),a=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,q(e.maximized),D(),u.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),I(r)):F(),C(()=>{if(h.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:o,bottom:w}=document.activeElement.getBoundingClientRect(),{innerHeight:M}=window,B=window.visualViewport!==void 0?window.visualViewport.height:M;o>0&&w>B/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-B,w>=M?1/0:Math.ceil(document.scrollingElement.scrollTop+w-B/2))),document.activeElement.scrollIntoView()}x=!0,i.value.click(),x=!1}D(!0),u.value=!1,s("show",t)},e.transitionDuration)}function X(t){F(),W(),P(!0),u.value=!0,H(),a!==null&&(((t&&t.type.indexOf("key")===0?a.closest('[tabindex]:not([tabindex^="-"])'):void 0)||a).focus(),a=null),C(()=>{H(!0),u.value=!1,s("hide",t)},e.transitionDuration)}function r(t){ye(()=>{let o=i.value;o===null||o.contains(document.activeElement)===!0||(o=(t!==""?o.querySelector(t):null)||o.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.querySelector("[autofocus], [data-autofocus]")||o,o.focus({preventScroll:!0}))})}function y(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):r(),s("shake");const o=i.value;o!==null&&(o.classList.remove("q-animate--scale"),o.classList.add("q-animate--scale"),n!==null&&clearTimeout(n),n=setTimeout(()=>{n=null,i.value!==null&&(o.classList.remove("q-animate--scale"),r())},170))}function b(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&y():(s("escapeKey"),m()))}function P(t){n!==null&&(clearTimeout(n),n=null),(t===!0||l.value===!0)&&(q(!1),e.seamless!==!0&&(_(!1),K(k),L(b))),t!==!0&&(a=null)}function q(t){t===!0?f!==!0&&(v<1&&document.body.classList.add("q-body--dialog"),v++,f=!0):f===!0&&(v<2&&document.body.classList.remove("q-body--dialog"),v--,f=!1)}function Y(t){x!==!0&&(m(t),s("click",t))}function Z(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?m(t):e.noShake!==!0&&y()}function k(t){e.allowFocusOutside!==!0&&p.value===!0&&ae(i.value,t.target)!==!0&&r('[tabindex]:not([tabindex="-1"])')}Object.assign(h.proxy,{focus:r,shake:y,__updateRefocusTarget(t){a=t||null}}),oe(P);function ee(){return d("div",{role:"dialog","aria-modal":g.value===!0?"true":"false",...E,class:J.value},[d(O,{name:"q-transition--fade",appear:!0},()=>g.value===!0?d("div",{class:"q-dialog__backdrop fixed-full",style:z.value,"aria-hidden":"true",tabindex:-1,onClick:Z}):null),d(O,j.value,()=>l.value===!0?d("div",{ref:i,class:U.value,style:z.value,tabindex:-1,...G.value},ie(A.default)):null)])}return Q}});export{Te as Q};
