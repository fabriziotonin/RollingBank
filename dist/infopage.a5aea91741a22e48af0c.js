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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/infopage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"* { \\r\\n    margin: 0; \\r\\n    padding: 0; \\r\\n}\\r\\n\\r\\nbody{\\r\\n\\r\\n    font-family: 'Montserrat', sans-serif;\\r\\n    font-size: 0.8rem;\\r\\n\\r\\n}\\r\\n/*==========================================*/\\r\\n/*=================Globales=============*/\\r\\n/*==========================================*/\\r\\n\\r\\n\\r\\n/*==========================================*/\\r\\n/*=================Navbar=============*/\\r\\n/*==========================================*/\\r\\n\\r\\n.bg-blue{\\r\\n\\r\\n    background-color: #2c3e50!important;\\r\\n\\r\\n}\\r\\n\\r\\n.bg-blue-two{\\r\\n    background-color: #004b8c;\\r\\n}\\r\\n\\r\\ni{\\r\\n    font-size: 16px;\\r\\n}\\r\\n\\r\\n\\r\\n.mr-icons{\\r\\n    margin-right: 3rem;\\r\\n}\\r\\n\\r\\n.font-size-nav{\\r\\n\\r\\n    font-size: 15px;\\r\\n}\\r\\n\\r\\n.nav-ml{\\r\\n    \\r\\n    margin-left: 1.5rem;\\r\\n}\\r\\n\\r\\np-0{\\r\\n\\r\\n    padding: 0;\\r\\n}\\r\\n\\r\\n.width-contact{\\r\\n    width: 9rem;\\r\\n}\\r\\n\\r\\n.nav-link-end:hover{\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\n.nav-link-end {\\r\\n    display: block;\\r\\n    padding-top: 0.5rem;\\r\\n    padding-left: 1rem;\\r\\n}\\r\\n\\r\\n.nav-link-hover{\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.nav-link-hover:hover{\\r\\n   \\r\\n    color: rgb(9, 230, 185);\\r\\n    ;\\r\\n}\\r\\n\\r\\n\\r\\n@media (max-width: 1050px) and (min-width: 992px) {\\r\\n   \\r\\n    i{\\r\\n        font-size: 13px;\\r\\n    }\\r\\n    .nav-link-size{\\r\\n        font-size: 15px;\\r\\n    }\\r\\n}\\r\\n\\r\\n.ml-btn{\\r\\n     margin-left: 1rem;\\r\\n}\\r\\n\\r\\n@media (max-width: 991px){\\r\\n\\r\\n    .nav-link-personalized {\\r\\n        display: block;\\r\\n        padding: 0.5rem 0rem;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (min-width: 992px){\\r\\n\\r\\n    .nav-link-personalized {\\r\\n        display: block;\\r\\n        padding: 0.5rem 0.8rem;\\r\\n    }\\r\\n}\\r\\n\\r\\n.btn-size{\\r\\n    font-size: 0.8rem;\\r\\n}\\r\\n\\r\\n\\r\\n.nav-link-personalized:hover{\\r\\n    \\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\n.btn-ingresar-navbar{\\r\\n\\r\\n    height: 2.5rem;\\r\\n    width: 10rem; \\r\\n    border-radius: 1.25rem; \\r\\n    border: 2px solid; \\r\\n    border-color:  #18BC9C;\\r\\n}\\r\\n\\r\\n\\r\\n.btn-registro-navbar{\\r\\n\\r\\n    height: 2.5rem;\\r\\n    width: 10rem; \\r\\n    border-radius: 1.25rem; \\r\\n    border: 1px solid white;\\r\\n    color: white;\\r\\n    \\r\\n}\\r\\n\\r\\n.btn-registro-navbar:hover{\\r\\n\\r\\n    color: white;\\r\\n    background: rgba(255, 255, 255, 0.527);\\r\\n    transition: 0.5s;\\r\\n}\\r\\n\\r\\n.border-radius-btn{\\r\\n\\r\\n    border-radius: 1.25rem;\\r\\n    width: 8rem;\\r\\n}\\r\\n\\r\\n.bg-white{\\r\\n\\r\\n    background-color: white;\\r\\n}\\r\\n\\r\\n\\r\\n/*==========================================*/\\r\\n/*=================Home page Styles=============*/\\r\\n/*==========================================*/\\r\\n\\r\\n\\r\\n/*==========================================*/\\r\\n/*=================Seccion 1=============*/\\r\\n/*==========================================*/\\r\\n\\r\\n\\r\\n.posicion-slider{\\r\\n    right: 40%;\\r\\n    bottom: 75%;\\r\\n    left: 0%;\\r\\n}\\r\\n\\r\\n\\r\\n.descripcion{ \\r\\n    position: absolute;  \\r\\n    color: black;\\r\\n    height: auto;\\r\\n    max-width: auto;\\r\\n    left: 20%;\\r\\n    top: 9px;\\r\\n}\\r\\n\\r\\n.color-card-carrusel{\\r\\n    background-color: rgb(255, 255, 255);\\r\\n}\\r\\n\\r\\n.card-title-color{\\r\\n    font-size: 2rem;\\r\\n    color: #072146;\\r\\n}\\r\\n\\r\\n.btn{\\r\\n\\r\\n    border-radius: 1.25rem;\\r\\n}\\r\\n\\r\\n\\r\\n/*==========================================*/\\r\\n/*=================Seccion 2=============*/\\r\\n/*==========================================*/\\r\\n.bg-photo{\\r\\n\\r\\n    background-image: url('/assets/images/fondo.jpg');\\r\\n    background-position: center;\\r\\n    background-repeat: no-repeat;\\r\\n    background-attachment: fixed;\\r\\n    background-size: cover;\\r\\n    height: 400px;\\r\\n}\\r\\n\\r\\n.margin-top-center{\\r\\n   \\r\\n    margin-top: 7rem;\\r\\n}\\r\\n\\r\\n.card-title{\\r\\n\\r\\n    font-size: 1.2rem;\\r\\n    transition: 1s;\\r\\n}\\r\\n\\r\\n.card-text{\\r\\n    font-size: 0.9rem;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.transiciones{\\r\\n\\r\\n    overflow: hidden;\\r\\n    cursor: pointer;\\r\\n    \\r\\n}\\r\\n\\r\\n.card-body-large{\\r\\n    -webkit-box-flex: 1;\\r\\n    -ms-flex: 1 1 auto;\\r\\n    flex: 1 1 auto;\\r\\n    padding: 1.25rem;\\r\\n    height: 14rem;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.btn-transicion{\\r\\n\\r\\n    position: absolute;\\r\\n    transition-property: bottom;\\r\\n    transition: 0.6s;\\r\\n    bottom: -3rem;\\r\\n\\r\\n}\\r\\n\\r\\n.btn-outline-primary:hover {\\r\\n    color: #2C3E50;\\r\\n    border-color: #2C3E50;\\r\\n    color: white;\\r\\n    transition: 0s;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.btn-transicion-dos{\\r\\n\\r\\n    position: absolute;\\r\\n    transition-property: bottom;\\r\\n    transition: 0.6s;\\r\\n    bottom: 1rem;\\r\\n}\\r\\n\\r\\n.btn-transicion-tres{\\r\\n\\r\\n    position: absolute;\\r\\n    bottom: -3rem;\\r\\n    transition: 0.6s;\\r\\n\\r\\n}\\r\\n\\r\\n.nav-link-personalized-one{\\r\\n    \\r\\n    display: block;\\r\\n    padding-top: 1rem;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\ndropdown-css{\\r\\n    box-sizing: 80px;\\r\\n}\\r\\n\\r\\n\\r\\n.banner-container{\\r\\n    background-image: url(https://silversd.com/wp-content/uploads/2016/09/banner-background-hands-typing-on-mac-laptop-keyboard-1500x400.jpg);\\r\\n    max-width: 100%; \\r\\n    height: 300px;\\r\\n    background-attachment: fixed;\\r\\n    background-size: cover;\\r\\n    background-position: center;\\r\\n    background-repeat: no-repeat;\\r\\n   \\r\\n}\\r\\n.banner-ob{\\r\\n    padding-top: 100px;\\r\\n    color: white;\\r\\n    position: relative;\\r\\n    text-align: center;\\r\\n}\\r\\n.btn-signin{\\r\\n    border-radius: 15px;\\r\\n}\\r\\n/*==========================================*/\\r\\n/*=================Seccion 3=============*/\\r\\n/*==========================================*/\\r\\n\\r\\n\\r\\n.col-lg-4-personalized{\\r\\n\\r\\n    position: relative;\\r\\n    width: 100%;\\r\\n    padding-right: 0px;\\r\\n    padding-left: 0px;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n.img-zoom:hover img{\\r\\n    \\r\\n    -webkit-transform:scale(1.2);\\r\\n    transform:scale(1.2);\\r\\n    transition: ease-in-out .5s;\\r\\n    \\r\\n}\\r\\n\\r\\n.mayus-title{\\r\\n\\r\\n    font-size: 1.3rem;\\r\\n    transition: 0.5s;\\r\\n}\\r\\n\\r\\n\\r\\n.container-img{\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.img-background-rgba::after{\\r\\n    \\r\\n    content:\\\"\\\";\\r\\n    position:absolute;\\r\\n    top:0;\\r\\n    left:0;\\r\\n    width:100%;\\r\\n    height:100%;\\r\\n    background:rgba(0, 0, 0, 0.616);\\r\\n    transition: 1s;\\r\\n        \\r\\n}\\r\\n\\r\\n.img-background-rgba-white::after{\\r\\n    \\r\\n    content:\\\"\\\";\\r\\n    position:absolute;\\r\\n    top:0;\\r\\n    left:0;\\r\\n    width:100%;\\r\\n    height:100%;\\r\\n    background:rgba(255, 255, 255, 0.76);\\r\\n    transition: 1s;\\r\\n    \\r\\n}\\r\\n\\r\\n\\r\\n.box-text {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    bottom: 0;\\r\\n    text-align: center;\\r\\n    padding-top: calc(60% - 30px);\\r\\n    z-index:1;\\r\\n    transition: 1s;\\r\\n    \\r\\n}\\r\\n\\r\\n.box-text span{\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.box-text:hover{\\r\\n\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    bottom: 0;\\r\\n    text-align: center;\\r\\n    padding-top: calc(45% - 30px);\\r\\n    transition: 0.7s;\\r\\n    z-index:1;\\r\\n}\\r\\n\\r\\n.box-text:hover span{\\r\\n    display: block;\\r\\n}\\r\\n\\r\\n.text-color-title{\\r\\n\\r\\n    color: #003761;\\r\\n    \\r\\n}\\r\\n\\r\\n.dropdown-item:hover {\\r\\n    color: #fff;\\r\\n    text-decoration: none;\\r\\n    background-color: rgb(255, 255, 255);\\r\\n}\\r\\n\\r\\n.dropdown-item:active{\\r\\n    \\r\\n    color: #fff;\\r\\n    text-decoration: none;\\r\\n    background-color: rgb(255, 255, 255);\\r\\n\\r\\n}\\r\\n\\r\\n@media (min-width: 400px) and (max-width: 991px) {\\r\\n    .dropdown-size{\\r\\n        width: 380px;\\r\\n    }\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n/*==========================================*/\\r\\n/*=================Seccion 4=============*/\\r\\n/*==========================================*/\\r\\n\\r\\n.form-control{\\r\\n    resize: none;\\r\\n}\\r\\n\\r\\n.contacto{\\r\\n    \\r\\n    background-color: rgb(243, 243, 243);\\r\\n}\\r\\n\\r\\n/*==========================================*/\\r\\n/*=================Footer=============*/\\r\\n/*==========================================*/\\r\\n\\r\\n.social-icon{\\r\\n    font-size: 1.5rem;\\r\\n    color: #fff;\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n/*==========================================*/\\r\\n/*================Registro Html Page==============*/\\r\\n/*==========================================*/\\r\\n\\r\\n\\r\\n/* .form {\\r\\n    max-width: 450px;\\r\\n    \\r\\n    // positioning context\\r\\n    > div {\\r\\n      position: relative;\\r\\n  \\r\\n      // Looks like placeholder\\r\\n      > label {\\r\\n        opacity: 0.3;\\r\\n        position: absolute;\\r\\n        top: 22px;\\r\\n        left: 20px;\\r\\n      }\\r\\n    }\\r\\n  } */\\r\\n\\r\\n\\r\\n  input[type=number]::-webkit-outer-spin-button,\\r\\n  \\r\\n  input[type=number]::-webkit-inner-spin-button {\\r\\n  \\r\\n      -webkit-appearance: none;\\r\\n  \\r\\n      margin: 0;\\r\\n  \\r\\n  }\\r\\n  \\r\\n  input[type=number] {\\r\\n  \\r\\n      -moz-appearance:textfield;\\r\\n  \\r\\n  }\\r\\n\\r\\n.card-hb-1 {\\r\\n\\r\\n    border-left: 1rem solid #1cc88a;\\r\\n}\\r\\n\\r\\n.card-hb-2{\\r\\n\\r\\n    border-left: 1rem solid #36b9cc;\\r\\n}\\r\\n\\r\\n.card-hb-3{\\r\\n    border-left:  1rem solid #f6c23e;\\r\\n}\\r\\n\\r\\n.height-div{\\r\\n\\r\\n    margin-top: 150px;\\r\\n    margin-bottom: 150px;\\r\\n}\\r\\n\\r\\n.font-size-title{\\r\\n\\r\\n    font-size: 1.6rem;\\r\\n}\\r\\n/*==========================================*/\\r\\n/*================Home Banking==============*/\\r\\n/*==========================================*/\\r\\n\\r\\n.HomeBankingOptions h4, .HomeBankingAccess h3, .HomeBankingAccess h5 .HomeBankingAccess h6 {\\r\\n    font-family: 'Nunito Sans', sans-serif;\\r\\n}\\r\\n/*==========================================*/\\r\\n/*================Section 1==============*/\\r\\n/*==========================================*/\\r\\n.card-hb{\\r\\n    height: 260px;\\r\\n    transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);\\r\\n    border-radius: 12px;\\r\\n    overflow: hidden;\\r\\n    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);\\r\\n   }\\r\\n   .card-hb:hover {\\r\\n      box-shadow: 0px 30px 18px -8px rgba(0, 0, 0,0.1);\\r\\n      transform: scale(1.10, 1.10);\\r\\n   }\\r\\n   .card__info {\\r\\n      height: 30px;\\r\\n      position: absolute;\\r\\n      bottom: 15px;\\r\\n      width: 100%;\\r\\n      text-align: center;\\r\\n      background-color: #fff;\\r\\n      border-bottom-left-radius: 12px;\\r\\n      border-bottom-right-radius: 12px;\\r\\n   }\\r\\n   .pending {\\r\\n      cursor:not-allowed;\\r\\n   }\\r\\n   .loading {\\r\\n      height: 100px;\\r\\n      width: 100px;\\r\\n      text-align: center;\\r\\n      margin-left: auto;\\r\\n      margin-right: auto;\\r\\n   }\\r\\n   .cardApprovalContent{\\r\\n      border-radius:  10px;\\r\\n      border: 2px solid  #f39c12 !important;\\r\\n      height: 150px;\\r\\n      width: 250px;\\r\\n      background-image: url(/assets/images/creditcard.png);\\r\\n\\r\\n      background-size: cover;\\r\\n      background-position: center;\\r\\n      background-repeat: no-repeat;\\r\\n      color:  white;\\r\\n   }\\r\\n   .img-tarjeta{\\r\\n      height: 30px;\\r\\n      width: 30px;\\r\\n   }\\r\\n   .name-tarjeta{\\r\\n      font-size: 15px;\\r\\n      margin-left: 10px;\\r\\n   }\\r\\n   .card-text-vto{\\r\\n   font-size: 10px;\\r\\n   }\\r\\n   .img-solicita-tarjeta{\\r\\n      height: 150px;\\r\\n   }\\r\\n\\r\\n   .num-margin-top{\\r\\n      \\r\\n       margin-top: 70px;\\r\\n   }\\r\\n\\r\\n\\r\\n   .contenedor-prestamos{\\r\\n       height: 200px;\\r\\n       background-color: #fff;\\r\\n       border: 2px solid #18BC9C;\\r\\n       border-radius: 40px;\\r\\n   }\\r\\n   .contenedor-prestamos p{\\r\\n    font-size: 1.2rem;\\r\\n   }\\r\\n\\r\\n   .monedas{\\r\\n       color: #f6c23e;\\r\\n       font-size: 2rem;\\r\\n   }\\r\\n/*==========================================*/\\r\\n/*=================Seccion 2=============*/\\r\\n/*==========================================*/\\r\\n.animacion-container{\\r\\n    /* overflow: hidden; */\\r\\n}\\r\\n\\r\\n.mover{\\r\\n    position: relative;\\r\\n    background-color: #18BC9C;\\r\\n    left: 100%;\\r\\n   \\r\\n}\\r\\n\\r\\n\\r\\n/*==========================================*/\\r\\n/*================Section 3==============*/\\r\\n/*==========================================*/\\r\\n\\r\\n\\r\\n.accesos {\\r\\n    position: relative;\\r\\n    height: 150px;\\r\\n    border-radius: 12px;\\r\\n    box-shadow: 0px 10px 8px -8px rgba(0, 0, 0,0.1);\\r\\n}\\r\\n\\r\\n.accesos i{\\r\\n    font-size: 2rem;\\r\\n    padding-left: 5px;\\r\\n}\\r\\n\\r\\n.accesos h5 {\\r\\n    font-size: 0.9rem;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.accesos .links {\\r\\n    position: absolute;\\r\\n    width: 100%\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) { \\r\\n    .posicion-slider {\\r\\n        right: 40%;\\r\\n        bottom: 86%;\\r\\n        left: 0%;\\r\\n    }\\r\\n }\\r\\n\\r\\n @media (min-width: 992px) { \\r\\n    .descripcion {\\r\\n        position: absolute;  \\r\\n        color: black;\\r\\n        height: auto;\\r\\n        max-width: 50%;\\r\\n        left: 20%;\\r\\n    }\\r\\n }\\r\\n\\r\\n .container-cards-padding {\\r\\n    width: 100%;\\r\\n    padding-right: 2rem;\\r\\n    padding-left: 2rem;\\r\\n    margin-right: auto;\\r\\n    margin-left: auto;\\r\\n}\\r\\n.carousel-control-prev, .carousel-control-next {\\r\\n    position: absolute;\\r\\n    top: 37%;\\r\\n    bottom: 0;\\r\\n    z-index: 1;\\r\\n    display: -webkit-box;\\r\\n    display: -ms-flexbox;\\r\\n    display: flex;\\r\\n    -webkit-box-align: center;\\r\\n    -ms-flex-align: center;\\r\\n    align-items: center;\\r\\n    -webkit-box-pack: center;\\r\\n    -ms-flex-pack: center;\\r\\n    justify-content: center;\\r\\n    width: 6%;\\r\\n    color: #fff;\\r\\n    height: 17%;\\r\\n    text-align: center;\\r\\n    opacity: 0.5;\\r\\n    -webkit-transition: opacity 0.15s ease;\\r\\n    transition: opacity 0.15s ease;\\r\\n    background: rgb(255, 255, 255);\\r\\n}\\r\\n\\r\\n\\r\\n/* No borrar importante */\\r\\n.carousel-control-prev-icon {\\r\\n    background-image: url();\\r\\n}\\r\\n\\r\\n\\r\\n.navbar {\\r\\n    position: relative;\\r\\n    display: -webkit-box;\\r\\n    display: -ms-flexbox;\\r\\n    display: flex;\\r\\n    -ms-flex-wrap: wrap;\\r\\n    flex-wrap: wrap;\\r\\n    -webkit-box-align: center;\\r\\n    -ms-flex-align: center;\\r\\n    align-items: center;\\r\\n    -webkit-box-pack: justify;\\r\\n    -ms-flex-pack: justify;\\r\\n    justify-content: space-between;\\r\\n    padding: 0.4rem 1rem;\\r\\n}\\r\\n\\r\\n.m-num-card {\\r\\n    margin-top: 78px;\\r\\n    margin-bottom: 3px;\\r\\n    font-size: 18px;\\r\\n}\\r\\n\\r\\n.name-card{\\r\\n\\r\\n    margin-left: 10px;\\r\\n    font-size: 12px;\\r\\n}\\r\\n\\r\\n.font-size-vto{\\r\\n\\r\\n    font-size: 10px;\\r\\n    margin-bottom: 5px;\\r\\n}\\r\\n\\r\\n\\r\\n.cargando-tarjeta-img {\\r\\n    color: #000;\\r\\n    background-size: 100%;\\r\\n    background-repeat: no-repeat;\\r\\n    width: 30%;\\r\\n    height: 40%;\\r\\n    animation: myframes linear 1.2s infinite;\\r\\n    transform-origin: 50% 50%;\\r\\n    float: left;\\r\\n    position: relative;\\r\\n    left: 0%;\\r\\n    top: -2%; \\r\\n}\\r\\n@keyframes myframes {\\r\\n   0% {\\r\\n       transform:  rotate(0deg);\\r\\n   }\\r\\n   100% {\\r\\n       transform:  rotate(360deg);\\r\\n   }\\r\\n}\\r\\n\\r\\n.bg-imagen{\\r\\n\\r\\n    background-image:  url('/assets/images/fondo.jpg');\\r\\n    background-size: cover;\\r\\n    background-position: center;\\r\\n    background-attachment: fixed;\\r\\n    background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\n.form-control-two{\\r\\n    height: calc(2.5em + 0.75rem + 2px)\\r\\n}\\r\\n/*==========================================*/\\r\\n/*=================Infopage=============*/\\r\\n/*==========================================*/\\r\\n\\r\\n.infopage-bg1{\\r\\n    background-image: url(/assets/images/info1.png);\\r\\n    background-position: center;\\r\\n    background-repeat: no-repeat;\\r\\n    background-attachment: fixed;\\r\\n    background-size: cover;\\r\\n    height: 450px;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.infopage-bg2{\\r\\n    background-image: url(/assets/images/info2.jpg);\\r\\n    background-position: center;\\r\\n    background-repeat: no-repeat;\\r\\n    background-attachment: fixed;\\r\\n    background-size: cover;\\r\\n    height: 450px;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.infopage-bg3{\\r\\n    background-image: url(/assets/images/info3.jpg);\\r\\n    background-position: center;\\r\\n    background-repeat: no-repeat;\\r\\n    background-attachment: fixed;\\r\\n    background-size: cover;\\r\\n    height: 450px;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.infopage-bg4{\\r\\n    background-image: url(/assets/images/info4.jpg);\\r\\n    background-position: center;\\r\\n    background-repeat: no-repeat;\\r\\n    background-attachment: fixed;\\r\\n    background-size: cover;\\r\\n    height: 450px;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.box {\\r\\n\\tmax-height: 350px;\\r\\n\\toverflow-y: scroll;\\r\\n\\tpadding: 50px;\\r\\n\\tbackground: rgba(255, 255, 255, .8);\\r\\n\\tbox-shadow: 0 5px 15px rgba(0,0,0,.5);\\r\\n\\r\\n}\\r\\n\\r\\n.infopage-img {\\r\\n\\tmargin-top: 15px;\\r\\n\\theight: 80px;\\r\\n\\twidth: 80px;\\r\\n}\\r\\n\\r\\n.footerinfo {\\r\\n\\tbackground-color: rgb(7, 18, 58);\\r\\n\\tpadding: 30px 30px;\\r\\n\\tcolor: rgb(122, 134, 173);\\r\\n\\tmargin-top: 30px;\\r\\n\\tmargin-bottom: 30px;\\r\\n}\\r\\n\\r\\n\\r\\n/* width */\\r\\n::-webkit-scrollbar {\\r\\n    width: 10px;\\r\\n    background-color: #333;\\r\\n    color: #ddd;\\r\\n    box-shadow: 0 0 40px #03f;\\r\\n    border-radius: 16px;\\r\\n  }\\r\\n  \\r\\n  /* Track */\\r\\n  ::-webkit-scrollbar-track {\\r\\n    background: #003761; \\r\\n    opacity: 5;\\r\\n  }\\r\\n   \\r\\n  /* Handle */\\r\\n  ::-webkit-scrollbar-thumb {\\r\\n    background-color: #18BC9C;\\r\\n    color: #ddd;\\r\\n    box-shadow: 0 0 40px rgb(2, 4, 12);\\r\\n    border-radius: 16px;\\r\\n  }\\r\\n  \\r\\n  /* Handle on hover */\\r\\n  ::-webkit-scrollbar-thumb:hover {\\r\\n    background: rgba(255, 255, 255, 0.3); \\r\\n  }\\r\\n\\r\\n  /*==========================================*/\\r\\n  /*=================Simulador.html=============*/\\r\\n  /*==========================================*/\\r\\n\\r\\n  .backgroundSimulador{\\r\\n\\r\\n    background-image: url('/assets/images/simulador.jpg');\\r\\n    background-position: center;\\r\\n    background-size: cover;\\r\\n    \\r\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/infopage.js":
/*!*************************!*\
  !*** ./src/infopage.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/infopage.js?");

/***/ })

/******/ });