"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9297],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>N});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),m=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(i.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=m(n),u=r,N=k["".concat(i,".").concat(u)]||k[u]||s[u]||l;return n?a.createElement(N,p(p({ref:e},d),{},{components:n})):a.createElement(N,p({ref:e},d))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=u;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[k]="string"==typeof t?t:r,p[1]=o;for(var m=2;m<l;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8978:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3,title:"\u5217\u8868\u548c\u5143\u7ec4"},p=void 0,o={unversionedId:"python/list-tuple",id:"python/list-tuple",title:"\u5217\u8868\u548c\u5143\u7ec4",description:"\u521d\u59cb\u5316",source:"@site/docs/python/list-tuple.md",sourceDirName:"python",slug:"/python/list-tuple",permalink:"/docs/python/list-tuple",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/python/list-tuple.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u5217\u8868\u548c\u5143\u7ec4"},sidebar:"tutorialSidebar",previous:{title:"\u6d41\u7a0b\u63a7\u5236",permalink:"/docs/python/procell-control"},next:{title:"\u5b57\u7b26\u4e32",permalink:"/docs/python/python-string"}},i={},m=[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u7d22\u5f15",id:"\u7d22\u5f15",level:2},{value:"\u5207\u7247",id:"\u5207\u7247",level:2},{value:"\u4fee\u6539",id:"\u4fee\u6539",level:2},{value:"append",id:"append",level:3},{value:"extend",id:"extend",level:3},{value:"insert",id:"insert",level:3},{value:"del",id:"del",level:3},{value:"remove",id:"remove",level:3},{value:"reverse",id:"reverse",level:3},{value:"\u6392\u5e8f",id:"\u6392\u5e8f",level:2},{value:"sort",id:"sort",level:3},{value:"\u81ea\u5b9a\u4e49\u6392\u5e8f",id:"\u81ea\u5b9a\u4e49\u6392\u5e8f",level:3},{value:"sorted",id:"sorted",level:3},{value:"\u5e38\u7528\u65b9\u6cd5",id:"\u5e38\u7528\u65b9\u6cd5",level:2},{value:"\u5143\u7ec4",id:"\u5143\u7ec4",level:2},{value:"\u5355\u4e2a\u5143\u7d20\u7684\u5143\u7ec4\u5e94\u52a0\u4e0a\u9017\u53f7",id:"\u5355\u4e2a\u5143\u7d20\u7684\u5143\u7ec4\u5e94\u52a0\u4e0a\u9017\u53f7",level:3},{value:"\u6253\u5305\u548c\u62c6\u5305",id:"\u6253\u5305\u548c\u62c6\u5305",level:3},{value:"\u5217\u8868\u548c\u5143\u7ec4\u7684\u76f8\u4e92\u8f6c\u6362",id:"\u5217\u8868\u548c\u5143\u7ec4\u7684\u76f8\u4e92\u8f6c\u6362",level:3}],d={toc:m},k="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Python")," \u7684\u5217\u8868\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"Java"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"C")," \u7b49\u5176\u4ed6\u8bed\u8a00\u7684\u6570\u7ec4\u975e\u5e38\u76f8\u4f3c\uff0c\u662f\u5bf9\u8c61\u7684\u6709\u5e8f\u96c6\u5408\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"x = [1, 2, 3]\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0e\u5f88\u591a\u5176\u4ed6\u8bed\u8a00\u7684\u5217\u8868\u4e0d\u540c\uff0cPython \u7684\u5217\u8868\u53ef\u4ee5\u5305\u542b\u4e0d\u540c\u7c7b\u578b\u7684\u5143\u7d20\uff0c\u5217\u8868\u5143\u7d20\u53ef\u4ee5\u662f\u4efb\u610f\u7684 Python \u5bf9\u8c61\u3002")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"len()")," \u51fd\u6570\u8fd4\u56de\u5217\u8868\u7684\u5143\u7d20\u6570\u91cf\u3002")),(0,r.kt)("h2",{id:"\u7d22\u5f15"},"\u7d22\u5f15"),(0,r.kt)("p",null,"Python \u4ece ",(0,r.kt)("strong",{parentName:"p"},"0")," \u5f00\u59cb\u8ba1\u6570\uff0c\u7d22\u5f15\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"0")," \u5c06\u8fd4\u56de\u5217\u8868\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u7d22\u5f15\u4e3a ",(0,r.kt)("strong",{parentName:"p"},"1")," \u5219\u8fd4\u56de\u7b2c\u4e8c\u4e2a\u5143\u7d20\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'>>> x = ["first", "second", "third", "fourth"]\n>>> x[0]\n\'first\'\n>>> x[2]\n\'third\'\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u7d22\u5f15\u4e3a\u8d1f\u6570\uff0c\u8868\u793a\u4ece\u5217\u8868\u672b\u5c3e\u5f00\u59cb\u8ba1\u6570\u7684\u4f4d\u7f6e\uff0c\u5176\u4e2d ",(0,r.kt)("strong",{parentName:"p"},"-1")," \u662f\u5217\u8868\u7684\u6700\u540e\u4f4d\u7f6e\uff0c",(0,r.kt)("strong",{parentName:"p"},"-2")," \u662f\u5012\u6570\u7b2c\u4e8c\u4f4d\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002")),(0,r.kt)("h2",{id:"\u5207\u7247"},"\u5207\u7247"),(0,r.kt)("p",null,"\u5c31\u50cf\u7d22\u5f15\u53ef\u4ee5\u4ece\u5217\u8868\u4e2d\u53d6\u5f97\u5355\u4e2a\u503c\u4e00\u6837\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5207\u7247")," \u53ef\u4ee5\u4ece\u5217\u8868\u4e2d\u53d6\u5f97\u591a\u4e2a\u503c\uff0c\u7ed3\u679c\u662f\u4e00\u4e2a\u65b0\u5217\u8868\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"list[index1:index2]\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u63d0\u53d6 ",(0,r.kt)("strong",{parentName:"p"},"index1"),"\uff08\u542b\uff09\u548c\u4e0a\u9650\u81f3 ",(0,r.kt)("strong",{parentName:"p"},"index2"),"\uff08\u4e0d\u542b\uff09\u4e4b\u95f4\u7684\u6240\u6709\u6570\u636e\u9879\uff0c\u5e76\u653e\u5165\u4e00\u4e2a\u65b0\u5217\u8868\u4e2d\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> x = [\"first\", \"second\", \"third\", \"fourth\"]\n>>> x[1:-1]\n['second', 'third']\n>>> x[0:3]\n['first', 'second', 'third']\n>>> x[-2:-1]\n['third']\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u5bf9\u5217\u8868\u8fdb\u884c\u5207\u7247\u65f6\uff0c\u8fd8\u53ef\u4ee5\u7701\u7565 ",(0,r.kt)("strong",{parentName:"p"},"index1")," \u6216 ",(0,r.kt)("strong",{parentName:"p"},"index2"),"\u3002\u7701\u7565 ",(0,r.kt)("strong",{parentName:"p"},"index1")," \u8868\u793a\u201c\u4ece\u5217\u8868\u5934\u5f00\u59cb\u201d\uff0c\u800c\u7701\u7565 ",(0,r.kt)("strong",{parentName:"p"},"index2")," \u5219\u8868\u793a\u201c\u76f4\u5230\u5217\u8868\u672b\u5c3e\u4e3a\u6b62\u201d\u3002\u5982\u679c\u4e24\u4e2a\u7d22\u5f15\u90fd\u7701\u7565\u4e86\uff0c\u5c06\u4f1a\u7531\u539f\u5217\u8868\u4ece\u5934\u81f3\u5c3e\u521b\u5efa\u4e00\u4e2a\u65b0\u5217\u8868\uff0c\u5373\u5217\u8868\u590d\u5236\u3002")),(0,r.kt)("h2",{id:"\u4fee\u6539"},"\u4fee\u6539"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> x = [1, 2, 3, 4]\n>>> x[1] = \"two\"\n>>> x\n[1, 'two', 3, 4]\n")),(0,r.kt)("h3",{id:"append"},"append"),(0,r.kt)("p",null,"\u5411\u5217\u8868\u6dfb\u52a0\u5355\u4e2a\u5143\u7d20\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> x = [1, 2, 3]\n>>> x.append(\"four\")\n>>> x\n[1, 2, 3, 'four']\n")),(0,r.kt)("h3",{id:"extend"},"extend"),(0,r.kt)("p",null,"\u5c06\u5217\u8868\u8ffd\u52a0\u5230\u53e6\u4e00\u4e2a\u5217\u8868\u4e4b\u540e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> x = [1, 2, 3, 4]\n>>> y = [5, 6, 7]\n>>> x.extend(y)\n>>> x\n[1, 2, 3, 4, 5, 6, 7]\n")),(0,r.kt)("admonition",{title:"\u76f8\u540c\u6548\u679c\u7684\u5207\u7247\u64cd\u4f5c",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> x = [1, 2, 3, 4]\n>>> x[len(x):] = [5, 6, 7]\n>>> x\n[1, 2, 3, 4, 5, 6, 7]\n"))),(0,r.kt)("h3",{id:"insert"},"insert"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728\u4e24\u4e2a\u73b0\u6709\u5143\u7d20\u4e4b\u95f4\u6216\u5217\u8868\u4e4b\u524d\u63d2\u5165\u65b0\u7684\u5143\u7d20\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> x = [1, 2, 3]\n>>> x.insert(2, \"hello\")\n>>> print(x)\n[1, 2, 'hello', 3]\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5f53 n \u662f\u975e\u8d1f\u503c\u65f6\uff0c",(0,r.kt)("strong",{parentName:"p"},"list.insert(n, elem)")," \u4e0e ",(0,r.kt)("strong",{parentName:"p"},"list","[n:n]"," = ","[elem]")," \u7684\u6548\u679c\u662f\u4e00\u6837\u7684\u3002")),(0,r.kt)("h3",{id:"del"},"del"),(0,r.kt)("p",null,"\u5220\u9664\u5217\u8868\u6570\u636e\u9879\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> x = ['a', 2, 'c', 7, 9, 11]\n>>> del x[1]\n>>> x\n['a', 'c', 7, 9, 11]\n>>> del x[:2]\n>>> x\n[7, 9, 11]\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u901a\u5e38\uff0c",(0,r.kt)("strong",{parentName:"p"},"del list","[n]")," \u7684\u529f\u80fd\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"list","[n:n+1]"," = []")," \u662f\u4e00\u6837\u7684\uff0c\u800c ",(0,r.kt)("strong",{parentName:"p"},"del list","[m:n]")," \u7684\u529f\u80fd\u5219\u4e0e ",(0,r.kt)("strong",{parentName:"p"},"list","[m:n]"," = []")," \u76f8\u540c\u3002")),(0,r.kt)("h3",{id:"remove"},"remove"),(0,r.kt)("p",null,"\u5728\u5217\u8868\u4e2d\u67e5\u627e\u7ed9\u5b9a\u503c\u7684\u7b2c\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u7136\u540e\u5c06\u8be5\u503c\u4ece\u5217\u8868\u4e2d\u5220\u9664\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> x = [1, 2, 3, 4, 3, 5]\n>>> x.remove(3)\n>>> x\n[1, 2, 4, 3, 5]\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c ",(0,r.kt)("strong",{parentName:"p"},"remove")," \u627e\u4e0d\u5230\u8981\u5220\u9664\u7684\u7684\u503c\uff0c\u5c31\u4f1a\u5f15\u53d1\u9519\u8bef\u3002\u53ef\u4ee5\u7528 Python \u7684\u5f02\u5e38\u5904\u7406\u673a\u5236\u6765\u6355\u83b7\u9519\u8bef\uff0c\u4e5f\u53ef\u4ee5\u5728\u505a ",(0,r.kt)("strong",{parentName:"p"},"remove")," \u4e4b\u524d\uff0c\u5148\u7528 ",(0,r.kt)("strong",{parentName:"p"},"in")," \u68c0\u67e5\u4e00\u4e0b\u8981\u5220\u9664\u7684\u503c\u662f\u5426\u5b58\u5728\uff0c\u4ee5\u907f\u514d\u9519\u8bef\u7684\u53d1\u751f\u3002")),(0,r.kt)("h3",{id:"reverse"},"reverse"),(0,r.kt)("p",null,"\u5217\u8868\u9006\u5e8f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> x = [1, 3, 5, 6, 7]\n>>> x.reverse()\n>>> x\n[7, 6, 5, 3, 1]\n")),(0,r.kt)("h2",{id:"\u6392\u5e8f"},"\u6392\u5e8f"),(0,r.kt)("h3",{id:"sort"},"sort"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> x = [3, 8, 4, 0, 2, 1]\n>>> x.sort()\n>>> x\n[0, 1, 2, 3, 4, 8]\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"sort")," \u65b9\u6cd5\u53ef\u4ee5\u5bf9\u4efb\u4f55\u5bf9\u8c61\u8fdb\u884c\u6392\u5e8f\uff0c\u56e0\u4e3a Python \u51e0\u4e4e\u53ef\u4ee5\u5bf9\u4efb\u4f55\u5bf9\u8c61\u8fdb\u884c\u6bd4\u8f83\u3002\u4f46\u662f\u5728\u6392\u5e8f\u65f6\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f\uff1a",(0,r.kt)("strong",{parentName:"p"},"sort")," \u7528\u5230\u7684\u9ed8\u8ba4\u952e\u65b9\u6cd5\u8981\u6c42\uff0c\u5217\u8868\u4e2d\u6240\u6709\u6570\u636e\u9879\u5747\u4e3a\u53ef\u6bd4\u8f83\u7684\u7c7b\u578b\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c\u5217\u8868\u540c\u65f6\u5305\u542b\u6570\u5b57\u548c\u5b57\u7b26\u4e32\uff0c\u90a3\u4e48\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"sort")," \u65b9\u6cd5\u5c06\u4f1a\u5f15\u53d1\u5f02\u5e38\uff01")),(0,r.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6392\u5e8f"},"\u81ea\u5b9a\u4e49\u6392\u5e8f"),(0,r.kt)("p",null,"\u5b9a\u4e49\u51fd\u6570\uff0c\u6309\u7167\u6bcf\u4e2a\u5355\u8bcd\u7684\u5b57\u7b26\u6570\u5bf9\u5355\u8bcd\u5217\u8868\u8fdb\u884c\u6392\u5e8f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def compare_num_of_chars(string1):\n    return len(string1)\n\n>>> word_list = ['Python', 'is', 'better', 'than', 'C']\n>>> word_list.sort(key=compare_num_of_chars)\n>>> print(word_list)\n['C', 'is', 'than', 'Python', 'better']\n")),(0,r.kt)("h3",{id:"sorted"},"sorted"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5217\u8868\u5185\u7f6e\u4e86\u6392\u5e8f\u65b9\u6cd5\uff0c\u4f46 Python \u7684\u5176\u4ed6\u53ef\u8fed\u4ee3\u5bf9\u8c61\uff08\u5982\u5b57\u5178\u7684\u952e\uff09\uff0c\u5c31\u6ca1\u6709 ",(0,r.kt)("strong",{parentName:"p"},"sort")," \u65b9\u6cd5\u3002Python \u8fd8\u5185\u7f6e\u6709 ",(0,r.kt)("strong",{parentName:"p"},"sorted()")," \u51fd\u6570\uff0c\u80fd\u591f\u4ece\u4efb\u4f55\u53ef\u8fed\u4ee3\u5bf9\u8c61\u8fd4\u56de\u6709\u5e8f\u5217\u8868\u3002\u548c\u5217\u8868\u7684 ",(0,r.kt)("strong",{parentName:"p"},"sort")," \u65b9\u6cd5\u4e00\u6837\uff0c",(0,r.kt)("strong",{parentName:"p"},"sorted()")," \u51fd\u6570\u540c\u6837\u4e5f\u7528\u5230\u4e86\u53c2\u6570 ",(0,r.kt)("strong",{parentName:"p"},"key")," \u548c ",(0,r.kt)("strong",{parentName:"p"},"reverse"),"\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> x = (4, 3, 1, 2)\n>>> y = sorted(x)\n>>> y\n[1, 2, 3, 4]\n>>> z = sorted(x, reverse=True)\n>>> z\n[4, 3, 2, 1]\n"))),(0,r.kt)("h2",{id:"\u5e38\u7528\u65b9\u6cd5"},"\u5e38\u7528\u65b9\u6cd5"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u65b9\u6cd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u7a7a\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:null},"x = []")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"len"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u5217\u8868\u957f\u5ea6"),(0,r.kt)("td",{parentName:"tr",align:null},"len(x)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"append"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u5217\u8868\u672b\u5c3e\u6dfb\u52a0\u4e00\u4e2a\u5143\u7d20"),(0,r.kt)("td",{parentName:"tr",align:null},"x.append('y')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extend"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u5217\u8868\u672b\u5c3e\u6dfb\u52a0\u53e6\u4e00\u4e2a\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:null},"x.extend(","['a', 'b']",")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"insert"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u5217\u8868\u7684\u6307\u5b9a\u4f4d\u7f6e\u63d2\u5165\u4e00\u4e2a\u65b0\u5143\u7d20"),(0,r.kt)("td",{parentName:"tr",align:null},"x.insert(0, 'y')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"del"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u4e00\u4e2a\u5217\u8868\u5143\u7d20\u6216\u5207\u7247"),(0,r.kt)("td",{parentName:"tr",align:null},"del(x","[0]",")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remove"),(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u7d22\u5217\u8868\u5e76\u79fb\u9664\u7ed9\u5b9a\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"x.remove('y')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reverse"),(0,r.kt)("td",{parentName:"tr",align:null},"\u539f\u5730\u5c06\u5217\u8868\u9006\u5e8f"),(0,r.kt)("td",{parentName:"tr",align:null},"x.reverse()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sort"),(0,r.kt)("td",{parentName:"tr",align:null},"\u539f\u5730\u5bf9\u5217\u8868\u6392\u5e8f"),(0,r.kt)("td",{parentName:"tr",align:null},"x.sort()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u4e24\u4e2a\u5217\u8868\u62fc\u63a5\u5728\u4e00\u8d77"),(0,r.kt)("td",{parentName:"tr",align:null},"x1 + x2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u5217\u8868\u590d\u5236\u591a\u4efd"),(0,r.kt)("td",{parentName:"tr",align:null},"x = ","['y']"," * 3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u6700\u5c0f\u5143\u7d20"),(0,r.kt)("td",{parentName:"tr",align:null},"min(x)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u5217\u8868\u4e2d\u7684\u6700\u5927\u5143\u7d20"),(0,r.kt)("td",{parentName:"tr",align:null},"max(x)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u67d0\u503c\u5728\u5217\u8868\u4e2d\u7684\u4f4d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},"x.index","['y']")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u67d0\u503c\u5728\u5217\u8868\u4e2d\u51fa\u73b0\u7684\u6b21\u6570\u8ba1\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"x.count('y')")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sum"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u5217\u8868\u6570\u636e\u9879\u8ba1\u7b97\u5408\u8ba1\u503c\uff08\u5982\u679c\u53ef\u4ee5\u5408\u8ba1\u7684\u8bdd\uff09"),(0,r.kt)("td",{parentName:"tr",align:null},"sum(x)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"in"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u67d0\u6570\u636e\u9879\u662f\u5426\u4e3a\u5217\u8868\u7684\u5143\u7d20"),(0,r.kt)("td",{parentName:"tr",align:null},"'y' in x")))),(0,r.kt)("h2",{id:"\u5143\u7ec4"},"\u5143\u7ec4"),(0,r.kt)("p",null,"\u5143\u7ec4\u662f\u4e0e\u5217\u8868\u975e\u5e38\u76f8\u4f3c\u7684\u6570\u636e\u7ed3\u6784\u3002\u4f46\u662f\u5143\u7ec4\u53ea\u80fd\u521b\u5efa\uff0c\u4e0d\u80fd\u4fee\u6539\u3002"),(0,r.kt)("h3",{id:"\u5355\u4e2a\u5143\u7d20\u7684\u5143\u7ec4\u5e94\u52a0\u4e0a\u9017\u53f7"},"\u5355\u4e2a\u5143\u7d20\u7684\u5143\u7ec4\u5e94\u52a0\u4e0a\u9017\u53f7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> x = 3\n>>> y = 4\n>>> (x + y) # \u6b64\u884c\u4ee3\u7801\u5c06\u628a x \u548c y \u76f8\u52a0\n7\n>>> (x + y,) # \u8ddf\u4e86\u9017\u53f7\u5c31\u610f\u5473\u7740\uff0c\u5706\u62ec\u53f7\u662f\u7528\u6765\u6807\u8bc6\u5143\u7ec4\u7684\n(7,)\n>>> () # \u7528\u6210\u5bf9\u7684\u7a7a\u7684\u5706\u62ec\u53f7\u521b\u5efa\u4e00\u4e2a\u7a7a\u5143\u7ec4\n()\n")),(0,r.kt)("h3",{id:"\u6253\u5305\u548c\u62c6\u5305"},"\u6253\u5305\u548c\u62c6\u5305"),(0,r.kt)("p",null,"Python \u5141\u8bb8\u5143\u7ec4\u51fa\u73b0\u5728\u8d4b\u503c\u64cd\u4f5c\u7b26\u7684\u5de6\u4fa7\uff0c\u8fd9\u65f6\u5143\u7ec4\u4e2d\u7684\u53d8\u91cf\u4f1a\u4f9d\u6b21\u88ab\u8d4b\u4e88\u8d4b\u503c\u64cd\u4f5c\u7b26\u53f3\u4fa7\u5143\u7ec4\u7684\u5143\u7d20\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> (one, two, three, four) = (1, 2, 3, 4)\n>>> one\n1\n>>> two\n2\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u7b80\u5199\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"one, two, three, four = 1, 2, 3, 4\n")),(0,r.kt)("admonition",{title:"\u4ea4\u6362\u53d8\u91cf",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"temp = var1\nvar1 = var2\nvar2 = temp\n")),(0,r.kt)("p",{parentName:"admonition"},"\u53ef\u7b80\u5199\u4e3a\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"var1, var2 = var2, var1\n"))),(0,r.kt)("h3",{id:"\u5217\u8868\u548c\u5143\u7ec4\u7684\u76f8\u4e92\u8f6c\u6362"},"\u5217\u8868\u548c\u5143\u7ec4\u7684\u76f8\u4e92\u8f6c\u6362"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> list((1, 2, 3, 4))\n[1, 2, 3, 4]\n>>> tuple([1, 2, 3, 4])\n(1, 2, 3, 4)\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u5229\u7528 ",(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"list"),"\uff0c\u5f88\u5bb9\u6613\u5c31\u80fd\u5c06\u5b57\u7b26\u4e32\u62c6\u5206\u4e3a\u5b57\u7b26"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> list(\"Hello\")\n['H', 'e', 'l', 'l', 'o']\n"))))}s.isMDXComponent=!0}}]);