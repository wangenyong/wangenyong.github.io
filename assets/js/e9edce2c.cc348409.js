"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6904],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},i=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),m=d(a),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(k,o(o({ref:e},i),{},{components:a})):n.createElement(k,o({ref:e},i))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[m]="string"==typeof t?t:r,o[1]=p;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2060:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1,id:"hdfs-command",title:"HDFS \u5e38\u7528\u547d\u4ee4"},o=void 0,p={unversionedId:"bigdata/hdfs-command",id:"bigdata/hdfs-command",title:"HDFS \u5e38\u7528\u547d\u4ee4",description:"\u57fa\u672c\u8bed\u6cd5",source:"@site/docs/bigdata/hdfs-command.md",sourceDirName:"bigdata",slug:"/bigdata/hdfs-command",permalink:"/docs/bigdata/hdfs-command",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/bigdata/hdfs-command.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"hdfs-command",title:"HDFS \u5e38\u7528\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"\u5165\u95e8\u6559\u7a0b",permalink:"/docs/docker/docker-overview"},next:{title:"spark RDD",permalink:"/docs/bigdata/spark-RDD"}},s={},d=[{value:"\u57fa\u672c\u8bed\u6cd5",id:"\u57fa\u672c\u8bed\u6cd5",level:2},{value:"\u4e0a\u4f20",id:"\u4e0a\u4f20",level:2},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:2},{value:"\u6587\u4ef6\u64cd\u4f5c",id:"\u6587\u4ef6\u64cd\u4f5c",level:2}],i={toc:d},m="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u57fa\u672c\u8bed\u6cd5"},"\u57fa\u672c\u8bed\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hadoop fs command\nhdfs dfs command\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u603b\u7684\u6765\u8bf4\uff0c",(0,r.kt)("strong",{parentName:"p"},"hdfs")," \u547d\u4ee4\u548c ",(0,r.kt)("strong",{parentName:"p"},"Linux")," \u547d\u4ee4\u975e\u5e38\u76f8\u4f3c\uff0c\u4f8b\u5982 ",(0,r.kt)("strong",{parentName:"p"},"ls")," \u3001 ",(0,r.kt)("strong",{parentName:"p"},"mkdir")," \u7b49\u3002")),(0,r.kt)("h2",{id:"\u4e0a\u4f20"},"\u4e0a\u4f20"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-moveFromLocal")," \uff1a\u4ece\u672c\u5730\u526a\u5207\u7c98\u8d34\u5230HDFS")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfs  -moveFromLocal  ./data1.txt /data\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-copyFromLocal")," \uff1a\u4ece\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4e2d\u62f7\u8d1d\u6587\u4ef6\u5230HDFS\u8def\u5f84\u53bb")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfs -copyFromLocal data2.txt /data\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5b9e\u9645\u4e2d\u66f4\u4e60\u60ef\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"-put")," \uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfs -put data2.txt /data\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-appendToFile")," \uff1a\u8ffd\u52a0\u4e00\u4e2a\u6587\u4ef6\u5230\u5df2\u7ecf\u5b58\u5728\u7684\u6587\u4ef6\u672b\u5c3e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfs -appendToFile data2.txt /sanguo/data1.txt\n")),(0,r.kt)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-copyToLocal")," \uff1a\u4eceHDFS\u62f7\u8d1d\u5230\u672c\u5730")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfs -copyToLocal /data/data1.txt ./\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5b9e\u9645\u66f4\u4e60\u60ef\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"-get")," :"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfs -get /data/data1.txt ./\n"))),(0,r.kt)("h2",{id:"\u6587\u4ef6\u64cd\u4f5c"},"\u6587\u4ef6\u64cd\u4f5c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-ls")," : \u663e\u793a\u76ee\u5f55\u4fe1\u606f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfs -ls /data\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-cat")," \uff1a\u663e\u793a\u6587\u4ef6\u5185\u5bb9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfs -cat /data/data1.txt\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-chgrp\u3001-chmod\u3001-chown")," \uff1aLinux\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u7528\u6cd5\u4e00\u6837\uff0c\u4fee\u6539\u6587\u4ef6\u6240\u5c5e\u6743\u9650")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfs -chmod 777 /data/data1.txt\nhdfs dfs -chown hadoop:hadoop /data/data2.txt\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-mkdir")," \uff1a\u521b\u5efa\u8def\u5f84")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfs -mkdir /data\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-cp")," \uff1a\u4eceHDFS\u7684\u4e00\u4e2a\u8def\u5f84\u62f7\u8d1d\u5230HDFS\u7684\u53e6\u4e00\u4e2a\u8def\u5f84")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfs -cp /data/data1.txt /tmp\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-mv")," \uff1a\u5728HDFS\u76ee\u5f55\u4e2d\u79fb\u52a8\u6587\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfs -mv /data/data1.txt /tmp\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-tail")," \uff1a\u663e\u793a\u4e00\u4e2a\u6587\u4ef6\u7684\u672b\u5c3e1kb\u7684\u6570\u636e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfs -tail /data/data1.txt\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-rm")," \uff1a\u5220\u9664\u6587\u4ef6\u6216\u6587\u4ef6\u5939")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfs -rm /data/data1.txt\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-rm -r")," \uff1a\u9012\u5f52\u5220\u9664\u76ee\u5f55\u53ca\u76ee\u5f55\u91cc\u9762\u5185\u5bb9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfs -rm -r /data\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-du")," :  \u7edf\u8ba1\u6587\u4ef6\u5939\u7684\u5927\u5c0f\u4fe1\u606f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"hdfs dfs -du -s -h /data\n")))}c.isMDXComponent=!0}}]);