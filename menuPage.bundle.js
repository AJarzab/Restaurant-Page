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

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _boba1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boba1.jpg */ \"./src/boba1.jpg\");\n/* harmony import */ var _boba2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boba2.jpg */ \"./src/boba2.jpg\");\n/* harmony import */ var _boba3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boba3.jpg */ \"./src/boba3.jpg\");\n/* harmony import */ var _boba4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boba4.jpg */ \"./src/boba4.jpg\");\n\n\n\n\n\nfunction createMenu(){\n    const container = document.querySelector('.container')\n\n    const grid = document.createElement('div')\n    grid.classList.add('grid')\n    container.appendChild(grid)\n\n    // MENU ITEM NR 1\n    const menuItem1 = document.createElement('div')\n    menuItem1.classList.add('menu-item')\n    grid.appendChild(menuItem1)\n\n    const menuItem1img = document.createElement('img')\n    menuItem1img.src = _boba1_jpg__WEBPACK_IMPORTED_MODULE_0__\n    menuItem1img.classList.add('menu-img')\n    menuItem1.appendChild(menuItem1img)\n\n    const menuItem1dsc = document.createElement('p')\n    menuItem1dsc.innerText = 'Brown sugar milk tea with boba'\n    menuItem1dsc.classList.add('menu-dsc')\n    menuItem1.appendChild(menuItem1dsc)\n\n    // MENU ITEM NR 2\n    const menuItem2 = document.createElement('div')\n    menuItem2.classList.add('menu-item')\n    grid.appendChild(menuItem2)\n\n    const menuItem2img = document.createElement('img')\n    menuItem2img.src = _boba2_jpg__WEBPACK_IMPORTED_MODULE_1__\n    menuItem2img.classList.add('menu-img')\n    menuItem2.appendChild(menuItem2img)\n\n    const menuItem2dsc = document.createElement('p')\n    menuItem2dsc.innerText = 'Cosmo kiwi with peach boba'\n    menuItem2dsc.classList.add('menu-dsc')\n    menuItem2.appendChild(menuItem2dsc)\n\n    // MENU ITEM NR 3\n    const menuItem3 = document.createElement('div')\n    menuItem3.classList.add('menu-item')\n    grid.appendChild(menuItem3)\n\n    const menuItem3img = document.createElement('img')\n    menuItem3img.src = _boba3_jpg__WEBPACK_IMPORTED_MODULE_2__\n    menuItem3img.classList.add('menu-img')\n    menuItem3.appendChild(menuItem3img)\n\n    const menuItem3dsc = document.createElement('p')\n    menuItem3dsc.innerText = 'Honeydew smoothie with boba'\n    menuItem3dsc.classList.add('menu-dsc')\n    menuItem3.appendChild(menuItem3dsc)\n\n    // MENU ITEM NR 4\n    const menuItem4 = document.createElement('div')\n    menuItem4.classList.add('menu-item')\n    grid.appendChild(menuItem4)\n\n    const menuItem4img = document.createElement('img')\n    menuItem4img.src = _boba4_jpg__WEBPACK_IMPORTED_MODULE_3__\n    menuItem4img.classList.add('menu-img')\n    menuItem4.appendChild(menuItem4img)\n\n    const menuItem4dsc = document.createElement('p')\n    menuItem4dsc.innerText = 'Strawberry milk tea with strawberry boba'\n    menuItem4dsc.classList.add('menu-dsc')\n    menuItem4.appendChild(menuItem4dsc)\n\n\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menuPage.js?");

/***/ }),

/***/ "./src/boba1.jpg":
/*!***********************!*\
  !*** ./src/boba1.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"725c897fd0ba087b038f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/boba1.jpg?");

/***/ }),

/***/ "./src/boba2.jpg":
/*!***********************!*\
  !*** ./src/boba2.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1884404af63bd938c883.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/boba2.jpg?");

/***/ }),

/***/ "./src/boba3.jpg":
/*!***********************!*\
  !*** ./src/boba3.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bdfd0a3b67748826ecb6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/boba3.jpg?");

/***/ }),

/***/ "./src/boba4.jpg":
/*!***********************!*\
  !*** ./src/boba4.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"abfce11e99b5cec13363.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/boba4.jpg?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menuPage.js");
/******/ 	
/******/ })()
;