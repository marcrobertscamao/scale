/*! For license information please see 32.3014b4cc.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"../components/dist/esm/index-713f92a5.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../components/dist/esm/scale-tab-nav.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_tab_nav",(function(){return TabNav}));__webpack_require__("../../node_modules/core-js/modules/es.string.small.js"),__webpack_require__("../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.find-index.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.find.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js");var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../components/dist/esm/index-6d95a4bc.js"),_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../components/dist/esm/index-713f92a5.js"),_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../components/dist/esm/status-note-0089e9c9.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var TabNav=function(){function TabNav(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,TabNav),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_19__.i)(this,hostRef),this.small=!1,this.size="small"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(TabNav,[{key:"handleClick",value:function handleClick(event){var nextTab=event.target;"tab"===nextTab.getAttribute("role")&&this.selectTab(nextTab)}},{key:"handleKeydown",value:function handleKeydown(event){var nextTab;if("tab"===event.target.getAttribute("role")&&!event.altKey){switch(event.key){case"ArrowLeft":nextTab=this.getPreviousTab();break;case"ArrowRight":nextTab=this.getNextTab();break;case"Home":nextTab=this.getFirstTab();break;case"End":nextTab=this.getLastTab();break;default:return}event.preventDefault(),this.selectTab(nextTab)}}},{key:"connectedCallback",value:function connectedCallback(){this.el.hasAttribute("role")||this.el.setAttribute("role","tablist")}},{key:"componentDidRender",value:function componentDidRender(){var _this=this;Promise.all([customElements.whenDefined("scale-tab-header"),customElements.whenDefined("scale-tab-panel")]).then((function(){_this.linkPanels(),_this.propagateSizeToTabs()})),!1!==this.small&&Object(_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_21__.a)({tag:"deprecated",message:'Property "small" is deprecated. Please use css overwrite!',type:"warn",source:this.el})}},{key:"getAllTabs",value:function getAllTabs(){return Array.from(this.el.querySelectorAll("scale-tab-header"))}},{key:"getAllEnabledTabs",value:function getAllEnabledTabs(){return Array.from(this.el.querySelectorAll("scale-tab-header:not([disabled])"))}},{key:"getAllPanels",value:function getAllPanels(){return Array.from(this.el.querySelectorAll("scale-tab-panel"))}},{key:"getPreviousTab",value:function getPreviousTab(){var tabs=this.getAllEnabledTabs(),index=tabs.findIndex((function(tab){return tab.selected}))-1;return tabs[(index+tabs.length)%tabs.length]}},{key:"getNextTab",value:function getNextTab(){var tabs=this.getAllEnabledTabs(),index=tabs.findIndex((function(tab){return tab.selected}))+1;return tabs[index%tabs.length]}},{key:"getFirstTab",value:function getFirstTab(){return this.getAllEnabledTabs()[0]}},{key:"getLastTab",value:function getLastTab(){var tabs=this.getAllEnabledTabs();return tabs[tabs.length-1]}},{key:"linkPanels",value:function linkPanels(){var tabs=this.getAllEnabledTabs(),selectedTab=tabs.find((function(x){return x.selected}))||tabs[0];tabs.forEach((function(tab){var panel=tab.nextElementSibling;tab.setAttribute("aria-controls",panel.id),panel.setAttribute("aria-labelledby",tab.id)})),this.selectTab(selectedTab)}},{key:"reset",value:function reset(){var tabs=this.getAllEnabledTabs(),panels=this.getAllPanels();tabs.forEach((function(tab){return tab.selected=!1})),panels.forEach((function(panel){return panel.hidden=!0}))}},{key:"findPanelForTab",value:function findPanelForTab(tab){var panelId=tab.getAttribute("aria-controls");return this.el.querySelector("#"+panelId)}},{key:"selectTab",value:function selectTab(nextTab){var nextPanel=this.findPanelForTab(nextTab);this.reset(),nextPanel.hidden=!1,nextTab.selected=!0}},{key:"propagateSizeToTabs",value:function propagateSizeToTabs(){var action="large"===this.size?"setAttribute":"removeAttribute",tabs=this.getAllTabs(),panels=this.getAllPanels();[].concat(_toConsumableArray(tabs),_toConsumableArray(panels)).forEach((function(child){return child[action]("size","large")}))}},{key:"render",value:function render(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_19__.g)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_19__.c,null,this.styles&&Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_19__.g)("style",null,this.styles),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_19__.g)("div",{part:this.getBasePartMap(),class:this.getCssClassMap()},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_19__.g)("slot",{name:"tab"}),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_19__.g)("slot",{name:"panel"})))}},{key:"getBasePartMap",value:function getBasePartMap(){return this.getCssOrBasePartMap("basePart")}},{key:"getCssClassMap",value:function getCssClassMap(){return this.getCssOrBasePartMap("css")}},{key:"getCssOrBasePartMap",value:function getCssOrBasePartMap(mode){var prefix="basePart"===mode?"":"tab-nav--";return Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_20__.a)("tab-nav",""+prefix)}},{key:"el",get:function get(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_19__.f)(this)}}]),TabNav}();TabNav.style=":host{--tab-height:var(--telekom-spacing-unit-x10);--tab-spacing-horizontal:var(--telekom-spacing-unit-x3);--tab-spacing-vertical:var(--telekom-spacing-unit-x4);--tab-radius:var(--telekom-radius-small);--tab-border-size:var(--telekom-line-weight-standard);--tab-border-size-selected:var(--telekom-line-weight-highlight);--tab-border-color:var(--telekom-color-ui-subtle);--tab-height-large:var(--telekom-spacing-unit-x12);--tab-spacing-horizontal-large:var(--telekom-spacing-unit-x4);--tab-spacing-vertical-large:0.875rem}"},"../components/dist/esm/status-note-0089e9c9.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return statusNote}));var tagTypes={beta:"β",WIP:"🛠 WIP",deprecated:"😵 Deprecation notice",warning:"Warning"},defaultMessages={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function statusNote(_ref){var _ref$tag=_ref.tag,tag=void 0===_ref$tag?"WIP":_ref$tag,_ref$extraMessage=_ref.extraMessage,extraMessage=void 0===_ref$extraMessage?null:_ref$extraMessage,_ref$message=_ref.message,message=void 0===_ref$message?null:_ref$message,_ref$source=_ref.source,source=void 0===_ref$source?null:_ref$source,_ref$type=_ref.type;(0,console[void 0===_ref$type?"info":_ref$type])("%c scale – "+tagTypes[tag]+" ","background: #E20074; color: #FFF; border-radius: 4px","\n\n"+(message||defaultMessages[tag])+" "+(extraMessage?"\n"+extraMessage:"")+"\n    ",null!==source?"\nsource:":"","object"==typeof source?source:""+source,null!==source?"\n\n":"")}}}]);
//# sourceMappingURL=32.3014b4cc.iframe.bundle.js.map