(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{663:function(e,t,n){"use strict";n.r(t);n(4),n(6),n(2),n(8),n(5);var r=n(1),o=n(0),i=n.n(o),c=n(665),a=(n(40),n(47),n(34),n(35),n(36),n(10),n(114),n(13),n(45)),u=n(3),s=n(667),l=n(672),f=n.n(l),p=n(46),d=n.n(p),h=(n(157),n(39)),b=n(72),y=n(145),v=39,m=37,O=32,g=80,w=79,j=71,T=27,x=33,E=34,S=function(e){return function(t){return t.mode===e?{mode:b.a.normal}:{mode:e}}},C=["input","select","textarea","a","button"],A=function(){var e=Object(h.a)();Object(o.useEffect)(function(){var t=function(t){var n=t.metaKey,r=t.ctrlKey,o=t.shiftKey,i=t.altKey;if(!n&&!r){var c=document.activeElement.tagName.toLowerCase();if(!C.includes(c))if(o)switch(t.keyCode){case O:Object(y.b)(e);break;case g:e.setState(S(b.a.print)),Object(a.navigate)(e.slug+"/print")}else if(i)switch(t.keyCode){case g:e.setState(S(b.a.presenter));break;case w:e.setState(S(b.a.overview));break;case j:e.setState(S(b.a.grid))}else switch(t.keyCode){case v:case E:case O:Object(y.a)(e);break;case m:case x:Object(y.b)(e);break;case T:e.setState({mode:b.a.normal})}}};return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}},[e])},_="mdx-deck-slide",k="mdx-deck-step",P=function(){var e=Object(h.a)(),t=Object(o.useState)(!1),n=t[0],r=t[1],i=function(){return r(!0)},c=function(){return r(!1)},u=function(t){var n=parseInt(t.newValue,10);if(!isNaN(n))switch(t.key){case _:Object(a.navigate)([e.slug,n].join("/"));break;case k:e.setState({step:n})}};Object(o.useEffect)(function(){r(document.hasFocus())},[]),Object(o.useEffect)(function(){return n||window.addEventListener("storage",u),window.addEventListener("focus",i),window.addEventListener("blur",c),function(){n||window.removeEventListener("storage",u),window.removeEventListener("focus",i),window.removeEventListener("blur",c)}},[n]),Object(o.useEffect)(function(){n&&(localStorage.setItem(_,e.index),localStorage.setItem(k,e.step))},[n,e.index,e.step])},L=n(73);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var R=function(e){return i.a.createElement(o.Fragment,null,e.children)},D=function(e){var t=Object(o.useState)("100vh"),n=t[0],r=t[1],i=Object(h.a)(),c=i.mode,a=i.theme;Object(o.useEffect)(function(){r(window.innerHeight);var e=function(e){r(window.innerHeight)},t=function(e){c===b.a.normal&&e.preventDefault()};return window.addEventListener("resize",e),document.body.addEventListener("touchstart",t),function(){window.removeEventListener("resize",e),document.body.removeEventListener("touchstart",t)}},[c]);var s=a.Provider,l=void 0===s?R:s;return Object(u.c)(l,null,Object(u.c)("div",I({},e,{sx:{width:"100vw",height:c!==b.a.print?n:"100vh",variant:"styles.root","*":{boxSizing:"border-box"}}})))},M=n(91),N=n(90),F=n(154),H=n(155),z=function(e){var t=Object(h.a)(),n=t.index,r=t.length;return Object(u.c)(i.a.Fragment,null,Object(u.c)("div",null,n," / ",r-1),Object(u.c)("div",{sx:{mx:4}},Object(u.c)("a",{href:a.globalHistory.location.href,rel:"noopener noreferrer",target:"_blank",sx:{color:"inherit",textDecoration:"none"}},"Open in New Window ↗︎")),Object(u.c)("div",{sx:{mx:"auto"}}),Object(u.c)("div",{sx:{display:"flex",alignItems:"center",mx:4}},Object(u.c)(H.a,null)),Object(u.c)("div",null,Object(u.c)(F.a,null)))},U=function(e){var t=e.slides,n=e.children,r=Object(h.a)(),o=t[r.index+1],c=!!r.notes&&i.a.Children.toArray(r.notes);return Object(u.c)("div",{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(u.c)("div",{sx:{display:"flex",flex:"1 1 auto",height:"60vh"}},Object(u.c)("div",{sx:{width:"75%",p:3}},Object(u.c)(N.a,{zoom:.75},n)),Object(u.c)("div",{sx:{width:"25%",p:3}},Object(u.c)(N.a,{ratio:4/3,zoom:.25},Object(u.c)(M.a,{slide:o,preview:!0})),c&&Object(u.c)("div",{sx:{my:3}},c))),Object(u.c)("div",{sx:{height:96,p:3,display:"flex",alignItems:"center",fontSize:1,fontWeight:"bold",fontVariantNumeric:"tabular-nums"}},Object(u.c)(z,null)))};function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var q=function(){},W=function(e){var t=e.slides,n=void 0===t?[]:t,r=e.ratio,c=void 0===r?16/9:r,a=e.zoom,s=void 0===a?.25:a,l=e.onClick,f=void 0===l?q:l,p=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["slides","ratio","zoom","onClick"]),d=Object(h.a)().index,b=Object(o.useRef)(null);return Object(o.useEffect)(function(){var e=b.current;e&&"function"==typeof e.scrollIntoViewIfNeeded&&e.scrollIntoViewIfNeeded()}),Object(u.c)(i.a.Fragment,null,n.map(function(e,t){return Object(u.c)("div",Y({},p,{key:t,role:"link",ref:t===d?b:null,onClick:function(e){f(t)},style:d===t?{position:"relative",zIndex:1}:null,sx:{m:2,cursor:"pointer",outline:d===t?"4px solid cyan":null}}),Object(u.c)(N.a,{zoom:s,ratio:c},Object(u.c)(M.a,{slide:e,preview:!0})))}))},$=function(e){var t=e.slides,n=e.children,r=Object(h.a)(),o=r.slug,i=r.index,c=r.length;return Object(u.c)("div",{sx:{display:"flex",height:"100vh",fontFamily:"ui",color:"white",bg:"black"}},Object(u.c)("div",{sx:{width:100/6+"%",minWidth:0,flex:"none",height:"100vh",overflowY:"auto",WebkitOverflowScrolling:"touch",p:2}},Object(u.c)(W,{slides:t,zoom:1/6,onClick:function(e){Object(a.navigate)([o,e].join("/"))}})),Object(u.c)("div",{sx:{width:500/6+"%",py:3,pr:3,display:"flex",flexDirection:"column",height:"100vh"}},Object(u.c)("div",{sx:{flex:"1 1 auto"}},Object(u.c)(N.a,{zoom:5/6},n)),Object(u.c)("div",{sx:{py:3}},i," / ",c-1)))},K=function(e){var t=e.slides,n=Object(h.a)(),r=n.slug,o=n.setState;return Object(u.c)("div",{sx:{minHeight:"100vh",color:"white",bg:"black"}},Object(u.c)("div",{sx:{display:"flex",flexWrap:"wrap"}},Object(u.c)(W,{slides:t,onClick:function(e){Object(a.navigate)([r,e].join("/")),o({mode:b.a.normal})},sx:{width:"25%",m:0}})))};function B(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function V(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(n,!0).forEach(function(t){G(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=function(){return A(),!1},Z=function(){return P(),!1},ee=function(e){var t=e.slides,n=J({},Object(h.a)(),{mode:b.a.print});return Object(r.c)(L.a.Provider,{value:n},t.map(function(e,t){return Object(r.c)(M.a,{key:t,slide:e,preview:!0})}))},te=function(e){var t=e.theme;return!!t.googleFont&&Object(r.c)(s.Helmet,null,Object(r.c)("link",{rel:"stylesheet",href:t.googleFont}))},ne=function(e){var t,n,o=e.slides,c=void 0===o?[]:o,l=e.pageContext,p=l.title,y=l.slug,v=e.theme,m=void 0===v?{}:v,O=e.themes,g=void 0===O?[]:O,w=(V(e,["slides","pageContext","theme","themes"]),Object(h.a)()),j=(t=a.globalHistory.location.pathname.split("/"),n=Number(t[t.length-1]),isNaN(n)?0:n),T=c.head.children,x=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){return"function"==typeof t?t(e):d()(e,t)},{})}.apply(void 0,[m].concat(B(g))),E=x.components,S=V(x,["components"]),C=J({},w,{slug:y,length:c.length,index:j,steps:f()(w,"metadata."+j+".steps"),notes:f()(w,"metadata."+j+".notes"),theme:S}),A=function(e){var t=e.children;return Object(r.c)(i.a.Fragment,{children:t})};switch(C.mode){case b.a.presenter:A=U;break;case b.a.overview:A=$;break;case b.a.grid:A=K}return Object(r.c)(i.a.Fragment,null,Object(r.c)(s.Helmet,null,Object(r.c)("title",null,p),T),Object(r.c)(te,{theme:S}),Object(r.c)(L.a.Provider,{value:C},Object(r.c)(u.b,{components:E,theme:S},Object(r.c)(r.a,{styles:{body:{margin:0,overflow:C.mode===b.a.normal?"hidden":null}}}),Object(r.c)(Q,null),Object(r.c)(Z,null),Object(r.c)(D,null,Object(r.c)(A,{slides:c},Object(r.c)(a.Router,{basepath:y,style:{height:"100%"}},Object(r.c)(M.a,{index:0,path:"/",slide:c[0]}),c.map(function(e,t){return Object(r.c)(M.a,{key:t,index:t,path:t+"/*",slide:e})}),Object(r.c)(ee,{path:"/print",slides:c})))))))},re=n(199);function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"pageQuery",function(){return ie});var ie="2133597988",ce={wrapper:function(e){var t=Object(re.a)(e);return Object(r.c)(ne,oe({},e,{slides:t}))}};t.default=function(e){var t=e.data.deck,n=(t.id,t.body),o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["data"]);return Object(r.c)(function(e){return Object(r.c)(c.MDXRenderer,oe({},e,{children:n}))},oe({},o,{components:ce}))}},664:function(e,t,n){var r=n(9),o=n(75),i=n(59),c=n(26),a=n(27),u=n(29),s=n(220),l=(n(21).Reflect||{}).construct,f=u(function(){function e(){}return!(l(function(){},[],e)instanceof e)}),p=!u(function(){l(function(){})});r(r.S+r.F*(f||p),"Reflect",{construct:function(e,t){i(e),c(t);var n=arguments.length<3?e:i(arguments[2]);if(p&&!f)return l(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(s.apply(e,r))}var u=n.prototype,d=o(a(u)?u:Object.prototype),h=Function.apply.call(e,d,t);return a(h)?h:d}})},665:function(e,t,n){var r=n(666);e.exports={MDXRenderer:r}},666:function(e,t,n){function r(e,t,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&o(i,n.prototype),i}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(36),n(6),n(8),n(40),n(47),n(35),n(10),n(4),n(152),n(34),n(2),n(664),n(664),n(152),n(40),n(47),n(34),n(35),n(36),n(10),n(4),n(6),n(2),n(8);var s=n(0),l=n(87),f=l.useMDXComponents,p=l.mdx,d=n(182).useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,c=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),u=f(n),l=d(t),h=s.useMemo(function(){if(!o)return null;var e=a({React:s,mdx:p},l),t=Object.keys(e),n=t.map(function(t){return e[t]});return r(Function,["_fn"].concat(i(t),[""+o])).apply(void 0,[{}].concat(i(n)))},[o,t]);return s.createElement(h,a({components:u},c))}},667:function(e,t,n){"use strict";(function(e){function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n(156),n(13),n(92),n(12),n(30),n(17),n(7),n(23),n(152),n(37),n(5),n(35),n(10),n(49),n(4),n(6),n(2),n(8),n(11),n(15),Object.defineProperty(t,"__esModule",{value:!0});var o,i,c,a,u=r(n(24)),s=r(n(668)),l=r(n(671)),f=r(n(0)),p=r(n(153)),d="bodyAttributes",h="htmlAttributes",b="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(y).map(function(e){return y[e]}),"charset"),m="cssText",O="href",g="http-equiv",w="innerHTML",j="itemprop",T="name",x="property",E="rel",S="src",C={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},A="defaultTitle",_="defer",k="encodeSpecialCharacters",P="onChangeClientState",L="titleTemplate",I=Object.keys(C).reduce(function(e,t){return e[C[t]]=t,e},{}),R=[y.NOSCRIPT,y.SCRIPT,y.STYLE],D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},N=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},U=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=B(e,y.TITLE),n=B(e,L);if(n&&t)return n.replace(/%s/g,function(){return Array.isArray(t)?t.join(""):t});var r=B(e,A);return t||r||void 0},q=function(e){return B(e,P)||function(){}},W=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return F({},e,t)},{})},$=function(e,t){return t.filter(function(e){return void 0!==e[y.BASE]}).map(function(e){return e[y.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t},[])},K=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&Q("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),c=0;c<i.length;c++){var a=i[c],u=a.toLowerCase();-1===t.indexOf(u)||n===E&&"canonical"===e[n].toLowerCase()||u===E&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(a)||a!==w&&a!==m&&a!==j||(n=a)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),c=0;c<i.length;c++){var a=i[c],u=p({},r[a],o[a]);r[a]=u}return e},[]).reverse()},B=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},V=(o=Date.now(),function(e){var t=Date.now();t-o>16?(o=t,e(t)):setTimeout(function(){V(e)},0)}),X=function(e){return clearTimeout(e)},J="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||V:e.requestAnimationFrame||V,G="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:e.cancelAnimationFrame||X,Q=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Z=null,ee=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,c=e.metaTags,a=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;re(y.BODY,r),re(y.HTML,o),ne(f,p);var d={baseTag:oe(y.BASE,n),linkTags:oe(y.LINK,i),metaTags:oe(y.META,c),noscriptTags:oe(y.NOSCRIPT,a),scriptTags:oe(y.SCRIPT,s),styleTags:oe(y.STYLE,l)},h={},b={};Object.keys(d).forEach(function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(b[e]=d[e].oldTags)}),t&&t(),u(e,h,b)},te=function(e){return Array.isArray(e)?e.join(""):e},ne=function(e,t){void 0!==e&&document.title!==e&&(document.title=te(e)),re(y.TITLE,t)},re=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),c=Object.keys(t),a=0;a<c.length;a++){var u=c[a],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==c.join(",")&&n.setAttribute("data-react-helmet",c.join(","))}},oe=function(e,t){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],c=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===w)n.innerHTML=t.innerHTML;else if(r===m)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[r]?"":t[r];n.setAttribute(r,a)}n.setAttribute("data-react-helmet","true"),o.some(function(e,t){return c=t,n.isEqualNode(e)})?o.splice(c,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},ie=function(e){return Object.keys(e).reduce(function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[C[n]||n]=e[n],t},t)},ae=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=ce(n,r),[f.createElement(y.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ie(n),i=te(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+U(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case d:case h:return{toComponent:function(){return ce(t)},toString:function(){return ie(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach(function(e){var n=C[e]||e;if(n===w||n===m){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),f.createElement(e,o)})}(e,t)},toString:function(){return function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===w||e===m)}).reduce(function(e,t){var o=void 0===r[t]?t:t+'="'+U(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",c=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(c?"/>":">"+i+"</"+e+">")},"")}(e,t,n)}}}},ue=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,c=e.metaTags,a=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:ae(y.BASE,t,r),bodyAttributes:ae(d,n,r),htmlAttributes:ae(h,o,r),link:ae(y.LINK,i,r),meta:ae(y.META,c,r),noscript:ae(y.NOSCRIPT,a,r),script:ae(y.SCRIPT,u,r),style:ae(y.STYLE,s,r),title:ae(y.TITLE,{title:f,titleAttributes:p},r)}},se=s(function(e){return{baseTag:$([O],e),bodyAttributes:W(d,e),defer:B(e,_),encode:B(e,k),htmlAttributes:W(h,e),linkTags:K(y.LINK,[E,O],e),metaTags:K(y.META,[T,v,g,x,j],e),noscriptTags:K(y.NOSCRIPT,[w],e),onChangeClientState:q(e),scriptTags:K(y.SCRIPT,[S,w],e),styleTags:K(y.STYLE,[m],e),title:Y(e),titleAttributes:W(b,e)}},function(e){Z&&G(Z),e.defer?Z=J(function(){ee(e,function(){Z=null})}):(ee(e),Z=null)},ue)(function(){return null}),le=(i=se,a=c=function(e){function t(){return M(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!l(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(r.type){case y.TITLE:return F({},o,((t={})[r.type]=c,t.titleAttributes=F({},i),t));case y.BODY:return F({},o,{bodyAttributes:F({},i)});case y.HTML:return F({},o,{htmlAttributes:F({},i)})}return F({},o,((n={})[r.type]=F({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach(function(t){var r;n=F({},n,((r={})[t]=e[t],r))}),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,i=o.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[I[n]||n]=e[n],t},t)}(H(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=H(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),f.createElement(i,r)},N(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(f.Component),c.propTypes={base:u.object,bodyAttributes:u.object,children:u.oneOfType([u.arrayOf(u.node),u.node]),defaultTitle:u.string,defer:u.bool,encodeSpecialCharacters:u.bool,htmlAttributes:u.object,link:u.arrayOf(u.object),meta:u.arrayOf(u.object),noscript:u.arrayOf(u.object),onChangeClientState:u.func,script:u.arrayOf(u.object),style:u.arrayOf(u.object),title:u.string,titleAttributes:u.object,titleTemplate:u.string},c.defaultProps={defer:!0,encodeSpecialCharacters:!0},c.peek=i.peek,c.rewind=function(){var e=i.rewind();return e||(e=ue({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);le.renderStatic=le.rewind,t.Helmet=le}).call(this,n(89))},668:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n(23),n(11),n(20),n(152),n(37);var o=n(0),i=r(o),c=r(n(669)),a=r(n(670));e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u=[],s=void 0;function l(){s=e(u.map(function(e){return e.props})),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return s},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e},t.prototype.shouldComponentUpdate=function(e){return!a(e,this.props)},t.prototype.componentWillMount=function(){u.push(this),l()},t.prototype.componentDidUpdate=function(){l()},t.prototype.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},t.prototype.render=function(){return i.createElement(r,this.props)},t}(o.Component);return f.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",f.canUseDOM=c.canUseDOM,f}}},669:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},670:function(e,t,n){n(76),n(4),n(6),n(2),n(8),e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),c=Object.keys(t);if(i.length!==c.length)return!1;for(var a=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var s=i[u];if(!a(s))return!1;var l=e[s],f=t[s];if(!1===(o=n?n.call(r,l,f,s):void 0)||void 0===o&&l!==f)return!1}return!0}},671:function(e,t,n){"use strict";n(20),n(60),n(34),n(43),n(14),n(4),n(6),n(2),n(8),n(17);var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,c="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var a,u,s,l=r(t),f=r(n);if(l&&f){if((u=t.length)!=n.length)return!1;for(a=u;0!=a--;)if(!e(t[a],n[a]))return!1;return!0}if(l!=f)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var h=t instanceof RegExp,b=n instanceof RegExp;if(h!=b)return!1;if(h&&b)return t.toString()==n.toString();var y=o(t);if((u=y.length)!==o(n).length)return!1;for(a=u;0!=a--;)if(!i.call(n,y[a]))return!1;if(c&&t instanceof Element&&n instanceof Element)return t===n;for(a=u;0!=a--;)if(!("_owner"===(s=y[a])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},672:function(e,t,n){(function(t){n(17),n(11),n(7),n(14),n(4),n(6),n(34),n(43),n(2);var r="Expected a function",o="__lodash_hash_undefined__",i=1/0,c="[object Function]",a="[object GeneratorFunction]",u="[object Symbol]",s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,l=/^\w*$/,f=/^\./,p=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,d=/\\(\\)?/g,h=/^\[object .+?Constructor\]$/,b="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,v=b||y||Function("return this")();var m,O=Array.prototype,g=Function.prototype,w=Object.prototype,j=v["__core-js_shared__"],T=(m=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+m:"",x=g.toString,E=w.hasOwnProperty,S=w.toString,C=RegExp("^"+x.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),A=v.Symbol,_=O.splice,k=U(v,"Map"),P=U(Object,"create"),L=A?A.prototype:void 0,I=L?L.toString:void 0;function R(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function D(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function M(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function N(e,t){for(var n,r,o=e.length;o--;)if((n=e[o][0])===(r=t)||n!=n&&r!=r)return o;return-1}function F(e,t){for(var n,r=0,o=(t=function(e,t){if($(e))return!1;var n=typeof e;if("number"==n||"symbol"==n||"boolean"==n||null==e||B(e))return!0;return l.test(e)||!s.test(e)||null!=t&&e in Object(t)}(t,e)?[t]:$(n=t)?n:Y(n)).length;null!=e&&r<o;)e=e[q(t[r++])];return r&&r==o?e:void 0}function H(e){return!(!K(e)||(t=e,T&&T in t))&&(function(e){var t=K(e)?S.call(e):"";return t==c||t==a}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}(e)?C:h).test(function(e){if(null!=e){try{return x.call(e)}catch(t){}try{return e+""}catch(t){}}return""}(e));var t}function z(e,t){var n,r,o=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function U(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return H(n)?n:void 0}R.prototype.clear=function(){this.__data__=P?P(null):{}},R.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},R.prototype.get=function(e){var t=this.__data__;if(P){var n=t[e];return n===o?void 0:n}return E.call(t,e)?t[e]:void 0},R.prototype.has=function(e){var t=this.__data__;return P?void 0!==t[e]:E.call(t,e)},R.prototype.set=function(e,t){return this.__data__[e]=P&&void 0===t?o:t,this},D.prototype.clear=function(){this.__data__=[]},D.prototype.delete=function(e){var t=this.__data__,n=N(t,e);return!(n<0||(n==t.length-1?t.pop():_.call(t,n,1),0))},D.prototype.get=function(e){var t=this.__data__,n=N(t,e);return n<0?void 0:t[n][1]},D.prototype.has=function(e){return N(this.__data__,e)>-1},D.prototype.set=function(e,t){var n=this.__data__,r=N(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},M.prototype.clear=function(){this.__data__={hash:new R,map:new(k||D),string:new R}},M.prototype.delete=function(e){return z(this,e).delete(e)},M.prototype.get=function(e){return z(this,e).get(e)},M.prototype.has=function(e){return z(this,e).has(e)},M.prototype.set=function(e,t){return z(this,e).set(e,t),this};var Y=W(function(e){var t;e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(B(e))return I?I.call(e):"";var t=e+"";return"0"==t&&1/e==-i?"-0":t}(t);var n=[];return f.test(e)&&n.push(""),e.replace(p,function(e,t,r,o){n.push(r?o.replace(d,"$1"):t||e)}),n});function q(e){if("string"==typeof e||B(e))return e;var t=e+"";return"0"==t&&1/e==-i?"-0":t}function W(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError(r);var n=function n(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var c=e.apply(this,r);return n.cache=i.set(o,c),c};return n.cache=new(W.Cache||M),n}W.Cache=M;var $=Array.isArray;function K(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function B(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&S.call(e)==u}e.exports=function(e,t,n){var r=null==e?void 0:F(e,t);return void 0===r?n:r}}).call(this,n(89))}}]);
//# sourceMappingURL=2-cd34918f2c0a078f71a2.js.map