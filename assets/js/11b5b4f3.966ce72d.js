"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1114],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>N});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},o=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,p=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=l,N=u["".concat(s,".").concat(m)]||u[m]||k[m]||p;return a?n.createElement(N,r(r({ref:t},o),{},{components:a})):n.createElement(N,r({ref:t},o))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=a.length,r=new Array(p);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,r[1]=i;for(var d=2;d<p;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const p={id:"iptables-usage",title:"Iptables\u4f7f\u7528"},r=void 0,i={unversionedId:"linux/iptables-usage",id:"linux/iptables-usage",title:"Iptables\u4f7f\u7528",description:"centos iptables",source:"@site/docs/linux/iptables-usage.md",sourceDirName:"linux",slug:"/linux/iptables-usage",permalink:"/docs/linux/iptables-usage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/linux/iptables-usage.md",tags:[],version:"current",frontMatter:{id:"iptables-usage",title:"Iptables\u4f7f\u7528"},sidebar:"tutorialSidebar",previous:{title:"\u67e5\u770b Linux Cpu \u4fe1\u606f",permalink:"/docs/linux/cpu-info"},next:{title:"ulimit \u4fee\u6539",permalink:"/docs/linux/user-ulimit"}},s={},d=[{value:"<code>iptables</code>\u57fa\u7840\u4ecb\u7ecd",id:"iptables\u57fa\u7840\u4ecb\u7ecd",level:2},{value:"\u8868",id:"\u8868",level:3},{value:"\u94fe",id:"\u94fe",level:3},{value:"\u89c4\u5219\u5339\u914d",id:"\u89c4\u5219\u5339\u914d",level:3},{value:"\u76ee\u6807",id:"\u76ee\u6807",level:3},{value:"\u5728CentOS7\u4e2d\u4f7f\u7528",id:"\u5728centos7\u4e2d\u4f7f\u7528",level:2},{value:"\u7981\u7528<code>firewalld</code>",id:"\u7981\u7528firewalld",level:3},{value:"\u5b89\u88c5<code>iptables</code>",id:"\u5b89\u88c5iptables",level:3},{value:"\u5b9a\u4e49\u8fc7\u6ee4\u89c4\u5219",id:"\u5b9a\u4e49\u8fc7\u6ee4\u89c4\u5219",level:3},{value:"\u5f00\u542f<code>HTTP\uff08\u7aef\u53e380\uff09</code>\u3001<code>SSH\uff08\u7aef\u53e322\uff09</code>\u548c<code>SSL\uff08443\uff09</code>\u4e09\u4e2a\u670d\u52a1",id:"\u5f00\u542fhttp\u7aef\u53e380ssh\u7aef\u53e322\u548cssl443\u4e09\u4e2a\u670d\u52a1",level:4},{value:"\u6839\u636e\u6e90<code>IP</code>\u5730\u5740\u9650\u5236\u8bbf\u95ee",id:"\u6839\u636e\u6e90ip\u5730\u5740\u9650\u5236\u8bbf\u95ee",level:4},{value:"\u4e22\u5f03\u6240\u6709\u5176\u4ed6\u8bbf\u95ee\u8bf7\u6c42",id:"\u4e22\u5f03\u6240\u6709\u5176\u4ed6\u8bbf\u95ee\u8bf7\u6c42",level:4},{value:"\u5220\u9664\u89c4\u5219",id:"\u5220\u9664\u89c4\u5219",level:4},{value:"\u89c4\u5219\u4fdd\u5b58",id:"\u89c4\u5219\u4fdd\u5b58",level:4},{value:"\u5178\u578b\u8bbe\u7f6e\u811a\u672c\u793a\u4f8b",id:"\u5178\u578b\u8bbe\u7f6e\u811a\u672c\u793a\u4f8b",level:2},{value:"<code>iptables</code>\u64cd\u4f5c\u9009\u9879\u5f52\u7eb3\u8bf4\u660e",id:"iptables\u64cd\u4f5c\u9009\u9879\u5f52\u7eb3\u8bf4\u660e",level:2},{value:"\u67e5\u770b\u9009\u9879",id:"\u67e5\u770b\u9009\u9879",level:3},{value:"\u94fe\u64cd\u4f5c\u9009\u9879",id:"\u94fe\u64cd\u4f5c\u9009\u9879",level:3},{value:"\u89c4\u5219\u9009\u9879",id:"\u89c4\u5219\u9009\u9879",level:3},{value:"\u76ee\u6807\u9009\u9879",id:"\u76ee\u6807\u9009\u9879",level:3},{value:"\u901a\u7528\u9009\u9879",id:"\u901a\u7528\u9009\u9879",level:3},{value:"\u8865\u5145",id:"\u8865\u5145",level:3}],o={toc:d},u="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://ocrtest-1253817761.cos.ap-guangzhou.myqcloud.com/blog/install%20docker%20on%20centos/CentOS-v7.svg",alt:"centos"})," ",(0,l.kt)("img",{parentName:"p",src:"https://ocrtest-1253817761.cos.ap-guangzhou.myqcloud.com/blog/shields/iptables-v1.4.21.svg",alt:"iptables"})),(0,l.kt)("p",null,"\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"iptables"),"\u9632\u706b\u5899\uff0c\u7528\u6237\u53ef\u5bf9\u4e0e",(0,l.kt)("inlineCode",{parentName:"p"},"Linux"),"\u7cfb\u7edf\u8fdb\u884c\u4ea4\u4e92\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"IP"),"\u6570\u636e\u5305\u6267\u884c\u9ad8\u5ea6\u7684\u63a7\u5236\uff0c\u800c\u4e14\u8fd9\u4e00\u63a7\u5236\u662f\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"Linux"),"\u5185\u6838\u4e2d\u5b9e\u73b0\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"iptables"),"\u7b56\u7565\u662f\u7531\u4e00\u7ec4\u6709\u5e8f\u7684\u89c4\u5219\u5efa\u7acb\uff0c\u5b83\u544a\u8bc9\u5185\u6838\u5e94\u5982\u4f55\u5904\u7406\u67d0\u4e9b\u7c7b\u522b\u7684\u6570\u636e\u5305\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"iptables"),"\u89c4\u5219\u5e94\u7528\u4e8e\u4e00\u4e2a\u8868\u4e2d\u7684\u4e00\u4e2a\u94fe\uff0c\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"iptables"),"\u94fe\u662f\u4e00\u4e2a\u89c4\u5219\u96c6\uff0c\u8fd9\u4e9b\u89c4\u5219\u6309\u987a\u5e8f\u4e0e\u5305\u542b\u5171\u540c\u7279\u5f81\u7684\u6570\u636e\u5305\u8fdb\u884c\u6bd4\u8f83\u3002"),(0,l.kt)("h2",{id:"iptables\u57fa\u7840\u4ecb\u7ecd"},(0,l.kt)("inlineCode",{parentName:"h2"},"iptables"),"\u57fa\u7840\u4ecb\u7ecd"),(0,l.kt)("h3",{id:"\u8868"},"\u8868"),(0,l.kt)("p",null,"\u8868\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"iptables"),"\u6784\u5efa\u5757\uff0c\u63cf\u8ff0\u4e86\u5176\u529f\u80fd\u7684\u5927\u7c7b\uff0c\u5982\u5305\u8fc7\u6ee4\u6216\u8005\u7f51\u7edc\u5730\u5740\u8f6c\u6362\uff08NAT\uff09\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"iptables"),"\u4e2d\u5171\u6709\u56db\u4e2a\u8868\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"filter"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"nat"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"mangle"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"raw"),"\uff0c\u8fc7\u6ee4\u89c4\u5219\u5e94\u7528\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"filter"),"\u8868\uff0cNAT\u89c4\u5219\u5e94\u7528\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"nat"),"\u8868\u3002"),(0,l.kt)("h3",{id:"\u94fe"},"\u94fe"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u8868\u90fd\u6709\u81ea\u5df1\u7684\u4e00\u7ec4\u5185\u7f6e\u94fe\uff0c\u5bf9\u6211\u4eec\u6765\u8bf4\uff0c\u6700\u91cd\u8981\u7684\u5185\u7f6e\u94fe\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"filter"),"\u8868\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"INPUT"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"OUTPUT"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"FORWARD"),"\u94fe\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INPUT"),"\uff1a\u5f53\u6d41\u5165\u7684\u6570\u636e\u5305\u6307\u5411\u672c\u5730\u4e3b\u673a\u65f6\uff0c\u5c06\u7ecf\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"INPUT"),"\u94fe\u7684\u68c0\u67e5\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"OUTPUT"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"OUTPUT"),"\u94fe\u7528\u4e8e\u672c\u5730\u4e3b\u673a\u81ea\u8eab\u751f\u6210\u7684\u6570\u636e\u5305\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FORWARD"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"FORWARD"),"\u94fe\u7ba1\u7406\u7ecf\u8fc7",(0,l.kt)("inlineCode",{parentName:"li"},"Linux"),"\u7cfb\u7edf\u8def\u7531\u7684\u6570\u636e\u5305\u3002")),(0,l.kt)("p",null,"\u53e6\u5916\u4e24\u4e2a\u5f88\u91cd\u8981\u7684\u94fe\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"nat"),"\u8868\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"PREROUTING"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"POSTROUTING"),"\u94fe\uff0c\u5206\u522b\u7528\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"IP"),"\u8def\u7531\u4e4b\u524d\u548c\u4e4b\u540e\u4fee\u6539\u6570\u636e\u5305\u7684\u5934\u90e8\u3002"),(0,l.kt)("p",null,"\u4e0b\u56fe\u5c55\u793a\u4e86\u6570\u636e\u5305\u662f\u5982\u4f55\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"nat"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"filter"),"\u8868\u7684\u4e0d\u540c\u94fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://ocrtest-1253817761.cos.ap-guangzhou.myqcloud.com/blog/linux%20iptables/iptables_rules.png",alt:"iptables"})),(0,l.kt)("p",null,"\u7531\u56fe\u53ef\u77e5\uff0c\u4e3a\u4e86\u5b9e\u73b0\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"Linux"),"\u670d\u52a1\u5668\u7684\u8bbf\u95ee\u8fdb\u884c\u63a7\u5236\uff0c\u4e3b\u8981\u5c31\u662f\u9488\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"filter"),"\u8868\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"INPUT"),"\u94fe\u8fdb\u884c\u914d\u7f6e\u7ba1\u7406\u3002"),(0,l.kt)("h3",{id:"\u89c4\u5219\u5339\u914d"},"\u89c4\u5219\u5339\u914d"),(0,l.kt)("p",null,"\u6bcf\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"iptables"),"\u89c4\u5219\u90fd\u5305\u542b\u4e00\u7ec4\u5339\u914d\u4ee5\u53ca\u4e00\u4e2a\u76ee\u6807\uff0c\u540e\u8005\u544a\u8bc9",(0,l.kt)("inlineCode",{parentName:"p"},"iptables"),"\u5bf9\u4e8e\u7b26\u5408\u89c4\u5219\u7684\u6570\u636e\u5305\u5e94\u8be5\u91c7\u53d6\u4ec0\u4e48\u52a8\u4f5c\u3002\u5e38\u89c1\u7684\u5339\u914d\u89c4\u5219\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"--source (-s) \uff1a\u5339\u914d\u6e90",(0,l.kt)("inlineCode",{parentName:"li"},"IP"),"\u5730\u5740\u6216\u8005\u7f51\u7edc"),(0,l.kt)("li",{parentName:"ul"},"--destination (-d)\uff1a\u5339\u914d\u76ee\u6807",(0,l.kt)("inlineCode",{parentName:"li"},"IP"),"\u5730\u5740\u6216\u8005\u7f51\u7edc"),(0,l.kt)("li",{parentName:"ul"},"--destination port (-dport)\uff1a \u5339\u914d\u76ee\u6807\u5730\u5740\u7684\u7aef\u53e3\u53f7"),(0,l.kt)("li",{parentName:"ul"},"--protocol (-p)\uff1a\u5339\u914d\u534f\u8bae"),(0,l.kt)("li",{parentName:"ul"},"--in-interface (-i)\uff1a\u6d41\u5165\u63a5\u53e3\uff08\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"eth0"),"\uff09"),(0,l.kt)("li",{parentName:"ul"},"--out-interface (-o)\uff1a\u6d41\u51fa\u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"--state\uff1a\u5339\u914d\u4e00\u7ec4\u8fde\u63a5\u72b6\u6001"),(0,l.kt)("li",{parentName:"ul"},"--string\uff1a\u5339\u914d\u5e94\u7528\u5c42\u6570\u636e\u5b57\u8282\u5e8f\u5217")),(0,l.kt)("h3",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,l.kt)("p",null,"\u6700\u540e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"iptables"),"\u652f\u6301\u4e00\u7ec4\u76ee\u6807\uff0c\u7528\u4e8e\u5728\u6570\u636e\u5305\u5339\u914d\u4e00\u4e2a\u89c4\u5219\u65f6\u89e6\u53d1\u4e00\u4e2a\u52a8\u4f5c\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ACCEPT\uff1a\u5141\u8bb8\u6570\u636e\u5305\u901a\u8fc7"),(0,l.kt)("li",{parentName:"ul"},"DROP\uff1a\u4e22\u5f03\u6570\u636e\u5305"),(0,l.kt)("li",{parentName:"ul"},"LOG\uff1a\u5c06\u6570\u636e\u5305\u4fe1\u606f\u8bb0\u5f55\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"syslog")),(0,l.kt)("li",{parentName:"ul"},"REJECT\uff1a\u4e22\u5f03\u6570\u636e\u5305\uff0c\u540c\u65f6\u53d1\u9001\u9002\u5f53\u7684\u54cd\u5e94\u62a5\u6587"),(0,l.kt)("li",{parentName:"ul"},"RETURN\uff1a\u5728\u8c03\u7528\u94fe\u4e2d\u7ee7\u7eed\u5904\u7406\u6570\u636e\u5305")),(0,l.kt)("h2",{id:"\u5728centos7\u4e2d\u4f7f\u7528"},"\u5728CentOS7\u4e2d\u4f7f\u7528"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"CentOS7"),"\u4e2d\u9ed8\u8ba4\u4f7f\u7528\u7684\u9632\u706b\u5899\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"firewalld"),"\uff0c\u4e3a\u4e86\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"iptables"),"\uff0c\u9700\u8981\u5148\u7981\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"firewalld"),"\u3002"),(0,l.kt)("h3",{id:"\u7981\u7528firewalld"},"\u7981\u7528",(0,l.kt)("inlineCode",{parentName:"h3"},"firewalld")),(0,l.kt)("p",null,"\u9996\u5148\u505c\u6b62",(0,l.kt)("inlineCode",{parentName:"p"},"firewalld"),"\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl stop firewalld\n")),(0,l.kt)("p",null,"\u7136\u540e\u7981\u6b62",(0,l.kt)("inlineCode",{parentName:"p"},"firewalld"),"\u670d\u52a1\u5f00\u673a\u81ea\u542f\u52a8\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl disable firewalld\n")),(0,l.kt)("p",null,"\u4e3a\u4e86\u9632\u6b62",(0,l.kt)("inlineCode",{parentName:"p"},"firewalld"),"\u670d\u52a1\u88ab\u5176\u4ed6\u670d\u52a1\u518d\u6b21\u542f\u52a8\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl mask --now firewalld\n")),(0,l.kt)("h3",{id:"\u5b89\u88c5iptables"},"\u5b89\u88c5",(0,l.kt)("inlineCode",{parentName:"h3"},"iptables")),(0,l.kt)("p",null,"\u5148\u68c0\u67e5\u662f\u5426\u5df2\u7ecf\u5b89\u88c5\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"iptables"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl status iptables\n")),(0,l.kt)("p",null,"\u786e\u8ba4\u6ca1\u6709\u5b89\u88c5\u540e\u901a\u8fc7\u5305\u7ba1\u7406\u5668\u8fdb\u884c\u5b89\u88c5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo yum install iptables-services\n")),(0,l.kt)("p",null,"\u5b89\u88c5\u6210\u529f\u540e\u542f\u52a8\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl start iptables\n")),(0,l.kt)("p",null,"\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\u52a8\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl enable iptables\n")),(0,l.kt)("p",null,"\u67e5\u770b\u670d\u52a1\u8fd0\u884c\u72b6\u6001\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo systemctl status iptables\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u25cf iptables.service - IPv4 firewall with iptables\n   Loaded: loaded (/usr/lib/systemd/system/iptables.service; enabled; vendor preset: disabled)\n   Active: active (exited) since Thu 2019-12-19 13:31:35 CST; 1min 30s ago\n Main PID: 2966 (code=exited, status=0/SUCCESS)\n")),(0,l.kt)("p",null,"\u51fa\u73b0\u4ee5\u4e0a\u4fe1\u606f\uff0c\u5219\u8868\u660e\u670d\u52a1\u8fd0\u884c\u6b63\u5e38\u3002\u63a5\u4e0b\u6765\u53ef\u67e5\u770b\u5f53\u524d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"iptables"),"\u9ed8\u8ba4\u89c4\u5219\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo iptables -nvL\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Chain INPUT (policy ACCEPT 0 packets, 0 bytes)\n pkts bytes target     prot opt in     out     source               destination\n  113  6860 ACCEPT     all  --  *      *       0.0.0.0/0            0.0.0.0/0            state RELATED,ESTABLISHED\n    0     0 ACCEPT     icmp --  *      *       0.0.0.0/0            0.0.0.0/0\n    0     0 ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0\n    0     0 ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            state NEW tcp dpt:22\n    0     0 REJECT     all  --  *      *       0.0.0.0/0            0.0.0.0/0            reject-with icmp-host-prohibited\n\nChain FORWARD (policy ACCEPT 0 packets, 0 bytes)\n pkts bytes target     prot opt in     out     source               destination\n    0     0 REJECT     all  --  *      *       0.0.0.0/0            0.0.0.0/0            reject-with icmp-host-prohibited\n\nChain OUTPUT (policy ACCEPT 66 packets, 6232 bytes)\n pkts bytes target     prot opt in     out     source               destination\n")),(0,l.kt)("h3",{id:"\u5b9a\u4e49\u8fc7\u6ee4\u89c4\u5219"},"\u5b9a\u4e49\u8fc7\u6ee4\u89c4\u5219"),(0,l.kt)("p",null,"\u5b9a\u4e49\u89c4\u5219\u7684\u547d\u4ee4\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo iptables -t <table> -A <chain> -i <interface> -p <protocol (tcp/udp) > -s <source> --dport <port no.>  -j <target>\n")),(0,l.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\u53ef\u53c2\u8003\u4e0a\u6587\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"\u64cd\u4f5c\u9009\u9879\u5f52\u7eb3\u8bf4\u660e"),"\uff0c\u8fd9\u91cc\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"-t"),"\u6307\u5b9a\u9700\u5b9a\u4e49\u89c4\u5219\u7684\u8868\uff0c\u9ed8\u8ba4\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"filter"),"\u3002"),(0,l.kt)("h4",{id:"\u5f00\u542fhttp\u7aef\u53e380ssh\u7aef\u53e322\u548cssl443\u4e09\u4e2a\u670d\u52a1"},"\u5f00\u542f",(0,l.kt)("inlineCode",{parentName:"h4"},"HTTP\uff08\u7aef\u53e380\uff09"),"\u3001",(0,l.kt)("inlineCode",{parentName:"h4"},"SSH\uff08\u7aef\u53e322\uff09"),"\u548c",(0,l.kt)("inlineCode",{parentName:"h4"},"SSL\uff08443\uff09"),"\u4e09\u4e2a\u670d\u52a1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT\n$ sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT\n$ sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT\n")),(0,l.kt)("p",null,"\u89c4\u5219\u6dfb\u52a0\u540e\u67e5\u770b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo iptables -nvL\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Chain INPUT (policy ACCEPT 0 packets, 0 bytes)\n pkts bytes target     prot opt in     out     source               destination\n   69  4580 ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:22\n    0     0 ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:80\n    0     0 ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:443\n")),(0,l.kt)("p",null,"\u7ed3\u679c\u8868\u660e\uff0c\u6240\u6709\u8bbf\u95ee",(0,l.kt)("inlineCode",{parentName:"p"},"80"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"22"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"443"),"\u7aef\u53e3\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"TCP"),"\u8bf7\u6c42\u90fd\u88ab\u5141\u8bb8\u3002"),(0,l.kt)("h4",{id:"\u6839\u636e\u6e90ip\u5730\u5740\u9650\u5236\u8bbf\u95ee"},"\u6839\u636e\u6e90",(0,l.kt)("inlineCode",{parentName:"h4"},"IP"),"\u5730\u5740\u9650\u5236\u8bbf\u95ee"),(0,l.kt)("p",null,"\u4f8b\u5982\u5141\u8bb8",(0,l.kt)("inlineCode",{parentName:"p"},"IP"),"\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"192.168.1.3"),"\u8bbf\u95ee\u672c\u673a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo iptables -A INPUT -s 192.168.1.3 -j ACCEPT\n")),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"DROP"),"\u76ee\u6807\u9650\u5236\u67d0\u4e00",(0,l.kt)("inlineCode",{parentName:"p"},"IP"),"\u5730\u5740\u8bbf\u95ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo iptables -A INPUT -s 192.168.1.3 -j DROP\n")),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u9650\u5236\u6e90\u5730\u5740\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"IP\u6bb5"),"\uff0c\u53ef\u901a\u8fc7\u63a9\u7801\u8bbe\u5b9a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo iptables -A INPUT -s 192.168.0.0/16 -j ACCEPT\n")),(0,l.kt)("h4",{id:"\u4e22\u5f03\u6240\u6709\u5176\u4ed6\u8bbf\u95ee\u8bf7\u6c42"},"\u4e22\u5f03\u6240\u6709\u5176\u4ed6\u8bbf\u95ee\u8bf7\u6c42"),(0,l.kt)("p",null,"\u5b9a\u4e49\u597d\u5141\u8bb8\u8bbf\u95ee\u7684\u89c4\u5219\u4e4b\u540e\uff0c\u901a\u5e38\u9700\u8981\u5c06\u5176\u4ed6\u672a\u6388\u6743\u7684\u8bbf\u95ee\u8bf7\u6c42\u90fd\u7981\u6b62\u6389\uff0c\u4ee5\u8fbe\u5230\u8bbf\u95ee\u63a7\u5236\u7684\u76ee\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo iptables -A INPUT -j DROP\n")),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49\u6574\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"INPUT"),"\u94fe\u7684\u7b56\u7565\u6765\u9650\u5236\u672a\u6388\u6743\u7684\u8bbf\u95ee\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo iptables -P INPUT DROP\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u662f\u8fdc\u7a0b\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"iptables"),"\u89c4\u5219\uff0c\u5728\u9650\u5236\u5168\u5c40\u8bbf\u95ee\u65f6\uff0c\u4e00\u5b9a\u8981\u5148\u5f00\u542f\u8fdc\u7a0b\u8fde\u63a5\u7684\u7aef\u53e3\uff0c\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"SSH(\u7aef\u53e322)"),"\uff0c\u5426\u5219\u5bb9\u6613\u9020\u6210\u8fdc\u7a0b\u8fde\u63a5\u4e2d\u65ad\u3002")),(0,l.kt)("h4",{id:"\u5220\u9664\u89c4\u5219"},"\u5220\u9664\u89c4\u5219"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u5220\u9664\u6240\u6709\u89c4\u5219\uff0c\u53ef\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"-F"),"\u9009\u9879\uff08flush\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo iptables -F\n")),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u5220\u9664\u5176\u4e2d\u67d0\u4e00\u6761\u89c4\u5219\uff0c\u9996\u5148\u8981\u67e5\u770b\u6240\u6709\u89c4\u5219\u7684\u7f16\u53f7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo iptables -nvL --line-numbers\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Chain INPUT (policy ACCEPT 0 packets, 0 bytes)\nnum   pkts bytes target     prot opt in     out     source               destination\n1      306 18777 ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:22\n2        8   563 ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:80\n3        9   611 ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0            tcp dpt:443\n4       45  2532 DROP       all  --  *      *       0.0.0.0/0            0.0.0.0/0\n")),(0,l.kt)("p",null,"\u5728\u6bcf\u6761\u89c4\u5219\u7684\u5f00\u5934\u5c31\u662f\u7f16\u53f7\uff0c\u6bd4\u5982\u5220\u9664\u7f16\u53f7\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"3"),"\u7684\u89c4\u5219\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo iptables -D INPUT 3\n")),(0,l.kt)("h4",{id:"\u89c4\u5219\u4fdd\u5b58"},"\u89c4\u5219\u4fdd\u5b58"),(0,l.kt)("p",null,"\u4e4b\u524d\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"iptables"),"\u89c4\u5219\u7684\u64cd\u4f5c\u90fd\u662f\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u5982\u679c\u7cfb\u7edf\u91cd\u542f\uff0c\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u4f1a\u4e22\u5931\uff0c\u56e0\u6b64\u5728\u4fee\u6539\u89c4\u5219\u5b8c\u6210\u540e\uff0c\u9700\u8981\u5bf9\u5176\u8fdb\u884c\u4fdd\u5b58\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo service iptables save\n")),(0,l.kt)("h2",{id:"\u5178\u578b\u8bbe\u7f6e\u811a\u672c\u793a\u4f8b"},"\u5178\u578b\u8bbe\u7f6e\u811a\u672c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\n# \u5148\u5141\u8bb8\u6240\u6709\niptables -P INPUT ACCEPT\n#\u6e05\u7a7a\u6240\u6709\u9ed8\u8ba4\u89c4\u5219\niptables -F\n#\u6e05\u7a7a\u6240\u6709\u81ea\u5b9a\u4e49\u89c4\u5219\niptables -X\n#\u6240\u6709\u8ba1\u6570\u5668\u5f520\niptables -Z\n#\u5141\u8bb8\u6765\u81ea\u4e8elo\u63a5\u53e3\u7684\u6570\u636e\u5305(\u672c\u5730\u8bbf\u95ee)\niptables -A INPUT -i lo -j ACCEPT\n#\u5f00\u653e22\u7aef\u53e3\niptables -A INPUT -p tcp --dport 22 -j ACCEPT\n#\u5f00\u653e21\u7aef\u53e3(FTP)\niptables -A INPUT -p tcp --dport 21 -j ACCEPT\n#\u5f00\u653e80\u7aef\u53e3(HTTP)\niptables -A INPUT -p tcp --dport 80 -j ACCEPT\n#\u5f00\u653e443\u7aef\u53e3(HTTPS)\niptables -A INPUT -p tcp --dport 443 -j ACCEPT\n#\u5141\u8bb8ping\niptables -A INPUT -p icmp --icmp-type 8 -j ACCEPT\n#\u5176\u4ed6\u5165\u7ad9\u4e00\u5f8b\u4e22\u5f03\niptables -P INPUT DROP\n#\u6240\u6709\u51fa\u7ad9\u4e00\u5f8b\u7eff\u706f\niptables -P OUTPUT ACCEPT\n#\u6240\u6709\u8f6c\u53d1\u4e00\u5f8b\u4e22\u5f03\niptables -P FORWARD DROP\n#\u4fdd\u5b58\u4e0a\u8ff0\u89c4\u5219\nservice iptables save\n#\u91cd\u542f\u670d\u52a1\nsystemctl restart iptables\n")),(0,l.kt)("h2",{id:"iptables\u64cd\u4f5c\u9009\u9879\u5f52\u7eb3\u8bf4\u660e"},(0,l.kt)("inlineCode",{parentName:"h2"},"iptables"),"\u64cd\u4f5c\u9009\u9879\u5f52\u7eb3\u8bf4\u660e"),(0,l.kt)("h3",{id:"\u67e5\u770b\u9009\u9879"},"\u67e5\u770b\u9009\u9879"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7b80\u5199"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-L"),(0,l.kt)("td",{parentName:"tr",align:null},"--list ",(0,l.kt)("em",{parentName:"td"},"chain rulenum")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5217\u51fa\u6240\u6709\u94fe\u53ca\u89c4\u5219\uff0c\u9ed8\u8ba4\u8868\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"filter"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-n"),(0,l.kt)("td",{parentName:"tr",align:null},"--numeric"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IP"),"\u5730\u5740\u548c\u7aef\u53e3\u663e\u793a\u4e3a\u6570\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-v"),(0,l.kt)("td",{parentName:"tr",align:null},"--verbose"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u8be6\u7ec6\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"--line-numbers"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u89c4\u5219\u7f16\u53f7")))),(0,l.kt)("h3",{id:"\u94fe\u64cd\u4f5c\u9009\u9879"},"\u94fe\u64cd\u4f5c\u9009\u9879"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7b80\u5199"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-A"),(0,l.kt)("td",{parentName:"tr",align:null},"--append ",(0,l.kt)("em",{parentName:"td"},"chain rule")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5411\u94fe\u6dfb\u52a0\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-D"),(0,l.kt)("td",{parentName:"tr",align:null},"--delete ",(0,l.kt)("em",{parentName:"td"},"chain rulenum")),(0,l.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u7f16\u53f7\u5220\u9664\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-I"),(0,l.kt)("td",{parentName:"tr",align:null},"--insert ",(0,l.kt)("em",{parentName:"td"},"chain rulenum")),(0,l.kt)("td",{parentName:"tr",align:null},"\u63d2\u5165\u89c4\u5219\uff0c\u9ed8\u8ba4\u7f16\u53f7\u4e3a1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-R"),(0,l.kt)("td",{parentName:"tr",align:null},"--replace ",(0,l.kt)("em",{parentName:"td"},"chain rulenum")),(0,l.kt)("td",{parentName:"tr",align:null},"\u66ff\u6362\u89c4\u5219\uff0c\u9ed8\u8ba4\u7f16\u53f7\u4e3a1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-F"),(0,l.kt)("td",{parentName:"tr",align:null},"--flush ",(0,l.kt)("em",{parentName:"td"},"chain")),(0,l.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u6307\u5b9a\u94fe\u6240\u6709\u89c4\u5219\uff0c\u5982\u672a\u6307\u5b9a\uff0c\u5219\u5220\u9664\u6240\u6709\u94fe\u89c4\u5219")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-P"),(0,l.kt)("td",{parentName:"tr",align:null},"--policy ",(0,l.kt)("em",{parentName:"td"},"chain target")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u94fe\u653f\u7b56")))),(0,l.kt)("h3",{id:"\u89c4\u5219\u9009\u9879"},"\u89c4\u5219\u9009\u9879"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7b80\u5199"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-p"),(0,l.kt)("td",{parentName:"tr",align:null},"--proto ",(0,l.kt)("em",{parentName:"td"},"proto")),(0,l.kt)("td",{parentName:"tr",align:null},"\u534f\u8bae\u3002{tcp, udp, udplite, icmp, esp, ah, sctp}\u7b49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-s"),(0,l.kt)("td",{parentName:"tr",align:null},"--source ",(0,l.kt)("em",{parentName:"td"},"address/mask")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6e90IP\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-d"),(0,l.kt)("td",{parentName:"tr",align:null},"--destination ",(0,l.kt)("em",{parentName:"td"},"address/mask")),(0,l.kt)("td",{parentName:"tr",align:null},"\u76ee\u7684IP\u5730\u5740")))),(0,l.kt)("h3",{id:"\u76ee\u6807\u9009\u9879"},"\u76ee\u6807\u9009\u9879"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7b80\u5199"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-j"),(0,l.kt)("td",{parentName:"tr",align:null},"--jump ",(0,l.kt)("em",{parentName:"td"},"target")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u6574\u5230\u76ee\u6807")))),(0,l.kt)("h3",{id:"\u901a\u7528\u9009\u9879"},"\u901a\u7528\u9009\u9879"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7b80\u5199"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-t"),(0,l.kt)("td",{parentName:"tr",align:null},"--table ",(0,l.kt)("em",{parentName:"td"},"table")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8868\uff0c\u9ed8\u8ba4\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"filter"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-V"),(0,l.kt)("td",{parentName:"tr",align:null},"--version"),(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u7248\u672c")))),(0,l.kt)("h3",{id:"\u8865\u5145"},"\u8865\u5145"),(0,l.kt)("p",null,"CentOS 7\u914d\u7f6e\u5b8c\u540e\u53d1\u73b0\u65e0\u6cd5\u4f7f\u7528YUM\u5305\u7ba1\u7406\u5668\uff0c\u9700\u6dfb\u52a0\u5982\u4e0b\u89c4\u5219\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT\n")),(0,l.kt)("p",null,"\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Chain INPUT (policy DROP 58 packets, 6674 bytes)\n pkts bytes target     prot opt in     out     source               destination         \n    0     0 ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0           \n 1309  109K ACCEPT     tcp  --  *      *       10.42.6.0/24         0.0.0.0/0            tcp dpt:22\n  167 17907 ACCEPT     tcp  --  *      *       10.0.0.0/8           0.0.0.0/0            tcp dpt:80\n15809   27M ACCEPT     all  --  *      *       0.0.0.0/0            0.0.0.0/0            state RELATED,ESTABLISHED\n")))}k.isMDXComponent=!0}}]);