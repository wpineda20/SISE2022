(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_cuscatlan_CronClosing_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/CronClosing.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/CronClosing.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_cronClosingApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/cronClosingApi */ "./resources/js/apis/cronClosingApi.js");
/* harmony import */ var _libs_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/function */ "./resources/js/libs/function.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      search: "",
      dialog: false,
      disabledButton: false,
      loading: false,
      dialogDelete: false,
      headers: [{
        text: "FECHA DE CIERRE MENSUAL",
        value: "cron_date"
      }, {
        text: "ACCIONES",
        value: "actions",
        sortable: false
      }],
      records: [],
      recordsFiltered: [],
      editedIndex: -1,
      editedItem: {
        cron_date: ""
      },
      defaultItem: {
        cron_date: ""
      },
      textAlert: "",
      alertEvent: "success",
      showAlert: false,
      redirectSessionFinished: false,
      alertTimeOut: 0
    };
  },
  //Validations
  validations: {
    editedItem: {
      cron_date: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required
      }
    }
  },
  //Validations
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
  methods: {
    initialize: function initialize() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _this.records = [];
                _this.recordsFiltered = [];
                _context.next = 5;
                return _apis_cronClosingApi__WEBPACK_IMPORTED_MODULE_0__["default"].get()["catch"](function (error) {
                  _this.updateAlert(true, "No fue posible obtener los registros.", "fail");

                  _this.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_1__["default"].verifySessionFinished(error.response.status, 401);
                });

              case 5:
                res = _context.sent;
                _this.records = res.data.cron;

                if (_this.records.length == 1) {
                  _this.disabledButton = true;
                } else {
                  _this.disabledButton = false;
                }

                _this.recordsFiltered = _this.records;
                _this.loading = false;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    editItem: function editItem(item) {
      this.editedIndex = this.recordsFiltered.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.$v.editedItem.$reset();
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
                return _apis_cronClosingApi__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/".concat(_this2.editedItem.id))["catch"](function (error) {
                  _this2.updateAlert(true, "No fue posible eliminar el registros.", "fail");

                  _this2.close();

                  _this2.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_1__["default"].verifySessionFinished(error.response.status, 419);
                });

              case 2:
                res = _context2.sent;

                if (res.data.message == "success") {
                  _this2.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_1__["default"].verifySessionFinished(res.status, 200);

                  _this2.updateAlert(true, "Registro eliminado.", "success");
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
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.editedIndex = -1;
      });
    },
    closeDelete: function closeDelete() {
      var _this4 = this;

      this.dialogDelete = false;
      this.$nextTick(function () {
        _this4.editedItem = Object.assign({}, _this4.defaultItem);
        _this4.editedIndex = -1;
      });
    },
    save: function save() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var edited, res, _res;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this5.$v.$touch();

                if (!_this5.$v.$invalid) {
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

                edited = Object.assign(_this5.recordsFiltered[_this5.editedIndex], _this5.editedItem);
                _context3.next = 8;
                return _apis_cronClosingApi__WEBPACK_IMPORTED_MODULE_0__["default"].put("/".concat(_this5.editedItem.id), _this5.editedItem)["catch"](function (error) {
                  _this5.updateAlert(true, "No fue posible actualizar el registro.", "fail");

                  _this5.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_1__["default"].verifySessionFinished(error.response.status, 419);
                });

              case 8:
                res = _context3.sent;

                if (res.data.message == "success") {
                  _this5.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_1__["default"].verifySessionFinished(res.status, 200);

                  _this5.updateAlert(true, "Registro actualizado correctamente.", "success");
                }

                _context3.next = 16;
                break;

              case 12:
                _context3.next = 14;
                return _apis_cronClosingApi__WEBPACK_IMPORTED_MODULE_0__["default"].post(null, _this5.editedItem)["catch"](function (error) {
                  _this5.updateAlert(true, "No fue posible crear el registro.", "fail");

                  _this5.close();

                  _this5.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_1__["default"].verifySessionFinished(error.response.status, 419);
                });

              case 14:
                _res = _context3.sent;

                if (_res.data.message == "success") {
                  _this5.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_1__["default"].verifySessionFinished(_res.status, 200);

                  _this5.updateAlert(true, "Registro almacenado correctamente.", "success");
                }

              case 16:
                _this5.close();

                _this5.initialize();

                return _context3.abrupt("return");

              case 19:
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

          for (var i = 0; i < record.cron_date.length; i++) {
            searchConcat += record.cron_date[i].toUpperCase();

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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/CronClosing.vue?vue&type=template&id=1844c4e1&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/CronClosing.vue?vue&type=template&id=1844c4e1& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
  }), _vm._v(" "), _c("v-data-table", {
    staticClass: "elevation-3 shadow p-3 mt-3",
    attrs: {
      headers: _vm.headers,
      items: _vm.recordsFiltered,
      loading: _vm.loading,
      "sort-by": "cron_date"
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function fn() {
        return [_c("v-toolbar", {
          attrs: {
            flat: ""
          }
        }, [_c("v-toolbar-title", [_vm._v("Cierre mensual")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-dialog", {
          attrs: {
            "max-width": "600px",
            persistent: ""
          },
          scopedSlots: _vm._u([{
            key: "activator",
            fn: function fn(_ref) {
              var on = _ref.on,
                  attrs = _ref.attrs;
              return [_c("v-row", [_c("v-col", {
                attrs: {
                  align: "end"
                }
              }, [_c("v-btn", _vm._g(_vm._b({
                staticClass: "mb-2 btn-normal no-uppercase",
                attrs: {
                  rounded: "",
                  disabled: _vm.loading != false || _vm.disabledButton != false
                },
                on: {
                  click: function click($event) {
                    return _vm.$v.editedItem.$reset();
                  }
                }
              }, "v-btn", attrs, false), on), [_vm._v("\n                  Agregar\n                ")])], 1), _vm._v(" "), _c("v-col", {
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
        }, [_c("base-input", {
          attrs: {
            label: "Fecha de cierre",
            validation: _vm.$v.editedItem.cron_date,
            type: "date"
          },
          model: {
            value: _vm.$v.editedItem.cron_date.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.cron_date, "$model", $$v);
            },
            expression: "$v.editedItem.cron_date.$model"
          }
        })], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
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
        }, [_vm._v(" mdi-pencil ")])];
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

/***/ "./resources/js/apis/cronClosingApi.js":
/*!*********************************************!*\
  !*** ./resources/js/apis/cronClosingApi.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var cronClosingApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api/cronClosing"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cronClosingApi);

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

/***/ "./resources/js/components/cuscatlan/CronClosing.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/cuscatlan/CronClosing.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CronClosing_vue_vue_type_template_id_1844c4e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CronClosing.vue?vue&type=template&id=1844c4e1& */ "./resources/js/components/cuscatlan/CronClosing.vue?vue&type=template&id=1844c4e1&");
/* harmony import */ var _CronClosing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CronClosing.vue?vue&type=script&lang=js& */ "./resources/js/components/cuscatlan/CronClosing.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CronClosing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CronClosing_vue_vue_type_template_id_1844c4e1___WEBPACK_IMPORTED_MODULE_0__.render,
  _CronClosing_vue_vue_type_template_id_1844c4e1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cuscatlan/CronClosing.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/cuscatlan/CronClosing.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/cuscatlan/CronClosing.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CronClosing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CronClosing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/CronClosing.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CronClosing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cuscatlan/CronClosing.vue?vue&type=template&id=1844c4e1&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/cuscatlan/CronClosing.vue?vue&type=template&id=1844c4e1& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CronClosing_vue_vue_type_template_id_1844c4e1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CronClosing_vue_vue_type_template_id_1844c4e1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CronClosing_vue_vue_type_template_id_1844c4e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CronClosing.vue?vue&type=template&id=1844c4e1& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/CronClosing.vue?vue&type=template&id=1844c4e1&");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfY3VzY2F0bGFuX0Nyb25DbG9zaW5nX3Z1ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBcUpBOzs7Ozs7QUFBdUQ7QUFDakI7QUFDb0M7QUFFMUUsaUVBQWU7RUFDZkE7SUFBQTtNQUNBQyxVQURBO01BRUFDLGFBRkE7TUFHQUMscUJBSEE7TUFJQUMsY0FKQTtNQUtBQyxtQkFMQTtNQU1BQyxVQUNBO1FBQUFDO1FBQUFDO01BQUEsQ0FEQSxFQUVBO1FBQUFEO1FBQUFDO1FBQUFDO01BQUEsQ0FGQSxDQU5BO01BVUFDLFdBVkE7TUFXQUMsbUJBWEE7TUFZQUMsZUFaQTtNQWFBQztRQUNBQztNQURBLENBYkE7TUFnQkFDO1FBQ0FEO01BREEsQ0FoQkE7TUFtQkFFLGFBbkJBO01Bb0JBQyxxQkFwQkE7TUFxQkFDLGdCQXJCQTtNQXNCQUMsOEJBdEJBO01BdUJBQztJQXZCQTtFQUFBLENBREE7RUEyQkE7RUFDQUM7SUFDQVI7TUFDQUM7UUFDQVEsVUFBQUEsOERBQUFBO01BREE7SUFEQTtFQURBLENBNUJBO0VBbUNBO0VBQ0FDO0lBQ0FDLFNBREEsdUJBQ0E7TUFDQTtJQUNBO0VBSEEsQ0FwQ0E7RUEwQ0FDO0lBQ0F2QixNQURBLGtCQUNBd0IsR0FEQSxFQUNBO01BQ0FBO0lBQ0EsQ0FIQTtJQUlBckIsWUFKQSx3QkFJQXFCLEdBSkEsRUFJQTtNQUNBQTtJQUNBO0VBTkEsQ0ExQ0E7RUFtREFDLE9BbkRBLHFCQW1EQTtJQUNBO0VBQ0EsQ0FyREE7RUF1REFDO0lBQ0FDLFVBREEsd0JBQ0E7TUFBQTs7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBSEE7Z0JBQUEsT0FLQUMsZ0VBQUFBO2tCQUNBOztrQkFDQSw2R0FDQUMscUJBREEsRUFFQSxHQUZBO2dCQUlBLENBTkEsQ0FMQTs7Y0FBQTtnQkFLQUMsR0FMQTtnQkFhQTs7Z0JBRUE7a0JBQ0E7Z0JBQ0Es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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkw2RDtBQUMzQjtBQUNMOzs7QUFHMUQ7QUFDQSxDQUFnRztBQUNoRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSxpRkFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDZ00sQ0FBQyxpRUFBZSxzTUFBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFQXROOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmLGNBQWMsbUJBQU8sQ0FBQyxtRUFBVTs7QUFFaEM7O0FBRUEsa0JBQWU7Ozs7Ozs7Ozs7O0FDWEY7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7O0FBRWYsY0FBYyxtQkFBTyxDQUFDLG1FQUFVOztBQUVoQzs7QUFFQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNYRjs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTs7QUFFZixjQUFjLG1CQUFPLENBQUMsbUVBQVU7O0FBRWhDO0FBQ0EsNEVBQTRFLGFBQWE7QUFDekY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLDJFQUEyRSxlQUFlO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsa0JBQWU7Ozs7Ozs7Ozs7O0FDN0JGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmLGNBQWMsbUJBQU8sQ0FBQyxtRUFBVTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNuQkY7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsV0FBVyxHQUFHLGFBQWEsR0FBRyxXQUFXLEdBQUcsV0FBVztBQUN2RCw4Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7O0FBRUYseUNBQXlDLG1CQUFPLENBQUMsaUVBQWU7O0FBRWhFLHVDQUF1Qyx1Q0FBdUM7O0FBRTlFLHdCQUF3QiwyQkFBMkIsMkVBQTJFLGtDQUFrQyx3QkFBd0IsT0FBTyxrQ0FBa0MsbUlBQW1JOztBQUVwVztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxXQUFXOztBQUVYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsYUFBYTs7Ozs7Ozs7Ozs7QUN6RUE7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7O0FBRWYsY0FBYyxtQkFBTyxDQUFDLG1FQUFVOztBQUVoQzs7QUFFQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNYRjs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTs7QUFFZixjQUFjLG1CQUFPLENBQUMsbUVBQVU7O0FBRWhDLDRDQUE0QyxFQUFFLCtCQUErQixFQUFFLGlKQUFpSixHQUFHLHlFQUF5RSxFQUFFOztBQUU5Uzs7QUFFQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNiRjs7QUFFYix3QkFBd0IsMkJBQTJCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFcFcsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YseUNBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsNENBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsMkNBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YseUNBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsZUFBZTtBQUNmLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDhDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDRDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDRDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLHVDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLHNDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDRDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDhDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLGtEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDBDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLHVDQUFzQztBQUN0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Ozs7QUNSRjs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBa0I7O0FBRWxCLHdCQUF3QiwyQkFBMkIsMkVBQTJFLGtDQUFrQyx3QkFBd0IsT0FBTyxrQ0FBa0MsbUlBQW1JOztBQUVwVywyREFBMkQscUJBQU0sbUJBQW1CLHFCQUFNOztBQUUxRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY3VzY2F0bGFuL0Nyb25DbG9zaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jdXNjYXRsYW4vQ3JvbkNsb3NpbmcudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcGlzL2Nyb25DbG9zaW5nQXBpLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9saWJzL2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY3VzY2F0bGFuL0Nyb25DbG9zaW5nLnZ1ZT8wYzBlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2N1c2NhdGxhbi9Dcm9uQ2xvc2luZy52dWU/MmFhNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jdXNjYXRsYW4vQ3JvbkNsb3NpbmcudnVlPzdkODkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9hbHBoYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2FscGhhTnVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvYW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvYmV0d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2RlY2ltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2lwQWRkcmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21hY0FkZHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9tYXhWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21pblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbm90LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL29yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9yZXF1aXJlZElmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvcmVxdWlyZWRVbmxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9zYW1lQXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvd2l0aFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi93aXRoUGFyYW1zQnJvd3Nlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBkYXRhLWFwcD5cclxuICAgIDxhbGVydC10aW1lLW91dFxyXG4gICAgICA6cmVkaXJlY3Q9XCJyZWRpcmVjdFNlc3Npb25GaW5pc2hlZFwiXHJcbiAgICAgIEByZWRpcmVjdD1cInVwZGF0ZVRpbWVPdXQoJGV2ZW50KVwiXHJcbiAgICAvPlxyXG4gICAgPGFsZXJ0XHJcbiAgICAgIDp0ZXh0PVwidGV4dEFsZXJ0XCJcclxuICAgICAgOmV2ZW50PVwiYWxlcnRFdmVudFwiXHJcbiAgICAgIDpzaG93PVwic2hvd0FsZXJ0XCJcclxuICAgICAgQHNob3ctYWxlcnQ9XCJ1cGRhdGVBbGVydCgkZXZlbnQpXCJcclxuICAgICAgY2xhc3M9XCJtYi0yXCJcclxuICAgIC8+XHJcbiAgICA8di1kYXRhLXRhYmxlXHJcbiAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXHJcbiAgICAgIDppdGVtcz1cInJlY29yZHNGaWx0ZXJlZFwiXHJcbiAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXHJcbiAgICAgIHNvcnQtYnk9XCJjcm9uX2RhdGVcIlxyXG4gICAgICBjbGFzcz1cImVsZXZhdGlvbi0zIHNoYWRvdyBwLTMgbXQtM1wiXHJcbiAgICA+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6dG9wPlxyXG4gICAgICAgIDx2LXRvb2xiYXIgZmxhdD5cclxuICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGU+Q2llcnJlIG1lbnN1YWw8L3YtdG9vbGJhci10aXRsZT5cclxuICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxyXG4gICAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIiBtYXgtd2lkdGg9XCI2MDBweFwiIHBlcnNpc3RlbnQ+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aXZhdG9yPVwieyBvbiwgYXR0cnMgfVwiPlxyXG4gICAgICAgICAgICAgIDx2LXJvdz5cclxuICAgICAgICAgICAgICAgIDx2LWNvbCBhbGlnbj1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8di1idG5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTIgYnRuLW5vcm1hbCBuby11cHBlcmNhc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImF0dHJzXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW9uPVwib25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcclxuICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJsb2FkaW5nICE9IGZhbHNlIHx8IGRpc2FibGVkQnV0dG9uICE9IGZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkdi5lZGl0ZWRJdGVtLiRyZXNldCgpXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFncmVnYXJcclxuICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgICAgIDwvdi1jb2w+XHJcbiAgICAgICAgICAgICAgICA8di1jb2xcclxuICAgICAgICAgICAgICAgICAgeHM9XCI2XCJcclxuICAgICAgICAgICAgICAgICAgc209XCI2XCJcclxuICAgICAgICAgICAgICAgICAgbWQ9XCI2XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLW5vbmUgZC1tZC1ibG9jayBkLWxnLWJsb2NrXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbnNlXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCdXNjYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICBAa2V5dXA9XCJzZWFyY2hWYWx1ZSgpXCJcclxuICAgICAgICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC92LWNvbD5cclxuICAgICAgICAgICAgICA8L3Ytcm93PlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8di1jYXJkIGNsYXNzPVwiZmxleGNhcmRcIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgICAgICAgICAgPHYtY2FyZC10aXRsZT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm14LWF1dG8gcHQtMyBtYi0zIHRleHQtY2VudGVyIGJsYWNrLXNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICB7eyBmb3JtVGl0bGUgfX1cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XHJcblxyXG4gICAgICAgICAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPCEtLSBGb3JtIC0tPlxyXG4gICAgICAgICAgICAgICAgICA8di1yb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBDcm9uIERhdGUgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiMTJcIiBtZD1cIjEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YmFzZS1pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZlY2hhIGRlIGNpZXJyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCIkdi5lZGl0ZWRJdGVtLmNyb25fZGF0ZS4kbW9kZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0uY3Jvbl9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQ3JvbiBEYXRlIC0tPlxyXG4gICAgICAgICAgICAgICAgICA8L3Ytcm93PlxyXG4gICAgICAgICAgICAgICAgICA8IS0tIEZvcm0gLS0+XHJcbiAgICAgICAgICAgICAgICAgIDx2LXJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8di1jb2wgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlIG10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNhdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJ0bi1ub3JtYWwtY2xvc2Ugbm8tdXBwZXJjYXNlIG10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cclxuICAgICAgICAgICAgICAgICAgPC92LXJvdz5cclxuICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cclxuICAgICAgICAgICAgPC92LWNhcmQ+XHJcbiAgICAgICAgICA8L3YtZGlhbG9nPlxyXG4gICAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dEZWxldGVcIiBtYXgtd2lkdGg9XCI0MDBweFwiPlxyXG4gICAgICAgICAgICA8di1jYXJkIGNsYXNzPVwiaC0xMDBcIj5cclxuICAgICAgICAgICAgICA8di1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJibGFjay1zZWNvbmRhcnkgdGV4dC1jZW50ZXIgbXQtMyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIEVsaW1pbmFyIHJlZ2lzdHJvXHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHYtcm93PlxyXG4gICAgICAgICAgICAgICAgICA8di1jb2wgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8di1idG5cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYnRuLW5vcm1hbCBuby11cHBlcmNhc2UgbXQtMyBtYi0zIHByLTUgcGwtNSBteC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcclxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRlbGV0ZUl0ZW1Db25maXJtXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5Db25maXJtYXI8L3YtYnRuXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0blxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJidG4tbm9ybWFsLWNsb3NlIG5vLXVwcGVyY2FzZSBtdC0zIG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2xvc2VEZWxldGVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENhbmNlbGFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cclxuICAgICAgICAgICAgICAgICAgPC92LWNvbD5cclxuICAgICAgICAgICAgICAgIDwvdi1yb3c+XHJcbiAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC92LWNhcmQ+XHJcbiAgICAgICAgICA8L3YtZGlhbG9nPlxyXG4gICAgICAgIDwvdi10b29sYmFyPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8dGVtcGxhdGUgdi1zbG90OltgaXRlbS5hY3Rpb25zYF09XCJ7IGl0ZW0gfVwiPlxyXG4gICAgICAgIDx2LWljb24gc21hbGwgY2xhc3M9XCJtci0yXCIgQGNsaWNrPVwiZWRpdEl0ZW0oaXRlbSlcIj4gbWRpLXBlbmNpbCA8L3YtaWNvbj5cclxuICAgICAgICA8IS0tIDx2LWljb24gc21hbGwgQGNsaWNrPVwiZGVsZXRlSXRlbShpdGVtKVwiPiBtZGktZGVsZXRlIDwvdi1pY29uPiAtLT5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDpuby1kYXRhPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tbm9ybWFsLXNlY29uZGFyeSBuby1kZWNvcmF0aW9uXCJcclxuICAgICAgICAgIEBjbGljaz1cImluaXRpYWxpemVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlaW5pY2lhclxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdi1kYXRhLXRhYmxlPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGNyb25DbG9zaW5nQXBpIGZyb20gXCIuLi8uLi9hcGlzL2Nyb25DbG9zaW5nQXBpXCI7XHJcbmltcG9ydCBsaWIgZnJvbSBcIi4uLy4uL2xpYnMvZnVuY3Rpb25cIjtcclxuaW1wb3J0IHsgcmVxdWlyZWQsIG1pbkxlbmd0aCwgbWF4TGVuZ3RoIH0gZnJvbSBcInZ1ZWxpZGF0ZS9saWIvdmFsaWRhdG9yc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGE6ICgpID0+ICh7XHJcbiAgICBzZWFyY2g6IFwiXCIsXHJcbiAgICBkaWFsb2c6IGZhbHNlLFxyXG4gICAgZGlzYWJsZWRCdXR0b246IGZhbHNlLFxyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBkaWFsb2dEZWxldGU6IGZhbHNlLFxyXG4gICAgaGVhZGVyczogW1xyXG4gICAgICB7IHRleHQ6IFwiRkVDSEEgREUgQ0lFUlJFIE1FTlNVQUxcIiwgdmFsdWU6IFwiY3Jvbl9kYXRlXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIkFDQ0lPTkVTXCIsIHZhbHVlOiBcImFjdGlvbnNcIiwgc29ydGFibGU6IGZhbHNlIH0sXHJcbiAgICBdLFxyXG4gICAgcmVjb3JkczogW10sXHJcbiAgICByZWNvcmRzRmlsdGVyZWQ6IFtdLFxyXG4gICAgZWRpdGVkSW5kZXg6IC0xLFxyXG4gICAgZWRpdGVkSXRlbToge1xyXG4gICAgICBjcm9uX2RhdGU6IFwiXCIsXHJcbiAgICB9LFxyXG4gICAgZGVmYXVsdEl0ZW06IHtcclxuICAgICAgY3Jvbl9kYXRlOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIHRleHRBbGVydDogXCJcIixcclxuICAgIGFsZXJ0RXZlbnQ6IFwic3VjY2Vzc1wiLFxyXG4gICAgc2hvd0FsZXJ0OiBmYWxzZSxcclxuICAgIHJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkOiBmYWxzZSxcclxuICAgIGFsZXJ0VGltZU91dDogMCxcclxuICB9KSxcclxuXHJcbiAgLy9WYWxpZGF0aW9uc1xyXG4gIHZhbGlkYXRpb25zOiB7XHJcbiAgICBlZGl0ZWRJdGVtOiB7XHJcbiAgICAgIGNyb25fZGF0ZToge1xyXG4gICAgICAgIHJlcXVpcmVkLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vVmFsaWRhdGlvbnNcclxuICBjb21wdXRlZDoge1xyXG4gICAgZm9ybVRpdGxlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5lZGl0ZWRJbmRleCA9PT0gLTEgPyBcIk51ZXZvIHJlZ2lzdHJvXCIgOiBcIkVkaXRhciByZWdpc3Ryb1wiO1xyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICB3YXRjaDoge1xyXG4gICAgZGlhbG9nKHZhbCkge1xyXG4gICAgICB2YWwgfHwgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSxcclxuICAgIGRpYWxvZ0RlbGV0ZSh2YWwpIHtcclxuICAgICAgdmFsIHx8IHRoaXMuY2xvc2VEZWxldGUoKTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGluaXRpYWxpemUoKSB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMucmVjb3JkcyA9IFtdO1xyXG4gICAgICB0aGlzLnJlY29yZHNGaWx0ZXJlZCA9IFtdO1xyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgY3JvbkNsb3NpbmdBcGkuZ2V0KCkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBbGVydCh0cnVlLCBcIk5vIGZ1ZSBwb3NpYmxlIG9idGVuZXIgbG9zIHJlZ2lzdHJvcy5cIiwgXCJmYWlsXCIpO1xyXG4gICAgICAgIHRoaXMucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgPSBsaWIudmVyaWZ5U2Vzc2lvbkZpbmlzaGVkKFxyXG4gICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzLFxyXG4gICAgICAgICAgNDAxXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnJlY29yZHMgPSByZXMuZGF0YS5jcm9uO1xyXG5cclxuICAgICAgaWYgKHRoaXMucmVjb3Jkcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWRCdXR0b24gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWRCdXR0b24gPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWQgPSB0aGlzLnJlY29yZHM7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICBlZGl0SXRlbShpdGVtKSB7XHJcbiAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSB0aGlzLnJlY29yZHNGaWx0ZXJlZC5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKTtcclxuICAgICAgdGhpcy5kaWFsb2cgPSB0cnVlO1xyXG4gICAgICB0aGlzLiR2LmVkaXRlZEl0ZW0uJHJlc2V0KCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRlbGV0ZUl0ZW0oaXRlbSkge1xyXG4gICAgICB0aGlzLmVkaXRlZEluZGV4ID0gdGhpcy5yZWNvcmRzRmlsdGVyZWQuaW5kZXhPZihpdGVtKTtcclxuICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSk7XHJcbiAgICAgIHRoaXMuZGlhbG9nRGVsZXRlID0gdHJ1ZTtcclxuICAgIH0sXHJcblxyXG4gICAgYXN5bmMgZGVsZXRlSXRlbUNvbmZpcm0oKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNyb25DbG9zaW5nQXBpXHJcbiAgICAgICAgLmRlbGV0ZShgLyR7dGhpcy5lZGl0ZWRJdGVtLmlkfWApXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVBbGVydChcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgXCJObyBmdWUgcG9zaWJsZSBlbGltaW5hciBlbCByZWdpc3Ryb3MuXCIsXHJcbiAgICAgICAgICAgIFwiZmFpbFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgdGhpcy5yZWRpcmVjdFNlc3Npb25GaW5pc2hlZCA9IGxpYi52ZXJpZnlTZXNzaW9uRmluaXNoZWQoXHJcbiAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyxcclxuICAgICAgICAgICAgNDE5XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlcy5kYXRhLm1lc3NhZ2UgPT0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gbGliLnZlcmlmeVNlc3Npb25GaW5pc2hlZChcclxuICAgICAgICAgIHJlcy5zdGF0dXMsXHJcbiAgICAgICAgICAyMDBcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJSZWdpc3RybyBlbGltaW5hZG8uXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgICAgIHRoaXMuY2xvc2VEZWxldGUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKTtcclxuICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBjbG9zZURlbGV0ZSgpIHtcclxuICAgICAgdGhpcy5kaWFsb2dEZWxldGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xyXG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGFzeW5jIHNhdmUoKSB7XHJcbiAgICAgIHRoaXMuJHYuJHRvdWNoKCk7XHJcbiAgICAgIGlmICh0aGlzLiR2LiRpbnZhbGlkKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBbGVydCh0cnVlLCBcIkNhbXBvcyBvYmxpZ2F0b3Jpb3MuXCIsIFwiZmFpbFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmVkaXRlZEluZGV4ID4gLTEpIHtcclxuICAgICAgICBjb25zdCBlZGl0ZWQgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWRbdGhpcy5lZGl0ZWRJbmRleF0sXHJcbiAgICAgICAgICB0aGlzLmVkaXRlZEl0ZW1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjcm9uQ2xvc2luZ0FwaVxyXG4gICAgICAgICAgLnB1dChgLyR7dGhpcy5lZGl0ZWRJdGVtLmlkfWAsIHRoaXMuZWRpdGVkSXRlbSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGVydChcclxuICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgIFwiTm8gZnVlIHBvc2libGUgYWN0dWFsaXphciBlbCByZWdpc3Ryby5cIixcclxuICAgICAgICAgICAgICBcImZhaWxcIlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFNlc3Npb25GaW5pc2hlZCA9IGxpYi52ZXJpZnlTZXNzaW9uRmluaXNoZWQoXHJcbiAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzLFxyXG4gICAgICAgICAgICAgIDQxOVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gbGliLnZlcmlmeVNlc3Npb25GaW5pc2hlZChcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyxcclxuICAgICAgICAgICAgMjAwXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVBbGVydChcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgXCJSZWdpc3RybyBhY3R1YWxpemFkbyBjb3JyZWN0YW1lbnRlLlwiLFxyXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY3JvbkNsb3NpbmdBcGlcclxuICAgICAgICAgIC5wb3N0KG51bGwsIHRoaXMuZWRpdGVkSXRlbSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGVydCh0cnVlLCBcIk5vIGZ1ZSBwb3NpYmxlIGNyZWFyIGVsIHJlZ2lzdHJvLlwiLCBcImZhaWxcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFNlc3Npb25GaW5pc2hlZCA9IGxpYi52ZXJpZnlTZXNzaW9uRmluaXNoZWQoXHJcbiAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzLFxyXG4gICAgICAgICAgICAgIDQxOVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gbGliLnZlcmlmeVNlc3Npb25GaW5pc2hlZChcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyxcclxuICAgICAgICAgICAgMjAwXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVBbGVydChcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgXCJSZWdpc3RybyBhbG1hY2VuYWRvIGNvcnJlY3RhbWVudGUuXCIsXHJcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZWFyY2hWYWx1ZSgpIHtcclxuICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWQgPSBbXTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNlYXJjaCAhPSBcIlwiKSB7XHJcbiAgICAgICAgdGhpcy5yZWNvcmRzLmZvckVhY2goKHJlY29yZCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHNlYXJjaENvbmNhdCA9IFwiXCI7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlY29yZC5jcm9uX2RhdGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2VhcmNoQ29uY2F0ICs9IHJlY29yZC5jcm9uX2RhdGVbaV0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHNlYXJjaENvbmNhdCA9PT0gdGhpcy5zZWFyY2gudG9VcHBlckNhc2UoKSAmJlxyXG4gICAgICAgICAgICAgICF0aGlzLnJlY29yZHNGaWx0ZXJlZC5zb21lKChyZWMpID0+IHJlYyA9PSByZWNvcmQpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIHRoaXMucmVjb3Jkc0ZpbHRlcmVkLnB1c2gocmVjb3JkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWQgPSB0aGlzLnJlY29yZHM7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUFsZXJ0KHNob3cgPSBmYWxzZSwgdGV4dCA9IFwiQWxlcnRhXCIsIGV2ZW50ID0gXCJzdWNjZXNzXCIpIHtcclxuICAgICAgdGhpcy50ZXh0QWxlcnQgPSB0ZXh0O1xyXG4gICAgICB0aGlzLmFsZXJ0RXZlbnQgPSBldmVudDtcclxuICAgICAgdGhpcy5zaG93QWxlcnQgPSBzaG93O1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVUaW1lT3V0KGV2ZW50KSB7XHJcbiAgICAgIHRoaXMucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgPSBldmVudDtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IFwiZGF0YS1hcHBcIjogXCJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJhbGVydC10aW1lLW91dFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHJlZGlyZWN0OiBfdm0ucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICByZWRpcmVjdDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVUaW1lT3V0KCRldmVudClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhbGVydFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0ZXh0OiBfdm0udGV4dEFsZXJ0LFxuICAgICAgICAgIGV2ZW50OiBfdm0uYWxlcnRFdmVudCxcbiAgICAgICAgICBzaG93OiBfdm0uc2hvd0FsZXJ0LFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwic2hvdy1hbGVydFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZUFsZXJ0KCRldmVudClcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2LWRhdGEtdGFibGVcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJlbGV2YXRpb24tMyBzaGFkb3cgcC0zIG10LTNcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBoZWFkZXJzOiBfdm0uaGVhZGVycyxcbiAgICAgICAgICBpdGVtczogX3ZtLnJlY29yZHNGaWx0ZXJlZCxcbiAgICAgICAgICBsb2FkaW5nOiBfdm0ubG9hZGluZyxcbiAgICAgICAgICBcInNvcnQtYnlcIjogXCJjcm9uX2RhdGVcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJ0b3BcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxhdDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCBbX3ZtLl92KFwiQ2llcnJlIG1lbnN1YWxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1zcGFjZXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1kaWFsb2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJtYXgtd2lkdGhcIjogXCI2MDBweFwiLCBwZXJzaXN0ZW50OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJhY3RpdmF0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoeyBvbiwgYXR0cnMgfSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBhbGlnbjogXCJlbmRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9nKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fYihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYi0yIGJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sb2FkaW5nICE9IGZhbHNlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzYWJsZWRCdXR0b24gIT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHYuZWRpdGVkSXRlbS4kcmVzZXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgQWdyZWdhclxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLW5vbmUgZC1tZC1ibG9jayBkLWxnLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czogXCI2XCIsIHNtOiBcIjZcIiwgbWQ6IFwiNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQnVzY2FyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VhcmNoVmFsdWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleGNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhlaWdodDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm14LWF1dG8gcHQtMyBtYi0zIHRleHQtY2VudGVyIGJsYWNrLXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtVGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkZlY2hhIGRlIGNpZXJyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLmNyb25fZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW0uY3Jvbl9kYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNyb25fZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkdi5lZGl0ZWRJdGVtLmNyb25fZGF0ZS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4tbm9ybWFsIG5vLXVwcGVyY2FzZSBtdC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgR3VhcmRhclxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ub3JtYWwtY2xvc2Ugbm8tdXBwZXJjYXNlIG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsYXJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjQwMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZ0RlbGV0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ0RlbGV0ZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dEZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoLTEwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJsYWNrLXNlY29uZGFyeSB0ZXh0LWNlbnRlciBtdC0zIG1iLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBFbGltaW5hciByZWdpc3Ryb1xcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlIG10LTMgbWItMyBwci01IHBsLTUgbXgtYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogX3ZtLmRlbGV0ZUl0ZW1Db25maXJtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb25maXJtYXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuLW5vcm1hbC1jbG9zZSBuby11cHBlcmNhc2UgbXQtMyBtYi0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZURlbGV0ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbGFyXFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGBpdGVtLmFjdGlvbnNgLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKHsgaXRlbSB9KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNtYWxsOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWRpdEl0ZW0oaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBtZGktcGVuY2lsIFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcIm5vLWRhdGFcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1ub3JtYWwtc2Vjb25kYXJ5IG5vLWRlY29yYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaW5pdGlhbGl6ZSB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBSZWluaWNpYXJcXG4gICAgICBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICksXG4gICAgICB9KSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGNyb25DbG9zaW5nQXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6IFwiL2FwaS9jcm9uQ2xvc2luZ1wiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyb25DbG9zaW5nQXBpO1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdmVyaWZ5U2Vzc2lvbkZpbmlzaGVkOiAoc3RhdHVzLCBjb2RlID0gMjAwKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXR1cyk7XG4gICAgICAgIGlmIChzdGF0dXMgPT0gNDE5IHx8IHN0YXR1cyA9PSA0MDEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTFwiICsgc3RhdHVzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxufTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Nyb25DbG9zaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODQ0YzRlMSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Dcm9uQ2xvc2luZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Nyb25DbG9zaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSW5mb3Jtw6F0aWNhXFxcXERvY3VtZW50c1xcXFxwcm9qZWN0c01DXFxcXFNJU0UtQ1VTQ0EtMjAyMi1tYWluXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzE4NDRjNGUxJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzE4NDRjNGUxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzE4NDRjNGUxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Dcm9uQ2xvc2luZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTg0NGM0ZTEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTg0NGM0ZTEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2N1c2NhdGxhbi9Dcm9uQ2xvc2luZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JvbkNsb3NpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JvbkNsb3NpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Dcm9uQ2xvc2luZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTg0NGM0ZTEmXCIiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnYWxwaGEnLCAvXlthLXpBLVpdKiQvKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2FscGhhTnVtJywgL15bYS16QS1aMC05XSokLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWxpZGF0b3JzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbGlkYXRvcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdhbmQnXG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvcnMubGVuZ3RoID4gMCAmJiB2YWxpZGF0b3JzLnJlZHVjZShmdW5jdGlvbiAodmFsaWQsIGZuKSB7XG4gICAgICByZXR1cm4gdmFsaWQgJiYgZm4uYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgIH0sIHRydWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobWluLCBtYXgpIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnYmV0d2VlbicsXG4gICAgbWluOiBtaW4sXG4gICAgbWF4OiBtYXhcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAoIS9cXHMvLnRlc3QodmFsdWUpIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgJiYgK21pbiA8PSArdmFsdWUgJiYgK21heCA+PSArdmFsdWU7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcSA9IGV4cG9ydHMucmVnZXggPSBleHBvcnRzLnJlZiA9IGV4cG9ydHMubGVuID0gdm9pZCAwO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFBhcmFtc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfd2l0aFBhcmFtcy5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF93aXRoUGFyYW1zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vd2l0aFBhcmFtc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIHJlcSA9IGZ1bmN0aW9uIHJlcSh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiAhIXZhbHVlLmxlbmd0aDtcblxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gIWlzTmFOKHZhbHVlLmdldFRpbWUoKSk7XG4gIH1cblxuICBpZiAoX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgXyBpbiB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuICEhU3RyaW5nKHZhbHVlKS5sZW5ndGg7XG59O1xuXG5leHBvcnRzLnJlcSA9IHJlcTtcblxudmFyIGxlbiA9IGZ1bmN0aW9uIGxlbih2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5sZW5ndGg7XG5cbiAgaWYgKF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIFN0cmluZyh2YWx1ZSkubGVuZ3RoO1xufTtcblxuZXhwb3J0cy5sZW4gPSBsZW47XG5cbnZhciByZWYgPSBmdW5jdGlvbiByZWYocmVmZXJlbmNlLCB2bSwgcGFyZW50Vm0pIHtcbiAgcmV0dXJuIHR5cGVvZiByZWZlcmVuY2UgPT09ICdmdW5jdGlvbicgPyByZWZlcmVuY2UuY2FsbCh2bSwgcGFyZW50Vm0pIDogcGFyZW50Vm1bcmVmZXJlbmNlXTtcbn07XG5cbmV4cG9ydHMucmVmID0gcmVmO1xuXG52YXIgcmVnZXggPSBmdW5jdGlvbiByZWdleCh0eXBlLCBleHByKSB7XG4gIHJldHVybiAoMCwgX3dpdGhQYXJhbXMuZGVmYXVsdCkoe1xuICAgIHR5cGU6IHR5cGVcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICFyZXEodmFsdWUpIHx8IGV4cHIudGVzdCh2YWx1ZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5yZWdleCA9IHJlZ2V4OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdkZWNpbWFsJywgL15bLV0/XFxkKihcXC5cXGQrKT8kLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIGVtYWlsUmVnZXggPSAvXig/OltBLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bQS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSp8XCIoPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2ZdfFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKlwiKUAoPzooPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XXsyLH0oPzpbYS16MC05LV0qW2EtejAtOV0pP3xcXFsoPzooPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldP3xbYS16MC05LV0qW2EtejAtOV06KD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjEtXFx4NWFcXHg1My1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKylcXF0pJC9pO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2VtYWlsJywgZW1haWxSZWdleCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhbHBoYVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYWxwaGEuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhbHBoYU51bVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYWxwaGFOdW0uZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhbmRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FuZC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImJldHdlZW5cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2JldHdlZW4uZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNpbWFsXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9kZWNpbWFsLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZW1haWxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2VtYWlsLmRlZmF1bHQ7XG4gIH1cbn0pO1xuZXhwb3J0cy5oZWxwZXJzID0gdm9pZCAwO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaW50ZWdlclwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZWdlci5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlwQWRkcmVzc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaXBBZGRyZXNzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWFjQWRkcmVzc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWFjQWRkcmVzcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1heExlbmd0aFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWF4TGVuZ3RoLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWF4VmFsdWVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21heFZhbHVlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWluTGVuZ3RoXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9taW5MZW5ndGguZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtaW5WYWx1ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWluVmFsdWUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJub3RcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX25vdC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm51bWVyaWNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX251bWVyaWMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJvclwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfb3IuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZXF1aXJlZFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcmVxdWlyZWQuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZXF1aXJlZElmXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yZXF1aXJlZElmLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVxdWlyZWRVbmxlc3NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JlcXVpcmVkVW5sZXNzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2FtZUFzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9zYW1lQXMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ1cmxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3VybC5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9hbHBoYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYWxwaGFcIikpO1xuXG52YXIgX2FscGhhTnVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hbHBoYU51bVwiKSk7XG5cbnZhciBfbnVtZXJpYyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbnVtZXJpY1wiKSk7XG5cbnZhciBfYmV0d2VlbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYmV0d2VlblwiKSk7XG5cbnZhciBfZW1haWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2VtYWlsXCIpKTtcblxudmFyIF9pcEFkZHJlc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lwQWRkcmVzc1wiKSk7XG5cbnZhciBfbWFjQWRkcmVzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWFjQWRkcmVzc1wiKSk7XG5cbnZhciBfbWF4TGVuZ3RoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYXhMZW5ndGhcIikpO1xuXG52YXIgX21pbkxlbmd0aCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWluTGVuZ3RoXCIpKTtcblxudmFyIF9yZXF1aXJlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVxdWlyZWRcIikpO1xuXG52YXIgX3JlcXVpcmVkSWYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlcXVpcmVkSWZcIikpO1xuXG52YXIgX3JlcXVpcmVkVW5sZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZXF1aXJlZFVubGVzc1wiKSk7XG5cbnZhciBfc2FtZUFzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zYW1lQXNcIikpO1xuXG52YXIgX3VybCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXJsXCIpKTtcblxudmFyIF9vciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vb3JcIikpO1xuXG52YXIgX2FuZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYW5kXCIpKTtcblxudmFyIF9ub3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25vdFwiKSk7XG5cbnZhciBfbWluVmFsdWUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21pblZhbHVlXCIpKTtcblxudmFyIF9tYXhWYWx1ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWF4VmFsdWVcIikpO1xuXG52YXIgX2ludGVnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2ludGVnZXJcIikpO1xuXG52YXIgX2RlY2ltYWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2RlY2ltYWxcIikpO1xuXG52YXIgaGVscGVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2NvbW1vblwiKSk7XG5cbmV4cG9ydHMuaGVscGVycyA9IGhlbHBlcnM7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnaW50ZWdlcicsIC8oXlswLTldKiQpfCheLVswLTldKyQpLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICB0eXBlOiAnaXBBZGRyZXNzJ1xufSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICghKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIG5pYmJsZXMgPSB2YWx1ZS5zcGxpdCgnLicpO1xuICByZXR1cm4gbmliYmxlcy5sZW5ndGggPT09IDQgJiYgbmliYmxlcy5ldmVyeShuaWJibGVWYWxpZCk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbnZhciBuaWJibGVWYWxpZCA9IGZ1bmN0aW9uIG5pYmJsZVZhbGlkKG5pYmJsZSkge1xuICBpZiAobmliYmxlLmxlbmd0aCA+IDMgfHwgbmliYmxlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChuaWJibGVbMF0gPT09ICcwJyAmJiBuaWJibGUgIT09ICcwJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghbmliYmxlLm1hdGNoKC9eXFxkKyQvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBudW1lcmljID0gK25pYmJsZSB8IDA7XG4gIHJldHVybiBudW1lcmljID49IDAgJiYgbnVtZXJpYyA8PSAyNTU7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIHZhciBzZXBhcmF0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICc6JztcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbWFjQWRkcmVzcydcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgcGFydHMgPSB0eXBlb2Ygc2VwYXJhdG9yID09PSAnc3RyaW5nJyAmJiBzZXBhcmF0b3IgIT09ICcnID8gdmFsdWUuc3BsaXQoc2VwYXJhdG9yKSA6IHZhbHVlLmxlbmd0aCA9PT0gMTIgfHwgdmFsdWUubGVuZ3RoID09PSAxNiA/IHZhbHVlLm1hdGNoKC8uezJ9L2cpIDogbnVsbDtcbiAgICByZXR1cm4gcGFydHMgIT09IG51bGwgJiYgKHBhcnRzLmxlbmd0aCA9PT0gNiB8fCBwYXJ0cy5sZW5ndGggPT09IDgpICYmIHBhcnRzLmV2ZXJ5KGhleFZhbGlkKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxudmFyIGhleFZhbGlkID0gZnVuY3Rpb24gaGV4VmFsaWQoaGV4KSB7XG4gIHJldHVybiBoZXgudG9Mb3dlckNhc2UoKS5tYXRjaCgvXlswLTlhLWZdezJ9JC8pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KGxlbmd0aCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtYXhMZW5ndGgnLFxuICAgIG1heDogbGVuZ3RoXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKDAsIF9jb21tb24ubGVuKSh2YWx1ZSkgPD0gbGVuZ3RoO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobWF4KSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21heFZhbHVlJyxcbiAgICBtYXg6IG1heFxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICghL1xccy8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSAmJiArdmFsdWUgPD0gK21heDtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KGxlbmd0aCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtaW5MZW5ndGgnLFxuICAgIG1pbjogbGVuZ3RoXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKDAsIF9jb21tb24ubGVuKSh2YWx1ZSkgPj0gbGVuZ3RoO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobWluKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21pblZhbHVlJyxcbiAgICBtaW46IG1pblxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICghL1xccy8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSAmJiArdmFsdWUgPj0gK21pbjtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHZhbGlkYXRvcikge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdub3QnXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSwgdm0pIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICF2YWxpZGF0b3IuY2FsbCh0aGlzLCB2YWx1ZSwgdm0pO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdudW1lcmljJywgL15bMC05XSokLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWxpZGF0b3JzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbGlkYXRvcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdvcidcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9ycy5sZW5ndGggPiAwICYmIHZhbGlkYXRvcnMucmVkdWNlKGZ1bmN0aW9uICh2YWxpZCwgZm4pIHtcbiAgICAgIHJldHVybiB2YWxpZCB8fCBmbi5hcHBseShfdGhpcywgYXJncyk7XG4gICAgfSwgZmFsc2UpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICB0eXBlOiAncmVxdWlyZWQnXG59LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gKDAsIF9jb21tb24ucmVxKSh2YWx1ZS50cmltKCkpO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfY29tbW9uLnJlcSkodmFsdWUpO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQocHJvcCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdyZXF1aXJlZElmJyxcbiAgICBwcm9wOiBwcm9wXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSwgcGFyZW50Vm0pIHtcbiAgICByZXR1cm4gKDAsIF9jb21tb24ucmVmKShwcm9wLCB0aGlzLCBwYXJlbnRWbSkgPyAoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSA6IHRydWU7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChwcm9wKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ3JlcXVpcmVkVW5sZXNzJyxcbiAgICBwcm9wOiBwcm9wXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSwgcGFyZW50Vm0pIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlZikocHJvcCwgdGhpcywgcGFyZW50Vm0pID8gKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgOiB0cnVlO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoZXF1YWxUbykge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdzYW1lQXMnLFxuICAgIGVxOiBlcXVhbFRvXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSwgcGFyZW50Vm0pIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICgwLCBfY29tbW9uLnJlZikoZXF1YWxUbywgdGhpcywgcGFyZW50Vm0pO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIHVybFJlZ2V4ID0gL14oPzooPzooPzpodHRwcz98ZnRwKTopP1xcL1xcLykoPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdTAwYTEtXFx1ZmZmZl1bYS16MC05XFx1MDBhMS1cXHVmZmZmXy1dezAsNjJ9KT9bYS16MC05XFx1MDBhMS1cXHVmZmZmXVxcLikrKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9XFwuPykpKD86OlxcZHsyLDV9KT8oPzpbLz8jXVxcUyopPyQvaTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCd1cmwnLCB1cmxSZWdleCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIHdpdGhQYXJhbXMgPSBwcm9jZXNzLmVudi5CVUlMRCA9PT0gJ3dlYicgPyByZXF1aXJlKCcuL3dpdGhQYXJhbXNCcm93c2VyJykud2l0aFBhcmFtcyA6IHJlcXVpcmUoJy4vcGFyYW1zJykud2l0aFBhcmFtcztcbnZhciBfZGVmYXVsdCA9IHdpdGhQYXJhbXM7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMud2l0aFBhcmFtcyA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgcm9vdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB7fTtcblxudmFyIGZha2VXaXRoUGFyYW1zID0gZnVuY3Rpb24gZmFrZVdpdGhQYXJhbXMocGFyYW1zT3JDbG9zdXJlLCBtYXliZVZhbGlkYXRvcikge1xuICBpZiAoX3R5cGVvZihwYXJhbXNPckNsb3N1cmUpID09PSAnb2JqZWN0JyAmJiBtYXliZVZhbGlkYXRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG1heWJlVmFsaWRhdG9yO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtc09yQ2xvc3VyZShmdW5jdGlvbiAoKSB7fSk7XG59O1xuXG52YXIgd2l0aFBhcmFtcyA9IHJvb3QudnVlbGlkYXRlID8gcm9vdC52dWVsaWRhdGUud2l0aFBhcmFtcyA6IGZha2VXaXRoUGFyYW1zO1xuZXhwb3J0cy53aXRoUGFyYW1zID0gd2l0aFBhcmFtczsiXSwibmFtZXMiOlsiZGF0YSIsInNlYXJjaCIsImRpYWxvZyIsImRpc2FibGVkQnV0dG9uIiwibG9hZGluZyIsImRpYWxvZ0RlbGV0ZSIsImhlYWRlcnMiLCJ0ZXh0IiwidmFsdWUiLCJzb3J0YWJsZSIsInJlY29yZHMiLCJyZWNvcmRzRmlsdGVyZWQiLCJlZGl0ZWRJbmRleCIsImVkaXRlZEl0ZW0iLCJjcm9uX2RhdGUiLCJkZWZhdWx0SXRlbSIsInRleHRBbGVydCIsImFsZXJ0RXZlbnQiLCJzaG93QWxlcnQiLCJyZWRpcmVjdFNlc3Npb25GaW5pc2hlZCIsImFsZXJ0VGltZU91dCIsInZhbGlkYXRpb25zIiwicmVxdWlyZWQiLCJjb21wdXRlZCIsImZvcm1UaXRsZSIsIndhdGNoIiwidmFsIiwiY3JlYXRlZCIsIm1ldGhvZHMiLCJpbml0aWFsaXplIiwiY3JvbkNsb3NpbmdBcGkiLCJlcnJvciIsInJlcyIsImVkaXRJdGVtIiwiaXRlbSIsImRlbGV0ZUl0ZW0iLCJkZWxldGVJdGVtQ29uZmlybSIsImNsb3NlIiwiY2xvc2VEZWxldGUiLCJzYXZlIiwiZWRpdGVkIiwiT2JqZWN0IiwicHV0IiwicG9zdCIsInNlYXJjaFZhbHVlIiwic2VhcmNoQ29uY2F0IiwidXBkYXRlQWxlcnQiLCJ1cGRhdGVUaW1lT3V0IiwiZXZlbnQiLCJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwiYXR0cnMiLCJyZWRpcmVjdCIsIm9uIiwiJGV2ZW50IiwiX3YiLCJzdGF0aWNDbGFzcyIsInNob3ciLCJpdGVtcyIsInNjb3BlZFNsb3RzIiwiX3UiLCJrZXkiLCJmbiIsImZsYXQiLCJwZXJzaXN0ZW50IiwiYWxpZ24iLCJfZyIsIl9iIiwicm91bmRlZCIsImRpc2FibGVkIiwiY2xpY2siLCIkdiIsIiRyZXNldCIsInhzIiwic20iLCJtZCIsImRlbnNlIiwibGFiZWwiLCJvdXRsaW5lZCIsInR5cGUiLCJrZXl1cCIsIm1vZGVsIiwiY2FsbGJhY2siLCIkJHYiLCJleHByZXNzaW9uIiwiaGVpZ2h0IiwiX3MiLCJjb2xzIiwidmFsaWRhdGlvbiIsIiRtb2RlbCIsIiRzZXQiLCJjb2xvciIsInByb3h5Iiwic21hbGwiLCJocmVmIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInZlcmlmeVNlc3Npb25GaW5pc2hlZCIsInN0YXR1cyIsImNvZGUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==