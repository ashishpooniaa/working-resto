"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/deliveryDashboard/page",{

/***/ "(app-pages-browser)/./src/app/deliveryDashboard/page.js":
/*!*******************************************!*\
  !*** ./src/app/deliveryDashboard/page.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _component_DeliveryHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_component/DeliveryHeader */ \"(app-pages-browser)/./src/app/_component/DeliveryHeader.js\");\n/* harmony import */ var _component_RestaurantFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_component/RestaurantFooter */ \"(app-pages-browser)/./src/app/_component/RestaurantFooter.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [myOrders, setMyOrders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getMyOrders = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (deliveryId)=>{\n        try {\n            const response = await fetch(\"http://localhost:3000/api/deliverypartner/order/\".concat(deliveryId));\n            const data = await response.json();\n            if (data.success) {\n                setMyOrders(data.result);\n            }\n        } catch (error) {\n            console.error(\"Error fetching orders:\", error);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const deliveryData = JSON.parse(localStorage.getItem(\"delivery\"));\n        if (!deliveryData) {\n            router.push(\"/deliverypartner\");\n        } else {\n            getMyOrders(deliveryData._id);\n        }\n    }, [\n        getMyOrders,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_DeliveryHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto px-4 py-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white shadow rounded-lg p-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl font-semibold text-gray-800 mb-4\",\n                                children: \"My Orders list\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined),\n                            myOrders.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\",\n                                children: myOrders.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-gray-50 p-4 rounded-lg shadow\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-gray-600\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                        children: \"Name:\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 50\n                                                    }, undefined),\n                                                    \" \",\n                                                    item.data.name\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-gray-600\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                        children: \"Amount:\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                                        lineNumber: 44,\n                                                        columnNumber: 50\n                                                    }, undefined),\n                                                    \" \",\n                                                    item.amount,\n                                                    \" Rs.\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-gray-600\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                        children: \"Address:\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                                        lineNumber: 45,\n                                                        columnNumber: 50\n                                                    }, undefined),\n                                                    \" \",\n                                                    item.data.address\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-gray-600\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                        children: \"Status:\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                                        lineNumber: 46,\n                                                        columnNumber: 50\n                                                    }, undefined),\n                                                    \" \",\n                                                    item.status\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-gray-600\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                        children: \"Update Status:\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                                        lineNumber: 47,\n                                                        columnNumber: 50\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                                children: \"Confirm\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                                                lineNumber: 48,\n                                                                columnNumber: 23\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                                children: \"On the Way\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                                                lineNumber: 49,\n                                                                columnNumber: 23\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                                children: \"Delivered\"\n                                                            }, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                                                lineNumber: 50,\n                                                                columnNumber: 23\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {}, void 0, false, {\n                                                                fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                                                lineNumber: 51,\n                                                                columnNumber: 23\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                                        lineNumber: 47,\n                                                        columnNumber: 81\n                                                    }, undefined),\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: \"You have no orders yet.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_RestaurantFooter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\INDIA\\\\Desktop\\\\next.js_demo\\\\resto-app\\\\src\\\\app\\\\deliveryDashboard\\\\page.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"iYZXiPsbZPtQrbOGr8Vf7i/pu7w=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGVsaXZlcnlEYXNoYm9hcmQvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDZ0U7QUFDcEI7QUFDYztBQUNJO0FBRTlELE1BQU1PLE9BQU87O0lBQ1gsTUFBTUMsU0FBU0osMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDLE1BQU1TLGNBQWNSLGtEQUFXQSxDQUFDLE9BQU9TO1FBQ3JDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0sbURBQThELE9BQVhGO1lBQ2hGLE1BQU1HLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQyxJQUFJRCxLQUFLRSxPQUFPLEVBQUU7Z0JBQ2hCUCxZQUFZSyxLQUFLRyxNQUFNO1lBQ3pCO1FBQ0YsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1FBQzFDO0lBQ0YsR0FBRyxFQUFFO0lBRUxsQixnREFBU0EsQ0FBQztRQUNSLE1BQU1vQixlQUFlQyxLQUFLQyxLQUFLLENBQUNDLGFBQWFDLE9BQU8sQ0FBQztRQUNyRCxJQUFJLENBQUNKLGNBQWM7WUFDakJiLE9BQU9rQixJQUFJLENBQUM7UUFDZCxPQUFPO1lBQ0xmLFlBQVlVLGFBQWFNLEdBQUc7UUFDOUI7SUFDRixHQUFHO1FBQUNoQjtRQUFhSDtLQUFPO0lBRXhCLHFCQUNFLDhEQUFDb0I7OzBCQUNDLDhEQUFDdkIsaUVBQWNBOzs7OzswQkFDZiw4REFBQ3VCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBR0QsV0FBVTswQ0FBNEM7Ozs7Ozs0QkFDekRwQixTQUFTc0IsTUFBTSxHQUFHLGtCQUNqQiw4REFBQ0g7Z0NBQUlDLFdBQVU7MENBQ1pwQixTQUFTdUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNuQiw4REFBQ047d0NBQWdCQyxXQUFVOzswREFDekIsOERBQUNNO2dEQUFFTixXQUFVOztrRUFBZ0IsOERBQUNPO2tFQUFPOzs7Ozs7b0RBQWM7b0RBQUVILEtBQUtsQixJQUFJLENBQUNzQixJQUFJOzs7Ozs7OzBEQUNuRSw4REFBQ0Y7Z0RBQUVOLFdBQVU7O2tFQUFnQiw4REFBQ087a0VBQU87Ozs7OztvREFBZ0I7b0RBQUVILEtBQUtLLE1BQU07b0RBQUM7Ozs7Ozs7MERBQ25FLDhEQUFDSDtnREFBRU4sV0FBVTs7a0VBQWdCLDhEQUFDTztrRUFBTzs7Ozs7O29EQUFpQjtvREFBRUgsS0FBS2xCLElBQUksQ0FBQ3dCLE9BQU87Ozs7Ozs7MERBQ3pFLDhEQUFDSjtnREFBRU4sV0FBVTs7a0VBQWdCLDhEQUFDTztrRUFBTzs7Ozs7O29EQUFnQjtvREFBRUgsS0FBS08sTUFBTTs7Ozs7OzswREFDbEUsOERBQUNMO2dEQUFFTixXQUFVOztrRUFBZ0IsOERBQUNPO2tFQUFPOzs7Ozs7a0VBQXVCLDhEQUFDSzs7MEVBQzNELDhEQUFDQzswRUFBTzs7Ozs7OzBFQUNSLDhEQUFDQTswRUFBTzs7Ozs7OzBFQUNSLDhEQUFDQTswRUFBTzs7Ozs7OzBFQUNSLDhEQUFDQTs7Ozs7Ozs7Ozs7b0RBQ1E7Ozs7Ozs7O3VDQVZIUjs7Ozs7Ozs7OzBEQWVkLDhEQUFDQztnQ0FBRU4sV0FBVTswQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3JDLDhEQUFDdkIsbUVBQWdCQTs7Ozs7Ozs7Ozs7QUFHdkI7R0ExRE1DOztRQUNXSCxzREFBU0E7OztLQURwQkc7QUE0RE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kZWxpdmVyeURhc2hib2FyZC9wYWdlLmpzPzUwZDYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCBEZWxpdmVyeUhlYWRlciBmcm9tICcuLi9fY29tcG9uZW50L0RlbGl2ZXJ5SGVhZGVyJztcclxuaW1wb3J0IFJlc3RhdXJhbnRGb290ZXIgZnJvbSAnLi4vX2NvbXBvbmVudC9SZXN0YXVyYW50Rm9vdGVyJztcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW215T3JkZXJzLCBzZXRNeU9yZGVyc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGdldE15T3JkZXJzID0gdXNlQ2FsbGJhY2soYXN5bmMgKGRlbGl2ZXJ5SWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZGVsaXZlcnlwYXJ0bmVyL29yZGVyLyR7ZGVsaXZlcnlJZH1gKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgaWYgKGRhdGEuc3VjY2Vzcykge1xyXG4gICAgICAgIHNldE15T3JkZXJzKGRhdGEucmVzdWx0KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgb3JkZXJzOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkZWxpdmVyeURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkZWxpdmVyeScpKTtcclxuICAgIGlmICghZGVsaXZlcnlEYXRhKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvZGVsaXZlcnlwYXJ0bmVyJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnZXRNeU9yZGVycyhkZWxpdmVyeURhdGEuX2lkKTtcclxuICAgIH1cclxuICB9LCBbZ2V0TXlPcmRlcnMsIHJvdXRlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPERlbGl2ZXJ5SGVhZGVyIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93IHJvdW5kZWQtbGcgcC02XCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS04MDAgbWItNFwiPk15IE9yZGVycyBsaXN0PC9oMj5cclxuICAgICAgICAgICAge215T3JkZXJzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC02XCI+XHJcbiAgICAgICAgICAgICAgICB7bXlPcmRlcnMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLWdyYXktNTAgcC00IHJvdW5kZWQtbGcgc2hhZG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPjxzdHJvbmc+TmFtZTo8L3N0cm9uZz4ge2l0ZW0uZGF0YS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+PHN0cm9uZz5BbW91bnQ6PC9zdHJvbmc+IHtpdGVtLmFtb3VudH0gUnMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj48c3Ryb25nPkFkZHJlc3M6PC9zdHJvbmc+IHtpdGVtLmRhdGEuYWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPjxzdHJvbmc+U3RhdHVzOjwvc3Ryb25nPiB7aXRlbS5zdGF0dXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj48c3Ryb25nPlVwZGF0ZSBTdGF0dXM6PC9zdHJvbmc+PHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Q29uZmlybTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5PbiB0aGUgV2F5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkRlbGl2ZXJlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPllvdSBoYXZlIG5vIG9yZGVycyB5ZXQuPC9wPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UmVzdGF1cmFudEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VSb3V0ZXIiLCJEZWxpdmVyeUhlYWRlciIsIlJlc3RhdXJhbnRGb290ZXIiLCJQYWdlIiwicm91dGVyIiwibXlPcmRlcnMiLCJzZXRNeU9yZGVycyIsImdldE15T3JkZXJzIiwiZGVsaXZlcnlJZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJlcnJvciIsImNvbnNvbGUiLCJkZWxpdmVyeURhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsIl9pZCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwicCIsInN0cm9uZyIsIm5hbWUiLCJhbW91bnQiLCJhZGRyZXNzIiwic3RhdHVzIiwic2VsZWN0Iiwib3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/deliveryDashboard/page.js\n"));

/***/ })

});