import{k as r,c as l,h as s,t as u}from"./index.40958af9.js";var d=r({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(o,{slots:t}){const a=l(()=>{const n=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(e=>o[e]===!0).map(e=>`q-btn-group--${e}`).join(" ");return`q-btn-group row no-wrap${n.length!==0?" "+n:""}`+(o.spread===!0?" q-btn-group--spread":" inline")});return()=>s("div",{class:a.value},u(t.default))}});export{d as Q};
