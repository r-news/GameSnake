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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Area__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Snake__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Apple__ = __webpack_require__(5);




let x = -10, y = 0;
let contador = 0;

window.onload = function () {
    let x2=document.getElementById('mycanvas').width;
    let y2=document.getElementById('mycanvas').height;
    
    let area = new __WEBPACK_IMPORTED_MODULE_0__Area__["a" /* default */](0, 0, x2, y2);
    let snake = new __WEBPACK_IMPORTED_MODULE_1__Snake__["a" /* default */]();
   

    
    let canva = document.getElementById("mycanvas");
    let ctx = canva.getContext('2d');
   
    area.drawObjects(ctx);
    Juego();
    let direccion;
    var pat;

    function Juego() {
        pat = ctx.createPattern(canva, "repeat");
        window.setInterval(dibujar, 500);
    }

    window.onkeydown = function (e) {
        controlTeclas(e, true);
    }

    window.onkeyup = function (event) {
        controlTeclas(event, false);
    }

    function dibujar() {
        let apple = new __WEBPACK_IMPORTED_MODULE_2__Apple__["a" /* default */](Math.random()*50,Math.random()*50);
        console.log('Aples '+apple.position.x);

        if (contador === snake.size) {
            snake.body.splice(0, 1);
            contador = snake.size - 1;
        }
        if (contador < snake.size) {
            contador++;

            if (direccion === 0) {
                y += -10;
                snake.move(x, y);
            }
            if (direccion === 1) {
                x += 10;
                snake.move(x, y);
            }
            if (direccion === 2) {
                y += 10;
                snake.move(x, y);
            }
            if (direccion === 3) {
                x += -10;
                snake.move(x, y);
            }
        }

        ctx.fillStyle = pat;
        ctx.fillRect(area.x1, area.y1, area.x2, area.y2);
        ctx.fillStyle = "rgb(255,100,0)";
        ctx.beginPath();

        area.paintTerrain(ctx, area.x2, area.y2, "rgb(36,23,23)");
        ctx.fillRect(apple.position.x,apple.position.y,10,10);
        for (let i = 0; i < snake.body.length; i++) {
            ctx.fillRect(snake.body[i].x, snake.body[i].y, x2/50, y2/50);
        }

    }

    function controlTeclas(event, valorB) {
        let clave = event.keyCode;
        if (clave === 38)
            direccion = 0;
        if (clave === 39)
            direccion = 1;
        if (clave === 40)
            direccion = 2;
        if (clave === 37)
            direccion = 3;
    }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Point__ = __webpack_require__(2);


class Area {
    constructor(x, y, width, height) {
        this.area = new Array();
        this.n = 50;
        this.x1 = x;
        this.x2 = width;
        this.y1 = y;
        this.y2 = height;
        this.matrix=new Array(this.x2/(width / this.n));
        //[][this.y2/(height / this.n)];
        console.log('ChEVEre '+this.matrix);

        var returnedArray = [];
        for(var i=0; i<width; i++) {
            returnedArray[i] = new Array(width/this.n);
        } 

        this.area[0] = new __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* default */](this.x1, this.y1);
        this.area[1] = new __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* default */](this.x2, this.y1);
        this.area[2] = new __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* default */](this.x2, this.y2);
        this.area[3] = new __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* default */](this.x1, this.y2);


    }

    drawObjects(ctx){
ctx.fillStyle = "#908513";

    ctx.fillRect(this.x1, this.y1, this.x2, this.y2);
    }

    paintTerrain(ctx, x2, y2, color) {
        const fill=1.0;
        ctx.fillStyle = color;
        for (let x = 0; x < y2; x = x + y2 / this.n) {
            ctx.fillRect(0, x, x2, fill);
        }

        for (let x = 0; x < x2; x = x + x2 / this.n) {
            ctx.fillRect(x, 0, fill, x2);
        }
    }

}

/* harmony default export */ __webpack_exports__["a"] = (Area);



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Point {
  constructor(a,b) {
    
  }
  saludar(){
      console.log('FEUER');
  }
}
/* harmony default export */ __webpack_exports__["a"] = (Point);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Square__ = __webpack_require__(4);


class Snake {

    constructor() {
        let face = new __WEBPACK_IMPORTED_MODULE_0__Square__["a" /* default */]();
        let lengua = new __WEBPACK_IMPORTED_MODULE_0__Square__["a" /* default */]();
        this.size = 10;
        this.body = new Array();
    }

    move(stepX, stepY) {
        let paso = {};
        paso.x = stepX;
        paso.y = stepY;
        this.body.push(paso);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Snake);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Square {

    constructor(x, y, ancho, altura) {
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.altura = altura;
    }

    draw(ctx, x, y, ancho, altura, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x , y , ancho, altura);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Square);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Apple {
  constructor(x,y) {
    this.position={};
    this.position.x=Math.round(x / 10) * 100
    this.position.y=Math.round(y / 10) * 100;

  }
  saludar(){
      console.log('Apple');
  }

  
}
/* harmony default export */ __webpack_exports__["a"] = (Apple);

/***/ })
/******/ ]);