(function() {
var exports = {};
exports.id = 588;
exports.ids = [588];
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

/***/ 4980:
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
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(883);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8303);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5149);
/* harmony import */ var _components_coverImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8475);
/* harmony import */ var _components_smallCover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5087);









const Card = ({
  text,
  url
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
  className: "uk-card uk-margin-right uk-margin-left uk-card-default uk-margin-top uk-border-rounded uk-width-sm uk-flex uk-flex-column uk-flex-center",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
    style: {
      height: "120px",
      paddingBottom: 0
    },
    className: "uk-padding",
    src: url,
    alt: ""
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    style: {
      height: "145px",
      paddingTop: 0,
      paddingBottom: "25px"
    },
    className: "uk-card-body uk-height-1-2 uk-flex uk-flex-middle",
    children: text
  })]
});

const agence = ({
  agence
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    footer: true,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      seo: agence.seo
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_smallCover__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      img: agence.header.image,
      title: agence.header.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "uk-container uk-text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
          children: ["Grace \xE0 une solide exp\xE9rience de plus de", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "text-primary",
            children: "30 ans"
          }), " dans la", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "text-primary",
            children: " Ma\xEEtrise d\u2019\u0152uvre"
          }), ", nous r\xE9alisons et vous assistons dans tous vos", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "text-primary",
            children: "projets de construction"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
          children: "Notre savoir faire:"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})]
      }), agence.content.map(content => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "uk-position-relative uk-height-medium uk-width-1-1 uk-margin-top-large",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            "uk-scrollspy": "cls: discover; offset-top: -300; hidden: false;",
            className: `uk-height-medium uk-width-1-1 hidden--${content.left ? "left" : "right"} uk-background-cover uk-position-absolute`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_coverImage__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
              image: content.cover
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            style: {
              width: "100%"
            },
            className: "uk-height-medium uk-padding uk-padding-remove-vertical uk-flex-inline uk-position-center uk-flex-middle uk-flex-center uk-text-center responsive-text-medium uk-margin-remove",
            children: content.text
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
            style: {
              width: "100%",
              color: 'white'
            },
            "uk-scrollspy": "cls: discover; offset-top: -300; hidden: false;",
            className: `uk-height-medium uk-padding responsive-text-medium uk-padding-remove-vertical uk-flex-inline uk-position-center uk-flex-middle uk-flex-center uk-text-center hidden--${content.left ? "left" : "right"} hidden__text uk-margin-remove`,
            children: content.text
          })]
        }, content.id);
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "uk-container uk-text-center uk-background-muted",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
          className: "uk-margin-top-large",
          children: "Notre activit\xE9 concerne:"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "uk-flex uk-flex-center uk-flex-wrap uk-flex-wrap-center uk-margin-bottom",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
            url: "/house.svg",
            text: "Les habitats individuels ou collectifs"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
            url: "/patrimonial.svg",
            text: "Les biens patrimoniaux"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
            url: "/office.svg",
            text: "La cr\xE9ation de locaux professionnels ou de franchises"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Card, {
            url: "/store.svg",
            text: "L\u2019am\xE9nagement de commerces (pr\xEAt \xE0 porter, alimentation, pharmacie\u2026)"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "uk-container uk-text-center uk-margin-top-large uk-margin-bottom",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
          children: "Notre \xE9quipe"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              className: "text-primary",
              children: "Marc Torres"
            }), ", concepteur et Economiste de la construction, vous accompagnera dans la concr\xE9tisation et la mise en oeuvre de vos projets."]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            className: "uk-height-medium",
            src: "/marc.jpeg",
            alt: ""
          })]
        })]
      })]
    })]
  });
};

async function getStaticProps() {
  // Run API calls in parallel
  const [agence] = await Promise.all([(0,_lib_api__WEBPACK_IMPORTED_MODULE_6__/* .fetchAPI */ .I)("/agence")]);
  return {
    props: {
      agence
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (agence);

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
var __webpack_exports__ = __webpack_require__.X(0, [821,544,61,672,836], function() { return __webpack_exec__(4980); });
module.exports = __webpack_exports__;

})();