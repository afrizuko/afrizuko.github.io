import{Q as I}from"./use-dark.0ca98b24.js";import{_ as ce,d as de,aV as ue,u as me,af as ve,v as fe,r as x,c,o as _e,aH as ge,y as o,z as f,A as s,B as a,f as t,H as Y,I as l,C as d,E as g,J as P,aC as z,Q as X,G as k,aB as he,F as R,K as C,D as O}from"./index.e0ba20ab.js";import{a as N,Q as xe}from"./QItem.3c7022c1.js";import{Q as we}from"./QScrollArea.7b7a4ba0.js";import{Q}from"./QSeparator.03bcccd3.js";import{Q as D}from"./QChip.9ece5a9b.js";import{Q as B}from"./QCard.c0d77396.js";import{Q as U}from"./QSpace.ccdd6291.js";import{Q as be}from"./QBtnGroup.2a74557e.js";import{a as ke,Q as Re}from"./QCarousel.ff21d3e1.js";import{Q as Z}from"./QTooltip.f3f42fb2.js";import{Q as E}from"./position-engine.4babaccd.js";import{Q as Qe}from"./QCheckbox.9b2971e5.js";import{Q as Ee}from"./QPagination.832939e0.js";import{Q as Se}from"./QRating.e50ccac8.js";import{Q as qe}from"./QList.30665490.js";import{Q as Ie}from"./QPage.b96d4440.js";import{_ as Pe}from"./default-avatar-icon.adf04dc9.js";import{u as Ce}from"./property.530a9f9d.js";import{u as Oe}from"./user.fba00a9f.js";import{u as Ne}from"./account.0f37c180.js";import{_ as Be}from"./NewsLetter.966c807a.js";import{_ as Ue}from"./TypesOfStays.635b6977.js";import"./QResizeObserver.13ce5977.js";import"./QScrollObserver.e58d1885.js";import"./scroll.d2ead3f3.js";import"./TouchPan.50f8bdc3.js";import"./touch.3df10340.js";import"./selection.e223a394.js";import"./format.c860d4da.js";import"./use-panel.a85fcb96.js";import"./use-cache.b0833c75.js";import"./use-timeout.b7c36aec.js";import"./focus-manager.b507780d.js";import"./use-checkbox.9752ddfd.js";import"./use-form.17ab9b10.js";import"./QInput.081695b1.js";import"./uid.42677368.js";import"./home.c4c82e7b.js";const Ve={class:"row justify-between q-mt-xl"},ye={class:"col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 q-px-lg"},Te={class:"column items-center"},pe={class:"row q-ma-md"},Ae={class:"text-bold text-h5"},Le={class:"text-center text-subtitle1 q-my-md",style:{width:"50%"}},je={key:1},ze={class:"column items-start",style:{"align-content":"center"}},De={class:"col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 q-px-lg"},Fe={class:"q-px-md"},Me={class:"text-bold text-h5"},Ge={class:"text-subtitle1"},$e={class:"row"},Ke={class:"col-xl-4 col-lg-6 col-md-5 col-sm-5 col-xs-12 q-py-md q-px-md cursor-pointer"},We={class:"row"},He={class:"absolute-top-right no-padding",style:{"background-color":"transparent"}},Je={class:"q-my-sm"},Ye={class:"row"},Xe={key:0},Ze={class:"q-mr-sm"},et={class:"q-mt-md"},tt={class:"row"},st={class:"text-bold text-positive"},at={class:"text-black"},lt={class:"text-grey"},ot={class:"q-pa-lg flex flex-center"},it=de({__name:"bookings",setup(nt){var J;const S=ue();me();const b=ve(),V=Oe(),m=Ne(),h=Ce(),ee=fe(),_=x("BOOKING"),y=x(!1),T=x(8),p=x(1),w=x(42),F=x([1,1,1,1,1,1,1,1,1,1,1]);c(()=>V.getAvatar);const M=c(()=>V.getUserRating),q=c(()=>h.getProperties);c(()=>h.getImages);const te=c(()=>{const r=(p.value-1)*T.value,i=r+T.value;return q.value.slice(r,i)});c(()=>Math.ceil(q.value.length/T.value)),x({rating:0,comment:null,authorId:(J=ee.currentUser())==null?void 0:J.sub,objectType:"USER",objectId:String(S.params.id)});const se=c(()=>JSON.stringify(m.getPropertyReviews)===JSON.stringify({})),A=c(()=>m.getPropertyReviews);c(()=>h.getPropertyRating),c(()=>Object.values(A.value).map(i=>i.user.id));const G=c(()=>q.value.map(r=>r.id)),L=c(()=>m.getWishlist),$=c(()=>m.getHostAvatar),v=c(()=>m.getHost);c(()=>JSON.stringify(h.getPropertyReviews)===JSON.stringify({})),c(()=>h.getResponse);async function ae(){await m.findUserPhoto({objectType:"USER",objectIds:[S.params.id],fileType:"FILE_TYPE_IMAGE"},!0)}function K(){const r=window.scrollY,i=70;console.log("scrollPosition => "+r),console.log("threshold => "+i),y.value=r>i&&r<2700}async function W(){await m.findWishListByPropertyId({objectType:"PROPERTY",objectId:G.value})}async function le(){await h.findPropertyDetails({tenantId:S.params.id})}async function oe(){await m.findUserInfo({ids:[S.params.id]},!0)}async function ie(r){let i={objectType:"PROPERTY",objectId:r};L.value[r]!=null?await m.removeFromWishList(i):await m.addToWishList(i),b.showAlert(m.getResponse.message,m.getResponse.code,"bottom-left"),await W()}async function ne(){q.value.length>0&&await h.findPropertyRating({objectType:"PROPERTY",object_ids:G.value},1)}async function re(){await V.findUserRatings({pageSize:10})}function H(r){_.value=r}return _e(async()=>{window.addEventListener("scroll",K),await le(),await ne(),await W(),await ae(),await oe(),await re()}),ge(()=>{window.removeEventListener("scroll",K)}),(r,i)=>(o(),f(Ie,{class:"q-mx-xl"},{default:s(()=>[a("div",Ve,[a("div",ye,[t(B,{flat:"",bordered:"",class:z([{"fixed-card":y.value,card:!y.value},"col-xl-12 col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md q-ml-xs"])},{default:s(()=>{var e;return[a("div",Te,[a("div",pe,[t(N,{avatar:""},{default:s(()=>[t(Y,{size:"100px"},{default:s(()=>{var u,n;return[(u=$.value[0])!=null&&u.uri?(o(),f(I,{key:0,src:(n=$.value[0])==null?void 0:n.uri},null,8,["src"])):(o(),f(I,{key:1,src:Pe}))]}),_:1})]),_:1})]),a("div",Ae,l(v.value.firstName)+" "+l(v.value.lastName),1),a("div",Le,[((e=v.value.narration)==null?void 0:e.length)>50?(o(),f(we,{key:0,style:{height:"100px","max-width":"300px"},class:"text-center"},{default:s(()=>[d(l(v.value.narration!==""?v.value.narration:"No introduction yet"),1)]),_:1})):(o(),g("div",je,l(v.value.narration!==""?v.value.narration:"No introduction yet"),1))])]),t(Q,{inset:"",class:"q-my-md"}),a("div",ze,[t(D,{"text-color":"black",color:"white",icon:"home",size:"15px",class:"start"},{default:s(()=>[d(" Currently lives in "+l(v.value.addressLine!=""?v.value.addressLine:"not available"),1)]),_:1}),t(D,{"text-color":"black",color:"white",icon:"language",size:"15px",class:"start"},{default:s(()=>[d(" Language spoken English ")]),_:1}),t(D,{"text-color":"black",color:"white",icon:"event",size:"15px",class:"start"},{default:s(()=>[d(" Joined on "+l(P(b).formatStartDate(v.value.created)),1)]),_:1})])]}),_:1},8,["class"])]),a("div",De,[t(B,{bordered:"",flat:"",class:"col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 q-py-md"},{default:s(()=>[a("div",Fe,[a("div",Me,l(v.value.firstName)+" "+l(v.value.lastName)+"'s "+l(_.value=="BOOKING"?"bookings":"reservations"),1),a("div",Ge,"Check out your current "+l(_.value=="BOOKING"?"bookings":"reservations")+" below for essential details. ",1),t(U,{style:{height:"20px"}}),t(be,{rounded:"",class:"q-my-sm"},{default:s(()=>[t(X,{"no-caps":"",color:_.value=="BOOKING"?"warning":"",label:"Bookings",modelValue:_.value,"onUpdate:modelValue":i[0]||(i[0]=e=>_.value=e),class:z({"text-black":_.value!="BOOKING"}),onClick:i[1]||(i[1]=e=>H("BOOKING"))},null,8,["color","modelValue","class"]),t(X,{"no-caps":"",color:_.value=="RESERVED"?"warning":"",label:"Reserved",modelValue:_.value,"onUpdate:modelValue":i[2]||(i[2]=e=>_.value=e),class:z({"text-black":_.value!="RESERVED"}),onClick:i[3]||(i[3]=e=>H("RESERVED"))},null,8,["color","modelValue","class"])]),_:1}),t(Q,{class:"q-my-md",style:{width:"10%"}})]),a("div",$e,[(o(!0),g(R,null,k(te.value,(e,u)=>(o(),g("div",Ke,[(o(),f(B,{key:u,flat:"",onClick:n=>r.$router.push(`/listing-stay-details/${e.id}`)},{default:s(()=>[(o(),f(ke,{modelValue:F.value[u],"onUpdate:modelValue":n=>F.value[u]=n,"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"",arrows:"","control-color":"amber",height:"auto",key:u,autoplay:!0,infinite:"",onClick:i[4]||(i[4]=he(()=>{},["stop"]))},{default:s(()=>[(o(!0),g(R,null,k(e.images,n=>(o(),f(Re,{name:n.id,class:"q-carousel__slides-container",key:u},{default:s(()=>[a("div",We,[t(I,{ratio:4/3,class:"row",src:n.uri},{default:s(()=>[a("div",He,[t(C,{size:"25px",class:"q-mr-sm q-mt-sm",color:L.value[e==null?void 0:e.id]==null?"primary":"negative",name:L.value[e==null?void 0:e.id]!=null?"favorite":"favorite_border",onClick:j=>ie(e==null?void 0:e.id)},null,8,["color","name","onClick"])])]),_:2},1032,["src"])])]),_:2},1032,["name"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])),a("div",Je,[a("div",Ye,[(o(!0),g(R,null,k(e==null?void 0:e.features,n=>(o(),g("div",null,[n.feature=="FEATURE_BATH_ROOMS"||n.feature=="FEATURE_BED_ROOMS"?(o(),g("div",Xe,[t(C,{name:P(b).featureIcon(n.feature),class:"q-my-md q-mr-xs"},null,8,["name"]),a("span",Ze,l(n.value)+" "+l(n.feature=="FEATURE_SQUARE_METERS"?"Sq.Ft":n.feature=="FEATURE_BED_ROOMS"?"beds":"baths"),1)])):O("",!0)]))),256))]),a("div",null,[t(E,{class:"two-line-break text-h6 text-bold"},{default:s(()=>[d(l((e==null?void 0:e.name.length)>w.value?e.name.substring(0,w.value)+"...":e.name)+" ",1),e.name>w.value?(o(),f(Z,{key:0},{default:s(()=>[d(l(e.name),1)]),_:2},1024)):O("",!0)]),_:2},1024),a("div",et,[t(C,{name:"location_on",class:"no-margin",size:"20px"}),a("span",null,[d(l((e==null?void 0:e.address.street)>w.value?(e==null?void 0:e.address.street.substring(0,w.value))+"...":e==null?void 0:e.address.street)+" ",1),(e==null?void 0:e.address.street.length)>w.value?(o(),f(Z,{key:0},{default:s(()=>[d(l(e==null?void 0:e.address.street),1)]),_:2},1024)):O("",!0)])]),t(Q,{class:"q-my-md",style:{width:"20%"}}),a("div",tt,[a("div",null,[a("div",st,[d(l(e.unitPrice.currencyCode)+" "+l(P(b).commaSeparate(e.unitPrice.units))+" /",1),a("span",at,l(e.chargeCycle.toLowerCase()),1)])]),t(U),a("div",null,[se.value?(o(),f(C,{key:1,name:"star_border",size:"20px"})):(o(),f(Qe,{key:0,"checked-icon":"star","unchecked-icon":"star","indeterminate-icon":"star",color:"warning","model-value":""},{default:s(()=>{var n,j;return[d(l((n=A.value[e==null?void 0:e.id])==null?void 0:n.rating)+" ",1),a("span",lt,"("+l((j=A.value[e==null?void 0:e.id])==null?void 0:j.reviewCount)+")",1)]}),_:2},1024)),d(" None ")])])])])]),_:2},1032,["onClick"]))]))),256))]),a("div",ot,[t(Ee,{modelValue:p.value,"onUpdate:modelValue":i[5]||(i[5]=e=>p.value=e),max:5,input:"","direction-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward",color:"warning"},null,8,["modelValue"])])]),_:1}),t(B,{bordered:"",flat:"",class:"q-pa-md q-mt-xl"},{default:s(()=>[t(qe,{bordered:"",class:"rounded-borders"},{default:s(()=>[t(E,{header:"",class:"text-black text-bold text-h5"},{default:s(()=>[d("Reviews ("+l(Object.keys(M.value).length)+" reviews) ",1)]),_:1}),t(Q,{class:"q-my-md",style:{width:"5%","margin-left":"15px"}}),(o(!0),g(R,null,k(M.value,e=>(o(),g("div",null,[(o(!0),g(R,null,k(e.reviews,u=>(o(),g("div",null,[t(xe,null,{default:s(()=>[t(N,{avatar:"",class:"q-pb-lg"},{default:s(()=>[t(Y,null,{default:s(()=>[t(I,{src:"https://cdn.quasar.dev/img/avatar2.jpg"})]),_:1})]),_:1}),t(N,{class:"q-pt-md"},{default:s(()=>[t(E,{lines:"1",class:"text-weight-bold"},{default:s(()=>[d(l(u.user.firstName)+" "+l(u.user.lastName),1)]),_:2},1024),t(E,{lines:"1",class:"q-mb-sm"},{default:s(()=>[d(l(P(b).formatStartDate(u.created)),1)]),_:2},1024),t(E,{class:"text-subtitle1"},{default:s(()=>[d(l(u.comment),1)]),_:2},1024)]),_:2},1024),t(N,{side:"",top:""},{default:s(()=>[t(Se,{"model-value":u.rating,color:"warning",max:5},null,8,["model-value"])]),_:2},1024)]),_:2},1024)]))),256)),r.i!=5?(o(),f(Q,{key:0,inset:"item",class:"q-my-md"})):O("",!0)]))),256))]),_:1})]),_:1})])]),t(U,{style:{height:"100px"}}),t(Ue),t(U,{style:{height:"150px"}}),t(Be)]),_:1}))}});var Kt=ce(it,[["__scopeId","data-v-32383572"]]);export{Kt as default};
