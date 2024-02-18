import{as as R,a1 as b,ar as U,at as j,Z as k,au as q,a2 as I,X as E,$ as V,r as M,c as m,w as Z,g as G,h as C,P as H,aW as J,t as z,n as Q,aX as ee}from"./index.40958af9.js";import{g as L,s as X}from"./touch.3df10340.js";import{c as te}from"./selection.c7ad1a20.js";import{u as ne}from"./use-cache.b0833c75.js";function ie(t){const o=[.06,6,50];return typeof t=="string"&&t.length&&t.split(":").forEach((c,d)=>{const a=parseFloat(c);a&&(o[d]=a)}),o}var oe=R({name:"touch-swipe",beforeMount(t,{value:o,arg:c,modifiers:d}){if(d.mouse!==!0&&b.has.touch!==!0)return;const a=d.mouseCapture===!0?"Capture":"",e={handler:o,sensitivity:ie(c),direction:L(d),noop:U,mouseStart(i){X(i,e)&&j(i)&&(k(e,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),e.start(i,!0))},touchStart(i){if(X(i,e)){const l=i.target;k(e,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","notPassiveCapture"],[l,"touchend","end","notPassiveCapture"]]),e.start(i)}},start(i,l){b.is.firefox===!0&&q(t,!0);const f=I(i);e.event={x:f.left,y:f.top,time:Date.now(),mouse:l===!0,dir:!1}},move(i){if(e.event===void 0)return;if(e.event.dir!==!1){E(i);return}const l=Date.now()-e.event.time;if(l===0)return;const f=I(i),h=f.left-e.event.x,u=Math.abs(h),y=f.top-e.event.y,s=Math.abs(y);if(e.event.mouse!==!0){if(u<e.sensitivity[1]&&s<e.sensitivity[1]){e.end(i);return}}else if(window.getSelection().toString()!==""){e.end(i);return}else if(u<e.sensitivity[2]&&s<e.sensitivity[2])return;const v=u/l,g=s/l;e.direction.vertical===!0&&u<s&&u<100&&g>e.sensitivity[0]&&(e.event.dir=y<0?"up":"down"),e.direction.horizontal===!0&&u>s&&s<100&&v>e.sensitivity[0]&&(e.event.dir=h<0?"left":"right"),e.direction.up===!0&&u<s&&y<0&&u<100&&g>e.sensitivity[0]&&(e.event.dir="up"),e.direction.down===!0&&u<s&&y>0&&u<100&&g>e.sensitivity[0]&&(e.event.dir="down"),e.direction.left===!0&&u>s&&h<0&&s<100&&v>e.sensitivity[0]&&(e.event.dir="left"),e.direction.right===!0&&u>s&&h>0&&s<100&&v>e.sensitivity[0]&&(e.event.dir="right"),e.event.dir!==!1?(E(i),e.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),te(),e.styleCleanup=S=>{e.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};S===!0?setTimeout(P,50):P()}),e.handler({evt:i,touch:e.event.mouse!==!0,mouse:e.event.mouse,direction:e.event.dir,duration:l,distance:{x:u,y:s}})):e.end(i)},end(i){e.event!==void 0&&(V(e,"temp"),b.is.firefox===!0&&q(t,!1),e.styleCleanup!==void 0&&e.styleCleanup(!0),i!==void 0&&e.event.dir!==!1&&E(i),e.event=void 0)}};if(t.__qtouchswipe=e,d.mouse===!0){const i=d.mouseCapture===!0||d.mousecapture===!0?"Capture":"";k(e,"main",[[t,"mousedown","mouseStart",`passive${i}`]])}b.has.touch===!0&&k(e,"main",[[t,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,o){const c=t.__qtouchswipe;c!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&c.end(),c.handler=o.value),c.direction=L(o.modifiers))},beforeUnmount(t){const o=t.__qtouchswipe;o!==void 0&&(V(o,"main"),V(o,"temp"),b.is.firefox===!0&&q(t,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete t.__qtouchswipe)}});const le={name:{required:!0},disable:Boolean},W={setup(t,{slots:o}){return()=>C("div",{class:"q-panel scroll",role:"tabpanel"},z(o.default))}},ce={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},de=["update:modelValue","beforeTransition","transition"];function pe(){const{props:t,emit:o,proxy:c}=G(),{getCacheWithFn:d}=ne();let a,e;const i=M(null),l=M(null);function f(n){const r=t.vertical===!0?"up":"left";x((c.$q.lang.rtl===!0?-1:1)*(n.direction===r?1:-1))}const h=m(()=>[[oe,f,void 0,{horizontal:t.vertical!==!0,vertical:t.vertical,mouse:!0}]]),u=m(()=>t.transitionPrev||`slide-${t.vertical===!0?"down":"right"}`),y=m(()=>t.transitionNext||`slide-${t.vertical===!0?"up":"left"}`),s=m(()=>`--q-transition-duration: ${t.transitionDuration}ms`),v=m(()=>typeof t.modelValue=="string"||typeof t.modelValue=="number"?t.modelValue:String(t.modelValue)),g=m(()=>({include:t.keepAliveInclude,exclude:t.keepAliveExclude,max:t.keepAliveMax})),S=m(()=>t.keepAliveInclude!==void 0||t.keepAliveExclude!==void 0);Z(()=>t.modelValue,(n,r)=>{const p=w(n)===!0?T(n):-1;e!==!0&&N(p===-1?0:p<T(r)?-1:1),i.value!==p&&(i.value=p,o("beforeTransition",n,r),Q(()=>{o("transition",n,r)}))});function P(){x(1)}function _(){x(-1)}function D(n){o("update:modelValue",n)}function w(n){return n!=null&&n!==""}function T(n){return a.findIndex(r=>r.props.name===n&&r.props.disable!==""&&r.props.disable!==!0)}function K(){return a.filter(n=>n.props.disable!==""&&n.props.disable!==!0)}function N(n){const r=n!==0&&t.animated===!0&&i.value!==-1?"q-transition--"+(n===-1?u.value:y.value):null;l.value!==r&&(l.value=r)}function x(n,r=i.value){let p=r+n;for(;p>-1&&p<a.length;){const A=a[p];if(A!==void 0&&A.props.disable!==""&&A.props.disable!==!0){N(n),e=!0,o("update:modelValue",A.props.name),setTimeout(()=>{e=!1});return}p+=n}t.infinite===!0&&a.length!==0&&r!==-1&&r!==a.length&&x(n,n===-1?a.length:-1)}function $(){const n=T(t.modelValue);return i.value!==n&&(i.value=n),!0}function B(){const n=w(t.modelValue)===!0&&$()&&a[i.value];return t.keepAlive===!0?[C(ee,g.value,[C(S.value===!0?d(v.value,()=>({...W,name:v.value})):W,{key:v.value,style:s.value},()=>n)])]:[C("div",{class:"q-panel scroll",style:s.value,key:v.value,role:"tabpanel"},[n])]}function Y(){if(a.length!==0)return t.animated===!0?[C(H,{name:l.value},B)]:B()}function F(n){return a=J(z(n.default,[])).filter(r=>r.props!==null&&r.props.slot===void 0&&w(r.props.name)===!0),a.length}function O(){return a}return Object.assign(c,{next:P,previous:_,goTo:D}),{panelIndex:i,panelDirectives:h,updatePanelsList:F,updatePanelIndex:$,getPanelContent:Y,getEnabledPanels:K,getPanels:O,isValidPanelName:w,keepAliveProps:g,needsUniqueKeepAliveWrapper:S,goToPanelByOffset:x,goToPanel:D,nextPanel:P,previousPanel:_}}export{ce as a,de as b,pe as c,le as u};
