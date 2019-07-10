(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("preact"));
	else if(typeof define === 'function' && define.amd)
		define(["preact"], factory);
	else if(typeof exports === 'object')
		exports["PreactRailsUJS"] = factory(require("preact"));
	else
		root["PreactRailsUJS"] = factory(root["Preact"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_preact__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var preact = __webpack_require__(/*! preact */ \"preact\")\nvar constructorFromGlobal = __webpack_require__(/*! ./src/getConstructor/fromGlobal */ \"./src/getConstructor/fromGlobal.js\")\nvar constructorFromRequireContextWithGlobalFallback = __webpack_require__(/*! ./src/getConstructor/fromRequireContextWithGlobalFallback */ \"./src/getConstructor/fromRequireContextWithGlobalFallback.js\")\n\nvar PreactRailsUJS = {\n  CLASS_NAME_ATTR: 'data-preact-class',\n  PROPS_ATTR: 'data-preact-props',\n\n  findDOMNodes: function() {\n    return document.querySelectorAll('['+PreactRailsUJS.CLASS_NAME_ATTR+']')\n  },\n\n  getConstructor: constructorFromGlobal,\n\n  useContext: function(requireContext) {\n    this.getConstructor = constructorFromRequireContextWithGlobalFallback(requireContext)\n  },\n\n  mountComponents: function() {\n    var nodes = PreactRailsUJS.findDOMNodes()\n    for (var i = 0; i < nodes.length; ++i) {\n      var node = nodes[i]\n      PreactRailsUJS.clearChildNodes(node)\n      var className = node.getAttribute(PreactRailsUJS.CLASS_NAME_ATTR)\n      var constructor = PreactRailsUJS.getConstructor(className)\n      var propsJson = node.getAttribute(PreactRailsUJS.PROPS_ATTR)\n      var props = propsJson && JSON.parse(propsJson)\n      preact.render(preact.h(constructor, props), node)\n    }\n  },\n\n  clearChildNodes: function(node) {\n    while (node.firstChild) {\n      node.removeChild(node.firstChild);\n    }\n  },\n\n  handleEvent: function(eventName, callback) {\n    document.addEventListener(eventName, callback);\n  },\n\n  removeEvent: function(eventName, callback) {\n    document.removeEventListener(eventName, callback);\n  }\n\n}\n\nPreactRailsUJS.handleEvent('DOMContentLoaded', PreactRailsUJS.mountComponents)\n\nmodule.exports = PreactRailsUJS\n\n\n//# sourceURL=webpack://PreactRailsUJS/./index.js?");

/***/ }),

/***/ "./src/getConstructor/fromGlobal.js":
/*!******************************************!*\
  !*** ./src/getConstructor/fromGlobal.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Assume className is simple and can be found at top-level (window).\n// Fallback to eval to handle cases like 'My.React.ComponentName'.\n// Also, try to gracefully import Babel 6 style default exports\nvar topLevel = typeof window === \"undefined\" ? this : window;\n\nmodule.exports = function(className) {\n  var constructor;\n  // Try to access the class globally first\n  constructor = topLevel[className];\n\n  // If that didn't work, try eval\n  if (!constructor) {\n    constructor = eval(className);\n  }\n\n  // Lastly, if there is a default attribute try that\n  if (constructor && constructor['default']) {\n    constructor = constructor['default'];\n  }\n\n  return constructor;\n}\n\n\n//# sourceURL=webpack://PreactRailsUJS/./src/getConstructor/fromGlobal.js?");

/***/ }),

/***/ "./src/getConstructor/fromRequireContext.js":
/*!**************************************************!*\
  !*** ./src/getConstructor/fromRequireContext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Load React components by requiring them from \"components/\", for example:\n//\n// - \"pages/index\" -> `require(\"components/pages/index\")`\n// - \"pages/show.Header\" -> `require(\"components/pages/show\").Header`\n// - \"pages/show.Body.Content\" -> `require(\"components/pages/show\").Body.Content`\n//\nmodule.exports = function(reqctx) {\n  return function(className) {\n    var parts = className.split(\".\")\n    var filename = parts.shift()\n    var keys = parts\n    // Load the module:\n    var component = reqctx(\"./\" + filename)\n    // Then access each key:\n    keys.forEach(function(k) {\n      component = component[k]\n    })\n    // support `export default`\n    if (component.__esModule) {\n      component = component[\"default\"]\n    }\n    return component\n  }\n}\n\n\n//# sourceURL=webpack://PreactRailsUJS/./src/getConstructor/fromRequireContext.js?");

/***/ }),

/***/ "./src/getConstructor/fromRequireContextWithGlobalFallback.js":
/*!********************************************************************!*\
  !*** ./src/getConstructor/fromRequireContextWithGlobalFallback.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Make a function which:\n// - First tries to require the name\n// - Then falls back to global lookup\nvar fromGlobal = __webpack_require__(/*! ./fromGlobal */ \"./src/getConstructor/fromGlobal.js\")\nvar fromRequireContext = __webpack_require__(/*! ./fromRequireContext */ \"./src/getConstructor/fromRequireContext.js\")\n\nmodule.exports = function(reqctx) {\n  var fromCtx = fromRequireContext(reqctx)\n  return function(className) {\n    var component;\n    try {\n      // `require` will raise an error if this className isn't found:\n      component = fromCtx(className)\n    } catch (firstErr) {\n      // fallback to global:\n      try {\n        component = fromGlobal(className)\n      } catch (secondErr) {\n        console.error(firstErr)\n        console.error(secondErr)\n      }\n    }\n    return component\n  }\n}\n\n\n//# sourceURL=webpack://PreactRailsUJS/./src/getConstructor/fromRequireContextWithGlobalFallback.js?");

/***/ }),

/***/ "preact":
/*!******************************************************************************************!*\
  !*** external {"root":"Preact","commonjs2":"preact","commonjs":"preact","amd":"preact"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_preact__;\n\n//# sourceURL=webpack://PreactRailsUJS/external_%7B%22root%22:%22Preact%22,%22commonjs2%22:%22preact%22,%22commonjs%22:%22preact%22,%22amd%22:%22preact%22%7D?");

/***/ })

/******/ });
});