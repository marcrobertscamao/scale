/*! For license information please see 61.f29e3c97.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"../components/dist/esm/scale-telekom-mobile-flyout-canvas.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_telekom_mobile_flyout_canvas",(function(){return TelekomNavItem}));__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../components/dist/esm/index-6d95a4bc.js"),_utils_7b3e3b71_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../components/dist/esm/utils-7b3e3b71.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var TelekomNavItem=function(){function TelekomNavItem(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TelekomNavItem),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.i)(this,hostRef),this.scaleCloseNavFlyout=Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.e)(this,"scale-close-nav-flyout",7),this.closeButtonLabel="Close",this.closeButtonTitle=null}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(TelekomNavItem,[{key:"render",value:function render(){var _this=this;return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.c,null,Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",{part:"base"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",{part:"header"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("slot",{name:"heading"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("h2",{part:"heading"},this.appName)),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("scale-button",{variant:"ghost",part:"close-button",onClick:function onClick(event){return Object(_utils_7b3e3b71_js__WEBPACK_IMPORTED_MODULE_2__.c)(_this,"scaleCloseNavFlyout",{originalEvent:event})},"aria-label":this.closeButtonLabel,title:this.closeButtonTitle},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("slot",{name:"close-icon"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("scale-icon-action-close",{decorative:!0})))),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",{part:"body"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("slot",{name:"row"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("slot",{name:"mobile-before-main-nav"}),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("slot",{name:"mobile-main-nav"}),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("slot",{name:"mobile-after-main-nav"}),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",{part:"meta"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",null,Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("slot",{name:"mobile-meta-nav-external"}),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("slot",{name:"mobile-meta-nav"})),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("div",null,Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("slot",{name:"mobile-lang-switcher"}))),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.g)("slot",{name:"mobile-bottom"})))))}},{key:"hostElement",get:function get(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_1__.f)(this)}}]),TelekomNavItem}();TelekomNavItem.style=":host{display:block;height:100%;overflow-y:auto;--spacing:var(--telekom-spacing-unit-x6) var(--telekom-spacing-unit-x4)}[part='base']{padding:var(--spacing)}[part~='header']{display:flex;justify-content:space-between;align-items:flex-start}[part~='heading']{margin:0;font-size:var(--font-size-app-name);font-weight:var(--font-weight-app-name);line-height:var(--line-height-app-name);color:var(--telekom-color-text-and-icon-primary-standard);letter-spacing:0.02em;text-decoration:none}[part~='close-button']{position:absolute;top:6px;right:10px}[part~='body'],slot[name='row']::slotted(*){margin-top:var(--telekom-spacing-unit-x6)}"},"../components/dist/esm/utils-7b3e3b71.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return isClickOutside})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isPseudoClassSupported})),__webpack_require__.d(__webpack_exports__,"c",(function(){return emitEvent})),__webpack_require__.d(__webpack_exports__,"d",(function(){return generateUniqueId})),__webpack_require__.d(__webpack_exports__,"e",(function(){return hasShadowDom})),__webpack_require__.d(__webpack_exports__,"f",(function(){return isScaleIcon}));var hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},isPseudoClassSupported=function isPseudoClassSupported(pseudoClass){var ss=document.styleSheets[0];if(!ss){var el=document.createElement("style");document.head.appendChild(el),ss=document.styleSheets[0],document.head.removeChild(el)}return function testPseudo(){try{return/^:/.test(pseudoClass)||(pseudoClass=":"+pseudoClass),ss.insertRule("html"+pseudoClass+"{}",0),ss.deleteRule(0),!0}catch(e){return!1}}()};function emitEvent(instance,eventKey,detail){var legacyKey=eventKey+"Legacy",emitted=[];return void 0!==instance[legacyKey]&&emitted.push(instance[legacyKey].emit(detail)),emitted.push(instance[eventKey].emit(detail)),emitted}function isClickOutside(event,host){var target=event.target,hasShadow=null!=target.shadowRoot,composedPath=hasShadow?event.composedPath():[];do{if(target===host)return!1;target=hasShadow?composedPath.shift():target.parentNode}while(target);return!0}var isScaleIcon=function isScaleIcon(el){return null!=el&&"SCALE-ICON"===el.nodeName.toUpperCase().substring(0,10)},id=0;function generateUniqueId(){return id++}}}]);
//# sourceMappingURL=61.f29e3c97.iframe.bundle.js.map