(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSScrollspy"] = factory();
	else
		root["HSScrollspy"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-scrollspy.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-scrollspy.js":
/*!********************************!*\
  !*** ./src/js/hs-scrollspy.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSScrollspy; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\r\n* HSScrollspy Plugin\r\n* @version: 1.0.0 (Wed, 24 Nov 2021)\r\n* @author: HtmlStream\r\n* @event-namespace: .HSScrollspy\r\n* @license: Htmlstream Libraries (https://htmlstream.com/)\r\n* Copyright 2021 Htmlstream\r\n*/\nvar HSScrollspy = /*#__PURE__*/function () {\n  function HSScrollspy(elem, settings) {\n    _classCallCheck(this, HSScrollspy);\n\n    this.$el = typeof elem === 'string' ? document.querySelector(elem) : elem;\n    this.defaults = {\n      disableCollapse: null,\n      scrollOffset: 0,\n      collapsibleNav: null,\n      resolutionsList: {\n        xs: 0,\n        sm: 576,\n        md: 768,\n        lg: 992,\n        xl: 1200\n      },\n      resetOffset: null,\n      breakpoint: 'lg',\n      scrollspyContainer: document.body\n    };\n    this.dataSettings = this.$el.hasAttribute('data-hs-scrollspy-options') ? JSON.parse(this.$el.getAttribute('data-hs-scrollspy-options')) : {}, this.settings = Object.assign({}, this.defaults, this.dataSettings, settings);\n    this.init();\n  }\n\n  _createClass(HSScrollspy, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.scrollSpyInstance = bootstrap.ScrollSpy.getInstance(this.settings.scrollspyContainer);\n      var nav = _typeof(this.scrollSpyInstance._config.target) === 'object' ? this.scrollSpyInstance._config.target : document.querySelector(this.scrollSpyInstance._config.target);\n\n      if (this.settings.disableCollapse === null && this.$el.classList.contains('collapse')) {\n        this.settings.disableCollapse = false;\n      }\n\n      nav.addEventListener('click', function (e) {\n        if (!e.target.closest('a:not([href=\"#\"]):not([href=\"#0\"])')) return;\n        e.preventDefault();\n\n        if (_this.settings.disableCollapse === false && window.innerWidth < _this.settings.resolutionsList[_this.settings.breakpoint]) {\n          new bootstrap.Collapse(_this.$el).hide();\n          return _this.$el.addEventListener('hidden.bs.collapse', function () {\n            _this.smoothScroll(e);\n          });\n        } else {\n          _this.smoothScroll(e);\n        }\n      });\n    }\n  }, {\n    key: \"smoothScroll\",\n    value: function smoothScroll(e) {\n      var offset = this.settings.resetOffset && window.innerWidth < this.settings.resolutionsList[this.settings.resetOffset] ? 0 : this.scrollSpyInstance._config.offset;\n      window.scroll({\n        top: document.querySelector(e.target.hash).offsetTop - offset - this.settings.scrollOffset,\n        left: 0,\n        behavior: 'smooth'\n      });\n    }\n  }]);\n\n  return HSScrollspy;\n}();\n\n\n\n//# sourceURL=webpack://HSScrollspy/./src/js/hs-scrollspy.js?");

/***/ })

/******/ })["default"];
});