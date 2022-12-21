(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSGoTo"] = factory();
	else
		root["HSGoTo"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-go-to.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-go-to.js":
/*!****************************!*\
  !*** ./src/js/hs-go-to.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSGoTo; });\n/* harmony import */ var _utils_scrollTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/scrollTo */ \"./src/utils/scrollTo.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar dataAttributeName = 'data-hs-go-to-options';\nvar defaults = {\n  pageContainerSelector: 'html, body',\n  targetSelector: null,\n  compensationSelector: null,\n  animationInit: 'animated',\n  animationIn: 'fadeInUp',\n  animationOut: 'fadeOutDown',\n  duration: 800,\n  offsetTop: 0,\n  position: {\n    init: null,\n    hide: null,\n    show: null\n  },\n  isReferencedToOtherPage: null,\n  preventEventClass: 'hs-go-to-prevent-event'\n};\n\nvar HSGoTo = /*#__PURE__*/function () {\n  function HSGoTo(el, options, id) {\n    _classCallCheck(this, HSGoTo);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(HSGoTo, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this = this;\n\n      var that = this;\n\n      var _loop = function _loop(i) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty('$initializedEl')) {\n          return \"continue\";\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n\n        var _compensationSelector = document.querySelector(_options.compensationSelector),\n            _targetSelector = document.querySelector(_options.targetSelector),\n            _pageContainerSelector = document.querySelector(_options.pageContainerSelector);\n\n        _options.targetOffsetTop = function () {\n          if (_compensationSelector) {\n            return _targetSelector ? _targetSelector.offsetTop - _compensationSelector.innerHeight : 0;\n          } else {\n            return _targetSelector ? _targetSelector.offsetTop : 0;\n          }\n        };\n\n        _this.prepareObject(_$el, _options); // Set Position\n\n\n        if (_options.position) {\n          _this.setPosition(_$el, _options);\n        } // Click Events\n\n\n        _$el.addEventListener('click', function (e) {\n          return _this.clickEvents(_$el, _options, {\n            _pageContainerSelector: _pageContainerSelector,\n            _compensationSelector: _compensationSelector,\n            _targetSelector: _targetSelector\n          });\n        }); // Scroll Events\n\n\n        if (_options.animationIn && _options.animationOut) {\n          document.addEventListener('scroll', function (e) {\n            return _this.scrollEvents(_$el, _options);\n          });\n        }\n      };\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var _ret = _loop(i);\n\n        if (_ret === \"continue\") continue;\n      }\n    }\n  }, {\n    key: \"prepareObject\",\n    value: function prepareObject($el, settings) {\n      if (settings.animationIn && settings.animationOut) {\n        if (navigator.userAgent.match('MSIE 10.0')) {\n          document.html.classList.add('ie10');\n        }\n\n        $el.classList.add(settings.animationInit, settings.animationOut, settings.preventEventClass);\n      }\n    }\n  }, {\n    key: \"setPosition\",\n    value: function setPosition($el, settings) {\n      for (var style in settings.position.init) {\n        $el.style.setProperty(style, settings.position.init[style]);\n      }\n    }\n  }, {\n    key: \"clickEvents\",\n    value: function clickEvents($el, settings, _ref) {\n      var _pageContainerSelector = _ref._pageContainerSelector;\n\n      if (!settings.isReferencedToOtherPage) {\n        if (event) {\n          event.preventDefault();\n        }\n\n        Object(_utils_scrollTo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n          to: settings.targetOffsetTop(),\n          el: _pageContainerSelector\n        }, settings.duration);\n      }\n    }\n  }, {\n    key: \"scrollEvents\",\n    value: function scrollEvents($el, settings) {\n      $el.style.visibility = '';\n\n      if (window.scrollY >= settings.offsetTop) {\n        if (settings.position.show) {\n          for (var style in settings.position.show) {\n            $el.style.setProperty(style, settings.position.show[style]);\n          }\n        }\n\n        $el.classList.remove(settings.animationOut);\n        $el.classList.add(settings.animationIn);\n      } else {\n        if (settings.position.show) {\n          for (var _style in settings.position.show) {\n            $el.style.setProperty(_style, settings.position.show[_style]);\n          }\n        }\n\n        $el.classList.remove(settings.animationIn);\n        $el.classList.add(settings.animationOut);\n      }\n    }\n  }, {\n    key: \"addToCollection\",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: Object.assign({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: \"getItem\",\n    value: function getItem(item) {\n      if (typeof item === 'number') {\n        return this.collection[item].$initializedEl;\n      } else {\n        return this.collection.find(function (el) {\n          return el.id === item;\n        }).$initializedEl;\n      }\n    }\n  }]);\n\n  return HSGoTo;\n}();\n\n\n\n//# sourceURL=webpack://HSGoTo/./src/js/hs-go-to.js?");

/***/ }),

/***/ "./src/utils/scrollTo.js":
/*!*******************************!*\
  !*** ./src/utils/scrollTo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return scrollTo; });\nMath.easeInOutQuad = function (t, b, c, d) {\n  t /= d / 2;\n  if (t < 1) return c / 2 * t * t + b;\n  t--;\n  return -c / 2 * (t * (t - 2) - 1) + b;\n};\n/*\n  scrollTo(element.scrollTop || 200, 400)\n*/\n\n\nfunction scrollTo(_ref, duration) {\n  var el = _ref.el,\n      to = _ref.to;\n  var element = el;\n  var start = element && element.scrollTop || window.pageYOffset,\n      change = to - start,\n      increment = 20;\n  var currentTime = 0;\n\n  var animateScroll = function animateScroll() {\n    currentTime += increment;\n    var val = Math.easeInOutQuad(currentTime, start, change, duration);\n    el.scrollTop = val;\n\n    if (currentTime < duration) {\n      window.setTimeout(animateScroll, increment);\n    }\n  };\n\n  animateScroll();\n}\n\n//# sourceURL=webpack://HSGoTo/./src/utils/scrollTo.js?");

/***/ })

/******/ })["default"];
});