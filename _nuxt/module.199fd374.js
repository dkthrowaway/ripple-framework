import C from"./DocsModuleNavigation.a8cc8ef5.js";import v from"./DocsNavLink.d24419d6.js";import k from"./DocsModuleInfo.335ea29e.js";import h from"./DocsPageHeader.a4573789.js";import $ from"./ContentRenderer.784009dc.js";import{_ as w}from"./AppSidebarLayout.vue.aa284e36.js";import{_ as D}from"./AppLayout.vue.18ed5ad8.js";import{u as N}from"./asyncData.e07e0aeb.js";import{d as b,U as A,m as M,Z as S,E as i,w as e,b as _,g as n,C as I,M as t,e as V,f as B,q as H}from"./entry.64c4a8b1.js";import{u as L}from"./head.447ff023.js";import{_ as q}from"./_plugin-vue_export-helper.c27b6911.js";import"./useDocsNavigation.2948a452.js";import"./RplLink.vue.2303f57e.js";import"./useRippleEvent.938470d3.js";import"./RplIcon.vue.9eb38073.js";import"./nuxt-link.f293fff2.js";import"./ready.7b6b9f1e.js";import"./DocsLink.1aa7f871.js";import"./RplTextLink.css.b59a4dfd.js";import"./ContentRendererMarkdown.cf07c4e3.js";import"./index.9b0bef9c.js";import"./config.db1cfcff.js";import"./index.304e7e1e.js";import"./RplImage.css.98be1078.js";import"./RplList.vue.16127504.js";import"./RplExpandable.vue.8628542c.js";const P={class:"docs-sidebar-nav"},R=b({__name:"module",async setup(E){let a,m;const{page:o}=A();L(o);const s=M(),c=s.params.slug[0]==="framework",{data:p}=([a,m]=S(async()=>N(`module-info-${s.params.slug[2]}`,async()=>await H(`${s.params.slug[0]}/${s.params.slug[1]}/${s.params.slug[2]}/_module`).findOne()||null)),a=await a,m(),a);return(u,T)=>{const r=C,l=v,d=k,f=h,g=$,x=w,y=D;return _(),i(y,{theme:c?"module":"default"},{menuContents:e(()=>[n(r)]),default:e(()=>[n(x,{hideMobileSidebar:!1},{aside:e(()=>[n(l,{url:"/framework/modules/all-modules",icon:"icon-chevron-left",iconPosition:"start"},{default:e(()=>[I("All modules")]),_:1}),n(d,{module:t(p)},null,8,["module"]),V("div",P,[n(r)])]),pageHeader:e(()=>[n(f,{title:t(o).title,description:t(o).description,links:t(o).links},null,8,["title","description","links"])]),default:e(()=>[t(o)?(_(),i(g,{tag:t(o).tag||"DocsContent",key:t(o)._id,value:t(o)},null,8,["tag","value"])):B("",!0)]),_:1})]),_:1},8,["theme"])}}});const fo=q(R,[["__scopeId","data-v-2a19721d"]]);export{fo as default};
