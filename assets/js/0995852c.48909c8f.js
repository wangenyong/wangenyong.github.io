"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3053],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=i(a),c=n,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return a?r.createElement(k,s(s({ref:t},d),{},{components:a})):r.createElement(k,s({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1345:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:2,title:"MySQL\u5907\u4efd"},s=void 0,o={unversionedId:"database/mysql-backup",id:"database/mysql-backup",title:"MySQL\u5907\u4efd",description:"\u8d26\u53f7",source:"@site/docs/database/mysql-backup.md",sourceDirName:"database",slug:"/database/mysql-backup",permalink:"/docs/database/mysql-backup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/database/mysql-backup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"MySQL\u5907\u4efd"},sidebar:"tutorialSidebar",previous:{title:"MySQL\u521b\u5efa\u6570\u636e\u5e93",permalink:"/docs/database/mysql-init-database"},next:{title:"MySQL-Java\u6570\u636e\u7c7b\u578b",permalink:"/docs/database/mysql-java-datatype"}},p={},i=[{value:"\u8d26\u53f7",id:"\u8d26\u53f7",level:2},{value:"\u7528\u4e8e\u5907\u4efd\u7684\u7528\u6237\u8d26\u53f7",id:"\u7528\u4e8e\u5907\u4efd\u7684\u7528\u6237\u8d26\u53f7",level:3},{value:"\u7528\u4e8e\u6062\u590d\u5907\u4efd\u7684\u7528\u6237\u8d26\u53f7",id:"\u7528\u4e8e\u6062\u590d\u5907\u4efd\u7684\u7528\u6237\u8d26\u53f7",level:3},{value:"\u5907\u4efd\u548c\u6062\u590d",id:"\u5907\u4efd\u548c\u6062\u590d",level:2},{value:"\u5907\u4efd\u6240\u6709\u6570\u636e\u5e93",id:"\u5907\u4efd\u6240\u6709\u6570\u636e\u5e93",level:3},{value:"\u5907\u4efd\u6307\u5b9a\u7684\u6570\u636e\u5e93",id:"\u5907\u4efd\u6307\u5b9a\u7684\u6570\u636e\u5e93",level:3},{value:"\u5907\u4efd\u591a\u4e2a\u6570\u636e\u5e93",id:"\u5907\u4efd\u591a\u4e2a\u6570\u636e\u5e93",level:3},{value:"\u521b\u5efa\u5907\u4efd\u811a\u672c*",id:"\u521b\u5efa\u5907\u4efd\u811a\u672c",level:3},{value:"\u6062\u590d\u5907\u4efd",id:"\u6062\u590d\u5907\u4efd",level:2},{value:"\u6062\u590d\u6570\u636e\u5e93",id:"\u6062\u590d\u6570\u636e\u5e93",level:3},{value:"docker mysqldump",id:"docker-mysqldump",level:2}],d={toc:i},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u8d26\u53f7"},"\u8d26\u53f7"),(0,n.kt)("h3",{id:"\u7528\u4e8e\u5907\u4efd\u7684\u7528\u6237\u8d26\u53f7"},"\u7528\u4e8e\u5907\u4efd\u7684\u7528\u6237\u8d26\u53f7"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6700\u8d77\u7801\uff0c\u9700\u8981\u6709 ",(0,n.kt)("strong",{parentName:"li"},"SELECT")," \u7684\u6743\u9650\u624d\u80fd\u8bfb\u53d6\u6570\u636e\u5e93\u3002\u5e94\u8be5\u9650\u5236\u5907\u4efd\u8d26\u53f7\u53ea\u80fd\u8bbf\u95ee\n\u9700\u8981\u5907\u4efd\u7684\u5e93\u3002\u5c24\u5176\u662f\uff0c\u5907\u4efd\u8d26\u53f7\u4e0d\u5e94\u8be5\u62e5\u6709\u5bf9 ",(0,n.kt)("strong",{parentName:"li"},"mysql")," \u6570\u636e\u5e93\u7684 ",(0,n.kt)("strong",{parentName:"li"},"SELECT")," \u6743\u9650\uff0c\u56e0\u4e3a\n\u8be5\u6570\u636e\u5e93\u542b\u6709\u767b\u5f55\u5bc6\u7801\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u56e0\u4e3a\u5907\u4efd\u65f6\u9700\u8981\u9501\u4f4f\u8868\uff0c\u6240\u4ee5\u9700\u8981 ",(0,n.kt)("strong",{parentName:"li"},"LOCK TABLES")," \u6743\u9650\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u6570\u636e\u5e93\u542b\u6709\u89c6\u56fe\u6216\u89e6\u53d1\u5668\uff0c\u90a3\u7528\u6237\u8d26\u53f7\u8fd8\u5206\u522b\u9700\u8981 ",(0,n.kt)("strong",{parentName:"li"},"SHOW\nVIEW")," \u548c ",(0,n.kt)("strong",{parentName:"li"},"TRIGGER")," \u6743\u9650\u3002")),(0,n.kt)("p",null,"\u6211\u4eec\u6765\u521b\u5efa ",(0,n.kt)("strong",{parentName:"p"},"admin_backup@localhost"),"\uff0c\u5e76\u6388\u4e88\u5b83\u5728 ",(0,n.kt)("strong",{parentName:"p"},"rookery")," \u548c ",(0,n.kt)("strong",{parentName:"p"},"birdwatchers"),"\n\u4e0a\u8fdb\u884c ",(0,n.kt)("strong",{parentName:"p"},"SELECT")," \u548c ",(0,n.kt)("strong",{parentName:"p"},"LOCK TABLES")," \u7684\u6743\u9650\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'admin_backup'@'localhost' IDENTIFIED BY 'its_password_123';\n\nGRANT SELECT, LOCK TABLES ON rookery.* TO 'admin_backup'@'localhost';\n\nGRANT SELECT, LOCK TABLES ON birdwatchers.* TO 'admin_backup'@'localhost';\n")),(0,n.kt)("h3",{id:"\u7528\u4e8e\u6062\u590d\u5907\u4efd\u7684\u7528\u6237\u8d26\u53f7"},"\u7528\u4e8e\u6062\u590d\u5907\u4efd\u7684\u7528\u6237\u8d26\u53f7"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c06\u6570\u636e\u4ece ",(0,n.kt)("strong",{parentName:"li"},"dump")," \u6587\u4ef6\u6062\u590d\u5230\u8868\u4e2d\u65f6\uff0c\u7528\u6237\u8d26\u53f7\u81f3\u5c11\u9700\u8981 ",(0,n.kt)("strong",{parentName:"li"},"INSERT")," \u6743\u9650\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u63d2\u5165\u6570\u636e\u65f6\uff0c\u8fd8\u9700\u8981 ",(0,n.kt)("strong",{parentName:"li"},"LOCK TABLES")," \u6743\u9650\u6765\u9501\u4f4f\u8868\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981 ",(0,n.kt)("strong",{parentName:"li"},"CREATE")," \u548c ",(0,n.kt)("strong",{parentName:"li"},"INDEX")," \u6743\u9650\u6765\u5206\u522b\u521b\u5efa\u8868\u548c\u7d22\u5f15\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u56e0\u4e3a ",(0,n.kt)("strong",{parentName:"li"},"dump")," \u6587\u4ef6\u53ef\u80fd\u5305\u542b\u8bbe\u7f6e\u6821\u5bf9\u96c6\u7684\u8bed\u53e5\uff0c\u6240\u4ee5\u9700\u8981 ",(0,n.kt)("strong",{parentName:"li"},"ALTER")," \u6743\u9650\uff1b"),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e ",(0,n.kt)("strong",{parentName:"li"},"Lena Stankoska")," \u7528\u6765\u6062\u590d\u8868\u7684\u65b9\u6cd5\uff0c\u5979\u53ef\u80fd\u8fd8\u60f3\u5c06\u6570\u636e\u6062\u590d\u5230\u4e34\u65f6\u8868\uff1b\u8fd9\u6837\u7684\u8bdd\uff0c\n\u5219\u9700\u8981 ",(0,n.kt)("strong",{parentName:"li"},"CREATE TEMPORARY TABLES")," \u6743\u9650\uff1b\uff08\u4e34\u65f6\u8868\u4f1a\u5728\u8fde\u63a5\u5173\u95ed\u65f6\u88ab\u5220\u6389\u3002\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u6570\u636e\u5e93\u6709\u89c6\u56fe\u6216\u89e6\u53d1\u5668\uff0c\u5219\u9700\u8981 ",(0,n.kt)("strong",{parentName:"li"},"CREATE VIEW")," \u548c ",(0,n.kt)("strong",{parentName:"li"},"TRIGGER")," \u6743\u9650\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'admin_restore'@'localhost' IDENTIFIED BY 'different_pwd_456';\n\nGRANT INSERT, LOCK TABLES, CREATE, CREATE TEMPORARY TABLES, INDEX, ALTER\nON rookery.* TO 'admin_restore'@'localhost';\n\nGRANT INSERT, LOCK TABLES, CREATE, CREATE TEMPORARY TABLES, INDEX, ALTER\nON birdwatchers.* TO 'admin_restore'@'localhost';\n")),(0,n.kt)("h2",{id:"\u5907\u4efd\u548c\u6062\u590d"},"\u5907\u4efd\u548c\u6062\u590d"),(0,n.kt)("h3",{id:"\u5907\u4efd\u6240\u6709\u6570\u636e\u5e93"},"\u5907\u4efd\u6240\u6709\u6570\u636e\u5e93"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"mysqldump --user=admin_backup \\\n--password --lock-all-tables\n--all-databases > /data/backups/all-dbs.sql\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"--user=admin_backup")," : \u8ba9 ",(0,n.kt)("strong",{parentName:"li"},"mysqldump")," \u4ee5 ",(0,n.kt)("strong",{parentName:"li"},"admin_backup")," \u8d26\u53f7\u4e0e MySQL \u670d\u52a1\u5668\u8fdb\u884c\u4ea4\u4e92\uff1b "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"--password")," : \u8ba9 ",(0,n.kt)("strong",{parentName:"li"},"mysqldump")," \u5728\u4e0b\u4e00\u884c\u5f39\u51fa\u8f93\u5165\u5bc6\u7801\u7684\u63d0\u793a\u7b26\u3002\u5b83\u7684\u6548\u679c\u5982\u540c mysql\uff1b\u5982\u679c\u8fd9\u4e2a\u5907\u4efd\u547d\n\u4ee4\u8981\u5199\u5728\u8ba9 ",(0,n.kt)("strong",{parentName:"li"},"cron")," \u6267\u884c\u7684 ",(0,n.kt)("strong",{parentName:"li"},"shell")," \u811a\u672c\u4e2d\uff0c\u90a3\u8fd9\u4e2a\u9009\u9879\u5c31\u8981\u5199\u6210 ",(0,n.kt)("strong",{parentName:"li"},"--password=my_pwd"),"\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"--lock-all-tables")," : \u5728\u505a\u5907\u4efd\u524d\uff0c\u5148\u8ba9 MySQL \u9501\u4f4f\u6240\u6709\u8868\uff0c\u7136\u540e\u76f4\u5230\u5907\u4efd\u5b8c\u6210\u624d\u89e3\u9501\uff1b\u5bf9\u4e8e\u7e41\u5fd9\u7684\u6570\u636e\u5e93\n\u6765\u8bf4\uff0c\u957f\u65f6\u95f4\u9501\u4f4f\u6240\u6709\u8868\u4f1a\u6709\u5f88\u5927\u5f71\u54cd\uff1b"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"--all-databases")," : \u5bfc\u51fa\u6240\u6709\u6570\u636e\u5e93\u3002")),(0,n.kt)("h3",{id:"\u5907\u4efd\u6307\u5b9a\u7684\u6570\u636e\u5e93"},"\u5907\u4efd\u6307\u5b9a\u7684\u6570\u636e\u5e93"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"mysqldump --user=admin_backup --password --lock-tables --no-tablespaces \\\n--verbose --databases rookery > rookery.sql\n")),(0,n.kt)("p",null,"\u5982\u679c\u53ea\u60f3\u5907\u4efd\u67d0\u4e2a\u6570\u636e\u5e93\u7684\u7ed3\u6784\uff0c\u800c\u4e0d\u9700\u8981\u5907\u4efd\u6570\u636e\uff0c\u90a3\u4e48\u53ef\u4ee5\u518d\u5e26\u4e0a ",(0,n.kt)("strong",{parentName:"p"},"--no-data"),"\u3002\u8fd9\u6837\u51fa\u6765\u7684 ",(0,n.kt)("strong",{parentName:"p"},"dump")," \u6587\u4ef6\u4fbf\u53ea\u4f1a\u6709\u6570\u636e\u5e93\u548c\u8868\u7684\u7ed3\u6784\uff0c\u800c\u6ca1\u6709\u4efb\u4f55\u6570\u636e\u3002"),(0,n.kt)("h3",{id:"\u5907\u4efd\u591a\u4e2a\u6570\u636e\u5e93"},"\u5907\u4efd\u591a\u4e2a\u6570\u636e\u5e93"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"mysqldump --user=admin_backup --password --lock-tables --no-tablespaces \\\n--databases rookery birdwatchers > rookery-birdwatchers.sql\n")),(0,n.kt)("h3",{id:"\u521b\u5efa\u5907\u4efd\u811a\u672c"},"\u521b\u5efa\u5907\u4efd\u811a\u672c*"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\nmy_user='admin_back'\nmy_pwd='my_silly_password'\ndb1='rookery'\ndb2='birdwatchers'\ndate_today=$(date +%Y-%m-%d)\nbackup_dir='/data/backup/'\ndump_file=$db1-$db2-$date_today'.sql'\n/usr/bin/mysqldump --user=$my_usr --password=$my_pwd --lock-tables --no-tablespaces \\\n--databases $db1 $db2 > $backup_dir$dump_file\nexit\n")),(0,n.kt)("h2",{id:"\u6062\u590d\u5907\u4efd"},"\u6062\u590d\u5907\u4efd"),(0,n.kt)("h3",{id:"\u6062\u590d\u6570\u636e\u5e93"},"\u6062\u590d\u6570\u636e\u5e93"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"mysql --user=admin_restore --password < rookery.sql\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0a\u662f\u5728\u547d\u4ee4\u884c\u4e2d\u7528 ",(0,n.kt)("strong",{parentName:"p"},"mysql")," \u6267\u884c ",(0,n.kt)("strong",{parentName:"p"},"rookery.sql")," \u91cc\u7684\u8bed\u53e5\u3002")),(0,n.kt)("h2",{id:"docker-mysqldump"},"docker mysqldump"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"# Backup\ndocker exec CONTAINER /usr/bin/mysqldump -u root --password=root DATABASE > backup.sql\n\n# Restore\ncat backup.sql | docker exec -i CONTAINER /usr/bin/mysql -u root --password=root DATABASE\n")))}u.isMDXComponent=!0}}]);