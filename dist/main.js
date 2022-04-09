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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsZ0RBQU0sQ0FBQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxpREFBTyxDQUFDO0FBQ3hEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRnNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsZ0JBQWdCO0FBQ3JELFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxhQUFhO0FBQ2xELFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJzQjs7QUFFdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9HMEM7QUFDQTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLG1EQUFVOztBQUV6RDtBQUNBO0FBQ0EsMkNBQTJDLG1EQUFVO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLFlBQVksdURBQVU7QUFDdEI7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Cc0I7QUFDa0Q7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGLGlCQUFpQjtBQUMxRztBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsNENBQTRDO0FBQzdFLHFDQUFxQyxrQkFBa0IsSUFBSSx3QkFBd0I7QUFDbkYscUNBQXFDLDRCQUE0QjtBQUNqRSxnREFBZ0QsbUNBQW1DO0FBQ25GLHVEQUF1RCw0QkFBNEI7QUFDbkYsd0NBQXdDLGtEQUFrRDtBQUMxRix1Q0FBdUMsMEJBQTBCO0FBQ2pFLHVDQUF1QywwQkFBMEI7QUFDakUsc0NBQXNDLGdEQUFnRDtBQUN0RixzQ0FBc0MsZ0RBQWdEO0FBQ3RGO0FBQ0EsUUFBUSxxRkFBeUI7O0FBRWpDLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7O0FDMURBOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQmdEO0FBQ2tCO0FBQ1o7O0FBRXREO0FBQ0EsSUFBSSw2REFBUztBQUNiLElBQUksK0VBQW9CO0FBQ3hCLElBQUksbUVBQVk7QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2NoYW5nZUJnSW1hZ2VBY2NUb1dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jb252ZXJzaW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvY3JlYXRlV2VhdGhlckJveC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2V2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9zZWFyY2hCb3guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9ob21lLXBhZ2UtaW1hZ2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKntcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdHtcXHJcXG4gICAgLS13aGl0ZTogI2Y1ZjVmNTtcXHJcXG4gICAgLS1ibGFjazogIzAwMDAwMDtcXHJcXG4gICAgLS1ncmF5OiAjYTdhNGE0O1xcclxcbiAgICAtLWJlaWdlOiAjZjVmNWRjO1xcclxcbiAgICAtLXJlZDogI2ZmMDAwMDtcXHJcXG4gICAgLS1saWdodGdyYXk6ICNjZmM2YzY7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1maWVsZC1kaXZ7XFxyXFxuICAgIG1hcmdpbjogMmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMC4xZW07XFxyXFxuICAgIHJpZ2h0OiA1ZW07XFxyXFxufVxcclxcblxcclxcbiNpbnB1dC1maWVsZHtcXHJcXG4gICAgcGFkZGluZzogMC40ZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYnV0dG9ue1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDFlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCB2YXIoLS1ncmF5KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1idXR0b246aG92ZXJ7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jd2VhdGhlci1pbmZvLWJveHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogNDBlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggdmFyKC0td2hpdGUpO1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJlaWdlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3VwcGVyLWJveHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmVpZ2UpO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiN0ZW1wLWJveHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41ZW07XFxyXFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuI3RlbXAtZGl2LFxcclxcbiNtYWluLXdlYXRoZXJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udmVyc2lvbi1idXR0b257XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMC41ZW07XFxyXFxuICAgIHRvcDogMC41ZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDEuMWVtO1xcclxcbiAgICB3aWR0aDogMS4xZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuMWVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udmVyc2lvbi1idXR0b246aG92ZXJ7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4jd2VhdGhlci1kZXNjcmlwdGlvbi1ib3h7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNWVtXFxyXFxufVxcclxcblxcclxcbiNtYWluLXdlYXRoZXItZGVzY3JpcHRpb257XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi13ZWF0aGVyLWRlc2NyaXB0aW9uLWJveHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbiNpY29ue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyYXkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbiNsb3dlci1ib3h7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGdhcDogMC4zZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNsb3dlci1ib3ggKiBkaXZ7XFxyXFxuICAgIHBhZGRpbmc6IDAuMmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXh0e1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3ItZGl2e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbiAgICBib3R0b206IC0wLjNlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2FkLWZhY2UtZGl2e1xcclxcbiAgICBmb250LXNpemU6IDhyZW07XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHlEQUFtRDtJQUNuRCxzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0VBQ3JCLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysb0NBQW9DO0FBQ3hDOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdHtcXHJcXG4gICAgLS13aGl0ZTogI2Y1ZjVmNTtcXHJcXG4gICAgLS1ibGFjazogIzAwMDAwMDtcXHJcXG4gICAgLS1ncmF5OiAjYTdhNGE0O1xcclxcbiAgICAtLWJlaWdlOiAjZjVmNWRjO1xcclxcbiAgICAtLXJlZDogI2ZmMDAwMDtcXHJcXG4gICAgLS1saWdodGdyYXk6ICNjZmM2YzY7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2hvbWUtcGFnZS1pbWFnZS5qcGcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWZpZWxkLWRpdntcXHJcXG4gICAgbWFyZ2luOiAyZW07XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwLjFlbTtcXHJcXG4gICAgcmlnaHQ6IDVlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0LWZpZWxke1xcclxcbiAgICBwYWRkaW5nOiAwLjRlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1idXR0b257XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHZhcigtLWdyYXkpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJ1dHRvbjpob3ZlcntcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbiN3ZWF0aGVyLWluZm8tYm94e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MGVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDNweCB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmVpZ2UpO1xcclxcbn1cXHJcXG5cXHJcXG4jdXBwZXItYm94e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZWlnZSk7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI3RlbXAtYm94e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVlbTtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG4jdGVtcC1kaXYsXFxyXFxuI21haW4td2VhdGhlcntcXHJcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbiNjb252ZXJzaW9uLWJ1dHRvbntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwLjVlbTtcXHJcXG4gICAgdG9wOiAwLjVlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGhlaWdodDogMS4xZW07XFxyXFxuICAgIHdpZHRoOiAxLjFlbTtcXHJcXG4gICAgcGFkZGluZzogMS4xZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNjb252ZXJzaW9uLWJ1dHRvbjpob3ZlcntcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxyXFxufVxcclxcblxcclxcbiN3ZWF0aGVyLWRlc2NyaXB0aW9uLWJveHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41ZW1cXHJcXG59XFxyXFxuXFxyXFxuI21haW4td2VhdGhlci1kZXNjcmlwdGlvbntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNtYWluLXdlYXRoZXItZGVzY3JpcHRpb24tYm94e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2ljb257XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Z3JheSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvd2VyLWJveHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgZ2FwOiAwLjNlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvd2VyLWJveCAqIGRpdntcXHJcXG4gICAgcGFkZGluZzogMC4yZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHR7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbiNlcnJvci1kaXZ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuICAgIGJvdHRvbTogLTAuM2VtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxufVxcclxcblxcclxcbiNzYWQtZmFjZS1kaXZ7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcbmltcG9ydCBDbG91ZHkgZnJvbSAnLi4vaW1hZ2VzL2Nsb3VkeS5qcGcnO1xuaW1wb3J0IEhhemUgZnJvbSAnLi4vaW1hZ2VzL2hhemUuanBnJztcbmltcG9ydCBDbGVhciBmcm9tICcuLi9pbWFnZXMvY2xlYXIuanBnJztcbmltcG9ydCBSYWluIGZyb20gJy4uL2ltYWdlcy9yYWluLmpwZyc7XG5pbXBvcnQgU25vdyBmcm9tICcuLi9pbWFnZXMvc25vdy5qcGcnO1xuaW1wb3J0IERyaXp6bGUgZnJvbSAnLi4vaW1hZ2VzL2RyaXp6bGUuanBnJztcbmltcG9ydCBEdXN0IGZyb20gJy4uL2ltYWdlcy9kdXN0LmpwZyc7XG5pbXBvcnQgVGh1bmRlcnN0b3JtIGZyb20gJy4uL2ltYWdlcy90aHVuZGVyc3Rvcm0uanBnJztcbmltcG9ydCBNaXN0IGZyb20gJy4uL2ltYWdlcy9taXN0LmpwZyc7XG5pbXBvcnQgU21va2UgZnJvbSAnLi4vaW1hZ2VzL2R1c3QuanBnJztcbmltcG9ydCBBc2ggZnJvbSAnLi4vaW1hZ2VzL2FzaC5qcGcnO1xuaW1wb3J0IFNxdWFsbCBmcm9tICcuLi9pbWFnZXMvc3F1YWxsLmpwZyc7XG5pbXBvcnQgVG9ybmFkbyBmcm9tICcuLi9pbWFnZXMvdG9ybmFkby5qcGcnO1xuXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgYmFja2dyb3VuZCBpbWFnZSBhY2NvcmRpbmcgdG8gd2VhdGhlclxuZnVuY3Rpb24gY2hhbmdlQmdJbWFnZUFjY1RvV2VhdGhlcigpIHtcbiAgICAvLyBnZXQgaWRcbiAgICBjb25zdCBtYWluV2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXdlYXRoZXInKTtcbiAgICBjb25zdCB3ZWF0aGVyVGV4dCA9IG1haW5XZWF0aGVyLnRleHRDb250ZW50OyBcbiAgICBpZiAod2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS5tYXRjaCgnY2xvdWRzJykpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtDbG91ZHl9KWA7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkubWF0Y2goJ2hhemUnKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke0hhemV9KWA7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkubWF0Y2goJ2NsZWFyJykpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtDbGVhcn0pYDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS5tYXRjaCgncmFpbicpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7UmFpbn0pYDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS5tYXRjaCgnc25vdycpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7U25vd30pYDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS5tYXRjaCgnZHJpenpsZScpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7RHJpenpsZX0pYDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS5tYXRjaCgnZHVzdCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7RHVzdH0pYDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS5tYXRjaCgndGh1bmRlcnN0b3JtJykpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtUaHVuZGVyc3Rvcm19KWA7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkubWF0Y2goJ21pc3QnKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke01pc3R9KWA7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkubWF0Y2goJ3Ntb2tlJykpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtTbW9rZX0pYDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS5tYXRjaCgnZm9nJykpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtNaXN0fSlgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyVGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKCdzYW5kJykpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtEdXN0fSlgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyVGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKCdhc2gnKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke0FzaH0pYDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS5tYXRjaCgnc3F1YWxsJykpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtTcXVhbGx9KWA7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkubWF0Y2goJ3Rvcm5hZG8nKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke1Rvcm5hZG99KWA7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGNoYW5nZUJnSW1hZ2VBY2NUb1dlYXRoZXIgfTsiLCJpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIGNvbnZlcnNpb24oKXtcbiAgICAvLyBmdW5jdGlvbiB0byBjb252ZXJ0IGJldHdlZW4gY2VsY2l1cyBhbmQgZmFocmVuaGVpdFxuICAgIC8vIGdldCBub2Rlc1xuICAgIGNvbnN0IGNvbnZlcnNpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udmVyc2lvbi1idXR0b24nKTtcbiAgICBjb25zdCBlbGVtZW50c09mVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wJyk7XG5cbiAgICBpZiAoY29udmVyc2lvbkJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ0PCsCcpIHtcbiAgICAgICAgZWxlbWVudHNPZlRlbXAuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJlZFZhbHVlID0gdGV4dC5tYXRjaCgvXFxkK1xcLlxcZCsvKS50b1N0cmluZygpLnJlcGxhY2UoLywvZywgJycpO1xuICAgICAgICAgICAgY29uc3QgZmFocmVuaGVpdFZhbHVlID0gKChmaWx0ZXJlZFZhbHVlICogKDkvNSkpICsgMzIpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZmFocmVuaGVpdFZhbHVlfcKwYDtcbiAgICAgICAgfSlcblxuICAgICAgICBjb252ZXJzaW9uQnV0dG9uLnRleHRDb250ZW50ID0gJ0bCsCc7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNvbnZlcnNpb25CdXR0b24udGV4dENvbnRlbnQgPT09ICdGwrAnKSB7XG4gICAgICAgIGVsZW1lbnRzT2ZUZW1wLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRWYWx1ZSA9IHRleHQubWF0Y2goL1xcZCtcXC5cXGQrLykudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcnKTtcbiAgICAgICAgICAgIGNvbnN0IGNlbGNpdXNWYWx1ZSA9ICgoZmlsdGVyZWRWYWx1ZSAtIDMyKSAqICg1LzkpKS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGAke2NlbGNpdXNWYWx1ZX3CsGA7XG4gICAgICAgIH0pXG5cbiAgICAgICAgY29udmVyc2lvbkJ1dHRvbi50ZXh0Q29udGVudCA9ICdDwrAnO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5leHBvcnQgeyBjb252ZXJzaW9uIH07IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJCb3hGdW5jKCkge1xuICAgIC8vIGNyZWF0ZSBkaXNwbGF5IGJveCBmb3Igd2VhdGhlclxuICAgIGNvbnN0IHdlYXRoZXJJbmZvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdXBwZXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb3dlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRlbXBCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluV2VhdGhlckRlc2NyaXB0aW9uQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbldlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZlZWxzTGlrZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBmZWVsc0xpa2VWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZlZWxzTGlrZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGh1bWlkaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGh1bWlkaXR5VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBodW1pZGl0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByZXNzdXJlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJlc3N1cmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJlc3N1cmVWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1pblRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtaW5UZW1wVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1pblRlbXBWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1heFRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYXhUZW1wVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1heFRlbXBWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbnZlcnNpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIC8vbmFtZVxuICAgIHdlYXRoZXJJbmZvQm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VhdGhlci1pbmZvLWJveCcpO1xuICAgIHVwcGVyQm94LnNldEF0dHJpYnV0ZSgnaWQnLCAndXBwZXItYm94Jyk7XG4gICAgbG93ZXJCb3guc2V0QXR0cmlidXRlKCdpZCcsICdsb3dlci1ib3gnKTtcbiAgICB0ZW1wQm94LnNldEF0dHJpYnV0ZSgnaWQnLCAndGVtcC1ib3gnKTtcbiAgICB0ZW1wRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAndGVtcC1kaXYnKTtcbiAgICB0ZW1wRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGVtcCcpO1xuICAgIGxvY2F0aW9uRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9jYXRpb24tZGl2Jyk7XG4gICAgd2VhdGhlckRlc2NyaXB0aW9uQm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnd2VhdGhlci1kZXNjcmlwdGlvbi1ib3gnKTtcbiAgICBtYWluV2VhdGhlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4td2VhdGhlcicpO1xuICAgIG1haW5XZWF0aGVyRGVzY3JpcHRpb25Cb3guc2V0QXR0cmlidXRlKCdpZCcsICdtYWluLXdlYXRoZXItZGVzY3JpcHRpb24tYm94Jyk7XG4gICAgbWFpbldlYXRoZXJEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4td2VhdGhlci1kZXNjcmlwdGlvbicpO1xuICAgIGljb24uc2V0QXR0cmlidXRlKCdpZCcsICdpY29uJyk7XG4gICAgZmVlbHNMaWtlRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZmVlbHMtbGlrZS1kaXYnKTtcbiAgICBmZWVsc0xpa2VUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZmVlbHMtbGlrZS10ZXh0Jyk7XG4gICAgZmVlbHNMaWtlVmFsdWUuc2V0QXR0cmlidXRlKCdpZCcsICdmZWVscy1saWtlLXZhbHVlJyk7XG4gICAgZmVlbHNMaWtlVGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQnKTtcbiAgICBmZWVsc0xpa2VWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RlbXAnKTtcbiAgICBodW1pZGl0eURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2h1bWlkaXR5LWRpdicpO1xuICAgIGh1bWlkaXR5VGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2h1bWlkaXR5LXRleHQnKTtcbiAgICBodW1pZGl0eVRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0Jyk7XG4gICAgaHVtaWRpdHlWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2h1bWlkaXR5LXZhbHVlJyk7XG4gICAgcHJlc3N1cmVEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdwcmVzc3VyZS1kaXYnKTtcbiAgICBwcmVzc3VyZVRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdwcmVzc3VyZS10ZXh0Jyk7XG4gICAgcHJlc3N1cmVUZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dCcpO1xuICAgIHByZXNzdXJlVmFsdWUuc2V0QXR0cmlidXRlKCdpZCcsICdwcmVzc3VyZS12YWx1ZScpO1xuICAgIG1pblRlbXBEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtaW4tdGVtcC1kaXYnKTtcbiAgICBtaW5UZW1wVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21pbi10ZW1wLXRleHQnKTtcbiAgICBtaW5UZW1wVGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQnKTtcbiAgICBtaW5UZW1wVmFsdWUuc2V0QXR0cmlidXRlKCdpZCcsICdtaW4tdGVtcC12YWx1ZScpO1xuICAgIG1heFRlbXBEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtYXgtdGVtcC1kaXYnKTtcbiAgICBtYXhUZW1wVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21heC10ZW1wLXRleHQnKTtcbiAgICBtYXhUZW1wVGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQnKTtcbiAgICBtYXhUZW1wVmFsdWUuc2V0QXR0cmlidXRlKCdpZCcsICdtYXgtdGVtcC12YWx1ZScpO1xuICAgIG1pblRlbXBWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RlbXAnKTtcbiAgICBtYXhUZW1wVmFsdWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZW1wJyk7XG4gICAgY29udmVyc2lvbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnZlcnNpb24tYnV0dG9uJyk7XG5cbiAgICAvL2FwcGVuZCB0byBjb250YWluZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckluZm9Cb3gpO1xuICAgIHdlYXRoZXJJbmZvQm94LmFwcGVuZENoaWxkKHVwcGVyQm94KTtcbiAgICB3ZWF0aGVySW5mb0JveC5hcHBlbmRDaGlsZChsb3dlckJveCk7XG4gICAgdXBwZXJCb3guYXBwZW5kQ2hpbGQodGVtcEJveCk7XG4gICAgdGVtcEJveC5hcHBlbmRDaGlsZChjb252ZXJzaW9uQnV0dG9uKTtcbiAgICB0ZW1wQm94LmFwcGVuZENoaWxkKHRlbXBEaXYpO1xuICAgIHRlbXBCb3guYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xuICAgIHVwcGVyQm94LmFwcGVuZENoaWxkKHdlYXRoZXJEZXNjcmlwdGlvbkJveCk7XG4gICAgd2VhdGhlckRlc2NyaXB0aW9uQm94LmFwcGVuZENoaWxkKG1haW5XZWF0aGVyKTtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb25Cb3guYXBwZW5kQ2hpbGQobWFpbldlYXRoZXJEZXNjcmlwdGlvbkJveCk7XG4gICAgbWFpbldlYXRoZXJEZXNjcmlwdGlvbkJveC5hcHBlbmRDaGlsZChtYWluV2VhdGhlckRlc2NyaXB0aW9uKTtcbiAgICBtYWluV2VhdGhlckRlc2NyaXB0aW9uQm94LmFwcGVuZENoaWxkKGljb24pO1xuICAgIGxvd2VyQm94LmFwcGVuZENoaWxkKGZlZWxzTGlrZURpdik7XG4gICAgZmVlbHNMaWtlRGl2LmFwcGVuZENoaWxkKGZlZWxzTGlrZVRleHQpO1xuICAgIGZlZWxzTGlrZURpdi5hcHBlbmRDaGlsZChmZWVsc0xpa2VWYWx1ZSk7XG4gICAgbG93ZXJCb3guYXBwZW5kQ2hpbGQoaHVtaWRpdHlEaXYpO1xuICAgIGh1bWlkaXR5RGl2LmFwcGVuZENoaWxkKGh1bWlkaXR5VGV4dCk7XG4gICAgaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlWYWx1ZSk7XG4gICAgbG93ZXJCb3guYXBwZW5kQ2hpbGQocHJlc3N1cmVEaXYpO1xuICAgIHByZXNzdXJlRGl2LmFwcGVuZENoaWxkKHByZXNzdXJlVGV4dCk7XG4gICAgcHJlc3N1cmVEaXYuYXBwZW5kQ2hpbGQocHJlc3N1cmVWYWx1ZSk7XG4gICAgbG93ZXJCb3guYXBwZW5kQ2hpbGQobWluVGVtcERpdik7XG4gICAgbWluVGVtcERpdi5hcHBlbmRDaGlsZChtaW5UZW1wVGV4dCk7XG4gICAgbWluVGVtcERpdi5hcHBlbmRDaGlsZChtaW5UZW1wVmFsdWUpO1xuICAgIGxvd2VyQm94LmFwcGVuZENoaWxkKG1heFRlbXBEaXYpO1xuICAgIG1heFRlbXBEaXYuYXBwZW5kQ2hpbGQobWF4VGVtcFRleHQpO1xuICAgIG1heFRlbXBEaXYuYXBwZW5kQ2hpbGQobWF4VGVtcFZhbHVlKTtcblxuICAgIC8vIG5hbWluZ1xuICAgIGZlZWxzTGlrZVRleHQudGV4dENvbnRlbnQgPSAnRmVlbHMgbGlrZSc7XG4gICAgaHVtaWRpdHlUZXh0LnRleHRDb250ZW50ID0gJ0h1bWlkaXR5JztcbiAgICBwcmVzc3VyZVRleHQudGV4dENvbnRlbnQgPSAnUHJlc3N1cmUnO1xuICAgIG1pblRlbXBUZXh0LnRleHRDb250ZW50ID0gJ01pbiBUZW1wJztcbiAgICBtYXhUZW1wVGV4dC50ZXh0Q29udGVudCA9ICdNYXggVGVtcCc7XG5cbiAgICAvLyBzdHlsZVxuICAgIHdlYXRoZXJJbmZvQm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgaWNvbi5zcmMgPSAnIyc7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVXZWF0aGVyQm94RnVuYyB9OyIsImltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tICcuL2dldFdlYXRoZXInO1xuaW1wb3J0IHsgY29udmVyc2lvbiB9IGZyb20gJy4vY29udmVyc2lvbic7XG5cbmZ1bmN0aW9uIGV2ZW50SGFuZGxlcigpe1xuICAgIC8vIGNvbnZlcnNpb25cbiAgICBjb25zdCBjb252ZXJzaW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnZlcnNpb24tYnV0dG9uJyk7XG4gICAgY29udmVyc2lvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnZlcnNpb24pO1xuXG4gICAgLy8gc2VhcmNoXG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idXR0b24nKTtcbiAgICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRXZWF0aGVyKTtcbiAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZpZWxkJyk7XG4gICAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKT0+IHtcbiAgICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIGdldFdlYXRoZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICB9KVxufVxuXG5leHBvcnQgeyBldmVudEhhbmRsZXIgfTsiLCJpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjaGFuZ2VCZ0ltYWdlQWNjVG9XZWF0aGVyIH0gZnJvbSAnLi9jaGFuZ2VCZ0ltYWdlQWNjVG9XZWF0aGVyJztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpIHtcbiAgICAvLyBnZXQgZWxlbWVudHNcbiAgICBjb25zdCB3ZWF0aGVySW5mb0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyLWluZm8tYm94Jyk7XG4gICAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wLWRpdicpO1xuICAgIGNvbnN0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uLWRpdicpO1xuICAgIGNvbnN0IG1haW5XZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4td2VhdGhlcicpO1xuICAgIGNvbnN0IG1haW5XZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi13ZWF0aGVyLWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgZmVlbHNMaWtlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHMtbGlrZS12YWx1ZScpO1xuICAgIGNvbnN0IGh1bWlkaXR5VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHktdmFsdWUnKTtcbiAgICBjb25zdCBwcmVzc3VyZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXNzdXJlLXZhbHVlJyk7XG4gICAgY29uc3QgbWluVGVtcFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pbi10ZW1wLXZhbHVlJyk7XG4gICAgY29uc3QgbWF4VGVtcFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21heC10ZW1wLXZhbHVlJyk7XG4gICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1maWVsZCcpO1xuICAgIGNvbnN0IGVycm9yRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yLWRpdicpO1xuICAgIGNvbnN0IHNhZEZhY2VEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2FkLWZhY2UtZGl2Jyk7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpY29uJyk7XG4gICAgY29uc3QgY29udmVyc2lvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb252ZXJzaW9uLWJ1dHRvbicpO1xuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2lucHV0RmllbGQudmFsdWV9JkFQUElEPTJkMzYwOWY4YjVkYTZlMmMwYTY0NmZlZmM2OWUyZjYyYCxcbiAgICAgICAge1xuICAgICAgICAgICAgbW9kZTogICdjb3JzJ1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7IFxuXG4gICAgICAgIC8vIHNob3cgYm94XG4gICAgICAgIHdlYXRoZXJJbmZvQm94LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgICAgIHNhZEZhY2VEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZXJyb3JEaXYuc3R5bGUuZGlzcGxheSA9ICdoaWRkZW4nO1xuICAgICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgLy8gbmFtaW5nXG4gICAgICAgIHRlbXBEaXYudGV4dENvbnRlbnQgPSBgJHsod2VhdGhlckRhdGEubWFpbi50ZW1wIC0gMjczLjE1KS50b0ZpeGVkKDEpfcKwYDtcbiAgICAgICAgbG9jYXRpb25EaXYudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5uYW1lfSB8ICR7d2VhdGhlckRhdGEuc3lzLmNvdW50cnl9YDtcbiAgICAgICAgbWFpbldlYXRoZXIudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLm1haW59YDtcbiAgICAgICAgbWFpbldlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb259YDtcbiAgICAgICAgaWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG4gICAgICAgIGZlZWxzTGlrZVZhbHVlLnRleHRDb250ZW50ID0gYCR7KHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZSAtIDI3My4xNSkudG9GaXhlZCgxKX3CsGA7XG4gICAgICAgIGh1bWlkaXR5VmFsdWUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5fSVgO1xuICAgICAgICBwcmVzc3VyZVZhbHVlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEubWFpbi5wcmVzc3VyZX1tYmA7XG4gICAgICAgIG1pblRlbXBWYWx1ZS50ZXh0Q29udGVudCA9IGAkeyh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluIC0gMjczLjE1KS50b0ZpeGVkKDEpfcKwYDtcbiAgICAgICAgbWF4VGVtcFZhbHVlLnRleHRDb250ZW50ID0gYCR7KHdlYXRoZXJEYXRhLm1haW4udGVtcF9tYXggLSAyNzMuMTUpLnRvRml4ZWQoMSl9wrBgO1xuICAgICAgICBjb252ZXJzaW9uQnV0dG9uLnRleHRDb250ZW50ID0gJ0PCsCc7XG4gICAgICAgIGNoYW5nZUJnSW1hZ2VBY2NUb1dlYXRoZXIoKTtcblxuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICBlcnJvckRpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9ICfDlyBDaXR5IG5vdCBmb3VuZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nO1xuICAgICAgICB3ZWF0aGVySW5mb0JveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBzYWRGYWNlRGl2LnRleHRDb250ZW50ID0gJzooJztcbiAgICAgICAgc2FkRmFjZURpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH0gXG59O1xuXG5leHBvcnQgeyBnZXRXZWF0aGVyIH07ICIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBpbnB1dEZ1bmMoKSB7XG4gICAgLy8gc2VhcmNoIGZlaWxkIGRpdlxuICAgIGNvbnN0IHNlYXJjaEZlaWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyBjcmVhdGUgZWxlbWVudHNcbiAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNhZEZhY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vIGF0dHJpYnV0ZVxuICAgIHNlYXJjaEZlaWxkRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoLWZpZWxkLWRpdicpO1xuICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dC1maWVsZCcpO1xuICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2lucHV0LWZpZWxkJyk7XG4gICAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3NwZWxsY2hlY2snLCAnZmFsc2UnKTtcbiAgICBzZWFyY2hCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzZWFyY2gtYnV0dG9uJyk7XG4gICAgc2FkRmFjZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NhZC1mYWNlLWRpdicpO1xuXG4gICAgLy8gdHlwZVxuICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3NlYXJjaCcpO1xuICAgIGVycm9yRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZXJyb3ItZGl2Jyk7XG5cbiAgICAvLyBuYW1pbmdcbiAgICBzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSAnU0VBUkNIJztcbiAgICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgQ2l0eSBIZXJlJyk7XG4gICAgZXJyb3JEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBzYWRGYWNlRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAvL2FwcGVuZFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hGZWlsZERpdik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNhZEZhY2VEaXYpO1xuICAgIHNlYXJjaEZlaWxkRGl2LmFwcGVuZENoaWxkKGlucHV0RmllbGQpO1xuICAgIHNlYXJjaEZlaWxkRGl2LmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XG4gICAgc2VhcmNoRmVpbGREaXYuYXBwZW5kQ2hpbGQoZXJyb3JEaXYpO1xuXG59O1xuXG5leHBvcnQgeyBpbnB1dEZ1bmMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgeyBpbnB1dEZ1bmMgfSBmcm9tICcuL21vZHVsZXMvc2VhcmNoQm94JztcbmltcG9ydCB7IGNyZWF0ZVdlYXRoZXJCb3hGdW5jIH0gZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZVdlYXRoZXJCb3gnO1xuaW1wb3J0IHsgZXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9tb2R1bGVzL2V2ZW50SGFuZGxlcic7XG5cbihmdW5jdGlvbiBvbkxvYWQoKXtcbiAgICBpbnB1dEZ1bmMoKTtcbiAgICBjcmVhdGVXZWF0aGVyQm94RnVuYygpO1xuICAgIGV2ZW50SGFuZGxlcigpO1xufSkoKTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==