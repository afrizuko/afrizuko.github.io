import{k as n,a8 as l,a7 as s,a9 as t}from"./index.fed07d25.js";const r=n(),c=l("property",{state:()=>{var e;return{policies:s([{policyType:"CANCELLATION_POLICY",description:""},{policyType:"SPECIAL_NOTE",description:""},{policyType:"GENERAL_AMENITIES",description:"Allow"},{policyType:"PARTYING",description:"Allow"},{policyType:"PETS",description:"Allow"},{policyType:"COOKING",description:"Allow"},{policyType:"CHECKIN_TIME",description:""},{policyType:"CHECKOUT_TIME",description:""}]),discount:s({discountType:"",value:{currencyCode:"",units:null,nanos:0},objectType:"PROPERTY",objectId:"",validFrom:"",validTo:""}),termsAndConditions:s([]),images:s([]),reviewerAvatars:s([]),searchResultsImages:s([]),rating:s([]),properties:s([]),property:s({id:"",name:"",chargeCycle:"MONTH",rentalType:"",propertyType:"",description:"",availabilityDate:null,minMonths:1,maxMonths:0,kind:"",status:null,agreementContent:"",state:"",fileType:"FILE_TYPE_FILE",host:{id:(e=r.currentUser())==null?void 0:e.aud[0]},coordinates:{longitude:0,latitude:0},address:{id:null,country:"",region:"",street:"",subCounty:"",entranceNumber:"",village:"",district:null,postalCode:""},unitPrice:{currencyCode:"",units:null,nanos:null},securityAmount:{currencyCode:"",units:null,nanos:null},features:[{feature:"FEATURE_SQUARE_METERS",value:0},{feature:"FEATURE_BED_ROOMS",value:0},{feature:"FEATURE_BATH_ROOMS",value:0},{feature:"FEATURE_KITCHENS",value:0},{feature:"FEATURE_FLOORS",value:1},{feature:"FEATURE_NUM_GUESTS",value:1}],amenities:[{amenity:"WIFI",value:!1},{amenity:"ELEVATOR",value:!1},{amenity:"AIR_CONDITIONING",value:!1},{amenity:"INDOOR_FIRE_PLACE",value:!1},{amenity:"DEDICATED_WORKSPACE",value:!1}]}),featuredProperties:s([]),reviews:s({}),review2:s({}),loading:!1,isEditProperty:!1,agreementContent:s(""),response:s({code:null,message:null,data:null,nextPageToken:"",total:5})}},getters:{getReviewerAvatars:e=>e.reviewerAvatars,getProperties:e=>e.properties,getProperty:e=>e.property,getPropertyRating:e=>e.rating,getPropertyReviews:e=>e.reviews,getPropertyReview2:e=>e.review2,getImages:e=>e.images,getPolicies:e=>e.policies,getFeaturedProperties:e=>e.featuredProperties,getResponse:e=>e.response,getDiscount:e=>e.discount,isLoading:e=>e.loading,isEditMode:e=>e.isEditProperty,getTermsAndConditions:e=>e.termsAndConditions},actions:{async submitProperty(e){console.log(JSON.stringify("================submitProperty================")),console.log(JSON.stringify(e)),this.loading=!0;try{const o=await t.post("/property",e);if(console.log("======property Response======="),console.log(o.data),o.data!=null){let i="",a="";e.fileType=="FILE_TYPE_WRITTEN"&&(i=e.fileType,a=e.agreementContent),this.property=o.data,e.fileType=="FILE_TYPE_WRITTEN"&&(this.property.fileType=i,this.property.agreementContent=a),this.response={code:0,message:"success",data:o.data}}}catch(o){console.error(o)}finally{this.loading=!1}},async updateProperty(e){console.log(JSON.stringify("================updateProperty================")),console.log(JSON.stringify(e)),this.loading=!0;try{const o=await t.patch("/property",e);console.log("======property Response======="),console.log(o.data.address.id),console.log(JSON.stringify(o.data)),o.status==200&&(this.property=o.data,await this.findPropertyAddressInfo({ids:[o.data.address.id]}),this.response={code:0,message:"Updated Successfully",data:o.data})}catch(o){console.error(o)}finally{this.loading=!1}},async findPropertyDetails(e){console.log("=========*****findPropertyDetail******s==========="),console.log(JSON.stringify(e)),this.loading=!0,await t.post("/property/search",e).then(o=>{this.response=o.data,o.data.properties!=null&&(this.properties=o.data.properties)}).catch(o=>{console.log(o)}).finally(()=>{this.loading=!1})},async findPropertyReviews(e){console.log(JSON.stringify(e)),this.loading=!0,await t.post("/reviews/search",e).then(o=>{console.log(o.data.reviewItems),o.data.reviewItems!=null&&(this.reviews=o.data.reviewItems)}).catch(o=>{console.log(o)}).finally(()=>{this.loading=!1})},async findPropertyRatings(e){console.log(JSON.stringify("================/reviews/search================")),console.log(JSON.stringify(e)),this.loading=!0;try{const o=await t.post("/reviews/search",e);console.log("======reviews======="),console.log(o.data.reviews),o.data.reviews!==void 0&&(this.rating=o.data.reviews)}catch(o){console.error(o)}finally{this.loading=!1}return[]},async findPropertyImages(e){console.log("================request findPropertyImages==================="),console.log(JSON.stringify(e)),this.loading=!0,await t.post("/files/search",e).then(o=>{console.log("================findPropertyImages==================="),console.log(o.data.objectIds),JSON.stringify(o.data.objectIds)!==JSON.stringify({})?this.images=o.data.objectIds:this.images=[]}).catch(o=>{console.log(o)}).finally(()=>{this.loading=!1})},async findReviewerAvatars(e){console.log("================ findReviewerAvatars==================="),console.log(JSON.stringify(e)),this.loading=!0,await t.post("/files/search",e).then(o=>{console.log("================findReviewerAvatars==================="),console.log(o.data.objectIds),o.data.objectIds!=null&&(this.reviewerAvatars=o.data.objectIds)}).catch(o=>{console.log(o)}).finally(()=>{this.loading=!1})},async findPropertyPolicy(e){console.log("================ findPropertyPolicy==================="),console.log(JSON.stringify(e)),this.loading=!0,await t.post("/policies/search",e).then(o=>{console.log(o.data.policies),o.data.policies!=null&&(this.policies=o.data.policies)}).catch(o=>{console.log(o)}).finally(()=>{this.loading=!1})},async findPropertyRating(e,o){console.log("======== request findPropertyRatingReviews========"),console.log(JSON.stringify(e)),this.loading=!0,await t.post("/reviews/search",e).then(i=>{console.log("========findPropertyRatingReviews========"),console.log(i.data.reviews),i.data.reviews&&(o===1?this.reviews=i.data.reviews:this.review2=i.data.reviews)}).catch(i=>{console.log(i)}).finally(()=>{this.loading=!1})},async submitUserReview(e){console.log(JSON.stringify("================submitUserReview================")),console.log(JSON.stringify(e)),this.loading=!0;try{const o=await t.post("/reviews",e);console.log("======Comment Response======="),console.log(o.status),o.status==200&&(this.response={code:0,message:"Your review has been submitted successfully",data:null})}catch(o){console.error(o)}finally{this.loading=!1}return[]},async findSingleProperty(e){console.log("=========*****findSingleProperty******s==========="),console.log(JSON.stringify(e)),this.loading=!0,await t.post("/property/search",e).then(o=>{console.log("=========response findSingleProperty==========="),console.log(o.data.properties),o.data.properties!=null&&(this.property=o.data.properties[0])}).catch(o=>{console.log(o)}).finally(()=>{this.loading=!1})},async findTermsAndConditions(e){console.log("================request findTermsAndConditions==================="),console.log(JSON.stringify(e)),this.loading=!0,await t.post("/files/search",e).then(o=>{var i;console.log("================findTermsAndConditions==================="),console.log(o.data.objectIds),JSON.stringify(o.data.objectIds)!==JSON.stringify({})&&(this.termsAndConditions=o.data.objectIds[e.objectIds].files,console.log("99999999999999999999999"),console.log(this.termsAndConditions),o.data.objectIds[e.objectIds].files.length==2?(this.property.fileType=o.data.objectIds[e.objectIds].files[1].fileType,console.log(o.data.objectIds[e.objectIds].files[1].uri),t.get(o.data.objectIds[e.objectIds].files[1].uri).then(a=>{console.log("================findTermsAndConditionsText==================="),console.log(a),this.property.agreementContent=a.data}).catch(a=>{console.log(a)}).finally(()=>{this.loading=!1})):this.property.fileType=(i=o.data.objectIds[e.objectIds].files[0])==null?void 0:i.fileType)}).catch(o=>{console.log(o)}).finally(()=>{this.loading=!1})},async findPropertyAddressInfo(e){console.log("=========*****findPropertyAddressInfo******s==========="),console.log(JSON.stringify(e)),this.loading=!0,await t.post("/address/search",e).then(o=>{console.log(o.data.addresses),o.data.addresses!=null&&(this.property.address=o.data.addresses[0])}).catch(o=>{console.log(o)}).finally(()=>{this.loading=!1})},async updatePropertyAddress(e){console.log(JSON.stringify("================updatePropertyAddress================")),console.log(JSON.stringify(e)),this.loading=!0;try{const o=await t.patch("/address",e);console.log("======updatePropertyAddress Response======="),console.log(JSON.stringify(o.data)),o.status==200&&(this.response={code:0,message:"Updated Successfully",data:o.data})}catch(o){console.error(o)}finally{this.loading=!1}},async updatePropertyDiscount(e){console.log(JSON.stringify("================updatePropertyDiscount================")),console.log(JSON.stringify(e)),this.loading=!0;try{const o=await t.patch("/discounts",e);console.log("======discount Response======="),console.log(JSON.stringify(o.data)),o.status==200&&(this.discount=o.data)}catch(o){console.error(o)}finally{this.loading=!1}},async updatePropertyPolicies(e){console.log(JSON.stringify("================updateProperty================")),console.log(JSON.stringify(e)),this.loading=!0;try{const o=await t.patch("/policies",e);console.log("======policies Response======="),console.log(JSON.stringify(o.data)),o.status==200&&(this.policies=o.data)}catch(o){console.error(o)}finally{this.loading=!1}},async setProperty(e){this.property=e},async setDiscount(e){e!=null&&(this.discount=e)},async setOperationMode(e){this.isEditProperty=e},async setPolicies(e){e!=null&&(this.policies=e)},async setPropertyImages(e){console.log("=========setting images============"),console.log(e),e!=null&&(this.images=e)},async setPropertyLocation(e,o){this.property.coordinates.latitude=e,this.property.coordinates.longitude=o}},persist:!0});export{c as u};