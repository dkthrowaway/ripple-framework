import{u}from"./asyncData.3422a4e6.js";import{d as m,aw as o,ah as i}from"./entry.55c30899.js";import{u as n}from"./useGithub.231b5645.js";import"./ready.fe6941b1.js";const h=m({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(t){const{fetchCommits:a}=n(),{data:s,pending:e,refresh:r}=await u(`github-commits-${o(t.query)}`,()=>a(t.query));return{commits:s,pending:e,refresh:r}},render({commits:t,pending:a,refresh:s}){var r;const e=i();return(r=e==null?void 0:e.default)==null?void 0:r.call(e,{commits:t,pending:a,refresh:s})}});export{h as default};