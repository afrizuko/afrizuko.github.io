import{Q as l}from"./QItemLabel.9e006f21.js";import{h as e,G as m,aW as c,aX as p,d as u,u as f,k as d,o as h,m as g,n as y,p as r,q as i,f as s,s as n}from"./index.afa77c1b.js";import{Q as w}from"./QTooltip.f9d21354.js";import{Q as x}from"./QPage.425ea88a.js";import"./position-engine.f6e4fe48.js";import"./selection.d9f58328.js";import"./use-timeout.78df29b7.js";import"./focus-manager.b507780d.js";import"./scroll.d01e842c.js";const C=[e("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none"}),e("g",{transform:"translate(25 25)"},[e("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.9"},[e("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),e("g",{transform:"translate(75 25)"},[e("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.8"},[e("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.1s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),e("g",{transform:"translate(25 75)"},[e("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.7"},[e("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.3s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),e("g",{transform:"translate(75 75)"},[e("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.6"},[e("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.2s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])])];var _=m({name:"QSpinnerCube",props:c,setup(o){const{cSize:t,classes:a}=p(o);return()=>e("svg",{class:a.value,width:t.value,height:t.value,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},C)}});const b={class:"column q-pa-lg"},z=u({__name:"signout",setup(o){const t=f(),a=d();return h(async()=>{setTimeout(async()=>{a.logout(),await t.push("/")},2e3)}),(k,v)=>(g(),y(x,{class:"amber-1 window-height window-width row justify-center items-center"},{default:r(()=>[i("div",b,[s(l,{class:"text-h6"},{default:r(()=>[n("Signing out please wait..")]),_:1}),i("div",null,[s(_,{color:"warning",size:"6em",class:"q-mt-md q-ml-xl"}),s(w,{offset:[0,8]},{default:r(()=>[n("Please wait..")]),_:1})])])]),_:1}))}});export{z as default};