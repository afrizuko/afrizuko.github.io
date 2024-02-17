import{ag as C,w as M,ah as H,o as Q,g as h,n as b,ai as v,r as S,a as U,aj as _,h as j,ak as E,al as G,am as I,c as A,a9 as F,p as k,an as q}from"./index.7946e59e.js";import{r as D,b as R}from"./focus-manager.b507780d.js";function W(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),C.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const L={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},z=["beforeShow","show","beforeHide","hide"];function J({showing:e,canShow:a,hideOnRouteChange:o,handleShow:n,handleHide:l,processOnMount:f}){const r=h(),{props:i,emit:s,proxy:p}=r;let u;function d(t){e.value===!0?P(t):m(t)}function m(t){if(i.disable===!0||t!==void 0&&t.qAnchorHandled===!0||a!==void 0&&a(t)!==!0)return;const c=i["onUpdate:modelValue"]!==void 0;c===!0&&(s("update:modelValue",!0),u=t,b(()=>{u===t&&(u=void 0)})),(i.modelValue===null||c===!1)&&T(t)}function T(t){e.value!==!0&&(e.value=!0,s("beforeShow",t),n!==void 0?n(t):s("show",t))}function P(t){if(i.disable===!0)return;const c=i["onUpdate:modelValue"]!==void 0;c===!0&&(s("update:modelValue",!1),u=t,b(()=>{u===t&&(u=void 0)})),(i.modelValue===null||c===!1)&&$(t)}function $(t){e.value!==!1&&(e.value=!1,s("beforeHide",t),l!==void 0?l(t):s("hide",t))}function V(t){i.disable===!0&&t===!0?i["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!1):t===!0!==e.value&&(t===!0?T:$)(u)}M(()=>i.modelValue,V),o!==void 0&&H(r)===!0&&M(()=>p.$route.fullPath,()=>{o.value===!0&&e.value===!0&&P()}),f===!0&&Q(()=>{V(i.modelValue)});const w={show:m,hide:P,toggle:d};return Object.assign(p,w),w}const g=[];function K(e){return g.find(a=>a.contentEl!==null&&a.contentEl.contains(e))}function N(e,a){do{if(e.$options.name==="QMenu"){if(e.hide(a),e.$props.separateClosePopup===!0)return v(e)}else if(e.__qPortal===!0){const o=v(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(a),o):e}e=v(e)}while(e!=null)}function X(e,a,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=N(e,a);continue}e.hide(a)}e=v(e)}}function O(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Y(e,a,o,n){const l=S(!1),f=S(!1);let r=null;const i={},s=n==="dialog"&&O(e);function p(d){if(d===!0){D(i),f.value=!0;return}f.value=!1,l.value===!1&&(s===!1&&r===null&&(r=G(!1,n)),l.value=!0,g.push(e.proxy),R(i))}function u(d){if(f.value=!1,d!==!0)return;D(i),l.value=!1;const m=g.indexOf(e.proxy);m!==-1&&g.splice(m,1),r!==null&&(I(r),r=null)}return U(()=>{u(!0)}),e.proxy.__qPortal=!0,_(e.proxy,"contentEl",()=>a.value),{showPortal:p,hidePortal:u,portalIsActive:l,portalIsAccessible:f,renderPortal:()=>s===!0?o():l.value===!0?[j(E,{to:r},o())]:void 0}}const Z={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function x(e,a=()=>{},o=()=>{}){return{transitionProps:A(()=>{const n=`q-transition--${e.transitionShow||a()}`,l=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${l}-leave-from`,leaveActiveClass:`${l}-leave-active`,leaveToClass:`${l}-leave-to`}}),transitionStyle:A(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function ee(){let e;const a=h();function o(){e=void 0}return F(o),k(o),{removeTick:o,registerTick(n){e=n,b(()=>{e===n&&(q(a)===!1&&e(),e=void 0)})}}}function te(){let e=null;const a=h();function o(){e!==null&&(clearTimeout(e),e=null)}return F(o),k(o),{removeTimeout:o,registerTimeout(n,l){o(),q(a)===!1&&(e=setTimeout(n,l))}}}export{z as a,te as b,J as c,W as d,Z as e,ee as f,x as g,Y as h,N as i,K as j,X as k,g as p,L as u};
