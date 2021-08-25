(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8282:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./lib/media.js
var media = __webpack_require__(1422);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/image.js


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
    return (0,media/* getStrapiMedia */.$)(image);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(next_image.default, _objectSpread(_objectSpread({}, props), {}, {
    className: style,
    loader: loader,
    layout: "responsive",
    width: image.width,
    height: image.height,
    objectFit: "contain",
    src: url,
    alt: alternativeText || ""
  }));
};

/* harmony default export */ var components_image = (Image);
;// CONCATENATED MODULE: ./components/card.js






const card_Card = ({
  article
}) => {
  return /*#__PURE__*/_jsx(Link, {
    as: `/article/${article.slug}`,
    href: "/article/[id]",
    children: /*#__PURE__*/_jsx("a", {
      className: "uk-link-reset",
      children: /*#__PURE__*/_jsxs("div", {
        className: "uk-card uk-card-muted",
        children: [/*#__PURE__*/_jsx("div", {
          className: "uk-card-media-top",
          children: /*#__PURE__*/_jsx(NextImage, {
            image: article.image
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "uk-card-body",
          children: [/*#__PURE__*/_jsx("p", {
            id: "category",
            className: "uk-text-uppercase",
            children: article.category.name
          }), /*#__PURE__*/_jsx("p", {
            id: "title",
            className: "uk-text-large",
            children: article.title
          })]
        })]
      })
    })
  });
};

/* harmony default export */ var card = ((/* unused pure expression or super */ null && (card_Card)));
;// CONCATENATED MODULE: ./components/articles.js





const Articles = ({
  articles
}) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);
  return /*#__PURE__*/_jsx("div", {
    children: /*#__PURE__*/_jsxs("div", {
      className: "uk-child-width-1-2@s",
      "data-uk-grid": "true",
      children: [/*#__PURE__*/_jsx("div", {
        children: leftArticles.map((article, i) => {
          return /*#__PURE__*/_jsx(Card, {
            article: article
          }, `article__left__${article.slug}`);
        })
      }), /*#__PURE__*/_jsx("div", {
        children: /*#__PURE__*/_jsx("div", {
          className: "uk-child-width-1-2@m uk-grid-match",
          "data-uk-grid": true,
          children: rightArticles.map((article, i) => {
            return /*#__PURE__*/_jsx(Card, {
              article: article
            }, `article__left__${article.slug}`);
          })
        })
      })]
    })
  });
};

/* harmony default export */ var articles = ((/* unused pure expression or super */ null && (Articles)));
// EXTERNAL MODULE: ./components/layout.js + 2 modules
var layout = __webpack_require__(5149);
;// CONCATENATED MODULE: ./public/cover.jpg
/* harmony default export */ var cover = ({"src":"/_next/static/image/public/cover.1e1adfa8450aa1f9cb5829e2e20cebba.jpg","height":801,"width":1200,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAH/9oACAEBAAAAAD3/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAF/9oACAEDEAAAAFP/xAAcEAABAwUAAAAAAAAAAAAAAAABAAIDEhMhQWH/2gAIAQEAAT8ApYY2S22gxkDG+lf/xAAXEQEAAwAAAAAAAAAAAAAAAAABACFh/9oACAECAQE/AG1xn//EABcRAQEBAQAAAAAAAAAAAAAAAAERAAL/2gAIAQMBAT8AqHKMpXf/2Q=="});
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(7672);
// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__(7820);
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_);
// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__(7051);
var external_html_react_parser_default = /*#__PURE__*/__webpack_require__.n(external_html_react_parser_);
;// CONCATENATED MODULE: ./components/Cover.jsx











const Cover = ({
  Cover
}) => {
  const global = (0,external_react_.useContext)(_app.GlobalContext);
  const nav = global.Nav;
  if (!nav) return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: "Loading..."
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "uk-height-viewport uk-background-cover uk-light",
      "uk-parallax": "bgy: -500",
      "uk-height-viewport": "true",
      style: {
        backgroundImage: `url(${cover.src})`
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "uk-position-center-left uk-padding uk-container uk-container-expand",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "uk-margin-remove-vertical uk-margin-left uk-heading-2xlarge",
          "uk-parallax": "opacity: 1,0; y: 0, -100; viewport: -0.5",
          children: Cover.Legend
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "uk-margin-left uk-margin-remove-vertical",
          children: external_html_react_parser_default()(external_marked_default()(Cover.Subtitle))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-flex uk-flex-center uk-margin-top uk-flex-wrap uk-flex-wrap-middle",
          children: nav.pages.map(page => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            as: `/${page.url}`,
            href: "/[name]",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "uk-button uk-button-default uk-width-small uk-margin-right uk-margin-left uk-heading-small uk-link-reset uk-margin-top",
              children: page.nom
            })
          }, page.id))
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "#belowCover",
        "uk-scroll": "true",
        className: "uk-margin-auto uk-position-bottom uk-flex uk-flex-center uk-flex-middle cover-nav",
        style: {},
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-animation-hop",
          "uk-icon": "icon: chevron-down; ratio: 2;"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "belowCover",
      className: "uk-background-muted",
      style: {
        height: '80px'
      }
    })]
  });
};

/* harmony default export */ var components_Cover = (Cover);
// EXTERNAL MODULE: ./components/coverImage.js
var coverImage = __webpack_require__(8475);
// EXTERNAL MODULE: ./components/seo.js
var seo = __webpack_require__(8303);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
;// CONCATENATED MODULE: ./components/slideshow.js




const Slideshow = ({
  images
}) => {
  return /*#__PURE__*/_jsx("div", {
    "uk-slideshow": "autoplay: true; animation: pull",
    children: /*#__PURE__*/_jsxs("div", {
      className: "uk-position-relative uk-visible-toggle uk-light",
      tabIndex: "-1",
      children: [/*#__PURE__*/_jsx("ul", {
        className: "uk-slideshow-items",
        children: images && images.map(image => /*#__PURE__*/_jsxs("li", {
          children: [/*#__PURE__*/_jsx(NextImage, {
            image: image
          }), /*#__PURE__*/_jsx("div", {
            className: "uk-overlay uk-overlay-primary uk-position-top uk-text-center uk-transition-slide-bottom",
            children: /*#__PURE__*/_jsx("h4", {
              className: "uk-margin-remove",
              children: image.caption
            })
          })]
        }, image.id))
      }), /*#__PURE__*/_jsx("a", {
        className: "uk-position-center-left uk-position-medium uk-hidden-hover",
        href: "#",
        "uk-slidenav-previous": "true",
        "uk-slideshow-item": "previous"
      }), /*#__PURE__*/_jsx("a", {
        className: "uk-position-center-right uk-position-medium uk-hidden-hover",
        href: "#",
        "uk-slidenav-next": "true",
        "uk-slideshow-item": "next"
      })]
    })
  });
};

/* harmony default export */ var slideshow = ((/* unused pure expression or super */ null && (Slideshow)));
;// CONCATENATED MODULE: ./pages/index.jsx















const Home = ({
  homepage
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    hideNav: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx(seo/* default */.Z, {
      seo: homepage.seo
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Cover, {
      Cover: homepage.Cover
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "uk-section uk-background-muted",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "uk-container uk-container-large",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "uk-text-center",
          children: "Pourquoi faire appel \xE0 nos services de ma\xEEtrise d\u2019\u0153uvre pour la r\xE9alisation de votre projet ?"
        }), /*#__PURE__*/jsx_runtime_.jsx("hr", {})]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "uk-flex uk-flex-between uk-flex-wrap uk-padding-large uk-remove-padding-vertical",
        children: homepage.prestations.map(card => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-card uk-card-default uk-width-1-4@m uk-margin-top uk-border-rounded",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "uk-card-body uk-text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "uk-margin-auto uk-margin-bottom",
              style: {
                height: '60px',
                width: '60px',
                overflow: 'hidden'
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(components_image, {
                image: card.illustration
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
              className: "uk-margin-remove-vertical",
              children: card.title
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: card.description
            })]
          })
        }, card.title))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "uk-flex uk-flex-center uk-margin-top",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-button uk-button-default uk-button-primary uk-link-reset",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/prestations",
            children: "Voir toutes nos prestations"
          })
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "uk-section",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "uk-container uk-container-large",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "uk-text-center",
          children: "Nos derni\xE8res r\xE9alisations"
        }), /*#__PURE__*/jsx_runtime_.jsx("hr", {})]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "uk-flex uk-flex-between uk-flex-wrap uk-padding-large uk-remove-padding-vertical",
        children: homepage.realisations.map(card => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          as: `/realisations`,
          href: "/[name]",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "uk-card uk-card-default uk-width-1-4@m uk-height-medium uk-border-rounded uk-transition-toggle uk-link-reset uk-font-large uk-margin-top",
            tabIndex: "0",
            children: [/*#__PURE__*/jsx_runtime_.jsx(coverImage/* default */.Z, {
              image: card.cover,
              style: "rounded"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "uk-overlay-primary uk-position-cover uk-flex uk-flex-middle uk-padding  uk-transition-fade",
              children: card.cover.caption
            })]
          })
        }, card.id))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "uk-flex uk-flex-center uk-margin-top",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "uk-button uk-button-default uk-button-primary uk-link-reset",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/realisations",
            children: "Voir toutes nos r\xE9alisations"
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        position: 'relative',
        top: '30px'
      },
      className: "uk-section uk-background-primary",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/contact",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "uk-flex uk-flex-between uk-flex-wrap uk-flex-wrap-middle uk-padding uk-padding-remove-vertical",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "uk-light uk-margin-remove-bottom uk-margin-top",
            children: "Vous souhaitez r\xE9aliser un projet, un devis ?"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "uk-button uk-border-rounded uk-background-default uk-flex-inline uk-flex-between uk-flex-middle  uk-margin-top",
            children: [" ", /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "uk-margin-right",
              "uk-icon": "mail"
            }), " Contactez nous"]
          })]
        })
      })
    })]
  });
};

async function getStaticProps() {
  // Run API calls in parallel
  const [homepage] = await Promise.all([(0,api/* fetchAPI */.I)("/homepage")]);
  return {
    props: {
      homepage
    },
    revalidate: 1
  };
}
/* harmony default export */ var pages = (Home);

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
var __webpack_exports__ = __webpack_require__.X(0, [821,544,61,672,836], function() { return __webpack_exec__(8282); });
module.exports = __webpack_exports__;

})();