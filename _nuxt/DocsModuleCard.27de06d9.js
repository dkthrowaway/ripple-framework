import{_ as l}from"./RplPromoCard.vue.fcb97591.js";import{u}from"./asyncData.dd7d6d48.js";import{d as i,Z as p,b as c,E as d,w as _,e as f,t as w,M as r,q as y}from"./entry.98fd968f.js";import"./index.3374bfcd.js";import"./RplImage.css.fd34fcfd.js";import"./RplTextLink.css.3d663ec7.js";import"./RplLink.vue.f6a50154.js";import"./useRippleEvent.463d2cb5.js";import"./ready.028b8e23.js";const A=i({__name:"DocsModuleCard",props:{moduleSlug:{}},async setup(n){let o,t;const e=n,{data:a}=([o,t]=p(async()=>u(`module-info-${e.moduleSlug}`,async()=>await y(`framework/modules/${e.moduleSlug}/_module`).findOne()||null)),o=await o,t(),o);return(s,C)=>{const m=l;return c(),d(m,{title:r(a).name,url:`/framework/modules/${e.moduleSlug}`},{default:_(()=>[f("p",null,w(r(a).description),1)]),_:1},8,["title","url"])}}});export{A as default};