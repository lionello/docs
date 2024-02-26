"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[70699],{42347:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=i(85893),s=i(11151);const o={},r="Plugin",a={id:"reference/db/plugin",title:"Plugin",description:"If you want to extend Platformatic DB features, it is possible to register a plugin, which will be in the form of a standard Fastify plugin.",source:"@site/versioned_docs/version-1.21.0/reference/db/plugin.md",sourceDirName:"reference/db",slug:"/reference/db/plugin",permalink:"/docs/1.21.0/reference/db/plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.21.0/reference/db/plugin.md",tags:[],version:"1.21.0",frontMatter:{},sidebar:"docs",previous:{title:"Rules",permalink:"/docs/1.21.0/reference/db/authorization/rules"},next:{title:"Logging",permalink:"/docs/1.21.0/reference/db/logging"}},l={},c=[{value:"Hot Reload",id:"hot-reload",level:2},{value:"Directories",id:"directories",level:2},{value:"Multiple plugins",id:"multiple-plugins",level:2},{value:"TypeScript and autocompletion",id:"typescript-and-autocompletion",level:2},{value:"Plugin definition with TypeScript",id:"plugin-definition-with-typescript",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"plugin",children:"Plugin"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to extend Platformatic DB features, it is possible to register a plugin, which will be in the form of a standard ",(0,t.jsx)(n.a,{href:"https://fastify.io",children:"Fastify"})," plugin."]}),"\n",(0,t.jsx)(n.p,{children:"The config file will specify where the plugin file is located as the example below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "plugins": {\n    "paths": ["./plugin/index.js"]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The paths are relative to the config file path."}),"\n",(0,t.jsx)(n.p,{children:"Once the config file is set up, you can write your plugin to extend Platformatic DB API or write your custom business logic."}),"\n",(0,t.jsxs)(n.p,{children:["You should export an async ",(0,t.jsx)(n.code,{children:"function"})," which receives a parameters"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"app"})," (",(0,t.jsx)(n.code,{children:"FastifyInstance"}),") that is the main fastify ",(0,t.jsx)(n.a,{href:"https://www.fastify.io/docs/latest/Reference/Server/#instance",children:"instance"})," running Platformatic DB"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"opts"})," all the options specified in the config file after ",(0,t.jsx)(n.code,{children:"path"})]}),"\n",(0,t.jsx)(n.li,{}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["You can always access Platformatic ",(0,t.jsx)(n.a,{href:"/docs/1.21.0/reference/sql-mapper/introduction",children:"data mapper"})," through ",(0,t.jsx)(n.code,{children:"app.platformatic"})," property."]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["To make sure that a user has the appropriate set of permissions to perform any action on an entity the ",(0,t.jsx)(n.code,{children:"context"})," should be passed to the ",(0,t.jsx)(n.code,{children:"entity mapper"})," operation like this:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"app.post('/', async (req, reply) => {\n  const ctx = req.createPlatformaticCtx()\n\n  await app.platformatic.entities.movies.find({\n    where: { /*...*/ },\n    ctx\n  })\n})\n"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Check some ",(0,t.jsx)(n.a,{href:"/docs/1.21.0/guides/add-custom-functionality/introduction",children:"examples"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"hot-reload",children:"Hot Reload"}),"\n",(0,t.jsxs)(n.p,{children:["Plugin file is being watched by ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/fs.html#fspromiseswatchfilename-options",children:(0,t.jsx)(n.code,{children:"fs.watch"})})," function."]}),"\n",(0,t.jsx)(n.p,{children:"You don't need to reload Platformatic DB server while working on your plugin. Every time you save, the watcher will trigger a reload event and the server will auto-restart and load your updated code."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["At this time, on Linux, file watch in subdirectories is not supported due to a Node.js limitation (documented ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/fs.html#caveats",children:"here"}),")."]})}),"\n",(0,t.jsx)(n.h2,{id:"directories",children:"Directories"}),"\n",(0,t.jsxs)(n.p,{children:["The path can also be a directory. In that case, the directory will be loaded with ",(0,t.jsx)(n.a,{href:"https://github.com/fastify/fastify-autoload",children:(0,t.jsx)(n.code,{children:"@fastify/autoload"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Consider the following directory structure:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u251c\u2500\u2500 routes\n\u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u251c\u2500\u2500 something.js\n\u2502   \u2502   \u2514\u2500\u2500 bar\n\u2502   \u2502       \u2514\u2500\u2500 baz.js\n\u2502   \u251c\u2500\u2500 single-plugin\n\u2502   \u2502   \u2514\u2500\u2500 utils.js\n\u2502   \u2514\u2500\u2500 another-plugin.js\n\u2514\u2500\u2500 platformatic.service.json\n"})}),"\n",(0,t.jsx)(n.p,{children:"By default the folder will be added as a prefix to all the routes defined within them.\nSee the autoload documentation for all the options to customize this behavior."}),"\n",(0,t.jsx)(n.h2,{id:"multiple-plugins",children:"Multiple plugins"}),"\n",(0,t.jsx)(n.p,{children:"Multiple plugins can be loaded in parallel by specifying an array:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "plugins": {\n    "paths": [{\n      "path": "./plugin/index.js"\n    }, {\n      "path": "./routes/"\n    }]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"fastify.swagger()"}),"\n",(0,t.jsx)(n.h2,{id:"typescript-and-autocompletion",children:"TypeScript and autocompletion"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to access any of the types provided by Platformatic DB, generate them using the ",(0,t.jsx)(n.code,{children:"platformatic db types"})," command.\nThis will create a ",(0,t.jsx)(n.code,{children:"global.d.ts"})," file that you can now import everywhere, like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'/// <references <types="./global.d.ts" />\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Remember to adjust the path to ",(0,t.jsx)(n.code,{children:"global.d.ts"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"plugin-definition-with-typescript",children:"Plugin definition with TypeScript"}),"\n",(0,t.jsx)(n.p,{children:"Here is an example of writing a plugin in TypeScript:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"/// <reference types=\"./global.d.ts\" />\nimport { FastifyInstance, FastifyPluginOptions } from 'fastify'\n\nexport default async function (fastify: FastifyInstance, opts: FastifyPluginOptions) {\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that you need to add the ",(0,t.jsx)(n.code,{children:'"plugins": { "typescript": true }'})," configuration to your ",(0,t.jsx)(n.code,{children:"platformatic.service.json"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(67294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);