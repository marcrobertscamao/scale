(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"../components/dist/esm/scale-helper-text.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_helper_text",(function(){return HelperText}));__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../components/dist/esm/index-6d95a4bc.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var HelperText=function(){function HelperText(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,HelperText),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.i)(this,hostRef),this.variant="informational"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(HelperText,[{key:"renderHelperIcon",value:function renderHelperIcon(){var variant=this.variant;return"informational"===variant||"warning"===variant?Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("scale-icon-alert-information",null):"danger"===variant?Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("scale-icon-alert-error",null):"success"===variant?Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("scale-icon-alert-success",null):void 0}},{key:"render",value:function render(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.c,null,Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",{class:{"helper-text":!0,"helper-text--informational":"informational"===this.variant,"helper-text--warning":"warning"===this.variant,"helper-text--danger":"danger"===this.variant,"helper-text--success":"success"===this.variant,"helper-text--neutral":"neutral"===this.variant},part:"base"},this.helperText?Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("span",{part:"text"},this.helperText):Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("span",{part:"text"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("slot",null)),this.renderHelperIcon()),this.styles&&Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("style",null,this.styles))}}]),HelperText}();HelperText.style=":host{--color-informational:var(\n    --telekom-color-text-and-icon-functional-informational\n  );--color-warning:var(--telekom-color-text-and-icon-functional-warning);--color-danger:var(--telekom-color-text-and-icon-functional-danger);--color-success:var(--telekom-color-text-and-icon-functional-success);--color-neutral:var(--telekom-color-text-and-icon-additional);--font-size:0.75rem;--font-weight:700;--line-height:1.35;--icon-size-helper-text:11px}.helper-text{display:flex;align-items:flex-start;flex-direction:row-reverse;justify-content:flex-end;font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height)}[part='text']{text-align:left}scale-icon-alert-information,scale-icon-alert-error,scale-icon-alert-success{display:flex;justify-content:center;align-items:center;margin-right:var(--telekom-spacing-unit-x1);margin-top:0.1666em;}.scale-icon{height:var(--icon-size-helper-text);width:var(--icon-size-helper-text)}.helper-text--informational{color:var(--color-informational)}.helper-text--warning{color:var(--color-warning)}.helper-text--danger{color:var(--color-danger)}.helper-text--success{color:var(--color-success)}.helper-text--neutral{color:var(--color-neutral)}"}}]);