import{_ as b,d as k,aV as q,r as g,c as w,o as I,y as r,E as l,f as t,Q as v,B as d,F as c,G as y,J as x,A as i,q as h,z as V}from"./index.96ab6253.js";import{Q as P}from"./use-dark.5a00adcc.js";import{a as B,Q as E}from"./QCarousel.e6faeef8.js";import{Q as S}from"./QCardSection.8230dc74.js";import{Q as T}from"./QCard.23a727a3.js";import{Q as j}from"./QDialog.71175988.js";import{C as z}from"./ClosePopup.6952802a.js";import{u as F}from"./property.998a257c.js";import"./use-panel.18a10359.js";import"./touch.3df10340.js";import"./selection.b5d3b61f.js";import"./use-cache.b0833c75.js";import"./use-prevent-scroll.3b1a38b5.js";import"./scroll.1f003313.js";import"./use-timeout.7f6ec0c7.js";import"./focus-manager.b507780d.js";const G={class:"q-px-md q-mx-lg"},R={class:"q-col-gutter-md row items-center"},$={class:"magnifier-icon col-sm-4 col-xs-12 col-lg-4 col-md-4"},A={class:"q-pa-md q-gutter-sm"},D=k({__name:"listing-stay-gallery",setup(L){const n=q(),p=F(),m=g(1),o=g(!1),f=w(()=>p.getImages);function Q(s){m.value=s,o.value=!o.value}async function C(){let s={objectType:"PROPERTY",objectIds:[n.params.id],fileType:"FILE_TYPE_IMAGE"};await p.findPropertyImages(s)}return I(()=>{C()}),(s,a)=>{var _;return r(),l(c,null,[t(v,{flat:"",icon:"arrow_back",class:"q-ma-md",onClick:a[0]||(a[0]=e=>s.$router.back())}),d("div",G,[d("div",R,[(r(!0),l(c,null,y((_=f.value[x(n).params.id])==null?void 0:_.files,e=>(r(),l("div",$,[t(P,{onClick:u=>Q(e.id),src:e.uri,height:"250px",class:"custom-rounded-image"},null,8,["onClick","src"])]))),256))])]),d("div",A,[t(j,{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=e=>o.value=e),persistent:"",maximized:o.value},{default:i(()=>[t(T,{class:"text-white"},{default:i(()=>[t(S,{class:"bg-black q-py-none"},{default:i(()=>[h(t(v,{dense:"",flat:"",icon:"close",color:"white"},null,512),[[z]]),t(B,{swipeable:"",animated:"",modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=e=>m.value=e),thumbnails:"","control-type":"unelevated","control-color":"black",arrows:"",height:"789px",class:"q-mx-xl","transition-prev":"jump-right","transition-next":"jump-left"},{default:i(()=>{var e;return[(r(!0),l(c,null,y((e=f.value[x(n).params.id])==null?void 0:e.files,u=>(r(),V(E,{name:u.id,"img-src":u.uri},null,8,["name","img-src"]))),256))]}),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])])],64)}}});var re=b(D,[["__scopeId","data-v-0fd845b2"]]);export{re as default};
