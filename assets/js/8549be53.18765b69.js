"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[85950,28090],{12560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(85893),a=n(11151),o=n(74866),i=n(85162);const s={},c=void 0,l={id:"getting-started/new-api-project-instructions",title:"new-api-project-instructions",description:"Run this command in your terminal to start the Platformatic creator wizard:",source:"@site/versioned_docs/version-1.21.1/getting-started/new-api-project-instructions.md",sourceDirName:"getting-started",slug:"/getting-started/new-api-project-instructions",permalink:"/docs/1.21.1/getting-started/new-api-project-instructions",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.21.1/getting-started/new-api-project-instructions.md",tags:[],version:"1.21.1",frontMatter:{}},d={},u=[];function p(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Run this command in your terminal to start the Platformatic creator wizard:"}),"\n",(0,r.jsxs)(o.Z,{groupId:"package-manager-create",children:[(0,r.jsx)(i.Z,{value:"npm",label:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm create platformatic@latest\n"})})}),(0,r.jsx)(i.Z,{value:"yarn",label:"yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn create platformatic\n"})})}),(0,r.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm create platformatic@latest\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"This interactive command-line tool will ask you some questions about how you'd\nlike to set up your new Platformatic project. For this guide, select these options:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"- Which kind of project do you want to create?  => DB\n- Where would you like to create your project?  => quick-start\n- Do you want to create default migrations?     => Yes\n- Do you want to create a plugin?               => Yes\n- Do you want to use TypeScript?                => No\n- Do you want to install dependencies?          => Yes (this can take a while)\n- Do you want to apply the migrations?          => Yes\n- Do you want to generate types?                => Yes\n- Do you want to create the github action to deploy this application to Platformatic Cloud dynamic workspace? => No\n- Do you want to create the github action to deploy this application to Platformatic Cloud static workspace?  => No\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Once the wizard is complete, you'll have a Platformatic app project in the\nfolder ",(0,r.jsx)(t.code,{children:"quick-start"}),", with example migration files and a plugin script."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Make sure you run the npm/yarn/pnpm command ",(0,r.jsx)(t.code,{children:"install"})," command manually if you\ndon't ask the wizard to do it for you."]})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},96175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(85893),a=n(11151),o=n(12560);const i={},s="Dockerize a Platformatic App",c={id:"guides/dockerize-platformatic-app",title:"Dockerize a Platformatic App",description:"This guide explains how to create a new Platformatic DB app, which connects to a PostgreSQL database.",source:"@site/versioned_docs/version-1.21.1/guides/dockerize-platformatic-app.md",sourceDirName:"guides",slug:"/guides/dockerize-platformatic-app",permalink:"/docs/1.21.1/guides/dockerize-platformatic-app",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.21.1/guides/dockerize-platformatic-app.md",tags:[],version:"1.21.1",frontMatter:{},sidebar:"docs",previous:{title:"Telemetry with Jaeger",permalink:"/docs/1.21.1/guides/telemetry"},next:{title:"Build and deploy a modular monolith",permalink:"/docs/1.21.1/guides/build-modular-monolith"}},l={},d=[{value:"Generate a Platformatic DB App",id:"generate-a-platformatic-db-app",level:2},{value:"Create Docker image for the Platformatic DB App",id:"create-docker-image-for-the-platformatic-db-app",level:2},{value:"Create Docker Compose config file",id:"create-docker-compose-config-file",level:2}];function u(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dockerize-a-platformatic-app",children:"Dockerize a Platformatic App"}),"\n",(0,r.jsx)(t.p,{children:"This guide explains how to create a new Platformatic DB app, which connects to a PostgreSQL database."}),"\n",(0,r.jsxs)(t.p,{children:["We will then create a ",(0,r.jsx)(t.code,{children:"docker-compose.yml"})," file that will run both services in separate containers"]}),"\n",(0,r.jsx)(t.h2,{id:"generate-a-platformatic-db-app",children:"Generate a Platformatic DB App"}),"\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsx)(t.h2,{id:"create-docker-image-for-the-platformatic-db-app",children:"Create Docker image for the Platformatic DB App"}),"\n",(0,r.jsx)(t.p,{children:"In this step you are going to create some files into the root project directory"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:".dockerignore"})," - This file tells Docker to ignore some files when copying the directory into the image filesystem"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"node_modules\n.env*\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"start.sh"})," - This is our entrypoint. We will run migrations then start platformatic"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:'#!/bin/sh\n\necho "Running migrations..." && \\\nnpx platformatic db migrations apply && \\\necho "Starting Platformatic App..." && \\\nnpm start\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Make sure you make this file executable with the command ",(0,r.jsx)(t.code,{children:"chmod +x start.sh"})]})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Dockerfile"})," - This is the file Docker uses to create the image"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'FROM node:18-alpine\nWORKDIR /usr/src/app\nCOPY . .\nRUN npm install\nCOPY . .\nEXPOSE 3042\nCMD [ "./start.sh" ]\n'})}),"\n",(0,r.jsx)(t.p,{children:"At this point you can build your Docker image with the command"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ docker build -t platformatic-app .\n"})}),"\n",(0,r.jsx)(t.h2,{id:"create-docker-compose-config-file",children:"Create Docker Compose config file"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"docker-compose.yml"})," is the configuration file for ",(0,r.jsx)(t.code,{children:"docker-compose"})," which will spin up containers for both PostgresSQL and our Platformatic App"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",children:'version: "3.3"\nservices:\n  postgresql:\n    ports:\n      - "5433:5432"\n    image: "postgres:15-alpine"\n    environment:\n      - POSTGRES_PASSWORD=postgres\n  platformatic:\n    ports:\n      - "3042:3042"\n    image: \'platformatic-app:latest\'\n    depends_on:\n      - postgresql\n    links:\n      - postgresql\n    environment:\n      PLT_SERVER_HOSTNAME: ${PLT_SERVER_HOSTNAME}\n      PORT: ${PORT}\n      PLT_SERVER_LOGGER_LEVEL: ${PLT_SERVER_LOGGER_LEVEL}\n      DATABASE_URL: postgres://postgres:postgres@postgresql:5432/postgres\n'})}),"\n",(0,r.jsx)(t.p,{children:"A couple of things to notice:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The Platformatic app is started only once the database container is up and running (",(0,r.jsx)(t.code,{children:"depends_on"}),")."]}),"\n",(0,r.jsxs)(t.li,{children:["The Platformatic app is linked with ",(0,r.jsx)(t.code,{children:"postgresql"})," service. Meaning that inside its container ",(0,r.jsx)(t.code,{children:"ping postgresql"})," will be resolved with the internal ip of the database container."]}),"\n",(0,r.jsxs)(t.li,{children:["The environment is taken directly from the ",(0,r.jsx)(t.code,{children:".env"})," file created by the wizard"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"You can now run your containers with"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ docker-compose up # (-d if you want to send them in the background)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Everything should start smoothly, and you can access your app pointing your browser to ",(0,r.jsx)(t.code,{children:"http://0.0.0.0:3042"})]}),"\n",(0,r.jsxs)(t.p,{children:["To stop the app you can either press ",(0,r.jsx)(t.code,{children:"CTRL-C"})," if you are running them in the foreground, or, if you used the ",(0,r.jsx)(t.code,{children:"-d"})," flag, run"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ docker-compose down\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var o=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),o=n(12466),i=n(16550),s=n(20469),c=n(91980),l=n(67392),d=n(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=m({queryString:n,groupId:a}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),x=(()=>{const e=l??f;return h({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function b(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==r&&(l(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.Z)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...e,...t}),(0,j.jsx)(y,{...e,...t})]})}function w(e){const t=(0,g.Z)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var r=n(67294);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);