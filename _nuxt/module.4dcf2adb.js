import C from"./DocsModuleNavigation.6d267e4a.js";import v from"./DocsNavLink.28211f8e.js";import k from"./DocsModuleInfo.913d0da0.js";import h from"./DocsPageHeader.25867309.js";import $ from"./ContentRenderer.9dba3473.js";import{_ as w}from"./AppSidebarLayout.vue.af0b8f31.js";import{_ as D}from"./AppLayout.vue.3d2945a4.js";import{u as N}from"./asyncData.34e3377a.js";import{d as b,U as A,m as M,Z as S,E as i,w as e,b as _,g as n,C as I,M as t,e as V,f as B,q as H}from"./entry.8122370a.js";import{u as L}from"./head.a280a4d5.js";import{_ as q}from"./_plugin-vue_export-helper.c27b6911.js";import"./useDocsNavigation.f5b44624.js";import"./RplLink.vue.e72abaf8.js";import"./useRippleEvent.06bef28e.js";import"./RplIcon.vue.9d9f95a6.js";import"./nuxt-link.c72342ec.js";import"./ready.fd6f3382.js";import"./DocsLink.adbe09fc.js";import"./RplTextLink.css.1a7868ac.js";import"./ContentRendererMarkdown.397b06f1.js";import"./index.9b0bef9c.js";import"./config.0b096891.js";import"./index.b3435523.js";import"./RplImage.css.cbc44e88.js";import"./RplList.vue.d9df744f.js";import"./RplExpandable.vue.15b9cc65.js";const P={class:"docs-sidebar-nav"},R=b({__name:"module",async setup(E){let a,m;const{page:o}=A();L(o);const s=M(),c=s.params.slug[0]==="framework",{data:p}=([a,m]=S(async()=>N(`module-info-${s.params.slug[2]}`,async()=>await H(`${s.params.slug[0]}/${s.params.slug[1]}/${s.params.slug[2]}/_module`).findOne()||null)),a=await a,m(),a);return(u,T)=>{const r=C,l=v,d=k,f=h,g=$,x=w,y=D;return _(),i(y,{theme:c?"module":"default"},{menuContents:e(()=>[n(r)]),default:e(()=>[n(x,{hideMobileSidebar:!1},{aside:e(()=>[n(l,{url:"/framework/modules/all-modules",icon:"icon-chevron-left",iconPosition:"start"},{default:e(()=>[I("All modules")]),_:1}),n(d,{module:t(p)},null,8,["module"]),V("div",P,[n(r)])]),pageHeader:e(()=>[n(f,{title:t(o).title,description:t(o).description,links:t(o).links},null,8,["title","description","links"])]),default:e(()=>[t(o)?(_(),i(g,{tag:t(o).tag||"DocsContent",key:t(o)._id,value:t(o)},null,8,["tag","value"])):B("",!0)]),_:1})]),_:1},8,["theme"])}}});const fo=q(R,[["__scopeId","data-v-2a19721d"]]);export{fo as default};
