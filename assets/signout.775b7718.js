import{Q as l}from"./QItemLabel.0bbf96b3.js";import{h as e,G as m,aZ as c,a_ as p,d as u,u as f,k as d,o as h,m as g,n as y,p as r,q as i,f as s,s as n}from"./index.d4fcaa5c.js";import{Q as w}from"./QTooltip.81459f7a.js";import{Q as x}from"./QPage.19e41d9f.js";import"./position-engine.cdd633aa.js";import"./selection.4f7a2eae.js";import"./use-timeout.eb49d9bc.js";import"./focus-manager.b507780d.js";import"./scroll.8f8aa5ca.js";const _=[e("rect",{x:"0",y:"0",width:"100",height:"100",fill:"none"}),e("g",{transform:"translate(25 25)"},[e("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.9"},[e("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),e("g",{transform:"translate(75 25)"},[e("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.8"},[e("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.1s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),e("g",{transform:"translate(25 75)"},[e("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.7"},[e("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.3s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])]),e("g",{transform:"translate(75 75)"},[e("rect",{x:"-20",y:"-20",width:"40",height:"40",fill:"currentColor",opacity:"0.6"},[e("animateTransform",{attributeName:"transform",type:"scale",from:"1.5",to:"1",repeatCount:"indefinite",begin:"0.2s",dur:"1s",calcMode:"spline",keySplines:"0.2 0.8 0.2 0.8",keyTimes:"0;1"})])])];var C=m({name:"QSpinnerCube",props:c,setup(o){const{cSize:t,classes:a}=p(o);return()=>e("svg",{class:a.value,width:t.value,height:t.value,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},_)}});const b={class:"column q-pa-lg"},z=u({__name:"signout",setup(o){const t=f(),a=d();return h(async()=>{setTimeout(async()=>{a.logout(),await t.push("/")},2e3)}),(k,v)=>(g(),y(x,{class:"amber-1 window-height window-width row justify-center items-center"},{default:r(()=>[i("div",b,[s(l,{class:"text-h6"},{default:r(()=>[n("Signing out please wait..")]),_:1}),i("div",null,[s(C,{color:"warning",size:"6em",class:"q-mt-md q-ml-xl"}),s(w,{offset:[0,8]},{default:r(()=>[n("Please wait..")]),_:1})])])]),_:1}))}});export{z as default};