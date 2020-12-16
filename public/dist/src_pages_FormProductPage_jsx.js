/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkinventory"] = self["webpackChunkinventory"] || []).push([["src_pages_FormProductPage_jsx"],{

/***/ "./src/apps/containers/ProductContainer/FormContainer.jsx":
/*!****************************************************************!*\
  !*** ./src/apps/containers/ProductContainer/FormContainer.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ \"./node_modules/firebase/dist/index.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/select/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/form/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/message/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/input/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/button/index.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_commonHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/commonHelper */ \"./src/helpers/commonHelper.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ \"./src/apps/components/index.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ \"./src/apps/containers/ProductContainer/style.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nvar Option = antd__WEBPACK_IMPORTED_MODULE_7__.default.Option;\n\nvar FormContainer = function FormContainer(props) {\n  var productId = props.productId,\n      editData = props.editData,\n      loading = props.loading,\n      history = props.history;\n\n  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_8__.default.useForm(),\n      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),\n      form = _Form$useForm2[0];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      dataCategory = _useState2[0],\n      setDataCategory = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      loadingBtn = _useState4[0],\n      setLoadingBtn = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    firebase__WEBPACK_IMPORTED_MODULE_1__.default.database().ref('/categories').once('value').then(function (snapshot) {\n      setDataCategory(snapshot.val());\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (productId) {\n      form.setFieldsValue({\n        name: editData === null || editData === void 0 ? void 0 : editData.name,\n        description: editData === null || editData === void 0 ? void 0 : editData.description,\n        imageUrl: editData === null || editData === void 0 ? void 0 : editData.imageUrl,\n        categoryId: editData === null || editData === void 0 ? void 0 : editData.categoryId,\n        price: editData === null || editData === void 0 ? void 0 : editData.price,\n        createdAt: editData === null || editData === void 0 ? void 0 : editData.createdAt\n      });\n    }\n  }, [productId, editData]);\n\n  function submitData(_ref) {\n    var name = _ref.name,\n        description = _ref.description,\n        createdAt = _ref.createdAt,\n        categoryId = _ref.categoryId,\n        price = _ref.price,\n        imageUrl = _ref.imageUrl;\n    var id = productId || (0,_helpers_commonHelper__WEBPACK_IMPORTED_MODULE_4__.getGenerateId)();\n    var now = dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format('YYYY-MM-DD, HH:mm:ss');\n    var postData = {\n      createdAt: createdAt || now,\n      updatedAt: productId && now,\n      id: id,\n      name: name,\n      description: description,\n      categoryId: categoryId,\n      price: price,\n      imageUrl: imageUrl,\n      currency: 'Rp'\n    };\n    var updates = {};\n    updates[\"/products/\".concat(id)] = postData;\n    return firebase__WEBPACK_IMPORTED_MODULE_1__.default.database().ref().update(updates, function (error) {\n      if (error) {\n        antd__WEBPACK_IMPORTED_MODULE_9__.default.error('failed save product');\n      } else {\n        antd__WEBPACK_IMPORTED_MODULE_9__.default.success('success');\n        setTimeout(function () {\n          history.replace('/product-list');\n        }, 1000);\n      }\n    });\n  }\n\n  var onFinish = function onFinish(values) {\n    setLoadingBtn(true);\n    submitData(values);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_6__.FormWrapper, null, !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default, {\n    form: form,\n    layout: \"horizontal\",\n    onFinish: onFinish\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {\n    label: \"Category\",\n    name: \"categoryId\",\n    rules: [{\n      required: true,\n      message: 'Please select category product'\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_7__.default, null, Object.values(dataCategory).map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Option, {\n      key: item.id\n    }, item.name);\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {\n    label: \"Name\",\n    name: \"name\",\n    rules: [{\n      required: true,\n      message: 'Please input name product'\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_10__.default, {\n    size: \"large\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {\n    label: \"Price (currency in IDR)\",\n    name: \"price\",\n    rules: [{\n      required: true,\n      message: 'Please input price product'\n    }, function () {\n      return {\n        validator: function validator(rule, value) {\n          if (value && value.match(/^[0-9]+$/)) {\n            return Promise.resolve();\n          }\n\n          return Promise.reject('price should be number');\n        }\n      };\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_10__.default, {\n    size: \"large\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {\n    label: \"Image Url\",\n    name: \"imageUrl\",\n    rules: [{\n      required: true,\n      message: 'Please input image url product'\n    }, {\n      type: 'url',\n      message: 'input should url type'\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_10__.default, {\n    size: \"large\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {\n    name: \"description\",\n    label: \"Description\",\n    rules: [{\n      required: true,\n      message: 'Please input description product'\n    }]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_10__.default.TextArea, {\n    size: \"large\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, {\n    hidden: true,\n    name: \"createdAt\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_10__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_8__.default.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd__WEBPACK_IMPORTED_MODULE_11__.default, {\n    type: \"primary\",\n    htmlType: \"submit\",\n    size: \"large\",\n    block: true,\n    loading: loadingBtn\n  }, \"Save\"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_5__.Spinner.FixSpinner, null));\n};\n\nFormContainer.propTypes = {\n  productId: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,\n  editData: prop_types__WEBPACK_IMPORTED_MODULE_3__.object.isRequired,\n  loading: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool.isRequired,\n  history: prop_types__WEBPACK_IMPORTED_MODULE_3__.object.isRequired\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormContainer);\n\n//# sourceURL=webpack://inventory/./src/apps/containers/ProductContainer/FormContainer.jsx?");

/***/ }),

/***/ "./src/apps/containers/ProductContainer/style.js":
/*!*******************************************************!*\
  !*** ./src/apps/containers/ProductContainer/style.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Content\": () => /* binding */ Content,\n/* harmony export */   \"FormWrapper\": () => /* binding */ FormWrapper,\n/* harmony export */   \"DetailWrapper\": () => /* binding */ DetailWrapper\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  .ant-descriptions {\\n    padding: 12px 12px 100px 12px;\\n  }\\n  .ant-descriptions-item-content {\\n    background-color: #fafafa;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  padding: 12px 12px 90px 12px;\\n\\n  .ant-form-item-label {\\n    padding-bottom: 0;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  height: calc(100vh - 130px);\\n  overflow: auto;\\n\\n  .ant-list-item {\\n    padding-right: 10px;\\n    padding-left: 10px;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div(_templateObject());\nvar FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div(_templateObject2());\nvar DetailWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div(_templateObject3());\n\n//# sourceURL=webpack://inventory/./src/apps/containers/ProductContainer/style.js?");

/***/ }),

/***/ "./src/apps/layouts/MainLayout.jsx":
/*!*****************************************!*\
  !*** ./src/apps/layouts/MainLayout.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./src/apps/components/index.js\");\n/* harmony import */ var _config_contants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/contants */ \"./src/config/contants.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nvar MainLayout = function MainLayout(props) {\n  var children = props.children,\n      titleHeader = props.titleHeader;\n  var getAuth = localStorage.getItem(_config_contants__WEBPACK_IMPORTED_MODULE_3__.KEY_AUTH);\n\n  if (!getAuth) {\n    window.location.replace('/login');\n  }\n\n  if (getAuth) {\n    var auth = JSON.parse(getAuth);\n\n    if (!auth.isLoggedIn) {\n      window.location.replace('/login');\n    }\n  }\n\n  return getAuth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.PageHeader, _extends({}, props, {\n    titleHeader: titleHeader\n  })), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.FooterMenu, null));\n};\n\nMainLayout.defaultProps = {\n  titleHeader: '...'\n};\nMainLayout.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.element.isRequired,\n  titleHeader: prop_types__WEBPACK_IMPORTED_MODULE_1__.string\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainLayout);\n\n//# sourceURL=webpack://inventory/./src/apps/layouts/MainLayout.jsx?");

/***/ }),

/***/ "./src/config/contants.js":
/*!********************************!*\
  !*** ./src/config/contants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"KEY_AUTH\": () => /* binding */ KEY_AUTH\n/* harmony export */ });\nvar KEY_AUTH = 'hungree_id_auth';\n\n//# sourceURL=webpack://inventory/./src/config/contants.js?");

/***/ }),

/***/ "./src/helpers/commonHelper.js":
/*!*************************************!*\
  !*** ./src/helpers/commonHelper.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAuth\": () => /* binding */ getAuth,\n/* harmony export */   \"getGenerateId\": () => /* binding */ getGenerateId,\n/* harmony export */   \"getQueryId\": () => /* binding */ getQueryId\n/* harmony export */ });\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.dev.js\");\n/* harmony import */ var _config_contants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/contants */ \"./src/config/contants.js\");\n\n\n\nvar getAuth = function getAuth() {\n  var authData = localStorage.getItem(_config_contants__WEBPACK_IMPORTED_MODULE_1__.KEY_AUTH);\n  var auth = {};\n\n  if (authData) {\n    auth = JSON.parse(authData);\n  }\n\n  return auth;\n};\nvar getGenerateId = function getGenerateId() {\n  var nanoid = (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.customAlphabet)('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6);\n  return nanoid();\n};\nvar getQueryId = function getQueryId(location) {\n  var getId = '';\n\n  if (location.search) {\n    getId = qs__WEBPACK_IMPORTED_MODULE_0___default().parse(location.search.replace('?', '')).id;\n  }\n\n  return getId;\n};\n\n//# sourceURL=webpack://inventory/./src/helpers/commonHelper.js?");

/***/ }),

/***/ "./src/pages/FormProductPage.jsx":
/*!***************************************!*\
  !*** ./src/pages/FormProductPage.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ \"./node_modules/firebase/dist/index.esm.js\");\n/* harmony import */ var _apps_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apps/layouts/MainLayout */ \"./src/apps/layouts/MainLayout.jsx\");\n/* harmony import */ var _apps_containers_ProductContainer_FormContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apps/containers/ProductContainer/FormContainer */ \"./src/apps/containers/ProductContainer/FormContainer.jsx\");\n/* harmony import */ var _helpers_commonHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/commonHelper */ \"./src/helpers/commonHelper.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\nvar FormProductPage = function FormProductPage(props) {\n  var history = props.history,\n      location = props.location;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      _useState4 = _slicedToArray(_useState3, 2),\n      editData = _useState4[0],\n      setEditData = _useState4[1];\n\n  var getId = (0,_helpers_commonHelper__WEBPACK_IMPORTED_MODULE_6__.getQueryId)(location);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (getId) {\n      setLoading(true);\n      firebase__WEBPACK_IMPORTED_MODULE_3__.default.database().ref('/products').orderByChild('id').equalTo(getId).once('value').then(function (snapshot) {\n        setEditData(snapshot.val()[getId]);\n        setLoading(false);\n      });\n    }\n  }, [getId]);\n  var title = getId ? \"Edit \".concat(editData.name || '...') : 'Add Product';\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"title\", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"meta\", {\n    name: \"description\",\n    content: \"\".concat(title, \" - Hungree\")\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_apps_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__.default, {\n    history: history,\n    titleHeader: title\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_apps_containers_ProductContainer_FormContainer__WEBPACK_IMPORTED_MODULE_5__.default, {\n    productId: getId,\n    editData: editData,\n    loading: loading,\n    history: history\n  })));\n};\n\nFormProductPage.propTypes = {\n  history: prop_types__WEBPACK_IMPORTED_MODULE_2__.object.isRequired,\n  location: prop_types__WEBPACK_IMPORTED_MODULE_2__.object.isRequired\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.withRouter)(FormProductPage));\n\n//# sourceURL=webpack://inventory/./src/pages/FormProductPage.jsx?");

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

eval("!function(t,e){ true?module.exports=e():0}(this,function(){\"use strict\";var t=\"millisecond\",e=\"second\",n=\"minute\",r=\"hour\",i=\"day\",s=\"week\",u=\"month\",a=\"quarter\",o=\"year\",f=\"date\",h=/^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[^0-9]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?.?(\\d+)?$/,c=/\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:\"\"+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?\"+\":\"-\")+$(r,2,\"0\")+\":\"+$(i,2,\"0\")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||\"\").toLowerCase().replace(/s$/,\"\")},u:function(t){return void 0===t}},y=\"en\",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if(\"string\"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n=\"object\"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if(\"string\"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||\"0\").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!(\"Invalid Date\"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate(\"s\"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D=\"set\"+(this.$u?\"UTC\":\"\");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+\"Hours\",0);case r:return l(D+\"Minutes\",1);case n:return l(D+\"Seconds\",2);case e:return l(D+\"Milliseconds\",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d=\"set\"+(this.$u?\"UTC\":\"\"),$=(h={},h[i]=d+\"Date\",h[f]=d+\"Date\",h[u]=d+\"Month\",h[o]=d+\"FullYear\",h[r]=d+\"Hours\",h[n]=d+\"Minutes\",h[e]=d+\"Seconds\",h[t]=d+\"Milliseconds\",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return\"Invalid Date\";var n=t||\"YYYY-MM-DDTHH:mm:ssZ\",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,\"0\")},$=i.meridiem||function(t,e,n){var r=t<12?\"AM\":\"PM\";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,\"0\"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,\"0\"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,\"0\"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,\"0\"),s:String(this.$s),ss:g.s(this.$s,2,\"0\"),SSS:g.s(this.$ms,3,\"0\"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(\":\",\"\")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[[\"$ms\",t],[\"$s\",e],[\"$m\",n],[\"$H\",r],[\"$W\",i],[\"$M\",u],[\"$y\",o],[\"$D\",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});\n\n\n//# sourceURL=webpack://inventory/./node_modules/dayjs/dayjs.min.js?");

/***/ })

}]);