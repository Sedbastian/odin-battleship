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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./BigShouldersStencil.woff2 */ "./src/BigShouldersStencil.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Audiowide-Regular.ttf */ "./src/Audiowide-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: \"BigShouldersStencil\";\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n\tfont-family: \"Audiowide-Regular\";\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\nhtml {\n\tbackground-color: black;\n}\n\nmain {\n\theight: 95vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tfont-family: Audiowide-Regular;\n\tfont-size: 1.5rem;\n\ttext-align: center;\n}\n\n.version {\n\t/* flex-grow: 1; */\n\tmargin-top: auto;\n\tcolor: white;\n}\n\n@keyframes marcosclave1 {\n\tfrom {\n\t\topacity: 0.7;\n\t\t/* text-shadow: 0 0 .5rem rgb(162, 0, 255); */\n\t}\n\tto {\n\t\topacity: 1;\n\t\ttext-shadow: 0 0 5rem rgb(162, 0, 255);\n\t}\n}\n\nh1 {\n\ttext-align: center;\n\tfont-family: \"BigShouldersStencil\";\n\tcolor: grey;\n\tfont-size: 7rem;\n\t/* text-shadow: 0 0 .5rem rgb(162, 0, 255); */\n\tmargin-top: 1rem;\n\tmargin-bottom: 2rem;\n\n\t/* animation: marcosclave1 1.5s linear 0s infinite alternate; */\n}\n\nh2 {\n\tcolor: goldenrod;\n\tfont-size: 2rem;\n}\n\n.name {\n\tfont-size: 1.5rem;\n\tmargin-bottom: 0;\n\tcolor: forestgreen;\n}\n\ninput {\n\tmargin-bottom: 1rem;\n\tbackground-color: grey;\n\tborder-style: none;\n\tborder-radius: 0.5rem;\n\tpadding: 1rem;\n\tfont-size: 1.5rem;\n\tfont-weight: bold;\n\tfont-family: \"Courier New\", Courier, monospace;\n\ttext-align: center;\n\tbox-shadow: 0 0 0.5rem rgb(150, 150, 150);\n}\n\ninput::placeholder {\n\tcolor: rgb(64, 64, 64);\n}\n\ninput:focus {\n\toutline-style: none;\n\tbackground-color: olivedrab;\n}\n\nbutton {\n\tmargin: 0.3rem;\n\tpadding: 0.6rem;\n\tbackground-color: orangered;\n\tborder-style: none;\n\tborder-radius: 0.5rem;\n\tfont-size: 1.5rem;\n\tfont-weight: bold;\n\tfont-family: \"Courier New\", Courier, monospace;\n}\n\nbutton:hover {\n\tbackground-color: rgb(255, 32, 0);\n\ttransform: scale(1.04);\n\tcursor: pointer;\n}\n\nbutton.placeRandomShips {\n\twidth: min-content;\n\tbackground-color: rgb(128, 0, 255);\n}\n\nbutton.placeRandomShips:hover {\n\tbackground-color: rgb(64, 0, 255);\n}\n\n.buttonContainer {\n\tflex-grow: 1;\n\tflex-basis: 45%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\nbutton.toggleBoards {\n\tflex-basis: 70%;\n\talign-self: center;\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\tbackground-color: orangered;\n\tborder-radius: 1rem;\n\tborder-width: 1rem;\n\tborder-style: none;\n\tpadding: 1rem;\n\topacity: 0;\n}\n\nbutton.toggleBoards:hover {\n\tbackground-color: rgb(255, 32, 0);\n\ttransform: scale(1.04);\n\tcursor: pointer;\n}\n\nbutton.toggleBoards.afterPlacing {\n\theight: 5rem;\n}\n\nbutton.battleBegins {\n\tflex-basis: 70%;\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\tbackground-color: rgb(162, 0, 255);\n\tborder-radius: 1rem;\n\tborder-width: 1rem;\n\tborder-style: none;\n\tpadding: 1rem;\n\topacity: 0;\n\theight: min-content;\n}\n\nbutton.showHiddenBoards {\n\tmargin-top: 6rem;\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\tbackground-color: orangered;\n\tborder-radius: 1rem;\n\tborder-width: 1rem;\n\tborder-style: none;\n\tpadding: 1rem;\n}\n\nbutton.fadeIn {\n\topacity: 1;\n\ttransition: opacity 1000ms ease-in-out;\n}\n\n.playerDiv.player1,\n.playerDiv.player2 {\n\twidth: 100%;\n\tfont-family: Audiowide-Regular;\n\tfont-size: 2rem;\n}\n\n.playerDiv.player1.hidden,\n.playerDiv.player2.hidden {\n\tdisplay: none;\n}\n\n.boardsContainer {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 1rem;\n\t/* justify-content: space-between; */\n}\n\n.verticalShipsContainer,\n.horizontalShipsContainer {\n\tflex-grow: 1;\n\tflex-basis: 45%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.verticalShipsContainer .gameboard {\n\tgap: 0.5rem;\n}\n\n.messages {\n\tfont-size: 2rem;\n\theight: 6rem;\n\ttext-align: center;\n\tcolor: green;\n}\n\n.ownBoardTitle {\n\tcolor: forestgreen;\n\theight: 6rem;\n}\n\n.enemyBoardTitle {\n\tcolor: orangered;\n\theight: 6rem;\n}\n\n.gameboardContainer {\n\tflex-grow: 1;\n\tflex-basis: 45%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.gameboard {\n\tdisplay: flex;\n\tmargin: 1rem;\n\tcursor: crosshair;\n}\n\n.row.empty {\n\tdisplay: none;\n}\n\n.horizontalShipsContainer .row {\n\tmargin-bottom: 1rem;\n}\n\n.rowDraggable {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\twidth: 100%;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.square {\n\twidth: 3rem;\n\theight: 3rem;\n\tposition: relative;\n\tz-index: 1;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\taspect-ratio: 1;\n\tborder-style: solid;\n\tborder-color: rgb(0, 0, 0);\n\tborder-width: 0.1rem;\n\tborder-radius: 0.5rem;\n\tfont-size: 2rem;\n}\n\n.square:hover {\n\topacity: 0.7;\n}\n\n.notAttacked {\n\tbackground-color: grey;\n}\n\n@keyframes water {\n\tfrom {\n\t\ttransform: rotateZ(-20deg) rotateX(-40deg);\n\t\tbackground-color: rgb(0, 0, 168);\n\t}\n\tto {\n\t\ttransform: rotateZ(20deg) rotateX(40deg);\n\t\tbackground-color: rgb(0, 0, 255);\n\t}\n}\n\n.water {\n\tbackground-color: blue;\n}\n\n.waterAnimation {\n\tposition: relative;\n\tz-index: 0;\n\tanimation: water 1s linear 0s infinite alternate;\n}\n\n.square.questionTrans {\n\ttransform: rotateX(720deg);\n\ttransition: transform 1000ms ease-in-out;\n}\n\n.square.ship {\n\tbackground-color: brown;\n}\n\n.shipTrans {\n\ttransform: rotateY(720deg);\n\ttransition: transform 1000ms ease-in-out;\n}\n\n.square.sunkenShip {\n\tbackground-color: red;\n\ttransform: rotateZ(720deg);\n\ttransition: transform 1000ms ease-in-out;\n}\n\n.square.lastSunkenShip {\n\tbackground-color: red;\n\ttransform: rotateZ(720deg) scale(5);\n\ttransition: transform 1000ms ease-in-out;\n}\n\n.square.attacked {\n\tz-index: 2;\n\tborder-style: solid;\n\tborder-color: red;\n\ttransition: transform 700ms ease-in-out;\n}\n\n.square.attacked.attackedTrans {\n\ttransform: rotateZ(720deg) scale(5);\n}\n\n@keyframes marcosclave {\n\tfrom {\n\t\topacity: 0.5;\n\t\ttransform: scale(1);\n\t}\n\tto {\n\t\topacity: 1;\n\t\ttransform: scale(2);\n\t}\n}\n\n.square.lastAttacked {\n\tanimation: marcosclave 1s linear 0s infinite alternate;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,kCAAkC;CAClC,4CAAuC;AACxC;;AAEA;CACC,gCAAgC;CAChC,4CAAmC;AACpC;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,8BAA8B;CAC9B,iBAAiB;CACjB,kBAAkB;AACnB;;AAEA;CACC,kBAAkB;CAClB,gBAAgB;CAChB,YAAY;AACb;;AAEA;CACC;EACC,YAAY;EACZ,6CAA6C;CAC9C;CACA;EACC,UAAU;EACV,sCAAsC;CACvC;AACD;;AAEA;CACC,kBAAkB;CAClB,kCAAkC;CAClC,WAAW;CACX,eAAe;CACf,6CAA6C;CAC7C,gBAAgB;CAChB,mBAAmB;;CAEnB,+DAA+D;AAChE;;AAEA;CACC,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,iBAAiB;CACjB,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;CACnB,sBAAsB;CACtB,kBAAkB;CAClB,qBAAqB;CACrB,aAAa;CACb,iBAAiB;CACjB,iBAAiB;CACjB,8CAA8C;CAC9C,kBAAkB;CAClB,yCAAyC;AAC1C;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,mBAAmB;CACnB,2BAA2B;AAC5B;;AAEA;CACC,cAAc;CACd,eAAe;CACf,2BAA2B;CAC3B,kBAAkB;CAClB,qBAAqB;CACrB,iBAAiB;CACjB,iBAAiB;CACjB,8CAA8C;AAC/C;;AAEA;CACC,iCAAiC;CACjC,sBAAsB;CACtB,eAAe;AAChB;;AAEA;CACC,kBAAkB;CAClB,kCAAkC;AACnC;;AAEA;CACC,iCAAiC;AAClC;;AAEA;CACC,YAAY;CACZ,eAAe;CACf,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,iBAAiB;CACjB,kBAAkB;CAClB,2BAA2B;CAC3B,mBAAmB;CACnB,kBAAkB;CAClB,kBAAkB;CAClB,aAAa;CACb,UAAU;AACX;;AAEA;CACC,iCAAiC;CACjC,sBAAsB;CACtB,eAAe;AAChB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,eAAe;CACf,iBAAiB;CACjB,kBAAkB;CAClB,kCAAkC;CAClC,mBAAmB;CACnB,kBAAkB;CAClB,kBAAkB;CAClB,aAAa;CACb,UAAU;CACV,mBAAmB;AACpB;;AAEA;CACC,gBAAgB;CAChB,iBAAiB;CACjB,kBAAkB;CAClB,2BAA2B;CAC3B,mBAAmB;CACnB,kBAAkB;CAClB,kBAAkB;CAClB,aAAa;AACd;;AAEA;CACC,UAAU;CACV,sCAAsC;AACvC;;AAEA;;CAEC,WAAW;CACX,8BAA8B;CAC9B,eAAe;AAChB;;AAEA;;CAEC,aAAa;AACd;;AAEA;CACC,aAAa;CACb,eAAe;CACf,SAAS;CACT,oCAAoC;AACrC;;AAEA;;CAEC,YAAY;CACZ,eAAe;CACf,aAAa;CACb,sBAAsB;CACtB,mBAAmB;AACpB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,eAAe;CACf,YAAY;CACZ,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,gBAAgB;CAChB,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,eAAe;CACf,aAAa;CACb,sBAAsB;CACtB,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,iBAAiB;AAClB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,2BAA2B;CAC3B,WAAW;AACZ;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,kBAAkB;CAClB,UAAU;CACV,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,eAAe;CACf,mBAAmB;CACnB,0BAA0B;CAC1B,oBAAoB;CACpB,qBAAqB;CACrB,eAAe;AAChB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC;EACC,0CAA0C;EAC1C,gCAAgC;CACjC;CACA;EACC,wCAAwC;EACxC,gCAAgC;CACjC;AACD;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,UAAU;CACV,gDAAgD;AACjD;;AAEA;CACC,0BAA0B;CAC1B,wCAAwC;AACzC;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,0BAA0B;CAC1B,wCAAwC;AACzC;;AAEA;CACC,qBAAqB;CACrB,0BAA0B;CAC1B,wCAAwC;AACzC;;AAEA;CACC,qBAAqB;CACrB,mCAAmC;CACnC,wCAAwC;AACzC;;AAEA;CACC,UAAU;CACV,mBAAmB;CACnB,iBAAiB;CACjB,uCAAuC;AACxC;;AAEA;CACC,mCAAmC;AACpC;;AAEA;CACC;EACC,YAAY;EACZ,mBAAmB;CACpB;CACA;EACC,UAAU;EACV,mBAAmB;CACpB;AACD;;AAEA;CACC,sDAAsD;AACvD","sourcesContent":["@font-face {\n\tfont-family: \"BigShouldersStencil\";\n\tsrc: url(\"./BigShouldersStencil.woff2\");\n}\n\n@font-face {\n\tfont-family: \"Audiowide-Regular\";\n\tsrc: url(\"./Audiowide-Regular.ttf\");\n}\n\nhtml {\n\tbackground-color: black;\n}\n\nmain {\n\theight: 95vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tfont-family: Audiowide-Regular;\n\tfont-size: 1.5rem;\n\ttext-align: center;\n}\n\n.version {\n\t/* flex-grow: 1; */\n\tmargin-top: auto;\n\tcolor: white;\n}\n\n@keyframes marcosclave1 {\n\tfrom {\n\t\topacity: 0.7;\n\t\t/* text-shadow: 0 0 .5rem rgb(162, 0, 255); */\n\t}\n\tto {\n\t\topacity: 1;\n\t\ttext-shadow: 0 0 5rem rgb(162, 0, 255);\n\t}\n}\n\nh1 {\n\ttext-align: center;\n\tfont-family: \"BigShouldersStencil\";\n\tcolor: grey;\n\tfont-size: 7rem;\n\t/* text-shadow: 0 0 .5rem rgb(162, 0, 255); */\n\tmargin-top: 1rem;\n\tmargin-bottom: 2rem;\n\n\t/* animation: marcosclave1 1.5s linear 0s infinite alternate; */\n}\n\nh2 {\n\tcolor: goldenrod;\n\tfont-size: 2rem;\n}\n\n.name {\n\tfont-size: 1.5rem;\n\tmargin-bottom: 0;\n\tcolor: forestgreen;\n}\n\ninput {\n\tmargin-bottom: 1rem;\n\tbackground-color: grey;\n\tborder-style: none;\n\tborder-radius: 0.5rem;\n\tpadding: 1rem;\n\tfont-size: 1.5rem;\n\tfont-weight: bold;\n\tfont-family: \"Courier New\", Courier, monospace;\n\ttext-align: center;\n\tbox-shadow: 0 0 0.5rem rgb(150, 150, 150);\n}\n\ninput::placeholder {\n\tcolor: rgb(64, 64, 64);\n}\n\ninput:focus {\n\toutline-style: none;\n\tbackground-color: olivedrab;\n}\n\nbutton {\n\tmargin: 0.3rem;\n\tpadding: 0.6rem;\n\tbackground-color: orangered;\n\tborder-style: none;\n\tborder-radius: 0.5rem;\n\tfont-size: 1.5rem;\n\tfont-weight: bold;\n\tfont-family: \"Courier New\", Courier, monospace;\n}\n\nbutton:hover {\n\tbackground-color: rgb(255, 32, 0);\n\ttransform: scale(1.04);\n\tcursor: pointer;\n}\n\nbutton.placeRandomShips {\n\twidth: min-content;\n\tbackground-color: rgb(128, 0, 255);\n}\n\nbutton.placeRandomShips:hover {\n\tbackground-color: rgb(64, 0, 255);\n}\n\n.buttonContainer {\n\tflex-grow: 1;\n\tflex-basis: 45%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\nbutton.toggleBoards {\n\tflex-basis: 70%;\n\talign-self: center;\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\tbackground-color: orangered;\n\tborder-radius: 1rem;\n\tborder-width: 1rem;\n\tborder-style: none;\n\tpadding: 1rem;\n\topacity: 0;\n}\n\nbutton.toggleBoards:hover {\n\tbackground-color: rgb(255, 32, 0);\n\ttransform: scale(1.04);\n\tcursor: pointer;\n}\n\nbutton.toggleBoards.afterPlacing {\n\theight: 5rem;\n}\n\nbutton.battleBegins {\n\tflex-basis: 70%;\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\tbackground-color: rgb(162, 0, 255);\n\tborder-radius: 1rem;\n\tborder-width: 1rem;\n\tborder-style: none;\n\tpadding: 1rem;\n\topacity: 0;\n\theight: min-content;\n}\n\nbutton.showHiddenBoards {\n\tmargin-top: 6rem;\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\tbackground-color: orangered;\n\tborder-radius: 1rem;\n\tborder-width: 1rem;\n\tborder-style: none;\n\tpadding: 1rem;\n}\n\nbutton.fadeIn {\n\topacity: 1;\n\ttransition: opacity 1000ms ease-in-out;\n}\n\n.playerDiv.player1,\n.playerDiv.player2 {\n\twidth: 100%;\n\tfont-family: Audiowide-Regular;\n\tfont-size: 2rem;\n}\n\n.playerDiv.player1.hidden,\n.playerDiv.player2.hidden {\n\tdisplay: none;\n}\n\n.boardsContainer {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tgap: 1rem;\n\t/* justify-content: space-between; */\n}\n\n.verticalShipsContainer,\n.horizontalShipsContainer {\n\tflex-grow: 1;\n\tflex-basis: 45%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.verticalShipsContainer .gameboard {\n\tgap: 0.5rem;\n}\n\n.messages {\n\tfont-size: 2rem;\n\theight: 6rem;\n\ttext-align: center;\n\tcolor: green;\n}\n\n.ownBoardTitle {\n\tcolor: forestgreen;\n\theight: 6rem;\n}\n\n.enemyBoardTitle {\n\tcolor: orangered;\n\theight: 6rem;\n}\n\n.gameboardContainer {\n\tflex-grow: 1;\n\tflex-basis: 45%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.gameboard {\n\tdisplay: flex;\n\tmargin: 1rem;\n\tcursor: crosshair;\n}\n\n.row.empty {\n\tdisplay: none;\n}\n\n.horizontalShipsContainer .row {\n\tmargin-bottom: 1rem;\n}\n\n.rowDraggable {\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\twidth: 100%;\n}\n\n.hidden {\n\tdisplay: none;\n}\n\n.square {\n\twidth: 3rem;\n\theight: 3rem;\n\tposition: relative;\n\tz-index: 1;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\taspect-ratio: 1;\n\tborder-style: solid;\n\tborder-color: rgb(0, 0, 0);\n\tborder-width: 0.1rem;\n\tborder-radius: 0.5rem;\n\tfont-size: 2rem;\n}\n\n.square:hover {\n\topacity: 0.7;\n}\n\n.notAttacked {\n\tbackground-color: grey;\n}\n\n@keyframes water {\n\tfrom {\n\t\ttransform: rotateZ(-20deg) rotateX(-40deg);\n\t\tbackground-color: rgb(0, 0, 168);\n\t}\n\tto {\n\t\ttransform: rotateZ(20deg) rotateX(40deg);\n\t\tbackground-color: rgb(0, 0, 255);\n\t}\n}\n\n.water {\n\tbackground-color: blue;\n}\n\n.waterAnimation {\n\tposition: relative;\n\tz-index: 0;\n\tanimation: water 1s linear 0s infinite alternate;\n}\n\n.square.questionTrans {\n\ttransform: rotateX(720deg);\n\ttransition: transform 1000ms ease-in-out;\n}\n\n.square.ship {\n\tbackground-color: brown;\n}\n\n.shipTrans {\n\ttransform: rotateY(720deg);\n\ttransition: transform 1000ms ease-in-out;\n}\n\n.square.sunkenShip {\n\tbackground-color: red;\n\ttransform: rotateZ(720deg);\n\ttransition: transform 1000ms ease-in-out;\n}\n\n.square.lastSunkenShip {\n\tbackground-color: red;\n\ttransform: rotateZ(720deg) scale(5);\n\ttransition: transform 1000ms ease-in-out;\n}\n\n.square.attacked {\n\tz-index: 2;\n\tborder-style: solid;\n\tborder-color: red;\n\ttransition: transform 700ms ease-in-out;\n}\n\n.square.attacked.attackedTrans {\n\ttransform: rotateZ(720deg) scale(5);\n}\n\n@keyframes marcosclave {\n\tfrom {\n\t\topacity: 0.5;\n\t\ttransform: scale(1);\n\t}\n\tto {\n\t\topacity: 1;\n\t\ttransform: scale(2);\n\t}\n}\n\n.square.lastAttacked {\n\tanimation: marcosclave 1s linear 0s infinite alternate;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/domModule.js":
/*!**************************!*\
  !*** ./src/domModule.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chainFadeInS": () => (/* binding */ chainFadeInS),
/* harmony export */   "createPlayersDivs": () => (/* binding */ createPlayersDivs),
/* harmony export */   "createToggleButton": () => (/* binding */ createToggleButton),
/* harmony export */   "mainTitleAndGetNames": () => (/* binding */ mainTitleAndGetNames),
/* harmony export */   "placeShipsMessage": () => (/* binding */ placeShipsMessage),
/* harmony export */   "removePlaceShipsElements": () => (/* binding */ removePlaceShipsElements),
/* harmony export */   "showAttackEnemyBoard": () => (/* binding */ showAttackEnemyBoard),
/* harmony export */   "showAttackOwnBoard": () => (/* binding */ showAttackOwnBoard),
/* harmony export */   "showBoard": () => (/* binding */ showBoard),
/* harmony export */   "showOtherPlayersBoardsButton": () => (/* binding */ showOtherPlayersBoardsButton),
/* harmony export */   "showShipsToPlace": () => (/* binding */ showShipsToPlace),
/* harmony export */   "winner": () => (/* binding */ winner)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _gameLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLogic.js */ "./src/gameLogic.js");



function mainTitleAndGetNames() {
	const battleship = document.createElement("h1");
	chainFadeInS(null, battleship, "2s");
	battleship.textContent = "BATALLA NAVAL";

	const who = document.createElement("h2");
	chainFadeInS(battleship, who, "2s");
	who.textContent = "¿Quiénes van a jugar?";

	const divPlayer1 = document.createElement("div");
	chainFadeInS(who, divPlayer1, "0.5s");
	const name1 = document.createElement("div");
	name1.classList.add("name");

	name1.textContent = "Jugador/a 1:";
	divPlayer1.appendChild(name1);

	const player1input = document.createElement("input");
	player1input.setAttribute("placeholder", "Escribí tu nombre");
	divPlayer1.appendChild(player1input);

	const divPlayer2 = document.createElement("div");
	chainFadeInS(divPlayer1, divPlayer2, "0.5s");
	const name2 = document.createElement("div");
	name2.classList.add("name");
	name2.textContent = "Jugador/a 2:";
	divPlayer2.appendChild(name2);

	const player2input = document.createElement("input");
	player2input.value = "Computadora";
	divPlayer2.appendChild(player2input);

	const submitNames = document.createElement("button");
	chainFadeInS(divPlayer2, submitNames, "0.5s");
	submitNames.classList.add("submitNames");
	submitNames.textContent = "Listo! Posicionar Flota";
	submitNames.addEventListener("click", () => {
		// battleship.remove();
		// who.remove();
		// divPlayer1.remove();
		// divPlayer2.remove();
		// submitNames.remove();
		// version.remove();
		while (main.firstChild) {
			main.removeChild(main.firstChild);
		}
		(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.initializeGame)(player1input.value, player2input.value);
	});

	const version = document.createElement("div");
	chainFadeInS(submitNames, version, "1s");
	version.classList.add("version");
	version.textContent = "v0.1";

	const main = document.querySelector("main");
	main.appendChild(battleship);
	main.appendChild(who);
	main.appendChild(divPlayer1);
	main.appendChild(divPlayer2);
	main.appendChild(submitNames);
	main.appendChild(version);
}

function chainFadeIn(fromElement, toElement, duration, timingFunction) {
	let timing;
	if (timingFunction) {
		timing = timingFunction;
	} else {
		timing = "ease-in-out";
	}

	toElement.style.opacity = "0";

	if (fromElement) {
		fromElement.addEventListener("transitionend", () => {
			setTimeout(() => {
				toElement.style.opacity = "1";
				toElement.style.transition = `opacity ${duration} ${timing}`;
			}, 0);
		});
	} else {
		setTimeout(() => {
			toElement.style.opacity = "1";
			toElement.style.transition = `opacity ${duration} ${timing}`;
		}, 0);
	}
}

function chainFadeInS(fromElement, toElementS, duration, timingFunction) {
	let timing;
	if (timingFunction) {
		timing = timingFunction;
	} else {
		timing = "ease-in-out";
	}

	if (toElementS === null || toElementS.length === 0) {
		return;
	} else if (toElementS.length === undefined) {
		toElementS.style.opacity = "0";
		if (fromElement) {
			fromElement.addEventListener("transitionend", () => {
				setTimeout(() => {
					toElementS.style.opacity = "1";
					toElementS.style.transition = `opacity ${duration} ${timing}`;
				}, 0);
			});
		} else {
			setTimeout(() => {
				toElementS.style.opacity = "1";
				toElementS.style.transition = `opacity ${duration} ${timing}`;
			}, 0);
		}
	} else if (toElementS.length > 0) {
		toElementS.forEach(element => {
			if (element) {
				element.style.opacity = "0";
			}
		});
		if (fromElement) {
			fromElement.addEventListener("transitionend", () => {
				setTimeout(() => {
					toElementS.forEach(element => {
						if (element) {
							element.style.opacity = "1";
							element.style.transition = `opacity ${duration} ${timing}`;
						}
					});
				}, 0);
			});
		} else {
			setTimeout(() => {
				toElementS.forEach(element => {
					if (element) {
						element.style.opacity = "1";
						element.style.transition = `opacity ${duration} ${timing}`;
					}
				});
			}, 0);
		}
	}
}

function createPlayersDivs(player2name) {
	playerDiv(1);
	if (player2name !== "Computadora") {
		playerDiv(2);
	}

	function playerDiv(playerNumber) {
		const playerDiv = document.createElement("div");
		playerDiv.classList.add("playerDiv");
		playerDiv.classList.add(`player${playerNumber}`);

		const boardsContainer = document.createElement("div");
		boardsContainer.classList.add("boardsContainer");
		playerDiv.appendChild(boardsContainer);

		const main = document.querySelector("main");
		main.appendChild(playerDiv);
	}
}

function placeShipsMessage(
	player1name,
	player2name,
	playerTurn,
	numberOfShipsToPlace
) {
	removePlaceShipsElements();

	let playerName;
	let otherPlayerName;
	if (playerTurn === "player1") {
		playerName = player1name;
		otherPlayerName = player2name;
	} else if (playerTurn === "player2") {
		playerName = player2name;
		otherPlayerName = player1name;
	}

	const messagesDiv = document.createElement("div");
	messagesDiv.classList.add("messages");
	messagesDiv.textContent = `${playerName}, posiciona tus ${numberOfShipsToPlace} barcos sobre las aguas...`;
	const playerDiv = document.querySelector(`.${playerTurn}`);
	playerDiv.prepend(messagesDiv);

	if (otherPlayerName !== "Computadora") {
		const messagesDiv2 = document.createElement("div");
		messagesDiv2.classList.add("messages");
		messagesDiv2.classList.add("messages2");
		messagesDiv2.textContent = `¡Que ${otherPlayerName} no vea tu tablero!`;
		messagesDiv.appendChild(messagesDiv2);
	}
}

function showShipsToPlace(
	player1,
	player2,
	boardOfShipsToPlace,
	numberOfShipsToPlace,
	boardSize,
	playerTurn,
	typeOfBoard,
	isHidden
) {
	// These variables will be defined by square's onColumnDragStart event callback
	let shipID;
	let squareDragged;
	let shipLength;

	const gameboardDiv = document.createElement("div");
	gameboardDiv.classList.add("gameboard");
	setTimeout(() => {
		gameboardDiv.classList.add("fadeIn");
	}, 0);
	if (typeOfBoard === "horizontalShipsToPlace") {
		gameboardDiv.style.flexDirection = "column";
	}
	gameboardDiv.classList.add(playerTurn);
	gameboardDiv.classList.add(typeOfBoard);

	let shipsNumbering = {};

	for (let i = 0; i < boardOfShipsToPlace.length; i++) {
		const columnDivContainer = document.createElement("div");
		const columnDiv = document.createElement("div");

		if (typeOfBoard === "verticalShipsToPlace") {
			columnDivContainer.classList.add("column");
		} else if (typeOfBoard === "horizontalShipsToPlace") {
			columnDivContainer.classList.add("row");
			columnDiv.classList.add("rowDraggable");
		}

		// Make draggable only even columns
		if (!((i + 2) % 2)) {
			columnDiv.draggable = true;
		} else {
			columnDivContainer.classList.add("empty");
			columnDiv.classList.add("empty");
		}
		columnDiv.addEventListener("dragstart", onColumnDragStart);
		for (let j = 0; j < boardOfShipsToPlace[i].length; j++) {
			const square = document.createElement("div");
			square.classList.add("square");
			if (typeOfBoard === "horizontalShipsToPlace") {
				// square.style.width = "100%";
			}
			square.dataset.player = playerTurn;
			square.dataset.x = i;
			square.dataset.y = j;
			if (boardOfShipsToPlace[i][j] === null) {
				square.style.opacity = "0";
				if (typeOfBoard === "verticalShipsToPlace") {
					square.style.display = "none";
				}
			} else {
				square.textContent = "B";
				square.classList.add("ship");
				square.dataset.shipId = boardOfShipsToPlace[i][j].shipID;
				square.dataset.shipLength = boardOfShipsToPlace[i][j].length;
				columnDiv.dataset.shipId = boardOfShipsToPlace[i][j].shipID;

				if (
					shipsNumbering[
						`shipID${boardOfShipsToPlace[i][j].shipID}`
					] === undefined
				) {
					shipsNumbering[
						`shipID${boardOfShipsToPlace[i][j].shipID}`
					] = 1;
				}
				square.dataset.shipSquareNumber =
					shipsNumbering[`shipID${boardOfShipsToPlace[i][j].shipID}`];
				shipsNumbering[`shipID${boardOfShipsToPlace[i][j].shipID}`]++;

				square.addEventListener("mousedown", function(event) {
					if (event.target.dataset.shipId !== undefined) {
						shipID = event.target.dataset.shipId;
						squareDragged = event.target.dataset.shipSquareNumber;
						shipLength = event.target.dataset.shipLength;
					}
				});
			}
			columnDiv.appendChild(square);
		}
		columnDivContainer.appendChild(columnDiv);
		gameboardDiv.appendChild(columnDivContainer);

		function onColumnDragStart(event) {
			if (shipID === undefined) {
				return;
			}
			event.dataTransfer.setData(
				"text/plain",
				`${shipID}${squareDragged}${shipLength}${typeOfBoard[0]}`
			);
			shipID = undefined;
		}
	}

	const placeShipsDiv = document.createElement("div");
	if (typeOfBoard === "verticalShipsToPlace") {
		placeShipsDiv.classList.add("verticalShipsContainer");
	} else if (typeOfBoard === "horizontalShipsToPlace") {
		placeShipsDiv.classList.add("horizontalShipsContainer");
	}
	if (isHidden) {
		placeShipsDiv.classList.add("hidden");
	}
	placeShipsDiv.appendChild(gameboardDiv);

	const rotateButton = document.createElement("button");
	rotateButton.textContent = "Rotar Barcos";
	rotateButton.addEventListener("click", rotateShips);
	placeShipsDiv.appendChild(rotateButton);

	const placeRandomly = document.createElement("button");
	placeRandomly.textContent = "Posicionar Barcos Aleatoriamente";
	placeRandomly.classList.add("placeRandomShips");
	placeRandomly.addEventListener("click", placeRandomShipsAndShowEm);
	placeShipsDiv.appendChild(placeRandomly);

	const boardsContainer = document.querySelector(
		`.${playerTurn} > .boardsContainer`
	);
	boardsContainer.appendChild(placeShipsDiv);

	function rotateShips() {
		let verticalShips = document.querySelector(".verticalShipsContainer");
		let horizontalShips = document.querySelector(
			".horizontalShipsContainer"
		);

		verticalShips.classList.toggle("hidden");
		horizontalShips.classList.toggle("hidden");
	}

	function placeRandomShipsAndShowEm() {
		const message = document.querySelector(".messages");
		if (playerTurn === "player1") {
			(0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.placeRandomShips)(player1, boardSize);
			message.textContent = `Así queda pocisionada tu flota, ${player1.name}:`;
		} else if (playerTurn === "player2") {
			(0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.placeRandomShips)(player2, boardSize);
			message.textContent = `Así queda pocisionada tu flota, ${player2.name}:`;
		}
		const gameboards = document.querySelectorAll(".gameboardContainer");
		gameboards.forEach(gameboard => {
			gameboard.remove();
		});

		showBoard(
			player1,
			player2,
			playerTurn,
			"ownBoard",
			false,
			boardSize,
			true
		);

		afterPlacingShipsButton(
			player1,
			player2,
			playerTurn,
			numberOfShipsToPlace,
			boardSize
		);
	}
}

function removePlaceShipsElements() {
	const messages = document.querySelectorAll(".messages");

	const verticalShipsToPlace = document.querySelector(
		".verticalShipsContainer"
	);
	const horizontalShipsToPlace = document.querySelector(
		".horizontalShipsContainer"
	);
	const gameboard = document.querySelector(".gameboardContainer");

	if (messages !== null) {
		messages.forEach(message => {
			message.remove();
		});
	}
	if (verticalShipsToPlace !== null) {
		verticalShipsToPlace.remove();
	}
	if (horizontalShipsToPlace !== null) {
		horizontalShipsToPlace.remove();
	}
	if (gameboard !== null) {
		gameboard.remove();
	}
}

function afterPlacingShipsButton(
	player1,
	player2,
	playerTurn,
	numberOfShipsToPlace,
	boardSize
) {
	let button;
	const buttonContainer = document.createElement("div");
	buttonContainer.classList.add("buttonContainer");

	if (playerTurn === "player1" && player2.name !== "Computadora") {
		// player2 placesShips
		button = document.createElement("button");
		button.classList.add("toggleBoards");
		setTimeout(() => {
			button.classList.add("fadeIn");
		}, 0);
		button.textContent = `Presioná para esconder tu tablero y dejar que ${player2.name} posicione sus barcos`;
		button.addEventListener("click", () => {
			buttonContainer.remove();
			document.querySelectorAll(".messages").forEach(message => {
				message.remove();
			});
			document.querySelector(".gameboardContainer").remove();

			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.placeShips)(
				player1,
				player2,
				"player2",
				numberOfShipsToPlace,
				(0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)(boardSize),
				boardSize
			);
		});
	} else if (playerTurn === "player1" && player2.name === "Computadora") {
		button = document.createElement("button");
		button.classList.add("battleBegins");
		setTimeout(() => {
			button.classList.add("fadeIn");
		}, 0);
		button.textContent = `¡Empieza el juego!`;
		button.addEventListener("click", () => {
			buttonContainer.remove();
			(0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.placeRandomShips)(player2, boardSize);
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.battleBegins)(player1, player2, boardSize);
		});
	} else if (playerTurn === "player2") {
		button = document.createElement("button");
		button.classList.add("battleBegins");
		setTimeout(() => {
			button.classList.add("fadeIn");
		}, 0);
		button.textContent = `¡Ocultá tu tablero y dejá que ${player1.name} empiece el juego!`;
		button.addEventListener("click", () => {
			buttonContainer.remove();
			(0,_index_js__WEBPACK_IMPORTED_MODULE_0__.battleBegins)(player1, player2, boardSize);
		});
	}

	buttonContainer.appendChild(button);

	const verticalShips = document.querySelector(".verticalShipsContainer");
	verticalShips.remove();
	const horizontalShips = document.querySelector(".horizontalShipsContainer");
	horizontalShips.remove();

	const boardsContainer = document.querySelector(
		`.playerDiv.${playerTurn} > .boardsContainer`
	);
	boardsContainer.appendChild(buttonContainer);
}

function createToggleButton(
	player,
	player1name,
	player2name,
	textContent,
	selectorToAppendIt,
	hide
) {
	const button = document.createElement("button");
	button.classList.add("toggleBoards");
	setTimeout(() => {
		button.classList.add("fadeIn");
	});
	if (hide) {
		button.classList.add("hidden");
	}
	button.dataset.player = player;
	button.textContent = textContent;
	button.addEventListener("click", toggleBoards);
	// document.querySelector(`.playerDiv.${player}`).appendChild(button);
	document.querySelector(selectorToAppendIt).appendChild(button);

	function toggleBoards() {
		const player = this.dataset.player;

		let otherPlayer;
		let playerName;
		let otherPlayerName;

		if (player === "player1") {
			otherPlayer = "player2";
			playerName = player1name;
			otherPlayerName = player2name;
		} else {
			otherPlayer = "player1";
			playerName = player2name;
			otherPlayerName = player1name;
		}

		if (player === _index_js__WEBPACK_IMPORTED_MODULE_0__.whoPlays) {
			showMakeYourMove(_index_js__WEBPACK_IMPORTED_MODULE_0__.whoPlays);
			return;
		}

		// Hide:
		button.classList.add("hidden");

		const playerDiv = document.querySelector(`.playerDiv.${player}`);
		playerDiv.classList.add("hidden");

		const lastAttacked = document.querySelector(
			`[data-player="${player}"].lastAttacked`
		);
		if (lastAttacked) {
			lastAttacked.classList.remove("lastAttacked");
		}

		// Show Button:
		const buttonContainer = document.createElement("div");
		buttonContainer.classList.add("buttonContainer");
		const showButton = document.createElement("button");
		showButton.classList.add("showHiddenBoards");
		setTimeout(() => {
			button.classList.add("fadeIn");
		}, 0);
		showButton.textContent = `Mostrar tableros de ${otherPlayerName}`;
		showButton.addEventListener("click", showHiddenBoards);
		buttonContainer.appendChild(showButton);
		document.querySelector("main").appendChild(buttonContainer);

		function showMakeYourMove() {
			alert(`¡Todavía no hiciste tu jugada, ${playerName}!`);
		}

		function showHiddenBoards() {
			const otherPlayerDiv = document.querySelector(
				`.playerDiv.${otherPlayer}`
			);
			otherPlayerDiv.classList.remove("hidden");
			buttonContainer.remove();
		}
	}
}

function showOtherPlayersBoardsButton(player1, callBack) {
	const buttonContainer = document.createElement("div");
	buttonContainer.classList.add("buttonContainer");
	const button = document.createElement("button");
	button.classList.add("toggleBoards");
	setTimeout(() => {
		button.classList.add("fadeIn");
	}, 0);
	button.textContent = `Mostrar tableros de ${player1.name}`;
	button.addEventListener("click", callBack);
	buttonContainer.appendChild(button);
	document.querySelector("main").appendChild(buttonContainer);
}

function showBoard(
	player1,
	player2,
	playerTurn,
	typeOfBoard,
	isHidden,
	boardSize,
	isForPlacingShips,
	numberOfShipsToPlace,
	shipsToPlace
) {
	let board;
	let playerName;
	let otherPlayer;
	if (playerTurn === "player1") {
		playerName = player1.name;
		otherPlayer = "player2";
		if (typeOfBoard === "ownBoard") {
			board = player1.gameboard.board;
		} else if (typeOfBoard === "enemyBoard") {
			board = player1.gameboard.receivedHits;
		}
	} else if (playerTurn === "player2") {
		playerName = player2.name;
		otherPlayer = "player1";
		if (typeOfBoard === "ownBoard") {
			board = player2.gameboard.board;
		} else if (typeOfBoard === "enemyBoard") {
			board = player2.gameboard.receivedHits;
		}
	}

	const gameboardContainer = document.createElement("div");
	gameboardContainer.classList.add("gameboardContainer");
	gameboardContainer.classList.add(playerTurn);
	if (isHidden) {
		gameboardContainer.classList.add("hidden");
	}

	if (!isForPlacingShips) {
		const boardTitle = document.createElement("div");
		boardTitle.classList.add(`${typeOfBoard}Title`);
		boardTitle.textContent = `Aguas y Flota de ${playerName}`;
		gameboardContainer.appendChild(boardTitle);
	}

	const gameboardDiv = document.createElement("div");
	gameboardDiv.classList.add("gameboard");
	gameboardDiv.classList.add(playerTurn);
	gameboardDiv.classList.add(typeOfBoard);

	let shipsNumbering = {};

	for (let i = 0; i < board.length; i++) {
		const columnDiv = document.createElement("div");
		columnDiv.classList.add("column");
		for (let j = 0; j < board[i].length; j++) {
			const square = document.createElement("div");
			square.classList.add("square");
			square.dataset.player = playerTurn;
			square.dataset.x = i;
			square.dataset.y = j;
			if (board[i][j] === null) {
				square.textContent = "A";
				square.classList.add("water");
				square.classList.add("waterAnimation");

				if (isForPlacingShips) {
					square.addEventListener("dragenter", function(event) {
						event.preventDefault();
					});
					square.addEventListener("dragover", function(event) {
						event.preventDefault();
					});
					square.addEventListener("drop", onDrop);
				}
			} else if (board[i][j] === false) {
				square.textContent = "?";
				square.classList.add("notAttacked");
				square.addEventListener("click", callAttack);
			} else {
				square.textContent = "B";
				square.classList.add("ship");
				square.dataset.shipId = board[i][j].shipID;

				if (
					shipsNumbering[`shipID${board[i][j].shipID}`] === undefined
				) {
					shipsNumbering[`shipID${board[i][j].shipID}`] = 1;
				}
				square.dataset.shipSquareNumber =
					shipsNumbering[`shipID${board[i][j].shipID}`];
				shipsNumbering[`shipID${board[i][j].shipID}`]++;
			}
			columnDiv.appendChild(square);
		}
		gameboardDiv.appendChild(columnDiv);
	}

	let whichPlayersDiv;
	if (typeOfBoard === "ownBoard") {
		whichPlayersDiv = playerTurn;
	} else if (typeOfBoard === "enemyBoard") {
		whichPlayersDiv = otherPlayer;
	}

	gameboardContainer.appendChild(gameboardDiv);
	const boardsContainer = document.querySelector(
		`.playerDiv.${whichPlayersDiv} > .boardsContainer`
	);
	boardsContainer.appendChild(gameboardContainer);

	function callAttack() {
		_index_js__WEBPACK_IMPORTED_MODULE_0__.attack.call(this, player1, player2, boardSize);
	}

	let numberOfPlacedShips = 0;

	function onDrop(event) {
		const data = event.dataTransfer.getData("text/plain");
		if (data === "") {
			return;
		}
		const shipID = parseInt(data[0], 10);
		const squareDropped = parseInt(data[1], 10);
		const shipLength = parseInt(data[2], 10);
		const x = parseInt(event.target.dataset.x, 10);
		const y = parseInt(event.target.dataset.y, 10);

		let isVertical;
		let x0 = null;
		let y0 = null;

		if (data[3] === "v") {
			isVertical = true;
			x0 = parseInt(x, 10);
			y0 = y - squareDropped + 1;
		} else if (data[3] === "h") {
			isVertical = false;
			x0 = x - squareDropped + 1;
			y0 = parseInt(y, 10);
		}

		// placeShip & remove it from shipsToPlace
		let fullShipCoordinates;
		if (playerTurn === "player1") {
			fullShipCoordinates = player1.gameboard.placeShip(
				shipID,
				shipLength,
				isVertical,
				x0,
				y0
			);
		} else if (playerTurn === "player2") {
			fullShipCoordinates = player2.gameboard.placeShip(
				shipID,
				shipLength,
				isVertical,
				x0,
				y0
			);
		}

		// This condition is met when the ship could not be placed
		if (typeof fullShipCoordinates === "string") {
			return;
		} else {
			const placeRandomlyButton = document.querySelectorAll(
				".placeRandomShips"
			);
			if (placeRandomlyButton) {
				placeRandomlyButton.forEach(button => {
					button.remove();
				});
			}
		}
		shipsToPlace.removeShip(shipID);

		// Show placed ship on ownBoard
		const gameboard = document.querySelector(
			`.gameboard.${this.dataset.player}.ownBoard`
		);
		for (let i = 0; i < fullShipCoordinates.length; i++) {
			const coord = fullShipCoordinates[i];
			const shipSquare = gameboard.querySelector(
				`[data-x="${coord[0]}"][data-y="${coord[1]}"]`
			);
			shipSquare.classList.remove("water");
			shipSquare.classList.remove("waterAnimation");
			shipSquare.textContent = "B";
			shipSquare.classList.add("ship");
		}

		// Hide placed ship on shipsToPlace and make it not draggable
		const verticalShips = document.querySelector(".verticalShipsContainer");
		const placedShipVertical = verticalShips.querySelectorAll(
			`[data-ship-id="${shipID}"]`
		);
		for (let i = 0; i < placedShipVertical.length; i++) {
			const square = placedShipVertical[i];
			square.style.opacity = "0";
			square.setAttribute.draggable = false;
		}

		const horizontalShips = document.querySelector(
			".horizontalShipsContainer"
		);
		const placedShipHorizontal = horizontalShips.querySelectorAll(
			`[data-ship-id="${shipID}"]`
		);

		for (let i = 0; i < placedShipHorizontal.length; i++) {
			const square = placedShipHorizontal[i];
			square.style.opacity = "0";
		}

		const draggableDiv = document.querySelector(
			`[data-ship-id="${shipID}"][draggable="true"]`
		);
		draggableDiv.setAttribute("draggable", "false");

		// Check if all ships have been placed
		numberOfPlacedShips++;
		if (numberOfPlacedShips === numberOfShipsToPlace) {
			numberOfPlacedShips = 0;
			afterPlacingShipsButton(
				player1,
				player2,
				this.dataset.player,
				numberOfShipsToPlace,
				boardSize
			);
		}
	}
}

function showAttackEnemyBoard(player1, result, player2name, boardSize) {
	if (result === "¡Agua!") {
		this.addEventListener("transitionend", () => {
			this.textContent = "A";
			this.classList.remove("questionTrans");
			this.classList.add("water");
			this.classList.add("waterAnimation");
			isComputerMove();
		});
		this.classList.add("questionTrans");
	} else if (result === "¡Barco tocado!") {
		this.addEventListener("transitionend", () => {
			this.textContent = "B";
			this.classList.remove("questionTrans");
			this.classList.add("ship");
			isComputerMove();
		});
		this.classList.add("questionTrans");
	} else if (result === "¡Barco hundido!") {
		function onTransitionEnd() {
			this.textContent = "X";
			this.classList.remove("questionTrans");
			this.removeEventListener("transitionend", onTransitionEnd);
			this.classList.add("sunkenShip");
			isComputerMove();
		}
		this.addEventListener("transitionend", onTransitionEnd);
		this.classList.add("questionTrans");
	} else if (result === "¡Todos los barcos han sido hundidos!") {
		function onTransitionEnd() {
			this.textContent = "X";
			this.classList.remove("questionTrans");
			this.removeEventListener("transitionend", onTransitionEnd);
			this.addEventListener("transitionend", () => {
				let whoWins;
				if (this.dataset.player === "player1") {
					whoWins = "player2";
				} else if (this.dataset.player === "player2") {
					whoWins = "player1";
				}
				winner(player1.name, player2name, whoWins);
			});
			this.classList.add("lastSunkenShip");
		}
		this.addEventListener("transitionend", onTransitionEnd);
		this.classList.add("questionTrans");
	}

	function isComputerMove() {
		if (player2name === "Computadora") {
			const compMoveObject = (0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.computerAttack)(boardSize, player1);

			// Show Computer Move:
			const attackedSquare = document.querySelector(
				`:not(.notAttacked)[data-player="player1"][data-x="${compMoveObject.x}"][data-y="${compMoveObject.y}"]`
			);
			if (compMoveObject.result === "¡Agua!") {
				attackedSquare.classList.remove("waterAnimation");
			}
			attackedSquare.textContent = "\u{1F7CF}";
			setTimeout(() => {
				attackedSquare.style.zIndex = "3";
				attackedSquare.classList.add("attacked");
				attackedSquare.classList.add("attackedTrans");
				attackedSquare.addEventListener(
					"transitionend",
					transitionEndCallback
				);
			}, 0);

			function transitionEndCallback() {
				attackedSquare.addEventListener("transitionend", () => {
					attackedSquare.style.zIndex = "1";
				});
				attackedSquare.classList.remove("attackedTrans");
				if (
					compMoveObject.result ===
					"¡Todos los barcos han sido hundidos!"
				) {
					setTimeout(() => {
						winner(player1.name, player2name, "player2");
					}, 0);
				}
				attackedSquare.removeEventListener(
					"transitionend",
					transitionEndCallback
				);
				if (compMoveObject.result === "¡Agua!") {
					attackedSquare.addEventListener("transitionend", () => {
						attackedSquare.classList.add("waterAnimation");
					});
				}
			}
		} else {
			// Show toggle button after the attack
			let whoseButton;
			if (_index_js__WEBPACK_IMPORTED_MODULE_0__.whoPlays === "player1") {
				whoseButton = "player2";
			} else if (_index_js__WEBPACK_IMPORTED_MODULE_0__.whoPlays === "player2") {
				whoseButton = "player1";
			}

			const toggleButton = document.querySelector(
				`button[data-player="${whoseButton}"]`
			);
			setTimeout(() => {
				toggleButton.classList.remove("hidden");
			}, 0);
		}
	}
}

function showAttackOwnBoard() {
	const attackedSquare = document.querySelector(
		`:not(.notAttacked)[data-player="${this.dataset.player}"][data-x="${this.dataset.x}"][data-y="${this.dataset.y}"]`
	);
	if (attackedSquare !== null) {
		attackedSquare.textContent = "\u{1F7CF}";
		attackedSquare.classList.add("attacked");
		attackedSquare.classList.add("lastAttacked");
	}
}

function winner(player1name, player2name, playerTurn) {
	let whoWins;
	if (playerTurn === "player1") {
		whoWins = player1name;
	} else if (playerTurn === "player2") {
		whoWins = player2name;
	}
	alert(`Ganó ${whoWins}.  ¡Hundió todos los barcos!`);
}




/***/ }),

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "computerAttack": () => (/* binding */ computerAttack),
/* harmony export */   "placeRandomShips": () => (/* binding */ placeRandomShips)
/* harmony export */ });
function Ship(shipID, length, isVertical) {
	const timesHit = 0;
	function hit() {
		this.timesHit++;
	}
	function isSunk() {
		if (this.timesHit === this.length) {
			return true;
		} else {
			return false;
		}
	}
	return {
		shipID,
		length,
		isVertical,
		timesHit,
		hit,
		isSunk
	};
}

function Gameboard(boardSize) {
	const board = [];
	const column = [];

	for (let i = 0; i < boardSize; i++) {
		column.push(null);
	}
	for (let i = 0; i < boardSize; i++) {
		board.push([...column]);
	}

	const receivedHits = [];
	const receivedHitsColumn = [];
	for (let i = 0; i < boardSize; i++) {
		receivedHitsColumn.push(false);
	}
	for (let i = 0; i < boardSize; i++) {
		receivedHits.push([...receivedHitsColumn]);
	}

	const shipsLeft = 0;

	function placeShip(shipID, length, isVertical, x, y) {
		const ship = Ship(shipID, length, isVertical);
		let fullShipCoordinates = [];

		if (ship.isVertical && y + ship.length > boardSize) {
			return "Ship is too large!";
		} else if (!ship.isVertical && x + ship.length > boardSize) {
			return "Ship is too large!";
		}

		if (ship.isVertical && y + ship.length <= boardSize) {
			for (let i = 0; i < ship.length; i++) {
				if (this.board[x][y + i] !== null)
					return "There's another ship there!";
			}
			for (let i = 0; i < ship.length; i++) {
				this.board[x][y + i] = ship;
				fullShipCoordinates.push([x, y + i]);
			}
			this.shipsLeft++;
			return fullShipCoordinates;
		} else if (!ship.isVertical && x + ship.length <= boardSize) {
			for (let i = 0; i < ship.length; i++) {
				if (this.board[x + i][y] !== null)
					return "There's another ship there!";
			}
			for (let i = 0; i < ship.length; i++) {
				this.board[x + i][y] = ship;
				fullShipCoordinates.push([x + i, y]);
			}
			this.shipsLeft++;
			return fullShipCoordinates;
		}
	}

	function receiveAttack(x, y) {
		if (this.receivedHits[x][y]) {
			return "¡Esa posición ya ha sido atacada!";
		} else {
			this.receivedHits[x][y] = true;
		}
		if (this.board[x][y] === null) {
			return "¡Agua!";
		} else {
			this.board[x][y].hit();
			if (this.board[x][y].isSunk()) {
				this.shipsLeft--;
				if (this.shipsLeft === 0) {
					return "¡Todos los barcos han sido hundidos!";
				} else {
					return "¡Barco hundido!";
				}
			}
			return "¡Barco tocado!";
		}
	}

	function removeShip(shipID) {
		for (let i = 0; i < this.board.length; i++) {
			for (let j = 0; j < this.board[i].length; j++) {
				if (this.board[i][j] !== null) {
					if (this.board[i][j].shipID === shipID) {
						this.board[i][j] = null;
					}
				}
			}
		}
	}

	return {
		board,
		receivedHits,
		shipsLeft,
		placeShip,
		removeShip,
		receiveAttack
	};
}

function Player(name, gameboard) {
	return {
		name,
		gameboard
	};
}

function placeRandomShips(player, boardSize) {
	for (let i = 0; i < 5; i++) {
		let x;
		let y;
		let isVertical;
		do {
			x = Math.floor(Math.random() * boardSize);
			y = Math.floor(Math.random() * boardSize);
			if ((x + 1) % 2 === 0) {
				isVertical = true;
			} else {
				isVertical = false;
			}
		} while (
			typeof player.gameboard.placeShip(
				i + 1,
				5 - i,
				isVertical,
				x,
				y
			) !== "object"
		);
	}
}

function computerAttack(boardSize, player) {
	let x;
	let y;
	do {
		x = Math.floor(Math.random() * boardSize);
		y = Math.floor(Math.random() * boardSize);
	} while (player.gameboard.receivedHits[x][y] === true);
	const result = player.gameboard.receiveAttack(x, y);
	return { result, x, y };
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attack": () => (/* binding */ attack),
/* harmony export */   "battleBegins": () => (/* binding */ battleBegins),
/* harmony export */   "initializeGame": () => (/* binding */ initializeGame),
/* harmony export */   "placeShips": () => (/* binding */ placeShips),
/* harmony export */   "whoPlays": () => (/* binding */ whoPlays)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLogic.js */ "./src/gameLogic.js");
/* harmony import */ var _domModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domModule.js */ "./src/domModule.js");




let whoPlays = "player1";

(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.mainTitleAndGetNames)();

function initializeGame(player1name, player2name, boardSize = 10) {
	const player1 = (0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.Player)(player1name, (0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)(boardSize));
	const player2 = (0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.Player)(player2name, (0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)(boardSize));

	(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.createPlayersDivs)(player2name);

	placeShips(player1, player2, "player1", 5, (0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__.Gameboard)(boardSize), boardSize);
}

function placeShips(
	player1,
	player2,
	playerTurn,
	numberOfShipsToPlace,
	shipsToPlace,
	boardSize
) {
	(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.placeShipsMessage)(
		player1.name,
		player2.name,
		playerTurn,
		numberOfShipsToPlace
	);

	shipsToPlace.placeShip(1, 5, true, 0, 0);
	shipsToPlace.placeShip(2, 4, true, 2, 0);
	shipsToPlace.placeShip(3, 3, true, 4, 0);
	shipsToPlace.placeShip(4, 2, true, 6, 0);
	shipsToPlace.placeShip(5, 1, true, 8, 0);

	(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.showBoard)(
		player1,
		player2,
		playerTurn,
		"ownBoard",
		false,
		boardSize,
		true,
		numberOfShipsToPlace,
		shipsToPlace,
		player2.name
	);

	(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.showShipsToPlace)(
		player1,
		player2,
		shipsToPlace.board,
		numberOfShipsToPlace,
		boardSize,
		playerTurn,
		"verticalShipsToPlace",
		false
	);

	(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.showShipsToPlace)(
		player1,
		player2,
		shipsToPlace.board,
		numberOfShipsToPlace,
		boardSize,
		playerTurn,
		"horizontalShipsToPlace",
		true
	);

	const messages = document.querySelector(".messages");
	const shipsContainer = document.querySelector(".verticalShipsToPlace");

	(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.chainFadeInS)(null, [messages, shipsContainer], "2s");

	const messages2 = document.querySelector(".messages2");
	const gameboardContainer = document.querySelector(".gameboardContainer");
	(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.chainFadeInS)(messages, [messages2, gameboardContainer], "2s");

	const buttons = document.querySelectorAll(".verticalShipsContainer button");
	(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.chainFadeInS)(gameboardContainer, buttons, "2s");
}

function battleBegins(player1, player2, boardSize) {
	(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.removePlaceShipsElements)();
	if (player2.name !== "Computadora") {
		const player2Div = document.querySelector(".playerDiv.player2");
		player2Div.classList.add("hidden");

		(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.showOtherPlayersBoardsButton)(player1, showPlayersBoards);

		function showPlayersBoards() {
			document.querySelector(".buttonContainer").remove();
			(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.showBoard)(
				player1,
				player2,
				"player1",
				"ownBoard",
				false,
				boardSize
			);
			(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.showBoard)(
				player1,
				player2,
				"player2",
				"enemyBoard",
				false,
				boardSize
			);

			(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.createToggleButton)("player1", player1.name, player2.name, "Esconder tableros y cambiar turno", ".playerDiv.player1", "hide");
			
			(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.showBoard)(
				player1,
				player2,
				"player2",
				"ownBoard",
				false,
				boardSize
			);
			(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.showBoard)(
				player1,
				player2,
				"player1",
				"enemyBoard",
				false,
				boardSize
			);
			(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.createToggleButton)("player2", player1.name, player2.name, "Esconder tableros y cambiar turno", ".playerDiv.player2", "hide");
		}
	} else {
		(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.showBoard)(player1, player2, "player1", "ownBoard", false, boardSize);
		(0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.showBoard)(player1, player2, "player2", "enemyBoard", false, boardSize);
	}
}

function attack(player1, player2, boardSize) {
	if (this.dataset.player === whoPlays) {
		return;
	}

	let result;
	if (this.dataset.player === "player2") {
		result = player2.gameboard.receiveAttack(
			this.dataset.x,
			this.dataset.y
		);
		console.log(result);
	} else if (this.dataset.player === "player1") {
		result = player1.gameboard.receiveAttack(
			this.dataset.x,
			this.dataset.y
		);
		console.log(result);
	}

	if (player2.name !== "Computadora") {
		if (whoPlays === "player1") {
			whoPlays = "player2";
		} else if (whoPlays === "player2") {
			whoPlays = "player1";
		}
	}
	_domModule_js__WEBPACK_IMPORTED_MODULE_2__.showAttackEnemyBoard.call(this, player1, result, player2.name, boardSize);
	_domModule_js__WEBPACK_IMPORTED_MODULE_2__.showAttackOwnBoard.call(this, result);
}




/***/ }),

/***/ "./src/Audiowide-Regular.ttf":
/*!***********************************!*\
  !*** ./src/Audiowide-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2017bdb174a62d0daa3e.ttf";

/***/ }),

/***/ "./src/BigShouldersStencil.woff2":
/*!***************************************!*\
  !*** ./src/BigShouldersStencil.woff2 ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f92bc1dc712a26714f64.woff2";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map