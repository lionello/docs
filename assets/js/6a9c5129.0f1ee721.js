"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[77810],{15518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(85893),i=n(11151);const o={},a="Debug Platformatic DB",s={id:"guides/debug-platformatic-db",title:"Debug Platformatic DB",description:"Error: No tables found in the database",source:"@site/versioned_docs/version-1.22.0/guides/debug-platformatic-db.md",sourceDirName:"guides",slug:"/guides/debug-platformatic-db",permalink:"/docs/1.22.0/guides/debug-platformatic-db",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.22.0/guides/debug-platformatic-db.md",tags:[],version:"1.22.0",frontMatter:{},sidebar:"docs",previous:{title:"Monitoring with Prometheus and Grafana",permalink:"/docs/1.22.0/guides/monitoring"},next:{title:"Using Environment Variables with Platformatic",permalink:"/docs/1.22.0/guides/environment-variables"}},c={},d=[{value:"Error: No tables found in the database",id:"error-no-tables-found-in-the-database",level:2},{value:"Logging SQL queries",id:"logging-sql-queries",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"debug-platformatic-db",children:"Debug Platformatic DB"}),"\n",(0,r.jsx)(t.h2,{id:"error-no-tables-found-in-the-database",children:"Error: No tables found in the database"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Verify your database connection string is correct in your Platformatic DB configuration","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Make sure the database name is correct"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Ensure that you have run the migration command ",(0,r.jsx)(t.code,{children:"npx platformatic db migrations apply"})," before starting the server. See the Platformatic DB ",(0,r.jsx)(t.a,{href:"https://docs.platformatic.dev/docs/reference/db/migrations",children:"Migrations"})," documentation for more information on working with migrations."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"logging-sql-queries",children:"Logging SQL queries"}),"\n",(0,r.jsxs)(t.p,{children:["You can see all the queries that are being run against your database in your terminal by setting the logger level to trace in your ",(0,r.jsx)(t.code,{children:"platformatic.db.json"})," config file:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="platformatic.db.json"',children:'{\n  "server": {\n    "logger": {\n      "level": "trace"\n    }\n  }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var r=n(67294);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);