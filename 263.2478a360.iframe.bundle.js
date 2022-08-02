(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{"../components/dist/esm/scale-tooltip.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_tooltip",(function(){return Tooltip}));__webpack_require__("../../node_modules/core-js/modules/es.array.find.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.split.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js");var _index_3408babe_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../components/dist/esm/index-3408babe.js"),_floating_ui_dom_esm_07191aca_js__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../components/dist/esm/floating-ui.dom.esm-07191aca.js"),_utils_004d7b05_js__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("../components/dist/esm/utils-004d7b05.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var id=0,Tooltip=function(){function Tooltip(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Tooltip),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_20__.h)(this,hostRef),this.tooltipBeforeShow=Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_20__.d)(this,"scale-before-show",7),this.tooltipShow=Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_20__.d)(this,"scale-show",7),this.tooltipBeforeHide=Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_20__.d)(this,"scale-before-hide",7),this.tooltipHide=Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_20__.d)(this,"scale-hide",7),this.componentId="tooltip-"+ ++id,this.content="",this.placement="top",this.disabled=!1,this.distance=5,this.open=!1,this.trigger="hover focus",this.flip=!0,this.mouseOverTooltip=!1,this.update=function(){!_this.disabled&&_this.open&&Object(_floating_ui_dom_esm_07191aca_js__WEBPACK_IMPORTED_MODULE_21__.b)(Array.from(_this.hostEl.children).find((function(x){return!x.hasAttribute("slot")})),_this.tooltipEl,{placement:_this.placement,middleware:[Object(_floating_ui_dom_esm_07191aca_js__WEBPACK_IMPORTED_MODULE_21__.d)(_this.distance)].concat(_toConsumableArray(_this.flip?[Object(_floating_ui_dom_esm_07191aca_js__WEBPACK_IMPORTED_MODULE_21__.c)()]:[]),[Object(_floating_ui_dom_esm_07191aca_js__WEBPACK_IMPORTED_MODULE_21__.a)({element:_this.arrowEl}),Object(_floating_ui_dom_esm_07191aca_js__WEBPACK_IMPORTED_MODULE_21__.e)({crossAxis:!0})])}).then((function(_ref){var _Object$assign,x=_ref.x,y=_ref.y,placement=_ref.placement,middlewareData=_ref.middlewareData;Object.assign(_this.tooltipEl.style,{left:x+"px",top:y+"px"});var _middlewareData$arrow=middlewareData.arrow,arrowX=_middlewareData$arrow.x,arrowY=_middlewareData$arrow.y,staticSide={top:"bottom",right:"left",bottom:"top",left:"right"}[placement.split("-")[0]];Object.assign(_this.arrowEl.style,((_Object$assign={left:null!=arrowX?arrowX+"px":"",top:null!=arrowY?arrowY+"px":"",right:"",bottom:""})[staticSide]="-2.79px",_Object$assign))}))},this.handleBlur=function(){_this.hasTrigger("focus")&&_this.hideTooltip()},this.handleClick=function(){_this.hasTrigger("click")&&(_this.open&&!_this.hasTrigger("focus")?_this.hideTooltip():_this.showTooltip())},this.handleFocus=function(){_this.hasTrigger("focus")&&_this.showTooltip()},this.handleKeyDown=function(event){_this.open&&"Escape"===event.key&&(event.stopPropagation(),_this.hideTooltip())},this.handleMouseOver=function(){_this.hasTrigger("hover")&&_this.showTooltip()},this.handleMouseOut=function(){_this.mouseOverTooltip||_this.hasTrigger("hover")&&_this.hideTooltip()},this.handleTooltipMouseOver=function(){_this.mouseOverTooltip=!0},this.handleTooltipBlur=function(){_this.mouseOverTooltip=!1,_this.handleMouseOut()},this.hasTrigger=function(triggerType){return _this.trigger.split(" ").includes(triggerType)}}var _hideTooltip,_showTooltip;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Tooltip,[{key:"handleOpenChange",value:function handleOpenChange(){this.open?this.showTooltip():this.hideTooltip()}},{key:"componentDidLoad",value:function componentDidLoad(){this.hostEl.addEventListener("blur",this.handleBlur,!0),this.hostEl.addEventListener("click",this.handleClick,!0),this.hostEl.addEventListener("focus",this.handleFocus,!0)}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.hostEl.removeEventListener("blur",this.handleBlur,!0),this.hostEl.removeEventListener("click",this.handleClick,!0),this.hostEl.removeEventListener("focus",this.handleFocus,!0)}},{key:"handleOutsideClick",value:function handleOutsideClick(event){Object(_utils_004d7b05_js__WEBPACK_IMPORTED_MODULE_22__.a)(event,this.hostEl)&&this.hideTooltip()}},{key:"componentDidUpdate",value:function componentDidUpdate(){this.update(),this.open&&this.showTooltip()}},{key:"componentDidRender",value:function componentDidRender(){this.update()}},{key:"showTooltip",value:(_showTooltip=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!this.open){_context.next=2;break}return _context.abrupt("return");case 2:if(!this.tooltipBeforeShow.emit().defaultPrevented){_context.next=6;break}return this.open=!1,_context.abrupt("return");case 6:this.open=!0,this.update();case 8:case"end":return _context.stop()}}),_callee,this)}))),function showTooltip(){return _showTooltip.apply(this,arguments)})},{key:"hideTooltip",value:(_hideTooltip=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(){return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(this.open){_context2.next=2;break}return _context2.abrupt("return");case 2:if(!this.tooltipBeforeHide.emit().defaultPrevented){_context2.next=6;break}return this.open=!0,_context2.abrupt("return");case 6:this.open=!1,this.update();case 8:case"end":return _context2.stop()}}),_callee2,this)}))),function hideTooltip(){return _hideTooltip.apply(this,arguments)})},{key:"render",value:function render(){var _this2=this;return Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_20__.f)(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_20__.b,{onKeyDown:this.handleKeyDown,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut},this.styles&&Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_20__.f)("style",null,this.styles),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_20__.f)("div",{part:"trigger","aria-describedby":this.componentId},Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_20__.f)("slot",null)),!this.disabled&&Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_20__.f)("div",{part:"tooltip",role:"tooltip","aria-hidden":this.open?"false":"true",ref:function ref(el){return _this2.tooltipEl=el},id:this.componentId,tabIndex:0,onMouseOver:this.handleTooltipMouseOver,onMouseLeave:this.handleTooltipBlur},Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_20__.f)("slot",{name:"content"},this.content),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_20__.f)("div",{part:"arrow",ref:function ref(el){return _this2.arrowEl=el}})))}},{key:"hostEl",get:function get(){return Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_20__.e)(this)}}],[{key:"watchers",get:function get(){return{open:["handleOpenChange"]}}}]),Tooltip}();Tooltip.style=":host{--radius:var(--telekom-radius-small);--background:var(--telekom-color-ui-extra-strong);--color:var(--telekom-color-text-and-icon-inverted-standard);--font-weight:var(--telekom-typography-font-weight-regular);--font-size:var(--telekom-typography-font-size-body);--line-height:var(--telekom-typography-line-spacing-standard);--spacing:var(--telekom-spacing-unit-x05) var(--telekom-spacing-unit-x2);--arrow-size:0.31rem;--transition-delay-hide:var(--telekom-motion-duration-instant);--transition-duration-hide:var(--telekom-motion-duration-immediate);--transition-timing-function-hide:var(--telekom-motion-easing-standard);--transition-duration-show:var(--telekom-motion-duration-immediate);--transition-timing-function-show:var(--telekom-motion-easing-standard);--z-index:var(--scl-z-index-70);display:contents;position:relative;box-sizing:border-box}[part='tooltip']{position:absolute;z-index:var(--z-index);top:0;left:0;background:var(--background);color:var(--color);font-weight:var(--font-weight);font-size:var(--font-size);line-height:var(--line-height);padding:var(--spacing);border-radius:var(--radius);transition-duration:var(--transition-duration-show);transition-timing-function:var(--transition-timing-function-show)}[part='tooltip'][aria-hidden='true']{opacity:0;transition-property:opacity;transition-delay:var(--transition-delay-hide);transition-duration:var(--transition-duration-hide);transition-timing-function:var(--transition-timing-function-hide)}[part='trigger']{}[part='arrow']{position:absolute;background:var(--background);width:var(--arrow-size);height:var(--arrow-size);transform:rotate(45deg)}@media screen and (-ms-high-contrast: active){[part='tooltip']{border:1px solid yellow}}"}}]);