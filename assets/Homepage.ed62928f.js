import{h as e,i as t,e as s,y as a,k as l,j as o,o as r,c as i,F as n,p,m as c,r as u,a as m,w as d,b as v,t as x,n as f}from"./app.cad05c30.js";import{u as h,_ as y}from"./BaseLayout.vue_vue&type=style&index=0&lang.e5cb438c.js";import{_ as g}from"./Page.vue_vue&type=style&index=0&lang.294fd74e.js";import{i as _}from"./index.esm.5e996d85.js";import{_ as b}from"./Tags.vue_vue&type=style&index=0&lang.37efc511.js";import"./colors.73833b06.js";const j={class:"posts flex-col"},w={class:"posts__card"};var k=e({setup(e){const f=t(1),y=s({currentPage:1,pageSize:f}),b=a(y),{bottom:k}=h(),z=l((()=>f.value===b.total)),K=_((()=>{f.value++}),500,{isImmediate:!0});return o(k,(e=>{!z.value&&e<200&&K()})),(e,t)=>{const s=u("RouterLink");return r(),i("div",j,[(r(!0),i(n,null,p(c(b).pages,(e=>(r(),i("div",w,[m(s,{class:"p-2 pl-6 text-4xl font-bold transition-colors hover:text-primary-500",to:e.path},{default:d((()=>[v(x(e.title),1)])),_:2},1032,["to"]),m(g,{class:"page_title-hidden",pageKey:e.key},null,8,["pageKey"])])))),256))])}}});const z={class:"flex flex-col h-screen pb-12 justify-center items-center relative overflow-hidden"},K={class:"home-title text-8xl text-white pb-10 z-30"},L={class:"text-4xl text-white z-30"};var P=e({setup(e){const t=f(),s=l((()=>t.value.title)),a=l((()=>t.value.description));return(e,t)=>(r(),i(y,{class:"layout_homepage"},{header:d((()=>[m("div",z,[m("h1",K,x(c(s)),1),m("h2",L,x(c(a)),1)])])),main:d((()=>[m(k)])),sub:d((()=>[m(b,{class:"m-4 ml-8","onUpdate:actives":t[1]||(t[1]=t=>e.$router.push(`/tags/${null==t?void 0:t[0]}.html`))})])),extra:d((()=>[])),_:1}))}});export default P;
