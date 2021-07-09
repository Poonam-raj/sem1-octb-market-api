(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{68:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(98)),i={id:"delete-item-from-basket",title:"DELETE /api/users/:username/basket/:item_id",sidebar_position:4},s={unversionedId:"Basket/delete-item-from-basket",id:"Basket/delete-item-from-basket",isDocsHomePage:!1,title:"DELETE /api/users/:username/basket/:item_id",description:"Removes the requested item from the users Basket.",source:"@site/docs/Basket/delete-item-from-basket.md",sourceDirName:"Basket",slug:"/Basket/delete-item-from-basket",permalink:"/docs/Basket/delete-item-from-basket",version:"current",sidebarPosition:4,frontMatter:{id:"delete-item-from-basket",title:"DELETE /api/users/:username/basket/:item_id",sidebar_position:4},sidebar:"docsSidebar",previous:{title:"POST /api/users/:username/basket",permalink:"/docs/Basket/post-item-to-basket"},next:{title:"GET /api/categories",permalink:"/docs/Categories/get-categories"}},c=[{value:"Example Response",id:"example-response",children:[]}],p={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Removes the requested item from the users Basket."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"nb")," The item is not permanently deleted and is still available. Use DELETE /api/items/:item_id to remove the item altogether."),Object(a.b)("h2",{id:"example-response"},"Example Response"),Object(a.b)("p",null,"Status 204 - No Content"),Object(a.b)("p",null,"No body is returned by this endpoint."))}u.isMDXComponent=!0},98:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=u(r),d=n,b=l["".concat(i,".").concat(d)]||l[d]||m[d]||a;return r?o.a.createElement(b,s(s({ref:t},p),{},{components:r})):o.a.createElement(b,s({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);