import{_ as y,d as Q,aV as C,r as p,c as k,o as w,m as r,v as l,f as t,Q as _,q as m,F as u,x as f,p as i,A as h,n as q}from"./index.d4fcaa5c.js";import{Q as V}from"./use-dark.ea7b5f08.js";import{a as b,Q as B}from"./QCarousel.89e6b212.js";import{Q as S}from"./QCardSection.2abc04d4.js";import{Q as I}from"./QCard.37cd754e.js";import{Q as P}from"./QDialog.4e99e1ff.js";import{C as D}from"./ClosePopup.6be8d73a.js";import{u as z}from"./property.25ad4b63.js";import"./use-panel.3e4f306a.js";import"./touch.3df10340.js";import"./selection.4f7a2eae.js";import"./use-cache.b0833c75.js";import"./use-prevent-scroll.2fb9adf5.js";import"./scroll.8f8aa5ca.js";import"./use-timeout.eb49d9bc.js";import"./focus-manager.b507780d.js";const F={class:"q-px-md q-mx-lg"},$={class:"q-col-gutter-md row items-center"},j={class:"magnifier-icon col-sm-4 col-xs-12 col-lg-4 col-md-4"},G={class:"q-pa-md q-gutter-sm"},N=Q({__name:"listing-stay-gallery",setup(U){const v=C(),d=z(),n=p(1),s=p(!1),c=k(()=>{var a;return(a=d.getProperties[0])==null?void 0:a.images});function g(a){n.value=a,s.value=!s.value}async function x(){await d.findPropertyDetails({ids:v.params.id})}return w(()=>{x()}),(a,o)=>(r(),l(u,null,[t(_,{flat:"",icon:"arrow_back",class:"q-ma-md",onClick:o[0]||(o[0]=e=>a.$router.back())}),m("div",F,[m("div",$,[(r(!0),l(u,null,f(c.value,e=>(r(),l("div",j,[t(V,{onClick:A=>g(e.id),src:e.uri,height:"250px",class:"custom-rounded-image"},null,8,["onClick","src"])]))),256))])]),m("div",G,[t(P,{modelValue:s.value,"onUpdate:modelValue":o[2]||(o[2]=e=>s.value=e),persistent:"",maximized:s.value},{default:i(()=>[t(I,{class:"text-white"},{default:i(()=>[t(S,{class:"bg-black q-py-none"},{default:i(()=>[h(t(_,{dense:"",flat:"",icon:"close",color:"white"},null,512),[[D]]),t(b,{swipeable:"",animated:"",modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=e=>n.value=e),thumbnails:"","control-type":"unelevated","control-color":"black",arrows:"",height:"789px",class:"q-mx-xl","transition-prev":"jump-right","transition-next":"jump-left"},{default:i(()=>[(r(!0),l(u,null,f(c.value,e=>(r(),q(B,{name:e.id,"img-src":e.uri},null,8,["name","img-src"]))),256))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])])],64))}});var oe=y(N,[["__scopeId","data-v-064eaae8"]]);export{oe as default};
