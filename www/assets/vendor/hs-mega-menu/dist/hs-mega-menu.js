(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSMegaMenu"] = factory();
	else
		root["HSMegaMenu"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-mega-menu.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-mega-menu.js":
/*!********************************!*\
  !*** ./src/js/hs-mega-menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSMegaMenu; });\n/* harmony import */ var _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/object-assign-deep */ \"./src/js/methods/object-assign-deep.js\");\n/* harmony import */ var _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _methods_get_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/get-type */ \"./src/js/methods/get-type.js\");\n/* harmony import */ var _methods_smart_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/smart-position */ \"./src/js/methods/smart-position.js\");\n/* harmony import */ var _methods_desktop_css_animation_enable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/desktop-css-animation-enable */ \"./src/js/methods/desktop-css-animation-enable.js\");\n/* harmony import */ var _methods_desktop_mouseenter_event_listener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/desktop-mouseenter-event-listener */ \"./src/js/methods/desktop-mouseenter-event-listener.js\");\n/* harmony import */ var _methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./methods/desktop-mouseleave-event-listener */ \"./src/js/methods/desktop-mouseleave-event-listener.js\");\n/* harmony import */ var _methods_desktop_click_event_listener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./methods/desktop-click-event-listener */ \"./src/js/methods/desktop-click-event-listener.js\");\n/* harmony import */ var _methods_mobile_click_event_listener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./methods/mobile-click-event-listener */ \"./src/js/methods/mobile-click-event-listener.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSMegaMenu Plugin\n* @version: 2.0.1 (Sun, 1 Nov 2021)\n* @author: HtmlStream\n* @event-namespace: .HSMegaMenu\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2021 Htmlstream\n*/\n\n\n\n\n\n\n\n\nvar dataAttributeName = 'data-hs-mega-menu-options';\nvar defaults = {\n  eventType: 'hover',\n  direction: 'horizontal',\n  breakpoint: 'lg',\n  rtl: false,\n  isMenuOpened: false,\n  sideBarRatio: 1 / 4,\n  pageContainer: document.getElementsByTagName('body'),\n  mobileSpeed: 400,\n  duration: 300,\n  delay: 0,\n  itemOptions: {\n    megaMenuTimeOut: null,\n    desktop: {\n      animation: 'animated',\n      animationIn: 'slideInUp',\n      animationOut: false,\n      position: null,\n      maxWidth: null\n    }\n  },\n  classMap: {\n    rtl: '.hs-rtl',\n    reversed: '.hs-reversed',\n    initialized: '.hs-menu-initialized',\n    mobileState: '.hs-mobile-state',\n    invoker: '.hs-mega-menu-invoker',\n    subMenu: '.hs-sub-menu',\n    hasSubMenu: '.hs-has-sub-menu',\n    hasSubMenuActive: '.hs-sub-menu-opened',\n    megaMenu: '.hs-mega-menu',\n    hasMegaMenu: '.hs-has-mega-menu',\n    hasMegaMenuActive: '.hs-mega-menu-opened'\n  }\n};\n\nvar HSMegaMenu = /*#__PURE__*/function () {\n  function HSMegaMenu(el, options, id) {\n    _classCallCheck(this, HSMegaMenu);\n\n    this.collection = [];\n    var that = this;\n    var elems;\n\n    if (el instanceof HTMLElement) {\n      elems = [el];\n    } else if (el instanceof Object) {\n      elems = el;\n    } else {\n      elems = document.querySelectorAll(el);\n    }\n\n    for (var i = 0; i < elems.length; i += 1) {\n      that.addToCollection(elems[i], options, id || elems[i].id);\n    }\n\n    if (!that.collection.length) {\n      return false;\n    } // initialization calls\n\n\n    that._init();\n\n    return this;\n  }\n\n  _createClass(HSMegaMenu, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this = this;\n\n      var that = this;\n\n      var _loop = function _loop(i) {\n        var _$el = void 0;\n\n        var _options = void 0;\n\n        if (that.collection[i].hasOwnProperty('$initializedEl')) {\n          return \"continue\";\n        }\n\n        _$el = that.collection[i].$el;\n        _options = that.collection[i].options;\n        _options.state = null; // Resolution list\n\n        resolutionsList = {\n          xs: 0,\n          sm: 576,\n          md: 768,\n          lg: 992,\n          xl: 1200\n        }; // Keycodes\n\n        ESC_KEYCODE = 27;\n        TAB_KEYCODE = 9;\n        ENTER_KEYCODE = 13;\n        SPACE_KEYCODE = 32;\n        ARROW_UP_KEYCODE = 38;\n        ARROW_DOWN_KEYCODE = 40;\n        ARROW_RIGHT_KEYCODE = 39;\n        ARROW_LEFT_KEYCODE = 37; // Prevent scroll\n\n        var preventScroll = function preventScroll(keycode) {\n          return function (e) {\n            if (e.which === keycode) {\n              e.preventDefault();\n            }\n          };\n        }; // Get Item Settings\n\n\n        var getItemSettings = function getItemSettings($el) {\n          if (!$el) return false;\n          var dataSettings = $el.hasAttribute('data-hs-mega-menu-item-options') ? JSON.parse($el.getAttribute('data-hs-mega-menu-item-options')) : {},\n              itemSettings = _options.itemOptions;\n          itemSettings = Object.assign({}, itemSettings, dataSettings);\n\n          itemSettings.activeItemClass = function () {\n            return Object(_methods_get_type__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($el, _options) === 'mega-menu' ? _options.classMap.hasMegaMenuActive : _options.classMap.hasSubMenuActive;\n          };\n\n          return itemSettings;\n        };\n\n        var stateDetection = function stateDetection() {\n          if (window.innerWidth < resolutionsList[_options.breakpoint]) {\n            _this.state = 'mobile';\n          } else {\n            _this.state = 'desktop';\n          }\n        };\n\n        stateDetection(); // State Detection\n\n        window.addEventListener('resize', function () {\n          stateDetection();\n        }); // Set RTL\n\n        if (_options.rtl) {\n          _$el.addClass(_options.classMap.rtl.slice(1));\n        } // Init Menu Items\n\n\n        _$el.querySelectorAll(\"\".concat(_options.classMap.hasMegaMenu, \", \").concat(_options.classMap.hasSubMenu)).forEach(function (el) {\n          _this.MegaMenuItem(el, el.querySelector(_options.classMap[Object(_methods_get_type__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el, _options) === 'mega-menu' ? 'megaMenu' : 'subMenu']), _options);\n        }); // Add Initialized Classes\n\n\n        _$el.classList.add(\"\".concat(_options.classMap.initialized.slice(1)), \"hs-menu-\".concat(_options.direction)); // *****\n        // Start: ACCESSIBILITY\n        // *****\n\n\n        myPreventScrollSpace = preventScroll(SPACE_KEYCODE);\n        myPreventScrollDown = preventScroll(ARROW_DOWN_KEYCODE);\n        myPreventScrollUp = preventScroll(ARROW_UP_KEYCODE);\n        var $items = void 0,\n            index = void 0,\n            state = null;\n        document.addEventListener('keyup', function () {\n          window.removeEventListener('keydown', myPreventScrollSpace, false);\n          window.removeEventListener('keydown', myPreventScrollUp, false);\n          window.removeEventListener('keydown', myPreventScrollDown, false);\n        });\n        document.addEventListener('keyup', function (e) {\n          if (!e.target.closest(\"\".concat(_options.classMap.hasMegaMenu, \", \").concat(_options.classMap.hasSubMenu))) return false; //\n          // Start: PREVENT SCROLL\n          //\n\n          e.preventDefault();\n          e.stopPropagation();\n          window.addEventListener('keydown', myPreventScrollSpace, false);\n          window.addEventListener('keydown', myPreventScrollUp, false);\n          window.addEventListener('keydown', myPreventScrollDown, false); //\n          // End: PREVENT SCROLL\n          //\n          //\n          // Start: ELEMENT DETECTION\n          //\n\n          if (e.target.classList.contains(_options.classMap.invoker.slice(1)) && !e.target.closest([\"\".concat(_options.classMap.subMenu, \", \").concat(_options.classMap.megaMenu)])) {\n            // console.log('Top level');\n            if (state !== 'topLevel') {\n              state = 'topLevel';\n            }\n\n            $items = [].slice.call(e.target.parentNode.parentNode.querySelectorAll(_options.classMap.invoker)).filter(function (item) {\n              if (!item.closest([\"\".concat(_options.classMap.subMenu, \", \").concat(_options.classMap.megaMenu)])) {\n                return item.offsetParent !== null;\n              }\n            });\n          } else if (e.target.closest([\"\".concat(_options.classMap.subMenu, \", \").concat(_options.classMap.megaMenu)]) && e.target.parentNode.querySelector(\"\".concat(_options.classMap.subMenu, \", \").concat(_options.classMap.megaMenu))) {\n            // console.log('Has submenu and not top level');\n            if (state !== 'hasSubmenu') {\n              state = 'hasSubmenu';\n            }\n\n            $items = [].slice.call(e.target.parentNode.parentNode.querySelectorAll(_options.classMap.invoker)).filter(function (item) {\n              return item.offsetParent !== null;\n            });\n          } else {\n            // console.log('Just element');\n            if (state !== 'simple') {\n              state = 'simple';\n            }\n\n            $items = [].slice.call(e.target.closest([\"\".concat(_options.classMap.subMenu, \", \").concat(_options.classMap.megaMenu)]).querySelectorAll('a, button')).filter(function (item) {\n              return item.offsetParent !== null;\n            });\n          } //\n          // End: ELEMENT DETECTION\n          //\n\n\n          index = $items.indexOf(e.target); //\n          // Start: TOP LEVEL\n          //\n          // Left\n\n          if (state === 'topLevel' && e.which === ARROW_LEFT_KEYCODE && index > 0) {\n            index--;\n          } // Right\n\n\n          if (state === 'topLevel' && e.which === ARROW_RIGHT_KEYCODE && index < $items.length - 1) {\n            index++;\n          } // Open Sub\n\n\n          if (state === 'topLevel' && (e.which === ARROW_DOWN_KEYCODE || e.which === SPACE_KEYCODE || e.which === ENTER_KEYCODE)) {\n            if (!e.target.parentNode.querySelector([\"\".concat(_options.classMap.megaMenu, \".\").concat(_options.itemOptions.desktop.animationIn, \", \").concat(_options.classMap.subMenu, \".\").concat(_options.itemOptions.desktop.animationIn)])) {\n              Object(_methods_desktop_mouseenter_event_listener__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e.target.parentNode, e.target.parentNode.querySelector([\"\".concat(_options.classMap.subMenu, \", \").concat(_options.classMap.megaMenu)]), _options, getItemSettings(e.target.parentNode))();\n            } else if (e.target.parentNode.querySelector([\"\".concat(_options.classMap.megaMenu, \".\").concat(_options.itemOptions.desktop.animationIn, \", \").concat(_options.classMap.subMenu, \".\").concat(_options.itemOptions.desktop.animationIn)])) {\n              e.target.parentNode.querySelector([\"\".concat(_options.classMap.megaMenu, \".\").concat(_options.itemOptions.desktop.animationIn, \", \").concat(_options.classMap.subMenu, \".\").concat(_options.itemOptions.desktop.animationIn)]).querySelectorAll('a')[0].focus();\n              return;\n            }\n          } // Close Siblings\n\n\n          if (state === 'topLevel' && (e.which === TAB_KEYCODE || e.which === ARROW_RIGHT_KEYCODE || e.which === ARROW_LEFT_KEYCODE) && e.target.closest(\"\".concat(_options.classMap.hasMegaMenu, \", \").concat(_options.classMap.hasSubMenu)).parentNode.querySelector(\"\".concat(_options.classMap.megaMenu, \".\").concat(_options.itemOptions.desktop.animationIn, \", \").concat(_options.classMap.subMenu, \".\").concat(_options.itemOptions.desktop.animationIn))) {\n            Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(e.target.closest(\"\".concat(_options.classMap.hasMegaMenu, \", \").concat(_options.classMap.hasSubMenu)), e.target.closest(\"\".concat(_options.classMap.hasMegaMenu, \", \").concat(_options.classMap.hasSubMenu)).parentNode.querySelector(\"\".concat(_options.classMap.hasMegaMenuActive, \" > \").concat(_options.classMap.megaMenu, \", \").concat(_options.classMap.hasSubMenuActive, \" > \").concat(_options.classMap.subMenu)), _options, getItemSettings(e.target.closest(\"\".concat(_options.classMap.hasMegaMenu, \", \").concat(_options.classMap.hasSubMenu))))();\n          } //\n          // End: TOP LEVEL\n          //\n          //\n          // Start: HAS SUB-MENU BUT NOT TOP LEVEL\n          //\n          // Up\n\n\n          if (state === 'hasSubmenu' && e.which === ARROW_UP_KEYCODE && index > 0) {\n            index--;\n          } // Down\n\n\n          if (state === 'hasSubmenu' && e.which === ARROW_DOWN_KEYCODE && index < $items.length - 1) {\n            index++;\n          } // Open Sub\n\n\n          if (state === 'hasSubmenu' && (e.which === ARROW_LEFT_KEYCODE || e.which === ARROW_RIGHT_KEYCODE || e.which === SPACE_KEYCODE || e.which === ENTER_KEYCODE)) {\n            if (!e.target.parentNode.querySelector([\"\".concat(_options.classMap.megaMenu, \".\").concat(_options.itemOptions.desktop.animationIn, \", \").concat(_options.classMap.subMenu, \".\").concat(_options.itemOptions.desktop.animationIn)])) {\n              Object(_methods_desktop_mouseenter_event_listener__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e.target.parentNode, e.target.parentNode.querySelector([\"\".concat(_options.classMap.subMenu, \", \").concat(_options.classMap.megaMenu)]), _options, getItemSettings(e.target.parentNode))();\n            } else if (e.target.parentNode.querySelector([\"\".concat(_options.classMap.megaMenu, \".\").concat(_options.itemOptions.desktop.animationIn, \", \").concat(_options.classMap.subMenu, \".\").concat(_options.itemOptions.desktop.animationIn)])) {\n              e.target.parentNode.querySelector([\"\".concat(_options.classMap.megaMenu, \".\").concat(_options.itemOptions.desktop.animationIn, \", \").concat(_options.classMap.subMenu, \".\").concat(_options.itemOptions.desktop.animationIn)]).querySelectorAll('a')[0].focus();\n              return;\n            }\n          } // Close Siblings\n\n\n          if (state === 'hasSubmenu' && (e.which === TAB_KEYCODE || e.which === ARROW_DOWN_KEYCODE || e.which === ARROW_UP_KEYCODE) && e.target.closest([\"\".concat(_options.classMap.hasMegaMenu, \", \").concat(_options.classMap.hasSubMenu)]).parentNode.querySelectorAll(\"\".concat(_options.classMap.megaMenu, \".\").concat(_options.itemOptions.desktop.animationIn, \", \").concat(_options.classMap.subMenu, \".\").concat(_options.itemOptions.desktop.animationIn)).length) {\n            Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(e.target.closest([\"\".concat(_options.classMap.hasMegaMenu, \", \").concat(_options.classMap.hasSubMenu)]), e.target.closest([\"\".concat(_options.classMap.hasMegaMenu, \", \").concat(_options.classMap.hasSubMenu)]).parentNode.querySelector(\"\".concat(_options.classMap.hasMegaMenuActive, \" > \").concat(_options.classMap.megaMenu, \", \").concat(_options.classMap.hasSubMenuActive, \" > \").concat(_options.classMap.subMenu)), _options, getItemSettings(e.target.closest([\"\".concat(_options.classMap.hasMegaMenu, \", \").concat(_options.classMap.hasSubMenu)])))();\n          } //\n          // End: HAS SUB-MENU BUT NOT TOP LEVEL\n          //\n          //\n          // Start: SIMPLE\n          //\n          // Left, Up\n\n\n          if (state === 'simple' && e.which === ARROW_UP_KEYCODE && index > 0) {\n            index--;\n          } // Right, Down\n\n\n          if (state === 'simple' && e.which === ARROW_DOWN_KEYCODE && index < $items.length - 1) {\n            index++;\n          } // Close Siblings\n\n\n          if (state === 'simple' && (e.which === ARROW_RIGHT_KEYCODE || e.which === ARROW_LEFT_KEYCODE) && e.target.closest(_options.classMap.hasSubMenu).parentNode.querySelector(_options.classMap.subMenu)) {\n            e.target.closest(_options.classMap.hasSubMenu).querySelector(_options.classMap.invoker).focus();\n            Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(e.target.closest(_options.classMap.hasSubMenu), e.target.closest(_options.classMap.hasSubMenu).parentNode.querySelector(\"\".concat(_options.classMap.hasSubMenuActive, \" > \").concat(_options.classMap.subMenu)), _options, getItemSettings(e.target.closest(_options.classMap.hasSubMenu)))();\n            return;\n          } //\n          // End: SIMPLE\n          //\n          // Close Self\n\n\n          if (e.which === ESC_KEYCODE && _this.state === 'desktop' && document.querySelector(\"\".concat(_options.classMap.megaMenu, \".\").concat(_options.itemOptions.desktop.animationIn, \", \").concat(_options.classMap.subMenu, \".\").concat(_options.itemOptions.desktop.animationIn))) {\n            Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(document.querySelector(\"\".concat(_options.classMap.hasMegaMenuActive, \", \").concat(_options.classMap.hasSubMenuActive)), document.querySelector(\"\".concat(_options.classMap.megaMenu, \".\").concat(_options.itemOptions.desktop.animationIn, \", \").concat(_options.classMap.subMenu, \".\").concat(_options.itemOptions.desktop.animationIn)), _options, getItemSettings(document.querySelector(\"\".concat(_options.classMap.hasMegaMenuActive, \", \").concat(_options.classMap.hasSubMenuActive))))();\n            return;\n          } // Reset index\n\n\n          if (index < 0) {\n            index = 0;\n          }\n\n          $items[index].focus();\n        });\n        document.addEventListener('keyup', function (e) {\n          // Close All\n          if (e.which === TAB_KEYCODE && document.querySelector(\"\".concat(_options.classMap.megaMenu, \".\").concat(_options.itemOptions.desktop.animationIn, \", \").concat(_options.classMap.subMenu, \".\").concat(_options.itemOptions.desktop.animationIn))) {\n            Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(document.querySelector(\"\".concat(_options.classMap.hasMegaMenuActive, \", \").concat(_options.classMap.hasSubMenuActive)), document.querySelector(\"\".concat(_options.classMap.megaMenu, \".\").concat(_options.itemOptions.desktop.animationIn, \", \").concat(_options.classMap.subMenu, \".\").concat(_options.itemOptions.desktop.animationIn)), _options, getItemSettings(document.querySelector(\"\".concat(_options.classMap.hasMegaMenuActive, \", \").concat(_options.classMap.hasSubMenuActive))))();\n          }\n        }); // *****\n        // End: ACCESSIBILITY\n        // *****\n\n        that.collection[i].$initializedEl = _options;\n      };\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        var resolutionsList;\n        var ESC_KEYCODE, TAB_KEYCODE, ENTER_KEYCODE, SPACE_KEYCODE, ARROW_UP_KEYCODE, ARROW_DOWN_KEYCODE, ARROW_RIGHT_KEYCODE, ARROW_LEFT_KEYCODE;\n        var myPreventScrollSpace, myPreventScrollDown, myPreventScrollUp;\n\n        var _ret = _loop(i);\n\n        if (_ret === \"continue\") continue;\n      }\n    }\n  }, {\n    key: \"MegaMenuItem\",\n    value: function MegaMenuItem(el, menu, params) {\n      var context = this,\n          settings = params,\n          itemDataSettings = el.hasAttribute('data-hs-mega-menu-item-options') ? JSON.parse(el.getAttribute('data-hs-mega-menu-item-options')) : {},\n          $el = el,\n          $menu = menu;\n      var itemSettings = {\n        eventType: itemDataSettings.eventType ? itemDataSettings.eventType : settings.eventType,\n        megaMenuTimeOut: null,\n        desktop: {\n          animation: 'animated',\n          animationIn: 'slideInUp',\n          animationOut: false,\n          position: null,\n          maxWidth: null\n        }\n      };\n      itemSettings = _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0___default()({}, settings, itemSettings, itemDataSettings);\n\n      itemSettings.activeItemClass = function () {\n        return Object(_methods_get_type__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($el, itemSettings) === 'mega-menu' ? itemSettings.classMap.hasMegaMenuActive : itemSettings.classMap.hasSubMenuActive;\n      }; // Set Menu Breakpoint Class\n\n\n      $menu.classList.add(Object(_methods_get_type__WEBPACK_IMPORTED_MODULE_1__[\"default\"])($el, itemSettings) === 'mega-menu' ? \"hs-mega-menu-desktop-\".concat(itemSettings.breakpoint) : \"hs-sub-menu-desktop-\".concat(itemSettings.breakpoint)); // Listeners\n\n      var myDesktopCSSAnimationEnable = Object(_methods_desktop_css_animation_enable__WEBPACK_IMPORTED_MODULE_3__[\"default\"])($menu, itemSettings),\n          myDesktopMouseEnterEventListener = Object(_methods_desktop_mouseenter_event_listener__WEBPACK_IMPORTED_MODULE_4__[\"default\"])($el, $menu, settings, itemSettings),\n          myDesktopMouseLeaveEventListener = Object(_methods_desktop_mouseleave_event_listener__WEBPACK_IMPORTED_MODULE_5__[\"default\"])($el, $menu, settings, itemSettings),\n          myDesktopClickEventListener = Object(_methods_desktop_click_event_listener__WEBPACK_IMPORTED_MODULE_6__[\"default\"])($el, $menu, settings, itemSettings),\n          myMobileClickEventListener = Object(_methods_mobile_click_event_listener__WEBPACK_IMPORTED_MODULE_7__[\"default\"])($el, $menu, settings, itemSettings);\n\n      var mobileListeners = function mobileListeners() {\n        // Remove Desktop Listeners\n        $menu.removeEventListener('animationend', myDesktopCSSAnimationEnable, false);\n        $menu.removeEventListener('webkitAnimationEnd', myDesktopCSSAnimationEnable, false);\n        $el.removeEventListener('mouseenter', myDesktopMouseEnterEventListener, false);\n        $el.removeEventListener('mouseleave', myDesktopMouseLeaveEventListener, false); // $el.children(settings.classMap.invoker)[0].removeEventListener('focus', myDesktopMouseEnterEventListener, false);\n\n        $el.querySelector(itemSettings.classMap.invoker).removeEventListener('click', myDesktopClickEventListener, false); // Add Mobile Listeners\n\n        $el.querySelector(itemSettings.classMap.invoker).addEventListener('click', myMobileClickEventListener, false);\n      },\n          desktopListeners = function desktopListeners() {\n        // Remove Mobile Listeners\n        $el.querySelector(itemSettings.classMap.invoker).removeEventListener('click', myMobileClickEventListener, false); // Add Desktop Listeners\n\n        $menu.addEventListener('animationend', myDesktopCSSAnimationEnable, false);\n        $menu.addEventListener('webkitAnimationEnd', myDesktopCSSAnimationEnable, false);\n\n        if (itemSettings.eventType === 'hover') {\n          $el.addEventListener('mouseenter', myDesktopMouseEnterEventListener, false);\n          $el.addEventListener('mouseleave', myDesktopMouseLeaveEventListener, false);\n        }\n\n        if (itemSettings.eventType === 'click') {\n          $el.querySelector(itemSettings.classMap.invoker).addEventListener('click', myDesktopClickEventListener, false);\n        }\n      };\n\n      if (itemSettings.desktop.maxWidth) {\n        $menu.style.maxWidth = itemSettings.desktop.maxWidth;\n      }\n\n      if (itemSettings.desktop.position) {\n        $menu.classList.add(\"hs-position-\".concat(itemSettings.desktop.position));\n      } // Document Events\n\n\n      document.addEventListener('click', function (e) {\n        if (!e.target.closest([itemSettings.classMap.subMenu, itemSettings.classMap.megaMenu, itemSettings.classMap.invoker]) && context.state === 'desktop') {\n          $el.classList.remove(itemSettings.activeItemClass().slice(1));\n          $menu.classList.remove(itemSettings.desktop.animationIn);\n\n          if (itemSettings.animationOut) {\n            $menu.classList.add(itemSettings.desktop.animationOut);\n          } else {\n            $menu.style.display = 'none';\n          }\n        }\n      }); // Resize and Scroll Events\n\n      window.addEventListener('resize', function () {\n        if (context.state === 'desktop') {\n          Object(_methods_smart_position__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($menu, itemSettings);\n        }\n      });\n\n      var resizeDetection = function resizeDetection() {\n        if (context.state === 'mobile') {\n          $menu.classList.remove(itemSettings.desktop.animation);\n          $menu.style.animationDuration = '';\n          mobileListeners();\n        } else if (context.state === 'desktop') {\n          $menu.classList.add(itemSettings.desktop.animation);\n          $menu.style.animationDuration = \"\".concat(itemSettings.duration, \"ms\");\n          desktopListeners();\n        }\n      };\n\n      resizeDetection(); // State Detection\n\n      window.addEventListener('resize', function () {\n        resizeDetection();\n      });\n    }\n  }, {\n    key: \"addToCollection\",\n    value: function addToCollection(item, options, id) {\n      this.collection.push({\n        $el: item,\n        id: id || null,\n        options: _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0___default()({}, defaults, item.hasAttribute(dataAttributeName) ? JSON.parse(item.getAttribute(dataAttributeName)) : {}, options)\n      });\n    }\n  }, {\n    key: \"getItems\",\n    value: function getItems() {\n      var that = this;\n      var newCollection = [];\n\n      for (var i = 0; i < that.collection.length; i += 1) {\n        newCollection.push(that.collection[i].$initializedEl);\n      }\n\n      return newCollection;\n    }\n  }, {\n    key: \"getItem\",\n    value: function getItem(ind) {\n      return this.collection[ind].$initializedEl;\n    }\n  }]);\n\n  return HSMegaMenu;\n}();\n\n\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/hs-mega-menu.js?");

/***/ }),

/***/ "./src/js/methods/desktop-click-event-listener.js":
/*!********************************************************!*\
  !*** ./src/js/methods/desktop-click-event-listener.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return desktopClickEventListener; });\n/* harmony import */ var _get_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-type */ \"./src/js/methods/get-type.js\");\n/* harmony import */ var _smart_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smart-position */ \"./src/js/methods/smart-position.js\");\n/* harmony import */ var _desktop_show__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desktop-show */ \"./src/js/methods/desktop-show.js\");\n/* harmony import */ var _desktop_hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop-hide */ \"./src/js/methods/desktop-hide.js\");\n\n\n\n\nfunction desktopClickEventListener(el, menu, params, itemParams) {\n  return function () {\n    var $siblingInvokers = menu.closest(\"\".concat(params.classMap.hasMegaMenu, \", \").concat(params.classMap.hasSubMenu)).parentNode.querySelectorAll(\"\".concat(params.classMap.hasMegaMenu).concat(params.classMap.hasMegaMenuActive, \", \").concat(params.classMap.hasSubMenu).concat(params.classMap.hasSubMenuActive));\n\n    if ($siblingInvokers.length) {\n      $siblingInvokers.forEach(function ($el) {\n        if (el === $el) return;\n        var $menu = $el.querySelector(\"\".concat(params.classMap.megaMenu, \", \").concat(params.classMap.subMenu)),\n            itemDataSettings = $el.hasAttribute('data-hs-mega-menu-item-options') ? JSON.parse($el.getAttribute('data-hs-mega-menu-item-options')) : {};\n        var itemSettings = {\n          desktop: {\n            animation: 'animated',\n            animationIn: 'slideInUp',\n            animationOut: 'fadeOut',\n            position: null\n          }\n        };\n        itemSettings = Object.assign({}, itemSettings, itemDataSettings);\n\n        itemSettings.activeItemClass = function () {\n          return Object(_get_type__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($el, params) === 'mega-menu' ? params.classMap.hasMegaMenuActive : params.classMap.hasSubMenuActive;\n        };\n\n        $el.classList.remove(itemSettings.activeItemClass().slice(1));\n        Object(_desktop_hide__WEBPACK_IMPORTED_MODULE_3__[\"default\"])($el, $menu, params, itemSettings);\n      });\n    }\n\n    if (menu.offsetParent === null) {\n      el.classList.add(itemParams.activeItemClass().slice(1));\n      Object(_desktop_show__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(el, menu, params, itemParams);\n      Object(_smart_position__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(menu, params);\n    } else {\n      el.classList.remove(itemParams.activeItemClass().slice(1));\n      Object(_desktop_hide__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(el, menu, params, itemParams);\n    }\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-click-event-listener.js?");

/***/ }),

/***/ "./src/js/methods/desktop-css-animation-enable.js":
/*!********************************************************!*\
  !*** ./src/js/methods/desktop-css-animation-enable.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return desktopCSSAnimationEnable; });\nfunction desktopCSSAnimationEnable(menu, itemParams) {\n  return function (e) {\n    if (menu.classList.contains(itemParams.desktop.animationOut)) {\n      menu.classList.remove(itemParams.desktop.animationOut);\n      menu.style.display = 'none';\n    }\n\n    e.preventDefault();\n    e.stopPropagation();\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-css-animation-enable.js?");

/***/ }),

/***/ "./src/js/methods/desktop-hide.js":
/*!****************************************!*\
  !*** ./src/js/methods/desktop-hide.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return desktopHide; });\nfunction desktopHide(el, menu, params, itemParams) {\n  if (!menu) {\n    return this;\n  }\n\n  if (itemParams.desktop.animationOut) {\n    menu.classList.remove(itemParams.desktop.animationIn);\n    menu.classList.add(itemParams.desktop.animationOut);\n    menu.style.display = 'none';\n  } else {\n    menu.classList.remove(itemParams.desktop.animationIn);\n    menu.style.display = 'none';\n  }\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-hide.js?");

/***/ }),

/***/ "./src/js/methods/desktop-mouseenter-event-listener.js":
/*!*************************************************************!*\
  !*** ./src/js/methods/desktop-mouseenter-event-listener.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return desktopMouseEnterEventListener; });\n/* harmony import */ var _smart_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smart-position */ \"./src/js/methods/smart-position.js\");\n/* harmony import */ var _desktop_show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desktop-show */ \"./src/js/methods/desktop-show.js\");\n/* harmony import */ var _get_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-type */ \"./src/js/methods/get-type.js\");\n/* harmony import */ var _desktop_hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop-hide */ \"./src/js/methods/desktop-hide.js\");\n\n\n\n\nfunction desktopMouseEnterEventListener(el, menu, params, itemParams) {\n  return function () {\n    if (itemParams.megaMenuTimeOut) {\n      clearTimeout(itemParams.megaMenuTimeOut);\n    }\n\n    var $siblingInvokers = menu.closest(\"\".concat(params.classMap.hasMegaMenu, \", \").concat(params.classMap.hasSubMenu)).parentNode.querySelectorAll(\"\".concat(params.classMap.hasMegaMenu).concat(params.classMap.hasMegaMenuActive, \", \").concat(params.classMap.hasSubMenu).concat(params.classMap.hasSubMenuActive));\n\n    if ($siblingInvokers.length) {\n      $siblingInvokers.forEach(function ($el) {\n        var $menu = $el.querySelector(\"\".concat(params.classMap.megaMenu, \", \").concat(params.classMap.subMenu)),\n            itemDataSettings = $el.hasAttribute('data-hs-mega-menu-item-options') ? JSON.parse($el.getAttribute('data-hs-mega-menu-item-options')) : {};\n        var itemSettings = {\n          desktop: {\n            animation: 'animated',\n            animationIn: 'slideInUp',\n            animationOut: 'fadeOut',\n            position: null\n          }\n        };\n        itemSettings = Object.assign({}, itemSettings, itemDataSettings);\n\n        itemSettings.activeItemClass = function () {\n          return Object(_get_type__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($el, params) === 'mega-menu' ? params.classMap.hasMegaMenuActive : params.classMap.hasSubMenuActive;\n        };\n\n        $el.classList.remove(itemSettings.activeItemClass().slice(1));\n        Object(_desktop_hide__WEBPACK_IMPORTED_MODULE_3__[\"default\"])($el, $menu, params, itemSettings);\n      });\n    }\n\n    el.classList.add(itemParams.activeItemClass().slice(1));\n    Object(_desktop_show__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el, menu, params, itemParams);\n    Object(_smart_position__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menu, params);\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-mouseenter-event-listener.js?");

/***/ }),

/***/ "./src/js/methods/desktop-mouseleave-event-listener.js":
/*!*************************************************************!*\
  !*** ./src/js/methods/desktop-mouseleave-event-listener.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return desktopMouseLeaveEventListener; });\n/* harmony import */ var _desktop_hide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desktop-hide */ \"./src/js/methods/desktop-hide.js\");\n\nfunction desktopMouseLeaveEventListener(el, menu, params, itemParams) {\n  return function () {\n    itemParams.megaMenuTimeOut = setTimeout(function () {\n      el.classList.remove(itemParams.activeItemClass().slice(1));\n      Object(_desktop_hide__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el, menu, params, itemParams);\n    }, params.delay);\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-mouseleave-event-listener.js?");

/***/ }),

/***/ "./src/js/methods/desktop-show.js":
/*!****************************************!*\
  !*** ./src/js/methods/desktop-show.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return desktopShow; });\nfunction desktopShow(el, menu, params, itemParams) {\n  menu.classList.remove(itemParams.desktop.animationOut);\n  menu.style.display = 'block';\n  menu.classList.add(itemParams.desktop.animationIn);\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/desktop-show.js?");

/***/ }),

/***/ "./src/js/methods/get-type.js":
/*!************************************!*\
  !*** ./src/js/methods/get-type.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getType; });\nfunction getType(el, params) {\n  if (!el) {\n    return false;\n  }\n\n  return el.classList.contains(params.classMap.hasSubMenu.slice(1)) ? 'sub-menu' : el.classList.contains(params.classMap.hasMegaMenu.slice(1)) ? 'mega-menu' : null;\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/get-type.js?");

/***/ }),

/***/ "./src/js/methods/mobile-click-event-listener.js":
/*!*******************************************************!*\
  !*** ./src/js/methods/mobile-click-event-listener.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mobileClickEventListener; });\n/* harmony import */ var _get_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-type */ \"./src/js/methods/get-type.js\");\n/* harmony import */ var _mobile_show__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-show */ \"./src/js/methods/mobile-show.js\");\n/* harmony import */ var _mobile_hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-hide */ \"./src/js/methods/mobile-hide.js\");\n\n\n\nfunction mobileClickEventListener(el, menu, params, itemParams) {\n  return function () {\n    var $siblingInvokers = menu.closest(\"\".concat(params.classMap.hasMegaMenu, \", \").concat(params.classMap.hasSubMenu)).parentNode.querySelectorAll(\"\".concat(params.classMap.hasMegaMenu).concat(params.classMap.hasMegaMenuActive, \", \").concat(params.classMap.hasSubMenu).concat(params.classMap.hasSubMenuActive));\n\n    if ($siblingInvokers.length) {\n      $siblingInvokers.forEach(function ($el) {\n        var $menu = $el.querySelector(\"\".concat(params.classMap.megaMenu, \", \").concat(params.classMap.subMenu)),\n            itemSettings = {};\n\n        itemSettings.activeItemClass = function () {\n          return Object(_get_type__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($el, params) === 'mega-menu' ? params.classMap.hasMegaMenuActive : params.classMap.hasSubMenuActive;\n        };\n\n        Object(_mobile_hide__WEBPACK_IMPORTED_MODULE_2__[\"default\"])($el, $menu, params, itemSettings);\n      });\n    }\n\n    if (menu.offsetParent === null) {\n      Object(_mobile_show__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el, menu, params, itemParams);\n    } else {\n      Object(_mobile_hide__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(el, menu, params, itemParams);\n    }\n  };\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/mobile-click-event-listener.js?");

/***/ }),

/***/ "./src/js/methods/mobile-hide.js":
/*!***************************************!*\
  !*** ./src/js/methods/mobile-hide.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mobileHide; });\n/* harmony import */ var _slideUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideUp */ \"./src/js/methods/slideUp.js\");\n\nfunction mobileHide(el, menu, params, itemParams) {\n  if (!menu) {\n    return this;\n  }\n\n  el.classList.remove(itemParams.activeItemClass().slice(1));\n  Object(_slideUp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menu, params.mobileSpeed);\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/mobile-hide.js?");

/***/ }),

/***/ "./src/js/methods/mobile-show.js":
/*!***************************************!*\
  !*** ./src/js/methods/mobile-show.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mobileShow; });\n/* harmony import */ var _slideDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideDown */ \"./src/js/methods/slideDown.js\");\n\nfunction mobileShow(el, menu, params, itemParams) {\n  if (!menu) {\n    return this;\n  }\n\n  el.classList.add(itemParams.activeItemClass().slice(1));\n  Object(_slideDown__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menu, params.mobileSpeed);\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/mobile-show.js?");

/***/ }),

/***/ "./src/js/methods/object-assign-deep.js":
/*!**********************************************!*\
  !*** ./src/js/methods/object-assign-deep.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n * OBJECT ASSIGN DEEP\n * Allows deep cloning of plain objects that contain primitives, nested plain objects, or nested plain arrays.\n */\n\n/*\n * A unified way of returning a string that describes the type of the given variable.\n */\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction getTypeOf(input) {\n  if (input === null) {\n    return 'null';\n  } else if (typeof input === 'undefined') {\n    return 'undefined';\n  } else if (_typeof(input) === 'object') {\n    return Array.isArray(input) ? 'array' : 'object';\n  }\n\n  return _typeof(input);\n}\n/*\n * Branching logic which calls the correct function to clone the given value base on its type.\n */\n\n\nfunction cloneValue(value) {\n  // The value is an object so lets clone it.\n  if (getTypeOf(value) === 'object') {\n    return quickCloneObject(value);\n  } // The value is an array so lets clone it.\n  else if (getTypeOf(value) === 'array') {\n    return quickCloneArray(value);\n  } // Any other value can just be copied.\n\n\n  return value;\n}\n/*\n * Enumerates the given array and returns a new array, with each of its values cloned (i.e. references broken).\n */\n\n\nfunction quickCloneArray(input) {\n  return input.map(cloneValue);\n}\n/*\n * Enumerates the properties of the given object (ignoring the prototype chain) and returns a new object, with each of\n * its values cloned (i.e. references broken).\n */\n\n\nfunction quickCloneObject(input) {\n  var output = {};\n\n  for (var key in input) {\n    if (!Object.prototype.hasOwnProperty.call(input, key)) {\n      continue;\n    }\n\n    output[key] = cloneValue(input[key]);\n  }\n\n  return output;\n}\n/*\n * Does the actual deep merging.\n */\n\n\nfunction executeDeepMerge(target) {\n  var _objects = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n  var _options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var options = {\n    arrayBehaviour: _options.arrayBehaviour || 'replace' // Can be \"merge\" or \"replace\".\n\n  }; // Ensure we have actual objects for each.\n\n  var objects = _objects.map(function (object) {\n    return object || {};\n  });\n\n  var output = target || {}; // Enumerate the objects and their keys.\n\n  for (var oindex = 0; oindex < objects.length; oindex++) {\n    var object = objects[oindex];\n    var keys = Object.keys(object);\n\n    for (var kindex = 0; kindex < keys.length; kindex++) {\n      var key = keys[kindex];\n      var value = object[key];\n      var type = getTypeOf(value);\n      var existingValueType = getTypeOf(output[key]);\n\n      if (type === 'object') {\n        if (existingValueType !== 'undefined') {\n          var existingValue = existingValueType === 'object' ? output[key] : {};\n          output[key] = executeDeepMerge({}, [existingValue, quickCloneObject(value)], options);\n        } else {\n          output[key] = quickCloneObject(value);\n        }\n      } else if (type === 'array') {\n        if (existingValueType === 'array') {\n          var newValue = quickCloneArray(value);\n          output[key] = options.arrayBehaviour === 'merge' ? output[key].concat(newValue) : newValue;\n        } else {\n          output[key] = quickCloneArray(value);\n        }\n      } else {\n        output[key] = value;\n      }\n    }\n  }\n\n  return output;\n}\n/*\n * Merge all the supplied objects into the target object, breaking all references, including those of nested objects\n * and arrays, and even objects nested inside arrays. The first parameter is not mutated unlike Object.assign().\n * Properties in later objects will always overwrite.\n */\n\n\nmodule.exports = function objectAssignDeep(target) {\n  for (var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    objects[_key - 1] = arguments[_key];\n  }\n\n  return executeDeepMerge(target, objects);\n};\n/*\n * Same as objectAssignDeep() except it doesn't mutate the target object and returns an entirely new object.\n */\n\n\nmodule.exports.noMutate = function objectAssignDeepInto() {\n  for (var _len2 = arguments.length, objects = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    objects[_key2] = arguments[_key2];\n  }\n\n  return executeDeepMerge({}, objects);\n};\n/*\n * Allows an options object to be passed in to customise the behaviour of the function.\n */\n\n\nmodule.exports.withOptions = function objectAssignDeepInto(target, objects, options) {\n  return executeDeepMerge(target, objects, options);\n};\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/object-assign-deep.js?");

/***/ }),

/***/ "./src/js/methods/offset.js":
/*!**********************************!*\
  !*** ./src/js/methods/offset.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (el) {\n  if (!el) return false;\n  var rect = el.getBoundingClientRect();\n  return {\n    top: rect.top - window.scrollY,\n    left: rect.left - window.scrollX\n  };\n});\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/offset.js?");

/***/ }),

/***/ "./src/js/methods/slideDown.js":
/*!*************************************!*\
  !*** ./src/js/methods/slideDown.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar slideDown = function slideDown(target) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n  target.style.removeProperty('display');\n  var display = window.getComputedStyle(target).display;\n  if (display === 'none') display = 'block';\n  target.style.display = display;\n  var height = target.offsetHeight;\n  target.style.overflow = 'hidden';\n  target.style.height = 0;\n  target.style.paddingTop = 0;\n  target.style.paddingBottom = 0;\n  target.style.marginTop = 0;\n  target.style.marginBottom = 0;\n  target.offsetHeight;\n  target.style.boxSizing = 'border-box';\n  target.style.transitionProperty = \"height, margin, padding\";\n  target.style.transitionDuration = duration + 'ms';\n  target.style.height = height + 'px';\n  target.style.removeProperty('padding-top');\n  target.style.removeProperty('padding-bottom');\n  target.style.removeProperty('margin-top');\n  target.style.removeProperty('margin-bottom');\n  window.setTimeout(function () {\n    target.style.removeProperty('height');\n    target.style.removeProperty('overflow');\n    target.style.removeProperty('transition-duration');\n    target.style.removeProperty('transition-property');\n  }, duration);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slideDown);\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/slideDown.js?");

/***/ }),

/***/ "./src/js/methods/slideUp.js":
/*!***********************************!*\
  !*** ./src/js/methods/slideUp.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar slideUp = function slideUp(target) {\n  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n  target.style.transitionProperty = 'height, margin, padding';\n  target.style.transitionDuration = duration + 'ms';\n  target.style.boxSizing = 'border-box';\n  target.style.height = target.offsetHeight + 'px';\n  target.offsetHeight;\n  target.style.overflow = 'hidden';\n  target.style.height = 0;\n  target.style.paddingTop = 0;\n  target.style.paddingBottom = 0;\n  target.style.marginTop = 0;\n  target.style.marginBottom = 0;\n  window.setTimeout(function () {\n    target.style.display = 'none';\n    target.style.removeProperty('height');\n    target.style.removeProperty('padding-top');\n    target.style.removeProperty('padding-bottom');\n    target.style.removeProperty('margin-top');\n    target.style.removeProperty('margin-bottom');\n    target.style.removeProperty('overflow');\n    target.style.removeProperty('transition-duration');\n    target.style.removeProperty('transition-property'); //alert(\"!\");\n  }, duration);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slideUp);\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/slideUp.js?");

/***/ }),

/***/ "./src/js/methods/smart-position.js":
/*!******************************************!*\
  !*** ./src/js/methods/smart-position.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return smartPosition; });\n/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offset */ \"./src/js/methods/offset.js\");\n\nfunction smartPosition(el, params) {\n  if (!el) return;\n\n  if (!params.rtl) {\n    if (Object(_offset__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el).left + el.offsetWidth > window.innerWidth) {\n      el.classList.add(params.classMap.reversed.slice(1));\n    }\n  } else {\n    if (Object(_offset__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(el).left < 0) {\n      el.classList.add(params.classMap.reversed.slice(1));\n    }\n  }\n}\n\n//# sourceURL=webpack://HSMegaMenu/./src/js/methods/smart-position.js?");

/***/ })

/******/ })["default"];
});