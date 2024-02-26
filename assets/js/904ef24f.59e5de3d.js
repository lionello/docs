"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[4806],{26487:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=i(85893),s=i(11151);const o={},r="Plugin",l={id:"reference/composer/plugin",title:"Plugin",description:"If you want to add features to a service, you will need to register a plugin, which will be in the form of a standard Fastify plugin.",source:"@site/versioned_docs/version-1.21.0/reference/composer/plugin.md",sourceDirName:"reference/composer",slug:"/reference/composer/plugin",permalink:"/docs/1.21.0/reference/composer/plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.21.0/reference/composer/plugin.md",tags:[],version:"1.21.0",frontMatter:{}},a={},c=[{value:"Hot Reload",id:"hot-reload",level:2},{value:"Directories",id:"directories",level:2},{value:"Multiple plugins",id:"multiple-plugins",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"plugin",children:"Plugin"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to add features to a service, you will need to register a plugin, which will be in the form of a standard ",(0,t.jsx)(n.a,{href:"https://fastify.io",children:"Fastify"})," plugin."]}),"\n",(0,t.jsx)(n.p,{children:"The config file will specify where the plugin file is located as the example below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "plugins": {\n    "paths": ["./plugin/index.js"]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The path is relative to the config file path."}),"\n",(0,t.jsxs)(n.p,{children:["You should export an async ",(0,t.jsx)(n.code,{children:"function"})," which receives a parameters"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"app"})," (",(0,t.jsx)(n.code,{children:"FastifyInstance"}),") that is the main fastify ",(0,t.jsx)(n.a,{href:"https://www.fastify.io/docs/latest/Reference/Server/#instance",children:"instance"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"opts"})," all the options specified in the config file after ",(0,t.jsx)(n.code,{children:"path"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"hot-reload",children:"Hot Reload"}),"\n",(0,t.jsxs)(n.p,{children:["Plugin file is being watched by ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/fs.html#fspromiseswatchfilename-options",children:(0,t.jsx)(n.code,{children:"fs.watch"})})," function."]}),"\n",(0,t.jsx)(n.p,{children:"You don't need to reload Platformatic Composer server while working on your plugin. Every time you save, the watcher will trigger a reload event and the server will auto-restart and load your updated code."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["At this time, on Linux, file watch in subdirectories is not supported due to a Node.js limitation (documented ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/fs.html#caveats",children:"here"}),")."]})}),"\n",(0,t.jsx)(n.h2,{id:"directories",children:"Directories"}),"\n",(0,t.jsxs)(n.p,{children:["The path can also be a directory. In that case, the directory will be loaded with ",(0,t.jsx)(n.a,{href:"https://github.com/fastify/fastify-autoload",children:(0,t.jsx)(n.code,{children:"@fastify/autoload"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Consider the following directory structure:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u251c\u2500\u2500 routes\n\u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u251c\u2500\u2500 something.js\n\u2502   \u2502   \u2514\u2500\u2500 bar\n\u2502   \u2502       \u2514\u2500\u2500 baz.js\n\u2502   \u251c\u2500\u2500 single-plugin\n\u2502   \u2502   \u2514\u2500\u2500 utils.js\n\u2502   \u2514\u2500\u2500 another-plugin.js\n\u2514\u2500\u2500 platformatic.composer.json\n"})}),"\n",(0,t.jsx)(n.p,{children:"By default the folder will be added as a prefix to all the routes defined within them.\nSee the autoload documentation for all the options to customize this behavior."}),"\n",(0,t.jsx)(n.h2,{id:"multiple-plugins",children:"Multiple plugins"}),"\n",(0,t.jsx)(n.p,{children:"Multiple plugins can be loaded in parallel by specifying an array:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "plugins": {\n    "paths": [{\n      "path": "./plugin/index.js"\n    }, {\n      "path": "./routes/"\n    }]\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var t=i(67294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);