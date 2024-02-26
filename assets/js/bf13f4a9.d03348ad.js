"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[99253],{92528:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=i(85893),t=i(11151);const s={},l="Deploy to Fly.io with SQLite",a={id:"guides/deployment/deploy-to-fly-io-with-sqlite",title:"Deploy to Fly.io with SQLite",description:"To follow this how-to guide, you'll first need to install the Fly CLI and create",source:"@site/versioned_docs/version-1.22.0/guides/deployment/deploy-to-fly-io-with-sqlite.md",sourceDirName:"guides/deployment",slug:"/guides/deployment/deploy-to-fly-io-with-sqlite",permalink:"/docs/1.22.0/guides/deployment/deploy-to-fly-io-with-sqlite",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.22.0/guides/deployment/deploy-to-fly-io-with-sqlite.md",tags:[],version:"1.22.0",frontMatter:{},sidebar:"docs",previous:{title:"Deployment",permalink:"/docs/1.22.0/guides/deployment/"},next:{title:"Advanced Fly.io Deployment",permalink:"/docs/1.22.0/guides/deployment/advanced-fly-io-deployment"}},r={},d=[{value:"Explicit builder",id:"explicit-builder",level:2},{value:"Database storage",id:"database-storage",level:2},{value:"Configure server",id:"configure-server",level:2},{value:"Configure environment",id:"configure-environment",level:2},{value:"Deploy application",id:"deploy-application",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"deploy-to-flyio-with-sqlite",children:"Deploy to Fly.io with SQLite"}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["To follow this how-to guide, you'll first need to install the Fly CLI and create\nan account by ",(0,o.jsx)(n.a,{href:"https://fly.io/docs/hands-on/",children:"following this official guide"}),".\nYou will also need an existing Platformatic DB project, please check out our\ngetting started guide if needed."]}),(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["Navigate to your Platformatic DB project in the terminal on your local machine.\nRun ",(0,o.jsx)(n.code,{children:"fly launch"}),' and follow the prompts. When it asks if you want to deploy\nnow, say "no" as there are a few things that you\'ll need to configure first.']}),(0,o.jsxs)(n.p,{children:["You can also create the fly application with one line. This will create your\napplication in London (",(0,o.jsx)(n.code,{children:"lhr"}),"):"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"fly launch --no-deploy --generate-name --region lhr --org personal --path .\n"})}),(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"fly"})," CLI should have created a ",(0,o.jsx)(n.strong,{children:"fly.toml"})," file in your project\ndirectory."]}),(0,o.jsx)(n.h2,{id:"explicit-builder",children:"Explicit builder"}),(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"fly.toml"})," file may be missing an explicit builder setting. To have\nconsistent builds, it is best to add a ",(0,o.jsx)(n.code,{children:"build"})," section:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'[build]\n  builder = "heroku/buildpacks:20"\n'})}),(0,o.jsx)(n.h2,{id:"database-storage",children:"Database storage"}),(0,o.jsxs)(n.p,{children:["Create a volume for database storage, naming it ",(0,o.jsx)(n.code,{children:"data"}),":"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"fly volumes create data\n"})}),(0,o.jsxs)(n.p,{children:["This will create storage in the same region as the application. The volume\ndefaults to 3GB size, use  ",(0,o.jsx)(n.code,{children:"-s"})," to change the size. For example, ",(0,o.jsx)(n.code,{children:"-s 10"})," is 10GB."]}),(0,o.jsxs)(n.p,{children:["Add a ",(0,o.jsx)(n.code,{children:"mounts"})," section in ",(0,o.jsx)(n.strong,{children:"fly.toml"}),":"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'[mounts]\n  source = "data"\n  destination = "/app/.platformatic/data"\n'})}),(0,o.jsx)(n.p,{children:"Create a directory in your project where your SQLite database will be created:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"mkdir -p .platformatic/data\n\ntouch .platformatic/data/.gitkeep\n"})}),(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:".gitkeep"})," file ensures that this directory will always be created when\nyour application is deployed."]}),(0,o.jsx)(n.p,{children:"You should also ensure that your SQLite database is ignored by Git. This helps\navoid inconsistencies when your application is deployed:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'echo "*.db" >> .gitignore\n'})}),(0,o.jsxs)(n.p,{children:["The command above assumes that your SQLite database file ends with the extension\n",(0,o.jsx)(n.code,{children:".db"})," \u2014 if the extension is different then you must change the command to match."]}),(0,o.jsxs)(n.p,{children:["Change the connection string to an environment variable and make sure that\nmigrations are ",(0,o.jsx)(n.code,{children:"autoApply"}),"ing (for ",(0,o.jsx)(n.code,{children:"platformatic@^0.4.0"}),") in ",(0,o.jsx)(n.strong,{children:"platformatic.db.json"}),":"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "db": {\n    "connectionString": "{DATABASE_URL}"\n  },\n  "migrations": {\n    "dir": "./migrations",\n    "autoApply": true\n  }\n}\n'})}),(0,o.jsx)(n.h2,{id:"configure-server",children:"Configure server"}),(0,o.jsxs)(n.p,{children:["Make sure that your ",(0,o.jsx)(n.strong,{children:"platformatic.db.json"})," uses environment variables\nfor the server section:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "server": {\n    "logger": {\n      "level": "{PLT_SERVER_LOGGER_LEVEL}"\n    },\n    "hostname": "{PLT_SERVER_HOSTNAME}",\n    "port": "{PORT}"\n  }\n}\n'})}),(0,o.jsx)(n.h2,{id:"configure-environment",children:"Configure environment"}),(0,o.jsxs)(n.p,{children:["Start with your local environment, create a ",(0,o.jsx)(n.strong,{children:".env"})," file and put the following:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"PORT=3042\nPLT_SERVER_HOSTNAME=127.0.0.1\nPLT_SERVER_LOGGER_LEVEL=debug\nDATABASE_URL=sqlite://.platformatic/data/movie-quotes.db\n"})}),(0,o.jsxs)(n.p,{children:["Avoid accidental leaks by ignoring your ",(0,o.jsx)(n.strong,{children:".env"})," file:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'echo ".env" >> .gitignore\n'})}),(0,o.jsxs)(n.p,{children:["This same configuration needs to added to ",(0,o.jsx)(n.strong,{children:"fly.toml"}),":"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'[env]\n  PORT = 8080\n  PLT_SERVER_HOSTNAME = "0.0.0.0"\n  PLT_SERVER_LOGGER_LEVEL = "info"\n  DATABASE_URL = "sqlite:///app/.platformatic/data/movie-quotes.db"\n'})}),(0,o.jsx)(n.h2,{id:"deploy-application",children:"Deploy application"}),(0,o.jsxs)(n.p,{children:["A valid ",(0,o.jsx)(n.strong,{children:"package.json"})," will be needed so if you do not have one, generate one\nby running ",(0,o.jsx)(n.code,{children:"npm init"}),"."]}),(0,o.jsxs)(n.p,{children:["In your ",(0,o.jsx)(n.strong,{children:"package.json"}),", make sure there is a ",(0,o.jsx)(n.code,{children:"start"})," script to run your\napplication:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "start": "platformatic db"\n  }\n}\n'})}),(0,o.jsxs)(n.p,{children:["Before deploying, make sure a ",(0,o.jsx)(n.strong,{children:".dockerignore"})," file is created:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"cp .gitignore .dockerignore\n"})}),(0,o.jsx)(n.p,{children:"Finally, deploy the application to Fly by running:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"fly deploy\n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var o=i(67294);const t={},s=o.createContext(t);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);