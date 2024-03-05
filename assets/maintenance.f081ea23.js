import{Q as N}from"./QImg.baa48024.js";import{a as U,Q as Y}from"./QCarousel.51b1a666.js";import{Q as A}from"./QTooltip.dc3ddfc4.js";import{Q as F}from"./QItemLabel.dac0b2c9.js";import{Q as D}from"./QSeparator.15efe275.js";import{_ as W,d as z,u as G,aa as J,r as p,c as i,o as $,K as H,m as r,v as _,q as e,f as s,p as n,F as S,x as j,n as v,aB as K,s as g,z as q,t as X,Q as Z,D as ee,E as te}from"./index.2b9e9d53.js";import{Q as x}from"./QCard.0fed3ede.js";import{Q as ae}from"./QCircularProgress.cbd7b994.js";import{Q as se}from"./QPagination.07956aed.js";import{Q as oe,a as w}from"./QTabPanels.73ddb9fe.js";import{u as ie}from"./account.51897530.js";import{u as ne}from"./property.8a240105.js";import"./use-panel.a8166fbf.js";import"./touch.3df10340.js";import"./selection.bcc42b1d.js";import"./use-cache.b0833c75.js";import"./use-dark.bf37dfcc.js";import"./position-engine.2ebdcb7d.js";import"./use-timeout.798beefb.js";import"./focus-manager.b507780d.js";import"./scroll.65b5ece7.js";import"./format.c860d4da.js";import"./QInput.85566cf0.js";import"./uid.42677368.js";import"./use-form.22584187.js";const d=f=>(ee("data-v-317c5b60"),f=f(),te(),f),le={class:"q-pa-md"},re={class:"q-ma-lg"},de={class:"row"},ue={class:"col-xl-2 col-lg-4 col-md-5 col-sm-5 col-xs-12 q-py-md q-px-md"},ce={class:"row"},me={class:"q-ma-md"},pe=d(()=>e("div",{class:"row justify-between"},[e("div",null,"Rooms"),e("div",null,"4")],-1)),ve=d(()=>e("div",{class:"row justify-between"},[e("div",null,"Status"),e("div",null,"Occupied")],-1)),fe=d(()=>e("div",{class:"row justify-between"},[e("div",null,"Address"),e("div",null,"Mango Lane, go down")],-1)),_e=d(()=>e("div",{class:"row justify-between"},[e("div",null,"Rent"),e("div",null,"UGX 500,000")],-1)),ge={class:"row q-mt-md"},we={class:"text-center q-pa-md col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"},ye=d(()=>e("p",null,"Searching please wait",-1)),he={class:"q-pa-lg flex flex-center"},Pe=d(()=>e("div",{class:"text-h6"},"Account",-1)),be=d(()=>e("div",{class:"text-h6"},"Password",-1)),xe=d(()=>e("div",{class:"text-h6"},"billing",-1)),Qe=z({__name:"maintenance",setup(f){G(),J();const Q=ne(),l=ie(),I=p(!0),y=p(8),h=p(1),P=p(42),R=p([1,1,1,1,1,1,1,1,1,1,1]),T=i(()=>l.getCurrentTab),C=i(()=>l.isLoading),c=i(()=>l.getProperties);i(()=>l.getPropertyReviews),i(()=>l.getImages),i(()=>l.getWishlist);const V=i(()=>{const t=(h.value-1)*y.value,a=t+y.value;return c.value.slice(t,a)}),k=i(()=>c.value.map(t=>t.id)),b=i(()=>c.value.map(t=>t.id));i(()=>Math.ceil(c.value.length/y.value)),i(()=>JSON.stringify(Q.getPropertyReviews)===JSON.stringify({}));async function L(){var t;((t=k.value)==null?void 0:t.length)>0&&await l.findPropertyRating({objectType:"PROPERTY",objectIds:k.value})}async function E(){let t={objectType:"PROPERTY",objectIds:b.value,fileType:"FILE_TYPE_IMAGE"};await l.findPropertyImages(t)}async function M(){await l.findProperty({})}async function B(){await l.findWishListByPropertyId({objectType:"PROPERTY",objectIds:b.value})}async function O(){c.value.length>0&&await Q.findPropertyRating({objectType:"PROPERTY",object_ids:b.value},1)}return $(async()=>{await M(),await B(),await L(),await E(),await O()}),H(()=>{}),(t,a)=>(r(),_("div",le,[e("div",null,[s(x,{flat:""},{default:n(()=>[e("div",re,[e("div",de,[C.value?(r(),v(x,{key:1,style:{width:"100%"},class:"row justify-center",flat:""},{default:n(()=>[e("div",we,[ye,s(ae,{indeterminate:"",rounded:"",size:"50px",color:"lime",class:"q-ma-md"})])]),_:1})):(r(!0),_(S,{key:0},j(V.value,(o,m)=>(r(),_("div",ue,[(r(),v(x,{flat:"",class:"card-1",key:m,bordered:"",onMouseover:a[1]||(a[1]=u=>I.value=!1),onMouseout:a[2]||(a[2]=u=>I.value=!0)},{default:n(()=>[(r(),v(U,{modelValue:R.value[m],"onUpdate:modelValue":u=>R.value[m]=u,"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"",arrows:"","control-color":"amber",height:"auto",key:m,autoplay:!1,infinite:"",onClick:a[0]||(a[0]=K(()=>{},["stop"]))},{default:n(()=>[(r(!0),_(S,null,j(V.value[0].images,u=>(r(),v(Y,{name:u.id,class:"q-carousel__slides-container",key:m},{default:n(()=>[e("div",ce,[s(N,{ratio:4/3,class:"row",src:u.uri},null,8,["src"])])]),_:2},1032,["name"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])),e("div",me,[e("div",null,[s(F,{class:"two-line-break text-h6 text-bold"},{default:n(()=>[g(q((o==null?void 0:o.name.length)>P.value?o.name.substring(0,P.value)+"...":o.name)+" ",1),o.name>P.value?(r(),v(A,{key:0},{default:n(()=>[g(q(o.name),1)]),_:2},1024)):X("",!0)]),_:2},1024),s(D,{class:"q-my-sm",style:{width:"20%"}}),pe,ve,fe,_e,e("div",ge,[s(Z,{"no-caps":"",flat:"",rounded:"",style:{width:"100%"},color:"warning",label:"View Details"})])])])]),_:2},1024))]))),256))]),e("div",he,[s(se,{modelValue:h.value,"onUpdate:modelValue":a[3]||(a[3]=o=>h.value=o),max:5,input:"","direction-links":"","icon-first":"skip_previous","icon-last":"skip_next","icon-prev":"fast_rewind","icon-next":"fast_forward",color:"warning"},null,8,["modelValue"])])]),s(oe,{"transition-prev":"scale","transition-next":"scale",modelValue:T.value,"onUpdate:modelValue":a[4]||(a[4]=o=>T.value=o)},{default:n(()=>[s(w,{name:"account"},{default:n(()=>[Pe]),_:1}),s(w,{name:"wishlist",class:"bg-grey-1"}),s(w,{name:"password"},{default:n(()=>[be,g(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1}),s(w,{name:"billing"},{default:n(()=>[xe,g(" Lorem ipsum dolor sit amet consectetur adipisicing elit. ")]),_:1})]),_:1},8,["modelValue"])]),_:1})])]))}});var He=W(Qe,[["__scopeId","data-v-317c5b60"]]);export{He as default};
