import{c as M,b2 as tt,b3 as Tt,b4 as at,G as Ft,r as N,w as ne,h as y,N as re,H as jt,g as Vt,Y as Pe,Q as z,aL as Et}from"./index.afa77c1b.js";import{u as At,a as Nt}from"./use-dark.10fc72ca.js";import{u as zt}from"./use-cache.b0833c75.js";import{u as Zt,c as Bt,a as Lt}from"./use-form.7716cef3.js";import{p as b,c as Qt}from"./format.c860d4da.js";const Q=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function Rt(e,n,l){return Object.prototype.toString.call(e)==="[object Date]"&&(l=e.getDate(),n=e.getMonth()+1,e=e.getFullYear()),Pt($e(e,n,l))}function We(e,n,l){return rt(Xt(e,n,l))}function pt(e){return Ut(e)===0}function ve(e,n){return n<=6?31:n<=11||pt(e)?30:29}function Ut(e){const n=Q.length;let l=Q[0],r,u,s,m,i;if(e<l||e>=Q[n-1])throw new Error("Invalid Jalaali year "+e);for(i=1;i<n&&(r=Q[i],u=r-l,!(e<r));i+=1)l=r;return m=e-l,u-m<6&&(m=m-u+S(u+4,33)*33),s=$($(m+1,33)-1,4),s===-1&&(s=4),s}function nt(e,n){const l=Q.length,r=e+621;let u=-14,s=Q[0],m,i,h,x,v;if(e<s||e>=Q[l-1])throw new Error("Invalid Jalaali year "+e);for(v=1;v<l&&(m=Q[v],i=m-s,!(e<m));v+=1)u=u+S(i,33)*8+S($(i,33),4),s=m;x=e-s,u=u+S(x,33)*8+S($(x,33)+3,4),$(i,33)===4&&i-x===4&&(u+=1);const w=S(r,4)-S((S(r,100)+1)*3,4)-150,E=20+u-w;return n||(i-x<6&&(x=x-i+S(i+4,33)*33),h=$($(x+1,33)-1,4),h===-1&&(h=4)),{leap:h,gy:r,march:E}}function Xt(e,n,l){const r=nt(e,!0);return $e(r.gy,3,r.march)+(n-1)*31-S(n,7)*(n-7)+l-1}function Pt(e){const n=rt(e).gy;let l=n-621,r,u,s;const m=nt(l,!1),i=$e(n,3,m.march);if(s=e-i,s>=0){if(s<=185)return u=1+S(s,31),r=$(s,31)+1,{jy:l,jm:u,jd:r};s-=186}else l-=1,s+=179,m.leap===1&&(s+=1);return u=7+S(s,30),r=$(s,30)+1,{jy:l,jm:u,jd:r}}function $e(e,n,l){let r=S((e+S(n-8,6)+100100)*1461,4)+S(153*$(n+9,12)+2,5)+l-34840408;return r=r-S(S(e+100100+S(n-8,6),100)*3,4)+752,r}function rt(e){let n=4*e+139361631;n=n+S(S(4*e+183187720,146097)*3,4)*4-3908;const l=S($(n,1461),4)*5+308,r=S($(l,153),5)+1,u=$(S(l,153),12)+1;return{gy:S(n,1461)-100100+S(8-u,6),gm:u,gd:r}}function S(e,n){return~~(e/n)}function $(e,n){return e-~~(e/n)*n}const Wt=["gregorian","persian"],Jt={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:e=>Wt.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},Gt=["update:modelValue"];function B(e){return e.year+"/"+b(e.month)+"/"+b(e.day)}function Kt(e,n){const l=M(()=>e.disable!==!0&&e.readonly!==!0),r=M(()=>l.value===!0?0:-1),u=M(()=>{const i=[];return e.color!==void 0&&i.push(`bg-${e.color}`),e.textColor!==void 0&&i.push(`text-${e.textColor}`),i.join(" ")});function s(){return e.locale!==void 0?{...n.lang.date,...e.locale}:n.lang.date}function m(i){const h=new Date,x=i===!0?null:0;if(e.calendar==="persian"){const v=Rt(h);return{year:v.jy,month:v.jm,day:v.jd}}return{year:h.getFullYear(),month:h.getMonth()+1,day:h.getDate(),hour:x,minute:x,second:x,millisecond:x}}return{editable:l,tabindex:r,headerClass:u,getLocale:s,getCurrentDate:m}}const ot=864e5,ea=36e5,qe=6e4,lt="YYYY-MM-DDTHH:mm:ss.SSSZ",ta=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,aa=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,xe={};function na(e,n){const l="("+n.days.join("|")+")",r=e+l;if(xe[r]!==void 0)return xe[r];const u="("+n.daysShort.join("|")+")",s="("+n.months.join("|")+")",m="("+n.monthsShort.join("|")+")",i={};let h=0;const x=e.replace(aa,w=>{switch(h++,w){case"YY":return i.YY=h,"(-?\\d{1,2})";case"YYYY":return i.YYYY=h,"(-?\\d{1,4})";case"M":return i.M=h,"(\\d{1,2})";case"MM":return i.M=h,"(\\d{2})";case"MMM":return i.MMM=h,m;case"MMMM":return i.MMMM=h,s;case"D":return i.D=h,"(\\d{1,2})";case"Do":return i.D=h++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return i.D=h,"(\\d{2})";case"H":return i.H=h,"(\\d{1,2})";case"HH":return i.H=h,"(\\d{2})";case"h":return i.h=h,"(\\d{1,2})";case"hh":return i.h=h,"(\\d{2})";case"m":return i.m=h,"(\\d{1,2})";case"mm":return i.m=h,"(\\d{2})";case"s":return i.s=h,"(\\d{1,2})";case"ss":return i.s=h,"(\\d{2})";case"S":return i.S=h,"(\\d{1})";case"SS":return i.S=h,"(\\d{2})";case"SSS":return i.S=h,"(\\d{3})";case"A":return i.A=h,"(AM|PM)";case"a":return i.a=h,"(am|pm)";case"aa":return i.aa=h,"(a\\.m\\.|p\\.m\\.)";case"ddd":return u;case"dddd":return l;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return i.Z=h,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return i.ZZ=h,"(Z|[+-]\\d{2}\\d{2})";case"X":return i.X=h,"(-?\\d+)";case"x":return i.x=h,"(-?\\d{4,})";default:return h--,w[0]==="["&&(w=w.substring(1,w.length-1)),w.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),v={map:i,regex:new RegExp("^"+x)};return xe[r]=v,v}function ut(e,n){return e!==void 0?e:n!==void 0?n.date:Tt.date}function Je(e,n=""){const l=e>0?"-":"+",r=Math.abs(e),u=Math.floor(r/60),s=r%60;return l+b(u)+n+b(s)}function ra(e,n,l){let r=e.getFullYear(),u=e.getMonth();const s=e.getDate();return n.year!==void 0&&(r+=l*n.year,delete n.year),n.month!==void 0&&(u+=l*n.month,delete n.month),e.setDate(1),e.setMonth(2),e.setFullYear(r),e.setMonth(u),e.setDate(Math.min(s,Fe(e))),n.date!==void 0&&(e.setDate(e.getDate()+l*n.date),delete n.date),e}function oa(e,n,l){const r=n.year!==void 0?n.year:e[`get${l}FullYear`](),u=n.month!==void 0?n.month-1:e[`get${l}Month`](),s=new Date(r,u+1,0).getDate(),m=Math.min(s,n.date!==void 0?n.date:e[`get${l}Date`]());return e[`set${l}Date`](1),e[`set${l}Month`](2),e[`set${l}FullYear`](r),e[`set${l}Month`](u),e[`set${l}Date`](m),delete n.year,delete n.month,delete n.date,e}function Ie(e,n,l){const r=st(n),u=new Date(e),s=r.year!==void 0||r.month!==void 0||r.date!==void 0?ra(u,r,l):u;for(const m in r){const i=Qt(m);s[`set${i}`](s[`get${i}`]()+l*r[m])}return s}function st(e){const n={...e};return e.years!==void 0&&(n.year=e.years,delete n.years),e.months!==void 0&&(n.month=e.months,delete n.months),e.days!==void 0&&(n.date=e.days,delete n.days),e.day!==void 0&&(n.date=e.day,delete n.day),e.hour!==void 0&&(n.hours=e.hour,delete n.hour),e.minute!==void 0&&(n.minutes=e.minute,delete n.minute),e.second!==void 0&&(n.seconds=e.second,delete n.second),e.millisecond!==void 0&&(n.milliseconds=e.millisecond,delete n.millisecond),n}function it(e,n,l){const r=st(n),u=l===!0?"UTC":"",s=new Date(e),m=r.year!==void 0||r.month!==void 0||r.date!==void 0?oa(s,r,u):s;for(const i in r){const h=i.charAt(0).toUpperCase()+i.slice(1);m[`set${u}${h}`](r[i])}return m}function la(e,n,l){const r=ct(e,n,l),u=new Date(r.year,r.month===null?null:r.month-1,r.day===null?1:r.day,r.hour,r.minute,r.second,r.millisecond),s=u.getTimezoneOffset();return r.timezoneOffset===null||r.timezoneOffset===s?u:Ie(u,{minutes:r.timezoneOffset-s},1)}function ct(e,n,l,r,u){const s={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(u!==void 0&&Object.assign(s,u),e==null||e===""||typeof e!="string")return s;n===void 0&&(n=lt);const m=ut(l,tt.props),i=m.months,h=m.monthsShort,{regex:x,map:v}=na(n,m),w=e.match(x);if(w===null)return s;let E="";if(v.X!==void 0||v.x!==void 0){const T=parseInt(w[v.X!==void 0?v.X:v.x],10);if(isNaN(T)===!0||T<0)return s;const F=new Date(T*(v.X!==void 0?1e3:1));s.year=F.getFullYear(),s.month=F.getMonth()+1,s.day=F.getDate(),s.hour=F.getHours(),s.minute=F.getMinutes(),s.second=F.getSeconds(),s.millisecond=F.getMilliseconds()}else{if(v.YYYY!==void 0)s.year=parseInt(w[v.YYYY],10);else if(v.YY!==void 0){const T=parseInt(w[v.YY],10);s.year=T<0?T:2e3+T}if(v.M!==void 0){if(s.month=parseInt(w[v.M],10),s.month<1||s.month>12)return s}else v.MMM!==void 0?s.month=h.indexOf(w[v.MMM])+1:v.MMMM!==void 0&&(s.month=i.indexOf(w[v.MMMM])+1);if(v.D!==void 0){if(s.day=parseInt(w[v.D],10),s.year===null||s.month===null||s.day<1)return s;const T=r!=="persian"?new Date(s.year,s.month,0).getDate():ve(s.year,s.month);if(s.day>T)return s}v.H!==void 0?s.hour=parseInt(w[v.H],10)%24:v.h!==void 0&&(s.hour=parseInt(w[v.h],10)%12,(v.A&&w[v.A]==="PM"||v.a&&w[v.a]==="pm"||v.aa&&w[v.aa]==="p.m.")&&(s.hour+=12),s.hour=s.hour%24),v.m!==void 0&&(s.minute=parseInt(w[v.m],10)%60),v.s!==void 0&&(s.second=parseInt(w[v.s],10)%60),v.S!==void 0&&(s.millisecond=parseInt(w[v.S],10)*10**(3-w[v.S].length)),(v.Z!==void 0||v.ZZ!==void 0)&&(E=v.Z!==void 0?w[v.Z].replace(":",""):w[v.ZZ],s.timezoneOffset=(E[0]==="+"?-1:1)*(60*E.slice(1,3)+1*E.slice(3,5)))}return s.dateHash=b(s.year,6)+"/"+b(s.month)+"/"+b(s.day),s.timeHash=b(s.hour)+":"+b(s.minute)+":"+b(s.second)+E,s}function ua(e){return typeof e=="number"?!0:isNaN(Date.parse(e))===!1}function sa(e,n){return it(new Date,e,n)}function ia(e){const n=new Date(e).getDay();return n===0?7:n}function ke(e){const n=new Date(e.getFullYear(),e.getMonth(),e.getDate());n.setDate(n.getDate()-(n.getDay()+6)%7+3);const l=new Date(n.getFullYear(),0,4);l.setDate(l.getDate()-(l.getDay()+6)%7+3);const r=n.getTimezoneOffset()-l.getTimezoneOffset();n.setHours(n.getHours()-r);const u=(n-l)/(ot*7);return 1+Math.floor(u)}function ca(e){return e.getFullYear()*1e4+e.getMonth()*100+e.getDate()}function He(e,n){const l=new Date(e);return n===!0?ca(l):l.getTime()}function da(e,n,l,r={}){const u=He(n,r.onlyDate),s=He(l,r.onlyDate),m=He(e,r.onlyDate);return(m>u||r.inclusiveFrom===!0&&m===u)&&(m<s||r.inclusiveTo===!0&&m===s)}function fa(e,n){return Ie(e,n,1)}function va(e,n){return Ie(e,n,-1)}function V(e,n,l){const r=new Date(e),u=`set${l===!0?"UTC":""}`;switch(n){case"year":case"years":r[`${u}Month`](0);case"month":case"months":r[`${u}Date`](1);case"day":case"days":case"date":r[`${u}Hours`](0);case"hour":case"hours":r[`${u}Minutes`](0);case"minute":case"minutes":r[`${u}Seconds`](0);case"second":case"seconds":r[`${u}Milliseconds`](0)}return r}function ha(e,n,l){const r=new Date(e),u=`set${l===!0?"UTC":""}`;switch(n){case"year":case"years":r[`${u}Month`](11);case"month":case"months":r[`${u}Date`](Fe(r));case"day":case"days":case"date":r[`${u}Hours`](23);case"hour":case"hours":r[`${u}Minutes`](59);case"minute":case"minutes":r[`${u}Seconds`](59);case"second":case"seconds":r[`${u}Milliseconds`](999)}return r}function ma(e){let n=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(l=>{n=Math.max(n,new Date(l))}),n}function ga(e){let n=new Date(e);return Array.prototype.slice.call(arguments,1).forEach(l=>{n=Math.min(n,new Date(l))}),n}function fe(e,n,l){return(e.getTime()-e.getTimezoneOffset()*qe-(n.getTime()-n.getTimezoneOffset()*qe))/l}function Te(e,n,l="days"){const r=new Date(e),u=new Date(n);switch(l){case"years":case"year":return r.getFullYear()-u.getFullYear();case"months":case"month":return(r.getFullYear()-u.getFullYear())*12+r.getMonth()-u.getMonth();case"days":case"day":case"date":return fe(V(r,"day"),V(u,"day"),ot);case"hours":case"hour":return fe(V(r,"hour"),V(u,"hour"),ea);case"minutes":case"minute":return fe(V(r,"minute"),V(u,"minute"),qe);case"seconds":case"second":return fe(V(r,"second"),V(u,"second"),1e3)}}function Oe(e){return Te(e,V(e,"year"),"days")+1}function ya(e){return at(e)===!0?"date":typeof e=="number"?"number":"string"}function Da(e,n,l){const r=new Date(e);if(n){const u=new Date(n);if(r<u)return u}if(l){const u=new Date(l);if(r>u)return u}return r}function Ma(e,n,l){const r=new Date(e),u=new Date(n);if(l===void 0)return r.getTime()===u.getTime();switch(l){case"second":case"seconds":if(r.getSeconds()!==u.getSeconds())return!1;case"minute":case"minutes":if(r.getMinutes()!==u.getMinutes())return!1;case"hour":case"hours":if(r.getHours()!==u.getHours())return!1;case"day":case"days":case"date":if(r.getDate()!==u.getDate())return!1;case"month":case"months":if(r.getMonth()!==u.getMonth())return!1;case"year":case"years":if(r.getFullYear()!==u.getFullYear())return!1;break;default:throw new Error(`date isSameDate unknown unit ${l}`)}return!0}function Fe(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function Ge(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const Ke={YY(e,n,l){const r=this.YYYY(e,n,l)%100;return r>=0?b(r):"-"+b(Math.abs(r))},YYYY(e,n,l){return l!=null?l:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return b(e.getMonth()+1)},MMM(e,n){return n.monthsShort[e.getMonth()]},MMMM(e,n){return n.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return Ge(this.Q(e))},D(e){return e.getDate()},Do(e){return Ge(e.getDate())},DD(e){return b(e.getDate())},DDD(e){return Oe(e)},DDDD(e){return b(Oe(e),3)},d(e){return e.getDay()},dd(e,n){return this.dddd(e,n).slice(0,2)},ddd(e,n){return n.daysShort[e.getDay()]},dddd(e,n){return n.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return ke(e)},ww(e){return b(ke(e))},H(e){return e.getHours()},HH(e){return b(e.getHours())},h(e){const n=e.getHours();return n===0?12:n>12?n%12:n},hh(e){return b(this.h(e))},m(e){return e.getMinutes()},mm(e){return b(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return b(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return b(Math.floor(e.getMilliseconds()/10))},SSS(e){return b(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,n,l,r){const u=r==null?e.getTimezoneOffset():r;return Je(u,":")},ZZ(e,n,l,r){const u=r==null?e.getTimezoneOffset():r;return Je(u)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function dt(e,n,l,r,u){if(e!==0&&!e||e===1/0||e===-1/0)return;const s=new Date(e);if(isNaN(s))return;n===void 0&&(n=lt);const m=ut(l,tt.props);return n.replace(ta,(i,h)=>i in Ke?Ke[i](s,m,r,u):h===void 0?i:h.split("\\]").join("]"))}function wa(e){return at(e)===!0?new Date(e.getTime()):e}var Ca={isValid:ua,extractDate:la,buildDate:sa,getDayOfWeek:ia,getWeekOfYear:ke,isBetweenDates:da,addToDate:fa,subtractFromDate:va,adjustDate:it,startOfDate:V,endOfDate:ha,getMaxDate:ma,getMinDate:ga,getDateDiff:Te,getDayOfYear:Oe,inferDateFormat:ya,getDateBetween:Da,isSameDate:Ma,daysInMonth:Fe,formatDate:dt,clone:wa};const X=20,Ya=["Calendar","Years","Months"],et=e=>Ya.includes(e),Ce=e=>/^-?[\d]+\/[0-1]\d$/.test(e),K=" \u2014 ";function L(e){return e.year+"/"+b(e.month)}var qa=Ft({name:"QDate",props:{...Jt,...Zt,...At,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:Ce},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:Ce},navigationMaxYearMonth:{type:String,validator:Ce},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:et}},emits:[...Gt,"rangeStart","rangeEnd","navigation"],setup(e,{slots:n,emit:l}){const{proxy:r}=Vt(),{$q:u}=r,s=Nt(e,u),{getCache:m}=zt(),{tabindex:i,headerClass:h,getLocale:x,getCurrentDate:v}=Kt(e,u);let w;const E=Bt(e),T=Lt(E),F=N(null),R=N(Be()),H=N(x()),ft=M(()=>Be()),vt=M(()=>x()),A=M(()=>v()),g=N(Le(R.value,H.value)),O=N(e.defaultView),je=u.lang.rtl===!0?"right":"left",oe=N(je.value),he=N(je.value),me=g.value.year,le=N(me-me%X-(me<0?X:0)),k=N(null),ht=M(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(s.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),p=M(()=>e.color||"primary"),P=M(()=>e.textColor||"white"),ue=M(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),ge=M(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),j=M(()=>ge.value.filter(t=>typeof t=="string").map(t=>we(t,R.value,H.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),W=M(()=>{const t=a=>we(a,R.value,H.value);return ge.value.filter(a=>Et(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),se=M(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=We(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),ye=M(()=>e.calendar==="persian"?B:(t,a,o)=>dt(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?R.value:a,o===void 0?H.value:o,t.year,t.timezoneOffset)),ee=M(()=>j.value.length+W.value.reduce((t,a)=>t+1+Te(se.value(a.to),se.value(a.from)),0)),Ve=M(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length!==0)return e.title;if(k.value!==null){const o=k.value.init,c=se.value(o);return H.value.daysShort[c.getDay()]+", "+H.value.monthsShort[o.month-1]+" "+o.day+K+"?"}if(ee.value===0)return K;if(ee.value>1)return`${ee.value} ${H.value.pluralDay}`;const t=j.value[0],a=se.value(t);return isNaN(a.valueOf())===!0?K:H.value.headerTitle!==void 0?H.value.headerTitle(a,t):H.value.daysShort[a.getDay()]+", "+H.value.monthsShort[t.month-1]+" "+t.day}),mt=M(()=>j.value.concat(W.value.map(a=>a.from)).sort((a,o)=>a.year-o.year||a.month-o.month)[0]),gt=M(()=>j.value.concat(W.value.map(a=>a.to)).sort((a,o)=>o.year-a.year||o.month-a.month)[0]),Ee=M(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length!==0)return e.subtitle;if(ee.value===0)return K;if(ee.value>1){const t=mt.value,a=gt.value,o=H.value.monthsShort;return o[t.month-1]+(t.year!==a.year?" "+t.year+K+o[a.month-1]+" ":t.month!==a.month?K+o[a.month-1]:"")+" "+a.year}return j.value[0].year}),ie=M(()=>{const t=[u.iconSet.datetime.arrowLeft,u.iconSet.datetime.arrowRight];return u.lang.rtl===!0?t.reverse():t}),Ae=M(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):H.value.firstDayOfWeek),yt=M(()=>{const t=H.value.daysShort,a=Ae.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),Z=M(()=>{const t=g.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():ve(t.year,t.month)}),Dt=M(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),C=M(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),q=M(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),De=M(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return C.value!==null&&C.value.year>=g.value.year&&(t.year.prev=!1,C.value.year===g.value.year&&C.value.month>=g.value.month&&(t.month.prev=!1)),q.value!==null&&q.value.year<=g.value.year&&(t.year.next=!1,q.value.year===g.value.year&&q.value.month<=g.value.month&&(t.month.next=!1)),t}),ce=M(()=>{const t={};return j.value.forEach(a=>{const o=L(a);t[o]===void 0&&(t[o]=[]),t[o].push(a.day)}),t}),Ne=M(()=>{const t={};return W.value.forEach(a=>{const o=L(a.from),c=L(a.to);if(t[o]===void 0&&(t[o]=[]),t[o].push({from:a.from.day,to:o===c?a.to.day:void 0,range:a}),o<c){let d;const{year:Y,month:f}=a.from,D=f<12?{year:Y,month:f+1}:{year:Y+1,month:1};for(;(d=L(D))<=c;)t[d]===void 0&&(t[d]=[]),t[d].push({from:void 0,to:d===c?a.to.day:void 0,range:a}),D.month++,D.month>12&&(D.year++,D.month=1)}}),t}),te=M(()=>{if(k.value===null)return;const{init:t,initHash:a,final:o,finalHash:c}=k.value,[d,Y]=a<=c?[t,o]:[o,t],f=L(d),D=L(Y);if(f!==I.value&&D!==I.value)return;const _={};return f===I.value?(_.from=d.day,_.includeFrom=!0):_.from=1,D===I.value?(_.to=Y.day,_.includeTo=!0):_.to=Z.value,_}),I=M(()=>L(g.value)),Mt=M(()=>{const t={};if(e.options===void 0){for(let o=1;o<=Z.value;o++)t[o]=!0;return t}const a=typeof e.options=="function"?e.options:o=>e.options.includes(o);for(let o=1;o<=Z.value;o++){const c=I.value+"/"+b(o);t[o]=a(c)}return t}),wt=M(()=>{const t={};if(e.events===void 0)for(let a=1;a<=Z.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:o=>e.events.includes(o);for(let o=1;o<=Z.value;o++){const c=I.value+"/"+b(o);t[o]=a(c)===!0&&Dt.value(c)}}return t}),Yt=M(()=>{let t,a;const{year:o,month:c}=g.value;if(e.calendar!=="persian")t=new Date(o,c-1,1),a=new Date(o,c-1,0).getDate();else{const d=We(o,c,1);t=new Date(d.gy,d.gm-1,d.gd);let Y=c-1,f=o;Y===0&&(Y=12,f--),a=ve(f,Y)}return{days:t.getDay()-Ae.value-1,endDay:a}}),ze=M(()=>{const t=[],{days:a,endDay:o}=Yt.value,c=a<0?a+7:a;if(c<6)for(let f=o-c;f<=o;f++)t.push({i:f,fill:!0});const d=t.length;for(let f=1;f<=Z.value;f++){const D={i:f,event:wt.value[f],classes:[]};Mt.value[f]===!0&&(D.in=!0,D.flat=!0),t.push(D)}if(ce.value[I.value]!==void 0&&ce.value[I.value].forEach(f=>{const D=d+f-1;Object.assign(t[D],{selected:!0,unelevated:!0,flat:!1,color:p.value,textColor:P.value})}),Ne.value[I.value]!==void 0&&Ne.value[I.value].forEach(f=>{if(f.from!==void 0){const D=d+f.from-1,_=d+(f.to||Z.value)-1;for(let ae=D;ae<=_;ae++)Object.assign(t[ae],{range:f.range,unelevated:!0,color:p.value,textColor:P.value});Object.assign(t[D],{rangeFrom:!0,flat:!1}),f.to!==void 0&&Object.assign(t[_],{rangeTo:!0,flat:!1})}else if(f.to!==void 0){const D=d+f.to-1;for(let _=d;_<=D;_++)Object.assign(t[_],{range:f.range,unelevated:!0,color:p.value,textColor:P.value});Object.assign(t[D],{flat:!1,rangeTo:!0})}else{const D=d+Z.value-1;for(let _=d;_<=D;_++)Object.assign(t[_],{range:f.range,unelevated:!0,color:p.value,textColor:P.value})}}),te.value!==void 0){const f=d+te.value.from-1,D=d+te.value.to-1;for(let _=f;_<=D;_++)t[_].color=p.value,t[_].editRange=!0;te.value.includeFrom===!0&&(t[f].editRangeFrom=!0),te.value.includeTo===!0&&(t[D].editRangeTo=!0)}g.value.year===A.value.year&&g.value.month===A.value.month&&(t[d+A.value.day-1].today=!0);const Y=t.length%7;if(Y>0){const f=7-Y;for(let D=1;D<=f;D++)t.push({i:D,fill:!0})}return t.forEach(f=>{let D="q-date__calendar-item ";f.fill===!0?D+="q-date__calendar-item--fill":(D+=`q-date__calendar-item--${f.in===!0?"in":"out"}`,f.range!==void 0&&(D+=` q-date__range${f.rangeTo===!0?"-to":f.rangeFrom===!0?"-from":""}`),f.editRange===!0&&(D+=` q-date__edit-range${f.editRangeFrom===!0?"-from":""}${f.editRangeTo===!0?"-to":""}`),(f.range!==void 0||f.editRange===!0)&&(D+=` text-${f.color}`)),f.classes=D}),t}),bt=M(()=>e.disable===!0?{"aria-disabled":"true"}:{});ne(()=>e.modelValue,t=>{if(w===t)w=0;else{const a=Le(R.value,H.value);J(a.year,a.month,a)}}),ne(O,()=>{F.value!==null&&r.$el.contains(document.activeElement)===!0&&F.value.focus()}),ne(()=>g.value.year+"|"+g.value.month,()=>{l("navigation",{year:g.value.year,month:g.value.month})}),ne(ft,t=>{Xe(t,H.value,"mask"),R.value=t}),ne(vt,t=>{Xe(R.value,t,"locale"),H.value=t});function Ze(){const{year:t,month:a,day:o}=A.value,c={...g.value,year:t,month:a,day:o},d=ce.value[L(c)];(d===void 0||d.includes(c.day)===!1)&&be(c),Me(c.year,c.month)}function _t(t){et(t)===!0&&(O.value=t)}function St(t,a){["month","year"].includes(t)&&(t==="month"?Re:Ye)(a===!0?-1:1)}function Me(t,a){O.value="Calendar",J(t,a)}function xt(t,a){if(e.range===!1||!t){k.value=null;return}const o=Object.assign({...g.value},t),c=a!==void 0?Object.assign({...g.value},a):o;k.value={init:o,initHash:B(o),final:c,finalHash:B(c)},Me(o.year,o.month)}function Be(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function we(t,a,o){return ct(t,a,o,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Le(t,a){const o=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(o.length===0)return Qe();const c=o[o.length-1],d=we(c.from!==void 0?c.from:c,t,a);return d.dateHash===null?Qe():d}function Qe(){let t,a;if(e.defaultYearMonth!==void 0){const o=e.defaultYearMonth.split("/");t=parseInt(o[0],10),a=parseInt(o[1],10)}else{const o=A.value!==void 0?A.value:v();t=o.year,a=o.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+b(a)+"/01"}}function Re(t){let a=g.value.year,o=Number(g.value.month)+t;o===13?(o=1,a++):o===0&&(o=12,a--),J(a,o),ue.value===!0&&de("month")}function Ye(t){const a=Number(g.value.year)+t;J(a,g.value.month),ue.value===!0&&de("year")}function Ht(t){J(t,g.value.month),O.value=e.defaultView==="Years"?"Months":"Calendar",ue.value===!0&&de("year")}function Ct(t){J(g.value.year,t),O.value="Calendar",ue.value===!0&&de("month")}function qt(t,a){const o=ce.value[a];(o!==void 0&&o.includes(t.day)===!0?_e:be)(t)}function U(t){return{year:t.year,month:t.month,day:t.day}}function J(t,a,o){if(C.value!==null&&t<=C.value.year&&((a<C.value.month||t<C.value.year)&&(a=C.value.month),t=C.value.year),q.value!==null&&t>=q.value.year&&((a>q.value.month||t>q.value.year)&&(a=q.value.month),t=q.value.year),o!==void 0){const{hour:d,minute:Y,second:f,millisecond:D,timezoneOffset:_,timeHash:ae}=o;Object.assign(g.value,{hour:d,minute:Y,second:f,millisecond:D,timezoneOffset:_,timeHash:ae})}const c=t+"/"+b(a)+"/01";c!==g.value.dateHash&&(oe.value=g.value.dateHash<c==(u.lang.rtl!==!0)?"left":"right",t!==g.value.year&&(he.value=oe.value),Pe(()=>{le.value=t-t%X-(t<0?X:0),Object.assign(g.value,{year:t,month:a,day:1,dateHash:c})}))}function pe(t,a,o){const c=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;w=c;const{reason:d,details:Y}=Ue(a,o);l("update:modelValue",c,d,Y)}function de(t){const a=j.value[0]!==void 0&&j.value[0].dateHash!==null?{...j.value[0]}:{...g.value};Pe(()=>{a.year=g.value.year,a.month=g.value.month;const o=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():ve(a.year,a.month);a.day=Math.min(Math.max(1,a.day),o);const c=G(a);w=c;const{details:d}=Ue("",a);l("update:modelValue",c,t,d)})}function Ue(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...U(a.target),from:U(a.from),to:U(a.to)}}:{reason:`${t}-day`,details:U(a)}}function G(t,a,o){return t.from!==void 0?{from:ye.value(t.from,a,o),to:ye.value(t.to,a,o)}:ye.value(t,a,o)}function be(t){let a;if(e.multiple===!0)if(t.from!==void 0){const o=B(t.from),c=B(t.to),d=j.value.filter(f=>f.dateHash<o||f.dateHash>c),Y=W.value.filter(({from:f,to:D})=>D.dateHash<o||f.dateHash>c);a=d.concat(Y).concat(t).map(f=>G(f))}else{const o=ge.value.slice();o.push(G(t)),a=o}else a=G(t);pe(a,"add",t)}function _e(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const o=G(t);t.from!==void 0?a=e.modelValue.filter(c=>c.from!==void 0?c.from!==o.from&&c.to!==o.to:!0):a=e.modelValue.filter(c=>c!==o),a.length===0&&(a=null)}pe(a,"remove",t)}function Xe(t,a,o){const c=j.value.concat(W.value).map(d=>G(d,t,a)).filter(d=>d.from!==void 0?d.from.dateHash!==null&&d.to.dateHash!==null:d.dateHash!==null);l("update:modelValue",(e.multiple===!0?c:c[0])||null,o)}function kt(){if(e.minimal!==!0)return y("div",{class:"q-date__header "+h.value},[y("div",{class:"relative-position"},[y(re,{name:"q-transition--fade"},()=>y("div",{key:"h-yr-"+Ee.value,class:"q-date__header-subtitle q-date__header-link "+(O.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:i.value,...m("vY",{onClick(){O.value="Years"},onKeyup(t){t.keyCode===13&&(O.value="Years")}})},[Ee.value]))]),y("div",{class:"q-date__header-title relative-position flex no-wrap"},[y("div",{class:"relative-position col"},[y(re,{name:"q-transition--fade"},()=>y("div",{key:"h-sub"+Ve.value,class:"q-date__header-title-label q-date__header-link "+(O.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:i.value,...m("vC",{onClick(){O.value="Calendar"},onKeyup(t){t.keyCode===13&&(O.value="Calendar")}})},[Ve.value]))]),e.todayBtn===!0?y(z,{class:"q-date__header-today self-start",icon:u.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:i.value,onClick:Ze}):null])])}function Se({label:t,type:a,key:o,dir:c,goTo:d,boundaries:Y,cls:f}){return[y("div",{class:"row items-center q-date__arrow"},[y(z,{round:!0,dense:!0,size:"sm",flat:!0,icon:ie.value[0],tabindex:i.value,disable:Y.prev===!1,...m("go-#"+a,{onClick(){d(-1)}})})]),y("div",{class:"relative-position overflow-hidden flex flex-center"+f},[y(re,{name:"q-transition--jump-"+c},()=>y("div",{key:o},[y(z,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:i.value,...m("view#"+a,{onClick:()=>{O.value=a}})})]))]),y("div",{class:"row items-center q-date__arrow"},[y(z,{round:!0,dense:!0,size:"sm",flat:!0,icon:ie.value[1],tabindex:i.value,disable:Y.next===!1,...m("go+#"+a,{onClick(){d(1)}})})])]}const Ot={Calendar:()=>[y("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[y("div",{class:"q-date__navigation row items-center no-wrap"},Se({label:H.value.months[g.value.month-1],type:"Months",key:g.value.month,dir:oe.value,goTo:Re,boundaries:De.value.month,cls:" col"}).concat(Se({label:g.value.year,type:"Years",key:g.value.year,dir:he.value,goTo:Ye,boundaries:De.value.year,cls:""}))),y("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},yt.value.map(t=>y("div",{class:"q-date__calendar-item"},[y("div",t)]))),y("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[y(re,{name:"q-transition--slide-"+oe.value},()=>y("div",{key:I.value,class:"q-date__calendar-days fit"},ze.value.map(t=>y("div",{class:t.classes},[t.in===!0?y(z,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:i.value,...m("day#"+t.i,{onClick:()=>{$t(t.i)},onMouseover:()=>{It(t.i)}})},t.event!==!1?()=>y("div",{class:"q-date__event bg-"+t.event}):null):y("div",""+t.i)]))))])])],Months(){const t=g.value.year===A.value.year,a=c=>C.value!==null&&g.value.year===C.value.year&&C.value.month>c||q.value!==null&&g.value.year===q.value.year&&q.value.month<c,o=H.value.monthsShort.map((c,d)=>{const Y=g.value.month===d+1;return y("div",{class:"q-date__months-item flex flex-center"},[y(z,{class:t===!0&&A.value.month===d+1?"q-date__today":null,flat:Y!==!0,label:c,unelevated:Y,color:Y===!0?p.value:null,textColor:Y===!0?P.value:null,tabindex:i.value,disable:a(d+1),...m("month#"+d,{onClick:()=>{Ct(d+1)}})})])});return e.yearsInMonthView===!0&&o.unshift(y("div",{class:"row no-wrap full-width"},[Se({label:g.value.year,type:"Years",key:g.value.year,dir:he.value,goTo:Ye,boundaries:De.value.year,cls:" col"})])),y("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},o)},Years(){const t=le.value,a=t+X,o=[],c=d=>C.value!==null&&C.value.year>d||q.value!==null&&q.value.year<d;for(let d=t;d<=a;d++){const Y=g.value.year===d;o.push(y("div",{class:"q-date__years-item flex flex-center"},[y(z,{key:"yr"+d,class:A.value.year===d?"q-date__today":null,flat:!Y,label:d,dense:!0,unelevated:Y,color:Y===!0?p.value:null,textColor:Y===!0?P.value:null,tabindex:i.value,disable:c(d),...m("yr#"+d,{onClick:()=>{Ht(d)}})})]))}return y("div",{class:"q-date__view q-date__years flex flex-center"},[y("div",{class:"col-auto"},[y(z,{round:!0,dense:!0,flat:!0,icon:ie.value[0],tabindex:i.value,disable:c(t),...m("y-",{onClick:()=>{le.value-=X}})})]),y("div",{class:"q-date__years-content col self-stretch row items-center"},o),y("div",{class:"col-auto"},[y(z,{round:!0,dense:!0,flat:!0,icon:ie.value[1],tabindex:i.value,disable:c(a),...m("y+",{onClick:()=>{le.value+=X}})})])])}};function $t(t){const a={...g.value,day:t};if(e.range===!1){qt(a,I.value);return}if(k.value===null){const o=ze.value.find(d=>d.fill!==!0&&d.i===t);if(e.noUnset!==!0&&o.range!==void 0){_e({target:a,from:o.range.from,to:o.range.to});return}if(o.selected===!0){_e(a);return}const c=B(a);k.value={init:a,initHash:c,final:a,finalHash:c},l("rangeStart",U(a))}else{const o=k.value.initHash,c=B(a),d=o<=c?{from:k.value.init,to:a}:{from:a,to:k.value.init};k.value=null,be(o===c?a:{target:a,...d}),l("rangeEnd",{from:U(d.from),to:U(d.to)})}}function It(t){if(k.value!==null){const a={...g.value,day:t};Object.assign(k.value,{final:a,finalHash:B(a)})}}return Object.assign(r,{setToday:Ze,setView:_t,offsetCalendar:St,setCalendarTo:Me,setEditingRange:xt}),()=>{const t=[y("div",{class:"q-date__content col relative-position"},[y(re,{name:"q-transition--fade"},Ot[O.value])])],a=jt(n.default);return a!==void 0&&t.push(y("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&T(t,"push"),y("div",{class:ht.value,...bt.value},[kt(),y("div",{ref:F,class:"q-date__main col column",tabindex:-1},t)])}}});export{qa as Q,ct as _,Gt as a,Kt as b,Ca as d,dt as f,B as g,Jt as u};
