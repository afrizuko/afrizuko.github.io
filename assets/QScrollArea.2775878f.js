import{u as ee,a as te}from"./use-dark.faf6b918.js";import{Q as A}from"./QResizeObserver.7ee01f7f.js";import{Q as le}from"./QScrollObserver.7f23b86f.js";import{T as C}from"./TouchPan.967f958b.js";import{k as ae,r as n,c as i,aG as re,w as oe,a9 as ie,aa as ne,p as ue,h as u,O as se,q as j,g as ce}from"./index.40958af9.js";import{b as y}from"./format.c860d4da.js";import{s as $,d as p}from"./scroll.cbdd7d7a.js";const D=["vertical","horizontal"],_={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Q={prevent:!0,mouse:!0,mouseAllDir:!0},B=r=>r>=250?50:Math.ceil(r/5);var Se=ae({name:"QScrollArea",props:{...ee,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(r,{slots:k,emit:R}){const b=n(!1),f=n(!1),d=n(!1),o={vertical:n(0),horizontal:n(0)},e={vertical:{ref:n(null),position:n(0),size:n(0)},horizontal:{ref:n(null),position:n(0),size:n(0)}},{proxy:s}=ce(),E=te(r,s.$q);let z=null,q;const c=n(null),F=i(()=>"q-scrollarea"+(E.value===!0?" q-scrollarea--dark":""));e.vertical.percentage=i(()=>{const t=e.vertical.size.value-o.vertical.value;if(t<=0)return 0;const l=y(e.vertical.position.value/t,0,1);return Math.round(l*1e4)/1e4}),e.vertical.thumbHidden=i(()=>(r.visible===null?d.value:r.visible)!==!0&&b.value===!1&&f.value===!1||e.vertical.size.value<=o.vertical.value+1),e.vertical.thumbStart=i(()=>e.vertical.percentage.value*(o.vertical.value-e.vertical.thumbSize.value)),e.vertical.thumbSize=i(()=>Math.round(y(o.vertical.value*o.vertical.value/e.vertical.size.value,B(o.vertical.value),o.vertical.value))),e.vertical.style=i(()=>({...r.thumbStyle,...r.verticalThumbStyle,top:`${e.vertical.thumbStart.value}px`,height:`${e.vertical.thumbSize.value}px`})),e.vertical.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(e.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),e.vertical.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(e.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),e.horizontal.percentage=i(()=>{const t=e.horizontal.size.value-o.horizontal.value;if(t<=0)return 0;const l=y(Math.abs(e.horizontal.position.value)/t,0,1);return Math.round(l*1e4)/1e4}),e.horizontal.thumbHidden=i(()=>(r.visible===null?d.value:r.visible)!==!0&&b.value===!1&&f.value===!1||e.horizontal.size.value<=o.horizontal.value+1),e.horizontal.thumbStart=i(()=>e.horizontal.percentage.value*(o.horizontal.value-e.horizontal.thumbSize.value)),e.horizontal.thumbSize=i(()=>Math.round(y(o.horizontal.value*o.horizontal.value/e.horizontal.size.value,B(o.horizontal.value),o.horizontal.value))),e.horizontal.style=i(()=>({...r.thumbStyle,...r.horizontalThumbStyle,[s.$q.lang.rtl===!0?"right":"left"]:`${e.horizontal.thumbStart.value}px`,width:`${e.horizontal.thumbSize.value}px`})),e.horizontal.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(e.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),e.horizontal.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(e.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const V=i(()=>e.vertical.thumbHidden.value===!0&&e.horizontal.thumbHidden.value===!0?r.contentStyle:r.contentActiveStyle),L=[[C,t=>{H(t,"vertical")},void 0,{vertical:!0,...Q}]],N=[[C,t=>{H(t,"horizontal")},void 0,{horizontal:!0,...Q}]];function T(){const t={};return D.forEach(l=>{const a=e[l];t[l+"Position"]=a.position.value,t[l+"Percentage"]=a.percentage.value,t[l+"Size"]=a.size.value,t[l+"ContainerSize"]=o[l].value}),t}const M=re(()=>{const t=T();t.ref=s,R("scroll",t)},0);function P(t,l,a){if(D.includes(t)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(t==="vertical"?$:p)(c.value,l,a)}function G({height:t,width:l}){let a=!1;o.vertical.value!==t&&(o.vertical.value=t,a=!0),o.horizontal.value!==l&&(o.horizontal.value=l,a=!0),a===!0&&m()}function I({position:t}){let l=!1;e.vertical.position.value!==t.top&&(e.vertical.position.value=t.top,l=!0),e.horizontal.position.value!==t.left&&(e.horizontal.position.value=t.left,l=!0),l===!0&&m()}function U({height:t,width:l}){e.horizontal.size.value!==l&&(e.horizontal.size.value=l,m()),e.vertical.size.value!==t&&(e.vertical.size.value=t,m())}function H(t,l){const a=e[l];if(t.isFirst===!0){if(a.thumbHidden.value===!0)return;q=a.position.value,f.value=!0}else if(f.value!==!0)return;t.isFinal===!0&&(f.value=!1);const h=_[l],g=o[l].value,W=(a.size.value-g)/(g-a.thumbSize.value),Z=t.distance[h.dist],x=q+(t.direction===h.dir?1:-1)*Z*W;w(x,l)}function O(t,l){const a=e[l];if(a.thumbHidden.value!==!0){const h=t[_[l].offset];if(h<a.thumbStart.value||h>a.thumbStart.value+a.thumbSize.value){const g=h-a.thumbSize.value/2;w(g/o[l].value*a.size.value,l)}a.ref.value!==null&&a.ref.value.dispatchEvent(new MouseEvent(t.type,t))}}function X(t){O(t,"vertical")}function Y(t){O(t,"horizontal")}function m(){b.value=!0,z!==null&&clearTimeout(z),z=setTimeout(()=>{z=null,b.value=!1},r.delay),r.onScroll!==void 0&&M()}function w(t,l){c.value[_[l].scroll]=t}let v=null;function J(){v!==null&&clearTimeout(v),v=setTimeout(()=>{v=null,d.value=!0},s.$q.platform.is.ios?50:0)}function K(){v!==null&&(clearTimeout(v),v=null),d.value=!1}let S=null;return oe(()=>s.$q.lang.rtl,t=>{c.value!==null&&p(c.value,Math.abs(e.horizontal.position.value)*(t===!0?-1:1))}),ie(()=>{S={top:e.vertical.position.value,left:e.horizontal.position.value}}),ne(()=>{if(S===null)return;const t=c.value;t!==null&&(p(t,S.left),$(t,S.top))}),ue(M.cancel),Object.assign(s,{getScrollTarget:()=>c.value,getScroll:T,getScrollPosition:()=>({top:e.vertical.position.value,left:e.horizontal.position.value}),getScrollPercentage:()=>({top:e.vertical.percentage.value,left:e.horizontal.percentage.value}),setScrollPosition:P,setScrollPercentage(t,l,a){P(t,l*(e[t].size.value-o[t].value)*(t==="horizontal"&&s.$q.lang.rtl===!0?-1:1),a)}}),()=>u("div",{class:F.value,onMouseenter:J,onMouseleave:K},[u("div",{ref:c,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:r.tabindex!==void 0?r.tabindex:void 0},[u("div",{class:"q-scrollarea__content absolute",style:V.value},se(k.default,[u(A,{debounce:0,onResize:U})])),u(le,{axis:"both",onScroll:I})]),u(A,{debounce:0,onResize:G}),u("div",{class:e.vertical.barClass.value,style:[r.barStyle,r.verticalBarStyle],"aria-hidden":"true",onMousedown:X}),u("div",{class:e.horizontal.barClass.value,style:[r.barStyle,r.horizontalBarStyle],"aria-hidden":"true",onMousedown:Y}),j(u("div",{ref:e.vertical.ref,class:e.vertical.thumbClass.value,style:e.vertical.style.value,"aria-hidden":"true"}),L),j(u("div",{ref:e.horizontal.ref,class:e.horizontal.thumbClass.value,style:e.horizontal.style.value,"aria-hidden":"true"}),N)])}});export{Se as Q};
