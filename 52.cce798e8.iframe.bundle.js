/*! For license information please see 52.cce798e8.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"../components/dist/esm/scale-tab-panel.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_tab_panel",(function(){return TabPanel}));__webpack_require__("../../node_modules/core-js/modules/es.string.small.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../components/dist/esm/index-6d95a4bc.js"),_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../components/dist/esm/status-note-0089e9c9.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var i=0,TabPanel=function(){function TabPanel(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TabPanel),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_2__.i)(this,hostRef),this.generatedId=i++,this.small=!1,this.size="small"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(TabPanel,[{key:"componentDidRender",value:function componentDidRender(){!1!==this.small&&Object(_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_3__.a)({tag:"deprecated",message:'Property "small" is deprecated.',type:"warn",source:this.el})}},{key:"render",value:function render(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_2__.g)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_2__.c,{id:"scale-tab-panel-"+this.generatedId,role:"tabpanel"},this.styles&&Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_2__.g)("style",null,this.styles),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_2__.g)("div",{part:"tab-panel",class:"tab-panel"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_2__.g)("slot",null)))}},{key:"el",get:function get(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_2__.f)(this)}}]),TabPanel}();TabPanel.style=":host{--spacing-top:var(--telekom-spacing-unit-x6)}.tab-panel{margin-top:var(--spacing-top)}"},"../components/dist/esm/status-note-0089e9c9.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return statusNote}));var tagTypes={beta:"β",WIP:"🛠 WIP",deprecated:"😵 Deprecation notice",warning:"Warning"},defaultMessages={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function statusNote(_ref){var _ref$tag=_ref.tag,tag=void 0===_ref$tag?"WIP":_ref$tag,_ref$extraMessage=_ref.extraMessage,extraMessage=void 0===_ref$extraMessage?null:_ref$extraMessage,_ref$message=_ref.message,message=void 0===_ref$message?null:_ref$message,_ref$source=_ref.source,source=void 0===_ref$source?null:_ref$source,_ref$type=_ref.type;(0,console[void 0===_ref$type?"info":_ref$type])("%c scale – "+tagTypes[tag]+" ","background: #E20074; color: #FFF; border-radius: 4px","\n\n"+(message||defaultMessages[tag])+" "+(extraMessage?"\n"+extraMessage:"")+"\n    ",null!==source?"\nsource:":"","object"==typeof source?source:""+source,null!==source?"\n\n":"")}}}]);
//# sourceMappingURL=52.cce798e8.iframe.bundle.js.map