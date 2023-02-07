"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_base-components_BaseInput_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inheritAttrs: false,
  data: function data() {
    return {
      data: "",
      counter: 0,
      icon: "visibility"
    };
  },
  props: {
    label: {
      type: String,
      "default": ""
    },
    validation: {
      type: Object,
      "default": {}
    },
    validationTextType: {
      type: String,
      "default": "none"
    },
    required: {
      type: Boolean,
      "default": false
    },
    type: {
      type: String,
      "default": "text"
    },
    mask: {
      type: String,
      "default": ""
    },
    readonly: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    validationsInput: {
      type: Object,
      "default": function _default() {
        return {
          required: true,
          format: false,
          minLength: false,
          maxLength: false,
          minValue: false,
          maxValue: false,
          isValidDui: false,
          isValidNit: false,
          isValidIsss: false,
          isValidAfp: false,
          isValidConamypeId: false,
          isValidNrc: false,
          email: false,
          showPassword: false
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
    }
  },
  watch: {
    type: function type(val) {
      this.icon = this.type == "password" ? "visibility" : "visibility_off";
    }
  },
  mounted: function mounted() {
    this.data = this.$attrs.value;
    this.validation.$reset();
  },
  updated: function updated() {
    this.data = this.validation.$model;
  },
  methods: {
    updateValue: function updateValue() {
      this.validation.$model = this.data;
      this.$emit("input", this.data);
    },
    validateText: function validateText() {
      if (this.data) {
        switch (this.validationTextType) {
          case "default":
            this.data = this.data.replace(/[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\' ']/gi, "");
            this.data = this.data.replace(/^([a-zA-Z0-9])\1{4}/gi, "");
            break;

          case "only-letters":
            this.data = this.data.replace(/[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\' ']/gi, "");
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

      this.validation.$model = this.data;
      this.$emit("keyup", this.data);
    },
    showPassword: function showPassword() {
      var show = this.type == "password" ? "text" : "password";
      this.$emit("update-password", {
        show: show
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("v-text-field", {
    directives: [{
      name: "mask",
      rawName: "v-mask",
      value: _vm.mask,
      expression: "mask"
    }],
    key: _vm.counter,
    staticClass: "mb-1",
    "class": {
      "is-invalid": _vm.validation.$error,
      "is-valid": !_vm.validation.$invalid
    },
    attrs: {
      dense: "",
      label: _vm.label,
      outlined: "",
      min: _vm.min,
      max: _vm.max,
      type: _vm.type,
      readonly: _vm.readonly,
      disabled: _vm.disabled,
      autocomplete: "new-password"
    },
    on: {
      input: _vm.updateValue,
      keyup: function keyup($event) {
        return _vm.validateText();
      }
    },
    model: {
      value: _vm.data,
      callback: function callback($$v) {
        _vm.data = typeof $$v === "string" ? $$v.trim() : $$v;
      },
      expression: "data"
    }
  }, [_vm.validationsInput.showPassword ? _c("v-icon", {
    attrs: {
      slot: "append",
      color: "green"
    },
    on: {
      click: function click($event) {
        return _vm.showPassword();
      }
    },
    slot: "append"
  }, [_vm._v("\n      " + _vm._s(_vm.icon) + "\n    ")]) : _vm._e()], 1), _vm._v(" "), _vm.validation.$dirty ? _c("v-container", {
    staticClass: "mb-0 pt-0 my-auto orange-text"
  }, [!_vm.validation.$params.required ? [!_vm.validation.$params.required ? _c("v-row", {
    staticClass: "pt-0"
  }, [_c("p", {
    staticClass: "mb-0 mt-1 text-muted"
  }, [_vm._v("(Campo opcional)")])]) : _vm._e()] : _vm._e(), _vm._v(" "), [_vm.validation.$error && _vm.validation.$params.required ? _c("v-row", {
    staticClass: "pt-0"
  }, [_c("p", {
    staticClass: "mb-0 mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v(" Campo requerido.\n        ")])]) : _vm._e(), _vm._v(" "), _vm.validation.$params.minLength && !_vm.validation.minLength ? _c("v-row", [_c("p", {
    staticClass: "pl-0 mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v(" " + _vm._s(_vm.min) + " carácter\n          mínimo.\n        ")])]) : _vm._e(), _vm._v(" "), _vm.validation.$params.maxLength && !_vm.validation.maxLength ? _c("v-row", [_c("p", {
    staticClass: "pl-0 pr-0 mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v(" " + _vm._s(_vm.max) + " caracteres\n          máximo.\n        ")])]) : _vm._e(), _vm._v(" "), _vm.validation.$params.minValue && !_vm.validation.minValue ? _c("v-row", [_c("p", {
    staticClass: "mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v(" " + _vm._s(_vm.min) + " es el valor\n          mínimo.\n        ")])]) : _vm._e(), _vm._v(" "), _vm.validation.$params.maxValue && !_vm.validation.maxValue ? _c("v-row", [_c("p", {
    staticClass: "mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v(" " + _vm._s(_vm.max) + " el valor\n          máximo.\n        ")])]) : _vm._e(), _vm._v(" "), _vm.validation.$params.format && !_vm.validation.isValidNumber ? _c("v-row", [_c("p", {
    staticClass: "mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v(" Formato inválido\n        ")])]) : _vm._e(), _vm._v(" "), _vm.validation.$params.isValidDui && !_vm.validation.isValidDui ? _c("v-row", [_c("p", {
    staticClass: "mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v(" DUI inválido\n        ")])]) : _vm._e(), _vm._v(" "), _vm.validation.$params.isValidNit && !_vm.validation.isValidNit ? _c("v-row", [_c("p", {
    staticClass: "mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v(" NIT inválido\n        ")])]) : _vm._e(), _vm._v(" "), _vm.validation.$params.isValidIsss && !_vm.validation.isValidIsss ? _c("v-row", [_c("p", {
    staticClass: "mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v(" ISSS inválido\n        ")])]) : _vm._e(), _vm._v(" "), _vm.validation.$params.isValidAfp && !_vm.validation.isValidAfp ? _c("v-row", [_c("p", {
    staticClass: "mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v(" AFP inválido\n        ")])]) : _vm._e(), _vm._v(" "), _vm.validation.$params.isValidConamypeId && !_vm.validation.isValidConamypeId ? _c("v-row", [_c("p", {
    staticClass: "mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v(" ID de Conamype inválido\n        ")])]) : _vm._e(), _vm._v(" "), _vm.validation.$params.isValidNrc && !_vm.validation.isValidNrc ? _c("v-row", [_c("p", {
    staticClass: "mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v(" NRC inválido\n        ")])]) : _vm._e(), _vm._v(" "), _vm.validation.$params.email && !_vm.validation.email ? _c("v-row", [_c("p", {
    staticClass: "mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v(" Formato de correo\n          electrónico inválido.\n        ")])]) : _vm._e(), _vm._v(" "), _vm.validation.$params.isValidPassword && !_vm.validation.isValidPassword ? _c("v-row", [_c("p", {
    staticClass: "mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v("\n          8 caracteres mínimo.\n        ")]), _vm._v(" "), _c("p", {
    staticClass: "mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v("\n          1 mayúscula mínimo.\n        ")]), _vm._v(" "), _c("p", {
    staticClass: "mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v("\n          1 minúscula mínimo.\n        ")]), _vm._v(" "), _c("p", {
    staticClass: "mt-1"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("error_outline")]), _vm._v("\n          13 caracteres máximo.\n        ")])]) : _vm._e()]], 2) : _vm._e()], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&id=7e2bcf61&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&id=7e2bcf61&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-text-field--outlined {\n  border-color: #1976d2 !important;\n}\n.v-text-field--outlined.v-input--is-focused fieldset,\n.v-text-field--outlined.v-input--has-state fieldset {\n  border-color: #2d52a8 !important;\n}\n.v-text-field__details {\n  display: none;\n}\n.material-icons {\n  width: 30px;\n  height: auto;\n}\np {\n  margin-bottom: 0px;\n  height: 20px;\n  line-height: 20px; /* same as height! */\n  display: flex;\n  justify-content: left;\n  align-content: center;\n  flex-direction: row;\n}\n", "",{"version":3,"sources":["webpack://./resources/js/components/base-components/BaseInput.vue"],"names":[],"mappings":";AAsRA;EACA,gCAAA;AACA;AAEA;;EAEA,gCAAA;AACA;AAEA;EACA,aAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;AACA;AAEA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA,EAAA,oBAAA;EACA,aAAA;EACA,qBAAA;EACA,qBAAA;EACA,mBAAA;AACA","sourcesContent":["<template>\n  <div>\n    <v-text-field\n      dense\n      :label=\"label\"\n      outlined\n      v-model.trim=\"data\"\n      :class=\"{\n        'is-invalid': validation.$error,\n        'is-valid': !validation.$invalid,\n      }\"\n      :key=\"counter\"\n      :min=\"min\"\n      :max=\"max\"\n      :type=\"type\"\n      :readonly=\"readonly\"\n      :disabled=\"disabled\"\n      @input=\"updateValue\"\n      v-mask=\"mask\"\n      @keyup=\"validateText()\"\n      autocomplete=\"new-password\"\n      class=\"mb-1\"\n    >\n      <v-icon\n        slot=\"append\"\n        color=\"green\"\n        v-if=\"validationsInput.showPassword\"\n        @click=\"showPassword()\"\n      >\n        {{ icon }}\n      </v-icon>\n    </v-text-field>\n    <v-container class=\"mb-0 pt-0 my-auto orange-text\" v-if=\"validation.$dirty\">\n      <template v-if=\"!validation.$params.required\">\n        <v-row class=\"pt-0\" v-if=\"!validation.$params.required\">\n          <p class=\"mb-0 mt-1 text-muted\">(Campo opcional)</p>\n        </v-row>\n      </template>\n      <template>\n        <v-row\n          v-if=\"validation.$error && validation.$params.required\"\n          class=\"pt-0\"\n        >\n          <p class=\"mb-0 mt-1\">\n            <i class=\"material-icons\">error_outline</i> Campo requerido.\n          </p>\n        </v-row>\n        <v-row v-if=\"validation.$params.minLength && !validation.minLength\">\n          <p class=\"pl-0 mt-1\">\n            <i class=\"material-icons\">error_outline</i> {{ min }} carácter\n            mínimo.\n          </p>\n        </v-row>\n        <v-row v-if=\"validation.$params.maxLength && !validation.maxLength\">\n          <p class=\"pl-0 pr-0 mt-1\">\n            <i class=\"material-icons\">error_outline</i> {{ max }} caracteres\n            máximo.\n          </p>\n        </v-row>\n        <v-row v-if=\"validation.$params.minValue && !validation.minValue\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> {{ min }} es el valor\n            mínimo.\n          </p>\n        </v-row>\n        <v-row v-if=\"validation.$params.maxValue && !validation.maxValue\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> {{ max }} el valor\n            máximo.\n          </p>\n        </v-row>\n        <v-row v-if=\"validation.$params.format && !validation.isValidNumber\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> Formato inválido\n          </p>\n        </v-row>\n        <v-row v-if=\"validation.$params.isValidDui && !validation.isValidDui\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> DUI inválido\n          </p>\n        </v-row>\n        <v-row v-if=\"validation.$params.isValidNit && !validation.isValidNit\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> NIT inválido\n          </p>\n        </v-row>\n        <v-row v-if=\"validation.$params.isValidIsss && !validation.isValidIsss\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> ISSS inválido\n          </p>\n        </v-row>\n        <v-row v-if=\"validation.$params.isValidAfp && !validation.isValidAfp\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> AFP inválido\n          </p>\n        </v-row>\n        <v-row\n          v-if=\"\n            validation.$params.isValidConamypeId &&\n            !validation.isValidConamypeId\n          \"\n        >\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> ID de Conamype inválido\n          </p>\n        </v-row>\n        <v-row v-if=\"validation.$params.isValidNrc && !validation.isValidNrc\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> NRC inválido\n          </p>\n        </v-row>\n        <v-row v-if=\"validation.$params.email && !validation.email\">\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i> Formato de correo\n            electrónico inválido.\n          </p>\n        </v-row>\n        <v-row\n          v-if=\"\n            validation.$params.isValidPassword && !validation.isValidPassword\n          \"\n        >\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i>\n            8 caracteres mínimo.\n          </p>\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i>\n            1 mayúscula mínimo.\n          </p>\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i>\n            1 minúscula mínimo.\n          </p>\n          <p class=\"mt-1\">\n            <i class=\"material-icons\">error_outline</i>\n            13 caracteres máximo.\n          </p>\n        </v-row>\n      </template>\n    </v-container>\n  </div>\n</template>\n\n<script>\nexport default {\n  inheritAttrs: false,\n  data() {\n    return {\n      data: \"\",\n      counter: 0,\n      icon: \"visibility\",\n    };\n  },\n  props: {\n    label: {\n      type: String,\n      default: \"\",\n    },\n    validation: {\n      type: Object,\n      default: {},\n    },\n    validationTextType: {\n      type: String,\n      default: \"none\",\n    },\n    required: {\n      type: Boolean,\n      default: false,\n    },\n    type: {\n      type: String,\n      default: \"text\",\n    },\n    mask: {\n      type: String,\n      default: \"\",\n    },\n    readonly: {\n      type: Boolean,\n      default: false,\n    },\n    disabled: {\n      type: Boolean,\n      default: false,\n    },\n    validationsInput: {\n      type: Object,\n      default: () => {\n        return {\n          required: true,\n          format: false,\n          minLength: false,\n          maxLength: false,\n          minValue: false,\n          maxValue: false,\n          isValidDui: false,\n          isValidNit: false,\n          isValidIsss: false,\n          isValidAfp: false,\n          isValidConamypeId: false,\n          isValidNrc: false,\n          email: false,\n          showPassword: false,\n        };\n      },\n    },\n    min: {\n      type: Number,\n      default: 0,\n    },\n    max: {\n      type: Number,\n      default: 150,\n    },\n  },\n  watch: {\n    type(val) {\n      this.icon = this.type == \"password\" ? \"visibility\" : \"visibility_off\";\n    },\n  },\n  mounted() {\n    this.data = this.$attrs.value;\n    this.validation.$reset();\n  },\n  updated() {\n    this.data = this.validation.$model;\n  },\n  methods: {\n    updateValue() {\n      this.validation.$model = this.data;\n      this.$emit(\"input\", this.data);\n    },\n\n    validateText() {\n      if (this.data) {\n        switch (this.validationTextType) {\n          case \"default\":\n            this.data = this.data.replace(\n              /[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\\' ']/gi,\n              \"\"\n            );\n            this.data = this.data.replace(/^([a-zA-Z0-9])\\1{4}/gi, \"\");\n            break;\n          case \"only-letters\":\n            this.data = this.data.replace(\n              /[^A-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚñ\\' ']/gi,\n              \"\"\n            );\n            break;\n          case \"only-numbers\":\n            this.data = this.data.replace(/[^0-9\\-]/g, \"\");\n            break;\n          case \"none\":\n            break;\n          case \"only-repeats\":\n            this.data = this.data.replace(/^([a-zA-Z0-9])\\1{4}/g, \"\");\n            break;\n          default:\n            break;\n        }\n      }\n\n      this.validation.$model = this.data;\n      this.$emit(\"keyup\", this.data);\n    },\n\n    showPassword() {\n      const show = this.type == \"password\" ? \"text\" : \"password\";\n\n      this.$emit(\"update-password\", { show });\n    },\n  },\n};\n</script>\n\n<style>\n.v-text-field--outlined {\n  border-color: #1976d2 !important;\n}\n\n.v-text-field--outlined.v-input--is-focused fieldset,\n.v-text-field--outlined.v-input--has-state fieldset {\n  border-color: #2d52a8 !important;\n}\n\n.v-text-field__details {\n  display: none;\n}\n\n.material-icons {\n  width: 30px;\n  height: auto;\n}\n\np {\n  margin-bottom: 0px;\n  height: 20px;\n  line-height: 20px; /* same as height! */\n  display: flex;\n  justify-content: left;\n  align-content: center;\n  flex-direction: row;\n}\n</style>\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&id=7e2bcf61&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&id=7e2bcf61&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_style_index_0_id_7e2bcf61_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=style&index=0&id=7e2bcf61&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&id=7e2bcf61&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_style_index_0_id_7e2bcf61_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_style_index_0_id_7e2bcf61_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/base-components/BaseInput.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/base-components/BaseInput.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInput.vue?vue&type=template&id=7e2bcf61& */ "./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61&");
/* harmony import */ var _BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseInput.vue?vue&type=script&lang=js& */ "./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js&");
/* harmony import */ var _BaseInput_vue_vue_type_style_index_0_id_7e2bcf61_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseInput.vue?vue&type=style&index=0&id=7e2bcf61&lang=css& */ "./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&id=7e2bcf61&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__.render,
  _BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/base-components/BaseInput.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_template_id_7e2bcf61___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=template&id=7e2bcf61& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=template&id=7e2bcf61&");


/***/ }),

/***/ "./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&id=7e2bcf61&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&id=7e2bcf61&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseInput_vue_vue_type_style_index_0_id_7e2bcf61_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BaseInput.vue?vue&type=style&index=0&id=7e2bcf61&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/BaseInput.vue?vue&type=style&index=0&id=7e2bcf61&lang=css&");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfYmFzZS1jb21wb25lbnRzX0Jhc2VJbnB1dF92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWlKQSxpRUFBZTtFQUNmQSxtQkFEQTtFQUVBQyxJQUZBLGtCQUVBO0lBQ0E7TUFDQUEsUUFEQTtNQUVBQyxVQUZBO01BR0FDO0lBSEE7RUFLQSxDQVJBO0VBU0FDO0lBQ0FDO01BQ0FDLFlBREE7TUFFQTtJQUZBLENBREE7SUFLQUM7TUFDQUQsWUFEQTtNQUVBO0lBRkEsQ0FMQTtJQVNBRTtNQUNBRixZQURBO01BRUE7SUFGQSxDQVRBO0lBYUFHO01BQ0FILGFBREE7TUFFQTtJQUZBLENBYkE7SUFpQkFBO01BQ0FBLFlBREE7TUFFQTtJQUZBLENBakJBO0lBcUJBSTtNQUNBSixZQURBO01BRUE7SUFGQSxDQXJCQTtJQXlCQUs7TUFDQUwsYUFEQTtNQUVBO0lBRkEsQ0F6QkE7SUE2QkFNO01BQ0FOLGFBREE7TUFFQTtJQUZBLENBN0JBO0lBaUNBTztNQUNBUCxZQURBO01BRUE7UUFDQTtVQUNBRyxjQURBO1VBRUFLLGFBRkE7VUFHQUMsZ0JBSEE7VUFJQUMsZ0JBSkE7VUFLQUMsZUFMQTtVQU1BQyxlQU5BO1VBT0FDLGlCQVBBO1VBUUFDLGlCQVJBO1VBU0FDLGtCQVRBO1VBVUFDLGlCQVZBO1VBV0FDLHdCQVhBO1VBWUFDLGlCQVpBO1VBYUFDLFlBYkE7VUFjQUM7UUFkQTtNQWdCQTtJQW5CQSxDQWpDQTtJQXNEQUM7TUFDQXJCLFlBREE7TUFFQTtJQUZBLENBdERBO0lBMERBc0I7TUFDQXRCLFlBREE7TUFFQTtJQUZBO0VBMURBLENBVEE7RUF3RUF1QjtJQUNBdkIsSUFEQSxnQkFDQXdCLEdBREEsRUFDQTtNQUNBO0lBQ0E7RUFIQSxDQXhFQTtFQTZFQUMsT0E3RUEscUJBNkVBO0lBQ0E7SUFDQTtFQUNBLENBaEZBO0VBaUZBQyxPQWpGQSxxQkFpRkE7SUFDQTtFQUNBLENBbkZBO0VBb0ZBQztJQUNBQyxX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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVF3RjtBQUMzQjtBQUNMO0FBQ3hELENBQWlGOzs7QUFHakY7QUFDZ0c7QUFDaEcsZ0JBQWdCLHVHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDOEwsQ0FBQyxpRUFBZSxvTUFBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlPzgwYjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlPzk1MmYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlPzk1OTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0Jhc2VJbnB1dC52dWU/MGI5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQmFzZUlucHV0LnZ1ZT9jY2MxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9CYXNlSW5wdXQudnVlP2NjYTAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDx2LXRleHQtZmllbGRcbiAgICAgIGRlbnNlXG4gICAgICA6bGFiZWw9XCJsYWJlbFwiXG4gICAgICBvdXRsaW5lZFxuICAgICAgdi1tb2RlbC50cmltPVwiZGF0YVwiXG4gICAgICA6Y2xhc3M9XCJ7XG4gICAgICAgICdpcy1pbnZhbGlkJzogdmFsaWRhdGlvbi4kZXJyb3IsXG4gICAgICAgICdpcy12YWxpZCc6ICF2YWxpZGF0aW9uLiRpbnZhbGlkLFxuICAgICAgfVwiXG4gICAgICA6a2V5PVwiY291bnRlclwiXG4gICAgICA6bWluPVwibWluXCJcbiAgICAgIDptYXg9XCJtYXhcIlxuICAgICAgOnR5cGU9XCJ0eXBlXCJcbiAgICAgIDpyZWFkb25seT1cInJlYWRvbmx5XCJcbiAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlXCJcbiAgICAgIHYtbWFzaz1cIm1hc2tcIlxuICAgICAgQGtleXVwPVwidmFsaWRhdGVUZXh0KClcIlxuICAgICAgYXV0b2NvbXBsZXRlPVwibmV3LXBhc3N3b3JkXCJcbiAgICAgIGNsYXNzPVwibWItMVwiXG4gICAgPlxuICAgICAgPHYtaWNvblxuICAgICAgICBzbG90PVwiYXBwZW5kXCJcbiAgICAgICAgY29sb3I9XCJncmVlblwiXG4gICAgICAgIHYtaWY9XCJ2YWxpZGF0aW9uc0lucHV0LnNob3dQYXNzd29yZFwiXG4gICAgICAgIEBjbGljaz1cInNob3dQYXNzd29yZCgpXCJcbiAgICAgID5cbiAgICAgICAge3sgaWNvbiB9fVxuICAgICAgPC92LWljb24+XG4gICAgPC92LXRleHQtZmllbGQ+XG4gICAgPHYtY29udGFpbmVyIGNsYXNzPVwibWItMCBwdC0wIG15LWF1dG8gb3JhbmdlLXRleHRcIiB2LWlmPVwidmFsaWRhdGlvbi4kZGlydHlcIj5cbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiIXZhbGlkYXRpb24uJHBhcmFtcy5yZXF1aXJlZFwiPlxuICAgICAgICA8di1yb3cgY2xhc3M9XCJwdC0wXCIgdi1pZj1cIiF2YWxpZGF0aW9uLiRwYXJhbXMucmVxdWlyZWRcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm1iLTAgbXQtMSB0ZXh0LW11dGVkXCI+KENhbXBvIG9wY2lvbmFsKTwvcD5cbiAgICAgICAgPC92LXJvdz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGU+XG4gICAgICAgIDx2LXJvd1xuICAgICAgICAgIHYtaWY9XCJ2YWxpZGF0aW9uLiRlcnJvciAmJiB2YWxpZGF0aW9uLiRwYXJhbXMucmVxdWlyZWRcIlxuICAgICAgICAgIGNsYXNzPVwicHQtMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzcz1cIm1iLTAgbXQtMVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IENhbXBvIHJlcXVlcmlkby5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbi4kcGFyYW1zLm1pbkxlbmd0aCAmJiAhdmFsaWRhdGlvbi5taW5MZW5ndGhcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInBsLTAgbXQtMVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IHt7IG1pbiB9fSBjYXLDoWN0ZXJcbiAgICAgICAgICAgIG3DrW5pbW8uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3Ytcm93PlxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb24uJHBhcmFtcy5tYXhMZW5ndGggJiYgIXZhbGlkYXRpb24ubWF4TGVuZ3RoXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJwbC0wIHByLTAgbXQtMVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IHt7IG1heCB9fSBjYXJhY3RlcmVzXG4gICAgICAgICAgICBtw6F4aW1vLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC92LXJvdz5cbiAgICAgICAgPHYtcm93IHYtaWY9XCJ2YWxpZGF0aW9uLiRwYXJhbXMubWluVmFsdWUgJiYgIXZhbGlkYXRpb24ubWluVmFsdWVcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTFcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPiB7eyBtaW4gfX0gZXMgZWwgdmFsb3JcbiAgICAgICAgICAgIG3DrW5pbW8uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3Ytcm93PlxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb24uJHBhcmFtcy5tYXhWYWx1ZSAmJiAhdmFsaWRhdGlvbi5tYXhWYWx1ZVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IHt7IG1heCB9fSBlbCB2YWxvclxuICAgICAgICAgICAgbcOheGltby5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbi4kcGFyYW1zLmZvcm1hdCAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkTnVtYmVyXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4gRm9ybWF0byBpbnbDoWxpZG9cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbi4kcGFyYW1zLmlzVmFsaWREdWkgJiYgIXZhbGlkYXRpb24uaXNWYWxpZER1aVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IERVSSBpbnbDoWxpZG9cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbi4kcGFyYW1zLmlzVmFsaWROaXQgJiYgIXZhbGlkYXRpb24uaXNWYWxpZE5pdFwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IE5JVCBpbnbDoWxpZG9cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbi4kcGFyYW1zLmlzVmFsaWRJc3NzICYmICF2YWxpZGF0aW9uLmlzVmFsaWRJc3NzXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4gSVNTUyBpbnbDoWxpZG9cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDx2LXJvdyB2LWlmPVwidmFsaWRhdGlvbi4kcGFyYW1zLmlzVmFsaWRBZnAgJiYgIXZhbGlkYXRpb24uaXNWYWxpZEFmcFwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IEFGUCBpbnbDoWxpZG9cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDx2LXJvd1xuICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgIHZhbGlkYXRpb24uJHBhcmFtcy5pc1ZhbGlkQ29uYW15cGVJZCAmJlxuICAgICAgICAgICAgIXZhbGlkYXRpb24uaXNWYWxpZENvbmFteXBlSWRcbiAgICAgICAgICBcIlxuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT4gSUQgZGUgQ29uYW15cGUgaW52w6FsaWRvXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3Ytcm93PlxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb24uJHBhcmFtcy5pc1ZhbGlkTnJjICYmICF2YWxpZGF0aW9uLmlzVmFsaWROcmNcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTFcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPiBOUkMgaW52w6FsaWRvXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3Ytcm93PlxuICAgICAgICA8di1yb3cgdi1pZj1cInZhbGlkYXRpb24uJHBhcmFtcy5lbWFpbCAmJiAhdmFsaWRhdGlvbi5lbWFpbFwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+IEZvcm1hdG8gZGUgY29ycmVvXG4gICAgICAgICAgICBlbGVjdHLDs25pY28gaW52w6FsaWRvLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC92LXJvdz5cbiAgICAgICAgPHYtcm93XG4gICAgICAgICAgdi1pZj1cIlxuICAgICAgICAgICAgdmFsaWRhdGlvbi4kcGFyYW1zLmlzVmFsaWRQYXNzd29yZCAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkUGFzc3dvcmRcbiAgICAgICAgICBcIlxuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT5cbiAgICAgICAgICAgIDggY2FyYWN0ZXJlcyBtw61uaW1vLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cIm10LTFcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lcnJvcl9vdXRsaW5lPC9pPlxuICAgICAgICAgICAgMSBtYXnDunNjdWxhIG3DrW5pbW8uXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwibXQtMVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVycm9yX291dGxpbmU8L2k+XG4gICAgICAgICAgICAxIG1pbsO6c2N1bGEgbcOtbmltby5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtdC0xXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXJyb3Jfb3V0bGluZTwvaT5cbiAgICAgICAgICAgIDEzIGNhcmFjdGVyZXMgbcOheGltby5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdi1yb3c+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvdi1jb250YWluZXI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogXCJcIixcbiAgICAgIGNvdW50ZXI6IDAsXG4gICAgICBpY29uOiBcInZpc2liaWxpdHlcIixcbiAgICB9O1xuICB9LFxuICBwcm9wczoge1xuICAgIGxhYmVsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIlwiLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvbjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDoge30sXG4gICAgfSxcbiAgICB2YWxpZGF0aW9uVGV4dFR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwibm9uZVwiLFxuICAgIH0sXG4gICAgcmVxdWlyZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9LFxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwidGV4dFwiLFxuICAgIH0sXG4gICAgbWFzazoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIixcbiAgICB9LFxuICAgIHJlYWRvbmx5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0sXG4gICAgdmFsaWRhdGlvbnNJbnB1dDoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIGZvcm1hdDogZmFsc2UsXG4gICAgICAgICAgbWluTGVuZ3RoOiBmYWxzZSxcbiAgICAgICAgICBtYXhMZW5ndGg6IGZhbHNlLFxuICAgICAgICAgIG1pblZhbHVlOiBmYWxzZSxcbiAgICAgICAgICBtYXhWYWx1ZTogZmFsc2UsXG4gICAgICAgICAgaXNWYWxpZER1aTogZmFsc2UsXG4gICAgICAgICAgaXNWYWxpZE5pdDogZmFsc2UsXG4gICAgICAgICAgaXNWYWxpZElzc3M6IGZhbHNlLFxuICAgICAgICAgIGlzVmFsaWRBZnA6IGZhbHNlLFxuICAgICAgICAgIGlzVmFsaWRDb25hbXlwZUlkOiBmYWxzZSxcbiAgICAgICAgICBpc1ZhbGlkTnJjOiBmYWxzZSxcbiAgICAgICAgICBlbWFpbDogZmFsc2UsXG4gICAgICAgICAgc2hvd1Bhc3N3b3JkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBtaW46IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBtYXg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDE1MCxcbiAgICB9LFxuICB9LFxuICB3YXRjaDoge1xuICAgIHR5cGUodmFsKSB7XG4gICAgICB0aGlzLmljb24gPSB0aGlzLnR5cGUgPT0gXCJwYXNzd29yZFwiID8gXCJ2aXNpYmlsaXR5XCIgOiBcInZpc2liaWxpdHlfb2ZmXCI7XG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLiRhdHRycy52YWx1ZTtcbiAgICB0aGlzLnZhbGlkYXRpb24uJHJlc2V0KCk7XG4gIH0sXG4gIHVwZGF0ZWQoKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy52YWxpZGF0aW9uLiRtb2RlbDtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZVZhbHVlKCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uLiRtb2RlbCA9IHRoaXMuZGF0YTtcbiAgICAgIHRoaXMuJGVtaXQoXCJpbnB1dFwiLCB0aGlzLmRhdGEpO1xuICAgIH0sXG5cbiAgICB2YWxpZGF0ZVRleHQoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy52YWxpZGF0aW9uVGV4dFR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwiZGVmYXVsdFwiOlxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoXG4gICAgICAgICAgICAgIC9bXkEtWsOgw6jDrMOyw7nDgMOIw4zDksOZw6HDqcOtw7PDusO9w4HDicONw5PDmsOxXFwnICddL2dpLFxuICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL14oW2EtekEtWjAtOV0pXFwxezR9L2dpLCBcIlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJvbmx5LWxldHRlcnNcIjpcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKFxuICAgICAgICAgICAgICAvW15BLVrDoMOow6zDssO5w4DDiMOMw5LDmcOhw6nDrcOzw7rDvcOBw4nDjcOTw5rDsVxcJyAnXS9naSxcbiAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJvbmx5LW51bWJlcnNcIjpcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC9bXjAtOVxcLV0vZywgXCJcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwibm9uZVwiOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm9ubHktcmVwZWF0c1wiOlxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL14oW2EtekEtWjAtOV0pXFwxezR9L2csIFwiXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMudmFsaWRhdGlvbi4kbW9kZWwgPSB0aGlzLmRhdGE7XG4gICAgICB0aGlzLiRlbWl0KFwia2V5dXBcIiwgdGhpcy5kYXRhKTtcbiAgICB9LFxuXG4gICAgc2hvd1Bhc3N3b3JkKCkge1xuICAgICAgY29uc3Qgc2hvdyA9IHRoaXMudHlwZSA9PSBcInBhc3N3b3JkXCIgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIjtcblxuICAgICAgdGhpcy4kZW1pdChcInVwZGF0ZS1wYXNzd29yZFwiLCB7IHNob3cgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLnYtdGV4dC1maWVsZC0tb3V0bGluZWQge1xuICBib3JkZXItY29sb3I6ICMxOTc2ZDIgIWltcG9ydGFudDtcbn1cblxuLnYtdGV4dC1maWVsZC0tb3V0bGluZWQudi1pbnB1dC0taXMtZm9jdXNlZCBmaWVsZHNldCxcbi52LXRleHQtZmllbGQtLW91dGxpbmVkLnYtaW5wdXQtLWhhcy1zdGF0ZSBmaWVsZHNldCB7XG4gIGJvcmRlci1jb2xvcjogIzJkNTJhOCAhaW1wb3J0YW50O1xufVxuXG4udi10ZXh0LWZpZWxkX19kZXRhaWxzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDsgLyogc2FtZSBhcyBoZWlnaHQhICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtdGV4dC1maWVsZFwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1hc2tcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1hc2tcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5tYXNrLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1hc2tcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBrZXk6IF92bS5jb3VudGVyLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTFcIixcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgXCJpcy1pbnZhbGlkXCI6IF92bS52YWxpZGF0aW9uLiRlcnJvcixcbiAgICAgICAgICAgIFwiaXMtdmFsaWRcIjogIV92bS52YWxpZGF0aW9uLiRpbnZhbGlkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGRlbnNlOiBcIlwiLFxuICAgICAgICAgICAgbGFiZWw6IF92bS5sYWJlbCxcbiAgICAgICAgICAgIG91dGxpbmVkOiBcIlwiLFxuICAgICAgICAgICAgbWluOiBfdm0ubWluLFxuICAgICAgICAgICAgbWF4OiBfdm0ubWF4LFxuICAgICAgICAgICAgdHlwZTogX3ZtLnR5cGUsXG4gICAgICAgICAgICByZWFkb25seTogX3ZtLnJlYWRvbmx5LFxuICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZCxcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJuZXctcGFzc3dvcmRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogX3ZtLnVwZGF0ZVZhbHVlLFxuICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS52YWxpZGF0ZVRleHQoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGEsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICBfdm0uZGF0YSA9IHR5cGVvZiAkJHYgPT09IFwic3RyaW5nXCIgPyAkJHYudHJpbSgpIDogJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXRhXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS52YWxpZGF0aW9uc0lucHV0LnNob3dQYXNzd29yZFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiYXBwZW5kXCIsIGNvbG9yOiBcImdyZWVuXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93UGFzc3dvcmQoKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiYXBwZW5kXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLmljb24pICsgXCJcXG4gICAgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS52YWxpZGF0aW9uLiRkaXJ0eVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi0wIHB0LTAgbXktYXV0byBvcmFuZ2UtdGV4dFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICFfdm0udmFsaWRhdGlvbi4kcGFyYW1zLnJlcXVpcmVkXG4gICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICFfdm0udmFsaWRhdGlvbi4kcGFyYW1zLnJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIHsgc3RhdGljQ2xhc3M6IFwicHQtMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMCBtdC0xIHRleHQtbXV0ZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiKENhbXBvIG9wY2lvbmFsKVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uLiRlcnJvciAmJiBfdm0udmFsaWRhdGlvbi4kcGFyYW1zLnJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgeyBzdGF0aWNDbGFzczogXCJwdC0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTAgbXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgQ2FtcG8gcmVxdWVyaWRvLlxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uLiRwYXJhbXMubWluTGVuZ3RoICYmICFfdm0udmFsaWRhdGlvbi5taW5MZW5ndGhcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicGwtMCBtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWluKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgY2Fyw6FjdGVyXFxuICAgICAgICAgIG3DrW5pbW8uXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0udmFsaWRhdGlvbi4kcGFyYW1zLm1heExlbmd0aCAmJiAhX3ZtLnZhbGlkYXRpb24ubWF4TGVuZ3RoXG4gICAgICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInBsLTAgcHItMCBtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWF4KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgY2FyYWN0ZXJlc1xcbiAgICAgICAgICBtw6F4aW1vLlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb24uJHBhcmFtcy5taW5WYWx1ZSAmJiAhX3ZtLnZhbGlkYXRpb24ubWluVmFsdWVcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm1pbikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGVzIGVsIHZhbG9yXFxuICAgICAgICAgIG3DrW5pbW8uXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0udmFsaWRhdGlvbi4kcGFyYW1zLm1heFZhbHVlICYmICFfdm0udmFsaWRhdGlvbi5tYXhWYWx1ZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubWF4KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgZWwgdmFsb3JcXG4gICAgICAgICAgbcOheGltby5cXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uLiRwYXJhbXMuZm9ybWF0ICYmICFfdm0udmFsaWRhdGlvbi5pc1ZhbGlkTnVtYmVyXG4gICAgICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEZvcm1hdG8gaW52w6FsaWRvXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb24uJHBhcmFtcy5pc1ZhbGlkRHVpICYmICFfdm0udmFsaWRhdGlvbi5pc1ZhbGlkRHVpXG4gICAgICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIERVSSBpbnbDoWxpZG9cXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0udmFsaWRhdGlvbi4kcGFyYW1zLmlzVmFsaWROaXQgJiYgIV92bS52YWxpZGF0aW9uLmlzVmFsaWROaXRcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgTklUIGludsOhbGlkb1xcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uLiRwYXJhbXMuaXNWYWxpZElzc3MgJiZcbiAgICAgICAgICAgICAgICAhX3ZtLnZhbGlkYXRpb24uaXNWYWxpZElzc3NcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgSVNTUyBpbnbDoWxpZG9cXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0udmFsaWRhdGlvbi4kcGFyYW1zLmlzVmFsaWRBZnAgJiYgIV92bS52YWxpZGF0aW9uLmlzVmFsaWRBZnBcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgQUZQIGludsOhbGlkb1xcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uLiRwYXJhbXMuaXNWYWxpZENvbmFteXBlSWQgJiZcbiAgICAgICAgICAgICAgICAhX3ZtLnZhbGlkYXRpb24uaXNWYWxpZENvbmFteXBlSWRcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ2LXJvd1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgSUQgZGUgQ29uYW15cGUgaW52w6FsaWRvXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnZhbGlkYXRpb24uJHBhcmFtcy5pc1ZhbGlkTnJjICYmICFfdm0udmFsaWRhdGlvbi5pc1ZhbGlkTnJjXG4gICAgICAgICAgICAgICAgICA/IF9jKFwidi1yb3dcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIE5SQyBpbnbDoWxpZG9cXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0udmFsaWRhdGlvbi4kcGFyYW1zLmVtYWlsICYmICFfdm0udmFsaWRhdGlvbi5lbWFpbFxuICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgRm9ybWF0byBkZSBjb3JyZW9cXG4gICAgICAgICAgZWxlY3Ryw7NuaWNvIGludsOhbGlkby5cXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS52YWxpZGF0aW9uLiRwYXJhbXMuaXNWYWxpZFBhc3N3b3JkICYmXG4gICAgICAgICAgICAgICAgIV92bS52YWxpZGF0aW9uLmlzVmFsaWRQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgPyBfYyhcInYtcm93XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICA4IGNhcmFjdGVyZXMgbcOtbmltby5cXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIDEgbWF5w7pzY3VsYSBtw61uaW1vLlxcbiAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJlcnJvcl9vdXRsaW5lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgMSBtaW7DunNjdWxhIG3DrW5pbW8uXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImVycm9yX291dGxpbmVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAxMyBjYXJhY3RlcmVzIG3DoXhpbW8uXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1taXgvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtdGV4dC1maWVsZC0tb3V0bGluZWQge1xcbiAgYm9yZGVyLWNvbG9yOiAjMTk3NmQyICFpbXBvcnRhbnQ7XFxufVxcbi52LXRleHQtZmllbGQtLW91dGxpbmVkLnYtaW5wdXQtLWlzLWZvY3VzZWQgZmllbGRzZXQsXFxuLnYtdGV4dC1maWVsZC0tb3V0bGluZWQudi1pbnB1dC0taGFzLXN0YXRlIGZpZWxkc2V0IHtcXG4gIGJvcmRlci1jb2xvcjogIzJkNTJhOCAhaW1wb3J0YW50O1xcbn1cXG4udi10ZXh0LWZpZWxkX19kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5tYXRlcmlhbC1pY29ucyB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxucCB7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjBweDsgLyogc2FtZSBhcyBoZWlnaHQhICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0Jhc2VJbnB1dC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXNSQTtFQUNBLGdDQUFBO0FBQ0E7QUFFQTs7RUFFQSxnQ0FBQTtBQUNBO0FBRUE7RUFDQSxhQUFBO0FBQ0E7QUFFQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0E7QUFFQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBLEVBQUEsb0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdj5cXG4gICAgPHYtdGV4dC1maWVsZFxcbiAgICAgIGRlbnNlXFxuICAgICAgOmxhYmVsPVxcXCJsYWJlbFxcXCJcXG4gICAgICBvdXRsaW5lZFxcbiAgICAgIHYtbW9kZWwudHJpbT1cXFwiZGF0YVxcXCJcXG4gICAgICA6Y2xhc3M9XFxcIntcXG4gICAgICAgICdpcy1pbnZhbGlkJzogdmFsaWRhdGlvbi4kZXJyb3IsXFxuICAgICAgICAnaXMtdmFsaWQnOiAhdmFsaWRhdGlvbi4kaW52YWxpZCxcXG4gICAgICB9XFxcIlxcbiAgICAgIDprZXk9XFxcImNvdW50ZXJcXFwiXFxuICAgICAgOm1pbj1cXFwibWluXFxcIlxcbiAgICAgIDptYXg9XFxcIm1heFxcXCJcXG4gICAgICA6dHlwZT1cXFwidHlwZVxcXCJcXG4gICAgICA6cmVhZG9ubHk9XFxcInJlYWRvbmx5XFxcIlxcbiAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuICAgICAgQGlucHV0PVxcXCJ1cGRhdGVWYWx1ZVxcXCJcXG4gICAgICB2LW1hc2s9XFxcIm1hc2tcXFwiXFxuICAgICAgQGtleXVwPVxcXCJ2YWxpZGF0ZVRleHQoKVxcXCJcXG4gICAgICBhdXRvY29tcGxldGU9XFxcIm5ldy1wYXNzd29yZFxcXCJcXG4gICAgICBjbGFzcz1cXFwibWItMVxcXCJcXG4gICAgPlxcbiAgICAgIDx2LWljb25cXG4gICAgICAgIHNsb3Q9XFxcImFwcGVuZFxcXCJcXG4gICAgICAgIGNvbG9yPVxcXCJncmVlblxcXCJcXG4gICAgICAgIHYtaWY9XFxcInZhbGlkYXRpb25zSW5wdXQuc2hvd1Bhc3N3b3JkXFxcIlxcbiAgICAgICAgQGNsaWNrPVxcXCJzaG93UGFzc3dvcmQoKVxcXCJcXG4gICAgICA+XFxuICAgICAgICB7eyBpY29uIH19XFxuICAgICAgPC92LWljb24+XFxuICAgIDwvdi10ZXh0LWZpZWxkPlxcbiAgICA8di1jb250YWluZXIgY2xhc3M9XFxcIm1iLTAgcHQtMCBteS1hdXRvIG9yYW5nZS10ZXh0XFxcIiB2LWlmPVxcXCJ2YWxpZGF0aW9uLiRkaXJ0eVxcXCI+XFxuICAgICAgPHRlbXBsYXRlIHYtaWY9XFxcIiF2YWxpZGF0aW9uLiRwYXJhbXMucmVxdWlyZWRcXFwiPlxcbiAgICAgICAgPHYtcm93IGNsYXNzPVxcXCJwdC0wXFxcIiB2LWlmPVxcXCIhdmFsaWRhdGlvbi4kcGFyYW1zLnJlcXVpcmVkXFxcIj5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm1iLTAgbXQtMSB0ZXh0LW11dGVkXFxcIj4oQ2FtcG8gb3BjaW9uYWwpPC9wPlxcbiAgICAgICAgPC92LXJvdz5cXG4gICAgICA8L3RlbXBsYXRlPlxcbiAgICAgIDx0ZW1wbGF0ZT5cXG4gICAgICAgIDx2LXJvd1xcbiAgICAgICAgICB2LWlmPVxcXCJ2YWxpZGF0aW9uLiRlcnJvciAmJiB2YWxpZGF0aW9uLiRwYXJhbXMucmVxdWlyZWRcXFwiXFxuICAgICAgICAgIGNsYXNzPVxcXCJwdC0wXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibWItMCBtdC0xXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IENhbXBvIHJlcXVlcmlkby5cXG4gICAgICAgICAgPC9wPlxcbiAgICAgICAgPC92LXJvdz5cXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uLiRwYXJhbXMubWluTGVuZ3RoICYmICF2YWxpZGF0aW9uLm1pbkxlbmd0aFxcXCI+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJwbC0wIG10LTFcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4ge3sgbWluIH19IGNhcsOhY3RlclxcbiAgICAgICAgICAgIG3DrW5pbW8uXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvdi1yb3c+XFxuICAgICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbi4kcGFyYW1zLm1heExlbmd0aCAmJiAhdmFsaWRhdGlvbi5tYXhMZW5ndGhcXFwiPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwicGwtMCBwci0wIG10LTFcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4ge3sgbWF4IH19IGNhcmFjdGVyZXNcXG4gICAgICAgICAgICBtw6F4aW1vLlxcbiAgICAgICAgICA8L3A+XFxuICAgICAgICA8L3Ytcm93PlxcbiAgICAgICAgPHYtcm93IHYtaWY9XFxcInZhbGlkYXRpb24uJHBhcmFtcy5taW5WYWx1ZSAmJiAhdmFsaWRhdGlvbi5taW5WYWx1ZVxcXCI+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IHt7IG1pbiB9fSBlcyBlbCB2YWxvclxcbiAgICAgICAgICAgIG3DrW5pbW8uXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvdi1yb3c+XFxuICAgICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbi4kcGFyYW1zLm1heFZhbHVlICYmICF2YWxpZGF0aW9uLm1heFZhbHVlXFxcIj5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm10LTFcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4ge3sgbWF4IH19IGVsIHZhbG9yXFxuICAgICAgICAgICAgbcOheGltby5cXG4gICAgICAgICAgPC9wPlxcbiAgICAgICAgPC92LXJvdz5cXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uLiRwYXJhbXMuZm9ybWF0ICYmICF2YWxpZGF0aW9uLmlzVmFsaWROdW1iZXJcXFwiPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPiBGb3JtYXRvIGludsOhbGlkb1xcbiAgICAgICAgICA8L3A+XFxuICAgICAgICA8L3Ytcm93PlxcbiAgICAgICAgPHYtcm93IHYtaWY9XFxcInZhbGlkYXRpb24uJHBhcmFtcy5pc1ZhbGlkRHVpICYmICF2YWxpZGF0aW9uLmlzVmFsaWREdWlcXFwiPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPiBEVUkgaW52w6FsaWRvXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvdi1yb3c+XFxuICAgICAgICA8di1yb3cgdi1pZj1cXFwidmFsaWRhdGlvbi4kcGFyYW1zLmlzVmFsaWROaXQgJiYgIXZhbGlkYXRpb24uaXNWYWxpZE5pdFxcXCI+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IE5JVCBpbnbDoWxpZG9cXG4gICAgICAgICAgPC9wPlxcbiAgICAgICAgPC92LXJvdz5cXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uLiRwYXJhbXMuaXNWYWxpZElzc3MgJiYgIXZhbGlkYXRpb24uaXNWYWxpZElzc3NcXFwiPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPiBJU1NTIGludsOhbGlkb1xcbiAgICAgICAgICA8L3A+XFxuICAgICAgICA8L3Ytcm93PlxcbiAgICAgICAgPHYtcm93IHYtaWY9XFxcInZhbGlkYXRpb24uJHBhcmFtcy5pc1ZhbGlkQWZwICYmICF2YWxpZGF0aW9uLmlzVmFsaWRBZnBcXFwiPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPiBBRlAgaW52w6FsaWRvXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvdi1yb3c+XFxuICAgICAgICA8di1yb3dcXG4gICAgICAgICAgdi1pZj1cXFwiXFxuICAgICAgICAgICAgdmFsaWRhdGlvbi4kcGFyYW1zLmlzVmFsaWRDb25hbXlwZUlkICYmXFxuICAgICAgICAgICAgIXZhbGlkYXRpb24uaXNWYWxpZENvbmFteXBlSWRcXG4gICAgICAgICAgXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPiBJRCBkZSBDb25hbXlwZSBpbnbDoWxpZG9cXG4gICAgICAgICAgPC9wPlxcbiAgICAgICAgPC92LXJvdz5cXG4gICAgICAgIDx2LXJvdyB2LWlmPVxcXCJ2YWxpZGF0aW9uLiRwYXJhbXMuaXNWYWxpZE5yYyAmJiAhdmFsaWRhdGlvbi5pc1ZhbGlkTnJjXFxcIj5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm10LTFcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT4gTlJDIGludsOhbGlkb1xcbiAgICAgICAgICA8L3A+XFxuICAgICAgICA8L3Ytcm93PlxcbiAgICAgICAgPHYtcm93IHYtaWY9XFxcInZhbGlkYXRpb24uJHBhcmFtcy5lbWFpbCAmJiAhdmFsaWRhdGlvbi5lbWFpbFxcXCI+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+IEZvcm1hdG8gZGUgY29ycmVvXFxuICAgICAgICAgICAgZWxlY3Ryw7NuaWNvIGludsOhbGlkby5cXG4gICAgICAgICAgPC9wPlxcbiAgICAgICAgPC92LXJvdz5cXG4gICAgICAgIDx2LXJvd1xcbiAgICAgICAgICB2LWlmPVxcXCJcXG4gICAgICAgICAgICB2YWxpZGF0aW9uLiRwYXJhbXMuaXNWYWxpZFBhc3N3b3JkICYmICF2YWxpZGF0aW9uLmlzVmFsaWRQYXNzd29yZFxcbiAgICAgICAgICBcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+XFxuICAgICAgICAgICAgOCBjYXJhY3RlcmVzIG3DrW5pbW8uXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcIm10LTFcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29uc1xcXCI+ZXJyb3Jfb3V0bGluZTwvaT5cXG4gICAgICAgICAgICAxIG1hecO6c2N1bGEgbcOtbmltby5cXG4gICAgICAgICAgPC9wPlxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwibXQtMVxcXCI+XFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zXFxcIj5lcnJvcl9vdXRsaW5lPC9pPlxcbiAgICAgICAgICAgIDEgbWluw7pzY3VsYSBtw61uaW1vLlxcbiAgICAgICAgICA8L3A+XFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJtdC0xXFxcIj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnNcXFwiPmVycm9yX291dGxpbmU8L2k+XFxuICAgICAgICAgICAgMTMgY2FyYWN0ZXJlcyBtw6F4aW1vLlxcbiAgICAgICAgICA8L3A+XFxuICAgICAgICA8L3Ytcm93PlxcbiAgICAgIDwvdGVtcGxhdGU+XFxuICAgIDwvdi1jb250YWluZXI+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcXG4gIGRhdGEoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgZGF0YTogXFxcIlxcXCIsXFxuICAgICAgY291bnRlcjogMCxcXG4gICAgICBpY29uOiBcXFwidmlzaWJpbGl0eVxcXCIsXFxuICAgIH07XFxuICB9LFxcbiAgcHJvcHM6IHtcXG4gICAgbGFiZWw6IHtcXG4gICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgZGVmYXVsdDogXFxcIlxcXCIsXFxuICAgIH0sXFxuICAgIHZhbGlkYXRpb246IHtcXG4gICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgZGVmYXVsdDoge30sXFxuICAgIH0sXFxuICAgIHZhbGlkYXRpb25UZXh0VHlwZToge1xcbiAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICBkZWZhdWx0OiBcXFwibm9uZVxcXCIsXFxuICAgIH0sXFxuICAgIHJlcXVpcmVkOiB7XFxuICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgfSxcXG4gICAgdHlwZToge1xcbiAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICBkZWZhdWx0OiBcXFwidGV4dFxcXCIsXFxuICAgIH0sXFxuICAgIG1hc2s6IHtcXG4gICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgZGVmYXVsdDogXFxcIlxcXCIsXFxuICAgIH0sXFxuICAgIHJlYWRvbmx5OiB7XFxuICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgfSxcXG4gICAgZGlzYWJsZWQ6IHtcXG4gICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICB9LFxcbiAgICB2YWxpZGF0aW9uc0lucHV0OiB7XFxuICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgICBmb3JtYXQ6IGZhbHNlLFxcbiAgICAgICAgICBtaW5MZW5ndGg6IGZhbHNlLFxcbiAgICAgICAgICBtYXhMZW5ndGg6IGZhbHNlLFxcbiAgICAgICAgICBtaW5WYWx1ZTogZmFsc2UsXFxuICAgICAgICAgIG1heFZhbHVlOiBmYWxzZSxcXG4gICAgICAgICAgaXNWYWxpZER1aTogZmFsc2UsXFxuICAgICAgICAgIGlzVmFsaWROaXQ6IGZhbHNlLFxcbiAgICAgICAgICBpc1ZhbGlkSXNzczogZmFsc2UsXFxuICAgICAgICAgIGlzVmFsaWRBZnA6IGZhbHNlLFxcbiAgICAgICAgICBpc1ZhbGlkQ29uYW15cGVJZDogZmFsc2UsXFxuICAgICAgICAgIGlzVmFsaWROcmM6IGZhbHNlLFxcbiAgICAgICAgICBlbWFpbDogZmFsc2UsXFxuICAgICAgICAgIHNob3dQYXNzd29yZDogZmFsc2UsXFxuICAgICAgICB9O1xcbiAgICAgIH0sXFxuICAgIH0sXFxuICAgIG1pbjoge1xcbiAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICBkZWZhdWx0OiAwLFxcbiAgICB9LFxcbiAgICBtYXg6IHtcXG4gICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgZGVmYXVsdDogMTUwLFxcbiAgICB9LFxcbiAgfSxcXG4gIHdhdGNoOiB7XFxuICAgIHR5cGUodmFsKSB7XFxuICAgICAgdGhpcy5pY29uID0gdGhpcy50eXBlID09IFxcXCJwYXNzd29yZFxcXCIgPyBcXFwidmlzaWJpbGl0eVxcXCIgOiBcXFwidmlzaWJpbGl0eV9vZmZcXFwiO1xcbiAgICB9LFxcbiAgfSxcXG4gIG1vdW50ZWQoKSB7XFxuICAgIHRoaXMuZGF0YSA9IHRoaXMuJGF0dHJzLnZhbHVlO1xcbiAgICB0aGlzLnZhbGlkYXRpb24uJHJlc2V0KCk7XFxuICB9LFxcbiAgdXBkYXRlZCgpIHtcXG4gICAgdGhpcy5kYXRhID0gdGhpcy52YWxpZGF0aW9uLiRtb2RlbDtcXG4gIH0sXFxuICBtZXRob2RzOiB7XFxuICAgIHVwZGF0ZVZhbHVlKCkge1xcbiAgICAgIHRoaXMudmFsaWRhdGlvbi4kbW9kZWwgPSB0aGlzLmRhdGE7XFxuICAgICAgdGhpcy4kZW1pdChcXFwiaW5wdXRcXFwiLCB0aGlzLmRhdGEpO1xcbiAgICB9LFxcblxcbiAgICB2YWxpZGF0ZVRleHQoKSB7XFxuICAgICAgaWYgKHRoaXMuZGF0YSkge1xcbiAgICAgICAgc3dpdGNoICh0aGlzLnZhbGlkYXRpb25UZXh0VHlwZSkge1xcbiAgICAgICAgICBjYXNlIFxcXCJkZWZhdWx0XFxcIjpcXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShcXG4gICAgICAgICAgICAgIC9bXkEtWsOgw6jDrMOyw7nDgMOIw4zDksOZw6HDqcOtw7PDusO9w4HDicONw5PDmsOxXFxcXCcgJ10vZ2ksXFxuICAgICAgICAgICAgICBcXFwiXFxcIlxcbiAgICAgICAgICAgICk7XFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL14oW2EtekEtWjAtOV0pXFxcXDF7NH0vZ2ksIFxcXCJcXFwiKTtcXG4gICAgICAgICAgICBicmVhaztcXG4gICAgICAgICAgY2FzZSBcXFwib25seS1sZXR0ZXJzXFxcIjpcXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZShcXG4gICAgICAgICAgICAgIC9bXkEtWsOgw6jDrMOyw7nDgMOIw4zDksOZw6HDqcOtw7PDusO9w4HDicONw5PDmsOxXFxcXCcgJ10vZ2ksXFxuICAgICAgICAgICAgICBcXFwiXFxcIlxcbiAgICAgICAgICAgICk7XFxuICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgIGNhc2UgXFxcIm9ubHktbnVtYmVyc1xcXCI6XFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL1teMC05XFxcXC1dL2csIFxcXCJcXFwiKTtcXG4gICAgICAgICAgICBicmVhaztcXG4gICAgICAgICAgY2FzZSBcXFwibm9uZVxcXCI6XFxuICAgICAgICAgICAgYnJlYWs7XFxuICAgICAgICAgIGNhc2UgXFxcIm9ubHktcmVwZWF0c1xcXCI6XFxuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoL14oW2EtekEtWjAtOV0pXFxcXDF7NH0vZywgXFxcIlxcXCIpO1xcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgICBkZWZhdWx0OlxcbiAgICAgICAgICAgIGJyZWFrO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICB0aGlzLnZhbGlkYXRpb24uJG1vZGVsID0gdGhpcy5kYXRhO1xcbiAgICAgIHRoaXMuJGVtaXQoXFxcImtleXVwXFxcIiwgdGhpcy5kYXRhKTtcXG4gICAgfSxcXG5cXG4gICAgc2hvd1Bhc3N3b3JkKCkge1xcbiAgICAgIGNvbnN0IHNob3cgPSB0aGlzLnR5cGUgPT0gXFxcInBhc3N3b3JkXFxcIiA/IFxcXCJ0ZXh0XFxcIiA6IFxcXCJwYXNzd29yZFxcXCI7XFxuXFxuICAgICAgdGhpcy4kZW1pdChcXFwidXBkYXRlLXBhc3N3b3JkXFxcIiwgeyBzaG93IH0pO1xcbiAgICB9LFxcbiAgfSxcXG59O1xcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG4udi10ZXh0LWZpZWxkLS1vdXRsaW5lZCB7XFxuICBib3JkZXItY29sb3I6ICMxOTc2ZDIgIWltcG9ydGFudDtcXG59XFxuXFxuLnYtdGV4dC1maWVsZC0tb3V0bGluZWQudi1pbnB1dC0taXMtZm9jdXNlZCBmaWVsZHNldCxcXG4udi10ZXh0LWZpZWxkLS1vdXRsaW5lZC52LWlucHV0LS1oYXMtc3RhdGUgZmllbGRzZXQge1xcbiAgYm9yZGVyLWNvbG9yOiAjMmQ1MmE4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi52LXRleHQtZmllbGRfX2RldGFpbHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1hdGVyaWFsLWljb25zIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4OyAvKiBzYW1lIGFzIGhlaWdodCEgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtbWl4L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTkudXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOS51c2VbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9CYXNlSW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2UyYmNmNjEmbGFuZz1jc3MmXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Jhc2VJbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2UyYmNmNjEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQmFzZUlucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQmFzZUlucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9CYXNlSW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2UyYmNmNjEmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEluZm9ybcOhdGljYVxcXFxEb2N1bWVudHNcXFxccHJvamVjdHNNQ1xcXFxTSVNFLUNVU0NBLTIwMjItbWFpblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3ZTJiY2Y2MScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3ZTJiY2Y2MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3ZTJiY2Y2MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQmFzZUlucHV0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTJiY2Y2MSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3ZTJiY2Y2MScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0Jhc2VJbnB1dC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZUlucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2VJbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Jhc2VJbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2UyYmNmNjEmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sYXJhdmVsLW1peC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05LnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTkudXNlWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQmFzZUlucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdlMmJjZjYxJmxhbmc9Y3NzJlwiIl0sIm5hbWVzIjpbImluaGVyaXRBdHRycyIsImRhdGEiLCJjb3VudGVyIiwiaWNvbiIsInByb3BzIiwibGFiZWwiLCJ0eXBlIiwidmFsaWRhdGlvbiIsInZhbGlkYXRpb25UZXh0VHlwZSIsInJlcXVpcmVkIiwibWFzayIsInJlYWRvbmx5IiwiZGlzYWJsZWQiLCJ2YWxpZGF0aW9uc0lucHV0IiwiZm9ybWF0IiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImlzVmFsaWREdWkiLCJpc1ZhbGlkTml0IiwiaXNWYWxpZElzc3MiLCJpc1ZhbGlkQWZwIiwiaXNWYWxpZENvbmFteXBlSWQiLCJpc1ZhbGlkTnJjIiwiZW1haWwiLCJzaG93UGFzc3dvcmQiLCJtaW4iLCJtYXgiLCJ3YXRjaCIsInZhbCIsIm1vdW50ZWQiLCJ1cGRhdGVkIiwibWV0aG9kcyIsInVwZGF0ZVZhbHVlIiwidmFsaWRhdGVUZXh0Iiwic2hvdyIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJkaXJlY3RpdmVzIiwibmFtZSIsInJhd05hbWUiLCJ2YWx1ZSIsImV4cHJlc3Npb24iLCJrZXkiLCJzdGF0aWNDbGFzcyIsIiRlcnJvciIsIiRpbnZhbGlkIiwiYXR0cnMiLCJkZW5zZSIsIm91dGxpbmVkIiwiYXV0b2NvbXBsZXRlIiwib24iLCJpbnB1dCIsImtleXVwIiwiJGV2ZW50IiwibW9kZWwiLCJjYWxsYmFjayIsIiQkdiIsInRyaW0iLCJzbG90IiwiY29sb3IiLCJjbGljayIsIl92IiwiX3MiLCJfZSIsIiRkaXJ0eSIsIiRwYXJhbXMiLCJpc1ZhbGlkTnVtYmVyIiwiaXNWYWxpZFBhc3N3b3JkIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCJdLCJzb3VyY2VSb290IjoiIn0=