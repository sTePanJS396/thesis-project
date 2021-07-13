/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelesson30_1"]("main",{

/***/ "./src/modules/sendingData.js":
/*!************************************!*\
  !*** ./src/modules/sendingData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendingData\": () => (/* binding */ sendingData)\n/* harmony export */ });\n// Отправка данных\nfunction sendingData() {\n  function form() {\n    var errorMessage = 'Что-то пошло не так...';\n    var loadMessage = 'Загрузка...';\n    var successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n    var form = document.getElementById('form');\n    var statusMessage = document.createElement('div');\n    statusMessage.setAttribute('style', 'font-size: 2rem; color: #000000;');\n    form.addEventListener('submit', function (event) {\n      event.preventDefault();\n      form.appendChild(statusMessage);\n      statusMessage.textContent = loadMessage;\n      var formData = new FormData(form);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n      postData(body).then(function () {\n        statusMessage.textContent = successMessage;\n      }, function (error) {\n        statusMessage.textContent = errorMessage;\n        console.error(error);\n      });\n    });\n\n    function postData(body) {\n      return new Promise(function (resolve, reject) {\n        var request = new XMLHttpRequest();\n        request.addEventListener('readystatechange', function () {\n          if (request.readyState !== 4) {\n            return;\n          }\n\n          if (request.status === 200) {\n            resolve();\n            document.querySelectorAll('input').forEach(function (item) {\n              item.value = '';\n            });\n            document.querySelector('.feedback').disabled = true;\n            setTimeout(function () {\n              document.querySelector('.modal-callback').style.display = 'none';\n              document.querySelector('.modal-overlay').style.display = 'none';\n            }, 3000);\n            return;\n          } else {\n            reject(request.status);\n            document.querySelectorAll('input').forEach(function (item) {\n              item.value = '';\n            });\n            document.querySelector('.feedback').disabled = true;\n            setTimeout(function () {\n              document.querySelector('.modal-callback').style.display = 'none';\n              document.querySelector('.modal-overlay').style.display = 'none';\n            }, 3000);\n            return;\n          }\n        });\n        request.open('POST', './server.php');\n        request.setRequestHeader('Content-Type', 'application/json');\n        request.send(JSON.stringify(body));\n      });\n    }\n  }\n\n  form();\n} // sendingData();\n\n//# sourceURL=webpack://lesson30.1/./src/modules/sendingData.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f4672da62246570e859b")
/******/ })();
/******/ 
/******/ }
);