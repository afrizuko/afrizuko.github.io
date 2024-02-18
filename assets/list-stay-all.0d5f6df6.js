import{_ as p,d as ee,aV as se,u as te,aa as ae,k as ie,r as x,c as i,o as ne,aH as oe,m as n,n as f,p as r,q as s,f as t,Q as le,v as m,x as A,aB as ce,F as q,C as h,B as C,z as c,t as U,s as v,D as de,E as ue}from"./index.c9b9189a.js";import{Q as W}from"./QSeparator.ace87948.js";import{Q as re}from"./use-dark.0cd2c71f.js";import{a as me,Q as ve}from"./QCarousel.c908ec9a.js";import{Q as Y}from"./QTooltip.16a1418d.js";import{Q as _e}from"./QItemLabel.ac1eb456.js";import{Q as j}from"./QSpace.4a3694b6.js";import{Q as fe}from"./QCard.689926c6.js";import{Q as ge}from"./QPagination.1354f264.js";import{Q as we}from"./QPage.66085248.js";import{u as he}from"./property.4f1ad070.js";import{u as Re}from"./user.09c049ac.js";import{u as be}from"./account.0291d88f.js";import{_ as Pe}from"./NewsLetter.4a306958.js";import{_ as xe}from"./TypesOfStays.9341cd39.js";import"./use-panel.21dc8356.js";import"./touch.3df10340.js";import"./selection.dfc3512e.js";import"./use-cache.b0833c75.js";import"./position-engine.06d992e6.js";import"./use-timeout.a8f117c9.js";import"./focus-manager.b507780d.js";import"./scroll.e7d4b95b.js";import"./QInput.3e4025f5.js";import"./uid.42677368.js";import"./use-form.cf74c7d7.js";import"./format.c860d4da.js";import"./QChip.be58aadb.js";import"./home.c90bf14a.js";const Ie=R=>(de("data-v-7e5326cc"),R=R(),ue(),R),Ee={class:"row items-center"},Se=Ie(()=>s("div",{class:"text-bold text-h5"},"Featured Listings",-1)),ke={class:"row"},Te={class:"row"},Qe={class:"q-py-md q-px-md cursor-pointer"},Ae={class:"row"},qe={class:"absolute-top-right no-padding",style:{"background-color":"transparent"}},Ce={class:"q-my-sm"},Ue={class:"row"},je={key:0},Be={class:"q-mr-sm"},Le={class:"q-mt-md"},Oe={class:"row"},Ve={class:"text-bold text-positive"},Fe={class:"text-black"},Me={key:0},Ne={class:"text-grey"},We={key:1},Ye={class:"q-pa-lg flex flex-center"},$e=ee({__name:"list-stay-all",setup(R){const I=se();te();const b=ae(),B=Re(),d=be(),u=he();ie();const E=x(8),S=x(1),_=x(42),L=x([1,1,1,1,1,1,1,1,1,1,1]);i(()=>B.getAvatar);const g=i(()=>u.getProperties),$=i(()=>u.getImages),z=i(()=>{const a=(S.value-1)*E.value,o=a+E.value;return g.value.slice(a,o)});i(()=>Math.ceil(g.value.length/E.value));const P=i(()=>u.getPropertyReviews);i(()=>u.getPropertyRating);const O=i(()=>Object.values(P.value).map(o=>o.user.id)),k=i(()=>g.value.map(a=>a.id)),T=i(()=>d.getWishlist);i(()=>d.getHostAvatar),i(()=>d.getHost),i(()=>JSON.stringify(u.getPropertyReviews)===JSON.stringify({})),i(()=>u.getResponse);async function D(){await d.findUserPhoto({objectType:"USER",objectIds:[I.params.id],fileType:"FILE_TYPE_IMAGE"},!0)}async function H(){var a;((a=O.value)==null?void 0:a.length)>1&&await u.findReviewerAvatars({objectType:"USER",objectIds:O.value})}async function V(){await d.findWishListByPropertyId({objectType:"PROPERTY",objectId:k.value})}async function G(){let a={objectType:"PROPERTY",objectIds:k.value,fileType:"FILE_TYPE_IMAGE"};await u.findPropertyImages(a)}async function J(){await u.findPropertyDetails({})}async function K(){await d.findUserInfo({ids:[I.params.id]},!0)}async function X(a){let o={objectType:"PROPERTY",objectId:a};T.value[a]!=null?await d.removeFromWishList(o):await d.addToWishList(o),b.showAlert(d.getResponse.message,d.getResponse.code,"bottom-left"),await V()}async function Z(){g.value.length>0&&await u.findPropertyRating({objectType:"PROPERTY",object_ids:k.value},1)}async function y(){g.value.length>0&&await B.findUserRatings({objectType:"USER",objectIds:[I.params.id]})}return ne(async()=>{await J(),await G(),await Z(),await V(),await D(),await K(),await y(),await H()}),oe(()=>{}),(a,o)=>(n(),f(we,{class:"q-mx-xl"},{default:r(()=>[s("div",Ee,[t(le,{flat:"",round:"",icon:"arrow_back",color:"warning",to:"/"}),Se]),t(W,{class:"q-my-lg q-mx-md",style:{width:"5%"}}),s("div",ke,[s("div",Te,[(n(!0),m(q,null,A(z.value,(e,w)=>(n(),m("div",Qe,[(n(),f(fe,{key:w,flat:"",onClick:Q=>a.$router.push(`/listing-stay-details/${e.id}`)},{default:r(()=>{var Q,F,M;return[(n(),f(me,{modelValue:L.value[w],"onUpdate:modelValue":l=>L.value[w]=l,"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"",arrows:"","control-color":"amber",height:"auto",key:w,autoplay:!0,infinite:"",onClick:o[0]||(o[0]=ce(()=>{},["stop"]))},{default:r(()=>{var l;return[(n(!0),m(q,null,A((l=$.value[e.id])==null?void 0:l.files,N=>(n(),f(ve,{name:N.id,class:"q-carousel__slides-container",key:w},{default:r(()=>[s("div",Ae,[t(re,{ratio:4/3,class:"row",src:N.uri},{default:r(()=>[s("div",qe,[t(h,{size:"25px",class:"q-mr-sm q-mt-sm",color:T.value[e==null?void 0:e.id]==null?"primary":"negative",name:T.value[e==null?void 0:e.id]!=null?"favorite":"favorite_border",onClick:ze=>X(e==null?void 0:e.id)},null,8,["color","name","onClick"])])]),_:2},1032,["src"])])]),_:2},1032,["name"]))),128))]}),_:2},1032,["modelValue","onUpdate:modelValue"])),s("div",Ce,[s("div",Ue,[(n(!0),m(q,null,A(e==null?void 0:e.features,l=>(n(),m("div",null,[l.feature=="FEATURE_BATH_ROOMS"||l.feature=="FEATURE_BED_ROOMS"?(n(),m("div",je,[t(h,{name:C(b).featureIcon(l.feature),class:"q-my-md q-mr-xs"},null,8,["name"]),s("span",Be,c(l.value)+" "+c(l.feature=="FEATURE_SQUARE_METERS"?"Sq.Ft":l.feature=="FEATURE_BED_ROOMS"?"beds":"baths"),1)])):U("",!0)]))),256))]),s("div",null,[t(_e,{class:"two-line-break text-h6 text-bold"},{default:r(()=>[v(c((e==null?void 0:e.name.length)>_.value?e.name.substring(0,_.value)+"...":e.name)+" ",1),e.name>_.value?(n(),f(Y,{key:0},{default:r(()=>[v(c(e.name),1)]),_:2},1024)):U("",!0)]),_:2},1024),s("div",Le,[t(h,{name:"location_on",class:"no-margin",size:"20px"}),s("span",null,[v(c((e==null?void 0:e.address.street)>_.value?(e==null?void 0:e.address.street.substring(0,_.value))+"...":e==null?void 0:e.address.street)+" ",1),(e==null?void 0:e.address.street.length)>_.value?(n(),f(Y,{key:0},{default:r(()=>[v(c(e==null?void 0:e.address.street),1)]),_:2},1024)):U("",!0)])]),t(W,{class:"q-my-md",style:{width:"20%"}}),s("div",Oe,[s("div",Ve,[v(c(e.unitPrice.currencyCode)+" "+c(C(b).commaSeparate(e.unitPrice.units))+" /",1),s("span",Fe,c(e.chargeCycle.toLowerCase()),1)]),t(j),s("div",null,[((Q=P.value[e==null?void 0:e.id])==null?void 0:Q.reviews)!=null?(n(),m("div",Me,[t(h,{name:"star",size:"20px",color:"warning"}),v(" "+c(C(b).computeAverageRating((F=P.value[e==null?void 0:e.id])==null?void 0:F.reviews))+" ",1),s("span",Ne,"("+c((M=P.value[e==null?void 0:e.id])==null?void 0:M.reviews[0].reviewCount)+")",1)])):(n(),m("div",We,[t(h,{name:"star_border",size:"20px"}),v(" None ")]))])])])])]}),_:2},1032,["onClick"]))]))),256))])]),s("div",Ye,[t(ge,{modelValue:S.value,"onUpdate:modelValue":o[1]||(o[1]=e=>S.value=e),max:5,input:"","direction-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward",color:"warning"},null,8,["modelValue"])]),t(j,{style:{height:"100px"}}),t(xe),t(j,{style:{height:"150px"}}),t(Pe)]),_:1}))}});var bs=p($e,[["__scopeId","data-v-7e5326cc"]]);export{bs as default};