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

    // convert from celcius to fahrenheit
    if (conversionButton.textContent === 'C°') {
        elementsOfTemp.forEach((element) => {
            const text = element.textContent;
            const filteredValue = text.match(/-?\d+\.\d+/).toString().replace(/,/g, '');
            const fahrenheitValue = ((1.8 * filteredValue) + 32).toFixed(1);
            element.textContent = `${fahrenheitValue}°`;
        })

        conversionButton.textContent = 'F°';
        return;
    }
    // convert from fahrenheit to celcius
    if (conversionButton.textContent === 'F°') {
        elementsOfTemp.forEach((element) => {
            const text = element.textContent;
            const filteredValue = text.match(/-?\d+\.\d+/).toString().replace(/,/g, '');
            const celciusValue = ((5/9) * (filteredValue - 32)).toFixed(1);
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
        console.log(weatherData.sys.country);
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
        if(weatherData.sys.country === undefined) {
            locationDiv.textContent = `${weatherData.name}`;
        }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsZ0RBQU0sQ0FBQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxpREFBTyxDQUFDO0FBQ3hEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRnNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxnQkFBZ0I7QUFDckQsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsYUFBYTtBQUNsRCxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDc0I7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRzBDO0FBQ0E7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxtREFBVTs7QUFFekQ7QUFDQTtBQUNBLDJDQUEyQyxtREFBVTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFVO0FBQ3RCOztBQUVBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnNCO0FBQ2tEOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RixpQkFBaUI7QUFDMUc7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsNENBQTRDO0FBQzdFLHFDQUFxQyxrQkFBa0IsSUFBSSx3QkFBd0I7QUFDbkYscUNBQXFDLDRCQUE0QjtBQUNqRSxnREFBZ0QsbUNBQW1DO0FBQ25GLHVEQUF1RCw0QkFBNEI7QUFDbkYsd0NBQXdDLGtEQUFrRDtBQUMxRix1Q0FBdUMsMEJBQTBCO0FBQ2pFLHVDQUF1QywwQkFBMEI7QUFDakUsc0NBQXNDLGdEQUFnRDtBQUN0RixzQ0FBc0MsZ0RBQWdEO0FBQ3RGO0FBQ0E7QUFDQSx5Q0FBeUMsaUJBQWlCO0FBQzFEOztBQUVBLFFBQVEscUZBQXlCOztBQUVqQyxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTs7QUFFdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJnRDtBQUNrQjtBQUNaOztBQUV0RDtBQUNBLElBQUksNkRBQVM7QUFDYixJQUFJLCtFQUFvQjtBQUN4QixJQUFJLG1FQUFZO0FBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jaGFuZ2VCZ0ltYWdlQWNjVG9XZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvY29udmVyc2lvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2NyZWF0ZVdlYXRoZXJCb3guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9ldmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9nZXRXZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvc2VhcmNoQm94LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvaG9tZS1wYWdlLWltYWdlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0td2hpdGU6ICNmNWY1ZjU7XFxyXFxuICAgIC0tYmxhY2s6ICMwMDAwMDA7XFxyXFxuICAgIC0tZ3JheTogI2E3YTRhNDtcXHJcXG4gICAgLS1iZWlnZTogI2Y1ZjVkYztcXHJcXG4gICAgLS1yZWQ6ICNmZjAwMDA7XFxyXFxuICAgIC0tbGlnaHRncmF5OiAjY2ZjNmM2O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtZmllbGQtZGl2e1xcclxcbiAgICBtYXJnaW46IDJlbTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDAuMWVtO1xcclxcbiAgICByaWdodDogNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5wdXQtZmllbGR7XFxyXFxuICAgIHBhZGRpbmc6IDAuNGVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWJ1dHRvbntcXHJcXG4gICAgcGFkZGluZzogMC41ZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggdmFyKC0tZ3JheSk7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYnV0dG9uOmhvdmVye1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI3dlYXRoZXItaW5mby1ib3h7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDQwZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggM3B4IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZWlnZSk7XFxyXFxufVxcclxcblxcclxcbiN1cHBlci1ib3h7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJlaWdlKTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jdGVtcC1ib3h7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNWVtO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbiN0ZW1wLWRpdixcXHJcXG4jbWFpbi13ZWF0aGVye1xcclxcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnZlcnNpb24tYnV0dG9ue1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDAuNWVtO1xcclxcbiAgICB0b3A6IDAuNWVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxLjFlbTtcXHJcXG4gICAgd2lkdGg6IDEuMWVtO1xcclxcbiAgICBwYWRkaW5nOiAxLjFlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnZlcnNpb24tYnV0dG9uOmhvdmVye1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3dlYXRoZXItZGVzY3JpcHRpb24tYm94e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVlbVxcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi13ZWF0aGVyLWRlc2NyaXB0aW9ue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4td2VhdGhlci1kZXNjcmlwdGlvbi1ib3h7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaWNvbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRncmF5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jbG93ZXItYm94e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBnYXA6IDAuM2VtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG93ZXItYm94ICogZGl2e1xcclxcbiAgICBwYWRkaW5nOiAwLjJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuI2Vycm9yLWRpdntcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXHJcXG4gICAgYm90dG9tOiAtMC4zZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3NhZC1mYWNlLWRpdntcXHJcXG4gICAgZm9udC1zaXplOiA4cmVtO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx5REFBbUQ7SUFDbkQsc0JBQXNCO0lBQ3RCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtFQUNyQixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0td2hpdGU6ICNmNWY1ZjU7XFxyXFxuICAgIC0tYmxhY2s6ICMwMDAwMDA7XFxyXFxuICAgIC0tZ3JheTogI2E3YTRhNDtcXHJcXG4gICAgLS1iZWlnZTogI2Y1ZjVkYztcXHJcXG4gICAgLS1yZWQ6ICNmZjAwMDA7XFxyXFxuICAgIC0tbGlnaHRncmF5OiAjY2ZjNmM2O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9ob21lLXBhZ2UtaW1hZ2UuanBnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1maWVsZC1kaXZ7XFxyXFxuICAgIG1hcmdpbjogMmVtO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMC4xZW07XFxyXFxuICAgIHJpZ2h0OiA1ZW07XFxyXFxufVxcclxcblxcclxcbiNpbnB1dC1maWVsZHtcXHJcXG4gICAgcGFkZGluZzogMC40ZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYnV0dG9ue1xcclxcbiAgICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDFlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCB2YXIoLS1ncmF5KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1idXR0b246aG92ZXJ7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jd2VhdGhlci1pbmZvLWJveHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogNDBlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAzcHggdmFyKC0td2hpdGUpO1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJlaWdlKTtcXHJcXG59XFxyXFxuXFxyXFxuI3VwcGVyLWJveHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmVpZ2UpO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiN0ZW1wLWJveHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41ZW07XFxyXFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuI3RlbXAtZGl2LFxcclxcbiNtYWluLXdlYXRoZXJ7XFxyXFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udmVyc2lvbi1idXR0b257XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMC41ZW07XFxyXFxuICAgIHRvcDogMC41ZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDEuMWVtO1xcclxcbiAgICB3aWR0aDogMS4xZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuMWVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udmVyc2lvbi1idXR0b246aG92ZXJ7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4jd2VhdGhlci1kZXNjcmlwdGlvbi1ib3h7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNWVtXFxyXFxufVxcclxcblxcclxcbiNtYWluLXdlYXRoZXItZGVzY3JpcHRpb257XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi13ZWF0aGVyLWRlc2NyaXB0aW9uLWJveHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbiNpY29ue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGdyYXkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbiNsb3dlci1ib3h7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGdhcDogMC4zZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbiNsb3dlci1ib3ggKiBkaXZ7XFxyXFxuICAgIHBhZGRpbmc6IDAuMmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50ZXh0e1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3ItZGl2e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcclxcbiAgICBib3R0b206IC0wLjNlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2FkLWZhY2UtZGl2e1xcclxcbiAgICBmb250LXNpemU6IDhyZW07XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5pbXBvcnQgQ2xvdWR5IGZyb20gJy4uL2ltYWdlcy9jbG91ZHkuanBnJztcbmltcG9ydCBIYXplIGZyb20gJy4uL2ltYWdlcy9oYXplLmpwZyc7XG5pbXBvcnQgQ2xlYXIgZnJvbSAnLi4vaW1hZ2VzL2NsZWFyLmpwZyc7XG5pbXBvcnQgUmFpbiBmcm9tICcuLi9pbWFnZXMvcmFpbi5qcGcnO1xuaW1wb3J0IFNub3cgZnJvbSAnLi4vaW1hZ2VzL3Nub3cuanBnJztcbmltcG9ydCBEcml6emxlIGZyb20gJy4uL2ltYWdlcy9kcml6emxlLmpwZyc7XG5pbXBvcnQgRHVzdCBmcm9tICcuLi9pbWFnZXMvZHVzdC5qcGcnO1xuaW1wb3J0IFRodW5kZXJzdG9ybSBmcm9tICcuLi9pbWFnZXMvdGh1bmRlcnN0b3JtLmpwZyc7XG5pbXBvcnQgTWlzdCBmcm9tICcuLi9pbWFnZXMvbWlzdC5qcGcnO1xuaW1wb3J0IFNtb2tlIGZyb20gJy4uL2ltYWdlcy9kdXN0LmpwZyc7XG5pbXBvcnQgQXNoIGZyb20gJy4uL2ltYWdlcy9hc2guanBnJztcbmltcG9ydCBTcXVhbGwgZnJvbSAnLi4vaW1hZ2VzL3NxdWFsbC5qcGcnO1xuaW1wb3J0IFRvcm5hZG8gZnJvbSAnLi4vaW1hZ2VzL3Rvcm5hZG8uanBnJztcblxuLy8gZnVuY3Rpb24gdG8gY2hhbmdlIGJhY2tncm91bmQgaW1hZ2UgYWNjb3JkaW5nIHRvIHdlYXRoZXJcbmZ1bmN0aW9uIGNoYW5nZUJnSW1hZ2VBY2NUb1dlYXRoZXIoKSB7XG4gICAgLy8gZ2V0IGlkXG4gICAgY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi13ZWF0aGVyJyk7XG4gICAgY29uc3Qgd2VhdGhlclRleHQgPSBtYWluV2VhdGhlci50ZXh0Q29udGVudDsgXG4gICAgaWYgKHdlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkubWF0Y2goJ2Nsb3VkcycpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7Q2xvdWR5fSlgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyVGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKCdoYXplJykpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtIYXplfSlgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyVGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKCdjbGVhcicpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7Q2xlYXJ9KWA7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkubWF0Y2goJ3JhaW4nKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke1JhaW59KWA7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkubWF0Y2goJ3Nub3cnKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke1Nub3d9KWA7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkubWF0Y2goJ2RyaXp6bGUnKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke0RyaXp6bGV9KWA7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkubWF0Y2goJ2R1c3QnKSkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke0R1c3R9KWA7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkubWF0Y2goJ3RodW5kZXJzdG9ybScpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7VGh1bmRlcnN0b3JtfSlgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyVGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKCdtaXN0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtNaXN0fSlgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyVGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKCdzbW9rZScpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7U21va2V9KWA7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkubWF0Y2goJ2ZvZycpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7TWlzdH0pYDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS5tYXRjaCgnc2FuZCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7RHVzdH0pYDtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAod2VhdGhlclRleHQudG9Mb3dlckNhc2UoKS5tYXRjaCgnYXNoJykpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtBc2h9KWA7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXJUZXh0LnRvTG93ZXJDYXNlKCkubWF0Y2goJ3NxdWFsbCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7U3F1YWxsfSlgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh3ZWF0aGVyVGV4dC50b0xvd2VyQ2FzZSgpLm1hdGNoKCd0b3JuYWRvJykpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtUb3JuYWRvfSlgO1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG5leHBvcnQgeyBjaGFuZ2VCZ0ltYWdlQWNjVG9XZWF0aGVyIH07IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuXG5mdW5jdGlvbiBjb252ZXJzaW9uKCl7XG4gICAgLy8gZnVuY3Rpb24gdG8gY29udmVydCBiZXR3ZWVuIGNlbGNpdXMgYW5kIGZhaHJlbmhlaXRcbiAgICAvLyBnZXQgbm9kZXNcbiAgICBjb25zdCBjb252ZXJzaW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnZlcnNpb24tYnV0dG9uJyk7XG4gICAgY29uc3QgZWxlbWVudHNPZlRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVtcCcpO1xuXG4gICAgLy8gY29udmVydCBmcm9tIGNlbGNpdXMgdG8gZmFocmVuaGVpdFxuICAgIGlmIChjb252ZXJzaW9uQnV0dG9uLnRleHRDb250ZW50ID09PSAnQ8KwJykge1xuICAgICAgICBlbGVtZW50c09mVGVtcC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkVmFsdWUgPSB0ZXh0Lm1hdGNoKC8tP1xcZCtcXC5cXGQrLykudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcnKTtcbiAgICAgICAgICAgIGNvbnN0IGZhaHJlbmhlaXRWYWx1ZSA9ICgoMS44ICogZmlsdGVyZWRWYWx1ZSkgKyAzMikudG9GaXhlZCgxKTtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtmYWhyZW5oZWl0VmFsdWV9wrBgO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnZlcnNpb25CdXR0b24udGV4dENvbnRlbnQgPSAnRsKwJztcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBjb252ZXJ0IGZyb20gZmFocmVuaGVpdCB0byBjZWxjaXVzXG4gICAgaWYgKGNvbnZlcnNpb25CdXR0b24udGV4dENvbnRlbnQgPT09ICdGwrAnKSB7XG4gICAgICAgIGVsZW1lbnRzT2ZUZW1wLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRWYWx1ZSA9IHRleHQubWF0Y2goLy0/XFxkK1xcLlxcZCsvKS50b1N0cmluZygpLnJlcGxhY2UoLywvZywgJycpO1xuICAgICAgICAgICAgY29uc3QgY2VsY2l1c1ZhbHVlID0gKCg1LzkpICogKGZpbHRlcmVkVmFsdWUgLSAzMikpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7Y2VsY2l1c1ZhbHVlfcKwYDtcbiAgICAgICAgfSlcblxuICAgICAgICBjb252ZXJzaW9uQnV0dG9uLnRleHRDb250ZW50ID0gJ0PCsCc7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGNvbnZlcnNpb24gfTsiLCJpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcblxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlckJveEZ1bmMoKSB7XG4gICAgLy8gY3JlYXRlIGRpc3BsYXkgYm94IGZvciB3ZWF0aGVyXG4gICAgY29uc3Qgd2VhdGhlckluZm9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB1cHBlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxvd2VyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGVtcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBtYWluV2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1haW5XZWF0aGVyRGVzY3JpcHRpb25Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYWluV2VhdGhlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZmVlbHNMaWtlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZlZWxzTGlrZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZmVlbHNMaWtlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaHVtaWRpdHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaHVtaWRpdHlWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGh1bWlkaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcHJlc3N1cmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcmVzc3VyZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcmVzc3VyZVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWluVGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1pblRlbXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWluVGVtcFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWF4VGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1heFRlbXBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWF4VGVtcFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udmVyc2lvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgLy9uYW1lXG4gICAgd2VhdGhlckluZm9Cb3guc2V0QXR0cmlidXRlKCdpZCcsICd3ZWF0aGVyLWluZm8tYm94Jyk7XG4gICAgdXBwZXJCb3guc2V0QXR0cmlidXRlKCdpZCcsICd1cHBlci1ib3gnKTtcbiAgICBsb3dlckJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvd2VyLWJveCcpO1xuICAgIHRlbXBCb3guc2V0QXR0cmlidXRlKCdpZCcsICd0ZW1wLWJveCcpO1xuICAgIHRlbXBEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0ZW1wLWRpdicpO1xuICAgIHRlbXBEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZW1wJyk7XG4gICAgbG9jYXRpb25EaXYuc2V0QXR0cmlidXRlKCdpZCcsICdsb2NhdGlvbi1kaXYnKTtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb25Cb3guc2V0QXR0cmlidXRlKCdpZCcsICd3ZWF0aGVyLWRlc2NyaXB0aW9uLWJveCcpO1xuICAgIG1haW5XZWF0aGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbi13ZWF0aGVyJyk7XG4gICAgbWFpbldlYXRoZXJEZXNjcmlwdGlvbkJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4td2VhdGhlci1kZXNjcmlwdGlvbi1ib3gnKTtcbiAgICBtYWluV2VhdGhlckRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbi13ZWF0aGVyLWRlc2NyaXB0aW9uJyk7XG4gICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ljb24nKTtcbiAgICBmZWVsc0xpa2VEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdmZWVscy1saWtlLWRpdicpO1xuICAgIGZlZWxzTGlrZVRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdmZWVscy1saWtlLXRleHQnKTtcbiAgICBmZWVsc0xpa2VWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZlZWxzLWxpa2UtdmFsdWUnKTtcbiAgICBmZWVsc0xpa2VUZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dCcpO1xuICAgIGZlZWxzTGlrZVZhbHVlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGVtcCcpO1xuICAgIGh1bWlkaXR5RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaHVtaWRpdHktZGl2Jyk7XG4gICAgaHVtaWRpdHlUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnaHVtaWRpdHktdGV4dCcpO1xuICAgIGh1bWlkaXR5VGV4dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQnKTtcbiAgICBodW1pZGl0eVZhbHVlLnNldEF0dHJpYnV0ZSgnaWQnLCAnaHVtaWRpdHktdmFsdWUnKTtcbiAgICBwcmVzc3VyZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXNzdXJlLWRpdicpO1xuICAgIHByZXNzdXJlVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXNzdXJlLXRleHQnKTtcbiAgICBwcmVzc3VyZVRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0Jyk7XG4gICAgcHJlc3N1cmVWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXNzdXJlLXZhbHVlJyk7XG4gICAgbWluVGVtcERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21pbi10ZW1wLWRpdicpO1xuICAgIG1pblRlbXBUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWluLXRlbXAtdGV4dCcpO1xuICAgIG1pblRlbXBUZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dCcpO1xuICAgIG1pblRlbXBWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21pbi10ZW1wLXZhbHVlJyk7XG4gICAgbWF4VGVtcERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21heC10ZW1wLWRpdicpO1xuICAgIG1heFRlbXBUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWF4LXRlbXAtdGV4dCcpO1xuICAgIG1heFRlbXBUZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dCcpO1xuICAgIG1heFRlbXBWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21heC10ZW1wLXZhbHVlJyk7XG4gICAgbWluVGVtcFZhbHVlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGVtcCcpO1xuICAgIG1heFRlbXBWYWx1ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RlbXAnKTtcbiAgICBjb252ZXJzaW9uQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udmVyc2lvbi1idXR0b24nKTtcblxuICAgIC8vYXBwZW5kIHRvIGNvbnRhaW5lclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySW5mb0JveCk7XG4gICAgd2VhdGhlckluZm9Cb3guYXBwZW5kQ2hpbGQodXBwZXJCb3gpO1xuICAgIHdlYXRoZXJJbmZvQm94LmFwcGVuZENoaWxkKGxvd2VyQm94KTtcbiAgICB1cHBlckJveC5hcHBlbmRDaGlsZCh0ZW1wQm94KTtcbiAgICB0ZW1wQm94LmFwcGVuZENoaWxkKGNvbnZlcnNpb25CdXR0b24pO1xuICAgIHRlbXBCb3guYXBwZW5kQ2hpbGQodGVtcERpdik7XG4gICAgdGVtcEJveC5hcHBlbmRDaGlsZChsb2NhdGlvbkRpdik7XG4gICAgdXBwZXJCb3guYXBwZW5kQ2hpbGQod2VhdGhlckRlc2NyaXB0aW9uQm94KTtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb25Cb3guYXBwZW5kQ2hpbGQobWFpbldlYXRoZXIpO1xuICAgIHdlYXRoZXJEZXNjcmlwdGlvbkJveC5hcHBlbmRDaGlsZChtYWluV2VhdGhlckRlc2NyaXB0aW9uQm94KTtcbiAgICBtYWluV2VhdGhlckRlc2NyaXB0aW9uQm94LmFwcGVuZENoaWxkKG1haW5XZWF0aGVyRGVzY3JpcHRpb24pO1xuICAgIG1haW5XZWF0aGVyRGVzY3JpcHRpb25Cb3guYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgbG93ZXJCb3guYXBwZW5kQ2hpbGQoZmVlbHNMaWtlRGl2KTtcbiAgICBmZWVsc0xpa2VEaXYuYXBwZW5kQ2hpbGQoZmVlbHNMaWtlVGV4dCk7XG4gICAgZmVlbHNMaWtlRGl2LmFwcGVuZENoaWxkKGZlZWxzTGlrZVZhbHVlKTtcbiAgICBsb3dlckJveC5hcHBlbmRDaGlsZChodW1pZGl0eURpdik7XG4gICAgaHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQoaHVtaWRpdHlUZXh0KTtcbiAgICBodW1pZGl0eURpdi5hcHBlbmRDaGlsZChodW1pZGl0eVZhbHVlKTtcbiAgICBsb3dlckJveC5hcHBlbmRDaGlsZChwcmVzc3VyZURpdik7XG4gICAgcHJlc3N1cmVEaXYuYXBwZW5kQ2hpbGQocHJlc3N1cmVUZXh0KTtcbiAgICBwcmVzc3VyZURpdi5hcHBlbmRDaGlsZChwcmVzc3VyZVZhbHVlKTtcbiAgICBsb3dlckJveC5hcHBlbmRDaGlsZChtaW5UZW1wRGl2KTtcbiAgICBtaW5UZW1wRGl2LmFwcGVuZENoaWxkKG1pblRlbXBUZXh0KTtcbiAgICBtaW5UZW1wRGl2LmFwcGVuZENoaWxkKG1pblRlbXBWYWx1ZSk7XG4gICAgbG93ZXJCb3guYXBwZW5kQ2hpbGQobWF4VGVtcERpdik7XG4gICAgbWF4VGVtcERpdi5hcHBlbmRDaGlsZChtYXhUZW1wVGV4dCk7XG4gICAgbWF4VGVtcERpdi5hcHBlbmRDaGlsZChtYXhUZW1wVmFsdWUpO1xuXG4gICAgLy8gbmFtaW5nXG4gICAgZmVlbHNMaWtlVGV4dC50ZXh0Q29udGVudCA9ICdGZWVscyBsaWtlJztcbiAgICBodW1pZGl0eVRleHQudGV4dENvbnRlbnQgPSAnSHVtaWRpdHknO1xuICAgIHByZXNzdXJlVGV4dC50ZXh0Q29udGVudCA9ICdQcmVzc3VyZSc7XG4gICAgbWluVGVtcFRleHQudGV4dENvbnRlbnQgPSAnTWluIFRlbXAnO1xuICAgIG1heFRlbXBUZXh0LnRleHRDb250ZW50ID0gJ01heCBUZW1wJztcblxuICAgIC8vIHN0eWxlXG4gICAgd2VhdGhlckluZm9Cb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBpY29uLnNyYyA9ICcjJztcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVdlYXRoZXJCb3hGdW5jIH07IiwiaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gJy4vZ2V0V2VhdGhlcic7XG5pbXBvcnQgeyBjb252ZXJzaW9uIH0gZnJvbSAnLi9jb252ZXJzaW9uJztcblxuZnVuY3Rpb24gZXZlbnRIYW5kbGVyKCl7XG4gICAgLy8gY29udmVyc2lvblxuICAgIGNvbnN0IGNvbnZlcnNpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udmVyc2lvbi1idXR0b24nKTtcbiAgICBjb252ZXJzaW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udmVyc2lvbik7XG5cbiAgICAvLyBzZWFyY2hcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xuICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldFdlYXRoZXIpO1xuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtZmllbGQnKTtcbiAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpPT4ge1xuICAgICAgICBpZihlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgZ2V0V2VhdGhlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7IGV2ZW50SGFuZGxlciB9OyIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNoYW5nZUJnSW1hZ2VBY2NUb1dlYXRoZXIgfSBmcm9tICcuL2NoYW5nZUJnSW1hZ2VBY2NUb1dlYXRoZXInO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCkge1xuICAgIC8vIGdldCBlbGVtZW50c1xuICAgIGNvbnN0IHdlYXRoZXJJbmZvQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXItaW5mby1ib3gnKTtcbiAgICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RlbXAtZGl2Jyk7XG4gICAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24tZGl2Jyk7XG4gICAgY29uc3QgbWFpbldlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi13ZWF0aGVyJyk7XG4gICAgY29uc3QgbWFpbldlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXdlYXRoZXItZGVzY3JpcHRpb24nKTtcbiAgICBjb25zdCBmZWVsc0xpa2VWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVscy1saWtlLXZhbHVlJyk7XG4gICAgY29uc3QgaHVtaWRpdHlWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eS12YWx1ZScpO1xuICAgIGNvbnN0IHByZXNzdXJlVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc3N1cmUtdmFsdWUnKTtcbiAgICBjb25zdCBtaW5UZW1wVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluLXRlbXAtdmFsdWUnKTtcbiAgICBjb25zdCBtYXhUZW1wVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4LXRlbXAtdmFsdWUnKTtcbiAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZpZWxkJyk7XG4gICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3ItZGl2Jyk7XG4gICAgY29uc3Qgc2FkRmFjZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYWQtZmFjZS1kaXYnKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ljb24nKTtcbiAgICBjb25zdCBjb252ZXJzaW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnZlcnNpb24tYnV0dG9uJyk7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7aW5wdXRGaWVsZC52YWx1ZX0mQVBQSUQ9MmQzNjA5ZjhiNWRhNmUyYzBhNjQ2ZmVmYzY5ZTJmNjJgLFxuICAgICAgICB7XG4gICAgICAgICAgICBtb2RlOiAgJ2NvcnMnXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgXG5cbiAgICAgICAgLy8gc2hvdyBib3hcbiAgICAgICAgd2VhdGhlckluZm9Cb3guc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgICAgICAgc2FkRmFjZURpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBlcnJvckRpdi5zdHlsZS5kaXNwbGF5ID0gJ2hpZGRlbic7XG4gICAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICAvLyBuYW1pbmdcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEuc3lzLmNvdW50cnkpO1xuICAgICAgICB0ZW1wRGl2LnRleHRDb250ZW50ID0gYCR7KHdlYXRoZXJEYXRhLm1haW4udGVtcCAtIDI3My4xNSkudG9GaXhlZCgxKX3CsGA7XG4gICAgICAgIGxvY2F0aW9uRGl2LnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEubmFtZX0gfCAke3dlYXRoZXJEYXRhLnN5cy5jb3VudHJ5fWA7XG4gICAgICAgIG1haW5XZWF0aGVyLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEud2VhdGhlclswXS5tYWlufWA7XG4gICAgICAgIG1haW5XZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWA7XG4gICAgICAgIGljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckRhdGEud2VhdGhlclswXS5pY29ufS5wbmdgO1xuICAgICAgICBmZWVsc0xpa2VWYWx1ZS50ZXh0Q29udGVudCA9IGAkeyh3ZWF0aGVyRGF0YS5tYWluLmZlZWxzX2xpa2UgLSAyNzMuMTUpLnRvRml4ZWQoMSl9wrBgO1xuICAgICAgICBodW1pZGl0eVZhbHVlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEubWFpbi5odW1pZGl0eX0lYDtcbiAgICAgICAgcHJlc3N1cmVWYWx1ZS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLm1haW4ucHJlc3N1cmV9bWJgO1xuICAgICAgICBtaW5UZW1wVmFsdWUudGV4dENvbnRlbnQgPSBgJHsod2VhdGhlckRhdGEubWFpbi50ZW1wX21pbiAtIDI3My4xNSkudG9GaXhlZCgxKX3CsGA7XG4gICAgICAgIG1heFRlbXBWYWx1ZS50ZXh0Q29udGVudCA9IGAkeyh3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4IC0gMjczLjE1KS50b0ZpeGVkKDEpfcKwYDtcbiAgICAgICAgY29udmVyc2lvbkJ1dHRvbi50ZXh0Q29udGVudCA9ICdDwrAnO1xuICAgICAgICBpZih3ZWF0aGVyRGF0YS5zeXMuY291bnRyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsb2NhdGlvbkRpdi50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLm5hbWV9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYW5nZUJnSW1hZ2VBY2NUb1dlYXRoZXIoKTtcblxuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICBlcnJvckRpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9ICfDlyBDaXR5IG5vdCBmb3VuZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nO1xuICAgICAgICB3ZWF0aGVySW5mb0JveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBzYWRGYWNlRGl2LnRleHRDb250ZW50ID0gJzooJztcbiAgICAgICAgc2FkRmFjZURpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH0gXG59O1xuXG5leHBvcnQgeyBnZXRXZWF0aGVyIH07ICIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuXG5mdW5jdGlvbiBpbnB1dEZ1bmMoKSB7XG4gICAgLy8gc2VhcmNoIGZlaWxkIGRpdlxuICAgIGNvbnN0IHNlYXJjaEZlaWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyBjcmVhdGUgZWxlbWVudHNcbiAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNhZEZhY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vIGF0dHJpYnV0ZVxuICAgIHNlYXJjaEZlaWxkRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VhcmNoLWZpZWxkLWRpdicpO1xuICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dC1maWVsZCcpO1xuICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2lucHV0LWZpZWxkJyk7XG4gICAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3NwZWxsY2hlY2snLCAnZmFsc2UnKTtcbiAgICBzZWFyY2hCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzZWFyY2gtYnV0dG9uJyk7XG4gICAgc2FkRmFjZURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NhZC1mYWNlLWRpdicpO1xuXG4gICAgLy8gdHlwZVxuICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3NlYXJjaCcpO1xuICAgIGVycm9yRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZXJyb3ItZGl2Jyk7XG5cbiAgICAvLyBuYW1pbmdcbiAgICBzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSAnU0VBUkNIJztcbiAgICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW50ZXIgQ2l0eSBIZXJlJyk7XG4gICAgZXJyb3JEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBzYWRGYWNlRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAvL2FwcGVuZFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hGZWlsZERpdik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNhZEZhY2VEaXYpO1xuICAgIHNlYXJjaEZlaWxkRGl2LmFwcGVuZENoaWxkKGlucHV0RmllbGQpO1xuICAgIHNlYXJjaEZlaWxkRGl2LmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XG4gICAgc2VhcmNoRmVpbGREaXYuYXBwZW5kQ2hpbGQoZXJyb3JEaXYpO1xuXG59O1xuXG5leHBvcnQgeyBpbnB1dEZ1bmMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgeyBpbnB1dEZ1bmMgfSBmcm9tICcuL21vZHVsZXMvc2VhcmNoQm94JztcbmltcG9ydCB7IGNyZWF0ZVdlYXRoZXJCb3hGdW5jIH0gZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZVdlYXRoZXJCb3gnO1xuaW1wb3J0IHsgZXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9tb2R1bGVzL2V2ZW50SGFuZGxlcic7XG5cbihmdW5jdGlvbiBvbkxvYWQoKXtcbiAgICBpbnB1dEZ1bmMoKTtcbiAgICBjcmVhdGVXZWF0aGVyQm94RnVuYygpO1xuICAgIGV2ZW50SGFuZGxlcigpO1xufSkoKTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==