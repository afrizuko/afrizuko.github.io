import{k as s,i,l as a,m as p,a4 as c,c as u,h as d,t as g,a5 as l,g as f}from"./index.40958af9.js";var m=s({name:"QPageContainer",setup(h,{slots:n}){const{proxy:{$q:r}}=f(),e=i(p,a);if(e===a)return console.error("QPageContainer needs to be child of QLayout"),a;c(l,!0);const o=u(()=>{const t={};return e.header.space===!0&&(t.paddingTop=`${e.header.size}px`),e.right.space===!0&&(t[`padding${r.lang.rtl===!0?"Left":"Right"}`]=`${e.right.size}px`),e.footer.space===!0&&(t.paddingBottom=`${e.footer.size}px`),e.left.space===!0&&(t[`padding${r.lang.rtl===!0?"Right":"Left"}`]=`${e.left.size}px`),t});return()=>d("div",{class:"q-page-container",style:o.value},g(n.default))}});export{m as Q};
