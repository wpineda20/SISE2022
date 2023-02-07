"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_base-components_BaseDateInput_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseDateInput.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseDateInput.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inheritAttrs: false,
  data: function data() {
    return {
      date: "2021-12-27",
      modal: false,
      data: "2021-12-27"
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
    }
  },
  methods: {
    updateValue: function updateValue(data) {
      //   this.counter++;
      this.$emit("input", data);
    },
    calculateDate: function calculateDate() {
      var today = new Date();
      var year = today.getFullYear() - 18;
      var date = today.setFullYear(year);
      this.data = new Date(date).toISOString().split("T")[0];
      this.date = this.data;
      return new Date(date).toISOString();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseDateInput.vue?vue&type=template&id=9c88a85a&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseDateInput.vue?vue&type=template&id=9c88a85a& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("v-dialog", {
    ref: "dialog",
    attrs: {
      "return-value": _vm.date,
      persistent: "",
      "max-width": "290px"
    },
    on: {
      "update:returnValue": function updateReturnValue($event) {
        _vm.date = $event;
      },
      "update:return-value": function updateReturnValue($event) {
        _vm.date = $event;
      }
    },
    scopedSlots: _vm._u([{
      key: "activator",
      fn: function fn(_ref) {
        var on = _ref.on,
            attrs = _ref.attrs;
        return [_c("v-text-field", _vm._g(_vm._b({
          directives: [{
            name: "mask",
            rawName: "v-mask",
            value: "####-##-##",
            expression: "'####-##-##'"
          }],
          staticClass: "pt-1",
          "class": {
            "is-invalid": _vm.validation.$error,
            "is-valid": !_vm.validation.$invalid
          },
          attrs: {
            dense: "",
            label: "Fecha de nacimiento",
            outlined: "",
            readonly: ""
          },
          model: {
            value: _vm.validation.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.validation, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
            },
            expression: "validation.$model"
          }
        }, "v-text-field", attrs, false), on)), _vm._v(" "), _c("v-container", {
          staticClass: "pb-0 pl-4 pl-1 m-0 my-auto orange-text"
        }, [!_vm.validation.minDate ? _c("v-row", [_c("i", {
          staticClass: "material-icons"
        }, [_vm._v("error_outline")]), _vm._v(" "), _c("p", [_vm._v("Fecha debe ser superior a 01/01/1920")])]) : _vm._e(), _vm._v(" "), !_vm.validation.maxDate ? _c("v-row", [_c("i", {
          staticClass: "material-icons"
        }, [_vm._v("error_outline")]), _vm._v(" "), _c("p", [_vm._v("Debe de ser mayor de edad.")])]) : _vm._e()], 1)];
      }
    }]),
    model: {
      value: _vm.modal,
      callback: function callback($$v) {
        _vm.modal = $$v;
      },
      expression: "modal"
    }
  }, [_vm._v(" "), _c("v-date-picker", {
    attrs: {
      min: "1920-01-01",
      max: "2021-12-27",
      scrollable: ""
    },
    on: {
      input: _vm.updateValue
    },
    model: {
      value: _vm.data,
      callback: function callback($$v) {
        _vm.data = $$v;
      },
      expression: "data"
    }
  }, [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
    attrs: {
      text: ""
    },
    on: {
      click: function click($event) {
        _vm.modal = false;
      }
    }
  }, [_vm._v(" Cancelar ")]), _vm._v(" "), _c("v-btn", {
    attrs: {
      text: ""
    },
    on: {
      click: function click($event) {
        return _vm.$refs.dialog.save(_vm.data);
      }
    }
  }, [_vm._v(" Guardar ")])], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseDateInput.vue?vue&type=style&index=0&id=9c88a85a&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseDateInput.vue?vue&type=style&index=0&id=9c88a85a&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-picker__title {\n  background-color: #374ea8 !important;\n}\n.v-btn--active .date-color {\n  color: #374ea8;\n}\ndiv.v-picker__body.v-picker__body--no-title {\n  background-color: blue !important;\n  color: blue;\n}\n.v-btn.v-date-picker-table__current.v-btn--outlined {\n  border: thin black solid;\n}\n.v-date-picker-table .v-btn.v-btn--active,\n.v-btn.v-btn--active.v-btn--rounded.theme--light.accentv-btn.v-btn--active.v-btn--rounded.theme--light.accent {\n  color: #374ea8;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/base-components/BaseDateInput.vue"],"names":[],"mappings":";AA0FA;EACA,oCAAA;AACA;AAEA;EACA,cAAA;AACA;AAEA;EACA,iCAAA;EACA,WAAA;AACA;AAEA;EACA,wBAAA;AACA;AAEA;;EAEA,cAAA;AACA","sourcesContent":["<template>\n  <div>\n    <v-dialog\n      ref=\"dialog\"\n      v-model=\"modal\"\n      :return-value.sync=\"date\"\n      persistent\n      max-width=\"290px\"\n    >\n      <template v-slot:activator=\"{ on, attrs }\">\n        <v-text-field\n          dense\n          label=\"Fecha de nacimiento\"\n          outlined\n          class=\"pt-1\"\n          v-model.trim=\"validation.$model\"\n          :class=\"{\n            'is-invalid': validation.$error,\n            'is-valid': !validation.$invalid,\n          }\"\n          v-mask=\"'####-##-##'\"\n          v-bind=\"attrs\"\n          v-on=\"on\"\n          readonly\n        ></v-text-field>\n        <v-container class=\"pb-0 pl-4 pl-1 m-0 my-auto orange-text\">\n          <v-row v-if=\"!validation.minDate\">\n            <i class=\"material-icons\">error_outline</i>\n            <p>Fecha debe ser superior a 01/01/1920</p>\n          </v-row>\n          <v-row v-if=\"!validation.maxDate\">\n            <i class=\"material-icons\">error_outline</i>\n            <p>Debe de ser mayor de edad.</p>\n          </v-row>\n        </v-container>\n      </template>\n      <v-date-picker\n        v-model=\"data\"\n        min=\"1920-01-01\"\n        max=\"2021-12-27\"\n        scrollable\n        @input=\"updateValue\"\n      >\n        <v-spacer></v-spacer>\n        <v-btn text @click=\"modal = false\"> Cancelar </v-btn>\n        <v-btn text @click=\"$refs.dialog.save(data)\"> Guardar </v-btn>\n      </v-date-picker>\n    </v-dialog>\n  </div>\n</template>\n\n<script>\nexport default {\n  inheritAttrs: false,\n  data() {\n    return {\n      date: \"2021-12-27\",\n      modal: false,\n      data: \"2021-12-27\",\n    };\n  },\n  props: {\n    label: {\n      type: String,\n      default: \"\",\n    },\n    validation: {\n      type: Object,\n      default: \"\",\n    },\n  },\n  methods: {\n    updateValue(data) {\n      //   this.counter++;\n      this.$emit(\"input\", data);\n    },\n    calculateDate() {\n      let today = new Date();\n      let year = today.getFullYear() - 18;\n      let date = today.setFullYear(year);\n      this.data = new Date(date).toISOString().split(\"T\")[0];\n      this.date = this.data;\n\n      return new Date(date).toISOString();\n    },\n  },\n};\n</script>\n\n<style>\n.v-picker__title {\n  background-color: #374ea8 !important;\n}\n\n.v-btn--active .date-color {\n  color: #374ea8;\n}\n\ndiv.v-picker__body.v-picker__body--no-title {\n  background-color: blue !important;\n  color: blue;\n}\n\n.v-btn.v-date-picker-table__current.v-btn--outlined {\n  border: thin black solid;\n}\n\n.v-date-picker-table .v-btn.v-btn--active,\n.v-btn.v-btn--active.v-btn--rounded.theme--light.accentv-btn.v-btn--active.v-btn--rounded.theme--light.accent {\n  color: #374ea8;\n}\n</style>\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseDateInput.vue?vue&type=style&index=0&id=9c88a85a&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseDateInput.vue?vue&type=style&index=0&id=9c88a85a&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDateInput_vue_vue_type_style_index_0_id_9c88a85a_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseDateInput.vue?vue&type=style&index=0&id=9c88a85a&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseDateInput.vue?vue&type=style&index=0&id=9c88a85a&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDateInput_vue_vue_type_style_index_0_id_9c88a85a_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDateInput_vue_vue_type_style_index_0_id_9c88a85a_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/base-components/BaseDateInput.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/base-components/BaseDateInput.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseDateInput_vue_vue_type_template_id_9c88a85a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseDateInput.vue?vue&type=template&id=9c88a85a& */ "./resources/js/components/base-components/BaseDateInput.vue?vue&type=template&id=9c88a85a&");
/* harmony import */ var _BaseDateInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseDateInput.vue?vue&type=script&lang=js& */ "./resources/js/components/base-components/BaseDateInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _BaseDateInput_vue_vue_type_style_index_0_id_9c88a85a_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseDateInput.vue?vue&type=style&index=0&id=9c88a85a&lang=css& */ "./resources/js/components/base-components/BaseDateInput.vue?vue&type=style&index=0&id=9c88a85a&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BaseDateInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseDateInput_vue_vue_type_template_id_9c88a85a___WEBPACK_IMPORTED_MODULE_0__.render,
  _BaseDateInput_vue_vue_type_template_id_9c88a85a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/base-components/BaseDateInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/base-components/BaseDateInput.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseDateInput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDateInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseDateInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseDateInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDateInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/base-components/BaseDateInput.vue?vue&type=template&id=9c88a85a&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseDateInput.vue?vue&type=template&id=9c88a85a& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDateInput_vue_vue_type_template_id_9c88a85a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDateInput_vue_vue_type_template_id_9c88a85a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDateInput_vue_vue_type_template_id_9c88a85a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseDateInput.vue?vue&type=template&id=9c88a85a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseDateInput.vue?vue&type=template&id=9c88a85a&");


/***/ }),

/***/ "./resources/js/components/base-components/BaseDateInput.vue?vue&type=style&index=0&id=9c88a85a&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseDateInput.vue?vue&type=style&index=0&id=9c88a85a&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseDateInput_vue_vue_type_style_index_0_id_9c88a85a_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseDateInput.vue?vue&type=style&index=0&id=9c88a85a&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseDateInput.vue?vue&type=style&index=0&id=9c88a85a&lang=css&");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfYmFzZS1jb21wb25lbnRzX0Jhc2VEYXRlSW5wdXRfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvREEsaUVBQWU7RUFDZkEsbUJBREE7RUFFQUMsSUFGQSxrQkFFQTtJQUNBO01BQ0FDLGtCQURBO01BRUFDLFlBRkE7TUFHQUY7SUFIQTtFQUtBLENBUkE7RUFTQUc7SUFDQUM7TUFDQUMsWUFEQTtNQUVBO0lBRkEsQ0FEQTtJQUtBQztNQUNBRCxZQURBO01BRUE7SUFGQTtFQUxBLENBVEE7RUFtQkFFO0lBQ0FDLFdBREEsdUJBQ0FSLElBREEsRUFDQTtNQUNBO01BQ0E7SUFDQSxDQUpBO0lBS0FTLGFBTEEsMkJBS0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BRUE7SUFDQTtFQWJBO0FBbkJBOzs7Ozs7Ozs7Ozs7Ozs7QUNwREEsSUFBSUMsTUFBTSxHQUFHLFNBQVNBLE1BQVQsR0FBa0I7RUFDN0IsSUFBSUMsR0FBRyxHQUFHLElBQVY7RUFBQSxJQUNFQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxFQURqQjs7RUFFQSxPQUFPQSxFQUFFLENBQ1AsS0FETyxFQUVQLENBQ0VBLEVBQUUsQ0FDQSxVQURBLEVBRUE7SUFDRUUsR0FBRyxFQUFFLFFBRFA7SUFFRUMsS0FBSyxFQUFFO01BQ0wsZ0JBQWdCSixHQUFHLENBQUNWLElBRGY7TUFFTGUsVUFBVSxFQUFFLEVBRlA7TUFHTCxhQUFhO0lBSFIsQ0FGVDtJQU9FQyxFQUFFLEVBQUU7TUFDRixzQkFBc0IsMkJBQVVDLE1BQVYsRUFBa0I7UUFDdENQLEdBQUcsQ0FBQ1YsSUFBSixHQUFXaUIsTUFBWDtNQUNELENBSEM7TUFJRix1QkFBdUIsMkJBQVVBLE1BQVYsRUFBa0I7UUFDdkNQLEdBQUcsQ0FBQ1YsSUFBSixHQUFXaUIsTUFBWDtNQUNEO0lBTkMsQ0FQTjtJQWVFQyxXQUFXLEVBQUVSLEdBQUcsQ0FBQ1MsRUFBSixDQUFPLENB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RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVE0RjtBQUMzQjtBQUNMO0FBQzVELENBQXFGOzs7QUFHckY7QUFDZ0c7QUFDaEcsZ0JBQWdCLHVHQUFVO0FBQzFCLEVBQUUsbUZBQU07QUFDUixFQUFFLHFGQUFNO0FBQ1IsRUFBRSw4RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDa00sQ0FBQyxpRUFBZSx3TUFBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlRGF0ZUlucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZURhdGVJbnB1dC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0Jhc2VEYXRlSW5wdXQudnVlPzI3ZGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlRGF0ZUlucHV0LnZ1ZT9kNmIyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZURhdGVJbnB1dC52dWU/ZjAzNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZURhdGVJbnB1dC52dWU/OTcyNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZURhdGVJbnB1dC52dWU/NDUxYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZURhdGVJbnB1dC52dWU/ZDQ1OSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHYtZGlhbG9nXG4gICAgICByZWY9XCJkaWFsb2dcIlxuICAgICAgdi1tb2RlbD1cIm1vZGFsXCJcbiAgICAgIDpyZXR1cm4tdmFsdWUuc3luYz1cImRhdGVcIlxuICAgICAgcGVyc2lzdGVudFxuICAgICAgbWF4LXdpZHRoPVwiMjkwcHhcIlxuICAgID5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aXZhdG9yPVwieyBvbiwgYXR0cnMgfVwiPlxuICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgZGVuc2VcbiAgICAgICAgICBsYWJlbD1cIkZlY2hhIGRlIG5hY2ltaWVudG9cIlxuICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgY2xhc3M9XCJwdC0xXCJcbiAgICAgICAgICB2LW1vZGVsLnRyaW09XCJ2YWxpZGF0aW9uLiRtb2RlbFwiXG4gICAgICAgICAgOmNsYXNzPVwie1xuICAgICAgICAgICAgJ2lzLWludmFsaWQnOiB2YWxpZGF0aW9uLiRlcnJvcixcbiAgICAgICAgICAgICdpcy12YWxpZCc6ICF2YWxpZGF0aW9uLiRpbnZhbGlkLFxuICAgICAgICAgIH1cIlxuICAgICAgICAgIHYtbWFzaz1cIicjIyMjLSMjLSMjJ1wiXG4gICAgICAgICAgdi1iaW5kPVwiYXR0cnNcIlxuICAgICAgICAgIHYtb249XCJvblwiXG4gICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICA8di1jb250YWluZXIgY2xhc3M9XCJwYi0wIHBsLTQgcGwtMSBtLTAgbXktYXV0byBvcmFuZ2UtdGV4dFwiPlxuICAgICAgICAgIDx2LXJvdyB2LWlmPVwiIXZhbGlkYXRpb24ubWluRGF0ZVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+XG4gICAgICAgICAgICA8cD5GZWNoYSBkZWJlIHNlciBzdXBlcmlvciBhIDAxLzAxLzE5MjA8L3A+XG4gICAgICAgICAgPC92LXJvdz5cbiAgICAgICAgICA8di1yb3cgdi1pZj1cIiF2YWxpZGF0aW9uLm1heERhdGVcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPlxuICAgICAgICAgICAgPHA+RGViZSBkZSBzZXIgbWF5b3IgZGUgZWRhZC48L3A+XG4gICAgICAgICAgPC92LXJvdz5cbiAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8di1kYXRlLXBpY2tlclxuICAgICAgICB2LW1vZGVsPVwiZGF0YVwiXG4gICAgICAgIG1pbj1cIjE5MjAtMDEtMDFcIlxuICAgICAgICBtYXg9XCIyMDIxLTEyLTI3XCJcbiAgICAgICAgc2Nyb2xsYWJsZVxuICAgICAgICBAaW5wdXQ9XCJ1cGRhdGVWYWx1ZVwiXG4gICAgICA+XG4gICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICA8di1idG4gdGV4dCBAY2xpY2s9XCJtb2RhbCA9IGZhbHNlXCI+IENhbmNlbGFyIDwvdi1idG4+XG4gICAgICAgIDx2LWJ0biB0ZXh0IEBjbGljaz1cIiRyZWZzLmRpYWxvZy5zYXZlKGRhdGEpXCI+IEd1YXJkYXIgPC92LWJ0bj5cbiAgICAgIDwvdi1kYXRlLXBpY2tlcj5cbiAgICA8L3YtZGlhbG9nPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGU6IFwiMjAyMS0xMi0yN1wiLFxuICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgZGF0YTogXCIyMDIxLTEyLTI3XCIsXG4gICAgfTtcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBsYWJlbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIixcbiAgICB9LFxuICAgIHZhbGlkYXRpb246IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfSxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZVZhbHVlKGRhdGEpIHtcbiAgICAgIC8vICAgdGhpcy5jb3VudGVyKys7XG4gICAgICB0aGlzLiRlbWl0KFwiaW5wdXRcIiwgZGF0YSk7XG4gICAgfSxcbiAgICBjYWxjdWxhdGVEYXRlKCkge1xuICAgICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgIGxldCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIDE4O1xuICAgICAgbGV0IGRhdGUgPSB0b2RheS5zZXRGdWxsWWVhcih5ZWFyKTtcbiAgICAgIHRoaXMuZGF0YSA9IG5ldyBEYXRlKGRhdGUpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuICAgICAgdGhpcy5kYXRlID0gdGhpcy5kYXRhO1xuXG4gICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9JU09TdHJpbmcoKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4udi1waWNrZXJfX3RpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NGVhOCAhaW1wb3J0YW50O1xufVxuXG4udi1idG4tLWFjdGl2ZSAuZGF0ZS1jb2xvciB7XG4gIGNvbG9yOiAjMzc0ZWE4O1xufVxuXG5kaXYudi1waWNrZXJfX2JvZHkudi1waWNrZXJfX2JvZHktLW5vLXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLnYtYnRuLnYtZGF0ZS1waWNrZXItdGFibGVfX2N1cnJlbnQudi1idG4tLW91dGxpbmVkIHtcbiAgYm9yZGVyOiB0aGluIGJsYWNrIHNvbGlkO1xufVxuXG4udi1kYXRlLXBpY2tlci10YWJsZSAudi1idG4udi1idG4tLWFjdGl2ZSxcbi52LWJ0bi52LWJ0bi0tYWN0aXZlLnYtYnRuLS1yb3VuZGVkLnRoZW1lLS1saWdodC5hY2NlbnR2LWJ0bi52LWJ0bi0tYWN0aXZlLnYtYnRuLS1yb3VuZGVkLnRoZW1lLS1saWdodC5hY2NlbnQge1xuICBjb2xvcjogIzM3NGVhODtcbn1cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBcImRpYWxvZ1wiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBcInJldHVybi12YWx1ZVwiOiBfdm0uZGF0ZSxcbiAgICAgICAgICAgIHBlcnNpc3RlbnQ6IFwiXCIsXG4gICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjI5MHB4XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCJ1cGRhdGU6cmV0dXJuVmFsdWVcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uZGF0ZSA9ICRldmVudFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidXBkYXRlOnJldHVybi12YWx1ZVwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5kYXRlID0gJGV2ZW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICh7IG9uLCBhdHRycyB9KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtdGV4dC1maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2coXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9iKFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYXNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbWFza1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiIyMjIy0jIy0jI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCInIyMjIy0jIy0jIydcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwdC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52YWxpZGF0aW9uLiRlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLXZhbGlkXCI6ICFfdm0udmFsaWRhdGlvbi4kaW52YWxpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZW5zZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJGZWNoYSBkZSBuYWNpbWllbnRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS52YWxpZGF0aW9uLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgJCR2ID09PSBcInN0cmluZ1wiID8gJCR2LnRyaW0oKSA6ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWxpZGF0aW9uLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi10ZXh0LWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBvblxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGItMCBwbC00IHBsLTEgbS0wIG15LWF1dG8gb3JhbmdlLXRleHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgIV92bS52YWxpZGF0aW9uLm1pbkRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZlY2hhIGRlYmUgc2VyIHN1cGVyaW9yIGEgMDEvMDEvMTkyMFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnZhbGlkYXRpb24ubWF4RGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkRlYmUgZGUgc2VyIG1heW9yIGRlIGVkYWQuXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSksXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubW9kYWwsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICBfdm0ubW9kYWwgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGFsXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtZGF0ZS1waWNrZXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbWluOiBcIjE5MjAtMDEtMDFcIiwgbWF4OiBcIjIwMjEtMTItMjdcIiwgc2Nyb2xsYWJsZTogXCJcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBpbnB1dDogX3ZtLnVwZGF0ZVZhbHVlIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uZGF0YSA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXRhXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubW9kYWwgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgQ2FuY2VsYXIgXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyZWZzLmRpYWxvZy5zYXZlKF92bS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgR3VhcmRhciBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtcGlja2VyX190aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc0ZWE4ICFpbXBvcnRhbnQ7XFxufVxcbi52LWJ0bi0tYWN0aXZlIC5kYXRlLWNvbG9yIHtcXG4gIGNvbG9yOiAjMzc0ZWE4O1xcbn1cXG5kaXYudi1waWNrZXJfX2JvZHkudi1waWNrZXJfX2JvZHktLW5vLXRpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWUgIWltcG9ydGFudDtcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG4udi1idG4udi1kYXRlLXBpY2tlci10YWJsZV9fY3VycmVudC52LWJ0bi0tb3V0bGluZWQge1xcbiAgYm9yZGVyOiB0aGluIGJsYWNrIHNvbGlkO1xcbn1cXG4udi1kYXRlLXBpY2tlci10YWJsZSAudi1idG4udi1idG4tLWFjdGl2ZSxcXG4udi1idG4udi1idG4tLWFjdGl2ZS52LWJ0bi0tcm91bmRlZC50aGVtZS0tbGlnaHQuYWNjZW50di1idG4udi1idG4tLWFjdGl2ZS52LWJ0bi0tcm91bmRlZC50aGVtZS0tbGlnaHQuYWNjZW50IHtcXG4gIGNvbG9yOiAjMzc0ZWE4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZURhdGVJbnB1dC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTBGQTtFQUNBLG9DQUFBO0FBQ0E7QUFFQTtFQUNBLGNBQUE7QUFDQTtBQUVBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FBQ0E7QUFFQTtFQUNBLHdCQUFBO0FBQ0E7QUFFQTs7RUFFQSxjQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdj5cXG4gICAgPHYtZGlhbG9nXFxuICAgICAgcmVmPVxcXCJkaWFsb2dcXFwiXFxuICAgICAgdi1tb2RlbD1cXFwibW9kYWxcXFwiXFxuICAgICAgOnJldHVybi12YWx1ZS5zeW5jPVxcXCJkYXRlXFxcIlxcbiAgICAgIHBlcnNpc3RlbnRcXG4gICAgICBtYXgtd2lkdGg9XFxcIjI5MHB4XFxcIlxcbiAgICA+XFxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XFxcInsgb24sIGF0dHJzIH1cXFwiPlxcbiAgICAgICAgPHYtdGV4dC1maWVsZFxcbiAgICAgICAgICBkZW5zZVxcbiAgICAgICAgICBsYWJlbD1cXFwiRmVjaGEgZGUgbmFjaW1pZW50b1xcXCJcXG4gICAgICAgICAgb3V0bGluZWRcXG4gICAgICAgICAgY2xhc3M9XFxcInB0LTFcXFwiXFxuICAgICAgICAgIHYtbW9kZWwudHJpbT1cXFwidmFsaWRhdGlvbi4kbW9kZWxcXFwiXFxuICAgICAgICAgIDpjbGFzcz1cXFwie1xcbiAgICAgICAgICAgICdpcy1pbnZhbGlkJzogdmFsaWRhdGlvbi4kZXJyb3IsXFxuICAgICAgICAgICAgJ2lzLXZhbGlkJzogIXZhbGlkYXRpb24uJGludmFsaWQsXFxuICAgICAgICAgIH1cXFwiXFxuICAgICAgICAgIHYtbWFzaz1cXFwiJyMjIyMtIyMtIyMnXFxcIlxcbiAgICAgICAgICB2LWJpbmQ9XFxcImF0dHJzXFxcIlxcbiAgICAgICAgICB2LW9uPVxcXCJvblxcXCJcXG4gICAgICAgICAgcmVhZG9ubHlcXG4gICAgICAgID48L3YtdGV4dC1maWVsZD5cXG4gICAgICAgIDx2LWNvbnRhaW5lciBjbGFzcz1cXFwicGItMCBwbC00IHBsLTEgbS0wIG15LWF1dG8gb3JhbmdlLXRleHRcXFwiPlxcbiAgICAgICAgICA8di1yb3cgdi1pZj1cXFwiIXZhbGlkYXRpb24ubWluRGF0ZVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPlxcbiAgICAgICAgICAgIDxwPkZlY2hhIGRlYmUgc2VyIHN1cGVyaW9yIGEgMDEvMDEvMTkyMDwvcD5cXG4gICAgICAgICAgPC92LXJvdz5cXG4gICAgICAgICAgPHYtcm93IHYtaWY9XFxcIiF2YWxpZGF0aW9uLm1heERhdGVcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT5cXG4gICAgICAgICAgICA8cD5EZWJlIGRlIHNlciBtYXlvciBkZSBlZGFkLjwvcD5cXG4gICAgICAgICAgPC92LXJvdz5cXG4gICAgICAgIDwvdi1jb250YWluZXI+XFxuICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICA8di1kYXRlLXBpY2tlclxcbiAgICAgICAgdi1tb2RlbD1cXFwiZGF0YVxcXCJcXG4gICAgICAgIG1pbj1cXFwiMTkyMC0wMS0wMVxcXCJcXG4gICAgICAgIG1heD1cXFwiMjAyMS0xMi0yN1xcXCJcXG4gICAgICAgIHNjcm9sbGFibGVcXG4gICAgICAgIEBpbnB1dD1cXFwidXBkYXRlVmFsdWVcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XFxuICAgICAgICA8di1idG4gdGV4dCBAY2xpY2s9XFxcIm1vZGFsID0gZmFsc2VcXFwiPiBDYW5jZWxhciA8L3YtYnRuPlxcbiAgICAgICAgPHYtYnRuIHRleHQgQGNsaWNrPVxcXCIkcmVmcy5kaWFsb2cuc2F2ZShkYXRhKVxcXCI+IEd1YXJkYXIgPC92LWJ0bj5cXG4gICAgICA8L3YtZGF0ZS1waWNrZXI+XFxuICAgIDwvdi1kaWFsb2c+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcXG4gIGRhdGEoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgZGF0ZTogXFxcIjIwMjEtMTItMjdcXFwiLFxcbiAgICAgIG1vZGFsOiBmYWxzZSxcXG4gICAgICBkYXRhOiBcXFwiMjAyMS0xMi0yN1xcXCIsXFxuICAgIH07XFxuICB9LFxcbiAgcHJvcHM6IHtcXG4gICAgbGFiZWw6IHtcXG4gICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgZGVmYXVsdDogXFxcIlxcXCIsXFxuICAgIH0sXFxuICAgIHZhbGlkYXRpb246IHtcXG4gICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgZGVmYXVsdDogXFxcIlxcXCIsXFxuICAgIH0sXFxuICB9LFxcbiAgbWV0aG9kczoge1xcbiAgICB1cGRhdGVWYWx1ZShkYXRhKSB7XFxuICAgICAgLy8gICB0aGlzLmNvdW50ZXIrKztcXG4gICAgICB0aGlzLiRlbWl0KFxcXCJpbnB1dFxcXCIsIGRhdGEpO1xcbiAgICB9LFxcbiAgICBjYWxjdWxhdGVEYXRlKCkge1xcbiAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XFxuICAgICAgbGV0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpIC0gMTg7XFxuICAgICAgbGV0IGRhdGUgPSB0b2RheS5zZXRGdWxsWWVhcih5ZWFyKTtcXG4gICAgICB0aGlzLmRhdGEgPSBuZXcgRGF0ZShkYXRlKS50b0lTT1N0cmluZygpLnNwbGl0KFxcXCJUXFxcIilbMF07XFxuICAgICAgdGhpcy5kYXRlID0gdGhpcy5kYXRhO1xcblxcbiAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0lTT1N0cmluZygpO1xcbiAgICB9LFxcbiAgfSxcXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4udi1waWNrZXJfX3RpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzRlYTggIWltcG9ydGFudDtcXG59XFxuXFxuLnYtYnRuLS1hY3RpdmUgLmRhdGUtY29sb3Ige1xcbiAgY29sb3I6ICMzNzRlYTg7XFxufVxcblxcbmRpdi52LXBpY2tlcl9fYm9keS52LXBpY2tlcl9fYm9keS0tbm8tdGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xcbiAgY29sb3I6IGJsdWU7XFxufVxcblxcbi52LWJ0bi52LWRhdGUtcGlja2VyLXRhYmxlX19jdXJyZW50LnYtYnRuLS1vdXRsaW5lZCB7XFxuICBib3JkZXI6IHRoaW4gYmxhY2sgc29saWQ7XFxufVxcblxcbi52LWRhdGUtcGlja2VyLXRhYmxlIC52LWJ0bi52LWJ0bi0tYWN0aXZlLFxcbi52LWJ0bi52LWJ0bi0tYWN0aXZlLnYtYnRuLS1yb3VuZGVkLnRoZW1lLS1saWdodC5hY2NlbnR2LWJ0bi52LWJ0bi0tYWN0aXZlLnYtYnRuLS1yb3VuZGVkLnRoZW1lLS1saWdodC5hY2NlbnQge1xcbiAgY29sb3I6ICMzNzRlYTg7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05LnVzZVsyXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2VEYXRlSW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWM4OGE4NWEmbGFuZz1jc3MmXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Jhc2VEYXRlSW5wdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTljODhhODVhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Jhc2VEYXRlSW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CYXNlRGF0ZUlucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9CYXNlRGF0ZUlucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTljODhhODVhJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxJbmZvcm3DoXRpY2FcXFxcRG9jdW1lbnRzXFxcXHByb2plY3RzTUNcXFxcU0lTRS1DVVNDQS0yMDIyLW1haW5cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOWM4OGE4NWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOWM4OGE4NWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOWM4OGE4NWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Jhc2VEYXRlSW5wdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTljODhhODVhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzljODhhODVhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZURhdGVJbnB1dC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZURhdGVJbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlRGF0ZUlucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZURhdGVJbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWM4OGE4NWEmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sYXJhdmVsLW1peC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05LnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTkudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZURhdGVJbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05Yzg4YTg1YSZsYW5nPWNzcyZcIiJdLCJuYW1lcyI6WyJpbmhlcml0QXR0cnMiLCJkYXRhIiwiZGF0ZSIsIm1vZGFsIiwicHJvcHMiLCJsYWJlbCIsInR5cGUiLCJ2YWxpZGF0aW9uIiwibWV0aG9kcyIsInVwZGF0ZVZhbHVlIiwiY2FsY3VsYXRlRGF0ZSIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJyZWYiLCJhdHRycyIsInBlcnNpc3RlbnQiLCJvbiIsIiRldmVudCIsInNjb3BlZFNsb3RzIiwiX3UiLCJrZXkiLCJmbiIsIl9nIiwiX2IiLCJkaXJlY3RpdmVzIiwibmFtZSIsInJhd05hbWUiLCJ2YWx1ZSIsImV4cHJlc3Npb24iLCJzdGF0aWNDbGFzcyIsIiRlcnJvciIsIiRpbnZhbGlkIiwiZGVuc2UiLCJvdXRsaW5lZCIsInJlYWRvbmx5IiwibW9kZWwiLCIkbW9kZWwiLCJjYWxsYmFjayIsIiQkdiIsIiRzZXQiLCJ0cmltIiwiX3YiLCJtaW5EYXRlIiwiX2UiLCJtYXhEYXRlIiwibWluIiwibWF4Iiwic2Nyb2xsYWJsZSIsImlucHV0IiwidGV4dCIsImNsaWNrIiwiJHJlZnMiLCJkaWFsb2ciLCJzYXZlIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCJdLCJzb3VyY2VSb290IjoiIn0=