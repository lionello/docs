"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[40527],{11849:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>l});var i=a(85893),r=a(11151);const s={},o="Architecture",n={id:"getting-started/architecture",title:"Architecture",description:"Platformatic is a collection of Open Source tools designed to eliminate friction",source:"@site/versioned_docs/version-1.20.2/getting-started/architecture.md",sourceDirName:"getting-started",slug:"/getting-started/architecture",permalink:"/docs/1.20.2/getting-started/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.20.2/getting-started/architecture.md",tags:[],version:"1.20.2",frontMatter:{},sidebar:"docs",previous:{title:"Movie Quotes App Tutorial",permalink:"/docs/1.20.2/getting-started/movie-quotes-app-tutorial"},next:{title:"Guides",permalink:"/docs/1.20.2/category/guides"}},c={},l=[{value:"Platformatic Service",id:"platformatic-service",level:2},{value:"Platformatic DB",id:"platformatic-db",level:2},{value:"Platformatic Composer",id:"platformatic-composer",level:2},{value:"Platformatic Runtime",id:"platformatic-runtime",level:2},{value:"Platformatic Stackables",id:"platformatic-stackables",level:2},{value:"Platformatic Cloud",id:"platformatic-cloud",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(t.p,{children:"Platformatic is a collection of Open Source tools designed to eliminate friction\nin backend development.\nThe base services are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#platformatic-db",children:"Platformatic DB"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#platformatic-service",children:"Platformatic Service"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["These micro-services can be developed and deployed independently or aggregated into a single API using ",(0,i.jsx)(t.a,{href:"#platformatic-composer",children:"Platformatic Composer"})," or deployed as a single unit using ",(0,i.jsx)(t.a,{href:"#platformatic-runtime",children:"Platformatic Runtime"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["All platformatic components can be reused with ",(0,i.jsx)(t.a,{href:"#platformatic-stackbles",children:"Stackables"}),".\nAnd finally, all Platformatic components can be deployed on ",(0,i.jsx)(t.a,{href:"#platformatic-cloud",children:"Platformatic Cloud"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"platformatic-service",children:"Platformatic Service"}),"\n",(0,i.jsxs)(t.p,{children:["A Platformatic Service is an HTTP server based on ",(0,i.jsx)(t.a,{href:"https://www.fastify.io/",children:"Fastify"})," that allows developers to build robust APIs with Node.js.\nWith Platformatic Service you can:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Add custom functionality in a ",(0,i.jsx)(t.a,{href:"https://fastify.dev/docs/latest/Reference/Plugins",children:"Fastify plugin"})]}),"\n",(0,i.jsxs)(t.li,{children:["Write plugins in JavaScript or ",(0,i.jsx)(t.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"})]}),"\n",(0,i.jsx)(t.li,{children:"Optionally use TypeScript to write your application code"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"A Platformatic Service is the basic building block of a Platformatic application."}),"\n",(0,i.jsx)(t.h2,{id:"platformatic-db",children:"Platformatic DB"}),"\n",(0,i.jsx)(t.p,{children:"Platformatic DB can expose a SQL database by dynamically mapping it to REST/OpenAPI\nand GraphQL endpoints. It supports a limited subset of the SQL query language, but\nalso allows developers to add their own custom routes and resolvers."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Platformatic DB Architecture",src:a(54319).Z+"",width:"542",height:"506"})}),"\n",(0,i.jsx)(t.p,{children:"Platformatic DB is composed of a few key libraries:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"@platformatic/sql-mapper"})," - follows the ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Data_mapper_pattern",children:"Data Mapper pattern"})," to build an API on top of a SQL database.\nInternally it uses the ",(0,i.jsxs)(t.a,{href:"https://www.atdatabases.org/",children:[(0,i.jsx)(t.code,{children:"@database"})," project"]}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"@platformatic/sql-openapi"})," - uses ",(0,i.jsx)(t.code,{children:"sql-mapper"})," to create a series of REST routes and matching OpenAPI definitions.\nInternally it uses ",(0,i.jsx)(t.a,{href:"https://github.com/fastify/fastify-swagger",children:(0,i.jsx)(t.code,{children:"@fastify/swagger"})}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"@platformatic/sql-graphql"})," - uses ",(0,i.jsx)(t.code,{children:"sql-mapper"})," to create a GraphQL endpoint and schema. ",(0,i.jsx)(t.code,{children:"sql-graphql"})," also support Federation.\nInternally it uses ",(0,i.jsx)(t.a,{href:"https://github.com/mercuriusjs/mercurius",children:(0,i.jsx)(t.code,{children:"mercurius"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Platformatic DB allows you to load a ",(0,i.jsx)(t.a,{href:"https://www.fastify.io/docs/latest/Reference/Plugins/",children:"Fastify plugin"})," during server startup that contains your own application-specific code.\nThe plugin can add more routes or resolvers \u2014 these will automatically be shown in the OpenAPI and GraphQL schemas."]}),"\n",(0,i.jsxs)(t.p,{children:["SQL database migrations are also supported. They're implemented internally with the ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/postgrator",children:(0,i.jsx)(t.code,{children:"postgrator"})})," library."]}),"\n",(0,i.jsx)(t.h2,{id:"platformatic-composer",children:"Platformatic Composer"}),"\n",(0,i.jsx)(t.p,{children:"Platformatic Composer is an HTTP server that automatically aggregates multiple services APIs into a single API."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Platformatic Composer Architecture",src:a(94126).Z+"",width:"543",height:"356"})}),"\n",(0,i.jsx)(t.p,{children:"The composer acts as a proxy for the underlying services, and automatically generates an OpenAPI definition that combines all the services' routes, acting as reverse proxy for the composed services."}),"\n",(0,i.jsx)(t.h2,{id:"platformatic-runtime",children:"Platformatic Runtime"}),"\n",(0,i.jsx)(t.p,{children:"Platformatic Runtime is an environment for running multiple Platformatic microservices as a single monolithic deployment unit."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Platformatic Runtime Architecture",src:a(11144).Z+"",width:"573",height:"406"})}),"\n",(0,i.jsx)(t.p,{children:'In a Platformatic Runtime, each service is a separate process that communicates with Interservice communication using private message passing.\nThe Runtime exposes an "entrypoint" API for the whole runtime. Only the entrypoint binds to an operating system port and can be reached from outside of the runtime.'}),"\n",(0,i.jsx)(t.h2,{id:"platformatic-stackables",children:"Platformatic Stackables"}),"\n",(0,i.jsx)(t.p,{children:"Platformatic Stackables are reusable components that can be used to build Platformatic Services. Services can extends these modules and add custom functionalities."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Platformatic Stackables",src:a(21721).Z+"",width:"359",height:"350"})}),"\n",(0,i.jsx)(t.p,{children:"This is useful to publish the application on the public npm registry (or a private one!), including building your own CLI, or to create a specialized template for your organization to allow for centralized bugfixes and updates."}),"\n",(0,i.jsx)(t.h2,{id:"platformatic-cloud",children:"Platformatic Cloud"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://platformatic.cloud",children:"Platformatic Cloud"})," allows to deploy Platformatic Applications on our cloud for both static deployments and PR reviews.\nThe deployment on the cloud can be done:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Automatically using the GitHub actions created with ",(0,i.jsx)(t.code,{children:"create-platformatic"})]}),"\n",(0,i.jsxs)(t.li,{children:["Using the Platformatic CLI (see ",(0,i.jsx)(t.a,{href:"https://docs.platformatic.dev/docs/reference/cli#deploy",children:"https://docs.platformatic.dev/docs/reference/cli#deploy"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If you configure the GitHub actions, you can deploy your application on the cloud by simply pushing to the main branch or creating a PR. For a guide about how to do a deploy on Platformatic Cloud, please check the ",(0,i.jsx)(t.a,{href:"https://docs.platformatic.dev/docs/platformatic-cloud/quick-start-guide",children:"Platformatic Cloud Quick Start Guide"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:['If you create a PR, we calculate automatically the "risk score" for that PR. For more info about this,\nsee ',(0,i.jsx)(t.a,{href:"https://docs.platformatic.dev/docs/platformatic-cloud/quick-start-guide/#calculate-the-risk-of-a-pull-request",children:"Calculate the risk of a pull request"}),"."]})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},94126:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/platformatic-composer-architecture-38f581909b5f387f4a5e332eae9b70d7.png"},54319:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/platformatic-db-architecture-18777402a982479203f5c1168887065b.png"},11144:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/platformatic-runtime-architecture-92a4f5731929bcaa72fe87ca6724f1de.png"},21721:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/platformatic-stackables-architecture-097e176a3485b619ec6f7bc3ec9a45e2.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>n,a:()=>o});var i=a(67294);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);