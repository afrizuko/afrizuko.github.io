import{W as x,a1 as l,p as H,ap as g,a0 as s,X as C,aq as k}from"./index.40958af9.js";import{b as V,c as K,h as W}from"./scroll.cbdd7d7a.js";const c=[];let u;function X(e){u=e.keyCode===27}function Y(){u===!0&&(u=!1)}function z(e){u===!0&&(u=!1,x(e,27)===!0&&c[c.length-1](e))}function P(e){window[e]("keydown",X),window[e]("blur",Y),window[e]("keyup",z),u=!1}function O(e){l.is.desktop===!0&&(c.push(e),c.length===1&&P("addEventListener"))}function U(e){const o=c.indexOf(e);o>-1&&(c.splice(o,1),c.length===0&&P("removeEventListener"))}const a=[];function q(e){a[a.length-1](e)}function _(e){l.is.desktop===!0&&(a.push(e),a.length===1&&document.body.addEventListener("focusin",q))}function D(e){const o=a.indexOf(e);o>-1&&(a.splice(o,1),a.length===0&&document.body.removeEventListener("focusin",q))}function R(e,o,n){let t;function i(){t!==void 0&&(g.remove(t),t=void 0)}return H(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){t={condition:()=>n.value===!0,handler:o},g.add(t)}}}let f=0,m,h,p,y=!1,b,L,E,d=null;function A(e){F(e)&&C(e)}function F(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=k(e),n=e.shiftKey&&!e.deltaX,t=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=n||t?e.deltaY:e.deltaX;for(let w=0;w<o.length;w++){const r=o[w];if(W(r,t))return t?i<0&&r.scrollTop===0?!0:i>0&&r.scrollTop+r.clientHeight===r.scrollHeight:i<0&&r.scrollLeft===0?!0:i>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function T(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function v(e){y!==!0&&(y=!0,requestAnimationFrame(()=>{y=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:t}=document.scrollingElement;(p===void 0||o!==window.innerHeight)&&(p=n-o,document.scrollingElement.scrollTop=t),t>p&&(document.scrollingElement.scrollTop-=Math.ceil((t-p)/8))}))}function S(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:t,overflowX:i}=window.getComputedStyle(o);m=V(window),h=K(window),b=o.style.left,L=o.style.top,E=window.location.href,o.style.left=`-${m}px`,o.style.top=`-${h}px`,i!=="hidden"&&(i==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),t!=="hidden"&&(t==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,l.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",v,s.passiveCapture),window.visualViewport.addEventListener("scroll",v,s.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",T,s.passiveCapture))}l.is.desktop===!0&&l.is.mac===!0&&window[`${e}EventListener`]("wheel",A,s.notPassive),e==="remove"&&(l.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",v,s.passiveCapture),window.visualViewport.removeEventListener("scroll",v,s.passiveCapture)):window.removeEventListener("scroll",T,s.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=b,o.style.top=L,window.location.href===E&&window.scrollTo(m,h),p=void 0)}function M(e){let o="add";if(e===!0){if(f++,d!==null){clearTimeout(d),d=null;return}if(f>1)return}else{if(f===0||(f--,f>0))return;if(o="remove",l.is.ios===!0&&l.is.nativeMobile===!0){d!==null&&clearTimeout(d),d=setTimeout(()=>{S(o),d=null},100);return}}S(o)}function j(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,M(o))}}}export{j as a,_ as b,U as c,O as d,D as r,R as u};
