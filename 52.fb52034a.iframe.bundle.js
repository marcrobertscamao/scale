/*! For license information please see 52.fb52034a.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"../components/dist/esm/index-713f92a5.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../components/dist/esm/scale-loading-spinner.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_loading_spinner",(function(){return LoadingSpinner}));__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../components/dist/esm/index-6d95a4bc.js"),_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../components/dist/esm/index-713f92a5.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var i=0,LoadingSpinner=function(){function LoadingSpinner(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,LoadingSpinner),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.i)(this,hostRef),this.variant="primary",this.alignment="horizontal",this.size="small"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(LoadingSpinner,[{key:"componentWillLoad",value:function componentWillLoad(){i++}},{key:"render",value:function render(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.c,null,Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",{part:this.getBasePartMap(),class:this.getCssClassMap()},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",{part:"container",class:"spinner__container"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("svg",{class:"spinner__circle",viewBox:"0 0 50 50","aria-hidden":"true"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"4"})),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("svg",{class:"spinner__circle-background",viewBox:"0 0 50 50","aria-hidden":"true"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"4"}))),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",{class:"sr-only","aria-live":"polite",id:"spinner-label-"+i},this.text||"Loading"),this.text?Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",{part:"text",class:"spinner__text","aria-hidden":"true"},this.text):Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",null)))}},{key:"getBasePartMap",value:function getBasePartMap(){return this.getCssOrBasePartMap("basePart")}},{key:"getCssClassMap",value:function getCssClassMap(){return this.getCssOrBasePartMap("css")}},{key:"getCssOrBasePartMap",value:function getCssOrBasePartMap(mode){var prefix="basePart"===mode?"":"spinner--";return Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_2__.a)("spinner",this.alignment&&prefix+"alignment-"+this.alignment,this.variant&&prefix+"variant-"+this.variant,this.size&&prefix+"size-"+this.size,this.text&&prefix+"text")}}]),LoadingSpinner}();LoadingSpinner.style=":host{display:inline-flex;--size-outer-small:28px;--size-outer-large:56px;--size-inner-small:28px;--size-inner-large:56px;--line-height-size-small:24px;--line-height-size-large:48px;--font-weight:var(--telekom-typography-font-weight-bold);--font-size:var(--telekom-typography-font-size-body);--color-circle-primary:var(--telekom-color-primary-standard);--color-circle-primary-inner:var(--telekom-color-ui-subtle);--color-text-primary:var(--telekom-color-text-and-icon-additional);--color-circle-white:var(--telekom-color-ui-base);--color-circle-white-inner:var(--telekom-color-ui-regular);--color-text-white:var(--telekom-color-text-and-icon-white-standard)}.sr-only{position:absolute;left:-10000px;overflow:hidden}.spinner{display:inline-flex;align-items:center}.spinner.spinner--alignment-vertical{flex-direction:column}.spinner .spinner__text{font-weight:var(--font-weight);font-size:var(--font-size);color:var(--color-text-primary)}.spinner.spinner--variant-white .spinner__text{color:var(--color-text-white)}.spinner.spinner--alignment-horizontal .spinner__text{display:flex;align-self:center;margin-left:var(--spacing);margin-top:3px}.spinner.spinner--alignment-horizontal.spinner--size-small .spinner__text{line-height:var(--line-height-size-small);padding-left:12px}.spinner.spinner--alignment-horizontal.spinner--size-large .spinner__text{line-height:var(--line-height-size-large);margin-top:5px;padding-left:12px}.spinner.spinner--alignment-vertical .spinner__text{margin-top:var(--spacing)}.spinner.spinner--alignment-vertical.spinner--size-small .spinner__container{height:28px;width:28px;padding-bottom:4px}.spinner.spinner--alignment-vertical.spinner--size-large .spinner__container{height:56px;width:56px;padding-bottom:4px}.spinner.spinner--alignment-horizontal.spinner--size-small .spinner__container{height:28px;width:28px;text-align:left}.spinner.spinner--alignment-horizontal.spinner--size-large .spinner__container{height:56px;width:56px;text-align:left}.spinner .spinner__container .spinner__circle{animation:rotate 2s linear infinite;z-index:2;position:absolute;width:var(--size-inner-small);height:var(--size-inner-small)}.spinner .spinner__container .spinner__circle-background{animation:rotate 2s linear infinite;position:absolute;width:var(--size-outer-small);height:var(--size-outer-small)}.spinner.spinner--size-large .spinner__container .spinner__circle-background{width:var(--size-outer-large);height:var(--size-outer-large)}.spinner.spinner--size-large .spinner__container .spinner__circle{width:var(--size-inner-large);height:var(--size-inner-large)}.spinner.spinner--variant-white .spinner__container .spinner__circle-background .path{stroke:var(--color-circle-white-inner)}.spinner .spinner__container .spinner__circle-background .path{stroke:var(--color-circle-primary-inner)}.spinner.spinner--variant-white .spinner__container .spinner__circle .path{stroke:white}.spinner .spinner__container .spinner__circle .path{animation:dash 1.5s ease-in-out infinite;stroke:var(--color-circle-primary)}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35}100%{stroke-dasharray:90, 150;stroke-dashoffset:-124}}@media screen and (forced-colors: active), (-ms-high-contrast: active){.spinner .spinner__container .spinner__circle-background .path{stroke:none}.spinner .spinner__container .spinner__circle .path{stroke:white}.spinner.spinner--variant-white .spinner__container .spinner__circle-background .path{stroke:none}.spinner.spinner--variant-white .spinner__container .spinner__circle .path{stroke:white}}"}}]);
//# sourceMappingURL=52.fb52034a.iframe.bundle.js.map