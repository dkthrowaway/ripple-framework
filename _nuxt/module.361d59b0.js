import C from"./DocsModuleNavigation.c0f9e83c.js";import v from"./DocsNavLink.7fff94ff.js";import k from"./DocsModuleInfo.a546d94d.js";import h from"./DocsPageHeader.66a7545c.js";import $ from"./ContentRenderer.a047c30a.js";import{_ as w}from"./AppSidebarLayout.vue.e729df42.js";import{_ as D}from"./AppLayout.vue.71c18089.js";import{u as N}from"./asyncData.7350cc62.js";import{d as b,U as A,m as M,Z as S,E as i,w as e,b as _,g as n,C as I,M as t,e as V,f as B,q as H}from"./entry.852be16a.js";import{u as L}from"./head.189701df.js";import{_ as q}from"./_plugin-vue_export-helper.c27b6911.js";import"./useDocsNavigation.835ccad0.js";import"./RplLink.vue.da2797b8.js";import"./useRippleEvent.9d9f3289.js";import"./RplIcon.vue.b448d383.js";import"./nuxt-link.44f4ae78.js";import"./ready.9bd42f0d.js";import"./DocsLink.48f6a3e1.js";import"./RplTextLink.css.fbe6f6f9.js";import"./ContentRendererMarkdown.f5a6efb9.js";import"./index.9b0bef9c.js";import"./config.3aae7024.js";import"./index.84f3f677.js";import"./RplImage.css.00c3e26c.js";import"./RplList.vue.e26b6dab.js";import"./RplExpandable.vue.a9978616.js";const P={class:"docs-sidebar-nav"},R=b({__name:"module",async setup(E){let a,m;const{page:o}=A();L(o);const s=M(),c=s.params.slug[0]==="framework",{data:p}=([a,m]=S(async()=>N(`module-info-${s.params.slug[2]}`,async()=>await H(`${s.params.slug[0]}/${s.params.slug[1]}/${s.params.slug[2]}/_module`).findOne()||null)),a=await a,m(),a);return(u,T)=>{const r=C,l=v,d=k,f=h,g=$,x=w,y=D;return _(),i(y,{theme:c?"module":"default"},{menuContents:e(()=>[n(r)]),default:e(()=>[n(x,{hideMobileSidebar:!1},{aside:e(()=>[n(l,{url:"/framework/modules/all-modules",icon:"icon-chevron-left",iconPosition:"start"},{default:e(()=>[I("All modules")]),_:1}),n(d,{module:t(p)},null,8,["module"]),V("div",P,[n(r)])]),pageHeader:e(()=>[n(f,{title:t(o).title,description:t(o).description,links:t(o).links},null,8,["title","description","links"])]),default:e(()=>[t(o)?(_(),i(g,{tag:t(o).tag||"DocsContent",key:t(o)._id,value:t(o)},null,8,["tag","value"])):B("",!0)]),_:1})]),_:1},8,["theme"])}}});const fo=q(R,[["__scopeId","data-v-2a19721d"]]);export{fo as default};
