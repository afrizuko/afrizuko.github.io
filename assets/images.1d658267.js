import{ad as t,ac as a,ae as o}from"./index.7946e59e.js";const l=t("images",{state:()=>({images:a([]),loading:!1,response:a({code:null,message:null,data:null})}),getters:{getImages:s=>s.images,getResponse:s=>s.response,isLoading:s=>s.loading},actions:{async saveImages(s){this.loading=!0,await o.post("/files",s).then(e=>{console.log("==========================saveImages=============================="),console.log(e.status),e.status==200&&(this.response={code:0,message:"",data:null})}).catch(e=>{console.log(e)}).finally(()=>{this.loading=!1})},async findImages(s){console.log("==========================request findImages=============================="),console.log(JSON.stringify(s)),this.loading=!0,await o.post("/files/search",s).then(e=>{console.log("==========================findImages=============================="),e.data.objectIds!=null&&(this.images=e.data.objectIds)}).catch(e=>{console.log(e)}).finally(()=>{this.loading=!1})}}});export{l as u};
