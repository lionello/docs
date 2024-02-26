"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[56578],{63693:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(85893),a=t(11151);const i={},r="Versionize a Platformatic application",o={id:"guides/api-versioning",title:"Versionize a Platformatic application",description:"Introduction",source:"@site/versioned_docs/version-1.21.1/guides/api-versioning.md",sourceDirName:"guides",slug:"/guides/api-versioning",permalink:"/docs/1.21.1/guides/api-versioning",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.21.1/guides/api-versioning.md",tags:[],version:"1.21.1",frontMatter:{}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Setup platformatic application versioning",id:"setup-platformatic-application-versioning",level:2},{value:"Setup the application",id:"setup-the-application",level:3},{value:"Bump the first API version",id:"bump-the-first-api-version",level:3},{value:"Bump the second API version",id:"bump-the-second-api-version",level:3},{value:"Update the second API version",id:"update-the-second-api-version",level:3},{value:"Generating the mapper plugin with OpenAI",id:"generating-the-mapper-plugin-with-openai",level:3},{value:"Shared routes",id:"shared-routes",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"versionize-a-platformatic-application",children:"Versionize a Platformatic application"}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Platformatic applications support versioning of the API without the need to deploy a new application for each version. Every time you bump a new API version of your application platformatic calculates the diff between the previous and current versions and maps API routes to the current one. In cases when it's not possible to automatically map the routes, platformatic generates a mapper plugin that can be used to map the routes manually or generated automatically by OpenAI. As a result, you have a single instance of the application that handles all the requests."}),"\n",(0,s.jsx)(n.h2,{id:"setup-platformatic-application-versioning",children:"Setup platformatic application versioning"}),"\n",(0,s.jsx)(n.h3,{id:"setup-the-application",children:"Setup the application"}),"\n",(0,s.jsxs)(n.p,{children:["Lets start with a basic platformatic service application that can be generated by running ",(0,s.jsx)(n.code,{children:"create-platformatic"})," command."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx create-platformatic@latest\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Lets add a new route to the application that will be used to test the versioning. Add the following code to the ",(0,s.jsx)(n.code,{children:"routes/root.js"})," file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"fastify.get('/users', {\n  schema: {\n    response: {\n      200: {\n        type: 'array',\n        items: {\n          type: 'object',\n          properties: {\n            id: { type: 'number' },\n            name: { type: 'string' }\n          }\n        }\n      }\n    }\n  }\n}, async (request, reply) => {\n  return [\n    { id: 1, name: 'Larry Lute' },\n    { id: 2, name: 'Marcus Miller' },\n    { id: 3, name: 'Devin Booker' }\n  ]\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It's important to add the ",(0,s.jsx)(n.code,{children:"schema"})," property to the route definition. Platformatic uses the OpenAPI schema to find the differences between the versions."]}),"\n",(0,s.jsx)(n.p,{children:"You can start the application and test that the route is working as expected."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx platformatic@latest start\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Testing ",(0,s.jsx)(n.code,{children:"/users"})," route:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:3042/users\n"})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "id": 1,\n    "name": "Larry Lute"\n  },\n  {\n    "id": 2,\n    "name": "Marcus Miller"\n  },\n  {\n    "id": 3,\n    "name": "Devin Booker"\n  }\n]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"bump-the-first-api-version",children:"Bump the first API version"}),"\n",(0,s.jsx)(n.p,{children:"Now when we have a basic application we can bump the first API version. To do that we need to run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx platformatic@latest service versions bump\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It will create a first version of the application ",(0,s.jsx)(n.code,{children:"v1"})," and will map all the routes to the current version. If you start the application, you will see that now the route is available under the ",(0,s.jsx)(n.code,{children:"/v1/users"})," path. If you want to create a different version name you can use the ",(0,s.jsx)(n.code,{children:"--version"})," option."]}),"\n",(0,s.jsxs)(n.p,{children:["Testing ",(0,s.jsx)(n.code,{children:"/v1/users"})," route:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:3042/v1/users\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[\n  {\n    "id": 1,\n    "name": "Larry Lute"\n  },\n  {\n    "id": 2,\n    "name": "Marcus Miller"\n  },\n  {\n    "id": 3,\n    "name": "Devin Booker"\n  }\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:'API "v1" swagger page'}),"\n",(0,s.jsx)(n.img,{alt:"Platformatic versions guide: &quot;v1&quot; swagger screenshot",src:t(70779).Z+"",width:"2886",height:"1618"})]}),"\n",(0,s.jsx)(n.h3,{id:"bump-the-second-api-version",children:"Bump the second API version"}),"\n",(0,s.jsx)(n.p,{children:"Now when we have the first version of the application we can bump the second version. To do that we need to run the same command as before:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx platformatic@latest service versions bump\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It will create a second version of the application ",(0,s.jsx)(n.code,{children:"v2"})," and will map all the routes to the current version. If you start the application, you will see that now the same under ",(0,s.jsx)(n.code,{children:"/v1/users"})," and ",(0,s.jsx)(n.code,{children:"/v2/users"})," paths. These routes were mapped automatically because the OpenAPI schema was the same for both versions."]}),"\n",(0,s.jsxs)(n.p,{children:["Testing ",(0,s.jsx)(n.code,{children:"/v2/users"})," route:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:3042/v2/users\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'[\n  {\n    "id": 1,\n    "name": "Larry Lute"\n  },\n  {\n    "id": 2,\n    "name": "Marcus Miller"\n  },\n  {\n    "id": 3,\n    "name": "Devin Booker"\n  }\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:'API "v2" swagger page'}),"\n",(0,s.jsx)(n.img,{alt:"Platformatic versions guide: &quot;v2&quot; swagger screenshot",src:t(29212).Z+"",width:"2886",height:"1604"})]}),"\n",(0,s.jsx)(n.h3,{id:"update-the-second-api-version",children:"Update the second API version"}),"\n",(0,s.jsxs)(n.p,{children:["Lets make some changes to the latest version of the application. Lets modify the ",(0,s.jsx)(n.code,{children:"/users"})," route in a following way:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"fastify.get('/users', {\n  schema: {\n    response: {\n      200: {\n        type: 'array',\n        items: {\n          type: 'object',\n          properties: {\n            id: { type: 'number' },\n            firstName: { type: 'string' },\n            lastName: { type: 'string' }\n          }\n        }\n      }\n    }\n  }\n}, async (request, reply) => {\n  return [\n    { id: 1, firstName: 'Larry', lastName: 'Lute' },\n    { id: 2, firstName: 'Marcus', lastName: 'Miller' },\n    { id: 3, firstName: 'Devin', lastName: 'Booker' }\n  ]\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now the route returns the ",(0,s.jsx)(n.code,{children:"firstName"})," and ",(0,s.jsx)(n.code,{children:"lastName"})," instead of the ",(0,s.jsx)(n.code,{children:"name"}),". Lets update the second version of the application to reflect the changes. To do that we need to run the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx platformatic@latest service versions update\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Having that now the second version of the route can't be mapped automatically, platformatic will generate a mapper plugin that can be used to map the routes manually or generated automatically by OpenAI. The mapper plugin will be generated in the ",(0,s.jsx)(n.code,{children:"versions/v1/get-users.js"})," file."]}),"\n",(0,s.jsxs)(n.p,{children:['In the mappers plugin you can find a lot of useful information about the changes and code that proxies the "v1" route to the "v2" route. All you need to do is to update the ',(0,s.jsx)(n.code,{children:"mapOutputData200"}),' function to map the response from the "v2" route to the "v1" route.']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function mapOutputData200 (outputData) {\n  const mappedBody = outputData.responseBody.map((user) => {\n    return {\n      id: user.id,\n      name: `${user.firstName} ${user.lastName}`\n    }\n  })\n  \n  return {\n    headers: outputData.headers,\n    responseBody: mappedBody\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now when you start the application and see that the ",(0,s.jsx)(n.code,{children:"/v1/users"})," route returns response with the ",(0,s.jsx)(n.code,{children:"name"})," property when the ",(0,s.jsx)(n.code,{children:"/v2/users"})," route returns response with the ",(0,s.jsx)(n.code,{children:"firstName"})," and ",(0,s.jsx)(n.code,{children:"lastName"})," properties."]}),"\n",(0,s.jsxs)(n.p,{children:["Testing ",(0,s.jsx)(n.code,{children:"/v1/users"})," route:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:3042/v1/users\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'[\n  {\n    "id": 1,\n    "name": "Larry Lute"\n  },\n  {\n    "id": 2,\n    "name": "Marcus Miller"\n  },\n  {\n    "id": 3,\n    "name": "Devin Booker"\n  }\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Platformatic versions guide: &quot;v1&quot; updated swagger screenshot",src:t(70779).Z+"",width:"2886",height:"1618"})}),"\n",(0,s.jsxs)(n.p,{children:["Testing ",(0,s.jsx)(n.code,{children:"/v2/users"})," route:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:3042/v2/users\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'[\n  {\n    "id": 1,\n    "firstName": "Larry",\n    "lastName": "Lute"\n  },\n  {\n    "id": 2,\n    "firstName": "Marcus",\n    "lastName": "Miller"\n  },\n  {\n    "id": 3,\n    "firstName": "Devin",\n    "lastName": "Booker"\n  }\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:'API "v2" swagger page'}),"\n",(0,s.jsx)(n.img,{alt:"Platformatic versions guide: &quot;v2&quot; updated swagger screenshot",src:t(21607).Z+"",width:"2886",height:"1700"})]}),"\n",(0,s.jsx)(n.h3,{id:"generating-the-mapper-plugin-with-openai",children:"Generating the mapper plugin with OpenAI"}),"\n",(0,s.jsx)(n.p,{children:"Platformatic supports generating the mapper plugin automatically using the OpenAI. Before doing so, make sure you have a platformatic user API key. If not, you can generate it by running the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx platformatic@latest login\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now when you have the API key you can generate the mapper plugin by running the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx platformatic@latest service versions update --openai\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It will update the same mapper plugin as before but this time it will use OpenAI to generate the request and response mappers. You should always be careful and check the generated code. In my case OpenAI generated the following code for the same ",(0,s.jsx)(n.code,{children:"mapOutputData200"})," function:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// !!! This function was generated by OpenAI. Check before use !!!\nfunction mapOutputData200 (output) {\n  const mappedOutput = {\n    headers: {},\n    responseBody: output.responseBody.map(item => ({\n      id: item.id,\n      name: `${item.firstName} ${item.lastName}`\n    }))\n  }\n  return mappedOutput\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"As you can see the code is a little bit different but the result is the same. You can use the code generated by OpenAI or write your own."}),"\n",(0,s.jsx)(n.h3,{id:"shared-routes",children:"Shared routes"}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes you may want to have a route that is shared between all the versions. For example, you may want to have a ",(0,s.jsx)(n.code,{children:"/health"})," route that is available under all the versions. To do that you need to set the plugin with this route in the platformatic ",(0,s.jsx)(n.code,{children:"plugins"})," config section rather than in the ",(0,s.jsx)(n.code,{children:"versions"})," config section."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},70779:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/versions-1-471f56978394b45503f7cd5c939a9c0a.png"},29212:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/versions-2-ce4de89deccb54f534886e03fdd70a95.png"},21607:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/versions-3-6a3c500c6fb542ae145961ce8ddbcaec.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(67294);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);