"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[5138],{27592:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=i(85893),l=i(11151);const t={},a="Fields",r={id:"reference/sql-mapper/entities/fields",title:"Fields",description:"When Platformatic DB inspects a database's schema, it creates an object for each table that contains a mapping of their fields.",source:"@site/versioned_docs/version-1.21.1/reference/sql-mapper/entities/fields.md",sourceDirName:"reference/sql-mapper/entities",slug:"/reference/sql-mapper/entities/fields",permalink:"/docs/1.21.1/reference/sql-mapper/entities/fields",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.21.1/reference/sql-mapper/entities/fields.md",tags:[],version:"1.21.1",frontMatter:{},sidebar:"docs",previous:{title:"Introduction to Entities",permalink:"/docs/1.21.1/reference/sql-mapper/entities/introduction"},next:{title:"API",permalink:"/docs/1.21.1/reference/sql-mapper/entities/api"}},c={},d=[{value:"Fields detail",id:"fields-detail",level:2},{value:"Example",id:"example",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"fields",children:"Fields"}),"\n",(0,s.jsx)(n.p,{children:"When Platformatic DB inspects a database's schema, it creates an object for each table that contains a mapping of their fields."}),"\n",(0,s.jsx)(n.p,{children:"These objects contain the following properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"singularName"}),": singular entity name, based on table name. Uses ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/inflected",children:"inflected"})," under the hood."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pluralName"}),": plural entity name (i.e ",(0,s.jsx)(n.code,{children:"'pages'"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"primaryKey"}),": the field which is identified as primary key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"table"}),": original table name"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fields"}),": an object containing all fields details. Object key is the field name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"camelCasedFields"}),": an object containing all fields details in camelcase. If you have a column named ",(0,s.jsx)(n.code,{children:"user_id"})," you can access it using both ",(0,s.jsx)(n.code,{children:"userId"})," or ",(0,s.jsx)(n.code,{children:"user_id"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"fields-detail",children:"Fields detail"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sqlType"}),": The original field type. It may vary depending on the underlying DB Engine"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"isNullable"}),": Whether the field can be ",(0,s.jsx)(n.code,{children:"null"})," or not"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"primaryKey"}),": Whether the field is the primary key or not"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"camelcase"}),": The ",(0,s.jsx)(n.em,{children:"camelcased"})," value of the field"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Given this SQL Schema (for PostgreSQL):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-SQL",children:'CREATE SEQUENCE IF NOT EXISTS pages_id_seq;\nCREATE TABLE "public"."pages" (\n    "id" int4 NOT NULL DEFAULT nextval(\'pages_id_seq\'::regclass),\n    "title" varchar,\n    "body_content" text,\n    "category_id" int4,\n    PRIMARY KEY ("id")\n);\n'})}),"\n",(0,s.jsx)(n.p,{children:"The resulting mapping object will be:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n  singularName: 'page',\n  pluralName: 'pages',\n  primaryKey: 'id',\n  table: 'pages',\n  fields: {\n    id: {\n      sqlType: 'int4',\n      isNullable: false,\n      primaryKey: true,\n      camelcase: 'id'\n    },\n    title: {\n      sqlType: 'varchar',\n      isNullable: true,\n      camelcase: 'title'\n    },\n    body_content: {\n      sqlType: 'text',\n      isNullable: true,\n      camelcase: 'bodyContent'\n    },\n    category_id: {\n      sqlType: 'int4',\n      isNullable: true,\n      foreignKey: true,\n      camelcase: 'categoryId'\n    }\n  }\n  camelCasedFields: {\n    id: {\n      sqlType: 'int4',\n      isNullable: false,\n      primaryKey: true,\n      camelcase: 'id'\n    },\n    title: {\n      sqlType: 'varchar',\n      isNullable: true,\n      camelcase: 'title'\n    },\n    bodyContent: {\n      sqlType: 'text',\n      isNullable: true,\n      camelcase: 'bodyContent'\n    },\n    categoryId: {\n      sqlType: 'int4',\n      isNullable: true,\n      foreignKey: true,\n      camelcase: 'categoryId'\n    }\n  },\n  relations: []\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var s=i(67294);const l={},t=s.createContext(l);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);