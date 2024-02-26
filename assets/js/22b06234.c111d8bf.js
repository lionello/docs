"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[83850],{94138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(85893),r=n(11151);const i={},a="Transactions",o={id:"reference/sql-mapper/entities/transactions",title:"Transactions",description:"Platformatic DB entities support transaction through the tx optional parameter.",source:"@site/versioned_docs/version-1.22.0/reference/sql-mapper/entities/transactions.md",sourceDirName:"reference/sql-mapper/entities",slug:"/reference/sql-mapper/entities/transactions",permalink:"/docs/1.22.0/reference/sql-mapper/entities/transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.22.0/reference/sql-mapper/entities/transactions.md",tags:[],version:"1.22.0",frontMatter:{},sidebar:"docs",previous:{title:"Relations",permalink:"/docs/1.22.0/reference/sql-mapper/entities/relations"},next:{title:"Introduction to the sql-events module",permalink:"/docs/1.22.0/reference/sql-events/introduction"}},c={},l=[];function p(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"transactions",children:"Transactions"}),"\n",(0,s.jsxs)(t.p,{children:["Platformatic DB entities support transaction through the ",(0,s.jsx)(t.code,{children:"tx"})," optional parameter.\nIf the ",(0,s.jsx)(t.code,{children:"tx"})," parameter is provided, the entity will join the transaction, e.g.:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"\nconst { connect } = require('@platformatic/sql-mapper')\nconst logger = pino(pretty())\n\nasync function main() {\n  const pgConnectionString = 'postgres://postgres:postgres@127.0.0.1/postgres'\n  const { db, entities} = await connect({\n    connectionString: pgConnectionString,\n    log: logger,\n  })\n\n  const result = await db.tx(async tx => {\n    // these two operations will be executed in the same transaction\n   const authorResult = await entities.author.save({\n      fields: ['id', 'name'],\n      input: { name: 'test'},\n      tx\n    })\n    const res = await entities.page.save({\n      fields: ['title', 'authorId'],\n      input: { title: 'page title', authorId: authorResult.id },\n      tx\n    })\n    return res\n  })\n\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Throwing an Error triggers a transaction rollback:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"    try {\n      await db.tx(async tx => {\n        await entities.page.save({\n          input: { title: 'new page' },\n          fields: ['title'],\n          tx\n        })\n\n        // here we have `new page` \n        const findResult = await entities.page.find({ fields: ['title'], tx })\n        \n        // (...)\n\n        // We force the rollback\n        throw new Error('rollback')\n      })\n    } catch (e) {\n      // rollback\n    }\n    \n    // no 'new page' here...\n    const afterRollback = await entities.page.find({ fields: ['title'] })\n\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var s=n(67294);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);