import{Q as c}from"./QChip.be58aadb.js";import{d as h,aV as _,u as v,aa as f,r as n,m as w,v as y,q as e,f as o,s as d,p as g,Q as k}from"./index.c9b9189a.js";import{Q as q}from"./QInput.3e4025f5.js";import{Q as T}from"./use-dark.0cd2c71f.js";import{u as V}from"./account.0291d88f.js";const Q={class:"row"},j={class:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"},E=e("p",{class:"text-h4 text-bold q-px-md"},"Join our newsletter \u{1F389}",-1),N=e("p",{class:"text-h4 text-subtitle1 q-px-md"},"Stay informed and gain exclusive access to the latest opportunities in the dynamic world of real estate. Join our newsletter to receive curated updates on premium houses for sale, exciting investment prospects, and valuable insights into the property market. Whether you're looking to rent a dream home, buy a new property, or explore strategic selling options, our newsletter delivers the key information you need. Subscribe now for expert advice, market trends, and exclusive offers \u2013 because your next home adventure starts with staying in the know!",-1),R={class:"q-my-xl"},F={class:"q-px-md q-mb-md"},I={class:"q-px-md q-mb-md"},S={class:"row q-px-md"},B={class:"col-xl-6 col-lg-6 col-md-8 col-sm-12 col-xs-12"},C={class:"col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"},H=h({__name:"NewsLetter",props:{objectType:{default:"PROPERTY"},objectId:{default:""},subscriptionTypes:{default:()=>[]}},setup(u){const l=u;_();const p=v();f();const r=V(),s=n(""),i=n(!1),m=a=>{const t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return i.value=t.test(a),a==""?!0:t.test(a)||"Enter a valid email address"};async function b(){await r.subscribeToNewsLetter({objectType:l.objectType,objectId:l.objectId,email:s.value,subscriptionTypes:l.subscriptionTypes}),r.getResponse.code==0&&(s.value="",await p.push("/subscription"))}return(a,t)=>(w(),y("div",Q,[e("div",j,[E,N,e("div",R,[e("div",F,[o(c,{color:"blue-1",label:"1",class:"text-bold"}),d(" Get more discount ")]),e("div",I,[o(c,{color:"pink-1",label:"2",class:"text-bold"}),d(" Explore our handpicked selection of stunning homes available for sale or rent. ")])]),e("div",S,[e("div",B,[o(q,{rounded:"",outlined:"",clearable:"",label:"Enter your email",modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=x=>s.value=x),color:"purple",rules:[m]},{append:g(()=>[o(k,{disable:s.value==""||s.value==null||!i.value,color:"purple",round:"",icon:"arrow_forward",onClick:b},null,8,["disable"])]),_:1},8,["modelValue","rules"])])])]),e("div",C,[o(T,{src:"https://chisfis-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSVG-subcribe2.3bac6033.png&w=3840&q=75"})])]))}});export{H as _};
