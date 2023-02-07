"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_base-components_BaseTextArea_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseTextArea.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseTextArea.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inheritAttrs: false,
  data: function data() {
    return {
      data: ""
    };
  },
  props: {
    label: {
      type: String,
      "default": ""
    },
    validation: {
      type: Object,
      "default": ""
    },
    validationTextType: {
      type: String,
      "default": ""
    },
    required: {
      type: Boolean,
      "default": false
    },
    type: {
      type: String,
      "default": "text"
    },
    validationsInput: {
      type: Object,
      "default": function _default() {
        return {
          required: true,
          minLength: false,
          maxLength: false
        };
      }
    },
    min: {
      type: Number,
      "default": 0
    },
    max: {
      type: Number,
      "default": 150
    },
    rows: {
      type: Number,
      "default": 4
    },
    margin: {
      type: String,
      "default": "mt-5"
    },
    readonly: {
      type: Boolean,
      "default": false
    }
  },
  mounted: function mounted() {
    this.data = this.$attrs.value;
  },
  updated: function updated() {
    this.data = this.validation.$model;
  },
  methods: {
    updateValue: function updateValue(data) {
      this.$emit("input", data);
    },
    validateText: function validateText() {
      switch (this.validationTextType) {
        case "default":
          this.data = this.data.replace(/[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\' ']/gi, "");
          this.data = this.data.replace(/^([a-zA-Z0-9])\1{4}/g, "");
          break;

        case "only-letters":
          this.data = this.data.replace(/[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\' ']/gi, "");
          break;

        case "only-numbers":
          this.data = this.data.replace(/[^0-9\-]/g, "");
          break;

        case "only-numbers":
          this.data = this.data.replace(/[^0-9\-]/g, "");
          break;

        case "none":
          break;

        case "only-repeats":
          this.data = this.data.replace(/^([a-zA-Z0-9])\1{4}/g, "");
          break;

        default:
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseTextArea.vue?vue&type=template&id=0ff13293&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseTextArea.vue?vue&type=template&id=0ff13293& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("v-textarea", {
    "class": {
      "is-invalid": _vm.validation.$error,
      "is-valid": !_vm.validation.$invalid
    },
    attrs: {
      label: _vm.label,
      outlined: "",
      "auto-grow": "",
      "row-height": "30",
      rows: _vm.rows,
      readonly: _vm.readonly
    },
    on: {
      input: _vm.updateValue
    },
    model: {
      value: _vm.data,
      callback: function callback($$v) {
        _vm.data = typeof $$v === "string" ? $$v.trim() : $$v;
      },
      expression: "data"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "pb-0 pt-0 pl-4 pl-1 m-0 my-auto orange-text"
  }, [_vm.validationsInput.required && _vm.validation.$error ? _c("v-row", [_c("p", {
    staticClass: "mb-0 mt-0"
  }, [_c("i", {
    staticClass: "material-icons mt-0"
  }, [_vm._v("error_outline")]), _vm._v(" Campo requerido.\n      ")])]) : _vm._e(), _vm._v(" "), _vm.validationsInput.minLength && !_vm.validation.minLength ? _c("v-row", [_c("p", [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v(" " + _vm._s(_vm.min) + " carácter mínimo.\n      ")])]) : _vm._e(), _vm._v(" "), _vm.validationsInput.maxLength && !_vm.validation.maxLength ? _c("v-row", [_c("p", [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v(" " + _vm._s(_vm.max) + " caracteres\n        máximo.\n      ")])]) : _vm._e()], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseTextArea.vue?vue&type=style&index=0&id=0ff13293&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseTextArea.vue?vue&type=style&index=0&id=0ff13293&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.theme--light.v-input,\n.theme--light.v-input input,\n.theme--light.v-input textarea {\n  height: 100% !important;\n}\n.v-messages,\n.v-text-field__details {\n  display: none;\n}\np {\n  margin-bottom: 0px;\n  height: 20px;\n  line-height: 20px; /* same as height! */\n  display: flex;\n  justify-content: left;\n  align-content: center;\n  flex-direction: row;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/base-components/BaseTextArea.vue"],"names":[],"mappings":";AA+IA;;;EAGA,uBAAA;AACA;AAEA;;EAEA,aAAA;AACA;AAEA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA,EAAA,oBAAA;EACA,aAAA;EACA,qBAAA;EACA,qBAAA;EACA,mBAAA;AACA","sourcesContent":["<template>\n  <div>\n    <v-textarea\n      :label=\"label\"\n      outlined\n      auto-grow\n      row-height=\"30\"\n      :rows=\"rows\"\n      v-model.trim=\"data\"\n      :readonly=\"readonly\"\n      :class=\"{\n        'is-invalid': validation.$error,\n        'is-valid': !validation.$invalid,\n      }\"\n      @input=\"updateValue\"\n    >\n    </v-textarea>\n    <div class=\"pb-0 pt-0 pl-4 pl-1 m-0 my-auto orange-text\">\n      <v-row v-if=\"validationsInput.required && validation.$error\">\n        <p class=\"mb-0 mt-0\">\n          <i class=\"material-icons mt-0\">error_outline</i> Campo requerido.\n        </p>\n      </v-row>\n      <v-row v-if=\"validationsInput.minLength && !validation.minLength\">\n        <p>\n          <i class=\"material-icons\">error_outline</i> {{ min }} carácter mínimo.\n        </p>\n      </v-row>\n      <v-row v-if=\"validationsInput.maxLength && !validation.maxLength\">\n        <p>\n          <i class=\"material-icons\">error_outline</i> {{ max }} caracteres\n          máximo.\n        </p>\n      </v-row>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  inheritAttrs: false,\n  data() {\n    return {\n      data: \"\",\n    };\n  },\n  props: {\n    label: {\n      type: String,\n      default: \"\",\n    },\n    validation: {\n      type: Object,\n      default: \"\",\n    },\n    validationTextType: {\n      type: String,\n      default: \"\",\n    },\n    required: {\n      type: Boolean,\n      default: false,\n    },\n    type: {\n      type: String,\n      default: \"text\",\n    },\n    validationsInput: {\n      type: Object,\n      default: () => {\n        return {\n          required: true,\n          minLength: false,\n          maxLength: false,\n        };\n      },\n    },\n    min: {\n      type: Number,\n      default: 0,\n    },\n    max: {\n      type: Number,\n      default: 150,\n    },\n    rows: {\n      type: Number,\n      default: 4,\n    },\n    margin: {\n      type: String,\n      default: \"mt-5\",\n    },\n    readonly: {\n        type: Boolean,\n        default: false,\n    }\n  },\n  mounted() {\n    this.data = this.$attrs.value;\n  },\n  updated() {\n    this.data = this.validation.$model;\n  },\n  methods: {\n    updateValue(data) {\n      this.$emit(\"input\", data);\n    },\n    validateText() {\n      switch (this.validationTextType) {\n        case \"default\":\n          this.data = this.data.replace(\n            /[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\\' ']/gi,\n            \"\"\n          );\n          this.data = this.data.replace(/^([a-zA-Z0-9])\\1{4}/g, \"\");\n          break;\n        case \"only-letters\":\n          this.data = this.data.replace(\n            /[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\\' ']/gi,\n            \"\"\n          );\n          break;\n        case \"only-numbers\":\n          this.data = this.data.replace(/[^0-9\\-]/g, \"\");\n          break;\n        case \"only-numbers\":\n          this.data = this.data.replace(/[^0-9\\-]/g, \"\");\n          break;\n        case \"none\":\n          break;\n        case \"only-repeats\":\n          this.data = this.data.replace(/^([a-zA-Z0-9])\\1{4}/g, \"\");\n          break;\n        default:\n          break;\n      }\n    },\n  },\n};\n</script>\n\n<style>\n.theme--light.v-input,\n.theme--light.v-input input,\n.theme--light.v-input textarea {\n  height: 100% !important;\n}\n\n.v-messages,\n.v-text-field__details {\n  display: none;\n}\n\np {\n  margin-bottom: 0px;\n  height: 20px;\n  line-height: 20px; /* same as height! */\n  display: flex;\n  justify-content: left;\n  align-content: center;\n  flex-direction: row;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \*************************************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseTextArea.vue?vue&type=style&index=0&id=0ff13293&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseTextArea.vue?vue&type=style&index=0&id=0ff13293&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTextArea_vue_vue_type_style_index_0_id_0ff13293_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseTextArea.vue?vue&type=style&index=0&id=0ff13293&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseTextArea.vue?vue&type=style&index=0&id=0ff13293&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTextArea_vue_vue_type_style_index_0_id_0ff13293_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTextArea_vue_vue_type_style_index_0_id_0ff13293_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/base-components/BaseTextArea.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/base-components/BaseTextArea.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseTextArea_vue_vue_type_template_id_0ff13293___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseTextArea.vue?vue&type=template&id=0ff13293& */ "./resources/js/components/base-components/BaseTextArea.vue?vue&type=template&id=0ff13293&");
/* harmony import */ var _BaseTextArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseTextArea.vue?vue&type=script&lang=js& */ "./resources/js/components/base-components/BaseTextArea.vue?vue&type=script&lang=js&");
/* harmony import */ var _BaseTextArea_vue_vue_type_style_index_0_id_0ff13293_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseTextArea.vue?vue&type=style&index=0&id=0ff13293&lang=css& */ "./resources/js/components/base-components/BaseTextArea.vue?vue&type=style&index=0&id=0ff13293&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BaseTextArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseTextArea_vue_vue_type_template_id_0ff13293___WEBPACK_IMPORTED_MODULE_0__.render,
  _BaseTextArea_vue_vue_type_template_id_0ff13293___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/base-components/BaseTextArea.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/base-components/BaseTextArea.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseTextArea.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTextArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseTextArea.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseTextArea.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTextArea_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/base-components/BaseTextArea.vue?vue&type=template&id=0ff13293&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseTextArea.vue?vue&type=template&id=0ff13293& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTextArea_vue_vue_type_template_id_0ff13293___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTextArea_vue_vue_type_template_id_0ff13293___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTextArea_vue_vue_type_template_id_0ff13293___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseTextArea.vue?vue&type=template&id=0ff13293& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseTextArea.vue?vue&type=template&id=0ff13293&");


/***/ }),

/***/ "./resources/js/components/base-components/BaseTextArea.vue?vue&type=style&index=0&id=0ff13293&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseTextArea.vue?vue&type=style&index=0&id=0ff13293&lang=css& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseTextArea_vue_vue_type_style_index_0_id_0ff13293_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseTextArea.vue?vue&type=style&index=0&id=0ff13293&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseTextArea.vue?vue&type=style&index=0&id=0ff13293&lang=css&");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfYmFzZS1jb21wb25lbnRzX0Jhc2VUZXh0QXJlYV92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQXVDQSxpRUFBZTtFQUNmQSxtQkFEQTtFQUVBQyxJQUZBLGtCQUVBO0lBQ0E7TUFDQUE7SUFEQTtFQUdBLENBTkE7RUFPQUM7SUFDQUM7TUFDQUMsWUFEQTtNQUVBO0lBRkEsQ0FEQTtJQUtBQztNQUNBRCxZQURBO01BRUE7SUFGQSxDQUxBO0lBU0FFO01BQ0FGLFlBREE7TUFFQTtJQUZBLENBVEE7SUFhQUc7TUFDQUgsYUFEQTtNQUVBO0lBRkEsQ0FiQTtJQWlCQUE7TUFDQUEsWUFEQTtNQUVBO0lBRkEsQ0FqQkE7SUFxQkFJO01BQ0FKLFlBREE7TUFFQTtRQUNBO1VBQ0FHLGNBREE7VUFFQUUsZ0JBRkE7VUFHQUM7UUFIQTtNQUtBO0lBUkEsQ0FyQkE7SUErQkFDO01BQ0FQLFlBREE7TUFFQTtJQUZBLENBL0JBO0lBbUNBUTtNQUNBUixZQURBO01BRUE7SUFGQSxDQW5DQTtJQXVDQVM7TUFDQVQsWUFEQTtNQUVBO0lBRkEsQ0F2Q0E7SUEyQ0FVO01BQ0FWLFlBREE7TUFFQTtJQUZBLENBM0NBO0lBK0NBVztNQUNBWCxhQURBO01BRUE7SUFGQTtFQS9DQSxDQVBBO0VBMkRBWSxPQTNEQSxxQkEyREE7SUFDQTtFQUNBLENBN0RBO0VBOERBQyxPQTlEQSxxQkE4REE7SUFDQTtFQUNBLENBaEVBO0VBaUVBQztJQUNBQyxXQURBLHVCQUNBbEIsSUFEQSxFQUNBO01BQ0E7SUFDQSxDQUhBO0lBSUFtQixZQUpBLDBCQUlBO01BQ0E7UUFDQTtVQUNBLDhCQUNBLG9DQURBLEVBRUEsRUFGQTtVQUlBO1VBQ0E7O1FBQ0E7VUFDQSw4QkFDQSxvQ0FEQSxFQUVBLEVBRkE7VUFJQTs7UUFDQTtVQUNBO1VBQ0E7O1FBQ0E7VUFDQTtVQUNBOztRQUNBO1VBQ0E7O1FBQ0E7VUFDQTtVQUNBOztRQUNBO1VBQ0E7TUExQkE7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QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDaU0sQ0FBQyxpRUFBZSx1TUFBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlVGV4dEFyZWEudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlVGV4dEFyZWEudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlVGV4dEFyZWEudnVlP2EyNDYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlVGV4dEFyZWEudnVlPzY1NDgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlVGV4dEFyZWEudnVlPzQ1OWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0Jhc2VUZXh0QXJlYS52dWU/NzAxMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZVRleHRBcmVhLnZ1ZT85OGRmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlVGV4dEFyZWEudnVlP2NmMWIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDx2LXRleHRhcmVhXG4gICAgICA6bGFiZWw9XCJsYWJlbFwiXG4gICAgICBvdXRsaW5lZFxuICAgICAgYXV0by1ncm93XG4gICAgICByb3ctaGVpZ2h0PVwiMzBcIlxuICAgICAgOnJvd3M9XCJyb3dzXCJcbiAgICAgIHYtbW9kZWwudHJpbT1cImRhdGFcIlxuICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgOmNsYXNzPVwie1xuICAgICAgICAnaXMtaW52YWxpZCc6IHZhbGlkYXRpb24uJGVycm9yLFxuICAgICAgICAnaXMtdmFsaWQnOiAhdmFsaWRhdGlvbi4kaW52YWxpZCxcbiAgICAgIH1cIlxuICAgICAgQGlucHV0PVwidXBkYXRlVmFsdWVcIlxuICAgID5cbiAgICA8L3YtdGV4dGFyZWE+XG4gICAgPGRpdiBjbGFzcz1cInBiLTAgcHQtMCBwbC00IHBsLTEgbS0wIG15LWF1dG8gb3JhbmdlLXRleHRcIj5cbiAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbnNJbnB1dC5yZXF1aXJlZCAmJiB2YWxpZGF0aW9uLiRlcnJvclwiPlxuICAgICAgICA8cCBjbGFzcz1cIm1iLTAgbXQtMFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgbXQtMFwiPmVycm9yX291dGxpbmU8L2k+IENhbXBvIHJlcXVlcmlkby5cbiAgICAgICAgPC9wPlxuICAgICAgPC92LXJvdz5cbiAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbnNJbnB1dC5taW5MZW5ndGggJiYgIXZhbGlkYXRpb24ubWluTGVuZ3RoXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPiB7eyBtaW4gfX0gY2Fyw6FjdGVyIG3DrW5pbW8uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvdi1yb3c+XG4gICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb25zSW5wdXQubWF4TGVuZ3RoICYmICF2YWxpZGF0aW9uLm1heExlbmd0aFwiPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4ge3sgbWF4IH19IGNhcmFjdGVyZXNcbiAgICAgICAgICBtw6F4aW1vLlxuICAgICAgICA8L3A+XG4gICAgICA8L3Ytcm93PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFwiXCIsXG4gICAgfTtcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBsYWJlbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIixcbiAgICB9LFxuICAgIHZhbGlkYXRpb246IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uVGV4dFR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfSxcbiAgICByZXF1aXJlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJ0ZXh0XCIsXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uc0lucHV0OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgbWluTGVuZ3RoOiBmYWxzZSxcbiAgICAgICAgICBtYXhMZW5ndGg6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9LFxuICAgIG1pbjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIG1heDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMTUwLFxuICAgIH0sXG4gICAgcm93czoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogNCxcbiAgICB9LFxuICAgIG1hcmdpbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJtdC01XCIsXG4gICAgfSxcbiAgICByZWFkb25seToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy4kYXR0cnMudmFsdWU7XG4gIH0sXG4gIHVwZGF0ZWQoKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy52YWxpZGF0aW9uLiRtb2RlbDtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZVZhbHVlKGRhdGEpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJpbnB1dFwiLCBkYXRhKTtcbiAgICB9LFxuICAgIHZhbGlkYXRlVGV4dCgpIHtcbiAgICAgIHN3aXRjaCAodGhpcy52YWxpZGF0aW9uVGV4dFR5cGUpIHtcbiAgICAgICAgY2FzZSBcImRlZmF1bHRcIjpcbiAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShcbiAgICAgICAgICAgIC9bXkEtWsOgw6jDrMOyw7nDgMOIw4zDksOZw6HDqcOtw7PDusO9w4HDicONw5PDmsOxXFwnICddL2dpLFxuICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL14oW2EtekEtWjAtOV0pXFwxezR9L2csIFwiXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwib25seS1sZXR0ZXJzXCI6XG4gICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoXG4gICAgICAgICAgICAvW15BLVrDoMOow6zDssO5w4DDiMOMw5LDmcOhw6nDrcOzw7rDvcOBw4nDjcOTw5rDsVxcJyAnXS9naSxcbiAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwib25seS1udW1iZXJzXCI6XG4gICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL1teMC05XFwtXS9nLCBcIlwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm9ubHktbnVtYmVyc1wiOlxuICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9bXjAtOVxcLV0vZywgXCJcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJub25lXCI6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJvbmx5LXJlcGVhdHNcIjpcbiAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXihbYS16QS1aMC05XSlcXDF7NH0vZywgXCJcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLnRoZW1lLS1saWdodC52LWlucHV0LFxuLnRoZW1lLS1saWdodC52LWlucHV0IGlucHV0LFxuLnRoZW1lLS1saWdodC52LWlucHV0IHRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi52LW1lc3NhZ2VzLFxuLnYtdGV4dC1maWVsZF9fZGV0YWlscyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7IC8qIHNhbWUgYXMgaGVpZ2h0ISAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcInYtdGV4dGFyZWFcIiwge1xuICAgICAgICBjbGFzczoge1xuICAgICAgICAgIFwiaXMtaW52YWxpZFwiOiBfdm0udmFsaWRhdGlvbi4kZXJyb3IsXG4gICAgICAgICAgXCJpcy12YWxpZFwiOiAhX3ZtLnZhbGlkYXRpb24uJGludmFsaWQsXG4gICAgICAgIH0sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbGFiZWw6IF92bS5sYWJlbCxcbiAgICAgICAgICBvdXRsaW5lZDogXCJcIixcbiAgICAgICAgICBcImF1dG8tZ3Jvd1wiOiBcIlwiLFxuICAgICAgICAgIFwicm93LWhlaWdodFwiOiBcIjMwXCIsXG4gICAgICAgICAgcm93czogX3ZtLnJvd3MsXG4gICAgICAgICAgcmVhZG9ubHk6IF92bS5yZWFkb25seSxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHsgaW5wdXQ6IF92bS51cGRhdGVWYWx1ZSB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uZGF0YSxcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgX3ZtLmRhdGEgPSB0eXBlb2YgJCR2ID09PSBcInN0cmluZ1wiID8gJCR2LnRyaW0oKSA6ICQkdlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXRhXCIsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYi0wIHB0LTAgcGwtNCBwbC0xIG0tMCBteS1hdXRvIG9yYW5nZS10ZXh0XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS52YWxpZGF0aW9uc0lucHV0LnJlcXVpcmVkICYmIF92bS52YWxpZGF0aW9uLiRlcnJvclxuICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wIG10LTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29ucyBtdC0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgQ2FtcG8gcmVxdWVyaWRvLlxcbiAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0udmFsaWRhdGlvbnNJbnB1dC5taW5MZW5ndGggJiYgIV92bS52YWxpZGF0aW9uLm1pbkxlbmd0aFxuICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0ubWluKSArIFwiIGNhcsOhY3RlciBtw61uaW1vLlxcbiAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0udmFsaWRhdGlvbnNJbnB1dC5tYXhMZW5ndGggJiYgIV92bS52YWxpZGF0aW9uLm1heExlbmd0aFxuICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWF4KSArXG4gICAgICAgICAgICAgICAgICAgICAgXCIgY2FyYWN0ZXJlc1xcbiAgICAgICAgbcOheGltby5cXG4gICAgICBcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRoZW1lLS1saWdodC52LWlucHV0LFxcbi50aGVtZS0tbGlnaHQudi1pbnB1dCBpbnB1dCxcXG4udGhlbWUtLWxpZ2h0LnYtaW5wdXQgdGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XFxufVxcbi52LW1lc3NhZ2VzLFxcbi52LXRleHQtZmllbGRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxucCB7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjBweDsgLyogc2FtZSBhcyBoZWlnaHQhICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0Jhc2VUZXh0QXJlYS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQStJQTs7O0VBR0EsdUJBQUE7QUFDQTtBQUVBOztFQUVBLGFBQUE7QUFDQTtBQUVBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUEsRUFBQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2PlxcbiAgICA8di10ZXh0YXJlYVxcbiAgICAgIDpsYWJlbD1cXFwibGFiZWxcXFwiXFxuICAgICAgb3V0bGluZWRcXG4gICAgICBhdXRvLWdyb3dcXG4gICAgICByb3ctaGVpZ2h0PVxcXCIzMFxcXCJcXG4gICAgICA6cm93cz1cXFwicm93c1xcXCJcXG4gICAgICB2LW1vZGVsLnRyaW09XFxcImRhdGFcXFwiXFxuICAgICAgOnJlYWRvbmx5PVxcXCJyZWFkb25seVxcXCJcXG4gICAgICA6Y2xhc3M9XFxcIntcXG4gICAgICAgICdpcy1pbnZhbGlkJzogdmFsaWRhdGlvbi4kZXJyb3IsXFxuICAgICAgICAnaXMtdmFsaWQnOiAhdmFsaWRhdGlvbi4kaW52YWxpZCxcXG4gICAgICB9XFxcIlxcbiAgICAgIEBpbnB1dD1cXFwidXBkYXRlVmFsdWVcXFwiXFxuICAgID5cXG4gICAgPC92LXRleHRhcmVhPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYi0wIHB0LTAgcGwtNCBwbC0xIG0tMCBteS1hdXRvIG9yYW5nZS10ZXh0XFxcIj5cXG4gICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbnNJbnB1dC5yZXF1aXJlZCAmJiB2YWxpZGF0aW9uLiRlcnJvclxcXCI+XFxuICAgICAgICA8cCBjbGFzcz1cXFwibWItMCBtdC0wXFxcIj5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zIG10LTBcXFwiPmVycm9yX291dGxpbmU8L2k+IENhbXBvIHJlcXVlcmlkby5cXG4gICAgICAgIDwvcD5cXG4gICAgICA8L3Ytcm93PlxcbiAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uc0lucHV0Lm1pbkxlbmd0aCAmJiAhdmFsaWRhdGlvbi5taW5MZW5ndGhcXFwiPlxcbiAgICAgICAgPHA+XFxuICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4ge3sgbWluIH19IGNhcsOhY3RlciBtw61uaW1vLlxcbiAgICAgICAgPC9wPlxcbiAgICAgIDwvdi1yb3c+XFxuICAgICAgPHYtcm93IHYtaWY9XFxcInZhbGlkYXRpb25zSW5wdXQubWF4TGVuZ3RoICYmICF2YWxpZGF0aW9uLm1heExlbmd0aFxcXCI+XFxuICAgICAgICA8cD5cXG4gICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPiB7eyBtYXggfX0gY2FyYWN0ZXJlc1xcbiAgICAgICAgICBtw6F4aW1vLlxcbiAgICAgICAgPC9wPlxcbiAgICAgIDwvdi1yb3c+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXFxuICBkYXRhKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGRhdGE6IFxcXCJcXFwiLFxcbiAgICB9O1xcbiAgfSxcXG4gIHByb3BzOiB7XFxuICAgIGxhYmVsOiB7XFxuICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgIGRlZmF1bHQ6IFxcXCJcXFwiLFxcbiAgICB9LFxcbiAgICB2YWxpZGF0aW9uOiB7XFxuICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgIGRlZmF1bHQ6IFxcXCJcXFwiLFxcbiAgICB9LFxcbiAgICB2YWxpZGF0aW9uVGV4dFR5cGU6IHtcXG4gICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgZGVmYXVsdDogXFxcIlxcXCIsXFxuICAgIH0sXFxuICAgIHJlcXVpcmVkOiB7XFxuICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgfSxcXG4gICAgdHlwZToge1xcbiAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICBkZWZhdWx0OiBcXFwidGV4dFxcXCIsXFxuICAgIH0sXFxuICAgIHZhbGlkYXRpb25zSW5wdXQ6IHtcXG4gICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgZGVmYXVsdDogKCkgPT4ge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICAgIG1pbkxlbmd0aDogZmFsc2UsXFxuICAgICAgICAgIG1heExlbmd0aDogZmFsc2UsXFxuICAgICAgICB9O1xcbiAgICAgIH0sXFxuICAgIH0sXFxuICAgIG1pbjoge1xcbiAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICBkZWZhdWx0OiAwLFxcbiAgICB9LFxcbiAgICBtYXg6IHtcXG4gICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgZGVmYXVsdDogMTUwLFxcbiAgICB9LFxcbiAgICByb3dzOiB7XFxuICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgIGRlZmF1bHQ6IDQsXFxuICAgIH0sXFxuICAgIG1hcmdpbjoge1xcbiAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICBkZWZhdWx0OiBcXFwibXQtNVxcXCIsXFxuICAgIH0sXFxuICAgIHJlYWRvbmx5OiB7XFxuICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgIH1cXG4gIH0sXFxuICBtb3VudGVkKCkge1xcbiAgICB0aGlzLmRhdGEgPSB0aGlzLiRhdHRycy52YWx1ZTtcXG4gIH0sXFxuICB1cGRhdGVkKCkge1xcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnZhbGlkYXRpb24uJG1vZGVsO1xcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgdXBkYXRlVmFsdWUoZGF0YSkge1xcbiAgICAgIHRoaXMuJGVtaXQoXFxcImlucHV0XFxcIiwgZGF0YSk7XFxuICAgIH0sXFxuICAgIHZhbGlkYXRlVGV4dCgpIHtcXG4gICAgICBzd2l0Y2ggKHRoaXMudmFsaWRhdGlvblRleHRUeXBlKSB7XFxuICAgICAgICBjYXNlIFxcXCJkZWZhdWx0XFxcIjpcXG4gICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoXFxuICAgICAgICAgICAgL1teQS1aw6DDqMOsw7LDucOAw4jDjMOSw5nDocOpw63Ds8O6w73DgcOJw43Dk8Oaw7FcXFxcJyAnXS9naSxcXG4gICAgICAgICAgICBcXFwiXFxcIlxcbiAgICAgICAgICApO1xcbiAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXihbYS16QS1aMC05XSlcXFxcMXs0fS9nLCBcXFwiXFxcIik7XFxuICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgY2FzZSBcXFwib25seS1sZXR0ZXJzXFxcIjpcXG4gICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoXFxuICAgICAgICAgICAgL1teQS1aw6DDqMOsw7LDucOAw4jDjMOSw5nDocOpw63Ds8O6w73DgcOJw43Dk8Oaw7FcXFxcJyAnXS9naSxcXG4gICAgICAgICAgICBcXFwiXFxcIlxcbiAgICAgICAgICApO1xcbiAgICAgICAgICBicmVhaztcXG4gICAgICAgIGNhc2UgXFxcIm9ubHktbnVtYmVyc1xcXCI6XFxuICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9bXjAtOVxcXFwtXS9nLCBcXFwiXFxcIik7XFxuICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgY2FzZSBcXFwib25seS1udW1iZXJzXFxcIjpcXG4gICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL1teMC05XFxcXC1dL2csIFxcXCJcXFwiKTtcXG4gICAgICAgICAgYnJlYWs7XFxuICAgICAgICBjYXNlIFxcXCJub25lXFxcIjpcXG4gICAgICAgICAgYnJlYWs7XFxuICAgICAgICBjYXNlIFxcXCJvbmx5LXJlcGVhdHNcXFwiOlxcbiAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvXihbYS16QS1aMC05XSlcXFxcMXs0fS9nLCBcXFwiXFxcIik7XFxuICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgZGVmYXVsdDpcXG4gICAgICAgICAgYnJlYWs7XFxuICAgICAgfVxcbiAgICB9LFxcbiAgfSxcXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4udGhlbWUtLWxpZ2h0LnYtaW5wdXQsXFxuLnRoZW1lLS1saWdodC52LWlucHV0IGlucHV0LFxcbi50aGVtZS0tbGlnaHQudi1pbnB1dCB0ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcXG59XFxuXFxuLnYtbWVzc2FnZXMsXFxuLnYtdGV4dC1maWVsZF9fZGV0YWlscyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4OyAvKiBzYW1lIGFzIGhlaWdodCEgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTkudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlVGV4dEFyZWEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGZmMTMyOTMmbGFuZz1jc3MmXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Jhc2VUZXh0QXJlYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGZmMTMyOTMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQmFzZVRleHRBcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQmFzZVRleHRBcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9CYXNlVGV4dEFyZWEudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGZmMTMyOTMmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEluZm9ybcOhdGljYVxcXFxEb2N1bWVudHNcXFxccHJvamVjdHNNQ1xcXFxTSVNFLUNVU0NBLTIwMjItbWFpblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwZmYxMzI5MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwZmYxMzI5MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwZmYxMzI5MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQmFzZVRleHRBcmVhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZmYxMzI5MyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZmYxMzI5MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0Jhc2VUZXh0QXJlYS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZVRleHRBcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2VUZXh0QXJlYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2VUZXh0QXJlYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGZmMTMyOTMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sYXJhdmVsLW1peC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05LnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTkudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZVRleHRBcmVhLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBmZjEzMjkzJmxhbmc9Y3NzJlwiIl0sIm5hbWVzIjpbImluaGVyaXRBdHRycyIsImRhdGEiLCJwcm9wcyIsImxhYmVsIiwidHlwZSIsInZhbGlkYXRpb24iLCJ2YWxpZGF0aW9uVGV4dFR5cGUiLCJyZXF1aXJlZCIsInZhbGlkYXRpb25zSW5wdXQiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJtaW4iLCJtYXgiLCJyb3dzIiwibWFyZ2luIiwicmVhZG9ubHkiLCJtb3VudGVkIiwidXBkYXRlZCIsIm1ldGhvZHMiLCJ1cGRhdGVWYWx1ZSIsInZhbGlkYXRlVGV4dCIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCIkZXJyb3IiLCIkaW52YWxpZCIsImF0dHJzIiwib3V0bGluZWQiLCJvbiIsImlucHV0IiwibW9kZWwiLCJ2YWx1ZSIsImNhbGxiYWNrIiwiJCR2IiwidHJpbSIsImV4cHJlc3Npb24iLCJfdiIsInN0YXRpY0NsYXNzIiwiX2UiLCJfcyIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwic291cmNlUm9vdCI6IiJ9