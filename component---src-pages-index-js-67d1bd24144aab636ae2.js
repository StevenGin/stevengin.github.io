(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RXBc:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return v}));var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),i=n("vOnD"),s=n("T58H"),u=n.n(s),c=n("Kvkj"),p=n("ydnR"),l=i.b.div.withConfig({displayName:"pages__Hero",componentId:"sc-quizfj-0"})(["margin-bottom:20vh;@media (max-width:","px){margin-bottom:0;}"],p.a),f=i.b.p.withConfig({displayName:"pages__TextHome",componentId:"sc-quizfj-1"})(["color:var(--dark-color-light);display:block;font-size:22px;line-height:1.6;margin-bottom:10vh;margin-left:auto;margin-right:auto;max-width:28em;text-align:center;@media (max-width:","px){font-size:19px;margin-bottom:7vh;}"],p.a),d=i.b.div.withConfig({displayName:"pages__Post",componentId:"sc-quizfj-2"})(["border-bottom:1px solid lightgray;margin-bottom:50px;@media (max-width:","px){padding-left:0;}"],p.a);function v(t){var e=t.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.l,{title:"Blog"}),o.a.createElement(c.g,null),o.a.createElement(c.k,null,o.a.createElement(l,null,o.a.createElement(f,null,"Hi, I'm"),o.a.createElement(c.i,null,"Steven Gin"),o.a.createElement(f,null,o.a.createElement(u.a,{options:{strings:["Data Scientist","Forecasting Expert","Machine Learning Engineer","Indie Video Game Developer"],autoStart:!0,loop:!0,deleteSpeed:100}}))),e.allMarkdownRemark.edges.map((function(t){var e=t.node;return o.a.createElement(a.Link,{to:e.fields.slug,key:e.id},o.a.createElement(d,null,o.a.createElement(c.h,null,e.frontmatter.title),o.a.createElement(c.m,null,e.excerpt),o.a.createElement(c.n,null,e.frontmatter.date)))}))))}},T58H:function(t,e,n){(function(e){var r;n("j+VE"),"undefined"!=typeof self&&self,t.exports=(r=n("q1tI"),function(){var t={7403:function(t,e,n){"use strict";n.d(e,{default:function(){return O}});var r=n(4087),o=n.n(r),a=function(t){return new RegExp(/<[a-z][\s\S]*>/i).test(t)},i=function(t){var e=document.createElement("div");return e.innerHTML=t,e.childNodes},s=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},u="TYPE_CHARACTER",c="REMOVE_CHARACTER",p="REMOVE_ALL",l="REMOVE_LAST_VISIBLE_NODE",f="PAUSE_FOR",d="CALL_FUNCTION",v="ADD_HTML_TAG_ELEMENT",h="CHANGE_DELETE_SPEED",y="CHANGE_DELAY",b="CHANGE_CURSOR",m="PASTE_STRING",g="HTML_TAG";function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t){return function(t){if(Array.isArray(t))return E(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=function(){function t(e,n){var _=this;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),j(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),j(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),j(this,"setupWrapperElement",(function(){_.state.elements.container&&(_.state.elements.wrapper.className=_.options.wrapperClassName,_.state.elements.cursor.className=_.options.cursorClassName,_.state.elements.cursor.innerHTML=_.options.cursor,_.state.elements.container.innerHTML="",_.state.elements.container.appendChild(_.state.elements.wrapper),_.state.elements.container.appendChild(_.state.elements.cursor))})),j(this,"start",(function(){return _.state.eventLoopPaused=!1,_.runEventLoop(),_})),j(this,"pause",(function(){return _.state.eventLoopPaused=!0,_})),j(this,"stop",(function(){return _.state.eventLoop&&((0,r.cancel)(_.state.eventLoop),_.state.eventLoop=null),_})),j(this,"pauseFor",(function(t){return _.addEventToQueue(f,{ms:t}),_})),j(this,"typeOutAllStrings",(function(){return"string"==typeof _.options.strings?(_.typeString(_.options.strings).pauseFor(_.options.pauseFor),_):(_.options.strings.forEach((function(t){_.typeString(t).pauseFor(_.options.pauseFor).deleteAll(_.options.deleteSpeed)})),_)})),j(this,"typeString",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(a(t))return _.typeOutHTMLString(t,e);if(t){var n=_.options||{},r=n.stringSplitter,o="function"==typeof r?r(t):t.split("");_.typeCharacters(o,e)}return _})),j(this,"pasteString",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a(t)?_.typeOutHTMLString(t,e,!0):(t&&_.addEventToQueue(m,{character:t,node:e}),_)})),j(this,"typeOutHTMLString",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=i(t);if(r.length>0)for(var o=0;o<r.length;o++){var a=r[o],s=a.innerHTML;a&&3!==a.nodeType?(a.innerHTML="",_.addEventToQueue(v,{node:a,parentNode:e}),n?_.pasteString(s,a):_.typeString(s,a)):a.textContent&&(n?_.pasteString(a.textContent,e):_.typeString(a.textContent,e))}return _})),j(this,"deleteAll",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return _.addEventToQueue(p,{speed:t}),_})),j(this,"changeDeleteSpeed",(function(t){if(!t)throw new Error("Must provide new delete speed");return _.addEventToQueue(h,{speed:t}),_})),j(this,"changeDelay",(function(t){if(!t)throw new Error("Must provide new delay");return _.addEventToQueue(y,{delay:t}),_})),j(this,"changeCursor",(function(t){if(!t)throw new Error("Must provide new cursor");return _.addEventToQueue(b,{cursor:t}),_})),j(this,"deleteChars",(function(t){if(!t)throw new Error("Must provide amount of characters to delete");for(var e=0;e<t;e++)_.addEventToQueue(c);return _})),j(this,"callFunction",(function(t,e){if(!t||"function"!=typeof t)throw new Error("Callbak must be a function");return _.addEventToQueue(d,{cb:t,thisArg:e}),_})),j(this,"typeCharacters",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t||!Array.isArray(t))throw new Error("Characters must be an array");return t.forEach((function(t){_.addEventToQueue(u,{character:t,node:e})})),_})),j(this,"removeCharacters",(function(t){if(!t||!Array.isArray(t))throw new Error("Characters must be an array");return t.forEach((function(){_.addEventToQueue(c)})),_})),j(this,"addEventToQueue",(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return _.addEventToStateProperty(t,e,n,"eventQueue")})),j(this,"addReverseCalledEvent",(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=_.options.loop;return r?_.addEventToStateProperty(t,e,n,"reverseCalledEvents"):_})),j(this,"addEventToStateProperty",(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:t,eventArgs:e||{}};return _.state[r]=n?[o].concat(x(_.state[r])):[].concat(x(_.state[r]),[o]),_})),j(this,"runEventLoop",(function(){_.state.lastFrameTime||(_.state.lastFrameTime=Date.now());var t=Date.now(),e=t-_.state.lastFrameTime;if(!_.state.eventQueue.length){if(!_.options.loop)return;_.state.eventQueue=x(_.state.calledEvents),_.state.calledEvents=[],_.options=w({},_.state.initialOptions)}if(_.state.eventLoop=o()(_.runEventLoop),!_.state.eventLoopPaused){if(_.state.pauseUntil){if(t<_.state.pauseUntil)return;_.state.pauseUntil=null}var n,r=x(_.state.eventQueue),a=r.shift();if(!(e<=(n=a.eventName===l||a.eventName===c?"natural"===_.options.deleteSpeed?s(40,80):_.options.deleteSpeed:"natural"===_.options.delay?s(120,160):_.options.delay))){var i=a.eventName,E=a.eventArgs;switch(_.logInDevMode({currentEvent:a,state:_.state,delay:n}),i){case m:case u:var j=E.character,O=E.node,T=document.createTextNode(j),A=T;_.options.onCreateTextNode&&"function"==typeof _.options.onCreateTextNode&&(A=_.options.onCreateTextNode(j,T)),A&&(O?O.appendChild(A):_.state.elements.wrapper.appendChild(A)),_.state.visibleNodes=[].concat(x(_.state.visibleNodes),[{type:"TEXT_NODE",character:j,node:A}]);break;case c:r.unshift({eventName:l,eventArgs:{removingCharacterNode:!0}});break;case f:var S=a.eventArgs.ms;_.state.pauseUntil=Date.now()+parseInt(S);break;case d:var C=a.eventArgs,N=C.cb,P=C.thisArg;N.call(P,{elements:_.state.elements});break;case v:var k=a.eventArgs,D=k.node,L=k.parentNode;L?L.appendChild(D):_.state.elements.wrapper.appendChild(D),_.state.visibleNodes=[].concat(x(_.state.visibleNodes),[{type:g,node:D,parentNode:L||_.state.elements.wrapper}]);break;case p:var R=_.state.visibleNodes,M=E.speed,z=[];M&&z.push({eventName:h,eventArgs:{speed:M,temp:!0}});for(var F=0,I=R.length;F<I;F++)z.push({eventName:l,eventArgs:{removingCharacterNode:!1}});M&&z.push({eventName:h,eventArgs:{speed:_.options.deleteSpeed,temp:!0}}),r.unshift.apply(r,z);break;case l:var H=a.eventArgs.removingCharacterNode;if(_.state.visibleNodes.length){var Q=_.state.visibleNodes.pop(),U=Q.type,q=Q.node,B=Q.character;_.options.onRemoveNode&&"function"==typeof _.options.onRemoveNode&&_.options.onRemoveNode({node:q,character:B}),q&&q.parentNode.removeChild(q),U===g&&H&&r.unshift({eventName:l,eventArgs:{}})}break;case h:_.options.deleteSpeed=a.eventArgs.speed;break;case y:_.options.delay=a.eventArgs.delay;break;case b:_.options.cursor=a.eventArgs.cursor,_.state.elements.cursor.innerHTML=a.eventArgs.cursor}_.options.loop&&(a.eventName===l||a.eventArgs&&a.eventArgs.temp||(_.state.calledEvents=[].concat(x(_.state.calledEvents),[a]))),_.state.eventQueue=r,_.state.lastFrameTime=t}}})),e)if("string"==typeof e){var E=document.querySelector(e);if(!E)throw new Error("Could not find container element");this.state.elements.container=E}else this.state.elements.container=e;n&&(this.options=w(w({},this.options),n)),this.state.initialOptions=w({},this.options),this.init()}var e;return(e=[{key:"init",value:function(){var t;this.setupWrapperElement(),this.addEventToQueue(b,{cursor:this.options.cursor},!0),this.addEventToQueue(p,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||((t=document.createElement("style")).appendChild(document.createTextNode(".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}")),document.head.appendChild(t),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(t){this.options.devMode&&console.log(t)}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(t.prototype,e),t}()},8552:function(t,e,n){var r=n(852)(n(5639),"DataView");t.exports=r},1989:function(t,e,n){var r=n(1789),o=n(401),a=n(7667),i=n(1327),s=n(1866);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,t.exports=u},8407:function(t,e,n){var r=n(7040),o=n(4125),a=n(2117),i=n(7518),s=n(4705);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,t.exports=u},7071:function(t,e,n){var r=n(852)(n(5639),"Map");t.exports=r},3369:function(t,e,n){var r=n(4785),o=n(1285),a=n(6e3),i=n(9916),s=n(5265);function u(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}u.prototype.clear=r,u.prototype.delete=o,u.prototype.get=a,u.prototype.has=i,u.prototype.set=s,t.exports=u},3818:function(t,e,n){var r=n(852)(n(5639),"Promise");t.exports=r},8525:function(t,e,n){var r=n(852)(n(5639),"Set");t.exports=r},8668:function(t,e,n){var r=n(3369),o=n(619),a=n(2385);function i(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,t.exports=i},6384:function(t,e,n){var r=n(8407),o=n(7465),a=n(3779),i=n(7599),s=n(4758),u=n(4309);function c(t){var e=this.__data__=new r(t);this.size=e.size}c.prototype.clear=o,c.prototype.delete=a,c.prototype.get=i,c.prototype.has=s,c.prototype.set=u,t.exports=c},2705:function(t,e,n){var r=n(5639).Symbol;t.exports=r},1149:function(t,e,n){var r=n(5639).Uint8Array;t.exports=r},577:function(t,e,n){var r=n(852)(n(5639),"WeakMap");t.exports=r},4963:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,a=[];++n<r;){var i=t[n];e(i,n,t)&&(a[o++]=i)}return a}},4636:function(t,e,n){var r=n(2545),o=n(5694),a=n(1469),i=n(4144),s=n(5776),u=n(6719),c=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=a(t),p=!n&&o(t),l=!n&&!p&&i(t),f=!n&&!p&&!l&&u(t),d=n||p||l||f,v=d?r(t.length,String):[],h=v.length;for(var y in t)!e&&!c.call(t,y)||d&&("length"==y||l&&("offset"==y||"parent"==y)||f&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||s(y,h))||v.push(y);return v}},2488:function(t){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},2908:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},8470:function(t,e,n){var r=n(7813);t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},8866:function(t,e,n){var r=n(2488),o=n(1469);t.exports=function(t,e,n){var a=e(t);return o(t)?a:r(a,n(t))}},4239:function(t,e,n){var r=n(2705),o=n(9607),a=n(2333),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},9454:function(t,e,n){var r=n(4239),o=n(7005);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},939:function(t,e,n){var r=n(2492),o=n(7005);t.exports=function t(e,n,a,i,s){return e===n||(null==e||null==n||!o(e)&&!o(n)?e!=e&&n!=n:r(e,n,a,i,t,s))}},2492:function(t,e,n){var r=n(6384),o=n(7114),a=n(8351),i=n(6096),s=n(4160),u=n(1469),c=n(4144),p=n(6719),l="[object Arguments]",f="[object Array]",d="[object Object]",v=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,h,y,b){var m=u(t),g=u(e),_=m?f:s(t),w=g?f:s(e),x=(_=_==l?d:_)==d,E=(w=w==l?d:w)==d,j=_==w;if(j&&c(t)){if(!c(e))return!1;m=!0,x=!1}if(j&&!x)return b||(b=new r),m||p(t)?o(t,e,n,h,y,b):a(t,e,_,n,h,y,b);if(!(1&n)){var O=x&&v.call(t,"__wrapped__"),T=E&&v.call(e,"__wrapped__");if(O||T){var A=O?t.value():t,S=T?e.value():e;return b||(b=new r),y(A,S,n,h,b)}}return!!j&&(b||(b=new r),i(t,e,n,h,y,b))}},8458:function(t,e,n){var r=n(3560),o=n(5346),a=n(3218),i=n(346),s=/^\[object .+?Constructor\]$/,u=Function.prototype,c=Object.prototype,p=u.toString,l=c.hasOwnProperty,f=RegExp("^"+p.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(r(t)?f:s).test(i(t))}},8749:function(t,e,n){var r=n(4239),o=n(1780),a=n(7005),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&o(t.length)&&!!i[r(t)]}},280:function(t,e,n){var r=n(5726),o=n(6916),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))a.call(t,n)&&"constructor"!=n&&e.push(n);return e}},2545:function(t){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},1717:function(t){t.exports=function(t){return function(e){return t(e)}}},4757:function(t){t.exports=function(t,e){return t.has(e)}},4429:function(t,e,n){var r=n(5639)["__core-js_shared__"];t.exports=r},7114:function(t,e,n){var r=n(8668),o=n(2908),a=n(4757);t.exports=function(t,e,n,i,s,u){var c=1&n,p=t.length,l=e.length;if(p!=l&&!(c&&l>p))return!1;var f=u.get(t),d=u.get(e);if(f&&d)return f==e&&d==t;var v=-1,h=!0,y=2&n?new r:void 0;for(u.set(t,e),u.set(e,t);++v<p;){var b=t[v],m=e[v];if(i)var g=c?i(m,b,v,e,t,u):i(b,m,v,t,e,u);if(void 0!==g){if(g)continue;h=!1;break}if(y){if(!o(e,(function(t,e){if(!a(y,e)&&(b===t||s(b,t,n,i,u)))return y.push(e)}))){h=!1;break}}else if(b!==m&&!s(b,m,n,i,u)){h=!1;break}}return u.delete(t),u.delete(e),h}},8351:function(t,e,n){var r=n(2705),o=n(1149),a=n(7813),i=n(7114),s=n(8776),u=n(1814),c=r?r.prototype:void 0,p=c?c.valueOf:void 0;t.exports=function(t,e,n,r,c,l,f){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!l(new o(t),new o(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var d=s;case"[object Set]":var v=1&r;if(d||(d=u),t.size!=e.size&&!v)return!1;var h=f.get(t);if(h)return h==e;r|=2,f.set(t,e);var y=i(d(t),d(e),r,c,l,f);return f.delete(t),y;case"[object Symbol]":if(p)return p.call(t)==p.call(e)}return!1}},6096:function(t,e,n){var r=n(8234),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,a,i,s){var u=1&n,c=r(t),p=c.length;if(p!=r(e).length&&!u)return!1;for(var l=p;l--;){var f=c[l];if(!(u?f in e:o.call(e,f)))return!1}var d=s.get(t),v=s.get(e);if(d&&v)return d==e&&v==t;var h=!0;s.set(t,e),s.set(e,t);for(var y=u;++l<p;){var b=t[f=c[l]],m=e[f];if(a)var g=u?a(m,b,f,e,t,s):a(b,m,f,t,e,s);if(!(void 0===g?b===m||i(b,m,n,a,s):g)){h=!1;break}y||(y="constructor"==f)}if(h&&!y){var _=t.constructor,w=e.constructor;_==w||!("constructor"in t)||!("constructor"in e)||"function"==typeof _&&_ instanceof _&&"function"==typeof w&&w instanceof w||(h=!1)}return s.delete(t),s.delete(e),h}},1957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},8234:function(t,e,n){var r=n(8866),o=n(9551),a=n(3674);t.exports=function(t){return r(t,a,o)}},5050:function(t,e,n){var r=n(7019);t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},852:function(t,e,n){var r=n(8458),o=n(7801);t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},9607:function(t,e,n){var r=n(2705),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var o=i.call(t);return r&&(e?t[s]=n:delete t[s]),o}},9551:function(t,e,n){var r=n(4963),o=n(479),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,s=i?function(t){return null==t?[]:(t=Object(t),r(i(t),(function(e){return a.call(t,e)})))}:o;t.exports=s},4160:function(t,e,n){var r=n(8552),o=n(7071),a=n(3818),i=n(8525),s=n(577),u=n(4239),c=n(346),p="[object Map]",l="[object Promise]",f="[object Set]",d="[object WeakMap]",v="[object DataView]",h=c(r),y=c(o),b=c(a),m=c(i),g=c(s),_=u;(r&&_(new r(new ArrayBuffer(1)))!=v||o&&_(new o)!=p||a&&_(a.resolve())!=l||i&&_(new i)!=f||s&&_(new s)!=d)&&(_=function(t){var e=u(t),n="[object Object]"==e?t.constructor:void 0,r=n?c(n):"";if(r)switch(r){case h:return v;case y:return p;case b:return l;case m:return f;case g:return d}return e}),t.exports=_},7801:function(t){t.exports=function(t,e){return null==t?void 0:t[e]}},1789:function(t,e,n){var r=n(4536);t.exports=function(){this.__data__=r?r(null):{},this.size=0}},401:function(t){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},7667:function(t,e,n){var r=n(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},1327:function(t,e,n){var r=n(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},1866:function(t,e,n){var r=n(4536);t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},5776:function(t){var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&e.test(t))&&t>-1&&t%1==0&&t<n}},7019:function(t){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},5346:function(t,e,n){var r,o=n(4429),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!a&&a in t}},5726:function(t){var e=Object.prototype;t.exports=function(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||e)}},7040:function(t){t.exports=function(){this.__data__=[],this.size=0}},4125:function(t,e,n){var r=n(8470),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():o.call(e,n,1),--this.size,0))}},2117:function(t,e,n){var r=n(8470);t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},7518:function(t,e,n){var r=n(8470);t.exports=function(t){return r(this.__data__,t)>-1}},4705:function(t,e,n){var r=n(8470);t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},4785:function(t,e,n){var r=n(1989),o=n(8407),a=n(7071);t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},1285:function(t,e,n){var r=n(5050);t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},6e3:function(t,e,n){var r=n(5050);t.exports=function(t){return r(this,t).get(t)}},9916:function(t,e,n){var r=n(5050);t.exports=function(t){return r(this,t).has(t)}},5265:function(t,e,n){var r=n(5050);t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},8776:function(t){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}},4536:function(t,e,n){var r=n(852)(Object,"create");t.exports=r},6916:function(t,e,n){var r=n(5569)(Object.keys,Object);t.exports=r},1167:function(t,e,n){t=n.nmd(t);var r=n(1957),o=e&&!e.nodeType&&e,a=o&&t&&!t.nodeType&&t,i=a&&a.exports===o&&r.process,s=function(){try{return a&&a.require&&a.require("util").types||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=s},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5569:function(t){t.exports=function(t,e){return function(n){return t(e(n))}}},5639:function(t,e,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},619:function(t){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},2385:function(t){t.exports=function(t){return this.__data__.has(t)}},1814:function(t){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}},7465:function(t,e,n){var r=n(8407);t.exports=function(){this.__data__=new r,this.size=0}},3779:function(t){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},7599:function(t){t.exports=function(t){return this.__data__.get(t)}},4758:function(t){t.exports=function(t){return this.__data__.has(t)}},4309:function(t,e,n){var r=n(8407),o=n(7071),a=n(3369);t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var i=n.__data__;if(!o||i.length<199)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new a(i)}return n.set(t,e),this.size=n.size,this}},346:function(t){var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},7813:function(t){t.exports=function(t,e){return t===e||t!=t&&e!=e}},5694:function(t,e,n){var r=n(9454),o=n(7005),a=Object.prototype,i=a.hasOwnProperty,s=a.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(t){return o(t)&&i.call(t,"callee")&&!s.call(t,"callee")};t.exports=u},1469:function(t){var e=Array.isArray;t.exports=e},8612:function(t,e,n){var r=n(3560),o=n(1780);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},4144:function(t,e,n){t=n.nmd(t);var r=n(5639),o=n(5062),a=e&&!e.nodeType&&e,i=a&&t&&!t.nodeType&&t,s=i&&i.exports===a?r.Buffer:void 0,u=(s?s.isBuffer:void 0)||o;t.exports=u},8446:function(t,e,n){var r=n(939);t.exports=function(t,e){return r(t,e)}},3560:function(t,e,n){var r=n(4239),o=n(3218);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},1780:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3218:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},6719:function(t,e,n){var r=n(8749),o=n(1717),a=n(1167),i=a&&a.isTypedArray,s=i?o(i):r;t.exports=s},3674:function(t,e,n){var r=n(4636),o=n(280),a=n(8612);t.exports=function(t){return a(t)?r(t):o(t)}},479:function(t){t.exports=function(){return[]}},5062:function(t){t.exports=function(){return!1}},75:function(t){(function(){var n,r,o,a,i,s;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:null!=e&&e.hrtime?(t.exports=function(){return(n()-i)/1e6},r=e.hrtime,a=(n=function(){var t;return 1e9*(t=r())[0]+t[1]})(),s=1e9*e.uptime(),i=a-s):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)},2703:function(t,e,n){"use strict";var r=n(414);function o(){}function a(){}a.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(t,e,n){t.exports=n(2703)()},414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4087:function(t,e,n){for(var r=n(75),o="undefined"==typeof window?n.g:window,a=["moz","webkit"],i="AnimationFrame",s=o["request"+i],u=o["cancel"+i]||o["cancelRequest"+i],c=0;!s&&c<a.length;c++)s=o[a[c]+"Request"+i],u=o[a[c]+"Cancel"+i]||o[a[c]+"CancelRequest"+i];if(!s||!u){var p=0,l=0,f=[];s=function(t){if(0===f.length){var e=r(),n=Math.max(0,16.666666666666668-(e-p));p=n+e,setTimeout((function(){var t=f.slice(0);f.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(p)}catch(t){setTimeout((function(){throw t}),0)}}),Math.round(n))}return f.push({handle:++l,callback:t,cancelled:!1}),l},u=function(t){for(var e=0;e<f.length;e++)f[e].handle===t&&(f[e].cancelled=!0)}}t.exports=function(t){return s.call(o,t)},t.exports.cancel=function(){u.apply(o,arguments)},t.exports.polyfill=function(t){t||(t=o),t.requestAnimationFrame=s,t.cancelAnimationFrame=u}},9297:function(t){"use strict";t.exports=r}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,{a:e}),e},o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t};var a={};return function(){"use strict";o.d(a,{default:function(){return h}});var t=o(9297),e=o.n(t),n=(o(5697),o(7403)),r=o(8446),i=o.n(r);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return l(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(v,t);var r,o,a,s=(o=v,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=f(o);if(a){var n=f(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return p(this,t)});function v(){var t;u(this,v);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return d(l(t=s.call.apply(s,[this].concat(n))),"state",{instance:null}),t}return(r=[{key:"componentDidMount",value:function(){var t=this,e=new n.default(this.typewriter,this.props.options);this.setState({instance:e},(function(){var n=t.props.onInit;n&&n(e)}))}},{key:"componentDidUpdate",value:function(t){i()(this.props.options,t.options)||this.setState({instance:new n.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var t=this,n=this.props.component;return e().createElement(n,{ref:function(e){return t.typewriter=e},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(v.prototype,r),v}(t.Component);v.defaultProps={component:"div"};var h=v}(),a.default}())}).call(this,n("8oxB"))},bFeb:function(t,e,n){n("I+eb")({global:!0},{globalThis:n("2oRo")})},"j+VE":function(t,e,n){n("bFeb")}}]);
//# sourceMappingURL=component---src-pages-index-js-67d1bd24144aab636ae2.js.map