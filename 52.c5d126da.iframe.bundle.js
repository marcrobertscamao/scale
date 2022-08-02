/*! For license information please see 52.c5d126da.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"../components/dist/esm/index-713f92a5.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../components/dist/esm/scale-divider.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_divider",(function(){return Divider}));__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_3408babe_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../components/dist/esm/index-3408babe.js"),_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../components/dist/esm/index-713f92a5.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Divider=function(){function Divider(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Divider),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_1__.h)(this,hostRef),this.vertical=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Divider,[{key:"render",value:function render(){return Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_1__.f)(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_1__.b,null,this.styles&&Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_1__.f)("style",null,this.styles),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_1__.f)("div",{class:this.getCssClassMap(),"aria-hidden":"true",part:Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_2__.a)("base",this.vertical&&"vertical")},this.vertical?Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_1__.f)("span",{class:"divider__vertical",part:"rule-vertical"}):Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_1__.f)("hr",{class:"divider__horizontal",part:"rule-horizontal"})))}},{key:"getCssClassMap",value:function getCssClassMap(){return Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_2__.a)("divider",this.vertical&&"divider--vertical")}}]),Divider}();Divider.style=":host{--width:100%;--height:100%;--spacing:var(--telekom-spacing-unit-x3);--color:var(--telekom-color-ui-faint);--border-width:var(--telekom-spacing-unit-x025);--min-height-vertical:var(--telekom-spacing-unit-x6);width:var(--width);height:var(--height)}.divider{padding:var(--spacing)}.divider--vertical{display:inline-flex;height:inherit}.divider__horizontal{margin:0;border:0;border-top:var(--border-width) solid var(--color)}.divider__vertical{display:inline-flex;height:inherit;min-height:var(--min-height-vertical);border-left:var(--border-width) solid var(--color)}"}}]);
//# sourceMappingURL=52.c5d126da.iframe.bundle.js.map