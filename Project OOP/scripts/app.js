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

/***/ "./src/App/ProjectItem.js":
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectItem\": () => (/* binding */ ProjectItem)\n/* harmony export */ });\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n\r\n// import { Tooltip } from \"./Tooltip.js\";\r\n\r\nclass ProjectItem {\r\n  hasActiveTooltip = false;\r\n\r\n  constructor (id, updateProjectListsFunction, type) {\r\n    this.id = id;\r\n    this.updateProjectListsHandler = updateProjectListsFunction;\r\n    this.connectMoreInfoBtn();\r\n    this.connectSwitchBtn(type);\r\n    this.connectDrag();\r\n  }\r\n\r\n  showMoreInfoHandler () {\r\n    if (this.hasActiveTooltip) {\r\n      return;\r\n    }\r\n    const projectElement = document.getElementById(this.id);\r\n    const toolTipText = projectElement.dataset.extraInfo;\r\n    console.log(projectElement.dataset);\r\n    __webpack_require__.e(/*! import() */ \"src_App_Tooltip_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./Tooltip.js */ \"./src/App/Tooltip.js\")).then(module => {\r\n      const tooltip = new module.Tooltip(() => {\r\n        this.hasActiveTooltip = false;\r\n      }, toolTipText, this.id);\r\n      tooltip.attach();\r\n      this.hasActiveTooltip = true;\r\n    });\r\n  }\r\n\r\n  connectDrag () {\r\n    document.getElementById(this.id).addEventListener(\"dragstart\", e => {\r\n      e.dataTransfer.setData(\"text/plain\", this.id);\r\n      e.dataTransfer.effectAllowed = \"move\";\r\n    });\r\n  }\r\n\r\n  connectMoreInfoBtn () {\r\n    const projectItemElement = document.getElementById(this.id);\r\n    const moreInfoBtn = projectItemElement.querySelector(\"button:first-of-type\");\r\n    moreInfoBtn.addEventListener(\"click\", this.showMoreInfoHandler.bind(this));\r\n  }\r\n\r\n  connectSwitchBtn (type) {\r\n    const projectItemElement = document.getElementById(this.id);\r\n    let switchBtn = projectItemElement.querySelector(\"button:last-of-type\");\r\n    switchBtn = _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__.clearEventListeners(switchBtn);\r\n    switchBtn.textContent = type === \"active\" ? \"finished\" : \"activate\";\r\n    switchBtn.addEventListener(\"click\", this.updateProjectListsHandler.bind(null, this.id));\r\n  }\r\n\r\n  update (updateProductsListsFn, type) {\r\n    this.updateProjectListsHandler = updateProductsListsFn;\r\n    this.connectSwitchBtn(type);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript-packages-tooling/./src/App/ProjectItem.js?");

/***/ }),

/***/ "./src/App/ProjectList.js":
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectList\": () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.js */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n\r\n\r\n\r\nclass ProjectList {\r\n  projects = [];\r\n\r\n  constructor (type) {\r\n    this.type = type;\r\n    const prjItems = document.querySelectorAll(`#${type}-projects li`);\r\n    // console.log(prjItems);\r\n    for (const prjItem of prjItems) {\r\n      this.projects.push(new _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__.ProjectItem(prjItem.id, this.switchProjects.bind(this), this.type));\r\n    }\r\n    console.log(this.projects);\r\n    this.connectDroppable();\r\n  }\r\n\r\n  connectDroppable () {\r\n    const list = document.querySelector(`#${this.type}-projects ul`);\r\n    list.addEventListener(\"dragenter\", e => {\r\n      if (e.dataTransfer.types[0] === \"text/plain\") {\r\n        e.preventDefault();\r\n        list.parentElement.classList.add(\"droppable\");\r\n      }\r\n    },\r\n    list.addEventListener(\"dragover\", e => {\r\n      if (e.dataTransfer.types[0] === \"text/plain\") {\r\n        e.preventDefault();\r\n      }\r\n\r\n      list.addEventListener(\"dragleave\", e => {\r\n        if (e.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\r\n          list.parentElement.classList.remove(\"droppable\");\r\n        }\r\n      });\r\n\r\n      list.addEventListener(\"drop\", e => {\r\n        const prjId = e.dataTransfer.getData(\"text/plain\");\r\n        if (this.projects.find(p => p.id === prjId)) {\r\n          return;\r\n        }\r\n        document.getElementById(prjId).querySelector(\"button:last-of-type\").click();\r\n        list.parentElement.classList.remove(\"droppable\");\r\n        e.preventDefault();\r\n      });\r\n    }));\r\n  }\r\n\r\n  setSwitchHandlerFunction (switchHandlerFunction) {\r\n    this.switchHandler = switchHandlerFunction;\r\n  }\r\n\r\n  addProjects (project) {\r\n    this.projects.push(project);\r\n    (0,_Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__.moveElement)(project.id, `#${this.type}-projects ul`);\r\n    project.update(this.switchProjects.bind(this), this.type);\r\n  }\r\n\r\n  switchProjects (projectId) {\r\n    // const projectIndex = this.projects.findIndex(p => p.id === projectId);\r\n    // this.projects.splice(projectIndex, 1);\r\n    this.switchHandler(this.projects.find(p => p.id === projectId));\r\n    this.projects = this.projects.filter(p => p.id !== projectId);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://javascript-packages-tooling/./src/App/ProjectList.js?");

/***/ }),

/***/ "./src/Utility/Analytics.js":
/*!**********************************!*\
  !*** ./src/Utility/Analytics.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"intervalId\": () => (/* binding */ intervalId)\n/* harmony export */ });\n\r\nconst timerInput = 2000;\r\n\r\nconst intervalId = setInterval(() => {\r\n  console.log(\"start analytics....\");\r\n}, timerInput);\r\n\r\ndocument.getElementById(\"btnCreate\").addEventListener(\"click\", () => {\r\n  clearInterval(intervalId);\r\n});\r\n\n\n//# sourceURL=webpack://javascript-packages-tooling/./src/Utility/Analytics.js?");

/***/ }),

/***/ "./src/Utility/DOMHelper.js":
/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMHelper\": () => (/* binding */ DOMHelper),\n/* harmony export */   \"clearEventListeners\": () => (/* binding */ clearEventListeners),\n/* harmony export */   \"moveElement\": () => (/* binding */ moveElement)\n/* harmony export */ });\nclass DOMHelper {\r\n\r\n}\r\n\r\nfunction clearEventListeners(element) {\r\n  const clonedElement = element.cloneNode(true);\r\n  element.replaceWith(clonedElement);\r\n  return clonedElement;\r\n}\r\nfunction moveElement(elementId, newDestinationSelector) {\r\n  const element = document.getElementById(elementId);\r\n  const destinationElement = document.querySelector(newDestinationSelector);\r\n  destinationElement.append(element);\r\n  element.scrollIntoView({ top: 50, behavior: \"smooth\" });\r\n}\r\n\n\n//# sourceURL=webpack://javascript-packages-tooling/./src/Utility/DOMHelper.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList.js */ \"./src/App/ProjectList.js\");\n/* harmony import */ var _Utility_Analytics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility/Analytics.js */ \"./src/Utility/Analytics.js\");\n\r\n\r\n\r\nclass App {\r\n  static init () {\r\n    const activeProjectsList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList(\"active\");\r\n    const finishedProjectsList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList(\"finished\");\r\n    activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProjects.bind(finishedProjectsList));\r\n    finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProjects.bind(activeProjectsList));\r\n\r\n    // const timerInt = setTimeout(()=>{\r\n    //     console.log(\"sending data....\")\r\n    // }, 3000);\r\n\r\n    // document.getElementById(\"btnCreate\").addEventListener(\"click\", () => {\r\n    //     clearTimeout(timerInt);\r\n    // })\r\n\r\n    // const someScript = document.createElement(\"script\");\r\n    // someScript.textContent = 'alert(\"Hi there\");';\r\n    // document.head.append(someScript);\r\n\r\n    // this.startAnalytics();\r\n    document.getElementById(\"btnCreate\").addEventListener(\"click\", this.startAnalytics);\r\n  }\r\n\r\n  // static startAnalytics () {\r\n  //   const analyticsScript = document.createElement(\"script\");\r\n  //   analyticsScript.src = \"./Utility/Analytics.js\";\r\n  //   analyticsScript.defer = true;\r\n  //   analyticsScript.type = \"module\";\r\n  //   document.head.append(analyticsScript);\r\n  // }\r\n}\r\n\r\nApp.init();\r\n\r\nconst myFunc = (cb) => {\r\n  const value = 6;\r\n  cb(value);\r\n};\r\n\r\nmyFunc(value => console.log(value));\r\n\r\n// const now = new Date();\r\n\r\n// console.log(now);\r\n// console.log(now.getFullYear());\r\n\r\n// let isPrime = true;\r\n\r\n// if(isPrime){\r\n//     console.log(\"start programming\");\r\n// }\r\n\r\n// class Element {\r\n//     show(){\r\n//         const createElement = document.createElement(\"div\");\r\n//         createElement.className = \"createBtn\";\r\n//         document.body.append(\"createElement\");\r\n//         createElement.textContent = \"DUMMY\";\r\n//     }\r\n// }\r\n\r\n// class CreateElement{\r\n//     constructor(id){\r\n//         this.id = id\r\n//         this.create();\r\n//         this.render();\r\n//     }\r\n\r\n//     create(){\r\n//         const createElement = document.createElement(\"div\");\r\n//         createElement.className = \"tooltip\";\r\n//         document.body.append(createElement);\r\n//         createElement.textContent = \"DUMMY\";\r\n//         // const element =  new Element();\r\n//         // element.show();\r\n//         // console.log(this);\r\n//     }\r\n\r\n//     render(){\r\n//         const createBtn = document.getElementById(this.id);\r\n//         createBtn.addEventListener(\"click\", this.create.bind(this));\r\n//     }\r\n// }\r\n\r\n// new CreateElement(\"btnCreate\");\r\n\r\nfunction createTaxCalculator (tax) {\r\n  function calculateTax (amount) {\r\n    return amount * tax;\r\n  }\r\n\r\n  return calculateTax;\r\n}\r\n\r\nconst calculateVatAmount = createTaxCalculator(0.19);\r\nconst calculateIncomeTaxAmount = createTaxCalculator(0.25);\r\n\r\nconsole.log(calculateVatAmount(100));\r\nconsole.log(calculateIncomeTaxAmount(200));\r\n\r\nconst factoryFunction = string => {\r\n  const arrayOfCars = [\"toyota\", \"mazda\", \"bmw\"];\r\n  arrayOfCars.unshift(string);\r\n  console.log(arrayOfCars);\r\n  const factoryFunction2 = anotherString => {\r\n    const newCar = arrayOfCars[0] + \" \" + anotherString;\r\n    arrayOfCars.push(newCar);\r\n    return newCar;\r\n  };\r\n\r\n  return factoryFunction2;\r\n};\r\n\r\nconst result = factoryFunction(\"mercedes\");\r\n// const resultTwo = factoryFunction(\"ferrari\");\r\nconsole.log(result(\"AMG CLA 45 Coupe\"));\r\n\r\nfunction powerOf (x, n) {\r\n  let result = 1;\r\n  for (let i = 0; i < n; i++) {\r\n    result = result * x;\r\n  }\r\n  return result;\r\n}\r\n\r\nconsole.log(powerOf(4, 4));\r\n\r\nfunction power (x, n) {\r\n  if (n === 1) {\r\n    return x;\r\n  }\r\n  return x * power(x, n - 1);\r\n}\r\n\r\nconsole.log(power(2, 3));\r\n\r\nconst myself = {\r\n  name: \"jizzy\",\r\n  friends: [{\r\n    name: \"ceon\",\r\n    friends: [{ name: \"kehinde\" }]\r\n  },\r\n  {\r\n    name: \"dj fuse\"\r\n  }\r\n  ]\r\n};\r\n\r\nfunction printFriendNames (person) {\r\n  const collectedNames = [];\r\n\r\n  if (!person.friends) {\r\n    return [];\r\n  }\r\n  for (const friend of person.friends) {\r\n    // collectedNames.push(friend.name)\r\n    // console.log(collectedNames);\r\n    collectedNames.push(friend.name);\r\n    collectedNames.push(...printFriendNames(friend));\r\n  }\r\n\r\n  return collectedNames;\r\n}\r\n\r\nconsole.log(printFriendNames(myself));\r\n\r\nconsole.log(0.2 + 0.6);\r\n\n\n//# sourceURL=webpack://javascript-packages-tooling/./src/app.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".app.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "javascript-packages-tooling:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 		__webpack_require__.p = "Project OOP/scr";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
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
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkjavascript_packages_tooling"] = self["webpackChunkjavascript_packages_tooling"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;