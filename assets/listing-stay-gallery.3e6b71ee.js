import{_ as y,d as Q,aS as C,r as p,c as k,o as w,m as s,v as l,f as t,Q as _,q as m,F as u,x as f,p as i,A as h,n as q}from"./index.d15ae335.js";import{Q as b}from"./QImg.84d4471d.js";import{a as V,Q as S}from"./QCarousel.e25d994c.js";import{Q as B}from"./QCardSection.223fe0f9.js";import{Q as I}from"./QCard.921cf3a5.js";import{Q as P}from"./QDialog.3910d311.js";import{C as D}from"./ClosePopup.327b7bc2.js";import{u as z}from"./property.b76182b5.js";import"./use-panel.383ca7c9.js";import"./touch.3df10340.js";import"./selection.e9d4ec32.js";import"./use-cache.b0833c75.js";import"./use-dark.50337edb.js";import"./use-prevent-scroll.c840e0db.js";import"./scroll.5d6e86f0.js";import"./use-timeout.4f8fcbe7.js";import"./focus-manager.b507780d.js";const F={class:"q-px-md q-mx-lg"},$={class:"q-col-gutter-md row items-center"},j={class:"magnifier-icon col-sm-4 col-xs-12 col-lg-4 col-md-4"},G={class:"q-pa-md q-gutter-sm"},N=Q({__name:"listing-stay-gallery",setup(U){const v=C(),d=z(),n=p(1),r=p(!1),c=k(()=>{var a;return(a=d.getProperties[0])==null?void 0:a.images});function g(a){n.value=a,r.value=!r.value}async function x(){await d.findPropertyDetails({ids:[v.params.id]})}return w(()=>{x()}),(a,o)=>(s(),l(u,null,[t(_,{flat:"",icon:"arrow_back",class:"q-ma-md",onClick:o[0]||(o[0]=e=>a.$router.back())}),m("div",F,[m("div",$,[(s(!0),l(u,null,f(c.value,e=>(s(),l("div",j,[t(b,{onClick:A=>g(e.id),src:e.uri,height:"250px",class:"custom-rounded-image"},null,8,["onClick","src"])]))),256))])]),m("div",G,[t(P,{modelValue:r.value,"onUpdate:modelValue":o[2]||(o[2]=e=>r.value=e),persistent:"",maximized:r.value},{default:i(()=>[t(I,{class:"text-white"},{default:i(()=>[t(B,{class:"bg-black q-py-none"},{default:i(()=>[h(t(_,{dense:"",flat:"",icon:"close",color:"white"},null,512),[[D]]),t(V,{swipeable:"",animated:"",modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=e=>n.value=e),thumbnails:"","control-type":"unelevated","control-color":"black",arrows:"",height:"789px",class:"q-mx-xl","transition-prev":"jump-right","transition-next":"jump-left"},{default:i(()=>[(s(!0),l(u,null,f(c.value,e=>(s(),q(S,{name:e.id,"img-src":e.uri},null,8,["name","img-src"]))),256))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])])],64))}});var re=y(N,[["__scopeId","data-v-a2ba6dac"]]);export{re as default};
