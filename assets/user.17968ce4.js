import{a8 as e,a7 as t,a9 as o}from"./index.d15ae335.js";const i=e("user",{state:()=>({tenants:t([]),hosts:t([]),rating:t([]),avatar:t([]),loading:!1,response:t({code:null,message:null,data:null})}),getters:{getUserRating:s=>s.rating,getAvatar:s=>s.avatar,getHosts:s=>s.hosts,getTenants:s=>s.tenants,getResponse:s=>s.response,isLoading:s=>s.loading},actions:{async findUserRatings(s){console.log(JSON.stringify("================findUserRatings================")),console.log(JSON.stringify(s)),this.loading=!0;try{const a=await o.post("/reviews/search",s);console.log("======****************findUserRatings******************======="),console.log(a.data),a.data.reviewItems!==void 0&&(this.rating=a.data.reviewItems)}catch(a){console.error(a)}finally{this.loading=!1}return[]},async findHostImages(s){console.log("================user findPropertyImages==================="),console.log(JSON.stringify(s)),this.loading=!0,await o.post("/images/search",s).then(a=>{console.log("================findPropertyImages==================="),console.log(a.data.objectIds),a.data.objectIds!=null&&(this.avatar=a.data.objectIds)}).catch(a=>{console.log(a)}).finally(()=>{this.loading=!1})},async findHostRating(s){console.log("================user findPropertyImages==================="),console.log(JSON.stringify(s)),this.loading=!0,await o.post("/users/search",s).then(a=>{console.log("================findPropertyImages==================="),console.log(a.data.users),a.data.users!=null&&(this.hosts=a.data.users)}).catch(a=>{console.log(a)}).finally(()=>{this.loading=!1})},async findHostTenants(s){this.loading=!0,await o.post(`/users/hosts/${s}`).then(a=>{a.data.users!=null&&(this.tenants=a.data.users)}).catch(a=>{console.log(a)}).finally(()=>{this.loading=!1})}}});export{i as u};