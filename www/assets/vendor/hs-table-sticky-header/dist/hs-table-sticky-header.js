(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSTableStickyHeader"] = factory();
	else
		root["HSTableStickyHeader"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./hs-sticky-header/src/hs.sticky-header.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hs-sticky-header/src/hs.sticky-header.js":
/*!**************************************************!*\
  !*** ./hs-sticky-header/src/hs.sticky-header.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSTableStickyHeader; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\r\n * HS Sticky Header\r\n * @version: 2.0.0\r\n * @author: HtmlStream\r\n * @event-namespace: .HSTableStickyHeader\r\n * @browser-support: Edge+\r\n * @license:\r\n *\r\n * Copyright 2021 HtmlStream\r\n *\r\n */\nvar HSTableStickyHeader = /*#__PURE__*/function () {\n  function HSTableStickyHeader(el, settings) {\n    _classCallCheck(this, HSTableStickyHeader);\n\n    this.$el = typeof el === \"string\" ? document.querySelector(el) : el;\n    this.defaults = {\n      classMap: {\n        original: {\n          mainEl: 'table-responsive',\n          thead: 'sticky-header-original-thead',\n          theadItemsWrapper: 'sticky-header-original-th-inner-wrapper'\n        },\n        cloned: {\n          mainEl: 'sticky-header-cloned-wrapper',\n          table: 'sticky-header-cloned-table'\n        }\n      },\n      offsetTop: 0\n    };\n    this.dataSettings = this.$el.hasAttribute('data-hs-table-sticky-header-options') ? JSON.parse(this.$el.getAttribute('data-hs-table-sticky-header-options')) : {};\n    this.settings = Object.assign({}, this.defaults, this.dataSettings, settings);\n    this.$table = this.$el.querySelector('table');\n    this.$tbody = this.$el.querySelector('tbody');\n    this.$thead = this.$el.querySelector('thead');\n    this.$theadItems = this.$thead.querySelectorAll('th');\n  }\n\n  _createClass(HSTableStickyHeader, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      var $scroll = this.$el.querySelector(\".\".concat(this.defaults.classMap.original.mainEl)),\n          $clonedThead = this.setClonedTheadItemsWidth(),\n          wrapper = \"\\n        <div class=\\\"\".concat(this.defaults.classMap.cloned.mainEl, \"\\\" style=\\\"top: \").concat(this.settings.offsetTop, \"\\\">\\n          <table class=\\\"\").concat(this.defaults.classMap.cloned.table, \" \").concat(this.$table.className, \" mb-0 border-bottom-0\\\" style=\\\"width: \").concat(this.$table.offsetWidth + 'px', \"\\\">\\n              \").concat($clonedThead.outerHTML, \"\\n          </table>\\n        </div>\\n      \"),\n          $wrapper = document.createRange().createContextualFragment(wrapper),\n          $itemWrapper = document.createElement('div');\n      this.$el.insertBefore($wrapper, this.$el.firstChild);\n      this.$thead.classList.add(this.defaults.classMap.original.thead);\n      $itemWrapper.classList.add(this.defaults.classMap.original.theadItemsWrapper);\n      this.$theadItems.forEach(function ($item) {\n        $item.parentNode.insertBefore($itemWrapper, $item);\n        $itemWrapper.appendChild($item);\n      });\n      window.addEventListener('resize', function (e) {\n        _this.$el.querySelector(\".\".concat(_this.defaults.classMap.cloned.table)).style.width = _this.$table.offsetWidth + 'px';\n      });\n      $scroll.addEventListener('scroll', function (e) {\n        _this.$el.find(\".\".concat(_this.defaults.classMap.cloned.mainEl)).scrollLeft = parseInt($scroll.scrollLeft);\n      });\n      return this;\n    }\n  }, {\n    key: \"setClonedTheadItemsWidth\",\n    value: function setClonedTheadItemsWidth() {\n      var _this2 = this;\n\n      var $clonedThead = this.$thead.cloneNode(true),\n          $clonedTheadItems = $clonedThead.querySelectorAll('th');\n\n      var setWidth = function setWidth() {\n        $clonedTheadItems.forEach(function ($item, index) {\n          $item.style.width = _this2.getOriginalTbodyItemsWidth()[index] + 'px';\n        });\n      };\n\n      setWidth();\n      document.addEventListener('resize', function () {\n        setWidth();\n      }, false);\n      return $clonedThead;\n    }\n  }, {\n    key: \"getOriginalTbodyItemsWidth\",\n    value: function getOriginalTbodyItemsWidth() {\n      var $tbodyItems = this.$tbody.querySelectorAll('tr:first-child > *'),\n          widthArr = [];\n      $tbodyItems.forEach(function ($item) {\n        widthArr.push($item.offsetWidth);\n      });\n      return widthArr;\n    }\n  }]);\n\n  return HSTableStickyHeader;\n}();\n\n\n\n//# sourceURL=webpack://HSTableStickyHeader/./hs-sticky-header/src/hs.sticky-header.js?");

/***/ })

/******/ })["default"];
});