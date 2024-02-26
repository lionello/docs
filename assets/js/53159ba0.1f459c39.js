"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[22971],{91852:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=i(85893),t=i(11151);const r={},l="Prerequisites",o={id:"guides/add-custom-functionality/prerequisites",title:"Prerequisites",description:"In the following examples we assume you already",source:"@site/versioned_docs/version-1.21.0/guides/add-custom-functionality/prerequisites.md",sourceDirName:"guides/add-custom-functionality",slug:"/guides/add-custom-functionality/prerequisites",permalink:"/docs/1.21.0/guides/add-custom-functionality/prerequisites",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.21.0/guides/add-custom-functionality/prerequisites.md",tags:[],version:"1.21.0",frontMatter:{},sidebar:"docs",previous:{title:"Add Custom Functionality",permalink:"/docs/1.21.0/guides/add-custom-functionality/introduction"},next:{title:"Extend GraphQL Schema",permalink:"/docs/1.21.0/guides/add-custom-functionality/extend-graphql"}},a={},d=[{value:"Config File",id:"config-file",level:2},{value:"Database and Migrations",id:"database-and-migrations",level:2},{value:"Plugin",id:"plugin",level:2},{value:"Start the server",id:"start-the-server",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"In the following examples we assume you already"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["cloned ",(0,s.jsx)(n.code,{children:"platformatic/platformatic"})," repo from Github"]}),"\n",(0,s.jsxs)(n.li,{children:["ran ",(0,s.jsx)(n.code,{children:"pnpm install"})," to install all dependencies"]}),"\n",(0,s.jsxs)(n.li,{children:["have ",(0,s.jsx)(n.a,{href:"https://docker.io",children:"Docker"})," and ",(0,s.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:(0,s.jsx)(n.code,{children:"docker-compose"})})," installed and running on your machine"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"config-file",children:"Config File"}),"\n",(0,s.jsxs)(n.p,{children:["Create a ",(0,s.jsx)(n.code,{children:"platformatic.db.json"})," file in the root project, it will be loaded automatically by Platformatic (no need of ",(0,s.jsx)(n.code,{children:"-c, --config"})," flag)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "server": {\n    "hostname": "127.0.0.1",\n    "port": 3042,\n    "logger": {\n      "level": "info"\n    }\n  },\n  "db": {\n    "connectionString": "postgres://postgres:postgres@127.0.0.1/postgres"\n  },\n  "migrations": {\n    "dir": "./migrations",\n    "table": "versions"\n  },\n  "plugins": {\n    "paths": ["plugin.js"]\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Once Platformatic DB starts, its API will be available at ",(0,s.jsx)(n.code,{children:"http://127.0.0.1:3042"})]}),"\n",(0,s.jsx)(n.li,{children:"It will connect and read the schema from a PostgreSQL DB"}),"\n",(0,s.jsxs)(n.li,{children:["Will read migrations from ",(0,s.jsx)(n.code,{children:"./migrations"})," directory"]}),"\n",(0,s.jsxs)(n.li,{children:["Will load custom functionality from ",(0,s.jsx)(n.code,{children:"./plugin.js"})," file."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"database-and-migrations",children:"Database and Migrations"}),"\n",(0,s.jsxs)(n.p,{children:["Start the database using the sample ",(0,s.jsx)(n.code,{children:"docker-compose.yml"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ docker-compose up -d postgresql\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For migrations create a ",(0,s.jsx)(n.code,{children:"./migrations"})," directory and a ",(0,s.jsx)(n.code,{children:"001.do.sql"})," file with following contents"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE pages (\n  id SERIAL PRIMARY KEY,\n  title VARCHAR(255) NOT NULL,\n  body TEXT NOT NULL\n);\nINSERT INTO pages (title, body) VALUES ('First Page', 'This is the first sample page');\nINSERT INTO pages (title, body) VALUES ('Second Page', 'This is the second sample page');\nINSERT INTO pages (title, body) VALUES ('Third Page', 'This is the third sample page');\n"})}),"\n",(0,s.jsx)(n.h2,{id:"plugin",children:"Plugin"}),"\n",(0,s.jsxs)(n.p,{children:["Copy and paste this boilerplate code into ",(0,s.jsx)(n.code,{children:"./plugin.js"})," file. We will fill this in the examples."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"'use strict'\n\nmodule.exports = async (app, opts) {\n  // we will fill this later\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"start-the-server",children:"Start the server"}),"\n",(0,s.jsx)(n.p,{children:"Run"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ platformatic db start\n"})}),"\n",(0,s.jsx)(n.p,{children:"You will get an output similar to this"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'                           /////////////\n                        /////         /////\n                      ///                 ///\n                    ///                     ///\n                   ///                       ///\n               &&  ///                       ///  &&\n          &&&&&&   ///                       ///   &&&&&&\n        &&&&       ///                      ///        &&&&\n      &&&          ///                     ///            &&&&&&&&&&&&\n     &&&           ///     ///////      ////               &&       &&&&&\n     &&            ///    ///////////////                               &&&\n    &&&            ///     ///                                           &&&\n     &&&           ///      //                                            &&\n     &&&           ///                                                    &&\n       &&&         ///                                                   &&&\n         &&&&      ///                                                 &&&\n            &&&&&% ///  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\n                   ///\n                   ///\n                   ///\n                   ///\n                   ///\n                   ///\n\n[11:19:46.562] INFO (65122): running 001.do.sql\n[11:19:46.929] INFO (65122): server listening\n    url: "http://127.0.0.1:3042"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Now is possible to create some examples, like ",(0,s.jsx)(n.a,{href:"./extend-graphql",children:"extend GraphQL Schema"}),", ",(0,s.jsx)(n.a,{href:"./extend-rest",children:"extend REST API"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var s=i(67294);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);