/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ForceSide;
(function (ForceSide) {
    ForceSide[ForceSide["Light"] = 0] = "Light";
    ForceSide[ForceSide["Dark"] = 1] = "Dark";
})(ForceSide = exports.ForceSide || (exports.ForceSide = {}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_enum_1 = __webpack_require__(0);
var ForceWarrior = (function () {
    function ForceWarrior(p_name, p_power, p_side) {
        this.name = p_name;
        this.power = p_power;
        this.side = p_side;
    }
    ForceWarrior.prototype.isOnTheLightSide = function () {
        return (this.side == app_enum_1.ForceSide.Light);
    };
    ForceWarrior.prototype.isOnTheDarkSide = function () {
        return (this.side == app_enum_1.ForceSide.Dark);
    };
    return ForceWarrior;
}());
exports.ForceWarrior = ForceWarrior;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ForceWarrior_1 = __webpack_require__(1);
var JediKnight = (function (_super) {
    __extends(JediKnight, _super);
    function JediKnight(p_name, p_power, p_side) {
        return _super.call(this, p_name, p_power, p_side) || this;
    }
    return JediKnight;
}(ForceWarrior_1.ForceWarrior));
exports.JediKnight = JediKnight;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ForceWarrior_1 = __webpack_require__(1);
var SithLord = (function (_super) {
    __extends(SithLord, _super);
    function SithLord(p_name, p_power, p_side) {
        return _super.call(this, p_name, p_power, p_side) || this;
    }
    return SithLord;
}(ForceWarrior_1.ForceWarrior));
exports.SithLord = SithLord;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var R2D2_1 = __webpack_require__(6);
var C3PO_1 = __webpack_require__(5);
var DroidFactory = (function () {
    function DroidFactory() {
    }
    DroidFactory.prototype.getRandomDroid = function () {
        var rand = Math.random();
        if (rand > 0.5) {
            return new C3PO_1.C3PO();
        }
        else {
            return new R2D2_1.DroidNS.R2D2();
        }
    };
    return DroidFactory;
}());
exports.DroidFactory = DroidFactory;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var C3PO = (function () {
    function C3PO() {
    }
    C3PO.prototype.move = function () {
        console.log("C3PO se dandine jusqu'à sa cible...");
    };
    return C3PO;
}());
exports.C3PO = C3PO;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DroidNS;
(function (DroidNS) {
    var R2D2 = (function () {
        function R2D2() {
        }
        R2D2.prototype.move = function () {
            console.log("R2D2 roule jusqu'à sa cible...");
        };
        return R2D2;
    }());
    DroidNS.R2D2 = R2D2;
})(DroidNS = exports.DroidNS || (exports.DroidNS = {}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var JediKnight_1 = __webpack_require__(2);
var SithLord_1 = __webpack_require__(3);
var app_enum_1 = __webpack_require__(0);
var DroidFactory_1 = __webpack_require__(4);
function makeDroidMove(p_droid) {
    p_droid.move();
}
var anakin = new JediKnight_1.JediKnight("Anakin Skywalker", 100, app_enum_1.ForceSide.Light);
var darky = new SithLord_1.SithLord("Dark Vador", 200, app_enum_1.ForceSide.Dark);
console.log(anakin, darky);
var factory = new DroidFactory_1.DroidFactory();
makeDroidMove(factory.getRandomDroid());
makeDroidMove(factory.getRandomDroid());
makeDroidMove(factory.getRandomDroid());
makeDroidMove(factory.getRandomDroid());
makeDroidMove(factory.getRandomDroid());
makeDroidMove(factory.getRandomDroid());
function useTheForce(options) {
    return function (target) {
        var prop;
        for (prop in options) {
            target.prototype[prop] = options[prop];
        }
    };
}
var Toto = (function () {
    function Toto() {
    }
    return Toto;
}());
Toto = __decorate([
    useTheForce({
        "name": "anakin",
        "force": function () {
            console.log("je suis un JediKnight qui soulève description cailloux par la pensée");
        }
    })
], Toto);
var a = new Toto();
a.force();


/***/ })
/******/ ]);