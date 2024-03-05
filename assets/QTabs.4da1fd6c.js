import{i as Ae,I as Z,a1 as ve,r as T,c as d,K as fe,o as Be,A as $e,R as Me,h,V as se,U as xe,a2 as Ee,C as O,M as De,g as de,a3 as Qe,G as be,w as H,$ as We,a4 as Fe,a5 as je,H as Ke}from"./index.2b9e9d53.js";import{u as Ve}from"./uid.42677368.js";import{Q as He}from"./QResizeObserver.00bdf75a.js";import{c as p,d as ce}from"./use-timeout.798beefb.js";import{r as Oe}from"./rtl.b51694b1.js";let ze=0;const Ne=["click","keydown"],Ue={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${ze++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ge(e,L,C,c){const r=Ae(ve,Z);if(r===Z)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Z;const{proxy:z}=de(),x=T(null),D=T(null),Q=T(null),N=d(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),A=d(()=>r.currentModel.value===e.name),U=d(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(A.value===!0?" q-tab--active"+(r.tabProps.value.activeClass?" "+r.tabProps.value.activeClass:"")+(r.tabProps.value.activeColor?` text-${r.tabProps.value.activeColor}`:"")+(r.tabProps.value.activeBgColor?` bg-${r.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&r.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||r.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(c!==void 0?c.linkClass.value:"")),P=d(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(r.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=d(()=>e.disable===!0||r.hasFocus.value===!0||A.value===!1&&r.hasActiveTab.value===!0?-1:e.tabindex||0);function y(l,b){if(b!==!0&&x.value!==null&&x.value.focus(),e.disable===!0){c!==void 0&&c.hasRouterLink.value===!0&&se(l);return}if(c===void 0){r.updateModel({name:e.name}),C("click",l);return}if(c.hasRouterLink.value===!0){const m=(v={})=>{let w;const q=v.to===void 0||Qe(v.to,e.to)===!0?r.avoidRouteWatcher=Ve():null;return c.navigateToRouterLink(l,{...v,returnRouterError:!0}).catch(I=>{w=I}).then(I=>{if(q===r.avoidRouteWatcher&&(r.avoidRouteWatcher=!1,w===void 0&&(I===void 0||I.message.startsWith("Avoided redundant navigation")===!0)&&r.updateModel({name:e.name})),v.returnRouterError===!0)return w!==void 0?Promise.reject(w):I})};C("click",l,m),l.defaultPrevented!==!0&&m();return}C("click",l)}function R(l){xe(l,[13,32])?y(l,!0):Ee(l)!==!0&&l.keyCode>=35&&l.keyCode<=40&&l.altKey!==!0&&l.metaKey!==!0&&r.onKbdNavigate(l.keyCode,z.$el)===!0&&se(l),C("keydown",l)}function E(){const l=r.tabProps.value.narrowIndicator,b=[],m=h("div",{ref:Q,class:["q-tab__indicator",r.tabProps.value.indicatorClass]});e.icon!==void 0&&b.push(h(O,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&b.push(h("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&b.push(e.alertIcon!==void 0?h(O,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):h("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),l===!0&&b.push(m);const v=[h("div",{class:"q-focus-helper",tabindex:-1,ref:x}),h("div",{class:P.value},De(L.default,b))];return l===!1&&v.push(m),v}const B={name:d(()=>e.name),rootRef:D,tabIndicatorRef:Q,routeData:c};fe(()=>{r.unregisterTab(B)}),Be(()=>{r.registerTab(B)});function W(l,b){const m={ref:D,class:U.value,tabindex:g.value,role:"tab","aria-selected":A.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:y,onKeydown:R,...b};return $e(h(l,m,E()),[[Me,N.value]])}return{renderTab:W,$tabs:r}}var at=be({name:"QTab",props:Ue,emits:Ne,setup(e,{slots:L,emit:C}){const{renderTab:c}=Ge(e,L,C);return()=>c("div")}});function Xe(e,L,C){const c=C===!0?["left","right"]:["top","bottom"];return`absolute-${L===!0?c[0]:c[1]}${e?` text-${e}`:""}`}const Je=["left","center","right","justify"];var nt=be({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Je.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:L,emit:C}){const{proxy:c}=de(),{$q:r}=c,{registerTick:z}=p(),{registerTick:x}=p(),{registerTick:D}=p(),{registerTimeout:Q,removeTimeout:N}=ce(),{registerTimeout:A,removeTimeout:U}=ce(),P=T(null),g=T(null),y=T(e.modelValue),R=T(!1),E=T(!0),B=T(!1),W=T(!1),l=[],b=T(0),m=T(!1);let v=null,w=null,q;const I=d(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Xe(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),he=d(()=>{const t=b.value,a=y.value;for(let n=0;n<t;n++)if(l[n].name.value===a)return!0;return!1}),ge=d(()=>`q-tabs__content--align-${R.value===!0?"left":W.value===!0?"justify":e.align}`),me=d(()=>`q-tabs row no-wrap items-center q-tabs--${R.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Te=d(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ge.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),F=d(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),j=d(()=>e.vertical!==!0&&r.lang.rtl===!0),G=d(()=>Oe===!1&&j.value===!0);H(j,M),H(()=>e.modelValue,t=>{X({name:t,setCurrent:!0,skipEmit:!0})}),H(()=>e.outsideArrows,K);function X({name:t,setCurrent:a,skipEmit:n}){y.value!==t&&(n!==!0&&e["onUpdate:modelValue"]!==void 0&&C("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(we(y.value,t),y.value=t))}function K(){z(()=>{ee({width:P.value.offsetWidth,height:P.value.offsetHeight})})}function ee(t){if(F.value===void 0||g.value===null)return;const a=t[F.value.container],n=Math.min(g.value[F.value.scroll],Array.prototype.reduce.call(g.value.children,(s,i)=>s+(i[F.value.content]||0),0)),u=a>0&&n>a;R.value=u,u===!0&&x(M),W.value=a<parseInt(e.breakpoint,10)}function we(t,a){const n=t!=null&&t!==""?l.find(s=>s.name.value===t):null,u=a!=null&&a!==""?l.find(s=>s.name.value===a):null;if(n&&u){const s=n.tabIndicatorRef.value,i=u.tabIndicatorRef.value;v!==null&&(clearTimeout(v),v=null),s.style.transition="none",s.style.transform="none",i.style.transition="none",i.style.transform="none";const o=s.getBoundingClientRect(),f=i.getBoundingClientRect();i.style.transform=e.vertical===!0?`translate3d(0,${o.top-f.top}px,0) scale3d(1,${f.height?o.height/f.height:1},1)`:`translate3d(${o.left-f.left}px,0,0) scale3d(${f.width?o.width/f.width:1},1,1)`,D(()=>{v=setTimeout(()=>{v=null,i.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",i.style.transform="none"},70)})}u&&R.value===!0&&$(u.rootRef.value)}function $(t){const{left:a,width:n,top:u,height:s}=g.value.getBoundingClientRect(),i=t.getBoundingClientRect();let o=e.vertical===!0?i.top-u:i.left-a;if(o<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(o),M();return}o+=e.vertical===!0?i.height-s:i.width-n,o>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(o),M())}function M(){const t=g.value;if(t===null)return;const a=t.getBoundingClientRect(),n=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);j.value===!0?(E.value=Math.ceil(n+a.width)<t.scrollWidth-1,B.value=n>0):(E.value=n>0,B.value=e.vertical===!0?Math.ceil(n+a.height)<t.scrollHeight:Math.ceil(n+a.width)<t.scrollWidth)}function te(t){w!==null&&clearInterval(w),w=setInterval(()=>{qe(t)===!0&&S()},5)}function ae(){te(G.value===!0?Number.MAX_SAFE_INTEGER:0)}function ne(){te(G.value===!0?0:Number.MAX_SAFE_INTEGER)}function S(){w!==null&&(clearInterval(w),w=null)}function Ce(t,a){const n=Array.prototype.filter.call(g.value.children,f=>f===a||f.matches&&f.matches(".q-tab.q-focusable")===!0),u=n.length;if(u===0)return;if(t===36)return $(n[0]),n[0].focus(),!0;if(t===35)return $(n[u-1]),n[u-1].focus(),!0;const s=t===(e.vertical===!0?38:37),i=t===(e.vertical===!0?40:39),o=s===!0?-1:i===!0?1:void 0;if(o!==void 0){const f=j.value===!0?-1:1,_=n.indexOf(a)+o*f;return _>=0&&_<u&&($(n[_]),n[_].focus({preventScroll:!0})),!0}}const ye=d(()=>G.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function qe(t){const a=g.value,{get:n,set:u}=ye.value;let s=!1,i=n(a);const o=t<i?-1:1;return i+=o*5,i<0?(s=!0,i=0):(o===-1&&i<=t||o===1&&i>=t)&&(s=!0,i=t),u(a,i),M(),s}function le(t,a){for(const n in t)if(t[n]!==a[n])return!1;return!0}function _e(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const n=l.filter(o=>o.routeData!==void 0&&o.routeData.hasRouterLink.value===!0),{hash:u,query:s}=c.$route,i=Object.keys(s).length;for(const o of n){const f=o.routeData.exact.value===!0;if(o.routeData[f===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:_,query:J,matched:Pe,href:Ie}=o.routeData.resolvedLink.value,Y=Object.keys(J).length;if(f===!0){if(_!==u||Y!==i||le(s,J)===!1)continue;t=o.name.value;break}if(_!==""&&_!==u||Y!==0&&le(J,s)===!1)continue;const k={matchedLen:Pe.length,queryDiff:i-Y,hrefLen:Ie.length-_.length};if(k.matchedLen>a.matchedLen){t=o.name.value,a=k;continue}else if(k.matchedLen!==a.matchedLen)continue;if(k.queryDiff<a.queryDiff)t=o.name.value,a=k;else if(k.queryDiff!==a.queryDiff)continue;k.hrefLen>a.hrefLen&&(t=o.name.value,a=k)}t===null&&l.some(o=>o.routeData===void 0&&o.name.value===y.value)===!0||X({name:t,setCurrent:!0})}function Re(t){if(N(),m.value!==!0&&P.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&P.value.contains(a)===!0&&(m.value=!0,R.value===!0&&$(a))}}function Se(){Q(()=>{m.value=!1},30)}function V(){re.avoidRouteWatcher===!1?A(_e):U()}function oe(){if(q===void 0){const t=H(()=>c.$route.fullPath,V);q=()=>{t(),q=void 0}}}function ke(t){l.push(t),b.value++,K(),t.routeData===void 0||c.$route===void 0?A(()=>{if(R.value===!0){const a=y.value,n=a!=null&&a!==""?l.find(u=>u.name.value===a):null;n&&$(n.rootRef.value)}}):(oe(),t.routeData.hasRouterLink.value===!0&&V())}function Le(t){l.splice(l.indexOf(t),1),b.value--,K(),q!==void 0&&t.routeData!==void 0&&(l.every(a=>a.routeData===void 0)===!0&&q(),V())}const re={currentModel:y,tabProps:I,hasFocus:m,hasActiveTab:he,registerTab:ke,unregisterTab:Le,verifyRouteModel:V,updateModel:X,onKbdNavigate:Ce,avoidRouteWatcher:!1};We(ve,re);function ie(){v!==null&&clearTimeout(v),S(),q!==void 0&&q()}let ue;return fe(ie),Fe(()=>{ue=q!==void 0,ie()}),je(()=>{ue===!0&&oe(),K()}),()=>h("div",{ref:P,class:me.value,role:"tablist",onFocusin:Re,onFocusout:Se},[h(He,{onResize:ee}),h("div",{ref:g,class:Te.value,onScroll:M},Ke(L.default)),h(O,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||r.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ae,onTouchstartPassive:ae,onMouseupPassive:S,onMouseleavePassive:S,onTouchendPassive:S}),h(O,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(B.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||r.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ne,onTouchstartPassive:ne,onMouseupPassive:S,onMouseleavePassive:S,onTouchendPassive:S})])}});export{at as Q,nt as a};
