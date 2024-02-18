import{Q as M}from"./QSeparator.7cc0f66b.js";import{Q as U}from"./use-dark.5a00adcc.js";import{Q as w}from"./QCardSection.8230dc74.js";import{d as V,u as J,af as Y,c as r,o as H,p as K,y as u,z as b,A as a,B as t,f as s,I as o,E as q,G as L,K as B,J as m,C as _,D as W,F as X,Q as Z}from"./index.96ab6253.js";import{Q as tt}from"./QCheckbox.6f6f6740.js";import{Q as h}from"./QCard.23a727a3.js";import{Q as y}from"./QChip.c8e9e087.js";import{Q as v}from"./QSpace.c1456c1d.js";import{Q as et}from"./QPage.31c103c0.js";import{u as st}from"./payment.bca25a6c.js";import{m as T}from"./moment.18ddbc39.js";import{u as ot}from"./property.998a257c.js";import"./use-checkbox.4b7c4899.js";import"./use-form.37e851d9.js";const at={class:"row justify-center q-mt-md"},rt=t("div",{class:"row"},[t("h1",{class:"text-weight-bold text-h3"}," Congratulation \u{1F389} ")],-1),lt=t("div",{class:"row"},[t("h1",{class:"text-weight-bold text-h5"}," Your booking ")],-1),nt={class:"text-h7 q-mt-sm q-mb-xs text-grey"},ct={class:"text-h7 q-mt-sm q-mb-xs"},it={class:"row q-mt-sm"},dt={key:0,class:"q-mr-sm"},ut={class:"row"},mt={class:"text-grey"},_t={class:"row q-mt-md"},vt={class:"row q-mt-md"},ft={class:"text-grey"},pt={class:"row q-mt-md"},ht=t("div",{class:"row q-mt-md"},[t("h1",{class:"text-weight-bold text-h5"}," Booking detail ")],-1),yt={class:"row q-mt-md q-mb-sm"},xt={class:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"},gt={class:"row q-py-sm"},wt=t("div",{class:"text-subtitle1"}," Booking code ",-1),bt={class:"text-subtitle1"},qt={class:"row q-py-sm"},It=t("div",{class:"text-subtitle1"}," Payment Date ",-1),Ot={class:"text-subtitle1"},Pt={class:"row q-py-sm"},St=t("div",{class:"text-subtitle1"}," Start Date ",-1),Dt={class:"text-subtitle1"},Qt={class:"row q-py-sm"},Rt=t("div",{class:"text-subtitle1"}," Total ",-1),Ct={class:"text-subtitle1"},Et={class:"row q-py-sm"},kt=t("div",{class:"text-subtitle1"}," Payment method ",-1),Mt={class:"text-subtitle1"},Bt={class:"q-mt-lg"},Wt=V({__name:"pay-done",setup(Tt){const N=J(),l=Y(),x=st(),c=ot(),e=r(()=>x.getPaymentDetails),j=r(()=>{if(e.value.period.from!=null){const d=T(e.value.period.from);return T(e.value.period.to).diff(d,"months")+1}else return 0});r(()=>c.getPropertyReviews);const g=r(()=>e.value.noOfInfants+e.value.noOfChildren+e.value.noOfAdults),i=r(()=>c.getProperty);r(()=>c.getImages),r(()=>x.getResponse);const I=r(()=>c.getPropertyReview2),A=r(()=>JSON.stringify(c.getPropertyReview2)===JSON.stringify({})),$=r(()=>e.value.period.hasOwnProperty("from")?`${l.formatDateMonthDay(e.value.period.from)} -
    ${l.formatDateMonthDay(e.value.period.to)}`:l.formatStartDate(e.value.period));async function F(){let d={objectType:"PROPERTY",object_ids:[e.value.objectId]};await c.findPropertyReviews(d)}async function z(){var f;let d={objectType:"PROPERTY",objectIds:[(f=e.value)==null?void 0:f.objectId]};await c.findPropertyImages(d)}function G(){x.$reset(),N.push("/")}return H(()=>{F(),z()}),K(()=>{localStorage.removeItem("payment")}),(d,f)=>(u(),b(et,null,{default:a(()=>[t("div",at,[s(h,{flat:"",class:"col-xl-12 col-lg-7 col-md-12 col-sm-12 col-xs-12"},{default:a(()=>{var O,P,S,D;return[rt,s(M),lt,s(h,{flat:"",class:"col-xl-12 col-lg-4 col-md-12 col-sm-12 col-xs-12"},{default:a(()=>[s(w,{horizontal:""},{default:a(()=>[s(w,{class:"col-3"},{default:a(()=>[s(U,{height:"140px",class:"rounded-borders",src:i.value.images.filter(p=>p.coverImage===!0)[0].uri},null,8,["src"])]),_:1}),s(w,{class:"q-pt-xs"},{default:a(()=>{var p,Q,R;return[t("div",nt,o((p=i.value)==null?void 0:p.propertyType),1),t("div",ct,o((Q=i.value)==null?void 0:Q.name),1),t("div",it,[(u(!0),q(X,null,L((R=i.value)==null?void 0:R.features,n=>(u(),q("div",null,[n.feature=="FEATURE_BED_ROOMS"||n.feature=="FEATURE_BATH_ROOMS"?(u(),q("div",dt,[s(B,{name:m(l).featureIcon(n.feature),class:"q-my-md",size:"10px"},null,8,["name"]),_(" "+o(n.value)+" "+o(n.feature=="FEATURE_BED_ROOMS"?"beds":"baths"),1)])):W("",!0)]))),256))]),s(M,{class:"q-my-md",style:{width:"20%"}}),t("div",ut,[A.value?(u(),b(B,{key:1,name:"star_border",size:"20px"})):(u(),b(tt,{key:0,"checked-icon":"star","unchecked-icon":"star","indeterminate-icon":"star",color:"warning","model-value":""},{default:a(()=>{var n,C,E,k;return[_(o((C=I.value[(n=i.value)==null?void 0:n.id])==null?void 0:C.rating)+" ",1),t("span",mt,"("+o((k=I.value[(E=i.value)==null?void 0:E.id])==null?void 0:k.reviewCount)+")",1)]}),_:1})),_(" None ")])]}),_:1})]),_:1})]),_:1}),t("div",_t,[s(h,{bordered:"",flat:"",class:"col-xl-12 col-lg-6 col-md-12 col-sm-12 col-xs-12 q-px-sm"},{default:a(()=>[t("div",vt,[t("div",ft,[s(y,{icon:"calendar_today",label:"Date",color:"white"})])]),t("div",null,[s(y,{color:"white",class:"text-weight-bold text-h6 q-ml-md"},{default:a(()=>[_(o($.value)+" ",1)]),_:1})])]),_:1}),s(h,{bordered:"",flat:"",class:"col-xl-12 col-lg-6 col-md-12 col-sm-12 col-xs-12 q-px-sm"},{default:a(()=>[t("div",pt,[s(y,{icon:"family_restroom",label:"Guests",color:"white"})]),s(y,{class:"text-weight-bold text-h6 bg-white"},{default:a(()=>[_(o(g.value-e.value.noOfInfants>1?`${g.value-e.value.noOfInfants} Guests`:`${g.value-e.value.noOfInfants} Guest`)+" "+o(e.value.noOfInfants>1?`${e.value.noOfInfants} Infants`:`${e.value.noOfInfants} Infant`),1)]),_:1})]),_:1})]),ht,t("div",yt,[t("div",xt,[t("div",gt,[wt,s(v),t("div",bt,o(e.value.referenceNo),1)]),t("div",qt,[It,s(v),t("div",Ot,o(m(l).formatStartCurrentDate()),1)]),t("div",Pt,[St,s(v),t("div",Dt,o(e.value.period.hasOwnProperty("from")?m(l).formatStartDate(e.value.period.from):m(l).formatStartDate(e.value.period)),1)]),t("div",Qt,[Rt,s(v),t("div",Ct,o((O=e.value)==null?void 0:O.amount.currencyCode)+" "+o(m(l).commaSeparate(((P=e.value)==null?void 0:P.amount.units)*j.value+e.value.charge.units+e.value.vatAmount.units))+"."+o((S=e.value)==null?void 0:S.amount.nanos),1)]),t("div",Et,[kt,s(v),t("div",Mt,o(((D=e.value)==null?void 0:D.paymentMethod)!="MobileMoney"?"Card Payment":"Mobile Money"),1)])])]),t("div",Bt,[s(Z,{"no-caps":"",rounded:"",color:"indigo-10",label:"Explore more stays",onClick:G})])]}),_:1})])]),_:1}))}});export{Wt as default};
