"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_base-components_AlertTimeOut_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertTimeOut.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertTimeOut.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      // 45000
      timeOut: 1785000,
      // 29.75 mins
      timeOutDialog: false,
      showDialog: false,
      reloading: 15,
      counterReverse: false
    };
  },
  props: {
    redirect: {
      type: Boolean,
      "default": false
    }
  },
  watch: {
    reloading: function reloading(val) {
      if (val <= 0) {
        window.location = "/";
      }
    },
    redirect: function redirect(val) {
      if (val) {
        this.loadHome();
      }
    }
  },
  mounted: function mounted() {
    if (this.redirect) {
      this.loadHome();
      return;
    }

    this.startTimer();
  },
  methods: {
    startTimer: function startTimer() {
      var _this = this;

      setTimeout(function () {
        _this.counterReverse = true;
        _this.timeOutDialog = true;
        setInterval(function () {
          _this.reloading -= 1;

          _this.deleteCookies();
        }, 1000);
      }, this.timeOut);
    },
    loadHome: function loadHome() {
      this.counterReverse = false;
      this.timeOutDialog = true;
    },
    redirectHome: function redirectHome() {
      this.deleteCookies();
      this.timeOutDialog = false;
      window.location = "/";
    },
    deleteCookies: function deleteCookies() {
      var allCookies = document.cookie.split(";"); // The "expire" attribute of every cookie is
      // Set to "Thu, 01 Jan 1970 00:00:00 GMT"

      for (var i = 0; i < allCookies.length; i++) {
        document.cookie = allCookies[i] + "=;expires=" + new Date(0).toUTCString();
      }
    },
    reloadPage: function reloadPage() {
      location.reload();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertTimeOut.vue?vue&type=template&id=029656e6&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertTimeOut.vue?vue&type=template&id=029656e6& ***!
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

  return _c("div", {
    attrs: {
      "data-app": ""
    }
  }, [_c("v-dialog", {
    attrs: {
      width: "500",
      persistent: ""
    },
    model: {
      value: _vm.timeOutDialog,
      callback: function callback($$v) {
        _vm.timeOutDialog = $$v;
      },
      expression: "timeOutDialog"
    }
  }, [_c("v-card", [_c("v-container", [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "12",
      align: "center"
    }
  }, [_c("h2", {
    staticClass: "black-secondary mt-2"
  }, [_vm._v("Sesión expirada")]), _vm._v(" "), _c("p", [_vm._v("\n              Su sesión se ha cerrado automáticamente debido a inactividad.\n            ")]), _vm._v(" "), _vm.counterReverse ? _c("p", [_vm._v("\n              Redirigiendo en: " + _vm._s(_vm.reloading) + " segs.\n            ")]) : _vm._e()])], 1)], 1), _vm._v(" "), _c("v-card-actions", {
    attrs: {
      align: "center"
    }
  }, [_c("v-spacer"), _vm._v(" "), _c("v-btn", {
    staticClass: "btn btn-normal mb-2",
    attrs: {
      align: "center"
    },
    on: {
      click: function click($event) {
        return _vm.reloadPage();
      }
    }
  }, [_vm._v("\n          Recargar\n        ")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-btn", {
    staticClass: "btn btn-normal-close mb-2",
    attrs: {
      align: "center"
    },
    on: {
      click: function click($event) {
        _vm.timeOutDialog = false;

        _vm.$emit("redirect", false);
      }
    }
  }, [_vm._v("\n          Cancelar\n        ")]), _vm._v(" "), _c("v-spacer")], 1)], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/base-components/AlertTimeOut.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/base-components/AlertTimeOut.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlertTimeOut_vue_vue_type_template_id_029656e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertTimeOut.vue?vue&type=template&id=029656e6& */ "./resources/js/components/base-components/AlertTimeOut.vue?vue&type=template&id=029656e6&");
/* harmony import */ var _AlertTimeOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertTimeOut.vue?vue&type=script&lang=js& */ "./resources/js/components/base-components/AlertTimeOut.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertTimeOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertTimeOut_vue_vue_type_template_id_029656e6___WEBPACK_IMPORTED_MODULE_0__.render,
  _AlertTimeOut_vue_vue_type_template_id_029656e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/base-components/AlertTimeOut.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/base-components/AlertTimeOut.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/base-components/AlertTimeOut.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertTimeOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlertTimeOut.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertTimeOut.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertTimeOut_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/base-components/AlertTimeOut.vue?vue&type=template&id=029656e6&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/base-components/AlertTimeOut.vue?vue&type=template&id=029656e6& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertTimeOut_vue_vue_type_template_id_029656e6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertTimeOut_vue_vue_type_template_id_029656e6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertTimeOut_vue_vue_type_template_id_029656e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlertTimeOut.vue?vue&type=template&id=029656e6& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertTimeOut.vue?vue&type=template&id=029656e6&");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfYmFzZS1jb21wb25lbnRzX0FsZXJ0VGltZU91dF92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQThDQSxpRUFBZTtFQUNmQSxJQURBLGtCQUNBO0lBQ0E7TUFDQTtNQUNBQyxnQkFGQTtNQUVBO01BQ0FDLG9CQUhBO01BSUFDLGlCQUpBO01BS0FDLGFBTEE7TUFNQUM7SUFOQTtFQVFBLENBVkE7RUFZQUM7SUFDQUM7TUFDQUMsYUFEQTtNQUVBO0lBRkE7RUFEQSxDQVpBO0VBbUJBQztJQUNBTCxTQURBLHFCQUNBTSxHQURBLEVBQ0E7TUFDQTtRQUNBQztNQUNBO0lBQ0EsQ0FMQTtJQU1BSixRQU5BLG9CQU1BRyxHQU5BLEVBTUE7TUFDQTtRQUNBO01BQ0E7SUFDQTtFQVZBLENBbkJBO0VBZ0NBRSxPQWhDQSxxQkFnQ0E7SUFDQTtNQUNBO01BQ0E7SUFDQTs7SUFDQTtFQUNBLENBdENBO0VBdUNBQztJQUNBQyxVQURBLHdCQUNBO01BQUE7O01BQ0FDO1FBQ0E7UUFDQTtRQUNBQztVQUNBOztVQUNBO1FBQ0EsQ0FIQSxFQUdBLElBSEE7TUFJQSxDQVBBLEVBT0EsWUFQQTtJQVFBLENBVkE7SUFZQUMsUUFaQSxzQkFZQTtNQUNBO01BQ0E7SUFDQSxDQWZBO0lBaUJBQyxZQWpCQSwwQkFpQkE7TUFDQTtNQUNBO01BQ0FQO0lBQ0EsQ0FyQkE7SUF1QkFRLGFBdkJBLDJCQXVCQTtNQUNBLDRDQURBLENBR0E7TUFDQTs7TUFDQTtRQUNBQyxrQkFDQUMsd0RBREE7TUFEQTtJQUdBLENBL0JBO0lBaUNBQyxVQWpDQSx3QkFpQ0E7TUFDQUM7SUFDQTtFQW5DQTtBQXZDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBLElBQUlDLE1BQU0sR0FBRyxTQUFTQSxNQUFULEdBQWtCO0VBQzdCLElBQUlDLEdBQUcsR0FBRyxJQUFWO0VBQUEsSUFDRUMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVUQsRUFEakI7O0VBRUEs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QUFVLFVBQVYsRUFBc0IsS0FBdEI7TUFDRDtJQUpDO0VBSE4sQ0FGQSxFQVlBLENBQUN0QixHQUFHLENBQUNnQixFQUFKLENBQU8sZ0NBQVAsQ0FBRCxDQVpBLENBbkJKLEVBaUNFaEIsR0FBRyxDQUFDZ0IsRUFBSixDQUFPLEdBQVAsQ0FqQ0YsRUFrQ0VmLEVBQUUsQ0FBQyxVQUFELENBbENKLENBSEEsRUF1Q0EsQ0F2Q0EsQ0E5Q0osQ0FGQSxFQTBGQSxDQTFGQSxDQURKLENBWkEsRUEwR0EsQ0ExR0EsQ0FESixDQUhPLEVBaUhQLENBakhPLENBQVQ7QUFtSEQsQ0F0SEQ7O0FBdUhBLElBQUlzQixlQUFlLEdBQUcsRUFBdEI7QUFDQXhCLE1BQU0sQ0FBQ3lCLGFBQVAsR0FBdUIsSUFBdkI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hIMkY7QUFDM0I7QUFDTDs7O0FBRzNEO0FBQ0EsQ0FBZ0c7QUFDaEcsZ0JBQWdCLHVHQUFVO0FBQzFCLEVBQUUsa0ZBQU07QUFDUixFQUFFLG9GQUFNO0FBQ1IsRUFBRSw2RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ3RDaU0sQ0FBQyxpRUFBZSx1TUFBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9BbGVydFRpbWVPdXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9BbGVydFRpbWVPdXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9BbGVydFRpbWVPdXQudnVlPzI3NzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0FsZXJ0VGltZU91dC52dWU/MjUzNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQWxlcnRUaW1lT3V0LnZ1ZT9iY2M3Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBkYXRhLWFwcD5cbiAgICA8di1kaWFsb2cgdi1tb2RlbD1cInRpbWVPdXREaWFsb2dcIiB3aWR0aD1cIjUwMFwiIHBlcnNpc3RlbnQ+XG4gICAgICA8di1jYXJkPlxuICAgICAgICA8di1jb250YWluZXI+XG4gICAgICAgICAgPHYtcm93PlxuICAgICAgICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiMTJcIiBtZD1cIjEyXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYmxhY2stc2Vjb25kYXJ5IG10LTJcIj5TZXNpw7NuIGV4cGlyYWRhPC9oMj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgU3Ugc2VzacOzbiBzZSBoYSBjZXJyYWRvIGF1dG9tw6F0aWNhbWVudGUgZGViaWRvIGEgaW5hY3RpdmlkYWQuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgdi1pZj1cImNvdW50ZXJSZXZlcnNlXCI+XG4gICAgICAgICAgICAgICAgUmVkaXJpZ2llbmRvIGVuOiB7eyByZWxvYWRpbmcgfX0gc2Vncy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICA8L3Ytcm93PlxuICAgICAgICA8L3YtY29udGFpbmVyPlxuXG4gICAgICAgIDx2LWNhcmQtYWN0aW9ucyBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW5vcm1hbCBtYi0yXCJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgIEBjbGljaz1cInJlbG9hZFBhZ2UoKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVjYXJnYXJcbiAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW5vcm1hbC1jbG9zZSBtYi0yXCJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgIEBjbGljaz1cIlxuICAgICAgICAgICAgICB0aW1lT3V0RGlhbG9nID0gZmFsc2U7XG4gICAgICAgICAgICAgICRlbWl0KCdyZWRpcmVjdCcsIGZhbHNlKTtcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2FuY2VsYXJcbiAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICAgICAgPC92LWNhcmQ+XG4gICAgPC92LWRpYWxvZz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyA0NTAwMFxuICAgICAgdGltZU91dDogMTc4NTAwMCwgLy8gMjkuNzUgbWluc1xuICAgICAgdGltZU91dERpYWxvZzogZmFsc2UsXG4gICAgICBzaG93RGlhbG9nOiBmYWxzZSxcbiAgICAgIHJlbG9hZGluZzogMTUsXG4gICAgICBjb3VudGVyUmV2ZXJzZTogZmFsc2UsXG4gICAgfTtcbiAgfSxcblxuICBwcm9wczoge1xuICAgIHJlZGlyZWN0OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIHJlbG9hZGluZyh2YWwpIHtcbiAgICAgIGlmICh2YWwgPD0gMCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9cIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIHJlZGlyZWN0KHZhbCkge1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICB0aGlzLmxvYWRIb21lKCk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIGlmICh0aGlzLnJlZGlyZWN0KSB7XG4gICAgICB0aGlzLmxvYWRIb21lKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc3RhcnRUaW1lcigpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvdW50ZXJSZXZlcnNlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aW1lT3V0RGlhbG9nID0gdHJ1ZTtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVsb2FkaW5nIC09IDE7XG4gICAgICAgICAgdGhpcy5kZWxldGVDb29raWVzKCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSwgdGhpcy50aW1lT3V0KTtcbiAgICB9LFxuXG4gICAgbG9hZEhvbWUoKSB7XG4gICAgICB0aGlzLmNvdW50ZXJSZXZlcnNlID0gZmFsc2U7XG4gICAgICB0aGlzLnRpbWVPdXREaWFsb2cgPSB0cnVlO1xuICAgIH0sXG5cbiAgICByZWRpcmVjdEhvbWUoKSB7XG4gICAgICB0aGlzLmRlbGV0ZUNvb2tpZXMoKTtcbiAgICAgIHRoaXMudGltZU91dERpYWxvZyA9IGZhbHNlO1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvXCI7XG4gICAgfSxcblxuICAgIGRlbGV0ZUNvb2tpZXMoKSB7XG4gICAgICBsZXQgYWxsQ29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XG5cbiAgICAgIC8vIFRoZSBcImV4cGlyZVwiIGF0dHJpYnV0ZSBvZiBldmVyeSBjb29raWUgaXNcbiAgICAgIC8vIFNldCB0byBcIlRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UXCJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsQ29va2llcy5sZW5ndGg7IGkrKylcbiAgICAgICAgZG9jdW1lbnQuY29va2llID1cbiAgICAgICAgICBhbGxDb29raWVzW2ldICsgXCI9O2V4cGlyZXM9XCIgKyBuZXcgRGF0ZSgwKS50b1VUQ1N0cmluZygpO1xuICAgIH0sXG5cbiAgICByZWxvYWRQYWdlKCkge1xuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgYXR0cnM6IHsgXCJkYXRhLWFwcFwiOiBcIlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgd2lkdGg6IFwiNTAwXCIsIHBlcnNpc3RlbnQ6IFwiXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS50aW1lT3V0RGlhbG9nLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnRpbWVPdXREaWFsb2cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInRpbWVPdXREaWFsb2dcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxhY2stc2Vjb25kYXJ5IG10LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2VzacOzbiBleHBpcmFkYVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFN1IHNlc2nDs24gc2UgaGEgY2VycmFkbyBhdXRvbcOhdGljYW1lbnRlIGRlYmlkbyBhIGluYWN0aXZpZGFkLlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jb3VudGVyUmV2ZXJzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBSZWRpcmlnaWVuZG8gZW46IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucmVsb2FkaW5nKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBzZWdzLlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LWNhcmQtYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgYWxpZ246IFwiY2VudGVyXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tbm9ybWFsIG1iLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbG9hZFBhZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIFJlY2FyZ2FyXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tbm9ybWFsLWNsb3NlIG1iLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udGltZU91dERpYWxvZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInJlZGlyZWN0XCIsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIENhbmNlbGFyXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FsZXJ0VGltZU91dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDI5NjU2ZTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWxlcnRUaW1lT3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWxlcnRUaW1lT3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSW5mb3Jtw6F0aWNhXFxcXERvY3VtZW50c1xcXFxwcm9qZWN0c01DXFxcXFNJU0UtQ1VTQ0EtMjAyMi1tYWluXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzAyOTY1NmU2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAyOTY1NmU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAyOTY1NmU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BbGVydFRpbWVPdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyOTY1NmU2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAyOTY1NmU2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQWxlcnRUaW1lT3V0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbGVydFRpbWVPdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWxlcnRUaW1lT3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWxlcnRUaW1lT3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMjk2NTZlNiZcIiJdLCJuYW1lcyI6WyJkYXRhIiwidGltZU91dCIsInRpbWVPdXREaWFsb2ciLCJzaG93RGlhbG9nIiwicmVsb2FkaW5nIiwiY291bnRlclJldmVyc2UiLCJwcm9wcyIsInJlZGlyZWN0IiwidHlwZSIsIndhdGNoIiwidmFsIiwid2luZG93IiwibW91bnRlZCIsIm1ldGhvZHMiLCJzdGFydFRpbWVyIiwic2V0VGltZW91dCIsInNldEludGVydmFsIiwibG9hZEhvbWUiLCJyZWRpcmVjdEhvbWUiLCJkZWxldGVDb29raWVzIiwiZG9jdW1lbnQiLCJhbGxDb29raWVzIiwicmVsb2FkUGFnZSIsImxvY2F0aW9uIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsImF0dHJzIiwid2lkdGgiLCJwZXJzaXN0ZW50IiwibW9kZWwiLCJ2YWx1ZSIsImNhbGxiYWNrIiwiJCR2IiwiZXhwcmVzc2lvbiIsImNvbHMiLCJzbSIsIm1kIiwiYWxpZ24iLCJzdGF0aWNDbGFzcyIsIl92IiwiX3MiLCJfZSIsIm9uIiwiY2xpY2siLCIkZXZlbnQiLCIkZW1pdCIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiXSwic291cmNlUm9vdCI6IiJ9