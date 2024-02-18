import{k as R,r as d,c as A,w as c,aa as U,a9 as V,p as _,o as j,N as F,h as B,t as G,a0 as W,n as H,b5 as M,aG as $,g as z}from"./index.96ab6253.js";import{e as g,c as T,s as x,a as J}from"./scroll.1f003313.js";const{passive:s}=W;var Y=R({name:"QInfiniteScroll",props:{offset:{type:Number,default:500},debounce:{type:[String,Number],default:100},scrollTarget:{default:void 0},initialIndex:Number,disable:Boolean,reverse:Boolean},emits:["load"],setup(l,{slots:I,emit:k}){const r=d(!1),n=d(!0),f=d(null),h=d(null);let v=l.initialIndex||0,e,a;const q=A(()=>"q-infinite-scroll__loading"+(r.value===!0?"":" invisible"));function o(){if(l.disable===!0||r.value===!0||n.value===!1)return;const t=g(e),i=T(e),u=M(e);l.reverse===!1?Math.round(i+u+l.offset)>=Math.round(t)&&m():Math.round(i)<=l.offset&&m()}function m(){if(l.disable===!0||r.value===!0||n.value===!1)return;v++,r.value=!0;const t=g(e);k("load",v,i=>{n.value===!0&&(r.value=!1,H(()=>{if(l.reverse===!0){const u=g(e),C=T(e),O=u-t;x(e,C+O)}i===!0?b():f.value&&f.value.closest("body")&&a()}))})}function D(){v=0}function N(){n.value===!1&&(n.value=!0,e.addEventListener("scroll",a,s)),o()}function b(){n.value===!0&&(n.value=!1,r.value=!1,e.removeEventListener("scroll",a,s),a!==void 0&&a.cancel!==void 0&&a.cancel())}function P(){if(e&&n.value===!0&&e.removeEventListener("scroll",a,s),e=J(f.value,l.scrollTarget),n.value===!0){if(e.addEventListener("scroll",a,s),l.reverse===!0){const t=g(e),i=M(e);x(e,t-i)}o()}}function Q(t){v=t}function y(t){t=parseInt(t,10);const i=a;a=t<=0?o:$(o,isNaN(t)===!0?100:t),e&&n.value===!0&&(i!==void 0&&e.removeEventListener("scroll",i,s),e.addEventListener("scroll",a,s))}function S(t){if(E.value===!0){if(h.value===null){t!==!0&&H(()=>{S(!0)});return}const i=`${r.value===!0?"un":""}pauseAnimations`;Array.from(h.value.getElementsByTagName("svg")).forEach(u=>{u[i]()})}}const E=A(()=>l.disable!==!0&&n.value===!0);c([r,E],()=>{S()}),c(()=>l.disable,t=>{t===!0?b():N()}),c(()=>l.reverse,()=>{r.value===!1&&n.value===!0&&o()}),c(()=>l.scrollTarget,P),c(()=>l.debounce,y);let L=!1;U(()=>{L!==!1&&e&&x(e,L)}),V(()=>{L=e?T(e):!1}),_(()=>{n.value===!0&&e.removeEventListener("scroll",a,s)}),j(()=>{y(l.debounce),P(),r.value===!1&&S()});const w=z();return Object.assign(w.proxy,{poll:()=>{a!==void 0&&a()},trigger:m,stop:b,reset:D,resume:N,setIndex:Q}),()=>{const t=F(I.default,[]);return E.value===!0&&t[l.reverse===!1?"push":"unshift"](B("div",{ref:h,class:q.value},G(I.loading))),B("div",{class:"q-infinite-scroll",ref:f},t)}}});export{Y as Q};