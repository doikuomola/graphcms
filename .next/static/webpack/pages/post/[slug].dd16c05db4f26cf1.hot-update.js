"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./components/Author.jsx":
/*!*******************************!*\
  !*** ./components/Author.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Author = function(param) {\n    var author = param.author;\n    console.log(author);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-black bg-opacity-20 text-center mt-10 p-12 relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: author.avatar.url,\n                    alt: author.name,\n                    height: \"80\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\Author.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\Author.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: author.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\Author.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: author.bio\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\Author.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\Author.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this);\n};\n_c = Author;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Author);\nvar _c;\n$RefreshReg$(_c, \"Author\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGhvci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBMEI7QUFFMUIsSUFBTUMsTUFBTSxHQUFHLGdCQUFnQjtRQUFiQyxNQUFNLFNBQU5BLE1BQU07SUFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUMsQ0FBQztJQUNwQixxQkFDRSw4REFBQ0csS0FBRztRQUFDQyxTQUFTLEVBQUMsd0RBQXdEOzswQkFDckUsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxXQUFXOzBCQUN4Qiw0RUFBQ0MsS0FBRztvQkFBQ0MsR0FBRyxFQUFFTixNQUFNLENBQUNPLE1BQU0sQ0FBQ0MsR0FBRztvQkFBRUMsR0FBRyxFQUFFVCxNQUFNLENBQUNVLElBQUk7b0JBQUVDLE1BQU0sRUFBQyxJQUFJOzs7Ozt5QkFBRzs7Ozs7cUJBQ3pEOzBCQUNOLDhEQUFDQyxJQUFFOzBCQUFFWixNQUFNLENBQUNVLElBQUk7Ozs7O3FCQUFNOzBCQUN0Qiw4REFBQ0csR0FBQzswQkFBRWIsTUFBTSxDQUFDYyxHQUFHOzs7OztxQkFBSzs7Ozs7O2FBQ2YsQ0FDTjtDQUNIO0FBWEtmLEtBQUFBLE1BQU07QUFhWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXV0aG9yLmpzeD80YmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEF1dGhvciA9ICh7IGF1dGhvciB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coYXV0aG9yKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayBiZy1vcGFjaXR5LTIwIHRleHQtY2VudGVyIG10LTEwIHAtMTIgcmVsYXRpdmVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBcIj5cclxuICAgICAgICA8aW1nIHNyYz17YXV0aG9yLmF2YXRhci51cmx9IGFsdD17YXV0aG9yLm5hbWV9IGhlaWdodD1cIjgwXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMz57YXV0aG9yLm5hbWV9PC9oMz5cclxuICAgICAgPHA+e2F1dGhvci5iaW99PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhvcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXV0aG9yIiwiYXV0aG9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImF2YXRhciIsInVybCIsImFsdCIsIm5hbWUiLCJoZWlnaHQiLCJoMyIsInAiLCJiaW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Author.jsx\n"));

/***/ })

});