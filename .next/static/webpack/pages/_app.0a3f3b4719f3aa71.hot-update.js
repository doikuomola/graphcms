"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/PostCard.jsx":
/*!*********************************!*\
  !*** ./components/PostCard.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! timeago.js */ \"./node_modules/timeago.js/esm/index.js\");\nvar _this = undefined;\n\n\n\n\nvar PostCard = function(param) {\n    var post = param.post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white p-2 lg:p-8 shadow-lg rounded-lg mb-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: post.image.url,\n                    alt: post.title,\n                    className: \" w-full h-80 object-cover rounded-lg shadow-lg\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/post/\".concat(post.slug),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center te text-2xl my-4 font-semibold cursor-pointer hover:text-blue-600 transition duration-300\",\n                    children: post.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center flex justify-between w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: post.author.avatar.url,\n                                alt: post.author.avatar.url,\n                                height: \"30px\",\n                                width: \"30px\",\n                                className: \"rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-700 text-lg\",\n                                children: post.author.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-6 w-6 inline mr-2 text-pink-500\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: timeago_js__WEBPACK_IMPORTED_MODULE_3__.format(post.createdAt)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center my-4 text-gray-700 text-lg font-normal px-4 lg:px-20\",\n                children: post.excerpt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/post/\".concat(post.slug),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-transparent px-4 py-2 rounded-full hover:text-white text-lg duration-500 hover:bg-blue-800 border border-blue-600 text-blue-800\",\n                        children: \"Continue Reading\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostCard.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\nvar _c;\n$RefreshReg$(_c, \"PostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUEwQjtBQUNHO0FBQ1M7QUFFdEMsSUFBTUcsUUFBUSxHQUFHLGdCQUFjO1FBQVhDLElBQUksU0FBSkEsSUFBSTtJQUN0QixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsK0NBQStDOzswQkFDNUQsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxrQkFBa0I7MEJBQy9CLDRFQUFDQyxLQUFHO29CQUNGQyxHQUFHLEVBQUVKLElBQUksQ0FBQ0ssS0FBSyxDQUFDQyxHQUFHO29CQUNuQkMsR0FBRyxFQUFFUCxJQUFJLENBQUNRLEtBQUs7b0JBQ2ZOLFNBQVMsRUFBQyxnREFBZ0Q7Ozs7O3lCQUMxRDs7Ozs7cUJBQ0U7MEJBQ04sOERBQUNMLGtEQUFJO2dCQUFDWSxJQUFJLEVBQUUsUUFBTyxDQUFZLE9BQVZULElBQUksQ0FBQ1UsSUFBSSxDQUFFOzBCQUM5Qiw0RUFBQ0MsSUFBRTtvQkFBQ1QsU0FBUyxFQUFDLHVHQUF1Rzs4QkFDbEhGLElBQUksQ0FBQ1EsS0FBSzs7Ozs7eUJBQ1I7Ozs7O3FCQUNBOzBCQUNQLDhEQUFDUCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMseUNBQXlDOztrQ0FDdEQsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyx5QkFBeUI7OzBDQUN0Qyw4REFBQ0MsS0FBRztnQ0FDRkMsR0FBRyxFQUFFSixJQUFJLENBQUNZLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDUCxHQUFHO2dDQUMzQkMsR0FBRyxFQUFFUCxJQUFJLENBQUNZLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDUCxHQUFHO2dDQUMzQlEsTUFBTSxFQUFDLE1BQU07Z0NBQ2JDLEtBQUssRUFBQyxNQUFNO2dDQUNaYixTQUFTLEVBQUMsY0FBYzs7Ozs7cUNBQ3hCOzBDQUNGLDhEQUFDYyxHQUFDO2dDQUFDZCxTQUFTLEVBQUMsdUJBQXVCOzBDQUFFRixJQUFJLENBQUNZLE1BQU0sQ0FBQ0ssSUFBSTs7Ozs7cUNBQUs7Ozs7Ozs2QkFDdkQ7a0NBQ04sOERBQUNoQixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsbUJBQW1COzswQ0FDaEMsOERBQUNnQixLQUFHO2dDQUNGQyxLQUFLLEVBQUMsNEJBQTRCO2dDQUNsQ2pCLFNBQVMsRUFBQyxtQ0FBbUM7Z0NBQzdDa0IsSUFBSSxFQUFDLE1BQU07Z0NBQ1hDLE9BQU8sRUFBQyxXQUFXO2dDQUNuQkMsTUFBTSxFQUFDLGNBQWM7MENBQ3JCLDRFQUFDQyxNQUFJO29DQUNIQyxhQUFhLEVBQUMsT0FBTztvQ0FDckJDLGNBQWMsRUFBQyxPQUFPO29DQUN0QkMsV0FBVyxFQUFDLEdBQUc7b0NBQ2ZDLENBQUMsRUFBQyx3RkFBd0Y7Ozs7O3lDQUMxRjs7Ozs7cUNBQ0U7MENBQ04sOERBQUNDLE1BQUk7MENBQUU5Qiw4Q0FBYyxDQUFDRSxJQUFJLENBQUM4QixTQUFTLENBQUM7Ozs7O3FDQUFROzs7Ozs7NkJBQ3pDOzs7Ozs7cUJBQ0Y7MEJBQ04sOERBQUNkLEdBQUM7Z0JBQUNkLFNBQVMsRUFBQyxrRUFBa0U7MEJBQzVFRixJQUFJLENBQUMrQixPQUFPOzs7OztxQkFDWDswQkFDSiw4REFBQzlCLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxhQUFhOzBCQUMxQiw0RUFBQ0wsa0RBQUk7b0JBQUNZLElBQUksRUFBRSxRQUFPLENBQVksT0FBVlQsSUFBSSxDQUFDVSxJQUFJLENBQUU7OEJBQzlCLDRFQUFDc0IsUUFBTTt3QkFBQzlCLFNBQVMsRUFBQyxvSUFBb0k7a0NBQUMsa0JBRXZKOzs7Ozs2QkFBUzs7Ozs7eUJBQ0o7Ozs7O3FCQUNIOzs7Ozs7YUFDRixDQUNOO0NBQ0g7QUF2REtILEtBQUFBLFFBQVE7QUF5RGQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzeD85ZTJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgKiBhcyB0aW1lYWdvIGZyb20gXCJ0aW1lYWdvLmpzXCI7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtMiBsZzpwLTggc2hhZG93LWxnIHJvdW5kZWQtbGcgbWItOFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzcmM9e3Bvc3QuaW1hZ2UudXJsfVxyXG4gICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiIHctZnVsbCBoLTgwIG9iamVjdC1jb3ZlciByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3Bvc3Quc2x1Z31gfT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGUgdGV4dC0yeGwgbXktNCBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtYmx1ZS02MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIj5cclxuICAgICAgICAgIHtwb3N0LnRpdGxlfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17cG9zdC5hdXRob3IuYXZhdGFyLnVybH1cclxuICAgICAgICAgICAgYWx0PXtwb3N0LmF1dGhvci5hdmF0YXIudXJsfVxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIzMHB4XCJcclxuICAgICAgICAgICAgd2lkdGg9XCIzMHB4XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIHRleHQtbGdcIj57cG9zdC5hdXRob3IubmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBpbmxpbmUgbXItMiB0ZXh0LXBpbmstNTAwXCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNOCA3VjNtOCA0VjNtLTkgOGgxME01IDIxaDE0YTIgMiAwIDAwMi0yVjdhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyelwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDxzcGFuPnt0aW1lYWdvLmZvcm1hdChwb3N0LmNyZWF0ZWRBdCl9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXktNCB0ZXh0LWdyYXktNzAwIHRleHQtbGcgZm9udC1ub3JtYWwgcHgtNCBsZzpweC0yMFwiPlxyXG4gICAgICAgIHtwb3N0LmV4Y2VycHR9XHJcbiAgICAgIDwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3Bvc3Quc2x1Z31gfT5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgcHgtNCBweS0yIHJvdW5kZWQtZnVsbCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQtbGcgZHVyYXRpb24tNTAwIGhvdmVyOmJnLWJsdWUtODAwIGJvcmRlciBib3JkZXItYmx1ZS02MDAgdGV4dC1ibHVlLTgwMFwiPlxyXG4gICAgICAgICAgICBDb250aW51ZSBSZWFkaW5nXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwidGltZWFnbyIsIlBvc3RDYXJkIiwicG9zdCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlIiwidXJsIiwiYWx0IiwidGl0bGUiLCJocmVmIiwic2x1ZyIsImgxIiwiYXV0aG9yIiwiYXZhdGFyIiwiaGVpZ2h0Iiwid2lkdGgiLCJwIiwibmFtZSIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwic3BhbiIsImZvcm1hdCIsImNyZWF0ZWRBdCIsImV4Y2VycHQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostCard.jsx\n"));

/***/ })

});