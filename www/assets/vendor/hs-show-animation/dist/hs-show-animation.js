(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSShowAnimation"] = factory();
	else
		root["HSShowAnimation"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-show-animation.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-show-animation.js":
/*!*************************************!*\
  !*** ./src/js/hs-show-animation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSShowAnimation; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSShowAnimation Plugin\n* @version: 3.0.0 (Sat, 20 Nov 2021)\n* @author: HtmlStream\n* @event-namespace: .HSShowAnimation\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2021 Htmlstream\n*/\n\nvar dataAttributeName = 'data-hs-show-animation-options';\nvar defaults = {\n  groupName: null,\n  targetSelector: null,\n  siblingSelector: null,\n  eventType: 'click',\n  classMap: {\n    active: 'active'\n  },\n  animationType: 'simple',\n  animationInit: 'animated',\n  animationIn: null,\n  duration: null,\n  afterShow: function afterShow() {}\n};\n\nvar HSShowAnimation = /*#__PURE__*/function () {\n  function HSShowAnimation(el, options, id) {\n    _classCallCheck(this, HSShowAnimation);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(HSShowAnimation, [{\n    key: \"_init\",\n    value: function _init() {\n      var that = this;\n\n      var _loop = function _loop(i) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty('$initializedEl')) {\n          return \"continue\";\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n        that.prepareObject(_$el, _options);\n\n        _$el.addEventListener(_options.eventType, function (e) {\n          e.preventDefault();\n\n          if (_$el.classList.contains(_options.classMap.active)) {\n            return;\n          }\n\n          that.activeClassChange(_options);\n\n          if (_options.animationType === 'css-animation') {\n            that.cssAnimation(_options);\n          } else {\n            that.simpleAnimation(_options);\n          }\n        });\n      };\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var _ret = _loop(i);\n\n        if (_ret === \"continue\") continue;\n      }\n    }\n  }, {\n    key: \"prepareObject\",\n    value: function prepareObject($el, settings) {\n      var $targetSelector = document.querySelector(settings.targetSelector),\n          $siblingSelector = document.querySelector(settings.siblingSelector);\n      $el.setAttribute('data-hs-show-animation-link-group', settings.groupName);\n\n      if (settings.duration) {\n        $targetSelector.style.animationDuration = \"\".concat(settings.duration, \"ms\");\n      }\n\n      $targetSelector.setAttribute('data-hs-show-animation-target-group', settings.groupName);\n\n      if ($siblingSelector) {\n        $siblingSelector.setAttribute('data-hs-show-animation-target-group', settings.groupName);\n      }\n    }\n  }, {\n    key: \"activeClassChange\",\n    value: function activeClassChange(settings) {\n      var $targets = document.querySelectorAll(\"[data-hs-show-animation-link-group=\\\"\".concat(settings.groupName, \"\\\"]\"));\n\n      if ($targets.length) {\n        $targets.forEach(function ($item) {\n          return $item.classList.remove(settings.classMap.active);\n        });\n      }\n    }\n  }, {\n    key: \"simpleAnimation\",\n    value: function simpleAnimation(settings) {\n      var $targets = document.querySelectorAll(\"[data-hs-show-animation-target-group=\\\"\".concat(settings.groupName, \"\\\"]\")),\n          $targetSelector = document.querySelector(settings.targetSelector);\n\n      if ($targets.length) {\n        $targets.forEach(function ($item) {\n          $item.style.display = 'none';\n          $item.style.opacity = 0;\n        });\n      }\n\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeIn\"])($targetSelector, 400);\n      settings.afterShow();\n    }\n  }, {\n    key: \"cssAnimation\",\n    value: function cssAnimation(settings) {\n      var $targets = document.querySelectorAll(\"[data-hs-show-animation-target-group=\\\"\".concat(settings.groupName, \"\\\"]\")),\n          $targetSelector = document.querySelector(settings.targetSelector);\n\n      if ($targets.length) {\n        $targets.forEach(function ($item) {\n          $item.style.display = 'none';\n          $item.style.opacity = 0;\n          $item.classList.remove(settings.animationInit, settings.animationIn);\n        });\n      }\n\n      $targetSelector.style.display = 'block';\n      settings.afterShow();\n      setTimeout(function () {\n        $targetSelector.style.opacity = 1;\n        $targetSelector.classList.add(settings.animationInit, settings.animationIn);\n      }, 50);\n    }\n  }, {\n    key: \"addToCollection\",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: Object.assign({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: \"getItem\",\n    value: function getItem(item) {\n      if (typeof item === 'number') {\n        return this.collection[item].$initializedEl;\n      } else {\n        return this.collection.find(function (el) {\n          return el.id === item;\n        }).$initializedEl;\n      }\n    }\n  }]);\n\n  return HSShowAnimation;\n}();\n\n\n\n//# sourceURL=webpack://HSShowAnimation/./src/js/hs-show-animation.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: fadeIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeIn\", function() { return fadeIn; });\nfunction fadeIn(el, time) {\n  if (!el || el.offsetParent !== null) return el;\n  el.style.opacity = 0;\n  el.style.display = 'block';\n  var last = +new Date();\n\n  var tick = function tick() {\n    el.style.opacity = +el.style.opacity + (new Date() - last) / time;\n    last = +new Date();\n\n    if (+el.style.opacity < 1) {\n      window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);\n    }\n  };\n\n  tick();\n}\n\n//# sourceURL=webpack://HSShowAnimation/./src/js/utils.js?");

/***/ })

/******/ })["default"];
});