import{Q as M}from"./QSeparator.a8629110.js";import{Q as G}from"./use-dark.ad276966.js";import{Q as b}from"./QCardSection.4ae97256.js";import{d as U,u as V,af as J,c as r,o as Y,p as H,y as m,z as w,A as a,B as t,f as s,I as o,E as q,G as K,K as B,J as i,C as _,D as L,F as W,Q as X}from"./index.7946e59e.js";import{Q as Z}from"./QCheckbox.907f0d66.js";import{Q as h}from"./QCard.924445d0.js";import{Q as y}from"./QChip.94127689.js";import{Q as v}from"./QSpace.5bfa4d1e.js";import{Q as tt}from"./QPage.1d57e43e.js";import{u as et}from"./payment.aa3e46aa.js";import{m as T}from"./moment.18ddbc39.js";import{u as st}from"./property.7bf9bb4b.js";import"./use-checkbox.e60cbcce.js";import"./use-form.5abd52b8.js";const ot={class:"row justify-center q-mt-md"},at=t("div",{class:"row"},[t("h1",{class:"text-weight-bold text-h3"}," Congratulation \u{1F389} ")],-1),rt=t("div",{class:"row"},[t("h1",{class:"text-weight-bold text-h5"}," Your booking ")],-1),lt={class:"text-h7 q-mt-sm q-mb-xs text-grey"},nt={class:"text-h7 q-mt-sm q-mb-xs"},ct={class:"row q-mt-sm"},it={key:0,class:"q-mr-sm"},dt={class:"row"},ut={class:"text-grey"},mt={class:"row q-mt-md"},_t={class:"row q-mt-md"},vt={class:"text-grey"},ft={class:"row q-mt-md"},pt=t("div",{class:"row q-mt-md"},[t("h1",{class:"text-weight-bold text-h5"}," Booking detail ")],-1),ht={class:"row q-mt-md q-mb-sm"},yt={class:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"},xt={class:"row q-py-sm"},gt=t("div",{class:"text-subtitle1"}," Booking code ",-1),bt={class:"text-subtitle1"},wt={class:"row q-py-sm"},qt=t("div",{class:"text-subtitle1"}," Payment Date ",-1),It={class:"text-subtitle1"},Ot={class:"row q-py-sm"},Pt=t("div",{class:"text-subtitle1"}," Start Date ",-1),St={class:"text-subtitle1"},Qt={class:"row q-py-sm"},Dt=t("div",{class:"text-subtitle1"}," Total ",-1),Rt={class:"text-subtitle1"},Ct={class:"row q-py-sm"},Et=t("div",{class:"text-subtitle1"}," Payment method ",-1),kt={class:"text-subtitle1"},Mt={class:"q-mt-lg"},Lt=U({__name:"pay-done",setup(Bt){const N=V(),n=J(),x=et(),c=st(),e=r(()=>x.getPaymentDetails),j=r(()=>{if(e.value.period.from!=null){const u=T(e.value.period.from);return T(e.value.period.to).diff(u,"months")+1}else return 0});r(()=>c.getPropertyReviews);const g=r(()=>e.value.noOfInfants+e.value.noOfChildren+e.value.noOfAdults),d=r(()=>c.getProperty);r(()=>c.getImages),r(()=>x.getResponse);const I=r(()=>c.getPropertyReview2),A=r(()=>JSON.stringify(c.getPropertyReview2)===JSON.stringify({}));async function F(){let u={objectType:"PROPERTY",object_ids:[e.value.objectId]};await c.findPropertyReviews(u)}async function $(){var f;let u={objectType:"PROPERTY",objectIds:[(f=e.value)==null?void 0:f.objectId]};await c.findPropertyImages(u)}function z(){x.$reset(),N.push("/")}return Y(()=>{F(),$()}),H(()=>{localStorage.removeItem("payment")}),(u,f)=>(m(),w(tt,null,{default:a(()=>[t("div",ot,[s(h,{flat:"",class:"col-xl-12 col-lg-7 col-md-12 col-sm-12 col-xs-12"},{default:a(()=>{var O,P,S,Q;return[at,s(M),rt,s(h,{flat:"",class:"col-xl-12 col-lg-4 col-md-12 col-sm-12 col-xs-12"},{default:a(()=>[s(b,{horizontal:""},{default:a(()=>[s(b,{class:"col-3"},{default:a(()=>[s(G,{height:"140px",class:"rounded-borders",src:d.value.images.filter(p=>p.coverImage===!0)[0].uri},null,8,["src"])]),_:1}),s(b,{class:"q-pt-xs"},{default:a(()=>{var p,D,R;return[t("div",lt,o((p=d.value)==null?void 0:p.propertyType),1),t("div",nt,o((D=d.value)==null?void 0:D.name),1),t("div",ct,[(m(!0),q(W,null,K((R=d.value)==null?void 0:R.features,l=>(m(),q("div",null,[l.feature=="FEATURE_BED_ROOMS"||l.feature=="FEATURE_BATH_ROOMS"?(m(),q("div",it,[s(B,{name:i(n).featureIcon(l.feature),class:"q-my-md",size:"10px"},null,8,["name"]),_(" "+o(l.value)+" "+o(l.feature=="FEATURE_BED_ROOMS"?"beds":"baths"),1)])):L("",!0)]))),256))]),s(M,{class:"q-my-md",style:{width:"20%"}}),t("div",dt,[A.value?(m(),w(B,{key:1,name:"star_border",size:"20px"})):(m(),w(Z,{key:0,"checked-icon":"star","unchecked-icon":"star","indeterminate-icon":"star",color:"warning","model-value":""},{default:a(()=>{var l,C,E,k;return[_(o((C=I.value[(l=d.value)==null?void 0:l.id])==null?void 0:C.rating)+" ",1),t("span",ut,"("+o((k=I.value[(E=d.value)==null?void 0:E.id])==null?void 0:k.reviewCount)+")",1)]}),_:1})),_(" None ")])]}),_:1})]),_:1})]),_:1}),t("div",mt,[s(h,{bordered:"",flat:"",class:"col-xl-12 col-lg-6 col-md-12 col-sm-12 col-xs-12 q-px-sm"},{default:a(()=>[t("div",_t,[t("div",vt,[s(y,{icon:"calendar_today",label:"Date",color:"white"})])]),t("div",null,[s(y,{color:"white",class:"text-weight-bold text-h6 q-ml-md"},{default:a(()=>[_(o(i(n).formatDateMonthDay(e.value.period.from))+" - "+o(i(n).formatDateMonthDay(e.value.period.to)),1)]),_:1})])]),_:1}),s(h,{bordered:"",flat:"",class:"col-xl-12 col-lg-6 col-md-12 col-sm-12 col-xs-12 q-px-sm"},{default:a(()=>[t("div",ft,[s(y,{icon:"family_restroom",label:"Guests",color:"white"})]),s(y,{class:"text-weight-bold text-h6 bg-white"},{default:a(()=>[_(o(g.value-e.value.noOfInfants>1?`${g.value-e.value.noOfInfants} Guests`:`${g.value-e.value.noOfInfants} Guest`)+" "+o(e.value.noOfInfants>1?`${e.value.noOfInfants} Infants`:`${e.value.noOfInfants} Infant`),1)]),_:1})]),_:1})]),pt,t("div",ht,[t("div",yt,[t("div",xt,[gt,s(v),t("div",bt,o(e.value.referenceNo),1)]),t("div",wt,[qt,s(v),t("div",It,o(i(n).formatStartCurrentDate()),1)]),t("div",Ot,[Pt,s(v),t("div",St,o(e.value.period.hasOwnProperty("from")?i(n).formatStartDate(e.value.period.from):i(n).formatStartDate(e.value.period)),1)]),t("div",Qt,[Dt,s(v),t("div",Rt,o((O=e.value)==null?void 0:O.amount.currencyCode)+" "+o(i(n).commaSeparate(((P=e.value)==null?void 0:P.amount.units)*j.value+e.value.charge.units+e.value.vatAmount.units))+"."+o((S=e.value)==null?void 0:S.amount.nanos),1)]),t("div",Ct,[Et,s(v),t("div",kt,o(((Q=e.value)==null?void 0:Q.paymentMethod)!="MobileMoney"?"Card Payment":"Mobile Money"),1)])])]),t("div",Mt,[s(X,{"no-caps":"",rounded:"",color:"indigo-10",label:"Explore more stays",onClick:z})])]}),_:1})])]),_:1}))}});export{Lt as default};
