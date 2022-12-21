(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSStickyBlock"] = factory();
	else
		root["HSStickyBlock"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-sticky-block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-sticky-block.js":
/*!***********************************!*\
  !*** ./src/js/hs-sticky-block.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSStickyBlock; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/*\n* HSStickyBlock Plugin\n* @version: 3.0.0 (Wed, 24 Nov 2021)\n* @author: HtmlStream\n* @event-namespace: .HSStickyBlock\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2021 Htmlstream\n*/\nvar isNumeric = function isNumeric(n) {\n  return !isNaN(parseFloat(n)) && isFinite(n);\n},\n    offset = function offset(el) {\n  el = _typeof(el) === \"object\" ? el : document.querySelector(el);\n  return {\n    top: el ? window.pageYOffset + el.getBoundingClientRect().top : 0,\n    left: el ? el.getBoundingClientRect().left : 0\n  };\n},\n    css = function css(el, style) {\n  el = _typeof(el) === \"object\" ? el : document.querySelector(el);\n\n  for (var property in style) {\n    el.style.setProperty(property, style[property], 'important'); // el.style[property] = style[property]\n  }\n};\n\nvar dataAttributeName = 'data-hs-sticky-block-options';\nvar defaults = {\n  parentSelector: null,\n  parentWidth: null,\n  parentPaddingLeft: null,\n  parentOffsetLeft: null,\n  targetSelector: null,\n  targetHeight: 0,\n  stickyHeight: null,\n  stickyOffsetTop: 0,\n  stickyOffsetBottom: 0,\n  windowOffsetTop: 0,\n  startPoint: null,\n  endPoint: null,\n  resolutionsList: {\n    xs: 0,\n    sm: 576,\n    md: 768,\n    lg: 992,\n    xl: 1200\n  },\n  breakpoint: 'lg',\n  styles: {\n    position: 'fixed'\n  },\n  classMap: {\n    kill: 'hs-kill-sticky'\n  }\n};\n\nvar HSStickyBlock = /*#__PURE__*/function () {\n  function HSStickyBlock(el, options, id) {\n    _classCallCheck(this, HSStickyBlock);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(HSStickyBlock, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this = this;\n\n      var that = this;\n      console.log(123);\n\n      var _loop = function _loop(i) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty('$initializedEl')) {\n          return \"continue\";\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n        Array('resize', 'scroll').forEach(function (evt) {\n          return window.addEventListener(evt, function () {\n            return _this.update(_$el, _options);\n          }, false);\n        });\n      };\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var _ret = _loop(i);\n\n        if (_ret === \"continue\") continue;\n      }\n    }\n  }, {\n    key: \"update\",\n    value: function update($el, settings) {\n      var that = this;\n\n      that._setRules($el, settings);\n    }\n  }, {\n    key: \"_updateOptions\",\n    value: function _updateOptions($el, settings) {\n      var parentSelector = document.querySelector(settings.parentSelector),\n          targetSelector = document.querySelector(settings.targetSelector);\n      settings.windowOffsetTop = window.pageYOffset;\n      settings.startPointPos = offset(settings.startPoint).top;\n      settings.endPointPos = offset(settings.endPoint).top;\n      settings.parentWidth = parentSelector ? parentSelector.clientWidth : 0;\n      settings.parentPaddingLeft = parentSelector ? parseInt(window.getComputedStyle(parentSelector).paddingLeft) : 0;\n      settings.parentOffsetLeft = offset(parentSelector).left;\n      settings.targetHeight = targetSelector ? targetSelector.offsetHeight : 0;\n      settings.stickyHeight = $el.offsetHeight;\n    }\n  }, {\n    key: \"_setRules\",\n    value: function _setRules($el, settings) {\n      var that = this;\n\n      that._kill($el, settings);\n\n      that._updateOptions($el, settings);\n\n      if (!$el.classList.contains(settings.classMap.kill)) {\n        if (settings.windowOffsetTop >= settings.startPointPos - settings.targetHeight - settings.stickyOffsetTop && settings.windowOffsetTop <= settings.endPointPos - settings.targetHeight - settings.stickyOffsetTop) {\n          that._add($el, settings);\n\n          that._top($el, settings);\n        } else {\n          that._reset($el);\n        }\n\n        if (settings.windowOffsetTop >= settings.endPointPos - settings.targetHeight - settings.stickyHeight - settings.stickyOffsetTop - settings.stickyOffsetBottom) {\n          that._bottom($el, settings);\n        }\n      }\n    }\n  }, {\n    key: \"_add\",\n    value: function _add($el, settings) {\n      css($el, {\n        position: settings.styles.position,\n        left: settings.parentOffsetLeft + settings.parentPaddingLeft + 'px',\n        width: settings.parentWidth + 'px'\n      });\n    }\n  }, {\n    key: \"_top\",\n    value: function _top($el, settings) {\n      css($el, {\n        top: settings.stickyOffsetTop + settings.targetHeight + 'px'\n      });\n    }\n  }, {\n    key: \"_bottom\",\n    value: function _bottom($el, settings) {\n      css($el, {\n        top: settings.endPointPos - settings.windowOffsetTop - settings.stickyHeight - settings.stickyOffsetBottom + 'px'\n      });\n    }\n  }, {\n    key: \"_reset\",\n    value: function _reset($el, settings) {\n      css($el, {\n        position: '',\n        top: '',\n        bottom: '',\n        left: '',\n        width: ''\n      });\n    }\n  }, {\n    key: \"_kill\",\n    value: function _kill($el, settings) {\n      var that = this;\n\n      if (window.innerWidth < settings.resolutionsList[settings.breakpoint]) {\n        $el.classList.add(settings.classMap.kill);\n\n        that._reset($el);\n      } else {\n        $el.classList.remove(settings.classMap.kill);\n      }\n    }\n  }, {\n    key: \"addToCollection\",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: Object.assign({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: \"getItem\",\n    value: function getItem(item) {\n      if (typeof item === 'number') {\n        return this.collection[item].$initializedEl;\n      } else {\n        return this.collection.find(function (el) {\n          return el.id === item;\n        }).$initializedEl;\n      }\n    }\n  }]);\n\n  return HSStickyBlock;\n}();\n\n\n\n//# sourceURL=webpack://HSStickyBlock/./src/js/hs-sticky-block.js?");

/***/ })

/******/ })["default"];
});