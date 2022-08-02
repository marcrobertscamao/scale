/*! For license information please see 25.44ef746a.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"../components/dist/esm/index-713f92a5.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../components/dist/esm/scale-slider.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_slider",(function(){return Slider}));__webpack_require__("../../node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.to-fixed.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../components/dist/esm/index-3408babe.js"),_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../components/dist/esm/index-713f92a5.js"),_utils_004d7b05_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../components/dist/esm/utils-004d7b05.js"),_status_note_d227f142_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../components/dist/esm/status-note-d227f142.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var i=0,Slider=function(){function Slider(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Slider),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.h)(this,hostRef),this.scaleChange=Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.d)(this,"scale-change",7),this.scaleChangeLegacy=Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.d)(this,"scaleChange",7),this.scaleInput=Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.d)(this,"scale-input",7),this.scaleInputLegacy=Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.d)(this,"scaleInput",7),this.min=0,this.max=100,this.step=1,this.showValue=!0,this.unit="%",this.decimals=0,this.disabled=!1,this.trackSmall=!1,this.thumbLarge=!1,this.onButtonDown=function(){_this.disabled||(_this.onDragStart(),_this.addGlobalListeners())},this.onKeyDown=function(event){var steps=0;["ArrowRight","ArrowLeft"].includes(event.key)&&(steps="ArrowRight"===event.key?_this.step:-_this.step),["ArrowUp","ArrowDown"].includes(event.key)&&(steps="ArrowUp"===event.key?10*_this.step:10*-_this.step),_this.setValue(_this.value+steps)},this.onDragStart=function(){_this.dragging=!0,_this.offsetLeft=_this.sliderTrack.getBoundingClientRect().left},this.onDragging=function(event){var dragging=_this.dragging,offsetLeft=_this.offsetLeft;if(dragging){var nextValue=(_this.handleTouchEvent(event).clientX-offsetLeft)/_this.sliderTrack.offsetWidth*100*(_this.max-_this.min)/100+_this.min,roundedNextValue=Math.ceil(nextValue/_this.step)*_this.step;_this.setValue(roundedNextValue)}},this.onDragEnd=function(){_this.dragging=!1,Object(_utils_004d7b05_js__WEBPACK_IMPORTED_MODULE_8__.c)(_this,"scaleChange",_this.value),_this.removeGlobalListeners()},this.setValue=function(nextValue){_this.value=_this.clamp(nextValue),Object(_utils_004d7b05_js__WEBPACK_IMPORTED_MODULE_8__.c)(_this,"scaleInput",_this.value)},this.setPosition=function(){if(_this.value){var clampedValue=_this.clamp(_this.value);_this.position=100*(clampedValue-_this.min)/(_this.max-_this.min)}else _this.position=0},this.clamp=function(val){return Math.min(Math.max(val,_this.min),_this.max)},this.onDragging=this.onDragging.bind(this),this.onDragEnd=this.onDragEnd.bind(this)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Slider,[{key:"componentWillLoad",value:function componentWillLoad(){null==this.sliderId&&(this.sliderId="slider-"+i++),this.setPosition()}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.removeGlobalListeners()}},{key:"componentDidLoad",value:function componentDidLoad(){void 0!==this.customColor&&Object(_status_note_d227f142_js__WEBPACK_IMPORTED_MODULE_9__.a)({tag:"deprecated",message:'Property "customColor" is deprecated. \n          Please use css variable "--background-bar" to set the slider-bar color;\n          e.g. <scale-slider value="20" style="--background-bar: green"></scale-slider>',type:"warn",source:this.hostElement})}},{key:"handleTouchEvent",value:function handleTouchEvent(event){return 0===event.type.indexOf("touch")?event.touches[0]:event}},{key:"handleValueChange",value:function handleValueChange(){this.setPosition()}},{key:"addGlobalListeners",value:function addGlobalListeners(){window.addEventListener("mousemove",this.onDragging.bind(this)),window.addEventListener("mouseup",this.onDragEnd.bind(this)),window.addEventListener("touchmove",this.onDragging.bind(this)),window.addEventListener("touchend",this.onDragEnd.bind(this))}},{key:"removeGlobalListeners",value:function removeGlobalListeners(){window.removeEventListener("mousemove",this.onDragging),window.removeEventListener("mouseup",this.onDragEnd),window.removeEventListener("touchmove",this.onDragging),window.removeEventListener("touchend",this.onDragEnd)}},{key:"render",value:function render(){var _this2=this;return Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.f)(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.b,null,this.styles&&Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.f)("style",null,this.styles),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.f)("div",{part:this.getBasePartMap(),class:this.getCssClassMap()},!!this.label&&Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.f)("label",{part:"label",class:"slider__label",id:this.sliderId+"-label",htmlFor:this.sliderId},this.label),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.f)("div",{part:"track-wrapper",class:"slider__track-wrapper"},Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.f)("div",{part:"track",class:"slider__track",ref:function ref(el){return _this2.sliderTrack=el}},Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.f)("div",{part:"bar",class:"slider__bar",style:{width:this.position+"%",backgroundColor:this.customColor?this.customColor:this.disabled?"var(--background-bar-disabled)":"var(--background-bar)"}}),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.f)("div",{part:"thumb-wrapper",class:"slider__thumb-wrapper",style:{left:this.position+"%"},onMouseDown:this.onButtonDown,onTouchStart:this.onButtonDown},Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.f)("div",{part:"thumb",class:"slider__thumb",tabindex:"0",role:"slider",id:this.sliderId,"aria-valuemin":this.min,"aria-valuenow":this.value,"aria-valuemax":this.max,"aria-valuetext":""+this.value,"aria-labelledby":this.sliderId+"-label","aria-orientation":"horizontal","aria-disabled":this.disabled,onKeyDown:this.onKeyDown}))),Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.f)("input",{type:"hidden",value:this.value,name:this.name}),this.showValue&&Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.f)("div",{part:"display-value",class:"slider__display-value"},null!=this.value&&this.value.toFixed(this.decimals),null!=this.value&&this.unit))))}},{key:"getBasePartMap",value:function getBasePartMap(){return this.getCssOrBasePartMap("basePart")}},{key:"getCssClassMap",value:function getCssClassMap(){return this.getCssOrBasePartMap("css")}},{key:"getCssOrBasePartMap",value:function getCssOrBasePartMap(mode){var prefix="basePart"===mode?"":"slider--";return Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_7__.a)("slider",this.disabled&&prefix+"disabled",this.trackSmall&&prefix+"track-small",this.thumbLarge&&prefix+"thumb-large")}},{key:"hostElement",get:function get(){return Object(_index_3408babe_js__WEBPACK_IMPORTED_MODULE_6__.e)(this)}}],[{key:"watchers",get:function get(){return{value:["handleValueChange"]}}}]),Slider}();Slider.style=":host{--border:1px solid var(--telekom-color-ui-border-standard);--background-bar:var(--telekom-color-primary-standard);--border-color-thumb:var(--telekom-color-ui-border-standard);--box-shadow-thumb:var(--telekom-shadow-resting-standard);--border-color-thumb-hover:var(--telekom-color-ui-border-hovered);--border-color-thumb-active:var(--telekom-color-ui-border-pressed);--box-shadow-thumb-focus:0 0 0 var(--telekom-line-weight-highlight)\n    var(--telekom-color-functional-focus);--color-display-value:var(--telekom-color-text-and-icon-additional);--font-weight-display-value:var(--telekom-typography-font-weight-bold);--font-size-display-value:var(--telekom-typography-font-size-small);--background-track:var(--telekom-color-ui-faint);--background-bar-disabled:var(--telekom-color-ui-disabled);--color-label-disabled:var(--telekom-color-text-and-icon-disabled)}.slider{width:100%;display:block;align-items:center}.slider .slider__track-wrapper{display:flex;align-items:center}.slider .slider__track{width:303px;border:var(--border);height:6px;margin:16px 0;display:flex;position:relative;box-sizing:border-box;align-items:center;border-radius:100px}.slider .slider__bar{height:6px;z-index:-1;position:absolute;border-radius:100px;background-color:var(--background-bar);z-index:var(--scl-z-index-10)}.slider .slider__thumb-wrapper{width:32px;height:32px;display:flex;z-index:var(--scl-z-index-20);position:absolute;text-align:center;align-items:center;margin-left:-16px;justify-content:center;background-color:transparent}.slider .slider__thumb{width:16px;border:1px solid;height:16px;outline:none;box-sizing:border-box;border-color:var(--border-color-thumb);border-radius:50%;background-color:#fff;box-shadow:var(--telekom-shadow-resting-standard)}.slider .slider__display-value{color:var(--color-display-value);margin-left:24px;font-weight:var(--font-weight-display-value);font-size:var(--font-size-display-value)}.slider .slider__thumb:hover{border-color:var(--border-color-thumb-hover)}.slider .slider__thumb:active{border-color:var(--border-color-thumb-active)}.slider .slider__thumb:focus{box-shadow:var(--box-shadow-thumb-focus)}.slider .slider__thumb-wrapper:hover{cursor:grab}.slider .slider__thumb-wrapper:active{cursor:grabbing}.slider--track-small .slider__track{border:none;height:1px;border-top:1px solid transparent;background-color:var(--background-track)}.slider--track-small .slider__bar{border:1px solid transparent;height:3px;z-index:1;box-sizing:border-box}.slider--thumb-large .slider__thumb{width:24px;height:24px}.slider--disabled .slider__track-wrapper{cursor:not-allowed}.slider--disabled .slider__bar{background-color:var(--background-bar-disabled);z-index:var(--scl-z-index-10)}.slider--disabled .slider__track{border-color:var(--telekom-color-ui-border-disabled)}.slider--disabled .slider__thumb{display:none}.slider--disabled .slider__label{color:var(--color-label-disabled)}.slider--disabled .slider__thumb-wrapper:hover{cursor:not-allowed}"},"../components/dist/esm/status-note-d227f142.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return statusNote}));var tagTypes={beta:"β",WIP:"🛠 WIP",deprecated:"😵 Deprecation notice"},defaultMessages={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function statusNote(_ref){var _ref$tag=_ref.tag,tag=void 0===_ref$tag?"WIP":_ref$tag,_ref$extraMessage=_ref.extraMessage,extraMessage=void 0===_ref$extraMessage?null:_ref$extraMessage,_ref$message=_ref.message,message=void 0===_ref$message?null:_ref$message,_ref$source=_ref.source,source=void 0===_ref$source?null:_ref$source,_ref$type=_ref.type;(0,console[void 0===_ref$type?"info":_ref$type])("%c scale – "+tagTypes[tag]+" ","background: #E20074; color: #FFF; border-radius: 4px","\n\n"+(message||defaultMessages[tag])+" "+(extraMessage?"\n"+extraMessage:"")+"\n    ",null!==source?"\nsource:":"","object"==typeof source?source:""+source,null!==source?"\n\n":"")}},"../components/dist/esm/utils-004d7b05.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return isClickOutside})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isPseudoClassSupported})),__webpack_require__.d(__webpack_exports__,"c",(function(){return emitEvent})),__webpack_require__.d(__webpack_exports__,"d",(function(){return hasShadowDom})),__webpack_require__.d(__webpack_exports__,"e",(function(){return isScaleIcon}));var hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},isPseudoClassSupported=function isPseudoClassSupported(pseudoClass){var ss=document.styleSheets[0];if(!ss){var el=document.createElement("style");document.head.appendChild(el),ss=document.styleSheets[0],document.head.removeChild(el)}return function testPseudo(){try{return/^:/.test(pseudoClass)||(pseudoClass=":"+pseudoClass),ss.insertRule("html"+pseudoClass+"{}",0),ss.deleteRule(0),!0}catch(e){return!1}}()};function emitEvent(instance,eventKey,detail){var legacyKey=eventKey+"Legacy",emitted=[];return void 0!==instance[legacyKey]&&emitted.push(instance[legacyKey].emit(detail)),emitted.push(instance[eventKey].emit(detail)),emitted}function isClickOutside(event,host){var target=event.target,hasShadow=null!=target.shadowRoot,composedPath=hasShadow?event.composedPath():[];do{if(target===host)return!1;target=hasShadow?composedPath.shift():target.parentNode}while(target);return!0}var isScaleIcon=function isScaleIcon(el){return null!=el&&"SCALE-ICON"===el.nodeName.toUpperCase().substring(0,10)}}}]);
//# sourceMappingURL=25.44ef746a.iframe.bundle.js.map