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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! timeago.js */ \"./node_modules/timeago.js/esm/index.js\");\nvar _this = undefined;\n\n\n\nvar PostDetail = function(param) {\n    var post = param.post;\n    console.log(post);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white shadow-lg lg:p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-hidden shadow-md mb-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: post.image.url,\n                    alt: post.title,\n                    className: \"w-full h-full object-cover shadow-lg lg:rounded-lg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-4 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: post.author.avatar.url,\n                                alt: post.author.name,\n                                height: \"30px\",\n                                width: \"30px\",\n                                className: \"rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: post.author.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-6 w-6 inline mr-2 text-pink-500\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: timeago_js__WEBPACK_IMPORTED_MODULE_2__.format(post.createdAt)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-semibold my-4\",\n                children: post.title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: post.content\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostDetail.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = PostDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostDetail);\nvar _c;\n$RefreshReg$(_c, \"PostDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3REZXRhaWwuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUEwQjtBQUNZO0FBRXRDLElBQU1FLFVBQVUsR0FBRyxnQkFDbkI7UUFEc0JDLElBQUksU0FBSkEsSUFBSTtJQUV0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQyxDQUFDO0lBQ3BCLHFCQUNFLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQywyQkFBMkI7OzBCQUN4Qyw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGdDQUFnQzswQkFDN0MsNEVBQUNDLEtBQUc7b0JBQ0ZDLEdBQUcsRUFBRU4sSUFBSSxDQUFDTyxLQUFLLENBQUNDLEdBQUc7b0JBQ25CQyxHQUFHLEVBQUVULElBQUksQ0FBQ1UsS0FBSztvQkFDZk4sU0FBUyxFQUFDLG9EQUFvRDs7Ozs7eUJBQzlEOzs7OztxQkFDRTswQkFDTiw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLG1DQUFtQzs7a0NBQ2hELDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMseUJBQXlCOzswQ0FDdEMsOERBQUNDLEtBQUc7Z0NBQ0ZDLEdBQUcsRUFBRU4sSUFBSSxDQUFDVyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0osR0FBRztnQ0FDM0JDLEdBQUcsRUFBRVQsSUFBSSxDQUFDVyxNQUFNLENBQUNFLElBQUk7Z0NBQ3JCQyxNQUFNLEVBQUMsTUFBTTtnQ0FDYkMsS0FBSyxFQUFDLE1BQU07Z0NBQ1pYLFNBQVMsRUFBQyxjQUFjOzs7OztxQ0FDeEI7MENBQ0YsOERBQUNZLEdBQUM7MENBQUVoQixJQUFJLENBQUNXLE1BQU0sQ0FBQ0UsSUFBSTs7Ozs7cUNBQUs7Ozs7Ozs2QkFDckI7a0NBQ04sOERBQUNWLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxtQkFBbUI7OzBDQUNoQyw4REFBQ2EsS0FBRztnQ0FDRkMsS0FBSyxFQUFDLDRCQUE0QjtnQ0FDbENkLFNBQVMsRUFBQyxtQ0FBbUM7Z0NBQzdDZSxJQUFJLEVBQUMsTUFBTTtnQ0FDWEMsT0FBTyxFQUFDLFdBQVc7Z0NBQ25CQyxNQUFNLEVBQUMsY0FBYzswQ0FDckIsNEVBQUNDLE1BQUk7b0NBQ0hDLGFBQWEsRUFBQyxPQUFPO29DQUNyQkMsY0FBYyxFQUFDLE9BQU87b0NBQ3RCQyxXQUFXLEVBQUMsR0FBRztvQ0FDZkMsQ0FBQyxFQUFDLHdGQUF3Rjs7Ozs7eUNBQzFGOzs7OztxQ0FDRTswQ0FDTiw4REFBQ0MsTUFBSTswQ0FBRTdCLDhDQUFjLENBQUNFLElBQUksQ0FBQzZCLFNBQVMsQ0FBQzs7Ozs7cUNBQVE7Ozs7Ozs2QkFDekM7Ozs7OztxQkFDRjswQkFDTiw4REFBQ0MsSUFBRTtnQkFBQzFCLFNBQVMsRUFBQyw2QkFBNkI7MEJBQUVKLElBQUksQ0FBQ1UsS0FBSzs7Ozs7cUJBQU07MEJBQzdELDhEQUFDTSxHQUFDOzBCQUFFaEIsSUFBSSxDQUFDK0IsT0FBTzs7Ozs7cUJBQUs7Ozs7OzthQUNqQixDQUNOO0NBQ0g7QUE1Q0toQyxLQUFBQSxVQUFVO0FBOENoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdERldGFpbC5qc3g/OWZkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIHRpbWVhZ28gZnJvbSBcInRpbWVhZ28uanNcIjtcclxuXHJcbmNvbnN0IFBvc3REZXRhaWwgPSAoeyBwb3N0IH0pID0+XHJcbntcclxuICAgIGNvbnNvbGUubG9nKHBvc3QpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1sZyBsZzpwLThcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gc2hhZG93LW1kIG1iLTZcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e3Bvc3QuaW1hZ2UudXJsfVxyXG4gICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgc2hhZG93LWxnIGxnOnJvdW5kZWQtbGdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtwb3N0LmF1dGhvci5hdmF0YXIudXJsfVxyXG4gICAgICAgICAgICBhbHQ9e3Bvc3QuYXV0aG9yLm5hbWV9XHJcbiAgICAgICAgICAgIGhlaWdodD1cIjMwcHhcIlxyXG4gICAgICAgICAgICB3aWR0aD1cIjMwcHhcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwPntwb3N0LmF1dGhvci5uYW1lfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IGlubGluZSBtci0yIHRleHQtcGluay01MDBcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgZD1cIk04IDdWM204IDRWM20tOSA4aDEwTTUgMjFoMTRhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJ6XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPHNwYW4+e3RpbWVhZ28uZm9ybWF0KHBvc3QuY3JlYXRlZEF0KX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBteS00XCI+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgPHA+e3Bvc3QuY29udGVudH08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdERldGFpbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidGltZWFnbyIsIlBvc3REZXRhaWwiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlIiwidXJsIiwiYWx0IiwidGl0bGUiLCJhdXRob3IiLCJhdmF0YXIiLCJuYW1lIiwiaGVpZ2h0Iiwid2lkdGgiLCJwIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJzcGFuIiwiZm9ybWF0IiwiY3JlYXRlZEF0IiwiaDEiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostDetail.jsx\n"));

/***/ })

});