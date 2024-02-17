import{ad as i,ac as s,ae as a}from"./index.7946e59e.js";const l=i("home",{state:()=>({typesOfStay:s([]),propertyResponse:s({properties:[],nextPageToken:""}),properties:s([]),searchResultsImages:s([]),featuredImages:s([]),featuredProperties:s([]),loading:!1,response:s({code:null,message:null,data:null}),discounts:s({discounts:{},nextPageToken:null}),showTopFilterDialog:!1}),getters:{getShowTopFilterDialog:e=>e.showTopFilterDialog,getProperties:e=>e.properties,getPropertyResp:e=>e.propertyResponse,getTypesOfStay:e=>e.typesOfStay,getFeaturedProperties:e=>e.featuredProperties,getSearchResultsImages:e=>e.searchResultsImages,getFeaturedImages:e=>e.featuredImages,getResponse:e=>e.response,isLoading:e=>e.loading,getDiscounts:e=>e.discounts},actions:{async findProperty(e){console.log(JSON.stringify(e)),this.loading=!0,await a.post("/property/search",e).then(t=>{console.log("=================findProperty=================="),console.log(JSON.stringify(t.data)),this.propertyResponse=t.data}).catch(t=>{console.log(t)}).finally(()=>{this.loading=!1})},async findPropertyDiscount(e){console.log(JSON.stringify(e)),this.loading=!0,await a.post("/discounts/search",e).then(t=>{console.log("=================findPropertyDiscount=================="),console.log(t.data),this.discounts=t.data.discounts}).catch(t=>{console.log(t)}).finally(()=>{this.loading=!1})},async filterProperty(e,t){console.log(JSON.stringify(e)),this.loading=!0,await a.post("/property/search",e).then(o=>{console.log("==========================property/search=============================="),console.log(JSON.stringify(o.data)),o.data.properties!=null&&t!="FEATURED"?(this.propertyResponse=o.data,this.properties=o.data.properties):this.featuredProperties=o.data.properties}).catch(o=>{console.log(o)}).finally(()=>{this.loading=!1})},async findPropertyByTypeOfStay(e){console.log(JSON.stringify(e)),this.loading=!0,await a.post("/property/search",e).then(t=>{t.data.properties!=null&&(this.typesOfStay=t.data.properties)}).catch(t=>{console.log(t)}).finally(()=>{this.loading=!1})},async findFilteredPropertyImages(e,t){console.log("================ request findFilteredPropertyImages==================="),console.log(JSON.stringify(e)),this.loading=!0,await a.post("/files/search",e).then(o=>{console.log("================findFilteredPropertyImages==================="),console.log(o.data.objectIds),o.data.objectIds!=null&&t!="FEATURED"?(console.log("setting featured"),this.searchResultsImages=o.data.objectIds):this.featuredImages=o.data.objectIds}).catch(o=>{console.log(o)}).finally(()=>{this.loading=!1})},setShowTopFilterDialog(e){this.showTopFilterDialog=e}}});export{l as u};
