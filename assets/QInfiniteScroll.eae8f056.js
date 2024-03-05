import{G as O,r as d,c as N,w as c,a5 as R,a4 as U,K as V,o as _,L as j,h as A,H as F,ae as K,Y as B,b5 as M,aG as W,g as Y}from"./index.afa77c1b.js";import{e as g,c as T,s as x,g as $}from"./scroll.d01e842c.js";const{passive:s}=K;var X=O({name:"QInfiniteScroll",props:{offset:{type:Number,default:500},debounce:{type:[String,Number],default:100},scrollTarget:{default:void 0},initialIndex:Number,disable:Boolean,reverse:Boolean},emits:["load"],setup(l,{slots:I,emit:q}){const r=d(!1),n=d(!0),f=d(null),h=d(null);let v=l.initialIndex||0,e,a;const D=N(()=>"q-infinite-scroll__loading"+(r.value===!0?"":" invisible"));function o(){if(l.disable===!0||r.value===!0||n.value===!1)return;const t=g(e),i=T(e),u=M(e);l.reverse===!1?Math.round(i+u+l.offset)>=Math.round(t)&&m():Math.round(i)<=l.offset&&m()}function m(){if(l.disable===!0||r.value===!0||n.value===!1)return;v++,r.value=!0;const t=g(e);q("load",v,i=>{n.value===!0&&(r.value=!1,B(()=>{if(l.reverse===!0){const u=g(e),C=T(e),G=u-t;x(e,C+G)}i===!0?b():f.value&&f.value.closest("body")&&a()}))})}function Q(){v=0}function P(){n.value===!1&&(n.value=!0,e.addEventListener("scroll",a,s)),o()}function b(){n.value===!0&&(n.value=!1,r.value=!1,e.removeEventListener("scroll",a,s),a!==void 0&&a.cancel!==void 0&&a.cancel())}function y(){if(e&&n.value===!0&&e.removeEventListener("scroll",a,s),e=$(f.value,l.scrollTarget),n.value===!0){if(e.addEventListener("scroll",a,s),l.reverse===!0){const t=g(e),i=M(e);x(e,t-i)}o()}}function k(t){v=t}function H(t){t=parseInt(t,10);const i=a;a=t<=0?o:W(o,isNaN(t)===!0?100:t),e&&n.value===!0&&(i!==void 0&&e.removeEventListener("scroll",i,s),e.addEventListener("scroll",a,s))}function S(t){if(E.value===!0){if(h.value===null){t!==!0&&B(()=>{S(!0)});return}const i=`${r.value===!0?"un":""}pauseAnimations`;Array.from(h.value.getElementsByTagName("svg")).forEach(u=>{u[i]()})}}const E=N(()=>l.disable!==!0&&n.value===!0);c([r,E],()=>{S()}),c(()=>l.disable,t=>{t===!0?b():P()}),c(()=>l.reverse,()=>{r.value===!1&&n.value===!0&&o()}),c(()=>l.scrollTarget,y),c(()=>l.debounce,H);let L=!1;R(()=>{L!==!1&&e&&x(e,L)}),U(()=>{L=e?T(e):!1}),V(()=>{n.value===!0&&e.removeEventListener("scroll",a,s)}),_(()=>{H(l.debounce),y(),r.value===!1&&S()});const w=Y();return Object.assign(w.proxy,{poll:()=>{a!==void 0&&a()},trigger:m,stop:b,reset:Q,resume:P,setIndex:k}),()=>{const t=j(I.default,[]);return E.value===!0&&t[l.reverse===!1?"push":"unshift"](A("div",{ref:h,class:D.value},F(I.loading))),A("div",{class:"q-infinite-scroll",ref:f},t)}}});export{X as Q};
