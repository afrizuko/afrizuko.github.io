import{Q as P}from"./use-dark.ad276966.js";import{_ as Se,d as pe,aV as Ie,u as Ee,af as Pe,v as ye,r as q,c as d,o as Ue,aH as Ce,y as i,z as m,A as a,B as s,f as t,H as ie,I as l,J as b,C as u,E as f,Q as Y,aC as H,G as T,aB as Ae,F as V,K as y,D as L,L as Te,M as Ve}from"./index.7946e59e.js";import{a as N,Q as Le}from"./QItem.3413e48f.js";import{Q as ne}from"./QCheckbox.907f0d66.js";import{Q as Ne}from"./QScrollArea.e5b4554b.js";import{Q}from"./QSeparator.a8629110.js";import{Q as G}from"./QChip.94127689.js";import{Q as re}from"./QRating.99cbff20.js";import{Q as je}from"./QInput.64d2180c.js";import{Q as j}from"./QCard.924445d0.js";import{Q as Be}from"./QBtnGroup.f38a317a.js";import{a as Oe,Q as Me}from"./QCarousel.04d5e7f9.js";import{Q as ce}from"./QTooltip.ec749932.js";import{Q as U}from"./position-engine.c6d63749.js";import{Q as J}from"./QSpace.5bfa4d1e.js";import{Q as ze}from"./QPagination.746f6dc7.js";import{Q as Fe}from"./QList.c71a84ea.js";import{Q as $e}from"./QPage.1d57e43e.js";import{_ as de}from"./default-avatar-icon.adf04dc9.js";import{u as De}from"./property.7bf9bb4b.js";import{u as We}from"./user.1b4a8881.js";import{u as Ye}from"./account.65b2a608.js";import{_ as He}from"./NewsLetter.cb0da057.js";import{_ as Ge}from"./TypesOfStays.1565a23a.js";import"./use-checkbox.e60cbcce.js";import"./use-form.5abd52b8.js";import"./QResizeObserver.a4a68b71.js";import"./QScrollObserver.bd11d9e8.js";import"./scroll.2482edc2.js";import"./TouchPan.9af9f815.js";import"./touch.3df10340.js";import"./use-timeout.ea9f6b03.js";import"./focus-manager.b507780d.js";import"./format.c860d4da.js";import"./uid.42677368.js";import"./use-panel.476a21b8.js";import"./use-cache.b0833c75.js";import"./home.814d6640.js";const K=C=>(Te("data-v-97553abe"),C=C(),Ve(),C),Je={class:"row justify-between q-mt-xl"},Ke={class:"col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 q-px-lg"},Xe={class:"column items-center"},Ze={class:"row q-ma-md"},et={class:"text-bold text-h5"},tt={class:"text-grey"},st=K(()=>s("span",{class:"text-grey"},"No rating",-1)),at={class:"text-center text-subtitle1",style:{width:"50%"}},lt={key:1},ot={class:"column items-start",style:{"align-content":"center"}},it={class:"q-ml-xs text-bold"},nt=K(()=>s("span",{class:"q-ml-xs text-bold"},"English",-1)),rt={class:"q-ml-xs text-bold"},ct=K(()=>s("div",null,[s("h1",{class:"text-weight-bold text-h6 q-mb-sm q-mx-md"},"Leave a comment")],-1)),dt={class:"q-mx-md"},ut={class:"col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 q-px-lg"},mt={class:"text-bold text-h5"},vt={class:"text-subtitle1"},_t={class:"row"},ft={class:"col-xl-4 col-lg-6 col-md-5 col-sm-5 col-xs-12 q-py-md q-px-md cursor-pointer"},gt={class:"row"},ht={class:"absolute-top-right no-padding",style:{"background-color":"transparent"}},wt={class:"q-my-sm"},xt={class:"row"},bt={key:0},kt={class:"q-mr-sm"},Rt={class:"q-mt-md"},qt={class:"row"},Qt={class:"text-bold text-positive"},St={class:"text-black"},pt={key:0},It={class:"text-grey"},Et={key:1},Pt={class:"q-pa-lg flex flex-center"},yt=pe({__name:"host",setup(C){var se;const k=Ie(),ue=Ee(),w=Pe(),A=We(),g=Ye(),v=De(),me=ye(),B=q(!1),O=q(8),M=q(1),S=q(20),X=q([1,1,1,1,1,1,1,1,1,1,1]),h=q("Stays");d(()=>A.getAvatar);const R=d(()=>A.getUserRating),I=d(()=>v.getProperties),ve=d(()=>v.getImages),_e=d(()=>{const r=(M.value-1)*O.value,n=r+O.value;return I.value.slice(r,n)}),fe=d(()=>Math.ceil(I.value.length/O.value)),x=q({rating:0,comment:null,authorId:(se=me.currentUser())==null?void 0:se.sub,objectType:"USER",objectId:String(k.params.id)}),Z=d(()=>v.getReviewerAvatars),z=d(()=>v.getPropertyReviews);d(()=>v.getPropertyRating);const E=d(()=>{var r;return(r=A.getUserRating[k.params.id])==null?void 0:r.reviews}),F=d(()=>Object.keys(R.value)),$=d(()=>I.value.map(r=>r.id)),D=d(()=>g.getWishlist);d(()=>g.getHostAvatar);const c=d(()=>g.getHost);d(()=>JSON.stringify(v.getPropertyReviews)===JSON.stringify({}));const W=d(()=>v.getResponse);async function ge(){await g.findUserPhoto({objectType:"USER",objectIds:[k.params.id],fileType:"FILE_TYPE_IMAGE"},!0)}function ee(){const r=window.scrollY,n=70;console.log("scrollPosition => "+r),console.log("threshold => "+n),B.value=r>n&&r<524}async function he(){var r;((r=F.value)==null?void 0:r.length)>1&&await v.findReviewerAvatars({objectType:"USER",objectIds:F.value})}async function te(){await g.findWishListByPropertyId({objectType:"PROPERTY",objectId:$.value})}async function we(){let r={objectType:"PROPERTY",objectIds:$.value,fileType:"FILE_TYPE_IMAGE"};await v.findPropertyImages(r)}async function xe(){await v.findPropertyDetails({hostId:k.params.id})}async function be(){await g.findUserInfo({ids:[k.params.id]},!0)}async function ke(r){let n={objectType:"PROPERTY",objectId:r};D.value[r]!=null?await g.removeFromWishList(n):await g.addToWishList(n),w.showAlert(g.getResponse.message,g.getResponse.code,"bottom-left"),await te()}async function Re(){I.value.length>0&&await v.findPropertyRating({objectType:"PROPERTY",object_ids:$.value},1)}async function qe(){if(sessionStorage.getItem("token")==null){await ue.push("/login");return}await v.submitUserReview(x.value),W.value.code==0&&(x.value.comment=null,x.value.rating=0),w.showAlert(W.value.message,W.value.code,"")}async function Qe(){I.value.length>0&&await A.findUserRatings({objectType:"USER",objectIds:[k.params.id]})}return Ue(async()=>{window.addEventListener("scroll",ee),await xe(),await we(),await Re(),await te(),await ge(),await be(),await Qe(),await he()}),Ce(()=>{window.removeEventListener("scroll",ee)}),(r,n)=>(i(),m($e,{class:"q-mx-xl"},{default:a(()=>[s("div",Je,[s("div",Ke,[t(j,{flat:"",bordered:"",class:H([{"fixed-card":B.value,card:!B.value},"col-xl-12 col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md q-ml-xs"])},{default:a(()=>{var e;return[s("div",Xe,[s("div",Ze,[t(N,{avatar:""},{default:a(()=>[t(ie,{size:"100px"},{default:a(()=>[c.value.imgUri?(i(),m(P,{key:0,src:c.value.imgUri},null,8,["src"])):(i(),m(P,{key:1,src:de}))]),_:1})]),_:1})]),s("div",et,l(c.value.firstName)+" "+l(c.value.lastName),1),s("div",null,[b(w).computeAverageRating(E.value==null?[]:E.value)>0?(i(),m(ne,{key:0,"checked-icon":"star","unchecked-icon":"star","indeterminate-icon":"star",color:"warning","model-value":""},{default:a(()=>{var o;return[u(l(b(w).computeAverageRating(E.value==null?[]:E.value))+" ",1),s("span",tt,"("+l((o=E.value)==null?void 0:o.length)+")",1)]}),_:1})):(i(),m(ne,{key:1,"checked-icon":"star_outline","unchecked-icon":"star_outline","indeterminate-icon":"star_outline",color:"black","model-value":""},{default:a(()=>[st]),_:1}))]),s("div",at,[((e=c.value.narration)==null?void 0:e.length)>50?(i(),m(Ne,{key:0,style:{height:"100px","max-width":"300px"},class:"text-center"},{default:a(()=>[u(l(c.value.narration!==""?c.value.narration:"No introduction yet"),1)]),_:1})):(i(),f("div",lt,l(c.value.narration!==""?c.value.narration:"No introduction yet"),1))])]),t(Q,{inset:"",class:"q-my-md"}),s("div",ot,[t(G,{"text-color":"black",color:"white",icon:"home",size:"15px",class:"start"},{default:a(()=>[u(" Currently lives in "),s("span",it,l(c.value.addressLine!=""&&c.value.addressLine!=null?c.value.addressLine:"Not available"),1)]),_:1}),t(G,{"text-color":"black",color:"white",icon:"language",size:"15px",class:"start"},{default:a(()=>[u(" Language spoken "),nt]),_:1}),t(G,{"text-color":"black",color:"white",icon:"event",size:"15px",class:"start"},{default:a(()=>[u(" Joined on "),s("span",rt,l(b(w).formatStartDate(c.value.created)),1)]),_:1})]),t(Q,{inset:"",class:"q-my-md"}),ct,t(Q,{class:"q-my-md",style:{width:"10%","margin-left":"15px"}}),s("div",dt,[t(re,{size:"20px",modelValue:x.value.rating,"onUpdate:modelValue":n[0]||(n[0]=o=>x.value.rating=o),max:5,color:"warning",icon:"star_border","icon-selected":"star","icon-half":"star_half"},null,8,["modelValue"]),t(je,{rounded:"",outlined:"","bottom-slots":"",label:"Share your thoughts...",class:"q-my-md",color:"grey",modelValue:x.value.comment,"onUpdate:modelValue":n[1]||(n[1]=o=>x.value.comment=o)},{append:a(()=>[t(Y,{round:"",dense:"",color:"purple-9",icon:"arrow_forward",disable:x.value.comment==""||x.value.comment==null,onClick:qe},null,8,["disable"])]),_:1},8,["modelValue"])])]}),_:1},8,["class"])]),s("div",ut,[t(j,{bordered:"",flat:"",class:"col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 q-px-lg q-py-md"},{default:a(()=>[s("div",mt,l(c.value.firstName)+" "+l(c.value.lastName)+"'s listings",1),s("div",vt,l(c.value.firstName)+" "+l(c.value.lastName)+"'s listings is very rich, 5 star reviews help him to be more branded. ",1),t(Q,{class:"q-my-lg",style:{width:"5%"}}),t(Be,{rounded:"",class:"q-my-sm"},{default:a(()=>[t(Y,{"no-caps":"",rounded:"",color:h.value=="Stays"?"warning":"",label:"Other Listings",modelValue:h.value,"onUpdate:modelValue":n[2]||(n[2]=e=>h.value=e),onClick:n[3]||(n[3]=e=>h.value="Stays"),class:H({"text-black":h.value!="Stays"})},null,8,["color","modelValue","class"]),t(Y,{"no-caps":"",rounded:"",color:h.value=="Experiences"?"warning":"",label:"Experiences",modelValue:h.value,"onUpdate:modelValue":n[4]||(n[4]=e=>h.value=e),onClick:n[5]||(n[5]=e=>h.value="Experiences"),class:H({"text-black":h.value!="Experiences"})},null,8,["color","modelValue","class"])]),_:1}),s("div",_t,[(i(!0),f(V,null,T(_e.value,(e,o)=>(i(),f("div",ft,[(i(),m(j,{key:o,flat:"",onClick:p=>r.$router.push(`/listing-stay-details/${e.id}`)},{default:a(()=>{var p,ae,le;return[(i(),m(Oe,{modelValue:X.value[o],"onUpdate:modelValue":_=>X.value[o]=_,"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"",arrows:"","control-color":"amber",height:"auto",key:o,autoplay:!0,infinite:"",onClick:n[6]||(n[6]=Ae(()=>{},["stop"]))},{default:a(()=>{var _;return[(i(!0),f(V,null,T((_=ve.value[e.id])==null?void 0:_.files,oe=>(i(),m(Me,{name:oe.id,class:"q-carousel__slides-container",key:o},{default:a(()=>[s("div",gt,[t(P,{ratio:4/3,class:"row",src:oe.uri},{default:a(()=>[s("div",ht,[t(y,{size:"25px",class:"q-mr-sm q-mt-sm",color:D.value[e==null?void 0:e.id]==null?"primary":"negative",name:D.value[e==null?void 0:e.id]!=null?"favorite":"favorite_border",onClick:Ut=>ke(e==null?void 0:e.id)},null,8,["color","name","onClick"])])]),_:2},1032,["src"])])]),_:2},1032,["name"]))),128))]}),_:2},1032,["modelValue","onUpdate:modelValue"])),s("div",wt,[s("div",xt,[(i(!0),f(V,null,T(e==null?void 0:e.features,_=>(i(),f("div",null,[_.feature=="FEATURE_BATH_ROOMS"||_.feature=="FEATURE_BED_ROOMS"?(i(),f("div",bt,[t(y,{name:b(w).featureIcon(_.feature),class:"q-my-md q-mr-xs"},null,8,["name"]),s("span",kt,l(_.value)+" "+l(_.feature=="FEATURE_SQUARE_METERS"?"Sq.Ft":_.feature=="FEATURE_BED_ROOMS"?"beds":"baths"),1)])):L("",!0)]))),256))]),s("div",null,[t(U,{class:"two-line-break text-h6 text-bold"},{default:a(()=>[u(l((e==null?void 0:e.name.length)>S.value?e.name.substring(0,S.value)+"...":e.name)+" ",1),e.name>S.value?(i(),m(ce,{key:0},{default:a(()=>[u(l(e.name),1)]),_:2},1024)):L("",!0)]),_:2},1024),s("div",Rt,[t(y,{name:"location_on",class:"no-margin",size:"20px"}),s("span",null,[u(l((e==null?void 0:e.address.street)>S.value?(e==null?void 0:e.address.street.substring(0,S.value))+"...":e==null?void 0:e.address.street)+" ",1),(e==null?void 0:e.address.street.length)>S.value?(i(),m(ce,{key:0},{default:a(()=>[u(l(e==null?void 0:e.address.street),1)]),_:2},1024)):L("",!0)])]),t(Q,{class:"q-my-md",style:{width:"20%"}}),s("div",qt,[s("div",null,[s("div",Qt,[u(l(e.unitPrice.currencyCode)+" "+l(b(w).commaSeparate(e.unitPrice.units))+" /",1),s("span",St,l(e.chargeCycle.toLowerCase()),1)])]),t(J),((p=z.value[e==null?void 0:e.id])==null?void 0:p.reviews)!=null?(i(),f("div",pt,[t(y,{name:"star",size:"20px",color:"warning"}),u(" "+l(b(w).computeAverageRating((ae=z.value[e==null?void 0:e.id])==null?void 0:ae.reviews))+" ",1),s("span",It,"("+l((le=z.value[e==null?void 0:e.id])==null?void 0:le.reviews[0].reviewCount)+")",1)])):(i(),f("div",Et,[t(y,{name:"star_border",size:"20px"}),u(" None ")]))])])])]}),_:2},1032,["onClick"]))]))),256))]),s("div",Pt,[t(ze,{modelValue:M.value,"onUpdate:modelValue":n[7]||(n[7]=e=>M.value=e),max:fe.value,input:"","direction-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward",color:"warning"},null,8,["modelValue","max"])])]),_:1}),t(j,{bordered:"",flat:"",class:"q-pa-md q-mt-xl"},{default:a(()=>[t(Fe,{bordered:"",class:"rounded-borders"},{default:a(()=>[t(U,{header:"",class:"text-black text-bold text-h5"},{default:a(()=>{var e;return[u("Reviews ("+l((e=R.value[b(k).params.id])==null?void 0:e.reviews.length)+" reviews) ",1)]}),_:1}),t(Q,{class:"q-my-md",style:{width:"5%","margin-left":"15px"}}),(i(!0),f(V,null,T(F.value,e=>(i(),f("div",null,[t(Le,null,{default:a(()=>[t(N,{avatar:"",class:"q-pb-lg"},{default:a(()=>[t(ie,null,{default:a(()=>{var o;return[Z.value[e]!=null?(i(),m(P,{key:0,src:(o=Z.value[e].files[0])==null?void 0:o.uri},null,8,["src"])):(i(),m(P,{key:1,src:de}))]}),_:2},1024)]),_:2},1024),t(N,{class:"q-pt-md"},{default:a(()=>[t(U,{lines:"1",class:"text-weight-bold"},{default:a(()=>{var o,p;return[u(l((o=R.value[e])==null?void 0:o.reviews[0].user.firstName)+" "+l((p=R.value[e])==null?void 0:p.reviews[0].lastName),1)]}),_:2},1024),t(U,{lines:"1",class:"q-mb-sm"},{default:a(()=>{var o;return[u(l(b(w).formatStartDate((o=R.value[e])==null?void 0:o.reviews[0].created)),1)]}),_:2},1024),t(U,{class:"text-subtitle1"},{default:a(()=>{var o;return[u(l((o=R.value[e])==null?void 0:o.reviews[0].comment),1)]}),_:2},1024)]),_:2},1024),t(N,{side:"",top:""},{default:a(()=>{var o;return[t(re,{"model-value":(o=R.value[e])==null?void 0:o.reviews[0].rating,color:"warning",max:5},null,8,["model-value"])]}),_:2},1024)]),_:2},1024),r.i!=5?(i(),m(Q,{key:0,inset:"item",class:"q-my-md"})):L("",!0)]))),256))]),_:1})]),_:1})])]),t(J,{style:{height:"100px"}}),t(Ge),t(J,{style:{height:"150px"}}),t(He)]),_:1}))}});var gs=Se(yt,[["__scopeId","data-v-97553abe"]]);export{gs as default};
