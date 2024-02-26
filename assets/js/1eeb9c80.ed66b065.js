"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[67775],{49502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=n(85893),i=n(11151);const a={},o="Timestamps",r={id:"reference/sql-mapper/entities/timestamps",title:"Timestamps",description:"Timestamps can be used to automatically set the createdat and updatedat fields on your entities.",source:"@site/versioned_docs/version-1.21.0/reference/sql-mapper/entities/timestamps.md",sourceDirName:"reference/sql-mapper/entities",slug:"/reference/sql-mapper/entities/timestamps",permalink:"/docs/1.21.0/reference/sql-mapper/entities/timestamps",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.21.0/reference/sql-mapper/entities/timestamps.md",tags:[],version:"1.21.0",frontMatter:{}},d={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Customizing the field names",id:"customizing-the-field-names",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"timestamps",children:"Timestamps"}),"\n",(0,s.jsxs)(t.p,{children:["Timestamps can be used to automatically set the ",(0,s.jsx)(t.code,{children:"created_at"})," and ",(0,s.jsx)(t.code,{children:"updated_at"})," fields on your entities."]}),"\n",(0,s.jsx)(t.p,{children:"Timestamps are enabled by default"}),"\n",(0,s.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(t.p,{children:["To disable timestamps, you need to set the ",(0,s.jsx)(t.code,{children:"autoTimestamp"})," field to ",(0,s.jsx)(t.code,{children:"false"})," in configuration file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n...\n  "db": {\n    "connectionString": "postgres://postgres:postgres@127.0.0.1/postgres",\n    "autoTimestamp": false\n  }\n...\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"customizing-the-field-names",children:"Customizing the field names"}),"\n",(0,s.jsxs)(t.p,{children:["By default, the ",(0,s.jsx)(t.code,{children:"created_at"})," and ",(0,s.jsx)(t.code,{children:"updated_at"})," fields are used. You can customize the field names by setting the ",(0,s.jsx)(t.code,{children:"createdAt"})," and ",(0,s.jsx)(t.code,{children:"updatedAt"})," options in ",(0,s.jsx)(t.code,{children:"autoTimestamp"})," field in configuration file:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n...\n  "db": {\n    "connectionString": "postgres://postgres:postgres@127.0.0.1/postgres",\n    "autoTimestamp": {\n      "createdAt": "inserted_at",\n      "updatedAt": "updated_at"\n    }\n...\n}\n'})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);