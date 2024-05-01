import{_ as E,a as V,u as D}from"./useDocsNavigation.xeCasbm6.js";import{_ as R}from"./RplIcon.vue.npGHNmKk.js";import{d as y,b as r,c as p,e as h,t as b,g as C,r as A,J as B,f as k,F as S,W as M,n as T,N as o,G as f,w as $,m as z,v as F,a1 as L,D as q}from"./entry.Ijrs4RnN.js";import{_ as G}from"./RplExpandable.vue.I1NfLTDt.js";import{u as J}from"./useRippleEvent.nMZOOW10.js";import P from"./DocsNavLink.F9CYr-u5.js";import{_ as W}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./RplLink.vue.J3n94tPX.js";import"./asyncData.Ntu6TqFb.js";import"./nuxt-link.0f1J_twB.js";const j={class:"rpl-vertical-nav__item rpl-vertical-nav__toggle rpl-u-focusable-block"},H={class:"rpl-vertical-nav__toggle-text"},K={class:"rpl-vertical-nav__toggle-icon","aria-hidden":"true"},O=y({__name:"RplVerticalNavToggle",props:{text:{}},setup(v){return(l,a)=>(r(),p("button",j,[h("span",H,b(l.text),1),h("span",K,[C(R,{name:"icon-chevron-down",size:"xs"})])]))}});function Q(v,l){const a=A(v);function _(n){return a.value.includes(n)}function i(){return a.value.length===l}function c(n){_(n)==!1?a.value.push(n):a.value=a.value.filter(s=>s!=n)}return{isItemExpanded:_,isAllExpanded:i,toggleItem:c}}const U={class:"rpl-vertical-nav rpl-u-screen-only"},X={key:0,class:"rpl-vertical-nav__heading rpl-type-h3-fixed"},Y={class:"rpl-vertical-nav__list rpl-vertical-nav__list--level-1 rpl-type-p-small"},Z=y({__name:"RplVerticalNav",props:{title:{},items:{}},emits:["toggleMenuItem","navigate"],setup(v,{emit:l}){const a=v,_=l,{emitRplEvent:i}=J("rpl-vertical-nav",_),c=B(()=>(a.items||[]).map(e=>{var d;return e.url&&((d=e.items)!=null&&d.length)?{...e,items:[{id:e.id,text:e.text,url:e.url,active:e.active&&!e.items.some(t=>t.active)},...e.items||[]]}:e})),n=c.value.reduce((e,d)=>d.active?[...e,d.id]:e,[]),{isItemExpanded:s,toggleItem:x}=Q(n,c.value.length),u=e=>`rpl-vertical-nav-${e}-toggle`,m=e=>{x(e.id),i("toggleMenuItem",{id:u(e.id),action:s(e.id)?"open":"close",text:e.text,name:a==null?void 0:a.title},{global:!0})},g=e=>{i("navigate",{...e,name:a==null?void 0:a.title},{global:!0})};return(e,d)=>(r(),p("nav",U,[e.title?(r(),p("h3",X,b(e.title),1)):k("",!0),h("ul",Y,[(r(!0),p(S,null,M(c.value,(t,I)=>{var N;return r(),p("li",{key:I,class:T({"rpl-vertical-nav__list-item":!0,"rpl-vertical-nav__list-item--expanded":o(s)(t.id)})},[t.items?(r(),f(O,{key:0,id:u(t.id),text:t.text,onClick:()=>m(t)},null,8,["id","text","onClick"])):k("",!0),t.items?(r(),f(G,{key:1,"aria-labelledby":`rpl-vertical-nav-${t.id}-toggle`,"aria-hidden":o(s)(t.id)===!1?"true":null,expanded:o(s)(t.id),class:"rpl-vertical-nav__list-item-children"},{default:$(()=>[C(E,{items:t.items,level:2,"is-expanded":o(s)(t.id),onItemClick:g},null,8,["items","is-expanded"])]),_:2},1032,["aria-labelledby","aria-hidden","expanded"])):(r(),f(V,{key:2,text:t.text,href:t.url,active:(t==null?void 0:t.active)&&!((N=t.items)!=null&&N.some(w=>w.active)),onItemClick:g},null,8,["text","href","active"]))],2)}),128))])]))}}),ee=y({__name:"DocsContentNavigation",async setup(v){let l,a;const _=z(),{sections:i,hideModulesSection:c}=F(),n=_.params.slug[0],s=([l,a]=L(()=>D([n||"design-system"],{layout:{$ne:"module"}})),l=await l,a(),l),x=s==null?void 0:s.map(u=>{var m;return{...u,url:(m=u.items)!=null&&m.length?null:u.url}});return(u,m)=>{const g=Z,e=P;return r(),p("div",null,[C(g,{items:o(x)},null,8,["items"]),o(c)?k("",!0):(r(),f(e,{key:0,url:o(n)==="framework"?"/design-system/about/what-is-ripple":"/framework",icon:"icon-link-external-square-filled",iconPosition:"end",class:"docs-section-link"},{default:$(()=>[q(b(o(n)==="framework"?o(i)["design-system"].title:o(i).framework.title),1)]),_:1},8,["url"]))])}}}),_e=W(ee,[["__scopeId","data-v-18cbb85e"]]);export{_e as default};
