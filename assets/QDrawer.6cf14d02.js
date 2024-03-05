import{u as ge,d as ke}from"./use-prevent-scroll.74d0c0a7.js";import{u as qe,b as xe,d as Be,f as Te}from"./use-timeout.1cfdbf42.js";import{u as Ce,a as Se}from"./use-dark.f934fa20.js";import{T as V}from"./TouchPan.fab20d2f.js";import{G as Me,i as $e,I as N,J as Oe,r as k,c as o,w as r,o as De,Y as Z,K as We,A as Le,h as $,Z as p,H as Ae,g as Pe}from"./index.29cc8f67.js";import{b as O}from"./format.c860d4da.js";const ee=150;var Ne=Me({name:"QDrawer",inheritAttrs:!1,props:{...qe,...Ce,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...xe,"onLayout","miniState"],setup(t,{slots:D,emit:y,attrs:R}){const f=Pe(),{proxy:{$q:v}}=f,te=Se(t,v),{preventBodyScroll:W}=ke(),{registerTimeout:j,removeTimeout:ae}=Be(),a=$e(Oe,N);if(a===N)return console.error("QDrawer needs to be child of QLayout"),N;let L,b=null,q;const i=k(t.behavior==="mobile"||t.behavior!=="desktop"&&a.totalWidth.value<=t.breakpoint),x=o(()=>t.mini===!0&&i.value!==!0),s=o(()=>x.value===!0?t.miniWidth:t.width),l=k(t.showIfAbove===!0&&i.value===!1?!0:t.modelValue===!0),K=o(()=>t.persistent!==!0&&(i.value===!0||oe.value===!0));function U(e,u){if(ue(),e!==!1&&a.animate(),d(0),i.value===!0){const n=a.instances[S.value];n!==void 0&&n.belowBreakpoint===!0&&n.hide(!1),m(1),a.isContainer.value!==!0&&W(!0)}else m(0),e!==!1&&F(!1);j(()=>{e!==!1&&F(!0),u!==!0&&y("show",e)},ee)}function E(e,u){le(),e!==!1&&a.animate(),m(0),d(w.value*s.value),H(),u!==!0?j(()=>{y("hide",e)},ee):ae()}const{show:A,hide:B}=Te({showing:l,hideOnRouteChange:K,handleShow:U,handleHide:E}),{addToHistory:ue,removeFromHistory:le}=ge(l,B,K),C={belowBreakpoint:i,hide:B},c=o(()=>t.side==="right"),w=o(()=>(v.lang.rtl===!0?-1:1)*(c.value===!0?1:-1)),G=k(0),g=k(!1),P=k(!1),J=k(s.value*w.value),S=o(()=>c.value===!0?"left":"right"),I=o(()=>l.value===!0&&i.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:s.value:0),_=o(()=>t.overlay===!0||t.miniToOverlay===!0||a.view.value.indexOf(c.value?"R":"L")>-1||v.platform.is.ios===!0&&a.isContainer.value===!0),T=o(()=>t.overlay===!1&&l.value===!0&&i.value===!1),oe=o(()=>t.overlay===!0&&l.value===!0&&i.value===!1),ie=o(()=>"fullscreen q-drawer__backdrop"+(l.value===!1&&g.value===!1?" hidden":"")),re=o(()=>({backgroundColor:`rgba(0,0,0,${G.value*.4})`})),X=o(()=>c.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),ne=o(()=>c.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),se=o(()=>{const e={};return a.header.space===!0&&X.value===!1&&(_.value===!0?e.top=`${a.header.offset}px`:a.header.space===!0&&(e.top=`${a.header.size}px`)),a.footer.space===!0&&ne.value===!1&&(_.value===!0?e.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(e.bottom=`${a.footer.size}px`)),e}),de=o(()=>{const e={width:`${s.value}px`,transform:`translateX(${J.value}px)`};return i.value===!0?e:Object.assign(e,se.value)}),ve=o(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),ce=o(()=>`q-drawer q-drawer--${t.side}`+(P.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(te.value===!0?" q-drawer--dark q-dark":"")+(g.value===!0?" no-transition":l.value===!0?"":" q-layout--prevent-focus")+(i.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${x.value===!0?"mini":"standard"}`+(_.value===!0||T.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(X.value===!0?" q-drawer--top-padding":""))),fe=o(()=>{const e=v.lang.rtl===!0?t.side:S.value;return[[V,be,void 0,{[e]:!0,mouse:!0}]]}),me=o(()=>{const e=v.lang.rtl===!0?S.value:t.side;return[[V,Y,void 0,{[e]:!0,mouse:!0}]]}),he=o(()=>{const e=v.lang.rtl===!0?S.value:t.side;return[[V,Y,void 0,{[e]:!0,mouse:!0,mouseAllDir:!0}]]});function z(){we(i,t.behavior==="mobile"||t.behavior!=="desktop"&&a.totalWidth.value<=t.breakpoint)}r(i,e=>{e===!0?(L=l.value,l.value===!0&&B(!1)):t.overlay===!1&&t.behavior!=="mobile"&&L!==!1&&(l.value===!0?(d(0),m(0),H()):A(!1))}),r(()=>t.side,(e,u)=>{a.instances[u]===C&&(a.instances[u]=void 0,a[u].space=!1,a[u].offset=0),a.instances[e]=C,a[e].size=s.value,a[e].space=T.value,a[e].offset=I.value}),r(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&z()}),r(()=>t.behavior+t.breakpoint,z),r(a.isContainer,e=>{l.value===!0&&W(e!==!0),e===!0&&z()}),r(a.scrollbarWidth,()=>{d(l.value===!0?0:void 0)}),r(I,e=>{h("offset",e)}),r(T,e=>{y("onLayout",e),h("space",e)}),r(c,()=>{d()}),r(s,e=>{d(),Q(t.miniToOverlay,e)}),r(()=>t.miniToOverlay,e=>{Q(e,s.value)}),r(()=>v.lang.rtl,()=>{d()}),r(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(ye(),a.animate())}),r(x,e=>{y("miniState",e)});function d(e){e===void 0?Z(()=>{e=l.value===!0?0:s.value,d(w.value*e)}):(a.isContainer.value===!0&&c.value===!0&&(i.value===!0||Math.abs(e)===s.value)&&(e+=w.value*a.scrollbarWidth.value),J.value=e)}function m(e){G.value=e}function F(e){const u=e===!0?"remove":a.isContainer.value!==!0?"add":"";u!==""&&document.body.classList[u]("q-body--drawer-toggle")}function ye(){b!==null&&clearTimeout(b),f.proxy&&f.proxy.$el&&f.proxy.$el.classList.add("q-drawer--mini-animate"),P.value=!0,b=setTimeout(()=>{b=null,P.value=!1,f&&f.proxy&&f.proxy.$el&&f.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function be(e){if(l.value!==!1)return;const u=s.value,n=O(e.distance.x,0,u);if(e.isFinal===!0){n>=Math.min(75,u)===!0?A():(a.animate(),m(0),d(w.value*u)),g.value=!1;return}d((v.lang.rtl===!0?c.value!==!0:c.value)?Math.max(u-n,0):Math.min(0,n-u)),m(O(n/u,0,1)),e.isFirst===!0&&(g.value=!0)}function Y(e){if(l.value!==!0)return;const u=s.value,n=e.direction===t.side,M=(v.lang.rtl===!0?n!==!0:n)?O(e.distance.x,0,u):0;if(e.isFinal===!0){Math.abs(M)<Math.min(75,u)===!0?(a.animate(),m(1),d(0)):B(),g.value=!1;return}d(w.value*M),m(O(1-M/u,0,1)),e.isFirst===!0&&(g.value=!0)}function H(){W(!1),F(!0)}function h(e,u){a.update(t.side,e,u)}function we(e,u){e.value!==u&&(e.value=u)}function Q(e,u){h("size",e===!0?t.miniWidth:u)}return a.instances[t.side]=C,Q(t.miniToOverlay,s.value),h("space",T.value),h("offset",I.value),t.showIfAbove===!0&&t.modelValue!==!0&&l.value===!0&&t["onUpdate:modelValue"]!==void 0&&y("update:modelValue",!0),De(()=>{y("onLayout",T.value),y("miniState",x.value),L=t.showIfAbove===!0;const e=()=>{(l.value===!0?U:E)(!1,!0)};if(a.totalWidth.value!==0){Z(e);return}q=r(a.totalWidth,()=>{q(),q=void 0,l.value===!1&&t.showIfAbove===!0&&i.value===!1?A(!1):e()})}),We(()=>{q!==void 0&&q(),b!==null&&(clearTimeout(b),b=null),l.value===!0&&H(),a.instances[t.side]===C&&(a.instances[t.side]=void 0,h("size",0),h("offset",0),h("space",!1))}),()=>{const e=[];i.value===!0&&(t.noSwipeOpen===!1&&e.push(Le($("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),fe.value)),e.push(p("div",{ref:"backdrop",class:ie.value,style:re.value,"aria-hidden":"true",onClick:B},void 0,"backdrop",t.noSwipeBackdrop!==!0&&l.value===!0,()=>he.value)));const u=x.value===!0&&D.mini!==void 0,n=[$("div",{...R,key:""+u,class:[ve.value,R.class]},u===!0?D.mini():Ae(D.default))];return t.elevated===!0&&l.value===!0&&n.push($("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(p("aside",{ref:"content",class:ce.value,style:de.value},n,"contentclose",t.noSwipeClose!==!0&&i.value===!0,()=>me.value)),$("div",{class:"q-drawer-container"},e)}}});export{Ne as Q};
