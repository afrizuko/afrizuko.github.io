import{b as at,Q as ot,a as it}from"./QHeader.2d9c1c3d.js";import{Q as P}from"./QSpace.ccdd6291.js";import{_ as rt,d as lt,u as nt,v as ut,af as ct,r as A,c as m,o as dt,x as mt,y as s,E as z,f as t,A as e,B as i,F as E,C as l,D as p,z as a,Q as T,G as pt,H as L,I as b,q as f,K as _,J as ft,R as v,L as _t,M as vt}from"./index.e0ba20ab.js";import{Q as V}from"./QBadge.b7db0d0c.js";import{Q as k}from"./use-dark.0ca98b24.js";import{Q as d,a as o}from"./QItem.3c7022c1.js";import{Q as N}from"./position-engine.4babaccd.js";import{Q as j}from"./QCard.c0d77396.js";import{Q as D}from"./QMenu.988bbbf4.js";import{Q as U}from"./QSeparator.03bcccd3.js";import{Q as yt}from"./QPageContainer.7edbb4fd.js";import{Q as gt}from"./QLayout.5dfb91ce.js";import{Q as O}from"./QCardSection.2d007e5c.js";import{Q as kt}from"./QDialog.3b1216fc.js";import{_ as H}from"./default-avatar-icon.adf04dc9.js";import{u as F}from"./account.0f37c180.js";import{u as xt}from"./property.530a9f9d.js";import{u as ht}from"./payment.08039c30.js";import{M as bt}from"./MainFooter.58a0cc1f.js";import"./QResizeObserver.13ce5977.js";import"./selection.e223a394.js";import"./use-timeout.b7c36aec.js";import"./focus-manager.b507780d.js";import"./scroll.d2ead3f3.js";import"./use-prevent-scroll.1a64af91.js";import"./QScrollObserver.e58d1885.js";import"./pinterest.da3c757a.js";const Y=Q=>(_t("data-v-5626f41c"),Q=Q(),vt(),Q),Qt={style:{width:"30%"}},qt={key:0,style:{width:"30%","align-items":"center"},class:"cursor-pointer"},wt={style:{width:"30%","text-align":"right"}},St=Y(()=>i("div",{class:"text-h6 q-ma-md"},"Notifications",-1)),Tt={class:"column items-center"},It={class:"text-subtitle1 q-mt-sm q-mb-xs"},Ct={class:"q-my-md q-mx-sm"},Pt={class:"row"},zt={class:"row"},Lt={class:"row"},Nt={class:"row"},Ut={class:"q-my-sm q-mx-sm"},Ht={class:"row"},Mt={class:"row"},Bt={class:"row"},Rt={class:"q-pa-md q-gutter-sm"},$t=Y(()=>i("div",{class:"text-h6"},"Alert",-1)),At=lt({__name:"HostLayout",setup(Q){const q=nt(),x=ut(),G=F(),I=xt(),c=F();ct();const J=ht(),M=A(!1),K=A(!0),w=m(()=>{var u;return(u=x.currentUser())==null?void 0:u.aud[0]}),S=m(()=>c.getAvatar),y=m(()=>c.getUser),B=m(()=>c.getNotifications),R=m(()=>c.getInitiatorPhotos);m(()=>I.getProperties),m(()=>J.getPaymentDetails);function C(u){G.setCurrentTab(u),q.push("/account")}function W(){I.$reset(),I.setOperationMode(!1),q.push("/add-listing")}function X(){q.push(`/bookings/${x.currentUser().aud[0]}`)}async function Z(){x.currentUser()!=null&&(await c.findUserPhoto({objectType:"USER",objectIds:[x.currentUser().aud[0]],fileType:"FILE_TYPE_IMAGE"}),await c.findUserInfo({ids:[x.currentUser().aud[0]]}))}async function tt(){await c.findNotifications({objectType:"PROPERTY"})}async function et(){await c.findPhotos({objectType:"USER",objectIds:B.value.map(u=>u.initiator.id)})}return dt(async()=>{await Z(),await tt(),await et()}),(u,r)=>{const st=mt("router-view");return s(),z(E,null,[t(gt,{view:"hHh LpR lff"},{default:e(()=>[t(at,{elevated:!1,class:"q-pa-md"},{default:e(()=>[t(ot,{class:"row"},{default:e(()=>[i("div",Qt,[t(it,{class:"text-black cursor-pointer",onClick:r[0]||(r[0]=n=>u.$router.push("/"))},{default:e(()=>[l(" Ppangisa ")]),_:1})]),u.$q.screen.lg||u.$q.screen.xl?p("",!0):(s(),z("div",qt)),t(P),i("div",wt,[y.value.userType=="HOST"&&w.value!=null?(s(),a(T,{key:0,"no-caps":"",outline:"",rounded:"",label:"List Your Property",class:"q-mx-sm text-black",onClick:W})):p("",!0),w.value==null?(s(),a(T,{key:1,"no-caps":"",outline:"",rounded:"",label:"Login",class:"q-mx-sm text-black",to:"/login"})):p("",!0),w.value!=null?(s(),a(T,{key:2,flat:"",round:"",icon:"notifications_none",class:"q-mr-md",color:"black",size:"15px"},{default:e(()=>[t(V,{floating:"",color:"red",rounded:""}),t(D,{style:{width:"28%"}},{default:e(()=>[t(j,{flat:"",class:"q-mx-md"},{default:e(()=>[St,(s(!0),z(E,null,pt(B.value,n=>(s(),a(d,{class:"q-my-md cursor-pointer"},{default:e(()=>[t(o,{top:"",avatar:""},{default:e(()=>[t(L,{size:"50px"},{default:e(()=>{var h;return[R.value[n.initiator.id].files?(s(),a(k,{key:0,src:(h=R.value[n.initiator.id].files[0])==null?void 0:h.uri},null,8,["src"])):(s(),a(k,{key:1,src:H}))]}),_:2},1024)]),_:2},1024),t(o,null,{default:e(()=>[t(N,null,{default:e(()=>[l(b(n.initiator.firstName)+" "+b(n.initiator.lastName),1)]),_:2},1024),t(N,{class:"text-subtitle1",lines:"1"},{default:e(()=>[l(b(n.content),1)]),_:2},1024),t(N,{caption:""},{default:e(()=>[l("5 min ago")]),_:1})]),_:2},1024),t(o,{side:"",top:"",class:"q-mt-md"},{default:e(()=>[t(V,{rounded:"",color:"indigo"})]),_:1})]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})):p("",!0),w.value!=null?(s(),a(L,{key:3,class:"q-mr-xl cursor-pointer"},{default:e(()=>{var n,h;return[(n=S.value[0])!=null&&n.uri?(s(),a(k,{key:0,src:(h=S.value[0])==null?void 0:h.uri},null,8,["src"])):(s(),a(k,{key:1,src:H})),t(D,{style:{width:"20%"},"auto-close":""},{default:e(()=>[i("div",Tt,[t(L,{size:"50px",class:"q-mt-xs"},{default:e(()=>{var g,$;return[(g=S.value[0])!=null&&g.uri?(s(),a(k,{key:0,src:($=S.value[0])==null?void 0:$.uri},null,8,["src"])):(s(),a(k,{key:1,src:H}))]}),_:1}),i("div",It,b(y.value.firstName)+" "+b(y.value.lastName),1)]),t(U,{inset:""}),i("div",Ct,[f((s(),a(d,{clickable:"",onClick:r[2]||(r[2]=g=>C("account")),"active-class":"text-black"},{default:e(()=>[t(o,{avata:""},{default:e(()=>[i("div",Pt,[t(_,{size:"25px",name:"perm_identity",class:"q-mr-sm",onClick:r[1]||(r[1]=g=>C("account"))}),t(o,null,{default:e(()=>[l("My Account")]),_:1})])]),_:1})]),_:1})),[[v]]),y.value.userType!="HOST"?f((s(),a(d,{key:0,clickable:"","active-class":"text-black",onClick:X},{default:e(()=>[t(o,{avata:""},{default:e(()=>[i("div",zt,[t(_,{size:"25px",name:"bookmark_border",class:"q-mr-sm"}),t(o,null,{default:e(()=>[l("My Bookings")]),_:1})])]),_:1})]),_:1})),[[v]]):p("",!0),y.value.userType!="TENANT"?f((s(),a(d,{key:1,clickable:"","active-class":"text-black",onClick:r[3]||(r[3]=g=>ft(q).push("/property-listing"))},{default:e(()=>[t(o,{avata:""},{default:e(()=>[i("div",Lt,[t(_,{size:"25px",name:"cottage",class:"q-mr-sm"}),t(o,null,{default:e(()=>[l("My Properties")]),_:1})])]),_:1})]),_:1})),[[v]]):p("",!0),y.value.userType!="HOST"?f((s(),a(d,{key:2,clickable:"",onClick:r[4]||(r[4]=g=>C("wishlist")),"active-class":"text-black"},{default:e(()=>[t(o,null,{default:e(()=>[i("div",Nt,[t(_,{size:"25px",name:"favorite_border",class:"q-mr-sm"}),t(o,null,{default:e(()=>[l("My Wishlist")]),_:1})])]),_:1})]),_:1})),[[v]]):p("",!0)]),t(U,{inset:""}),i("div",Ut,[f((s(),a(d,{clickable:""},{default:e(()=>[t(o,{avata:""},{default:e(()=>[i("div",Ht,[t(_,{size:"25px",name:"settings",class:"q-mr-sm"}),t(o,null,{default:e(()=>[l("Settings")]),_:1})])]),_:1})]),_:1})),[[v]]),f((s(),a(d,{clickable:""},{default:e(()=>[t(o,{avata:""},{default:e(()=>[i("div",Mt,[t(_,{size:"25px",name:"help_outline",class:"q-mr-sm"}),t(o,null,{default:e(()=>[l("Help")]),_:1})])]),_:1})]),_:1})),[[v]]),f((s(),a(d,{clickable:"",to:"/signout"},{default:e(()=>[t(o,{avata:""},{default:e(()=>[i("div",Bt,[t(_,{size:"25px",name:"logout",class:"q-mr-sm"}),t(o,null,{default:e(()=>[l("Logout")]),_:1})])]),_:1})]),_:1})),[[v]])])]),_:1})]}),_:1})):(s(),a(T,{key:4,"no-caps":"",outline:"",rounded:"",label:"Become a host",class:"q-mx-sm text-black",to:"/signup"}))])]),_:1})]),_:1}),t(yt,null,{default:e(()=>[t(st),t(P,{style:{height:"50px"}}),t(U,{class:"q-my-xl"}),t(P,{style:{height:"50px"}})]),_:1}),t(bt)]),_:1}),i("div",Rt,[t(kt,{modelValue:M.value,"onUpdate:modelValue":r[5]||(r[5]=n=>M.value=n),persistent:"",maximized:K.value,"transition-show":"slide-up","transition-hide":"slide-down"},{default:e(()=>[t(j,{class:"bg-primary text-white"},{default:e(()=>[t(O,null,{default:e(()=>[$t]),_:1}),t(O,{class:"q-pt-none"},{default:e(()=>[l(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore. ")]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])])],64)}}});var fe=rt(At,[["__scopeId","data-v-5626f41c"]]);export{fe as default};
