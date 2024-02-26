"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[77805],{48432:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>d});var r=i(85893),s=i(11151);const c={},o="Configuration",t={id:"reference/composer/configuration",title:"Configuration",description:"Platformatic Composer configured with a configuration file. It supports the use",source:"@site/versioned_docs/version-1.21.1/reference/composer/configuration.md",sourceDirName:"reference/composer",slug:"/reference/composer/configuration",permalink:"/docs/1.21.1/reference/composer/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.21.1/reference/composer/configuration.md",tags:[],version:"1.21.1",frontMatter:{},sidebar:"docs",previous:{title:"Platformatic Composer",permalink:"/docs/1.21.1/reference/composer/introduction"},next:{title:"Programmatic API",permalink:"/docs/1.21.1/reference/composer/programmatic"}},l={},d=[{value:"Configuration file",id:"configuration-file",level:2},{value:"Supported formats",id:"supported-formats",level:3},{value:"Settings",id:"settings",level:2},{value:"<code>server</code>",id:"server",level:3},{value:"<code>metrics</code>",id:"metrics",level:3},{value:"<code>plugins</code>",id:"plugins",level:3},{value:"<code>composer</code>",id:"composer",level:3},{value:"<code>openapi</code>",id:"openapi",level:4},{value:"<code>openapi-configuration</code>",id:"openapi-configuration",level:5},{value:"<code>graphql</code>",id:"graphql",level:4},{value:"<code>telemetry</code>",id:"telemetry",level:3},{value:"<code>watch</code>",id:"watch",level:3},{value:"<code>clients</code>",id:"clients",level:3},{value:"Environment variable placeholders",id:"environment-variable-placeholders",level:2},{value:"Setting environment variables",id:"setting-environment-variables",level:3},{value:"Allowed placeholder names",id:"allowed-placeholder-names",level:3},{value:"PLT_ROOT",id:"plt_root",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Platformatic Composer configured with a configuration file. It supports the use\nof environment variables as setting values with ",(0,r.jsx)(n.a,{href:"#configuration-placeholders",children:"configuration placeholders"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration-file",children:"Configuration file"}),"\n",(0,r.jsx)(n.p,{children:"If the Platformatic CLI finds a file in the current working directory matching\none of these filenames, it will automatically load it:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"platformatic.composer.json"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"platformatic.composer.json5"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"platformatic.composer.yml"})," or ",(0,r.jsx)(n.code,{children:"platformatic.composer.yaml"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"platformatic.composer.tml"})," or ",(0,r.jsx)(n.code,{children:"platformatic.composer.toml"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Alternatively, a ",(0,r.jsxs)(n.a,{href:"/docs/1.21.1/reference/cli#composer",children:[(0,r.jsx)(n.code,{children:"--config"})," option"]})," with a configuration\nfilepath can be passed to most ",(0,r.jsx)(n.code,{children:"platformatic composer"})," CLI commands."]}),"\n",(0,r.jsx)(n.p,{children:"The configuration examples in this reference use JSON."}),"\n",(0,r.jsx)(n.h3,{id:"supported-formats",children:"Supported formats"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Format"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Extensions"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"JSON"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:".json"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"JSON5"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:".json5"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"YAML"}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:".yml"}),", ",(0,r.jsx)(n.code,{children:".yaml"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"TOML"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:".tml"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Comments are supported by the JSON5, YAML and TOML file formats."}),"\n",(0,r.jsx)(n.h2,{id:"settings",children:"Settings"}),"\n",(0,r.jsx)(n.p,{children:"Configuration settings are organised into the following groups:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#server",children:(0,r.jsx)(n.code,{children:"server"})})," ",(0,r.jsx)(n.strong,{children:"(required)"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#composer",children:(0,r.jsx)(n.code,{children:"composer"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#metrics",children:(0,r.jsx)(n.code,{children:"metrics"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#plugins",children:(0,r.jsx)(n.code,{children:"plugins"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#telemetry",children:(0,r.jsx)(n.code,{children:"telemetry"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#watch",children:(0,r.jsx)(n.code,{children:"watch"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#clients",children:(0,r.jsx)(n.code,{children:"clients"})})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Sensitive configuration settings containing sensitive data should be set using ",(0,r.jsx)(n.a,{href:"#configuration-placeholders",children:"configuration placeholders"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"server",children:(0,r.jsx)(n.code,{children:"server"})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/next/reference/service/configuration#server",children:"Platformatic Service server"})," for more details."]}),"\n",(0,r.jsx)(n.h3,{id:"metrics",children:(0,r.jsx)(n.code,{children:"metrics"})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/next/reference/service/configuration#metrics",children:"Platformatic Service metrics"})," for more details."]}),"\n",(0,r.jsx)(n.h3,{id:"plugins",children:(0,r.jsx)(n.code,{children:"plugins"})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/next/reference/service/configuration#plugins",children:"Platformatic Service plugins"})," for more details."]}),"\n",(0,r.jsx)(n.h3,{id:"composer",children:(0,r.jsx)(n.code,{children:"composer"})}),"\n",(0,r.jsxs)(n.p,{children:["Configure ",(0,r.jsx)(n.code,{children:"@platformatic/composer"})," specific settings such as ",(0,r.jsx)(n.code,{children:"services"})," or ",(0,r.jsx)(n.code,{children:"refreshTimeout"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"services"})})," (",(0,r.jsx)(n.code,{children:"array"}),", default: ",(0,r.jsx)(n.code,{children:"[]"}),") \u2014 is an array of objects that defines\nthe services managed by the composer. Each service object supports the following settings:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"id"})})," (",(0,r.jsx)(n.strong,{children:"required"}),", ",(0,r.jsx)(n.code,{children:"string"}),") - A unique identifier for the service. Use a Platformatic Runtime service id if the service is executing inside of ",(0,r.jsx)(n.a,{href:"/docs/next/reference/runtime/introduction#platformatic-runtime-context",children:"Platformatic Runtime context"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"origin"})})," (",(0,r.jsx)(n.code,{children:"string"}),") - A service origin. Skip this option if the service is executing inside of ",(0,r.jsx)(n.a,{href:"/docs/next/reference/runtime/introduction#platformatic-runtime-context",children:"Platformatic Runtime context"}),". In this case, service id will be used instead of origin."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"openapi"})})," (",(0,r.jsx)(n.code,{children:"object"}),") - The configuration file used to compose OpenAPI specification. See the ",(0,r.jsx)(n.a,{href:"#openapi",children:"openapi"})," for details."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"graphql"})})," (",(0,r.jsx)(n.code,{children:"object"}),") - The configuration for the GraphQL service. See the ",(0,r.jsx)(n.a,{href:"#graphql",children:"graphql"})," for details."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"proxy"})})," (",(0,r.jsx)(n.code,{children:"object"})," or ",(0,r.jsx)(n.code,{children:"false"}),") - Service proxy configuration. If ",(0,r.jsx)(n.code,{children:"false"}),", the service proxy is disabled.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"prefix"})," (",(0,r.jsx)(n.strong,{children:"required"}),", ",(0,r.jsx)(n.code,{children:"string"}),") - Service proxy prefix. All service routes will be prefixed with this value."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"openapi"})})," (",(0,r.jsx)(n.code,{children:"object"}),") - See the Platformatic Service ",(0,r.jsx)(n.a,{href:"/docs/next/reference/service/configuration#service",children:"service"})," openapi option for details."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"graphql"})})," (",(0,r.jsx)(n.code,{children:"object"}),") - Has the Platformatic Service ",(0,r.jsx)(n.a,{href:"/docs/next/reference/service/configuration#service",children:"service"})," graphql options, plus"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"addEntitiesResolvers"})})," (",(0,r.jsx)(n.code,{children:"boolean"}),") - Automatically add related entities on GraphQL types, following the services entities configuration. See ",(0,r.jsx)(n.a,{href:"https://github.com/platformatic/graphql-composer#composer-entities",children:"graphql-composer entities"})," for details. Default is disabled."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"defaultArgsAdapter"})})," (",(0,r.jsx)(n.code,{children:"function"})," or ",(0,r.jsx)(n.code,{children:"string"}),") - The default ",(0,r.jsx)(n.code,{children:"argsAdapter"})," function for the entities, for example for the platformatic db mapped entities queries"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"graphql: {\n  defaultArgsAdapter: (partialResults) => ({ where: { id: { in: partialResults.map(r => r.id) } } })\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["or with the ",(0,r.jsx)(n.a,{href:"https://github.com/platformatic/metaline",children:"metaline"})," syntax, especially in the case of using the ",(0,r.jsx)(n.a,{href:"/docs/next/reference/cli#start",children:"json configuration"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"defaultArgsAdapter": "where.id.in.$>#id"\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"onSubgraphError"})})," (",(0,r.jsx)(n.code,{children:"function"}),") - Hook called when an error occurs getting schema from a subgraph. The arguments are:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"error"})," (",(0,r.jsx)(n.code,{children:"error"}),") - The error"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"subgraphName"})," (",(0,r.jsx)(n.code,{children:"string"}),") - The erroring subgraph"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"GraphQL subscriptions are not supported in the composer yet."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"refreshTimeout"})})," (",(0,r.jsx)(n.code,{children:"number"}),") - The number of milliseconds to wait for check for changes in the services. If not specified, the default value is ",(0,r.jsx)(n.code,{children:"1000"}),"; set to ",(0,r.jsx)(n.code,{children:"0"})," to disable."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"openapi",children:(0,r.jsx)(n.code,{children:"openapi"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"url"})})," (",(0,r.jsx)(n.code,{children:"string"}),") - A path of the route that exposes the OpenAPI specification. If a service is a Platformatic Service or Platformatic DB, use ",(0,r.jsx)(n.code,{children:"/documentation/json"})," as a value. Use this or ",(0,r.jsx)(n.code,{children:"file"})," option to specify the OpenAPI specification."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"file"})})," (",(0,r.jsx)(n.code,{children:"string"}),") - A path to the OpenAPI specification file. Use this or ",(0,r.jsx)(n.code,{children:"url"})," option to specify the OpenAPI specification."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"prefix"})})," (",(0,r.jsx)(n.code,{children:"string"}),") - A prefix for the OpenAPI specification. All service routes will be prefixed with this value."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"config"})})," (",(0,r.jsx)(n.code,{children:"string"}),") - A path to the OpenAPI configuration file. This file is used to customize the OpenAPI specification. See the ",(0,r.jsx)(n.a,{href:"#openapi-configuration",children:"openapi-configuration"})," for details."]}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"openapi-configuration",children:(0,r.jsx)(n.code,{children:"openapi-configuration"})}),"\n",(0,r.jsx)(n.p,{children:"The OpenAPI configuration file is a JSON file that is used to customize the OpenAPI specification. It supports the following options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ignore"})})," (",(0,r.jsx)(n.code,{children:"boolean"}),") - If ",(0,r.jsx)(n.code,{children:"true"}),", the route will be ignored by the composer.\nIf you want to ignore a specific method, use the ",(0,r.jsx)(n.code,{children:"ignore"})," option in the nested method object."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "paths": {\n    "/users": {\n      "ignore": true\n    },\n    "/users/{id}": {\n      "get": { "ignore": true },\n      "put": { "ignore": true }\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"alias"})," (",(0,r.jsx)(n.code,{children:"string"}),") - Use it create an alias for the route path. Original route path will be ignored."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "paths": {\n    "/users": {\n      "alias": "/customers"\n    }\n  }\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"rename"})})," (",(0,r.jsx)(n.code,{children:"string"}),") - Use it to rename composed route response fields.\nUse json schema format to describe the response structure. For now it works only for ",(0,r.jsx)(n.code,{children:"200"})," response."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Example"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "paths": {\n    "/users": {\n      "responses": {\n          "200": {\n            "type": "array",\n            "items": {\n              "type": "object",\n              "properties": {\n                "id": { "rename": "user_id" },\n                "name": { "rename": "first_name" }\n              }\n            }\n          }\n        }\n    }\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Examples"})}),"\n",(0,r.jsx)(n.p,{children:"Composition of two remote services:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "composer": {\n    "services": [\n      {\n        "id": "auth-service",\n        "origin": "https://auth-service.com",\n        "openapi": {\n          "url": "/documentation/json",\n          "prefix": "auth"\n        }\n      },\n      {\n        "id": "payment-service",\n        "origin": "https://payment-service.com",\n        "openapi": {\n          "file": "./schemas/payment-service.json"\n        }\n      }\n    ],\n    "refreshTimeout": 1000\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Composition of two local services inside of Platformatic Runtime:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "composer": {\n    "services": [\n      {\n        "id": "auth-service",\n        "openapi": {\n          "url": "/documentation/json",\n          "prefix": "auth"\n        }\n      },\n      {\n        "id": "payment-service",\n        "openapi": {\n          "file": "./schemas/payment-service.json"\n        }\n      }\n    ],\n    "refreshTimeout": 1000\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"graphql",children:(0,r.jsx)(n.code,{children:"graphql"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"host"})})," (",(0,r.jsx)(n.code,{children:"string"}),") - service host; if not specified, the ",(0,r.jsx)(n.code,{children:"service.origin"})," is used."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"name"})})," (",(0,r.jsx)(n.code,{children:"string"}),") - name to identify the service. If not specified, the ",(0,r.jsx)(n.code,{children:"service.origin"})," is used."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"graphqlEndpoint"})})," (",(0,r.jsx)(n.code,{children:"string"}),") - The graphql endpoint path, the default value is the common ",(0,r.jsx)(n.code,{children:"'/graphql'"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"composeEndpoint"})})," (",(0,r.jsx)(n.code,{children:"string"}),") - The endpoint to retrieve the introspection query from, default is ",(0,r.jsx)(n.code,{children:"'/.well-known/graphql-composition'"}),". In case the endpoint is not available, a second call with introspection query will be sent to the ",(0,r.jsx)(n.code,{children:"graphqlEndpoint"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"entities"})})," (",(0,r.jsx)(n.code,{children:"object"}),") - Configuration object for working with entities in this subgraph, the values are objects with the following schema:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"resolver"})})," (",(0,r.jsx)(n.code,{children:"object"}),") - The resolver to retrieve a list of objects - should return a list - and should accept as a arguments a list of primary keys or foreign keys.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"name"})})," (",(0,r.jsx)(n.code,{children:"string"}),", ",(0,r.jsx)(n.strong,{children:"required"}),") - The name of the resolver."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"argsAdapter (partialResults)"})})," (",(0,r.jsx)(n.code,{children:"function"})," or ",(0,r.jsx)(n.code,{children:"string"}),") - The function invoked with a subset of the result of the initial query, where ",(0,r.jsx)(n.code,{children:"partialResults"})," is an array of the parent node. It should return an object to be used as argument for ",(0,r.jsx)(n.code,{children:"resolver"})," query. Can be a function or a ",(0,r.jsx)(n.a,{href:"https://github.com/platformatic/metaline",children:"metaline"})," string.\n",(0,r.jsx)(n.strong,{children:"Default:"})," if missing, the ",(0,r.jsx)(n.code,{children:"defaultArgsAdapter"})," function will be used; if that is missing too, a ",(0,r.jsx)(n.a,{href:"lib/utils.js#L3",children:"generic one"})," will be used."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"partialResults"})})," (",(0,r.jsx)(n.code,{children:"function"})," or ",(0,r.jsx)(n.code,{children:"string"}),") - The function to adapt the subset of the result to be passed to ",(0,r.jsx)(n.code,{children:"argsAdapter"})," - usually is needed only on resolvers of ",(0,r.jsx)(n.code,{children:"fkeys"})," and ",(0,r.jsx)(n.code,{children:"many"}),". Can be a function or a ",(0,r.jsx)(n.a,{href:"https://github.com/platformatic/metaline",children:"metaline"})," string."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"pkey"})})," (",(0,r.jsx)(n.code,{children:"string"}),", ",(0,r.jsx)(n.strong,{children:"required"}),") - The primary key field to identify the entity."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"fkeys"})})," (",(0,r.jsx)(n.code,{children:"array of objects"}),") an array to describe the foreign keys of the entities, for example ",(0,r.jsx)(n.code,{children:"fkeys: [{ type: 'Author', field: 'authorId' }]"}),".","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"type"})})," (",(0,r.jsx)(n.code,{children:"string"}),", ",(0,r.jsx)(n.strong,{children:"required"}),") - The entity type the foreign key is referred to."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"field"})})," (",(0,r.jsx)(n.code,{children:"string"}),") - The foreign key field."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"as"})})," (",(0,r.jsx)(n.code,{children:"string"}),") - When using ",(0,r.jsx)(n.code,{children:"addEntitiesResolvers"}),", it defines the name of the foreign entity as a field of the current one, as a single type."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"pkey"})})," (",(0,r.jsx)(n.code,{children:"string"}),") - The primary key of the foreign entity."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"subgraph"})})," (",(0,r.jsx)(n.code,{children:"string"}),") - The subgraph name of the foreign entity, where the resolver is located; if missing is intended the self."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"resolver"})})," (object) - The resolver definition to query the foreign entity, same structure as ",(0,r.jsx)(n.code,{children:"entity.resolver"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"many"})})," (",(0,r.jsx)(n.code,{children:"array of objects"}),") - Describe a 1-to-many relation - the reverse of the foreign key.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"type"})})," (",(0,r.jsx)(n.code,{children:"string"}),", ",(0,r.jsx)(n.strong,{children:"required"}),") - The entity type where the entity is a foreign key."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"fkey"})})," (",(0,r.jsx)(n.code,{children:"string"}),", ",(0,r.jsx)(n.strong,{children:"required"}),") - The foreign key field in the referred entity."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"as"})})," (",(0,r.jsx)(n.code,{children:"string"}),", ",(0,r.jsx)(n.strong,{children:"required"}),") - When using ",(0,r.jsx)(n.code,{children:"addEntitiesResolvers"}),", it defines the name of the relation as a field of the current one, as a list."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"pkey"})})," (",(0,r.jsx)(n.code,{children:"string"}),") - The primary key of the referred entity."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"subgraph"})})," (",(0,r.jsx)(n.code,{children:"string"}),") - The subgraph name of the referred entity, where the resolver is located; if missing is intended the self."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"resolver"})})," (",(0,r.jsx)(n.code,{children:"object"}),", ",(0,r.jsx)(n.strong,{children:"required"}),") - The resolver definition to query the referred entity, same structure as ",(0,r.jsx)(n.code,{children:"entity.resolver"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"telemetry",children:(0,r.jsx)(n.code,{children:"telemetry"})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/next/reference/service/configuration#telemetry",children:"Platformatic Service telemetry"})," for more details."]}),"\n",(0,r.jsx)(n.h3,{id:"watch",children:(0,r.jsx)(n.code,{children:"watch"})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/next/reference/service/configuration#watch",children:"Platformatic Service watch"})," for more details."]}),"\n",(0,r.jsx)(n.h3,{id:"clients",children:(0,r.jsx)(n.code,{children:"clients"})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/next/reference/service/configuration#clients",children:"Platformatic Service clients"})," for more details."]}),"\n",(0,r.jsx)(n.h2,{id:"environment-variable-placeholders",children:"Environment variable placeholders"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/next/reference/service/configuration#environment-variable-placeholders",children:"Environment variable placeholders"})," for more details."]}),"\n",(0,r.jsx)(n.h3,{id:"setting-environment-variables",children:"Setting environment variables"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/next/reference/service/configuration#setting-environment-variables",children:"Setting environment variables"})," for more details."]}),"\n",(0,r.jsx)(n.h3,{id:"allowed-placeholder-names",children:"Allowed placeholder names"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/next/reference/service/configuration#allowed-placeholder-names",children:"Allowed placeholder names"})," for more details."]}),"\n",(0,r.jsx)(n.h3,{id:"plt_root",children:"PLT_ROOT"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/next/reference/service/configuration#plt_root",children:"PLT_ROOT"})," for more details."]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>o});var r=i(67294);const s={},c=r.createContext(s);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);