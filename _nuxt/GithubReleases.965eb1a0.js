import{u}from"./asyncData.a87419c0.js";import{d as n,aw as o,ah as i}from"./entry.1462a9a7.js";import{u as f}from"./useGithub.231b5645.js";import"./ready.d28bda20.js";const m=n({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(a){const{fetchReleases:t}=f(),{data:s,refresh:e,pending:r}=await u(`github-releases-${o(a.query)}`,()=>t(a.query));return{releases:s,refresh:e,pending:r}},render({releases:a,refresh:t,pending:s}){var r;const e=i();return(r=e==null?void 0:e.default)==null?void 0:r.call(e,{releases:a,refresh:t,pending:s})}});export{m as default};