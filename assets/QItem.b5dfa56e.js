import{u as E,a as B}from"./use-dark.35ad09a7.js";import{G as K,P as R,S as P,r as o,c as n,h as v,U as S,V as w,L as A,g as D}from"./index.fed07d25.js";var $=K({name:"QItem",props:{...E,...R,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:d,emit:f}){const{proxy:{$q:i}}=D(),m=B(t,i),{hasLink:s,linkAttrs:b,linkClass:k,linkTag:q,navigateOnClick:g}=P(),u=o(null),l=o(null),c=n(()=>t.clickable===!0||s.value===!0||t.tag==="label"),a=n(()=>t.disable!==!0&&c.value===!0),y=n(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(m.value===!0?" q-item--dark":"")+(s.value===!0&&t.active===null?k.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(a.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),C=n(()=>{if(t.insetLevel===void 0)return null;const e=i.lang.rtl===!0?"Right":"Left";return{["padding"+e]:16+t.insetLevel*56+"px"}});function h(e){a.value===!0&&(l.value!==null&&(e.qKeyEvent!==!0&&document.activeElement===u.value?l.value.focus():document.activeElement===l.value&&u.value.focus()),g(e))}function L(e){if(a.value===!0&&S(e,[13,32])===!0){w(e),e.qKeyEvent=!0;const r=new MouseEvent("click",e);r.qKeyEvent=!0,u.value.dispatchEvent(r)}f("keyup",e)}function x(){const e=A(d.default,[]);return a.value===!0&&e.unshift(v("div",{class:"q-focus-helper",tabindex:-1,ref:l})),e}return()=>{const e={ref:u,class:y.value,style:C.value,role:"listitem",onClick:h,onKeyup:L};return a.value===!0?(e.tabindex=t.tabindex||"0",Object.assign(e,b.value)):c.value===!0&&(e["aria-disabled"]="true"),v(q.value,e,x())}}});export{$ as Q};
