import{_ as m}from"./RplPromoCard.vue.BKNNfHbp.js";import{u}from"./asyncData.BUKKRd9z.js";import{d as c,a1 as i,b as d,G as p,w as _,e as f,t as w,N as n,q as y}from"./entry.u45UXxOf.js";import"./RplImage.css.D6XOegCC.js";import"./RplTextLink.css.BGXduNO_.js";import"./RplLink.vue.BnzI4ytq.js";import"./useRippleEvent.CYsXGI-9.js";const D=c({__name:"DocsModuleCard",props:{moduleSlug:{}},async setup(r){let o,t;const e=r,{data:a}=([o,t]=i(async()=>u(`module-info-${e.moduleSlug}`,async()=>await y(`framework/modules/${e.moduleSlug}/_module`).findOne()||null)),o=await o,t(),o);return(s,C)=>{const l=m;return d(),p(l,{title:n(a).name,url:`/framework/modules/${e.moduleSlug}`},{default:_(()=>[f("p",null,w(n(a).description),1)]),_:1},8,["title","url"])}}});export{D as default};