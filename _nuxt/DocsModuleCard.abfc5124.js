import{_ as l}from"./RplPromoCard.vue.7a655b46.js";import{u}from"./asyncData.26278d70.js";import{d as i,Z as p,b as c,E as d,w as _,e as f,t as w,M as r,q as y}from"./entry.5bbf28d4.js";import"./index.18b3a5cb.js";import"./RplImage.css.a3fd740a.js";import"./RplTextLink.css.e766bc0a.js";import"./RplLink.vue.400e930a.js";import"./useRippleEvent.4541d6c2.js";import"./ready.a0081038.js";const A=i({__name:"DocsModuleCard",props:{moduleSlug:{}},async setup(n){let o,t;const e=n,{data:a}=([o,t]=p(async()=>u(`module-info-${e.moduleSlug}`,async()=>await y(`framework/modules/${e.moduleSlug}/_module`).findOne()||null)),o=await o,t(),o);return(s,C)=>{const m=l;return c(),d(m,{title:r(a).name,url:`/framework/modules/${e.moduleSlug}`},{default:_(()=>[f("p",null,w(r(a).description),1)]),_:1},8,["title","url"])}}});export{A as default};