import{h as t,G as w,aD as B,aE as R,r as V,c as n,C as j,M as z,H as D,g as F,V as f,aF as b}from"./index.29cc8f67.js";import{u as M,a as P}from"./use-dark.f934fa20.js";import{o as Q,u as T}from"./use-checkbox.a4f3c2b5.js";import{u as $,a as A}from"./use-form.286392dd.js";const E=t("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[t("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),t("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var H=w({name:"QRadio",props:{...M,...B,...$,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:i,emit:m}){const{proxy:u}=F(),k=P(e,u.$q),h=R(e,Q),s=V(null),{refocusTargetEl:c,refocusTarget:g}=T(e,s),o=n(()=>b(e.modelValue)===b(e.val)),q=n(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(k.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),_=n(()=>{const a=e.color!==void 0&&(e.keepColor===!0||o.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${o.value===!0?"truthy":"falsy"}${a}`}),d=n(()=>(o.value===!0?e.checkedIcon:e.uncheckedIcon)||null),y=n(()=>e.disable===!0?-1:e.tabindex||0),C=n(()=>{const a={type:"radio"};return e.name!==void 0&&Object.assign(a,{".checked":o.value===!0,"^checked":o.value===!0?"checked":void 0,name:e.name,value:e.val}),a}),S=A(C);function l(a){a!==void 0&&(f(a),g(a)),e.disable!==!0&&o.value!==!0&&m("update:modelValue",e.val,a)}function x(a){(a.keyCode===13||a.keyCode===32)&&f(a)}function I(a){(a.keyCode===13||a.keyCode===32)&&l(a)}return Object.assign(u,{set:l}),()=>{const a=d.value!==null?[t("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[t(j,{class:"q-radio__icon",name:d.value})])]:[E];e.disable!==!0&&S(a,"unshift"," q-radio__native q-ma-none q-pa-none");const r=[t("div",{class:_.value,style:h.value,"aria-hidden":"true"},a)];c.value!==null&&r.push(c.value);const v=e.label!==void 0?z(i.default,[e.label]):D(i.default);return v!==void 0&&r.push(t("div",{class:"q-radio__label q-anchor--skip"},v)),t("div",{ref:s,class:q.value,tabindex:y.value,role:"radio","aria-label":e.label,"aria-checked":o.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:l,onKeydown:x,onKeyup:I},r)}}});export{H as Q};
