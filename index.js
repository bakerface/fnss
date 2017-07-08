"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function createCommonjsModule(e,t){return t={exports:{}},e(t,t.exports),t.exports}function makeEmptyFunction(e){return function(){return e}}function invariant(e,t,n,r,o,i,s,u){if(validateFormat(t),!e){var a;if(void 0===t)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,o,i,s,u],l=0;(a=new Error(t.replace(/%s/g,function(){return c[l++]}))).name="Invariant Violation"}throw a.framesToPop=1,a}}function createStyleSheet(e){return e}function resolve(e){return function t(n){if(!n)return n;if("function"==typeof n)return t(n(e));if(Array.isArray(n)){var r;return(r=[]).concat.apply(r,toConsumableArray(n.map(t)))}return"object"===(void 0===n?"undefined":_typeof(n))?Object.keys(n).reduce(function(e,r){return e[r]=t(n[r]),e},{}):n}}function withStyleSheet(e){var t=e.displayName||e.name||"Component",n=function(t){function n(e,t){classCallCheck(this,n);var r=possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));return r.onStyleSheetUpdated=r.onStyleSheetUpdated.bind(r),r.state={stylesheet:t.stylesheet.getState()},r}return inherits(n,t),createClass(n,[{key:"componentDidMount",value:function(){this.context.stylesheet.subscribe(this.onStyleSheetUpdated)}},{key:"componentWillUnmount",value:function(){this.context.stylesheet.unsubscribe(this.onStyleSheetUpdated)}},{key:"onStyleSheetUpdated",value:function(e){this.setState({stylesheet:e})}},{key:"render",value:function(){return React.createElement(e,_extends({stylesheet:this.state.stylesheet},this.props))}}]),n}(React.PureComponent);return n.displayName="StyleSheetSubscriber("+t+")",n.contextTypes={stylesheet:index.object.isRequired},n}function wrap(e){function t(t){var n=t.stylesheet,r=t.style,o=objectWithoutProperties(t,["stylesheet","style"]),i=resolve(n)(r);return React.createElement(e,_extends({style:i},o))}var n=e.displayName||e.name||"Component";return t.displayName="StyleSheetWrapper("+n+")",t.propTypes={children:index.node,style:index.any,stylesheet:index.object.isRequired},t.defaultProps={children:null,style:[]},withStyleSheet(t)}Object.defineProperty(exports,"__esModule",{value:!0});var React=_interopDefault(require("react")),emptyFunction=function(){};emptyFunction.thatReturns=makeEmptyFunction,emptyFunction.thatReturnsFalse=makeEmptyFunction(!1),emptyFunction.thatReturnsTrue=makeEmptyFunction(!0),emptyFunction.thatReturnsNull=makeEmptyFunction(null),emptyFunction.thatReturnsThis=function(){return this},emptyFunction.thatReturnsArgument=function(e){return e};var emptyFunction_1=emptyFunction,validateFormat=function(e){},invariant_1=invariant,ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ReactPropTypesSecret_1=ReactPropTypesSecret,factoryWithThrowingShims=function(){function e(e,t,n,r,o,i){i!==ReactPropTypesSecret_1&&invariant_1(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=emptyFunction_1,n.PropTypes=n,n},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},objectWithoutProperties=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},index=createCommonjsModule(function(e){e.exports=factoryWithThrowingShims()}),StyleSheetContext=function(){function e(t){classCallCheck(this,e),this._state=t,this._listeners=[]}return createClass(e,[{key:"getState",value:function(){return this._state}},{key:"publish",value:function(e){this._listeners.forEach(function(t){return t(e)}),this._state=e}},{key:"subscribe",value:function(e){var t=this;return this._listeners.push(e),{remove:function(){return t.unsubscribe(e)}}}},{key:"unsubscribe",value:function(e){this._listeners=this._listeners.filter(function(t){return t!==e})}}]),e}(),sanitize=function(e){e.children;return objectWithoutProperties(e,["children"])},StyleSheetProvider=function(e){function t(e){classCallCheck(this,t);var n=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.stylesheet=new StyleSheetContext(sanitize(e)),n}return inherits(t,e),createClass(t,[{key:"componentWillReceiveProps",value:function(e){this.stylesheet.publish(sanitize(e))}},{key:"getChildContext",value:function(){return{stylesheet:this.stylesheet}}},{key:"render",value:function(){return this.props.children}}]),t}(React.PureComponent);StyleSheetProvider.displayName="StyleSheetProvider",StyleSheetProvider.propTypes={children:index.node},StyleSheetProvider.defaultProps={children:null},StyleSheetProvider.childContextTypes={stylesheet:index.object.isRequired},exports.Provider=StyleSheetProvider,exports.create=createStyleSheet,exports.wrap=wrap;
