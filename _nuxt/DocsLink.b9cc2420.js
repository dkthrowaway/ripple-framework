import{_ as t}from"./RplIcon.vue.8eb02248.js";import{_ as i}from"./RplTextLink.css.c0605a49.js";import{d as r,b as o,E as s,w as c,f as a,D as p,n as _}from"./entry.1462a9a7.js";import{_ as m}from"./_plugin-vue_export-helper.c27b6911.js";import"./RplLink.vue.09a0df6d.js";const d=r({__name:"DocsLink",props:{url:{},isExternal:{type:Boolean,default:!1},isSmall:{type:Boolean,default:!1},iconPosition:{default:"start"}},setup(f){return(e,u)=>{const n=t,l=i;return o(),s(l,{url:e.url,target:"_blank",class:_({"docs-link":!0,"rpl-type-p":!e.isSmall,"rpl-type-p-small":e.isSmall})},{default:c(()=>[e.isExternal&&e.iconPosition==="start"?(o(),s(n,{key:0,name:"icon-link-external-square-filled",class:"docs-link-icon"})):a("",!0),p(e.$slots,"default",{},void 0,!0),e.isExternal&&e.iconPosition==="end"?(o(),s(n,{key:1,name:"icon-link-external-square-filled",class:"docs-link-icon"})):a("",!0)]),_:3},8,["url","class"])}}});const C=m(d,[["__scopeId","data-v-5d4aedf1"]]);export{C as default};