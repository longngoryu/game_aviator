/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/color.js":
/*!*************************!*\
  !*** ./assets/color.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"colors\": () => (/* binding */ colors)\n/* harmony export */ });\nconst colors = {\n\tred: 0xf25346,\n\twhite: 0xd8d0d1,\n\tbrown: 0x59332e,\n\tpink: 0xF5986E,\n\tbrownDark: 0x23190f,\n\tblue: 0x68c3c0,\n};\n\n\n\n//# sourceURL=webpack://gameaviator/./assets/color.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./template/style.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./template/style.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n\\tmargin: 0;\\n\\tbox-sizing: border-box;\\n}\\n\\n#world {\\n\\tposition: absolute;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\toverflow: hidden;\\n\\tbackground: linear-gradient(#e4e0ba, #f7d9aa);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gameaviator/./template/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://gameaviator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://gameaviator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./template/style.css":
/*!****************************!*\
  !*** ./template/style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./template/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://gameaviator/./template/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://gameaviator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://gameaviator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://gameaviator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://gameaviator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://gameaviator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://gameaviator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../template/style.css */ \"./template/style.css\");\n/* harmony import */ var _world_World_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./world/World.js */ \"./src/world/World.js\");\n\n\n\nfunction main() {\n  const container = document.querySelector('#world');\n  const world = new _world_World_js__WEBPACK_IMPORTED_MODULE_1__.World(container);\n  world.start();\n}\n\nmain();\n\n\n\n\n//# sourceURL=webpack://gameaviator/./src/main.js?");

/***/ }),

/***/ "./src/world/World.js":
/*!****************************!*\
  !*** ./src/world/World.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"World\": () => (/* binding */ World)\n/* harmony export */ });\n/* harmony import */ var _components_camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/camera.js */ \"./src/world/components/camera.js\");\n/* harmony import */ var _components_lights_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/lights.js */ \"./src/world/components/lights.js\");\n/* harmony import */ var _components_scene_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/scene.js */ \"./src/world/components/scene.js\");\n/* harmony import */ var _systems_renderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./systems/renderer.js */ \"./src/world/systems/renderer.js\");\n/* harmony import */ var _systems_Resizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./systems/Resizer.js */ \"./src/world/systems/Resizer.js\");\n/* harmony import */ var _systems_Loop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./systems/Loop.js */ \"./src/world/systems/Loop.js\");\n/* harmony import */ var _systems_controls_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./systems/controls.js */ \"./src/world/systems/controls.js\");\n/* harmony import */ var _components_sea_Sea_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sea/Sea.js */ \"./src/world/components/sea/Sea.js\");\n/* harmony import */ var _components_sky_Sky_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sky/Sky.js */ \"./src/world/components/sky/Sky.js\");\n/* harmony import */ var _components_airplane_AirPlane_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/airplane/AirPlane.js */ \"./src/world/components/airplane/AirPlane.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nlet camera,\n  renderer,\n  scene, \n  loop, \n  controls,\n  sea,\n  sky,\n  airPlane;\n\nlet mousePos = { x:0, y:0 };\n\nfunction handleMouseMove(event) {\t\n\tvar tx = -1 + (event.clientX / window.innerWidth)*2;\n\tvar ty = 1 - (event.clientY / window.innerHeight)*2;\n\tmousePos = {x:tx, y:ty};\n}\n\nclass World {\n  constructor(container) {\n    camera = (0,_components_camera_js__WEBPACK_IMPORTED_MODULE_0__.createCamera)();\n    renderer = (0,_systems_renderer_js__WEBPACK_IMPORTED_MODULE_3__.createRenderer)();\n    scene = (0,_components_scene_js__WEBPACK_IMPORTED_MODULE_2__.createScene)();\n    loop = new _systems_Loop_js__WEBPACK_IMPORTED_MODULE_5__.Loop(camera, scene, renderer);\n    controls = (0,_systems_controls_js__WEBPACK_IMPORTED_MODULE_6__.createControls)(camera, renderer.domElement);\n    container.append(renderer.domElement);\n\n    sea = new _components_sea_Sea_js__WEBPACK_IMPORTED_MODULE_7__.Sea();\n    sky = new _components_sky_Sky_js__WEBPACK_IMPORTED_MODULE_8__.Sky();\n    airPlane = new _components_airplane_AirPlane_js__WEBPACK_IMPORTED_MODULE_9__.AirPlane();\n\n    airPlane.position.y = 100;\n    airPlane.scale.set(.25, .25, .25);\n\n    const { hemisphereLight, directionalLight } = (0,_components_lights_js__WEBPACK_IMPORTED_MODULE_1__.createLights)();\n\n    loop.updatables.push(controls, sea, sky, airPlane);\n\n    scene.add(hemisphereLight, directionalLight, sea, sky, airPlane);\n\n    document.addEventListener('mousemove', handleMouseMove, false);\n\n    const resizer = new _systems_Resizer_js__WEBPACK_IMPORTED_MODULE_4__.Resizer(container, camera, renderer);\n  }\n\n  start() {\n    loop.start();\n  }\n\n  stop() {\n    loop.stop();\n  }\n}\n\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/World.js?");

/***/ }),

/***/ "./src/world/components/airplane/AirPlane.js":
/*!***************************************************!*\
  !*** ./src/world/components/airplane/AirPlane.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AirPlane\": () => (/* binding */ AirPlane)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _meshes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meshes */ \"./src/world/components/airplane/meshes.js\");\n\n\n\nclass AirPlane extends three__WEBPACK_IMPORTED_MODULE_1__.Group {\n    constructor() {\n        super();\n        this.meshes = (0,_meshes__WEBPACK_IMPORTED_MODULE_0__.createMeshes)();\n        this.add(\n            this.meshes.cockpit,\n            this.meshes.engine,\n            this.meshes.propeller,\n            this.meshes.sideWing,\n            this.meshes.tailPlane\n        );\n    }\n\n    tick(delta) {\n        this.meshes.propeller.rotation.x += 0.3;\n    }\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/airplane/AirPlane.js?");

/***/ }),

/***/ "./src/world/components/airplane/geometries.js":
/*!*****************************************************!*\
  !*** ./src/world/components/airplane/geometries.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGeometries\": () => (/* binding */ createGeometries)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nfunction createGeometries() {\n    var cockpit = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(60,50,50,1,1,1);\n    var engine = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(20,50,50,1,1,1);\n    var tailPlane = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(15,20,5,1,1,1);\n    var sideWing = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(40,8,150,1,1,1);\n    var propeller = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(20,10,10,1,1,1);\n    var blade = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1,100,20,1,1,1);\n\n    return { \n        cockpit, \n        engine, \n        tailPlane,\n        sideWing,\n        propeller,\n        blade\n    };\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/airplane/geometries.js?");

/***/ }),

/***/ "./src/world/components/airplane/materials.js":
/*!****************************************************!*\
  !*** ./src/world/components/airplane/materials.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMaterials\": () => (/* binding */ createMaterials)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/color */ \"./assets/color.js\");\n\n\n\nfunction createMaterials() {\n    const cockpit = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({\n        color: _assets_color__WEBPACK_IMPORTED_MODULE_0__.colors.red,\n        flatShading: true\n    });\n\n    const engine = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({\n        color: _assets_color__WEBPACK_IMPORTED_MODULE_0__.colors.white,\n        flatShading: true\n    });\n\n    const propeller = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({\n        color: _assets_color__WEBPACK_IMPORTED_MODULE_0__.colors.brown,\n        flatShading: true\n    });\n\n    const blade = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({\n        color: _assets_color__WEBPACK_IMPORTED_MODULE_0__.colors.brownDark,\n        flatShading: true\n    });\n\n\n    return { cockpit, engine, propeller, blade };\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/airplane/materials.js?");

/***/ }),

/***/ "./src/world/components/airplane/meshes.js":
/*!*************************************************!*\
  !*** ./src/world/components/airplane/meshes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMeshes\": () => (/* binding */ createMeshes)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _geometries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometries */ \"./src/world/components/airplane/geometries.js\");\n/* harmony import */ var _materials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materials */ \"./src/world/components/airplane/materials.js\");\n\n\n\n\nfunction createMeshes() {\n    const geometries = (0,_geometries__WEBPACK_IMPORTED_MODULE_0__.createGeometries)();\n    const materials = (0,_materials__WEBPACK_IMPORTED_MODULE_1__.createMaterials)();\n    // const airPlane = new Object3D();\n\n    const cockpit = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometries.cockpit, materials.cockpit);\n    cockpit.castShadow = true;\n    cockpit.receiveShadow = true;\n\n    const engine = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometries.engine, materials.engine);\n    engine.castShadow = true;\n    engine.receiveShadow = true;\n    engine.position.x = 40;\n    engine.castShadow = true;\n    engine.receiveShadow = true;\n\n    const tailPlane = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometries.tailPlane, materials.cockpit);\n    tailPlane.position.set(-35, 25, 0);\n    tailPlane.castShadow = true;\n    tailPlane.receiveShadow = true;\n\n    const sideWing = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometries.sideWing, materials.cockpit);\n    sideWing.castShadow = true;\n    sideWing.receiveShadow = true;\n\n    const blade = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometries.blade, materials.blade);\n    blade.position.set(8, 0, 0);\n    blade.castShadow = true;\n    blade.receiveShadow = true;\n\n    const propeller = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometries.propeller, materials.propeller);\n    propeller.position.set(50, 0, 0);\n    propeller.castShadow = true;\n    propeller.receiveShadow = true;\n    propeller.add(blade);\n\n    return { cockpit, engine, tailPlane, sideWing, propeller }\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/airplane/meshes.js?");

/***/ }),

/***/ "./src/world/components/camera.js":
/*!****************************************!*\
  !*** ./src/world/components/camera.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCamera\": () => (/* binding */ createCamera)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nlet fieldOfView = 60,\naspectRatio = window.innerWidth / window.innerHeight,\nnearPlane = 1,\nfarPlane = 10000;\n\nfunction createCamera() {\n  const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(\n    fieldOfView,\n\t\taspectRatio,\n\t\tnearPlane,\n\t\tfarPlane\n  );\n\n  camera.position.set(0, 100, 200);\n\n  return camera;\n}\n\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/camera.js?");

/***/ }),

/***/ "./src/world/components/cloud/Cloud.js":
/*!*********************************************!*\
  !*** ./src/world/components/cloud/Cloud.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cloud\": () => (/* binding */ Cloud)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _meshes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meshes */ \"./src/world/components/cloud/meshes.js\");\n\n\n\nclass Cloud extends three__WEBPACK_IMPORTED_MODULE_1__.Group {\n    constructor() {\n        super();\n        this.meshes = (0,_meshes__WEBPACK_IMPORTED_MODULE_0__.createMeshes)();\n        this.add(this.meshes);\n    }\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/cloud/Cloud.js?");

/***/ }),

/***/ "./src/world/components/cloud/geometries.js":
/*!**************************************************!*\
  !*** ./src/world/components/cloud/geometries.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGeometries\": () => (/* binding */ createGeometries)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nfunction createGeometries() {\n    const geom = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(20, 20, 20);\n    \n    return { geom };\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/cloud/geometries.js?");

/***/ }),

/***/ "./src/world/components/cloud/materials.js":
/*!*************************************************!*\
  !*** ./src/world/components/cloud/materials.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMaterials\": () => (/* binding */ createMaterials)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/color */ \"./assets/color.js\");\n\n\n\nfunction createMaterials() {\n    const mat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({\n        color: _assets_color__WEBPACK_IMPORTED_MODULE_0__.colors.white,\n    });\n\n    return { mat };\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/cloud/materials.js?");

/***/ }),

/***/ "./src/world/components/cloud/meshes.js":
/*!**********************************************!*\
  !*** ./src/world/components/cloud/meshes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMeshes\": () => (/* binding */ createMeshes)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _geometries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometries */ \"./src/world/components/cloud/geometries.js\");\n/* harmony import */ var _materials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materials */ \"./src/world/components/cloud/materials.js\");\n\n\n\n\nfunction createMeshes() {\n    const geometries = (0,_geometries__WEBPACK_IMPORTED_MODULE_0__.createGeometries)();\n    const materials = (0,_materials__WEBPACK_IMPORTED_MODULE_1__.createMaterials)();\n\n    let nBlocs = Math.floor(Math.random() * 3) + 3;\n\n    const seas = new three__WEBPACK_IMPORTED_MODULE_2__.Object3D();\n\n    for (let i = 0; i < nBlocs; i++) {\n        const sea = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometries.geom, materials.mat);\n        sea.position.x = i * 15;\n        sea.position.y = Math.random() * 10;\n        sea.position.z = Math.random() * 10;\n\n        sea.rotation.z = Math.random() * Math.PI * 2;\n        sea.rotation.y = Math.random() * Math.PI * 2;\n\n        const sizeRandom = .1 + Math.random() * .9;\n        sea.scale.set(sizeRandom, sizeRandom, sizeRandom);\n\n        sea.castShadow = true;\n        sea.receiveShadow = true;\n        seas.add(sea);\n    }\n\n    return seas\n    \n\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/cloud/meshes.js?");

/***/ }),

/***/ "./src/world/components/lights.js":
/*!****************************************!*\
  !*** ./src/world/components/lights.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createLights\": () => (/* binding */ createLights)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nfunction createLights() {\n  const hemisphereLight = new three__WEBPACK_IMPORTED_MODULE_0__.HemisphereLight(\n    0xaaaaaa,\n    0x000000,\n    .9,\n  );\n\n  const directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff, .9);\n  directionalLight.position.set(150, 350, 350);\n\n  directionalLight.castShadow = true;\n  directionalLight.shadow.camera.left = -400;\n  directionalLight.shadow.camera.right = 400;\n  directionalLight.shadow.camera.top = 400;\n  directionalLight.shadow.camera.bottom = -400;\n  directionalLight.shadow.camera.near = 1;\n  directionalLight.shadow.camera.far = 1000;\n\n  directionalLight.shadow.mapSize.width = 2048;\n  directionalLight.shadow.mapSize.height = 2048;\n\n  return { hemisphereLight, directionalLight };\n}\n\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/lights.js?");

/***/ }),

/***/ "./src/world/components/scene.js":
/*!***************************************!*\
  !*** ./src/world/components/scene.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createScene\": () => (/* binding */ createScene)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nfunction createScene() {\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    scene. fog = new three__WEBPACK_IMPORTED_MODULE_0__.Fog(0xf7d9aa, 100, 950);\n    return scene;\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/scene.js?");

/***/ }),

/***/ "./src/world/components/sea/Sea.js":
/*!*****************************************!*\
  !*** ./src/world/components/sea/Sea.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sea\": () => (/* binding */ Sea)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _meshes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meshes */ \"./src/world/components/sea/meshes.js\");\n\n\n\nclass Sea extends three__WEBPACK_IMPORTED_MODULE_1__.Group {\n    constructor() {\n        super();\n        this.meshes = (0,_meshes__WEBPACK_IMPORTED_MODULE_0__.createMeshes)();\n        this.add(this.meshes.sea);\n    }\n\n    tick(delta) {\n        this.meshes.sea.rotation.z += .005;\n    }\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/sea/Sea.js?");

/***/ }),

/***/ "./src/world/components/sea/geometries.js":
/*!************************************************!*\
  !*** ./src/world/components/sea/geometries.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGeometries\": () => (/* binding */ createGeometries)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nfunction createGeometries() {\n    const geom = new three__WEBPACK_IMPORTED_MODULE_0__.CylinderGeometry(600, 600, 800, 40, 10);\n    geom.applyMatrix4(new three__WEBPACK_IMPORTED_MODULE_0__.Matrix4().makeRotationX(-Math.PI / 2));\n    \n    return { geom };\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/sea/geometries.js?");

/***/ }),

/***/ "./src/world/components/sea/materials.js":
/*!***********************************************!*\
  !*** ./src/world/components/sea/materials.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMaterials\": () => (/* binding */ createMaterials)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/color */ \"./assets/color.js\");\n\n\n\nfunction createMaterials() {\n    const mat = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({\n        color: _assets_color__WEBPACK_IMPORTED_MODULE_0__.colors.blue,\n        transparent: true,\n        opacity: .6,\n        flatShading: true\n    });\n\n    return { mat };\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/sea/materials.js?");

/***/ }),

/***/ "./src/world/components/sea/meshes.js":
/*!********************************************!*\
  !*** ./src/world/components/sea/meshes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMeshes\": () => (/* binding */ createMeshes)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _geometries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometries */ \"./src/world/components/sea/geometries.js\");\n/* harmony import */ var _materials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./materials */ \"./src/world/components/sea/materials.js\");\n\n\n\n\nfunction createMeshes() {\n    const geometries = (0,_geometries__WEBPACK_IMPORTED_MODULE_0__.createGeometries)();\n    const materials = (0,_materials__WEBPACK_IMPORTED_MODULE_1__.createMaterials)();\n\n    const sea = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometries.geom, materials.mat);\n    sea.position.y = -600;\n\n    return { sea };\n    \n\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/sea/meshes.js?");

/***/ }),

/***/ "./src/world/components/sky/Sky.js":
/*!*****************************************!*\
  !*** ./src/world/components/sky/Sky.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sky\": () => (/* binding */ Sky)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _meshes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meshes */ \"./src/world/components/sky/meshes.js\");\n\n\n\nclass Sky extends three__WEBPACK_IMPORTED_MODULE_1__.Group {\n    constructor() {\n        super();\n        this.meshes = (0,_meshes__WEBPACK_IMPORTED_MODULE_0__.createMeshes)();\n        this.add(this.meshes.sky);\n    }\n\n    tick(delta) {\n        this.meshes.sky.rotation.z += .01;\n    }\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/sky/Sky.js?");

/***/ }),

/***/ "./src/world/components/sky/meshes.js":
/*!********************************************!*\
  !*** ./src/world/components/sky/meshes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMeshes\": () => (/* binding */ createMeshes)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _cloud_Cloud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cloud/Cloud */ \"./src/world/components/cloud/Cloud.js\");\n\n\n\n\nfunction createMeshes() {\n    const sky = new three__WEBPACK_IMPORTED_MODULE_1__.Object3D();\n    const nClouds = 20;\n    const stepAngle = Math.PI * 2 / nClouds;\n\n    const cloud = new _cloud_Cloud__WEBPACK_IMPORTED_MODULE_0__.Cloud();\n\n    for (let i = 0; i < nClouds; i++) {\n        const c = cloud.clone();\n        const a = stepAngle * i;\n        const h = 750 + Math.random() * 200;\n\n        c.meshes.position.y = Math.sin(a) * h;\n        c.meshes.position.x = Math.cos(a) * h;\n\n        c.meshes.rotation.z = a + Math.PI / 2;\n        c.position.z = -400 - Math.random() * 400;\n\n        const s = Math.random() * 2 + 1;\n        c.meshes.scale.set(s, s, s);\n\n        sky.add(c.meshes);\n    }\n\n    sky.position.y = -600;\n    return { sky }\n    \n\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/components/sky/meshes.js?");

/***/ }),

/***/ "./src/world/systems/Loop.js":
/*!***********************************!*\
  !*** ./src/world/systems/Loop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Loop\": () => (/* binding */ Loop)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nconst clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();\n\nclass Loop {\n  constructor(camera, scene, renderer) {\n    this.camera = camera;\n    this.scene = scene;\n    this.renderer = renderer;\n    this.updatables = [];\n  }\n\n  start() {\n    this.renderer.setAnimationLoop(() => {\n      this.tick();\n      this.renderer.render(this.scene, this.camera);\n    });\n  }\n\n  stop() {\n    this.renderer.setAnimationLoop(null);\n  }\n\n  tick() {\n    const delta = clock.getDelta();\n    for (const object of this.updatables) {\n      object.tick(delta);\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/systems/Loop.js?");

/***/ }),

/***/ "./src/world/systems/Resizer.js":
/*!**************************************!*\
  !*** ./src/world/systems/Resizer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Resizer\": () => (/* binding */ Resizer)\n/* harmony export */ });\nconst setSize = (container, camera, renderer) => {\n  camera.aspect = container.clientWidth / container.clientHeight;\n  camera.updateProjectionMatrix();\n\n  renderer.setSize(container.clientWidth, container.clientHeight);\n  renderer.setPixelRatio(window.devicePixelRatio);\n};\n\nclass Resizer {\n  constructor(container, camera, renderer) {\n    setSize(container, camera, renderer);\n\n    window.addEventListener('resize', () => {\n      setSize(container, camera, renderer);\n      this.onResize();\n    });\n  }\n\n  onResize() {}\n}\n\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/systems/Resizer.js?");

/***/ }),

/***/ "./src/world/systems/controls.js":
/*!***************************************!*\
  !*** ./src/world/systems/controls.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createControls\": () => (/* binding */ createControls)\n/* harmony export */ });\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n\n\nfunction createControls(camera, canvas) {\n  const controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, canvas);\n\n  controls.enableDamping = true;\n\n  // forward controls.update to our custom .tick method\n  controls.tick = () => controls.update();\n\n  return controls;\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/systems/controls.js?");

/***/ }),

/***/ "./src/world/systems/renderer.js":
/*!***************************************!*\
  !*** ./src/world/systems/renderer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createRenderer\": () => (/* binding */ createRenderer)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nfunction createRenderer() {\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({alpha: true, antialias: true});\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setPixelRatio(window.devicePixelRatio);\n    renderer.shadowMap.enabled = true;\n\n    return renderer;\n}\n\n\n\n//# sourceURL=webpack://gameaviator/./src/world/systems/renderer.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./node_modules/three/examples/jsm/controls/OrbitControls.js":
/*!*******************************************************************!*\
  !*** ./node_modules/three/examples/jsm/controls/OrbitControls.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"OrbitControls\": () => (/* binding */ OrbitControls)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n// OrbitControls performs orbiting, dollying (zooming), and panning.\n// Unlike TrackballControls, it maintains the \"up\" direction object.up (+Y by default).\n//\n//    Orbit - left mouse / touch: one-finger move\n//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish\n//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move\n\nconst _changeEvent = { type: 'change' };\nconst _startEvent = { type: 'start' };\nconst _endEvent = { type: 'end' };\n\nclass OrbitControls extends three__WEBPACK_IMPORTED_MODULE_0__.EventDispatcher {\n\n\tconstructor( object, domElement ) {\n\n\t\tsuper();\n\n\t\tthis.object = object;\n\t\tthis.domElement = domElement;\n\t\tthis.domElement.style.touchAction = 'none'; // disable touch scroll\n\n\t\t// Set to false to disable this control\n\t\tthis.enabled = true;\n\n\t\t// \"target\" sets the location of focus, where the object orbits around\n\t\tthis.target = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\n\t\t// How far you can dolly in and out ( PerspectiveCamera only )\n\t\tthis.minDistance = 0;\n\t\tthis.maxDistance = Infinity;\n\n\t\t// How far you can zoom in and out ( OrthographicCamera only )\n\t\tthis.minZoom = 0;\n\t\tthis.maxZoom = Infinity;\n\n\t\t// How far you can orbit vertically, upper and lower limits.\n\t\t// Range is 0 to Math.PI radians.\n\t\tthis.minPolarAngle = 0; // radians\n\t\tthis.maxPolarAngle = Math.PI; // radians\n\n\t\t// How far you can orbit horizontally, upper and lower limits.\n\t\t// If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )\n\t\tthis.minAzimuthAngle = - Infinity; // radians\n\t\tthis.maxAzimuthAngle = Infinity; // radians\n\n\t\t// Set to true to enable damping (inertia)\n\t\t// If damping is enabled, you must call controls.update() in your animation loop\n\t\tthis.enableDamping = false;\n\t\tthis.dampingFactor = 0.05;\n\n\t\t// This option actually enables dollying in and out; left as \"zoom\" for backwards compatibility.\n\t\t// Set to false to disable zooming\n\t\tthis.enableZoom = true;\n\t\tthis.zoomSpeed = 1.0;\n\n\t\t// Set to false to disable rotating\n\t\tthis.enableRotate = true;\n\t\tthis.rotateSpeed = 1.0;\n\n\t\t// Set to false to disable panning\n\t\tthis.enablePan = true;\n\t\tthis.panSpeed = 1.0;\n\t\tthis.screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up\n\t\tthis.keyPanSpeed = 7.0;\t// pixels moved per arrow key push\n\n\t\t// Set to true to automatically rotate around the target\n\t\t// If auto-rotate is enabled, you must call controls.update() in your animation loop\n\t\tthis.autoRotate = false;\n\t\tthis.autoRotateSpeed = 2.0; // 30 seconds per orbit when fps is 60\n\n\t\t// The four arrow keys\n\t\tthis.keys = { LEFT: 'ArrowLeft', UP: 'ArrowUp', RIGHT: 'ArrowRight', BOTTOM: 'ArrowDown' };\n\n\t\t// Mouse buttons\n\t\tthis.mouseButtons = { LEFT: three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.ROTATE, MIDDLE: three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.DOLLY, RIGHT: three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.PAN };\n\n\t\t// Touch fingers\n\t\tthis.touches = { ONE: three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.ROTATE, TWO: three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.DOLLY_PAN };\n\n\t\t// for reset\n\t\tthis.target0 = this.target.clone();\n\t\tthis.position0 = this.object.position.clone();\n\t\tthis.zoom0 = this.object.zoom;\n\n\t\t// the target DOM element for key events\n\t\tthis._domElementKeyEvents = null;\n\n\t\t//\n\t\t// public methods\n\t\t//\n\n\t\tthis.getPolarAngle = function () {\n\n\t\t\treturn spherical.phi;\n\n\t\t};\n\n\t\tthis.getAzimuthalAngle = function () {\n\n\t\t\treturn spherical.theta;\n\n\t\t};\n\n\t\tthis.getDistance = function () {\n\n\t\t\treturn this.object.position.distanceTo( this.target );\n\n\t\t};\n\n\t\tthis.listenToKeyEvents = function ( domElement ) {\n\n\t\t\tdomElement.addEventListener( 'keydown', onKeyDown );\n\t\t\tthis._domElementKeyEvents = domElement;\n\n\t\t};\n\n\t\tthis.stopListenToKeyEvents = function () {\n\n\t\t\tthis._domElementKeyEvents.removeEventListener( 'keydown', onKeyDown );\n\t\t\tthis._domElementKeyEvents = null;\n\n\t\t};\n\n\t\tthis.saveState = function () {\n\n\t\t\tscope.target0.copy( scope.target );\n\t\t\tscope.position0.copy( scope.object.position );\n\t\t\tscope.zoom0 = scope.object.zoom;\n\n\t\t};\n\n\t\tthis.reset = function () {\n\n\t\t\tscope.target.copy( scope.target0 );\n\t\t\tscope.object.position.copy( scope.position0 );\n\t\t\tscope.object.zoom = scope.zoom0;\n\n\t\t\tscope.object.updateProjectionMatrix();\n\t\t\tscope.dispatchEvent( _changeEvent );\n\n\t\t\tscope.update();\n\n\t\t\tstate = STATE.NONE;\n\n\t\t};\n\n\t\t// this method is exposed, but perhaps it would be better if we can make it private...\n\t\tthis.update = function () {\n\n\t\t\tconst offset = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\n\t\t\t// so camera.up is the orbit axis\n\t\t\tconst quat = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion().setFromUnitVectors( object.up, new three__WEBPACK_IMPORTED_MODULE_0__.Vector3( 0, 1, 0 ) );\n\t\t\tconst quatInverse = quat.clone().invert();\n\n\t\t\tconst lastPosition = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\t\t\tconst lastQuaternion = new three__WEBPACK_IMPORTED_MODULE_0__.Quaternion();\n\n\t\t\tconst twoPI = 2 * Math.PI;\n\n\t\t\treturn function update() {\n\n\t\t\t\tconst position = scope.object.position;\n\n\t\t\t\toffset.copy( position ).sub( scope.target );\n\n\t\t\t\t// rotate offset to \"y-axis-is-up\" space\n\t\t\t\toffset.applyQuaternion( quat );\n\n\t\t\t\t// angle from z-axis around y-axis\n\t\t\t\tspherical.setFromVector3( offset );\n\n\t\t\t\tif ( scope.autoRotate && state === STATE.NONE ) {\n\n\t\t\t\t\trotateLeft( getAutoRotationAngle() );\n\n\t\t\t\t}\n\n\t\t\t\tif ( scope.enableDamping ) {\n\n\t\t\t\t\tspherical.theta += sphericalDelta.theta * scope.dampingFactor;\n\t\t\t\t\tspherical.phi += sphericalDelta.phi * scope.dampingFactor;\n\n\t\t\t\t} else {\n\n\t\t\t\t\tspherical.theta += sphericalDelta.theta;\n\t\t\t\t\tspherical.phi += sphericalDelta.phi;\n\n\t\t\t\t}\n\n\t\t\t\t// restrict theta to be between desired limits\n\n\t\t\t\tlet min = scope.minAzimuthAngle;\n\t\t\t\tlet max = scope.maxAzimuthAngle;\n\n\t\t\t\tif ( isFinite( min ) && isFinite( max ) ) {\n\n\t\t\t\t\tif ( min < - Math.PI ) min += twoPI; else if ( min > Math.PI ) min -= twoPI;\n\n\t\t\t\t\tif ( max < - Math.PI ) max += twoPI; else if ( max > Math.PI ) max -= twoPI;\n\n\t\t\t\t\tif ( min <= max ) {\n\n\t\t\t\t\t\tspherical.theta = Math.max( min, Math.min( max, spherical.theta ) );\n\n\t\t\t\t\t} else {\n\n\t\t\t\t\t\tspherical.theta = ( spherical.theta > ( min + max ) / 2 ) ?\n\t\t\t\t\t\t\tMath.max( min, spherical.theta ) :\n\t\t\t\t\t\t\tMath.min( max, spherical.theta );\n\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t// restrict phi to be between desired limits\n\t\t\t\tspherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );\n\n\t\t\t\tspherical.makeSafe();\n\n\n\t\t\t\tspherical.radius *= scale;\n\n\t\t\t\t// restrict radius to be between desired limits\n\t\t\t\tspherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );\n\n\t\t\t\t// move target to panned location\n\n\t\t\t\tif ( scope.enableDamping === true ) {\n\n\t\t\t\t\tscope.target.addScaledVector( panOffset, scope.dampingFactor );\n\n\t\t\t\t} else {\n\n\t\t\t\t\tscope.target.add( panOffset );\n\n\t\t\t\t}\n\n\t\t\t\toffset.setFromSpherical( spherical );\n\n\t\t\t\t// rotate offset back to \"camera-up-vector-is-up\" space\n\t\t\t\toffset.applyQuaternion( quatInverse );\n\n\t\t\t\tposition.copy( scope.target ).add( offset );\n\n\t\t\t\tscope.object.lookAt( scope.target );\n\n\t\t\t\tif ( scope.enableDamping === true ) {\n\n\t\t\t\t\tsphericalDelta.theta *= ( 1 - scope.dampingFactor );\n\t\t\t\t\tsphericalDelta.phi *= ( 1 - scope.dampingFactor );\n\n\t\t\t\t\tpanOffset.multiplyScalar( 1 - scope.dampingFactor );\n\n\t\t\t\t} else {\n\n\t\t\t\t\tsphericalDelta.set( 0, 0, 0 );\n\n\t\t\t\t\tpanOffset.set( 0, 0, 0 );\n\n\t\t\t\t}\n\n\t\t\t\tscale = 1;\n\n\t\t\t\t// update condition is:\n\t\t\t\t// min(camera displacement, camera rotation in radians)^2 > EPS\n\t\t\t\t// using small-angle approximation cos(x/2) = 1 - x^2 / 8\n\n\t\t\t\tif ( zoomChanged ||\n\t\t\t\t\tlastPosition.distanceToSquared( scope.object.position ) > EPS ||\n\t\t\t\t\t8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {\n\n\t\t\t\t\tscope.dispatchEvent( _changeEvent );\n\n\t\t\t\t\tlastPosition.copy( scope.object.position );\n\t\t\t\t\tlastQuaternion.copy( scope.object.quaternion );\n\t\t\t\t\tzoomChanged = false;\n\n\t\t\t\t\treturn true;\n\n\t\t\t\t}\n\n\t\t\t\treturn false;\n\n\t\t\t};\n\n\t\t}();\n\n\t\tthis.dispose = function () {\n\n\t\t\tscope.domElement.removeEventListener( 'contextmenu', onContextMenu );\n\n\t\t\tscope.domElement.removeEventListener( 'pointerdown', onPointerDown );\n\t\t\tscope.domElement.removeEventListener( 'pointercancel', onPointerUp );\n\t\t\tscope.domElement.removeEventListener( 'wheel', onMouseWheel );\n\n\t\t\tscope.domElement.removeEventListener( 'pointermove', onPointerMove );\n\t\t\tscope.domElement.removeEventListener( 'pointerup', onPointerUp );\n\n\n\t\t\tif ( scope._domElementKeyEvents !== null ) {\n\n\t\t\t\tscope._domElementKeyEvents.removeEventListener( 'keydown', onKeyDown );\n\t\t\t\tscope._domElementKeyEvents = null;\n\n\t\t\t}\n\n\t\t\t//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?\n\n\t\t};\n\n\t\t//\n\t\t// internals\n\t\t//\n\n\t\tconst scope = this;\n\n\t\tconst STATE = {\n\t\t\tNONE: - 1,\n\t\t\tROTATE: 0,\n\t\t\tDOLLY: 1,\n\t\t\tPAN: 2,\n\t\t\tTOUCH_ROTATE: 3,\n\t\t\tTOUCH_PAN: 4,\n\t\t\tTOUCH_DOLLY_PAN: 5,\n\t\t\tTOUCH_DOLLY_ROTATE: 6\n\t\t};\n\n\t\tlet state = STATE.NONE;\n\n\t\tconst EPS = 0.000001;\n\n\t\t// current position in spherical coordinates\n\t\tconst spherical = new three__WEBPACK_IMPORTED_MODULE_0__.Spherical();\n\t\tconst sphericalDelta = new three__WEBPACK_IMPORTED_MODULE_0__.Spherical();\n\n\t\tlet scale = 1;\n\t\tconst panOffset = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\t\tlet zoomChanged = false;\n\n\t\tconst rotateStart = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\t\tconst rotateEnd = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\t\tconst rotateDelta = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\n\t\tconst panStart = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\t\tconst panEnd = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\t\tconst panDelta = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\n\t\tconst dollyStart = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\t\tconst dollyEnd = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\t\tconst dollyDelta = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\n\t\tconst pointers = [];\n\t\tconst pointerPositions = {};\n\n\t\tfunction getAutoRotationAngle() {\n\n\t\t\treturn 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;\n\n\t\t}\n\n\t\tfunction getZoomScale() {\n\n\t\t\treturn Math.pow( 0.95, scope.zoomSpeed );\n\n\t\t}\n\n\t\tfunction rotateLeft( angle ) {\n\n\t\t\tsphericalDelta.theta -= angle;\n\n\t\t}\n\n\t\tfunction rotateUp( angle ) {\n\n\t\t\tsphericalDelta.phi -= angle;\n\n\t\t}\n\n\t\tconst panLeft = function () {\n\n\t\t\tconst v = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\n\t\t\treturn function panLeft( distance, objectMatrix ) {\n\n\t\t\t\tv.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix\n\t\t\t\tv.multiplyScalar( - distance );\n\n\t\t\t\tpanOffset.add( v );\n\n\t\t\t};\n\n\t\t}();\n\n\t\tconst panUp = function () {\n\n\t\t\tconst v = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\n\t\t\treturn function panUp( distance, objectMatrix ) {\n\n\t\t\t\tif ( scope.screenSpacePanning === true ) {\n\n\t\t\t\t\tv.setFromMatrixColumn( objectMatrix, 1 );\n\n\t\t\t\t} else {\n\n\t\t\t\t\tv.setFromMatrixColumn( objectMatrix, 0 );\n\t\t\t\t\tv.crossVectors( scope.object.up, v );\n\n\t\t\t\t}\n\n\t\t\t\tv.multiplyScalar( distance );\n\n\t\t\t\tpanOffset.add( v );\n\n\t\t\t};\n\n\t\t}();\n\n\t\t// deltaX and deltaY are in pixels; right and down are positive\n\t\tconst pan = function () {\n\n\t\t\tconst offset = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\n\t\t\treturn function pan( deltaX, deltaY ) {\n\n\t\t\t\tconst element = scope.domElement;\n\n\t\t\t\tif ( scope.object.isPerspectiveCamera ) {\n\n\t\t\t\t\t// perspective\n\t\t\t\t\tconst position = scope.object.position;\n\t\t\t\t\toffset.copy( position ).sub( scope.target );\n\t\t\t\t\tlet targetDistance = offset.length();\n\n\t\t\t\t\t// half of the fov is center to top of screen\n\t\t\t\t\ttargetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );\n\n\t\t\t\t\t// we use only clientHeight here so aspect ratio does not distort speed\n\t\t\t\t\tpanLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );\n\t\t\t\t\tpanUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );\n\n\t\t\t\t} else if ( scope.object.isOrthographicCamera ) {\n\n\t\t\t\t\t// orthographic\n\t\t\t\t\tpanLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );\n\t\t\t\t\tpanUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );\n\n\t\t\t\t} else {\n\n\t\t\t\t\t// camera neither orthographic nor perspective\n\t\t\t\t\tconsole.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );\n\t\t\t\t\tscope.enablePan = false;\n\n\t\t\t\t}\n\n\t\t\t};\n\n\t\t}();\n\n\t\tfunction dollyOut( dollyScale ) {\n\n\t\t\tif ( scope.object.isPerspectiveCamera ) {\n\n\t\t\t\tscale /= dollyScale;\n\n\t\t\t} else if ( scope.object.isOrthographicCamera ) {\n\n\t\t\t\tscope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );\n\t\t\t\tscope.object.updateProjectionMatrix();\n\t\t\t\tzoomChanged = true;\n\n\t\t\t} else {\n\n\t\t\t\tconsole.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );\n\t\t\t\tscope.enableZoom = false;\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction dollyIn( dollyScale ) {\n\n\t\t\tif ( scope.object.isPerspectiveCamera ) {\n\n\t\t\t\tscale *= dollyScale;\n\n\t\t\t} else if ( scope.object.isOrthographicCamera ) {\n\n\t\t\t\tscope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );\n\t\t\t\tscope.object.updateProjectionMatrix();\n\t\t\t\tzoomChanged = true;\n\n\t\t\t} else {\n\n\t\t\t\tconsole.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );\n\t\t\t\tscope.enableZoom = false;\n\n\t\t\t}\n\n\t\t}\n\n\t\t//\n\t\t// event callbacks - update the object state\n\t\t//\n\n\t\tfunction handleMouseDownRotate( event ) {\n\n\t\t\trotateStart.set( event.clientX, event.clientY );\n\n\t\t}\n\n\t\tfunction handleMouseDownDolly( event ) {\n\n\t\t\tdollyStart.set( event.clientX, event.clientY );\n\n\t\t}\n\n\t\tfunction handleMouseDownPan( event ) {\n\n\t\t\tpanStart.set( event.clientX, event.clientY );\n\n\t\t}\n\n\t\tfunction handleMouseMoveRotate( event ) {\n\n\t\t\trotateEnd.set( event.clientX, event.clientY );\n\n\t\t\trotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );\n\n\t\t\tconst element = scope.domElement;\n\n\t\t\trotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height\n\n\t\t\trotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );\n\n\t\t\trotateStart.copy( rotateEnd );\n\n\t\t\tscope.update();\n\n\t\t}\n\n\t\tfunction handleMouseMoveDolly( event ) {\n\n\t\t\tdollyEnd.set( event.clientX, event.clientY );\n\n\t\t\tdollyDelta.subVectors( dollyEnd, dollyStart );\n\n\t\t\tif ( dollyDelta.y > 0 ) {\n\n\t\t\t\tdollyOut( getZoomScale() );\n\n\t\t\t} else if ( dollyDelta.y < 0 ) {\n\n\t\t\t\tdollyIn( getZoomScale() );\n\n\t\t\t}\n\n\t\t\tdollyStart.copy( dollyEnd );\n\n\t\t\tscope.update();\n\n\t\t}\n\n\t\tfunction handleMouseMovePan( event ) {\n\n\t\t\tpanEnd.set( event.clientX, event.clientY );\n\n\t\t\tpanDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );\n\n\t\t\tpan( panDelta.x, panDelta.y );\n\n\t\t\tpanStart.copy( panEnd );\n\n\t\t\tscope.update();\n\n\t\t}\n\n\t\tfunction handleMouseWheel( event ) {\n\n\t\t\tif ( event.deltaY < 0 ) {\n\n\t\t\t\tdollyIn( getZoomScale() );\n\n\t\t\t} else if ( event.deltaY > 0 ) {\n\n\t\t\t\tdollyOut( getZoomScale() );\n\n\t\t\t}\n\n\t\t\tscope.update();\n\n\t\t}\n\n\t\tfunction handleKeyDown( event ) {\n\n\t\t\tlet needsUpdate = false;\n\n\t\t\tswitch ( event.code ) {\n\n\t\t\t\tcase scope.keys.UP:\n\n\t\t\t\t\tif ( event.ctrlKey || event.metaKey || event.shiftKey ) {\n\n\t\t\t\t\t\trotateUp( 2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight );\n\n\t\t\t\t\t} else {\n\n\t\t\t\t\t\tpan( 0, scope.keyPanSpeed );\n\n\t\t\t\t\t}\n\n\t\t\t\t\tneedsUpdate = true;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase scope.keys.BOTTOM:\n\n\t\t\t\t\tif ( event.ctrlKey || event.metaKey || event.shiftKey ) {\n\n\t\t\t\t\t\trotateUp( - 2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight );\n\n\t\t\t\t\t} else {\n\n\t\t\t\t\t\tpan( 0, - scope.keyPanSpeed );\n\n\t\t\t\t\t}\n\n\t\t\t\t\tneedsUpdate = true;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase scope.keys.LEFT:\n\n\t\t\t\t\tif ( event.ctrlKey || event.metaKey || event.shiftKey ) {\n\n\t\t\t\t\t\trotateLeft( 2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight );\n\n\t\t\t\t\t} else {\n\n\t\t\t\t\t\tpan( scope.keyPanSpeed, 0 );\n\n\t\t\t\t\t}\n\n\t\t\t\t\tneedsUpdate = true;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase scope.keys.RIGHT:\n\n\t\t\t\t\tif ( event.ctrlKey || event.metaKey || event.shiftKey ) {\n\n\t\t\t\t\t\trotateLeft( - 2 * Math.PI * scope.rotateSpeed / scope.domElement.clientHeight );\n\n\t\t\t\t\t} else {\n\n\t\t\t\t\t\tpan( - scope.keyPanSpeed, 0 );\n\n\t\t\t\t\t}\n\n\t\t\t\t\tneedsUpdate = true;\n\t\t\t\t\tbreak;\n\n\t\t\t}\n\n\t\t\tif ( needsUpdate ) {\n\n\t\t\t\t// prevent the browser from scrolling on cursor keys\n\t\t\t\tevent.preventDefault();\n\n\t\t\t\tscope.update();\n\n\t\t\t}\n\n\n\t\t}\n\n\t\tfunction handleTouchStartRotate() {\n\n\t\t\tif ( pointers.length === 1 ) {\n\n\t\t\t\trotateStart.set( pointers[ 0 ].pageX, pointers[ 0 ].pageY );\n\n\t\t\t} else {\n\n\t\t\t\tconst x = 0.5 * ( pointers[ 0 ].pageX + pointers[ 1 ].pageX );\n\t\t\t\tconst y = 0.5 * ( pointers[ 0 ].pageY + pointers[ 1 ].pageY );\n\n\t\t\t\trotateStart.set( x, y );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction handleTouchStartPan() {\n\n\t\t\tif ( pointers.length === 1 ) {\n\n\t\t\t\tpanStart.set( pointers[ 0 ].pageX, pointers[ 0 ].pageY );\n\n\t\t\t} else {\n\n\t\t\t\tconst x = 0.5 * ( pointers[ 0 ].pageX + pointers[ 1 ].pageX );\n\t\t\t\tconst y = 0.5 * ( pointers[ 0 ].pageY + pointers[ 1 ].pageY );\n\n\t\t\t\tpanStart.set( x, y );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction handleTouchStartDolly() {\n\n\t\t\tconst dx = pointers[ 0 ].pageX - pointers[ 1 ].pageX;\n\t\t\tconst dy = pointers[ 0 ].pageY - pointers[ 1 ].pageY;\n\n\t\t\tconst distance = Math.sqrt( dx * dx + dy * dy );\n\n\t\t\tdollyStart.set( 0, distance );\n\n\t\t}\n\n\t\tfunction handleTouchStartDollyPan() {\n\n\t\t\tif ( scope.enableZoom ) handleTouchStartDolly();\n\n\t\t\tif ( scope.enablePan ) handleTouchStartPan();\n\n\t\t}\n\n\t\tfunction handleTouchStartDollyRotate() {\n\n\t\t\tif ( scope.enableZoom ) handleTouchStartDolly();\n\n\t\t\tif ( scope.enableRotate ) handleTouchStartRotate();\n\n\t\t}\n\n\t\tfunction handleTouchMoveRotate( event ) {\n\n\t\t\tif ( pointers.length == 1 ) {\n\n\t\t\t\trotateEnd.set( event.pageX, event.pageY );\n\n\t\t\t} else {\n\n\t\t\t\tconst position = getSecondPointerPosition( event );\n\n\t\t\t\tconst x = 0.5 * ( event.pageX + position.x );\n\t\t\t\tconst y = 0.5 * ( event.pageY + position.y );\n\n\t\t\t\trotateEnd.set( x, y );\n\n\t\t\t}\n\n\t\t\trotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );\n\n\t\t\tconst element = scope.domElement;\n\n\t\t\trotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height\n\n\t\t\trotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );\n\n\t\t\trotateStart.copy( rotateEnd );\n\n\t\t}\n\n\t\tfunction handleTouchMovePan( event ) {\n\n\t\t\tif ( pointers.length === 1 ) {\n\n\t\t\t\tpanEnd.set( event.pageX, event.pageY );\n\n\t\t\t} else {\n\n\t\t\t\tconst position = getSecondPointerPosition( event );\n\n\t\t\t\tconst x = 0.5 * ( event.pageX + position.x );\n\t\t\t\tconst y = 0.5 * ( event.pageY + position.y );\n\n\t\t\t\tpanEnd.set( x, y );\n\n\t\t\t}\n\n\t\t\tpanDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );\n\n\t\t\tpan( panDelta.x, panDelta.y );\n\n\t\t\tpanStart.copy( panEnd );\n\n\t\t}\n\n\t\tfunction handleTouchMoveDolly( event ) {\n\n\t\t\tconst position = getSecondPointerPosition( event );\n\n\t\t\tconst dx = event.pageX - position.x;\n\t\t\tconst dy = event.pageY - position.y;\n\n\t\t\tconst distance = Math.sqrt( dx * dx + dy * dy );\n\n\t\t\tdollyEnd.set( 0, distance );\n\n\t\t\tdollyDelta.set( 0, Math.pow( dollyEnd.y / dollyStart.y, scope.zoomSpeed ) );\n\n\t\t\tdollyOut( dollyDelta.y );\n\n\t\t\tdollyStart.copy( dollyEnd );\n\n\t\t}\n\n\t\tfunction handleTouchMoveDollyPan( event ) {\n\n\t\t\tif ( scope.enableZoom ) handleTouchMoveDolly( event );\n\n\t\t\tif ( scope.enablePan ) handleTouchMovePan( event );\n\n\t\t}\n\n\t\tfunction handleTouchMoveDollyRotate( event ) {\n\n\t\t\tif ( scope.enableZoom ) handleTouchMoveDolly( event );\n\n\t\t\tif ( scope.enableRotate ) handleTouchMoveRotate( event );\n\n\t\t}\n\n\t\t//\n\t\t// event handlers - FSM: listen for events and reset state\n\t\t//\n\n\t\tfunction onPointerDown( event ) {\n\n\t\t\tif ( scope.enabled === false ) return;\n\n\t\t\tif ( pointers.length === 0 ) {\n\n\t\t\t\tscope.domElement.setPointerCapture( event.pointerId );\n\n\t\t\t\tscope.domElement.addEventListener( 'pointermove', onPointerMove );\n\t\t\t\tscope.domElement.addEventListener( 'pointerup', onPointerUp );\n\n\t\t\t}\n\n\t\t\t//\n\n\t\t\taddPointer( event );\n\n\t\t\tif ( event.pointerType === 'touch' ) {\n\n\t\t\t\tonTouchStart( event );\n\n\t\t\t} else {\n\n\t\t\t\tonMouseDown( event );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onPointerMove( event ) {\n\n\t\t\tif ( scope.enabled === false ) return;\n\n\t\t\tif ( event.pointerType === 'touch' ) {\n\n\t\t\t\tonTouchMove( event );\n\n\t\t\t} else {\n\n\t\t\t\tonMouseMove( event );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onPointerUp( event ) {\n\n\t\t\tremovePointer( event );\n\n\t\t\tif ( pointers.length === 0 ) {\n\n\t\t\t\tscope.domElement.releasePointerCapture( event.pointerId );\n\n\t\t\t\tscope.domElement.removeEventListener( 'pointermove', onPointerMove );\n\t\t\t\tscope.domElement.removeEventListener( 'pointerup', onPointerUp );\n\n\t\t\t}\n\n\t\t\tscope.dispatchEvent( _endEvent );\n\n\t\t\tstate = STATE.NONE;\n\n\t\t}\n\n\t\tfunction onMouseDown( event ) {\n\n\t\t\tlet mouseAction;\n\n\t\t\tswitch ( event.button ) {\n\n\t\t\t\tcase 0:\n\n\t\t\t\t\tmouseAction = scope.mouseButtons.LEFT;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 1:\n\n\t\t\t\t\tmouseAction = scope.mouseButtons.MIDDLE;\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 2:\n\n\t\t\t\t\tmouseAction = scope.mouseButtons.RIGHT;\n\t\t\t\t\tbreak;\n\n\t\t\t\tdefault:\n\n\t\t\t\t\tmouseAction = - 1;\n\n\t\t\t}\n\n\t\t\tswitch ( mouseAction ) {\n\n\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.DOLLY:\n\n\t\t\t\t\tif ( scope.enableZoom === false ) return;\n\n\t\t\t\t\thandleMouseDownDolly( event );\n\n\t\t\t\t\tstate = STATE.DOLLY;\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.ROTATE:\n\n\t\t\t\t\tif ( event.ctrlKey || event.metaKey || event.shiftKey ) {\n\n\t\t\t\t\t\tif ( scope.enablePan === false ) return;\n\n\t\t\t\t\t\thandleMouseDownPan( event );\n\n\t\t\t\t\t\tstate = STATE.PAN;\n\n\t\t\t\t\t} else {\n\n\t\t\t\t\t\tif ( scope.enableRotate === false ) return;\n\n\t\t\t\t\t\thandleMouseDownRotate( event );\n\n\t\t\t\t\t\tstate = STATE.ROTATE;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__.MOUSE.PAN:\n\n\t\t\t\t\tif ( event.ctrlKey || event.metaKey || event.shiftKey ) {\n\n\t\t\t\t\t\tif ( scope.enableRotate === false ) return;\n\n\t\t\t\t\t\thandleMouseDownRotate( event );\n\n\t\t\t\t\t\tstate = STATE.ROTATE;\n\n\t\t\t\t\t} else {\n\n\t\t\t\t\t\tif ( scope.enablePan === false ) return;\n\n\t\t\t\t\t\thandleMouseDownPan( event );\n\n\t\t\t\t\t\tstate = STATE.PAN;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tdefault:\n\n\t\t\t\t\tstate = STATE.NONE;\n\n\t\t\t}\n\n\t\t\tif ( state !== STATE.NONE ) {\n\n\t\t\t\tscope.dispatchEvent( _startEvent );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onMouseMove( event ) {\n\n\t\t\tswitch ( state ) {\n\n\t\t\t\tcase STATE.ROTATE:\n\n\t\t\t\t\tif ( scope.enableRotate === false ) return;\n\n\t\t\t\t\thandleMouseMoveRotate( event );\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase STATE.DOLLY:\n\n\t\t\t\t\tif ( scope.enableZoom === false ) return;\n\n\t\t\t\t\thandleMouseMoveDolly( event );\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase STATE.PAN:\n\n\t\t\t\t\tif ( scope.enablePan === false ) return;\n\n\t\t\t\t\thandleMouseMovePan( event );\n\n\t\t\t\t\tbreak;\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onMouseWheel( event ) {\n\n\t\t\tif ( scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE ) return;\n\n\t\t\tevent.preventDefault();\n\n\t\t\tscope.dispatchEvent( _startEvent );\n\n\t\t\thandleMouseWheel( event );\n\n\t\t\tscope.dispatchEvent( _endEvent );\n\n\t\t}\n\n\t\tfunction onKeyDown( event ) {\n\n\t\t\tif ( scope.enabled === false || scope.enablePan === false ) return;\n\n\t\t\thandleKeyDown( event );\n\n\t\t}\n\n\t\tfunction onTouchStart( event ) {\n\n\t\t\ttrackPointer( event );\n\n\t\t\tswitch ( pointers.length ) {\n\n\t\t\t\tcase 1:\n\n\t\t\t\t\tswitch ( scope.touches.ONE ) {\n\n\t\t\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.ROTATE:\n\n\t\t\t\t\t\t\tif ( scope.enableRotate === false ) return;\n\n\t\t\t\t\t\t\thandleTouchStartRotate();\n\n\t\t\t\t\t\t\tstate = STATE.TOUCH_ROTATE;\n\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.PAN:\n\n\t\t\t\t\t\t\tif ( scope.enablePan === false ) return;\n\n\t\t\t\t\t\t\thandleTouchStartPan();\n\n\t\t\t\t\t\t\tstate = STATE.TOUCH_PAN;\n\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tdefault:\n\n\t\t\t\t\t\t\tstate = STATE.NONE;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase 2:\n\n\t\t\t\t\tswitch ( scope.touches.TWO ) {\n\n\t\t\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.DOLLY_PAN:\n\n\t\t\t\t\t\t\tif ( scope.enableZoom === false && scope.enablePan === false ) return;\n\n\t\t\t\t\t\t\thandleTouchStartDollyPan();\n\n\t\t\t\t\t\t\tstate = STATE.TOUCH_DOLLY_PAN;\n\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tcase three__WEBPACK_IMPORTED_MODULE_0__.TOUCH.DOLLY_ROTATE:\n\n\t\t\t\t\t\t\tif ( scope.enableZoom === false && scope.enableRotate === false ) return;\n\n\t\t\t\t\t\t\thandleTouchStartDollyRotate();\n\n\t\t\t\t\t\t\tstate = STATE.TOUCH_DOLLY_ROTATE;\n\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tdefault:\n\n\t\t\t\t\t\t\tstate = STATE.NONE;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tdefault:\n\n\t\t\t\t\tstate = STATE.NONE;\n\n\t\t\t}\n\n\t\t\tif ( state !== STATE.NONE ) {\n\n\t\t\t\tscope.dispatchEvent( _startEvent );\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onTouchMove( event ) {\n\n\t\t\ttrackPointer( event );\n\n\t\t\tswitch ( state ) {\n\n\t\t\t\tcase STATE.TOUCH_ROTATE:\n\n\t\t\t\t\tif ( scope.enableRotate === false ) return;\n\n\t\t\t\t\thandleTouchMoveRotate( event );\n\n\t\t\t\t\tscope.update();\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase STATE.TOUCH_PAN:\n\n\t\t\t\t\tif ( scope.enablePan === false ) return;\n\n\t\t\t\t\thandleTouchMovePan( event );\n\n\t\t\t\t\tscope.update();\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase STATE.TOUCH_DOLLY_PAN:\n\n\t\t\t\t\tif ( scope.enableZoom === false && scope.enablePan === false ) return;\n\n\t\t\t\t\thandleTouchMoveDollyPan( event );\n\n\t\t\t\t\tscope.update();\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tcase STATE.TOUCH_DOLLY_ROTATE:\n\n\t\t\t\t\tif ( scope.enableZoom === false && scope.enableRotate === false ) return;\n\n\t\t\t\t\thandleTouchMoveDollyRotate( event );\n\n\t\t\t\t\tscope.update();\n\n\t\t\t\t\tbreak;\n\n\t\t\t\tdefault:\n\n\t\t\t\t\tstate = STATE.NONE;\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction onContextMenu( event ) {\n\n\t\t\tif ( scope.enabled === false ) return;\n\n\t\t\tevent.preventDefault();\n\n\t\t}\n\n\t\tfunction addPointer( event ) {\n\n\t\t\tpointers.push( event );\n\n\t\t}\n\n\t\tfunction removePointer( event ) {\n\n\t\t\tdelete pointerPositions[ event.pointerId ];\n\n\t\t\tfor ( let i = 0; i < pointers.length; i ++ ) {\n\n\t\t\t\tif ( pointers[ i ].pointerId == event.pointerId ) {\n\n\t\t\t\t\tpointers.splice( i, 1 );\n\t\t\t\t\treturn;\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t}\n\n\t\tfunction trackPointer( event ) {\n\n\t\t\tlet position = pointerPositions[ event.pointerId ];\n\n\t\t\tif ( position === undefined ) {\n\n\t\t\t\tposition = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();\n\t\t\t\tpointerPositions[ event.pointerId ] = position;\n\n\t\t\t}\n\n\t\t\tposition.set( event.pageX, event.pageY );\n\n\t\t}\n\n\t\tfunction getSecondPointerPosition( event ) {\n\n\t\t\tconst pointer = ( event.pointerId === pointers[ 0 ].pointerId ) ? pointers[ 1 ] : pointers[ 0 ];\n\n\t\t\treturn pointerPositions[ pointer.pointerId ];\n\n\t\t}\n\n\t\t//\n\n\t\tscope.domElement.addEventListener( 'contextmenu', onContextMenu );\n\n\t\tscope.domElement.addEventListener( 'pointerdown', onPointerDown );\n\t\tscope.domElement.addEventListener( 'pointercancel', onPointerUp );\n\t\tscope.domElement.addEventListener( 'wheel', onMouseWheel, { passive: false } );\n\n\t\t// force an update at start\n\n\t\tthis.update();\n\n\t}\n\n}\n\n\n\n\n//# sourceURL=webpack://gameaviator/./node_modules/three/examples/jsm/controls/OrbitControls.js?");

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;