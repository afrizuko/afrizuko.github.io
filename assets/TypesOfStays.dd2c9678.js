import{Q as O}from"./QImg.baa48024.js";import{a as A,Q as E}from"./QCarousel.51b1a666.js";import{d as I,r as x,c as i,o as k,m as u,v as c,f as b,p as d,q as a,F as B,x as R,A as q,ay as F,n as L,z as P,t as V}from"./index.2b9e9d53.js";import{u as G}from"./home.2a27d196.js";const N={class:"q-pa-md text-center bg-grey-2"},Q=a("div",null,[a("h1",{class:"text-weight-bold text-h3 q-mb-sm"},"Explore by types of stays"),a("h2",{class:"text-subtitle1 q-mb-sm"},"Explore houses based on types of stays")],-1),j={class:"row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap"},$={key:0,class:"absolute-bottom text-h6"},z={class:"text-h6"},D={class:"text-subtitle2"},U=I({__name:"TypesOfStays",setup(M){const r=G(),m=x(1),y=i(()=>r.getTypesOfStay),f=i(()=>y.value.map(s=>s.id)),S=i(()=>r.getSearchResultsImages),t=i(()=>s=>{const o=y.value.filter(l=>l.propertyType===s),e=o.length;return{propertyType:s,totalCount:e,matchingProperties:o}});async function T(){await r.findPropertyByTypeOfStay({propertyType:["BANGALOW","FLAT","STORAGE"],bedRooms:null,bathRooms:null,noOfAdults:null,noOfChildren:null,noOfInfants:null,ids:[],maxPrice:null,minPrice:null,priceRange:null,onSale:!1,propertyKind:null,location:null,skipCount:0,nextPageToken:"",pageSize:10})}async function w(){f.value.length>0&&await r.findFilteredPropertyImages({objectType:"PROPERTY",objectIds:f.value,fileType:"FILE_TYPE_IMAGE"},"")}const C=x([{name:"BANGALOW"},{name:"FLAT"},{name:"STORAGE"}]);return k(async()=>{await T(),await w()}),(s,o)=>(u(),c("div",N,[Q,b(A,{modelValue:m.value,"onUpdate:modelValue":o[0]||(o[0]=e=>m.value=e),"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"",navigation:"",padding:"",arrows:"",height:"auto",class:"bg-grey-2 rounded-borders"},{default:d(()=>[b(E,{name:1,class:"column no-wrap"},{default:d(()=>[a("div",j,[(u(!0),c(B,null,R(C.value,e=>{var l,g,h,v;return q((u(),L(O,{class:"cursor-pointer",ratio:16/9,style:{width:"300px"},src:(v=(h=S.value[(g=(l=t.value(e.name))==null?void 0:l.matchingProperties[0])==null?void 0:g.id])==null?void 0:h.files[0])==null?void 0:v.uri,onClick:p=>{var n,_;return s.$router.push(`/listing-stay-map/${(_=(n=t.value(e.name))==null?void 0:n.matchingProperties[0])==null?void 0:_.id}`)}},{default:d(()=>{var p,n;return[t.value(e.name).totalCount>0?(u(),c("div",$,[a("div",z,P((n=(p=t.value(e.name))==null?void 0:p.matchingProperties[0])==null?void 0:n.propertyType),1),a("div",D,P(t.value(e.name).totalCount)+" Properties",1)])):V("",!0)]}),_:2},1032,["src","onClick"])),[[F,t.value(e.name).totalCount>0]])}),256))])]),_:1})]),_:1},8,["modelValue"])]))}});export{U as _};
