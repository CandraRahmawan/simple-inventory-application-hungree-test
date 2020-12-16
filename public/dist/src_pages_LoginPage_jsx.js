/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkinventory"] = self["webpackChunkinventory"] || []).push([["src_pages_LoginPage_jsx"],{

/***/ "./node_modules/@ant-design/icons-svg/es/asn/LockOutlined.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/es/asn/LockOutlined.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// This icon file is generated automatically.\nvar LockOutlined = { \"icon\": { \"tag\": \"svg\", \"attrs\": { \"viewBox\": \"64 64 896 896\", \"focusable\": \"false\" }, \"children\": [{ \"tag\": \"path\", \"attrs\": { \"d\": \"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z\" } }] }, \"name\": \"lock\", \"theme\": \"outlined\" };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LockOutlined);\n\n\n//# sourceURL=webpack://inventory/./node_modules/@ant-design/icons-svg/es/asn/LockOutlined.js?");

/***/ }),

/***/ "./node_modules/@ant-design/icons/es/icons/LockOutlined.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ant-design/icons/es/icons/LockOutlined.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ant_design_icons_svg_es_asn_LockOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons-svg/es/asn/LockOutlined */ \"./node_modules/@ant-design/icons-svg/es/asn/LockOutlined.js\");\n/* harmony import */ var _components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AntdIcon */ \"./node_modules/@ant-design/icons/es/components/AntdIcon.js\");\n// GENERATE BY ./scripts/generate.ts\n// DON NOT EDIT IT MANUALLY\n\n\n\n\nvar LockOutlined = function LockOutlined(props, ref) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AntdIcon__WEBPACK_IMPORTED_MODULE_1__.default, Object.assign({}, props, {\n    ref: ref,\n    icon: _ant_design_icons_svg_es_asn_LockOutlined__WEBPACK_IMPORTED_MODULE_2__.default\n  }));\n};\n\nLockOutlined.displayName = 'LockOutlined';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(LockOutlined));\n\n//# sourceURL=webpack://inventory/./node_modules/@ant-design/icons/es/icons/LockOutlined.js?");

/***/ }),

/***/ "./src/apps/containers/LoginContainer/index.jsx":
/*!******************************************************!*\
  !*** ./src/apps/containers/LoginContainer/index.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/form/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/message/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/input/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/button/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/icons/UserOutlined.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/icons/LockOutlined.js\");\n/* harmony import */ var _config_contants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/contants */ \"./src/config/contants.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./src/apps/containers/LoginContainer/style.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nvar LoginContainer = function LoginContainer() {\n  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_3__.default.useForm(),\n      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),\n      form = _Form$useForm2[0];\n\n  var onFinish = function onFinish(values) {\n    var username = values.username,\n        password = values.password;\n\n    if (username === 'admin' && password === 'admin') {\n      localStorage.setItem(_config_contants__WEBPACK_IMPORTED_MODULE_1__.KEY_AUTH, JSON.stringify({\n        username: 'admin',\n        name: 'Super Administrator',\n        isLoggedIn: true\n      }));\n      window.location.replace('/');\n    } else {\n      antd__WEBPACK_IMPORTED_MODULE_4__.default.error('username or password incorrect');\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_2__.Wrapper, {\n    height: window.innerHeight\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"logo-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"/public/images/hungree_logo.png\",\n    alt: \"hungree logo\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default, {\n    form: form,\n    layout: \"horizontal\",\n    onFinish: onFinish\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default.Item, {\n    name: \"username\",\n    rules: [{\n      required: true,\n      message: 'Please input your username!'\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, {\n    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.default, {\n      className: \"site-form-item-icon\"\n    }),\n    placeholder: \"Username\",\n    size: \"large\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default.Item, {\n    name: \"password\",\n    rules: [{\n      required: true,\n      message: 'Please input your password!'\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_5__.default, {\n    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.default, {\n      className: \"site-form-item-icon\"\n    }),\n    type: \"password\",\n    placeholder: \"Password\",\n    size: \"large\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_3__.default.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default, {\n    type: \"primary\",\n    htmlType: \"submit\",\n    size: \"large\",\n    block: true\n  }, \"Log in\"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginContainer);\n\n//# sourceURL=webpack://inventory/./src/apps/containers/LoginContainer/index.jsx?");

/***/ }),

/***/ "./src/apps/containers/LoginContainer/style.js":
/*!*****************************************************!*\
  !*** ./src/apps/containers/LoginContainer/style.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wrapper\": () => /* binding */ Wrapper\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  padding-top: calc(\", \"px / 4);\\n  form {\\n    max-width: 460px;\\n    margin: 0 auto;\\n    padding: 32px;\\n  }\\n  .logo-wrapper {\\n    text-align: center;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div(_templateObject(), function (props) {\n  return props.height;\n});\n\n//# sourceURL=webpack://inventory/./src/apps/containers/LoginContainer/style.js?");

/***/ }),

/***/ "./src/config/contants.js":
/*!********************************!*\
  !*** ./src/config/contants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KEY_AUTH\": () => /* binding */ KEY_AUTH\n/* harmony export */ });\nvar KEY_AUTH = 'hungree_id_auth';\n\n//# sourceURL=webpack://inventory/./src/config/contants.js?");

/***/ }),

/***/ "./src/pages/LoginPage.jsx":
/*!*********************************!*\
  !*** ./src/pages/LoginPage.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n/* harmony import */ var _apps_containers_LoginContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apps/containers/LoginContainer */ \"./src/apps/containers/LoginContainer/index.jsx\");\n/* harmony import */ var _config_contants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/contants */ \"./src/config/contants.js\");\n\n\n\n\n\nvar LoginPage = function LoginPage() {\n  var getAuth = localStorage.getItem(_config_contants__WEBPACK_IMPORTED_MODULE_3__.KEY_AUTH);\n\n  if (getAuth) {\n    var auth = JSON.parse(getAuth);\n\n    if (auth.isLoggedIn) {\n      window.location.replace('/');\n    }\n  }\n\n  return !getAuth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"title\", null, \"Login Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"meta\", {\n    name: \"description\",\n    content: \"Login Page - Hungree\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"background-primary\",\n    style: {\n      height: \"\".concat(window.innerHeight, \"px\")\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_apps_containers_LoginContainer__WEBPACK_IMPORTED_MODULE_2__.default, null)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\n\n//# sourceURL=webpack://inventory/./src/pages/LoginPage.jsx?");

/***/ })

}]);