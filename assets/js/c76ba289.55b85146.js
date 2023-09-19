"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={id:"hive-sql-tips",title:"Hive Sql Tips"},i=void 0,o={unversionedId:"bigdata/hive-sql-tips",id:"bigdata/hive-sql-tips",title:"Hive Sql Tips",description:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",source:"@site/docs/bigdata/hive_sql_tips.md",sourceDirName:"bigdata",slug:"/bigdata/hive-sql-tips",permalink:"/docs/bigdata/hive-sql-tips",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/bigdata/hive_sql_tips.md",tags:[],version:"current",frontMatter:{id:"hive-sql-tips",title:"Hive Sql Tips"},sidebar:"tutorialSidebar",previous:{title:"HDFS \u5e38\u7528\u547d\u4ee4",permalink:"/docs/bigdata/hdfs-command"},next:{title:"JavaScript\u6570\u7ec4\u65b9\u6cd5",permalink:"/docs/front/javascript-array-method"}},s={},d=[{value:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",id:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",level:2},{value:"\u96c6\u5408\u6570\u636e\u7c7b\u578b",id:"\u96c6\u5408\u6570\u636e\u7c7b\u578b",level:2},{value:"\u53bb\u91cd",id:"\u53bb\u91cd",level:2},{value:"row_number()",id:"row_number",level:3},{value:"\u521b\u5efa\u6570\u636e\u5e93\u3001\u8868\u3001\u89c6\u56fe",id:"\u521b\u5efa\u6570\u636e\u5e93\u8868\u89c6\u56fe",level:2},{value:"\u67e5\u770b\u6570\u636e\u5e93\u3001\u8868",id:"\u67e5\u770b\u6570\u636e\u5e93\u8868",level:2},{value:"\u5220\u9664\u6570\u636e\u5e93\u3001\u8868",id:"\u5220\u9664\u6570\u636e\u5e93\u8868",level:2},{value:"Load \u6570\u636e",id:"load-\u6570\u636e",level:2},{value:"\u63d2\u5165\u6570\u636e",id:"\u63d2\u5165\u6570\u636e",level:2},{value:"\u67e5\u8be2\u6570\u636e",id:"\u67e5\u8be2\u6570\u636e",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u57fa\u672c\u6570\u636e\u7c7b\u578b"},"\u57fa\u672c\u6570\u636e\u7c7b\u578b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TINYINT\uff1a1 byte \u6709\u7b26\u53f7\u6574\u6570(1)"),(0,r.kt)("li",{parentName:"ul"},"SMALLINT\uff1a2 bytes \u6709\u7b26\u53f7\u6574\u6570(1)"),(0,r.kt)("li",{parentName:"ul"},"INT\uff1a4 bytes \u6709\u7b26\u53f7\u6574\u6570(1)"),(0,r.kt)("li",{parentName:"ul"},"BIGINT\uff1a8 bytes \u6709\u7b26\u53f7\u6574\u6570(1)"),(0,r.kt)("li",{parentName:"ul"},"FLOAT\uff1a4 bytes \u5355\u7cbe\u5ea6\u6d6e\u70b9\u6570(1.0)"),(0,r.kt)("li",{parentName:"ul"},"DOUBLE\uff1a8 bytes \u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570(1.0)"),(0,r.kt)("li",{parentName:"ul"},"BOOLEAN\uff1a\u5e03\u5c14\u7c7b\u578b\uff0ctrue or false(false)"),(0,r.kt)("li",{parentName:"ul"},"STRING\uff1a\u5b57\u7b26\u4e32\uff0c\u53ef\u6307\u5b9a\u5b57\u7b26\u96c6(\u201chive\u201d)"),(0,r.kt)("li",{parentName:"ul"},"TIMESTAMP\uff1a\u6574\u6570\u3001\u6d6e\u70b9\u6570or\u5b57\u7b26\u4e32(1321123121)")),(0,r.kt)("h2",{id:"\u96c6\u5408\u6570\u636e\u7c7b\u578b"},"\u96c6\u5408\u6570\u636e\u7c7b\u578b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ARRAY\uff1a\u4e00\u7ec4\u6709\u5e8f\u7684\u5b57\u6bb5\uff0c\u5b57\u6bb5\u7684\u7c7b\u578b\u5fc5\u987b\u76f8\u540c\uff1b"),(0,r.kt)("li",{parentName:"ul"},"MAP\uff1a\u4e00\u7ec4\u65e0\u5e8f\u7684\u952e/\u503c\u5bf9\uff0c\u952e\u7684\u7c7b\u578b\u5fc5\u987b\u662f\u539f\u5b50\u7684\uff0c\u503c\u53ef\u4ee5\u662f\u4efb\u4f55\u6570\u636e\u7c7b\u578b\uff0c\u540c\u4e00\u4e2a\u6620\u5c04\u7684\u952e\u548c\u503c\u989d\u7c7b\u578b\u5fc5\u987b\u76f8\u540c\uff1b"),(0,r.kt)("li",{parentName:"ul"},"STRUCT\uff1a\u4e00\u7ec4\u547d\u540d\u7684\u5b57\u6bb5\uff0c\u5b57\u6bb5\u7c7b\u578b\u53ef\u4ee5\u4e0d\u540c")),(0,r.kt)("h2",{id:"\u53bb\u91cd"},"\u53bb\u91cd"),(0,r.kt)("h3",{id:"row_number"},"row_number()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT id\n    ,month\n    ,flag\nFROM (\n    SELECT id\n        ,month\n        ,flag\n        ,row_number() OVER (\n            PARTITION BY id ORDER BY month DESC\n            ) AS rn\n    FROM view1\n    ) t\nWHERE t.rn = 1;\n")),(0,r.kt)("h2",{id:"\u521b\u5efa\u6570\u636e\u5e93\u8868\u89c6\u56fe"},"\u521b\u5efa\u6570\u636e\u5e93\u3001\u8868\u3001\u89c6\u56fe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"#\u521b\u5efa\u6570\u636e\u5e93\uff1acreate database [if not exists] database_name;\nhive> create database if not exists college;\n\n#\u521b\u5efa\u8868(\u5185\u90e8\u8868\u3001\u5916\u90e8\u8868\u4ee5\u53ca\u5206\u533a\u8868\u89c1\u9644\u5f55)\uff1a\ncreate [external] table [if not exists] table_name\n[(col_1 dt [comment c_com_1],col_2 dt [comment c_com_2],...)] \n[partitioned by (col dt,...)];\n\nhive> use college;\nhive> create table if not exists student(id int,name string);\n\n#\u521b\u5efa\u89c6\u56fe\nhive> create view stu as select id,name from student where id<10;\n")),(0,r.kt)("h2",{id:"\u67e5\u770b\u6570\u636e\u5e93\u8868"},"\u67e5\u770b\u6570\u636e\u5e93\u3001\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"#\u67e5\u770b\u6240\u6709\u6570\u636e\u5e93\nhive> show databases;\n\n#\u67e5\u770b\u4ee5h\u5f00\u5934\u7684\u6240\u6709\u6570\u636e\u5e93\nhive> show databases like \u2018col.*\u2019\n\n#\u67e5\u770bhive\u6570\u636e\u5e93\u4f4d\u7f6e\u7b49\u4fe1\u606f\ndescribe database hive;\ndesc database hive;\ndesc database extended hive;\n\n#\u67e5\u770b\u8868\nhive> show tables;\nhive> show tables in college like \u2018s.*\u2019;\n")),(0,r.kt)("admonition",{title:"\u67e5\u770b\u5efa\u8868\u8bed\u53e5",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"hive> show create table tablename;\n"))),(0,r.kt)("h2",{id:"\u5220\u9664\u6570\u636e\u5e93\u8868"},"\u5220\u9664\u6570\u636e\u5e93\u3001\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"#\u5220\u9664\u6570\u636e\u5e93\ndrop database db [cascade]; # \u975e\u7a7a\u6570\u636e\u5e93\u4f7f\u7528cascade\uff0c\u5426\u5219\u62a5\u9519\n#\u5220\u9664\u8868\ndrop table table_name;\n")),(0,r.kt)("h2",{id:"load-\u6570\u636e"},"Load \u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"#\u88c5\u8f7d\u672c\u5730\u6570\u636e\nhive> load data local inpath \u2018/home/hadoop/stu.txt\u2019 overwrite into table student; #overwrite\u8986\u76d6\n\n#\u4e0e\u4e0b\u8ff0\u8bed\u53e5\u7b49\u540c(load\u672c\u5730\u6570\u636e\u672c\u8d28\u5373\u4e3a\u4e0a\u4f20\u672c\u5730\u6570\u636e\u5230hive\u6570\u636e\u8868\u5b58\u653e\u8def\u5f84)\nhadoop fs -put /home/hadoop/stu.txt /hive/warehouse/college.db/student\n\n#\u88c5\u8f7dhdfs\u6570\u636e\nhive> load data inpath \u2018/user/hadoop/stu.txt\u2019 overwrite into table student; # overwrite \u8986\u76d6\n")),(0,r.kt)("h2",{id:"\u63d2\u5165\u6570\u636e"},"\u63d2\u5165\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"insert (overwrite) table student_copy select * from student where id<10;\n")),(0,r.kt)("h2",{id:"\u67e5\u8be2\u6570\u636e"},"\u67e5\u8be2\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select id,name\n  case\n  when id=1 then 'first'\n  when id=2 then 'second'\n  else 'other' end from student;\n")))}u.isMDXComponent=!0}}]);