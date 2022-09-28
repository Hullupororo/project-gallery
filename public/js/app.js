/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.jsx":
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/index.js\");\n/* harmony import */ var _auth_AuthPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/AuthPage */ \"./src/components/auth/AuthPage.jsx\");\n/* harmony import */ var _MainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainPage */ \"./src/components/MainPage.jsx\");\n/* harmony import */ var _MyNavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyNavBar */ \"./src/components/MyNavBar.jsx\");\n/* harmony import */ var _auth_RegistrationPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/RegistrationPage */ \"./src/components/auth/RegistrationPage.jsx\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nfunction App(_ref) {\n  var user = _ref.user;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(user || {}),\n      _useState2 = _slicedToArray(_useState, 2),\n      currUser = _useState2[0],\n      setCurrUser = _useState2[1];\n\n  var logOutHandler = function logOutHandler() {\n    fetch('/api/auth/logout').then(function () {\n      return setCurrUser({});\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MyNavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {\n    path: \"/\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {\n    path: \"/user/registration\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_auth_RegistrationPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      setCurrUser: setCurrUser\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {\n    path: \"/user/authorization\",\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_auth_AuthPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      setCurrUser: setCurrUser\n    })\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHAuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU1MsR0FBVCxPQUF1QjtFQUFBLElBQVJDLElBQVEsUUFBUkEsSUFBUTs7RUFDcEMsZ0JBQWdDVCwrQ0FBUSxDQUFDUyxJQUFJLElBQUksRUFBVCxDQUF4QztFQUFBO0VBQUEsSUFBT0MsUUFBUDtFQUFBLElBQWlCQyxXQUFqQjs7RUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07SUFDMUJDLEtBQUssQ0FBQyxrQkFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUTtNQUFBLE9BQU1ILFdBQVcsQ0FBQyxFQUFELENBQWpCO0lBQUEsQ0FEUjtFQUVELENBSEQ7O0VBSUEsb0JBQ0UsMkRBQUMsdURBQUQscUJBQ0UsMkRBQUMsaURBQUQsT0FERixlQUVFLDJEQUFDLG9EQUFELHFCQUNFLDJEQUFDLG1EQUFEO0lBQU8sSUFBSSxFQUFDLEdBQVo7SUFBZ0IsT0FBTyxlQUFFLDJEQUFDLGlEQUFEO0VBQXpCLEVBREYsZUFFRSwyREFBQyxtREFBRDtJQUFPLElBQUksRUFBQyxvQkFBWjtJQUFpQyxPQUFPLGVBQUUsMkRBQUMsOERBQUQ7TUFBa0IsV0FBVyxFQUFFQTtJQUEvQjtFQUExQyxFQUZGLGVBR0UsMkRBQUMsbURBQUQ7SUFBTyxJQUFJLEVBQUMscUJBQVo7SUFBa0MsT0FBTyxlQUFFLDJEQUFDLHNEQUFEO01BQVUsV0FBVyxFQUFFQTtJQUF2QjtFQUEzQyxFQUhGLENBRkYsQ0FERjtBQVVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHVja3lhamF4Ly4vc3JjL2NvbXBvbmVudHMvQXBwLmpzeD9jNThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBSb3V0ZSwgUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgQXV0aFBhZ2UgZnJvbSAnLi9hdXRoL0F1dGhQYWdlJztcbmltcG9ydCBNYWluUGFnZSBmcm9tICcuL01haW5QYWdlJztcbmltcG9ydCBNeU5hdkJhciBmcm9tICcuL015TmF2QmFyJztcbmltcG9ydCBSZWdpc3RyYXRpb25QYWdlIGZyb20gJy4vYXV0aC9SZWdpc3RyYXRpb25QYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgdXNlciB9KSB7XG4gIGNvbnN0IFtjdXJyVXNlciwgc2V0Q3VyclVzZXJdID0gdXNlU3RhdGUodXNlciB8fCB7fSk7XG5cbiAgY29uc3QgbG9nT3V0SGFuZGxlciA9ICgpID0+IHtcbiAgICBmZXRjaCgnL2FwaS9hdXRoL2xvZ291dCcpXG4gICAgICAudGhlbigoKSA9PiBzZXRDdXJyVXNlcih7fSkpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8TXlOYXZCYXIgLz5cbiAgICAgIDxSb3V0ZXM+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxNYWluUGFnZSAvPn0gLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvdXNlci9yZWdpc3RyYXRpb25cIiBlbGVtZW50PXs8UmVnaXN0cmF0aW9uUGFnZSBzZXRDdXJyVXNlcj17c2V0Q3VyclVzZXJ9IC8+fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cIi91c2VyL2F1dGhvcml6YXRpb25cIiBlbGVtZW50PXs8QXV0aFBhZ2Ugc2V0Q3VyclVzZXI9e3NldEN1cnJVc2VyfSAvPn0gLz5cbiAgICAgIDwvUm91dGVzPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkF1dGhQYWdlIiwiTWFpblBhZ2UiLCJNeU5hdkJhciIsIlJlZ2lzdHJhdGlvblBhZ2UiLCJBcHAiLCJ1c2VyIiwiY3VyclVzZXIiLCJzZXRDdXJyVXNlciIsImxvZ091dEhhbmRsZXIiLCJmZXRjaCIsInRoZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/App.jsx\n");

/***/ }),

/***/ "./src/components/MainPage.jsx":
/*!*************************************!*\
  !*** ./src/components/MainPage.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction MainPage() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"MainPage\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluUGFnZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFZSxTQUFTQyxRQUFULEdBQW9CO0VBQ2pDLG9CQUNFLG1GQURGO0FBR0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sdWNreWFqYXgvLi9zcmMvY29tcG9uZW50cy9NYWluUGFnZS5qc3g/NDQxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2Pk1haW5QYWdlPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNYWluUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MainPage.jsx\n");

/***/ }),

/***/ "./src/components/MyNavBar.jsx":
/*!*************************************!*\
  !*** ./src/components/MyNavBar.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/NavDropdown */ \"./node_modules/react-bootstrap/esm/NavDropdown.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\n\n\nfunction MyNavBar() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    bg: \"light\",\n    expand: \"lg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Brand, {\n    href: \"#home\"\n  }, \"React-Bootstrap\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Toggle, {\n    \"aria-controls\": \"basic-navbar-nav\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Collapse, {\n    id: \"basic-navbar-nav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: \"me-auto\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n    href: \"#home\"\n  }, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Link, {\n    href: \"#link\"\n  }, \"Link\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"Dropdown\",\n    id: \"basic-nav-dropdown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n    href: \"#action/3.1\"\n  }, \"Action\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n    href: \"#action/3.2\"\n  }, \"Another action\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n    href: \"#action/3.3\"\n  }, \"Something\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n    href: \"#action/3.4\"\n  }, \"Separated link\"))))));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyNavBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NeU5hdkJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0ssUUFBVCxHQUFvQjtFQUNsQixvQkFDRSwyREFBQyw4REFBRDtJQUFRLEVBQUUsRUFBQyxPQUFYO0lBQW1CLE1BQU0sRUFBQztFQUExQixnQkFDRSwyREFBQyxpRUFBRCxxQkFDRSwyREFBQyxvRUFBRDtJQUFjLElBQUksRUFBQztFQUFuQixxQkFERixlQUVFLDJEQUFDLHFFQUFEO0lBQWUsaUJBQWM7RUFBN0IsRUFGRixlQUdFLDJEQUFDLHVFQUFEO0lBQWlCLEVBQUUsRUFBQztFQUFwQixnQkFDRSwyREFBQywyREFBRDtJQUFLLFNBQVMsRUFBQztFQUFmLGdCQUNFLDJEQUFDLGdFQUFEO0lBQVUsSUFBSSxFQUFDO0VBQWYsVUFERixlQUVFLDJEQUFDLGdFQUFEO0lBQVUsSUFBSSxFQUFDO0VBQWYsVUFGRixlQUdFLDJEQUFDLG1FQUFEO0lBQWEsS0FBSyxFQUFDLFVBQW5CO0lBQThCLEVBQUUsRUFBQztFQUFqQyxnQkFDRSwyREFBQyx3RUFBRDtJQUFrQixJQUFJLEVBQUM7RUFBdkIsWUFERixlQUVFLDJEQUFDLHdFQUFEO0lBQWtCLElBQUksRUFBQztFQUF2QixvQkFGRixlQUtFLDJEQUFDLHdFQUFEO0lBQWtCLElBQUksRUFBQztFQUF2QixlQUxGLGVBTUUsMkRBQUMsMkVBQUQsT0FORixlQU9FLDJEQUFDLHdFQUFEO0lBQWtCLElBQUksRUFBQztFQUF2QixvQkFQRixDQUhGLENBREYsQ0FIRixDQURGLENBREY7QUF5QkQ7O0FBRUQsaUVBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sdWNreWFqYXgvLi9zcmMvY29tcG9uZW50cy9NeU5hdkJhci5qc3g/ZmRhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdkRyb3Bkb3duJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIE15TmF2QmFyKCkge1xuICByZXR1cm4gKFxuICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiIGV4cGFuZD1cImxnXCI+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIjaG9tZVwiPlJlYWN0LUJvb3RzdHJhcDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG4gICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJiYXNpYy1uYXZiYXItbmF2XCI+XG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNob21lXCI+SG9tZTwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNsaW5rXCI+TGluazwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9XCJEcm9wZG93blwiIGlkPVwiYmFzaWMtbmF2LWRyb3Bkb3duXCI+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMVwiPkFjdGlvbjwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy4yXCI+XG4gICAgICAgICAgICAgICAgQW5vdGhlciBhY3Rpb25cbiAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjNcIj5Tb21ldGhpbmc8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiPlxuICAgICAgICAgICAgICAgIFNlcGFyYXRlZCBsaW5rXG4gICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9OYXZiYXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15TmF2QmFyO1xuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIk5hdiIsIk5hdmJhciIsIk5hdkRyb3Bkb3duIiwiUmVhY3QiLCJNeU5hdkJhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/MyNavBar.jsx\n");

/***/ }),

/***/ "./src/components/auth/AuthPage.jsx":
/*!******************************************!*\
  !*** ./src/components/auth/AuthPage.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AuthPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction AuthPage(_ref) {\n  var setCurrUser = _ref.setCurrUser;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    email: '',\n    password: ''\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      input = _useState2[0],\n      setInput = _useState2[1];\n\n  var inputHandler = function inputHandler(e) {\n    setInput(function (prev) {\n      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, e.target.name, e.target.value));\n    });\n  };\n\n  var submitHandler = function submitHandler(e) {\n    e.preventDefault();\n    fetch('/api/auth/authorization', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(input)\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return setCurrUser(data);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onSubmit: submitHandler\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Group, {\n    className: \"mb-3\",\n    controlId: \"formBasicEmail\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Label, null, \"Email address\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Control, {\n    type: \"email\",\n    placeholder: \"Enter email\",\n    name: \"email\",\n    value: input.email,\n    onChange: inputHandler\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Group, {\n    className: \"mb-3\",\n    controlId: \"formBasicPassword\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Label, null, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Control, {\n    type: \"password\",\n    placeholder: \"Password\",\n    name: \"password\",\n    value: input.password,\n    onChange: inputHandler\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"primary\",\n    type: \"submit\"\n  }, \"Submit\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hdXRoL0F1dGhQYWdlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNJLFFBQVQsT0FBbUM7RUFBQSxJQUFmQyxXQUFlLFFBQWZBLFdBQWU7O0VBQ2hELGdCQUEwQkosK0NBQVEsQ0FBQztJQUNqQ0ssS0FBSyxFQUFFLEVBRDBCO0lBRWpDQyxRQUFRLEVBQUU7RUFGdUIsQ0FBRCxDQUFsQztFQUFBO0VBQUEsSUFBT0MsS0FBUDtFQUFBLElBQWNDLFFBQWQ7O0VBSUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0lBQzFCRixRQUFRLENBQUMsVUFBQ0csSUFBRDtNQUFBLHVDQUFnQkEsSUFBaEIsMkJBQXVCRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsSUFBaEMsRUFBdUNILENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxLQUFoRDtJQUFBLENBQUQsQ0FBUjtFQUNELENBRkQ7O0VBSUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDTCxDQUFELEVBQU87SUFDM0JBLENBQUMsQ0FBQ00sY0FBRjtJQUNBQyxLQUFLLENBQUMseUJBQUQsRUFBNEI7TUFDL0JDLE1BQU0sRUFBRSxNQUR1QjtNQUUvQkMsT0FBTyxFQUFFO1FBQ1AsZ0JBQWdCO01BRFQsQ0FGc0I7TUFLL0JDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVmLEtBQWY7SUFMeUIsQ0FBNUIsQ0FBTCxDQU9HZ0IsSUFQSCxDQU9RLFVBQUNDLEdBQUQ7TUFBQSxPQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtJQUFBLENBUFIsRUFRR0YsSUFSSCxDQVFRLFVBQUNHLElBQUQ7TUFBQSxPQUFVdEIsV0FBVyxDQUFDc0IsSUFBRCxDQUFyQjtJQUFBLENBUlI7RUFTRCxDQVhEOztFQWFBLG9CQUNFLDJEQUFDLDREQUFEO0lBQU0sUUFBUSxFQUFFWDtFQUFoQixnQkFDRSwyREFBQyxrRUFBRDtJQUFZLFNBQVMsRUFBQyxNQUF0QjtJQUE2QixTQUFTLEVBQUM7RUFBdkMsZ0JBQ0UsMkRBQUMsa0VBQUQsd0JBREYsZUFFRSwyREFBQyxvRUFBRDtJQUNFLElBQUksRUFBQyxPQURQO0lBRUUsV0FBVyxFQUFDLGFBRmQ7SUFHRSxJQUFJLEVBQUMsT0FIUDtJQUlFLEtBQUssRUFBRVIsS0FBSyxDQUFDRixLQUpmO0lBS0UsUUFBUSxFQUFFSTtFQUxaLEVBRkYsQ0FERixlQWFFLDJEQUFDLGtFQUFEO0lBQVksU0FBUyxFQUFDLE1BQXRCO0lBQTZCLFNBQVMsRUFBQztFQUF2QyxnQkFDRSwyREFBQyxrRUFBRCxtQkFERixlQUVFLDJEQUFDLG9FQUFEO0lBQ0UsSUFBSSxFQUFDLFVBRFA7SUFFRSxXQUFXLEVBQUMsVUFGZDtJQUdFLElBQUksRUFBQyxVQUhQO0lBSUUsS0FBSyxFQUFFRixLQUFLLENBQUNELFFBSmY7SUFLRSxRQUFRLEVBQUVHO0VBTFosRUFGRixDQWJGLGVBdUJFLDJEQUFDLDhEQUFEO0lBQVEsT0FBTyxFQUFDLFNBQWhCO0lBQTBCLElBQUksRUFBQztFQUEvQixZQXZCRixDQURGO0FBNkJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbHVja3lhamF4Ly4vc3JjL2NvbXBvbmVudHMvYXV0aC9BdXRoUGFnZS5qc3g/ZmZiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoUGFnZSh7IHNldEN1cnJVc2VyIH0pIHtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSh7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgfSk7XG4gIGNvbnN0IGlucHV0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgc2V0SW5wdXQoKHByZXYpID0+ICh7IC4uLnByZXYsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSkpO1xuICB9O1xuXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBmZXRjaCgnL2FwaS9hdXRoL2F1dGhvcml6YXRpb24nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbnB1dCksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0Q3VyclVzZXIoZGF0YSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY0VtYWlsXCI+XG4gICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsIGFkZHJlc3M8L0Zvcm0uTGFiZWw+XG4gICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgdmFsdWU9e2lucHV0LmVtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtpbnB1dEhhbmRsZXJ9XG4gICAgICAgIC8+XG5cbiAgICAgIDwvRm9ybS5Hcm91cD5cblxuICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XG4gICAgICAgIDxGb3JtLkxhYmVsPlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxuICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIHZhbHVlPXtpbnB1dC5wYXNzd29yZH1cbiAgICAgICAgICBvbkNoYW5nZT17aW5wdXRIYW5kbGVyfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0Zvcm0+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkZvcm0iLCJBdXRoUGFnZSIsInNldEN1cnJVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsImlucHV0Iiwic2V0SW5wdXQiLCJpbnB1dEhhbmRsZXIiLCJlIiwicHJldiIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/auth/AuthPage.jsx\n");

/***/ }),

/***/ "./src/components/auth/RegistrationPage.jsx":
/*!**************************************************!*\
  !*** ./src/components/auth/RegistrationPage.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RegistrationPage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction RegistrationPage(_ref) {\n  var setCurrUser = _ref.setCurrUser;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    name: '',\n    email: '',\n    password: ''\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      input = _useState2[0],\n      setInput = _useState2[1];\n\n  var inputHandler = function inputHandler(e) {\n    setInput(function (prev) {\n      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, e.target.name, e.target.value));\n    });\n  };\n\n  var submitHandler = function submitHandler(e) {\n    e.preventDefault();\n    fetch('/api/auth/registration', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(input)\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return setCurrUser(data);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onSubmit: submitHandler\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Group, {\n    className: \"mb-3\",\n    controlId: \"formBasicEmail\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Label, null, \"Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Control, {\n    type: \"text\",\n    name: \"name\",\n    value: input.name,\n    onChange: inputHandler,\n    placeholder: \"Enter name\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Group, {\n    className: \"mb-3\",\n    controlId: \"formBasicEmail\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Label, null, \"Email address\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Control, {\n    type: \"email\",\n    placeholder: \"Enter email\",\n    name: \"email\",\n    value: input.email,\n    onChange: inputHandler\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Group, {\n    className: \"mb-3\",\n    controlId: \"formBasicPassword\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Label, null, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Control, {\n    type: \"password\",\n    placeholder: \"Password\",\n    name: \"password\",\n    value: input.password,\n    onChange: inputHandler\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"primary\",\n    type: \"submit\"\n  }, \"Submit\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hdXRoL1JlZ2lzdHJhdGlvblBhZ2UuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0ksZ0JBQVQsT0FBMkM7RUFBQSxJQUFmQyxXQUFlLFFBQWZBLFdBQWU7O0VBQ3hELGdCQUEwQkosK0NBQVEsQ0FBQztJQUNqQ0ssSUFBSSxFQUFFLEVBRDJCO0lBRWpDQyxLQUFLLEVBQUUsRUFGMEI7SUFHakNDLFFBQVEsRUFBRTtFQUh1QixDQUFELENBQWxDO0VBQUE7RUFBQSxJQUFPQyxLQUFQO0VBQUEsSUFBY0MsUUFBZDs7RUFLQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87SUFDMUJGLFFBQVEsQ0FBQyxVQUFDRyxJQUFEO01BQUEsdUNBQWdCQSxJQUFoQiwyQkFBdUJELENBQUMsQ0FBQ0UsTUFBRixDQUFTUixJQUFoQyxFQUF1Q00sQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQWhEO0lBQUEsQ0FBRCxDQUFSO0VBQ0QsQ0FGRDs7RUFJQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNKLENBQUQsRUFBTztJQUMzQkEsQ0FBQyxDQUFDSyxjQUFGO0lBQ0FDLEtBQUssQ0FBQyx3QkFBRCxFQUEyQjtNQUM5QkMsTUFBTSxFQUFFLE1BRHNCO01BRTlCQyxPQUFPLEVBQUU7UUFDUCxnQkFBZ0I7TUFEVCxDQUZxQjtNQUs5QkMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWQsS0FBZjtJQUx3QixDQUEzQixDQUFMLENBT0dlLElBUEgsQ0FPUSxVQUFDQyxHQUFEO01BQUEsT0FBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7SUFBQSxDQVBSLEVBUUdGLElBUkgsQ0FRUSxVQUFDRyxJQUFEO01BQUEsT0FBVXRCLFdBQVcsQ0FBQ3NCLElBQUQsQ0FBckI7SUFBQSxDQVJSO0VBU0QsQ0FYRDs7RUFhQSxvQkFDRSwyREFBQyw0REFBRDtJQUFNLFFBQVEsRUFBRVg7RUFBaEIsZ0JBQ0UsMkRBQUMsa0VBQUQ7SUFBWSxTQUFTLEVBQUMsTUFBdEI7SUFBNkIsU0FBUyxFQUFDO0VBQXZDLGdCQUNFLDJEQUFDLGtFQUFELGVBREYsZUFFRSwyREFBQyxvRUFBRDtJQUNFLElBQUksRUFBQyxNQURQO0lBRUUsSUFBSSxFQUFDLE1BRlA7SUFHRSxLQUFLLEVBQUVQLEtBQUssQ0FBQ0gsSUFIZjtJQUlFLFFBQVEsRUFBRUssWUFKWjtJQUtFLFdBQVcsRUFBQztFQUxkLEVBRkYsQ0FERixlQVlFLDJEQUFDLGtFQUFEO0lBQVksU0FBUyxFQUFDLE1BQXRCO0lBQTZCLFNBQVMsRUFBQztFQUF2QyxnQkFDRSwyREFBQyxrRUFBRCx3QkFERixlQUVFLDJEQUFDLG9FQUFEO0lBQ0UsSUFBSSxFQUFDLE9BRFA7SUFFRSxXQUFXLEVBQUMsYUFGZDtJQUdFLElBQUksRUFBQyxPQUhQO0lBSUUsS0FBSyxFQUFFRixLQUFLLENBQUNGLEtBSmY7SUFLRSxRQUFRLEVBQUVJO0VBTFosRUFGRixDQVpGLGVBd0JFLDJEQUFDLGtFQUFEO0lBQVksU0FBUyxFQUFDLE1BQXRCO0lBQTZCLFNBQVMsRUFBQztFQUF2QyxnQkFDRSwyREFBQyxrRUFBRCxtQkFERixlQUVFLDJEQUFDLG9FQUFEO0lBQ0UsSUFBSSxFQUFDLFVBRFA7SUFFRSxXQUFXLEVBQUMsVUFGZDtJQUdFLElBQUksRUFBQyxVQUhQO0lBSUUsS0FBSyxFQUFFRixLQUFLLENBQUNELFFBSmY7SUFLRSxRQUFRLEVBQUVHO0VBTFosRUFGRixDQXhCRixlQWtDRSwyREFBQyw4REFBRDtJQUFRLE9BQU8sRUFBQyxTQUFoQjtJQUEwQixJQUFJLEVBQUM7RUFBL0IsWUFsQ0YsQ0FERjtBQXdDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2x1Y2t5YWpheC8uL3NyYy9jb21wb25lbnRzL2F1dGgvUmVnaXN0cmF0aW9uUGFnZS5qc3g/NTY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RyYXRpb25QYWdlKHsgc2V0Q3VyclVzZXIgfSkge1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICB9KTtcbiAgY29uc3QgaW5wdXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBzZXRJbnB1dCgocHJldikgPT4gKHsgLi4ucHJldiwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KSk7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZldGNoKCcvYXBpL2F1dGgvcmVnaXN0cmF0aW9uJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5wdXQpLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldEN1cnJVc2VyKGRhdGEpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQmFzaWNFbWFpbFwiPlxuICAgICAgICA8Rm9ybS5MYWJlbD5OYW1lPC9Gb3JtLkxhYmVsPlxuICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICB2YWx1ZT17aW5wdXQubmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17aW5wdXRIYW5kbGVyfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZVwiXG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm0uR3JvdXA+XG5cbiAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQmFzaWNFbWFpbFwiPlxuICAgICAgICA8Rm9ybS5MYWJlbD5FbWFpbCBhZGRyZXNzPC9Gb3JtLkxhYmVsPlxuICAgICAgICA8Rm9ybS5Db250cm9sXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIHZhbHVlPXtpbnB1dC5lbWFpbH1cbiAgICAgICAgICBvbkNoYW5nZT17aW5wdXRIYW5kbGVyfVxuICAgICAgICAvPlxuXG4gICAgICA8L0Zvcm0uR3JvdXA+XG5cbiAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxuICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cbiAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17aW5wdXQucGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e2lucHV0SGFuZGxlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgPC9CdXR0b24+XG4gICAgPC9Gb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJGb3JtIiwiUmVnaXN0cmF0aW9uUGFnZSIsInNldEN1cnJVc2VyIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJpbnB1dCIsInNldElucHV0IiwiaW5wdXRIYW5kbGVyIiwiZSIsInByZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/auth/RegistrationPage.jsx\n");

/***/ }),

/***/ "./src/components/index.jsx":
/*!**********************************!*\
  !*** ./src/components/index.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/components/App.jsx\");\n\n\n\n\nvar container = document.getElementById('root');\nreact_dom_client__WEBPACK_IMPORTED_MODULE_1__.hydrateRoot(container, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], window.initState)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFsQjtBQUVBTCx5REFBQSxDQUNFRyxTQURGLGVBRUUsMkRBQUMsMkRBQUQscUJBQ0UsMkRBQUMsNENBQUQsRUFBU0ksTUFBTSxDQUFDQyxTQUFoQixDQURGLENBRkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sdWNreWFqYXgvLi9zcmMvY29tcG9uZW50cy9pbmRleC5qc3g/NGUyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NQ2xpZW50IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cblJlYWN0RE9NQ2xpZW50Lmh5ZHJhdGVSb290KFxuICBjb250YWluZXIsXG4gIDxCcm93c2VyUm91dGVyPlxuICAgIDxBcHAgey4uLndpbmRvdy5pbml0U3RhdGV9IC8+XG4gIDwvQnJvd3NlclJvdXRlcj4sXG4pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET01DbGllbnQiLCJCcm93c2VyUm91dGVyIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImh5ZHJhdGVSb290Iiwid2luZG93IiwiaW5pdFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/index.jsx\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = this["webpackChunkluckyajax"] = this["webpackChunkluckyajax"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/components/index.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;