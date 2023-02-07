(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_cuscatlan_actions-cusca_ActionsCusca_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/actions-cusca/ActionsCusca.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/actions-cusca/ActionsCusca.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Validations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Validations */ "./resources/js/components/cuscatlan/actions-cusca/Validations.js");
/* harmony import */ var _methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods */ "./resources/js/components/cuscatlan/actions-cusca/methods.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      search: "",
      dialog: false,
      loading: false,
      dialogDelete: false,
      headers: [{
        text: "RESULTADO",
        value: "result_description"
      }, {
        text: "ACCIÓN",
        value: "action_description"
      }, {
        text: "UD. ORGANIZATIVA",
        value: "ou_name"
      }, {
        text: "META DE ACCIONES ANUALES",
        value: "year_goal_actions"
      }, // { text: "NO. DE ACCIONES", value: "annual_actions" },
      {
        text: "AÑO",
        value: "year_name"
      }, {
        text: "ACCIONES",
        value: "actions",
        sortable: false
      }],
      records: [],
      recordsFiltered: [],
      editedIndex: -1,
      editedItem: {
        action_description: "",
        // annual_actions: 0,
        year_goal_actions: 0,
        responsable_name: "",
        verification_method: "",
        data_source: "",
        budget_executed: 0,
        user_name: "",
        result_description: "",
        unit_name: "",
        months: []
      },
      defaultItem: {
        action_description: "",
        // annual_actions: 0,
        year_goal_actions: 0,
        responsable_name: "",
        verification_method: "",
        data_source: "",
        budget_executed: 0,
        user_name: "",
        result_description: "",
        unit_name: "",
        months: []
      },
      textAlert: "",
      alertEvent: "success",
      showAlert: false,
      users: [],
      units: [],
      resultsCusca: [],
      redirectSessionFinished: false,
      actualUser: {},
      validation: {
        months: {
          error: false
        }
      }
    };
  },
  // Validations
  validations: _Validations__WEBPACK_IMPORTED_MODULE_0__["default"],
  // Validations
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "Nuevo registro" : "Editar registro";
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    dialogDelete: function dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: _methods__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/actions-cusca/ActionsCusca.vue?vue&type=template&id=7185a9b8&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/actions-cusca/ActionsCusca.vue?vue&type=template&id=7185a9b8& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    attrs: {
      "data-app": ""
    }
  }, [_c("alert-time-out", {
    attrs: {
      redirect: _vm.redirectSessionFinished
    },
    on: {
      redirect: function redirect($event) {
        return _vm.updateTimeOut($event);
      }
    }
  }), _vm._v(" "), _c("alert", {
    staticClass: "mb-2",
    attrs: {
      text: _vm.textAlert,
      event: _vm.alertEvent,
      show: _vm.showAlert
    },
    on: {
      "show-alert": function showAlert($event) {
        return _vm.updateAlert($event);
      }
    }
  }), _vm._v(" "), _vm.actualUser.role == "Administrador" ? _c("div", {
    staticClass: "container"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      align: "start",
      cols: "12",
      md: "6",
      sm: "12"
    }
  }, [_c("v-btn", {
    staticClass: "btn-normal-close",
    attrs: {
      href: "/resultsCuscatlan",
      rounded: ""
    }
  }, [_vm._v("\n          Volver\n        ")])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      align: "end",
      cols: "12",
      md: "6",
      sm: "12"
    }
  }, [_c("v-btn", {
    staticClass: "btn-normal",
    attrs: {
      href: "/trackingCuscatlan",
      rounded: ""
    }
  }, [_vm._v("\n          Siguiente\n        ")])], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c("v-data-table", {
    staticClass: "elevation-3 shadow p-3 mt-3",
    attrs: {
      headers: _vm.headers,
      items: _vm.recordsFiltered,
      loading: _vm.loading,
      "sort-by": "action_description"
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function fn() {
        return [_c("v-toolbar", {
          attrs: {
            flat: ""
          }
        }, [_c("v-toolbar-title", [_vm._v("Acciones")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-dialog", {
          attrs: {
            "max-width": "700px",
            persistent: ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(_ref) {
              _objectDestructuringEmpty(_ref);

              return [_c("v-row", [_c("v-col", {
                attrs: {
                  align: "end"
                }
              }, [_c("v-btn", {
                staticClass: "mb-2 btn-normal",
                attrs: {
                  rounded: "",
                  disabled: _vm.loading != false
                },
                on: {
                  click: _vm.openModal
                }
              }, [_vm._v("\n                  Agregar\n                ")])], 1), _vm._v(" "), _c("v-col", {
                staticClass: "d-none d-md-block d-lg-block",
                attrs: {
                  xs: "6",
                  sm: "6",
                  md: "6"
                }
              }, [_c("v-text-field", {
                attrs: {
                  dense: "",
                  label: "Buscar",
                  outlined: "",
                  type: "text"
                },
                on: {
                  keyup: function keyup($event) {
                    return _vm.searchValue();
                  }
                },
                model: {
                  value: _vm.search,
                  callback: function callback($$v) {
                    _vm.search = $$v;
                  },
                  expression: "search"
                }
              })], 1)], 1)];
            }
          }]),
          model: {
            value: _vm.dialog,
            callback: function callback($$v) {
              _vm.dialog = $$v;
            },
            expression: "dialog"
          }
        }, [_vm._v(" "), _c("v-card", {
          staticClass: "flexcard",
          attrs: {
            height: "100%"
          }
        }, [_c("v-card-title", [_c("h1", {
          staticClass: "mx-auto pt-3 mb-3 text-center black-secondary"
        }, [_vm._v("\n                " + _vm._s(_vm.formTitle) + "\n              ")])]), _vm._v(" "), _c("v-card-text", [_c("v-container", [_c("v-row", [_c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("base-text-area", {
          attrs: {
            label: "Acciones",
            validation: _vm.$v.editedItem.action_description,
            validationTextType: "default",
            min: 1,
            max: 500,
            rows: 6
          },
          model: {
            value: _vm.$v.editedItem.action_description.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.action_description, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
            },
            expression: "$v.editedItem.action_description.$model"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("base-select-search", {
          attrs: {
            label: "Resultado",
            items: _vm.resultsCusca,
            item: "result_description",
            validation: _vm.$v.editedItem.result_description
          },
          model: {
            value: _vm.$v.editedItem.result_description.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.result_description, "$model", $$v);
            },
            expression: "$v.editedItem.result_description.$model"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "6",
            md: "6"
          }
        }, [_c("base-select-search", {
          attrs: {
            label: "Unidad de medida",
            items: _vm.units,
            item: "unit_name",
            validation: _vm.$v.editedItem.unit_name
          },
          model: {
            value: _vm.$v.editedItem.unit_name.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.unit_name, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
            },
            expression: "$v.editedItem.unit_name.$model"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "6",
            md: "6"
          }
        }, [_c("base-select-search", {
          attrs: {
            label: "Enlace",
            validation: _vm.$v.editedItem.user_name,
            items: _vm.users,
            item: "user_name"
          },
          model: {
            value: _vm.$v.editedItem.user_name.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.user_name, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
            },
            expression: "$v.editedItem.user_name.$model"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("base-input", {
          attrs: {
            label: "Responsable",
            validation: _vm.$v.editedItem.responsable_name,
            validationTextType: "default"
          },
          model: {
            value: _vm.$v.editedItem.responsable_name.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.responsable_name, "$model", $$v);
            },
            expression: "$v.editedItem.responsable_name.$model"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("base-input", {
          attrs: {
            label: "Medio de verificación",
            validation: _vm.$v.editedItem.verification_method,
            validationTextType: "default"
          },
          model: {
            value: _vm.$v.editedItem.verification_method.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.verification_method, "$model", $$v);
            },
            expression: "$v.editedItem.verification_method.$model"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "6",
            md: "6"
          }
        }, [_c("base-input", {
          attrs: {
            label: "Fuente de datos",
            validation: _vm.$v.editedItem.data_source,
            validationTextType: "none"
          },
          model: {
            value: _vm.$v.editedItem.data_source.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.data_source, "$model", $$v);
            },
            expression: "$v.editedItem.data_source.$model"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "6"
          }
        }, [_c("base-input", {
          attrs: {
            label: "Presupuesto ejecutado",
            validation: _vm.$v.editedItem.budget_executed,
            type: "number"
          },
          model: {
            value: _vm.$v.editedItem.budget_executed.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.budget_executed, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
            },
            expression: "$v.editedItem.budget_executed.$model"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "6",
            md: "6"
          }
        }, [_c("base-input", {
          directives: [{
            name: "mask",
            rawName: "v-mask",
            value: "####",
            expression: "'####'"
          }],
          attrs: {
            label: "Meta de actividades anuales",
            validation: _vm.$v.editedItem.year_goal_actions,
            type: "number"
          },
          model: {
            value: _vm.$v.editedItem.year_goal_actions.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.year_goal_actions, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
            },
            expression: "$v.editedItem.year_goal_actions.$model"
          }
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "pt-0"
        }, [_c("div", {
          staticClass: "row"
        }, [_c("div", {
          staticClass: "col-12"
        }, [_c("h4", {
          staticClass: "text-center"
        }, [_vm._v("\n                          Seleccione los meses que se le dará seguimiento\n                        ")])])])]), _vm._v(" "), _vm._l(_vm.editedItem.months, function (month) {
          return _c("v-col", {
            key: month.id,
            staticClass: "pt-0",
            attrs: {
              cols: "3",
              sm: "3",
              md: "3"
            }
          }, [_c("v-checkbox", {
            attrs: {
              label: month.month_name
            },
            on: {
              click: function click($event) {
                return _vm.numberMonths();
              }
            },
            model: {
              value: month.value,
              callback: function callback($$v) {
                _vm.$set(month, "value", $$v);
              },
              expression: "month.value"
            }
          })], 1);
        }), _vm._v(" "), _c("base-error", {
          attrs: {
            message: "Campo requerido.",
            validation: _vm.validation.months
          }
        })], 2), _vm._v(" "), _c("v-row", [_c("v-col", {
          attrs: {
            align: "center"
          }
        }, [_c("v-btn", {
          attrs: {
            color: "btn-normal no-uppercase mt-3",
            rounded: ""
          },
          on: {
            click: _vm.save
          }
        }, [_vm._v("\n                      Guardar\n                    ")]), _vm._v(" "), _c("v-btn", {
          attrs: {
            color: "btn-normal-close no-uppercase mt-3",
            rounded: ""
          },
          on: {
            click: _vm.close
          }
        }, [_vm._v("\n                      Cancelar\n                    ")])], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-dialog", {
          attrs: {
            "max-width": "400px"
          },
          model: {
            value: _vm.dialogDelete,
            callback: function callback($$v) {
              _vm.dialogDelete = $$v;
            },
            expression: "dialogDelete"
          }
        }, [_c("v-card", {
          staticClass: "h-100"
        }, [_c("v-container", [_c("h3", {
          staticClass: "black-secondary text-center mt-3 mb-3"
        }, [_vm._v("\n                Eliminar registro\n              ")]), _vm._v(" "), _c("v-row", [_c("v-col", {
          attrs: {
            align: "center"
          }
        }, [_c("v-btn", {
          attrs: {
            color: "btn-normal no-uppercase mt-3 mb-3 pr-5 pl-5 mx-auto",
            rounded: ""
          },
          on: {
            click: _vm.deleteItemConfirm
          }
        }, [_vm._v("Confirmar")]), _vm._v(" "), _c("v-btn", {
          attrs: {
            color: "btn-normal-close no-uppercase mt-3 mb-3",
            rounded: ""
          },
          on: {
            click: _vm.closeDelete
          }
        }, [_vm._v("\n                    Cancelar\n                  ")])], 1)], 1)], 1)], 1)], 1)], 1)];
      },
      proxy: true
    }, {
      key: "item.actions",
      fn: function fn(_ref2) {
        var item = _ref2.item;
        return [_c("v-icon", {
          staticClass: "mr-2",
          attrs: {
            small: ""
          },
          on: {
            click: function click($event) {
              return _vm.editItem(item);
            }
          }
        }, [_vm._v(" mdi-pencil ")]), _vm._v(" "), _c("v-icon", {
          attrs: {
            small: ""
          },
          on: {
            click: function click($event) {
              return _vm.deleteItem(item);
            }
          }
        }, [_vm._v(" mdi-delete ")])];
      }
    }, {
      key: "no-data",
      fn: function fn() {
        return [_c("a", {
          staticClass: "btn btn-normal-secondary no-decoration",
          attrs: {
            href: "#"
          },
          on: {
            click: _vm.initialize
          }
        }, [_vm._v("\n        Reiniciar\n      ")])];
      },
      proxy: true
    }], null, true)
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/apis/actionsCuscaApi.js":
/*!**********************************************!*\
  !*** ./resources/js/apis/actionsCuscaApi.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var actionsCuscaApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api/actionsCusca"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (actionsCuscaApi);

/***/ }),

/***/ "./resources/js/apis/monthApi.js":
/*!***************************************!*\
  !*** ./resources/js/apis/monthApi.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var monthApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api/month"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (monthApi);

/***/ }),

/***/ "./resources/js/apis/resultsCuscaApi.js":
/*!**********************************************!*\
  !*** ./resources/js/apis/resultsCuscaApi.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var resultsCuscaApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api/resultsCusca"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resultsCuscaApi);

/***/ }),

/***/ "./resources/js/apis/unitApi.js":
/*!**************************************!*\
  !*** ./resources/js/apis/unitApi.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var unitApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api/unit"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitApi);

/***/ }),

/***/ "./resources/js/apis/userApi.js":
/*!**************************************!*\
  !*** ./resources/js/apis/userApi.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var userApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api/user"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userApi);

/***/ }),

/***/ "./resources/js/components/cuscatlan/actions-cusca/Validations.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/cuscatlan/actions-cusca/Validations.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");

var Validations = {
  editedItem: {
    action_description: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.required,
      minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.minLength)(1),
      maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.maxLength)(500)
    },
    // annual_actions: {
    //     required,
    //     minLength: minLength(1),
    //     maxLength: maxLength(10),
    // },
    year_goal_actions: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.required,
      minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.minLength)(1),
      maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.maxLength)(10)
    },
    responsable_name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.required,
      minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.minLength)(1),
      maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.maxLength)(150)
    },
    verification_method: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.required,
      minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.minLength)(1),
      maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.maxLength)(150)
    },
    data_source: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.required,
      minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.minLength)(1),
      maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.maxLength)(150)
    },
    budget_executed: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.required,
      minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.minLength)(1),
      maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.maxLength)(10)
    },
    user_name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.required,
      minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.minLength)(1)
    },
    result_description: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.required,
      minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.minLength)(1)
    },
    unit_name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.required,
      minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__.minLength)(1)
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Validations);

/***/ }),

/***/ "./resources/js/components/cuscatlan/actions-cusca/methods.js":
/*!********************************************************************!*\
  !*** ./resources/js/components/cuscatlan/actions-cusca/methods.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_userApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/userApi */ "./resources/js/apis/userApi.js");
/* harmony import */ var _apis_resultsCuscaApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/resultsCuscaApi */ "./resources/js/apis/resultsCuscaApi.js");
/* harmony import */ var _apis_monthApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apis/monthApi */ "./resources/js/apis/monthApi.js");
/* harmony import */ var _apis_unitApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../apis/unitApi */ "./resources/js/apis/unitApi.js");
/* harmony import */ var _apis_actionsCuscaApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../apis/actionsCuscaApi */ "./resources/js/apis/actionsCuscaApi.js");
/* harmony import */ var _libs_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/function */ "./resources/js/libs/function.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






 //import moment from "moment"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  initialize: function initialize() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var requests, responses;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _this.records = [];
              _this.recordsFiltered = [];
              requests = [_apis_actionsCuscaApi__WEBPACK_IMPORTED_MODULE_4__["default"].get(), _apis_userApi__WEBPACK_IMPORTED_MODULE_0__["default"].get(null, {
                params: {
                  skip: 0,
                  take: 200
                }
              }), _apis_resultsCuscaApi__WEBPACK_IMPORTED_MODULE_1__["default"].get(), _apis_monthApi__WEBPACK_IMPORTED_MODULE_2__["default"].get(), _apis_userApi__WEBPACK_IMPORTED_MODULE_0__["default"].get("/actualUserRole"), _apis_userApi__WEBPACK_IMPORTED_MODULE_0__["default"].post("/actualUser"), _apis_unitApi__WEBPACK_IMPORTED_MODULE_3__["default"].get()];
              _context.next = 6;
              return Promise.all(requests)["catch"](function (error) {
                _this.updateAlert(true, "No fue posible obtener los registros.", "fail");

                _this.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_5__["default"].verifySessionFinished(error.response.status, 401);
              });

            case 6:
              responses = _context.sent;

              if (responses && responses[0].data.message == "success") {
                _this.records = responses[0].data.actionsCusca;
                _this.users = responses[1].data.users;
                _this.resultsCusca = responses[2].data.resultsCusca;
                _this.months = responses[3].data.months;
                _this.editedItem.months = _this.months;
                _this.actualUser = responses[5].data.user;
                _this.units = responses[6].data.units;
                _this.recordsFiltered = _this.records;
              }

              _this.loading = false;

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  editItem: function editItem(item) {
    this.dialog = true;
    this.editedIndex = this.recordsFiltered.indexOf(item);
    this.editedItem = Object.assign({}, item);
  },
  deleteItem: function deleteItem(item) {
    this.editedIndex = this.recordsFiltered.indexOf(item);
    this.editedItem = Object.assign({}, item);
    this.dialogDelete = true;
  },
  deleteItemConfirm: function deleteItemConfirm() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _apis_actionsCuscaApi__WEBPACK_IMPORTED_MODULE_4__["default"]["delete"]("/".concat(_this2.editedItem.id))["catch"](function (error) {
                _this2.updateAlert(true, "No fue posible eliminar el registros.", "fail");

                _this2.close();
              });

            case 2:
              res = _context2.sent;

              if (res.data.message == "success") {
                _this2.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_5__["default"].verifySessionFinished(res.status, 200);

                _this2.updateAlert(true, "Registro eliminado.", "success");
              } else {
                _this2.updateAlert(true, "No se pudo eliminar el registro.", "fail");
              }

              _this2.initialize();

              _this2.closeDelete();

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  close: function close() {
    var _this3 = this;

    this.dialog = false;
    this.$nextTick(function () {
      _this3.editedItem = _this3.defaultItem;
      _this3.editedIndex = -1;
    });
  },
  closeDelete: function closeDelete() {
    var _this4 = this;

    this.$nextTick(function () {
      _this4.editedItem = _this4.defaultItem;
      _this4.editedIndex = -1;
    });
    this.dialogDelete = false;
  },
  save: function save() {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var res, _res;

      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this5.$v.$touch();

              if (!(_this5.$v.editedItem.$invalid || _this5.numberMonths())) {
                _context3.next = 4;
                break;
              }

              _this5.updateAlert(true, "Campos obligatorios.", "fail");

              return _context3.abrupt("return");

            case 4:
              if (!(_this5.editedIndex > -1)) {
                _context3.next = 12;
                break;
              }

              _context3.next = 7;
              return _apis_actionsCuscaApi__WEBPACK_IMPORTED_MODULE_4__["default"].put("/".concat(_this5.editedItem.id), _this5.editedItem)["catch"](function (error) {
                _this5.updateAlert(true, "No fue posible actualizar el registro.", "fail");

                _this5.close();

                _this5.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_5__["default"].verifySessionFinished(error.response.status, 419);
              });

            case 7:
              res = _context3.sent;

              if (res.data.message == "success") {
                _this5.updateAlert(true, "Registro actualizado correctamente.", "success");
              }

              if (res.data.message == "reason") {
                _this5.updateAlert(true, "El usuario no posee los permisos suficientes para esta acción.", "reason");
              }

              _context3.next = 16;
              break;

            case 12:
              _context3.next = 14;
              return _apis_actionsCuscaApi__WEBPACK_IMPORTED_MODULE_4__["default"].post(null, _this5.editedItem)["catch"](function (error) {
                _this5.updateAlert(true, "No fue posible crear el registro.", "fail"); // this.close();

              });

            case 14:
              _res = _context3.sent;

              if (_res.data.message == "success") {
                _this5.updateAlert(true, "Registro almacenado correctamente.", "success");
              }

            case 16:
              _this5.close();

              _this5.initialize();

            case 18:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  searchValue: function searchValue() {
    var _this6 = this;

    this.recordsFiltered = [];

    if (this.search != "") {
      this.records.forEach(function (record) {
        var searchConcat = "";

        for (var i = 0; i < record.action_description.length; i++) {
          searchConcat += record.action_description[i].toUpperCase();

          if (searchConcat === _this6.search.toUpperCase() && !_this6.recordsFiltered.some(function (rec) {
            return rec == record;
          })) {
            _this6.recordsFiltered.push(record);
          }
        }
      });
      return;
    }

    this.recordsFiltered = this.records;
  },
  updateAlert: function updateAlert() {
    var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Alerta";
    var event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";
    this.textAlert = text;
    this.alertEvent = event;
    this.showAlert = show;
  },
  updateTimeOut: function updateTimeOut(event) {
    this.redirectSessionFinished = event;
  },
  openModal: function openModal() {
    this.dialog = true;
    this.editedItem.result_description = this.resultsCusca[0].result_description;
    this.editedItem.user_name = this.actualUser.user_name;
    this.editedItem.action_description = "";
    this.editedItem.responsable_name = ""; // this.editedItem.annual_actions = 0;

    this.editedItem.year_goal_actions = 0;
    this.editedItem.budget_executed = 0;
    this.editedItem.verification_method = "";
    this.editedItem.data_source = "";
    this.editedItem.months = this.months;
    this.editedItem.months.forEach(function (month) {
      return month.value = false;
    });
    this.editedItem.unit_name = this.units[0].unit_name; //const month_name = moment().format("MMMM");
    //this.editedItem.month_name = month_name.charAt(0).toUpperCase() + month_name.slice(1);

    this.$v.$reset();
  },
  numberMonths: function numberMonths() {
    this.validation.months.error = !this.editedItem.months.some(function (element) {
      return element.value == true;
    }); // this.editedItem.annual_actions = this.editedItem.months.filter(
    //     (element) => element.value
    // ).length;
  }
});

/***/ }),

/***/ "./resources/js/libs/function.js":
/*!***************************************!*\
  !*** ./resources/js/libs/function.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  verifySessionFinished: function verifySessionFinished(status) {
    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
    console.log(status);

    if (status == 419 || status == 401) {
      console.log("L" + status);
      return true;
    }

    return false;
  }
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./resources/js/components/cuscatlan/actions-cusca/ActionsCusca.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/cuscatlan/actions-cusca/ActionsCusca.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActionsCusca_vue_vue_type_template_id_7185a9b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionsCusca.vue?vue&type=template&id=7185a9b8& */ "./resources/js/components/cuscatlan/actions-cusca/ActionsCusca.vue?vue&type=template&id=7185a9b8&");
/* harmony import */ var _ActionsCusca_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionsCusca.vue?vue&type=script&lang=js& */ "./resources/js/components/cuscatlan/actions-cusca/ActionsCusca.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ActionsCusca_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActionsCusca_vue_vue_type_template_id_7185a9b8___WEBPACK_IMPORTED_MODULE_0__.render,
  _ActionsCusca_vue_vue_type_template_id_7185a9b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cuscatlan/actions-cusca/ActionsCusca.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/cuscatlan/actions-cusca/ActionsCusca.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/cuscatlan/actions-cusca/ActionsCusca.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsCusca_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActionsCusca.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/actions-cusca/ActionsCusca.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsCusca_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cuscatlan/actions-cusca/ActionsCusca.vue?vue&type=template&id=7185a9b8&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/cuscatlan/actions-cusca/ActionsCusca.vue?vue&type=template&id=7185a9b8& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsCusca_vue_vue_type_template_id_7185a9b8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsCusca_vue_vue_type_template_id_7185a9b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionsCusca_vue_vue_type_template_id_7185a9b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ActionsCusca.vue?vue&type=template&id=7185a9b8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/actions-cusca/ActionsCusca.vue?vue&type=template&id=7185a9b8&");


/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alpha.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/alpha.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('alpha', /^[a-zA-Z]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alphaNum.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/alphaNum.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('alphaNum', /^[a-zA-Z0-9]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/and.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/and.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'and'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid && fn.apply(_this, args);
    }, true);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/between.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/between.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(min, max) {
  return (0, _common.withParams)({
    type: 'between',
    min: min,
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +min <= +value && +max >= +value;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/common.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/common.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.req = exports.regex = exports.ref = exports.len = void 0;
Object.defineProperty(exports, "withParams", ({
  enumerable: true,
  get: function get() {
    return _withParams.default;
  }
}));

var _withParams = _interopRequireDefault(__webpack_require__(/*! ../withParams */ "./node_modules/vuelidate/lib/withParams.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var req = function req(value) {
  if (Array.isArray(value)) return !!value.length;

  if (value === undefined || value === null) {
    return false;
  }

  if (value === false) {
    return true;
  }

  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }

  if (_typeof(value) === 'object') {
    for (var _ in value) {
      return true;
    }

    return false;
  }

  return !!String(value).length;
};

exports.req = req;

var len = function len(value) {
  if (Array.isArray(value)) return value.length;

  if (_typeof(value) === 'object') {
    return Object.keys(value).length;
  }

  return String(value).length;
};

exports.len = len;

var ref = function ref(reference, vm, parentVm) {
  return typeof reference === 'function' ? reference.call(vm, parentVm) : parentVm[reference];
};

exports.ref = ref;

var regex = function regex(type, expr) {
  return (0, _withParams.default)({
    type: type
  }, function (value) {
    return !req(value) || expr.test(value);
  });
};

exports.regex = regex;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/decimal.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/decimal.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('decimal', /^[-]?\d*(\.\d+)?$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/email.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/email.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var emailRegex = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

var _default = (0, _common.regex)('email', emailRegex);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/index.js":
/*!********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "alpha", ({
  enumerable: true,
  get: function get() {
    return _alpha.default;
  }
}));
Object.defineProperty(exports, "alphaNum", ({
  enumerable: true,
  get: function get() {
    return _alphaNum.default;
  }
}));
Object.defineProperty(exports, "and", ({
  enumerable: true,
  get: function get() {
    return _and.default;
  }
}));
Object.defineProperty(exports, "between", ({
  enumerable: true,
  get: function get() {
    return _between.default;
  }
}));
Object.defineProperty(exports, "decimal", ({
  enumerable: true,
  get: function get() {
    return _decimal.default;
  }
}));
Object.defineProperty(exports, "email", ({
  enumerable: true,
  get: function get() {
    return _email.default;
  }
}));
exports.helpers = void 0;
Object.defineProperty(exports, "integer", ({
  enumerable: true,
  get: function get() {
    return _integer.default;
  }
}));
Object.defineProperty(exports, "ipAddress", ({
  enumerable: true,
  get: function get() {
    return _ipAddress.default;
  }
}));
Object.defineProperty(exports, "macAddress", ({
  enumerable: true,
  get: function get() {
    return _macAddress.default;
  }
}));
Object.defineProperty(exports, "maxLength", ({
  enumerable: true,
  get: function get() {
    return _maxLength.default;
  }
}));
Object.defineProperty(exports, "maxValue", ({
  enumerable: true,
  get: function get() {
    return _maxValue.default;
  }
}));
Object.defineProperty(exports, "minLength", ({
  enumerable: true,
  get: function get() {
    return _minLength.default;
  }
}));
Object.defineProperty(exports, "minValue", ({
  enumerable: true,
  get: function get() {
    return _minValue.default;
  }
}));
Object.defineProperty(exports, "not", ({
  enumerable: true,
  get: function get() {
    return _not.default;
  }
}));
Object.defineProperty(exports, "numeric", ({
  enumerable: true,
  get: function get() {
    return _numeric.default;
  }
}));
Object.defineProperty(exports, "or", ({
  enumerable: true,
  get: function get() {
    return _or.default;
  }
}));
Object.defineProperty(exports, "required", ({
  enumerable: true,
  get: function get() {
    return _required.default;
  }
}));
Object.defineProperty(exports, "requiredIf", ({
  enumerable: true,
  get: function get() {
    return _requiredIf.default;
  }
}));
Object.defineProperty(exports, "requiredUnless", ({
  enumerable: true,
  get: function get() {
    return _requiredUnless.default;
  }
}));
Object.defineProperty(exports, "sameAs", ({
  enumerable: true,
  get: function get() {
    return _sameAs.default;
  }
}));
Object.defineProperty(exports, "url", ({
  enumerable: true,
  get: function get() {
    return _url.default;
  }
}));

var _alpha = _interopRequireDefault(__webpack_require__(/*! ./alpha */ "./node_modules/vuelidate/lib/validators/alpha.js"));

var _alphaNum = _interopRequireDefault(__webpack_require__(/*! ./alphaNum */ "./node_modules/vuelidate/lib/validators/alphaNum.js"));

var _numeric = _interopRequireDefault(__webpack_require__(/*! ./numeric */ "./node_modules/vuelidate/lib/validators/numeric.js"));

var _between = _interopRequireDefault(__webpack_require__(/*! ./between */ "./node_modules/vuelidate/lib/validators/between.js"));

var _email = _interopRequireDefault(__webpack_require__(/*! ./email */ "./node_modules/vuelidate/lib/validators/email.js"));

var _ipAddress = _interopRequireDefault(__webpack_require__(/*! ./ipAddress */ "./node_modules/vuelidate/lib/validators/ipAddress.js"));

var _macAddress = _interopRequireDefault(__webpack_require__(/*! ./macAddress */ "./node_modules/vuelidate/lib/validators/macAddress.js"));

var _maxLength = _interopRequireDefault(__webpack_require__(/*! ./maxLength */ "./node_modules/vuelidate/lib/validators/maxLength.js"));

var _minLength = _interopRequireDefault(__webpack_require__(/*! ./minLength */ "./node_modules/vuelidate/lib/validators/minLength.js"));

var _required = _interopRequireDefault(__webpack_require__(/*! ./required */ "./node_modules/vuelidate/lib/validators/required.js"));

var _requiredIf = _interopRequireDefault(__webpack_require__(/*! ./requiredIf */ "./node_modules/vuelidate/lib/validators/requiredIf.js"));

var _requiredUnless = _interopRequireDefault(__webpack_require__(/*! ./requiredUnless */ "./node_modules/vuelidate/lib/validators/requiredUnless.js"));

var _sameAs = _interopRequireDefault(__webpack_require__(/*! ./sameAs */ "./node_modules/vuelidate/lib/validators/sameAs.js"));

var _url = _interopRequireDefault(__webpack_require__(/*! ./url */ "./node_modules/vuelidate/lib/validators/url.js"));

var _or = _interopRequireDefault(__webpack_require__(/*! ./or */ "./node_modules/vuelidate/lib/validators/or.js"));

var _and = _interopRequireDefault(__webpack_require__(/*! ./and */ "./node_modules/vuelidate/lib/validators/and.js"));

var _not = _interopRequireDefault(__webpack_require__(/*! ./not */ "./node_modules/vuelidate/lib/validators/not.js"));

var _minValue = _interopRequireDefault(__webpack_require__(/*! ./minValue */ "./node_modules/vuelidate/lib/validators/minValue.js"));

var _maxValue = _interopRequireDefault(__webpack_require__(/*! ./maxValue */ "./node_modules/vuelidate/lib/validators/maxValue.js"));

var _integer = _interopRequireDefault(__webpack_require__(/*! ./integer */ "./node_modules/vuelidate/lib/validators/integer.js"));

var _decimal = _interopRequireDefault(__webpack_require__(/*! ./decimal */ "./node_modules/vuelidate/lib/validators/decimal.js"));

var helpers = _interopRequireWildcard(__webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js"));

exports.helpers = helpers;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/integer.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/integer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('integer', /(^[0-9]*$)|(^-[0-9]+$)/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/ipAddress.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/ipAddress.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.withParams)({
  type: 'ipAddress'
}, function (value) {
  if (!(0, _common.req)(value)) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  var nibbles = value.split('.');
  return nibbles.length === 4 && nibbles.every(nibbleValid);
});

exports["default"] = _default;

var nibbleValid = function nibbleValid(nibble) {
  if (nibble.length > 3 || nibble.length === 0) {
    return false;
  }

  if (nibble[0] === '0' && nibble !== '0') {
    return false;
  }

  if (!nibble.match(/^\d+$/)) {
    return false;
  }

  var numeric = +nibble | 0;
  return numeric >= 0 && numeric <= 255;
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/macAddress.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/macAddress.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
  return (0, _common.withParams)({
    type: 'macAddress'
  }, function (value) {
    if (!(0, _common.req)(value)) {
      return true;
    }

    if (typeof value !== 'string') {
      return false;
    }

    var parts = typeof separator === 'string' && separator !== '' ? value.split(separator) : value.length === 12 || value.length === 16 ? value.match(/.{2}/g) : null;
    return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid);
  });
};

exports["default"] = _default;

var hexValid = function hexValid(hex) {
  return hex.toLowerCase().match(/^[0-9a-f]{2}$/);
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxLength.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/maxLength.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'maxLength',
    max: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) <= length;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/maxValue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(max) {
  return (0, _common.withParams)({
    type: 'maxValue',
    max: max
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +max;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minLength.js":
/*!************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/minLength.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(length) {
  return (0, _common.withParams)({
    type: 'minLength',
    min: length
  }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) >= length;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minValue.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/minValue.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(min) {
  return (0, _common.withParams)({
    type: 'minValue',
    min: min
  }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +min;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/not.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/not.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(validator) {
  return (0, _common.withParams)({
    type: 'not'
  }, function (value, vm) {
    return !(0, _common.req)(value) || !validator.call(this, value, vm);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/numeric.js":
/*!**********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/numeric.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.regex)('numeric', /^[0-9]*$/);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/or.js":
/*!*****************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/or.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default() {
  for (var _len = arguments.length, validators = new Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({
    type: 'or'
  }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid || fn.apply(_this, args);
    }, false);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/required.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/required.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = (0, _common.withParams)({
  type: 'required'
}, function (value) {
  if (typeof value === 'string') {
    return (0, _common.req)(value.trim());
  }

  return (0, _common.req)(value);
});

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredIf.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/requiredIf.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredIf',
    prop: prop
  }, function (value, parentVm) {
    return (0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredUnless.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/requiredUnless.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(prop) {
  return (0, _common.withParams)({
    type: 'requiredUnless',
    prop: prop
  }, function (value, parentVm) {
    return !(0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/sameAs.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/sameAs.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var _default = function _default(equalTo) {
  return (0, _common.withParams)({
    type: 'sameAs',
    eq: equalTo
  }, function (value, parentVm) {
    return value === (0, _common.ref)(equalTo, this, parentVm);
  });
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/url.js":
/*!******************************************************!*\
  !*** ./node_modules/vuelidate/lib/validators/url.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _common = __webpack_require__(/*! ./common */ "./node_modules/vuelidate/lib/validators/common.js");

var urlRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

var _default = (0, _common.regex)('url', urlRegex);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParams.js":
/*!**************************************************!*\
  !*** ./node_modules/vuelidate/lib/withParams.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var withParams = process.env.BUILD === 'web' ? (__webpack_require__(/*! ./withParamsBrowser */ "./node_modules/vuelidate/lib/withParamsBrowser.js").withParams) : (__webpack_require__(/*! ./params */ "./node_modules/vuelidate/lib/params.js").withParams);
var _default = withParams;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParamsBrowser.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuelidate/lib/withParamsBrowser.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.withParams = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : {};

var fakeWithParams = function fakeWithParams(paramsOrClosure, maybeValidator) {
  if (_typeof(paramsOrClosure) === 'object' && maybeValidator !== undefined) {
    return maybeValidator;
  }

  return paramsOrClosure(function () {});
};

var withParams = root.vuelidate ? root.vuelidate.withParams : fakeWithParams;
exports.withParams = withParams;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfY3VzY2F0bGFuX2FjdGlvbnMtY3VzY2FfQWN0aW9uc0N1c2NhX3Z1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFpVHdDO0FBQ1I7QUFFaEMsaUVBQWU7RUFDZkE7SUFBQTtNQUNBQyxVQURBO01BRUFDLGFBRkE7TUFHQUMsY0FIQTtNQUlBQyxtQkFKQTtNQUtBQyxVQUNBO1FBQUFDO1FBQUFDO01BQUEsQ0FEQSxFQUVBO1FBQUFEO1FBQUFDO01BQUEsQ0FGQSxFQUdBO1FBQUFEO1FBQUFDO01BQUEsQ0FIQSxFQUlBO1FBQUFEO1FBQUFDO01BQUEsQ0FKQSxFQUtBO01BQ0E7UUFBQUQ7UUFBQUM7TUFBQSxDQU5BLEVBT0E7UUFBQUQ7UUFBQUM7UUFBQUM7TUFBQSxDQVBBLENBTEE7TUFjQUMsV0FkQTtNQWVBQyxtQkFmQTtNQWdCQUMsZUFoQkE7TUFpQkFDO1FBQ0FDLHNCQURBO1FBRUE7UUFDQUMsb0JBSEE7UUFJQUMsb0JBSkE7UUFLQUMsdUJBTEE7UUFNQUMsZUFOQTtRQU9BQyxrQkFQQTtRQVFBQyxhQVJBO1FBU0FDLHNCQVRBO1FBVUFDLGFBVkE7UUFXQUM7TUFYQSxDQWpCQTtNQThCQUM7UUFDQVYsc0JBREE7UUFFQTtRQUNBQyxvQkFIQTtRQUlBQyxvQkFKQTtRQUtBQyx1QkFMQTtRQU1BQyxlQU5BO1FBT0FDLGtCQVBBO1FBUUFDLGFBUkE7UUFTQUMsc0JBVEE7UUFVQUMsYUFWQTtRQVdBQztNQVhBLENBOUJBO01BNENBRSxhQTVDQTtNQTZDQUMscUJBN0NBO01BOENBQyxnQkE5Q0E7TUErQ0FDLFNBL0NBO01BZ0RBQyxTQWhEQTtNQWlEQUMsZ0JBakRBO01Ba0RBQyw4QkFsREE7TUFtREFDLGNBbkRBO01Bb0RBQztRQUNBVjtVQUNBVztRQURBO01BREE7SUFwREE7RUFBQSxDQURBO0VBNERBO0VBQ0FDLGFBQUFBLG9EQTdEQTtFQThEQTtFQUNBQztJQUNBQyxTQURBLHVCQUNBO01BQ0E7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RSxpQ0FBaUMsSUFBSSxFQUFFLEVBQUUsc0NBQXNDLElBQUksRUFBRSxFQUFFLGdEQUFnRCxJQUFJLG9CQUFvQixFQUFFLDZGQUE2RixLQUFLLGlEQUFpRCxHQUFHLFlBQVksSUFBSTs7QUFFdGE7O0FBRUEsa0JBQWU7Ozs7Ozs7Ozs7OztBQ2JGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsaUJBQWlCLE9BQU8sdUJBQXVCLGdIQUF5QyxHQUFHLDBGQUE4QjtBQUN6SDtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQ1JGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFrQjs7QUFFbEIsd0JBQXdCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLHdCQUF3QixPQUFPLGtDQUFrQyxtSUFBbUk7O0FBRXBXLDJEQUEyRCxxQkFBTSxtQkFBbUIscUJBQU07O0FBRTFGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jdXNjYXRsYW4vYWN0aW9ucy1jdXNjYS9BY3Rpb25zQ3VzY2EudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2N1c2NhdGxhbi9hY3Rpb25zLWN1c2NhL0FjdGlvbnNDdXNjYS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwaXMvYWN0aW9uc0N1c2NhQXBpLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcGlzL21vbnRoQXBpLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcGlzL3Jlc3VsdHNDdXNjYUFwaS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBpcy91bml0QXBpLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcGlzL3VzZXJBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY3VzY2F0bGFuL2FjdGlvbnMtY3VzY2EvVmFsaWRhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY3VzY2F0bGFuL2FjdGlvbnMtY3VzY2EvbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbGlicy9mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2N1c2NhdGxhbi9hY3Rpb25zLWN1c2NhL0FjdGlvbnNDdXNjYS52dWU/OWRkMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jdXNjYXRsYW4vYWN0aW9ucy1jdXNjYS9BY3Rpb25zQ3VzY2EudnVlPzc3MTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY3VzY2F0bGFuL2FjdGlvbnMtY3VzY2EvQWN0aW9uc0N1c2NhLnZ1ZT8yMTBmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvYWxwaGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9hbHBoYU51bS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2FuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2JldHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9kZWNpbWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvZW1haWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2ludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9pcEFkZHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9tYWNBZGRyZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWF4TGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWF4VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9taW5MZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9taW5WYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL25vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL251bWVyaWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9vci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3JlcXVpcmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvcmVxdWlyZWRJZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3JlcXVpcmVkVW5sZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvc2FtZUFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvdXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3dpdGhQYXJhbXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvd2l0aFBhcmFtc0Jyb3dzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGRhdGEtYXBwPlxuICAgIDxhbGVydC10aW1lLW91dFxuICAgICAgOnJlZGlyZWN0PVwicmVkaXJlY3RTZXNzaW9uRmluaXNoZWRcIlxuICAgICAgQHJlZGlyZWN0PVwidXBkYXRlVGltZU91dCgkZXZlbnQpXCJcbiAgICAvPlxuICAgIDxhbGVydFxuICAgICAgOnRleHQ9XCJ0ZXh0QWxlcnRcIlxuICAgICAgOmV2ZW50PVwiYWxlcnRFdmVudFwiXG4gICAgICA6c2hvdz1cInNob3dBbGVydFwiXG4gICAgICBAc2hvdy1hbGVydD1cInVwZGF0ZUFsZXJ0KCRldmVudClcIlxuICAgICAgY2xhc3M9XCJtYi0yXCJcbiAgICAvPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiB2LWlmPVwiYWN0dWFsVXNlci5yb2xlID09ICdBZG1pbmlzdHJhZG9yJ1wiPlxuICAgICAgPHYtcm93PlxuICAgICAgICA8di1jb2wgYWxpZ249XCJzdGFydFwiIGNvbHM9XCIxMlwiIG1kPVwiNlwiIHNtPVwiMTJcIj5cbiAgICAgICAgICA8di1idG4gaHJlZj1cIi9yZXN1bHRzQ3VzY2F0bGFuXCIgY2xhc3M9XCJidG4tbm9ybWFsLWNsb3NlXCIgcm91bmRlZD5cbiAgICAgICAgICAgIFZvbHZlclxuICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgIDwvdi1jb2w+XG4gICAgICAgIDx2LWNvbCBhbGlnbj1cImVuZFwiIGNvbHM9XCIxMlwiIG1kPVwiNlwiIHNtPVwiMTJcIj5cbiAgICAgICAgICA8di1idG4gaHJlZj1cIi90cmFja2luZ0N1c2NhdGxhblwiIGNsYXNzPVwiYnRuLW5vcm1hbFwiIHJvdW5kZWQ+XG4gICAgICAgICAgICBTaWd1aWVudGVcbiAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8L3YtY29sPlxuICAgICAgPC92LXJvdz5cbiAgICA8L2Rpdj5cbiAgICA8di1kYXRhLXRhYmxlXG4gICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxuICAgICAgOml0ZW1zPVwicmVjb3Jkc0ZpbHRlcmVkXCJcbiAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICBzb3J0LWJ5PVwiYWN0aW9uX2Rlc2NyaXB0aW9uXCJcbiAgICAgIGNsYXNzPVwiZWxldmF0aW9uLTMgc2hhZG93IHAtMyBtdC0zXCJcbiAgICA+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90OnRvcD5cbiAgICAgICAgPHYtdG9vbGJhciBmbGF0PlxuICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGU+QWNjaW9uZXM8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1wiIG1heC13aWR0aD1cIjcwMHB4XCIgcGVyc2lzdGVudD5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aXZhdG9yPVwie31cIj5cbiAgICAgICAgICAgICAgPHYtcm93PlxuICAgICAgICAgICAgICAgIDx2LWNvbCBhbGlnbj1cImVuZFwiPlxuICAgICAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMiBidG4tbm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJsb2FkaW5nICE9IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib3Blbk1vZGFsXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQWdyZWdhclxuICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgIDx2LWNvbFxuICAgICAgICAgICAgICAgICAgeHM9XCI2XCJcbiAgICAgICAgICAgICAgICAgIHNtPVwiNlwiXG4gICAgICAgICAgICAgICAgICBtZD1cIjZcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLW5vbmUgZC1tZC1ibG9jayBkLWxnLWJsb2NrXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQnVzY2FyXCJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIlwiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICBAa2V5dXA9XCJzZWFyY2hWYWx1ZSgpXCJcbiAgICAgICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICA8L3Ytcm93PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx2LWNhcmQgY2xhc3M9XCJmbGV4Y2FyZFwiIGhlaWdodD1cIjEwMCVcIj5cbiAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJteC1hdXRvIHB0LTMgbWItMyB0ZXh0LWNlbnRlciBibGFjay1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGZvcm1UaXRsZSB9fVxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDwvdi1jYXJkLXRpdGxlPlxuXG4gICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cbiAgICAgICAgICAgICAgICA8di1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8IS0tIEZvcm0gLS0+XG4gICAgICAgICAgICAgICAgICA8di1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRGVzY3JpcHRpb24gQWNjaW9uZXMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiBzbT1cIjEyXCIgbWQ9XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiYXNlLXRleHQtYXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBY2Npb25lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCIkdi5lZGl0ZWRJdGVtLmFjdGlvbl9kZXNjcmlwdGlvbi4kbW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLmFjdGlvbl9kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDptaW49XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDptYXg9XCI1MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJvd3M9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIERlc2NyaXB0aW9uIEFjY2lvbmVzLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBSZXN1bHRzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8di1jb2wgY29scz1cIjEyXCIgc209XCIxMlwiIG1kPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YmFzZS1zZWxlY3Qtc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlc3VsdGFkb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiJHYuZWRpdGVkSXRlbS5yZXN1bHRfZGVzY3JpcHRpb24uJG1vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtcz1cInJlc3VsdHNDdXNjYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtPVwicmVzdWx0X2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS5yZXN1bHRfZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gUmVzdWx0cyAtLT5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIFVuaXQgLS0+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiBzbT1cIjZcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YmFzZS1zZWxlY3Qtc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVuaWRhZCBkZSBtZWRpZGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiJHYuZWRpdGVkSXRlbS51bml0X25hbWUuJG1vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtcz1cInVuaXRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09XCJ1bml0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLnVuaXRfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBVbml0IC0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gVXNlcnMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiBzbT1cIjZcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YmFzZS1zZWxlY3Qtc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVubGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCIkdi5lZGl0ZWRJdGVtLnVzZXJfbmFtZS4kbW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLnVzZXJfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aXRlbXM9XCJ1c2Vyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtPVwidXNlcl9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIDpyZWFkb25seT1cInRydWVcIiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBVc2VycyAtLT5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIFJlc3BvbnNhYmxlIC0tPlxuICAgICAgICAgICAgICAgICAgICA8di1jb2wgY29scz1cIjEyXCIgc209XCIxMlwiIG1kPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YmFzZS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZXNwb25zYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiJHYuZWRpdGVkSXRlbS5yZXNwb25zYWJsZV9uYW1lLiRtb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0ucmVzcG9uc2FibGVfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIFJlc3BvbnNhYmxlIC0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS1WZXJpZmljYXRpb24gTWV0aG9kIC0tPlxuICAgICAgICAgICAgICAgICAgICA8di1jb2wgY29scz1cIjEyXCIgc209XCIxMlwiIG1kPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YmFzZS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNZWRpbyBkZSB2ZXJpZmljYWNpw7NuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLnZlcmlmaWNhdGlvbl9tZXRob2QuJG1vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS52ZXJpZmljYXRpb25fbWV0aG9kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gVmVyaWZpY2F0aW9uIE1ldGhvZCAtLT5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIERhdGEgU291cmNlIC0tPlxuICAgICAgICAgICAgICAgICAgICA8di1jb2wgY29scz1cIjEyXCIgc209XCI2XCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJhc2UtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRnVlbnRlIGRlIGRhdG9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLmRhdGFfc291cmNlLiRtb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0uZGF0YV9zb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEYXRhIFNvdXJjZSAtLT5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIEJ1YmdldCBleGVjdXRlZCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiMTJcIiBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YmFzZS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcmVzdXB1ZXN0byBlamVjdXRhZG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiJHYuZWRpdGVkSXRlbS5idWRnZXRfZXhlY3V0ZWQuJG1vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS5idWRnZXRfZXhlY3V0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBCdWJnZXQgZXhlY3V0ZWQgLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBZZWFyIEdvYWwgQWN0aW9ucyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiNlwiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiYXNlLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1ldGEgZGUgYWN0aXZpZGFkZXMgYW51YWxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCIkdi5lZGl0ZWRJdGVtLnllYXJfZ29hbF9hY3Rpb25zLiRtb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0ueWVhcl9nb2FsX2FjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tYXNrPVwiJyMjIyMnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gWWVhciBHb2FsIEFjdGlvbnMgLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBBbm51YWwgQWN0aW9ucyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8di1jb2wgY29scz1cIjEyXCIgc209XCI2XCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJhc2UtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTsO6bWVybyBkZSBhY2Npb25lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCIkdi5lZGl0ZWRJdGVtLmFubnVhbF9hY3Rpb25zLiRtb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0uYW5udWFsX2FjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tYXNrPVwiJyMjIyMnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOm1pbj1cIjIwMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOm1heD1cIjIwNTBcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+IC0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIEFubnVhbCBBY3Rpb25zIC0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTWVzZXMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjY2lvbmUgbG9zIG1lc2VzIHF1ZSBzZSBsZSBkYXLDoSBzZWd1aW1pZW50b1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTW9udGhzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8di1jb2xcbiAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgc209XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICBtZD1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicHQtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJtb250aCBpbiBlZGl0ZWRJdGVtLm1vbnRoc1wiXG4gICAgICAgICAgICAgICAgICAgICAgOmtleT1cIm1vbnRoLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDx2LWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwibW9udGgudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwibW9udGgubW9udGhfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJudW1iZXJNb250aHMoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvdi1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPGJhc2UtZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPVwiQ2FtcG8gcmVxdWVyaWRvLlwiXG4gICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCJ2YWxpZGF0aW9uLm1vbnRoc1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTW9udGhzIC0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRXhlY3V0ZWQtLT5cbiAgICAgICAgICAgICAgICAgIDwvdi1yb3c+XG4gICAgICAgICAgICAgICAgICA8IS0tIEZvcm0gLS0+XG4gICAgICAgICAgICAgICAgICA8di1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJidG4tbm9ybWFsIG5vLXVwcGVyY2FzZSBtdC0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNhdmVcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEd1YXJkYXJcbiAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJ0bi1ub3JtYWwtY2xvc2Ugbm8tdXBwZXJjYXNlIG10LTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbGFyXG4gICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICAgIDwvdi1yb3c+XG4gICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgIDwvdi1kaWFsb2c+XG4gICAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dEZWxldGVcIiBtYXgtd2lkdGg9XCI0MDBweFwiPlxuICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cImgtMTAwXCI+XG4gICAgICAgICAgICAgIDx2LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJibGFjay1zZWNvbmRhcnkgdGV4dC1jZW50ZXIgbXQtMyBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICBFbGltaW5hciByZWdpc3Ryb1xuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPHYtcm93PlxuICAgICAgICAgICAgICAgICAgPHYtY29sIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYnRuLW5vcm1hbCBuby11cHBlcmNhc2UgbXQtMyBtYi0zIHByLTUgcGwtNSBteC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVsZXRlSXRlbUNvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgID5Db25maXJtYXI8L3YtYnRuXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJidG4tbm9ybWFsLWNsb3NlIG5vLXVwcGVyY2FzZSBtdC0zIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjbG9zZURlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxhclxuICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICA8L3Ytcm93PlxuICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgPC92LWRpYWxvZz5cbiAgICAgICAgPC92LXRvb2xiYXI+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDpbYGl0ZW0uYWN0aW9uc2BdPVwieyBpdGVtIH1cIj5cbiAgICAgICAgPHYtaWNvbiBzbWFsbCBjbGFzcz1cIm1yLTJcIiBAY2xpY2s9XCJlZGl0SXRlbShpdGVtKVwiPiBtZGktcGVuY2lsIDwvdi1pY29uPlxuICAgICAgICA8di1pY29uIHNtYWxsIEBjbGljaz1cImRlbGV0ZUl0ZW0oaXRlbSlcIj4gbWRpLWRlbGV0ZSA8L3YtaWNvbj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90Om5vLWRhdGE+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1ub3JtYWwtc2Vjb25kYXJ5IG5vLWRlY29yYXRpb25cIlxuICAgICAgICAgIEBjbGljaz1cImluaXRpYWxpemVcIlxuICAgICAgICA+XG4gICAgICAgICAgUmVpbmljaWFyXG4gICAgICAgIDwvYT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC92LWRhdGEtdGFibGU+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWYWxpZGF0aW9ucyBmcm9tIFwiLi9WYWxpZGF0aW9uc1wiO1xuaW1wb3J0IE1ldGhvZHMgZnJvbSBcIi4vbWV0aG9kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGE6ICgpID0+ICh7XG4gICAgc2VhcmNoOiBcIlwiLFxuICAgIGRpYWxvZzogZmFsc2UsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZGlhbG9nRGVsZXRlOiBmYWxzZSxcbiAgICBoZWFkZXJzOiBbXG4gICAgICB7IHRleHQ6IFwiUkVTVUxUQURPXCIsIHZhbHVlOiBcInJlc3VsdF9kZXNjcmlwdGlvblwiIH0sXG4gICAgICB7IHRleHQ6IFwiQUNDScOTTlwiLCB2YWx1ZTogXCJhY3Rpb25fZGVzY3JpcHRpb25cIiB9LFxuICAgICAgeyB0ZXh0OiBcIlVELiBPUkdBTklaQVRJVkFcIiwgdmFsdWU6IFwib3VfbmFtZVwiIH0sXG4gICAgICB7IHRleHQ6IFwiTUVUQSBERSBBQ0NJT05FUyBBTlVBTEVTXCIsIHZhbHVlOiBcInllYXJfZ29hbF9hY3Rpb25zXCIgfSxcbiAgICAgIC8vIHsgdGV4dDogXCJOTy4gREUgQUNDSU9ORVNcIiwgdmFsdWU6IFwiYW5udWFsX2FjdGlvbnNcIiB9LFxuICAgICAgeyB0ZXh0OiBcIkHDkU9cIiwgdmFsdWU6IFwieWVhcl9uYW1lXCIgfSxcbiAgICAgIHsgdGV4dDogXCJBQ0NJT05FU1wiLCB2YWx1ZTogXCJhY3Rpb25zXCIsIHNvcnRhYmxlOiBmYWxzZSB9LFxuICAgIF0sXG4gICAgcmVjb3JkczogW10sXG4gICAgcmVjb3Jkc0ZpbHRlcmVkOiBbXSxcbiAgICBlZGl0ZWRJbmRleDogLTEsXG4gICAgZWRpdGVkSXRlbToge1xuICAgICAgYWN0aW9uX2Rlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgLy8gYW5udWFsX2FjdGlvbnM6IDAsXG4gICAgICB5ZWFyX2dvYWxfYWN0aW9uczogMCxcbiAgICAgIHJlc3BvbnNhYmxlX25hbWU6IFwiXCIsXG4gICAgICB2ZXJpZmljYXRpb25fbWV0aG9kOiBcIlwiLFxuICAgICAgZGF0YV9zb3VyY2U6IFwiXCIsXG4gICAgICBidWRnZXRfZXhlY3V0ZWQ6IDAsXG4gICAgICB1c2VyX25hbWU6IFwiXCIsXG4gICAgICByZXN1bHRfZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICB1bml0X25hbWU6IFwiXCIsXG4gICAgICBtb250aHM6IFtdLFxuICAgIH0sXG4gICAgZGVmYXVsdEl0ZW06IHtcbiAgICAgIGFjdGlvbl9kZXNjcmlwdGlvbjogXCJcIixcbiAgICAgIC8vIGFubnVhbF9hY3Rpb25zOiAwLFxuICAgICAgeWVhcl9nb2FsX2FjdGlvbnM6IDAsXG4gICAgICByZXNwb25zYWJsZV9uYW1lOiBcIlwiLFxuICAgICAgdmVyaWZpY2F0aW9uX21ldGhvZDogXCJcIixcbiAgICAgIGRhdGFfc291cmNlOiBcIlwiLFxuICAgICAgYnVkZ2V0X2V4ZWN1dGVkOiAwLFxuICAgICAgdXNlcl9uYW1lOiBcIlwiLFxuICAgICAgcmVzdWx0X2Rlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgdW5pdF9uYW1lOiBcIlwiLFxuICAgICAgbW9udGhzOiBbXSxcbiAgICB9LFxuXG4gICAgdGV4dEFsZXJ0OiBcIlwiLFxuICAgIGFsZXJ0RXZlbnQ6IFwic3VjY2Vzc1wiLFxuICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgdXNlcnM6IFtdLFxuICAgIHVuaXRzOiBbXSxcbiAgICByZXN1bHRzQ3VzY2E6IFtdLFxuICAgIHJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkOiBmYWxzZSxcbiAgICBhY3R1YWxVc2VyOiB7fSxcbiAgICB2YWxpZGF0aW9uOiB7XG4gICAgICBtb250aHM6IHtcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICB9KSxcblxuICAvLyBWYWxpZGF0aW9uc1xuICB2YWxpZGF0aW9uczogVmFsaWRhdGlvbnMsXG4gIC8vIFZhbGlkYXRpb25zXG4gIGNvbXB1dGVkOiB7XG4gICAgZm9ybVRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWRpdGVkSW5kZXggPT09IC0xID8gXCJOdWV2byByZWdpc3Ryb1wiIDogXCJFZGl0YXIgcmVnaXN0cm9cIjtcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgZGlhbG9nKHZhbCkge1xuICAgICAgdmFsIHx8IHRoaXMuY2xvc2UoKTtcbiAgICB9LFxuICAgIGRpYWxvZ0RlbGV0ZSh2YWwpIHtcbiAgICAgIHZhbCB8fCB0aGlzLmNsb3NlRGVsZXRlKCk7XG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9LFxuXG4gIG1ldGhvZHM6IE1ldGhvZHMsXG59O1xuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IFwiZGF0YS1hcHBcIjogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJhbGVydC10aW1lLW91dFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHJlZGlyZWN0OiBfdm0ucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICByZWRpcmVjdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVUaW1lT3V0KCRldmVudClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhbGVydFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0ZXh0OiBfdm0udGV4dEFsZXJ0LFxuICAgICAgICAgIGV2ZW50OiBfdm0uYWxlcnRFdmVudCxcbiAgICAgICAgICBzaG93OiBfdm0uc2hvd0FsZXJ0LFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwic2hvdy1hbGVydFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZUFsZXJ0KCRldmVudClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmFjdHVhbFVzZXIucm9sZSA9PSBcIkFkbWluaXN0cmFkb3JcIlxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhbGlnbjogXCJzdGFydFwiLCBjb2xzOiBcIjEyXCIsIG1kOiBcIjZcIiwgc206IFwiMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1ub3JtYWwtY2xvc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvcmVzdWx0c0N1c2NhdGxhblwiLCByb3VuZGVkOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICBWb2x2ZXJcXG4gICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgYWxpZ246IFwiZW5kXCIsIGNvbHM6IFwiMTJcIiwgbWQ6IFwiNlwiLCBzbTogXCIxMlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tbm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL3RyYWNraW5nQ3VzY2F0bGFuXCIsIHJvdW5kZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIFNpZ3VpZW50ZVxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtZGF0YS10YWJsZVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0zIHNoYWRvdyBwLTMgbXQtM1wiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgIGl0ZW1zOiBfdm0ucmVjb3Jkc0ZpbHRlcmVkLFxuICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nLFxuICAgICAgICAgIFwic29ydC1ieVwiOiBcImFjdGlvbl9kZXNjcmlwdGlvblwiLFxuICAgICAgICB9LFxuICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcInRvcFwiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXJcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGF0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIFtfdm0uX3YoXCJBY2Npb25lc1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjcwMHB4XCIsIHBlcnNpc3RlbnQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICh7fSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBhbGlnbjogXCJlbmRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTIgYnRuLW5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5sb2FkaW5nICE9IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcGVuTW9kYWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgQWdyZWdhclxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLW5vbmUgZC1tZC1ibG9jayBkLWxnLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czogXCI2XCIsIHNtOiBcIjZcIiwgbWQ6IFwiNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQnVzY2FyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VhcmNoVmFsdWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleGNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhlaWdodDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm14LWF1dG8gcHQtMyBtYi0zIHRleHQtY2VudGVyIGJsYWNrLXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtVGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLXRleHQtYXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJBY2Npb25lc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWN0aW9uX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzOiA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWN0aW9uX2Rlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFjdGlvbl9kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgJCR2ID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCR2LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiR2LmVkaXRlZEl0ZW0uYWN0aW9uX2Rlc2NyaXB0aW9uLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJhc2Utc2VsZWN0LXNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJSZXN1bHRhZG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5yZXN1bHRzQ3VzY2EsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IFwicmVzdWx0X2Rlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN1bHRfZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN1bHRfZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdWx0X2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiR2LmVkaXRlZEl0ZW0ucmVzdWx0X2Rlc2NyaXB0aW9uLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLXNlbGVjdC1zZWFyY2hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVW5pZGFkIGRlIG1lZGlkYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnVuaXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBcInVuaXRfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLnVuaXRfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS51bml0X25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudW5pdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiAkJHYgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHYudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJHYuZWRpdGVkSXRlbS51bml0X25hbWUuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sczogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc206IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJhc2Utc2VsZWN0LXNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJFbmxhY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS51c2VyX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0udXNlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IFwidXNlcl9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW0udXNlcl9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVzZXJfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgJCR2ID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCR2LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiR2LmVkaXRlZEl0ZW0udXNlcl9uYW1lLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJhc2UtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUmVzcG9uc2FibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3BvbnNhYmxlX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UZXh0VHlwZTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNwb25zYWJsZV9uYW1lLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNwb25zYWJsZV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiR2LmVkaXRlZEl0ZW0ucmVzcG9uc2FibGVfbmFtZS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTWVkaW8gZGUgdmVyaWZpY2FjacOzblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmVyaWZpY2F0aW9uX21ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlOiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZlcmlmaWNhdGlvbl9tZXRob2RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmVyaWZpY2F0aW9uX21ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkdi5lZGl0ZWRJdGVtLnZlcmlmaWNhdGlvbl9tZXRob2QuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sczogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc206IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJhc2UtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRnVlbnRlIGRlIGRhdG9zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhX3NvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGFfc291cmNlLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRhX3NvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkdi5lZGl0ZWRJdGVtLmRhdGFfc291cmNlLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlByZXN1cHVlc3RvIGVqZWN1dGFkb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnVkZ2V0X2V4ZWN1dGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnVkZ2V0X2V4ZWN1dGVkLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idWRnZXRfZXhlY3V0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mICQkdiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkdi50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkdi5lZGl0ZWRJdGVtLmJ1ZGdldF9leGVjdXRlZC4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1hc2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbWFza1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIiMjIyNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIicjIyMjJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTWV0YSBkZSBhY3RpdmlkYWRlcyBhbnVhbGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC55ZWFyX2dvYWxfYWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnllYXJfZ29hbF9hY3Rpb25zLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC55ZWFyX2dvYWxfYWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgJCR2ID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCR2LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiR2LmVkaXRlZEl0ZW0ueWVhcl9nb2FsX2FjdGlvbnMuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHQtMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImg0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjY2lvbmUgbG9zIG1lc2VzIHF1ZSBzZSBsZSBkYXLDoSBzZWd1aW1pZW50b1xcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRlZEl0ZW0ubW9udGhzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobW9udGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbW9udGguaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInB0LTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG1vbnRoLm1vbnRoX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5udW1iZXJNb250aHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbW9udGgudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vbnRoLnZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJhc2UtZXJyb3JcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2FtcG8gcmVxdWVyaWRvLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IF92bS52YWxpZGF0aW9uLm1vbnRocyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuLW5vcm1hbCBuby11cHBlcmNhc2UgbXQtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uc2F2ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIEd1YXJkYXJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4tbm9ybWFsLWNsb3NlIG5vLXVwcGVyY2FzZSBtdC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIENhbmNlbGFyXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI0MDBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kaWFsb2dEZWxldGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaWFsb2dEZWxldGUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGlhbG9nRGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaC0xMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJibGFjay1zZWNvbmRhcnkgdGV4dC1jZW50ZXIgbXQtMyBtYi0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgRWxpbWluYXIgcmVnaXN0cm9cXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBhbGlnbjogXCJjZW50ZXJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4tbm9ybWFsIG5vLXVwcGVyY2FzZSBtdC0zIG1iLTMgcHItNSBwbC01IG14LWF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IF92bS5kZWxldGVJdGVtQ29uZmlybSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29uZmlybWFyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ub3JtYWwtY2xvc2Ugbm8tdXBwZXJjYXNlIG10LTMgbWItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VEZWxldGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBDYW5jZWxhclxcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBgaXRlbS5hY3Rpb25zYCxcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICh7IGl0ZW0gfSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWljb25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzbWFsbDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmVkaXRJdGVtKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgbWRpLXBlbmNpbCBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc21hbGw6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVJdGVtKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgbWRpLWRlbGV0ZSBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJuby1kYXRhXCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tbm9ybWFsLXNlY29uZGFyeSBuby1kZWNvcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmluaXRpYWxpemUgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgUmVpbmljaWFyXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApLFxuICAgICAgfSksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGFjdGlvbnNDdXNjYUFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogXCIvYXBpL2FjdGlvbnNDdXNjYVwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnNDdXNjYUFwaTsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IG1vbnRoQXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBcIi9hcGkvbW9udGhcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb250aEFwaTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgcmVzdWx0c0N1c2NhQXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBcIi9hcGkvcmVzdWx0c0N1c2NhXCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzdWx0c0N1c2NhQXBpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCB1bml0QXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBcIi9hcGkvdW5pdFwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRBcGk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IHVzZXJBcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IFwiL2FwaS91c2VyXCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlckFwaTtcbiIsImltcG9ydCB7XG4gICAgcmVxdWlyZWQsXG4gICAgbWluTGVuZ3RoLFxuICAgIG1heExlbmd0aCxcbiAgICBoZWxwZXJzLFxufSBmcm9tIFwidnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzXCI7XG5cbmNvbnN0IFZhbGlkYXRpb25zID0ge1xuICAgIGVkaXRlZEl0ZW06IHtcbiAgICAgICAgYWN0aW9uX2Rlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgoNTAwKSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gYW5udWFsX2FjdGlvbnM6IHtcbiAgICAgICAgLy8gICAgIHJlcXVpcmVkLFxuICAgICAgICAvLyAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgoMSksXG4gICAgICAgIC8vICAgICBtYXhMZW5ndGg6IG1heExlbmd0aCgxMCksXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHllYXJfZ29hbF9hY3Rpb25zOiB7XG4gICAgICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgoMTApLFxuICAgICAgICB9LFxuICAgICAgICByZXNwb25zYWJsZV9uYW1lOiB7XG4gICAgICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgoMTUwKSxcbiAgICAgICAgfSxcbiAgICAgICAgdmVyaWZpY2F0aW9uX21ldGhvZDoge1xuICAgICAgICAgICAgcmVxdWlyZWQsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcbiAgICAgICAgICAgIG1heExlbmd0aDogbWF4TGVuZ3RoKDE1MCksXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGFfc291cmNlOiB7XG4gICAgICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiBtYXhMZW5ndGgoMTUwKSxcbiAgICAgICAgfSxcblxuICAgICAgICBidWRnZXRfZXhlY3V0ZWQ6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgoMSksXG4gICAgICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aCgxMCksXG4gICAgICAgIH0sXG4gICAgICAgIHVzZXJfbmFtZToge1xuICAgICAgICAgICAgcmVxdWlyZWQsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzdWx0X2Rlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgICB9LFxuICAgICAgICB1bml0X25hbWU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgoMSksXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRpb25zO1xuIiwiaW1wb3J0IHVzZXJBcGkgZnJvbSBcIi4uLy4uLy4uL2FwaXMvdXNlckFwaVwiO1xuaW1wb3J0IHJlc3VsdHNDdXNjYUFwaSBmcm9tIFwiLi4vLi4vLi4vYXBpcy9yZXN1bHRzQ3VzY2FBcGlcIjtcbmltcG9ydCBtb250aEFwaSBmcm9tIFwiLi4vLi4vLi4vYXBpcy9tb250aEFwaVwiO1xuaW1wb3J0IHVuaXRBcGkgZnJvbSBcIi4uLy4uLy4uL2FwaXMvdW5pdEFwaVwiO1xuaW1wb3J0IGFjdGlvbnNDdXNjYUFwaSBmcm9tIFwiLi4vLi4vLi4vYXBpcy9hY3Rpb25zQ3VzY2FBcGlcIjtcbmltcG9ydCBsaWIgZnJvbSBcIi4uLy4uLy4uL2xpYnMvZnVuY3Rpb25cIjtcbi8vaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFzeW5jIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMucmVjb3JkcyA9IFtdO1xuICAgICAgICB0aGlzLnJlY29yZHNGaWx0ZXJlZCA9IFtdO1xuXG4gICAgICAgIGxldCByZXF1ZXN0cyA9IFtcbiAgICAgICAgICAgIGFjdGlvbnNDdXNjYUFwaS5nZXQoKSxcbiAgICAgICAgICAgIHVzZXJBcGkuZ2V0KG51bGwsIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHsgc2tpcDogMCwgdGFrZTogMjAwIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHJlc3VsdHNDdXNjYUFwaS5nZXQoKSxcbiAgICAgICAgICAgIG1vbnRoQXBpLmdldCgpLFxuICAgICAgICAgICAgdXNlckFwaS5nZXQoXCIvYWN0dWFsVXNlclJvbGVcIiksXG4gICAgICAgICAgICB1c2VyQXBpLnBvc3QoXCIvYWN0dWFsVXNlclwiKSxcbiAgICAgICAgICAgIHVuaXRBcGkuZ2V0KCksXG4gICAgICAgIF07XG4gICAgICAgIGxldCByZXNwb25zZXMgPSBhd2FpdCBQcm9taXNlLmFsbChyZXF1ZXN0cykuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgXCJObyBmdWUgcG9zaWJsZSBvYnRlbmVyIGxvcyByZWdpc3Ryb3MuXCIsXG4gICAgICAgICAgICAgICAgXCJmYWlsXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gbGliLnZlcmlmeVNlc3Npb25GaW5pc2hlZChcbiAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgNDAxXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzcG9uc2VzICYmIHJlc3BvbnNlc1swXS5kYXRhLm1lc3NhZ2UgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAgIHRoaXMucmVjb3JkcyA9IHJlc3BvbnNlc1swXS5kYXRhLmFjdGlvbnNDdXNjYTtcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXNwb25zZXNbMV0uZGF0YS51c2VycztcbiAgICAgICAgICAgIHRoaXMucmVzdWx0c0N1c2NhID0gcmVzcG9uc2VzWzJdLmRhdGEucmVzdWx0c0N1c2NhO1xuICAgICAgICAgICAgdGhpcy5tb250aHMgPSByZXNwb25zZXNbM10uZGF0YS5tb250aHM7XG4gICAgICAgICAgICB0aGlzLmVkaXRlZEl0ZW0ubW9udGhzID0gdGhpcy5tb250aHM7XG4gICAgICAgICAgICB0aGlzLmFjdHVhbFVzZXIgPSByZXNwb25zZXNbNV0uZGF0YS51c2VyO1xuICAgICAgICAgICAgdGhpcy51bml0cyA9IHJlc3BvbnNlc1s2XS5kYXRhLnVuaXRzO1xuXG4gICAgICAgICAgICB0aGlzLnJlY29yZHNGaWx0ZXJlZCA9IHRoaXMucmVjb3JkcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgZWRpdEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLmRpYWxvZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSB0aGlzLnJlY29yZHNGaWx0ZXJlZC5pbmRleE9mKGl0ZW0pO1xuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKTtcbiAgICB9LFxuXG4gICAgZGVsZXRlSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSB0aGlzLnJlY29yZHNGaWx0ZXJlZC5pbmRleE9mKGl0ZW0pO1xuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKTtcbiAgICAgICAgdGhpcy5kaWFsb2dEZWxldGUgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBhc3luYyBkZWxldGVJdGVtQ29uZmlybSgpIHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYWN0aW9uc0N1c2NhQXBpXG4gICAgICAgICAgICAuZGVsZXRlKGAvJHt0aGlzLmVkaXRlZEl0ZW0uaWR9YClcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcIk5vIGZ1ZSBwb3NpYmxlIGVsaW1pbmFyIGVsIHJlZ2lzdHJvcy5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJmYWlsXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gbGliLnZlcmlmeVNlc3Npb25GaW5pc2hlZChcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzLFxuICAgICAgICAgICAgICAgIDIwMFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJSZWdpc3RybyBlbGltaW5hZG8uXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJObyBzZSBwdWRvIGVsaW1pbmFyIGVsIHJlZ2lzdHJvLlwiLCBcImZhaWxcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5jbG9zZURlbGV0ZSgpO1xuICAgIH0sXG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gdGhpcy5kZWZhdWx0SXRlbTtcbiAgICAgICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNsb3NlRGVsZXRlKCkge1xuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSB0aGlzLmRlZmF1bHRJdGVtO1xuICAgICAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRpYWxvZ0RlbGV0ZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBhc3luYyBzYXZlKCkge1xuICAgICAgICB0aGlzLiR2LiR0b3VjaCgpO1xuICAgICAgICBpZiAodGhpcy4kdi5lZGl0ZWRJdGVtLiRpbnZhbGlkIHx8IHRoaXMubnVtYmVyTW9udGhzKCkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJDYW1wb3Mgb2JsaWdhdG9yaW9zLlwiLCBcImZhaWxcIik7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmVkaXRlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFjdGlvbnNDdXNjYUFwaVxuICAgICAgICAgICAgICAgIC5wdXQoYC8ke3RoaXMuZWRpdGVkSXRlbS5pZH1gLCB0aGlzLmVkaXRlZEl0ZW0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTm8gZnVlIHBvc2libGUgYWN0dWFsaXphciBlbCByZWdpc3Ryby5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFpbFwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFNlc3Npb25GaW5pc2hlZCA9IGxpYi52ZXJpZnlTZXNzaW9uRmluaXNoZWQoXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICA0MTlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLm1lc3NhZ2UgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcIlJlZ2lzdHJvIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlID09IFwicmVhc29uXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcIkVsIHVzdWFyaW8gbm8gcG9zZWUgbG9zIHBlcm1pc29zIHN1ZmljaWVudGVzIHBhcmEgZXN0YSBhY2Npw7NuLlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlYXNvblwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFjdGlvbnNDdXNjYUFwaVxuICAgICAgICAgICAgICAgIC5wb3N0KG51bGwsIHRoaXMuZWRpdGVkSXRlbSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJObyBmdWUgcG9zaWJsZSBjcmVhciBlbCByZWdpc3Ryby5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFpbFwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLm1lc3NhZ2UgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcIlJlZ2lzdHJvIGFsbWFjZW5hZG8gY29ycmVjdGFtZW50ZS5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfSxcblxuICAgIHNlYXJjaFZhbHVlKCkge1xuICAgICAgICB0aGlzLnJlY29yZHNGaWx0ZXJlZCA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaCAhPSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZHMuZm9yRWFjaCgocmVjb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNlYXJjaENvbmNhdCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWNvcmQuYWN0aW9uX2Rlc2NyaXB0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaENvbmNhdCArPSByZWNvcmQuYWN0aW9uX2Rlc2NyaXB0aW9uW2ldLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaENvbmNhdCA9PT0gdGhpcy5zZWFyY2gudG9VcHBlckNhc2UoKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucmVjb3Jkc0ZpbHRlcmVkLnNvbWUoKHJlYykgPT4gcmVjID09IHJlY29yZClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZHNGaWx0ZXJlZC5wdXNoKHJlY29yZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVjb3Jkc0ZpbHRlcmVkID0gdGhpcy5yZWNvcmRzO1xuICAgIH0sXG5cbiAgICB1cGRhdGVBbGVydChzaG93ID0gZmFsc2UsIHRleHQgPSBcIkFsZXJ0YVwiLCBldmVudCA9IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgIHRoaXMudGV4dEFsZXJ0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5hbGVydEV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMuc2hvd0FsZXJ0ID0gc2hvdztcbiAgICB9LFxuXG4gICAgdXBkYXRlVGltZU91dChldmVudCkge1xuICAgICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gZXZlbnQ7XG4gICAgfSxcblxuICAgIG9wZW5Nb2RhbCgpIHtcbiAgICAgICAgdGhpcy5kaWFsb2cgPSB0cnVlO1xuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0ucmVzdWx0X2Rlc2NyaXB0aW9uID1cbiAgICAgICAgICAgIHRoaXMucmVzdWx0c0N1c2NhWzBdLnJlc3VsdF9kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtLnVzZXJfbmFtZSA9IHRoaXMuYWN0dWFsVXNlci51c2VyX25hbWU7XG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbS5hY3Rpb25fZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0ucmVzcG9uc2FibGVfbmFtZSA9IFwiXCI7XG4gICAgICAgIC8vIHRoaXMuZWRpdGVkSXRlbS5hbm51YWxfYWN0aW9ucyA9IDA7XG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbS55ZWFyX2dvYWxfYWN0aW9ucyA9IDA7XG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbS5idWRnZXRfZXhlY3V0ZWQgPSAwO1xuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0udmVyaWZpY2F0aW9uX21ldGhvZCA9IFwiXCI7XG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbS5kYXRhX3NvdXJjZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbS5tb250aHMgPSB0aGlzLm1vbnRocztcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtLm1vbnRocy5mb3JFYWNoKChtb250aCkgPT4gKG1vbnRoLnZhbHVlID0gZmFsc2UpKTtcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtLnVuaXRfbmFtZSA9IHRoaXMudW5pdHNbMF0udW5pdF9uYW1lO1xuICAgICAgICAvL2NvbnN0IG1vbnRoX25hbWUgPSBtb21lbnQoKS5mb3JtYXQoXCJNTU1NXCIpO1xuICAgICAgICAvL3RoaXMuZWRpdGVkSXRlbS5tb250aF9uYW1lID0gbW9udGhfbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG1vbnRoX25hbWUuc2xpY2UoMSk7XG5cbiAgICAgICAgdGhpcy4kdi4kcmVzZXQoKTtcbiAgICB9LFxuXG4gICAgbnVtYmVyTW9udGhzKCkge1xuICAgICAgICB0aGlzLnZhbGlkYXRpb24ubW9udGhzLmVycm9yID0gIXRoaXMuZWRpdGVkSXRlbS5tb250aHMuc29tZShcbiAgICAgICAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50LnZhbHVlID09IHRydWVcbiAgICAgICAgKTtcblxuICAgICAgICAvLyB0aGlzLmVkaXRlZEl0ZW0uYW5udWFsX2FjdGlvbnMgPSB0aGlzLmVkaXRlZEl0ZW0ubW9udGhzLmZpbHRlcihcbiAgICAgICAgLy8gICAgIChlbGVtZW50KSA9PiBlbGVtZW50LnZhbHVlXG4gICAgICAgIC8vICkubGVuZ3RoO1xuICAgIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHZlcmlmeVNlc3Npb25GaW5pc2hlZDogKHN0YXR1cywgY29kZSA9IDIwMCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXMpO1xuICAgICAgICBpZiAoc3RhdHVzID09IDQxOSB8fCBzdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxcIiArIHN0YXR1cyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BY3Rpb25zQ3VzY2EudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxODVhOWI4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FjdGlvbnNDdXNjYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FjdGlvbnNDdXNjYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEluZm9ybcOhdGljYVxcXFxEb2N1bWVudHNcXFxccHJvamVjdHNNQ1xcXFxTSVNFLUNVU0NBLTIwMjItbWFpblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3MTg1YTliOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3MTg1YTliOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3MTg1YTliOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWN0aW9uc0N1c2NhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MTg1YTliOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3MTg1YTliOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY3VzY2F0bGFuL2FjdGlvbnMtY3VzY2EvQWN0aW9uc0N1c2NhLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BY3Rpb25zQ3VzY2EudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWN0aW9uc0N1c2NhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWN0aW9uc0N1c2NhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MTg1YTliOCZcIiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdhbHBoYScsIC9eW2EtekEtWl0qJC8pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnYWxwaGFOdW0nLCAvXlthLXpBLVowLTldKiQvKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbGlkYXRvcnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsaWRhdG9yc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ2FuZCdcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9ycy5sZW5ndGggPiAwICYmIHZhbGlkYXRvcnMucmVkdWNlKGZ1bmN0aW9uICh2YWxpZCwgZm4pIHtcbiAgICAgIHJldHVybiB2YWxpZCAmJiBmbi5hcHBseShfdGhpcywgYXJncyk7XG4gICAgfSwgdHJ1ZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChtaW4sIG1heCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdiZXR3ZWVuJyxcbiAgICBtaW46IG1pbixcbiAgICBtYXg6IG1heFxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICghL1xccy8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSAmJiArbWluIDw9ICt2YWx1ZSAmJiArbWF4ID49ICt2YWx1ZTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxID0gZXhwb3J0cy5yZWdleCA9IGV4cG9ydHMucmVmID0gZXhwb3J0cy5sZW4gPSB2b2lkIDA7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUGFyYW1zXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF93aXRoUGFyYW1zLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3dpdGhQYXJhbXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi93aXRoUGFyYW1zXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgcmVxID0gZnVuY3Rpb24gcmVxKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuICEhdmFsdWUubGVuZ3RoO1xuXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiAhaXNOYU4odmFsdWUuZ2V0VGltZSgpKTtcbiAgfVxuXG4gIGlmIChfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBfIGluIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gISFTdHJpbmcodmFsdWUpLmxlbmd0aDtcbn07XG5cbmV4cG9ydHMucmVxID0gcmVxO1xuXG52YXIgbGVuID0gZnVuY3Rpb24gbGVuKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlLmxlbmd0aDtcblxuICBpZiAoX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5sZW5ndGg7XG59O1xuXG5leHBvcnRzLmxlbiA9IGxlbjtcblxudmFyIHJlZiA9IGZ1bmN0aW9uIHJlZihyZWZlcmVuY2UsIHZtLCBwYXJlbnRWbSkge1xuICByZXR1cm4gdHlwZW9mIHJlZmVyZW5jZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlZmVyZW5jZS5jYWxsKHZtLCBwYXJlbnRWbSkgOiBwYXJlbnRWbVtyZWZlcmVuY2VdO1xufTtcblxuZXhwb3J0cy5yZWYgPSByZWY7XG5cbnZhciByZWdleCA9IGZ1bmN0aW9uIHJlZ2V4KHR5cGUsIGV4cHIpIHtcbiAgcmV0dXJuICgwLCBfd2l0aFBhcmFtcy5kZWZhdWx0KSh7XG4gICAgdHlwZTogdHlwZVxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gIXJlcSh2YWx1ZSkgfHwgZXhwci50ZXN0KHZhbHVlKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLnJlZ2V4ID0gcmVnZXg7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2RlY2ltYWwnLCAvXlstXT9cXGQqKFxcLlxcZCspPyQvKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgZW1haWxSZWdleCA9IC9eKD86W0EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLltBLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKnxcIig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3Zl18W1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkqXCIpQCg/Oig/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldezIsfSg/OlthLXowLTktXSpbYS16MC05XSk/fFxcWyg/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/fFthLXowLTktXSpbYS16MC05XTooPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMS1cXHg1YVxceDUzLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkrKVxcXSkkL2k7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnZW1haWwnLCBlbWFpbFJlZ2V4KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFscGhhXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9hbHBoYS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFscGhhTnVtXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9hbHBoYU51bS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFuZFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYW5kLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYmV0d2VlblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYmV0d2Vlbi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlY2ltYWxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2RlY2ltYWwuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlbWFpbFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZW1haWwuZGVmYXVsdDtcbiAgfVxufSk7XG5leHBvcnRzLmhlbHBlcnMgPSB2b2lkIDA7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpbnRlZ2VyXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlZ2VyLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXBBZGRyZXNzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pcEFkZHJlc3MuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtYWNBZGRyZXNzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tYWNBZGRyZXNzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWF4TGVuZ3RoXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tYXhMZW5ndGguZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtYXhWYWx1ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWF4VmFsdWUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtaW5MZW5ndGhcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21pbkxlbmd0aC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1pblZhbHVlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9taW5WYWx1ZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm5vdFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbm90LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibnVtZXJpY1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbnVtZXJpYy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm9yXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9vci5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlcXVpcmVkXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yZXF1aXJlZC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlcXVpcmVkSWZcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JlcXVpcmVkSWYuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZXF1aXJlZFVubGVzc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcmVxdWlyZWRVbmxlc3MuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzYW1lQXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3NhbWVBcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInVybFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdXJsLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2FscGhhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hbHBoYVwiKSk7XG5cbnZhciBfYWxwaGFOdW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2FscGhhTnVtXCIpKTtcblxudmFyIF9udW1lcmljID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9udW1lcmljXCIpKTtcblxudmFyIF9iZXR3ZWVuID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iZXR3ZWVuXCIpKTtcblxudmFyIF9lbWFpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZW1haWxcIikpO1xuXG52YXIgX2lwQWRkcmVzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXBBZGRyZXNzXCIpKTtcblxudmFyIF9tYWNBZGRyZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYWNBZGRyZXNzXCIpKTtcblxudmFyIF9tYXhMZW5ndGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21heExlbmd0aFwiKSk7XG5cbnZhciBfbWluTGVuZ3RoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9taW5MZW5ndGhcIikpO1xuXG52YXIgX3JlcXVpcmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZXF1aXJlZFwiKSk7XG5cbnZhciBfcmVxdWlyZWRJZiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVxdWlyZWRJZlwiKSk7XG5cbnZhciBfcmVxdWlyZWRVbmxlc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlcXVpcmVkVW5sZXNzXCIpKTtcblxudmFyIF9zYW1lQXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NhbWVBc1wiKSk7XG5cbnZhciBfdXJsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91cmxcIikpO1xuXG52YXIgX29yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9vclwiKSk7XG5cbnZhciBfYW5kID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hbmRcIikpO1xuXG52YXIgX25vdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbm90XCIpKTtcblxudmFyIF9taW5WYWx1ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWluVmFsdWVcIikpO1xuXG52YXIgX21heFZhbHVlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYXhWYWx1ZVwiKSk7XG5cbnZhciBfaW50ZWdlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaW50ZWdlclwiKSk7XG5cbnZhciBfZGVjaW1hbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZGVjaW1hbFwiKSk7XG5cbnZhciBoZWxwZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vY29tbW9uXCIpKTtcblxuZXhwb3J0cy5oZWxwZXJzID0gaGVscGVycztcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdpbnRlZ2VyJywgLyheWzAtOV0qJCl8KF4tWzAtOV0rJCkvKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gIHR5cGU6ICdpcEFkZHJlc3MnXG59LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKCEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbmliYmxlcyA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gIHJldHVybiBuaWJibGVzLmxlbmd0aCA9PT0gNCAmJiBuaWJibGVzLmV2ZXJ5KG5pYmJsZVZhbGlkKTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxudmFyIG5pYmJsZVZhbGlkID0gZnVuY3Rpb24gbmliYmxlVmFsaWQobmliYmxlKSB7XG4gIGlmIChuaWJibGUubGVuZ3RoID4gMyB8fCBuaWJibGUubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG5pYmJsZVswXSA9PT0gJzAnICYmIG5pYmJsZSAhPT0gJzAnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFuaWJibGUubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIG51bWVyaWMgPSArbmliYmxlIHwgMDtcbiAgcmV0dXJuIG51bWVyaWMgPj0gMCAmJiBudW1lcmljIDw9IDI1NTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgdmFyIHNlcGFyYXRvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJzonO1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtYWNBZGRyZXNzJ1xuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoISgwLCBfY29tbW9uLnJlcSkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBwYXJ0cyA9IHR5cGVvZiBzZXBhcmF0b3IgPT09ICdzdHJpbmcnICYmIHNlcGFyYXRvciAhPT0gJycgPyB2YWx1ZS5zcGxpdChzZXBhcmF0b3IpIDogdmFsdWUubGVuZ3RoID09PSAxMiB8fCB2YWx1ZS5sZW5ndGggPT09IDE2ID8gdmFsdWUubWF0Y2goLy57Mn0vZykgOiBudWxsO1xuICAgIHJldHVybiBwYXJ0cyAhPT0gbnVsbCAmJiAocGFydHMubGVuZ3RoID09PSA2IHx8IHBhcnRzLmxlbmd0aCA9PT0gOCkgJiYgcGFydHMuZXZlcnkoaGV4VmFsaWQpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG52YXIgaGV4VmFsaWQgPSBmdW5jdGlvbiBoZXhWYWxpZChoZXgpIHtcbiAgcmV0dXJuIGhleC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9eWzAtOWEtZl17Mn0kLyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobGVuZ3RoKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21heExlbmd0aCcsXG4gICAgbWF4OiBsZW5ndGhcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAoMCwgX2NvbW1vbi5sZW4pKHZhbHVlKSA8PSBsZW5ndGg7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChtYXgpIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbWF4VmFsdWUnLFxuICAgIG1heDogbWF4XG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKCEvXFxzLy50ZXN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpICYmICt2YWx1ZSA8PSArbWF4O1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobGVuZ3RoKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21pbkxlbmd0aCcsXG4gICAgbWluOiBsZW5ndGhcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAoMCwgX2NvbW1vbi5sZW4pKHZhbHVlKSA+PSBsZW5ndGg7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChtaW4pIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbWluVmFsdWUnLFxuICAgIG1pbjogbWluXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKCEvXFxzLy50ZXN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpICYmICt2YWx1ZSA+PSArbWluO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQodmFsaWRhdG9yKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ25vdCdcbiAgfSwgZnVuY3Rpb24gKHZhbHVlLCB2bSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgIXZhbGlkYXRvci5jYWxsKHRoaXMsIHZhbHVlLCB2bSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ251bWVyaWMnLCAvXlswLTldKiQvKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbGlkYXRvcnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsaWRhdG9yc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ29yJ1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3JzLmxlbmd0aCA+IDAgJiYgdmFsaWRhdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKHZhbGlkLCBmbikge1xuICAgICAgcmV0dXJuIHZhbGlkIHx8IGZuLmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICB9LCBmYWxzZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gIHR5cGU6ICdyZXF1aXJlZCdcbn0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiAoMCwgX2NvbW1vbi5yZXEpKHZhbHVlLnRyaW0oKSk7XG4gIH1cblxuICByZXR1cm4gKDAsIF9jb21tb24ucmVxKSh2YWx1ZSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChwcm9wKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ3JlcXVpcmVkSWYnLFxuICAgIHByb3A6IHByb3BcbiAgfSwgZnVuY3Rpb24gKHZhbHVlLCBwYXJlbnRWbSkge1xuICAgIHJldHVybiAoMCwgX2NvbW1vbi5yZWYpKHByb3AsIHRoaXMsIHBhcmVudFZtKSA/ICgwLCBfY29tbW9uLnJlcSkodmFsdWUpIDogdHJ1ZTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHByb3ApIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAncmVxdWlyZWRVbmxlc3MnLFxuICAgIHByb3A6IHByb3BcbiAgfSwgZnVuY3Rpb24gKHZhbHVlLCBwYXJlbnRWbSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVmKShwcm9wLCB0aGlzLCBwYXJlbnRWbSkgPyAoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSA6IHRydWU7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChlcXVhbFRvKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ3NhbWVBcycsXG4gICAgZXE6IGVxdWFsVG9cbiAgfSwgZnVuY3Rpb24gKHZhbHVlLCBwYXJlbnRWbSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gKDAsIF9jb21tb24ucmVmKShlcXVhbFRvLCB0aGlzLCBwYXJlbnRWbSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgdXJsUmVnZXggPSAvXig/Oig/Oig/Omh0dHBzP3xmdHApOik/XFwvXFwvKSg/OlxcUysoPzo6XFxTKik/QCk/KD86KD8hKD86MTB8MTI3KSg/OlxcLlxcZHsxLDN9KXszfSkoPyEoPzoxNjlcXC4yNTR8MTkyXFwuMTY4KSg/OlxcLlxcZHsxLDN9KXsyfSkoPyExNzJcXC4oPzoxWzYtOV18MlxcZHwzWzAtMV0pKD86XFwuXFxkezEsM30pezJ9KSg/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16MC05XFx1MDBhMS1cXHVmZmZmXVthLXowLTlcXHUwMGExLVxcdWZmZmZfLV17MCw2Mn0pP1thLXowLTlcXHUwMGExLVxcdWZmZmZdXFwuKSsoPzpbYS16XFx1MDBhMS1cXHVmZmZmXXsyLH1cXC4/KSkoPzo6XFxkezIsNX0pPyg/OlsvPyNdXFxTKik/JC9pO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ3VybCcsIHVybFJlZ2V4KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgd2l0aFBhcmFtcyA9IHByb2Nlc3MuZW52LkJVSUxEID09PSAnd2ViJyA/IHJlcXVpcmUoJy4vd2l0aFBhcmFtc0Jyb3dzZXInKS53aXRoUGFyYW1zIDogcmVxdWlyZSgnLi9wYXJhbXMnKS53aXRoUGFyYW1zO1xudmFyIF9kZWZhdWx0ID0gd2l0aFBhcmFtcztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy53aXRoUGFyYW1zID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbnZhciByb290ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHt9O1xuXG52YXIgZmFrZVdpdGhQYXJhbXMgPSBmdW5jdGlvbiBmYWtlV2l0aFBhcmFtcyhwYXJhbXNPckNsb3N1cmUsIG1heWJlVmFsaWRhdG9yKSB7XG4gIGlmIChfdHlwZW9mKHBhcmFtc09yQ2xvc3VyZSkgPT09ICdvYmplY3QnICYmIG1heWJlVmFsaWRhdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbWF5YmVWYWxpZGF0b3I7XG4gIH1cblxuICByZXR1cm4gcGFyYW1zT3JDbG9zdXJlKGZ1bmN0aW9uICgpIHt9KTtcbn07XG5cbnZhciB3aXRoUGFyYW1zID0gcm9vdC52dWVsaWRhdGUgPyByb290LnZ1ZWxpZGF0ZS53aXRoUGFyYW1zIDogZmFrZVdpdGhQYXJhbXM7XG5leHBvcnRzLndpdGhQYXJhbXMgPSB3aXRoUGFyYW1zOyJdLCJuYW1lcyI6WyJkYXRhIiwic2VhcmNoIiwiZGlhbG9nIiwibG9hZGluZyIsImRpYWxvZ0RlbGV0ZSIsImhlYWRlcnMiLCJ0ZXh0IiwidmFsdWUiLCJzb3J0YWJsZSIsInJlY29yZHMiLCJyZWNvcmRzRmlsdGVyZWQiLCJlZGl0ZWRJbmRleCIsImVkaXRlZEl0ZW0iLCJhY3Rpb25fZGVzY3JpcHRpb24iLCJ5ZWFyX2dvYWxfYWN0aW9ucyIsInJlc3BvbnNhYmxlX25hbWUiLCJ2ZXJpZmljYXRpb25fbWV0aG9kIiwiZGF0YV9zb3VyY2UiLCJidWRnZXRfZXhlY3V0ZWQiLCJ1c2VyX25hbWUiLCJyZXN1bHRfZGVzY3JpcHRpb24iLCJ1bml0X25hbWUiLCJtb250aHMiLCJkZWZhdWx0SXRlbSIsInRleHRBbGVydCIsImFsZXJ0RXZlbnQiLCJzaG93QWxlcnQiLCJ1c2VycyIsInVuaXRzIiwicmVzdWx0c0N1c2NhIiwicmVkaXJlY3RTZXNzaW9uRmluaXNoZWQiLCJhY3R1YWxVc2VyIiwidmFsaWRhdGlvbiIsImVycm9yIiwidmFsaWRhdGlvbnMiLCJjb21wdXRlZCIsImZvcm1UaXRsZSIsIndhdGNoIiwidmFsIiwiY3JlYXRlZCIsIm1ldGhvZHMiLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwiYXR0cnMiLCJyZWRpcmVjdCIsIm9uIiwiJGV2ZW50IiwidXBkYXRlVGltZU91dCIsIl92Iiwic3RhdGljQ2xhc3MiLCJldmVudCIsInNob3ciLCJ1cGRhdGVBbGVydCIsInJvbGUiLCJhbGlnbiIsImNvbHMiLCJtZCIsInNtIiwiaHJlZiIsInJvdW5kZWQiLCJfZSIsIml0ZW1zIiwic2NvcGVkU2xvdHMiLCJfdSIsImtleSIsImZuIiwiZmxhdCIsInBlcnNpc3RlbnQiLCJkaXNhYmxlZCIsImNsaWNrIiwib3Blbk1vZGFsIiwieHMiLCJkZW5zZSIsImxhYmVsIiwib3V0bGluZWQiLCJ0eXBlIiwia2V5dXAiLCJzZWFyY2hWYWx1ZSIsIm1vZGVsIiwiY2FsbGJhY2siLCIkJHYiLCJleHByZXNzaW9uIiwiaGVpZ2h0IiwiX3MiLCIkdiIsInZhbGlkYXRpb25UZXh0VHlwZSIsIm1pbiIsIm1heCIsInJvd3MiLCIkbW9kZWwiLCIkc2V0IiwidHJpbSIsIml0ZW0iLCJkaXJlY3RpdmVzIiwibmFtZSIsInJhd05hbWUiLCJfbCIsIm1vbnRoIiwiaWQiLCJtb250aF9uYW1lIiwibnVtYmVyTW9udGhzIiwibWVzc2FnZSIsImNvbG9yIiwic2F2ZSIsImNsb3NlIiwiZGVsZXRlSXRlbUNvbmZpcm0iLCJjbG9zZURlbGV0ZSIsInByb3h5Iiwic21hbGwiLCJlZGl0SXRlbSIsImRlbGV0ZUl0ZW0iLCJpbml0aWFsaXplIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCIsImF4aW9zIiwiYWN0aW9uc0N1c2NhQXBpIiwiY3JlYXRlIiwiYmFzZVVSTCIsIm1vbnRoQXBpIiwicmVzdWx0c0N1c2NhQXBpIiwidW5pdEFwaSIsInVzZXJBcGkiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsImhlbHBlcnMiLCJWYWxpZGF0aW9ucyIsImxpYiIsInJlcXVlc3RzIiwiZ2V0IiwicGFyYW1zIiwic2tpcCIsInRha2UiLCJwb3N0IiwiUHJvbWlzZSIsImFsbCIsInZlcmlmeVNlc3Npb25GaW5pc2hlZCIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVzcG9uc2VzIiwiYWN0aW9uc0N1c2NhIiwidXNlciIsImluZGV4T2YiLCJPYmplY3QiLCJhc3NpZ24iLCJyZXMiLCIkbmV4dFRpY2siLCIkdG91Y2giLCIkaW52YWxpZCIsInB1dCIsImZvckVhY2giLCJyZWNvcmQiLCJzZWFyY2hDb25jYXQiLCJpIiwibGVuZ3RoIiwidG9VcHBlckNhc2UiLCJzb21lIiwicmVjIiwicHVzaCIsIiRyZXNldCIsImVsZW1lbnQiLCJjb2RlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=