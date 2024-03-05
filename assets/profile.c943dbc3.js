import{Q as W}from"./use-dark.021a37f0.js";import{d as ie,aa as re,r as _,c as m,o as ve,K as fe,m as r,v as b,f as l,q as a,F as B,x as O,n as w,t as k,p as d,aB as ge,y as z,B as A,C as S,z as g,s as P,_ as de,D as ue,E as me,u as _e,k as pe,A as be,Q as le}from"./index.6f40f7fe.js";import{a as we,Q as Y}from"./QTabs.c8597b56.js";import{Q as L}from"./QSeparator.a19ab3ec.js";import{Q as q}from"./QInput.e9b2e6e3.js";import{Q as he}from"./QSelect.d9627a5f.js";import{Q as Ve}from"./QDate.f6a0c342.js";import{Q as xe}from"./QPopupProxy.d0f25819.js";import{Q as Ie,a as ae}from"./QTabPanels.e9159dd6.js";import{Q as Pe}from"./QSplitter.360e4828.js";import{C as ke}from"./ClosePopup.9aee91d6.js";import{_ as Qe}from"./default-avatar-icon.adf04dc9.js";import{u as ce}from"./account.4d31b5ec.js";import{u as $e}from"./images.68ce23de.js";import{Q as ye}from"./QBtnToggle.ac589a57.js";import{a as Ue,Q as qe}from"./QCarousel.5a429ae6.js";import{Q as oe}from"./QTooltip.cb51c693.js";import{Q as Ce}from"./QItemLabel.4ce23d48.js";import{Q as Ee}from"./QSpace.d9b8bef3.js";import{Q as ne}from"./QCard.062ea066.js";import{Q as Re}from"./QCircularProgress.3c815201.js";import{Q as Te}from"./QPagination.66d781cb.js";import"./uid.42677368.js";import"./QResizeObserver.f5a88aaf.js";import"./use-timeout.5be3eec1.js";import"./focus-manager.b507780d.js";import"./rtl.b51694b1.js";import"./use-form.0e0408c3.js";import"./QChip.c8d6ca79.js";import"./QItem.40a7b2b5.js";import"./QItemSection.5e932dd1.js";import"./QMenu.98ff977b.js";import"./position-engine.a52169fb.js";import"./selection.fdc08f2f.js";import"./scroll.9892f322.js";import"./use-prevent-scroll.b86fe4f0.js";import"./QDialog.83e88132.js";import"./format.c860d4da.js";import"./use-cache.b0833c75.js";import"./use-panel.b3e41fe6.js";import"./touch.3df10340.js";import"./TouchPan.275b30ae.js";import"./QBtnGroup.51533543.js";const Se=h=>(ue("data-v-ae456a52"),h=h(),me(),h),Ne={class:"row"},Ae={class:"col-xl-4 col-lg-4 col-md-5 col-sm-5 col-xs-12 q-py-md q-px-md cursor-pointer"},Le={class:"row"},Fe={class:"absolute-top-right no-padding",style:{"background-color":"transparent"}},je={class:"q-ma-md"},Me={class:"row q-mt-md"},De={key:0},Be={class:"q-mr-sm"},Oe={class:"q-mt-md"},Ye={class:"row"},We={class:"text-bold text-positive"},ze={class:"text-black"},Ke={key:0},Ge={class:"text-grey"},He={key:1},Je={class:"text-center q-pa-md col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"},Xe=Se(()=>a("p",null,"Searching please wait",-1)),Ze={key:1,class:"row q-my-lg justify-center"},et={class:"q-pa-lg flex flex-center"},tt=ie({__name:"AccountWishlist",setup(h){const x=re(),u=ce(),C=_("Stays"),c=_(1),V=_([1,1,1,1,1]),Q=_(8),I=_(!0),o=_(42),F=m(()=>u.isLoading),$=m(()=>u.getProperties),p=m(()=>{const i=(c.value-1)*Q.value,v=i+Q.value;return $.value.slice(i,v)});m(()=>Math.ceil($.value.length/Q.value));const j=m(()=>u.getWishlist),N=m(()=>Object.keys(j.value).map(i=>i)),E=m(()=>u.getPropertyReviews),G=m(()=>u.getImages),M=m(()=>$.value.map(i=>i.id)),y=m(()=>$.value.map(i=>i.id));m(()=>JSON.stringify(u.getPropertyReviews)===JSON.stringify({}));async function D(){var i;((i=M.value)==null?void 0:i.length)>0&&await u.findPropertyRating({objectType:"PROPERTY",object_ids:[M.value[0]]})}async function n(){var i;((i=y.value)==null?void 0:i.length)>0&&await u.findPropertyImages({objectType:"PROPERTY",objectIds:y.value,fileType:"FILE_TYPE_IMAGE"})}async function e(){await u.findUserWishlist({objectType:"PROPERTY"})}async function s(i){let v={objectType:"PROPERTY",objectId:i.id};await u.removeFromWishList(v),x.showAlert(u.getResponse.message,u.getResponse.code,"bottom-left"),await e(),await U()}async function U(){var i;((i=N.value)==null?void 0:i.length)>0&&await u.findProperty({ids:N.value})}return ve(async()=>{await e(),await U(),await D(),await n()}),fe(()=>{}),(i,v)=>(r(),b("div",null,[l(ye,{"no-caps":"",rounded:"",modelValue:C.value,"onUpdate:modelValue":v[0]||(v[0]=t=>C.value=t),class:"q-my-sm","toggle-color":"warning",options:[{label:"Stays",value:"Stays"}]},null,8,["modelValue"]),a("div",Ne,[p.value.length>0?(r(!0),b(B,{key:0},O(p.value,(t,R)=>(r(),b("div",Ae,[F.value?(r(),w(ne,{key:1,style:{width:"100%"},class:"row justify-center",flat:""},{default:d(()=>[a("div",Je,[Xe,l(Re,{indeterminate:"",rounded:"",size:"50px",color:"lime",class:"q-ma-md"})])]),_:1})):(r(),w(ne,{flat:I.value,class:"card-1",key:R,bordered:"",onMouseover:v[2]||(v[2]=T=>I.value=!1),onMouseout:v[3]||(v[3]=T=>I.value=!0),onClick:T=>i.$router.push(`listing-stay-details/${t.id}`)},{default:d(()=>{var T,H,J,X,Z,ee,te;return[(r(),w(Ue,{modelValue:V.value[R],"onUpdate:modelValue":f=>V.value[R]=f,"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"",arrows:"","control-color":"amber",height:"auto",key:R,autoplay:!0,infinite:"",onClick:v[1]||(v[1]=ge(()=>{},["stop"]))},{default:d(()=>{var f;return[(r(!0),b(B,null,O((f=G.value[t.id])==null?void 0:f.files,se=>(r(),w(qe,{name:se.id,class:"q-carousel__slides-container",key:R},{default:d(()=>[a("div",Le,[l(W,{ratio:4/3,class:"row",src:se.uri},{default:d(()=>[a("div",Fe,[l(z,{icon:"favorite","text-color":"red",onClick:Vt=>s(t)},null,8,["onClick"])])]),_:2},1032,["src"])])]),_:2},1032,["name"]))),128))]}),_:2},1032,["modelValue","onUpdate:modelValue"])),a("div",je,[a("div",Me,[(r(!0),b(B,null,O(t==null?void 0:t.features,f=>(r(),b("div",null,[f.feature=="FEATURE_BATH_ROOMS"||f.feature=="FEATURE_BED_ROOMS"?(r(),b("div",De,[l(S,{name:A(x).featureIcon(f.feature),class:"q-my-md"},null,8,["name"]),a("span",Be,g(f.value)+" "+g(A(x).formatFeatureName(f.feature)),1)])):k("",!0)]))),256))]),l(Ce,{class:"two-line-break text-h6 text-bold"},{default:d(()=>[P(g((t==null?void 0:t.name.length)>o.value?t.name.substring(0,o.value)+"...":t.name)+" ",1),t.name>o.value?(r(),w(oe,{key:0},{default:d(()=>[P(g(t.name),1)]),_:2},1024)):k("",!0)]),_:2},1024),a("div",Oe,[l(S,{size:"20px",name:"location_on",class:"q-mr-sm"}),a("span",null,[P(g(((T=t==null?void 0:t.address)==null?void 0:T.street.length)>o.value?((H=t==null?void 0:t.address)==null?void 0:H.street.substring(0,o.value))+"...":(J=t==null?void 0:t.address)==null?void 0:J.street)+" ",1),((X=t==null?void 0:t.address)==null?void 0:X.street.length)>o.value?(r(),w(oe,{key:0},{default:d(()=>{var f;return[P(g((f=t==null?void 0:t.address)==null?void 0:f.street),1)]}),_:2},1024)):k("",!0)])]),l(L,{class:"q-my-md",style:{width:"20%"}}),a("div",Ye,[a("div",We,[P(g(t.unitPrice.currencyCode)+" "+g(A(x).commaSeparate(t.unitPrice.units))+" ",1),a("span",ze," /"+g(t.chargeCycle.toLowerCase()),1)]),l(Ee),a("div",null,[((Z=E.value[t==null?void 0:t.id])==null?void 0:Z.reviews)!=null?(r(),b("div",Ke,[l(S,{name:"star",size:"20px",color:"warning"}),P(" "+g(A(x).computeAverageRating((ee=E.value[t==null?void 0:t.id])==null?void 0:ee.reviews))+" ",1),a("span",Ge,"("+g((te=E.value[t==null?void 0:t.id])==null?void 0:te.reviews[0].reviewCount)+")",1)])):(r(),b("div",He,[l(S,{name:"star_border",size:"20px"}),P(" None ")]))])])])]}),_:2},1032,["flat","onClick"]))]))),256)):(r(),b("div",Ze," No property to show "))]),a("div",et,[p.value.length>0?(r(),w(Te,{key:0,modelValue:c.value,"onUpdate:modelValue":v[4]||(v[4]=t=>c.value=t),max:5,input:"","direction-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward",color:"warning"},null,8,["modelValue"])):k("",!0)])]))}});var st=de(tt,[["__scopeId","data-v-ae456a52"]]);const K=h=>(ue("data-v-3ef3e8ec"),h=h(),me(),h),lt={class:"text-teal q-mt-sm"},at={class:"custom-file-upload"},ot=K(()=>a("span",{class:"icon"},"\u{1F4C1}",-1)),nt=K(()=>a("div",{class:"text-h5 q-mb-md"},"EDIT YOUR PROFILE",-1)),it={class:"row"},rt={class:"col-sm-12 col-xs-12 col-lg-8 col-md-12"},dt={class:"row"},ut={class:"col-sm-12 col-xs-12 col-lg-6 col-md-12 q-pr-sm"},mt={class:"col-sm-12 col-xs-12 col-lg-6 col-md-12"};const ct={class:"col-sm-12 col-xs-12 col-lg-12 col-md-12 q-mb-md"},vt={class:"col-sm-12 col-xs-12 col-lg-12 col-md-12"},ft={class:"col-sm-12 col-xs-12 col-lg-12 col-md-12 q-my-md"},gt={class:"col-sm-12 col-xs-12 col-lg-12 col-md-12"},_t={class:"row items-center justify-end"},pt={class:"col-sm-12 col-xs-12 col-lg-12 col-md-12 q-my-md"},bt={class:"row"},wt=K(()=>a("div",{class:"text-h5 q-mb-md"},"Wishlist",-1)),ht=ie({__name:"profile",setup(h){_e();const x=_(20),u=_("");_(!1),_(!1),_(!1);const C=re(),c=ce(),V=pe(),Q=$e(),I=m(()=>c.getCurrentTab);m(()=>c.getAvatar);const o=m(()=>c.getUser);_({email:V.currentUser().sub,password:null,currentPassword:null,confirm:null}),m(()=>V.getResponse);function F(n){const s=n.target.files[0],U=new FileReader;U.readAsDataURL(s),U.onload=()=>{$(U.result)}}async function $(n){await Q.saveImages({objectType:"USER",objectId:V.currentUser().aud[0],files:[{contents:n,coverImage:!1}],fileType:"FILE_TYPE_IMAGE"}),Q.getResponse.code==0&&await D()}function p(n){var e;(e=u.value)!=null&&e.includes(n)||(u.value!=""?u.value+=`,${n}`:u.value=n)}async function j(){if(u.value!=""){await c.updateUserInfo({user:o.value,updateMask:u.value}),C.showAlert(c.getResponse.message,c.getResponse.code,"");return}C.showAlert("No updates where made",c.getResponse.code,"")}const N=n=>n&&n.length!=0||"First name is required",E=n=>n&&n.length!=0||"Last name is required",G=n=>n&&n.length!=0||"Email address is required",M=n=>n&&n.length!=0||"Phone number is required";function y(n){c.setCurrentTab(n)}async function D(){V.currentUser()!=null&&(await c.findUserPhoto({objectType:"USER",objectIds:[V.currentUser().aud[0]],fileType:"FILE_TYPE_IMAGE"}),await c.findUserInfo({ids:[V.currentUser().aud[0]]}))}return(n,e)=>(r(),b("div",null,[l(Pe,{modelValue:x.value,"onUpdate:modelValue":e[24]||(e[24]=s=>x.value=s)},{before:d(()=>[l(we,{modelValue:I.value,"onUpdate:modelValue":e[4]||(e[4]=s=>I.value=s),vertical:"","active-color":"warning","indicator-color":"transparent"},{default:d(()=>[l(Y,{name:"editProfile",class:"text-white q-ma-md",onClick:e[1]||(e[1]=s=>y("editProfile"))},{default:d(()=>[o.value.imgUri?(r(),w(z,{key:0,size:"100px"},{default:d(()=>[l(W,{src:o.value.imgUri},null,8,["src"])]),_:1})):(r(),w(z,{key:1,size:"100px"},{default:d(()=>[l(W,{src:Qe})]),_:1})),a("div",lt,g(o.value.firstName)+" "+g(o.value.lastName),1),a("label",at,[ot,P(" Change Image "),a("input",{multiple:"",type:"file",name:"avatar",accept:"image/*",onChange:e[0]||(e[0]=s=>F(s))},null,32)])]),_:1}),l(L,{inset:"",class:"q-my-md"}),l(Y,{class:"q-tab-content-left","no-caps":"",name:"editProfile",label:"Edit Profile",onClick:e[2]||(e[2]=s=>y("editProfile"))}),o.value.userType!="HOST"?(r(),w(Y,{key:0,class:"q-tab-content-left","no-caps":"",name:"wishlist",label:"Wishlist",onClick:e[3]||(e[3]=s=>y("wishlist"))})):k("",!0)]),_:1},8,["modelValue"])]),after:d(()=>[l(Ie,{modelValue:I.value,"onUpdate:modelValue":e[23]||(e[23]=s=>I.value=s),animated:"",swipeable:"",vertical:"","transition-prev":"jump-up","transition-next":"jump-up"},{default:d(()=>[l(ae,{name:"editProfile"},{default:d(()=>[nt,l(L,{class:"q-my-md",style:{width:"8%"}}),a("div",it,[a("div",rt,[a("div",dt,[a("div",ut,[l(q,{outlined:"",rounded:"",clearable:"",color:"grey",label:"First Name",modelValue:o.value.firstName,"onUpdate:modelValue":e[5]||(e[5]=s=>o.value.firstName=s),rules:[N],onKeyup:e[6]||(e[6]=s=>p("user.firstName"))},null,8,["modelValue","rules"])]),a("div",mt,[l(q,{outlined:"",rounded:"",clearable:"",color:"grey",label:"Last Name",modelValue:o.value.lastName,"onUpdate:modelValue":e[7]||(e[7]=s=>o.value.lastName=s),rules:[E],onKeyup:e[8]||(e[8]=s=>p("user.lastName"))},null,8,["modelValue","rules"])])]),k("",!0),k("",!0),a("div",ct,[l(q,{outlined:"",rounded:"",clearable:"",color:"grey",label:"Address",modelValue:o.value.addressLine,"onUpdate:modelValue":e[11]||(e[11]=s=>o.value.addressLine=s),onKeyup:e[12]||(e[12]=s=>p("user.addressLine"))},null,8,["modelValue"])]),a("div",vt,[l(q,{outlined:"",rounded:"",clearable:"",color:"grey",label:"National Id",modelValue:o.value.nationalId,"onUpdate:modelValue":e[13]||(e[13]=s=>o.value.nationalId=s),onKeyup:e[14]||(e[14]=s=>p("user.nationalId"))},null,8,["modelValue"])]),a("div",ft,[l(he,{outlined:"",rounded:"",clearable:"",color:"grey",label:"Gender","option-value":"value","option-label":"name","map-options":"",options:["Male","Female"],"emit-value":"",modelValue:o.value.gender,"onUpdate:modelValue":[e[15]||(e[15]=s=>o.value.gender=s),e[16]||(e[16]=s=>p("user.gender"))]},null,8,["modelValue"])]),a("div",gt,[l(q,{rounded:"",outlined:"",clearable:"",color:"grey",modelValue:o.value.birthDate,"onUpdate:modelValue":e[19]||(e[19]=s=>o.value.birthDate=s),label:"Date of birth"},{append:d(()=>[l(S,{name:"event",class:"cursor-pointer"},{default:d(()=>[l(xe,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:d(()=>[l(Ve,{color:"warning",modelValue:o.value.birthDate,"onUpdate:modelValue":[e[17]||(e[17]=s=>o.value.birthDate=s),e[18]||(e[18]=s=>p("user.birthDate"))],mask:"YYYY-MM-DD",disable:s=>n.disableDates(s)},{default:d(()=>[a("div",_t,[be(l(le,{label:"Close",color:"primary",flat:""},null,512),[[ke]])])]),_:1},8,["modelValue","disable"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),a("div",pt,[l(q,{type:"textarea",outlined:"",rounded:"",clearable:"",color:"grey",label:"About you",modelValue:o.value.narration,"onUpdate:modelValue":e[20]||(e[20]=s=>o.value.narration=s),onKeyup:e[21]||(e[21]=s=>p("user.narration"))},null,8,["modelValue"])]),a("div",bt,[l(le,{rounded:"","no-caps":"",label:"Update Info",color:"warning",onClick:e[22]||(e[22]=s=>j(o.value.id))})])])])]),_:1}),l(ae,{name:"wishlist"},{default:d(()=>[wt,l(L,{class:"q-my-md",style:{width:"8%"}}),l(st)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]))}});var ms=de(ht,[["__scopeId","data-v-3ef3e8ec"]]);export{ms as default};
