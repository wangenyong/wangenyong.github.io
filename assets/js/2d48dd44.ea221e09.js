"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4015],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(t),d=i,m=s["".concat(c,".").concat(d)]||s[d]||g[d]||a;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},864:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const a={title:"Nginx \u914d\u7f6e"},l=void 0,o={unversionedId:"linux/nginx-config",id:"linux/nginx-config",title:"Nginx \u914d\u7f6e",description:"\u5e38\u7528\u547d\u4ee4",source:"@site/docs/linux/nginx-config.md",sourceDirName:"linux",slug:"/linux/nginx-config",permalink:"/docs/linux/nginx-config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/linux/nginx-config.md",tags:[],version:"current",frontMatter:{title:"Nginx \u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"Iptables\u4f7f\u7528",permalink:"/docs/linux/iptables-usage"},next:{title:"ulimit \u4fee\u6539",permalink:"/docs/linux/user-ulimit"}},c={},u=[{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u67e5\u770b\u7248\u672c",id:"\u67e5\u770b\u7248\u672c",level:3},{value:"\u5173\u95ed Nginx",id:"\u5173\u95ed-nginx",level:3},{value:"\u91cd\u65b0\u52a0\u8f7d Nginx",id:"\u91cd\u65b0\u52a0\u8f7d-nginx",level:3},{value:"Nginx \u914d\u7f6e\u6587\u4ef6",id:"nginx-\u914d\u7f6e\u6587\u4ef6",level:2},{value:"location \u6307\u4ee4\u8bf4\u660e",id:"location-\u6307\u4ee4\u8bf4\u660e",level:3}],p={toc:u},s="wrapper";function g(e){let{components:n,...t}=e;return(0,i.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,i.kt)("h3",{id:"\u67e5\u770b\u7248\u672c"},"\u67e5\u770b\u7248\u672c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nginx -v\n")),(0,i.kt)("h3",{id:"\u5173\u95ed-nginx"},"\u5173\u95ed Nginx"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nginx -s stop\n")),(0,i.kt)("h3",{id:"\u91cd\u65b0\u52a0\u8f7d-nginx"},"\u91cd\u65b0\u52a0\u8f7d Nginx"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nginx -s reload\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"\u5e38\u7528\u4e8e\u4fee\u6539\u4e86\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u4e0d\u7528\u91cd\u542f Nginx \u4e5f\u80fd\u4f7f\u914d\u7f6e\u751f\u6548")),(0,i.kt)("h2",{id:"nginx-\u914d\u7f6e\u6587\u4ef6"},"Nginx \u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf")),(0,i.kt)("h3",{id:"location-\u6307\u4ee4\u8bf4\u660e"},"location \u6307\u4ee4\u8bf4\u660e"),(0,i.kt)("p",null,"\u8be5\u6307\u4ee4\u7528\u6237\u5339\u914d URL\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"location [ = | ~ | ~* | ^~ ] uri {\n\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"=\uff1a\u7528\u4e8e\u4e0d\u542b\u6b63\u5219\u8868\u8fbe\u5f0f\u7684 uri\uff0c\u8981\u6c42\u4e25\u683c\u5339\u914d\uff1b"),(0,i.kt)("li",{parentName:"ul"},"~\uff1a\u7528\u4e8e\u8868\u793a uri \u5305\u542b\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5e76\u4e14\u533a\u5206\u5927\u5c0f\u5199\uff1b"),(0,i.kt)("li",{parentName:"ul"},"~*\uff1a\u7528\u4e8e\u8868\u793a uri \u5305\u542b\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5e76\u4e14\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff1b")))}g.isMDXComponent=!0}}]);