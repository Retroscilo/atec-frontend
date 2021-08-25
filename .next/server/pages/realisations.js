(function() {
var exports = {};
exports.id = 446;
exports.ids = [446];
exports.modules = {

/***/ 5087:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coverImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8475);





const SmallCover = ({
  img,
  title
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "uk-position-relative uk-height-medium uk-background-cover skew uk-height-correction uk-box-shadow-small",
    children: [img && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_coverImage__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      priority: true,
      image: img,
      blurDataURL: `/${img.name}`,
      placeholder: "blur",
      "uk-scrollspy": "cls: uk-animation-kenburns; repeat: true"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      className: "uk-light uk-position-center uk-text-large uk-margin-remove",
      children: title
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (SmallCover);

/***/ }),

/***/ 6079:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(883);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8303);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5149);
/* harmony import */ var _components_coverImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8475);
/* harmony import */ var _components_smallCover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5087);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7820);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7051);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_7__);











const Realisations = ({
  realisations
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      seo: realisations.seo
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_smallCover__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      img: realisations.header.image,
      title: realisations.header.title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "",
      children: realisations.content.map(content => {
        const side = content.left ? "left" : "right";
        const padding = content.left ? "0 5% 0 40% !important" : "0 40% 0 5% !important";

        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min;
        }

        const textParallax = getRandomInt(-150, -220);
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "uk-position-relative uk-height-medium uk-width-1-1 uk-margin-top-large",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            "uk-scrollspy": `cls: discover__crop--${side}; offset-top: -100; hidden: false;`,
            "uk-parallax": `y: ${getRandomInt(-250, -320)}`,
            className: `uk-height-medium uk-width-1-1 hidden--${side} uk-background-cover uk-position-absolute crop--${side}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              "uk-slideshow": `autoplay: true; autoplay-interval: ${getRandomInt(3500, 6000)};pause-on-hover: true; animation: fade; min-height: 300; max-height: 300;`,
              className: "",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "uk-position-relative uk-visible-toggle uk-light",
                tabIndex: "-1",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                  className: "uk-slideshow-items",
                  style: {
                    height: "300px !important"
                  },
                  children: content.covers.map(image => {
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_coverImage__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                        style: "",
                        image: image
                      })
                    }, image.id);
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "uk-position-center-left uk-position-small",
                  href: "#",
                  "uk-slidenav-previous": "true",
                  "uk-slideshow-item": "previous"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "uk-position-center-right uk-position-small",
                  href: "#",
                  "uk-slidenav-next": "true",
                  "uk-slideshow-item": "next"
                })]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
            "uk-parallax": `y: ${textParallax}`,
            style: {
              width: "100%",
              padding,
              pointerEvents: "none"
            },
            className: `uk-height-medium uk-padding uk-padding-remove-vertical uk-flex-inline  uk-flex-middle uk-flex-center uk-text-left responsive-text-medium uk-margin-remove responsive-text-medium`,
            children: html_react_parser__WEBPACK_IMPORTED_MODULE_7___default()(marked__WEBPACK_IMPORTED_MODULE_6___default()(content.description))
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
            "uk-parallax": `y: ${textParallax}`,
            style: {
              width: "100%",
              padding,
              position: "absolute",
              left: 0,
              pointerEvents: "none",
              color: "white"
            },
            "uk-scrollspy": `cls: discover__crop--${side}; offset-top: -100; hidden: false;`,
            className: `responsive-text-medium uk-height-medium uk-padding responsive-text-medium uk-padding-remove-vertical uk-flex-inline uk-flex-middle uk-flex-center uk-text-left hidden--${side} hidden__text uk-margin-remove`,
            children: html_react_parser__WEBPACK_IMPORTED_MODULE_7___default()(marked__WEBPACK_IMPORTED_MODULE_6___default()(content.description))
          })]
        }, content.id);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      "uk-parallax": "y: -220px",
      className: "uk-container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
          right: "50px",
          top: 50,
          zIndex: '-1'
        },
        className: "uk-position-absolute",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          className: "uk-width-large uk-visible@s",
          src: "/construction.svg",
          alt: ""
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        children: "Exemple de carnets de d\xE9tails"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DetailsLink, {
        url: "/musee.pdf",
        text: "Mus\xE9e de l'oc\xE9an Indien"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DetailsLink, {
        url: "/aeroclub.pdf",
        text: "A\xE9roclub"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DetailsLink, {
        url: "/arbradelice.pdf",
        text: "Restaurant l'arbrad\xE9lice"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DetailsLink, {
        url: "/cloture.pdf",
        text: "Cl\xF4tures de l'arbrad\xE9lice"
      })]
    })]
  });
};

const DetailsLink = ({
  text,
  url
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
  className: "uk-width-medium uk-margin-top uk-button uk-button-primary uk-box-shadow-small uk-border-rounded uk-flex uk-flex-between uk-flex-middle uk-padding-right",
  href: url,
  target: "_blank",
  rel: "noreferrer",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
    className: "uk-margin-remove uk-margin-right uk-flex uk-flex-middle uk-text-left",
    children: text
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
    "uk-icon": "icon: link; ratio: 1.5"
  })]
});

async function getStaticProps() {
  // Run API calls in parallel
  const [realisations] = await Promise.all([(0,_lib_api__WEBPACK_IMPORTED_MODULE_8__/* .fetchAPI */ .I)("/realisations")]);
  return {
    props: {
      realisations
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Realisations);

/***/ }),

/***/ 7051:
/***/ (function(module) {

"use strict";
module.exports = require("html-react-parser");;

/***/ }),

/***/ 7820:
/***/ (function(module) {

"use strict";
module.exports = require("marked");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [821,544,61,672,836], function() { return __webpack_exec__(6079); });
module.exports = __webpack_exports__;

})();