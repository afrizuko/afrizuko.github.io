import{k as ee,r as O,c as f,w as k,p as C,$ as E,Z as x,h as H,P as te,g as oe,t as ae,X as ne}from"./index.7946e59e.js";import{u as ie,v as A,a as le,b as se,c as re,r as q,s as ue,p as D,d as ce}from"./position-engine.c6d63749.js";import{u as de,e as fe,a as ve,f as he,b as me,g as ge,c as ye,h as Te,d as M}from"./use-timeout.ea9f6b03.js";import{a as pe}from"./scroll.2482edc2.js";var Oe=ee({name:"QTooltip",inheritAttrs:!1,props:{...ie,...de,...fe,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:le},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...ve],setup(e,{slots:j,emit:y,attrs:v}){let i,l;const h=oe(),{proxy:{$q:o}}=h,s=O(null),c=O(!1),L=f(()=>D(e.anchor,o.lang.rtl)),Q=f(()=>D(e.self,o.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:N,removeTick:R}=he(),{registerTimeout:d}=me(),{transitionProps:_,transitionStyle:$}=ge(e),{localScrollTarget:T,changeScrollEvent:B,unconfigureScrollTarget:I}=se(e,S),{anchorEl:a,canShow:U,anchorEvents:r}=re({showing:c,configureAnchorEl:J}),{show:V,hide:m}=ye({showing:c,canShow:U,handleShow:Z,handleHide:z,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:F,delayHide:G});const{showPortal:p,hidePortal:b,renderPortal:X}=Te(h,s,Y,"tooltip");if(o.platform.is.mobile===!0){const t={anchorEl:a,innerRef:s,onClickOutside(n){return m(n),n.target.classList.contains("q-dialog__backdrop")&&ne(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);k(g,n=>{(n===!0?ce:q)(t)}),C(()=>{q(t)})}function Z(t){p(),N(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),S()}),i===void 0&&(i=k(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,u)),d(()=>{p(!0),y("show",t)},e.transitionDuration)}function z(t){R(),b(),P(),d(()=>{b(!0),y("hide",t)},e.transitionDuration)}function P(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),I(),E(r,"tooltipTemp")}function u(){ue({targetEl:s.value,offset:e.offset,anchorEl:a.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function F(t){if(o.platform.is.mobile===!0){M(),document.body.classList.add("non-selectable");const g=a.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[g,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{V(t)},e.delay)}function G(t){o.platform.is.mobile===!0&&(E(r,"tooltipTemp"),M(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{m(t)},e.hideDelay)}function J(){if(e.noParentEvent===!0||a.value===null)return;const t=o.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function S(){if(a.value!==null||e.scrollTarget!==void 0){T.value=pe(a.value,e.scrollTarget);const t=e.noParentEvent===!0?u:m;B(T.value,t)}}function K(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,$.value],role:"tooltip"},ae(j.default)):null}function Y(){return H(te,_.value,K)}return C(P),Object.assign(h.proxy,{updatePosition:u}),X}});export{Oe as Q};
