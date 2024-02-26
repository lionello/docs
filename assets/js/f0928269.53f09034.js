"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[55979],{49573:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var l=i(85893),s=i(11151);const r={},t="API",d={id:"reference/sql-openapi/api",title:"API",description:"Each table is mapped to an entity named after table's name.",source:"@site/versioned_docs/version-1.23.0/reference/sql-openapi/api.md",sourceDirName:"reference/sql-openapi",slug:"/reference/sql-openapi/api",permalink:"/docs/reference/sql-openapi/api",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.23.0/reference/sql-openapi/api.md",tags:[],version:"1.23.0",frontMatter:{},sidebar:"docs",previous:{title:"Introduction to the REST API",permalink:"/docs/reference/sql-openapi/introduction"},next:{title:"Ignoring entities and fields",permalink:"/docs/reference/sql-openapi/ignore"}},c={},o=[{value:"GET and POST parameters",id:"get-and-post-parameters",level:2},{value:"Fields",id:"fields",level:2},{value:"<code>GET /[PLURAL_ENTITY_NAME]</code>",id:"get-plural_entity_name",level:2},{value:"Where clause",id:"where-clause",level:3},{value:"OrderBy clause",id:"orderby-clause",level:2},{value:"Total Count",id:"total-count",level:3},{value:"<code>POST [PLURAL_ENTITY_NAME]</code>",id:"post-plural_entity_name",level:2},{value:"<code>GET [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]</code>",id:"get-plural_entity_nameprimary_key",level:2},{value:"<code>POST [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]</code>",id:"post-plural_entity_nameprimary_key",level:2},{value:"<code>PUT [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]</code>",id:"put-plural_entity_nameprimary_key",level:2},{value:"<code>PUT [PLURAL_ENTITY_NAME]</code>",id:"put-plural_entity_name",level:2},{value:"<code>DELETE [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]</code>",id:"delete-plural_entity_nameprimary_key",level:2},{value:"Nested Relationships",id:"nested-relationships",level:2},{value:"<code>GET [P_PARENT_ENTITY]/[PARENT_PRIMARY_KEY]/[P_CHILDREN_ENTITY]</code>",id:"get-p_parent_entityparent_primary_keyp_children_entity",level:3},{value:"<code>GET [P_CHILDREN_ENTITY]/[CHILDREN_PRIMARY_KEY]/[S_PARENT_ENTITY]</code>",id:"get-p_children_entitychildren_primary_keys_parent_entity",level:3},{value:"Many-to-Many Relationships",id:"many-to-many-relationships",level:2},{value:"<code>GET [P_ENTITY]/[S_REL_1]/[KEY_REL_1]/[S_REL_2]/[KEY_REL_2]</code>",id:"get-p_entitys_rel_1key_rel_1s_rel_2key_rel_2",level:3},{value:"<code>POST [P_ENTITY]/[S_REL_1]/[KEY_REL_1]/[S_REL_2]/[KEY_REL_2]</code>",id:"post-p_entitys_rel_1key_rel_1s_rel_2key_rel_2",level:3},{value:"<code>PUT [P_ENTITY]/[S_REL_1]/[KEY_REL_1]/[S_REL_2]/[KEY_REL_2]</code>",id:"put-p_entitys_rel_1key_rel_1s_rel_2key_rel_2",level:3},{value:"<code>DELETE [P_ENTITY]/[S_REL_1]/[KEY_REL_1]/[S_REL_2]/[KEY_REL_2]</code>",id:"delete-p_entitys_rel_1key_rel_1s_rel_2key_rel_2",level:3},{value:"<code>GET /[P_ENTITY]</code>",id:"get-p_entity",level:2},{value:"Pagination",id:"pagination",level:2},{value:"Limit",id:"limit",level:3},{value:"Offset",id:"offset",level:3},{value:"Allow the primary keys in the input",id:"allow-the-primary-keys-in-the-input",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"api",children:"API"}),"\n",(0,l.jsxs)(n.p,{children:["Each table is mapped to an ",(0,l.jsx)(n.code,{children:"entity"})," named after table's name."]}),"\n",(0,l.jsx)(n.p,{children:"In the following reference we'll use some placeholders, but let's see an example"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Example"})}),"\n",(0,l.jsx)(n.p,{children:"Given this SQL executed against your database:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE pages (\n  id SERIAL PRIMARY KEY,\n  title VARCHAR(255) NOT NULL,\n  body TEXT NOT NULL\n);\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[PLURAL_ENTITY_NAME]"})," is ",(0,l.jsx)(n.code,{children:"pages"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[SINGULAR_ENTITY_NAME]"})," is ",(0,l.jsx)(n.code,{children:"page"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[PRIMARY_KEY]"})," is ",(0,l.jsx)(n.code,{children:"id"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"fields"})," are ",(0,l.jsx)(n.code,{children:"id"}),", ",(0,l.jsx)(n.code,{children:"title"}),", ",(0,l.jsx)(n.code,{children:"body"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"get-and-post-parameters",children:"GET and POST parameters"}),"\n",(0,l.jsxs)(n.p,{children:["Some APIs needs the ",(0,l.jsx)(n.code,{children:"GET"})," method, where parameters must be defined in the URL, or ",(0,l.jsx)(n.code,{children:"POST/PUT"})," methods, where parameters can be defined in the http request payload."]}),"\n",(0,l.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,l.jsxs)(n.p,{children:["Every API can define a ",(0,l.jsx)(n.code,{children:"fields"})," parameter, representing the entity fields you want to get back for each row of the table. If not specified all fields are returned."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"fields"})," parameter are always sent in query string, even for ",(0,l.jsx)(n.code,{children:"POST"}),", ",(0,l.jsx)(n.code,{children:"PUT"})," and ",(0,l.jsx)(n.code,{children:"DELETE"})," requests, as a comma separated value."]}),"\n",(0,l.jsx)("a",{name:"plural"}),"\n",(0,l.jsx)(n.h2,{id:"get-plural_entity_name",children:(0,l.jsx)(n.code,{children:"GET /[PLURAL_ENTITY_NAME]"})}),"\n",(0,l.jsxs)(n.p,{children:["Return all entities matching ",(0,l.jsx)(n.code,{children:"where"})," clause"]}),"\n",(0,l.jsx)(n.h3,{id:"where-clause",children:"Where clause"}),"\n",(0,l.jsxs)(n.p,{children:["You can define many ",(0,l.jsx)(n.code,{children:"WHERE"})," clauses in REST API, each clause includes a ",(0,l.jsx)(n.strong,{children:"field"}),", an ",(0,l.jsx)(n.strong,{children:"operator"})," and a ",(0,l.jsx)(n.strong,{children:"value"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"field"})," is one of the fields found in the schema."]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"operator"})," follows this table:"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Platformatic operator"}),(0,l.jsx)(n.th,{children:"SQL operator"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"eq"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"'='"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"in"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"'IN'"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"nin"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"'NOT IN'"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"neq"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"'<>'"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"gt"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"'>'"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"gte"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"'>='"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lt"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"'<'"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lte"}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"'<='"})})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"value"})," is the value you want to compare the field to."]}),"\n",(0,l.jsxs)(n.p,{children:["For GET requests all these clauses are specified in the query string using the format ",(0,l.jsx)(n.code,{children:"where.[FIELD].[OPERATOR]=[VALUE]"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Example"})}),"\n",(0,l.jsxs)(n.p,{children:["If you want to get the ",(0,l.jsx)(n.code,{children:"title"})," and the ",(0,l.jsx)(n.code,{children:"body"})," of every ",(0,l.jsx)(n.code,{children:"page"})," where ",(0,l.jsx)(n.code,{children:"id < 15"})," you can make an HTTP request like this:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ curl -X 'GET' \\\n  'http://localhost:3042/pages/?fields=body,title&where.id.lt=15' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Where clause operations are by default combined with the ",(0,l.jsx)(n.code,{children:"AND"})," operator. To create an ",(0,l.jsx)(n.code,{children:"OR"})," condition use the ",(0,l.jsx)(n.code,{children:"where.or"})," query param."]}),"\n",(0,l.jsxs)(n.p,{children:["Each ",(0,l.jsx)(n.code,{children:"where.or"})," query param can contain multiple conditions separated by a ",(0,l.jsx)(n.code,{children:"|"})," (pipe)."]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"where.or"})," conditions are similar to the ",(0,l.jsx)(n.code,{children:"where"})," conditions, except that they don't have the ",(0,l.jsx)(n.code,{children:"where"})," prefix."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Example"})}),"\n",(0,l.jsxs)(n.p,{children:["If you want to get the ",(0,l.jsx)(n.code,{children:"posts"})," where ",(0,l.jsx)(n.code,{children:"counter = 10"})," ",(0,l.jsx)(n.code,{children:"OR"})," ",(0,l.jsx)(n.code,{children:"counter > 30"})," you can make an HTTP request like this:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ curl -X 'GET' \\\n  'http://localhost:3042/pages/?where.or=(counter.eq=10|counter.gte=30)' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,l.jsx)(n.h2,{id:"orderby-clause",children:"OrderBy clause"}),"\n",(0,l.jsxs)(n.p,{children:["You can define the ordering of the returned rows within your REST API calls with the ",(0,l.jsx)(n.code,{children:"orderby"})," clause using the following pattern:"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"?orderby.[field]=[asc | desc]"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"field"})," is one of the fields found in the schema.\nThe ",(0,l.jsx)(n.strong,{children:"value"})," can be ",(0,l.jsx)(n.code,{children:"asc"})," or ",(0,l.jsx)(n.code,{children:"desc"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Example"})}),"\n",(0,l.jsxs)(n.p,{children:["If you want to get the ",(0,l.jsx)(n.code,{children:"pages"})," ordered alphabetically by their ",(0,l.jsx)(n.code,{children:"titles"})," you can make an HTTP request like this:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"$ curl -X 'GET' \\\n  'http://localhost:3042/pages?orderby.title=asc' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,l.jsx)(n.h3,{id:"total-count",children:"Total Count"}),"\n",(0,l.jsxs)(n.p,{children:["If ",(0,l.jsx)(n.code,{children:"totalCount"})," boolean is ",(0,l.jsx)(n.code,{children:"true"})," in query, the GET returns the total number of elements in the ",(0,l.jsx)(n.code,{children:"X-Total-Count"})," header ignoring ",(0,l.jsx)(n.code,{children:"limit"})," and ",(0,l.jsx)(n.code,{children:"offset"})," (if specified)."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'$ curl -v -X \'GET\' \\\n  \'http://localhost:3042/pages/?limit=2&offset=0&totalCount=true\' \\\n  -H \'accept: application/json\'\n\n (...)\n> HTTP/1.1 200 OK\n> x-total-count: 18\n (...)\n\n[{"id":1,"title":"Movie1"},{"id":2,"title":"Movie2"}]%\n'})}),"\n",(0,l.jsx)(n.h2,{id:"post-plural_entity_name",children:(0,l.jsx)(n.code,{children:"POST [PLURAL_ENTITY_NAME]"})}),"\n",(0,l.jsx)(n.p,{children:"Creates a new row in table. Expects fields to be sent in a JSON formatted request body."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Example"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'$ curl -X \'POST\' \\\n  \'http://localhost:3042/pages/\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "title": "Hello World",\n  "body": "Welcome to Platformatic!"\n}\'\n\n{\n  "id": 1,\n  "title": "Hello World",\n  "body": "Welcome to Platformatic"\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"get-plural_entity_nameprimary_key",children:(0,l.jsx)(n.code,{children:"GET [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]"})}),"\n",(0,l.jsxs)(n.p,{children:["Returns a single row, identified by ",(0,l.jsx)(n.code,{children:"PRIMARY_KEY"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Example"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'$ curl -X \'GET\' \'http://localhost:3042/pages/1?fields=title,body\n\n{\n  "title": "Hello World",\n  "body": "Welcome to Platformatic"\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"post-plural_entity_nameprimary_key",children:(0,l.jsx)(n.code,{children:"POST [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]"})}),"\n",(0,l.jsxs)(n.p,{children:["Updates a row identified by ",(0,l.jsx)(n.code,{children:"PRIMARY_KEY"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Example"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'$ curl -X \'POST\' \\\n  \'http://localhost:3042/pages/1\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "title": "Hello Platformatic!",\n  "body": "Welcome to Platformatic!"\n}\'\n\n{\n  "id": 1,\n  "title": "Hello Platformatic!",\n  "body": "Welcome to Platformatic"\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"put-plural_entity_nameprimary_key",children:(0,l.jsx)(n.code,{children:"PUT [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]"})}),"\n",(0,l.jsxs)(n.p,{children:["Same as ",(0,l.jsx)(n.code,{children:"POST [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]"}),"."]}),"\n",(0,l.jsx)("a",{name:"put-plural"}),"\n",(0,l.jsx)(n.h2,{id:"put-plural_entity_name",children:(0,l.jsx)(n.code,{children:"PUT [PLURAL_ENTITY_NAME]"})}),"\n",(0,l.jsxs)(n.p,{children:["Updates all entities matching ",(0,l.jsx)(n.code,{children:"where"})," clause"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Example"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'$ curl -X \'PUT\' \\\n  \'http://localhost:3042/pages?where.id.in=1,2\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "title": "Updated title!",\n  "body": "Updated body!"\n}\'\n\n[{\n  "id": 1,\n  "title": "Updated title!",\n  "body": "Updated body!"\n},{\n  "id": 2,\n  "title": "Updated title!",\n  "body": "Updated body!"\n}]\n'})}),"\n",(0,l.jsx)(n.h2,{id:"delete-plural_entity_nameprimary_key",children:(0,l.jsx)(n.code,{children:"DELETE [PLURAL_ENTITY_NAME]/[PRIMARY_KEY]"})}),"\n",(0,l.jsxs)(n.p,{children:["Deletes a row identified by the ",(0,l.jsx)(n.code,{children:"PRIMARY_KEY"}),"."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Example"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"$ curl -X 'DELETE' 'http://localhost:3042/pages/1?fields=title'\n\n{\n  \"title\": \"Hello Platformatic!\"\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"nested-relationships",children:"Nested Relationships"}),"\n",(0,l.jsx)(n.p,{children:"Let's consider the following SQL:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE IF NOT EXISTS movies (\n  movie_id INTEGER PRIMARY KEY,\n  title TEXT NOT NULL\n);\nCREATE TABLE IF NOT EXISTS quotes (\n  id INTEGER PRIMARY KEY,\n  quote TEXT NOT NULL,\n  movie_id INTEGER NOT NULL REFERENCES movies(movie_id)\n);\n"})}),"\n",(0,l.jsx)(n.p,{children:"And:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[P_PARENT_ENTITY]"})," is ",(0,l.jsx)(n.code,{children:"movies"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[S_PARENT_ENTITY]"})," is ",(0,l.jsx)(n.code,{children:"movie"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[P_CHILDREN_ENTITY]"})," is ",(0,l.jsx)(n.code,{children:"quotes"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[S_CHILDREN_ENTITY]"})," is ",(0,l.jsx)(n.code,{children:"quote"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"In this case, more APIs are available:"}),"\n",(0,l.jsx)(n.h3,{id:"get-p_parent_entityparent_primary_keyp_children_entity",children:(0,l.jsx)(n.code,{children:"GET [P_PARENT_ENTITY]/[PARENT_PRIMARY_KEY]/[P_CHILDREN_ENTITY]"})}),"\n",(0,l.jsx)(n.p,{children:"Given a 1-to-many relationship, where a parent entity can have many children, you can query for the children directly."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'$ curl -X \'GET\' \'http://localhost:3042/movies/1/quotes?fields=quote\n\n[\n  {\n    "quote": "I\'ll be back"\n  },\n  {\n    "quote": "Hasta la vista, baby"\n  }\n]\n'})}),"\n",(0,l.jsx)(n.h3,{id:"get-p_children_entitychildren_primary_keys_parent_entity",children:(0,l.jsx)(n.code,{children:"GET [P_CHILDREN_ENTITY]/[CHILDREN_PRIMARY_KEY]/[S_PARENT_ENTITY]"})}),"\n",(0,l.jsx)(n.p,{children:"You can query for the parent directly, e.g.:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'$ curl -X \'GET\' \'http://localhost:3042/quotes/1/movie?fields=title\n\n{\n  "title": "Terminator"\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"many-to-many-relationships",children:"Many-to-Many Relationships"}),"\n",(0,l.jsx)(n.p,{children:"Many-to-Many relationship lets you relate each row in one table to many rows in\nanother table and vice versa."}),"\n",(0,l.jsxs)(n.p,{children:['Many-to-many relationship are implemented in SQL via a "join table", a table whose ',(0,l.jsx)(n.strong,{children:"primary key"}),"\nis composed by the identifier of the two parts of the many-to-many relationship."]}),"\n",(0,l.jsx)(n.p,{children:"Platformatic DB fully support many-to-many relationships on all supported database."}),"\n",(0,l.jsx)(n.p,{children:"Let's consider the following SQL:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-SQL",children:"CREATE TABLE pages (\n  id INTEGER PRIMARY KEY,\n  the_title VARCHAR(42)\n);\n\nCREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  username VARCHAR(255) NOT NULL\n);\n\nCREATE TABLE editors (\n  page_id INTEGER NOT NULL,\n  user_id INTEGER NOT NULL,\n  role VARCHAR(255) NOT NULL,\n  CONSTRAINT fk_editor_pages FOREIGN KEY (page_id) REFERENCES pages(id),\n  CONSTRAINT fk_editor_users FOREIGN KEY (user_id) REFERENCES users(id),\n  PRIMARY KEY (page_id, user_id)\n);\n"})}),"\n",(0,l.jsx)(n.p,{children:"And:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[P_ENTITY]"})," is ",(0,l.jsx)(n.code,{children:"editors"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[P_REL_1]"})," is ",(0,l.jsx)(n.code,{children:"pages"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[S_REL_1]"})," is ",(0,l.jsx)(n.code,{children:"page"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[KEY_REL_1]"})," is ",(0,l.jsx)(n.code,{children:"pages"})," PRIMARY KEY: ",(0,l.jsx)(n.code,{children:"pages(id)"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[P_REL_2]"})," is ",(0,l.jsx)(n.code,{children:"users"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[S_REL_2]"})," is ",(0,l.jsx)(n.code,{children:"user"})]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[KEY_REL_2]"})," is ",(0,l.jsx)(n.code,{children:"users"})," PRIMARY KEY: ",(0,l.jsx)(n.code,{children:"users(id)"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"In this case, here the APIs that are available for the join table:"}),"\n",(0,l.jsx)(n.h3,{id:"get-p_entitys_rel_1key_rel_1s_rel_2key_rel_2",children:(0,l.jsx)(n.code,{children:"GET [P_ENTITY]/[S_REL_1]/[KEY_REL_1]/[S_REL_2]/[KEY_REL_2]"})}),"\n",(0,l.jsxs)(n.p,{children:['This returns the entity in the "join table", e.g. ',(0,l.jsx)(n.code,{children:"GET /editors/page/1/user/1"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"post-p_entitys_rel_1key_rel_1s_rel_2key_rel_2",children:(0,l.jsx)(n.code,{children:"POST [P_ENTITY]/[S_REL_1]/[KEY_REL_1]/[S_REL_2]/[KEY_REL_2]"})}),"\n",(0,l.jsxs)(n.p,{children:['Creates a new entity in the "join table", e.g. ',(0,l.jsx)(n.code,{children:"POST /editors/page/1/user/1"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"put-p_entitys_rel_1key_rel_1s_rel_2key_rel_2",children:(0,l.jsx)(n.code,{children:"PUT [P_ENTITY]/[S_REL_1]/[KEY_REL_1]/[S_REL_2]/[KEY_REL_2]"})}),"\n",(0,l.jsxs)(n.p,{children:['Updates an entity in the "join table", e.g. ',(0,l.jsx)(n.code,{children:"PUT /editors/page/1/user/1"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"delete-p_entitys_rel_1key_rel_1s_rel_2key_rel_2",children:(0,l.jsx)(n.code,{children:"DELETE [P_ENTITY]/[S_REL_1]/[KEY_REL_1]/[S_REL_2]/[KEY_REL_2]"})}),"\n",(0,l.jsxs)(n.p,{children:['Delete the entity in the "join table", e.g. ',(0,l.jsx)(n.code,{children:"DELETE /editors/page/1/user/1"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"get-p_entity",children:(0,l.jsx)(n.code,{children:"GET /[P_ENTITY]"})}),"\n",(0,l.jsxs)(n.p,{children:["See the ",(0,l.jsx)(n.a,{href:"#plural",children:"above"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"Offset"})," only accepts values ",(0,l.jsx)(n.code,{children:">= 0"}),". Otherwise an error is return."]}),"\n",(0,l.jsx)(n.h2,{id:"pagination",children:"Pagination"}),"\n",(0,l.jsxs)(n.p,{children:["The Platformatic DB supports for result's pagination through input parameters: ",(0,l.jsx)(n.code,{children:"limit"})," and ",(0,l.jsx)(n.code,{children:"offset"})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Example"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'$ curl -X \'GET\' \'http://localhost:3042/movies?limit=5&offset=10\n\n[\n  {\n    "title": "Star Wars",\n    "movie_id": 10\n  },\n  ...\n  {\n    "title": "007",\n    "movie_id": 14\n  }\n]\n'})}),"\n",(0,l.jsx)(n.p,{children:"It returns 5 movies starting from position 10."}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"#total-count",children:"TotalCount"})," functionality can be used in order to evaluate if there are more pages."]}),"\n",(0,l.jsx)(n.h3,{id:"limit",children:"Limit"}),"\n",(0,l.jsxs)(n.p,{children:["By default a ",(0,l.jsx)(n.em,{children:"limit"})," value (",(0,l.jsx)(n.code,{children:"10"}),") is applied to each request."]}),"\n",(0,l.jsxs)(n.p,{children:["Clients can override this behavior by passing a value.\nIn this case the server validates the input and an error is return if exceeds the ",(0,l.jsx)(n.code,{children:"max"})," accepted value (",(0,l.jsx)(n.code,{children:"100"}),")."]}),"\n",(0,l.jsx)(n.p,{children:"Limit's values can be customized through configuration:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  ...\n  "db": {\n    ...\n    "limit": {\n      "default": 50,\n      "max": 1000\n    }\n  }\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"Limit"})," only accepts values ",(0,l.jsx)(n.code,{children:">= 0"}),". Otherwise an error is return."]}),"\n",(0,l.jsx)(n.h3,{id:"offset",children:"Offset"}),"\n",(0,l.jsxs)(n.p,{children:["By default ",(0,l.jsx)(n.em,{children:"offset"})," is not applied to the request.\nClients can override this behavior by passing a value."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"Offset"})," only accepts values ",(0,l.jsx)(n.code,{children:">= 0"}),". Otherwise an error is return."]}),"\n",(0,l.jsx)(n.h2,{id:"allow-the-primary-keys-in-the-input",children:"Allow the primary keys in the input"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"@platformatic/sql-openapi"})," allows for specifying if to accept the table primary keys\nin the inputs to the various routes."]}),"\n",(0,l.jsx)(n.p,{children:"To configure:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"app.register(require('@platformatic/sql-openapi'), {\n  allowPrimaryKeysInInput: false\n})\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Example"})}),"\n",(0,l.jsxs)(n.p,{children:["If ",(0,l.jsx)(n.code,{children:"allowPrimaryKeysInInput"})," is set to ",(0,l.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'$ curl -X \'POST\' \\\n  \'http://localhost:3042/pages/\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "id": 42,\n  "title": "Hello Platformatic!",\n  "body": "Welcome to Platformatic!"\n}\'\n\n{\n  "id": 1,\n  "title": "Hello Platformatic!",\n  "body": "Welcome to Platformatic"\n  "statusCode": 400,\n  "code": \'FST_ERR_VALIDATION\',\n  "error:" \'Bad Request\',\n  "message": \'body/id must NOT be valid\'\n}\n'})}),"\n",(0,l.jsxs)(n.p,{children:["If ",(0,l.jsx)(n.code,{children:"allowPrimaryKeysInInput"})," is set to ",(0,l.jsx)(n.code,{children:"true"})," or left ",(0,l.jsx)(n.code,{children:"undefined"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'$ curl -X \'POST\' \\\n  \'http://localhost:3042/pages/\' \\\n  -H \'accept: application/json\' \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{\n  "id": 42,\n  "title": "Hello Platformatic!",\n  "body": "Welcome to Platformatic!"\n}\'\n\n{\n  "id": 42,\n  "title": "Hello Platformatic!",\n  "body": "Welcome to Platformatic"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>t});var l=i(67294);const s={},r=l.createContext(s);function t(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);