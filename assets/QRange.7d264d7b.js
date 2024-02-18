import{T as Ne}from"./TouchPan.50f8bdc3.js";import{a as _e,u as Fe}from"./use-dark.0ca98b24.js";import{u as pe,a as Ae}from"./use-form.17ab9b10.js";import{b as g}from"./format.c860d4da.js";import{r as $,c as t,p as Ie,a2 as De,h as f,s as Oe,g as ie,aK as ze,aL as Z,k as Ee,w as Pe,X as je}from"./index.e0ba20ab.js";const ue="q-slider__marker-labels",Ke=l=>({value:l}),Xe=({marker:l})=>f("div",{key:l.value,style:l.style,class:l.classes},l.label),se=[34,37,40,33,39,38],Ge={...Fe,...pe,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:l=>l>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,hideSelection:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},Qe=["pan","update:modelValue","change"];function We({updateValue:l,updatePosition:L,getDragging:B,formAttrs:n}){const{props:e,emit:O,slots:N,proxy:{$q:_}}=ie(),o=_e(e,_),P=Ae(n),y=$(!1),F=$(!1),h=$(!1),p=$(!1),M=t(()=>e.vertical===!0?"--v":"--h"),G=t(()=>"-"+(e.switchLabelSide===!0?"switched":"standard")),R=t(()=>e.vertical===!0?e.reverse===!0:e.reverse!==(_.lang.rtl===!0)),k=t(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),T=t(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax),V=t(()=>e.disable!==!0&&e.readonly!==!0&&k.value<T.value),j=t(()=>{if(e.step===0)return r=>r;const a=(String(e.step).trim().split(".")[1]||"").length;return r=>parseFloat(r.toFixed(a))}),K=t(()=>e.step===0?1:e.step),Q=t(()=>V.value===!0?e.tabindex||0:-1),I=t(()=>e.max-e.min),z=t(()=>T.value-k.value),D=t(()=>W(k.value)),E=t(()=>W(T.value)),A=t(()=>e.vertical===!0?R.value===!0?"bottom":"top":R.value===!0?"right":"left"),s=t(()=>e.vertical===!0?"height":"width"),u=t(()=>e.vertical===!0?"width":"height"),d=t(()=>e.vertical===!0?"vertical":"horizontal"),v=t(()=>{const a={role:"slider","aria-valuemin":k.value,"aria-valuemax":T.value,"aria-orientation":d.value,"data-step":e.step};return e.disable===!0?a["aria-disabled"]="true":e.readonly===!0&&(a["aria-readonly"]="true"),a}),x=t(()=>`q-slider q-slider${M.value} q-slider--${y.value===!0?"":"in"}active inline no-wrap `+(e.vertical===!0?"row":"column")+(e.disable===!0?" disabled":" q-slider--enabled"+(V.value===!0?" q-slider--editable":""))+(h.value==="both"?" q-slider--focus":"")+(e.label||e.labelAlways===!0?" q-slider--label":"")+(e.labelAlways===!0?" q-slider--label-always":"")+(o.value===!0?" q-slider--dark":"")+(e.dense===!0?" q-slider--dense q-slider--dense"+M.value:""));function S(a){const r="q-slider__"+a;return`${r} ${r}${M.value} ${r}${M.value}${G.value}`}function m(a){const r="q-slider__"+a;return`${r} ${r}${M.value}`}const C=t(()=>{const a=e.selectionColor||e.color;return"q-slider__selection absolute"+(a!==void 0?` text-${a}`:"")}),X=t(()=>m("markers")+" absolute overflow-hidden"),ce=t(()=>m("track-container")),ve=t(()=>S("pin")),me=t(()=>S("label")),de=t(()=>S("text-container")),be=t(()=>S("marker-labels-container")+(e.markerLabelsClass!==void 0?` ${e.markerLabelsClass}`:"")),fe=t(()=>"q-slider__track relative-position no-outline"+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),xe=t(()=>{const a={[u.value]:e.trackSize};return e.trackImg!==void 0&&(a.backgroundImage=`url(${e.trackImg}) !important`),a}),he=t(()=>"q-slider__inner absolute"+(e.innerTrackColor!==void 0?` bg-${e.innerTrackColor}`:"")),ee=t(()=>{const a=E.value-D.value,r={[A.value]:`${100*D.value}%`,[s.value]:a===0?"2px":`${100*a}%`};return e.innerTrackImg!==void 0&&(r.backgroundImage=`url(${e.innerTrackImg}) !important`),r});function Me(a){const{min:r,max:i,step:c}=e;let b=r+a*(i-r);if(c>0){const w=(b-k.value)%c;b+=(Math.abs(w)>=c/2?(w<0?-1:1)*c:0)-w}return b=j.value(b),g(b,k.value,T.value)}function W(a){return I.value===0?0:(a-e.min)/I.value}function ke(a,r){const i=De(a),c=e.vertical===!0?g((i.top-r.top)/r.height,0,1):g((i.left-r.left)/r.width,0,1);return g(R.value===!0?1-c:c,D.value,E.value)}const ae=t(()=>ze(e.markers)===!0?e.markers:K.value),le=t(()=>{const a=[],r=ae.value,i=e.max;let c=e.min;do a.push(c),c+=r;while(c<i);return a.push(i),a}),te=t(()=>{const a=` ${ue}${M.value}-`;return ue+`${a}${e.switchMarkerLabelsSide===!0?"switched":"standard"}${a}${R.value===!0?"rtl":"ltr"}`}),H=t(()=>e.markerLabels===!1?null:ge(e.markerLabels).map((a,r)=>({index:r,value:a.value,label:a.label||a.value,classes:te.value+(a.classes!==void 0?" "+a.classes:""),style:{...re(a.value),...a.style||{}}}))),ne=t(()=>({markerList:H.value,markerMap:ye.value,classes:te.value,getStyle:re})),Ce=t(()=>{const a=z.value===0?"2px":100*ae.value/z.value;return{...ee.value,backgroundSize:e.vertical===!0?`2px ${a}%`:`${a}% 2px`}});function ge(a){if(a===!1)return null;if(a===!0)return le.value.map(Ke);if(typeof a=="function")return le.value.map(i=>{const c=a(i);return Z(c)===!0?{...c,value:i}:{value:i,label:c}});const r=({value:i})=>i>=e.min&&i<=e.max;return Array.isArray(a)===!0?a.map(i=>Z(i)===!0?i:{value:i}).filter(r):Object.keys(a).map(i=>{const c=a[i],b=Number(i);return Z(c)===!0?{...c,value:b}:{value:b,label:c}}).filter(r)}function re(a){return{[A.value]:`${100*(a-e.min)/I.value}%`}}const ye=t(()=>{if(e.markerLabels===!1)return null;const a={};return H.value.forEach(r=>{a[r.value]=r}),a});function Re(){if(N["marker-label-group"]!==void 0)return N["marker-label-group"](ne.value);const a=N["marker-label"]||Xe;return H.value.map(r=>a({marker:r,...ne.value}))}const Se=t(()=>[[Ne,$e,void 0,{[d.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function $e(a){a.isFinal===!0?(p.value!==void 0&&(L(a.evt),a.touch===!0&&l(!0),p.value=void 0,O("pan","end")),y.value=!1,h.value=!1):a.isFirst===!0?(p.value=B(a.evt),L(a.evt),l(),y.value=!0,O("pan","start")):(L(a.evt),l())}function oe(){h.value=!1}function Le(a){L(a,B(a)),l(),F.value=!0,y.value=!0,document.addEventListener("mouseup",U,!0)}function U(){F.value=!1,y.value=!1,l(!0),oe(),document.removeEventListener("mouseup",U,!0)}function Te(a){L(a,B(a)),l(!0)}function Ve(a){se.includes(a.keyCode)&&l(!0)}function we(a){if(e.vertical===!0)return null;const r=_.lang.rtl!==e.reverse?1-a:a;return{transform:`translateX(calc(${2*r-1} * ${e.thumbSize} / 2 + ${50-100*r}%))`}}function qe(a){const r=t(()=>F.value===!1&&(h.value===a.focusValue||h.value==="both")?" q-slider--focus":""),i=t(()=>`q-slider__thumb q-slider__thumb${M.value} q-slider__thumb${M.value}-${R.value===!0?"rtl":"ltr"} absolute non-selectable`+r.value+(a.thumbColor.value!==void 0?` text-${a.thumbColor.value}`:"")),c=t(()=>({width:e.thumbSize,height:e.thumbSize,[A.value]:`${100*a.ratio.value}%`,zIndex:h.value===a.focusValue?2:void 0})),b=t(()=>a.labelColor.value!==void 0?` text-${a.labelColor.value}`:""),w=t(()=>we(a.ratio.value)),J=t(()=>"q-slider__text"+(a.labelTextColor.value!==void 0?` text-${a.labelTextColor.value}`:""));return()=>{const Y=[f("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[f("path",{d:e.thumbPath})]),f("div",{class:"q-slider__focus-ring fit"})];return(e.label===!0||e.labelAlways===!0)&&(Y.push(f("div",{class:ve.value+" absolute fit no-pointer-events"+b.value},[f("div",{class:me.value,style:{minWidth:e.thumbSize}},[f("div",{class:de.value,style:w.value},[f("span",{class:J.value},a.label.value)])])])),e.name!==void 0&&e.disable!==!0&&P(Y,"push")),f("div",{class:i.value,style:c.value,...a.getNodeData()},Y)}}function Be(a,r,i,c){const b=[];e.innerTrackColor!=="transparent"&&b.push(f("div",{key:"inner",class:he.value,style:ee.value})),e.selectionColor!=="transparent"&&b.push(f("div",{key:"selection",class:C.value,style:a.value})),e.markers!==!1&&b.push(f("div",{key:"marker",class:X.value,style:Ce.value})),c(b);const w=[Oe("div",{key:"trackC",class:ce.value,tabindex:r.value,...i.value},[f("div",{class:fe.value,style:xe.value},b)],"slide",V.value,()=>Se.value)];if(e.markerLabels!==!1){const J=e.switchMarkerLabelsSide===!0?"unshift":"push";w[J](f("div",{key:"markerL",class:be.value},Re()))}return w}return Ie(()=>{document.removeEventListener("mouseup",U,!0)}),{state:{active:y,focus:h,preventFocus:F,dragging:p,editable:V,classes:x,tabindex:Q,attributes:v,roundValueFn:j,keyStep:K,trackLen:I,innerMin:k,innerMinRatio:D,innerMax:T,innerMaxRatio:E,positionProp:A,sizeProp:s,isReversed:R},methods:{onActivate:Le,onMobileClick:Te,onBlur:oe,onKeyup:Ve,getContent:Be,getThumbRenderFn:qe,convertRatioToModel:Me,convertModelToRatio:W,getDraggingRatio:ke}}}const q={MIN:0,RANGE:1,MAX:2};var ea=Ee({name:"QRange",props:{...Ge,modelValue:{type:Object,default:()=>({min:null,max:null}),validator:l=>"min"in l&&"max"in l},dragRange:Boolean,dragOnlyRange:Boolean,leftLabelColor:String,leftLabelTextColor:String,rightLabelColor:String,rightLabelTextColor:String,leftLabelValue:[String,Number],rightLabelValue:[String,Number],leftThumbColor:String,rightThumbColor:String},emits:Qe,setup(l,{emit:L}){const{proxy:{$q:B}}=ie(),{state:n,methods:e}=We({updateValue:z,updatePosition:E,getDragging:D,formAttrs:t(()=>({type:"hidden",name:l.name,value:`${l.modelValue.min}|${l.modelValue.max}`}))}),O=$(null),N=$(0),_=$(0),o=$({min:0,max:0});function P(){o.value.min=l.modelValue.min===null?n.innerMin.value:g(l.modelValue.min,n.innerMin.value,n.innerMax.value),o.value.max=l.modelValue.max===null?n.innerMax.value:g(l.modelValue.max,n.innerMin.value,n.innerMax.value)}Pe(()=>`${l.modelValue.min}|${l.modelValue.max}|${n.innerMin.value}|${n.innerMax.value}`,P),P();const y=t(()=>e.convertModelToRatio(o.value.min)),F=t(()=>e.convertModelToRatio(o.value.max)),h=t(()=>n.active.value===!0?N.value:y.value),p=t(()=>n.active.value===!0?_.value:F.value),M=t(()=>{const s={[n.positionProp.value]:`${100*h.value}%`,[n.sizeProp.value]:`${100*(p.value-h.value)}%`};return l.selectionImg!==void 0&&(s.backgroundImage=`url(${l.selectionImg}) !important`),s}),G=t(()=>{if(n.editable.value!==!0)return{};if(B.platform.is.mobile===!0)return{onClick:e.onMobileClick};const s={onMousedown:e.onActivate};return(l.dragRange===!0||l.dragOnlyRange===!0)&&Object.assign(s,{onFocus:()=>{n.focus.value="both"},onBlur:e.onBlur,onKeydown:A,onKeyup:e.onKeyup}),s});function R(s){return B.platform.is.mobile!==!0&&n.editable.value===!0&&l.dragOnlyRange!==!0?{onFocus:()=>{n.focus.value=s},onBlur:e.onBlur,onKeydown:A,onKeyup:e.onKeyup}:{}}const k=t(()=>l.dragOnlyRange!==!0?n.tabindex.value:null),T=t(()=>B.platform.is.mobile!==!0&&(l.dragRange||l.dragOnlyRange===!0)?n.tabindex.value:null),V=$(null),j=t(()=>R("min")),K=e.getThumbRenderFn({focusValue:"min",getNodeData:()=>({ref:V,key:"tmin",...j.value,tabindex:k.value}),ratio:h,label:t(()=>l.leftLabelValue!==void 0?l.leftLabelValue:o.value.min),thumbColor:t(()=>l.leftThumbColor||l.thumbColor||l.color),labelColor:t(()=>l.leftLabelColor||l.labelColor),labelTextColor:t(()=>l.leftLabelTextColor||l.labelTextColor)}),Q=t(()=>R("max")),I=e.getThumbRenderFn({focusValue:"max",getNodeData:()=>({...Q.value,key:"tmax",tabindex:k.value}),ratio:p,label:t(()=>l.rightLabelValue!==void 0?l.rightLabelValue:o.value.max),thumbColor:t(()=>l.rightThumbColor||l.thumbColor||l.color),labelColor:t(()=>l.rightLabelColor||l.labelColor),labelTextColor:t(()=>l.rightLabelTextColor||l.labelTextColor)});function z(s){(o.value.min!==l.modelValue.min||o.value.max!==l.modelValue.max)&&L("update:modelValue",{...o.value}),s===!0&&L("change",{...o.value})}function D(s){const{left:u,top:d,width:v,height:x}=O.value.getBoundingClientRect(),S=l.dragOnlyRange===!0?0:l.vertical===!0?V.value.offsetHeight/(2*x):V.value.offsetWidth/(2*v),m={left:u,top:d,width:v,height:x,valueMin:o.value.min,valueMax:o.value.max,ratioMin:y.value,ratioMax:F.value},C=e.getDraggingRatio(s,m);return l.dragOnlyRange!==!0&&C<m.ratioMin+S?m.type=q.MIN:l.dragOnlyRange===!0||C<m.ratioMax-S?l.dragRange===!0||l.dragOnlyRange===!0?(m.type=q.RANGE,Object.assign(m,{offsetRatio:C,offsetModel:e.convertRatioToModel(C),rangeValue:m.valueMax-m.valueMin,rangeRatio:m.ratioMax-m.ratioMin})):m.type=m.ratioMax-C<C-m.ratioMin?q.MAX:q.MIN:m.type=q.MAX,m}function E(s,u=n.dragging.value){let d;const v=e.getDraggingRatio(s,u),x=e.convertRatioToModel(v);switch(u.type){case q.MIN:v<=u.ratioMax?(d={minR:v,maxR:u.ratioMax,min:x,max:u.valueMax},n.focus.value="min"):(d={minR:u.ratioMax,maxR:v,min:u.valueMax,max:x},n.focus.value="max");break;case q.MAX:v>=u.ratioMin?(d={minR:u.ratioMin,maxR:v,min:u.valueMin,max:x},n.focus.value="max"):(d={minR:v,maxR:u.ratioMin,min:x,max:u.valueMin},n.focus.value="min");break;case q.RANGE:const S=v-u.offsetRatio,m=g(u.ratioMin+S,n.innerMinRatio.value,n.innerMaxRatio.value-u.rangeRatio),C=x-u.offsetModel,X=g(u.valueMin+C,n.innerMin.value,n.innerMax.value-u.rangeValue);d={minR:m,maxR:m+u.rangeRatio,min:n.roundValueFn.value(X),max:n.roundValueFn.value(X+u.rangeValue)},n.focus.value="both";break}o.value=o.value.min===null||o.value.max===null?{min:d.min||l.min,max:d.max||l.max}:{min:d.min,max:d.max},l.snap!==!0||l.step===0?(N.value=d.minR,_.value=d.maxR):(N.value=e.convertModelToRatio(o.value.min),_.value=e.convertModelToRatio(o.value.max))}function A(s){if(!se.includes(s.keyCode))return;je(s);const u=([34,33].includes(s.keyCode)?10:1)*n.keyStep.value,d=([34,37,40].includes(s.keyCode)?-1:1)*(n.isReversed.value===!0?-1:1)*(l.vertical===!0?-1:1)*u;if(n.focus.value==="both"){const v=o.value.max-o.value.min,x=g(n.roundValueFn.value(o.value.min+d),n.innerMin.value,n.innerMax.value-v);o.value={min:x,max:n.roundValueFn.value(x+v)}}else{if(n.focus.value===!1)return;{const v=n.focus.value;o.value={...o.value,[v]:g(n.roundValueFn.value(o.value[v]+d),v==="min"?n.innerMin.value:o.value.min,v==="max"?n.innerMax.value:o.value.max)}}}z()}return()=>{const s=e.getContent(M,T,G,u=>{u.push(K(),I())});return f("div",{ref:O,class:"q-range "+n.classes.value+(l.modelValue.min===null||l.modelValue.max===null?" q-slider--no-value":""),...n.attributes.value,"aria-valuenow":l.modelValue.min+"|"+l.modelValue.max},s)}}});export{ea as Q};
