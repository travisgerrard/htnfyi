module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/what-is-diabetes/insulin-resistance/index.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/what-is-diabetes/insulin-resistance/InsulinResistance01.png":
/*!***************************************************************************!*\
  !*** ./pages/what-is-diabetes/insulin-resistance/InsulinResistance01.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/InsulinResistance01-265e738e596e158a933ac3a9bbe09a3c.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93aGF0LWlzLWRpYWJldGVzL2luc3VsaW4tcmVzaXN0YW5jZS9JbnN1bGluUmVzaXN0YW5jZTAxLnBuZz8wMmU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvd2hhdC1pcy1kaWFiZXRlcy9pbnN1bGluLXJlc2lzdGFuY2UvSW5zdWxpblJlc2lzdGFuY2UwMS5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvSW5zdWxpblJlc2lzdGFuY2UwMS0yNjVlNzM4ZTU5NmUxNThhOTMzYWMzYTliYmUwOWEzYy5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/what-is-diabetes/insulin-resistance/InsulinResistance01.png\n");

/***/ }),

/***/ "./pages/what-is-diabetes/insulin-resistance/InsulinResistance02.png":
/*!***************************************************************************!*\
  !*** ./pages/what-is-diabetes/insulin-resistance/InsulinResistance02.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/InsulinResistance02-a5ed8c77ae185f644746deb065bbaa19.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93aGF0LWlzLWRpYWJldGVzL2luc3VsaW4tcmVzaXN0YW5jZS9JbnN1bGluUmVzaXN0YW5jZTAyLnBuZz9iMTIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvd2hhdC1pcy1kaWFiZXRlcy9pbnN1bGluLXJlc2lzdGFuY2UvSW5zdWxpblJlc2lzdGFuY2UwMi5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvSW5zdWxpblJlc2lzdGFuY2UwMi1hNWVkOGM3N2FlMTg1ZjY0NDc0NmRlYjA2NWJiYWExOS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/what-is-diabetes/insulin-resistance/InsulinResistance02.png\n");

/***/ }),

/***/ "./pages/what-is-diabetes/insulin-resistance/InsulinResistance03.png":
/*!***************************************************************************!*\
  !*** ./pages/what-is-diabetes/insulin-resistance/InsulinResistance03.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/InsulinResistance03-533bb42d20ed04c23caf0e4c80022b94.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93aGF0LWlzLWRpYWJldGVzL2luc3VsaW4tcmVzaXN0YW5jZS9JbnN1bGluUmVzaXN0YW5jZTAzLnBuZz9iOTVhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvd2hhdC1pcy1kaWFiZXRlcy9pbnN1bGluLXJlc2lzdGFuY2UvSW5zdWxpblJlc2lzdGFuY2UwMy5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvSW5zdWxpblJlc2lzdGFuY2UwMy01MzNiYjQyZDIwZWQwNGMyM2NhZjBlNGM4MDAyMmI5NC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/what-is-diabetes/insulin-resistance/InsulinResistance03.png\n");

/***/ }),

/***/ "./pages/what-is-diabetes/insulin-resistance/InsulinResistance04.png":
/*!***************************************************************************!*\
  !*** ./pages/what-is-diabetes/insulin-resistance/InsulinResistance04.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/InsulinResistance04-a48713b0ccb2e475dccc39fa8dd69b72.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93aGF0LWlzLWRpYWJldGVzL2luc3VsaW4tcmVzaXN0YW5jZS9JbnN1bGluUmVzaXN0YW5jZTA0LnBuZz9mMzAwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vcGFnZXMvd2hhdC1pcy1kaWFiZXRlcy9pbnN1bGluLXJlc2lzdGFuY2UvSW5zdWxpblJlc2lzdGFuY2UwNC5wbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvSW5zdWxpblJlc2lzdGFuY2UwNC1hNDg3MTNiMGNjYjJlNDc1ZGNjYzM5ZmE4ZGQ2OWI3Mi5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/what-is-diabetes/insulin-resistance/InsulinResistance04.png\n");

/***/ }),

/***/ "./pages/what-is-diabetes/insulin-resistance/index.md":
/*!************************************************************!*\
  !*** ./pages/what-is-diabetes/insulin-resistance/index.md ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ \"@mdx-js/react\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _InsulinResistance01_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InsulinResistance01.png */ \"./pages/what-is-diabetes/insulin-resistance/InsulinResistance01.png\");\n/* harmony import */ var _InsulinResistance01_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_InsulinResistance01_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _InsulinResistance02_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InsulinResistance02.png */ \"./pages/what-is-diabetes/insulin-resistance/InsulinResistance02.png\");\n/* harmony import */ var _InsulinResistance02_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_InsulinResistance02_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _InsulinResistance03_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InsulinResistance03.png */ \"./pages/what-is-diabetes/insulin-resistance/InsulinResistance03.png\");\n/* harmony import */ var _InsulinResistance03_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_InsulinResistance03_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _InsulinResistance04_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InsulinResistance04.png */ \"./pages/what-is-diabetes/insulin-resistance/InsulinResistance04.png\");\n/* harmony import */ var _InsulinResistance04_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_InsulinResistance04_png__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/travisgerrard/Documents/next-mdx/pages/what-is-diabetes/insulin-resistance/index.md\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n/* @jsx mdx */\n\n\n\n\n\nconst layoutProps = {};\nconst MDXLayout = \"wrapper\";\nfunction MDXContent(_ref) {\n  let {\n    components\n  } = _ref,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, `Understanding insulin resistance`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, `The food we eat is broken down in the stomach into glucose that is\nabsorbed into our blood. The blood carries the glucose to our muscles\nand organs where the glucose is used as fuel.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"img\", {\n    src: _InsulinResistance01_png__WEBPACK_IMPORTED_MODULE_2___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, `Glucose does not move freely into the muscle and organs on its own.\nThere is a door it must pass through that is controlled by the hormone,\ninsulin. Insulin is the key that allows glucose to move from the blood\nto the body.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"img\", {\n    src: _InsulinResistance02_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, `In persons with type 2 diabetes, the body does not respond to the\ninsulin signal of high levels of glucose in the blood. The insulin does\nnot open the cell doors to the muscles and the organs. In response, the\nbody produces large quantities of insulin from the signal for the key to\nunlock cells for glucose. Thus, excess levels of insulin and glucose are\ncirculating in the blood which the body cannot use.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"img\", {\n    src: _InsulinResistance03_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, `Patients can reduce insulin resistance and help the body become more\nsensitive to inulin by exercising, following a diabetic diet low in\ncarbohydrates and fats, and taking all medications as prescribed. A\ndiabetic diet means eating healthy food choices at regular mealtimes.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"img\", {\n    src: _InsulinResistance04_png__WEBPACK_IMPORTED_MODULE_5___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }));\n}\n;\nMDXContent.isMDXComponent = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93aGF0LWlzLWRpYWJldGVzL2luc3VsaW4tcmVzaXN0YW5jZS9pbmRleC5tZD85ODY0Il0sIm5hbWVzIjpbImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsIkluc3VsaW5SZXNpc3RhbmNlMDEiLCJJbnN1bGluUmVzaXN0YW5jZTAyIiwiSW5zdWxpblJlc2lzdGFuY2UwMyIsIkluc3VsaW5SZXNpc3RhbmNlMDQiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNQSxXQUFXLEdBQUcsRUFBcEI7QUFHQSxNQUFNQyxTQUFTLEdBQUcsU0FBbEI7QUFDZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUhnQztBQUNqQ0M7QUFEaUMsR0FHaEM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCxlQUFlSixXQUFmLEVBQWdDSSxLQUFoQztBQUF1QyxjQUFVLEVBQUVELFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNLGtDQUFOLENBRkssRUFHTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFDVDtBQUNBLDhDQUZJLENBSEssRUFNTDtBQUFLLE9BQUcsRUFBRUUsK0RBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5LLEVBT0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQ1Q7QUFDQTtBQUNBLGFBSEksQ0FQSyxFQVdMO0FBQUssT0FBRyxFQUFFQywrREFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEssRUFZTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUxJLENBWkssRUFrQkw7QUFBSyxPQUFHLEVBQUVDLCtEQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQkssRUFtQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQ1Q7QUFDQTtBQUNBLHNFQUhJLENBbkJLLEVBdUJMO0FBQUssT0FBRyxFQUFFQywrREFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJLLENBQVA7QUF5QkQ7QUFFRDtBQUNBTixVQUFVLENBQUNPLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoiLi9wYWdlcy93aGF0LWlzLWRpYWJldGVzL2luc3VsaW4tcmVzaXN0YW5jZS9pbmRleC5tZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBJbnN1bGluUmVzaXN0YW5jZTAxIGZyb20gJy4vSW5zdWxpblJlc2lzdGFuY2UwMS5wbmcnO1xuaW1wb3J0IEluc3VsaW5SZXNpc3RhbmNlMDIgZnJvbSAnLi9JbnN1bGluUmVzaXN0YW5jZTAyLnBuZyc7XG5pbXBvcnQgSW5zdWxpblJlc2lzdGFuY2UwMyBmcm9tICcuL0luc3VsaW5SZXNpc3RhbmNlMDMucG5nJztcbmltcG9ydCBJbnN1bGluUmVzaXN0YW5jZTA0IGZyb20gJy4vSW5zdWxpblJlc2lzdGFuY2UwNC5wbmcnO1xuXG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cbiAgICA8aDE+e2BVbmRlcnN0YW5kaW5nIGluc3VsaW4gcmVzaXN0YW5jZWB9PC9oMT5cbiAgICA8cD57YFRoZSBmb29kIHdlIGVhdCBpcyBicm9rZW4gZG93biBpbiB0aGUgc3RvbWFjaCBpbnRvIGdsdWNvc2UgdGhhdCBpc1xuYWJzb3JiZWQgaW50byBvdXIgYmxvb2QuIFRoZSBibG9vZCBjYXJyaWVzIHRoZSBnbHVjb3NlIHRvIG91ciBtdXNjbGVzXG5hbmQgb3JnYW5zIHdoZXJlIHRoZSBnbHVjb3NlIGlzIHVzZWQgYXMgZnVlbC5gfTwvcD5cbiAgICA8aW1nIHNyYz17SW5zdWxpblJlc2lzdGFuY2UwMX0gLz5cbiAgICA8cD57YEdsdWNvc2UgZG9lcyBub3QgbW92ZSBmcmVlbHkgaW50byB0aGUgbXVzY2xlIGFuZCBvcmdhbnMgb24gaXRzIG93bi5cblRoZXJlIGlzIGEgZG9vciBpdCBtdXN0IHBhc3MgdGhyb3VnaCB0aGF0IGlzIGNvbnRyb2xsZWQgYnkgdGhlIGhvcm1vbmUsXG5pbnN1bGluLiBJbnN1bGluIGlzIHRoZSBrZXkgdGhhdCBhbGxvd3MgZ2x1Y29zZSB0byBtb3ZlIGZyb20gdGhlIGJsb29kXG50byB0aGUgYm9keS5gfTwvcD5cbiAgICA8aW1nIHNyYz17SW5zdWxpblJlc2lzdGFuY2UwMn0gLz5cbiAgICA8cD57YEluIHBlcnNvbnMgd2l0aCB0eXBlIDIgZGlhYmV0ZXMsIHRoZSBib2R5IGRvZXMgbm90IHJlc3BvbmQgdG8gdGhlXG5pbnN1bGluIHNpZ25hbCBvZiBoaWdoIGxldmVscyBvZiBnbHVjb3NlIGluIHRoZSBibG9vZC4gVGhlIGluc3VsaW4gZG9lc1xubm90IG9wZW4gdGhlIGNlbGwgZG9vcnMgdG8gdGhlIG11c2NsZXMgYW5kIHRoZSBvcmdhbnMuIEluIHJlc3BvbnNlLCB0aGVcbmJvZHkgcHJvZHVjZXMgbGFyZ2UgcXVhbnRpdGllcyBvZiBpbnN1bGluIGZyb20gdGhlIHNpZ25hbCBmb3IgdGhlIGtleSB0b1xudW5sb2NrIGNlbGxzIGZvciBnbHVjb3NlLiBUaHVzLCBleGNlc3MgbGV2ZWxzIG9mIGluc3VsaW4gYW5kIGdsdWNvc2UgYXJlXG5jaXJjdWxhdGluZyBpbiB0aGUgYmxvb2Qgd2hpY2ggdGhlIGJvZHkgY2Fubm90IHVzZS5gfTwvcD5cbiAgICA8aW1nIHNyYz17SW5zdWxpblJlc2lzdGFuY2UwM30gLz5cbiAgICA8cD57YFBhdGllbnRzIGNhbiByZWR1Y2UgaW5zdWxpbiByZXNpc3RhbmNlIGFuZCBoZWxwIHRoZSBib2R5IGJlY29tZSBtb3JlXG5zZW5zaXRpdmUgdG8gaW51bGluIGJ5IGV4ZXJjaXNpbmcsIGZvbGxvd2luZyBhIGRpYWJldGljIGRpZXQgbG93IGluXG5jYXJib2h5ZHJhdGVzIGFuZCBmYXRzLCBhbmQgdGFraW5nIGFsbCBtZWRpY2F0aW9ucyBhcyBwcmVzY3JpYmVkLiBBXG5kaWFiZXRpYyBkaWV0IG1lYW5zIGVhdGluZyBoZWFsdGh5IGZvb2QgY2hvaWNlcyBhdCByZWd1bGFyIG1lYWx0aW1lcy5gfTwvcD5cbiAgICA8aW1nIHNyYz17SW5zdWxpblJlc2lzdGFuY2UwNH0gLz5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/what-is-diabetes/insulin-resistance/index.md\n");

/***/ }),

/***/ "@mdx-js/react":
/*!********************************!*\
  !*** external "@mdx-js/react" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mdx-js/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWR4LWpzL3JlYWN0XCI/M2UxMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWR4LWpzL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1keC1qcy9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@mdx-js/react\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });