!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.TextComplete=e():t.TextComplete=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=12)}([function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(2)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(7),o=n(5);t.exports=function(t){return r(o(t))}},function(t,e,n){n(48);var r=n(46)(n(14),n(47),"data-v-c37a4876",null);t.exports=r.exports},function(t,e,n){"use strict";function r(t){var e=window.getComputedStyle(t),n=e.getPropertyValue("box-sizing"),r=parseFloat(e.getPropertyValue("padding-bottom"))+parseFloat(e.getPropertyValue("padding-top")),o=parseFloat(e.getPropertyValue("border-bottom-width"))+parseFloat(e.getPropertyValue("border-top-width"));return{contextStyle:s.map(function(t){return t+":"+e.getPropertyValue(t)}).join(";"),paddingSize:r,borderSize:o,boxSizing:n}}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;i||(i=document.createElement("textarea"),document.body.appendChild(i));var o=r(t),s=o.paddingSize,c=o.borderSize,u=o.boxSizing,l=o.contextStyle;i.setAttribute("style",l+";"+a),i.value=t.value||t.placeholder||"";var f=i.scrollHeight;"border-box"===u?f+=c:"content-box"===u&&(f-=s),i.value="";var d=i.scrollHeight-s;if(null!==e){var p=d*e;"border-box"===u&&(p=p+s+c),f=Math.max(p,f)}if(null!==n){var h=d*n;"border-box"===u&&(h=h+s+c),f=Math.min(h,f)}return{height:f+"px"}}e.a=o;var i=void 0,a="\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",s=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(10),o=n.n(r);e.default=o.a},function(t,e,n){"use strict";var r="UP";e.a={methods:{keyEvent:function(t){if(this.showList){switch(this.getCode(t)){case"ENTER":this.actived.value&&(t.preventDefault(),this.emitEnterEvent());break;case r:t.preventDefault(),this.emitMoveEvent(r);break;case"DOWN":t.preventDefault(),this.emitMoveEvent("DOWN")}this.$emit("key-down",t)}},keyUp:function(t){this.$emit("key-up",t)},emitEnterEvent:function(){this.selectList(this.actived.value),this.showList=!1,this.actived.value="",this.actived.index=0},emitMoveEvent:function(t){var e=this.list.length;t==r?this.actived.index=""==this.actived.value||0==this.actived.index?e-1:this.actived.index-1:"DOWN"==t&&(this.actived.index=""==this.actived.value||this.actived.index==e-1?0:this.actived.index+1),this.actived.value=this.list[this.actived.index]},getCode:function(t){return 8===t.keyCode?"BS":9===t.keyCode?"ENTER":13===t.keyCode?"ENTER":38===t.keyCode?r:40===t.keyCode?"DOWN":83===t.keyCode&&t.shiftKey?"DOWN":87===t.keyCode&&t.shiftKey?r:"OTHER"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(15),o=n.n(r),i=n(11),a=n(45),s=n.n(a),c=n(13);e.default={mixins:[c.a],props:{resize:String,value:String,boxClass:String,areaClass:String,placeholder:String,name:{type:String,default:"textcomplete"},autosize:{type:[Boolean,Object],default:!1},lineHeight:{type:Number,default:20},strategies:{type:Array,default:function(){return[]}},selectedDefaultFirst:{type:Boolean,default:!0},rows:{type:Number,default:2}},data:function(){return{id:Math.random().toString(36).substr(5),content:this.value,showList:!1,cursor:0,list:[],matched:[],match:"",actived:{value:"",index:0},template:function(){},replace:function(){},textareaCalcStyle:{}}},mounted:function(){this.resizeTextarea()},computed:{textareaStyle:function(){return o()({"line-height":this.lineHeight+"px",resize:this.resize},this.textareaCalcStyle)}},watch:{value:function(){this.change(),this.resizeTextarea()}},methods:{handleFocus:function(t){this.$emit("focus",t)},handleBlur:function(t){this.$emit("blur",t)},resizeTextarea:function(){var t=this.autosize;if(t){var e=t.minRows,r=t.maxRows;this.textareaCalcStyle=n.i(i.a)(this.$refs.textarea,e,r)}},updateValue:function(t){this.$refs.textarea.value=t,this.$emit("input",t)},change:function(){var t=this,e=this;this.strategies.forEach(function(n){var r=document.getElementById("autocomplete-"+e.id),o=document.getElementById("v-textcomplete-"+e.id),i=o.value.substring(0,o.selectionEnd),a="";if(null!=(a=i.match(n.match))){var c=a[2].replace(/(^\s*)|(\s*$)/g,""),u=e.getCursorPosition(o),l=e.getElementScroll(o),f=s()(o,u),d=f.top+e.lineHeight-l.top,p=f.left+o.offsetLeft,h=document.documentElement.offsetHeight;e.template=n.template,e.match=n.match,e.replace=n.replace,void 0!=n.list&&n.list.length>0&&""==a[2]?e.list=n.list:n.remote?(e.list=[],n.remote(c,function(t){0!==t.length&&(e.list=t,n.search(c,e.getList),e.showList=!0)})):n.search(c,e.getList),h-o.getBoundingClientRect().top<e.lineHeight*t.list.length?r.style.top=-e.lineHeight*t.list.length-2*d+"px":r.style.top=d+"px",r.style.left=p+"px",e.matched.push(a)}else e.matched.push(null)});var n=this.matched.filter(function(t){return null!=t}).length>0;this.showList=!!(n&&this.list.length>0),this.showList||(this.actived.value="",this.actived.index=0),this.selectedDefaultFirst&&(this.actived.value=this.list[0]),this.matched=[]},getElementOffset:function(t){var e=t.getBoundingClientRect(),n=t.ownerDocument,r=n.defaultView,o=n.documentElement,i={top:e.top+r.pageYOffset,left:e.left+r.pageXOffset};return o&&(i.top-=o.clientTop,i.left-=o.clientLeft),i},getList:function(t){this.list=t},selectList:function(t){var e=document.getElementById("v-textcomplete-"+this.id),n=this.getCursorPosition(e),r=e.value.substring(0,e.selectionEnd),o=e.value.slice(e.selectionEnd);if(!r.match(this.match))return this.setCaretPosition(e,n),this.showList=!1,this.actived.value="",void(this.actived.index=0);var i=r.replace(this.match,this.replace(t));this.updateValue(i+o),e.focus();var a=i.length;this.setCaretPosition(e,a),this.showList=!1,this.actived.value="",this.actived.index=0},getCursorPosition:function(t){var e=0;if(document.selection){t.focus();var n=document.selection.createRange();n.moveStart("character",-t.value.length),e=n.text.length}else(t.selectionStart||"0"==t.selectionStart)&&(e=t.selectionStart);return e},getElementScroll:function(t){return{top:t.scrollTop,left:t.scrollLeft}},setCaretPosition:function(t,e){if(t.setSelectionRange)t.focus(),setTimeout(function(){return t.setSelectionRange(e,e)},1);else if(t.createTextRange){var n=t.createTextRange();n.collapse(!0),n.moveEnd("character",e),n.moveStart("character",e),n.select()}}}}},function(t,e,n){t.exports={default:n(16),__esModule:!0}},function(t,e,n){n(42),t.exports=n(0).Object.assign},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(9),o=n(38),i=n(37);t.exports=function(t){return function(e,n,a){var s,c=r(e),u=o(c.length),l=i(a,u);if(t&&n!=n){for(;u>l;)if((s=c[l++])!=s)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(17);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(4),o=n(3).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(3),o=n(0),i=n(21),a=n(25),s=n(6),c=function(t,e,n){var u,l,f,d=t&c.F,p=t&c.G,h=t&c.S,v=t&c.P,m=t&c.B,g=t&c.W,x=p?o:o[e]||(o[e]={}),b=x.prototype,y=p?r:h?r[e]:(r[e]||{}).prototype;p&&(n=e);for(u in n)(l=!d&&y&&void 0!==y[u])&&s(x,u)||(f=l?y[u]:n[u],x[u]=p&&"function"!=typeof y[u]?n[u]:m&&l?i(f,r):g&&y[u]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((x.virtual||(x.virtual={}))[u]=f,t&c.R&&b&&!b[u]&&a(b,u,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,n){var r=n(29),o=n(34);t.exports=n(1)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(1)&&!n(2)(function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a})},function(t,e){t.exports=!0},function(t,e,n){"use strict";var r=n(32),o=n(30),i=n(33),a=n(39),s=n(7),c=Object.assign;t.exports=!c||n(2)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=a(t),c=arguments.length,u=1,l=o.f,f=i.f;c>u;)for(var d,p=s(arguments[u++]),h=l?r(p).concat(l(p)):r(p),v=h.length,m=0;v>m;)f.call(p,d=h[m++])&&(n[d]=p[d]);return n}:c},function(t,e,n){var r=n(18),o=n(26),i=n(40),a=Object.defineProperty;e.f=n(1)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(6),o=n(9),i=n(19)(!1),a=n(35)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),c=0,u=[];for(n in s)n!=a&&r(s,n)&&u.push(n);for(;e.length>c;)r(s,n=e[c++])&&(~i(u,n)||u.push(n));return u}},function(t,e,n){var r=n(31),o=n(23);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(36)("keys"),o=n(41);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(0),o=n(3),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(27)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(8),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(8),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(5);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(24);r(r.S+r.F,"Object",{assign:n(28)})},function(t,e,n){e=t.exports=n(44)(),e.push([t.i,"\n.complete-box[data-v-c37a4876] {\n  position: relative;\n}\ntextarea[data-v-c37a4876] {\n  overflow: auto;\n}\n.v-textcomplete__inner[data-v-c37a4876] {\n  color: #1f2d3d;\n  border: 1px solid #bfcbd9;\n  padding: 5px 7px;\n  font-size: 14px;\n  line-height: 1.5;\n  box-sizing: border-box;\n  width: 100%;\n  font-size: 14px;\n  color: #1f2d3d;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #bfcbd9;\n  border-radius: 4px;\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.v-textcomplete__inner[data-v-c37a4876]:hover {\n    border-color: #8391a5;\n}\n.v-textcomplete__inner[data-v-c37a4876]:focus {\n    outline: 0;\n    border-color: #20a0ff;\n}\n.v-textcomplete__inner[data-v-c37a4876]::-webkit-input-placeholder {\n    color: #97a8be;\n}\n.v-textcomplete__inner[data-v-c37a4876]::-moz-placeholder {\n    color: #97a8be;\n}\n.v-textcomplete__inner[data-v-c37a4876]:-ms-input-placeholder {\n    color: #97a8be;\n}\n.v-textcomplete__inner[data-v-c37a4876]::placeholder {\n    color: #97a8be;\n}\n.autocomplete[data-v-c37a4876] {\n  background-color: #fff;\n  position: absolute;\n  z-index: 1000;\n}\n.autocomplete ul[data-v-c37a4876] {\n  list-style: none;\n  padding-left: 0;\n  border: 1px #f3f5f7 solid;\n  border-radius: 3px;\n  margin: 0;\n}\n.autocomplete ul li[data-v-c37a4876] {\n    padding-left: 5px;\n    padding-right: 5px;\n    border-bottom: 1px solid #f3f5f7;\n    cursor: pointer;\n}\n.autocomplete ul li[data-v-c37a4876]:hover {\n      background-color: #f3f5f7;\n}\n.autocomplete ul li span small[data-v-c37a4876] {\n      padding-left: 10px;\n}\n.autocomplete ul .active[data-v-c37a4876] {\n    background-color: #f3f5f7;\n}\n",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e){!function(){function e(t,e,i){if(!r)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var a=i&&i.debug||!1;if(a){var s=document.querySelector("#input-textarea-caret-position-mirror-div");s&&s.parentNode.removeChild(s)}var c=document.createElement("div");c.id="input-textarea-caret-position-mirror-div",document.body.appendChild(c);var u=c.style,l=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,f="INPUT"===t.nodeName;u.whiteSpace="pre-wrap",f||(u.wordWrap="break-word"),u.position="absolute",a||(u.visibility="hidden"),n.forEach(function(t){f&&"lineHeight"===t?u.lineHeight=l.height:u[t]=l[t]}),o?t.scrollHeight>parseInt(l.height)&&(u.overflowY="scroll"):u.overflow="hidden",c.textContent=t.value.substring(0,e),f&&(c.textContent=c.textContent.replace(/\s/g," "));var d=document.createElement("span");d.textContent=t.value.substring(e)||".",c.appendChild(d);var p={top:d.offsetTop+parseInt(l.borderTopWidth),left:d.offsetLeft+parseInt(l.borderLeftWidth),height:parseInt(l.lineHeight)};return a?d.style.backgroundColor="#aaa":document.body.removeChild(c),p}var n=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],r="undefined"!=typeof window,o=r&&null!=window.mozInnerScreenX;void 0!==t&&void 0!==t.exports?t.exports=e:r&&(window.getCaretCoordinates=e)}()},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,i=t.default);var s="function"==typeof i?i.options:i;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),r){var c=s.computed||(s.computed={});Object.keys(r).forEach(function(t){var e=r[t];c[t]=function(){return e}})}return{esModule:o,exports:i,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["complete-box",t.boxClass]},[n("textarea",{ref:"textarea",class:["v-textcomplete__inner",t.areaClass],style:t.textareaStyle,attrs:{id:"v-textcomplete-"+t.id,placeholder:t.placeholder,rows:t.rows,name:t.name},domProps:{value:t.value},on:{input:function(e){return t.updateValue(e.target.value)},focus:t.handleFocus,blur:t.handleBlur,keydown:t.keyEvent,keyup:t.keyUp}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"autocomplete transition",attrs:{id:"autocomplete-"+t.id}},[n("ul",t._l(t.list,function(e,r){return n("li",{class:t.actived.value==e?"active":"",domProps:{innerHTML:t._s(t.template(e))},on:{click:function(n){return t.selectList(e)}}})}),0)])])},staticRenderFns:[]}},function(t,e,n){var r=n(43);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(49)("91351f40",r,!0)},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function i(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var i=p++;r=d||(d=o()),e=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function a(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function s(t,e){var n=e.css,r=e.media,o=e.sourceMap;if(r&&t.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(50),l={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var o=u(t,e);return r(o),function(e){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=l[a.id];s.refs--,n.push(s)}e?(o=u(t,e),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete l[s.id]}}}};var g=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s=i[1],c=i[2],u=i[3],l={id:t+":"+o,css:s,media:c,sourceMap:u};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}}])});