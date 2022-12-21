(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSVideoPlayer"] = factory();
	else
		root["HSVideoPlayer"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-video-player.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-video-player.js":
/*!***********************************!*\
  !*** ./src/js/hs-video-player.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSVideoPlayer; });\n/* harmony import */ var _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/object-assign-deep */ \"./src/js/methods/object-assign-deep.js\");\n/* harmony import */ var _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSVideoPlayer Plugin\n* @version: 2.0.0 (Mon, 25 Nov 2019)\n* @requires: jQuery v3.1 or later\n* @author: HtmlStream\n* @event-namespace: .HSVideoPlayer\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2019 Htmlstream\n*/\n\n\nvar HSVideoPlayer = /*#__PURE__*/function () {\n  function HSVideoPlayer(elem, settings) {\n    _classCallCheck(this, HSVideoPlayer);\n\n    this.elem = elem;\n    this.defaults = {\n      parentSelector: null,\n      targetSelector: null,\n      classMap: {\n        toggle: 'video-player-played'\n      },\n      videoType: 'you-tube',\n      videoId: null,\n      isAutoplay: false,\n      isMuted: false,\n      youTubeAPISrc: '//www.youtube.com/player_api',\n      isYouTubeAPICreated: false,\n      vimeoAPISrc: '//player.vimeo.com/api/player.js',\n      isVimeoAPICreated: false\n    };\n    this.settings = settings;\n  }\n\n  _createClass(HSVideoPlayer, [{\n    key: \"init\",\n    value: function init() {\n      var context = this,\n          $el = context.elem,\n          dataSettings = $el.attr('data-hs-video-player-options') ? JSON.parse($el.attr('data-hs-video-player-options')) : {};\n      var options = _methods_object_assign_deep__WEBPACK_IMPORTED_MODULE_0___default()({}, context.defaults, dataSettings, context.settings);\n\n      if (options.videoType === 'you-tube') {\n        context._youTubeAPI(options);\n      }\n\n      if (options.videoType === 'vimeo') {\n        context._vimeoAPI(options);\n      }\n\n      $el.on('click', function () {\n        $(options.parentSelector).toggleClass(options.classMap.toggle);\n\n        if (options.videoType === 'vimeo') {\n          context._vimeoPlayer(options);\n        } else if (options.videoType === 'html5') {\n          context._html5Player(options);\n        } else {\n          context._youTubePlayer(options);\n        }\n      });\n    }\n  }, {\n    key: \"_youTubeAPI\",\n    value: function _youTubeAPI(params) {\n      var options = params;\n\n      if (options.isYouTubeAPICreated) {\n        return;\n      }\n\n      var YTScriptTag = document.createElement('script'),\n          DOMFirstScriptTag = document.getElementsByTagName('script')[0];\n      YTScriptTag.src = options.youTubeAPISrc;\n      DOMFirstScriptTag.parentNode.insertBefore(YTScriptTag, DOMFirstScriptTag);\n      options.isYouTubeAPICreated = true;\n    }\n  }, {\n    key: \"_vimeoAPI\",\n    value: function _vimeoAPI(params) {\n      var options = params;\n\n      if (options.isVimeoAPICreated) {\n        return;\n      }\n\n      var VimeoScriptTag = document.createElement('script'),\n          DOMFirstScriptTag = document.getElementsByTagName('script')[0];\n      VimeoScriptTag.src = options.vimeoAPISrc;\n      DOMFirstScriptTag.parentNode.insertBefore(VimeoScriptTag, DOMFirstScriptTag);\n      options.isVimeoAPICreated = true;\n    }\n  }, {\n    key: \"_youTubePlayer\",\n    value: function _youTubePlayer(params) {\n      var options = params;\n      var YTPlayer = new YT.Player(options.targetSelector.slice(1, options.targetSelector.length), {\n        videoId: options.videoId,\n        playerVars: {\n          origin: window.location.origin,\n          autoplay: options.isAutoplay === true ? 1 : 0\n        }\n      });\n    }\n  }, {\n    key: \"_vimeoPlayer\",\n    value: function _vimeoPlayer(params) {\n      var options = params;\n      var vimeoIframe = document.getElementById(options.targetSelector.slice(1, options.targetSelector.length)),\n          vimeoPlayer = new Vimeo.Player(vimeoIframe, {\n        id: options.videoId,\n        autoplay: options.isAutoplay === true ? 1 : 0,\n        muted: options.isMuted === true ? 1 : 0\n      });\n    }\n  }, {\n    key: \"_html5Player\",\n    value: function _html5Player(params) {\n      var options = params;\n      var $html5Iframe = $(options.targetSelector),\n          $html5Player = $(\"\\n\\t\\t\\t\\t<video class=\\\"pfx-hero-bg-video__item\\\" playsinline \".concat(options.isAutoplay === true ? 'autoplay ' : '').concat(options.isMuted === true ? 'muted ' : '').concat(options.isLoop === true ? 'loop' : '', \">\\n\\t\\t\\t\\t\\t<source src=\\\"\").concat(options.videoId, \".mp4\\\" type=\\\"video/mp4\\\">\\n\\t\\t\\t\\t\\t<source src=\\\"\").concat(options.videoId, \".ogg\\\" type=\\\"video/ogg\\\">\\n\\t\\t\\t\\t\\t<source src=\\\"\").concat(options.videoId, \".webm\\\" type=\\\"video/webm\\\">\\n\\t\\t\\t\\t\\tYour browser doesn't support HTML5 video tag.\\n\\t\\t\\t\\t</video>\"));\n      $html5Player.appendTo($html5Iframe);\n    }\n  }]);\n\n  return HSVideoPlayer;\n}();\n\n\n\n//# sourceURL=webpack://HSVideoPlayer/./src/js/hs-video-player.js?");

/***/ }),

/***/ "./src/js/methods/object-assign-deep.js":
/*!**********************************************!*\
  !*** ./src/js/methods/object-assign-deep.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n * OBJECT ASSIGN DEEP\n * Allows deep cloning of plain objects that contain primitives, nested plain objects, or nested plain arrays.\n */\n\n/*\n * A unified way of returning a string that describes the type of the given variable.\n */\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction getTypeOf(input) {\n  if (input === null) {\n    return 'null';\n  } else if (typeof input === 'undefined') {\n    return 'undefined';\n  } else if (_typeof(input) === 'object') {\n    return Array.isArray(input) ? 'array' : 'object';\n  }\n\n  return _typeof(input);\n}\n/*\n * Branching logic which calls the correct function to clone the given value base on its type.\n */\n\n\nfunction cloneValue(value) {\n  // The value is an object so lets clone it.\n  if (getTypeOf(value) === 'object') {\n    return quickCloneObject(value);\n  } // The value is an array so lets clone it.\n  else if (getTypeOf(value) === 'array') {\n      return quickCloneArray(value);\n    } // Any other value can just be copied.\n\n\n  return value;\n}\n/*\n * Enumerates the given array and returns a new array, with each of its values cloned (i.e. references broken).\n */\n\n\nfunction quickCloneArray(input) {\n  return input.map(cloneValue);\n}\n/*\n * Enumerates the properties of the given object (ignoring the prototype chain) and returns a new object, with each of\n * its values cloned (i.e. references broken).\n */\n\n\nfunction quickCloneObject(input) {\n  var output = {};\n\n  for (var key in input) {\n    if (!input.hasOwnProperty(key)) {\n      continue;\n    }\n\n    output[key] = cloneValue(input[key]);\n  }\n\n  return output;\n}\n/*\n * Does the actual deep merging.\n */\n\n\nfunction executeDeepMerge(target) {\n  var _objects = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n  var _options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  var options = {\n    arrayBehaviour: _options.arrayBehaviour || 'replace' // Can be \"merge\" or \"replace\".\n\n  }; // Ensure we have actual objects for each.\n\n  var objects = _objects.map(function (object) {\n    return object || {};\n  });\n\n  var output = target || {}; // Enumerate the objects and their keys.\n\n  for (var oindex = 0; oindex < objects.length; oindex++) {\n    var object = objects[oindex];\n    var keys = Object.keys(object);\n\n    for (var kindex = 0; kindex < keys.length; kindex++) {\n      var key = keys[kindex];\n      var value = object[key];\n      var type = getTypeOf(value);\n      var existingValueType = getTypeOf(output[key]);\n\n      if (type === 'object') {\n        if (existingValueType !== 'undefined') {\n          var existingValue = existingValueType === 'object' ? output[key] : {};\n          output[key] = executeDeepMerge({}, [existingValue, quickCloneObject(value)], options);\n        } else {\n          output[key] = quickCloneObject(value);\n        }\n      } else if (type === 'array') {\n        if (existingValueType === 'array') {\n          var newValue = quickCloneArray(value);\n          output[key] = options.arrayBehaviour === 'merge' ? output[key].concat(newValue) : newValue;\n        } else {\n          output[key] = quickCloneArray(value);\n        }\n      } else {\n        output[key] = value;\n      }\n    }\n  }\n\n  return output;\n}\n/*\n * Merge all the supplied objects into the target object, breaking all references, including those of nested objects\n * and arrays, and even objects nested inside arrays. The first parameter is not mutated unlike Object.assign().\n * Properties in later objects will always overwrite.\n */\n\n\nmodule.exports = function objectAssignDeep(target) {\n  for (var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    objects[_key - 1] = arguments[_key];\n  }\n\n  return executeDeepMerge(target, objects);\n};\n/*\n * Same as objectAssignDeep() except it doesn't mutate the target object and returns an entirely new object.\n */\n\n\nmodule.exports.noMutate = function objectAssignDeepInto() {\n  for (var _len2 = arguments.length, objects = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    objects[_key2] = arguments[_key2];\n  }\n\n  return executeDeepMerge({}, objects);\n};\n/*\n * Allows an options object to be passed in to customise the behaviour of the function.\n */\n\n\nmodule.exports.withOptions = function objectAssignDeepInto(target, objects, options) {\n  return executeDeepMerge(target, objects, options);\n};\n\n//# sourceURL=webpack://HSVideoPlayer/./src/js/methods/object-assign-deep.js?");

/***/ })

/******/ })["default"];
});