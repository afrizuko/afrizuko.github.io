import{u as Qe,a as st,b as ct,c as dt,f as ot,d as qt}from"./QInput.4ec71da6.js";import{G as ft,ar as Et,r as E,c as g,w as me,aG as _t,aH as Ht,a4 as Tt,a5 as Bt,K as vt,Y as G,h as w,g as mt,aI as Lt,aJ as Rt,ab as De,C as Pt,a3 as pe,U as Dt,av as fe,a2 as Nt,V as ve,M as Kt}from"./index.29cc8f67.js";import{Q as Qt}from"./QChip.8303e392.js";import{Q as $t}from"./QItem.15492546.js";import{Q as jt}from"./QItemSection.52be14ae.js";import{Q as Ut}from"./QItemLabel.6e93fea8.js";import{Q as Wt}from"./QMenu.38ee760d.js";import{Q as Xt}from"./QDialog.5ed25613.js";import{r as Ke}from"./rtl.b51694b1.js";import{u as Yt,b as Gt}from"./use-form.286392dd.js";import{n as at}from"./format.c860d4da.js";var Jt=ft({name:"QField",inheritAttrs:!1,props:{...Qe,tag:{type:String,default:"label"}},emits:st,setup(){return ct(dt({requiredForAttr:!1,tagProp:!0}))}});const K=1e3,Zt=["start","center","end","start-force","center-force","end-force"],St=Array.prototype.filter,el=window.getComputedStyle(document.body).overflowAnchor===void 0?Et:function(e,c){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const i=e.children||[];St.call(i,q=>q.dataset&&q.dataset.qVsAnchor!==void 0).forEach(q=>{delete q.dataset.qVsAnchor});const b=i[c];b&&b.dataset&&(b.dataset.qVsAnchor="")}))};function Se(e,c){return e+c}function Ne(e,c,i,b,q,a,_,h){const m=e===window?document.scrollingElement||document.documentElement:e,H=q===!0?"offsetWidth":"offsetHeight",r={scrollStart:0,scrollViewSize:-_-h,scrollMaxSize:0,offsetStart:-_,offsetEnd:-h};if(q===!0?(e===window?(r.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r.scrollViewSize+=document.documentElement.clientWidth):(r.scrollStart=m.scrollLeft,r.scrollViewSize+=m.clientWidth),r.scrollMaxSize=m.scrollWidth,a===!0&&(r.scrollStart=(Ke===!0?r.scrollMaxSize-r.scrollViewSize:0)-r.scrollStart)):(e===window?(r.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,r.scrollViewSize+=document.documentElement.clientHeight):(r.scrollStart=m.scrollTop,r.scrollViewSize+=m.clientHeight),r.scrollMaxSize=m.scrollHeight),i!==null)for(let y=i.previousElementSibling;y!==null;y=y.previousElementSibling)y.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetStart+=y[H]);if(b!==null)for(let y=b.nextElementSibling;y!==null;y=y.nextElementSibling)y.classList.contains("q-virtual-scroll--skip")===!1&&(r.offsetEnd+=y[H]);if(c!==e){const y=m.getBoundingClientRect(),V=c.getBoundingClientRect();q===!0?(r.offsetStart+=V.left-y.left,r.offsetEnd-=V.width):(r.offsetStart+=V.top-y.top,r.offsetEnd-=V.height),e!==window&&(r.offsetStart+=r.scrollStart),r.offsetEnd+=r.scrollMaxSize-r.offsetStart}return r}function it(e,c,i,b){c==="end"&&(c=(e===window?document.body:e)[i===!0?"scrollWidth":"scrollHeight"]),e===window?i===!0?(b===!0&&(c=(Ke===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-c),window.scrollTo(c,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c):i===!0?(b===!0&&(c=(Ke===!0?e.scrollWidth-e.offsetWidth:0)-c),e.scrollLeft=c):e.scrollTop=c}function xe(e,c,i,b){if(i>=b)return 0;const q=c.length,a=Math.floor(i/K),_=Math.floor((b-1)/K)+1;let h=e.slice(a,_).reduce(Se,0);return i%K!==0&&(h-=c.slice(a*K,i).reduce(Se,0)),b%K!==0&&b!==q&&(h-=c.slice(b,_*K).reduce(Se,0)),h}const tl={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},ll={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...tl};function ul({virtualScrollLength:e,getVirtualScrollTarget:c,getVirtualScrollEl:i,virtualScrollItemSizeComputed:b}){const q=mt(),{props:a,emit:_,proxy:h}=q,{$q:m}=h;let H,r,y,V=[],A;const M=E(0),N=E(0),B=E({}),U=E(null),W=E(null),L=E(null),z=E({from:0,to:0}),Ae=g(()=>a.tableColspan!==void 0?a.tableColspan:100);b===void 0&&(b=g(()=>a.virtualScrollItemSize));const I=g(()=>b.value+";"+a.virtualScrollHorizontal),X=g(()=>I.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);me(X,()=>{Q()}),me(I,J);function J(){ne(r,!0)}function ge(l){ne(l===void 0?r:l)}function Z(l,o){const d=c();if(d==null||d.nodeType===8)return;const x=Ne(d,i(),U.value,W.value,a.virtualScrollHorizontal,m.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);y!==x.scrollViewSize&&Q(x.scrollViewSize),R(d,x,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,Zt.indexOf(o)>-1?o:r>-1&&l>r?"end":"start")}function ke(){const l=c();if(l==null||l.nodeType===8)return;const o=Ne(l,i(),U.value,W.value,a.virtualScrollHorizontal,m.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),d=e.value-1,x=o.scrollMaxSize-o.offsetStart-o.offsetEnd-N.value;if(H===o.scrollStart)return;if(o.scrollMaxSize<=0){R(l,o,0,0);return}y!==o.scrollViewSize&&Q(o.scrollViewSize),he(z.value.from);const F=Math.floor(o.scrollMaxSize-Math.max(o.scrollViewSize,o.offsetEnd)-Math.min(A[d],o.scrollViewSize/2));if(F>0&&Math.ceil(o.scrollStart)>=F){R(l,o,d,o.scrollMaxSize-o.offsetEnd-V.reduce(Se,0));return}let S=0,v=o.scrollStart-o.offsetStart,O=v;if(v<=x&&v+o.scrollViewSize>=M.value)v-=M.value,S=z.value.from,O=v;else for(let f=0;v>=V[f]&&S<d;f++)v-=V[f],S+=K;for(;v>0&&S<d;)v-=A[S],v>-o.scrollViewSize?(S++,O=v):O=A[S]+v;R(l,o,S,O)}function R(l,o,d,x,F){const S=typeof F=="string"&&F.indexOf("-force")>-1,v=S===!0?F.replace("-force",""):F,O=v!==void 0?v:"start";let f=Math.max(0,d-B.value[O]),P=f+B.value.total;P>e.value&&(P=e.value,f=Math.max(0,P-B.value.total)),H=o.scrollStart;const Y=f!==z.value.from||P!==z.value.to;if(Y===!1&&v===void 0){ye(d);return}const{activeElement:Ie}=document,$=L.value;Y===!0&&$!==null&&$!==Ie&&$.contains(Ie)===!0&&($.addEventListener("focusout",ze),setTimeout(()=>{$!==null&&$.removeEventListener("focusout",ze)})),el($,d-f);const Me=v!==void 0?A.slice(f,d).reduce(Se,0):0;if(Y===!0){const ee=P>=z.value.from&&f<=z.value.to?z.value.to:P;z.value={from:f,to:ee},M.value=xe(V,A,0,f),N.value=xe(V,A,P,e.value),requestAnimationFrame(()=>{z.value.to!==P&&H===o.scrollStart&&(z.value={from:z.value.from,to:P},N.value=xe(V,A,P,e.value))})}requestAnimationFrame(()=>{if(H!==o.scrollStart)return;Y===!0&&he(f);const ee=A.slice(f,d).reduce(Se,0),te=ee+o.offsetStart+M.value,Fe=te+A[d];let be=te+x;if(v!==void 0){const He=ee-Me,Ve=o.scrollStart+He;be=S!==!0&&Ve<te&&Fe<Ve+o.scrollViewSize?Ve:v==="end"?Fe-o.scrollViewSize:te-(v==="start"?0:Math.round((o.scrollViewSize-A[d])/2))}H=be,it(l,be,a.virtualScrollHorizontal,m.lang.rtl),ye(d)})}function he(l){const o=L.value;if(o){const d=St.call(o.children,f=>f.classList&&f.classList.contains("q-virtual-scroll--skip")===!1),x=d.length,F=a.virtualScrollHorizontal===!0?f=>f.getBoundingClientRect().width:f=>f.offsetHeight;let S=l,v,O;for(let f=0;f<x;){for(v=F(d[f]),f++;f<x&&d[f].classList.contains("q-virtual-scroll--with-prev")===!0;)v+=F(d[f]),f++;O=v-A[S],O!==0&&(A[S]+=O,V[Math.floor(S/K)]+=O),S++}}}function ze(){L.value!==null&&L.value!==void 0&&L.value.focus()}function ne(l,o){const d=1*b.value;(o===!0||Array.isArray(A)===!1)&&(A=[]);const x=A.length;A.length=e.value;for(let S=e.value-1;S>=x;S--)A[S]=d;const F=Math.floor((e.value-1)/K);V=[];for(let S=0;S<=F;S++){let v=0;const O=Math.min((S+1)*K,e.value);for(let f=S*K;f<O;f++)v+=A[f];V.push(v)}r=-1,H=void 0,M.value=xe(V,A,0,z.value.from),N.value=xe(V,A,z.value.to,e.value),l>=0?(he(z.value.from),G(()=>{Z(l)})):oe()}function Q(l){if(l===void 0&&typeof window!="undefined"){const v=c();v!=null&&v.nodeType!==8&&(l=Ne(v,i(),U.value,W.value,a.virtualScrollHorizontal,m.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}y=l;const o=parseFloat(a.virtualScrollSliceRatioBefore)||0,d=parseFloat(a.virtualScrollSliceRatioAfter)||0,x=1+o+d,F=l===void 0||l<=0?1:Math.ceil(l/b.value),S=Math.max(1,F,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/x));B.value={total:Math.ceil(S*x),start:Math.ceil(S*o),center:Math.ceil(S*(.5+o)),end:Math.ceil(S*(1+o)),view:F}}function _e(l,o){const d=a.virtualScrollHorizontal===!0?"width":"height",x={["--q-virtual-scroll-item-"+d]:b.value+"px"};return[l==="tbody"?w(l,{class:"q-virtual-scroll__padding",key:"before",ref:U},[w("tr",[w("td",{style:{[d]:`${M.value}px`,...x},colspan:Ae.value})])]):w(l,{class:"q-virtual-scroll__padding",key:"before",ref:U,style:{[d]:`${M.value}px`,...x}}),w(l,{class:"q-virtual-scroll__content",key:"content",ref:L,tabindex:-1},o.flat()),l==="tbody"?w(l,{class:"q-virtual-scroll__padding",key:"after",ref:W},[w("tr",[w("td",{style:{[d]:`${N.value}px`,...x},colspan:Ae.value})])]):w(l,{class:"q-virtual-scroll__padding",key:"after",ref:W,style:{[d]:`${N.value}px`,...x}})]}function ye(l){r!==l&&(a.onVirtualScroll!==void 0&&_("virtualScroll",{index:l,from:z.value.from,to:z.value.to-1,direction:l<r?"decrease":"increase",ref:h}),r=l)}Q();const oe=_t(ke,m.platform.is.ios===!0?120:35);Ht(()=>{Q()});let we=!1;return Tt(()=>{we=!0}),Bt(()=>{if(we!==!0)return;const l=c();H!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?it(l,H,a.virtualScrollHorizontal,m.lang.rtl):Z(r)}),vt(()=>{oe.cancel()}),Object.assign(h,{scrollTo:Z,reset:J,refresh:ge}),{virtualScrollSliceRange:z,virtualScrollSliceSizeComputed:B,setVirtualScrollSize:Q,onVirtualScrollEvt:oe,localResetVirtualScroll:ne,padVirtualScroll:_e,scrollTo:Z,reset:J,refresh:ge}}const rt=e=>["add","add-unique","toggle"].includes(e),nl=".*+?^${}()|[]\\",ol=Object.keys(Qe);var hl=ft({name:"QSelect",inheritAttrs:!1,props:{...ll,...Yt,...Qe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:rt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...st,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:c,emit:i}){const{proxy:b}=mt(),{$q:q}=b,a=E(!1),_=E(!1),h=E(-1),m=E(""),H=E(!1),r=E(!1);let y=null,V=null,A,M,N,B=null,U,W,L,z;const Ae=E(null),I=E(null),X=E(null),J=E(null),ge=E(null),Z=Gt(e),ke=qt(et),R=g(()=>Array.isArray(e.options)?e.options.length:0),he=g(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:ze,virtualScrollSliceSizeComputed:ne,localResetVirtualScroll:Q,padVirtualScroll:_e,onVirtualScrollEvt:ye,scrollTo:oe,setVirtualScrollSize:we}=ul({virtualScrollLength:R,getVirtualScrollTarget:wt,getVirtualScrollEl:Je,virtualScrollItemSizeComputed:he}),l=dt(),o=g(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,n=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&A!==void 0?A:[],s=n.map(p=>yt(p,u));return e.modelValue===null&&t===!0?s.filter(p=>p!==null):s}return n}),d=g(()=>{const t={};return ol.forEach(n=>{const u=e[n];u!==void 0&&(t[n]=u)}),t}),x=g(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),F=g(()=>ot(o.value)),S=g(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||o.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),v=g(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),O=g(()=>R.value===0),f=g(()=>o.value.map(t=>D.value(t)).join(", ")),P=g(()=>e.displayValue!==void 0?e.displayValue:f.value),Y=g(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),Ie=g(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||o.value.some(Y.value))),$=g(()=>l.focused.value===!0?e.tabindex:-1),Me=g(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return h.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${h.value}`),t}),ee=g(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),te=g(()=>o.value.map((t,n)=>({index:n,opt:t,html:Y.value(t),selected:!0,removeAtIndex:ht,toggleOption:le,tabindex:$.value}))),Fe=g(()=>{if(R.value===0)return[];const{from:t,to:n}=ze.value;return e.options.slice(t,n).map((u,s)=>{const p=ae.value(u)===!0,C=Le(u)===!0,T=t+s,k={clickable:!0,active:C,activeClass:Ve.value,manualFocus:!0,focused:!1,disable:p,tabindex:-1,dense:e.optionsDense,dark:x.value,role:"option","aria-selected":C===!0?"true":"false",id:`${l.targetUid.value}_${T}`,onClick:()=>{le(u)}};return p!==!0&&(h.value===T&&(k.focused=!0),q.platform.is.desktop===!0&&(k.onMousemove=()=>{a.value===!0&&ie(T)})),{index:T,opt:u,html:Y.value(u),label:D.value(u),selected:k.active,focused:k.focused,toggleOption:le,setOptionIndex:ie,itemProps:k}})}),be=g(()=>e.dropdownIcon!==void 0?e.dropdownIcon:q.iconSet.arrow.dropdown),He=g(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ve=g(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),j=g(()=>Be(e.optionValue,"value")),D=g(()=>Be(e.optionLabel,"label")),ae=g(()=>Be(e.optionDisable,"disable")),Oe=g(()=>o.value.map(t=>j.value(t))),gt=g(()=>{const t={onInput:et,onChange:ke,onKeydown:Ge,onKeyup:Xe,onKeypress:Ye,onFocus:Ue,onClick(n){M===!0&&fe(n)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=ke,t});me(o,t=>{A=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(_.value!==!0&&a.value!==!0||F.value!==!0)&&(N!==!0&&de(),(_.value===!0||a.value===!0)&&re(""))},{immediate:!0}),me(()=>e.fillInput,de),me(a,Re),me(R,Ot);function $e(t){return e.emitValue===!0?j.value(t):t}function Te(t){if(t>-1&&t<o.value.length)if(e.multiple===!0){const n=e.modelValue.slice();i("remove",{index:t,value:n.splice(t,1)[0]}),i("update:modelValue",n)}else i("update:modelValue",null)}function ht(t){Te(t),l.focus()}function je(t,n){const u=$e(t);if(e.multiple!==!0){e.fillInput===!0&&Ce(D.value(t),!0,!0),i("update:modelValue",u);return}if(o.value.length===0){i("add",{index:0,value:u}),i("update:modelValue",e.multiple===!0?[u]:u);return}if(n===!0&&Le(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const s=e.modelValue.slice();i("add",{index:s.length,value:u}),s.push(u),i("update:modelValue",s)}function le(t,n){if(l.editable.value!==!0||t===void 0||ae.value(t)===!0)return;const u=j.value(t);if(e.multiple!==!0){n!==!0&&(Ce(e.fillInput===!0?D.value(t):"",!0,!0),ue()),I.value!==null&&I.value.focus(),(o.value.length===0||pe(j.value(o.value[0]),u)!==!0)&&i("update:modelValue",e.emitValue===!0?u:t);return}if((M!==!0||H.value===!0)&&l.focus(),Ue(),o.value.length===0){const C=e.emitValue===!0?u:t;i("add",{index:0,value:C}),i("update:modelValue",e.multiple===!0?[C]:C);return}const s=e.modelValue.slice(),p=Oe.value.findIndex(C=>pe(C,u));if(p>-1)i("remove",{index:p,value:s.splice(p,1)[0]});else{if(e.maxValues!==void 0&&s.length>=e.maxValues)return;const C=e.emitValue===!0?u:t;i("add",{index:s.length,value:C}),s.push(C)}i("update:modelValue",s)}function ie(t){if(q.platform.is.desktop!==!0)return;const n=t>-1&&t<R.value?t:-1;h.value!==n&&(h.value=n)}function qe(t=1,n){if(a.value===!0){let u=h.value;do u=at(u+t,-1,R.value-1);while(u!==-1&&u!==h.value&&ae.value(e.options[u])===!0);h.value!==u&&(ie(u),oe(u),n!==!0&&e.useInput===!0&&e.fillInput===!0&&Ee(u>=0?D.value(e.options[u]):U,!0))}}function yt(t,n){const u=s=>pe(j.value(s),t);return e.options.find(u)||n.find(u)||t}function Be(t,n){const u=t!==void 0?t:n;return typeof u=="function"?u:s=>s!==null&&typeof s=="object"&&u in s?s[u]:s}function Le(t){const n=j.value(t);return Oe.value.find(u=>pe(u,n))!==void 0}function Ue(t){e.useInput===!0&&I.value!==null&&(t===void 0||I.value===t.target&&t.target.value===f.value)&&I.value.select()}function We(t){Dt(t,27)===!0&&a.value===!0&&(fe(t),ue(),de()),i("keyup",t)}function Xe(t){const{value:n}=t.target;if(t.keyCode!==void 0){We(t);return}if(t.target.value="",y!==null&&(clearTimeout(y),y=null),V!==null&&(clearTimeout(V),V=null),de(),typeof n=="string"&&n.length!==0){const u=n.toLocaleLowerCase(),s=C=>{const T=e.options.find(k=>C.value(k).toLocaleLowerCase()===u);return T===void 0?!1:(o.value.indexOf(T)===-1?le(T):ue(),!0)},p=C=>{s(j)!==!0&&(s(D)===!0||C===!0||re(n,!0,()=>p(!0)))};p()}else l.clearValue(t)}function Ye(t){i("keypress",t)}function Ge(t){if(i("keydown",t),Nt(t)===!0)return;const n=m.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(h.value>-1||n===!0);if(t.keyCode===27){De(t);return}if(t.keyCode===9&&u===!1){se();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&a.value===!1){ve(t),ce();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&m.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Te(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&i("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof m.value!="string"||m.value.length===0)&&(ve(t),h.value=-1,qe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ne.value!==void 0&&(ve(t),h.value=Math.max(-1,Math.min(R.value,h.value+(t.keyCode===33?-1:1)*ne.value.view)),qe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ve(t),qe(t.keyCode===38?-1:1,e.multiple));const s=R.value;if((L===void 0||z<Date.now())&&(L=""),s>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||L.length!==0)){a.value!==!0&&ce(t);const p=t.key.toLocaleLowerCase(),C=L.length===1&&L[0]===p;z=Date.now()+1500,C===!1&&(ve(t),L+=p);const T=new RegExp("^"+L.split("").map(Pe=>nl.indexOf(Pe)>-1?"\\"+Pe:Pe).join(".*"),"i");let k=h.value;if(C===!0||k<0||T.test(D.value(e.options[k]))!==!0)do k=at(k+1,-1,s-1);while(k!==h.value&&(ae.value(e.options[k])===!0||T.test(D.value(e.options[k]))!==!0));h.value!==k&&G(()=>{ie(k),oe(k),k>=0&&e.useInput===!0&&e.fillInput===!0&&Ee(D.value(e.options[k]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||L!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&ve(t),h.value>-1&&h.value<s){le(e.options[h.value]);return}if(n===!0){const p=(C,T)=>{if(T){if(rt(T)!==!0)return}else T=e.newValueMode;if(Ce("",e.multiple!==!0,!0),C==null)return;(T==="toggle"?le:je)(C,T==="add-unique"),e.multiple!==!0&&(I.value!==null&&I.value.focus(),ue())};if(e.onNewValue!==void 0?i("newValue",m.value,p):p(m.value),e.multiple!==!0)return}a.value===!0?se():l.innerLoading.value!==!0&&ce()}}function Je(){return M===!0?ge.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function wt(){return Je()}function bt(){return e.hideSelected===!0?[]:c["selected-item"]!==void 0?te.value.map(t=>c["selected-item"](t)).slice():c.selected!==void 0?[].concat(c.selected()):e.useChips===!0?te.value.map((t,n)=>w(Qt,{key:"option-"+n,removable:l.editable.value===!0&&ae.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:$.value,onRemove(){t.removeAtIndex(n)}},()=>w("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:D.value(t.opt)}))):[w("span",{[Ie.value===!0?"innerHTML":"textContent"]:P.value})]}function Ze(){if(O.value===!0)return c["no-option"]!==void 0?c["no-option"]({inputValue:m.value}):void 0;const t=c.option!==void 0?c.option:u=>w($t,{key:u.index,...u.itemProps},()=>w(jt,()=>w(Ut,()=>w("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let n=_e("div",Fe.value.map(t));return c["before-options"]!==void 0&&(n=c["before-options"]().concat(n)),Kt(c["after-options"],n)}function Vt(t,n){const u=n===!0?{...Me.value,...l.splitAttrs.attributes.value}:void 0,s={ref:n===!0?I:void 0,key:"i_t",class:S.value,style:e.inputStyle,value:m.value!==void 0?m.value:"",type:"search",...u,id:n===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...gt.value};return t!==!0&&M===!0&&(Array.isArray(s.class)===!0?s.class=[...s.class,"no-pointer-events"]:s.class+=" no-pointer-events"),w("input",s)}function et(t){y!==null&&(clearTimeout(y),y=null),V!==null&&(clearTimeout(V),V=null),!(t&&t.target&&t.target.qComposing===!0)&&(Ee(t.target.value||""),N=!0,U=m.value,l.focused.value!==!0&&(M!==!0||H.value===!0)&&l.focus(),e.onFilter!==void 0&&(y=setTimeout(()=>{y=null,re(m.value)},e.inputDebounce)))}function Ee(t,n){m.value!==t&&(m.value=t,n===!0||e.inputDebounce===0||e.inputDebounce==="0"?i("inputValue",t):V=setTimeout(()=>{V=null,i("inputValue",t)},e.inputDebounce))}function Ce(t,n,u){N=u!==!0,e.useInput===!0&&(Ee(t,!0),(n===!0||u!==!0)&&(U=t),n!==!0&&re(t))}function re(t,n,u){if(e.onFilter===void 0||n!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?i("filterAbort"):(l.innerLoading.value=!0,r.value=!0),t!==""&&e.multiple!==!0&&o.value.length!==0&&N!==!0&&t===D.value(o.value[0])&&(t="");const s=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);B!==null&&clearTimeout(B),B=s,i("filter",t,(p,C)=>{(n===!0||l.focused.value===!0)&&B===s&&(clearTimeout(B),typeof p=="function"&&p(),r.value=!1,G(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(n===!0?a.value===!0&&ue():a.value===!0?Re(!0):a.value=!0),typeof C=="function"&&G(()=>{C(b)}),typeof u=="function"&&G(()=>{u(b)})}))},()=>{l.focused.value===!0&&B===s&&(clearTimeout(B),l.innerLoading.value=!1,r.value=!1),a.value===!0&&(a.value=!1)})}function Ct(){return w(Wt,{ref:X,class:v.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&O.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:x.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:He.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:ye,onBeforeShow:lt,onBeforeHide:pt,onShow:xt},Ze)}function pt(t){ut(t),se()}function xt(){we()}function At(t){fe(t),I.value!==null&&I.value.focus(),H.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function kt(t){fe(t),G(()=>{H.value=!1})}function zt(){const t=[w(Jt,{class:`col-auto ${l.fieldClass.value}`,...d.value,for:l.targetUid.value,dark:x.value,square:!0,loading:r.value,itemAligned:!1,filled:!0,stackLabel:m.value.length!==0,...l.splitAttrs.listeners.value,onFocus:At,onBlur:kt},{...c,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return a.value===!0&&t.push(w("div",{ref:ge,class:v.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:De,onScrollPassive:ye},Ze())),w(Xt,{ref:J,modelValue:_.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:lt,onBeforeHide:It,onHide:Mt,onShow:Ft},()=>w("div",{class:"q-select__dialog"+(x.value===!0?" q-select__dialog--dark q-dark":"")+(H.value===!0?" q-select__dialog--focused":"")},t))}function It(t){ut(t),J.value!==null&&J.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Mt(t){ue(),l.focused.value===!1&&i("blur",t),de()}function Ft(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&I.value!==null&&I.value!==t&&I.value.focus(),we()}function se(){_.value!==!0&&(h.value=-1,a.value===!0&&(a.value=!1),l.focused.value===!1&&(B!==null&&(clearTimeout(B),B=null),l.innerLoading.value===!0&&(i("filterAbort"),l.innerLoading.value=!1,r.value=!1)))}function ce(t){l.editable.value===!0&&(M===!0?(l.onControlFocusin(t),_.value=!0,G(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?re(m.value):(O.value!==!0||c["no-option"]!==void 0)&&(a.value=!0))}function ue(){_.value=!1,se()}function de(){e.useInput===!0&&Ce(e.multiple!==!0&&e.fillInput===!0&&o.value.length!==0&&D.value(o.value[0])||"",!0,!0)}function Re(t){let n=-1;if(t===!0){if(o.value.length!==0){const u=j.value(o.value[0]);n=e.options.findIndex(s=>pe(j.value(s),u))}Q(n)}ie(n)}function Ot(t,n){a.value===!0&&l.innerLoading.value===!1&&(Q(-1,!0),G(()=>{a.value===!0&&l.innerLoading.value===!1&&(t>n?Q():Re(!0))}))}function tt(){_.value===!1&&X.value!==null&&X.value.updatePosition()}function lt(t){t!==void 0&&fe(t),i("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function ut(t){t!==void 0&&fe(t),i("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function nt(){M=q.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?c["no-option"]!==void 0||e.onFilter!==void 0||O.value===!1:!0),W=q.platform.is.ios===!0&&M===!0&&e.useInput===!0?"fade":e.transitionShow}return Lt(nt),Rt(tt),nt(),vt(()=>{y!==null&&clearTimeout(y),V!==null&&clearTimeout(V)}),Object.assign(b,{showPopup:ce,hidePopup:ue,removeAtIndex:Te,add:je,toggleOption:le,getOptionIndex:()=>h.value,setOptionIndex:ie,moveOptionSelection:qe,filter:re,updateMenuPosition:tt,updateInputValue:Ce,isOptionSelected:Le,getEmittingOptionValue:$e,isOptionDisabled:(...t)=>ae.value.apply(null,t)===!0,getOptionValue:(...t)=>j.value.apply(null,t),getOptionLabel:(...t)=>D.value.apply(null,t)}),Object.assign(l,{innerValue:o,fieldClass:g(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:Ae,targetRef:I,hasValue:F,showPopup:ce,floatingLabel:g(()=>e.hideSelected!==!0&&F.value===!0||typeof m.value=="number"||m.value.length!==0||ot(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(_.value===!0||O.value!==!0||c["no-option"]!==void 0))return M===!0?zt():Ct();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{de(),se()})},onClick(t){if(De(t),M!==!0&&a.value===!0){se(),I.value!==null&&I.value.focus();return}ce(t)}},getControl:t=>{const n=bt(),u=t===!0||_.value!==!0||M!==!0;if(e.useInput===!0)n.push(Vt(t,u));else if(l.editable.value===!0){const p=u===!0?Me.value:void 0;n.push(w("input",{ref:u===!0?I:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?l.targetUid.value:void 0,value:P.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...p,onKeydown:Ge,onKeyup:We,onKeypress:Ye})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&n.push(w("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Xe}))}if(Z.value!==void 0&&e.disable!==!0&&Oe.value.length!==0){const p=Oe.value.map(C=>w("option",{value:C,selected:!0}));n.push(w("select",{class:"hidden",name:Z.value,multiple:e.multiple},p))}const s=e.useInput===!0||u!==!0?void 0:l.splitAttrs.attributes.value;return w("div",{class:"q-field__native row items-center",...s,...l.splitAttrs.listeners.value},n)},getInnerAppend:()=>e.loading!==!0&&r.value!==!0&&e.hideDropdownIcon!==!0?[w(Pt,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:be.value})]:null}),ct(l)}});export{hl as Q};
