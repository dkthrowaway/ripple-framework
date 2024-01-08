import{d as p,b as n,E as y,w as f,D as h,c as r,f as g,$ as C,G as F,F as b,V as R,e as i,t as B,n as k,r as T,Q as $,g as _,C as V,M as m,a0 as q}from"./entry.fd76962d.js";import{u as x}from"./rpl-lib.es.c2b47569.js";import{_ as D}from"./_plugin-vue_export-helper.c27b6911.js";const E={key:0,class:"rpl-form-label__required rpl-type-label-small"},A=p({__name:"RplFormLabel",props:{tag:{default:"label"},isRequired:{type:Boolean,default:!1}},setup(s){return(e,t)=>(n(),y(C(e.tag),{class:"rpl-form-label"},{default:f(()=>[h(e.$slots,"default"),e.isRequired?(n(),r("span",E,"(Required)")):g("",!0)]),_:3}))}});function L(s,e,t,...o){s[t]&&typeof s[t]=="function"&&s[t](...o),e(t,...o)}const S=(s,e)=>{const t=Array.isArray(e)?e.join(","):e;return s!==!1?"[redacted]":t},I=["id","data-rpl-focus-input","name","disabled","checked","onChange"],O=["for"],j=p({__name:"RplFormOptionButtons",props:{id:{},name:{},value:{},label:{default:void 0},disabled:{type:Boolean,default:!1},perfectSquares:{type:Boolean,default:!1},onChange:{type:Function,default:()=>{}},options:{default:()=>[]},pii:{type:Boolean,default:!0}},emits:["onChange","update"],setup(s,{emit:e}){const t=s,o=F("form"),{emitRplEvent:d}=x("rpl-form-option-buttons",e),u=a=>{L(t,e,"onChange",a),d("update",{action:"update",id:t.id,label:t==null?void 0:t.label,value:S(t.pii,a),contextId:o==null?void 0:o.id,contextName:o==null?void 0:o.name},{global:!0})},c=a=>t.value===a;return(a,G)=>(n(),r("div",{class:k({"rpl-form-opt-buttons":!0,"rpl-form-opt-buttons--squares":t.perfectSquares})},[(n(!0),r(b,null,R(a.options,(l,v)=>(n(),r("div",{key:l.id,class:"rpl-form-opt-buttons-option"},[i("input",{id:l.id,class:"rpl-form-opt-buttons-option__input",type:"radio","data-rpl-focus-input":v===0?a.id:void 0,name:a.name,disabled:a.disabled||l.disabled,checked:c(l.id),onChange:M=>u(l.id)},null,40,I),i("label",{class:"rpl-form-opt-buttons-option__label rpl-type-label",for:l.id},B(l.label),9,O)]))),128))],2))}});const w={class:"rpl-form__outer docs-theme-chooser-controls"},N={class:"docs-theme-chooser-examples"},z=p({__name:"DocsThemeChooser",setup(s){const e=T("docsTheme1"),t=o=>{e.value=o};return $("exampleTheme",e),(o,d)=>{const u=A,c=j;return n(),r(b,null,[i("div",w,[_(u,{tag:"label"},{default:f(()=>[V("Theme options")]),_:1}),_(c,{modelValue:m(e),"onUpdate:modelValue":d[0]||(d[0]=a=>q(e)?e.value=a:null),id:"theme-chooser",name:"theme-chooser",onChange:t,value:m(e),options:[{id:"docsTheme1",label:"Alt 1",value:"light"},{id:"docsTheme2",label:"Alt 2",value:"dark"},{id:"default",label:"vic.gov.au",value:"default"}]},null,8,["modelValue","value","options"])]),i("div",N,[h(o.$slots,"default",{},void 0,!0)])],64)}}});const J=D(z,[["__scopeId","data-v-058e8db5"]]);export{J as default};
