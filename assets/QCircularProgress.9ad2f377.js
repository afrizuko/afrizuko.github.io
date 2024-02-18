import{aD as $,k as w,aE as B,c as r,h as l,aP as _,g as q}from"./index.e0ba20ab.js";import{b as z}from"./format.c860d4da.js";const N={...$,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},i=50,m=2*i,f=m*Math.PI,P=Math.round(f*1e3)/1e3;var Q=w({name:"QCircularProgress",props:{...N,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:u}){const{proxy:{$q:c}}=q(),g=B(e),h=r(()=>{const t=(c.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(c.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-t}deg)`:`rotate3d(0, 0, 1, ${t-90}deg)`}}),k=r(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),a=r(()=>m/(1-e.thickness/2)),y=r(()=>`${a.value/2} ${a.value/2} ${a.value} ${a.value}`),o=r(()=>z(e.value,e.min,e.max)),x=r(()=>e.max-e.min),s=r(()=>e.thickness/2*a.value),C=r(()=>{const t=(e.max-o.value)/x.value,n=e.rounded===!0&&o.value<e.max&&t<.25?s.value/2*(1-t/.25):0;return f*t+n});function d({thickness:t,offset:n,color:v,cls:S,rounded:b}){return l("circle",{class:"q-circular-progress__"+S+(v!==void 0?` text-${v}`:""),style:k.value,fill:"transparent",stroke:"currentColor","stroke-width":t,"stroke-dasharray":P,"stroke-dashoffset":n,"stroke-linecap":b,cx:a.value,cy:a.value,r:i})}return()=>{const t=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&t.push(l("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:i-s.value/2,cx:a.value,cy:a.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&t.push(d({cls:"track",thickness:s.value,offset:0,color:e.trackColor})),t.push(d({cls:"circle",thickness:s.value,offset:C.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const n=[l("svg",{class:"q-circular-progress__svg",style:h.value,viewBox:y.value,"aria-hidden":"true"},t)];return e.showValue===!0&&n.push(l("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},u.default!==void 0?u.default():[l("div",o.value)])),l("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:g.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:o.value},_(u.internal,n))}}});export{Q};
