import C from"./DocsModuleNavigation.829caf34.js";import v from"./DocsNavLink.7a3ab5e6.js";import k from"./DocsModuleInfo.eddcff84.js";import h from"./DocsPageHeader.517b30fc.js";import $ from"./ContentRenderer.8526e7e8.js";import{_ as w}from"./AppSidebarLayout.vue.9fe88915.js";import{_ as D}from"./AppLayout.vue.2a9d8ca9.js";import{u as N}from"./asyncData.a2b6051f.js";import{d as b,U as A,m as M,Z as S,E as i,w as e,b as _,g as n,C as I,M as t,e as V,f as B,q as H}from"./entry.d59a78a5.js";import{u as L}from"./head.84402f9c.js";import{_ as q}from"./_plugin-vue_export-helper.c27b6911.js";import"./useDocsNavigation.6ac75467.js";import"./RplLink.vue.b76a53a5.js";import"./useRippleEvent.b320156a.js";import"./RplIcon.vue.4a5555a9.js";import"./nuxt-link.673c575b.js";import"./ready.ce814fef.js";import"./DocsLink.1c859434.js";import"./RplTextLink.css.73415ba7.js";import"./ContentRendererMarkdown.9bc25261.js";import"./index.9b0bef9c.js";import"./config.68aec018.js";import"./index.6152b86b.js";import"./RplImage.css.56b9c110.js";import"./RplList.vue.c4740282.js";import"./RplExpandable.vue.a9d32cc5.js";const P={class:"docs-sidebar-nav"},R=b({__name:"module",async setup(E){let a,m;const{page:o}=A();L(o);const s=M(),c=s.params.slug[0]==="framework",{data:p}=([a,m]=S(async()=>N(`module-info-${s.params.slug[2]}`,async()=>await H(`${s.params.slug[0]}/${s.params.slug[1]}/${s.params.slug[2]}/_module`).findOne()||null)),a=await a,m(),a);return(u,T)=>{const r=C,l=v,d=k,f=h,g=$,x=w,y=D;return _(),i(y,{theme:c?"module":"default"},{menuContents:e(()=>[n(r)]),default:e(()=>[n(x,{hideMobileSidebar:!1},{aside:e(()=>[n(l,{url:"/framework/modules/all-modules",icon:"icon-chevron-left",iconPosition:"start"},{default:e(()=>[I("All modules")]),_:1}),n(d,{module:t(p)},null,8,["module"]),V("div",P,[n(r)])]),pageHeader:e(()=>[n(f,{title:t(o).title,description:t(o).description,links:t(o).links},null,8,["title","description","links"])]),default:e(()=>[t(o)?(_(),i(g,{tag:t(o).tag||"DocsContent",key:t(o)._id,value:t(o)},null,8,["tag","value"])):B("",!0)]),_:1})]),_:1},8,["theme"])}}});const fo=q(R,[["__scopeId","data-v-2a19721d"]]);export{fo as default};
