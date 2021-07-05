import{e as s,f as t,g as e,h as o,i as l,j as a,o as n,c as r,a as i,u as c,r as u,t as d,w as v,b as _}from"./app.cad05c30.js";import{i as m}from"./index.esm.5e996d85.js";const h={class:"ghost__body"},f={class:"ghost__face"},g={class:"ghost__eyes"},y=i("div",{class:"ghost__smile"},null,-1),p=i("div",{class:"ghost__rosy ghost__rosy--left"},null,-1),x=i("div",{class:"ghost__rosy ghost__rosy--right"},null,-1),b=i("div",{class:"ghost__arm ghost__arm--left"},null,-1),k=i("div",{class:"ghost__arm ghost__arm--right"},null,-1),j=i("div",{class:"ghost__bottom"},[i("div"),i("div"),i("div"),i("div"),i("div")],-1),M=i("div",{class:"ghost__shadow"},null,-1);var T=o({setup(o){const c=l(null),u=l(null),d=l(null),v=((o={delay:33,maxWait:!0})=>{const{delay:l=33,maxWait:a=!0}=o,n=s({x:0,y:0}),r=m((s=>{n.x=s.clientX,n.y=s.clientY}),l,!1!==a?{maxWait:!0===a?l:a}:{});return t((()=>{document.addEventListener("mousemove",r)})),e((()=>{document.removeEventListener("mousemove",r)})),n})();return t((()=>{var s,t;const e=(null==(s=c.value)?void 0:s.offsetLeft)||0,o=(null==(t=c.value)?void 0:t.offsetTop)||0,l=(s,t,l)=>()=>{var a,n;const r=Math.atan2(v.x-t-e,v.y-l-o),i=3*Math.cos(r)+l-10,c=3*Math.sin(r)+t-10;null==(a=s.value)||a.style.setProperty("--offset-top",`${i}px`),null==(n=s.value)||n.style.setProperty("--offset-left",`${c}px`)};a(v,l(u,13,11)),a(v,l(d,5,11))})),(s,t)=>(n(),r("div",{class:"ghost",ref:c},[i("div",h,[i("div",f,[i("div",g,[i("div",{class:"ghost__eye ghost__eye--left",ref:u},null,512),i("div",{class:"ghost__eye ghost__eye--right",ref:d},null,512)]),y,p,x]),b,k,j]),M],512))}});const H=s=>s[Math.floor(Math.random()*s.length)];var L={components:{Ghost:T},setup(s,t){var e,o;const l=c(),a=null!=(e=l.value.notFound)?e:["Not Found"],n=null!=(o=l.value.backToHome)?o:["Back To Home"];return{message:H(a),backToHome:H(n)}}};const W={class:"flex justify-center items-center min-h-screen"},w={class:"flex justify-center items-center m-20 pb-64"},E={class:"not-found__info flex flex-col items-start"},F=i("span",{class:"text-8xl text-primary-500"},"404",-1),G={class:"text-gray-400 border-l-4 my-4 p-1 pl-4"};L.render=function(s,t,e,o,l,a){const c=u("Ghost"),m=u("RouterLink");return n(),r("div",W,[i("div",w,[i(c),i("div",E,[F,i("blockquote",G,d(o.message),1),i(m,{to:"/",class:"text-primary-500 font-bold hover:underline"},{default:v((()=>[_(d(o.backToHome),1)])),_:1})])])])};export default L;
