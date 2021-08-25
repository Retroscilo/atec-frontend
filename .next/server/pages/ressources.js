(function() {
var exports = {};
exports.id = 505;
exports.ids = [505];
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

/***/ 7569:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ressources; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(883);
// EXTERNAL MODULE: ./components/seo.js
var seo = __webpack_require__(8303);
// EXTERNAL MODULE: ./components/layout.js + 2 modules
var layout = __webpack_require__(5149);
// EXTERNAL MODULE: ./lib/media.js
var media = __webpack_require__(1422);
// EXTERNAL MODULE: ./components/coverImage.js
var coverImage = __webpack_require__(8475);
// EXTERNAL MODULE: ./components/smallCover.jsx
var smallCover = __webpack_require__(5087);
// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__(7820);
// EXTERNAL MODULE: external "html-react-parser"
var external_html_react_parser_ = __webpack_require__(7051);
;// CONCATENATED MODULE: external "uikit"
var external_uikit_namespaceObject = require("uikit");;
var external_uikit_default = /*#__PURE__*/__webpack_require__.n(external_uikit_namespaceObject);
;// CONCATENATED MODULE: ./pages/ressources.jsx













const download = (fichier_a_partager, name) => {
  if (!fichier_a_partager) {
    throw new Error("Resource URL not provided! You need to provide one");
  }

  fetch((0,media/* getStrapiMedia */.$)(fichier_a_partager)).then(response => response.blob()).then(blob => {
    const blobURL = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobURL;
    a.style = "display: none";
    if (name && name.length) a.download = name;
    document.body.appendChild(a);
    a.click();
  });
};

const File = ({
  file
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "uk-flex uk-flex-middle uk-width-medium",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "uk-margin-right",
      "uk-icon": `icon: ${file.fichier_a_partager.ext === ".pdf" ? "file-pdf" : "file"}`
    }), /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: "uk-link uk-link-reset uk-margin-right uk-width-expand"
      /* href={file.fichier_a_partager.url} */
      ,
      onClick: () => download(file.fichier_a_partager, 'details'),
      children: file.nom_du_fichier
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      "uk-icon": "download"
    })]
  });
};
/* further implement 
const EmbedDirectory = ({ directory }) => (
  <>
    <div className="uk-flex uk-flex-middle">
      <span className="uk-margin-right" uk-icon="icon: folder;" />
      <button style={{ border: 'none' }} className="uk-button uk-button-default uk-padding-remove uk-width-expand uk-text-left">{directory.nom_du_dossier}</button>
      <div uk-dropdown="pos: right-center; mode: click;">
      {directory.fichiers.map((file, i) => (
          <div key={file.id}>
            <File file={file} />
            {directory.fichiers.length !== i + 1 && <hr />}
          </div>
        ))}
      </div>
    </div>
    <hr />
  </>
) */


const Directory = ({
  directory
}) => {
  const {
    0: selected,
    1: setSelected
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const dropdown = external_uikit_default().dropdown(`#dropdown-${directory.id}`, {
      pos: "right-center",
      mode: "click"
    });
    external_uikit_default().util.on(`#dropdown-${directory.id}`, 'show', () => {
      setSelected(true);
    });
    external_uikit_default().util.on(`#dropdown-${directory.id}`, 'hide', () => {
      setSelected(false);
    });
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `uk-card uk-card-default uk-border-rounded uk-width-medium`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      type: "button",
      className: `${selected && 'uk-button-primary uk-light'} uk-button-reset uk-card-body uk-flex uk-flex-middle uk-width-1-1 uk-margin-remove`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        "uk-icon": "icon: folder; ratio: 2",
        className: "uk-margin-right"
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "uk-margin-remove",
        children: directory.nom_du_dossier
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: `dropdown-${directory.id}`,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "uk-iconnav",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          "uk-icon": "add"
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          "uk-icon": "download"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "uk-flex uk-flex-column",
        children: directory.fichiers.map((file, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(File, {
            file: file
          }), directory.fichiers.length !== i + 1 && /*#__PURE__*/jsx_runtime_.jsx("hr", {})]
        }, file.id))
      })]
    })]
  });
};

const Ressources = ({
  ressources
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(seo/* default */.Z, {
      seo: ressources.seo
    }), /*#__PURE__*/jsx_runtime_.jsx(smallCover/* default */.Z, {
      img: ressources.header.image,
      title: ressources.header.title
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "uk-container",
      style: {
        height: '50vh'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "T\xE9l\xE9chargez les ressources mises \xE0 disposition pour votre projet et partagez-en."
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "uk-flex uk-flex-wrap uk-flex-column",
        children: ressources.Dossiers.map(dossier => /*#__PURE__*/jsx_runtime_.jsx(Directory, {
          directory: dossier
        }, dossier.id))
      })]
    })]
  });
};

async function getStaticProps() {
  const [ressources] = await Promise.all([(0,api/* fetchAPI */.I)("/ressources")]);
  return {
    props: {
      ressources
    },
    revalidate: 1
  };
}
/* harmony default export */ var ressources = (Ressources);

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
var __webpack_exports__ = __webpack_require__.X(0, [821,544,61,672,836], function() { return __webpack_exec__(7569); });
module.exports = __webpack_exports__;

})();