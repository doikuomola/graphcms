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

/***/ "./components/PostDetail.jsx":
/*!***********************************!*\
  !*** ./components/PostDetail.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! timeago.js */ \"./node_modules/timeago.js/esm/index.js\");\n/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-html-parser */ \"./node_modules/react-html-parser/lib/index.js\");\nvar _this = undefined;\n\n\n\n\nvar PostDetail = function(param) {\n    var post = param.post;\n    var html = post.content.html;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white shadow-lg lg:p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-hidden shadow-md mb-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: post.image.url,\n                    alt: post.title,\n                    className: \"w-full h-full object-cover shadow-lg lg:rounded-lg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-4 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: post.author.avatar.url,\n                                alt: post.author.name,\n                                height: \"30px\",\n                                width: \"30px\",\n                                className: \"rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: post.author.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-6 w-6 inline mr-2 text-pink-500\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: timeago_js__WEBPACK_IMPORTED_MODULE_2__.format(post.createdAt)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-sm lg:text-2xl text-center lg:text-left font-semibold my-4\",\n                children: post.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm lg:text-lg\",\n                children: (0,react_html_parser__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(html)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = PostDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostDetail);\nvar _c;\n$RefreshReg$(_c, \"PostDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3REZXRhaWwuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDWTtBQUNVO0FBRWhELElBQU1HLFVBQVUsR0FBRyxnQkFBYztRQUFYQyxJQUFJLFNBQUpBLElBQUk7SUFDeEIsSUFBTUMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLE9BQU8sQ0FBQ0QsSUFBSTtJQUM5QixxQkFDRSw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUMsMkJBQTJCOzswQkFDeEMsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxnQ0FBZ0M7MEJBQzdDLDRFQUFDQyxLQUFHO29CQUNGQyxHQUFHLEVBQUVOLElBQUksQ0FBQ08sS0FBSyxDQUFDQyxHQUFHO29CQUNuQkMsR0FBRyxFQUFFVCxJQUFJLENBQUNVLEtBQUs7b0JBQ2ZOLFNBQVMsRUFBQyxvREFBb0Q7Ozs7O3lCQUM5RDs7Ozs7cUJBQ0U7MEJBQ04sOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxtQ0FBbUM7O2tDQUNoRCw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLHlCQUF5Qjs7MENBQ3RDLDhEQUFDQyxLQUFHO2dDQUNGQyxHQUFHLEVBQUVOLElBQUksQ0FBQ1csTUFBTSxDQUFDQyxNQUFNLENBQUNKLEdBQUc7Z0NBQzNCQyxHQUFHLEVBQUVULElBQUksQ0FBQ1csTUFBTSxDQUFDRSxJQUFJO2dDQUNyQkMsTUFBTSxFQUFDLE1BQU07Z0NBQ2JDLEtBQUssRUFBQyxNQUFNO2dDQUNaWCxTQUFTLEVBQUMsY0FBYzs7Ozs7cUNBQ3hCOzBDQUNGLDhEQUFDWSxHQUFDOzBDQUFFaEIsSUFBSSxDQUFDVyxNQUFNLENBQUNFLElBQUk7Ozs7O3FDQUFLOzs7Ozs7NkJBQ3JCO2tDQUNOLDhEQUFDVixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsbUJBQW1COzswQ0FDaEMsOERBQUNhLEtBQUc7Z0NBQ0ZDLEtBQUssRUFBQyw0QkFBNEI7Z0NBQ2xDZCxTQUFTLEVBQUMsbUNBQW1DO2dDQUM3Q2UsSUFBSSxFQUFDLE1BQU07Z0NBQ1hDLE9BQU8sRUFBQyxXQUFXO2dDQUNuQkMsTUFBTSxFQUFDLGNBQWM7MENBQ3JCLDRFQUFDQyxNQUFJO29DQUNIQyxhQUFhLEVBQUMsT0FBTztvQ0FDckJDLGNBQWMsRUFBQyxPQUFPO29DQUN0QkMsV0FBVyxFQUFDLEdBQUc7b0NBQ2ZDLENBQUMsRUFBQyx3RkFBd0Y7Ozs7O3lDQUMxRjs7Ozs7cUNBQ0U7MENBQ04sOERBQUNDLE1BQUk7MENBQUU5Qiw4Q0FBYyxDQUFDRyxJQUFJLENBQUM2QixTQUFTLENBQUM7Ozs7O3FDQUFROzs7Ozs7NkJBQ3pDOzs7Ozs7cUJBQ0Y7MEJBQ04sOERBQUNDLElBQUU7Z0JBQUMxQixTQUFTLEVBQUMsaUVBQWlFOzBCQUFFSixJQUFJLENBQUNVLEtBQUs7Ozs7O3FCQUFNOzBCQUNqRyw4REFBQ00sR0FBQztnQkFBQ1osU0FBUyxFQUFDLG9CQUFvQjswQkFBRU4sNkRBQWUsQ0FBQ0csSUFBSSxDQUFDOzs7OztxQkFBSzs7Ozs7O2FBQ3pELENBQ047Q0FDSDtBQTNDS0YsS0FBQUEsVUFBVTtBQTZDaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3REZXRhaWwuanN4PzlmZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyB0aW1lYWdvIGZyb20gXCJ0aW1lYWdvLmpzXCI7XHJcbmltcG9ydCBSZWFjdEh0bWxQYXJzZXIgZnJvbSBcInJlYWN0LWh0bWwtcGFyc2VyXCI7XHJcblxyXG5jb25zdCBQb3N0RGV0YWlsID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgaHRtbCA9IHBvc3QuY29udGVudC5odG1sO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1sZyBsZzpwLThcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gc2hhZG93LW1kIG1iLTZcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e3Bvc3QuaW1hZ2UudXJsfVxyXG4gICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgc2hhZG93LWxnIGxnOnJvdW5kZWQtbGdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtwb3N0LmF1dGhvci5hdmF0YXIudXJsfVxyXG4gICAgICAgICAgICBhbHQ9e3Bvc3QuYXV0aG9yLm5hbWV9XHJcbiAgICAgICAgICAgIGhlaWdodD1cIjMwcHhcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjMwcHhcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwPntwb3N0LmF1dGhvci5uYW1lfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IGlubGluZSBtci0yIHRleHQtcGluay01MDBcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgZD1cIk04IDdWM204IDRWM20tOSA4aDEwTTUgMjFoMTRhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJ6XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPHNwYW4+e3RpbWVhZ28uZm9ybWF0KHBvc3QuY3JlYXRlZEF0KX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1zbSBsZzp0ZXh0LTJ4bCB0ZXh0LWNlbnRlciBsZzp0ZXh0LWxlZnQgZm9udC1zZW1pYm9sZCBteS00XCI+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZzp0ZXh0LWxnXCI+e1JlYWN0SHRtbFBhcnNlcihodG1sKX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdERldGFpbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidGltZWFnbyIsIlJlYWN0SHRtbFBhcnNlciIsIlBvc3REZXRhaWwiLCJwb3N0IiwiaHRtbCIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsInVybCIsImFsdCIsInRpdGxlIiwiYXV0aG9yIiwiYXZhdGFyIiwibmFtZSIsImhlaWdodCIsIndpZHRoIiwicCIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwic3BhbiIsImZvcm1hdCIsImNyZWF0ZWRBdCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostDetail.jsx\n"));

/***/ })

});