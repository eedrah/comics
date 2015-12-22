(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";require("./src");

},{"./src":32}],2:[function(require,module,exports){
"use strict";function sheetifyInsertCSS(s){css(s)}var css=require("insert-css");module.exports=sheetifyInsertCSS;

},{"insert-css":3}],3:[function(require,module,exports){
var inserted={};module.exports=function(e,t){if(!inserted[e]){inserted[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var s=document.getElementsByTagName("head")[0];t&&t.prepend?s.insertBefore(n,s.childNodes[0]):s.appendChild(n)}};

},{}],4:[function(require,module,exports){
var createElement=require("./vdom/create-element.js");module.exports=createElement;

},{"./vdom/create-element.js":14}],5:[function(require,module,exports){
var h=require("./virtual-hyperscript/index.js");module.exports=h;

},{"./virtual-hyperscript/index.js":17}],6:[function(require,module,exports){
module.exports=function(e){var t,n=String.prototype.split,l=/()??/.exec("")[1]===e;return t=function(t,r,i){if("[object RegExp]"!==Object.prototype.toString.call(r))return n.call(t,r,i);var s,g,o,p,c=[],u=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.extended?"x":"")+(r.sticky?"y":""),x=0,r=new RegExp(r.source,u+"g");for(t+="",l||(s=new RegExp("^"+r.source+"$(?!\\s)",u)),i=i===e?-1>>>0:i>>>0;(g=r.exec(t))&&(o=g.index+g[0].length,!(o>x&&(c.push(t.slice(x,g.index)),!l&&g.length>1&&g[0].replace(s,function(){for(var t=1;t<arguments.length-2;t++)arguments[t]===e&&(g[t]=e)}),g.length>1&&g.index<t.length&&Array.prototype.push.apply(c,g.slice(1)),p=g[0].length,x=o,c.length>=i)));)r.lastIndex===g.index&&r.lastIndex++;return x===t.length?(p||!r.test(""))&&c.push(""):c.push(t.slice(x)),c.length>i?c.slice(0,i):c}}();

},{}],7:[function(require,module,exports){
"use strict";function EvStore(e){var r=e[hashKey];return r||(r=e[hashKey]={}),r}var OneVersionConstraint=require("individual/one-version"),MY_VERSION="7";OneVersionConstraint("ev-store",MY_VERSION);var hashKey="__EV_STORE_KEY@"+MY_VERSION;module.exports=EvStore;

},{"individual/one-version":9}],8:[function(require,module,exports){
(function (global){
"use strict";function Individual(o,n){return o in root?root[o]:(root[o]=n,n)}var root="undefined"!=typeof window?window:"undefined"!=typeof global?global:{};module.exports=Individual;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],9:[function(require,module,exports){
"use strict";function OneVersion(n,e,i){var r="__INDIVIDUAL_ONE_VERSION_"+n,o=r+"_ENFORCE_SINGLETON",a=Individual(o,e);if(a!==e)throw new Error("Can only have one copy of "+n+".\nYou already have version "+a+" installed.\nThis means you cannot install version "+e);return Individual(r,i)}var Individual=require("./index.js");module.exports=OneVersion;

},{"./index.js":8}],10:[function(require,module,exports){
(function (global){
var topLevel="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},minDoc=require("min-document");if("undefined"!=typeof document)module.exports=document;else{var doccy=topLevel["__GLOBAL_DOCUMENT_CACHE@4"];doccy||(doccy=topLevel["__GLOBAL_DOCUMENT_CACHE@4"]=minDoc),module.exports=doccy}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-document":33}],11:[function(require,module,exports){
"use strict";module.exports=function(t){return"object"==typeof t&&null!==t};

},{}],12:[function(require,module,exports){
function isArray(r){return"[object Array]"===toString.call(r)}var nativeIsArray=Array.isArray,toString=Object.prototype.toString;module.exports=nativeIsArray||isArray;

},{}],13:[function(require,module,exports){
function applyProperties(o,t,e){for(var r in t){var i=t[r];void 0===i?removeProperty(o,r,i,e):isHook(i)?(removeProperty(o,r,i,e),i.hook&&i.hook(o,r,e?e[r]:void 0)):isObject(i)?patchObject(o,t,e,r,i):o[r]=i}}function removeProperty(o,t,e,r){if(r){var i=r[t];if(isHook(i))i.unhook&&i.unhook(o,t,e);else if("attributes"===t)for(var v in i)o.removeAttribute(v);else if("style"===t)for(var s in i)o.style[s]="";else"string"==typeof i?o[t]="":o[t]=null}}function patchObject(o,t,e,r,i){var v=e?e[r]:void 0;if("attributes"!==r){if(v&&isObject(v)&&getPrototype(v)!==getPrototype(i))return void(o[r]=i);isObject(o[r])||(o[r]={});var s="style"===r?"":void 0;for(var n in i){var p=i[n];o[r][n]=void 0===p?s:p}}else for(var c in i){var u=i[c];void 0===u?o.removeAttribute(c):o.setAttribute(c,u)}}function getPrototype(o){return Object.getPrototypeOf?Object.getPrototypeOf(o):o.__proto__?o.__proto__:o.constructor?o.constructor.prototype:void 0}var isObject=require("is-object"),isHook=require("../vnode/is-vhook.js");module.exports=applyProperties;

},{"../vnode/is-vhook.js":21,"is-object":11}],14:[function(require,module,exports){
function createElement(e,r){var t=r?r.document||document:document,n=r?r.warn:null;if(e=handleThunk(e).a,isWidget(e))return e.init();if(isVText(e))return t.createTextNode(e.text);if(!isVNode(e))return n&&n("Item is not a valid virtual dom node",e),null;var i=null===e.namespace?t.createElement(e.tagName):t.createElementNS(e.namespace,e.tagName),a=e.properties;applyProperties(i,a);for(var d=e.children,l=0;l<d.length;l++){var o=createElement(d[l],r);o&&i.appendChild(o)}return i}var document=require("global/document"),applyProperties=require("./apply-properties"),isVNode=require("../vnode/is-vnode.js"),isVText=require("../vnode/is-vtext.js"),isWidget=require("../vnode/is-widget.js"),handleThunk=require("../vnode/handle-thunk.js");module.exports=createElement;

},{"../vnode/handle-thunk.js":19,"../vnode/is-vnode.js":22,"../vnode/is-vtext.js":23,"../vnode/is-widget.js":24,"./apply-properties":13,"global/document":10}],15:[function(require,module,exports){
"use strict";function EvHook(o){return this instanceof EvHook?void(this.value=o):new EvHook(o)}var EvStore=require("ev-store");module.exports=EvHook,EvHook.prototype.hook=function(o,t){var e=EvStore(o),r=t.substr(3);e[r]=this.value},EvHook.prototype.unhook=function(o,t){var e=EvStore(o),r=t.substr(3);e[r]=void 0};

},{"ev-store":7}],16:[function(require,module,exports){
"use strict";function SoftSetHook(o){return this instanceof SoftSetHook?void(this.value=o):new SoftSetHook(o)}module.exports=SoftSetHook,SoftSetHook.prototype.hook=function(o,t){o[t]!==this.value&&(o[t]=this.value)};

},{}],17:[function(require,module,exports){
"use strict";function h(e,r,i){var t,n,o,s,a=[];return!i&&isChildren(r)&&(i=r,n={}),n=n||r||{},t=parseTag(e,n),n.hasOwnProperty("key")&&(o=n.key,n.key=void 0),n.hasOwnProperty("namespace")&&(s=n.namespace,n.namespace=void 0),"INPUT"!==t||s||!n.hasOwnProperty("value")||void 0===n.value||isHook(n.value)||(n.value=softSetHook(n.value)),transformProperties(n),void 0!==i&&null!==i&&addChild(i,a,t,n),new VNode(t,n,a,o,s)}function addChild(e,r,i,t){if("string"==typeof e)r.push(new VText(e));else if("number"==typeof e)r.push(new VText(String(e)));else if(isChild(e))r.push(e);else{if(!isArray(e)){if(null===e||void 0===e)return;throw UnexpectedVirtualElement({foreignObject:e,parentVnode:{tagName:i,properties:t}})}for(var n=0;n<e.length;n++)addChild(e[n],r,i,t)}}function transformProperties(e){for(var r in e)if(e.hasOwnProperty(r)){var i=e[r];if(isHook(i))continue;"ev-"===r.substr(0,3)&&(e[r]=evHook(i))}}function isChild(e){return isVNode(e)||isVText(e)||isWidget(e)||isVThunk(e)}function isChildren(e){return"string"==typeof e||isArray(e)||isChild(e)}function UnexpectedVirtualElement(e){var r=new Error;return r.type="virtual-hyperscript.unexpected.virtual-element",r.message="Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n"+errorString(e.foreignObject)+".\nThe parent vnode is:\n"+errorString(e.parentVnode),r.foreignObject=e.foreignObject,r.parentVnode=e.parentVnode,r}function errorString(e){try{return JSON.stringify(e,null,"    ")}catch(r){return String(e)}}var isArray=require("x-is-array"),VNode=require("../vnode/vnode.js"),VText=require("../vnode/vtext.js"),isVNode=require("../vnode/is-vnode"),isVText=require("../vnode/is-vtext"),isWidget=require("../vnode/is-widget"),isHook=require("../vnode/is-vhook"),isVThunk=require("../vnode/is-thunk"),parseTag=require("./parse-tag.js"),softSetHook=require("./hooks/soft-set-hook.js"),evHook=require("./hooks/ev-hook.js");module.exports=h;

},{"../vnode/is-thunk":20,"../vnode/is-vhook":21,"../vnode/is-vnode":22,"../vnode/is-vtext":23,"../vnode/is-widget":24,"../vnode/vnode.js":26,"../vnode/vtext.js":27,"./hooks/ev-hook.js":15,"./hooks/soft-set-hook.js":16,"./parse-tag.js":18,"x-is-array":12}],18:[function(require,module,exports){
"use strict";function parseTag(s,a){if(!s)return"DIV";var t=!a.hasOwnProperty("id"),e=split(s,classIdSplit),r=null;notClassId.test(e[1])&&(r="DIV");var l,n,i,p;for(p=0;p<e.length;p++)n=e[p],n&&(i=n.charAt(0),r?"."===i?(l=l||[],l.push(n.substring(1,n.length))):"#"===i&&t&&(a.id=n.substring(1,n.length)):r=n);return l&&(a.className&&l.push(a.className),a.className=l.join(" ")),a.namespace?r:r.toUpperCase()}var split=require("browser-split"),classIdSplit=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,notClassId=/^\.|#/;module.exports=parseTag;

},{"browser-split":6}],19:[function(require,module,exports){
function handleThunk(e,n){var r=e,i=n;return isThunk(n)&&(i=renderThunk(n,e)),isThunk(e)&&(r=renderThunk(e,null)),{a:r,b:i}}function renderThunk(e,n){var r=e.vnode;if(r||(r=e.vnode=e.render(n)),!(isVNode(r)||isVText(r)||isWidget(r)))throw new Error("thunk did not return a valid node");return r}var isVNode=require("./is-vnode"),isVText=require("./is-vtext"),isWidget=require("./is-widget"),isThunk=require("./is-thunk");module.exports=handleThunk;

},{"./is-thunk":20,"./is-vnode":22,"./is-vtext":23,"./is-widget":24}],20:[function(require,module,exports){
function isThunk(n){return n&&"Thunk"===n.type}module.exports=isThunk;

},{}],21:[function(require,module,exports){
function isHook(o){return o&&("function"==typeof o.hook&&!o.hasOwnProperty("hook")||"function"==typeof o.unhook&&!o.hasOwnProperty("unhook"))}module.exports=isHook;

},{}],22:[function(require,module,exports){
function isVirtualNode(e){return e&&"VirtualNode"===e.type&&e.version===version}var version=require("./version");module.exports=isVirtualNode;

},{"./version":25}],23:[function(require,module,exports){
function isVirtualText(e){return e&&"VirtualText"===e.type&&e.version===version}var version=require("./version");module.exports=isVirtualText;

},{"./version":25}],24:[function(require,module,exports){
function isWidget(e){return e&&"Widget"===e.type}module.exports=isWidget;

},{}],25:[function(require,module,exports){
module.exports="2";

},{}],26:[function(require,module,exports){
function VirtualNode(e,i,o,s,r){this.tagName=e,this.properties=i||noProperties,this.children=o||noChildren,this.key=null!=s?String(s):void 0,this.namespace="string"==typeof r?r:null;var t,n=o&&o.length||0,h=0,a=!1,d=!1,u=!1;for(var k in i)if(i.hasOwnProperty(k)){var l=i[k];isVHook(l)&&l.unhook&&(t||(t={}),t[k]=l)}for(var p=0;n>p;p++){var v=o[p];isVNode(v)?(h+=v.count||0,!a&&v.hasWidgets&&(a=!0),!d&&v.hasThunks&&(d=!0),u||!v.hooks&&!v.descendantHooks||(u=!0)):!a&&isWidget(v)?"function"==typeof v.destroy&&(a=!0):!d&&isThunk(v)&&(d=!0)}this.count=n+h,this.hasWidgets=a,this.hasThunks=d,this.hooks=t,this.descendantHooks=u}var version=require("./version"),isVNode=require("./is-vnode"),isWidget=require("./is-widget"),isThunk=require("./is-thunk"),isVHook=require("./is-vhook");module.exports=VirtualNode;var noProperties={},noChildren=[];VirtualNode.prototype.version=version,VirtualNode.prototype.type="VirtualNode";

},{"./is-thunk":20,"./is-vhook":21,"./is-vnode":22,"./is-widget":24,"./version":25}],27:[function(require,module,exports){
function VirtualText(t){this.text=String(t)}var version=require("./version");module.exports=VirtualText,VirtualText.prototype.version=version,VirtualText.prototype.type="VirtualText";

},{"./version":25}],28:[function(require,module,exports){
"use strict";var h=require("virtual-dom/h"),panel=require("./panel"),commentary=require("./commentary");module.exports=function(r){for(var e=r.toString();e.length<4;)e="0"+e;return h("div",[panel(e),commentary(e)])};

},{"./commentary":29,"./panel":30,"virtual-dom/h":5}],29:[function(require,module,exports){
require("../../node_modules/sheetify/insert-css")("._4a1cb79c  .hiddenContent {\n  width: 400px;\n  height: 400px;\n  margin: 0 auto;\n  position: relative;\n  overflow: scroll;\n}\n\n._4a1cb79c  iframe {\n  width: 400px;\n  height: 1540px;\n  top: -1140px;\n  position: absolute;\n  border: none;\n}\n  /* width:446px;\n   height:246px;\n   overflow:hidden;\n   position:relative;\n{\n   position:absolute;\n   top:-412px;\n   left:-318px;\n   width:1280px;\n   height:1200px;\n*/\n");var h=require("virtual-dom/h"),className="_4a1cb79c";module.exports=function(n){return h("div",{className:className},h("div",{className:"hiddenContent"},h("iframe",{src:"http://www.darthsanddroids.net/episodes/"+n+".html"})))};

},{"../../node_modules/sheetify/insert-css":2,"virtual-dom/h":5}],30:[function(require,module,exports){
require("../../node_modules/sheetify/insert-css")("._33bb46bc  img {\n  width: 100%;\n}\n");var h=require("virtual-dom/h"),className="_33bb46bc";module.exports=function(s){return h("div",{className:className},h("img",{src:"http://www.darthsanddroids.net/comics/darths"+s+".jpg"}))};

},{"../../node_modules/sheetify/insert-css":2,"virtual-dom/h":5}],31:[function(require,module,exports){
require("../../node_modules/sheetify/insert-css")(":root, :root body {\n  padding: 0;\n  margin: 0;\n  background-color: black;\n}\n");for(var h=require("virtual-dom/h"),comic=require("./comic"),className="_c8383662",comics=[],i=236;350>=i;i++)comics.push(comic(i));module.exports=function(){return h("div",{className:className},comics)};

},{"../../node_modules/sheetify/insert-css":2,"./comic":28,"virtual-dom/h":5}],32:[function(require,module,exports){
"use strict";var createElement=require("virtual-dom/create-element"),root=require("./components/root"),tree=root(),rootNode=createElement(tree);document.body.appendChild(rootNode);

},{"./components/root":31,"virtual-dom/create-element":4}],33:[function(require,module,exports){

},{}]},{},[1]);
