module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(632);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 129:
/***/ (function(module) {

module.exports = require("child_process");

/***/ }),

/***/ 331:
/***/ (function(module) {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 632:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(331);
const exec = __webpack_require__(129).exec;

async function run() {
    // const path = "test/test.properties";
    const path = core.getInput('path');
    console.log(`path:${path}`);
    // const property = "version";
    const property = core.getInput('property');
    console.log(`property:${property}`);
    exec(`sed -n "/^[[:space:]]*${property}[[:space:]]*=[[:space:]]*/s/^[[:space:]]*${property}[[:space:]]*=[[:space:]]*//p" "${path}"`, (error, stdout, stderr) => {
        if(error != null) {
            core.setFailed(error);
        }
        if(stderr != null) {
            console.log(stderr);
        }
        const value = stdout;
        console.log(stdout);
        console.log(`property value:${value}`);
        core.setOutput("value", value);
    });
}

run();

/***/ })

/******/ });