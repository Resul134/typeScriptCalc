/******/ (function(modules) { // webpackBootstrap
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.htm":
/*!***********************!*\
  !*** ./src/index.htm ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.htm";

/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

//#region Save, clear, show.
var words = [];
var word;
var listWord;
var inputElement = document.getElementById("wordInput");
var saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", saveWords);
var showButton = document.getElementById("showButton");
showButton.addEventListener("click", showWords);
var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearWords);
var outputElement = document.getElementById("output");
//String manipulations
var inputManiuplation = document.getElementById("userInput");
var doItButton = document.getElementById("convertText");
doItButton.addEventListener("click", convertString);
var output = document.getElementById("outputManipulation");
var optionToLower = document.getElementById("Lower");
var optionToUpper = document.getElementById("Upper");
//liste element
var inputListElement = document.getElementById("listInput");
//Calculator
var calcInput1 = document.getElementById("calcInput1");
var calcInput2 = document.getElementById("calcInput2");
var calcOutput = document.getElementById("calcOutput");
var allOptions = document.getElementById("SelectedNumber");
var optionPlus = document.getElementById("Plus");
var optionMinus = document.getElementById("Minus");
var optionGange = document.getElementById("Gange");
var optionDivider = document.getElementById("Divider");
var buttonCalc = document.getElementById("buttonCalculate");
buttonCalc.addEventListener("click", Calculate);
function Calculate() {
    var number1string = calcInput1.value;
    var number2string = calcInput2.value;
    var number1 = Number(number1string);
    var number2 = Number(number2string);
    if (number1 != null && number2 != null) {
        if (optionPlus.selected) {
            var sum1 = Number(number1 + number2);
            calcOutput.innerHTML = sum1.toString();
            console.log(calcOutput.innerHTML);
        }
        else if (optionMinus.selected) {
            var sum2 = Number(number1 - number2);
            calcOutput.innerHTML = sum2.toString();
            console.log(calcOutput.innerHTML);
        }
        else if (optionGange.selected) {
            var sum3 = Number(number1 * number2);
            calcOutput.innerHTML = sum3.toString();
            console.log(calcOutput.innerHTML);
        }
        else if (optionDivider.selected) {
            var sum4 = Number(number1 / number2);
            calcOutput.innerHTML = sum4.toString();
            console.log(calcOutput.innerHTML);
        }
    }
    calcOutput.innerHTML = "You can't leave them blank";
}
function sayHello() {
    var inputElement = document.getElementById("inputField");
    var name = inputElement.value;
    console.log("name: " + name);
    outputElement.innerHTML = "Hello" + " " + name;
}
function saveWords() {
    words = inputElement.value.split(",");
    console.log(words);
}
function showWords() {
    words = inputElement.value.split(",");
    if (words.length > 0)
        outputElement.innerHTML = words.toString();
}
function clearWords() {
    words = [];
    outputElement.innerHTML = "";
    inputElement.value = "";
    console.log("Cleared" + words);
}
function convertString() {
    if (optionToUpper.selected != null && optionToLower.selected != null) {
        if (optionToLower.selected) {
            var word = inputManiuplation.value;
            output.innerHTML = word.toLocaleLowerCase();
        }
        console.log("To Lower Selected: " + optionToLower.selected);
        if (optionToUpper.selected) {
            var word = inputManiuplation.value;
            output.innerHTML = word.toUpperCase();
        }
        console.log("To upper Selected: " + optionToUpper.selected);
    }
}
function addListELement() {
    listWord = inputListElement.value;
    var listElement = document.createElement("li");
    word = listElement.innerHTML;
    listElement.appendChild(listElement);
    console.log("list element apended");
    listElement.addEventListener("copy", function (keyevent) {
        if (keyevent.keyCode === 13) {
            addListELement();
        }
    });
}


/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bundle.css";

/***/ }),

/***/ 0:
/*!**********************************************************************!*\
  !*** multi ./src/index.htm ./src/scss/styles.scss ./src/js/index.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.htm */"./src/index.htm");
__webpack_require__(/*! ./src/scss/styles.scss */"./src/scss/styles.scss");
module.exports = __webpack_require__(/*! ./src/js/index.ts */"./src/js/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map