"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[48136],{7770:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(85893),o=t(11151);const i={},s="Logging",l={id:"reference/db/logging",title:"Logging",description:"Platformatic DB uses a low overhead logger named Pino",source:"@site/versioned_docs/version-1.20.2/reference/db/logging.md",sourceDirName:"reference/db",slug:"/reference/db/logging",permalink:"/docs/1.20.2/reference/db/logging",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.20.2/reference/db/logging.md",tags:[],version:"1.20.2",frontMatter:{},sidebar:"docs",previous:{title:"Plugin",permalink:"/docs/1.20.2/reference/db/plugin"},next:{title:"Programmatic API",permalink:"/docs/1.20.2/reference/db/programmatic"}},a={},d=[{value:"Logger output level",id:"logger-output-level",level:2},{value:"Log formatting",id:"log-formatting",level:2},{value:"Query Logging",id:"query-logging",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"logging",children:"Logging"}),"\n",(0,r.jsxs)(n.p,{children:["Platformatic DB uses a low overhead logger named ",(0,r.jsx)(n.a,{href:"https://github.com/pinojs/pino",children:"Pino"}),"\nto output structured log messages."]}),"\n",(0,r.jsx)(n.h2,{id:"logger-output-level",children:"Logger output level"}),"\n",(0,r.jsxs)(n.p,{children:["By default the logger output level is set to ",(0,r.jsx)(n.code,{children:"info"}),", meaning that all log messages\nwith a level of ",(0,r.jsx)(n.code,{children:"info"})," or above will be output by the logger. See the\n",(0,r.jsx)(n.a,{href:"https://github.com/pinojs/pino/blob/master/docs/api.md#level-string",children:"Pino documentation"}),"\nfor details on the supported log levels."]}),"\n",(0,r.jsxs)(n.p,{children:["The logger output level can be overridden by adding a ",(0,r.jsx)(n.code,{children:"logger"})," object to the ",(0,r.jsx)(n.code,{children:"server"}),"\nconfiguration settings group:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="platformatic.db.json"',children:'{\n  "server": {\n    "logger": {\n      "level": "error"\n    },\n   ...\n  },\n  ...\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"log-formatting",children:"Log formatting"}),"\n",(0,r.jsxs)(n.p,{children:["If you run Platformatic DB in a terminal, where standard out (",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)",children:"stdout"}),")\nis a ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Tty_(Unix)",children:"TTY"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/pinojs/pino-pretty",children:"pino-pretty"})," is automatically used\nto pretty print the logs and make them easier to read during development."]}),"\n",(0,r.jsx)(n.li,{children:"The Platformatic logo is printed (if colors are supported in the terminal emulator)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'$ npx platformatic db start\n\n\n\n\n                           /////////////\n                        /////         /////\n                      ///                 ///\n                    ///                     ///\n                   ///                       ///\n               &&  ///                       ///  &&\n          &&&&&&   ///                       ///   &&&&&&\n        &&&&       ///                      ///        &&&&\n      &&&          ///                     ///            &&&&&&&&&&&&\n     &&&           ///     ///////      ////               &&       &&&&&\n     &&            ///    ///////////////                               &&&\n    &&&            ///     ///                                           &&&\n     &&&           ///      //                                            &&\n     &&&           ///                                                    &&\n       &&&         ///                                                   &&&\n         &&&&      ///                                                 &&&\n            &&&&&  ///  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&\n                   ///\n                   ///\n                   ///\n                   ///\n                   ///\n                   ///\n\n\n[11:20:33.466] INFO (337606): server listening\n    url: "http://127.0.0.1:3042"\n\n'})}),"\n",(0,r.jsx)(n.p,{children:"If stdout is redirected to a non-TTY, the logo is not printed and the logs are\nformatted as newline-delimited JSON:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'$ npx platformatic db start | head\n{"level":30,"time":1665566628973,"pid":338365,"hostname":"darkav2","url":"http://127.0.0.1:3042","msg":"server listening"}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"query-logging",children:"Query Logging"}),"\n",(0,r.jsxs)(n.p,{children:["To enable query logging, set the log level to ",(0,r.jsx)(n.code,{children:"trace"}),". This will show all queries executed against your database as shown in the example"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'[12:09:13.810] INFO (platformatic-db/9695): incoming request\n    reqId: "133cd235-e61a-4bb5-a4e3-220e06b2f640"\n    req: {\n      "method": "GET",\n      "url": "/movies/?totalCount=false",\n      "hostname": "127.0.0.1:3042",\n      "remoteAddress": "127.0.0.1",\n      "remotePort": 58254\n    }\n[12:09:13.819] TRACE (platformatic-db/9695): query\n    query: {\n      "text": "SELECT \\"id\\", \\"title\\"\\n FROM \\"movies\\"\\nLIMIT ?"\n    }\n[12:09:13.820] INFO (platformatic-db/9695): request completed\n    reqId: "133cd235-e61a-4bb5-a4e3-220e06b2f640"\n    res: {\n      "statusCode": 200\n    }\n    responseTime: 10.350167274475098\n'})})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var r=t(67294);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);