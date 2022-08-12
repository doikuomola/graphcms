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

/***/ "./components/PostWidget.jsx":
/*!***********************************!*\
  !*** ./components/PostWidget.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ \"./services/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! timeago.js */ \"./node_modules/timeago.js/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar PostWidget = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), recentPosts = ref[0], setRecentPosts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        (0,_services__WEBPACK_IMPORTED_MODULE_2__.getRecentPosts)().then(function(result) {\n            setRecentPosts(result);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white shadow-lg rounded-lg p-8 mb-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"text-center font-semibold text-sm text-2xl pb-4\",\n                children: \"Recent Posts\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostWidget.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            recentPosts.map(function(post, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-8 my-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: post.image.url,\n                                alt: post.title,\n                                height: \"80px\",\n                                width: \"80px\",\n                                unoptimized: true,\n                                className: \"rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostWidget.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostWidget.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-gray-600 text-xs\",\n                                    children: timeago_js__WEBPACK_IMPORTED_MODULE_4__.format(post.createdAt)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostWidget.jsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/post/\".concat(post.slug),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-semibold cursor-pointer hover:text-blue-600 duration-500\",\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostWidget.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostWidget.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostWidget.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostWidget.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DAVID\\\\Desktop\\\\graphcms\\\\components\\\\PostWidget.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(PostWidget, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = PostWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostWidget);\nvar _c;\n$RefreshReg$(_c, \"PostWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RXaWRnZXQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7OztBQUFtRDtBQUNOO0FBQ2Q7QUFDTztBQUNUO0FBRTdCLElBQU1PLFVBQVUsR0FBRyxXQUFNOztJQUN2QixJQUFzQ0wsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEzQ00sV0FBVyxHQUFvQk4sR0FBWSxHQUFoQyxFQUFFTyxjQUFjLEdBQUlQLEdBQVksR0FBaEI7SUFHbENELGdEQUFTLENBQUMsV0FBTTtRQUNkRSx5REFBYyxFQUFFLENBQ2JPLElBQUksQ0FBQyxTQUFDQyxNQUFNLEVBQUs7WUFDaEJGLGNBQWMsQ0FBQ0UsTUFBTSxDQUFDLENBQUM7U0FDeEIsQ0FBQyxDQUNEQyxLQUFLLENBQUMsU0FBQ0MsR0FBRyxFQUFLO1lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQztTQUNsQixDQUFDLENBQUM7S0FDTixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHlDQUEwQzs7MEJBQ3ZELDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsaURBQWlEOzBCQUFDLGNBQVk7Ozs7O3FCQUFLO1lBQ2hGVCxXQUFXLENBQUNXLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLEtBQUs7cUNBQzNCLDhEQUFDTCxLQUFHO29CQUFhQyxTQUFTLEVBQUMsOEJBQWdDOztzQ0FDekQsOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxFQUFFO3NDQUNmLDRFQUFDYixtREFBSztnQ0FDSmtCLEdBQUcsRUFBRUYsSUFBSSxDQUFDRyxLQUFLLENBQUNDLEdBQUc7Z0NBQ25CQyxHQUFHLEVBQUVMLElBQUksQ0FBQ00sS0FBSztnQ0FDZkMsTUFBTSxFQUFDLE1BQU07Z0NBQ2JDLEtBQUssRUFBQyxNQUFNO2dDQUNaQyxXQUFXO2dDQUNYWixTQUFTLEVBQUMsY0FBYzs7Ozs7cUNBQ3hCOzs7OztpQ0FDRTtzQ0FDTiw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHFCQUFxQjs7OENBQ2xDLDhEQUFDYSxNQUFJO29DQUFDYixTQUFTLEVBQUMsdUJBQXVCOzhDQUNwQ1osOENBQWMsQ0FBQ2UsSUFBSSxDQUFDWSxTQUFTLENBQUM7Ozs7O3lDQUMxQjs4Q0FDUCw4REFBQzFCLGtEQUFJO29DQUFDMkIsSUFBSSxFQUFFLFFBQU8sQ0FBWSxPQUFWYixJQUFJLENBQUNjLElBQUksQ0FBRTs4Q0FDOUIsNEVBQUNKLE1BQUk7d0NBQUNiLFNBQVMsRUFBQywrREFBK0Q7a0RBQUVHLElBQUksQ0FBQ00sS0FBSzs7Ozs7NkNBQVE7Ozs7O3lDQUM5Rjs7Ozs7O2lDQUNIOzttQkFsQkVMLEtBQUs7Ozs7eUJBbUJUO2FBQ1AsQ0FBQzs7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0dBekNLZCxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUEyQ2hCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0V2lkZ2V0LmpzeD8yZmJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdldFJlY2VudFBvc3RzIH0gZnJvbSBcIi4uL3NlcnZpY2VzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgKiBhcyB0aW1lYWdvIGZyb20gXCJ0aW1lYWdvLmpzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IFBvc3RXaWRnZXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3JlY2VudFBvc3RzLCBzZXRSZWNlbnRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UmVjZW50UG9zdHMoKVxyXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgc2V0UmVjZW50UG9zdHMocmVzdWx0KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnIHAtOCAgbWItMTJcIj5cclxuICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgdGV4dC1zbSB0ZXh0LTJ4bCBwYi00XCI+UmVjZW50IFBvc3RzPC9oND5cclxuICAgICAge3JlY2VudFBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC04ICAgbXktNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtwb3N0LmltYWdlLnVybH1cclxuICAgICAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiODBweFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI4MHB4XCJcclxuICAgICAgICAgICAgICB1bm9wdGltaXplZFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtMVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQteHNcIj5cclxuICAgICAgICAgICAgICB7dGltZWFnby5mb3JtYXQocG9zdC5jcmVhdGVkQXQpfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3Bvc3Quc2x1Z31gfT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtYmx1ZS02MDAgZHVyYXRpb24tNTAwXCI+e3Bvc3QudGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFdpZGdldDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXRSZWNlbnRQb3N0cyIsIkltYWdlIiwidGltZWFnbyIsIkxpbmsiLCJQb3N0V2lkZ2V0IiwicmVjZW50UG9zdHMiLCJzZXRSZWNlbnRQb3N0cyIsInRoZW4iLCJyZXN1bHQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsIm1hcCIsInBvc3QiLCJpbmRleCIsInNyYyIsImltYWdlIiwidXJsIiwiYWx0IiwidGl0bGUiLCJoZWlnaHQiLCJ3aWR0aCIsInVub3B0aW1pemVkIiwic3BhbiIsImZvcm1hdCIsImNyZWF0ZWRBdCIsImhyZWYiLCJzbHVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostWidget.jsx\n"));

/***/ })

});