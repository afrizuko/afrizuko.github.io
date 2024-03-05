import{G as ae,r as w,c as u,w as M,W as ne,h as A,N as se,K as ue,g as ie,H as le,X as re,V as ce}from"./index.2b9e9d53.js";import{u as fe,v as D,a as de,b as ve,c as ge,r as R,s as me,p as H,d as he}from"./position-engine.2ebdcb7d.js";import{u as ye,a as Pe,b as Te,c as ke,d as Ce,e as Se,f as xe,g as be,h as Oe}from"./use-timeout.798beefb.js";import{u as qe,a as Be}from"./use-dark.bf37dfcc.js";import{g as Ee}from"./scroll.65b5ece7.js";import{a as Fe,r as we,b as K,c as Me}from"./use-prevent-scroll.9db61bd9.js";import{a as Ae}from"./focus-manager.b507780d.js";var je=ae({name:"QMenu",inheritAttrs:!1,props:{...fe,...ye,...qe,...Pe,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:D},self:{type:String,validator:D},offset:{type:Array,validator:de},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Te,"click","escapeKey"],setup(t,{slots:W,emit:c,attrs:d}){let n=null,f,i,v;const T=ie(),{proxy:g}=T,{$q:o}=g,a=w(null),s=w(!1),Q=u(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),_=Be(t,o),{registerTick:j,removeTick:G}=ke(),{registerTimeout:k}=Ce(),{transitionProps:I,transitionStyle:L}=Se(t),{localScrollTarget:C,changeScrollEvent:N,unconfigureScrollTarget:U}=ve(t,E),{anchorEl:l,canShow:V}=ge({showing:s}),{hide:S}=xe({showing:s,canShow:V,handleShow:Y,handleHide:Z,hideOnRouteChange:Q,processOnMount:!0}),{showPortal:x,hidePortal:b,renderPortal:X}=be(T,a,ee,"menu"),m={anchorEl:l,innerRef:a,onClickOutside(e){if(t.persistent!==!0&&s.value===!0)return S(e),(e.type==="touchstart"||e.target.classList.contains("q-dialog__backdrop"))&&ce(e),!0}},O=u(()=>H(t.anchor||(t.cover===!0?"center middle":"bottom start"),o.lang.rtl)),$=u(()=>t.cover===!0?O.value:H(t.self||"top start",o.lang.rtl)),z=u(()=>(t.square===!0?" q-menu--square":"")+(_.value===!0?" q-menu--dark q-dark":"")),J=u(()=>t.autoClose===!0?{onClick:p}:{}),q=u(()=>s.value===!0&&t.persistent!==!0);M(q,e=>{e===!0?(Me(y),he(m)):(K(y),R(m))});function h(){Ae(()=>{let e=a.value;e&&e.contains(document.activeElement)!==!0&&(e=e.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||e.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||e.querySelector("[autofocus], [data-autofocus]")||e,e.focus({preventScroll:!0}))})}function Y(e){if(n=t.noRefocus===!1?document.activeElement:null,Fe(F),x(),E(),f=void 0,e!==void 0&&(t.touchPosition||t.contextMenu)){const P=ne(e);if(P.left!==void 0){const{top:te,left:oe}=l.value.getBoundingClientRect();f={left:P.left-oe,top:P.top-te}}}i===void 0&&(i=M(()=>o.screen.width+"|"+o.screen.height+"|"+t.self+"|"+t.anchor+"|"+o.lang.rtl,r)),t.noFocus!==!0&&document.activeElement.blur(),j(()=>{r(),t.noFocus!==!0&&h()}),k(()=>{o.platform.is.ios===!0&&(v=t.autoClose,a.value.click()),r(),x(!0),c("show",e)},t.transitionDuration)}function Z(e){G(),b(),B(!0),n!==null&&(e===void 0||e.qClickOutside!==!0)&&(((e&&e.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),k(()=>{b(!0),c("hide",e)},t.transitionDuration)}function B(e){f=void 0,i!==void 0&&(i(),i=void 0),(e===!0||s.value===!0)&&(we(F),U(),R(m),K(y)),e!==!0&&(n=null)}function E(){(l.value!==null||t.scrollTarget!==void 0)&&(C.value=Ee(l.value,t.scrollTarget),N(C.value,r))}function p(e){v!==!0?(Oe(g,e),c("click",e)):v=!1}function F(e){q.value===!0&&t.noFocus!==!0&&re(a.value,e.target)!==!0&&h()}function y(e){c("escapeKey"),S(e)}function r(){me({targetEl:a.value,offset:t.offset,anchorEl:l.value,anchorOrigin:O.value,selfOrigin:$.value,absoluteOffset:f,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function ee(){return A(se,I.value,()=>s.value===!0?A("div",{role:"menu",...d,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+z.value,d.class],style:[d.style,L.value],...J.value},le(W.default)):null)}return ue(B),Object.assign(g,{focus:h,updatePosition:r}),X}});export{je as Q};