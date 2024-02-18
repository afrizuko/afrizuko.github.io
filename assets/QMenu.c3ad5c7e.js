import{k as ae,r as w,c as u,w as M,a2 as ne,h as A,P as se,p as ue,g as ie,t as le,a3 as re,X as ce}from"./index.d76c9739.js";import{u as fe,v as D,a as de,b as ve,c as ge,r as R,s as me,p as H,d as he}from"./position-engine.c5d572f0.js";import{u as Pe,d as ye,a as ke,e as Te,b as Ce,f as Se,c as xe,g as be,h as Oe}from"./use-timeout.da5e732b.js";import{u as qe,a as Be}from"./use-dark.0ffe31d1.js";import{a as Ee}from"./scroll.a12159aa.js";import{b as Fe,r as we,c as K,d as Me}from"./use-prevent-scroll.3d256b66.js";import{a as Ae}from"./focus-manager.b507780d.js";var je=ae({name:"QMenu",inheritAttrs:!1,props:{...fe,...Pe,...qe,...ye,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:D},self:{type:String,validator:D},offset:{type:Array,validator:de},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ke,"click","escapeKey"],setup(t,{slots:Q,emit:c,attrs:d}){let n=null,f,i,v;const k=ie(),{proxy:g}=k,{$q:o}=g,a=w(null),s=w(!1),W=u(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),_=Be(t,o),{registerTick:j,removeTick:I}=Te(),{registerTimeout:T}=Ce(),{transitionProps:L,transitionStyle:U}=Se(t),{localScrollTarget:C,changeScrollEvent:X,unconfigureScrollTarget:$}=ve(t,E),{anchorEl:l,canShow:z}=ge({showing:s}),{hide:S}=xe({showing:s,canShow:z,handleShow:Y,handleHide:Z,hideOnRouteChange:W,processOnMount:!0}),{showPortal:x,hidePortal:b,renderPortal:G}=be(k,a,ee,"menu"),m={anchorEl:l,innerRef:a,onClickOutside(e){if(t.persistent!==!0&&s.value===!0)return S(e),(e.type==="touchstart"||e.target.classList.contains("q-dialog__backdrop"))&&ce(e),!0}},O=u(()=>H(t.anchor||(t.cover===!0?"center middle":"bottom start"),o.lang.rtl)),J=u(()=>t.cover===!0?O.value:H(t.self||"top start",o.lang.rtl)),N=u(()=>(t.square===!0?" q-menu--square":"")+(_.value===!0?" q-menu--dark q-dark":"")),V=u(()=>t.autoClose===!0?{onClick:p}:{}),q=u(()=>s.value===!0&&t.persistent!==!0);M(q,e=>{e===!0?(Me(P),he(m)):(K(P),R(m))});function h(){Ae(()=>{let e=a.value;e&&e.contains(document.activeElement)!==!0&&(e=e.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||e.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||e.querySelector("[autofocus], [data-autofocus]")||e,e.focus({preventScroll:!0}))})}function Y(e){if(n=t.noRefocus===!1?document.activeElement:null,Fe(F),x(),E(),f=void 0,e!==void 0&&(t.touchPosition||t.contextMenu)){const y=ne(e);if(y.left!==void 0){const{top:te,left:oe}=l.value.getBoundingClientRect();f={left:y.left-oe,top:y.top-te}}}i===void 0&&(i=M(()=>o.screen.width+"|"+o.screen.height+"|"+t.self+"|"+t.anchor+"|"+o.lang.rtl,r)),t.noFocus!==!0&&document.activeElement.blur(),j(()=>{r(),t.noFocus!==!0&&h()}),T(()=>{o.platform.is.ios===!0&&(v=t.autoClose,a.value.click()),r(),x(!0),c("show",e)},t.transitionDuration)}function Z(e){I(),b(),B(!0),n!==null&&(e===void 0||e.qClickOutside!==!0)&&(((e&&e.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),T(()=>{b(!0),c("hide",e)},t.transitionDuration)}function B(e){f=void 0,i!==void 0&&(i(),i=void 0),(e===!0||s.value===!0)&&(we(F),$(),R(m),K(P)),e!==!0&&(n=null)}function E(){(l.value!==null||t.scrollTarget!==void 0)&&(C.value=Ee(l.value,t.scrollTarget),X(C.value,r))}function p(e){v!==!0?(Oe(g,e),c("click",e)):v=!1}function F(e){q.value===!0&&t.noFocus!==!0&&re(a.value,e.target)!==!0&&h()}function P(e){c("escapeKey"),S(e)}function r(){me({targetEl:a.value,offset:t.offset,anchorEl:l.value,anchorOrigin:O.value,selfOrigin:J.value,absoluteOffset:f,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function ee(){return A(se,L.value,()=>s.value===!0?A("div",{role:"menu",...d,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+N.value,d.class],style:[d.style,U.value],...V.value},le(Q.default)):null)}return ue(B),Object.assign(g,{focus:h,updatePosition:r}),G}});export{je as Q};
