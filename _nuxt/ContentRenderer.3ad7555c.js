import c from"./ContentRendererMarkdown.439337a4.js";import{d as l,W as s,ah as m,N as f}from"./entry.1a583428.js";import"./index.9b0bef9c.js";const g=l({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){s(()=>t.excerpt,n=>{var e,r,a;n&&!((e=t.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(r=t==null?void 0:t.value)==null?void 0:r._path}.${(a=t==null?void 0:t.value)==null?void 0:a._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(t){var i,u,o,d;const n=m(),{value:e,excerpt:r,tag:a}=t;return!((u=(i=e==null?void 0:e.body)==null?void 0:i.children)!=null&&u.length)&&(n!=null&&n.empty)?n.empty({value:e,excerpt:r,tag:a,...this.$attrs}):n!=null&&n.default?n.default({value:e,excerpt:r,tag:a,...this.$attrs}):(e==null?void 0:e._type)==="markdown"&&((d=(o=e==null?void 0:e.body)==null?void 0:o.children)!=null&&d.length)?f(c,{value:e,excerpt:r,tag:a,...this.$attrs}):f("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:r,tag:a},null,2))}});export{g as default};