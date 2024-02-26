"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[74853],{2525:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=a(85893),t=a(11151);const i={},r="Example",l={id:"reference/sql-mapper/entities/example",title:"Example",description:"Given this PostgreSQL SQL schema:",source:"@site/versioned_docs/version-1.21.0/reference/sql-mapper/entities/example.md",sourceDirName:"reference/sql-mapper/entities",slug:"/reference/sql-mapper/entities/example",permalink:"/docs/1.21.0/reference/sql-mapper/entities/example",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.21.0/reference/sql-mapper/entities/example.md",tags:[],version:"1.21.0",frontMatter:{},sidebar:"docs",previous:{title:"API",permalink:"/docs/1.21.0/reference/sql-mapper/entities/api"},next:{title:"Hooks",permalink:"/docs/1.21.0/reference/sql-mapper/entities/hooks"}},c={},o=[];function p(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Given this PostgreSQL SQL schema:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE "categories" (\n    "id" int4 NOT NULL DEFAULT nextval(\'categories_id_seq\'::regclass),\n    "name" varchar(255) NOT NULL,\n    PRIMARY KEY ("id")\n);\n\nCREATE TABLE "pages" (\n    "id" int4 NOT NULL DEFAULT nextval(\'pages_id_seq\'::regclass),\n    "title" varchar(255) NOT NULL,\n    "category_id" int4,\n    "user_id" int4,\n    PRIMARY KEY ("id")\n);\n\nALTER TABLE "pages" ADD FOREIGN KEY ("category_id") REFERENCES "categories"("id");\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"app.platformatic.entities"})," will contain this mapping object:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "category": {\n        "name": "Category",\n        "singularName": "category",\n        "pluralName": "categories",\n        "primaryKey": "id",\n        "table": "categories",\n        "fields": {\n            "id": {\n                "sqlType": "int4",\n                "isNullable": false,\n                "primaryKey": true,\n                "camelcase": "id"\n            },\n            "name": {\n                "sqlType": "varchar",\n                "isNullable": false,\n                "camelcase": "name"\n            }\n        },\n        "camelCasedFields": {\n            "id": {\n                "sqlType": "int4",\n                "isNullable": false,\n                "primaryKey": true,\n                "camelcase": "id"\n            },\n            "name": {\n                "sqlType": "varchar",\n                "isNullable": false,\n                "camelcase": "name"\n            }\n        },\n        "relations": [],\n        "reverseRelationships": [\n            {\n                "sourceEntity": "Page",\n                "relation": {\n                    "constraint_catalog": "postgres",\n                    "constraint_schema": "public",\n                    "constraint_name": "pages_category_id_fkey",\n                    "table_catalog": "postgres",\n                    "table_schema": "public",\n                    "table_name": "pages",\n                    "constraint_type": "FOREIGN KEY",\n                    "is_deferrable": "NO",\n                    "initially_deferred": "NO",\n                    "enforced": "YES",\n                    "column_name": "category_id",\n                    "ordinal_position": 1,\n                    "position_in_unique_constraint": 1,\n                    "foreign_table_name": "categories",\n                    "foreign_column_name": "id"\n                }\n            }\n        ]\n    },\n    "page": {\n        "name": "Page",\n        "singularName": "page",\n        "pluralName": "pages",\n        "primaryKey": "id",\n        "table": "pages",\n        "fields": {\n            "id": {\n                "sqlType": "int4",\n                "isNullable": false,\n                "primaryKey": true,\n                "camelcase": "id"\n            },\n            "title": {\n                "sqlType": "varchar",\n                "isNullable": false,\n                "camelcase": "title"\n            },\n            "category_id": {\n                "sqlType": "int4",\n                "isNullable": true,\n                "foreignKey": true,\n                "camelcase": "categoryId"\n            },\n            "user_id": {\n                "sqlType": "int4",\n                "isNullable": true,\n                "camelcase": "userId"\n            }\n        },\n        "camelCasedFields": {\n            "id": {\n                "sqlType": "int4",\n                "isNullable": false,\n                "primaryKey": true,\n                "camelcase": "id"\n            },\n            "title": {\n                "sqlType": "varchar",\n                "isNullable": false,\n                "camelcase": "title"\n            },\n            "categoryId": {\n                "sqlType": "int4",\n                "isNullable": true,\n                "foreignKey": true,\n                "camelcase": "categoryId"\n            },\n            "userId": {\n                "sqlType": "int4",\n                "isNullable": true,\n                "camelcase": "userId"\n            }\n        },\n        "relations": [\n            {\n                "constraint_catalog": "postgres",\n                "constraint_schema": "public",\n                "constraint_name": "pages_category_id_fkey",\n                "table_catalog": "postgres",\n                "table_schema": "public",\n                "table_name": "pages",\n                "constraint_type": "FOREIGN KEY",\n                "is_deferrable": "NO",\n                "initially_deferred": "NO",\n                "enforced": "YES",\n                "column_name": "category_id",\n                "ordinal_position": 1,\n                "position_in_unique_constraint": 1,\n                "foreign_table_name": "categories",\n                "foreign_column_name": "id"\n            }\n        ],\n        "reverseRelationships": []\n    }\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>r});var s=a(67294);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);