import{c as s,k as j,r as o,w as I,p as P,h as r,P as Q,t as $,S as D}from"./index.6514caa5.js";const E={ratio:[String,Number]};function F(e,l){return s(()=>{const u=Number(e.ratio||(l!==void 0?l.value:void 0));return isNaN(u)!==!0&&u>0?{paddingBottom:`${100/u}%`}:null})}const H=16/9;var M=j({name:"QImg",props:{...E,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:H},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:l,emit:u}){const h=o(e.initialRatio),S=F(e,h);let t=null,d=!1;const n=[o(null),o(m())],a=o(0),c=o(!1),g=o(!1),q=s(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),w=s(()=>({width:e.width,height:e.height})),C=s(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),T=s(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));I(()=>y(),_);function y(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function m(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function _(i){t!==null&&(clearTimeout(t),t=null),g.value=!1,i===null?(c.value=!1,n[a.value^1].value=m()):c.value=!0,n[a.value].value=i}function z({target:i}){d!==!0&&(t!==null&&(clearTimeout(t),t=null),h.value=i.naturalHeight===0?.5:i.naturalWidth/i.naturalHeight,b(i,1))}function b(i,f){d===!0||f===1e3||(i.complete===!0?B(i):t=setTimeout(()=>{t=null,b(i,f+1)},50))}function B(i){d!==!0&&(a.value=a.value^1,n[a.value].value=null,c.value=!1,g.value=!1,u("load",i.currentSrc||i.src))}function N(i){t!==null&&(clearTimeout(t),t=null),c.value=!1,g.value=!0,n[a.value].value=null,n[a.value^1].value=m(),u("error",i)}function k(i){const f=n[i].value,v={key:"img_"+i,class:C.value,style:T.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...f};return a.value===i?(v.class+=" q-img__image--waiting",Object.assign(v,{onLoad:z,onError:N})):v.class+=" q-img__image--loaded",r("div",{class:"q-img__container absolute-full",key:"img"+i},r("img",v))}function R(){return c.value!==!0?r("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},$(l[g.value===!0?"error":"default"])):r("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},l.loading!==void 0?l.loading():e.noSpinner===!0?void 0:[r(D,{color:e.spinnerColor,size:e.spinnerSize})])}return _(y()),P(()=>{d=!0,t!==null&&(clearTimeout(t),t=null)}),()=>{const i=[];return S.value!==null&&i.push(r("div",{key:"filler",style:S.value})),g.value!==!0&&(n[0].value!==null&&i.push(k(0)),n[1].value!==null&&i.push(k(1))),i.push(r(Q,{name:"q-transition--fade"},R)),r("div",{class:q.value,style:w.value,role:"img","aria-label":e.alt},i)}}});const O={dark:{type:Boolean,default:null}};function A(e,l){return s(()=>e.dark===null?l.dark.isActive:e.dark)}export{M as Q,A as a,O as u};
