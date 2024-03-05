import{Q as se,a as ae,b as oe}from"./QHeader.0800c559.js";import{Q as H}from"./QSpace.4d08d001.js";import{_ as le,d as ie,u as re,k as ne,r as F,c as S,o as ue,l as ce,m as s,n as a,p as t,f as e,q as i,s as u,Q as h,t as c,v as de,x as me,y as N,z as w,F as pe,A as m,B as g,C as p,R as f,D as fe,E as ve}from"./index.29cc8f67.js";import{Q as j}from"./QBadge.d3abcf60.js";import{Q as q}from"./QImg.5eac1bcc.js";import{Q as o}from"./QItemSection.52be14ae.js";import{Q as U}from"./QItemLabel.6e93fea8.js";import{Q as d}from"./QItem.15492546.js";import{Q as _e}from"./QCard.2ae7f71b.js";import{Q as B}from"./QMenu.38ee760d.js";import{Q as $}from"./QSeparator.9b09cdb2.js";import{Q as ke}from"./QDrawer.6cf14d02.js";import{Q as ye}from"./QPageContainer.685db6ab.js";import{Q as L,a as be}from"./QTabs.c0cb9610.js";import{Q as ge,M as xe}from"./MainFooter.9f4afce6.js";import{Q as qe}from"./QLayout.4e5db53f.js";import{_ as M}from"./default-avatar-icon.adf04dc9.js";import{u as W}from"./account.121b38ce.js";import{u as he}from"./property.061c8fe0.js";import{u as we}from"./home.f5a78e22.js";import"./QResizeObserver.96a8f967.js";import"./use-dark.f934fa20.js";import"./position-engine.9cabe4fb.js";import"./selection.f6d0c368.js";import"./use-timeout.1cfdbf42.js";import"./focus-manager.b507780d.js";import"./scroll.1c2dbad9.js";import"./use-prevent-scroll.74d0c0a7.js";import"./TouchPan.fab20d2f.js";import"./touch.3df10340.js";import"./format.c860d4da.js";import"./uid.42677368.js";import"./rtl.b51694b1.js";import"./pinterest.da3c757a.js";import"./QScrollObserver.47c76585.js";const Qe=z=>(fe("data-v-1fe7cf68"),z=z(),ve(),z),$e={style:{width:"30%"}},Te={style:{"text-align":"right"}},Ce=Qe(()=>i("div",{class:"text-h6 q-ma-md"},"Notifications",-1)),Se={class:"column items-center"},ze={class:"text-subtitle1 q-mt-sm q-mb-xs"},Ie={class:"q-my-md q-mx-sm"},Ne={class:"row"},Le={class:"row"},Me={class:"row"},Pe={class:"row"},He={class:"q-my-sm q-mx-sm"},Ue={class:"row"},Be={class:"row"},Ee={class:"row"},Ae={class:"q-my-md q-mx-sm"},Ve={class:"row"},Oe={class:"row"},Re={class:"column items-center"},De={class:"text-subtitle1 q-mt-sm q-mb-xs"},Fe={class:"q-my-md q-mx-sm"},je={class:"row"},We={class:"row"},Ye={class:"row"},Ge={class:"row"},Je={class:"q-my-sm q-mx-sm"},Ke={class:"row"},Xe={class:"row"},Ze={class:"row"},et=ie({__name:"HomeLayout",setup(z){const v=re(),T=ne(),Y=W(),E=he(),x=W(),G=we(),A=F(""),C=F(!1),y=S(()=>{var r;return(r=T.currentUser())==null?void 0:r.aud[0]}),Q=S(()=>x.getAvatar),_=S(()=>x.getUser),P=S(()=>x.getNotifications),V=S(()=>x.getInitiatorPhotos);function I(r){Y.setCurrentTab(r),v.push("/profile")}function J(){E.$reset(),E.setOperationMode(!1),v.push("/add-listing")}function O(){v.push(`/bookings/${T.currentUser().aud[0]}`)}async function K(){T.currentUser()!=null&&(await x.findUserPhoto({objectType:"USER",objectIds:[T.currentUser().aud[0]],fileType:"FILE_TYPE_IMAGE"}),await x.findUserInfo({ids:[T.currentUser().aud[0]]}))}async function X(){await x.findNotifications({objectType:"PROPERTY"})}async function Z(){await x.findPhotos({objectType:"USER",objectIds:P.value.map(r=>r.initiator.id)})}async function ee(){if(!sessionStorage.getItem("token")){await v.push("/login");return}}function R(){G.setShowTopFilterDialog(!0)}return ue(async()=>{C.value=!1,await K(),await X(),await Z()}),(r,l)=>{const te=ce("router-view");return s(),a(qe,{view:"hHh LpR lff"},{default:t(()=>[e(oe,{elevated:!1,class:"q-pa-md"},{default:t(()=>[e(se,{class:"row"},{default:t(()=>[i("div",$e,[e(ae,{class:"text-black cursor-pointer",onClick:l[0]||(l[0]=n=>r.$router.push("/"))},{default:t(()=>[u(" Ppangisa ")]),_:1})]),e(H),i("div",Te,[r.$q.screen.lg||r.$q.screen.xl||r.$q.screen.xs||r.$q.screen.md?c("",!0):(s(),a(h,{key:0,outline:"",round:"",flat:"",color:"warning",icon:"search",class:"q-ml-md",size:"20px",onClick:R})),_.value.userType=="HOST"&&y.value!=null&&!r.$q.screen.xs?(s(),a(h,{key:1,"no-caps":"",outline:"",rounded:"",label:"Dashboard",class:"q-mx-sm text-black",to:"/dashboard"})):c("",!0),_.value.userType=="HOST"&&y.value!=null&&!r.$q.screen.xs?(s(),a(h,{key:2,"no-caps":"",outline:"",rounded:"",label:"List Your Property",class:"q-mx-sm text-black",onClick:J})):c("",!0),y.value==null&&!r.$q.screen.xs?(s(),a(h,{key:3,"no-caps":"",outline:"",rounded:"",label:"Login",class:"q-mx-sm text-black",to:"/login"})):c("",!0),y.value!=null?(s(),a(h,{key:4,flat:"",round:"",icon:"notifications_none",class:"q-mr-md",color:"black",size:"15px"},{default:t(()=>{var n;return[((n=P.value)==null?void 0:n.length)>0?(s(),a(j,{key:0,floating:"",color:"red",rounded:""})):c("",!0),e(B,{style:{width:"28%"}},{default:t(()=>[e(_e,{flat:"",class:"q-mx-md"},{default:t(()=>[Ce,(s(!0),de(pe,null,me(P.value,k=>(s(),a(d,{class:"q-my-md cursor-pointer"},{default:t(()=>[e(o,{top:"",avatar:""},{default:t(()=>[e(N,{size:"50px"},{default:t(()=>{var b;return[V.value[k.initiator.id].files?(s(),a(q,{key:0,src:(b=V.value[k.initiator.id].files[0])==null?void 0:b.uri},null,8,["src"])):(s(),a(q,{key:1,src:M}))]}),_:2},1024)]),_:2},1024),e(o,null,{default:t(()=>[e(U,null,{default:t(()=>[u(w(k.initiator.firstName)+" "+w(k.initiator.lastName),1)]),_:2},1024),e(U,{class:"text-subtitle1",lines:"1"},{default:t(()=>[u(w(k.content),1)]),_:2},1024),e(U,{caption:""},{default:t(()=>[u("5 min ago")]),_:1})]),_:2},1024),e(o,{side:"",top:"",class:"q-mt-md"},{default:t(()=>[e(j,{rounded:"",color:"indigo"})]),_:1})]),_:2},1024))),256))]),_:1})]),_:1})]}),_:1})):c("",!0),y.value!=null?(s(),a(N,{key:5,class:"cursor-pointer"},{default:t(()=>{var n,k;return[(n=Q.value[0])!=null&&n.uri?(s(),a(q,{key:0,src:(k=Q.value[0])==null?void 0:k.uri},null,8,["src"])):(s(),a(q,{key:1,src:M})),r.$q.screen.xs||r.$q.screen.sm?c("",!0):(s(),a(B,{key:2,style:{width:"200px"},"auto-close":""},{default:t(()=>[i("div",Se,[e(N,{size:"50px",class:"q-mt-xs"},{default:t(()=>{var b,D;return[(b=Q.value[0])!=null&&b.uri?(s(),a(q,{key:0,src:(D=Q.value[0])==null?void 0:D.uri},null,8,["src"])):(s(),a(q,{key:1,src:M}))]}),_:1}),i("div",ze,w(_.value.firstName)+" "+w(_.value.lastName),1)]),e($,{inset:""}),i("div",Ie,[m((s(),a(d,{clickable:"",onClick:l[2]||(l[2]=b=>g(v).push("/profile")),"active-class":"text-black"},{default:t(()=>[e(o,{avata:""},{default:t(()=>[i("div",Ne,[e(p,{size:"25px",name:"perm_identity",class:"q-mr-sm",onClick:l[1]||(l[1]=b=>g(v).push("/profile"))}),e(o,null,{default:t(()=>[u("My Account")]),_:1})])]),_:1})]),_:1})),[[f]]),_.value.userType!="HOST"?m((s(),a(d,{key:0,clickable:"","active-class":"text-black",onClick:O},{default:t(()=>[e(o,{avata:""},{default:t(()=>[i("div",Le,[e(p,{size:"25px",name:"bookmark_border",class:"q-mr-sm"}),e(o,null,{default:t(()=>[u("My Bookings")]),_:1})])]),_:1})]),_:1})),[[f]]):c("",!0),_.value.userType!="TENANT"?m((s(),a(d,{key:1,clickable:"","active-class":"text-black",onClick:l[3]||(l[3]=b=>g(v).push("/property-listing"))},{default:t(()=>[e(o,{avata:""},{default:t(()=>[i("div",Me,[e(p,{size:"25px",name:"cottage",class:"q-mr-sm"}),e(o,null,{default:t(()=>[u("My Properties")]),_:1})])]),_:1})]),_:1})),[[f]]):c("",!0),_.value.userType!="HOST"?m((s(),a(d,{key:2,clickable:"",onClick:l[4]||(l[4]=b=>I("wishlist")),"active-class":"text-black"},{default:t(()=>[e(o,null,{default:t(()=>[i("div",Pe,[e(p,{size:"25px",name:"favorite_border",class:"q-mr-sm"}),e(o,null,{default:t(()=>[u("My Wishlist")]),_:1})])]),_:1})]),_:1})),[[f]]):c("",!0)]),e($,{inset:""}),i("div",He,[m((s(),a(d,{clickable:"",onClick:l[5]||(l[5]=b=>g(v).push("/settings"))},{default:t(()=>[e(o,{avata:""},{default:t(()=>[i("div",Ue,[e(p,{size:"25px",name:"settings",class:"q-mr-sm"}),e(o,null,{default:t(()=>[u("Settings")]),_:1})])]),_:1})]),_:1})),[[f]]),m((s(),a(d,{clickable:""},{default:t(()=>[e(o,{avata:""},{default:t(()=>[i("div",Be,[e(p,{size:"25px",name:"help_outline",class:"q-mr-sm"}),e(o,null,{default:t(()=>[u("Help")]),_:1})])]),_:1})]),_:1})),[[f]]),m((s(),a(d,{clickable:"",to:"/signout"},{default:t(()=>[e(o,{avata:""},{default:t(()=>[i("div",Ee,[e(p,{size:"25px",name:"logout",class:"q-mr-sm"}),e(o,null,{default:t(()=>[u("Logout")]),_:1})])]),_:1})]),_:1})),[[f]])])]),_:1}))]}),_:1})):y.value==null&&!r.$q.screen.xs?(s(),a(h,{key:6,"no-caps":"",outline:"",rounded:"",label:"Become a host",class:"q-mx-sm text-black",to:"/signup"})):c("",!0),y.value==null&&r.$q.screen.xs?(s(),a(h,{key:7,color:"warning",rounded:"",flat:"",icon:"menu"},{default:t(()=>[e(B,{"auto-close":"",style:{width:"200px"}},{default:t(()=>[i("div",Ae,[m((s(),a(d,{clickable:"",onClick:l[7]||(l[7]=n=>g(v).push("/login")),"active-class":"text-black"},{default:t(()=>[e(o,{avata:""},{default:t(()=>[i("div",Ve,[e(p,{size:"25px",name:"perm_identity",class:"q-mr-sm",color:"warning",onClick:l[6]||(l[6]=n=>g(v).push("/profile"))}),e(o,null,{default:t(()=>[u("Login")]),_:1})])]),_:1})]),_:1})),[[f]]),e($,{inset:""}),m((s(),a(d,{clickable:"","active-class":"text-black",onClick:l[8]||(l[8]=n=>g(v).push("/signup"))},{default:t(()=>[e(o,{avata:""},{default:t(()=>[i("div",Oe,[e(p,{size:"25px",name:"home",class:"q-mr-sm",color:"warning"}),e(o,null,{default:t(()=>[u("Become a host")]),_:1})])]),_:1})]),_:1})),[[f]])])]),_:1})]),_:1})):c("",!0)])]),_:1})]),_:1}),(r.$q.screen.xs||r.$q.screen.sm)&&y.value!=null?(s(),a(ke,{key:0,side:"right",modelValue:C.value,"onUpdate:modelValue":l[13]||(l[13]=n=>C.value=n),"show-if-above":"",overlay:"",width:200,breakpoint:500},{default:t(()=>[i("div",null,[i("div",Re,[e(N,{size:"50px",class:"q-mt-xs"},{default:t(()=>{var n,k;return[(n=Q.value[0])!=null&&n.uri?(s(),a(q,{key:0,src:(k=Q.value[0])==null?void 0:k.uri},null,8,["src"])):(s(),a(q,{key:1,src:M}))]}),_:1}),i("div",De,w(_.value.firstName)+" "+w(_.value.lastName),1)]),e($,{inset:""}),i("div",Fe,[m((s(),a(d,{clickable:"",onClick:l[10]||(l[10]=n=>I("account")),"active-class":"text-black"},{default:t(()=>[e(o,{avata:""},{default:t(()=>[i("div",je,[e(p,{size:"25px",name:"perm_identity",class:"q-mr-sm",onClick:l[9]||(l[9]=n=>I("editiProfile"))}),e(o,null,{default:t(()=>[u("My Account")]),_:1})])]),_:1})]),_:1})),[[f]]),_.value.userType!="HOST"?m((s(),a(d,{key:0,clickable:"","active-class":"text-black",onClick:O},{default:t(()=>[e(o,{avata:""},{default:t(()=>[i("div",We,[e(p,{size:"25px",name:"bookmark_border",class:"q-mr-sm"}),e(o,null,{default:t(()=>[u("My Bookings")]),_:1})])]),_:1})]),_:1})),[[f]]):c("",!0),_.value.userType!="TENANT"?m((s(),a(d,{key:1,clickable:"","active-class":"text-black",onClick:l[11]||(l[11]=n=>g(v).push("/property-listing"))},{default:t(()=>[e(o,{avata:""},{default:t(()=>[i("div",Ye,[e(p,{size:"25px",name:"cottage",class:"q-mr-sm"}),e(o,null,{default:t(()=>[u("My Properties")]),_:1})])]),_:1})]),_:1})),[[f]]):c("",!0),_.value.userType!="HOST"?m((s(),a(d,{key:2,clickable:"",onClick:l[12]||(l[12]=n=>I("wishlist")),"active-class":"text-black"},{default:t(()=>[e(o,null,{default:t(()=>[i("div",Ge,[e(p,{size:"25px",name:"favorite_border",class:"q-mr-sm"}),e(o,null,{default:t(()=>[u("My Wishlist")]),_:1})])]),_:1})]),_:1})),[[f]]):c("",!0)]),e($,{inset:""}),i("div",Je,[m((s(),a(d,{clickable:""},{default:t(()=>[e(o,{avata:""},{default:t(()=>[i("div",Ke,[e(p,{size:"25px",name:"settings",class:"q-mr-sm"}),e(o,null,{default:t(()=>[u("Settings")]),_:1})])]),_:1})]),_:1})),[[f]]),m((s(),a(d,{clickable:""},{default:t(()=>[e(o,{avata:""},{default:t(()=>[i("div",Xe,[e(p,{size:"25px",name:"help_outline",class:"q-mr-sm"}),e(o,null,{default:t(()=>[u("Help")]),_:1})])]),_:1})]),_:1})),[[f]]),m((s(),a(d,{clickable:"",to:"/signout"},{default:t(()=>[e(o,{avata:""},{default:t(()=>[i("div",Ze,[e(p,{size:"25px",name:"logout",class:"q-mr-sm"}),e(o,null,{default:t(()=>[u("Logout")]),_:1})])]),_:1})]),_:1})),[[f]])])])]),_:1},8,["modelValue"])):c("",!0),e(ye,null,{default:t(()=>[e(te),e(H,{style:{height:"50px"}}),e($,{class:"q-my-xl"}),e(H,{style:{height:"50px"}})]),_:1}),r.$q.screen.sm||r.$q.screen.xs?(s(),a(ge,{key:1,reveal:"",bordered:"",class:"bg-grey-3 text-primary"},{default:t(()=>[e(be,{"no-caps":"",modelValue:A.value,"onUpdate:modelValue":l[16]||(l[16]=n=>A.value=n),class:"text-warning"},{default:t(()=>[e(L,{name:"search",icon:"search",label:"Explore",onClick:R}),e(L,{name:"favorite",icon:"favorite",label:"Wishlists",onClick:ee}),y.value==null?(s(),a(L,{key:0,name:"favorite",icon:"lock",label:"Login",onClick:l[14]||(l[14]=n=>g(v).push("/login"))})):c("",!0),y.value!=null&&(r.$q.screen.xs||r.$q.screen.sm)?(s(),a(L,{key:1,name:"menu",icon:"menu",label:"Menu",onClick:l[15]||(l[15]=n=>C.value=!C.value)})):c("",!0)]),_:1},8,["modelValue"])]),_:1})):(s(),a(xe,{key:2}))]),_:1})}}});var Ht=le(et,[["__scopeId","data-v-1fe7cf68"]]);export{Ht as default};
