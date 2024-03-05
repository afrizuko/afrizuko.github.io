import{Q as B}from"./QSeparator.321b633b.js";import{Q as V}from"./QImg.84d4471d.js";import{Q as w}from"./QCardSection.223fe0f9.js";import{d as G,u as Y,aa as H,c as r,o as J,K,m,n as b,p as a,q as t,f as s,B as v,z as o,v as q,x as L,C as T,s as p,t as W,F as X,Q as Z}from"./index.d15ae335.js";import{Q as tt}from"./QCheckbox.dce8b3a2.js";import{Q as h}from"./QCard.921cf3a5.js";import{Q as y}from"./QChip.d0ea412b.js";import{Q as f}from"./QSpace.ad51b65b.js";import{Q as et}from"./QPage.0e4d2f7f.js";import{u as st}from"./payment.96de4ec3.js";import{m as $}from"./moment.18ddbc39.js";import{u as ot}from"./property.b76182b5.js";import"./use-dark.50337edb.js";import"./use-checkbox.79554ded.js";import"./use-form.e49f43a6.js";const at={class:"row justify-center q-mt-md"},rt=t("div",{class:"row"},[t("h1",{class:"text-weight-bold text-h3"}," Congratulation \u{1F389} ")],-1),lt=t("div",{class:"row"},[t("h1",{class:"text-weight-bold text-h5"}," Your booking ")],-1),nt={class:"text-h7 q-mt-sm q-mb-xs text-grey"},it={class:"text-h7 q-mt-sm q-mb-xs"},ct={class:"row q-mt-sm"},dt={key:0,class:"q-mr-sm"},ut={class:"row"},mt={class:"text-grey"},vt={class:"row q-mt-md"},_t={class:"row q-mt-md"},pt={class:"text-grey"},ft={class:"row q-mt-md"},ht=t("div",{class:"row q-mt-md"},[t("h1",{class:"text-weight-bold text-h5"}," Booking detail ")],-1),yt={class:"row q-mt-md q-mb-sm"},xt={class:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"},gt={class:"row q-py-sm"},wt=t("div",{class:"text-subtitle1"}," Booking code ",-1),bt={class:"text-subtitle1"},qt={class:"row q-py-sm"},Ot=t("div",{class:"text-subtitle1"}," Payment Date ",-1),It={class:"text-subtitle1"},Pt={class:"row q-py-sm"},St=t("div",{class:"text-subtitle1"}," Start Date ",-1),Dt={class:"text-subtitle1"},Qt={class:"row q-py-sm"},Ct=t("div",{class:"text-subtitle1"}," Total ",-1),Rt={class:"text-subtitle1"},kt={class:"row q-py-sm"},Et=t("div",{class:"text-subtitle1"}," Payment method ",-1),Mt={class:"text-subtitle1"},Bt={class:"q-mt-lg"},Xt=G({__name:"pay-done",setup(Tt){const O=Y(),l=H(),x=st(),i=ot(),e=r(()=>x.getPaymentDetails),N=r(()=>{if(e.value.period.from!=null){const d=$(e.value.period.from);return $(e.value.period.to).diff(d,"months")+1}else return 0});r(()=>i.getPropertyReviews);const g=r(()=>e.value.noOfInfants+e.value.noOfChildren+e.value.noOfAdults),c=r(()=>i.getProperty);r(()=>i.getImages),r(()=>x.getResponse);const I=r(()=>i.getPropertyReview2),j=r(()=>JSON.stringify(i.getPropertyReview2)===JSON.stringify({})),A=r(()=>e.value.period.hasOwnProperty("from")?`${l.formatDateMonthDay(e.value.period.from)} -
    ${l.formatDateMonthDay(e.value.period.to)}`:l.formatStartDate(e.value.period));async function F(){let d={objectType:"PROPERTY",object_ids:[e.value.objectId]};await i.findPropertyReviews(d)}async function z(){var u;let d={objectType:"PROPERTY",objectIds:[(u=e.value)==null?void 0:u.objectId]};await i.findPropertyImages(d)}function U(){x.$reset(),O.push("/")}return J(()=>{F(),z()}),K(()=>{localStorage.removeItem("payment")}),(d,u)=>(m(),b(et,null,{default:a(()=>[t("div",at,[s(h,{flat:"",class:"col-xl-12 col-lg-7 col-md-12 col-sm-12 col-xs-12"},{default:a(()=>{var P,S,D,Q;return[rt,s(B),lt,s(h,{flat:"",class:"col-xl-12 col-lg-4 col-md-12 col-sm-12 col-xs-12 cursor-pointer",onClick:u[0]||(u[0]=_=>v(O).push(`/listing-stay-details/${c.value.id}`))},{default:a(()=>[s(w,{horizontal:""},{default:a(()=>[s(w,{class:"col-3"},{default:a(()=>[s(V,{height:"140px",class:"rounded-borders",src:c.value.images.filter(_=>_.coverImage===!0)[0].uri},null,8,["src"])]),_:1}),s(w,{class:"q-pt-xs"},{default:a(()=>{var _,C,R;return[t("div",nt,o((_=c.value)==null?void 0:_.propertyType),1),t("div",it,o((C=c.value)==null?void 0:C.name),1),t("div",ct,[(m(!0),q(X,null,L((R=c.value)==null?void 0:R.features,n=>(m(),q("div",null,[n.feature=="FEATURE_BED_ROOMS"||n.feature=="FEATURE_BATH_ROOMS"?(m(),q("div",dt,[s(T,{name:v(l).featureIcon(n.feature),class:"q-my-md",size:"10px"},null,8,["name"]),p(" "+o(n.value)+" "+o(n.feature=="FEATURE_BED_ROOMS"?"beds":"baths"),1)])):W("",!0)]))),256))]),s(B,{class:"q-my-md",style:{width:"20%"}}),t("div",ut,[j.value?(m(),b(T,{key:1,name:"star_border",size:"20px"})):(m(),b(tt,{key:0,"checked-icon":"star","unchecked-icon":"star","indeterminate-icon":"star",color:"warning","model-value":""},{default:a(()=>{var n,k,E,M;return[p(o((k=I.value[(n=c.value)==null?void 0:n.id])==null?void 0:k.rating)+" ",1),t("span",mt,"("+o((M=I.value[(E=c.value)==null?void 0:E.id])==null?void 0:M.reviewCount)+")",1)]}),_:1})),p(" None ")])]}),_:1})]),_:1})]),_:1}),t("div",vt,[s(h,{bordered:"",flat:"",class:"col-xl-12 col-lg-6 col-md-12 col-sm-12 col-xs-12 q-px-sm"},{default:a(()=>[t("div",_t,[t("div",pt,[s(y,{icon:"calendar_today",label:"Date",color:"white"})])]),t("div",null,[s(y,{color:"white",class:"text-weight-bold text-h6 q-ml-md"},{default:a(()=>[p(o(A.value)+" ",1)]),_:1})])]),_:1}),s(h,{bordered:"",flat:"",class:"col-xl-12 col-lg-6 col-md-12 col-sm-12 col-xs-12 q-px-sm"},{default:a(()=>[t("div",ft,[s(y,{icon:"family_restroom",label:"Guests",color:"white"})]),s(y,{class:"text-weight-bold text-h6 bg-white"},{default:a(()=>[p(o(g.value-e.value.noOfInfants>1?`${g.value-e.value.noOfInfants} Guests`:`${g.value-e.value.noOfInfants} Guest`)+" "+o(e.value.noOfInfants>1?`${e.value.noOfInfants} Infants`:`${e.value.noOfInfants} Infant`),1)]),_:1})]),_:1})]),ht,t("div",yt,[t("div",xt,[t("div",gt,[wt,s(f),t("div",bt,o(e.value.referenceNo),1)]),t("div",qt,[Ot,s(f),t("div",It,o(v(l).formatStartCurrentDate()),1)]),t("div",Pt,[St,s(f),t("div",Dt,o(e.value.period.hasOwnProperty("from")?v(l).formatStartDate(e.value.period.from):v(l).formatStartDate(e.value.period)),1)]),t("div",Qt,[Ct,s(f),t("div",Rt,o((P=e.value)==null?void 0:P.amount.currencyCode)+" "+o(v(l).commaSeparate(((S=e.value)==null?void 0:S.amount.units)*N.value+e.value.charge.units+e.value.vatAmount.units))+"."+o((D=e.value)==null?void 0:D.amount.nanos),1)]),t("div",kt,[Et,s(f),t("div",Mt,o(((Q=e.value)==null?void 0:Q.paymentMethod)!="MobileMoney"?"Card Payment":"Mobile Money"),1)])])]),t("div",Bt,[s(Z,{"no-caps":"",rounded:"",color:"indigo-10",label:"Explore more stays",onClick:U})])]}),_:1})])]),_:1}))}});export{Xt as default};
