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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/what-is-diabetes/goals-of-diabetes-care/index.md");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/what-is-diabetes/goals-of-diabetes-care/index.md":
/*!****************************************************************!*\
  !*** ./pages/what-is-diabetes/goals-of-diabetes-care/index.md ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MDXContent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ \"@mdx-js/react\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/travisgerrard/Documents/next-mdx/pages/what-is-diabetes/goals-of-diabetes-care/index.md\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n/* @jsx mdx */\n\nconst layoutProps = {};\nconst MDXLayout = \"wrapper\";\nfunction MDXContent(_ref) {\n  let {\n    components\n  } = _ref,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 10\n    }\n  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, `Goals of diabetes care`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, `The goal of care in treatment of type 2 diabetes is to achieve and\nmaintain an ideal blood glucose, healthful fat levels of the blood\n(lipids), and blood pressure control to prevent or delay problems from\ndiabetes.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, `Some persons can manage their blood glucose by eating well and\nexercising regularly. Losing excess weight and taking care of yourself\nby following a self-management plan will help a person achieve blood\nglucose control.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"blockquote\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    parentName: \"blockquote\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, `The goal for the blood glucose is to range between 80-130mg/dL before a meal and less than 180 mg/dL 1-2 hours after a meal.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, `For most patients, the hemoglobin A1C goal is < 7% and the recommendation is for a A1C test every three months.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"blockquote\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    parentName: \"blockquote\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, `However, depending on your age and other medical conditions, your provider may set a higher A1C goal.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, `Some patients need medication or insulin to manage their blood sugar.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, `Your diabetes provider may prescribe oral medications or insulin to keep\nyour blood sugar at the target levels.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, `Blood pressure goal for many patients is 140/90`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"blockquote\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    parentName: \"blockquote\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, `Your provider may choose an individualized blood pressure goal based on your medical history and age.`)), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, `Goals for lipid management will be defined by your provider based on\nyour overall health, age and goals of care.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }, `Diabetes Education resources`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, `The `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"a\", _extends({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://www.seattleymca.org/programs-for-health/weight-and-nutrition/diabetes-prevention-program\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 16\n    }\n  }), `YMCA of Seattle offers a Diabetes Prevention Program`), ` - contact your local YMCA for more information about the program.`), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, `Virginia Mason offers a monthly Living Well with Diabetes class.\nSchedule and location Information is available at `, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__[\"mdx\"])(\"a\", _extends({\n    parentName: \"p\"\n  }, {\n    \"href\": \"https://www.virginiamason.org/events\"\n  }, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 53\n    }\n  }), `Virginia Mason's Classes and Events page`)));\n}\n;\nMDXContent.isMDXComponent = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93aGF0LWlzLWRpYWJldGVzL2dvYWxzLW9mLWRpYWJldGVzLWNhcmUvaW5kZXgubWQ/MmVjNyJdLCJuYW1lcyI6WyJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUlBLE1BQU1BLFdBQVcsR0FBRyxFQUFwQjtBQUdBLE1BQU1DLFNBQVMsR0FBRyxTQUFsQjtBQUNlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BSGdDO0FBQ2pDQztBQURpQyxHQUdoQztBQUFBLE1BREVDLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELGVBQWVKLFdBQWYsRUFBZ0NJLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU0sd0JBQU4sQ0FESyxFQUVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUNUO0FBQ0E7QUFDQSxVQUhJLENBRkssRUFNTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFDVDtBQUNBO0FBQ0EsaUJBSEksQ0FOSyxFQVVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGNBQVUsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNkIsOEhBQTdCLENBREYsQ0FWSyxFQWFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSyxpSEFBTCxDQWJLLEVBY0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsY0FBVSxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2Qix1R0FBN0IsQ0FERixDQWRLLEVBaUJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSyx1RUFBTCxDQWpCSyxFQWtCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFDVCx1Q0FESSxDQWxCSyxFQW9CTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUssaURBQUwsQ0FwQkssRUFxQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsY0FBVSxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2Qix1R0FBN0IsQ0FERixDQXJCSyxFQXdCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFDVCw0Q0FESSxDQXhCSyxFQTBCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU0sOEJBQU4sQ0ExQkssRUEyQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLLE1BQUwsRUFBVztBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQzdCLFlBQVE7QUFEcUIsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUVKLHNEQUZJLENBQVgsRUFFbUUsb0VBRm5FLENBM0JLLEVBOEJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUNULG1EQURJLEVBQ2dEO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDbEUsWUFBUTtBQUQwRCxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRXpDLDBDQUZ5QyxDQURoRCxDQTlCSyxDQUFQO0FBbUNEO0FBRUQ7QUFDQUQsVUFBVSxDQUFDRyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6Ii4vcGFnZXMvd2hhdC1pcy1kaWFiZXRlcy9nb2Fscy1vZi1kaWFiZXRlcy1jYXJlL2luZGV4Lm1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuXG5cblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIFxufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cbiAgICA8aDE+e2BHb2FscyBvZiBkaWFiZXRlcyBjYXJlYH08L2gxPlxuICAgIDxwPntgVGhlIGdvYWwgb2YgY2FyZSBpbiB0cmVhdG1lbnQgb2YgdHlwZSAyIGRpYWJldGVzIGlzIHRvIGFjaGlldmUgYW5kXG5tYWludGFpbiBhbiBpZGVhbCBibG9vZCBnbHVjb3NlLCBoZWFsdGhmdWwgZmF0IGxldmVscyBvZiB0aGUgYmxvb2RcbihsaXBpZHMpLCBhbmQgYmxvb2QgcHJlc3N1cmUgY29udHJvbCB0byBwcmV2ZW50IG9yIGRlbGF5IHByb2JsZW1zIGZyb21cbmRpYWJldGVzLmB9PC9wPlxuICAgIDxwPntgU29tZSBwZXJzb25zIGNhbiBtYW5hZ2UgdGhlaXIgYmxvb2QgZ2x1Y29zZSBieSBlYXRpbmcgd2VsbCBhbmRcbmV4ZXJjaXNpbmcgcmVndWxhcmx5LiBMb3NpbmcgZXhjZXNzIHdlaWdodCBhbmQgdGFraW5nIGNhcmUgb2YgeW91cnNlbGZcbmJ5IGZvbGxvd2luZyBhIHNlbGYtbWFuYWdlbWVudCBwbGFuIHdpbGwgaGVscCBhIHBlcnNvbiBhY2hpZXZlIGJsb29kXG5nbHVjb3NlIGNvbnRyb2wuYH08L3A+XG4gICAgPGJsb2NrcXVvdGU+XG4gICAgICA8cCBwYXJlbnROYW1lPVwiYmxvY2txdW90ZVwiPntgVGhlIGdvYWwgZm9yIHRoZSBibG9vZCBnbHVjb3NlIGlzIHRvIHJhbmdlIGJldHdlZW4gODAtMTMwbWcvZEwgYmVmb3JlIGEgbWVhbCBhbmQgbGVzcyB0aGFuIDE4MCBtZy9kTCAxLTIgaG91cnMgYWZ0ZXIgYSBtZWFsLmB9PC9wPlxuICAgIDwvYmxvY2txdW90ZT5cbiAgICA8cD57YEZvciBtb3N0IHBhdGllbnRzLCB0aGUgaGVtb2dsb2JpbiBBMUMgZ29hbCBpcyA8IDclIGFuZCB0aGUgcmVjb21tZW5kYXRpb24gaXMgZm9yIGEgQTFDIHRlc3QgZXZlcnkgdGhyZWUgbW9udGhzLmB9PC9wPlxuICAgIDxibG9ja3F1b3RlPlxuICAgICAgPHAgcGFyZW50TmFtZT1cImJsb2NrcXVvdGVcIj57YEhvd2V2ZXIsIGRlcGVuZGluZyBvbiB5b3VyIGFnZSBhbmQgb3RoZXIgbWVkaWNhbCBjb25kaXRpb25zLCB5b3VyIHByb3ZpZGVyIG1heSBzZXQgYSBoaWdoZXIgQTFDIGdvYWwuYH08L3A+XG4gICAgPC9ibG9ja3F1b3RlPlxuICAgIDxwPntgU29tZSBwYXRpZW50cyBuZWVkIG1lZGljYXRpb24gb3IgaW5zdWxpbiB0byBtYW5hZ2UgdGhlaXIgYmxvb2Qgc3VnYXIuYH08L3A+XG4gICAgPHA+e2BZb3VyIGRpYWJldGVzIHByb3ZpZGVyIG1heSBwcmVzY3JpYmUgb3JhbCBtZWRpY2F0aW9ucyBvciBpbnN1bGluIHRvIGtlZXBcbnlvdXIgYmxvb2Qgc3VnYXIgYXQgdGhlIHRhcmdldCBsZXZlbHMuYH08L3A+XG4gICAgPHA+e2BCbG9vZCBwcmVzc3VyZSBnb2FsIGZvciBtYW55IHBhdGllbnRzIGlzIDE0MC85MGB9PC9wPlxuICAgIDxibG9ja3F1b3RlPlxuICAgICAgPHAgcGFyZW50TmFtZT1cImJsb2NrcXVvdGVcIj57YFlvdXIgcHJvdmlkZXIgbWF5IGNob29zZSBhbiBpbmRpdmlkdWFsaXplZCBibG9vZCBwcmVzc3VyZSBnb2FsIGJhc2VkIG9uIHlvdXIgbWVkaWNhbCBoaXN0b3J5IGFuZCBhZ2UuYH08L3A+XG4gICAgPC9ibG9ja3F1b3RlPlxuICAgIDxwPntgR29hbHMgZm9yIGxpcGlkIG1hbmFnZW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ5IHlvdXIgcHJvdmlkZXIgYmFzZWQgb25cbnlvdXIgb3ZlcmFsbCBoZWFsdGgsIGFnZSBhbmQgZ29hbHMgb2YgY2FyZS5gfTwvcD5cbiAgICA8aDE+e2BEaWFiZXRlcyBFZHVjYXRpb24gcmVzb3VyY2VzYH08L2gxPlxuICAgIDxwPntgVGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3d3dy5zZWF0dGxleW1jYS5vcmcvcHJvZ3JhbXMtZm9yLWhlYWx0aC93ZWlnaHQtYW5kLW51dHJpdGlvbi9kaWFiZXRlcy1wcmV2ZW50aW9uLXByb2dyYW1cIlxuICAgICAgfX0+e2BZTUNBIG9mIFNlYXR0bGUgb2ZmZXJzIGEgRGlhYmV0ZXMgUHJldmVudGlvbiBQcm9ncmFtYH08L2E+e2AgLSBjb250YWN0IHlvdXIgbG9jYWwgWU1DQSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcHJvZ3JhbS5gfTwvcD5cbiAgICA8cD57YFZpcmdpbmlhIE1hc29uIG9mZmVycyBhIG1vbnRobHkgTGl2aW5nIFdlbGwgd2l0aCBEaWFiZXRlcyBjbGFzcy5cblNjaGVkdWxlIGFuZCBsb2NhdGlvbiBJbmZvcm1hdGlvbiBpcyBhdmFpbGFibGUgYXQgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3LnZpcmdpbmlhbWFzb24ub3JnL2V2ZW50c1wiXG4gICAgICB9fT57YFZpcmdpbmlhIE1hc29uJ3MgQ2xhc3NlcyBhbmQgRXZlbnRzIHBhZ2VgfTwvYT48L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/what-is-diabetes/goals-of-diabetes-care/index.md\n");

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