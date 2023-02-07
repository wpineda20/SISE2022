"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_base-components_AlertDialog_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertDialog.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertDialog.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      titleCard: "",
      totalDots: 4,
      counterDots: 0,
      textDots: "",
      interval: ""
    };
  },
  props: {
    dialog: {
      type: Boolean,
      "default": true
    },
    text: {
      type: String,
      "default": ""
    },
    intervalTime: {
      type: Number,
      "default": 500
    }
  },
  mounted: function mounted() {
    this.intervalDots();
  },
  update: function update() {
    window.clearInterval(this.interval);
    this.intervalDots();
  },
  methods: {
    intervalDots: function intervalDots() {
      var _this = this;

      this.interval = setInterval(function () {
        if (_this.counterDots === _this.totalDots) {
          _this.counterDots = 0;
          _this.textDots = "";
        } else {
          _this.textDots += ".";
        }

        _this.titleCard = _this.text + _this.textDots;
        _this.counterDots++;
      }, this.intervalTime);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertDialog.vue?vue&type=template&id=40acffa8&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertDialog.vue?vue&type=template&id=40acffa8& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("v-dialog", {
    attrs: {
      width: "500",
      persistent: ""
    },
    model: {
      value: _vm.dialog,
      callback: function callback($$v) {
        _vm.dialog = $$v;
      },
      expression: "dialog"
    }
  }, [_c("v-card", [_c("v-card-text", [_c("loader"), _vm._v(" "), _c("h4", {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.titleCard))])], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/base-components/AlertDialog.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/base-components/AlertDialog.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlertDialog_vue_vue_type_template_id_40acffa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlertDialog.vue?vue&type=template&id=40acffa8& */ "./resources/js/components/base-components/AlertDialog.vue?vue&type=template&id=40acffa8&");
/* harmony import */ var _AlertDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlertDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/base-components/AlertDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlertDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlertDialog_vue_vue_type_template_id_40acffa8___WEBPACK_IMPORTED_MODULE_0__.render,
  _AlertDialog_vue_vue_type_template_id_40acffa8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/base-components/AlertDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/base-components/AlertDialog.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/base-components/AlertDialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlertDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/base-components/AlertDialog.vue?vue&type=template&id=40acffa8&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/base-components/AlertDialog.vue?vue&type=template&id=40acffa8& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDialog_vue_vue_type_template_id_40acffa8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDialog_vue_vue_type_template_id_40acffa8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDialog_vue_vue_type_template_id_40acffa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlertDialog.vue?vue&type=template&id=40acffa8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertDialog.vue?vue&type=template&id=40acffa8&");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfYmFzZS1jb21wb25lbnRzX0FsZXJ0RGlhbG9nX3Z1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBWUEsaUVBQWU7RUFDZkEsSUFEQSxrQkFDQTtJQUNBO01BQ0FDLGFBREE7TUFFQUMsWUFGQTtNQUdBQyxjQUhBO01BSUFDLFlBSkE7TUFLQUM7SUFMQTtFQU9BLENBVEE7RUFVQUM7SUFDQUM7TUFDQUMsYUFEQTtNQUVBO0lBRkEsQ0FEQTtJQUtBQztNQUNBRCxZQURBO01BRUE7SUFGQSxDQUxBO0lBU0FFO01BQ0FGLFlBREE7TUFFQTtJQUZBO0VBVEEsQ0FWQTtFQXlCQUcsT0F6QkEscUJBeUJBO0lBQ0E7RUFDQSxDQTNCQTtFQTRCQUMsTUE1QkEsb0JBNEJBO0lBQ0FDO0lBQ0E7RUFDQSxDQS9CQTtFQWdDQUM7SUFDQUMsWUFEQSwwQkFDQTtNQUFBOztNQUNBO1FBQ0E7VUFDQTtVQUNBO1FBQ0EsQ0FIQSxNQUdBO1VBQ0E7UUFDQTs7UUFDQTtRQUNBO01BQ0EsQ0FUQSxFQVNBLGlCQVRBO0lBVUE7RUFaQTtBQWhDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWkEsSUFBSUMsTUFBTSxHQUFHLFNBQVNBLE1BQVQsR0FBa0I7RUFDN0IsSUFBSUMsR0FBRyxHQUFHLElBQVY7RUFBQSxJQUNFQyxFQUFFLEdBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVRCxFQURqQjs7RUFFQSxPQUFPQSxFQUFFLENBQ1AsVUFETyxFQUVQO0lBQ0VFLEtBQUssRUFBRTtNQUFFQyxLQUFLLEVBQUUsS0FBVDtNQUFnQkMsVUFBVSxFQUFFO0lBQTVCLENBRFQ7SUFFRUMsS0FBSyxFQUFFO01BQ0xDLEtBQUssRUFBRVAsR0FBRyxDQUFDVixNQUROO01BRUxrQixRQUFRLEVBQUUsa0JBQVVDLEdBQVYsRUFBZTtRQUN2QlQsR0FBRyxDQUFDVixNQUFKLEdBQWFtQixHQUFiO01BQ0QsQ0FKSTtNQUtMQyxVQUFVLEVBQUU7SUFMUDtFQUZULENBRk8sRUFZUCxDQUNFVCxFQUFFLENBQ0EsUUFEQSxFQUVBLENBQ0VBLEVBQUUsQ0FDQSxhQURBLEVBRUEsQ0FDRUEsRUFBRSxDQUFDLFFBQUQsQ0FESixFQUVFRCxHQUFHLENBQUNXLEVBQUosQ0FBTyxHQUFQLENBRkYsRUFHRVYsRUFBRSxDQUFDLElBQUQsRUFBTztJQUFFVyxXQUFXLEVBQUU7RUFBZixDQUFQLEVBQXVDLENBQ3ZDWixHQUFHLENBQUNXLEVBQUosQ0FBT1gsR0FBRyxDQUFDYSxFQUFKLENBQU9iLEdBQUcsQ0FBQ2hCLFNBQVgsQ0FBUCxDQUR1QyxDQUF2QyxDQUhKLENBRkEsRUFTQSxDQVRBLENBREosQ0FGQSxFQWVBLENBZkEsQ0FESixDQVpPLEVBK0JQLENBL0JPLENBQVQ7QUFpQ0QsQ0FwQ0Q7O0FBcUNBLElBQUk4QixlQUFlLEdBQUcsRUFBdEI7QUFDQWYsTUFBTSxDQUFDZ0IsYUFBUCxHQUF1QixJQUF2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEMwRjtBQUMzQjtBQUNMOzs7QUFHMUQ7QUFDQSxDQUFnRztBQUNoRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSxpRkFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDdENnTSxDQUFDLGlFQUFlLHNNQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0FsZXJ0RGlhbG9nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQWxlcnREaWFsb2cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9BbGVydERpYWxvZy52dWU/ZTA3NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQWxlcnREaWFsb2cudnVlPzIwZjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0FsZXJ0RGlhbG9nLnZ1ZT84MzYyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8di1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1wiIHdpZHRoPVwiNTAwXCIgcGVyc2lzdGVudD5cclxuICAgIDx2LWNhcmQ+XHJcbiAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICA8bG9hZGVyIC8+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwidGV4dC1jZW50ZXJcIj57eyB0aXRsZUNhcmQgfX08L2g0PlxyXG4gICAgICA8L3YtY2FyZC10ZXh0PlxyXG4gICAgPC92LWNhcmQ+XHJcbiAgPC92LWRpYWxvZz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGVDYXJkOiBcIlwiLFxyXG4gICAgICB0b3RhbERvdHM6IDQsXHJcbiAgICAgIGNvdW50ZXJEb3RzOiAwLFxyXG4gICAgICB0ZXh0RG90czogXCJcIixcclxuICAgICAgaW50ZXJ2YWw6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgcHJvcHM6IHtcclxuICAgIGRpYWxvZzoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGludGVydmFsVGltZToge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDUwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMuaW50ZXJ2YWxEb3RzKCk7XHJcbiAgfSxcclxuICB1cGRhdGUoKSB7XHJcbiAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgIHRoaXMuaW50ZXJ2YWxEb3RzKCk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBpbnRlcnZhbERvdHMoKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlckRvdHMgPT09IHRoaXMudG90YWxEb3RzKSB7XHJcbiAgICAgICAgICB0aGlzLmNvdW50ZXJEb3RzID0gMDtcclxuICAgICAgICAgIHRoaXMudGV4dERvdHMgPSBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRleHREb3RzICs9IFwiLlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpdGxlQ2FyZCA9IHRoaXMudGV4dCArIHRoaXMudGV4dERvdHM7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRG90cysrO1xyXG4gICAgICB9LCB0aGlzLmludGVydmFsVGltZSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJ2LWRpYWxvZ1wiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7IHdpZHRoOiBcIjUwMFwiLCBwZXJzaXN0ZW50OiBcIlwiIH0sXG4gICAgICBtb2RlbDoge1xuICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZyxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICBfdm0uZGlhbG9nID0gJCR2XG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IFwiZGlhbG9nXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJsb2FkZXJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aXRsZUNhcmQpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FsZXJ0RGlhbG9nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MGFjZmZhOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BbGVydERpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FsZXJ0RGlhbG9nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSW5mb3Jtw6F0aWNhXFxcXERvY3VtZW50c1xcXFxwcm9qZWN0c01DXFxcXFNJU0UtQ1VTQ0EtMjAyMi1tYWluXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQwYWNmZmE4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQwYWNmZmE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQwYWNmZmE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BbGVydERpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDBhY2ZmYTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDBhY2ZmYTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9BbGVydERpYWxvZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWxlcnREaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWxlcnREaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbGVydERpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDBhY2ZmYTgmXCIiXSwibmFtZXMiOlsiZGF0YSIsInRpdGxlQ2FyZCIsInRvdGFsRG90cyIsImNvdW50ZXJEb3RzIiwidGV4dERvdHMiLCJpbnRlcnZhbCIsInByb3BzIiwiZGlhbG9nIiwidHlwZSIsInRleHQiLCJpbnRlcnZhbFRpbWUiLCJtb3VudGVkIiwidXBkYXRlIiwid2luZG93IiwibWV0aG9kcyIsImludGVydmFsRG90cyIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJhdHRycyIsIndpZHRoIiwicGVyc2lzdGVudCIsIm1vZGVsIiwidmFsdWUiLCJjYWxsYmFjayIsIiQkdiIsImV4cHJlc3Npb24iLCJfdiIsInN0YXRpY0NsYXNzIiwiX3MiLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIl0sInNvdXJjZVJvb3QiOiIifQ==