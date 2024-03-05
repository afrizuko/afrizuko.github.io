import{b as ce,Q as F,a as O}from"./QHeader.004e4159.js";import{_ as de,d as me,u as pe,k as fe,aa as _e,r as Y,c as y,o as ve,l as ye,m as a,v as U,f as e,p as t,q as o,F as G,s as r,n as s,C as f,t as _,Q as w,x as he,y as $,z as c,A as h,B as I,R as k,D as ke,E as ge}from"./index.d15ae335.js";import{Q as xe}from"./QInput.4369fdf9.js";import{Q as R}from"./QSpace.ad51b65b.js";import{Q as W}from"./QBadge.bbb4c780.js";import{Q as x}from"./QImg.84d4471d.js";import{Q as i}from"./QItemSection.d1f223f0.js";import{Q as L}from"./QItemLabel.f424bf05.js";import{Q as v}from"./QItem.89894a8b.js";import{Q as J}from"./QCard.921cf3a5.js";import{Q as K}from"./QMenu.79ece5ed.js";import{Q as A}from"./QSeparator.321b633b.js";import{Q as be}from"./QPageContainer.d604afee.js";import{Q as Qe,M as we}from"./MainFooter.747e2079.js";import{Q as qe}from"./QLayout.7ea04cad.js";import{Q as X}from"./QCardSection.223fe0f9.js";import{Q as Se}from"./QDialog.3910d311.js";import{_ as D}from"./default-avatar-icon.adf04dc9.js";import{u as Z}from"./account.a9fbbfd8.js";import{u as Pe}from"./property.b76182b5.js";import{u as Te}from"./payment.96de4ec3.js";import"./QResizeObserver.d33fd5fa.js";import"./use-dark.50337edb.js";import"./uid.42677368.js";import"./focus-manager.b507780d.js";import"./use-form.e49f43a6.js";import"./position-engine.ae755088.js";import"./selection.e9d4ec32.js";import"./use-timeout.4f8fcbe7.js";import"./scroll.5d6e86f0.js";import"./use-prevent-scroll.c840e0db.js";import"./pinterest.da3c757a.js";import"./QScrollObserver.9ab7f6dd.js";const ee=q=>(ke("data-v-39b1dca4"),q=q(),ge(),q),Ce={style:{width:"30%"}},Ie={key:0,style:{width:"30%","align-items":"center"},class:"cursor-pointer"},Le={style:{width:"30%","text-align":"right"}},ze=ee(()=>o("div",{class:"text-h6 q-ma-md"},"Notifications",-1)),Ne={class:"column items-center"},Be={class:"text-subtitle1 q-mt-sm q-mb-xs"},Me={class:"q-my-md q-mx-sm"},Ue={class:"row"},$e={class:"row"},Re={class:"row"},Ae={class:"row"},De={class:"q-my-sm q-mx-sm"},Ee={class:"row"},He={class:"row"},Ve={class:"row"},je={class:"text-bold text-caption text-black"},Fe={class:"text-weight-bold text-subtitle1 text-positive"},Oe={class:"q-pa-md q-gutter-sm"},Ye=ee(()=>o("div",{class:"text-h6"},"Alert",-1)),Ge=me({__name:"PropertyLayout",setup(q){const S=pe(),b=fe(),te=Z(),z=Pe(),m=Z(),N=_e(),ae=Te(),E=Y(!1),se=Y(!0),P=y(()=>{var n;return(n=b.currentUser())==null?void 0:n.aud[0]}),T=y(()=>m.getAvatar),g=y(()=>m.getUser),H=y(()=>m.getNotifications),V=y(()=>m.getInitiatorPhotos),C=y(()=>z.getProperties),B=y(()=>ae.getPaymentDetails);function M(n){te.setCurrentTab(n),S.push("/account")}function oe(){z.$reset(),z.setOperationMode(!1),S.push("/add-listing")}function ie(){S.push(`/bookings/${b.currentUser().aud[0]}`)}async function re(){b.currentUser()!=null&&(await m.findUserPhoto({objectType:"USER",objectIds:[b.currentUser().aud[0]],fileType:"FILE_TYPE_IMAGE"}),await m.findUserInfo({ids:[b.currentUser().aud[0]]}))}async function le(){await m.findNotifications({objectType:"PROPERTY"})}async function ne(){await m.findPhotos({objectType:"USER",objectIds:H.value.map(n=>n.initiator.id)})}return ve(async()=>{await re(),await le(),await ne()}),(n,u)=>{const ue=ye("router-view");return a(),U(G,null,[e(qe,{view:"hHh LpR lff"},{default:t(()=>[e(ce,{elevated:!1,class:"q-pa-md"},{default:t(()=>[e(F,{class:"row"},{default:t(()=>[o("div",Ce,[e(O,{class:"text-black cursor-pointer",onClick:u[0]||(u[0]=l=>n.$router.push("/"))},{default:t(()=>[r(" Ppangisa ")]),_:1})]),n.$q.screen.lg||n.$q.screen.xl?_("",!0):(a(),U("div",Ie,[(a(),s(xe,{key:0,outlined:"",rounded:"",color:"grey",label:"Search by Location . Property . Price",style:{width:"100%"},"model-value":""},{prepend:t(()=>[e(f,{name:"search"})]),_:1}))])),e(R),o("div",Le,[g.value.userType=="HOST"&&P.value!=null?(a(),s(w,{key:0,"no-caps":"",outline:"",rounded:"",label:"List Your Property",class:"q-mx-sm text-black",onClick:oe})):_("",!0),P.value==null?(a(),s(w,{key:1,"no-caps":"",outline:"",rounded:"",label:"Login",class:"q-mx-sm text-black",to:"/login"})):_("",!0),P.value!=null?(a(),s(w,{key:2,flat:"",round:"",icon:"notifications_none",class:"q-mr-md",color:"black",size:"15px"},{default:t(()=>[e(W,{floating:"",color:"red",rounded:""}),e(K,{style:{width:"28%"}},{default:t(()=>[e(J,{flat:"",class:"q-mx-md"},{default:t(()=>[ze,(a(!0),U(G,null,he(H.value,l=>(a(),s(v,{class:"q-my-md cursor-pointer"},{default:t(()=>[e(i,{top:"",avatar:""},{default:t(()=>[e($,{size:"50px"},{default:t(()=>{var p;return[V.value[l.initiator.id].files?(a(),s(x,{key:0,src:(p=V.value[l.initiator.id].files[0])==null?void 0:p.uri},null,8,["src"])):(a(),s(x,{key:1,src:D}))]}),_:2},1024)]),_:2},1024),e(i,null,{default:t(()=>[e(L,null,{default:t(()=>[r(c(l.initiator.firstName)+" "+c(l.initiator.lastName),1)]),_:2},1024),e(L,{class:"text-subtitle1",lines:"1"},{default:t(()=>[r(c(l.content),1)]),_:2},1024),e(L,{caption:""},{default:t(()=>[r("5 min ago")]),_:1})]),_:2},1024),e(i,{side:"",top:"",class:"q-mt-md"},{default:t(()=>[e(W,{rounded:"",color:"indigo"})]),_:1})]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})):_("",!0),P.value!=null?(a(),s($,{key:3,class:"q-mr-xl cursor-pointer"},{default:t(()=>{var l,p;return[(l=T.value[0])!=null&&l.uri?(a(),s(x,{key:0,src:(p=T.value[0])==null?void 0:p.uri},null,8,["src"])):(a(),s(x,{key:1,src:D})),e(K,{style:{width:"20%"},"auto-close":""},{default:t(()=>[o("div",Ne,[e($,{size:"50px",class:"q-mt-xs"},{default:t(()=>{var d,Q;return[(d=T.value[0])!=null&&d.uri?(a(),s(x,{key:0,src:(Q=T.value[0])==null?void 0:Q.uri},null,8,["src"])):(a(),s(x,{key:1,src:D}))]}),_:1}),o("div",Be,c(g.value.firstName)+" "+c(g.value.lastName),1)]),e(A,{inset:""}),o("div",Me,[h((a(),s(v,{clickable:"",onClick:u[2]||(u[2]=d=>M("account")),"active-class":"text-black"},{default:t(()=>[e(i,{avata:""},{default:t(()=>[o("div",Ue,[e(f,{size:"25px",name:"perm_identity",class:"q-mr-sm",onClick:u[1]||(u[1]=d=>M("account"))}),e(i,null,{default:t(()=>[r("My Account")]),_:1})])]),_:1})]),_:1})),[[k]]),g.value.userType!="HOST"?h((a(),s(v,{key:0,clickable:"","active-class":"text-black",onClick:ie},{default:t(()=>[e(i,{avata:""},{default:t(()=>[o("div",$e,[e(f,{size:"25px",name:"bookmark_border",class:"q-mr-sm"}),e(i,null,{default:t(()=>[r("My Bookings")]),_:1})])]),_:1})]),_:1})),[[k]]):_("",!0),g.value.userType!="TENANT"?h((a(),s(v,{key:1,clickable:"","active-class":"text-black",onClick:u[3]||(u[3]=d=>I(S).push("/property-listing"))},{default:t(()=>[e(i,{avata:""},{default:t(()=>[o("div",Re,[e(f,{size:"25px",name:"cottage",class:"q-mr-sm"}),e(i,null,{default:t(()=>[r("My Properties")]),_:1})])]),_:1})]),_:1})),[[k]]):_("",!0),g.value.userType!="HOST"?h((a(),s(v,{key:2,clickable:"",onClick:u[4]||(u[4]=d=>M("wishlist")),"active-class":"text-black"},{default:t(()=>[e(i,null,{default:t(()=>[o("div",Ae,[e(f,{size:"25px",name:"favorite_border",class:"q-mr-sm"}),e(i,null,{default:t(()=>[r("My Wishlist")]),_:1})])]),_:1})]),_:1})),[[k]]):_("",!0)]),e(A,{inset:""}),o("div",De,[h((a(),s(v,{clickable:""},{default:t(()=>[e(i,{avata:""},{default:t(()=>[o("div",Ee,[e(f,{size:"25px",name:"settings",class:"q-mr-sm"}),e(i,null,{default:t(()=>[r("Settings")]),_:1})])]),_:1})]),_:1})),[[k]]),h((a(),s(v,{clickable:""},{default:t(()=>[e(i,{avata:""},{default:t(()=>[o("div",He,[e(f,{size:"25px",name:"help_outline",class:"q-mr-sm"}),e(i,null,{default:t(()=>[r("Help")]),_:1})])]),_:1})]),_:1})),[[k]]),h((a(),s(v,{clickable:"",to:"/signout"},{default:t(()=>[e(i,{avata:""},{default:t(()=>[o("div",Ve,[e(f,{size:"25px",name:"logout",class:"q-mr-sm"}),e(i,null,{default:t(()=>[r("Logout")]),_:1})])]),_:1})]),_:1})),[[k]])])]),_:1})]}),_:1})):(a(),s(w,{key:4,"no-caps":"",outline:"",rounded:"",label:"Become a host",class:"q-mx-sm text-black",to:"/signup"}))])]),_:1})]),_:1}),e(be,null,{default:t(()=>[e(ue),e(R,{style:{height:"50px"}}),e(A,{class:"q-my-xl"}),e(R,{style:{height:"50px"}})]),_:1}),n.$q.screen.sm||n.$q.screen.xs?(a(),s(Qe,{key:0,reveal:"",elevated:"",class:"bg-primary"},{default:t(()=>[e(F,null,{default:t(()=>[e(O,{class:"column"},{default:t(()=>{var l,p,d,Q,j;return[o("div",je,[o("span",Fe,c((l=C.value[0])==null?void 0:l.unitPrice.currencyCode)+" "+c(I(N).commaSeparate((p=C.value[0])==null?void 0:p.unitPrice.units))+"."+c((d=C.value[0])==null?void 0:d.unitPrice.nanos),1),r(" /"+c((Q=C.value[0])==null?void 0:Q.chargeCycle.toLowerCase()),1)]),o("div",null,[((j=B.value.period)==null?void 0:j.from)!=null?(a(),s(L,{key:0,lines:"1",class:"text-caption text-black",style:{"text-decoration":"underline"}},{default:t(()=>[r(c(I(N).formatDateMonthDay(B.value.period.from))+" - "+c(I(N).formatDateMonthDay(B.value.period.to)),1)]),_:1})):_("",!0)])]}),_:1}),e(w,{rounded:"",color:"warning",to:"/checkout"},{default:t(()=>[r("Reserve")]),_:1})]),_:1})]),_:1})):(a(),s(we,{key:1}))]),_:1}),o("div",Oe,[e(Se,{modelValue:E.value,"onUpdate:modelValue":u[5]||(u[5]=l=>E.value=l),persistent:"",maximized:se.value,"transition-show":"slide-up","transition-hide":"slide-down"},{default:t(()=>[e(J,{class:"bg-primary text-white"},{default:t(()=>[e(X,null,{default:t(()=>[Ye]),_:1}),e(X,{class:"q-pt-none"},{default:t(()=>[r(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore. ")]),_:1})]),_:1})]),_:1},8,["modelValue","maximized"])])],64)}}});var Tt=de(Ge,[["__scopeId","data-v-39b1dca4"]]);export{Tt as default};
