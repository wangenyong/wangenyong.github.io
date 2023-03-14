"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8050],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),u=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return l.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return t?l.createElement(g,i(i({ref:n},s),{},{components:t})):l.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=t(7462),a=(t(7294),t(3905));const r={sidebar_position:3,id:"vue-multi-page",title:"Vue\u914d\u7f6e\u591a\u9875\u9762"},i=void 0,o={unversionedId:"front/vue-multi-page",id:"front/vue-multi-page",title:"Vue\u914d\u7f6e\u591a\u9875\u9762",description:"vue vue-cli",source:"@site/docs/front/vue-multi-page.md",sourceDirName:"front",slug:"/front/vue-multi-page",permalink:"/docs/front/vue-multi-page",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/front/vue-multi-page.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"vue-multi-page",title:"Vue\u914d\u7f6e\u591a\u9875\u9762"},sidebar:"tutorialSidebar",previous:{title:"Nvm\u4f7f\u7528",permalink:"/docs/front/nvm-usage"}},p={},u=[{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:2},{value:"\u591a\u9875\u9762\u914d\u7f6e",id:"\u591a\u9875\u9762\u914d\u7f6e",level:2},{value:"\u6a21\u677f\u914d\u7f6e",id:"\u6a21\u677f\u914d\u7f6e",level:3},{value:"\u6e90\u6587\u4ef6\u914d\u7f6e",id:"\u6e90\u6587\u4ef6\u914d\u7f6e",level:3},{value:"\u9879\u76ee\u914d\u7f6e",id:"\u9879\u76ee\u914d\u7f6e",level:3}],s={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Vue-v2.0-blue",alt:"vue"})," ",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/VueCLI-v4.5.12-blue",alt:"vue-cli"})),(0,a.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ vue create multi_pages\n")),(0,a.kt)("p",null,"\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Default ([Vue 2] babel, eslint)"),"\u3002"),(0,a.kt)("p",null,"\u67e5\u770b\u9ed8\u8ba4\u7684\u9879\u76ee\u76ee\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ tree -I "node_modules|dist"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 babel.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n\u2502\xa0\xa0 \u251c\u2500\u2500 favicon.ico\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.html\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 App.vue\n\u2502\xa0\xa0 \u251c\u2500\u2500 assets\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 logo.png\n\u2502\xa0\xa0 \u251c\u2500\u2500 components\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HelloWorld.vue\n\u2502\xa0\xa0 \u2514\u2500\u2500 main.js\n\u2514\u2500\u2500 yarn.lock\n")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u9879\u76ee\u662f\u4e00\u4e2a\u5355\u9875\u9762\u5e94\u7528\u3002"),(0,a.kt)("h2",{id:"\u591a\u9875\u9762\u914d\u7f6e"},"\u591a\u9875\u9762\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728\u6b64\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u989d\u5916\u914d\u7f6e\u4e00\u4e2a\u5355\u72ec\u767b\u5f55\u9875\u9762\u3002"),(0,a.kt)("h3",{id:"\u6a21\u677f\u914d\u7f6e"},"\u6a21\u677f\u914d\u7f6e"),(0,a.kt)("p",null,"\u9996\u5148\u5728\u6a21\u677f\u76ee\u5f55\u521b\u5efa\u767b\u5f55\u6a21\u677f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"public\n\u251c\u2500\u2500 favicon.ico\n\u251c\u2500\u2500 index.html\n\u2514\u2500\u2500 login.html\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u76f4\u63a5\u590d\u5236",(0,a.kt)("inlineCode",{parentName:"p"},"index.html"),"\uff0c\u91cd\u547d\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"login.html"),"\u3002"),(0,a.kt)("h3",{id:"\u6e90\u6587\u4ef6\u914d\u7f6e"},"\u6e90\u6587\u4ef6\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src"),"\u76ee\u5f55\u4e2d\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"pages"),"\u76ee\u5f55\uff0c\u7136\u540e\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"pages"),"\u76ee\u5f55\u4e2d\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},"index"),"\u76ee\u5f55\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"login"),"\u76ee\u5f55\uff0c\u6700\u540e\u5c06\u539f",(0,a.kt)("inlineCode",{parentName:"p"},"src"),"\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"App.vue"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"main.js"),"\u5206\u522b\u62f7\u8d1d\u81f3",(0,a.kt)("inlineCode",{parentName:"p"},"index"),"\u76ee\u5f55\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"login"),"\u76ee\u5f55\uff0c\u6700\u7ec8\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"src\n\u251c\u2500\u2500 assets\n\u2502\xa0\xa0 \u2514\u2500\u2500 logo.png\n\u251c\u2500\u2500 components\n\u2502\xa0\xa0 \u2514\u2500\u2500 HelloWorld.vue\n\u2514\u2500\u2500 pages\n    \u251c\u2500\u2500 index\n    \u2502\xa0\xa0 \u251c\u2500\u2500 App.vue\n    \u2502\xa0\xa0 \u2514\u2500\u2500 main.js\n    \u2514\u2500\u2500 login\n        \u251c\u2500\u2500 App.vue\n        \u2514\u2500\u2500 main.js\n")),(0,a.kt)("h3",{id:"\u9879\u76ee\u914d\u7f6e"},"\u9879\u76ee\u914d\u7f6e"),(0,a.kt)("p",null,"\u5bf9\u6587\u4ef6\u76ee\u5f55\u6539\u9020\u5b8c\u6210\u540e\uff0c\u6700\u91cd\u8981\u7684\u4e00\u6b65\u662f\u5bf9\u9879\u76ee\u914d\u7f6e\u8fdb\u884c\u4fee\u6539\uff0c\u8c03\u6574\u4e3a\u591a\u9875\u9762\u6253\u5305\u3002"),(0,a.kt)("p",null,"\u521b\u5efa\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"vue.config.js"),"\u5e76\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  pages: {\n    index: {\n      // index\u9875\u9762\u7684\u5165\u53e3\n      entry: 'src/pages/index/main.js',\n      // index\u9875\u9762\u6a21\u677f\u6765\u6e90\n      template: 'public/index.html',\n      // index\u9875\u9762\u6700\u7ec8\u6253\u5305\u5728dist\u76ee\u5f55\u4e0b\u8f93\u51fa\u6587\u4ef6\u540d\n      filename: 'index.html',\n      // \u5f53\u4f7f\u7528 title \u9009\u9879\u65f6\uff0ctemplate \u4e2d\u7684 title \u6807\u7b7e\u9700\u8981\u662f <title><%= htmlWebpackPlugin.options.title %></title>\n      title: 'index'\n    },\n    login: {\n      // login\u9875\u9762\u7684\u5165\u53e3\n      entry: 'src/pages/login/main.js',\n      // login\u9875\u9762\u6a21\u677f\u6765\u6e90\n      template: 'public/login.html',\n      // login\u9875\u9762\u6700\u7ec8\u6253\u5305\u5728dist\u76ee\u5f55\u4e0b\u8f93\u51fa\u6587\u4ef6\u540d\n      filename: 'login.html',\n      title: 'login'\n    }\n  }\n}\n")),(0,a.kt)("p",null,"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u5206\u522b\u5bf9\u9ed8\u8ba4\u9875\u9762\u548c\u767b\u5f55\u9875\u9762\u7684\u6253\u5305\u5165\u53e3\u6587\u4ef6\u3001\u6a21\u677f\u9875\u9762\u4ee5\u53ca\u6253\u5305\u540e\u7684\u8f93\u51fa\u6587\u4ef6\u8fdb\u884c\u914d\u7f6e\uff0c\u5177\u4f53\u53ef\u53c2\u8003\u914d\u7f6e\u9879\u4e2d\u7684\u6ce8\u91ca\u3002"),(0,a.kt)("p",null,"\u81f3\u6b64\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Vue")," \u9879\u76ee\u7684\u591a\u9875\u9762\u914d\u7f6e\u5df2\u7ecf\u5b8c\u6210\uff0c\u6700\u7ec8\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 babel.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 public\n\u2502\xa0\xa0 \u251c\u2500\u2500 favicon.ico\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.html\n\u2502\xa0\xa0 \u2514\u2500\u2500 login.html\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 assets\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 logo.png\n\u2502\xa0\xa0 \u251c\u2500\u2500 components\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 HelloWorld.vue\n\u2502\xa0\xa0 \u2514\u2500\u2500 pages\n\u2502\xa0\xa0     \u251c\u2500\u2500 index\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u251c\u2500\u2500 App.vue\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 main.js\n\u2502\xa0\xa0     \u2514\u2500\u2500 login\n\u2502\xa0\xa0         \u251c\u2500\u2500 App.vue\n\u2502\xa0\xa0         \u2514\u2500\u2500 main.js\n\u251c\u2500\u2500 vue.config.js\n\u2514\u2500\u2500 yarn.lock\n")))}m.isMDXComponent=!0}}]);