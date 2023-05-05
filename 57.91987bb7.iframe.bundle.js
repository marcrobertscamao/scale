/*! For license information please see 57.91987bb7.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"../components/dist/esm/index-713f92a5.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../components/dist/esm/scale-telekom-footer_2.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_telekom_footer",(function(){return TelekomFooter})),__webpack_require__.d(__webpack_exports__,"scale_telekom_footer_content",(function(){return TelekomFooterContent}));__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../components/dist/esm/index-6d95a4bc.js"),_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../components/dist/esm/index-713f92a5.js");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}var TelekomFooter=function(){function TelekomFooter(hostRef){_classCallCheck(this,TelekomFooter),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.i)(this,hostRef),this.type="standard"}return _createClass(TelekomFooter,[{key:"render",value:function render(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.c,{class:Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_2__.a)("scale-telekom-footer",{})},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("slot",null))}},{key:"hostElement",get:function get(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.f)(this)}}]),TelekomFooter}();TelekomFooter.style=".scale-telekom-footer{--font-size:var(--telekom-typography-font-size-caption);--font-color:var(--telekom-color-text-and-icon-white-standard);--background-footer:var(--telekom-color-ui-black);--background-footer-minimal:var(--telekom-color-background-canvas);--_nav-items-bottom-margin:var(--telekom-spacing-unit-x6);--_nav-items-spacing:var(--telekom-spacing-unit-x3)}.scale-telekom-footer :where(ul),.scale-telekom-footer[type='minimal'] :where(ul){display:flex;flex-wrap:wrap;align-items:flex-start;flex-direction:column;gap:var(--_nav-items-spacing);padding:0;margin:0;width:100%;color:var(--font-color);list-style:none}.scale-telekom-footer[type='minimal'] scale-telekom-footer-content{--background-footer:var(--background-footer-minimal);--_font-color:var(--telekom-color-text-and-icon-additional);--_display-logo:none;--_navigation-container-padding:var(--telekom-spacing-unit-x4) 0\n    var(--telekom-spacing-unit-x4) 0;--_nav-items-bottom-margin:0}.scale-telekom-footer :where(a,span),.scale-telekom-footer[type='minimal'] :where(a,span){display:flex;justify-content:center;font-size:var(--font-size);color:var(--font-color);line-height:140%;text-decoration:none;border:1px solid rgba(0, 0, 0, 0);border-radius:2px}.scale-telekom-footer[type='minimal'] :where(a,span){color:var(--telekom-color-text-and-icon-standard)}.scale-telekom-footer[type='minimal'] :where(ul){margin-bottom:0}.scale-telekom-footer[type='minimal'] a:hover{color:var(--telekom-color-text-and-icon-primary-hovered)}.scale-telekom-footer[type='minimal'] a:active{color:var(--telekom-color-text-and-icon-primary-pressed)}.scale-telekom-footer :where(a:hover){border-radius:0;border-bottom:1px solid var(--font-color)}.scale-telekom-footer :where(a:active){color:var(--telekom-color-text-and-icon-white-additional);border-bottom:1px solid var(--telekom-color-text-and-icon-white-additional)}.scale-telekom-footer[type='minimal'] :where(a:focus-visible){outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);outline-offset:1px}.scale-telekom-footer:not([type='minimal']) :where(a:focus-visible){outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-on-dark-background);outline-offset:1px}.scale-telekom-footer:not([type='minimal']) scale-telekom-footer-extended-navigation-column :where(a:focus-visible){outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);outline-offset:1px}@media screen and (min-width: 640px){.scale-telekom-footer :where(ul),.scale-telekom-footer[type='minimal'] :where(ul){display:flex;flex-direction:row;align-items:center;list-style:none;column-gap:var(--telekom-spacing-unit-x2);row-gap:var(--telekom-spacing-unit-x1)}}@media screen and (min-width: 1040px){.scale-telekom-footer :where(ul),.scale-telekom-footer[type='minimal'] :where(ul){column-gap:var(--_nav-items-spacing);row-gap:var(--telekom-spacing-unit-x2)}}";var TelekomFooterContent=function(){function TelekomFooterContent(hostRef){_classCallCheck(this,TelekomFooterContent),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.i)(this,hostRef)}return _createClass(TelekomFooterContent,[{key:"render",value:function render(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.c,null,Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("footer",null,Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("slot",{name:"extended-navigation"}),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",{part:"base"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",{part:"logo"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("scale-logo",{part:"app-logo",variant:"white",style:{"--focus-outline":"var(--telekom-line-weight-highlight) solid var(--telekom-color-functional-focus-on-dark-background)"},transparent:!0})),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",{part:"body"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",{part:"notice"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("slot",{name:"notice"})),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",{part:"navigation"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("slot",{name:"navigation"}))))))}}]),TelekomFooterContent}();TelekomFooterContent.style=":host{--_max-width-container:var(--scl-grid-max-width, 1680px);--_spacing-x-container:var(--telekom-spacing-unit-x4);--_nav-items-bottom-margin:var(--telekom-spacing-unit-x6);--_nav-items-spacing:var(--telekom-spacing-unit-x3);--_logo-top-margin:var(--telekom-spacing-unit-x10);--_logo-bottom-margin:var(--telekom-spacing-unit-x10);--_font-color:var(--telekom-color-text-and-icon-white-standard);--_font-size:var(--telekom-typography-font-size-caption);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard);--_display-logo:flex;--_navigation-container-padding:0 0 0 0}footer{width:100%;background-color:var(--background-footer);display:flex;justify-content:center;flex-direction:column;padding-bottom:var(--_nav-items-bottom-margin);align-items:center}[part~='base']{height:100%;max-width:var(--_max-width-container);padding-left:var(--_spacing-x-container);padding-right:var(--_spacing-x-container);position:relative;display:flex;flex:1;flex-direction:column;width:-moz-available;width:-webkit-fill-available;width:fill-available}[part~='logo']{display:var(--_display-logo);justify-content:center;height:100%;width:100%;margin-top:var(--_logo-top-margin);margin-bottom:var(--_logo-bottom-margin)}[part~='body']{display:flex;flex-direction:column;width:100%;padding:var(--_navigation-container-padding);margin:0;bottom:0}[part~='notice']{color:var(--_font-color);display:flex;flex:1 0 auto;margin-bottom:var(--telekom-spacing-unit-x5);font-size:var(--_font-size);line-height:140%;margin-right:var(--telekom-spacing-unit-x5)}[part~='app-logo']{--logo-size:var(--telekom-spacing-unit-x9)}.scale-icon{height:16px;width:16px;margin-right:9px}@media screen and (min-width: 640px){:host{--_logo-top-margin:var(--telekom-spacing-unit-x8);--_logo-bottom-margin:var(--telekom-spacing-unit-x12);--_nav-items-spacing:var(--telekom-spacing-unit-x4)}[part~='body']{flex-direction:column}[part~='navigation'] ul{list-style:none;display:flex;flex-direction:row;align-items:center}[part~='notice']{margin-bottom:var(--telekom-spacing-unit-x2)}}@media screen and (min-width: 1040px){:host{--_logo-top-margin:var(--telekom-spacing-unit-x12);--_logo-bottom-margin:var(--telekom-spacing-unit-x18);--_nav-items-spacing:var(--telekom-spacing-unit-x6);--_slim-padding:var(--telekom-spacing-unit-x6);--_font-size:var(--telekom-typography-font-size-body);--_spacing-x-container:var(--telekom-spacing-unit-x6)}[part~='body']{flex-direction:row}:host [part~='app-logo']{--logo-size:var(--telekom-spacing-unit-x11)}:host [part~='notice']{margin-bottom:0}}@media screen and (min-width: 1296px){:host{--_logo-top-margin:var(--telekom-spacing-unit-x14);--_logo-bottom-margin:var(--telekom-spacing-unit-x20);--_nav-items-bottom-margin:var(--telekom-spacing-unit-x8);--_nav-items-spacing:var(--telekom-spacing-unit-x12);--_slim-padding:var(--telekom-spacing-unit-x8)}:host [part~='app-logo']{--logo-size:var(--telekom-spacing-unit-x12)}}@media screen and (min-width: 1680px){:host{--_logo-top-margin:var(--telekom-spacing-unit-x18);--_logo-bottom-margin:96px}:host [part~='app-logo']{--logo-size:var(--telekom-spacing-unit-x14)}}"}}]);
//# sourceMappingURL=57.91987bb7.iframe.bundle.js.map