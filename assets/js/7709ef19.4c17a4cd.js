"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[74281],{16814:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(85893),r=i(11151);const s={},o="Ignoring entities and fields",a={id:"reference/sql-openapi/ignore",title:"Ignoring entities and fields",description:"@platformatic/sql-openapi allows to selectively ignore entities and fields.",source:"@site/versioned_docs/version-1.23.0/reference/sql-openapi/ignore.md",sourceDirName:"reference/sql-openapi",slug:"/reference/sql-openapi/ignore",permalink:"/docs/reference/sql-openapi/ignore",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.23.0/reference/sql-openapi/ignore.md",tags:[],version:"1.23.0",frontMatter:{},sidebar:"docs",previous:{title:"API",permalink:"/docs/reference/sql-openapi/api"},next:{title:"Explicitly including entities",permalink:"/docs/reference/sql-openapi/explicit-include"}},c={},l=[];function p(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"ignoring-entities-and-fields",children:"Ignoring entities and fields"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@platformatic/sql-openapi"})," allows to selectively ignore entities and fields."]}),"\n",(0,t.jsx)(n.p,{children:"To ignore entities:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"app.register(require('@platformatic/sql-openapi'), {\n  ignore: {\n    category: true\n  }\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"To ignore individual fields:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"app.register(require('@platformatic/sql-openapi'), {\n  ignore: {\n    category: {\n      name: true\n    }\n  }\n})\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(67294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);