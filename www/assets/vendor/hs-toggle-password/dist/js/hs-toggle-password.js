(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSTogglePassword"] = factory();
	else
		root["HSTogglePassword"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-toggle-password.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-toggle-password.js":
/*!**************************************!*\
  !*** ./src/js/hs-toggle-password.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSTogglePassword Plugin\n* @version: 1.0.0 (Sat, 30 Jul 2021)\n* @requires: tom-select 1.7.26\n* @author: HtmlStream\n* @event-namespace: .HSTogglePassword\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2021 Htmlstream\n*/\nvar dataAttributeName = 'data-hs-toggle-password-options';\nvar defaults = {\n  classChangeTarget: null,\n  defaultClass: null,\n  showClass: null,\n  show: false\n};\n\nvar _default = /*#__PURE__*/function () {\n  function _default(el, options, id) {\n    _classCallCheck(this, _default);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(_default, [{\n    key: \"_init\",\n    value: function _init() {\n      var that = this;\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty('$initializedEl')) {\n          continue;\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n\n        if (Array.isArray(_options.target)) {\n          (function () {\n            var targets = [];\n\n            _options.target.forEach(function (target) {\n              targets.push(document.querySelector(target));\n            });\n\n            _options.target = targets;\n            _options.classChangeTarget = _options.classChangeTarget ? document.querySelector(_options.classChangeTarget) : _options.target;\n          })();\n        } else {\n          _options.target = document.querySelector(_options.target);\n          _options.classChangeTarget = _options.classChangeTarget ? document.querySelector(_options.classChangeTarget) : _options.target;\n        }\n\n        if (_options.show) {\n          _$el.type = \"text\";\n        }\n\n        that._toggleClass(_options, _options.show);\n\n        that._showPassword(_$el, _options);\n      }\n    }\n  }, {\n    key: \"_showPassword\",\n    value: function _showPassword(el, config) {\n      var that = this,\n          $target = config.target;\n\n      if (Array.isArray($target)) {\n        $target.forEach(function (target) {\n          target.addEventListener('click', function (event) {\n            if (el.type === \"password\") {\n              el.type = \"text\";\n\n              that._toggleClass(config, true);\n            } else {\n              el.type = \"password\";\n\n              that._toggleClass(config, false);\n            }\n          });\n        });\n      } else {\n        $target.addEventListener('click', function (event) {\n          if (el.type === \"password\") {\n            el.type = \"text\";\n\n            that._toggleClass(config, true);\n          } else {\n            el.type = \"password\";\n\n            that._toggleClass(config, false);\n          }\n        });\n      }\n    }\n  }, {\n    key: \"_toggleClass\",\n    value: function _toggleClass(config) {\n      var _this = this;\n\n      var isShow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      var that = this,\n          $target = config.classChangeTarget;\n\n      if (Array.isArray($target)) {\n        $target.forEach(function (target) {\n          if (isShow) {\n            _this._removeClasses(target, config.defaultClass);\n\n            _this._addClasses(target, config.showClass);\n          } else {\n            _this._removeClasses(target, config.showClass);\n\n            _this._addClasses(target, config.defaultClass);\n          }\n        });\n      } else {\n        if (isShow) {\n          this._removeClasses($target, config.defaultClass);\n\n          this._addClasses($target, config.showClass);\n        } else {\n          this._removeClasses($target, config.showClass);\n\n          this._addClasses($target, config.defaultClass);\n        }\n      }\n    }\n  }, {\n    key: \"_addClasses\",\n    value: function _addClasses($target, classes) {\n      if (classes && classes.trim().indexOf(' ') != -1) {\n        var array = classes.split(' ');\n\n        for (var i = 0, length = array.length; i < length; i++) {\n          $target.classList.add(array[i]);\n        }\n      } else {\n        $target.classList.add(classes);\n      }\n    }\n  }, {\n    key: \"_removeClasses\",\n    value: function _removeClasses($target, classes) {\n      if (classes && classes.trim().indexOf(' ') != -1) {\n        var array = classes.split(' ');\n\n        for (var i = 0, length = array.length; i < length; i++) {\n          $target.classList.remove(array[i]);\n        }\n      } else {\n        $target.classList.remove(classes);\n      }\n    }\n  }, {\n    key: \"addToCollection\",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: Object.assign({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: \"getItem\",\n    value: function getItem(item) {\n      if (typeof item === 'number') {\n        return this.collection[item].$initializedEl;\n      } else {\n        return this.collection.find(function (el) {\n          return el.id === item;\n        }).$initializedEl;\n      }\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack://HSTogglePassword/./src/js/hs-toggle-password.js?");

/***/ })

/******/ })["default"];
});