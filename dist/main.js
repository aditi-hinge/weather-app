/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/home-page-image.jpg */ "./src/images/home-page-image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root{\r\n    --white: #f5f5f5;\r\n    --black: #000000;\r\n    --gray: #a7a4a4;\r\n    --beige: #f5f5dc;\r\n    --red: #ff0000;\r\n    --lightgray: #cfc6c6;\r\n}\r\n\r\nbody{\r\n    font-family: 'Work Sans', sans-serif;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover;\r\n    background-repeat: repeat;\r\n}\r\n\r\n#container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n\r\n#search-field-div{\r\n    margin: 2em;\r\n    position: absolute;\r\n    top: 0.1em;\r\n    right: 5em;\r\n}\r\n\r\n#input-field{\r\n    padding: 0.4em;\r\n    font-size: 1rem;\r\n    position: relative;\r\n    border-radius: 10px;\r\n    border: none;\r\n}\r\n\r\n#search-button{\r\n    padding: 0.5em;\r\n    font-size: 1rem;\r\n    margin: 1em;\r\n    border-radius: 5px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background-color: var(--white);\r\n    color: var(--black);\r\n    box-shadow: 2px 2px 2px var(--gray);\r\n}\r\n\r\n#search-button:hover{\r\n    filter: brightness(1.2);\r\n    transition: 0.2s ease-in-out;\r\n}\r\n\r\n#weather-info-box{\r\n    display: grid;\r\n    grid-template-rows: 2fr 1fr;\r\n    font-size: 1.5rem;\r\n    width: 100%;\r\n    max-width: 40em;\r\n    border-radius: 10px;\r\n    box-shadow: 5px 5px 3px var(--white);\r\n    visibility: visible;\r\n  border-radius: 10px;\r\n  background-color: var(--beige);\r\n}\r\n\r\n#upper-box{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    background-color: var(--beige);\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    padding: 1em;\r\n    border-radius: 5px;\r\n    \r\n}\r\n\r\n#temp-box{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 0.5em;\r\n    border-right: 2px solid var(--black);\r\n}\r\n\r\n#temp-div,\r\n#main-weather{\r\n    font-size: 4.5rem;\r\n    font-weight: 600;\r\n}\r\n\r\n#conversion-button{\r\n    position: absolute;\r\n    left: 0.5em;\r\n    top: 0.5em;\r\n    background-color: var(--gray);\r\n    color: var(--white);\r\n    border-radius: 50%;\r\n    border: none;\r\n    font-size: 2rem;\r\n    height: 1.1em;\r\n    width: 1.1em;\r\n    padding: 1.1em;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n    cursor: pointer;\r\n    transition: filter 0.3s ease;\r\n}\r\n\r\n#conversion-button:hover{\r\n    filter: brightness(1.2);\r\n}\r\n\r\n#weather-description-box{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 0.5em\r\n}\r\n\r\n#main-weather-description{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#main-weather-description-box{\r\n    display: flex;\r\n    gap: 1em;\r\n}\r\n\r\n#icon{\r\n    background-color: var(--lightgray);\r\n    border-radius: 50%;\r\n}\r\n\r\n#lower-box{\r\n    display: grid;\r\n    grid-template-columns: repeat(5, 1fr);\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1em;\r\n    gap: 0.3em;\r\n    background-color: var(--gray);\r\n    border-radius: 5px;\r\n}\r\n\r\n#lower-box * div{\r\n    padding: 0.2em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.text{\r\n    font-weight: 700;\r\n}\r\n\r\n#error-div{\r\n    position: absolute;\r\n    color: var(--red);\r\n    bottom: -0.3em;\r\n    display: flex;\r\n    background-color: var(--white);\r\n}\r\n\r\n#sad-face-div{\r\n    font-size: 8rem;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,oCAAoC;IACpC,yDAAmD;IACnD,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,UAAU;AACd;;AAEA;IACI,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,8BAA8B;IAC9B,mBAAmB;IACnB,mCAAmC;AACvC;;AAEA;IACI,uBAAuB;IACvB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,iBAAiB;IACjB,WAAW;IACX,eAAe;IACf,mBAAmB;IACnB,oCAAoC;IACpC,mBAAmB;EACrB,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,8BAA8B;IAC9B,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,oCAAoC;AACxC;;AAEA;;IAEI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,6BAA6B;IAC7B,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,aAAa;IACb,YAAY;IACZ,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB;AACJ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,UAAU;IACV,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;IACd,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,eAAe;AACnB","sourcesContent":["*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root{\r\n    --white: #f5f5f5;\r\n    --black: #000000;\r\n    --gray: #a7a4a4;\r\n    --beige: #f5f5dc;\r\n    --red: #ff0000;\r\n    --lightgray: #cfc6c6;\r\n}\r\n\r\nbody{\r\n    font-family: 'Work Sans', sans-serif;\r\n    background-image: url(./images/home-page-image.jpg);\r\n    background-size: cover;\r\n    background-repeat: repeat;\r\n}\r\n\r\n#container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n\r\n#search-field-div{\r\n    margin: 2em;\r\n    position: absolute;\r\n    top: 0.1em;\r\n    right: 5em;\r\n}\r\n\r\n#input-field{\r\n    padding: 0.4em;\r\n    font-size: 1rem;\r\n    position: relative;\r\n    border-radius: 10px;\r\n    border: none;\r\n}\r\n\r\n#search-button{\r\n    padding: 0.5em;\r\n    font-size: 1rem;\r\n    margin: 1em;\r\n    border-radius: 5px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background-color: var(--white);\r\n    color: var(--black);\r\n    box-shadow: 2px 2px 2px var(--gray);\r\n}\r\n\r\n#search-button:hover{\r\n    filter: brightness(1.2);\r\n    transition: 0.2s ease-in-out;\r\n}\r\n\r\n#weather-info-box{\r\n    display: grid;\r\n    grid-template-rows: 2fr 1fr;\r\n    font-size: 1.5rem;\r\n    width: 100%;\r\n    max-width: 40em;\r\n    border-radius: 10px;\r\n    box-shadow: 5px 5px 3px var(--white);\r\n    visibility: visible;\r\n  border-radius: 10px;\r\n  background-color: var(--beige);\r\n}\r\n\r\n#upper-box{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    background-color: var(--beige);\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    padding: 1em;\r\n    border-radius: 5px;\r\n    \r\n}\r\n\r\n#temp-box{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 0.5em;\r\n    border-right: 2px solid var(--black);\r\n}\r\n\r\n#temp-div,\r\n#main-weather{\r\n    font-size: 4.5rem;\r\n    font-weight: 600;\r\n}\r\n\r\n#conversion-button{\r\n    position: absolute;\r\n    left: 0.5em;\r\n    top: 0.5em;\r\n    background-color: var(--gray);\r\n    color: var(--white);\r\n    border-radius: 50%;\r\n    border: none;\r\n    font-size: 2rem;\r\n    height: 1.1em;\r\n    width: 1.1em;\r\n    padding: 1.1em;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n    cursor: pointer;\r\n    transition: filter 0.3s ease;\r\n}\r\n\r\n#conversion-button:hover{\r\n    filter: brightness(1.2);\r\n}\r\n\r\n#weather-description-box{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 0.5em\r\n}\r\n\r\n#main-weather-description{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#main-weather-description-box{\r\n    display: flex;\r\n    gap: 1em;\r\n}\r\n\r\n#icon{\r\n    background-color: var(--lightgray);\r\n    border-radius: 50%;\r\n}\r\n\r\n#lower-box{\r\n    display: grid;\r\n    grid-template-columns: repeat(5, 1fr);\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1em;\r\n    gap: 0.3em;\r\n    background-color: var(--gray);\r\n    border-radius: 5px;\r\n}\r\n\r\n#lower-box * div{\r\n    padding: 0.2em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.text{\r\n    font-weight: 700;\r\n}\r\n\r\n#error-div{\r\n    position: absolute;\r\n    color: var(--red);\r\n    bottom: -0.3em;\r\n    display: flex;\r\n    background-color: var(--white);\r\n}\r\n\r\n#sad-face-div{\r\n    font-size: 8rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/changeBgImageAccToWeather.js":
/*!**************************************************!*\
  !*** ./src/modules/changeBgImageAccToWeather.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeBgImageAccToWeather": () => (/* binding */ changeBgImageAccToWeather)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _images_cloudy_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/cloudy.jpg */ "./src/images/cloudy.jpg");
/* harmony import */ var _images_haze_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/haze.jpg */ "./src/images/haze.jpg");
/* harmony import */ var _images_clear_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/clear.jpg */ "./src/images/clear.jpg");
/* harmony import */ var _images_rain_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/rain.jpg */ "./src/images/rain.jpg");
/* harmony import */ var _images_snow_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/snow.jpg */ "./src/images/snow.jpg");
/* harmony import */ var _images_drizzle_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/drizzle.jpg */ "./src/images/drizzle.jpg");
/* harmony import */ var _images_dust_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/dust.jpg */ "./src/images/dust.jpg");
/* harmony import */ var _images_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/thunderstorm.jpg */ "./src/images/thunderstorm.jpg");
/* harmony import */ var _images_mist_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/mist.jpg */ "./src/images/mist.jpg");
/* harmony import */ var _images_ash_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/ash.jpg */ "./src/images/ash.jpg");
/* harmony import */ var _images_squall_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/squall.jpg */ "./src/images/squall.jpg");
/* harmony import */ var _images_tornado_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/tornado.jpg */ "./src/images/tornado.jpg");















// function to change background image according to weather
function changeBgImageAccToWeather() {
    // get id
    const mainWeather = document.getElementById('main-weather');
    const weatherText = mainWeather.textContent; 
    if (weatherText.toLowerCase().match('clouds')) {
        document.body.style.background = '';
        document.body.style.background = `url(${_images_cloudy_jpg__WEBPACK_IMPORTED_MODULE_1__})`;
        return;
    }
    if (weatherText.toLowerCase().match('haze')) {
        document.body.style.background = '';
        document.body.style.background = `url(${_images_haze_jpg__WEBPACK_IMPORTED_MODULE_2__})`;
        return;
    }
    if (weatherText.toLowerCase().match('clear')) {
        document.body.style.background = '';
        document.body.style.background = `url(${_images_clear_jpg__WEBPACK_IMPORTED_MODULE_3__})`;
        return;
    }
    if (weatherText.toLowerCase().match('rain')) {
        document.body.style.background = '';
        document.body.style.background = `url(${_images_rain_jpg__WEBPACK_IMPORTED_MODULE_4__})`;
        return;
    }
    if (weatherText.toLowerCase().match('snow')) {
        document.body.style.background = '';
        document.body.style.background = `url(${_images_snow_jpg__WEBPACK_IMPORTED_MODULE_5__})`;
        return;
    }
    if (weatherText.toLowerCase().match('drizzle')) {
        document.body.style.background = '';
        document.body.style.background = `url(${_images_drizzle_jpg__WEBPACK_IMPORTED_MODULE_6__})`;
        return;
    }
    if (weatherText.toLowerCase().match('dust')) {
        document.body.style.background = '';
        document.body.style.background = `url(${_images_dust_jpg__WEBPACK_IMPORTED_MODULE_7__})`;
        return;
    }
    if (weatherText.toLowerCase().match('thunderstorm')) {
        document.body.style.background = '';
        document.body.style.background = `url(${_images_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_8__})`;
        return;
    }
    if (weatherText.toLowerCase().match('mist')) {
        document.body.style.background = '';
        document.body.style.background = `url(${_images_mist_jpg__WEBPACK_IMPORTED_MODULE_9__})`;
        return;
    }
    if (weatherText.toLowerCase().match('smoke')) {
        document.body.style.background = '';
        document.body.style.background = `url(${_images_dust_jpg__WEBPACK_IMPORTED_MODULE_7__})`;
        return;
    }
    if (weatherText.toLowerCase().match('fog')) {
        document.body.style.background = '';
        document.body.style.background = `url(${_images_mist_jpg__WEBPACK_IMPORTED_MODULE_9__})`;
        return;
    }
    if (weatherText.toLowerCase().match('sand')) {
        document.body.style.background = '';
        document.body.style.background = `url(${_images_dust_jpg__WEBPACK_IMPORTED_MODULE_7__})`;
        return;
    }
    if (weatherText.toLowerCase().match('ash')) {
        document.body.style.background = '';
        document.body.style.background = `url(${_images_ash_jpg__WEBPACK_IMPORTED_MODULE_10__})`;
        return;
    }
    if (weatherText.toLowerCase().match('squall')) {
        document.body.style.background = '';
        document.body.style.background = `url(${_images_squall_jpg__WEBPACK_IMPORTED_MODULE_11__})`;
        return;
    }
    if (weatherText.toLowerCase().match('tornado')) {
        document.body.style.background = '';
        document.body.style.background = `url(${_images_tornado_jpg__WEBPACK_IMPORTED_MODULE_12__})`;
        return;
    }
}



/***/ }),

/***/ "./src/modules/conversion.js":
/*!***********************************!*\
  !*** ./src/modules/conversion.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "conversion": () => (/* binding */ conversion)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function conversion(){
    // function to convert between celcius and fahrenheit
    // get nodes
    const conversionButton = document.getElementById('conversion-button');
    const elementsOfTemp = document.querySelectorAll('.temp');

    if (conversionButton.textContent === 'C°') {
        elementsOfTemp.forEach((element) => {
            const text = element.textContent;
            const filteredValue = text.match(/\d+\.\d+/).toString().replace(/,/g, '');
            const fahrenheitValue = ((filteredValue * (9/5)) + 32).toFixed(1);
            element.textContent = `${fahrenheitValue}°`;
        })

        conversionButton.textContent = 'F°';
        return;
    }
    if (conversionButton.textContent === 'F°') {
        elementsOfTemp.forEach((element) => {
            const text = element.textContent;
            const filteredValue = text.match(/\d+\.\d+/).toString().replace(/,/g, '');
            const celciusValue = ((filteredValue - 32) * (5/9)).toFixed(1);
            element.textContent = `${celciusValue}°`;
        })

        conversionButton.textContent = 'C°';
        return;
    }
}



/***/ }),

/***/ "./src/modules/createWeatherBox.js":
/*!*****************************************!*\
  !*** ./src/modules/createWeatherBox.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeatherBoxFunc": () => (/* binding */ createWeatherBoxFunc)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


const container = document.getElementById('container');

function createWeatherBoxFunc() {
    // create display box for weather
    const weatherInfoBox = document.createElement('div');
    const upperBox = document.createElement('div');
    const lowerBox = document.createElement('div');
    const tempBox = document.createElement('div');
    const tempDiv = document.createElement('div');
    const locationDiv = document.createElement('div');
    const weatherDescriptionBox = document.createElement('div');
    const icon = document.createElement('img');
    const mainWeather = document.createElement('div');
    const mainWeatherDescriptionBox = document.createElement('div');
    const mainWeatherDescription = document.createElement('div');
    const feelsLikeText = document.createElement('div');
    const feelsLikeValue = document.createElement('div');
    const feelsLikeDiv = document.createElement('div');
    const humidityText = document.createElement('div');
    const humidityValue = document.createElement('div');
    const humidityDiv = document.createElement('div');
    const pressureDiv = document.createElement('div');
    const pressureText = document.createElement('div');
    const pressureValue = document.createElement('div');
    const minTempDiv = document.createElement('div');
    const minTempText = document.createElement('div');
    const minTempValue = document.createElement('div');
    const maxTempDiv = document.createElement('div');
    const maxTempText = document.createElement('div');
    const maxTempValue = document.createElement('div');
    const conversionButton = document.createElement('button');

    //name
    weatherInfoBox.setAttribute('id', 'weather-info-box');
    upperBox.setAttribute('id', 'upper-box');
    lowerBox.setAttribute('id', 'lower-box');
    tempBox.setAttribute('id', 'temp-box');
    tempDiv.setAttribute('id', 'temp-div');
    tempDiv.setAttribute('class', 'temp');
    locationDiv.setAttribute('id', 'location-div');
    weatherDescriptionBox.setAttribute('id', 'weather-description-box');
    mainWeather.setAttribute('id', 'main-weather');
    mainWeatherDescriptionBox.setAttribute('id', 'main-weather-description-box');
    mainWeatherDescription.setAttribute('id', 'main-weather-description');
    icon.setAttribute('id', 'icon');
    feelsLikeDiv.setAttribute('id', 'feels-like-div');
    feelsLikeText.setAttribute('id', 'feels-like-text');
    feelsLikeValue.setAttribute('id', 'feels-like-value');
    feelsLikeText.setAttribute('class', 'text');
    feelsLikeValue.setAttribute('class', 'temp');
    humidityDiv.setAttribute('id', 'humidity-div');
    humidityText.setAttribute('id', 'humidity-text');
    humidityText.setAttribute('class', 'text');
    humidityValue.setAttribute('id', 'humidity-value');
    pressureDiv.setAttribute('id', 'pressure-div');
    pressureText.setAttribute('id', 'pressure-text');
    pressureText.setAttribute('class', 'text');
    pressureValue.setAttribute('id', 'pressure-value');
    minTempDiv.setAttribute('id', 'min-temp-div');
    minTempText.setAttribute('id', 'min-temp-text');
    minTempText.setAttribute('class', 'text');
    minTempValue.setAttribute('id', 'min-temp-value');
    maxTempDiv.setAttribute('id', 'max-temp-div');
    maxTempText.setAttribute('id', 'max-temp-text');
    maxTempText.setAttribute('class', 'text');
    maxTempValue.setAttribute('id', 'max-temp-value');
    minTempValue.setAttribute('class', 'temp');
    maxTempValue.setAttribute('class', 'temp');
    conversionButton.setAttribute('id', 'conversion-button');

    //append to container
    container.appendChild(weatherInfoBox);
    weatherInfoBox.appendChild(upperBox);
    weatherInfoBox.appendChild(lowerBox);
    upperBox.appendChild(tempBox);
    tempBox.appendChild(conversionButton);
    tempBox.appendChild(tempDiv);
    tempBox.appendChild(locationDiv);
    upperBox.appendChild(weatherDescriptionBox);
    weatherDescriptionBox.appendChild(mainWeather);
    weatherDescriptionBox.appendChild(mainWeatherDescriptionBox);
    mainWeatherDescriptionBox.appendChild(mainWeatherDescription);
    mainWeatherDescriptionBox.appendChild(icon);
    lowerBox.appendChild(feelsLikeDiv);
    feelsLikeDiv.appendChild(feelsLikeText);
    feelsLikeDiv.appendChild(feelsLikeValue);
    lowerBox.appendChild(humidityDiv);
    humidityDiv.appendChild(humidityText);
    humidityDiv.appendChild(humidityValue);
    lowerBox.appendChild(pressureDiv);
    pressureDiv.appendChild(pressureText);
    pressureDiv.appendChild(pressureValue);
    lowerBox.appendChild(minTempDiv);
    minTempDiv.appendChild(minTempText);
    minTempDiv.appendChild(minTempValue);
    lowerBox.appendChild(maxTempDiv);
    maxTempDiv.appendChild(maxTempText);
    maxTempDiv.appendChild(maxTempValue);

    // naming
    feelsLikeText.textContent = 'Feels like';
    humidityText.textContent = 'Humidity';
    pressureText.textContent = 'Pressure';
    minTempText.textContent = 'Min Temp';
    maxTempText.textContent = 'Max Temp';

    // style
    weatherInfoBox.style.display = 'none';
    icon.src = '#';
};



/***/ }),

/***/ "./src/modules/eventHandler.js":
/*!*************************************!*\
  !*** ./src/modules/eventHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventHandler": () => (/* binding */ eventHandler)
/* harmony export */ });
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ "./src/modules/getWeather.js");
/* harmony import */ var _conversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversion */ "./src/modules/conversion.js");



function eventHandler(){
    // conversion
    const conversionButton = document.getElementById('conversion-button');
    conversionButton.addEventListener('click', _conversion__WEBPACK_IMPORTED_MODULE_1__.conversion);

    // search
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', _getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather);
    const inputField = document.getElementById('input-field');
    inputField.addEventListener('keypress', (e)=> {
        if(e.key === 'Enter') {
            (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)();
        }

        return;
    })
}



/***/ }),

/***/ "./src/modules/getWeather.js":
/*!***********************************!*\
  !*** ./src/modules/getWeather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _changeBgImageAccToWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeBgImageAccToWeather */ "./src/modules/changeBgImageAccToWeather.js");



async function getWeather() {
    // get elements
    const weatherInfoBox = document.getElementById('weather-info-box');
    const tempDiv = document.getElementById('temp-div');
    const locationDiv = document.getElementById('location-div');
    const mainWeather = document.getElementById('main-weather');
    const mainWeatherDescription = document.getElementById('main-weather-description');
    const feelsLikeValue = document.getElementById('feels-like-value');
    const humidityValue = document.getElementById('humidity-value');
    const pressureValue = document.getElementById('pressure-value');
    const minTempValue = document.getElementById('min-temp-value');
    const maxTempValue = document.getElementById('max-temp-value');
    const inputField = document.getElementById('input-field');
    const errorDiv = document.getElementById('error-div');
    const sadFaceDiv = document.getElementById('sad-face-div');
    const icon = document.getElementById('icon');
    const conversionButton = document.getElementById('conversion-button');
    
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&APPID=2d3609f8b5da6e2c0a646fefc69e2f62`,
        {
            mode:  'cors'
        });
        const weatherData = await response.json(); 

        // show box
        weatherInfoBox.style.display = 'grid';
        sadFaceDiv.style.display = 'none';
        errorDiv.style.display = 'hidden';
        errorDiv.textContent = "";

        // naming
        console.log(weatherData.main.temp);
        tempDiv.textContent = `${(weatherData.main.temp - 273.15).toFixed(1)}°`;
        locationDiv.textContent = `${weatherData.name} | ${weatherData.sys.country}`;
        mainWeather.textContent = `${weatherData.weather[0].main}`;
        mainWeatherDescription.textContent = `${weatherData.weather[0].description}`;
        icon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
        feelsLikeValue.textContent = `${(weatherData.main.feels_like - 273.15).toFixed(1)}°`;
        humidityValue.textContent = `${weatherData.main.humidity}%`;
        pressureValue.textContent = `${weatherData.main.pressure}mb`;
        minTempValue.textContent = `${(weatherData.main.temp_min - 273.15).toFixed(1)}°`;
        maxTempValue.textContent = `${(weatherData.main.temp_max - 273.15).toFixed(1)}°`;
        conversionButton.textContent = 'C°';
        (0,_changeBgImageAccToWeather__WEBPACK_IMPORTED_MODULE_1__.changeBgImageAccToWeather)();

    } catch(error) {
        console.log(error);
        errorDiv.style.display = 'flex';
        errorDiv.textContent = '× City not found. Please try again.';
        weatherInfoBox.style.display = 'none';
        sadFaceDiv.textContent = ':(';
        sadFaceDiv.style.display = 'flex';
    } 
};

 

/***/ }),

/***/ "./src/modules/searchBox.js":
/*!**********************************!*\
  !*** ./src/modules/searchBox.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputFunc": () => (/* binding */ inputFunc)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


const container = document.getElementById('container');

function inputFunc() {
    // search feild div
    const searchFeildDiv = document.createElement('div');

    // create elements
    const inputField = document.createElement('input');
    const searchButton = document.createElement('button');
    const errorDiv = document.createElement('div');
    const sadFaceDiv = document.createElement('div');

    // attribute
    searchFeildDiv.setAttribute('id', 'search-field-div');
    inputField.setAttribute('id', 'input-field');
    inputField.setAttribute('name', 'input-field');
    inputField.setAttribute('spellcheck', 'false');
    searchButton.setAttribute('id', 'search-button');
    sadFaceDiv.setAttribute('id', 'sad-face-div');

    // type
    inputField.setAttribute('type', 'search');
    errorDiv.setAttribute('id', 'error-div');

    // naming
    searchButton.textContent = 'SEARCH';
    inputField.setAttribute('placeholder', 'Enter City Here');
    errorDiv.style.display = 'none';
    sadFaceDiv.style.display = 'none';

    //append
    container.appendChild(searchFeildDiv);
    container.appendChild(sadFaceDiv);
    searchFeildDiv.appendChild(inputField);
    searchFeildDiv.appendChild(searchButton);
    searchFeildDiv.appendChild(errorDiv);

};



/***/ }),

/***/ "./src/images/ash.jpg":
/*!****************************!*\
  !*** ./src/images/ash.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "295db14a4ae22dbe158e.jpg";

/***/ }),

/***/ "./src/images/clear.jpg":
/*!******************************!*\
  !*** ./src/images/clear.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5c27ea51e7d3770887b.jpg";

/***/ }),

/***/ "./src/images/cloudy.jpg":
/*!*******************************!*\
  !*** ./src/images/cloudy.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97c828876b1ba63e3316.jpg";

/***/ }),

/***/ "./src/images/drizzle.jpg":
/*!********************************!*\
  !*** ./src/images/drizzle.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "025bb4b1440ad01bb2e9.jpg";

/***/ }),

/***/ "./src/images/dust.jpg":
/*!*****************************!*\
  !*** ./src/images/dust.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cf6e2d867b31d134083.jpg";

/***/ }),

/***/ "./src/images/haze.jpg":
/*!*****************************!*\
  !*** ./src/images/haze.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da8266bbeeda7d9ddd0f.jpg";

/***/ }),

/***/ "./src/images/home-page-image.jpg":
/*!****************************************!*\
  !*** ./src/images/home-page-image.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "abac95e58a1e48f8ab41.jpg";

/***/ }),

/***/ "./src/images/mist.jpg":
/*!*****************************!*\
  !*** ./src/images/mist.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68c3b14a7e8b3ec3ecee.jpg";

/***/ }),

/***/ "./src/images/rain.jpg":
/*!*****************************!*\
  !*** ./src/images/rain.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d07f510d280d88736d2.jpg";

/***/ }),

/***/ "./src/images/snow.jpg":
/*!*****************************!*\
  !*** ./src/images/snow.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6709e6c163f469262bb.jpg";

/***/ }),

/***/ "./src/images/squall.jpg":
/*!*******************************!*\
  !*** ./src/images/squall.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd74774eee7235132615.jpg";

/***/ }),

/***/ "./src/images/thunderstorm.jpg":
/*!*************************************!*\
  !*** ./src/images/thunderstorm.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f0f41f09d4849d63b5b.jpg";

/***/ }),

/***/ "./src/images/tornado.jpg":
/*!********************************!*\
  !*** ./src/images/tornado.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18c4ccad988129fc02b9.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_searchBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/searchBox */ "./src/modules/searchBox.js");
/* harmony import */ var _modules_createWeatherBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createWeatherBox */ "./src/modules/createWeatherBox.js");
/* harmony import */ var _modules_eventHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/eventHandler */ "./src/modules/eventHandler.js");




(function onLoad(){
    (0,_modules_searchBox__WEBPACK_IMPORTED_MODULE_0__.inputFunc)();
    (0,_modules_createWeatherBox__WEBPACK_IMPORTED_MODULE_1__.createWeatherBoxFunc)();
    (0,_modules_eventHandler__WEBPACK_IMPORTED_MODULE_2__.eventHandler)();
})();




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsZ0RBQU0sQ0FBQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxpREFBTyxDQUFDO0FBQ3hEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRnNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZ0JBQWdCO0FBQ3JELFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxhQUFhO0FBQ2xELFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJzQjs7QUFFdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9HMEM7QUFDQTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLG1EQUFVOztBQUV6RDtBQUNBO0FBQ0EsMkNBQTJDLG1EQUFVO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFlBQVksdURBQVU7QUFDdEI7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Cc0I7QUFDa0Q7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLGlCQUFpQjtBQUMxRztBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyw0Q0FBNEM7QUFDN0UscUNBQXFDLGtCQUFrQixJQUFJLHdCQUF3QjtBQUNuRixxQ0FBcUMsNEJBQTRCO0FBQ2pFLGdEQUFnRCxtQ0FBbUM7QUFDbkYsdURBQXVELDRCQUE0QjtBQUNuRix3Q0FBd0Msa0RBQWtEO0FBQzFGLHVDQUF1QywwQkFBMEI7QUFDakUsdUNBQXVDLDBCQUEwQjtBQUNqRSxzQ0FBc0MsZ0RBQWdEO0FBQ3RGLHNDQUFzQyxnREFBZ0Q7QUFDdEY7QUFDQSxRQUFRLHFGQUF5Qjs7QUFFakMsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7QUMzREE7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JCZ0Q7QUFDa0I7QUFDWjs7QUFFdEQ7QUFDQSxJQUFJLDZEQUFTO0FBQ2IsSUFBSSwrRUFBb0I7QUFDeEIsSUFBSSxtRUFBWTtBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvY2hhbmdlQmdJbWFnZUFjY1RvV2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2NvbnZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jcmVhdGVXZWF0aGVyQm94LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZ2V0V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3NlYXJjaEJveC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2hvbWUtcGFnZS1pbWFnZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLXdoaXRlOiAjZjVmNWY1O1xcclxcbiAgICAtLWJsYWNrOiAjMDAwMDAwO1xcclxcbiAgICAtLWdyYXk6ICNhN2E0YTQ7XFxyXFxuICAgIC0tYmVpZ2U6ICNmNWY1ZGM7XFxyXFxuICAgIC0tcmVkOiAjZmYwMDAwO1xcclxcbiAgICAtLWxpZ2h0Z3JheTogI2NmYzZjNjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWZpZWxkLWRpdntcXHJcXG4gICAgbWFyZ2luOiAyZW07XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwLjFlbTtcXHJcXG4gICAgcmlnaHQ6IDVlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0LWZpZWxke1xcclxcbiAgICBwYWRkaW5nOiAwLjRlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1idXR0b257XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHZhcigtLWdyYXkpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJ1dHRvbjpob3ZlcntcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbiN3ZWF0aGVyLWluZm8tYm94e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MGVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDNweCB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmVpZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4jdXBwZXItYm94e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZWlnZSk7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI3RlbXAtYm94e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVlbTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG4jdGVtcC1kaXYsXFxyXFxuI21haW4td2VhdGhlcntcXHJcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbiNjb252ZXJzaW9uLWJ1dHRvbntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwLjVlbTtcXHJcXG4gICAgdG9wOiAwLjVlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGhlaWdodDogMS4xZW07XFxyXFxuICAgIHdpZHRoOiAxLjFlbTtcXHJcXG4gICAgcGFkZGluZzogMS4xZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNjb252ZXJzaW9uLWJ1dHRvbjpob3ZlcntcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxyXFxufVxcclxcblxcclxcbiN3ZWF0aGVyLWRlc2NyaXB0aW9uLWJveHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41ZW1cXHJcXG59XFxyXFxuXFxyXFxuI21haW4td2VhdGhlci1kZXNjcmlwdGlvbntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNtYWluLXdlYXRoZXItZGVzY3JpcHRpb24tYm94e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2ljb257XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JheSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvd2VyLWJveHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgZ2FwOiAwLjNlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvd2VyLWJveCAqIGRpdntcXHJcXG4gICAgcGFkZGluZzogMC4yZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHR7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbiNlcnJvci1kaXZ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuICAgIGJvdHRvbTogLTAuM2VtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbiNzYWQtZmFjZS1kaXZ7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMseURBQW1EO0lBQ25ELHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxtQkFBbUI7RUFDckIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixvQ0FBb0M7QUFDeEM7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDViw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLXdoaXRlOiAjZjVmNWY1O1xcclxcbiAgICAtLWJsYWNrOiAjMDAwMDAwO1xcclxcbiAgICAtLWdyYXk6ICNhN2E0YTQ7XFxyXFxuICAgIC0tYmVpZ2U6ICNmNWY1ZGM7XFxyXFxuICAgIC0tcmVkOiAjZmYwMDAwO1xcclxcbiAgICAtLWxpZ2h0Z3JheTogI2NmYzZjNjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvaG9tZS1wYWdlLWltYWdlLmpwZyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtZmllbGQtZGl2e1xcclxcbiAgICBtYXJnaW46IDJlbTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDAuMWVtO1xcclxcbiAgICByaWdodDogNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXQtZmllbGR7XFxyXFxuICAgIHBhZGRpbmc6IDAuNGVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJ1dHRvbntcXHJcXG4gICAgcGFkZGluZzogMC41ZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggdmFyKC0tZ3JheSk7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYnV0dG9uOmhvdmVye1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI3dlYXRoZXItaW5mby1ib3h7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDQwZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggM3B4IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZWlnZSk7XFxyXFxufVxcclxcblxcclxcbiN1cHBlci1ib3h7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJlaWdlKTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jdGVtcC1ib3h7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNWVtO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbiN0ZW1wLWRpdixcXHJcXG4jbWFpbi13ZWF0aGVye1xcclxcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnZlcnNpb24tYnV0dG9ue1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDAuNWVtO1xcclxcbiAgICB0b3A6IDAuNWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxLjFlbTtcXHJcXG4gICAgd2lkdGg6IDEuMWVtO1xcclxcbiAgICBwYWRkaW5nOiAxLjFlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnZlcnNpb24tYnV0dG9uOmhvdmVye1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3dlYXRoZXItZGVzY3JpcHRpb24tYm94e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVlbVxcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi13ZWF0aGVyLWRlc2NyaXB0aW9ue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4td2VhdGhlci1kZXNjcmlwdGlvbi1ib3h7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaWNvbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmF5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbG93ZXItYm94e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBnYXA6IDAuM2VtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG93ZXItYm94ICogZGl2e1xcclxcbiAgICBwYWRkaW5nOiAwLjJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yLWRpdntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXHJcXG4gICAgYm90dG9tOiAtMC4zZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NhZC1mYWNlLWRpdntcXHJcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuaW1wb3J0IENsb3VkeSBmcm9tICcuLi9pbWFnZXMvY2xvdWR5LmpwZyc7XG5pbXBvcnQgSGF6ZSBmcm9tICcuLi9pbWFnZXMvaGF6ZS5qcGcnO1xuaW1wb3J0IENsZWFyIGZyb20gJy4uL2ltYWdlcy9jbGVhci5qcGcnO1xuaW1wb3J0IFJhaW4gZnJvbSAnLi4vaW1hZ2VzL3JhaW4uanBnJztcbmltcG9ydCBTbm93IGZyb20gJy4uL2ltYWdlcy9zbm93LmpwZyc7XG5pbXBvcnQgRHJpenpsZSBmcm9tICcuLi9pbWFnZXMvZHJpenpsZS5qcGcnO1xuaW1wb3J0IER1c3QgZnJvbSAnLi4vaW1hZ2VzL2R1c3QuanBnJztcbmltcG9ydCBUaHVuZGVyc3Rvcm0gZnJvbSAnLi4vaW1hZ2VzL3RodW5kZXJzdG9ybS5qcGcnO1xuaW1wb3J0IE1pc3QgZnJvbSAnLi4vaW1hZ2VzL21pc3QuanBnJztcbmltcG9ydCBTbW9rZSBmcm9tICcuLi9pbWFnZXMvZHVzdC5qcGcnO1xuaW1wb3J0IEFzaCBmcm9tICcuLi9pbWFnZXMvYXNoLmpwZyc7XG5pbXBvcnQgU3F1YWxsIGZyb20gJy4uL2ltYWdlcy9zcXVhbGwuanBnJztcbmltcG9ydCBUb3JuYWRvIGZyb20gJy4uL2ltYWdlcy90b3JuYWRvLmpwZyc7XG5cbi8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBiYWNrZ3JvdW5kIGltYWdlIGFjY29yZGluZyB0byB3ZWF0aGVyXG5mdW5jdGlvbiBjaGFuZ2VCZ0ltYWdlQWNjVG9XZWF0aGVyKCkge1xuICAgIC8vIGdldCBpZFxuICAgIGNvbnN0IG1haW5XZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4td2VhdGhlcicpO1xuICAgIGNvbnN0IHdlYXRoZXJUZXh0ID0gbWFpbldlYXRoZXIudGV4dENvbnRlbnQ7IFxuICAgIGlmICh3ZWF0aGVyVGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKCdjbG91ZHMnKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke0Nsb3VkeX0pYDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS5tYXRjaCgnaGF6ZScpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7SGF6ZX0pYDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS5tYXRjaCgnY2xlYXInKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke0NsZWFyfSlgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyVGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKCdyYWluJykpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtSYWlufSlgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyVGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKCdzbm93JykpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtTbm93fSlgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyVGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKCdkcml6emxlJykpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtEcml6emxlfSlgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyVGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKCdkdXN0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtEdXN0fSlgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyVGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKCd0aHVuZGVyc3Rvcm0nKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke1RodW5kZXJzdG9ybX0pYDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS5tYXRjaCgnbWlzdCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7TWlzdH0pYDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS5tYXRjaCgnc21va2UnKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke1Ntb2tlfSlgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyVGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKCdmb2cnKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke01pc3R9KWA7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkubWF0Y2goJ3NhbmQnKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke0R1c3R9KWA7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkubWF0Y2goJ2FzaCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7QXNofSlgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyVGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKCdzcXVhbGwnKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke1NxdWFsbH0pYDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS5tYXRjaCgndG9ybmFkbycpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7VG9ybmFkb30pYDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgY2hhbmdlQmdJbWFnZUFjY1RvV2VhdGhlciB9OyIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcblxuZnVuY3Rpb24gY29udmVyc2lvbigpe1xuICAgIC8vIGZ1bmN0aW9uIHRvIGNvbnZlcnQgYmV0d2VlbiBjZWxjaXVzIGFuZCBmYWhyZW5oZWl0XG4gICAgLy8gZ2V0IG5vZGVzXG4gICAgY29uc3QgY29udmVyc2lvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb252ZXJzaW9uLWJ1dHRvbicpO1xuICAgIGNvbnN0IGVsZW1lbnRzT2ZUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbXAnKTtcblxuICAgIGlmIChjb252ZXJzaW9uQnV0dG9uLnRleHRDb250ZW50ID09PSAnQ8KwJykge1xuICAgICAgICBlbGVtZW50c09mVGVtcC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkVmFsdWUgPSB0ZXh0Lm1hdGNoKC9cXGQrXFwuXFxkKy8pLnRvU3RyaW5nKCkucmVwbGFjZSgvLC9nLCAnJyk7XG4gICAgICAgICAgICBjb25zdCBmYWhyZW5oZWl0VmFsdWUgPSAoKGZpbHRlcmVkVmFsdWUgKiAoOS81KSkgKyAzMikudG9GaXhlZCgxKTtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtmYWhyZW5oZWl0VmFsdWV9wrBgO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnZlcnNpb25CdXR0b24udGV4dENvbnRlbnQgPSAnRsKwJztcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY29udmVyc2lvbkJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ0bCsCcpIHtcbiAgICAgICAgZWxlbWVudHNPZlRlbXAuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJlZFZhbHVlID0gdGV4dC5tYXRjaCgvXFxkK1xcLlxcZCsvKS50b1N0cmluZygpLnJlcGxhY2UoLywvZywgJycpO1xuICAgICAgICAgICAgY29uc3QgY2VsY2l1c1ZhbHVlID0gKChmaWx0ZXJlZFZhbHVlIC0gMzIpICogKDUvOSkpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7Y2VsY2l1c1ZhbHVlfcKwYDtcbiAgICAgICAgfSlcblxuICAgICAgICBjb252ZXJzaW9uQnV0dG9uLnRleHRDb250ZW50ID0gJ0PCsCc7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGNvbnZlcnNpb24gfTsiLCJpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcblxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlckJveEZ1bmMoKSB7XG4gICAgLy8gY3JlYXRlIGRpc3BsYXkgYm94IGZvciB3ZWF0aGVyXG4gICAgY29uc3Qgd2VhdGhlckluZm9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB1cHBlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxvd2VyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBtYWluV2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1haW5XZWF0aGVyRGVzY3JpcHRpb25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluV2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZmVlbHNMaWtlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZlZWxzTGlrZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZmVlbHNMaWtlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaHVtaWRpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaHVtaWRpdHlWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGh1bWlkaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJlc3N1cmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcmVzc3VyZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcmVzc3VyZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWluVGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1pblRlbXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWluVGVtcFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWF4VGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1heFRlbXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWF4VGVtcFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udmVyc2lvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgLy9uYW1lXG4gICAgd2VhdGhlckluZm9Cb3guc2V0QXR0cmlidXRlKCdpZCcsICd3ZWF0aGVyLWluZm8tYm94Jyk7XG4gICAgdXBwZXJCb3guc2V0QXR0cmlidXRlKCdpZCcsICd1cHBlci1ib3gnKTtcbiAgICBsb3dlckJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvd2VyLWJveCcpO1xuICAgIHRlbXBCb3guc2V0QXR0cmlidXRlKCdpZCcsICd0ZW1wLWJveCcpO1xuICAgIHRlbXBEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0ZW1wLWRpdicpO1xuICAgIHRlbXBEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZW1wJyk7XG4gICAgbG9jYXRpb25EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdsb2NhdGlvbi1kaXYnKTtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb25Cb3guc2V0QXR0cmlidXRlKCdpZCcsICd3ZWF0aGVyLWRlc2NyaXB0aW9uLWJveCcpO1xuICAgIG1haW5XZWF0aGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbi13ZWF0aGVyJyk7XG4gICAgbWFpbldlYXRoZXJEZXNjcmlwdGlvbkJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4td2VhdGhlci1kZXNjcmlwdGlvbi1ib3gnKTtcbiAgICBtYWluV2VhdGhlckRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbi13ZWF0aGVyLWRlc2NyaXB0aW9uJyk7XG4gICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ljb24nKTtcbiAgICBmZWVsc0xpa2VEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdmZWVscy1saWtlLWRpdicpO1xuICAgIGZlZWxzTGlrZVRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdmZWVscy1saWtlLXRleHQnKTtcbiAgICBmZWVsc0xpa2VWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZlZWxzLWxpa2UtdmFsdWUnKTtcbiAgICBmZWVsc0xpa2VUZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dCcpO1xuICAgIGZlZWxzTGlrZVZhbHVlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGVtcCcpO1xuICAgIGh1bWlkaXR5RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaHVtaWRpdHktZGl2Jyk7XG4gICAgaHVtaWRpdHlUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaHVtaWRpdHktdGV4dCcpO1xuICAgIGh1bWlkaXR5VGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQnKTtcbiAgICBodW1pZGl0eVZhbHVlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaHVtaWRpdHktdmFsdWUnKTtcbiAgICBwcmVzc3VyZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXNzdXJlLWRpdicpO1xuICAgIHByZXNzdXJlVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXNzdXJlLXRleHQnKTtcbiAgICBwcmVzc3VyZVRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0Jyk7XG4gICAgcHJlc3N1cmVWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXNzdXJlLXZhbHVlJyk7XG4gICAgbWluVGVtcERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21pbi10ZW1wLWRpdicpO1xuICAgIG1pblRlbXBUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWluLXRlbXAtdGV4dCcpO1xuICAgIG1pblRlbXBUZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dCcpO1xuICAgIG1pblRlbXBWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21pbi10ZW1wLXZhbHVlJyk7XG4gICAgbWF4VGVtcERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21heC10ZW1wLWRpdicpO1xuICAgIG1heFRlbXBUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWF4LXRlbXAtdGV4dCcpO1xuICAgIG1heFRlbXBUZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dCcpO1xuICAgIG1heFRlbXBWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21heC10ZW1wLXZhbHVlJyk7XG4gICAgbWluVGVtcFZhbHVlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGVtcCcpO1xuICAgIG1heFRlbXBWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RlbXAnKTtcbiAgICBjb252ZXJzaW9uQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udmVyc2lvbi1idXR0b24nKTtcblxuICAgIC8vYXBwZW5kIHRvIGNvbnRhaW5lclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySW5mb0JveCk7XG4gICAgd2VhdGhlckluZm9Cb3guYXBwZW5kQ2hpbGQodXBwZXJCb3gpO1xuICAgIHdlYXRoZXJJbmZvQm94LmFwcGVuZENoaWxkKGxvd2VyQm94KTtcbiAgICB1cHBlckJveC5hcHBlbmRDaGlsZCh0ZW1wQm94KTtcbiAgICB0ZW1wQm94LmFwcGVuZENoaWxkKGNvbnZlcnNpb25CdXR0b24pO1xuICAgIHRlbXBCb3guYXBwZW5kQ2hpbGQodGVtcERpdik7XG4gICAgdGVtcEJveC5hcHBlbmRDaGlsZChsb2NhdGlvbkRpdik7XG4gICAgdXBwZXJCb3guYXBwZW5kQ2hpbGQod2VhdGhlckRlc2NyaXB0aW9uQm94KTtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb25Cb3guYXBwZW5kQ2hpbGQobWFpbldlYXRoZXIpO1xuICAgIHdlYXRoZXJEZXNjcmlwdGlvbkJveC5hcHBlbmRDaGlsZChtYWluV2VhdGhlckRlc2NyaXB0aW9uQm94KTtcbiAgICBtYWluV2VhdGhlckRlc2NyaXB0aW9uQm94LmFwcGVuZENoaWxkKG1haW5XZWF0aGVyRGVzY3JpcHRpb24pO1xuICAgIG1haW5XZWF0aGVyRGVzY3JpcHRpb25Cb3guYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgbG93ZXJCb3guYXBwZW5kQ2hpbGQoZmVlbHNMaWtlRGl2KTtcbiAgICBmZWVsc0xpa2VEaXYuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlVGV4dCk7XG4gICAgZmVlbHNMaWtlRGl2LmFwcGVuZENoaWxkKGZlZWxzTGlrZVZhbHVlKTtcbiAgICBsb3dlckJveC5hcHBlbmRDaGlsZChodW1pZGl0eURpdik7XG4gICAgaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlUZXh0KTtcbiAgICBodW1pZGl0eURpdi5hcHBlbmRDaGlsZChodW1pZGl0eVZhbHVlKTtcbiAgICBsb3dlckJveC5hcHBlbmRDaGlsZChwcmVzc3VyZURpdik7XG4gICAgcHJlc3N1cmVEaXYuYXBwZW5kQ2hpbGQocHJlc3N1cmVUZXh0KTtcbiAgICBwcmVzc3VyZURpdi5hcHBlbmRDaGlsZChwcmVzc3VyZVZhbHVlKTtcbiAgICBsb3dlckJveC5hcHBlbmRDaGlsZChtaW5UZW1wRGl2KTtcbiAgICBtaW5UZW1wRGl2LmFwcGVuZENoaWxkKG1pblRlbXBUZXh0KTtcbiAgICBtaW5UZW1wRGl2LmFwcGVuZENoaWxkKG1pblRlbXBWYWx1ZSk7XG4gICAgbG93ZXJCb3guYXBwZW5kQ2hpbGQobWF4VGVtcERpdik7XG4gICAgbWF4VGVtcERpdi5hcHBlbmRDaGlsZChtYXhUZW1wVGV4dCk7XG4gICAgbWF4VGVtcERpdi5hcHBlbmRDaGlsZChtYXhUZW1wVmFsdWUpO1xuXG4gICAgLy8gbmFtaW5nXG4gICAgZmVlbHNMaWtlVGV4dC50ZXh0Q29udGVudCA9ICdGZWVscyBsaWtlJztcbiAgICBodW1pZGl0eVRleHQudGV4dENvbnRlbnQgPSAnSHVtaWRpdHknO1xuICAgIHByZXNzdXJlVGV4dC50ZXh0Q29udGVudCA9ICdQcmVzc3VyZSc7XG4gICAgbWluVGVtcFRleHQudGV4dENvbnRlbnQgPSAnTWluIFRlbXAnO1xuICAgIG1heFRlbXBUZXh0LnRleHRDb250ZW50ID0gJ01heCBUZW1wJztcblxuICAgIC8vIHN0eWxlXG4gICAgd2VhdGhlckluZm9Cb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpY29uLnNyYyA9ICcjJztcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVdlYXRoZXJCb3hGdW5jIH07IiwiaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gJy4vZ2V0V2VhdGhlcic7XG5pbXBvcnQgeyBjb252ZXJzaW9uIH0gZnJvbSAnLi9jb252ZXJzaW9uJztcblxuZnVuY3Rpb24gZXZlbnRIYW5kbGVyKCl7XG4gICAgLy8gY29udmVyc2lvblxuICAgIGNvbnN0IGNvbnZlcnNpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udmVyc2lvbi1idXR0b24nKTtcbiAgICBjb252ZXJzaW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udmVyc2lvbik7XG5cbiAgICAvLyBzZWFyY2hcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xuICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldFdlYXRoZXIpO1xuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZmllbGQnKTtcbiAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpPT4ge1xuICAgICAgICBpZihlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgZ2V0V2VhdGhlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7IGV2ZW50SGFuZGxlciB9OyIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNoYW5nZUJnSW1hZ2VBY2NUb1dlYXRoZXIgfSBmcm9tICcuL2NoYW5nZUJnSW1hZ2VBY2NUb1dlYXRoZXInO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xuICAgIC8vIGdldCBlbGVtZW50c1xuICAgIGNvbnN0IHdlYXRoZXJJbmZvQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXItaW5mby1ib3gnKTtcbiAgICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAtZGl2Jyk7XG4gICAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24tZGl2Jyk7XG4gICAgY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi13ZWF0aGVyJyk7XG4gICAgY29uc3QgbWFpbldlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXdlYXRoZXItZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBmZWVsc0xpa2VWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVscy1saWtlLXZhbHVlJyk7XG4gICAgY29uc3QgaHVtaWRpdHlWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eS12YWx1ZScpO1xuICAgIGNvbnN0IHByZXNzdXJlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc3N1cmUtdmFsdWUnKTtcbiAgICBjb25zdCBtaW5UZW1wVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluLXRlbXAtdmFsdWUnKTtcbiAgICBjb25zdCBtYXhUZW1wVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4LXRlbXAtdmFsdWUnKTtcbiAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZpZWxkJyk7XG4gICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItZGl2Jyk7XG4gICAgY29uc3Qgc2FkRmFjZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYWQtZmFjZS1kaXYnKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb24nKTtcbiAgICBjb25zdCBjb252ZXJzaW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnZlcnNpb24tYnV0dG9uJyk7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7aW5wdXRGaWVsZC52YWx1ZX0mQVBQSUQ9MmQzNjA5ZjhiNWRhNmUyYzBhNjQ2ZmVmYzY5ZTJmNjJgLFxuICAgICAgICB7XG4gICAgICAgICAgICBtb2RlOiAgJ2NvcnMnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgXG5cbiAgICAgICAgLy8gc2hvdyBib3hcbiAgICAgICAgd2VhdGhlckluZm9Cb3guc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICAgICAgc2FkRmFjZURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBlcnJvckRpdi5zdHlsZS5kaXNwbGF5ID0gJ2hpZGRlbic7XG4gICAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICAvLyBuYW1pbmdcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEubWFpbi50ZW1wKTtcbiAgICAgICAgdGVtcERpdi50ZXh0Q29udGVudCA9IGAkeyh3ZWF0aGVyRGF0YS5tYWluLnRlbXAgLSAyNzMuMTUpLnRvRml4ZWQoMSl9wrBgO1xuICAgICAgICBsb2NhdGlvbkRpdi50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLm5hbWV9IHwgJHt3ZWF0aGVyRGF0YS5zeXMuY291bnRyeX1gO1xuICAgICAgICBtYWluV2VhdGhlci50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLndlYXRoZXJbMF0ubWFpbn1gO1xuICAgICAgICBtYWluV2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gO1xuICAgICAgICBpY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLndlYXRoZXJbMF0uaWNvbn0ucG5nYDtcbiAgICAgICAgZmVlbHNMaWtlVmFsdWUudGV4dENvbnRlbnQgPSBgJHsod2VhdGhlckRhdGEubWFpbi5mZWVsc19saWtlIC0gMjczLjE1KS50b0ZpeGVkKDEpfcKwYDtcbiAgICAgICAgaHVtaWRpdHlWYWx1ZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHl9JWA7XG4gICAgICAgIHByZXNzdXJlVmFsdWUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5tYWluLnByZXNzdXJlfW1iYDtcbiAgICAgICAgbWluVGVtcFZhbHVlLnRleHRDb250ZW50ID0gYCR7KHdlYXRoZXJEYXRhLm1haW4udGVtcF9taW4gLSAyNzMuMTUpLnRvRml4ZWQoMSl9wrBgO1xuICAgICAgICBtYXhUZW1wVmFsdWUudGV4dENvbnRlbnQgPSBgJHsod2VhdGhlckRhdGEubWFpbi50ZW1wX21heCAtIDI3My4xNSkudG9GaXhlZCgxKX3CsGA7XG4gICAgICAgIGNvbnZlcnNpb25CdXR0b24udGV4dENvbnRlbnQgPSAnQ8KwJztcbiAgICAgICAgY2hhbmdlQmdJbWFnZUFjY1RvV2VhdGhlcigpO1xuXG4gICAgfSBjYXRjaChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIGVycm9yRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gJ8OXIENpdHkgbm90IGZvdW5kLiBQbGVhc2UgdHJ5IGFnYWluLic7XG4gICAgICAgIHdlYXRoZXJJbmZvQm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHNhZEZhY2VEaXYudGV4dENvbnRlbnQgPSAnOignO1xuICAgICAgICBzYWRGYWNlRGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfSBcbn07XG5cbmV4cG9ydCB7IGdldFdlYXRoZXIgfTsgIiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG5cbmZ1bmN0aW9uIGlucHV0RnVuYygpIHtcbiAgICAvLyBzZWFyY2ggZmVpbGQgZGl2XG4gICAgY29uc3Qgc2VhcmNoRmVpbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vIGNyZWF0ZSBlbGVtZW50c1xuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2FkRmFjZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy8gYXR0cmlidXRlXG4gICAgc2VhcmNoRmVpbGREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdzZWFyY2gtZmllbGQtZGl2Jyk7XG4gICAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2lucHV0LWZpZWxkJyk7XG4gICAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnaW5wdXQtZmllbGQnKTtcbiAgICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZSgnc3BlbGxjaGVjaycsICdmYWxzZScpO1xuICAgIHNlYXJjaEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlYXJjaC1idXR0b24nKTtcbiAgICBzYWRGYWNlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2FkLWZhY2UtZGl2Jyk7XG5cbiAgICAvLyB0eXBlXG4gICAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc2VhcmNoJyk7XG4gICAgZXJyb3JEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdlcnJvci1kaXYnKTtcblxuICAgIC8vIG5hbWluZ1xuICAgIHNlYXJjaEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTRUFSQ0gnO1xuICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdFbnRlciBDaXR5IEhlcmUnKTtcbiAgICBlcnJvckRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHNhZEZhY2VEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIC8vYXBwZW5kXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlYXJjaEZlaWxkRGl2KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2FkRmFjZURpdik7XG4gICAgc2VhcmNoRmVpbGREaXYuYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG4gICAgc2VhcmNoRmVpbGREaXYuYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKTtcbiAgICBzZWFyY2hGZWlsZERpdi5hcHBlbmRDaGlsZChlcnJvckRpdik7XG5cbn07XG5cbmV4cG9ydCB7IGlucHV0RnVuYyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7IGlucHV0RnVuYyB9IGZyb20gJy4vbW9kdWxlcy9zZWFyY2hCb3gnO1xuaW1wb3J0IHsgY3JlYXRlV2VhdGhlckJveEZ1bmMgfSBmcm9tICcuL21vZHVsZXMvY3JlYXRlV2VhdGhlckJveCc7XG5pbXBvcnQgeyBldmVudEhhbmRsZXIgfSBmcm9tICcuL21vZHVsZXMvZXZlbnRIYW5kbGVyJztcblxuKGZ1bmN0aW9uIG9uTG9hZCgpe1xuICAgIGlucHV0RnVuYygpO1xuICAgIGNyZWF0ZVdlYXRoZXJCb3hGdW5jKCk7XG4gICAgZXZlbnRIYW5kbGVyKCk7XG59KSgpO1xuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9