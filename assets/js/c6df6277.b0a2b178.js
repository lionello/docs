"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[9324],{56528:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(85893),o=t(11151);const s={},d="Advanced Fly.io Deployment",a={id:"guides/deployment/advanced-fly-io-deployment",title:"Advanced Fly.io Deployment",description:"Techniques used in this guide are based on the Deploy to Fly.io with SQLite",source:"@site/versioned_docs/version-1.20.2/guides/deployment/advanced-fly-io-deployment.md",sourceDirName:"guides/deployment",slug:"/guides/deployment/advanced-fly-io-deployment",permalink:"/docs/1.20.2/guides/deployment/advanced-fly-io-deployment",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.20.2/guides/deployment/advanced-fly-io-deployment.md",tags:[],version:"1.20.2",frontMatter:{},sidebar:"docs",previous:{title:"Deploy to Fly.io with SQLite",permalink:"/docs/1.20.2/guides/deployment/deploy-to-fly-io-with-sqlite"},next:{title:"Seed a Database",permalink:"/docs/1.20.2/guides/seed-a-database"}},l={},c=[{value:"Adding <code>sqlite</code> for debugging",id:"adding-sqlite-for-debugging",level:2}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"advanced-flyio-deployment",children:"Advanced Fly.io Deployment"}),"\n",(0,i.jsxs)(n.p,{children:["Techniques used in this guide are based on ",(0,i.jsx)(n.a,{href:"/docs/1.20.2/guides/deployment/deploy-to-fly-io-with-sqlite",children:"the Deploy to Fly.io with SQLite"}),"\ndeployment guide."]}),"\n",(0,i.jsxs)(n.h2,{id:"adding-sqlite-for-debugging",children:["Adding ",(0,i.jsx)(n.code,{children:"sqlite"})," for debugging"]}),"\n",(0,i.jsxs)(n.p,{children:["With a combination of Docker and Fly.io, you can create an easy way to debug\nyour sqlite application without stopping your application or exporting the data.\nAt the end of this guide, you will be able to run ",(0,i.jsx)(n.code,{children:"fly ssh console -C db-cli"})," to\nbe dropped into your remote database."]}),"\n",(0,i.jsxs)(n.p,{children:["Start by creating a script for launching the database, calling it ",(0,i.jsx)(n.strong,{children:"db-cli.sh"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"#!/bin/sh\nset -x\n# DSN will be defined in the Dockerfile\nsqlite3 $DSN\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Create a new ",(0,i.jsx)(n.strong,{children:"Dockerfile"})," which will act as the build and deployment image:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-dockerfile",children:'FROM node:18-alpine\n\n# Setup sqlite viewer\nRUN apk add sqlite\nENV DSN "/app/.platformatic/data/app.db"\nCOPY db-cli.sh /usr/local/bin/db-cli\nRUN chmod +x /usr/local/bin/db-cli\n\nWORKDIR /app\nCOPY package.json package.json\nCOPY package-lock.json package-lock.json\n\nRUN npm ci --omit=dev\n\nCOPY platformatic.db.json platformatic.db.json\n\nCOPY migrations migrations\n# Uncomment if your application is running a plugin\n# COPY plugin.js plugin.js\n\nEXPOSE 8080\n\nCMD ["npm", "start"]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Add a ",(0,i.jsx)(n.code,{children:"start"})," script to your ",(0,i.jsx)(n.strong,{children:"package.json"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "start": "platformatic db"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"With Fly, it becomes straightforward to connect directly to the database by\nrunning the following command from your local machine:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"fly ssh console -C db-cli\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>d});var i=t(67294);const o={},s=i.createContext(o);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);