import{_ as l}from"./RplPromoCard.vue.3790f396.js";import{u}from"./asyncData.6c2c1303.js";import{d as i,Z as p,b as c,E as d,w as _,e as f,t as w,M as r,q as y}from"./entry.1a583428.js";import"./index.8f69b85e.js";import"./RplImage.css.dc7c355a.js";import"./RplTextLink.css.b9798fdd.js";import"./RplLink.vue.11d968e7.js";import"./useRippleEvent.5567da59.js";import"./ready.01f96c6d.js";const A=i({__name:"DocsModuleCard",props:{moduleSlug:{}},async setup(n){let o,t;const e=n,{data:a}=([o,t]=p(async()=>u(`module-info-${e.moduleSlug}`,async()=>await y(`framework/modules/${e.moduleSlug}/_module`).findOne()||null)),o=await o,t(),o);return(s,C)=>{const m=l;return c(),d(m,{title:r(a).name,url:`/framework/modules/${e.moduleSlug}`},{default:_(()=>[f("p",null,w(r(a).description),1)]),_:1},8,["title","url"])}}});export{A as default};