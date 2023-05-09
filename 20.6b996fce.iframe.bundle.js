/*! For license information please see 20.6b996fce.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"../components/dist/esm/index-713f92a5.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../components/dist/esm/scale-slider.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_slider",(function(){return Slider}));__webpack_require__("../../node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.to-fixed.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.function.name.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.slice.js");var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../components/dist/esm/index-6d95a4bc.js"),_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../components/dist/esm/index-713f92a5.js"),_utils_3cf81b34_js__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("../components/dist/esm/utils-3cf81b34.js"),_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("../components/dist/esm/status-note-0089e9c9.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(iter))return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Slider=function(){function Slider(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Slider),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.i)(this,hostRef),this.scaleChange=Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.e)(this,"scale-change",7),this.scaleChangeLegacy=Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.e)(this,"scaleChange",7),this.scaleInput=Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.e)(this,"scale-input",7),this.scaleInputLegacy=Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.e)(this,"scaleInput",7),this.value=0,this.range=!1,this.valueFrom=0,this.valueTo=0,this.min=0,this.max=100,this.step=1,this.showStepMarks=!1,this.showValue=!0,this.unit="",this.unitPosition="after",this.decimals=0,this.disabled=!1,this.innerAriaValueText="$from to $to",this.position=0,this.positionFrom=25,this.positionTo=75,this.activeRangeThumb=null,this.internalId=Object(_utils_3cf81b34_js__WEBPACK_IMPORTED_MODULE_22__.d)(),this.onButtonDown=function(event){_this.disabled||(_this.setActiveRangeThumbFromEvent(event),_this.onDragStart(),_this.addGlobalListeners())},this.onKeyDown=function(event){var steps=0;_this.setActiveRangeThumbFromEvent(event),["ArrowRight","ArrowLeft"].includes(event.key)&&(steps="ArrowRight"===event.key?_this.step:-_this.step),["ArrowUp","ArrowDown"].includes(event.key)&&(steps="ArrowUp"===event.key?10*_this.step:10*-_this.step);var valueKey=_this.getKeyFor("value");_this.setValue(_this[valueKey]+steps,valueKey),Object(_utils_3cf81b34_js__WEBPACK_IMPORTED_MODULE_22__.c)(_this,"scaleChange",_this.range?[_this.valueFrom,_this.valueTo]:_this.value)},this.onDragStart=function(){var offsetKey=_this.getKeyFor("offsetLeft");_this.dragging=!0,_this[offsetKey]=_this.sliderTrack.getBoundingClientRect().left},this.onDragging=function(event){if(_this.dragging){var valueKey=_this.getKeyFor("value"),offsetLeftKey=_this.getKeyFor("offsetLeft"),offsetLeft=_this[offsetLeftKey],nextValue=(_this.handleTouchEvent(event).clientX-offsetLeft)/_this.sliderTrack.offsetWidth*100*(_this.max-_this.min)/100+_this.min,roundedNextValue=Math.ceil(nextValue/_this.step)*_this.step;_this.setValue(roundedNextValue,valueKey)}},this.onDragEnd=function(){_this.dragging=!1,Object(_utils_3cf81b34_js__WEBPACK_IMPORTED_MODULE_22__.c)(_this,"scaleChange",_this.range?[_this.valueFrom,_this.valueTo]:_this.value),_this.removeGlobalListeners()},this.setValue=function(nextValue){var valueKey=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"value";_this[valueKey]=_this.clamp(nextValue),Object(_utils_3cf81b34_js__WEBPACK_IMPORTED_MODULE_22__.c)(_this,"scaleInput",_this.range?[_this.valueFrom,_this.valueTo]:_this.value)},this.setActiveRangeThumbFromEvent=function(event){if(_this.range){var part=event.target.part;_this.activeRangeThumb=part.contains("from")?"From":"To"}else _this.activeRangeThumb=null},this.setPosition=function(thumb){var valueKey=_this.getKeyFor("value",thumb),positionKey=_this.getKeyFor("position",thumb),clampedValue=_this.clamp(_this[valueKey]);_this[positionKey]=100*(clampedValue-_this.min)/(_this.max-_this.min)},this.getKeyFor=function(propName,thumb){var _a;return _this.range?""+propName+(null!==(_a=_this.activeRangeThumb)&&void 0!==_a?_a:thumb):propName},this.getTextValue=function(){var _a,_b,_c,_d;if(_this.range){var from=null===(_a=_this.valueFrom)||void 0===_a?void 0:_a.toFixed(_this.decimals),to=null===(_b=_this.valueTo)||void 0===_b?void 0:_b.toFixed(_this.decimals);return"before"===_this.unitPosition?""+_this.unit+from+" - "+_this.unit+to:""+from+_this.unit+" - "+to+_this.unit}return"before"===_this.unitPosition?""+_this.unit+(null===(_c=_this.value)||void 0===_c?void 0:_c.toFixed(_this.decimals)):""+(null===(_d=_this.value)||void 0===_d?void 0:_d.toFixed(_this.decimals))+_this.unit},this.getNumberOfSteps=function(){var n=(_this.max-_this.min)/_this.step+1;return _toConsumableArray(Array(n).keys())},this.clamp=function(val){var min=_this.min,max=_this.max;return _this.range&&("From"===_this.activeRangeThumb?max=Math.min(_this.valueTo,_this.max):"To"===_this.activeRangeThumb&&(min=Math.max(_this.valueFrom,_this.min))),Math.min(Math.max(val,min),max)},this.onDragging=this.onDragging.bind(this),this.onDragEnd=this.onDragEnd.bind(this)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Slider,[{key:"handleValueChange",value:function handleValueChange(){this.setPosition()}},{key:"componentWillLoad",value:function componentWillLoad(){null==this.sliderId&&(this.sliderId="slider-"+this.internalId),this.range?(this.setPosition("From"),this.setPosition("To")):this.setPosition()}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.removeGlobalListeners()}},{key:"componentDidLoad",value:function componentDidLoad(){void 0!==this.customColor&&Object(_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_23__.a)({tag:"deprecated",message:'Property "customColor" is deprecated. \n          Please use css variable "--background-bar" to set the slider-bar color;\n          e.g. <scale-slider value="20" style="--background-bar: green"></scale-slider>',type:"warn",source:this.hostElement}),void 0!==this.thumbLarge&&Object(_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_23__.a)({tag:"deprecated",message:'Property "thumbLarge" is deprecated.',type:"warn",source:this.hostElement}),void 0!==this.trackSmall&&Object(_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_23__.a)({tag:"deprecated",message:'Property "trackSmall" is deprecated.',type:"warn",source:this.hostElement})}},{key:"handleTouchEvent",value:function handleTouchEvent(event){return 0===event.type.indexOf("touch")?event.touches[0]:event}},{key:"addGlobalListeners",value:function addGlobalListeners(){window.addEventListener("mousemove",this.onDragging),window.addEventListener("mouseup",this.onDragEnd),window.addEventListener("touchmove",this.onDragging),window.addEventListener("touchend",this.onDragEnd)}},{key:"removeGlobalListeners",value:function removeGlobalListeners(){window.removeEventListener("mousemove",this.onDragging),window.removeEventListener("mouseup",this.onDragEnd),window.removeEventListener("touchmove",this.onDragging),window.removeEventListener("touchend",this.onDragEnd)}},{key:"getRangeAriaValueText",value:function getRangeAriaValueText(){return this.innerAriaValueText.replace(/\$from/g,""+this.valueFrom).replace(/\$to/g,""+this.valueTo)}},{key:"render",value:function render(){var _this2=this,helperTextId="helper-message-"+this.internalId,ariaDescribedByAttr={"aria-describedBy":helperTextId};return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.c,null,this.styles&&Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("style",null,this.styles),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("div",{part:Object(_index_713f92a5_js__WEBPACK_IMPORTED_MODULE_21__.a)("base",this.disabled&&"disabled")},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("div",{part:"label-wrapper"},!!this.label&&Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("label",{part:"label",id:this.sliderId+"-label",htmlFor:this.sliderId},this.label),this.showValue&&Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("div",{part:"value-text"},this.getTextValue())),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("div",{part:"track-wrapper"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("div",{part:"track",ref:function ref(el){return _this2.sliderTrack=el}},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("div",{part:"bar",style:{left:(this.range?this.positionFrom:0)+"%",width:(this.range?this.positionTo-this.positionFrom:this.position)+"%"}}),this.showStepMarks&&Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("div",{part:"step-marks"},this.getNumberOfSteps().map((function(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("span",{part:"step-mark"})}))),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("div",{part:"inner-track"},this.range?Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.a,null,Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("div",{part:"thumb-wrapper from",style:{left:this.positionFrom+"%"},onMouseDown:this.onButtonDown,onTouchStart:this.onButtonDown},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("div",Object.assign({part:"thumb from",tabindex:"0",role:"slider",id:this.sliderId+"-from","aria-valuemin":this.min,"aria-valuenow":this.valueFrom+" to "+this.valueTo,"aria-valuemax":this.max,"aria-valuetext":this.valueFrom+" to "+this.valueTo,"aria-labelledby":this.sliderId+"-label","aria-orientation":"horizontal","aria-disabled":this.disabled},this.helperText?ariaDescribedByAttr:{},{onKeyDown:this.onKeyDown}))),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("div",{part:"thumb-wrapper to",style:{left:this.positionTo+"%"},onMouseDown:this.onButtonDown,onTouchStart:this.onButtonDown},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("div",Object.assign({part:"thumb to",tabindex:"0",role:"slider",id:this.sliderId+"-to","aria-valuemin":this.min,"aria-valuenow":this.value,"aria-valuemax":this.max,"aria-valuetext":this.getRangeAriaValueText(),"aria-labelledby":this.sliderId+"-label","aria-orientation":"horizontal","aria-disabled":this.disabled},this.helperText?ariaDescribedByAttr:{},{onKeyDown:this.onKeyDown})))):Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("div",{part:"thumb-wrapper",style:{left:this.position+"%"},onMouseDown:this.onButtonDown,onTouchStart:this.onButtonDown},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("div",Object.assign({part:"thumb",tabindex:"0",role:"slider",id:this.sliderId,"aria-valuemin":this.min,"aria-valuenow":this.value,"aria-valuemax":this.max,"aria-valuetext":""+this.value,"aria-labelledby":this.sliderId+"-label","aria-orientation":"horizontal","aria-disabled":this.disabled},this.helperText?ariaDescribedByAttr:{},{onKeyDown:this.onKeyDown})))))),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("input",{type:"hidden",value:this.getTextValue(),name:this.name}),this.helperText&&Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("div",{part:"meta",id:helperTextId,"aria-live":"polite","aria-relevant":"additions removals"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.g)("div",{part:"helper-text"},this.helperText))))}},{key:"hostElement",get:function get(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_20__.f)(this)}}],[{key:"watchers",get:function get(){return{value:["handleValueChange"],valueFrom:["handleValueChange"],valueTo:["handleValueChange"]}}}]),Slider}();Slider.style=":host{--width:368px;--height-track:6px;--background-track:var(--telekom-color-ui-faint);--radius-track:var(--telekom-radius-pill);--spacing-track:var(--telekom-spacing-unit-x5) 0\n    var(--telekom-spacing-unit-x4);--spacing-x-inner-track:10px;--background-bar:var(--telekom-color-primary-standard);--radius-thumb:var(--telekom-radius-circle);--size-thumb:24px;--border-color-thumb:rgba(0, 0, 0, 0.05);--background-thumb:var(--telekom-color-ui-white);--shadow-thumb:0 0 2px 0 rgba(0, 0, 0, 0.24), 0 2px 4px 0 rgba(0, 0, 0, 0.24),\n    0 4px 12px 0 rgba(0, 0, 0, 0.26);--color-focus:var(--telekom-color-functional-focus-standard);--spacing-x-step-marks:8px;--color-step-mark:var(--telekom-color-text-and-icon-additional);--radius-step-mark:var(--telekom-radius-circle);--size-step-mark:4px;--font-label:var(--telekom-text-style-ui);--font-helper-text:var(--telekom-text-style-small-bold);--color-helper-text:var(--telekom-color-text-and-icon-additional)}[part~='base']{width:var(--width)}[part='label-wrapper']{display:flex;justify-content:space-between;align-items:flex-start}[part='label']{font:var(--font-label)}[part='value-text']{font:var(--font-label);font-variant-numeric:tabular-nums}[part='track-wrapper']{display:flex;position:relative;align-items:center}[part='track']{position:relative;box-sizing:border-box;display:flex;align-items:center;margin:var(--spacing-track);width:100%;height:var(--height-track);background:var(--background-track);border-radius:var(--radius-track);border:1px solid transparent}[part='inner-track']{position:absolute;display:flex;align-items:center;left:var(--spacing-x-inner-track);width:calc(100% - var(--spacing-x-inner-track) * 2);height:100%}[part='bar']{height:100%;position:absolute;z-index:1;border-radius:var(--radius-track);background-color:var(--background-bar);border:1px solid transparent}[part~='thumb-wrapper']{position:absolute;z-index:3;display:flex;align-items:center;justify-content:center;width:32px;height:32px;margin-left:-16px;background-color:transparent}[part~='thumb']{--_border:0 0 0 var(--telekom-spacing-unit-x025) var(--border-color-thumb);width:var(--size-thumb);height:var(--size-thumb);box-sizing:border-box;border-radius:var(--radius-thumb);background-color:var(--background-thumb);box-shadow:var(--_border), var(--shadow-thumb);border:1px solid transparent}[part~='thumb']:focus{outline:var(--telekom-line-weight-highlight) solid var(--color-focus);outline-offset:1px}[part='step-marks']{width:100%;position:relative;z-index:2;display:flex;justify-content:space-between;padding:0 var(--spacing-x-step-marks)}[part='step-mark']{width:var(--size-step-mark);height:var(--size-step-mark);background:var(--color-step-mark);border-radius:var(--telekom-radius-circle)}[part='meta']{display:flex;justify-content:space-between}[part='helper-text']{font:var(--font-helper-text);color:var(--color-helper-text)}[part~='disabled'] [part='label-wrapper'],[part~='disabled'] [part='helper-text']{color:var(--telekom-color-text-and-icon-disabled)}[part~='disabled'] [part='bar']{background-color:var(--telekom-color-ui-border-disabled)}[part~='disabled'] [part~='thumb-wrapper']{display:none}[part~='thumb-wrapper']:hover{cursor:grab}[part~='thumb-wrapper']:active{cursor:grabbing}[part~='disabled'] [part='track-wrapper']{cursor:not-allowed}:host-context([data-platform='ios']){--height-track:4px;--size-thumb:26px;--size-step-mark:2px}:host-context([data-platform='android']){--background-thumb:var(--telekom-color-primary-standard)}:host-context([data-platform='android']) [part~='thumb']{box-shadow:var(--_border), var(--telekom-shadow-raised-standard)}"},"../components/dist/esm/status-note-0089e9c9.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return statusNote}));var tagTypes={beta:"β",WIP:"🛠 WIP",deprecated:"😵 Deprecation notice",warning:"Warning"},defaultMessages={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function statusNote(_ref){var _ref$tag=_ref.tag,tag=void 0===_ref$tag?"WIP":_ref$tag,_ref$extraMessage=_ref.extraMessage,extraMessage=void 0===_ref$extraMessage?null:_ref$extraMessage,_ref$message=_ref.message,message=void 0===_ref$message?null:_ref$message,_ref$source=_ref.source,source=void 0===_ref$source?null:_ref$source,_ref$type=_ref.type;(0,console[void 0===_ref$type?"info":_ref$type])("%c scale – "+tagTypes[tag]+" ","background: #E20074; color: #FFF; border-radius: 4px","\n\n"+(message||defaultMessages[tag])+" "+(extraMessage?"\n"+extraMessage:"")+"\n    ",null!==source?"\nsource:":"","object"==typeof source?source:""+source,null!==source?"\n\n":"")}},"../components/dist/esm/utils-3cf81b34.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return isClickOutside})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isPseudoClassSupported})),__webpack_require__.d(__webpack_exports__,"c",(function(){return emitEvent})),__webpack_require__.d(__webpack_exports__,"d",(function(){return generateUniqueId})),__webpack_require__.d(__webpack_exports__,"e",(function(){return hasShadowDom})),__webpack_require__.d(__webpack_exports__,"f",(function(){return isScaleIcon}));var hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},isPseudoClassSupported=function isPseudoClassSupported(pseudoClass){var ss=document.styleSheets[0];if(!ss){var el=document.createElement("style");document.head.appendChild(el),ss=document.styleSheets[0],document.head.removeChild(el)}return function testPseudo(){try{return/^:/.test(pseudoClass)||(pseudoClass=":"+pseudoClass),ss.insertRule("html"+pseudoClass+"{}",0),ss.deleteRule(0),!0}catch(e){return!1}}()};function emitEvent(instance,eventKey,detail){var legacyKey=eventKey+"Legacy",emitted=[];return void 0!==instance[legacyKey]&&emitted.push(instance[legacyKey].emit(detail)),emitted.push(instance[eventKey].emit(detail)),emitted}function isClickOutside(event,host){var target=event.target,hasShadow=null!=target.shadowRoot,composedPath=hasShadow?event.composedPath():[];do{if(target===host)return!1;target=hasShadow?composedPath.shift():target.parentNode}while(target);return!0}var isScaleIcon=function isScaleIcon(el){return null!=el&&1===el.nodeType&&"SCALE-ICON"===el.nodeName.toUpperCase().substring(0,10)},id=0;function generateUniqueId(){return id++}}}]);
//# sourceMappingURL=20.6b996fce.iframe.bundle.js.map