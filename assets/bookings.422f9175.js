import{Q as I}from"./QImg.5eac1bcc.js";import{_ as ce,d as de,aS as ue,u as me,aa as ve,k as fe,r as x,c,o as _e,aH as ge,m as o,n as f,p as s,q as a,f as t,y as Y,z as l,s as d,v as g,B as P,aC as z,Q as X,x as k,aB as he,F as R,C,t as O}from"./index.29cc8f67.js";import{Q as p}from"./QItemSection.52be14ae.js";import{Q as xe}from"./QScrollArea.a864bf6d.js";import{Q}from"./QSeparator.9b09cdb2.js";import{Q as F}from"./QChip.8303e392.js";import{Q as N}from"./QCard.2ae7f71b.js";import{Q as B}from"./QSpace.4d08d001.js";import{Q as we}from"./QBtnGroup.6162b522.js";import{a as be,Q as ke}from"./QCarousel.6a241fd0.js";import{Q as Z}from"./QTooltip.4826778a.js";import{Q as S}from"./QItemLabel.6e93fea8.js";import{Q as Re}from"./QCheckbox.777f4100.js";import{Q as Qe}from"./QPagination.5ffaf9e7.js";import{Q as Se}from"./QRating.c7d2c480.js";import{Q as qe}from"./QItem.15492546.js";import{Q as Ee}from"./QList.67417d79.js";import{Q as Ie}from"./QPage.4ee3a514.js";import{_ as Pe}from"./default-avatar-icon.adf04dc9.js";import{u as Ce}from"./property.061c8fe0.js";import{u as Oe}from"./user.dec7cc73.js";import{u as pe}from"./account.121b38ce.js";import{_ as Ne}from"./NewsLetter.654b612a.js";import{_ as Be}from"./TypesOfStays.9151a49d.js";import"./use-dark.f934fa20.js";import"./QResizeObserver.96a8f967.js";import"./QScrollObserver.47c76585.js";import"./scroll.1c2dbad9.js";import"./TouchPan.fab20d2f.js";import"./touch.3df10340.js";import"./selection.f6d0c368.js";import"./format.c860d4da.js";import"./use-panel.92641061.js";import"./use-cache.b0833c75.js";import"./position-engine.9cabe4fb.js";import"./use-timeout.1cfdbf42.js";import"./focus-manager.b507780d.js";import"./use-checkbox.a4f3c2b5.js";import"./use-form.286392dd.js";import"./QInput.4ec71da6.js";import"./uid.42677368.js";import"./home.f5a78e22.js";const Ue={class:"row justify-between q-mt-xl"},ye={class:"col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 q-px-lg"},Te={class:"column items-center"},Ve={class:"row q-ma-md"},Ae={class:"text-bold text-h5"},Le={class:"text-center text-subtitle1 q-my-md",style:{width:"50%"}},je={key:1},ze={class:"column items-start",style:{"align-content":"center"}},Fe={class:"col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 q-px-lg"},Me={class:"q-px-md"},De={class:"text-bold text-h5"},Ge={class:"text-subtitle1"},$e={class:"row"},We={class:"col-xl-4 col-lg-6 col-md-5 col-sm-5 col-xs-12 q-py-md q-px-md cursor-pointer"},Ke={class:"row"},He={class:"absolute-top-right no-padding",style:{"background-color":"transparent"}},Je={class:"q-my-sm"},Ye={class:"row"},Xe={key:0},Ze={class:"q-mr-sm"},et={class:"q-mt-md"},tt={class:"row"},st={class:"text-bold text-positive"},at={class:"text-black"},lt={class:"text-grey"},ot={class:"q-pa-lg flex flex-center"},it=de({__name:"bookings",setup(nt){var J;const q=ue();me();const b=ve(),U=Oe(),m=pe(),h=Ce(),ee=fe(),_=x("BOOKING"),y=x(!1),T=x(8),V=x(1),w=x(42),M=x([1,1,1,1,1,1,1,1,1,1,1]);c(()=>U.getAvatar);const D=c(()=>U.getUserRating),E=c(()=>h.getProperties);c(()=>h.getImages);const te=c(()=>{const r=(V.value-1)*T.value,i=r+T.value;return E.value.slice(r,i)});c(()=>Math.ceil(E.value.length/T.value)),x({rating:0,comment:null,authorId:(J=ee.currentUser())==null?void 0:J.sub,objectType:"USER",objectId:String(q.params.id)});const se=c(()=>JSON.stringify(m.getPropertyReviews)===JSON.stringify({})),A=c(()=>m.getPropertyReviews);c(()=>h.getPropertyRating),c(()=>Object.values(A.value).map(i=>i.user.id));const G=c(()=>E.value.map(r=>r.id)),L=c(()=>m.getWishlist),$=c(()=>m.getHostAvatar),v=c(()=>m.getHost);c(()=>JSON.stringify(h.getPropertyReviews)===JSON.stringify({})),c(()=>h.getResponse);async function ae(){await m.findUserPhoto({objectType:"USER",objectIds:[q.params.id],fileType:"FILE_TYPE_IMAGE"},!0)}function W(){const r=window.scrollY,i=70;console.log("scrollPosition => "+r),console.log("threshold => "+i),y.value=r>i&&r<2700}async function K(){await m.findWishListByPropertyId({objectType:"PROPERTY",objectId:G.value})}async function le(){await h.findPropertyDetails({tenantId:q.params.id})}async function oe(){await m.findUserInfo({ids:[q.params.id]},!0)}async function ie(r){let i={objectType:"PROPERTY",objectId:r};L.value[r]!=null?await m.removeFromWishList(i):await m.addToWishList(i),b.showAlert(m.getResponse.message,m.getResponse.code,"bottom-left"),await K()}async function ne(){E.value.length>0&&await h.findPropertyRating({objectType:"PROPERTY",object_ids:G.value},1)}async function re(){await U.findUserRatings({pageSize:10})}function H(r){_.value=r}return _e(async()=>{window.addEventListener("scroll",W),await le(),await ne(),await K(),await ae(),await oe(),await re()}),ge(()=>{window.removeEventListener("scroll",W)}),(r,i)=>(o(),f(Ie,{class:"q-mx-xl"},{default:s(()=>[a("div",Ue,[a("div",ye,[t(N,{flat:"",bordered:"",class:z([{"fixed-card":y.value,card:!y.value},"col-xl-12 col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md q-ml-xs"])},{default:s(()=>{var e;return[a("div",Te,[a("div",Ve,[t(p,{avatar:""},{default:s(()=>[t(Y,{size:"100px"},{default:s(()=>{var u,n;return[(u=$.value[0])!=null&&u.uri?(o(),f(I,{key:0,src:(n=$.value[0])==null?void 0:n.uri},null,8,["src"])):(o(),f(I,{key:1,src:Pe}))]}),_:1})]),_:1})]),a("div",Ae,l(v.value.firstName)+" "+l(v.value.lastName),1),a("div",Le,[((e=v.value.narration)==null?void 0:e.length)>50?(o(),f(xe,{key:0,style:{height:"100px","max-width":"300px"},class:"text-center"},{default:s(()=>[d(l(v.value.narration!==""?v.value.narration:"No introduction yet"),1)]),_:1})):(o(),g("div",je,l(v.value.narration!==""?v.value.narration:"No introduction yet"),1))])]),t(Q,{inset:"",class:"q-my-md"}),a("div",ze,[t(F,{"text-color":"black",color:"white",icon:"home",size:"15px",class:"start"},{default:s(()=>[d(" Currently lives in "+l(v.value.addressLine!=""?v.value.addressLine:"not available"),1)]),_:1}),t(F,{"text-color":"black",color:"white",icon:"language",size:"15px",class:"start"},{default:s(()=>[d(" Language spoken English ")]),_:1}),t(F,{"text-color":"black",color:"white",icon:"event",size:"15px",class:"start"},{default:s(()=>[d(" Joined on "+l(P(b).formatStartDate(v.value.created)),1)]),_:1})])]}),_:1},8,["class"])]),a("div",Fe,[t(N,{bordered:"",flat:"",class:"col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 q-py-md"},{default:s(()=>[a("div",Me,[a("div",De,l(v.value.firstName)+" "+l(v.value.lastName)+"'s "+l(_.value=="BOOKING"?"bookings":"reservations"),1),a("div",Ge,"Check out your current "+l(_.value=="BOOKING"?"bookings":"reservations")+" below for essential details. ",1),t(B,{style:{height:"20px"}}),t(we,{rounded:"",class:"q-my-sm"},{default:s(()=>[t(X,{"no-caps":"",color:_.value=="BOOKING"?"warning":"",label:"Bookings",modelValue:_.value,"onUpdate:modelValue":i[0]||(i[0]=e=>_.value=e),class:z({"text-black":_.value!="BOOKING"}),onClick:i[1]||(i[1]=e=>H("BOOKING"))},null,8,["color","modelValue","class"]),t(X,{"no-caps":"",color:_.value=="RESERVED"?"warning":"",label:"Reserved",modelValue:_.value,"onUpdate:modelValue":i[2]||(i[2]=e=>_.value=e),class:z({"text-black":_.value!="RESERVED"}),onClick:i[3]||(i[3]=e=>H("RESERVED"))},null,8,["color","modelValue","class"])]),_:1}),t(Q,{class:"q-my-md",style:{width:"10%"}})]),a("div",$e,[(o(!0),g(R,null,k(te.value,(e,u)=>(o(),g("div",We,[(o(),f(N,{key:u,flat:"",onClick:n=>r.$router.push(`/listing-stay-details/${e.id}`)},{default:s(()=>[(o(),f(be,{modelValue:M.value[u],"onUpdate:modelValue":n=>M.value[u]=n,"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"",arrows:"","control-color":"amber",height:"auto",key:u,autoplay:!0,infinite:"",onClick:i[4]||(i[4]=he(()=>{},["stop"]))},{default:s(()=>[(o(!0),g(R,null,k(e.images,n=>(o(),f(ke,{name:n.id,class:"q-carousel__slides-container",key:u},{default:s(()=>[a("div",Ke,[t(I,{ratio:4/3,class:"row",src:n.uri},{default:s(()=>[a("div",He,[t(C,{size:"25px",class:"q-mr-sm q-mt-sm",color:L.value[e==null?void 0:e.id]==null?"primary":"negative",name:L.value[e==null?void 0:e.id]!=null?"favorite":"favorite_border",onClick:j=>ie(e==null?void 0:e.id)},null,8,["color","name","onClick"])])]),_:2},1032,["src"])])]),_:2},1032,["name"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])),a("div",Je,[a("div",Ye,[(o(!0),g(R,null,k(e==null?void 0:e.features,n=>(o(),g("div",null,[n.feature=="FEATURE_BATH_ROOMS"||n.feature=="FEATURE_BED_ROOMS"?(o(),g("div",Xe,[t(C,{name:P(b).featureIcon(n.feature),class:"q-my-md q-mr-xs"},null,8,["name"]),a("span",Ze,l(n.value)+" "+l(n.feature=="FEATURE_SQUARE_METERS"?"Sq.Ft":n.feature=="FEATURE_BED_ROOMS"?"beds":"baths"),1)])):O("",!0)]))),256))]),a("div",null,[t(S,{class:"two-line-break text-h6 text-bold"},{default:s(()=>[d(l((e==null?void 0:e.name.length)>w.value?e.name.substring(0,w.value)+"...":e.name)+" ",1),e.name>w.value?(o(),f(Z,{key:0},{default:s(()=>[d(l(e.name),1)]),_:2},1024)):O("",!0)]),_:2},1024),a("div",et,[t(C,{name:"location_on",class:"no-margin",size:"20px"}),a("span",null,[d(l((e==null?void 0:e.address.street)>w.value?(e==null?void 0:e.address.street.substring(0,w.value))+"...":e==null?void 0:e.address.street)+" ",1),(e==null?void 0:e.address.street.length)>w.value?(o(),f(Z,{key:0},{default:s(()=>[d(l(e==null?void 0:e.address.street),1)]),_:2},1024)):O("",!0)])]),t(Q,{class:"q-my-md",style:{width:"20%"}}),a("div",tt,[a("div",null,[a("div",st,[d(l(e.unitPrice.currencyCode)+" "+l(P(b).commaSeparate(e.unitPrice.units))+" /",1),a("span",at,l(e.chargeCycle.toLowerCase()),1)])]),t(B),a("div",null,[se.value?(o(),f(C,{key:1,name:"star_border",size:"20px"})):(o(),f(Re,{key:0,"checked-icon":"star","unchecked-icon":"star","indeterminate-icon":"star",color:"warning","model-value":""},{default:s(()=>{var n,j;return[d(l((n=A.value[e==null?void 0:e.id])==null?void 0:n.rating)+" ",1),a("span",lt,"("+l((j=A.value[e==null?void 0:e.id])==null?void 0:j.reviewCount)+")",1)]}),_:2},1024)),d(" None ")])])])])]),_:2},1032,["onClick"]))]))),256))]),a("div",ot,[t(Qe,{modelValue:V.value,"onUpdate:modelValue":i[5]||(i[5]=e=>V.value=e),max:5,input:"","direction-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward",color:"warning"},null,8,["modelValue"])])]),_:1}),t(N,{bordered:"",flat:"",class:"q-pa-md q-mt-xl"},{default:s(()=>[t(Ee,{bordered:"",class:"rounded-borders"},{default:s(()=>[t(S,{header:"",class:"text-black text-bold text-h5"},{default:s(()=>[d("Reviews ("+l(Object.keys(D.value).length)+" reviews) ",1)]),_:1}),t(Q,{class:"q-my-md",style:{width:"5%","margin-left":"15px"}}),(o(!0),g(R,null,k(D.value,e=>(o(),g("div",null,[(o(!0),g(R,null,k(e.reviews,u=>(o(),g("div",null,[t(qe,null,{default:s(()=>[t(p,{avatar:"",class:"q-pb-lg"},{default:s(()=>[t(Y,null,{default:s(()=>[t(I,{src:"https://cdn.quasar.dev/img/avatar2.jpg"})]),_:1})]),_:1}),t(p,{class:"q-pt-md"},{default:s(()=>[t(S,{lines:"1",class:"text-weight-bold"},{default:s(()=>[d(l(u.user.firstName)+" "+l(u.user.lastName),1)]),_:2},1024),t(S,{lines:"1",class:"q-mb-sm"},{default:s(()=>[d(l(P(b).formatStartDate(u.created)),1)]),_:2},1024),t(S,{class:"text-subtitle1"},{default:s(()=>[d(l(u.comment),1)]),_:2},1024)]),_:2},1024),t(p,{side:"",top:""},{default:s(()=>[t(Se,{"model-value":u.rating,color:"warning",max:5},null,8,["model-value"])]),_:2},1024)]),_:2},1024)]))),256)),r.i!=5?(o(),f(Q,{key:0,inset:"item",class:"q-my-md"})):O("",!0)]))),256))]),_:1})]),_:1})])]),t(B,{style:{height:"100px"}}),t(Be),t(B,{style:{height:"150px"}}),t(Ne)]),_:1}))}});var Jt=ce(it,[["__scopeId","data-v-32383572"]]);export{Jt as default};
