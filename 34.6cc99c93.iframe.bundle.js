/*! For license information please see 34.6cc99c93.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"../components/dist/esm/index-713f92a5.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../components/dist/esm/scale-alert.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_alert",(function(){return Alert}));__webpack_require__("../../node_modules/core-js/modules/web.timers.js"),__webpack_require__("../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../components/dist/esm/index-3408babe.js"),_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../components/dist/esm/index-713f92a5.js"),_status_note_d227f142_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../components/dist/esm/status-note-d227f142.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Alert=function(){function Alert(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Alert),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.h)(this,hostRef),this.size="",this.variant="",this.timeout=!1,this.icon="",this.defaultTimeout=2e3,this.close=function(){_this.opened=!1},this.onCloseAlertWithTimeout=function(){if(!1===_this.timeout)return null;"number"==typeof _this.timeout?setTimeout(_this.close,_this.timeout):setTimeout(_this.close,_this.defaultTimeout)}}var _open;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Alert,[{key:"componentWillLoad",value:function componentWillLoad(){this.hasSlotClose=!!this.hostElement.querySelector('[slot="close"]')}},{key:"connectedCallback",value:function connectedCallback(){Object(_status_note_d227f142_js__WEBPACK_IMPORTED_MODULE_6__.a)({source:this.hostElement,type:"warn"})}},{key:"open",value:(_open=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:this.opened=!0;case 1:case"end":return _context.stop()}}),_callee,this)}))),function open(){return _open.apply(this,arguments)})},{key:"render",value:function render(){return this.onCloseAlertWithTimeout(),this.opened?Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.b,null,this.styles&&Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("style",null,this.styles),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("div",{class:this.getCssClassMap()},Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("div",{class:"alert__body"},Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("div",{class:"alert__icon"},this.icon),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("div",{class:"alert__content"},Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("div",{class:"alert__headline"},this.headline),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("slot",null))),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("a",{class:"alert__close",onClick:this.close},this.hasSlotClose?Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("div",{class:"alert__close-icon"},Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.f)("slot",{name:"close"})):"x"))):null}},{key:"getCssClassMap",value:function getCssClassMap(){return Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_5__.a)("alert",this.size&&"alert--size-"+this.size,this.variant&&"alert--variant-"+this.variant)}},{key:"hostElement",get:function get(){return Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_4__.e)(this)}}]),Alert}();Alert.style=".alert{box-sizing:border-box;background:#eee;color:#333;width:100%;padding:1rem;text-align:left;position:relative;display:flex;justify-content:space-between}.alert__body{display:flex}.alert__headline{font-size:var(--type-size-3, 1rem);color:white;margin:0}.alert__icon{display:flex;align-items:center;justify-content:center;background:none;height:24px;width:24px;margin:0 0.5rem 0 0;border-radius:var(--scl-radius-8)}.alert__close{height:16px;opacity:0.5;cursor:pointer}.alert__close:hover{opacity:1}.alert--variant-primary{background:blue;color:#fff}.alert--variant-secondary{background:#eee;color:#333}.alert--variant-variant-warning{background:orange;color:#fff}.alert--variant-danger{background:red;color:#fff}.alert--variant-success{background:green;color:#fff}.alert--variant-info{background:lightblue;color:#fff}"},"../components/dist/esm/status-note-d227f142.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return statusNote}));var tagTypes={beta:"β",WIP:"🛠 WIP",deprecated:"😵 Deprecation notice"},defaultMessages={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function statusNote(_ref){var _ref$tag=_ref.tag,tag=void 0===_ref$tag?"WIP":_ref$tag,_ref$extraMessage=_ref.extraMessage,extraMessage=void 0===_ref$extraMessage?null:_ref$extraMessage,_ref$message=_ref.message,message=void 0===_ref$message?null:_ref$message,_ref$source=_ref.source,source=void 0===_ref$source?null:_ref$source,_ref$type=_ref.type;(0,console[void 0===_ref$type?"info":_ref$type])("%c scale – "+tagTypes[tag]+" ","background: #E20074; color: #FFF; border-radius: 4px","\n\n"+(message||defaultMessages[tag])+" "+(extraMessage?"\n"+extraMessage:"")+"\n    ",null!==source?"\nsource:":"","object"==typeof source?source:""+source,null!==source?"\n\n":"")}}}]);
//# sourceMappingURL=34.6cc99c93.iframe.bundle.js.map