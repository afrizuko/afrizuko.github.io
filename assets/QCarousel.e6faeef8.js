import{k as N,c,h as u,t as R,r as z,ag as j,w as y,aH as K,o as D,p as M,ap as Q,g as L,s as U,aK as G,Q as S,O as J}from"./index.96ab6253.js";import{u as W,a as X,b as Y,c as Z}from"./use-panel.18a10359.js";import{u as ee,a as ne}from"./use-dark.5a00adcc.js";var se=N({name:"QCarouselSlide",props:{...W,imgSrc:String},setup(e,{slots:o}){const l=c(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>u("div",{class:"q-carousel__slide",style:l.value},R(o.default))}});let h=0;const te={fullscreen:Boolean,noRouteFullscreenExit:Boolean},ae=["update:fullscreen","fullscreen"];function oe(){const e=L(),{props:o,emit:l,proxy:r}=e;let n,v,f;const i=z(!1);j(e)===!0&&y(()=>r.$route.fullPath,()=>{o.noRouteFullscreenExit!==!0&&s()}),y(()=>o.fullscreen,d=>{i.value!==d&&m()}),y(i,d=>{l("update:fullscreen",d),l("fullscreen",d)});function m(){i.value===!0?s():g()}function g(){i.value!==!0&&(i.value=!0,f=r.$el.parentNode,f.replaceChild(v,r.$el),document.body.appendChild(r.$el),h++,h===1&&document.body.classList.add("q-body--fullscreen-mixin"),n={handler:s},Q.add(n))}function s(){i.value===!0&&(n!==void 0&&(Q.remove(n),n=void 0),f.replaceChild(r.$el,v),i.value=!1,h=Math.max(0,h-1),h===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),r.$el.scrollIntoView!==void 0&&setTimeout(()=>{r.$el.scrollIntoView()})))}return K(()=>{v=document.createElement("span")}),D(()=>{o.fullscreen===!0&&g()}),M(s),Object.assign(r,{toggleFullscreen:m,setFullscreen:g,exitFullscreen:s}),{inFullscreen:i,toggleFullscreen:m}}const le=["top","right","bottom","left"],re=["regular","flat","outline","push","unelevated"];var ve=N({name:"QCarousel",props:{...ee,...X,...te,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>re.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>le.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...ae,...Y],setup(e,{slots:o}){const{proxy:{$q:l}}=L(),r=ne(e,l);let n=null,v;const{updatePanelsList:f,getPanelContent:i,panelDirectives:m,goToPanel:g,previousPanel:s,nextPanel:d,getEnabledPanels:O,panelIndex:x}=Z(),{inFullscreen:w}=oe(),V=c(()=>w.value!==!0&&e.height!==void 0?{height:e.height}:{}),q=c(()=>e.vertical===!0?"vertical":"horizontal"),p=c(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(w.value===!0?" fullscreen":"")+(r.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${q.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${k.value}`:"")),$=c(()=>{const t=[e.prevIcon||l.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||l.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&l.lang.rtl===!0?t.reverse():t}),I=c(()=>e.navigationIcon||l.iconSet.carousel.navigationIcon),A=c(()=>e.navigationActiveIcon||I.value),k=c(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),b=c(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));y(()=>e.modelValue,()=>{e.autoplay&&C()}),y(()=>e.autoplay,t=>{t?C():n!==null&&(clearTimeout(n),n=null)});function C(){const t=G(e.autoplay)===!0?Math.abs(e.autoplay):5e3;n!==null&&clearTimeout(n),n=setTimeout(()=>{n=null,t>=0?d():s()},t)}D(()=>{e.autoplay&&C()}),M(()=>{n!==null&&clearTimeout(n)});function T(t,_){return u("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${t} q-carousel__navigation--${k.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[u("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},O().map(_))])}function H(){const t=[];if(e.navigation===!0){const _=o["navigation-icon"]!==void 0?o["navigation-icon"]:a=>u(S,{key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`,...a.btnProps,onClick:a.onClick}),P=v-1;t.push(T("buttons",(a,F)=>{const B=a.props.name,E=x.value===F;return _({index:F,maxIndex:P,name:B,active:E,btnProps:{icon:E===!0?A.value:I.value,size:"sm",...b.value},onClick:()=>{g(B)}})}))}else if(e.thumbnails===!0){const _=e.controlColor!==void 0?` text-${e.controlColor}`:"";t.push(T("thumbnails",P=>{const a=P.props;return u("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+_,src:a.imgSrc||a["img-src"],onClick:()=>{g(a.name)}})}))}return e.arrows===!0&&x.value>=0&&((e.infinite===!0||x.value>0)&&t.push(u("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${q.value} absolute flex flex-center`},[u(S,{icon:$.value[0],...b.value,onClick:s})])),(e.infinite===!0||x.value<v-1)&&t.push(u("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${q.value} absolute flex flex-center`},[u(S,{icon:$.value[1],...b.value,onClick:d})]))),J(o.control,t)}return()=>(v=f(o),u("div",{class:p.value,style:V.value},[U("div",{class:"q-carousel__slides-container"},i(),"sl-cont",e.swipeable,()=>m.value)].concat(H())))}});export{se as Q,ve as a,ae as b,oe as c,te as u};
