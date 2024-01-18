"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,l(l({ref:t},g),{},{components:n})):a.createElement(k,l({ref:t},g))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,id:"git-command",title:"Git\u5e38\u7528\u547d\u4ee4"},l=void 0,s={unversionedId:"basics/git-command",id:"basics/git-command",title:"Git\u5e38\u7528\u547d\u4ee4",description:"git \u8bbe\u7f6e\u548c\u53d6\u6d88\u4ee3\u7406",source:"@site/docs/basics/git-command.md",sourceDirName:"basics",slug:"/basics/git-command",permalink:"/docs/basics/git-command",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/basics/git-command.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"git-command",title:"Git\u5e38\u7528\u547d\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"\u8bba\u8bed \xb7 \u5b66\u800c",permalink:"/docs/intro"},next:{title:"Markdown\u5165\u95e8\u6559\u7a0b",permalink:"/docs/basics/markdown-basic"}},o={},p=[{value:"git \u8bbe\u7f6e\u548c\u53d6\u6d88\u4ee3\u7406",id:"git-\u8bbe\u7f6e\u548c\u53d6\u6d88\u4ee3\u7406",level:2},{value:"Git-server\u914d\u7f6e",id:"git-server\u914d\u7f6e",level:2},{value:"Git-client\u914d\u7f6e",id:"git-client\u914d\u7f6e",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u5e38\u7528\u547d\u4ee4\u4ecb\u7ecd",id:"\u5e38\u7528\u547d\u4ee4\u4ecb\u7ecd",level:2},{value:".gitignore\u7684\u4f7f\u7528",id:"gitignore\u7684\u4f7f\u7528",level:2},{value:"\u5408\u5e76\u65f6\u652f\u6301\u5ffd\u7565\u90e8\u5206\u6587\u4ef6",id:"\u5408\u5e76\u65f6\u652f\u6301\u5ffd\u7565\u90e8\u5206\u6587\u4ef6",level:2}],g={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"git-\u8bbe\u7f6e\u548c\u53d6\u6d88\u4ee3\u7406"},"git \u8bbe\u7f6e\u548c\u53d6\u6d88\u4ee3\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global https.proxy http://127.0.0.1:1080\ngit config --global https.proxy https://127.0.0.1:1080\ngit config --global --unset http.proxy\ngit config --global --unset https.proxy\n")),(0,r.kt)("h2",{id:"git-server\u914d\u7f6e"},"Git-server\u914d\u7f6e"),(0,r.kt)("p",null,"\u5efa\u7acb\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},"git")," \u7528\u6237\u8d1f\u8d23 ",(0,r.kt)("strong",{parentName:"p"},"Git")," \u7684\u7ba1\u7406\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ useradd -m -s /bin/bash git\n")),(0,r.kt)("p",null,"\u5efa\u7acb ",(0,r.kt)("strong",{parentName:"p"},"Git")," \u4ed3\u5e93\u76ee\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir -p /git/repos\n$ chown git:git /git/repos\n")),(0,r.kt)("h2",{id:"git-client\u914d\u7f6e"},"Git-client\u914d\u7f6e"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("strong",{parentName:"p"},"git-client")," \u673a\u5668\u4e0a\u4e3a\u5f00\u53d1\u8005\u521b\u5efa\u5e10\u6237\uff0c",(0,r.kt)("strong",{parentName:"p"},"git-client1")," \u4e0a\u5efa\u7acb\u7528\u6237 ",(0,r.kt)("strong",{parentName:"p"},"user1"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"git-client2")," \u4e0a\u5efa\u7acb\u7528\u6237 ",(0,r.kt)("strong",{parentName:"p"},"user2"),"\uff0c\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ useradd -m -s /bin/bash user1\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"user1")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"user2")," \u90fd\u901a\u8fc7 ",(0,r.kt)("strong",{parentName:"p"},"ssh")," \u5171\u7528 ",(0,r.kt)("strong",{parentName:"p"},"git-server")," \u4e0a\u7684 ",(0,r.kt)("strong",{parentName:"p"},"git")," \u5e10\u6237\uff0c\u8fd9\u662f\u6700\u7b80\u5355\u7684 ",(0,r.kt)("strong",{parentName:"p"},"ssh")," \u4f7f\u7528\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\uff0c",(0,r.kt)("strong",{parentName:"p"},"user1")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"user2")," \u90fd\u5c06\u81ea\u5df1\u7684\u516c\u94a5\u653e\u5230 ",(0,r.kt)("strong",{parentName:"p"},"git-server")," \u4e0a\uff0c\u5c31\u4e0d\u7528\u6bcf\u6b21\u8f93\u5165\u5bc6\u7801\u4e86\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ ssh-keygen\n$ sh-copy-id git@git-server\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("strong",{parentName:"p"},"git-server")," \u4e0a\u521b\u5efa\u4e00\u4e2a\u88f8\u7248\u672c\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git init --bare /git/repos/test.git\n")),(0,r.kt)("p",null,"\u8fd9\u65f6 ",(0,r.kt)("strong",{parentName:"p"},"test.git")," \u662f\u4e00\u4e2a\u7a7a\u7684\u7248\u672c\u5e93\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u5b83 ",(0,r.kt)("strong",{parentName:"p"},"clone")," \u5230\u672c\u5730\uff0c\u6216\u8005\u4e5f\u53ef\u4ee5\u5c06\u672c\u5730\u5df2\u7ecf\u521d\u59cb\u5316\u7684 ",(0,r.kt)("strong",{parentName:"p"},"git")," \u63a8\u9001\u5230\u8be5\u7248\u672c\u5e93\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git init\n$ git remote add orgin git@git-server:/git/repos/test.git\n$ git push origin master\n")),(0,r.kt)("p",null,"\u5f53\u9700\u8981\u514b\u9686\u7248\u672c\u5e93\u65f6\u505a\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone git@git-server:/git/repos/test.git\n")),(0,r.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4\u4ecb\u7ecd"},"\u5e38\u7528\u547d\u4ee4\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u914d\u7f6e ",(0,r.kt)("strong",{parentName:"p"},"Git")," \u57fa\u672c\u4fe1\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ git config --global user.name "Your Name"\n$ git config --global user.email "email@example.com"\n\n$ git config --global -l\n')),(0,r.kt)("p",null,"\u521b\u5efa\u65b0\u7684 ",(0,r.kt)("strong",{parentName:"p"},"Git")," \u4ed3\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git init\n")),(0,r.kt)("p",null,"\u68c0\u51fa\u4ed3\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone /path/to/repository\n$ git clone username@host:/path/to/repository\n")),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e0e\u63d0\u4ea4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ git add <filename>\n$ git add *\n\n$ git commit -m "\u4ee3\u7801\u63d0\u4ea4\u4fe1\u606f"\n')),(0,r.kt)("p",null,"\u63a8\u9001\u6539\u52a8\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git remote add origin <server>\n$ git push origin master\n")),(0,r.kt)("p",null,"\u5206\u652f\u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"//\u521b\u5efa\u4e00\u4e2a\u65b0\u5206\u652f\n$ git branch feature_x\n//\u521b\u5efa\u4e00\u4e2a\u53eb\u505a\u201cfeature_x\u201d\u7684\u5206\u652f\uff0c\u5e76\u5207\u6362\u8fc7\u53bb\n$ git checkout -b feature_x\n//\u5207\u6362\u56de\u4e3b\u5206\u652f\uff1a\n$ git checkout master\n//\u67e5\u770b\u5206\u652f\n$ git branch -l\n//\u5220\u9664\u5206\u652f\n$ git branch -d feature_x\n")),(0,r.kt)("p",null,"\u66f4\u65b0\u4e0e\u5408\u5e76\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"//\u83b7\u53d6\u5e76\u5408\u5e76\u8fdc\u7aef\u7684\u6539\u52a8\n$ git pull\n//\u5408\u5e76\u5176\u4ed6\u5206\u652f\u5230\u4f60\u7684\u5f53\u524d\u5206\u652f\n$ git merge <branch>\n")),(0,r.kt)("p",null,"\u6807\u7b7e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'//\u521b\u5efa\u6807\u7b7e\n$ git tag -a v1.0 -m "Version 1.0"\n//\u63a8\u9001tag\n$ git push origin v1.0\n')),(0,r.kt)("p",null,"\u64a4\u9500\u672c\u5730\u6539\u52a8\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git checkout -- <filename>\n$ git reset --hard commitId\n")),(0,r.kt)("h2",{id:"gitignore\u7684\u4f7f\u7528"},".gitignore\u7684\u4f7f\u7528"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".gitignore")," \u53ea\u80fd\u5ffd\u7565\u90a3\u4e9b\u539f\u6765\u6ca1\u6709\u88ab ",(0,r.kt)("strong",{parentName:"p"},"track")," \u7684\u6587\u4ef6\uff0c\u5982\u679c\u67d0\u4e9b\u6587\u4ef6\u5df2\u7ecf\u88ab\u7eb3\u5165\u4e86\u7248\u672c\u7ba1\u7406\u4e2d\uff0c\u5219\u4fee\u6539 ",(0,r.kt)("strong",{parentName:"p"},".gitignore")," \u662f\u65e0\u6548\u7684\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u80fd\u91cd\u65b0\u5ffd\u7565\u90a3\u4e9b\u5df2\u7ecf\u88ab ",(0,r.kt)("strong",{parentName:"p"},"track")," \u7684\u6587\u4ef6\uff0c\u4f8b\u5982\u505c\u6b62 ",(0,r.kt)("strong",{parentName:"p"},"tracking")," \u4e00\u4e2a\u6587\u4ef6\u4f46\u662f\u53c8\u4e0d\u4ece\u4ed3\u5e93\u4e2d\u5220\u9664\u5b83\u3002\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git rm --cached filename\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u8fd9\u4e2a\u547d\u4ee4\u7528\u4e8e\u5220\u9664\u5355\u4e2a\u7f13\u5b58\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u5220\u9664\u7f13\u5b58\u76ee\u5f55\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git rm -rf --cached foldername\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5ffd\u7565\u7684\u6587\u4ef6\u6216\u8005\u6587\u4ef6\u5939\u6bd4\u8f83\u591a\uff0c\u65e0\u6cd5\u4e00\u4e2a\u4e00\u4e2a\u7684\u5220\u9664\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u91cd\u7f6e\u6240\u6709\u7f13\u5b58\uff0c\u63d0\u4ea4\u540e\u5237\u65b0\u5ffd\u7565\u6587\u4ef6(\u4e0b\u9762\u8fd9\u79cd\u65b9\u6cd5\u7ecf\u8fc7\u6d4b\u8bd5,\u53ef\u884c)"),"\n\u8fd0\u884c\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git rm -r --cached .\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u8fd9\u4e2a\u547d\u4ee4\u5c06\u4f1a\u79fb\u9664\u6240\u6709\u7684\u7f13\u5b58\u7d22\u5f15\uff0c\u7136\u540e\u8fd0\u884c\u518d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6dfb\u52a0\u6240\u6709\u7684\u6587\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ git add .\n$ git commit -m \u201c.gitignore is now working\u201d\n")),(0,r.kt)("h2",{id:"\u5408\u5e76\u65f6\u652f\u6301\u5ffd\u7565\u90e8\u5206\u6587\u4ef6"},"\u5408\u5e76\u65f6\u652f\u6301\u5ffd\u7565\u90e8\u5206\u6587\u4ef6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b9e\u73b0 dev \u5206\u652f\u6839\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6 demo.txt\uff0c\u4e0d\u5408\u5e76\u5230 master \u5206\u652f\u4e0a\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u5b9e\u73b0 dev \u5206\u652f\u6587\u4ef6 /common/src/main/resources/demo.yml\uff0c\u4e0d\u5408\u5e76\u5230 master \u5206\u652f\u4e0a\uff1b")),(0,r.kt)("p",null,"\u9996\u5148\u5728\u6839\u76ee\u5f55\u4e0b\u8fd0\u884c\u547d\u4ee4\uff0c\u542f\u7528\u5ffd\u7565\u6587\u4ef6\u8bbe\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git config merge.ours.driver true\n")),(0,r.kt)("p",null,"\u5728 dev \u5206\u652f\u4e0a\u5efa\u7acb .gitattributes \u6587\u4ef6\u5e76\u63d0\u4ea4\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"demo.txt merge=ours\n/common/src/main/resources/demo.yml merge=ours\n")),(0,r.kt)("p",null,"\u5207\u6362\u5230 master \u5206\u652f\u4e0a\uff0c\u6267\u884c merge \u64cd\u4f5c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout master\ngit merge dev\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c dev \u7684\u67d0\u4e2a\u6587\u4ef6\u4fee\u6539\u4e0d\u9700\u8981\u5408\u5e76\u5230 master \uff0c\u5219 master \u7684\u6587\u4ef6\u4fee\u6539\u65f6\u95f4\u5fc5\u987b\u5728 dev \u7684\u4fee\u6539\u65f6\u95f4\u4e4b\u540e\u3002\n\u5728\u793a\u4f8b\u4e2d\uff0c\u9700\u8981\u5148\u4fee\u6539 dev \u5206\u652f\u7684\u6587\u4ef6\u5e76\u63d0\u4ea4\uff0c\u518d\u4fee\u6539 master \u7684\u6587\u4ef6\u5e76\u63d0\u4ea4\uff0c\u7136\u540e\u5408\u5e76\u3002")))}m.isMDXComponent=!0}}]);