import{G as T,r as s,a6 as W,c as l,a7 as v,$ as F,w as E,a as M,M as O,h as a,g as B,J as G}from"./index.c9b9189a.js";import{Q as I}from"./QScrollObserver.02069142.js";import{Q as C}from"./QResizeObserver.140407bd.js";import{a as w}from"./scroll.e7d4b95b.js";var k=T({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:t=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(t.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(t,{slots:L,emit:h}){const{proxy:{$q:i}}=B(),m=s(null),u=s(i.screen.height),g=s(t.container===!0?0:i.screen.width),S=s({position:0,direction:"down",inflectionPoint:0}),d=s(0),n=s(W.value===!0?0:w()),R=l(()=>"q-layout q-layout--"+(t.container===!0?"containerized":"standard")),H=l(()=>t.container===!1?{minHeight:i.screen.height+"px"}:null),$=l(()=>n.value!==0?{[i.lang.rtl===!0?"left":"right"]:`${n.value}px`}:null),q=l(()=>n.value!==0?{[i.lang.rtl===!0?"right":"left"]:0,[i.lang.rtl===!0?"left":"right"]:`-${n.value}px`,width:`calc(100% + ${n.value}px)`}:null);function x(e){if(t.container===!0||document.qScrollPrevented!==!0){const o={position:e.position.top,direction:e.direction,directionChanged:e.directionChanged,inflectionPoint:e.inflectionPoint.top,delta:e.delta.top};S.value=o,t.onScroll!==void 0&&h("scroll",o)}}function P(e){const{height:o,width:r}=e;let c=!1;u.value!==o&&(c=!0,u.value=o,t.onScrollHeight!==void 0&&h("scrollHeight",o),b()),g.value!==r&&(c=!0,g.value=r),c===!0&&t.onResize!==void 0&&h("resize",e)}function Q({height:e}){d.value!==e&&(d.value=e,b())}function b(){if(t.container===!0){const e=u.value>d.value?w():0;n.value!==e&&(n.value=e)}}let f=null;const z={instances:{},view:l(()=>t.view),isContainer:l(()=>t.container),rootRef:m,height:u,containerHeight:d,scrollbarWidth:n,totalWidth:l(()=>g.value+n.value),rows:l(()=>{const e=t.view.toLowerCase().split(" ");return{top:e[0].split(""),middle:e[1].split(""),bottom:e[2].split("")}}),header:v({size:0,offset:0,space:!1}),right:v({size:300,offset:0,space:!1}),footer:v({size:0,offset:0,space:!1}),left:v({size:300,offset:0,space:!1}),scroll:S,animate(){f!==null?clearTimeout(f):document.body.classList.add("q-body--layout-animate"),f=setTimeout(()=>{f=null,document.body.classList.remove("q-body--layout-animate")},155)},update(e,o,r){z[e][o]=r}};if(F(G,z),w()>0){let r=function(){e=null,o.classList.remove("hide-scrollbar")},c=function(){if(e===null){if(o.scrollHeight>i.screen.height)return;o.classList.add("hide-scrollbar")}else clearTimeout(e);e=setTimeout(r,300)},y=function(p){e!==null&&p==="remove"&&(clearTimeout(e),r()),window[`${p}EventListener`]("resize",c)},e=null;const o=document.body;E(()=>t.container!==!0?"add":"remove",y),t.container!==!0&&y("add"),M(()=>{y("remove")})}return()=>{const e=O(L.default,[a(I,{onScroll:x}),a(C,{onResize:P})]),o=a("div",{class:R.value,style:H.value,ref:t.container===!0?void 0:m,tabindex:-1},e);return t.container===!0?a("div",{class:"q-layout-container overflow-hidden",ref:m},[a(C,{onResize:Q}),a("div",{class:"absolute-full",style:$.value},[a("div",{class:"scroll",style:q.value},[o])])]):o}}});export{k as Q};
