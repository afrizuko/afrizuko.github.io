import{_ as ot,d as lt,u as it,k as rt,aa as nt,r as U,c as y,o as ut,l as dt,m as a,v as H,f as t,p as e,q as l,F as D,Q as h,s as i,t as g,n as o,x as ct,y as C,z as w,A as u,C as d,B as mt,R as c,D as pt,E as ft}from"./index.afa77c1b.js";import{b as _t,Q as vt,a as gt}from"./QHeader.77e86318.js";import{Q as $}from"./QSpace.71560a5e.js";import{Q as j}from"./QBadge.8bf6a763.js";import{Q as b}from"./QImg.1e914581.js";import{Q as s}from"./QItemSection.3da2b6ed.js";import{Q as A}from"./QItemLabel.9e006f21.js";import{Q as n}from"./QItem.1b60d339.js";import{Q as O}from"./QCard.b892fc5b.js";import{Q as F}from"./QMenu.13801fd7.js";import{Q as I}from"./QSeparator.5de6012a.js";import{Q as yt}from"./QList.17d5d046.js";import{Q as bt}from"./QScrollArea.9d835f49.js";import{Q as xt}from"./QDrawer.ba0a0dd6.js";import{Q as ht}from"./QPageContainer.93c1b95f.js";import{Q as kt}from"./QLayout.82b28bce.js";import{Q as Y}from"./QCardSection.db396dc7.js";import{Q as wt}from"./QDialog.775a595e.js";import{_ as B}from"./default-avatar-icon.adf04dc9.js";import{u as G}from"./account.f4b8aa4b.js";import{u as Qt}from"./property.a34edba4.js";import{u as qt}from"./payment.ca124cc8.js";import"./QResizeObserver.847b957b.js";import"./use-dark.10fc72ca.js";import"./position-engine.f6e4fe48.js";import"./selection.d9f58328.js";import"./use-timeout.78df29b7.js";import"./focus-manager.b507780d.js";import"./scroll.d01e842c.js";import"./use-prevent-scroll.b523fe28.js";import"./QScrollObserver.577f3c0e.js";import"./TouchPan.f1b2c9f8.js";import"./touch.3df10340.js";import"./format.c860d4da.js";const M=Q=>(pt("data-v-2bdfb5a5"),Q=Q(),ft(),Q),St={style:{width:"30%"}},Tt={key:0,style:{width:"30%","align-items":"center"},class:"cursor-pointer"},Pt={style:{width:"30%","text-align":"right"}},Ct=M(()=>l("div",{class:"text-h6 q-ma-md"},"Notifications",-1)),It={class:"column items-center"},zt={class:"text-subtitle1 q-mt-sm q-mb-xs"},Lt={class:"q-my-md q-mx-sm"},Nt={class:"row"},Ut={class:"row"},Ht={class:"row"},$t={class:"row"},At={class:"q-my-sm q-mx-sm"},Bt={class:"row"},Mt={class:"row"},Rt={class:"row"},Vt={class:"absolute-top text-center q-mx-sm",style:{height:"180px"}},Et={class:"absolute-bottom bg-transparent q-pa-sm"},Dt=M(()=>l("div",{class:"text-weight-bold q-my-md"},"Host User",-1)),jt={class:"q-pa-md q-gutter-sm"},Ot=M(()=>l("div",{class:"text-h6"},"Alert",-1)),Ft=lt({__name:"HostLayout",setup(Q){const q=it(),k=rt(),W=G(),z=Qt(),_=G();nt();const J=qt(),S=U(!0),R=U(!1),K=U(!0),T=y(()=>{var p;return(p=k.currentUser())==null?void 0:p.aud[0]}),P=y(()=>_.getAvatar),x=y(()=>_.getUser),L=y(()=>_.getNotifications),V=y(()=>_.getInitiatorPhotos);y(()=>z.getProperties),y(()=>J.getPaymentDetails);function N(p){W.setCurrentTab(p),q.push("/account")}function X(){z.$reset(),z.setOperationMode(!1),q.push("/add-listing")}function Z(){q.push(`/bookings/${k.currentUser().aud[0]}`)}async function tt(){k.currentUser()!=null&&(await _.findUserPhoto({objectType:"USER",objectIds:[k.currentUser().aud[0]],fileType:"FILE_TYPE_IMAGE"}),await _.findUserInfo({ids:[k.currentUser().aud[0]]}))}async function et(){await _.findNotifications({objectType:"PROPERTY"})}async function at(){await _.findPhotos({objectType:"USER",objectIds:L.value.map(p=>p.initiator.id)})}return ut(async()=>{await tt(),await et(),await at()}),(p,r)=>{const st=dt("router-view");return a(),H(D,null,[t(kt,{view:"hHh lpR fFf"},{default:e(()=>[t(_t,{elevated:!1,class:"q-pa-md"},{default:e(()=>[t(vt,{class:"row"},{default:e(()=>[t(h,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",color:"warning",onClick:r[0]||(r[0]=m=>S.value=!S.value)}),l("div",St,[t(gt,{class:"text-black cursor-pointer",onClick:r[1]||(r[1]=m=>p.$router.push("/"))},{default:e(()=>[i(" Ppangisa ")]),_:1})]),p.$q.screen.lg||p.$q.screen.xl?g("",!0):(a(),H("div",Tt)),t($),l("div",Pt,[x.value.userType=="HOST"&&T.value!=null?(a(),o(h,{key:0,"no-caps":"",outline:"",rounded:"",label:"List Your Property",class:"q-mx-sm text-black",onClick:X})):g("",!0),T.value==null?(a(),o(h,{key:1,"no-caps":"",outline:"",rounded:"",label:"Login",class:"q-mx-sm text-black",to:"/login"})):g("",!0),T.value!=null?(a(),o(h,{key:2,flat:"",round:"",icon:"notifications_none",class:"q-mr-md",color:"black",size:"15px"},{default:e(()=>{var m;return[((m=L.value)==null?void 0:m.length)>0?(a(),o(j,{key:0,floating:"",color:"red",rounded:""})):g("",!0),t(F,{style:{width:"28%"}},{default:e(()=>[t(O,{flat:"",class:"q-mx-md"},{default:e(()=>[Ct,(a(!0),H(D,null,ct(L.value,v=>(a(),o(n,{class:"q-my-md cursor-pointer"},{default:e(()=>[t(s,{top:"",avatar:""},{default:e(()=>[t(C,{size:"50px"},{default:e(()=>{var f;return[V.value[v.initiator.id].files?(a(),o(b,{key:0,src:(f=V.value[v.initiator.id].files[0])==null?void 0:f.uri},null,8,["src"])):(a(),o(b,{key:1,src:B}))]}),_:2},1024)]),_:2},1024),t(s,null,{default:e(()=>[t(A,null,{default:e(()=>[i(w(v.initiator.firstName)+" "+w(v.initiator.lastName),1)]),_:2},1024),t(A,{class:"text-subtitle1",lines:"1"},{default:e(()=>[i(w(v.content),1)]),_:2},1024),t(A,{caption:""},{default:e(()=>[i("5 min ago")]),_:1})]),_:2},1024),t(s,{side:"",top:"",class:"q-mt-md"},{default:e(()=>[t(j,{rounded:"",color:"indigo"})]),_:1})]),_:2},1024))),256))]),_:1})]),_:1})]}),_:1})):g("",!0),T.value!=null?(a(),o(C,{key:3,class:"q-mr-xl cursor-pointer"},{default:e(()=>{var m,v;return[(m=P.value[0])!=null&&m.uri?(a(),o(b,{key:0,src:(v=P.value[0])==null?void 0:v.uri},null,8,["src"])):(a(),o(b,{key:1,src:B})),t(F,{style:{width:"20%"},"auto-close":""},{default:e(()=>[l("div",It,[t(C,{size:"50px",class:"q-mt-xs"},{default:e(()=>{var f,E;return[(f=P.value[0])!=null&&f.uri?(a(),o(b,{key:0,src:(E=P.value[0])==null?void 0:E.uri},null,8,["src"])):(a(),o(b,{key:1,src:B}))]}),_:1}),l("div",zt,w(x.value.firstName)+" "+w(x.value.lastName),1)]),t(I,{inset:""}),l("div",Lt,[u((a(),o(n,{clickable:"",onClick:r[3]||(r[3]=f=>N("account")),"active-class":"text-black"},{default:e(()=>[t(s,{avata:""},{default:e(()=>[l("div",Nt,[t(d,{size:"25px",name:"perm_identity",class:"q-mr-sm",onClick:r[2]||(r[2]=f=>N("account"))}),t(s,null,{default:e(()=>[i("My Account")]),_:1})])]),_:1})]),_:1})),[[c]]),x.value.userType!="HOST"?u((a(),o(n,{key:0,clickable:"","active-class":"text-black",onClick:Z},{default:e(()=>[t(s,{avata:""},{default:e(()=>[l("div",Ut,[t(d,{size:"25px",name:"bookmark_border",class:"q-mr-sm"}),t(s,null,{default:e(()=>[i("My Bookings")]),_:1})])]),_:1})]),_:1})),[[c]]):g("",!0),x.value.userType!="TENANT"?u((a(),o(n,{key:1,clickable:"","active-class":"text-black",onClick:r[4]||(r[4]=f=>mt(q).push("/property-listing"))},{default:e(()=>[t(s,{avata:""},{default:e(()=>[l("div",Ht,[t(d,{size:"25px",name:"cottage",class:"q-mr-sm"}),t(s,null,{default:e(()=>[i("My Properties")]),_:1})])]),_:1})]),_:1})),[[c]]):g("",!0),x.value.userType!="HOST"?u((a(),o(n,{key:2,clickable:"",onClick:r[5]||(r[5]=f=>N("wishlist")),"active-class":"text-black"},{default:e(()=>[t(s,null,{default:e(()=>[l("div",$t,[t(d,{size:"25px",name:"favorite_border",class:"q-mr-sm"}),t(s,null,{default:e(()=>[i("My Wishlist")]),_:1})])]),_:1})]),_:1})),[[c]]):g("",!0)]),t(I,{inset:""}),l("div",At,[u((a(),o(n,{clickable:""},{default:e(()=>[t(s,{avata:""},{default:e(()=>[l("div",Bt,[t(d,{size:"25px",name:"settings",class:"q-mr-sm"}),t(s,null,{default:e(()=>[i("Settings")]),_:1})])]),_:1})]),_:1})),[[c]]),u((a(),o(n,{clickable:""},{default:e(()=>[t(s,{avata:""},{default:e(()=>[l("div",Mt,[t(d,{size:"25px",name:"help_outline",class:"q-mr-sm"}),t(s,null,{default:e(()=>[i("Help")]),_:1})])]),_:1})]),_:1})),[[c]]),u((a(),o(n,{clickable:"",to:"/signout"},{default:e(()=>[t(s,{avata:""},{default:e(()=>[l("div",Rt,[t(d,{size:"25px",name:"logout",class:"q-mr-sm"}),t(s,null,{default:e(()=>[i("Logout")]),_:1})])]),_:1})]),_:1})),[[c]])])]),_:1})]}),_:1})):(a(),o(h,{key:4,"no-caps":"",outline:"",rounded:"",label:"Become a host",class:"q-mx-sm text-black",to:"/signup"}))])]),_:1})]),_:1}),t(xt,{modelValue:S.value,"onUpdate:modelValue":r[6]||(r[6]=m=>S.value=m),"show-if-above":"",width:250,breakpoint:400},{default:e(()=>[t(bt,{style:{height:"calc(100% - 180px)","margin-top":"180px","border-right":"1px solid #ddd"}},{default:e(()=>[t(yt,{padding:""},{default:e(()=>[u((a(),o(n,{"active-class":"text-warning",clickable:"",to:"/dashboard"},{default:e(()=>[t(s,{avatar:""},{default:e(()=>[t(d,{name:"dashboard"})]),_:1}),t(s,null,{default:e(()=>[i(" Dashboard ")]),_:1})]),_:1})),[[c]]),u((a(),o(n,{"active-class":"text-warning",clickable:"",to:"/my-properties"},{default:e(()=>[t(s,{avatar:""},{default:e(()=>[t(d,{name:"real_estate_agent"})]),_:1}),t(s,null,{default:e(()=>[i(" Properties ")]),_:1})]),_:1})),[[c]]),u((a(),o(n,{"active-class":"text-warning",clickable:"",to:"/tenants"},{default:e(()=>[t(s,{avatar:""},{default:e(()=>[t(d,{name:"groups"})]),_:1}),t(s,null,{default:e(()=>[i(" Tenants ")]),_:1})]),_:1})),[[c]]),u((a(),o(n,{"active-class":"text-warning",clickable:"",to:"/maintenance"},{default:e(()=>[t(s,{avatar:""},{default:e(()=>[t(d,{name:"construction"})]),_:1}),t(s,null,{default:e(()=>[i(" Maintenance ")]),_:1})]),_:1})),[[c]]),u((a(),o(n,{"active-class":"text-warning",clickable:""},{default:e(()=>[t(s,{avatar:""},{default:e(()=>[t(d,{name:"settings"})]),_:1}),t(s,null,{default:e(()=>[i(" Settings ")]),_:1})]),_:1})),[[c]])]),_:1})]),_:1}),l("div",Vt,[l("div",Et,[t(C,{size:"56px",class:"q-mb-sm"},{default:e(()=>[t(b,{src:"https://cdn.quasar.dev/img/boy-avatar.png"})]),_:1}),Dt,t(h,{"no-caps":"",outline:"",rounded:"",label:"List Property",color:"warning",to:"/add-listing"}),t(I,{class:"q-my-sm"})])])]),_:1},8,["modelValue"]),t(ht,null,{default:e(()=>[t(st),t($,{style:{height:"50px"}}),t(I,{class:"q-my-xl"}),t($,{style:{height:"50px"}})]),_:1})]),_:1}),l("div",jt,[t(wt,{modelValue:R.value,"onUpdate:modelValue":r[7]||(r[7]=m=>R.value=m),persistent:"",maximized:K.value,"transition-show":"slide-up","transition-hide":"slide-down"},{default:e(()=>[t(O,{class:"bg-primary text-white"},{default:e(()=>[t(Y,null,{default:e(()=>[Ot]),_:1}),t(Y,{class:"q-pt-none"},{default:e(()=>[i(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore. ")]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])])],64)}}});var Te=ot(Ft,[["__scopeId","data-v-2bdfb5a5"]]);export{Te as default};
