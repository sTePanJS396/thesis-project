/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelesson30_1"]("main",{

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slider\": () => (/* binding */ slider)\n/* harmony export */ });\n// Главный слайдер\nfunction slider() {\n  var topSlider = function topSlider() {\n    var itemSlide = document.querySelectorAll('.item'),\n        table = document.querySelectorAll('.table');\n    var slideIndex = 1;\n\n    var showSlides = function showSlides(n) {\n      if (n > itemSlide.length) {\n        slideIndex = 1;\n      }\n\n      if (n < 1) {\n        slideIndex = itemSlide.length;\n      }\n\n      itemSlide.forEach(function (item) {\n        item.classList.add('animated');\n        item.style.display = 'none';\n      });\n      itemSlide[slideIndex - 1].style.display = 'block';\n      table.forEach(function (item) {\n        item.classList.remove('active');\n      });\n    };\n\n    showSlides(slideIndex);\n\n    function plusSlides(n) {\n      showSlides(slideIndex += n);\n    }\n\n    setInterval(function () {\n      plusSlides(1);\n      itemSlide[slideIndex - 1].classList.remove('fadeIn');\n      itemSlide[slideIndex - 1].classList.add('fadeIn');\n      setTimeout(function () {\n        return table[slideIndex - 1].classList.add('active');\n      }, 10);\n      setTimeout(function () {\n        return table[slideIndex - 1].classList.remove('active');\n      }, 2550);\n    }, 4000);\n  };\n\n  topSlider(); // let indexSlider = 0;\n  // const sliderItem = document.querySelectorAll('.item');\n  // const table = document.querySelectorAll('.table');\n  // table.forEach((item) => {\n  //     item.classList.add('table')\n  // })\n  // setInterval(() => {\n  //     sliderItem[indexSlider].style.display = 'block';\n  //     // table[indexSlider].classList.add('active');\n  //     if (indexSlider !== 0) {\n  //         sliderItem[indexSlider - 1].style.display = 'none';\n  //     }\n  //     indexSlider++;\n  //     if (indexSlider > 2) {\n  //         indexSlider = 0; \n  //     }\n  // }, 3000);\n} // slider()\n\n//# sourceURL=webpack://lesson30.1/./src/modules/slider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e18740b565f12740ead4")
/******/ })();
/******/ 
/******/ }
);