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

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createWebsite)\n/* harmony export */ });\nfunction createWebsite(){\n    const contentEl = document.getElementById('content')\n\n    const headerEl = document.createElement('header')\n    headerEl.classList.add('header')\n    contentEl.appendChild(headerEl)\n    \n    const logoEl = document.createElement('div')\n    logoEl.classList.add('logo')\n    headerEl.appendChild(logoEl)\n    \n    const h1Logo = document.createElement('h1')\n    h1Logo.textContent = 'BOBA CAFE'\n    logoEl.appendChild(h1Logo)\n    \n    const navEl = document.createElement('nav')\n    navEl.classList.add('nav')\n    headerEl.appendChild(navEl)\n    \n    const homeBtn = document.createElement('button')\n    homeBtn.innerText='Home'\n    homeBtn.classList.add('btn-nav')\n    homeBtn.classList.add('home')\n    homeBtn.classList.add('active')\n    navEl.appendChild(homeBtn)\n    \n    const menuBtn = document.createElement('button')\n    menuBtn.innerText='Menu'\n    menuBtn.classList.add('btn-nav')\n    menuBtn.classList.add('menu')\n    navEl.appendChild(menuBtn)\n    \n    const contactBtn = document.createElement('button')\n    contactBtn.innerText='Contact'\n    contactBtn.classList.add('btn-nav')\n    contactBtn.classList.add('contact')\n    navEl.appendChild(contactBtn)\n    \n    const mainEl = document.createElement('main')\n    mainEl.classList.add('main')\n    contentEl.appendChild(mainEl)\n    \n    const divContainer = document.createElement('div')\n    divContainer.classList.add('container')\n    mainEl.appendChild(divContainer)\n    \n    const footerEl = document.createElement('footer')\n    footerEl.classList.add('footer')\n    contentEl.appendChild(footerEl)\n    \n    const textFooter = document.createElement('p')\n    textFooter.textContent = 'Copyright © 2023 AJarzab'\n    footerEl.appendChild(textFooter)\n    \n    const linkFooter = document.createElement('a')\n    linkFooter.href = 'https://github.com/AJarzab'\n    footerEl.appendChild(linkFooter)\n    \n    const logoFooter = document.createElement('i')\n    logoFooter.classList.add('fab')\n    logoFooter.classList.add('fa-github')\n    linkFooter.appendChild(logoFooter)\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/pageLoad.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;