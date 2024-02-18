import{Q as y}from"./QBtnToggle.bb3bc682.js";import{Q as q}from"./use-dark.0ca98b24.js";import{_ as w,d as V,v as N,af as Q,u as S,r as T,c as B,y as I,z as P,A as r,B as l,f as a,Q as i,C as U,aY as A,L as C,M as R}from"./index.e0ba20ab.js";import{Q as d}from"./QInput.081695b1.js";import{Q as k}from"./QForm.2e710a3f.js";import{Q as E}from"./QPage.b96d4440.js";import"./QBtnGroup.2a74557e.js";import"./use-form.17ab9b10.js";import"./uid.42677368.js";import"./focus-manager.b507780d.js";const m=n=>(C("data-v-56e4c451"),n=n(),R(),n),F=m(()=>l("div",{class:"q-pa-md text-h3 q-mb-xl text-weight-bold"},"Signup",-1)),L={class:"row"},O=m(()=>l("div",{class:"q-mb-md row items-center q-my-md"},[l("div",{class:"col",style:{"border-top":"1px solid #ccc"}}),l("div",{class:"q-mr-md q-ml-md"},"OR"),l("div",{class:"col",style:{"border-top":"1px solid #ccc"}})],-1)),H={class:"row justify-center q-my-md"},z={class:"col col-xl-12 col-lg-6 col-md-12 col-sm-12 col-xs-12 q-mb-sm q-pr-xs"},G={class:"col col-xl-12 col-lg-6 col-md-12 col-sm-12 col-xs-12 q-mb-sm"},$={class:"col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mb-sm"},j={class:"col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-mb-sm"},M={class:"col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"},Y={class:"q-mt-md text-h6 text-center"},D=V({__name:"signup",setup(n){const c=N(),p=Q(),g=S(),o=T({email:null,firstName:null,lastName:null,password:null,created:null,phone:null,fastestResponse:null,status:null,id:null,responseRate:null,verified:!1,userType:"HOST",address:null,gender:null,avatar:null,bio:null,dateOfBirth:null}),u=B(()=>c.getResponse),v=e=>e&&e.length!=0||"First name is required",_=e=>e&&e.length!=0||"Last name is required",h=e=>e&&e.length!=0||"Email address is required",f=e=>e&&e.length!=0||"Password is required",b=e=>e&&e.length!=0||"Phone number is required";async function x(){await c.signUp(o.value),u.value.code==0&&(p.showAlert(u.value.message,u.value.code,""),await g.push("/login"))}return(e,s)=>(I(),P(E,null,{default:r(()=>[l("div",{class:"text-center",style:A(e.$q.screen.xs||e.$q.screen.sm?"width: 65%":"width: 30%")},[F,a(y,{modelValue:o.value.userType,"onUpdate:modelValue":s[0]||(s[0]=t=>o.value.userType=t),spread:"",class:"my-custom-toggle q-mb-md","no-caps":"",rounded:"",unelevated:"","toggle-color":"warning",color:"indigo-1","text-color":"black",options:[{label:"as a host",value:"HOST"},{label:"as a tenant",value:"TENANT"}]},null,8,["modelValue"]),l("div",L,[a(i,{"no-caps":"",rounded:"",color:"indigo-1",label:"Continue with Google",class:"my-btn text-black"},{default:r(()=>[a(q,{width:"25px",src:"https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",class:"q-mx-sm"})]),_:1})]),O,a(k,{onSubmit:x},{default:r(()=>[l("div",H,[l("div",z,[a(d,{outlined:"",rounded:"",label:"First Name",color:"grey",rules:[v],modelValue:o.value.firstName,"onUpdate:modelValue":s[1]||(s[1]=t=>o.value.firstName=t)},null,8,["rules","modelValue"])]),l("div",G,[a(d,{outlined:"",rounded:"",label:"Last Name",color:"grey",rules:[_],modelValue:o.value.lastName,"onUpdate:modelValue":s[2]||(s[2]=t=>o.value.lastName=t)},null,8,["rules","modelValue"])]),l("div",$,[a(d,{outlined:"",rounded:"",label:"Email Address",color:"grey",rules:[h],modelValue:o.value.email,"onUpdate:modelValue":s[3]||(s[3]=t=>o.value.email=t)},null,8,["rules","modelValue"])]),l("div",j,[a(d,{outlined:"",rounded:"",label:"Phone Number",color:"grey",rules:[b],modelValue:o.value.phone,"onUpdate:modelValue":s[4]||(s[4]=t=>o.value.phone=t)},null,8,["rules","modelValue"])]),l("div",M,[a(d,{rounded:"",outlined:"",label:"Password",color:"grey",type:"password",rules:[f],modelValue:o.value.password,"onUpdate:modelValue":s[5]||(s[5]=t=>o.value.password=t)},null,8,["rules","modelValue"])])]),l("div",null,[a(i,{class:"my-btn",rounded:"",style:{width:"100%"},color:"indigo-10",label:"Continue",type:"submit"}),l("div",Y,[a(i,{to:"/login",flat:"","no-caps":""},{default:r(()=>[U("Already have an account? Sign in")]),_:1})])])]),_:1})],4)]),_:1}))}});var ae=w(D,[["__scopeId","data-v-56e4c451"]]);export{ae as default};
