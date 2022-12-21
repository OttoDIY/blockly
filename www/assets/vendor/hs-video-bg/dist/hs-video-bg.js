(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HSVideoBg"] = factory();
	else
		root["HSVideoBg"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/hs-video-bg.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hs-video-bg.js":
/*!*******************************!*\
  !*** ./src/js/hs-video-bg.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HSVideoBg; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/*\n* HSVideoBg Plugin\n* @version: 3.0.0 (Wed, 17 Mar 2021)\n* @author: HtmlStream\n* @event-namespace: .HSVideoBg\n* @license: Htmlstream Libraries (https://htmlstream.com/)\n* Copyright 2021 Htmlstream\n*/\n\n\nvar HSVideoBg = /*#__PURE__*/function () {\n  function HSVideoBg(el, settings) {\n    _classCallCheck(this, HSVideoBg);\n\n    this.$el = typeof el === \"string\" ? document.querySelector(el) : el;\n    this.defaults = {\n      type: 'default',\n      videoId: null,\n      isLoop: true,\n      ratio: 1.5\n    };\n    this.dataSettings = this.$el.hasAttribute('data-hs-video-bg-options') ? JSON.parse(this.$el.getAttribute('data-hs-video-bg-options')) : {};\n    this.settings = Object.assign({}, this.defaults, this.dataSettings, settings);\n  }\n\n  _createClass(HSVideoBg, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this._prepareObject();\n\n      if (this.settings.type === 'you-tube') {\n        this._APICreating('//www.youtube.com/player_api', 'YT', 'YTDetect').then(function () {\n          var newYT;\n\n          if (typeof window.onYouTubeIframeAPIReady === 'function') {\n            setTimeout(function () {\n              newYT = new YT.Player(_this.$el.querySelector('.hs-video-bg-video > div'), {\n                videoId: _this.settings.videoId,\n                playerVars: {\n                  autoplay: true,\n                  controls: 0,\n                  showinfo: 0,\n                  enablejsapi: 1,\n                  modestbranding: 1,\n                  iv_load_policy: 3,\n                  loop: _this.settings.isLoop,\n                  playlist: _this.settings.videoId,\n                  origin: window.location.origin\n                },\n                events: {\n                  onReady: function onReady(e) {\n                    e.target.mute();\n\n                    _this._ratioCalc();\n\n                    window.addEventListener('resize', function () {\n                      _this._ratioCalc();\n                    });\n                    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(_this.$el.querySelector('.hs-video-bg-preview'), 400);\n                  }\n                }\n              });\n            }, 100);\n          } else {\n            window.onYouTubeIframeAPIReady = function () {\n              newYT = new YT.Player(_this.$el.querySelector('.hs-video-bg-video > div'), {\n                videoId: _this.settings.videoId,\n                playerVars: {\n                  autoplay: true,\n                  controls: 0,\n                  showinfo: 0,\n                  enablejsapi: 1,\n                  modestbranding: 1,\n                  iv_load_policy: 3,\n                  loop: _this.settings.isLoop,\n                  playlist: _this.settings.videoId,\n                  origin: window.location.origin\n                },\n                events: {\n                  onReady: function onReady(e) {\n                    e.target.mute();\n\n                    _this._ratioCalc();\n\n                    window.addEventListener('resize', function () {\n                      _this._ratioCalc();\n                    });\n                    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(_this.$el.querySelector('.hs-video-bg-preview'), 400);\n                  }\n                }\n              });\n            };\n          }\n        });\n      } else if (this.settings.type === 'vimeo') {\n        this._APICreating('//player.vimeo.com/api/player.js', 'Vimeo', 'VimeoDetect').then(function () {\n          var newVimeo = new Vimeo.Player(_this.$el.querySelector('.hs-video-bg-video'), {\n            id: _this.settings.videoId,\n            loop: _this.settings.isLoop,\n            title: false,\n            portrait: false,\n            byline: false,\n            autoplay: true,\n            autopause: false,\n            muted: true\n          });\n          newVimeo.play().then(function () {\n            _this._ratioCalc();\n\n            window.addEventListener('resize', function () {\n              _this._ratioCalc();\n            });\n            Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"fadeOut\"])(_this.$el.querySelector('.hs-video-bg-preview'), 400);\n          });\n        });\n      } else {\n        window.addEventListener('resize', function () {\n          _this._ratioCalc();\n        });\n        setTimeout(function () {\n          _this._ratioCalc();\n        });\n      }\n    }\n  }, {\n    key: \"_prepareObject\",\n    value: function _prepareObject() {\n      var _this2 = this;\n\n      this.$el.style.position = 'relative';\n\n      if (this.settings.type === 'you-tube') {\n        this.$el.insertAdjacentHTML('beforeend', '<div class=\"hs-video-bg-video\"><div></div></div>');\n      } else if (this.settings.type === 'vimeo') {\n        this.$el.insertAdjacentHTML('beforeend', '<div class=\"hs-video-bg-video\"></div>');\n      } else {\n        this.$el.insertAdjacentHTML('beforeend', \"\\n\\t\\t\\t\\t<div class=\\\"hs-video-bg-video\\\">\\n\\t\\t\\t\\t\\t<video poster=\\\"\\\" autoplay muted \".concat(this.settings.isLoop ? 'loop' : '', \">\\n\\t\\t\\t\\t\\t\\t<source src=\\\"\").concat(this.settings.videoId, \".mp4\\\" type=\\\"video/mp4\\\">\\n\\t\\t\\t\\t\\t\\t<source src=\\\"\").concat(this.settings.videoId, \".webm\\\" type=\\\"video/webm\\\">\\n\\t\\t\\t\\t\\t\\t<source src=\\\"\").concat(this.settings.videoId, \".ogv\\\" type=\\\"video/ogg\\\">\\n\\t\\t\\t\\t\\t\\tYour browser doesn't support HTML5 video.\\n\\t\\t\\t\\t\\t</video>\\n        </div>\\n\\t\\t\\t\"));\n      }\n\n      if (this.settings.type === 'you-tube') {\n        this.$el.insertAdjacentHTML('beforeend', \"<div class=\\\"hs-video-bg-preview\\\" style=\\\"background-image: url(//img.youtube.com/vi/\".concat(this.settings.videoId, \"/maxresdefault.jpg);\\\"></div>\"));\n      } else if (this.settings.type === 'vimeo') {\n        fetch(\"//www.vimeo.com/api/v2/video/\".concat(this.settings.videoId, \".json?callback=?\")).then(function (data) {\n          _this2.$el.insertAdjacentHTML('beforeend', \"<div class=\\\"hs-video-bg-preview\\\" style=\\\"background-image: url(\".concat(data[0].thumbnail_large, \");\\\"></div>\"));\n        });\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"_ratioCalc\",\n    value: function _ratioCalc() {\n      var _ratio = this.$el.clientWidth / this.$el.clientHeight;\n\n      var $videoBg = this.$el.querySelector('.hs-video-bg-video');\n      if (!$videoBg) return false;\n\n      if (this.settings.type === 'you-tube' || this.settings.type === 'vimeo') {\n        if (this.$el.clientHeight < this.$el.clientWidth && window.innerWidth > 768) {\n          $videoBg.style.width = _ratio * this.$el.clientWidth * this.settings.ratio;\n          $videoBg.style.height = _ratio * this.$el.clientHeight * this.settings.ratio;\n        } else {\n          $videoBg.style.width = _ratio * this.$el.clientWidth;\n          $videoBg.style.height = '130%';\n        }\n      }\n    }\n  }, {\n    key: \"_APICreating\",\n    value: function _APICreating(scriptUrl, globalName, globalNameDetect) {\n      if (window[globalNameDetect]) {\n        return Promise.resolve();\n      }\n\n      return new Promise(function (resolve, reject) {\n        var script = document.createElement('script'),\n            before = document.querySelector('script');\n        script.src = scriptUrl;\n        before.parentNode.insertBefore(script, before);\n\n        script.onload = function () {\n          !globalName || window[globalName] ? resolve() : reject(Error('window.' + globalName + ' undefined'));\n        };\n\n        script.onerror = function () {\n          reject(Error('Error loading ' + globalName || false));\n        };\n      });\n    }\n  }]);\n\n  return HSVideoBg;\n}();\n\n\n\n//# sourceURL=webpack://HSVideoBg/./src/js/hs-video-bg.js?");

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/*! exports provided: fadeOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fadeOut\", function() { return fadeOut; });\nfunction fadeOut(el, time) {\n  if (!el || el.offsetParent === null) return el;\n\n  if (!time) {\n    return el.style.display = 'none';\n  }\n\n  var intervalID = setInterval(function () {\n    if (!el.style.opacity) {\n      el.style.opacity = 1;\n    }\n\n    if (el.style.opacity > 0) {\n      el.style.opacity -= 0.1;\n    } else {\n      clearInterval(intervalID);\n      el.style.display = 'none';\n    }\n  }, time / 10);\n}\n\n//# sourceURL=webpack://HSVideoBg/./src/js/utils/index.js?");

/***/ })

/******/ })["default"];
});