exports.id = 836;
exports.ids = [836];
exports.modules = {

/***/ 8475:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1422);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Image = (_ref) => {
  let {
    image,
    style
  } = _ref,
      props = _objectWithoutProperties(_ref, ["image", "style"]);

  const {
    url,
    alternativeText
  } = image;

  const loader = () => {
    return (0,_lib_media__WEBPACK_IMPORTED_MODULE_2__/* .getStrapiMedia */ .$)(image);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, _objectSpread(_objectSpread({}, props), {}, {
      loader: loader,
      layout: "fill",
      objectFit: "cover",
      src: url,
      alt: alternativeText || "",
      className: style
    }))
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Image);

/***/ }),

/***/ 5149:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(7672);
;// CONCATENATED MODULE: ./components/nav.js






const Nav = ({
  hidden
}) => {
  const global = (0,external_react_.useContext)(_app.GlobalContext);
  const nav = global.Nav;
  if (!nav) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Loading Nav..."
  });
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "uk-padding-large uk-padding-remove-vertical uk-sticky-fixed uk-width-1-1",
      "uk-sticky": `animation: uk-animation-fade; sel-target: .uk-navbar-container; cls-active: uk-navbar-container; cls-inactive: ${hidden ? 'uk-invisible uk-height-null' : 'uk-background-transparent uk-light uk-position-relative'}; top: 100;`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: "uk-navbar",
        "uk-navbar": "true",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-navbar-left uk-link-reset",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: "uk-font-large",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                className: "uk-margin-remove",
                children: nav.title
              }), " "]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "uk-navbar-right",
          children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
            className: "uk-navbar-nav uk-visible@s",
            children: nav.pages.map(page => {
              return /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  as: `/${page.url}`,
                  href: "/[name]",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "uk-link-reset uk-font-large",
                    children: page.nom
                  })
                })
              }, page.id);
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "uk-inline uk-hidden@s",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              style: {
                width: '30px',
                height: '30px'
              },
              "uk-icon": "menu"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              "uk-dropdown": "pos: bottom-left; mode: click;",
              children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                className: "uk-nav uk-dropdown-nav",
                children: nav.pages.map(page => {
                  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        as: `/${page.url}`,
                        href: "/[name]",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "uk-link-reset uk-font-large font-head",
                          children: page.nom
                        })
                      })
                    }), page.id !== nav.pages.length && /*#__PURE__*/jsx_runtime_.jsx("hr", {
                      style: {
                        borderTopColor: '#ededed'
                      }
                    })]
                  }, page.id);
                })
              })
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ var nav = (Nav);
;// CONCATENATED MODULE: ./components/Footer.jsx






const Footer = () => {
  const global = (0,external_react_.useContext)(_app.GlobalContext);
  const nav = global.Nav;
  if (!nav) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Loading..."
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "uk-container uk-width-1-1 uk-height-small uk-background-secondary uk-light uk-flex footer-clip",
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "uk-container uk-flex uk-flex-middle uk-flex-center uk-height-1-1 uk-text-center uk-margin-remove uk-width-1-2 font-title text-small",
      children: "ATEC 2021 \xA9"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "uk-container uk-flex uk-flex-wrap uk-flex-center uk-width-1-2 uk-margin-remove uk-padding",
      children: nav.pages.map(page => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        as: `/${page.url}`,
        href: "/[name]",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          style: {
            cursor: 'pointer'
          },
          className: "uk-width-small uk-margin-right uk-margin-left uk-link-reset uk-flex uk-flex-middle uk-text-normal",
          children: page.nom
        })
      }, page.id))
    })]
  });
};

/* harmony default export */ var components_Footer = (Footer);
;// CONCATENATED MODULE: ./components/layout.js






const Layout = ({
  children,
  seo,
  hideNav
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx(nav, {
    hidden: hideNav
  }), children, /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
});

/* harmony default export */ var layout = (Layout);

/***/ }),

/***/ 8303:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7672);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1422);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Seo = ({
  seo
}) => {
  const {
    defaultSeo,
    siteName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_pages_app__WEBPACK_IMPORTED_MODULE_3__.GlobalContext);

  const seoWithDefaults = _objectSpread(_objectSpread({}, defaultSeo), seo);

  const fullSeo = _objectSpread(_objectSpread({}, seoWithDefaults), {}, {
    // Add title suffix
    metaTitle: `${seoWithDefaults.metaTitle} | ${siteName}`,
    // Get full image URL
    shareImage: (0,_lib_media__WEBPACK_IMPORTED_MODULE_4__/* .getStrapiMedia */ .$)(seoWithDefaults.shareImage)
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [fullSeo.metaTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: fullSeo.metaTitle
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:title",
        content: fullSeo.metaTitle
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "twitter:title",
        content: fullSeo.metaTitle
      })]
    }), fullSeo.metaDescription && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "description",
        content: fullSeo.metaDescription
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:description",
        content: fullSeo.metaDescription
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "twitter:description",
        content: fullSeo.metaDescription
      })]
    }), fullSeo.shareImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:image",
        content: fullSeo.shareImage
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "twitter:image",
        content: fullSeo.shareImage
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "image",
        content: fullSeo.shareImage
      })]
    }), fullSeo.article && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:type",
      content: "article"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Seo);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;