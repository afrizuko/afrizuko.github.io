import{Q as w}from"./QImg.1e914581.js";import{G as H,c as _,h as S,C as K,_ as R,d as D,r as i,aa as Y,k as J,m as y,v as X,f as e,p as l,n as k,t as Z,y as M,q as s,Q as C,s as I,D as ee,E as oe}from"./index.afa77c1b.js";import{a as se,Q as m}from"./QTabs.3ff985ec.js";import{Q as p}from"./QSeparator.5de6012a.js";import{Q as x}from"./QInput.e1517c7a.js";import{Q as F}from"./QForm.a99f594a.js";import{Q as te,a as f}from"./QTabPanels.d9d3863a.js";import{Q as P}from"./QChip.ff0dc821.js";import{a as le,b as ae,c as ne}from"./use-checkbox.fe818aed.js";import{Q as re}from"./QSelect.2b8530a6.js";import{Q as ie}from"./QSplitter.1c815110.js";import{_ as de}from"./default-avatar-icon.adf04dc9.js";import{u as ue}from"./account.f4b8aa4b.js";import{u as ce}from"./images.2e1d4624.js";import"./uid.42677368.js";import"./QResizeObserver.847b957b.js";import"./use-timeout.78df29b7.js";import"./focus-manager.b507780d.js";import"./rtl.b51694b1.js";import"./use-dark.10fc72ca.js";import"./use-form.7716cef3.js";import"./use-panel.e28d4fc3.js";import"./touch.3df10340.js";import"./selection.d9f58328.js";import"./use-cache.b0833c75.js";import"./QItem.1b60d339.js";import"./QItemSection.3da2b6ed.js";import"./QItemLabel.9e006f21.js";import"./QMenu.13801fd7.js";import"./position-engine.f6e4fe48.js";import"./scroll.d01e842c.js";import"./use-prevent-scroll.b523fe28.js";import"./QDialog.775a595e.js";import"./format.c860d4da.js";import"./TouchPan.f1b2c9f8.js";var U=H({name:"QToggle",props:{...le,icon:String,iconColor:String},emits:ae,setup(r){function u(v,c){const g=_(()=>(v.value===!0?r.checkedIcon:c.value===!0?r.indeterminateIcon:r.uncheckedIcon)||r.icon),h=_(()=>v.value===!0?r.iconColor:null);return()=>[S("div",{class:"q-toggle__track"}),S("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},g.value!==void 0?[S(K,{name:g.value,color:h.value})]:void 0)]}return ne("toggle",u)}});const d=r=>(ee("data-v-4ba66a45"),r=r(),oe(),r),me=d(()=>s("div",{class:"text-teal q-mt-sm"},"Kaddu Samuel",-1)),pe=d(()=>s("div",{class:"text-h5 q-mb-md"},"Update Your Password",-1)),ve={class:"column",style:{width:"50%"}},ge={class:"col-sm-12 col-xs-12 col-lg-6 col-md-12"},we={class:"col-sm-12 col-xs-12 col-lg-6 col-md-12"},fe={class:"col-sm-12 col-xs-12 col-lg-6 col-md-12"},_e={class:"row"},he=d(()=>s("div",{class:"text-h5 q-mb-md"},"Notification Settings",-1)),be=d(()=>s("div",{class:"text-h5 q-mb-md"},"Payment Methods",-1)),ye=d(()=>s("div",{class:"column",style:{width:"50%"}},[s("p",{class:"text-subtitle1"},'When you receive a payment for a reservation, we call that payment to you a "payout." Our secure payment system supports several payout methods, which can be set up below. Go to FAQ.'),s("p",{class:"text-subtitle1"}," To get paid, you need to set up a payout method Airbnb releases payouts about 24 hours after a guest\u2019s scheduled check-in time. The time it takes for the funds to appear in your account depends on your payout method. Learn more ")],-1)),xe={class:"row"},Ve=d(()=>s("div",{class:"text-h5 q-mb-md"},"Social Integrations",-1)),qe={class:"row"},Qe={class:"col-sm-12 col-xs-12 col-lg-4 col-md-12"},Se={class:"col-sm-12 col-xs-12 col-lg-2 col-md-12"},ke={class:"row"},Ce={class:"col-sm-12 col-xs-12 col-lg-4 col-md-12"},Ie={class:"col-sm-12 col-xs-12 col-lg-2 col-md-12"},Pe={class:"row"},Ue={class:"col-sm-12 col-xs-12 col-lg-4 col-md-12"},Ae={class:"col-sm-12 col-xs-12 col-lg-2 col-md-12"},Te=d(()=>s("div",{class:"text-h5 q-mb-md"},"Suspend Account",-1)),Ne={class:"row"},Be={class:"col-sm-12 col-xs-12 col-lg-6 col-md-12"},Ge={class:"col-sm-12 col-xs-12 col-lg-12 col-md-12 q-my-md"},Le={class:"col-sm-12 col-xs-12 col-lg-12 col-md-12 q-my-md"},Me={class:"row"},Fe=D({__name:"settings",setup(r){const u=i("password"),v=i(20),c=i(""),g=i(!1),h=i(!1),A=i(!1),V=Y(),T=ue(),q=J();ce();const Q=_(()=>T.getAvatar),b=_(()=>T.getUser),n=i({email:q.currentUser().sub,password:null,currentPassword:null,confirm:null}),N=_(()=>q.getResponse);function B(a){var o;(o=c.value)!=null&&o.includes(a)||(c.value!=""?c.value+=`,${a}`:c.value=a)}const W=a=>a&&a.length!=0||"Current is required",j=a=>a&&a.length!=0||"Password is required",E=a=>a&&a.length!=0||"Confirm is required";function O(){return n.value.password!==n.value.currentPassword}function $(){return n.value.password===n.value.confirm}async function z(){if(O()){if(!$()){V.showAlert("Password don't match",99,"");return}}else{V.showAlert("New password cannot be the same as old password",99,"");return}await q.changePassword(n.value),V.showAlert(N.value.message,N.value.code,"")}return(a,o)=>(y(),X("div",null,[e(ie,{modelValue:v.value,"onUpdate:modelValue":o[12]||(o[12]=t=>v.value=t)},{before:l(()=>[e(se,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=t=>u.value=t),vertical:"","active-color":"warning","indicator-color":"transparent"},{default:l(()=>[e(m,{name:"password",class:"text-white q-ma-md"},{default:l(()=>{var t;return[((t=Q.value)==null?void 0:t.length)>0?(y(),k(M,{key:0,size:"100px"},{default:l(()=>{var G,L;return[(G=Q.value[0])!=null&&G.uri?(y(),k(w,{key:0,src:(L=Q.value[0])==null?void 0:L.uri},null,8,["src"])):Z("",!0)]}),_:1})):(y(),k(M,{key:1,size:"100px"},{default:l(()=>[e(w,{src:de})]),_:1})),me]}),_:1}),e(p,{inset:"",class:"q-my-md"}),e(m,{class:"q-tab-content-left","no-caps":"",name:"password",label:"Password Manager"}),e(m,{class:"q-tab-content-left","no-caps":"",name:"notifications",label:"Notification Settings"}),e(m,{class:"q-tab-content-left","no-caps":"",name:"billing",label:"Payment/Billing Plans"}),e(m,{class:"q-tab-content-left","no-caps":"",name:"social",label:"Social Media Integrations"}),e(m,{class:"q-tab-content-left","no-caps":"",name:"suspend",label:"Suspend Account"})]),_:1},8,["modelValue"])]),after:l(()=>[e(te,{modelValue:u.value,"onUpdate:modelValue":o[11]||(o[11]=t=>u.value=t),animated:"",swipeable:"",vertical:"","transition-prev":"jump-up","transition-next":"jump-up"},{default:l(()=>[e(f,{name:"password"},{default:l(()=>[pe,e(p,{class:"q-my-md",style:{width:"8%"}}),e(F,{onSubmit:z},{default:l(()=>[s("div",ve,[s("div",ge,[e(x,{outlined:"",rounded:"",clearable:"",color:"grey",label:"Current password",type:"password",modelValue:n.value.currentPassword,"onUpdate:modelValue":o[1]||(o[1]=t=>n.value.currentPassword=t),rules:[W]},null,8,["modelValue","rules"])]),s("div",we,[e(x,{outlined:"",rounded:"",clearable:"",color:"grey",label:"New password",type:"password",modelValue:n.value.password,"onUpdate:modelValue":o[2]||(o[2]=t=>n.value.password=t),rules:[j]},null,8,["modelValue","rules"])]),s("div",fe,[e(x,{outlined:"",rounded:"",clearable:"",color:"grey",label:"Confirm password",type:"password",modelValue:n.value.confirm,"onUpdate:modelValue":o[3]||(o[3]=t=>n.value.confirm=t),rules:[E]},null,8,["modelValue","rules"])])]),s("div",_e,[e(C,{rounded:"","no-caps":"",label:"Update password",color:"warning",type:"submit"})])]),_:1})]),_:1}),e(f,{name:"notifications"},{default:l(()=>[he,e(p,{class:"q-my-md",style:{width:"8%"}})]),_:1}),e(f,{name:"billing"},{default:l(()=>[be,e(p,{class:"q-my-md",style:{width:"8%"}}),e(F,{onSubmit:a.submit},{default:l(()=>[ye,s("div",xe,[e(C,{rounded:"","no-caps":"",label:"Add payout mothod",color:"warning",type:"submit",class:"q-my-lg"})])]),_:1},8,["onSubmit"])]),_:1}),e(f,{name:"social"},{default:l(()=>[Ve,e(p,{class:"q-my-md",style:{width:"8%"}}),s("div",qe,[s("div",Qe,[e(P,null,{default:l(()=>[e(w,{width:"22px",src:"https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",class:"q-mx-sm"}),I(" Login with Google ")]),_:1})]),s("div",Se,[e(U,{modelValue:g.value,"onUpdate:modelValue":o[4]||(o[4]=t=>g.value=t),color:"warning"},null,8,["modelValue"])])]),s("div",ke,[s("div",Ce,[e(P,null,{default:l(()=>[e(w,{width:"20px",src:"https://upload.wikimedia.org/wikipedia/commons/c/ce/Twitter_Logo.png",class:"q-mx-sm"}),I(" Login with twitter ")]),_:1})]),s("div",Ie,[e(U,{modelValue:A.value,"onUpdate:modelValue":o[5]||(o[5]=t=>A.value=t),color:"warning"},null,8,["modelValue"])])]),s("div",Pe,[s("div",Ue,[e(P,null,{default:l(()=>[e(w,{width:"20px",src:"https://st2.depositphotos.com/1144386/7770/v/450/depositphotos_77705008-stock-illustration-original-round-blue-facebook-web.jpg",class:"q-mx-sm"}),I(" Login with Facebook ")]),_:1})]),s("div",Ae,[e(U,{modelValue:h.value,"onUpdate:modelValue":o[6]||(o[6]=t=>h.value=t),color:"warning"},null,8,["modelValue"])])])]),_:1}),e(f,{name:"suspend"},{default:l(()=>[Te,e(p,{class:"q-my-md",style:{width:"8%"}}),s("div",Ne,[s("div",Be,[s("div",Ge,[e(re,{outlined:"",rounded:"",clearable:"",color:"grey",label:"Choose the most appropriate reason","option-value":"value","option-label":"name","map-options":"",options:["I am no longer using the platform and would like to close my account.","I have privacy concerns and prefer to close my account for security reasons.","I am experiencing issues or difficulties using the platform","Other"],"emit-value":"",modelValue:b.value.gender,"onUpdate:modelValue":[o[7]||(o[7]=t=>b.value.gender=t),o[8]||(o[8]=t=>B("user.gender"))]},null,8,["options","modelValue"])]),s("div",Le,[e(x,{type:"textarea",outlined:"",rounded:"",clearable:"",color:"grey",label:"How can we improve your experience  at Ppangisa Inc",modelValue:b.value.narration,"onUpdate:modelValue":o[9]||(o[9]=t=>b.value.narration=t),onKeyup:o[10]||(o[10]=t=>B("user.narration"))},null,8,["modelValue"])]),s("div",Me,[e(C,{rounded:"","no-caps":"",label:"Suspend",color:"warning"})])])])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]))}});var xo=R(Fe,[["__scopeId","data-v-4ba66a45"]]);export{xo as default};
