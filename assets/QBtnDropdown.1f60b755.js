import{G as H,aN as v,r as m,c as u,w as h,o as k,h as i,C as O,H as V,Q as s,g as x,aO as I,av as M}from"./index.6f40f7fe.js";import{Q as P}from"./QBtnGroup.51533543.js";import{Q as _}from"./QMenu.98ff977b.js";import{a as j}from"./use-timeout.5be3eec1.js";import{u as R}from"./uid.42677368.js";const L=Object.keys(v),z=e=>L.reduce((o,t)=>{const l=e[t];return l!==void 0&&(o[t]=l),o},{});var U=H({name:"QBtnDropdown",props:{...v,...j,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:o,emit:t}){const{proxy:l}=x(),r=m(e.modelValue),a=m(null),c=R(),f=u(()=>{const n={"aria-expanded":r.value===!0?"true":"false","aria-haspopup":"true","aria-controls":c,"aria-label":e.toggleAriaLabel||l.$q.lang.label[r.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(n["aria-disabled"]="true"),n}),B=u(()=>"q-btn-dropdown__arrow"+(r.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),b=u(()=>I(e)),w=u(()=>z(e));h(()=>e.modelValue,n=>{a.value!==null&&a.value[n?"show":"hide"]()}),h(()=>e.split,d);function S(n){r.value=!0,t("beforeShow",n)}function C(n){t("show",n),t("update:modelValue",!0)}function q(n){r.value=!1,t("beforeHide",n)}function A(n){t("hide",n),t("update:modelValue",!1)}function D(n){t("click",n)}function y(n){M(n),d(),t("click",n)}function Q(n){a.value!==null&&a.value.toggle(n)}function g(n){a.value!==null&&a.value.show(n)}function d(n){a.value!==null&&a.value.hide(n)}return Object.assign(l,{show:g,hide:d,toggle:Q}),k(()=>{e.modelValue===!0&&g()}),()=>{const n=[i(O,{class:B.value,name:e.dropdownIcon||l.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&n.push(i(_,{ref:a,id:c,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:S,onShow:C,onBeforeHide:q,onHide:A},o.default)),e.split===!1?i(s,{class:"q-btn-dropdown q-btn-dropdown--simple",...w.value,...f.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:D},{default:()=>V(o.label,[]).concat(n),loading:o.loading}):i(P,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...b.value,glossy:e.glossy,stretch:e.stretch},()=>[i(s,{class:"q-btn-dropdown--current",...w.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:y},{default:o.label,loading:o.loading}),i(s,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...f.value,...b.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>n)])}}});export{U as Q};
