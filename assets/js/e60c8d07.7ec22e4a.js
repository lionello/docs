"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[61045],{88876:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=s(85893),a=s(11151);const r={},t="User Roles & Metadata",i={id:"reference/db/authorization/user-roles-metadata",title:"User Roles & Metadata",description:"Introduction",source:"@site/versioned_docs/version-1.21.1/reference/db/authorization/user-roles-metadata.md",sourceDirName:"reference/db/authorization",slug:"/reference/db/authorization/user-roles-metadata",permalink:"/docs/1.21.1/reference/db/authorization/user-roles-metadata",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.21.1/reference/db/authorization/user-roles-metadata.md",tags:[],version:"1.21.1",frontMatter:{},sidebar:"docs",previous:{title:"Strategies",permalink:"/docs/1.21.1/reference/db/authorization/strategies"},next:{title:"Rules",permalink:"/docs/1.21.1/reference/db/authorization/rules"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Roles",id:"roles",level:2},{value:"Reserved roles",id:"reserved-roles",level:3},{value:"Anonymous role",id:"anonymous-role",level:3},{value:"Role impersonation",id:"role-impersonation",level:3},{value:"Role configuration",id:"role-configuration",level:3},{value:"User metadata",id:"user-metadata",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"user-roles--metadata",children:"User Roles & Metadata"}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:["Roles and user information are passed to Platformatic DB from an external\nauthentication service as a string (JWT claims or HTTP headers). We refer to\nthis data as ",(0,o.jsx)(n.a,{href:"#user-metadata",children:"user metadata"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"roles",children:"Roles"}),"\n",(0,o.jsxs)(n.p,{children:["Users can have a list of roles associated with them. These roles can be specified\nin an ",(0,o.jsx)(n.code,{children:"X-PLATFORMATIC-ROLE"})," property as a list of comma separated role names\n(the key name is ",(0,o.jsx)(n.a,{href:"/docs/1.21.1/reference/db/configuration#role-and-anonymous-keys",children:"configurable"}),")."]}),"\n",(0,o.jsx)(n.p,{children:"Note that role names are just strings."}),"\n",(0,o.jsx)(n.h3,{id:"reserved-roles",children:"Reserved roles"}),"\n",(0,o.jsx)(n.p,{children:"Some special role names are reserved by Platformatic DB:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"platformatic-admin"})," : this identifies a user who has admin powers"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"anonymous"}),": set automatically when no roles are associated"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"anonymous-role",children:"Anonymous role"}),"\n",(0,o.jsxs)(n.p,{children:["If a user has no role, the ",(0,o.jsx)(n.code,{children:"anonymous"})," role is assigned automatically. It's possible\nto specify rules to apply to users with this role:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'    {\n      "role": "anonymous",\n      "entity": "page",\n      "find": false,\n      "delete": false,\n      "save": false\n    }\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this case, a user that has no role or explicitly has the ",(0,o.jsx)(n.code,{children:"anonymous"})," role\ncannot perform any operations on the ",(0,o.jsx)(n.code,{children:"page"})," entity."]}),"\n",(0,o.jsx)(n.h3,{id:"role-impersonation",children:"Role impersonation"}),"\n",(0,o.jsxs)(n.p,{children:["If a request includes a valid ",(0,o.jsx)(n.code,{children:"X-PLATFORMATIC-ADMIN-SECRET"})," HTTP header it is\npossible to impersonate a user roles. The roles to impersonate can be specified\nby sending a ",(0,o.jsx)(n.code,{children:"X-PLATFORMATIC-ROLE"})," HTTP header containing a comma separated list\nof roles."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["When JWT or Webhook are set, user role impersonation is not enabled, and the role\nis always set as ",(0,o.jsx)(n.code,{children:"platfomatic-admin"})," automatically if the ",(0,o.jsx)(n.code,{children:"X-PLATFORMATIC-ADMIN-SECRET"}),"\nHTTP header is specified."]})}),"\n",(0,o.jsx)(n.h3,{id:"role-configuration",children:"Role configuration"}),"\n",(0,o.jsxs)(n.p,{children:["The roles key in user metadata defaults to ",(0,o.jsx)(n.code,{children:"X-PLATFORMATIC-ROLE"}),". It's possible to change it using the ",(0,o.jsx)(n.code,{children:"roleKey"})," field in configuration. Same for the ",(0,o.jsx)(n.code,{children:"anonymous"})," role, which value can be changed using ",(0,o.jsx)(n.code,{children:"anonymousRole"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:' "authorization": {\n    "roleKey": "X-MYCUSTOM-ROLE_KEY",\n    "anonymousRole": "anonym",\n    "rules": [\n    ...\n    ]\n  }\n'})}),"\n",(0,o.jsx)(n.h2,{id:"user-metadata",children:"User metadata"}),"\n",(0,o.jsxs)(n.p,{children:["User roles and other user data, such as ",(0,o.jsx)(n.code,{children:"userId"}),", are referred to by Platformatic\nDB as user metadata."]}),"\n",(0,o.jsxs)(n.p,{children:["User metadata is parsed from an HTTP request and stored in a ",(0,o.jsx)(n.code,{children:"user"})," object on the\nFastify request object. This object is populated on-demand, but it's possible\nto populate it explicity with ",(0,o.jsx)(n.code,{children:"await request.setupDBAuthorizationUser()"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>t});var o=s(67294);const a={},r=o.createContext(a);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);