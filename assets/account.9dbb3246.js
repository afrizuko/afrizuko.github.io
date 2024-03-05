import{Q as L}from"./QSpace.6e7508ce.js";import{Q as M}from"./QCard.0fed3ede.js";import{u as D}from"./account.51897530.js";import{Q as R}from"./QSeparator.15efe275.js";import{Q as V}from"./QImg.baa48024.js";import{d as A,aa as T,k as B,r as K,c as b,o as P,m as p,v as h,f as s,q as t,n as g,p as d,y as w,s as j,t as y,Q,F as G,C as z,A as H,_ as S,D as J,E as O,K as W}from"./index.2b9e9d53.js";import{Q as m}from"./QInput.85566cf0.js";import{Q as X}from"./QSelect.ec6c1e87.js";import{Q as Z}from"./QDate.5fd11eba.js";import{Q as ee}from"./QPopupProxy.ef3325f9.js";import{C as oe}from"./ClosePopup.9681cba7.js";import{_ as te}from"./default-avatar-icon.adf04dc9.js";import{u as ae}from"./images.cb19a2bc.js";import"./use-dark.bf37dfcc.js";import"./uid.42677368.js";import"./focus-manager.b507780d.js";import"./use-form.22584187.js";import"./QChip.9ba799e8.js";import"./QItem.628b4530.js";import"./QItemSection.862d61a6.js";import"./QItemLabel.dac0b2c9.js";import"./QMenu.eba01a8e.js";import"./position-engine.2ebdcb7d.js";import"./selection.bcc42b1d.js";import"./use-timeout.798beefb.js";import"./scroll.65b5ece7.js";import"./use-prevent-scroll.9db61bd9.js";import"./QDialog.b59e58e3.js";import"./rtl.b51694b1.js";import"./format.c860d4da.js";import"./use-cache.b0833c75.js";const C=c=>(J("data-v-5f8b8c8f"),c=c(),O(),c),le=C(()=>t("div",{class:"row"},[t("div",{class:"column items-center q-mx-xl q-pa-sm"},[t("div",{class:"text-h4 text-bold"},"Account information")])],-1)),se={class:"row"},re={class:"column items-center q-mx-xl q-pa-sm"},ne={class:"custom-file-upload"},ue=C(()=>t("span",{class:"icon"},"\u{1F4C1}",-1)),de={class:"col-sm-12 col-xs-12 col-lg-6 col-md-12"},ie={class:"row"},me={class:"col-sm-12 col-xs-12 col-lg-6 col-md-12 q-pr-sm"},ce={class:"col-sm-12 col-xs-12 col-lg-6 col-md-12"},pe={class:"col-sm-12 col-xs-12 col-lg-12 col-md-12 q-mb-md"},ve={class:"col-sm-12 col-xs-12 col-lg-12 col-md-12"},fe={class:"col-sm-12 col-xs-12 col-lg-12 col-md-12 q-my-md"},_e={class:"col-sm-12 col-xs-12 col-lg-12 col-md-12"},ge={class:"row items-center justify-end"},ye={class:"col-sm-12 col-xs-12 col-lg-12 col-md-12 q-my-md"},be={class:"row"},Ie=A({__name:"UserAccountInfo",setup(c){const v=T(),r=D(),f=B(),I=ae(),i=K(""),a=b(()=>r.getUser),_=b(()=>r.getAvatar),F=l=>l&&l.length!=0||"First name is required",N=l=>l&&l.length!=0||"Last name is required";function q(l){const e=new Date,u=new Date(e),o=new Date(e);return u.setFullYear(e.getFullYear()-13),o.setFullYear(e.getFullYear()-120),l<u||l>o}function k(l){const u=l.target.files[0],o=new FileReader;o.readAsDataURL(u),o.onload=()=>{$(o.result)}}async function x(){await r.findUserPhoto({objectType:"USER",objectIds:[f.currentUser().aud[0]],fileType:"FILE_TYPE_IMAGE"})}async function $(l){await I.saveImages({objectType:"USER",objectId:f.currentUser().aud[0],files:[{contents:l,coverImage:!1}],fileType:"FILE_TYPE_IMAGE"}),I.getResponse.code==0&&await x()}async function E(){await r.findUserInfo({ids:[f.currentUser().aud[0]]})}async function Y(){if(i.value!=""){await r.updateUserInfo({user:a.value,updateMask:i.value}),v.showAlert(r.getResponse.message,r.getResponse.code,"");return}v.showAlert("No updates where made",r.getResponse.code,"")}function n(l){var e;(e=i.value)!=null&&e.includes(l)||(i.value!=""?i.value+=`,${l}`:i.value=l)}return P(()=>{E(),x()}),(l,e)=>{var u;return p(),h(G,null,[le,s(R,{class:"q-my-md",style:{width:"5%","margin-left":"55px"}}),t("div",se,[t("div",re,[((u=_.value)==null?void 0:u.length)>0?(p(),g(w,{key:0,size:"120px"},{default:d(()=>{var o,U;return[(o=_.value[0])!=null&&o.uri?(p(),g(V,{key:0,src:(U=_.value[0])==null?void 0:U.uri},null,8,["src"])):y("",!0)]}),_:1})):(p(),g(w,{key:1,size:"120px"},{default:d(()=>[s(V,{src:te})]),_:1})),t("label",ne,[ue,j(" Change Image "),t("input",{multiple:"",type:"file",name:"avatar",accept:"image/*",onChange:e[0]||(e[0]=o=>k(o))},null,32)])]),t("div",de,[t("div",ie,[t("div",me,[s(m,{outlined:"",rounded:"",clearable:"",color:"grey",label:"First Name",modelValue:a.value.firstName,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value.firstName=o),rules:[F],onKeyup:e[2]||(e[2]=o=>n("user.firstName"))},null,8,["modelValue","rules"])]),t("div",ce,[s(m,{outlined:"",rounded:"",clearable:"",color:"grey",label:"Last Name",modelValue:a.value.lastName,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value.lastName=o),rules:[N],onKeyup:e[4]||(e[4]=o=>n("user.lastName"))},null,8,["modelValue","rules"])])]),y("",!0),y("",!0),t("div",pe,[s(m,{outlined:"",rounded:"",clearable:"",color:"grey",label:"Address",modelValue:a.value.addressLine,"onUpdate:modelValue":e[7]||(e[7]=o=>a.value.addressLine=o),onKeyup:e[8]||(e[8]=o=>n("user.addressLine"))},null,8,["modelValue"])]),t("div",ve,[s(m,{outlined:"",rounded:"",clearable:"",color:"grey",label:"National Id",modelValue:a.value.nationalId,"onUpdate:modelValue":e[9]||(e[9]=o=>a.value.nationalId=o),onKeyup:e[10]||(e[10]=o=>n("user.nationalId"))},null,8,["modelValue"])]),t("div",fe,[s(X,{outlined:"",rounded:"",clearable:"",color:"grey",label:"Gender","option-value":"value","option-label":"name","map-options":"",options:["Male","Female"],"emit-value":"",modelValue:a.value.gender,"onUpdate:modelValue":[e[11]||(e[11]=o=>a.value.gender=o),e[12]||(e[12]=o=>n("user.gender"))]},null,8,["modelValue"])]),t("div",_e,[s(m,{rounded:"",outlined:"",clearable:"",color:"grey",modelValue:a.value.birthDate,"onUpdate:modelValue":e[15]||(e[15]=o=>a.value.birthDate=o),label:"Date of birth"},{append:d(()=>[s(z,{name:"event",class:"cursor-pointer"},{default:d(()=>[s(ee,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:d(()=>[s(Z,{color:"warning",modelValue:a.value.birthDate,"onUpdate:modelValue":[e[13]||(e[13]=o=>a.value.birthDate=o),e[14]||(e[14]=o=>n("user.birthDate"))],mask:"YYYY-MM-DD",disable:o=>q(o)},{default:d(()=>[t("div",ge,[H(s(Q,{label:"Close",color:"primary",flat:""},null,512),[[oe]])])]),_:1},8,["modelValue","disable"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),t("div",ye,[s(m,{type:"textarea",outlined:"",rounded:"",clearable:"",color:"grey",label:"About you",modelValue:a.value.narration,"onUpdate:modelValue":e[16]||(e[16]=o=>a.value.narration=o),onKeyup:e[17]||(e[17]=o=>n("user.narration"))},null,8,["modelValue"])]),t("div",be,[s(Q,{rounded:"","no-caps":"",label:"Update Info",color:"warning",onClick:e[18]||(e[18]=o=>Y(a.value.id))})])])])],64)}}});var xe=S(Ie,[["__scopeId","data-v-5f8b8c8f"]]);const Ue={class:"q-pa-md"},Ve=A({__name:"account",setup(c){const v=D();return b(()=>v.getCurrentTab),W(()=>{}),(r,f)=>(p(),h("div",Ue,[t("div",null,[s(M,{flat:""},{default:d(()=>[s(L,{style:{height:"20px"}}),s(xe)]),_:1})])]))}});var oo=S(Ve,[["__scopeId","data-v-4376798e"]]);export{oo as default};
