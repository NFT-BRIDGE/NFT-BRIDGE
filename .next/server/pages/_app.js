(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9267:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Sneaker punk - NFT Marketplace"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "title",
        content: "Sneakerpunk - NFT Marketplace"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Buy & sale nft online"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "keywords",
        content: "nft, marketplace"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "robots",
        content: "index, follow"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        httpEquiv: "Content-Type",
        content: "text/html; charset=utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: process.env.NEXT_PUBLIC_MAIN_URL
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: "Sneakerpunk - NFT Marketplace"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: "Buy & sale nft online"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: process.env.NEXT_PUBLIC_MAIN_URL + 'logo.png'
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:locale",
        content: "id"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image:alt",
        content: "logo"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image:type",
        content: "png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image:width",
        content: "1200"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image:height",
        content: "630"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:url",
        content: process.env.NEXT_PUBLIC_MAIN_URL
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:title",
        content: "SneakerPunk - NFT Marketplace"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:description",
        content: "Buy & sale nft online"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:image",
        content: process.env.NEXT_PUBLIC_MAIN_URL + 'logo.png'
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "/favicon.svg",
        type: "image/x-icon"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ var _app = (App);

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
var __webpack_exports__ = (__webpack_exec__(9267));
module.exports = __webpack_exports__;

})();