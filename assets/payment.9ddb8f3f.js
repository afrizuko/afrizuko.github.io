import{a8 as o,a7 as l,a9 as a}from"./index.c9b9189a.js";const y=o("payment",{state:()=>({paymentDetails:l({period:{from:null,to:null},amount:{currencyCode:null,units:0,nanos:0},charge:{currencyCode:null,units:0,nanos:0},vatAmount:{currencyCode:null,units:0,nanos:0},description:null,objectType:null,objectId:null,noOfAdults:0,noOfChildren:0,noOfInfants:0,cardPayment:{cardNumber:null,cardHolder:null,cvc:null,expiryDate:null,issuer:"VISA"},mobilePayment:{phone:null,issuer:null},currency:null,chargeCycle:null,unitPrice:null,paymentMethod:"MobileMoney",referenceNo:null,userId:null}),loading:!1,response:l({code:null,message:null,data:null})}),getters:{getPaymentDetails:e=>e.paymentDetails,getResponse:e=>e.response,isLoading:e=>e.loading},actions:{clearDateData(){this.paymentDetails.period={from:null,to:null}},clearGuestData(){this.paymentDetails.noOfChildren=0,this.paymentDetails.noOfAdults=0,this.paymentDetails.noOfInfants=0},clearFormData(e){e!="DebitCard"?(this.paymentDetails.cardPayment.cardNumber=null,this.paymentDetails.cardPayment.expiryDate=null,this.paymentDetails.cardPayment.cvc=null,this.paymentDetails.cardPayment.cardHolder=null):(this.paymentDetails.mobilePayment.phone=null,this.paymentDetails.mobilePayment.telecom=null),this.paymentDetails.description=null},repopulatePayment(e){this.paymentDetails=e},noOfAdults(e){this.paymentDetails.noOfAdults!=null?e?this.paymentDetails.noOfAdults++:this.paymentDetails.noOfAdults>0&&this.paymentDetails.noOfAdults--:this.paymentDetails.noOfAdults=1},noOfChildren(e){this.paymentDetails.noOfChildren!=null?e?this.paymentDetails.noOfChildren++:this.paymentDetails.noOfChildren>0&&this.paymentDetails.noOfChildren--:this.paymentDetails.noOfChildren=1},noOfInfants(e){this.paymentDetails.noOfInfants!=null?e?this.paymentDetails.noOfInfants++:this.paymentDetails.noOfInfants>0&&this.paymentDetails.noOfInfants--:this.paymentDetails.noOfInfants=1},setPaymentAdditionalDetails(e,n,t,s,i){this.paymentDetails.currency=e,this.paymentDetails.chargeCycle=n,this.paymentDetails.amount=t,this.paymentDetails.objectType=s,this.paymentDetails.objectId=i},async reserveProperty(e,n){console.log(JSON.stringify(n)),this.loading=!0,await a.post(`/property/${e}/reserve`,n).then(t=>{console.log("========/reserveProperty========="),console.log(t.data.reservationId),this.response={code:t.status,message:null,data:t.data.reservationId}}).catch(t=>{console.log(t.response),this.response={code:t.response.status,message:null,data:null}}).finally(()=>{this.loading=!1})},async rentProperty(e,n){console.log(JSON.stringify(n)),this.loading=!0,await a.post(`/property/${e}/rent`,n).then(t=>{console.log("========/rentProperty========="),console.log(t.data),this.response={code:t.status,message:null,data:null}}).catch(t=>{console.log(t.response),this.response={code:t.response.status,message:null,data:null}}).finally(()=>{this.loading=!1})},async makePayment(e){var n;e.paymentMethod=="MobileMoney"&&(e.mobilePayment.phone=String((n=e.mobilePayment.phone)==null?void 0:n.replace(/[()\s\-]/g,""))),console.log(JSON.stringify(e)),this.loading=!0,await a.post("/payments",e).then(t=>{console.log("========/payment========="),console.log(t.data),this.paymentDetails.referenceNo=t.data.id,this.response={code:t.status,message:null,data:t.data.id}}).catch(t=>{console.log(t.response),this.response={code:t.response.status,message:null,data:null}}).finally(()=>{this.loading=!1})}},persist:!0});export{y as u};
