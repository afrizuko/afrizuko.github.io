import{Q as y}from"./QImg.1e914581.js";import{_ as Se,d as pe,aS as Qe,u as Ie,aa as Pe,k as Ee,r as q,c as r,o as ye,aH as Te,m as l,n as m,p as a,q as s,f as t,y as oe,z as o,B as R,s as d,v as g,Q as le,x as j,t as T,F as V,aC as Ce,aB as Ue,C,D as Ae,E as Le}from"./index.afa77c1b.js";import{Q as z}from"./QItemSection.3da2b6ed.js";import{Q as ie}from"./QCheckbox.e6e1e65b.js";import{Q as Ne}from"./QScrollArea.9d835f49.js";import{Q as S}from"./QSeparator.5de6012a.js";import{Q as $}from"./QChip.ff0dc821.js";import{Q as ne}from"./QRating.063c18f6.js";import{Q as je}from"./QInput.e1517c7a.js";import{Q as U}from"./QItemLabel.9e006f21.js";import{Q as Ve}from"./QItem.1b60d339.js";import{Q as ze}from"./QList.17d5d046.js";import{Q as B}from"./QCard.b892fc5b.js";import{a as Be,Q as Oe}from"./QCarousel.f7223c54.js";import{Q as re}from"./QTooltip.f9d21354.js";import{Q as H}from"./QSpace.71560a5e.js";import{Q as Me}from"./QPage.425ea88a.js";import{_ as ce}from"./default-avatar-icon.adf04dc9.js";import{u as Fe}from"./property.a34edba4.js";import{u as De}from"./user.4673a89b.js";import{u as We}from"./account.f4b8aa4b.js";import{_ as Ye}from"./NewsLetter.3e4cb6ed.js";import{_ as $e}from"./TypesOfStays.b06e7f28.js";import"./use-checkbox.fe818aed.js";import"./use-dark.10fc72ca.js";import"./use-form.7716cef3.js";import"./QResizeObserver.847b957b.js";import"./QScrollObserver.577f3c0e.js";import"./scroll.d01e842c.js";import"./TouchPan.f1b2c9f8.js";import"./touch.3df10340.js";import"./selection.d9f58328.js";import"./format.c860d4da.js";import"./uid.42677368.js";import"./focus-manager.b507780d.js";import"./use-panel.e28d4fc3.js";import"./use-cache.b0833c75.js";import"./position-engine.f6e4fe48.js";import"./use-timeout.78df29b7.js";import"./home.ac2b36cf.js";const J=A=>(Ae("data-v-6d686e62"),A=A(),Le(),A),He={class:"row justify-between q-mt-xl"},Je={class:"col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 q-px-lg"},Ge={class:"column items-center"},Ke={class:"row q-ma-md"},Xe={class:"text-bold text-h5"},Ze={class:"text-grey"},et=J(()=>s("span",{class:"text-grey"},"No rating",-1)),tt={class:"text-center text-subtitle1",style:{width:"50%"}},st={key:1},at={class:"column items-start",style:{"align-content":"center"}},ot={class:"q-ml-xs text-bold"},lt=J(()=>s("span",{class:"q-ml-xs text-bold"},"English",-1)),it={class:"q-ml-xs text-bold"},nt=J(()=>s("div",null,[s("h1",{class:"text-weight-bold text-h6 q-mb-sm q-mx-md"},"Leave a comment")],-1)),rt={class:"q-mx-md"},ct={class:"col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 q-px-lg"},dt={class:"text-bold text-h5"},ut={class:"text-subtitle1"},mt={class:"row"},vt={class:"col-xl-4 col-lg-6 col-md-5 col-sm-5 col-xs-12 q-py-md q-px-md cursor-pointer"},_t={class:"row"},ft={class:"absolute-top-right no-padding",style:{"background-color":"transparent"}},gt={class:"q-my-sm"},ht={class:"row"},wt={key:0},xt={class:"q-mr-sm"},bt={class:"q-mt-md"},Rt={class:"row"},kt={class:"text-bold text-positive"},qt={class:"text-black"},St={key:0},pt={class:"text-grey"},Qt={key:1},It={class:"q-pa-lg flex flex-center"},Pt={class:"q-pa-lg flex flex-center"},Et=pe({__name:"host",setup(A){var te;const w=Qe(),de=Ie(),x=Pe(),L=De(),h=We(),v=Fe(),ue=Ee(),O=q(!1),M=q(8),me=q(1),p=q(20),G=q([1,1,1,1,1,1,1,1,1,1,1]);q("Stays"),r(()=>L.getAvatar);const k=r(()=>L.getUserRating),Q=r(()=>v.getProperties),ve=r(()=>v.isLoading);r(()=>v.getImages);const K=r(()=>{const i=(me.value-1)*M.value,_=i+M.value;return Q.value.slice(i,_)});r(()=>Math.ceil(Q.value.length/M.value));const b=q({rating:0,comment:null,authorId:(te=ue.currentUser())==null?void 0:te.sub,objectType:"USER",objectId:String(w.params.id)}),X=r(()=>v.getReviewerAvatars),F=r(()=>v.getPropertyReviews);r(()=>v.getPropertyRating);const I=r(()=>{var i;return(i=L.getUserRating[w.params.id])==null?void 0:i.reviews}),D=r(()=>Object.keys(k.value)),W=r(()=>Q.value.map(i=>i.id)),Y=r(()=>h.getWishlist);r(()=>h.getHostAvatar);const c=r(()=>h.getHost);r(()=>JSON.stringify(v.getPropertyReviews)===JSON.stringify({}));const N=r(()=>v.getResponse);async function _e(){await h.findUserPhoto({objectType:"USER",objectIds:[w.params.id],fileType:"FILE_TYPE_IMAGE"},!0)}function Z(){const i=window.scrollY,_=70;console.log("scrollPosition => "+i),console.log("threshold => "+_),O.value=i>_&&i<524}async function fe(){var i;((i=D.value)==null?void 0:i.length)>1&&await v.findReviewerAvatars({objectType:"USER",objectIds:D.value})}async function ee(){await h.findWishListByPropertyId({objectType:"PROPERTY",objectId:W.value})}async function ge(){let i={objectType:"PROPERTY",objectIds:W.value,fileType:"FILE_TYPE_IMAGE"};await v.findPropertyImages(i)}async function he(){await v.findPropertyDetails({hostId:w.params.id,pageSize:4})}async function we(){await h.findUserInfo({ids:[w.params.id]},!0)}async function xe(i){let _={objectType:"PROPERTY",objectId:i};Y.value[i]!=null?await h.removeFromWishList(_):await h.addToWishList(_),x.showAlert(h.getResponse.message,h.getResponse.code,"bottom-left"),await ee()}async function be(){Q.value.length>0&&await v.findPropertyRating({objectType:"PROPERTY",object_ids:W.value},1)}async function Re(){if(sessionStorage.getItem("token")==null){await de.push("/login");return}await v.submitUserReview(b.value),N.value.code==0&&(b.value.comment=null,b.value.rating=0),x.showAlert(N.value.message,N.value.code,"")}async function ke(){Q.value.length>0&&await L.findUserRatings({objectType:"USER",objectIds:[w.params.id]})}async function qe(){var i;await v.findPropertyDetails({hostId:w.params.id,pageToken:(i=N.value)==null?void 0:i.nextPageToken,pageSize:4})}return ye(async()=>{window.addEventListener("scroll",Z),await he(),await ge(),await be(),await ee(),await _e(),await we(),await ke(),await fe()}),Te(()=>{window.removeEventListener("scroll",Z)}),(i,_)=>(l(),m(Me,{class:"q-mx-xl"},{default:a(()=>[s("div",He,[s("div",Je,[t(B,{flat:"",bordered:"",class:Ce([{"fixed-card":O.value,card:!O.value},"col-xl-12 col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-md q-ml-xs"])},{default:a(()=>{var P;return[s("div",Ge,[s("div",Ke,[t(z,{avatar:""},{default:a(()=>[t(oe,{size:"100px"},{default:a(()=>[c.value.imgUri?(l(),m(y,{key:0,src:c.value.imgUri},null,8,["src"])):(l(),m(y,{key:1,src:ce}))]),_:1})]),_:1})]),s("div",Xe,o(c.value.firstName)+" "+o(c.value.lastName),1),s("div",null,[R(x).computeAverageRating(I.value==null?[]:I.value)>0?(l(),m(ie,{key:0,"checked-icon":"star","unchecked-icon":"star","indeterminate-icon":"star",color:"warning","model-value":""},{default:a(()=>{var e;return[d(o(R(x).computeAverageRating(I.value==null?[]:I.value))+" ",1),s("span",Ze,"("+o((e=I.value)==null?void 0:e.length)+")",1)]}),_:1})):(l(),m(ie,{key:1,"checked-icon":"star_outline","unchecked-icon":"star_outline","indeterminate-icon":"star_outline",color:"black","model-value":""},{default:a(()=>[et]),_:1}))]),s("div",tt,[((P=c.value.narration)==null?void 0:P.length)>50?(l(),m(Ne,{key:0,style:{height:"100px","max-width":"300px"},class:"text-center"},{default:a(()=>[d(o(c.value.narration!==""?c.value.narration:"No introduction yet"),1)]),_:1})):(l(),g("div",st,o(c.value.narration!==""?c.value.narration:"No introduction yet"),1))])]),t(S,{inset:"",class:"q-my-md"}),s("div",at,[t($,{"text-color":"black",color:"white",icon:"home",size:"15px",class:"start"},{default:a(()=>[d(" Currently lives in "),s("span",ot,o(c.value.addressLine!=""&&c.value.addressLine!=null?c.value.addressLine:"Not available"),1)]),_:1}),t($,{"text-color":"black",color:"white",icon:"language",size:"15px",class:"start"},{default:a(()=>[d(" Language spoken "),lt]),_:1}),t($,{"text-color":"black",color:"white",icon:"event",size:"15px",class:"start"},{default:a(()=>[d(" Joined on "),s("span",it,o(R(x).formatStartDate(c.value.created)),1)]),_:1})]),t(S,{inset:"",class:"q-my-md"}),nt,t(S,{class:"q-my-md",style:{width:"10%","margin-left":"15px"}}),s("div",rt,[t(ne,{size:"20px",modelValue:b.value.rating,"onUpdate:modelValue":_[0]||(_[0]=e=>b.value.rating=e),max:5,color:"warning",icon:"star_border","icon-selected":"star","icon-half":"star_half"},null,8,["modelValue"]),t(je,{rounded:"",outlined:"","bottom-slots":"",label:"Share your thoughts...",class:"q-my-md",color:"grey",modelValue:b.value.comment,"onUpdate:modelValue":_[1]||(_[1]=e=>b.value.comment=e)},{append:a(()=>[t(le,{round:"",dense:"",color:"purple-9",icon:"arrow_forward",disable:b.value.comment==""||b.value.comment==null,onClick:Re},null,8,["disable"])]),_:1},8,["modelValue"]),t(B,{bordered:"",flat:"",class:"q-pa-md q-mt-xl"},{default:a(()=>{var e;return[t(ze,{bordered:"",class:"rounded-borders"},{default:a(()=>[t(U,{header:"",class:"text-black text-bold text-h5"},{default:a(()=>{var u;return[d("Reviews ("+o((u=k.value[R(w).params.id])==null?void 0:u.reviews.length)+" reviews) ",1)]}),_:1}),t(S,{class:"q-my-md",style:{width:"5%","margin-left":"15px"}}),(l(!0),g(V,null,j(D.value,u=>(l(),g("div",null,[t(Ve,null,{default:a(()=>[t(z,{avatar:"",class:"q-pb-lg"},{default:a(()=>[t(oe,null,{default:a(()=>{var n;return[X.value[u]!=null?(l(),m(y,{key:0,src:(n=X.value[u].files[0])==null?void 0:n.uri},null,8,["src"])):(l(),m(y,{key:1,src:ce}))]}),_:2},1024)]),_:2},1024),t(z,{class:"q-pt-md"},{default:a(()=>[t(U,{lines:"1",class:"text-weight-bold"},{default:a(()=>{var n,E;return[d(o((n=k.value[u])==null?void 0:n.reviews[0].user.firstName)+" "+o((E=k.value[u])==null?void 0:E.reviews[0].lastName),1)]}),_:2},1024),t(U,{lines:"1",class:"q-mb-sm"},{default:a(()=>{var n;return[d(o(R(x).formatStartDate((n=k.value[u])==null?void 0:n.reviews[0].created)),1)]}),_:2},1024),t(U,{class:"text-subtitle1"},{default:a(()=>{var n;return[d(o((n=k.value[u])==null?void 0:n.reviews[0].comment),1)]}),_:2},1024)]),_:2},1024),t(z,{side:"",top:""},{default:a(()=>{var n;return[t(ne,{"model-value":(n=k.value[u])==null?void 0:n.reviews[0].rating,color:"warning",max:5},null,8,["model-value"])]}),_:2},1024)]),_:2},1024),i.i!=5?(l(),m(S,{key:0,inset:"item",class:"q-my-md"})):T("",!0)]))),256))]),_:1}),d(" "+o(((e=k.value[R(w).params.id])==null?void 0:e.reviews)==null?"No Reviews":""),1)]}),_:1})])]}),_:1},8,["class"])]),s("div",ct,[t(B,{bordered:"",flat:"",class:"col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 q-px-lg q-py-md"},{default:a(()=>{var P;return[s("div",dt,o(c.value.firstName)+" "+o(c.value.lastName)+"'s listings",1),s("div",ut,o(c.value.firstName)+" "+o(c.value.lastName)+"'s listings is very rich, 5 star reviews help him to be more branded. ",1),t(S,{class:"q-my-lg",style:{width:"5%"}}),s("div",mt,[(l(!0),g(V,null,j(K.value,(e,u)=>(l(),g("div",vt,[(l(),m(B,{key:u,flat:"",onClick:n=>i.$router.push(`/listing-stay-details/${e.id}`)},{default:a(()=>{var n,E,se;return[(l(),m(Be,{modelValue:G.value[u],"onUpdate:modelValue":f=>G.value[u]=f,"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"",arrows:"","control-color":"amber",height:"auto",key:u,autoplay:!1,infinite:"",onClick:_[2]||(_[2]=Ue(()=>{},["stop"]))},{default:a(()=>{var f;return[(l(!0),g(V,null,j((f=K.value[0])==null?void 0:f.images,ae=>(l(),m(Oe,{name:ae.id,class:"q-carousel__slides-container",key:u},{default:a(()=>[s("div",_t,[t(y,{ratio:4/3,class:"row",src:ae.uri},{default:a(()=>[s("div",ft,[t(C,{size:"25px",class:"q-mr-sm q-mt-sm",color:Y.value[e==null?void 0:e.id]==null?"primary":"negative",name:Y.value[e==null?void 0:e.id]!=null?"favorite":"favorite_border",onClick:yt=>xe(e==null?void 0:e.id)},null,8,["color","name","onClick"])])]),_:2},1032,["src"])])]),_:2},1032,["name"]))),128))]}),_:2},1032,["modelValue","onUpdate:modelValue"])),s("div",gt,[s("div",ht,[(l(!0),g(V,null,j(e==null?void 0:e.features,f=>(l(),g("div",null,[f.feature=="FEATURE_BATH_ROOMS"||f.feature=="FEATURE_BED_ROOMS"?(l(),g("div",wt,[t(C,{name:R(x).featureIcon(f.feature),class:"q-my-md q-mr-xs"},null,8,["name"]),s("span",xt,o(f.value)+" "+o(f.feature=="FEATURE_SQUARE_METERS"?"Sq.Ft":f.feature=="FEATURE_BED_ROOMS"?"beds":"baths"),1)])):T("",!0)]))),256))]),s("div",null,[t(U,{class:"two-line-break text-h6 text-bold"},{default:a(()=>[d(o((e==null?void 0:e.name.length)>p.value?e.name.substring(0,p.value)+"...":e.name)+" ",1),e.name>p.value?(l(),m(re,{key:0},{default:a(()=>[d(o(e.name),1)]),_:2},1024)):T("",!0)]),_:2},1024),s("div",bt,[t(C,{name:"location_on",class:"no-margin",size:"20px"}),s("span",null,[d(o((e==null?void 0:e.address.street)>p.value?(e==null?void 0:e.address.street.substring(0,p.value))+"...":e==null?void 0:e.address.street)+" ",1),(e==null?void 0:e.address.street.length)>p.value?(l(),m(re,{key:0},{default:a(()=>[d(o(e==null?void 0:e.address.street),1)]),_:2},1024)):T("",!0)])]),t(S,{class:"q-my-md",style:{width:"20%"}}),s("div",Rt,[s("div",null,[s("div",kt,[d(o(e.unitPrice.currencyCode)+" "+o(R(x).commaSeparate(e.unitPrice.units))+" /",1),s("span",qt,o(e.chargeCycle.toLowerCase()),1)])]),t(H),((n=F.value[e==null?void 0:e.id])==null?void 0:n.reviews)!=null?(l(),g("div",St,[t(C,{name:"star",size:"20px",color:"warning"}),d(" "+o(R(x).computeAverageRating((E=F.value[e==null?void 0:e.id])==null?void 0:E.reviews))+" ",1),s("span",pt,"("+o((se=F.value[e==null?void 0:e.id])==null?void 0:se.reviews[0].reviewCount)+")",1)])):(l(),g("div",Qt,[t(C,{name:"star_border",size:"20px"}),d(" None ")]))])])])]}),_:2},1032,["onClick"]))]))),256))]),s("div",It,[s("div",Pt,[((P=Q.value)==null?void 0:P.nextPageToken)!=""?(l(),m(le,{key:0,rounded:"","no-caps":"",color:"warning",label:"Show more","icon-right":"expand_more",loading:ve.value,onClick:qe},null,8,["loading"])):T("",!0)])])]}),_:1})])]),t(H,{style:{height:"100px"}}),t($e),t(H,{style:{height:"150px"}}),t(Ye)]),_:1}))}});var hs=Se(Et,[["__scopeId","data-v-6d686e62"]]);export{hs as default};
