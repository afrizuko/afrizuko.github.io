import{_ as y,d as Q,aS as C,r as p,c as k,o as w,m as s,v as l,f as t,Q as _,q as m,F as u,x as f,p as i,A as h,n as q}from"./index.afa77c1b.js";import{Q as b}from"./QImg.1e914581.js";import{a as V,Q as S}from"./QCarousel.f7223c54.js";import{Q as B}from"./QCardSection.db396dc7.js";import{Q as I}from"./QCard.b892fc5b.js";import{Q as P}from"./QDialog.775a595e.js";import{C as D}from"./ClosePopup.715646eb.js";import{u as z}from"./property.a34edba4.js";import"./use-panel.e28d4fc3.js";import"./touch.3df10340.js";import"./selection.d9f58328.js";import"./use-cache.b0833c75.js";import"./use-dark.10fc72ca.js";import"./use-prevent-scroll.b523fe28.js";import"./scroll.d01e842c.js";import"./use-timeout.78df29b7.js";import"./focus-manager.b507780d.js";const F={class:"q-px-md q-mx-lg"},$={class:"q-col-gutter-md row items-center"},j={class:"magnifier-icon col-sm-4 col-xs-12 col-lg-4 col-md-4"},G={class:"q-pa-md q-gutter-sm"},N=Q({__name:"listing-stay-gallery",setup(U){const v=C(),d=z(),n=p(1),r=p(!1),c=k(()=>{var a;return(a=d.getProperties[0])==null?void 0:a.images});function g(a){n.value=a,r.value=!r.value}async function x(){await d.findPropertyDetails({ids:[v.params.id]})}return w(()=>{x()}),(a,o)=>(s(),l(u,null,[t(_,{flat:"",icon:"arrow_back",class:"q-ma-md",onClick:o[0]||(o[0]=e=>a.$router.back())}),m("div",F,[m("div",$,[(s(!0),l(u,null,f(c.value,e=>(s(),l("div",j,[t(b,{onClick:A=>g(e.id),src:e.uri,height:"250px",class:"custom-rounded-image"},null,8,["onClick","src"])]))),256))])]),m("div",G,[t(P,{modelValue:r.value,"onUpdate:modelValue":o[2]||(o[2]=e=>r.value=e),persistent:"",maximized:r.value},{default:i(()=>[t(I,{class:"text-white"},{default:i(()=>[t(B,{class:"bg-black q-py-none"},{default:i(()=>[h(t(_,{dense:"",flat:"",icon:"close",color:"white"},null,512),[[D]]),t(V,{swipeable:"",animated:"",modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=e=>n.value=e),thumbnails:"","control-type":"unelevated","control-color":"black",arrows:"",height:"789px",class:"q-mx-xl","transition-prev":"jump-right","transition-next":"jump-left"},{default:i(()=>[(s(!0),l(u,null,f(c.value,e=>(s(),q(S,{name:e.id,"img-src":e.uri},null,8,["name","img-src"]))),256))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])])],64))}});var re=y(N,[["__scopeId","data-v-a2ba6dac"]]);export{re as default};