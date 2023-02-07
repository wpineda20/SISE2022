(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_cuscatlan_TrakingStatus_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/TrakingStatus.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/TrakingStatus.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_trakingStatusApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/trakingStatusApi */ "./resources/js/apis/trakingStatusApi.js");
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
      loading: false,
      dialogDelete: false,
      headers: [{
        text: "ESTADO",
        value: "status_name"
      }, {
        text: "ACCIONES",
        value: "actions",
        sortable: false
      }],
      records: [],
      recordsFiltered: [],
      editedIndex: -1,
      editedItem: {
        status_name: ""
      },
      defaultItem: {
        status_name: ""
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
      status_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.minLength)(1),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__.maxLength)(150)
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
                return _apis_trakingStatusApi__WEBPACK_IMPORTED_MODULE_0__["default"].get()["catch"](function (error) {
                  _this.updateAlert(true, "No fue posible obtener los registros.", "fail");

                  _this.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_1__["default"].verifySessionFinished(error.response.status, 401);
                });

              case 5:
                res = _context.sent;
                _this.records = res.data.trakingStatuses;
                _this.recordsFiltered = res.data.trakingStatuses;
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
                return _apis_trakingStatusApi__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/".concat(_this2.editedItem.id))["catch"](function (error) {
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
                return _apis_trakingStatusApi__WEBPACK_IMPORTED_MODULE_0__["default"].put("/".concat(_this5.editedItem.id), _this5.editedItem)["catch"](function (error) {
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
                return _apis_trakingStatusApi__WEBPACK_IMPORTED_MODULE_0__["default"].post(null, _this5.editedItem)["catch"](function (error) {
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

          for (var i = 0; i < record.status_name.length; i++) {
            searchConcat += record.status_name[i].toUpperCase();

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/TrakingStatus.vue?vue&type=template&id=6d687fe6&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/TrakingStatus.vue?vue&type=template&id=6d687fe6& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
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
      "sort-by": "status_name"
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function fn() {
        return [_c("v-toolbar", {
          attrs: {
            flat: ""
          }
        }, [_c("v-toolbar-title", [_vm._v("Estados de seguimiento")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-dialog", {
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
                  disabled: _vm.loading != false
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
            label: "Estado de seguimiento",
            validation: _vm.$v.editedItem.status_name,
            validationTextType: "default",
            validationsInput: {
              required: true,
              minLength: true,
              maxLength: true
            }
          },
          model: {
            value: _vm.$v.editedItem.status_name.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.status_name, "$model", $$v);
            },
            expression: "$v.editedItem.status_name.$model"
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

/***/ "./resources/js/apis/trakingStatusApi.js":
/*!***********************************************!*\
  !*** ./resources/js/apis/trakingStatusApi.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var trakingStatusApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api/trakingStatus"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trakingStatusApi);

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

/***/ "./resources/js/components/cuscatlan/TrakingStatus.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/cuscatlan/TrakingStatus.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TrakingStatus_vue_vue_type_template_id_6d687fe6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TrakingStatus.vue?vue&type=template&id=6d687fe6& */ "./resources/js/components/cuscatlan/TrakingStatus.vue?vue&type=template&id=6d687fe6&");
/* harmony import */ var _TrakingStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrakingStatus.vue?vue&type=script&lang=js& */ "./resources/js/components/cuscatlan/TrakingStatus.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TrakingStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TrakingStatus_vue_vue_type_template_id_6d687fe6___WEBPACK_IMPORTED_MODULE_0__.render,
  _TrakingStatus_vue_vue_type_template_id_6d687fe6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cuscatlan/TrakingStatus.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/cuscatlan/TrakingStatus.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/cuscatlan/TrakingStatus.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrakingStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TrakingStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/TrakingStatus.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TrakingStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cuscatlan/TrakingStatus.vue?vue&type=template&id=6d687fe6&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/cuscatlan/TrakingStatus.vue?vue&type=template&id=6d687fe6& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrakingStatus_vue_vue_type_template_id_6d687fe6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrakingStatus_vue_vue_type_template_id_6d687fe6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TrakingStatus_vue_vue_type_template_id_6d687fe6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TrakingStatus.vue?vue&type=template&id=6d687fe6& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/TrakingStatus.vue?vue&type=template&id=6d687fe6&");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfY3VzY2F0bGFuX1RyYWtpbmdTdGF0dXNfdnVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0EwSkE7Ozs7OztBQUEyRDtBQUNyQjtBQUNvQztBQUUxRSxpRUFBZTtFQUNmQTtJQUFBO01BQ0FDLFVBREE7TUFFQUMsYUFGQTtNQUdBQyxjQUhBO01BSUFDLG1CQUpBO01BS0FDLFVBQ0E7UUFBQUM7UUFBQUM7TUFBQSxDQURBLEVBRUE7UUFBQUQ7UUFBQUM7UUFBQUM7TUFBQSxDQUZBLENBTEE7TUFTQUMsV0FUQTtNQVVBQyxtQkFWQTtNQVdBQyxlQVhBO01BWUFDO1FBQ0FDO01BREEsQ0FaQTtNQWVBQztRQUNBRDtNQURBLENBZkE7TUFrQkFFLGFBbEJBO01BbUJBQyxxQkFuQkE7TUFvQkFDLGdCQXBCQTtNQXFCQUMsOEJBckJBO01Bc0JBQztJQXRCQTtFQUFBLENBREE7RUEwQkE7RUFDQUM7SUFDQVI7TUFDQUM7UUFDQVEsVUFBQUEsOERBREE7UUFFQUMsV0FBQUEsbUVBQUFBLEdBRkE7UUFHQUMsV0FBQUEsbUVBQUFBO01BSEE7SUFEQTtFQURBLENBM0JBO0VBb0NBO0VBQ0FDO0lBQ0FDLFNBREEsdUJBQ0E7TUFDQTtJQUNBO0VBSEEsQ0FyQ0E7RUEyQ0FDO0lBQ0F4QixNQURBLGtCQUNBeUIsR0FEQSxFQUNBO01BQ0FBO0lBQ0EsQ0FIQTtJQUlBdkIsWUFKQSx3QkFJQXVCLEdBSkEsRUFJQTtNQUNBQTtJQUNBO0VBTkEsQ0EzQ0E7RUFvREFDLE9BcERBLHFCQW9EQTtJQUNBO0VBQ0EsQ0F0REE7RUF3REFDO0lBQ0FDLFVBREEsd0JBQ0E7TUFBQTs7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBSEE7Z0JBQUEsT0FLQUMsa0VBQUFBO2tCQUNBOztrQkFDQSw2R0FDQUMscUJBREEsRUFFQSxHQUZBO2dCQUlBLENBTkEsQ0FMQTs7Y0FBQTtnQkFLQUMs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QUM7QUFDRixrQkFBZTs7QUFFZixjQUFjLG1CQUFPLENBQUMsbUVBQVU7O0FBRWhDLHVGQUF1RixJQUFJLEVBQUUsRUFBRSxpQ0FBaUMsSUFBSSxFQUFFLEVBQUUsc0NBQXNDLElBQUksRUFBRSxFQUFFLGdEQUFnRCxJQUFJLG9CQUFvQixFQUFFLDZGQUE2RixLQUFLLGlEQUFpRCxHQUFHLFlBQVksSUFBSTs7QUFFdGE7O0FBRUEsa0JBQWU7Ozs7Ozs7Ozs7OztBQ2JGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsaUJBQWlCLE9BQU8sdUJBQXVCLGdIQUF5QyxHQUFHLDBGQUE4QjtBQUN6SDtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQ1JGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFrQjs7QUFFbEIsd0JBQXdCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLHdCQUF3QixPQUFPLGtDQUFrQyxtSUFBbUk7O0FBRXBXLDJEQUEyRCxxQkFBTSxtQkFBbUIscUJBQU07O0FBRTFGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QztBQUN2Qzs7QUFFQTtBQUNBLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jdXNjYXRsYW4vVHJha2luZ1N0YXR1cy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY3VzY2F0bGFuL1RyYWtpbmdTdGF0dXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcGlzL3RyYWtpbmdTdGF0dXNBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2xpYnMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jdXNjYXRsYW4vVHJha2luZ1N0YXR1cy52dWU/NzAxMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jdXNjYXRsYW4vVHJha2luZ1N0YXR1cy52dWU/Yjk1MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jdXNjYXRsYW4vVHJha2luZ1N0YXR1cy52dWU/OWEzMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2FscGhhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvYWxwaGFOdW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9hbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9iZXR3ZWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvZGVjaW1hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2VtYWlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvaXBBZGRyZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWFjQWRkcmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21heExlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21heFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWluVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9ub3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9udW1lcmljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3JlcXVpcmVkSWYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9yZXF1aXJlZFVubGVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3NhbWVBcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi93aXRoUGFyYW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3dpdGhQYXJhbXNCcm93c2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBkYXRhLWFwcD5cbiAgICA8YWxlcnQtdGltZS1vdXRcbiAgICAgIDpyZWRpcmVjdD1cInJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkXCJcbiAgICAgIEByZWRpcmVjdD1cInVwZGF0ZVRpbWVPdXQoJGV2ZW50KVwiXG4gICAgLz5cbiAgICA8YWxlcnRcbiAgICAgIDp0ZXh0PVwidGV4dEFsZXJ0XCJcbiAgICAgIDpldmVudD1cImFsZXJ0RXZlbnRcIlxuICAgICAgOnNob3c9XCJzaG93QWxlcnRcIlxuICAgICAgQHNob3ctYWxlcnQ9XCJ1cGRhdGVBbGVydCgkZXZlbnQpXCJcbiAgICAgIGNsYXNzPVwibWItMlwiXG4gICAgLz5cbiAgICA8di1kYXRhLXRhYmxlXG4gICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxuICAgICAgOml0ZW1zPVwicmVjb3Jkc0ZpbHRlcmVkXCJcbiAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICBzb3J0LWJ5PVwic3RhdHVzX25hbWVcIlxuICAgICAgY2xhc3M9XCJlbGV2YXRpb24tMyBzaGFkb3cgcC0zIG10LTNcIlxuICAgID5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6dG9wPlxuICAgICAgICA8di10b29sYmFyIGZsYXQ+XG4gICAgICAgICAgPHYtdG9vbGJhci10aXRsZT5Fc3RhZG9zIGRlIHNlZ3VpbWllbnRvPC92LXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIiBtYXgtd2lkdGg9XCI2MDBweFwiIHBlcnNpc3RlbnQ+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFjdGl2YXRvcj1cInsgb24sIGF0dHJzIH1cIj5cbiAgICAgICAgICAgICAgPHYtcm93PlxuICAgICAgICAgICAgICAgIDx2LWNvbCBhbGlnbj1cImVuZFwiPlxuICAgICAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMiBidG4tbm9ybWFsIG5vLXVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImF0dHJzXCJcbiAgICAgICAgICAgICAgICAgICAgdi1vbj1cIm9uXCJcbiAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJsb2FkaW5nICE9IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHYuZWRpdGVkSXRlbS4kcmVzZXQoKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEFncmVnYXJcbiAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICA8di1jb2xcbiAgICAgICAgICAgICAgICAgIHhzPVwiNlwiXG4gICAgICAgICAgICAgICAgICBzbT1cIjZcIlxuICAgICAgICAgICAgICAgICAgbWQ9XCI2XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1ub25lIGQtbWQtYmxvY2sgZC1sZy1ibG9ja1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJ1c2NhclwiXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgQGtleXVwPVwic2VhcmNoVmFsdWUoKVwiXG4gICAgICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgPC92LXJvdz5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8di1jYXJkIGNsYXNzPVwiZmxleGNhcmRcIiBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibXgtYXV0byBwdC0zIG1iLTMgdGV4dC1jZW50ZXIgYmxhY2stc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICB7eyBmb3JtVGl0bGUgfX1cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8L3YtY2FyZC10aXRsZT5cblxuICAgICAgICAgICAgICA8di1jYXJkLXRleHQ+XG4gICAgICAgICAgICAgICAgPHYtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPCEtLSBGb3JtIC0tPlxuICAgICAgICAgICAgICAgICAgPHYtcm93PlxuICAgICAgICAgICAgICAgICAgICA8IS0tIFN0YXR1cyBOYW1lIC0tPlxuICAgICAgICAgICAgICAgICAgICA8di1jb2wgY29scz1cIjEyXCIgc209XCIxMlwiIG1kPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YmFzZS1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFc3RhZG8gZGUgc2VndWltaWVudG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIiR2LmVkaXRlZEl0ZW0uc3RhdHVzX25hbWUuJG1vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS5zdGF0dXNfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWxpZGF0aW9uc0lucHV0PVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIFN0YXR1cyBOYW1lIC0tPlxuICAgICAgICAgICAgICAgICAgPC92LXJvdz5cbiAgICAgICAgICAgICAgICAgIDwhLS0gRm9ybSAtLT5cbiAgICAgICAgICAgICAgICAgIDx2LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPHYtY29sIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlIG10LTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2F2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgR3VhcmRhclxuICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYnRuLW5vcm1hbC1jbG9zZSBuby11cHBlcmNhc2UgbXQtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsYXJcbiAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgPC92LXJvdz5cbiAgICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L3YtY2FyZC10ZXh0PlxuICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgPC92LWRpYWxvZz5cbiAgICAgICAgICA8di1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ0RlbGV0ZVwiIG1heC13aWR0aD1cIjQwMHB4XCI+XG4gICAgICAgICAgICA8di1jYXJkIGNsYXNzPVwiaC0xMDBcIj5cbiAgICAgICAgICAgICAgPHYtY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImJsYWNrLXNlY29uZGFyeSB0ZXh0LWNlbnRlciBtdC0zIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgIEVsaW1pbmFyIHJlZ2lzdHJvXG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICA8di1yb3c+XG4gICAgICAgICAgICAgICAgICA8di1jb2wgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJidG4tbm9ybWFsIG5vLXVwcGVyY2FzZSBtdC0zIG1iLTMgcHItNSBwbC01IG14LWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxldGVJdGVtQ29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgPkNvbmZpcm1hcjwvdi1idG5cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJ0bi1ub3JtYWwtY2xvc2Ugbm8tdXBwZXJjYXNlIG10LTMgbWItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNsb3NlRGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIENhbmNlbGFyXG4gICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgIDwvdi1yb3c+XG4gICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICA8L3YtZGlhbG9nPlxuICAgICAgICA8L3YtdG9vbGJhcj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90OltgaXRlbS5hY3Rpb25zYF09XCJ7IGl0ZW0gfVwiPlxuICAgICAgICA8di1pY29uIHNtYWxsIGNsYXNzPVwibXItMlwiIEBjbGljaz1cImVkaXRJdGVtKGl0ZW0pXCI+IG1kaS1wZW5jaWwgPC92LWljb24+XG4gICAgICAgIDx2LWljb24gc21hbGwgQGNsaWNrPVwiZGVsZXRlSXRlbShpdGVtKVwiPiBtZGktZGVsZXRlIDwvdi1pY29uPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bm8tZGF0YT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW5vcm1hbC1zZWNvbmRhcnkgbm8tZGVjb3JhdGlvblwiXG4gICAgICAgICAgQGNsaWNrPVwiaW5pdGlhbGl6ZVwiXG4gICAgICAgID5cbiAgICAgICAgICBSZWluaWNpYXJcbiAgICAgICAgPC9hPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3YtZGF0YS10YWJsZT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHRyYWtpbmdTdGF0dXNBcGkgZnJvbSBcIi4uLy4uL2FwaXMvdHJha2luZ1N0YXR1c0FwaVwiO1xuaW1wb3J0IGxpYiBmcm9tIFwiLi4vLi4vbGlicy9mdW5jdGlvblwiO1xuaW1wb3J0IHsgcmVxdWlyZWQsIG1pbkxlbmd0aCwgbWF4TGVuZ3RoIH0gZnJvbSBcInZ1ZWxpZGF0ZS9saWIvdmFsaWRhdG9yc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGE6ICgpID0+ICh7XG4gICAgc2VhcmNoOiBcIlwiLFxuICAgIGRpYWxvZzogZmFsc2UsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZGlhbG9nRGVsZXRlOiBmYWxzZSxcbiAgICBoZWFkZXJzOiBbXG4gICAgICB7IHRleHQ6IFwiRVNUQURPXCIsIHZhbHVlOiBcInN0YXR1c19uYW1lXCIgfSxcbiAgICAgIHsgdGV4dDogXCJBQ0NJT05FU1wiLCB2YWx1ZTogXCJhY3Rpb25zXCIsIHNvcnRhYmxlOiBmYWxzZSB9LFxuICAgIF0sXG4gICAgcmVjb3JkczogW10sXG4gICAgcmVjb3Jkc0ZpbHRlcmVkOiBbXSxcbiAgICBlZGl0ZWRJbmRleDogLTEsXG4gICAgZWRpdGVkSXRlbToge1xuICAgICAgc3RhdHVzX25hbWU6IFwiXCIsXG4gICAgfSxcbiAgICBkZWZhdWx0SXRlbToge1xuICAgICAgc3RhdHVzX25hbWU6IFwiXCIsXG4gICAgfSxcbiAgICB0ZXh0QWxlcnQ6IFwiXCIsXG4gICAgYWxlcnRFdmVudDogXCJzdWNjZXNzXCIsXG4gICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICByZWRpcmVjdFNlc3Npb25GaW5pc2hlZDogZmFsc2UsXG4gICAgYWxlcnRUaW1lT3V0OiAwLFxuICB9KSxcblxuICAvL1ZhbGlkYXRpb25zXG4gIHZhbGlkYXRpb25zOiB7XG4gICAgZWRpdGVkSXRlbToge1xuICAgICAgc3RhdHVzX25hbWU6IHtcbiAgICAgICAgcmVxdWlyZWQsXG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aCgxNTApLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICAvL1ZhbGlkYXRpb25zXG4gIGNvbXB1dGVkOiB7XG4gICAgZm9ybVRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWRpdGVkSW5kZXggPT09IC0xID8gXCJOdWV2byByZWdpc3Ryb1wiIDogXCJFZGl0YXIgcmVnaXN0cm9cIjtcbiAgICB9LFxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgZGlhbG9nKHZhbCkge1xuICAgICAgdmFsIHx8IHRoaXMuY2xvc2UoKTtcbiAgICB9LFxuICAgIGRpYWxvZ0RlbGV0ZSh2YWwpIHtcbiAgICAgIHZhbCB8fCB0aGlzLmNsb3NlRGVsZXRlKCk7XG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBpbml0aWFsaXplKCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVjb3JkcyA9IFtdO1xuICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWQgPSBbXTtcblxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgdHJha2luZ1N0YXR1c0FwaS5nZXQoKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVBbGVydCh0cnVlLCBcIk5vIGZ1ZSBwb3NpYmxlIG9idGVuZXIgbG9zIHJlZ2lzdHJvcy5cIiwgXCJmYWlsXCIpO1xuICAgICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gbGliLnZlcmlmeVNlc3Npb25GaW5pc2hlZChcbiAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgNDAxXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZWNvcmRzID0gcmVzLmRhdGEudHJha2luZ1N0YXR1c2VzO1xuICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWQgPSByZXMuZGF0YS50cmFraW5nU3RhdHVzZXM7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgZWRpdEl0ZW0oaXRlbSkge1xuICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IHRoaXMucmVjb3Jkc0ZpbHRlcmVkLmluZGV4T2YoaXRlbSk7XG4gICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKTtcbiAgICAgIHRoaXMuZGlhbG9nID0gdHJ1ZTtcbiAgICAgIHRoaXMuJHYuZWRpdGVkSXRlbS4kcmVzZXQoKTtcbiAgICB9LFxuXG4gICAgZGVsZXRlSXRlbShpdGVtKSB7XG4gICAgICB0aGlzLmVkaXRlZEluZGV4ID0gdGhpcy5yZWNvcmRzRmlsdGVyZWQuaW5kZXhPZihpdGVtKTtcbiAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pO1xuICAgICAgdGhpcy5kaWFsb2dEZWxldGUgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBhc3luYyBkZWxldGVJdGVtQ29uZmlybSgpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRyYWtpbmdTdGF0dXNBcGlcbiAgICAgICAgLmRlbGV0ZShgLyR7dGhpcy5lZGl0ZWRJdGVtLmlkfWApXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIFwiTm8gZnVlIHBvc2libGUgZWxpbWluYXIgZWwgcmVnaXN0cm9zLlwiLFxuICAgICAgICAgICAgXCJmYWlsXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gbGliLnZlcmlmeVNlc3Npb25GaW5pc2hlZChcbiAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgIDQxOVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzLmRhdGEubWVzc2FnZSA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gbGliLnZlcmlmeVNlc3Npb25GaW5pc2hlZChcbiAgICAgICAgICByZXMuc3RhdHVzLFxuICAgICAgICAgIDIwMFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KHRydWUsIFwiUmVnaXN0cm8gZWxpbWluYWRvLlwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgdGhpcy5jbG9zZURlbGV0ZSgpO1xuICAgIH0sXG5cbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdEl0ZW0pO1xuICAgICAgICB0aGlzLmVkaXRlZEluZGV4ID0gLTE7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgY2xvc2VEZWxldGUoKSB7XG4gICAgICB0aGlzLmRpYWxvZ0RlbGV0ZSA9IGZhbHNlO1xuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRJdGVtKTtcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGFzeW5jIHNhdmUoKSB7XG4gICAgICB0aGlzLiR2LiR0b3VjaCgpO1xuICAgICAgaWYgKHRoaXMuJHYuJGludmFsaWQpIHtcbiAgICAgICAgdGhpcy51cGRhdGVBbGVydCh0cnVlLCBcIkNhbXBvcyBvYmxpZ2F0b3Jpb3MuXCIsIFwiZmFpbFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lZGl0ZWRJbmRleCA+IC0xKSB7XG4gICAgICAgIGNvbnN0IGVkaXRlZCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWRbdGhpcy5lZGl0ZWRJbmRleF0sXG4gICAgICAgICAgdGhpcy5lZGl0ZWRJdGVtXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdHJha2luZ1N0YXR1c0FwaVxuICAgICAgICAgIC5wdXQoYC8ke3RoaXMuZWRpdGVkSXRlbS5pZH1gLCB0aGlzLmVkaXRlZEl0ZW0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGVydChcbiAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgXCJObyBmdWUgcG9zaWJsZSBhY3R1YWxpemFyIGVsIHJlZ2lzdHJvLlwiLFxuICAgICAgICAgICAgICBcImZhaWxcIlxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFNlc3Npb25GaW5pc2hlZCA9IGxpYi52ZXJpZnlTZXNzaW9uRmluaXNoZWQoXG4gICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgNDE5XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy5yZWRpcmVjdFNlc3Npb25GaW5pc2hlZCA9IGxpYi52ZXJpZnlTZXNzaW9uRmluaXNoZWQoXG4gICAgICAgICAgICByZXMuc3RhdHVzLFxuICAgICAgICAgICAgMjAwXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIFwiUmVnaXN0cm8gYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZS5cIixcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdHJha2luZ1N0YXR1c0FwaVxuICAgICAgICAgIC5wb3N0KG51bGwsIHRoaXMuZWRpdGVkSXRlbSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KHRydWUsIFwiTm8gZnVlIHBvc2libGUgY3JlYXIgZWwgcmVnaXN0cm8uXCIsIFwiZmFpbFwiKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgPSBsaWIudmVyaWZ5U2Vzc2lvbkZpbmlzaGVkKFxuICAgICAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICAgIDQxOVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzLmRhdGEubWVzc2FnZSA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIHRoaXMucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgPSBsaWIudmVyaWZ5U2Vzc2lvbkZpbmlzaGVkKFxuICAgICAgICAgICAgcmVzLnN0YXR1cyxcbiAgICAgICAgICAgIDIwMFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy51cGRhdGVBbGVydChcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICBcIlJlZ2lzdHJvIGFsbWFjZW5hZG8gY29ycmVjdGFtZW50ZS5cIixcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9LFxuXG4gICAgc2VhcmNoVmFsdWUoKSB7XG4gICAgICB0aGlzLnJlY29yZHNGaWx0ZXJlZCA9IFtdO1xuXG4gICAgICBpZiAodGhpcy5zZWFyY2ggIT0gXCJcIikge1xuICAgICAgICB0aGlzLnJlY29yZHMuZm9yRWFjaCgocmVjb3JkKSA9PiB7XG4gICAgICAgICAgbGV0IHNlYXJjaENvbmNhdCA9IFwiXCI7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWNvcmQuc3RhdHVzX25hbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNlYXJjaENvbmNhdCArPSByZWNvcmQuc3RhdHVzX25hbWVbaV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgc2VhcmNoQ29uY2F0ID09PSB0aGlzLnNlYXJjaC50b1VwcGVyQ2FzZSgpICYmXG4gICAgICAgICAgICAgICF0aGlzLnJlY29yZHNGaWx0ZXJlZC5zb21lKChyZWMpID0+IHJlYyA9PSByZWNvcmQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWQucHVzaChyZWNvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWQgPSB0aGlzLnJlY29yZHM7XG4gICAgfSxcblxuICAgIHVwZGF0ZUFsZXJ0KHNob3cgPSBmYWxzZSwgdGV4dCA9IFwiQWxlcnRhXCIsIGV2ZW50ID0gXCJzdWNjZXNzXCIpIHtcbiAgICAgIHRoaXMudGV4dEFsZXJ0ID0gdGV4dDtcbiAgICAgIHRoaXMuYWxlcnRFdmVudCA9IGV2ZW50O1xuICAgICAgdGhpcy5zaG93QWxlcnQgPSBzaG93O1xuICAgIH0sXG5cbiAgICB1cGRhdGVUaW1lT3V0KGV2ZW50KSB7XG4gICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gZXZlbnQ7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBcImRhdGEtYXBwXCI6IFwiXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiYWxlcnQtdGltZS1vdXRcIiwge1xuICAgICAgICBhdHRyczogeyByZWRpcmVjdDogX3ZtLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgcmVkaXJlY3Q6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVGltZU91dCgkZXZlbnQpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYWxlcnRcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdGV4dDogX3ZtLnRleHRBbGVydCxcbiAgICAgICAgICBldmVudDogX3ZtLmFsZXJ0RXZlbnQsXG4gICAgICAgICAgc2hvdzogX3ZtLnNob3dBbGVydCxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcInNob3ctYWxlcnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVBbGVydCgkZXZlbnQpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidi1kYXRhLXRhYmxlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWxldmF0aW9uLTMgc2hhZG93IHAtMyBtdC0zXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgaGVhZGVyczogX3ZtLmhlYWRlcnMsXG4gICAgICAgICAgaXRlbXM6IF92bS5yZWNvcmRzRmlsdGVyZWQsXG4gICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgXCJzb3J0LWJ5XCI6IFwic3RhdHVzX25hbWVcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJ0b3BcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxhdDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCBbX3ZtLl92KFwiRXN0YWRvcyBkZSBzZWd1aW1pZW50b1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjYwMHB4XCIsIHBlcnNpc3RlbnQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICh7IG9uLCBhdHRycyB9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImVuZFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9iKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1iLTIgYnRuLW5vcm1hbCBuby11cHBlcmNhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmcgIT0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHYuZWRpdGVkSXRlbS4kcmVzZXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgQWdyZWdhclxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLW5vbmUgZC1tZC1ibG9jayBkLWxnLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czogXCI2XCIsIHNtOiBcIjZcIiwgbWQ6IFwiNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQnVzY2FyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VhcmNoVmFsdWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleGNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhlaWdodDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm14LWF1dG8gcHQtMyBtYi0zIHRleHQtY2VudGVyIGJsYWNrLXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtVGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRXN0YWRvIGRlIHNlZ3VpbWllbnRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGF0dXNfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlOiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnNJbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGF0dXNfbmFtZS4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhdHVzX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJHYuZWRpdGVkSXRlbS5zdGF0dXNfbmFtZS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4tbm9ybWFsIG5vLXVwcGVyY2FzZSBtdC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgR3VhcmRhclxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ub3JtYWwtY2xvc2Ugbm8tdXBwZXJjYXNlIG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsYXJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjQwMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZ0RlbGV0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ0RlbGV0ZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dEZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoLTEwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJsYWNrLXNlY29uZGFyeSB0ZXh0LWNlbnRlciBtdC0zIG1iLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBFbGltaW5hciByZWdpc3Ryb1xcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlIG10LTMgbWItMyBwci01IHBsLTUgbXgtYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogX3ZtLmRlbGV0ZUl0ZW1Db25maXJtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb25maXJtYXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuLW5vcm1hbC1jbG9zZSBuby11cHBlcmNhc2UgbXQtMyBtYi0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZURlbGV0ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbGFyXFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGBpdGVtLmFjdGlvbnNgLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKHsgaXRlbSB9KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNtYWxsOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWRpdEl0ZW0oaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBtZGktcGVuY2lsIFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzbWFsbDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZUl0ZW0oaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBtZGktZGVsZXRlIFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcIm5vLWRhdGFcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1ub3JtYWwtc2Vjb25kYXJ5IG5vLWRlY29yYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaW5pdGlhbGl6ZSB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBSZWluaWNpYXJcXG4gICAgICBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICksXG4gICAgICB9KSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgdHJha2luZ1N0YXR1c0FwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogXCIvYXBpL3RyYWtpbmdTdGF0dXNcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0cmFraW5nU3RhdHVzQXBpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHZlcmlmeVNlc3Npb25GaW5pc2hlZDogKHN0YXR1cywgY29kZSA9IDIwMCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXMpO1xuICAgICAgICBpZiAoc3RhdHVzID09IDQxOSB8fCBzdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxcIiArIHN0YXR1cyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9UcmFraW5nU3RhdHVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZDY4N2ZlNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UcmFraW5nU3RhdHVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVHJha2luZ1N0YXR1cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEluZm9ybcOhdGljYVxcXFxEb2N1bWVudHNcXFxccHJvamVjdHNNQ1xcXFxTSVNFLUNVU0NBLTIwMjItbWFpblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2ZDY4N2ZlNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2ZDY4N2ZlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2ZDY4N2ZlNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVHJha2luZ1N0YXR1cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmQ2ODdmZTYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmQ2ODdmZTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2N1c2NhdGxhbi9UcmFraW5nU3RhdHVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UcmFraW5nU3RhdHVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RyYWtpbmdTdGF0dXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UcmFraW5nU3RhdHVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZDY4N2ZlNiZcIiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdhbHBoYScsIC9eW2EtekEtWl0qJC8pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnYWxwaGFOdW0nLCAvXlthLXpBLVowLTldKiQvKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbGlkYXRvcnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsaWRhdG9yc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ2FuZCdcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9ycy5sZW5ndGggPiAwICYmIHZhbGlkYXRvcnMucmVkdWNlKGZ1bmN0aW9uICh2YWxpZCwgZm4pIHtcbiAgICAgIHJldHVybiB2YWxpZCAmJiBmbi5hcHBseShfdGhpcywgYXJncyk7XG4gICAgfSwgdHJ1ZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChtaW4sIG1heCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdiZXR3ZWVuJyxcbiAgICBtaW46IG1pbixcbiAgICBtYXg6IG1heFxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICghL1xccy8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSAmJiArbWluIDw9ICt2YWx1ZSAmJiArbWF4ID49ICt2YWx1ZTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxID0gZXhwb3J0cy5yZWdleCA9IGV4cG9ydHMucmVmID0gZXhwb3J0cy5sZW4gPSB2b2lkIDA7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUGFyYW1zXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF93aXRoUGFyYW1zLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX3dpdGhQYXJhbXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi93aXRoUGFyYW1zXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgcmVxID0gZnVuY3Rpb24gcmVxKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuICEhdmFsdWUubGVuZ3RoO1xuXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiAhaXNOYU4odmFsdWUuZ2V0VGltZSgpKTtcbiAgfVxuXG4gIGlmIChfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcpIHtcbiAgICBmb3IgKHZhciBfIGluIHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gISFTdHJpbmcodmFsdWUpLmxlbmd0aDtcbn07XG5cbmV4cG9ydHMucmVxID0gcmVxO1xuXG52YXIgbGVuID0gZnVuY3Rpb24gbGVuKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkgcmV0dXJuIHZhbHVlLmxlbmd0aDtcblxuICBpZiAoX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nKHZhbHVlKS5sZW5ndGg7XG59O1xuXG5leHBvcnRzLmxlbiA9IGxlbjtcblxudmFyIHJlZiA9IGZ1bmN0aW9uIHJlZihyZWZlcmVuY2UsIHZtLCBwYXJlbnRWbSkge1xuICByZXR1cm4gdHlwZW9mIHJlZmVyZW5jZSA9PT0gJ2Z1bmN0aW9uJyA/IHJlZmVyZW5jZS5jYWxsKHZtLCBwYXJlbnRWbSkgOiBwYXJlbnRWbVtyZWZlcmVuY2VdO1xufTtcblxuZXhwb3J0cy5yZWYgPSByZWY7XG5cbnZhciByZWdleCA9IGZ1bmN0aW9uIHJlZ2V4KHR5cGUsIGV4cHIpIHtcbiAgcmV0dXJuICgwLCBfd2l0aFBhcmFtcy5kZWZhdWx0KSh7XG4gICAgdHlwZTogdHlwZVxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gIXJlcSh2YWx1ZSkgfHwgZXhwci50ZXN0KHZhbHVlKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLnJlZ2V4ID0gcmVnZXg7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2RlY2ltYWwnLCAvXlstXT9cXGQqKFxcLlxcZCspPyQvKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgZW1haWxSZWdleCA9IC9eKD86W0EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLltBLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKnxcIig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxXFx4MjMtXFx4NWJcXHg1ZC1cXHg3Zl18W1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkqXCIpQCg/Oig/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pK1thLXowLTldezIsfSg/OlthLXowLTktXSpbYS16MC05XSk/fFxcWyg/Oig/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4pezN9KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/fFthLXowLTktXSpbYS16MC05XTooPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMS1cXHg1YVxceDUzLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkrKVxcXSkkL2k7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnZW1haWwnLCBlbWFpbFJlZ2V4KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFscGhhXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9hbHBoYS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFscGhhTnVtXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9hbHBoYU51bS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFuZFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYW5kLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYmV0d2VlblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYmV0d2Vlbi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlY2ltYWxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2RlY2ltYWwuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlbWFpbFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZW1haWwuZGVmYXVsdDtcbiAgfVxufSk7XG5leHBvcnRzLmhlbHBlcnMgPSB2b2lkIDA7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpbnRlZ2VyXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlZ2VyLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXBBZGRyZXNzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pcEFkZHJlc3MuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtYWNBZGRyZXNzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tYWNBZGRyZXNzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWF4TGVuZ3RoXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tYXhMZW5ndGguZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtYXhWYWx1ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWF4VmFsdWUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtaW5MZW5ndGhcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21pbkxlbmd0aC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1pblZhbHVlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9taW5WYWx1ZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm5vdFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbm90LmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibnVtZXJpY1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbnVtZXJpYy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm9yXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9vci5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlcXVpcmVkXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yZXF1aXJlZC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlcXVpcmVkSWZcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JlcXVpcmVkSWYuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZXF1aXJlZFVubGVzc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcmVxdWlyZWRVbmxlc3MuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzYW1lQXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3NhbWVBcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInVybFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfdXJsLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2FscGhhID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hbHBoYVwiKSk7XG5cbnZhciBfYWxwaGFOdW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2FscGhhTnVtXCIpKTtcblxudmFyIF9udW1lcmljID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9udW1lcmljXCIpKTtcblxudmFyIF9iZXR3ZWVuID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iZXR3ZWVuXCIpKTtcblxudmFyIF9lbWFpbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZW1haWxcIikpO1xuXG52YXIgX2lwQWRkcmVzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaXBBZGRyZXNzXCIpKTtcblxudmFyIF9tYWNBZGRyZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYWNBZGRyZXNzXCIpKTtcblxudmFyIF9tYXhMZW5ndGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21heExlbmd0aFwiKSk7XG5cbnZhciBfbWluTGVuZ3RoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9taW5MZW5ndGhcIikpO1xuXG52YXIgX3JlcXVpcmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZXF1aXJlZFwiKSk7XG5cbnZhciBfcmVxdWlyZWRJZiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVxdWlyZWRJZlwiKSk7XG5cbnZhciBfcmVxdWlyZWRVbmxlc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlcXVpcmVkVW5sZXNzXCIpKTtcblxudmFyIF9zYW1lQXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NhbWVBc1wiKSk7XG5cbnZhciBfdXJsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91cmxcIikpO1xuXG52YXIgX29yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9vclwiKSk7XG5cbnZhciBfYW5kID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hbmRcIikpO1xuXG52YXIgX25vdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbm90XCIpKTtcblxudmFyIF9taW5WYWx1ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWluVmFsdWVcIikpO1xuXG52YXIgX21heFZhbHVlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYXhWYWx1ZVwiKSk7XG5cbnZhciBfaW50ZWdlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vaW50ZWdlclwiKSk7XG5cbnZhciBfZGVjaW1hbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZGVjaW1hbFwiKSk7XG5cbnZhciBoZWxwZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vY29tbW9uXCIpKTtcblxuZXhwb3J0cy5oZWxwZXJzID0gaGVscGVycztcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlQmFiZWxJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgdmFyIGNhY2hlTm9kZUludGVyb3AgPSBuZXcgV2Vha01hcCgpOyByZXR1cm4gKF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyByZXR1cm4gbm9kZUludGVyb3AgPyBjYWNoZU5vZGVJbnRlcm9wIDogY2FjaGVCYWJlbEludGVyb3A7IH0pKG5vZGVJbnRlcm9wKTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmosIG5vZGVJbnRlcm9wKSB7IGlmICghbm9kZUludGVyb3AgJiYgb2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKGtleSAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdpbnRlZ2VyJywgLyheWzAtOV0qJCl8KF4tWzAtOV0rJCkvKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gIHR5cGU6ICdpcEFkZHJlc3MnXG59LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKCEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbmliYmxlcyA9IHZhbHVlLnNwbGl0KCcuJyk7XG4gIHJldHVybiBuaWJibGVzLmxlbmd0aCA9PT0gNCAmJiBuaWJibGVzLmV2ZXJ5KG5pYmJsZVZhbGlkKTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxudmFyIG5pYmJsZVZhbGlkID0gZnVuY3Rpb24gbmliYmxlVmFsaWQobmliYmxlKSB7XG4gIGlmIChuaWJibGUubGVuZ3RoID4gMyB8fCBuaWJibGUubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG5pYmJsZVswXSA9PT0gJzAnICYmIG5pYmJsZSAhPT0gJzAnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCFuaWJibGUubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIG51bWVyaWMgPSArbmliYmxlIHwgMDtcbiAgcmV0dXJuIG51bWVyaWMgPj0gMCAmJiBudW1lcmljIDw9IDI1NTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgdmFyIHNlcGFyYXRvciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJzonO1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtYWNBZGRyZXNzJ1xuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoISgwLCBfY29tbW9uLnJlcSkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBwYXJ0cyA9IHR5cGVvZiBzZXBhcmF0b3IgPT09ICdzdHJpbmcnICYmIHNlcGFyYXRvciAhPT0gJycgPyB2YWx1ZS5zcGxpdChzZXBhcmF0b3IpIDogdmFsdWUubGVuZ3RoID09PSAxMiB8fCB2YWx1ZS5sZW5ndGggPT09IDE2ID8gdmFsdWUubWF0Y2goLy57Mn0vZykgOiBudWxsO1xuICAgIHJldHVybiBwYXJ0cyAhPT0gbnVsbCAmJiAocGFydHMubGVuZ3RoID09PSA2IHx8IHBhcnRzLmxlbmd0aCA9PT0gOCkgJiYgcGFydHMuZXZlcnkoaGV4VmFsaWQpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG52YXIgaGV4VmFsaWQgPSBmdW5jdGlvbiBoZXhWYWxpZChoZXgpIHtcbiAgcmV0dXJuIGhleC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9eWzAtOWEtZl17Mn0kLyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobGVuZ3RoKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21heExlbmd0aCcsXG4gICAgbWF4OiBsZW5ndGhcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAoMCwgX2NvbW1vbi5sZW4pKHZhbHVlKSA8PSBsZW5ndGg7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChtYXgpIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbWF4VmFsdWUnLFxuICAgIG1heDogbWF4XG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKCEvXFxzLy50ZXN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpICYmICt2YWx1ZSA8PSArbWF4O1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobGVuZ3RoKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21pbkxlbmd0aCcsXG4gICAgbWluOiBsZW5ndGhcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAoMCwgX2NvbW1vbi5sZW4pKHZhbHVlKSA+PSBsZW5ndGg7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChtaW4pIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbWluVmFsdWUnLFxuICAgIG1pbjogbWluXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKCEvXFxzLy50ZXN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpICYmICt2YWx1ZSA+PSArbWluO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQodmFsaWRhdG9yKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ25vdCdcbiAgfSwgZnVuY3Rpb24gKHZhbHVlLCB2bSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgIXZhbGlkYXRvci5jYWxsKHRoaXMsIHZhbHVlLCB2bSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ251bWVyaWMnLCAvXlswLTldKiQvKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbGlkYXRvcnMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsaWRhdG9yc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ29yJ1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3JzLmxlbmd0aCA+IDAgJiYgdmFsaWRhdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKHZhbGlkLCBmbikge1xuICAgICAgcmV0dXJuIHZhbGlkIHx8IGZuLmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICB9LCBmYWxzZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gIHR5cGU6ICdyZXF1aXJlZCdcbn0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiAoMCwgX2NvbW1vbi5yZXEpKHZhbHVlLnRyaW0oKSk7XG4gIH1cblxuICByZXR1cm4gKDAsIF9jb21tb24ucmVxKSh2YWx1ZSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChwcm9wKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ3JlcXVpcmVkSWYnLFxuICAgIHByb3A6IHByb3BcbiAgfSwgZnVuY3Rpb24gKHZhbHVlLCBwYXJlbnRWbSkge1xuICAgIHJldHVybiAoMCwgX2NvbW1vbi5yZWYpKHByb3AsIHRoaXMsIHBhcmVudFZtKSA/ICgwLCBfY29tbW9uLnJlcSkodmFsdWUpIDogdHJ1ZTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHByb3ApIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAncmVxdWlyZWRVbmxlc3MnLFxuICAgIHByb3A6IHByb3BcbiAgfSwgZnVuY3Rpb24gKHZhbHVlLCBwYXJlbnRWbSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVmKShwcm9wLCB0aGlzLCBwYXJlbnRWbSkgPyAoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSA6IHRydWU7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChlcXVhbFRvKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ3NhbWVBcycsXG4gICAgZXE6IGVxdWFsVG9cbiAgfSwgZnVuY3Rpb24gKHZhbHVlLCBwYXJlbnRWbSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gKDAsIF9jb21tb24ucmVmKShlcXVhbFRvLCB0aGlzLCBwYXJlbnRWbSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgdXJsUmVnZXggPSAvXig/Oig/Oig/Omh0dHBzP3xmdHApOik/XFwvXFwvKSg/OlxcUysoPzo6XFxTKik/QCk/KD86KD8hKD86MTB8MTI3KSg/OlxcLlxcZHsxLDN9KXszfSkoPyEoPzoxNjlcXC4yNTR8MTkyXFwuMTY4KSg/OlxcLlxcZHsxLDN9KXsyfSkoPyExNzJcXC4oPzoxWzYtOV18MlxcZHwzWzAtMV0pKD86XFwuXFxkezEsM30pezJ9KSg/OlsxLTldXFxkP3wxXFxkXFxkfDJbMDFdXFxkfDIyWzAtM10pKD86XFwuKD86MT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSkpezJ9KD86XFwuKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNF0pKXwoPzooPzpbYS16MC05XFx1MDBhMS1cXHVmZmZmXVthLXowLTlcXHUwMGExLVxcdWZmZmZfLV17MCw2Mn0pP1thLXowLTlcXHUwMGExLVxcdWZmZmZdXFwuKSsoPzpbYS16XFx1MDBhMS1cXHVmZmZmXXsyLH1cXC4/KSkoPzo6XFxkezIsNX0pPyg/OlsvPyNdXFxTKik/JC9pO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ3VybCcsIHVybFJlZ2V4KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgd2l0aFBhcmFtcyA9IHByb2Nlc3MuZW52LkJVSUxEID09PSAnd2ViJyA/IHJlcXVpcmUoJy4vd2l0aFBhcmFtc0Jyb3dzZXInKS53aXRoUGFyYW1zIDogcmVxdWlyZSgnLi9wYXJhbXMnKS53aXRoUGFyYW1zO1xudmFyIF9kZWZhdWx0ID0gd2l0aFBhcmFtcztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy53aXRoUGFyYW1zID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbnZhciByb290ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHt9O1xuXG52YXIgZmFrZVdpdGhQYXJhbXMgPSBmdW5jdGlvbiBmYWtlV2l0aFBhcmFtcyhwYXJhbXNPckNsb3N1cmUsIG1heWJlVmFsaWRhdG9yKSB7XG4gIGlmIChfdHlwZW9mKHBhcmFtc09yQ2xvc3VyZSkgPT09ICdvYmplY3QnICYmIG1heWJlVmFsaWRhdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbWF5YmVWYWxpZGF0b3I7XG4gIH1cblxuICByZXR1cm4gcGFyYW1zT3JDbG9zdXJlKGZ1bmN0aW9uICgpIHt9KTtcbn07XG5cbnZhciB3aXRoUGFyYW1zID0gcm9vdC52dWVsaWRhdGUgPyByb290LnZ1ZWxpZGF0ZS53aXRoUGFyYW1zIDogZmFrZVdpdGhQYXJhbXM7XG5leHBvcnRzLndpdGhQYXJhbXMgPSB3aXRoUGFyYW1zOyJdLCJuYW1lcyI6WyJkYXRhIiwic2VhcmNoIiwiZGlhbG9nIiwibG9hZGluZyIsImRpYWxvZ0RlbGV0ZSIsImhlYWRlcnMiLCJ0ZXh0IiwidmFsdWUiLCJzb3J0YWJsZSIsInJlY29yZHMiLCJyZWNvcmRzRmlsdGVyZWQiLCJlZGl0ZWRJbmRleCIsImVkaXRlZEl0ZW0iLCJzdGF0dXNfbmFtZSIsImRlZmF1bHRJdGVtIiwidGV4dEFsZXJ0IiwiYWxlcnRFdmVudCIsInNob3dBbGVydCIsInJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkIiwiYWxlcnRUaW1lT3V0IiwidmFsaWRhdGlvbnMiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIm1heExlbmd0aCIsImNvbXB1dGVkIiwiZm9ybVRpdGxlIiwid2F0Y2giLCJ2YWwiLCJjcmVhdGVkIiwibWV0aG9kcyIsImluaXRpYWxpemUiLCJ0cmFraW5nU3RhdHVzQXBpIiwiZXJyb3IiLCJyZXMiLCJlZGl0SXRlbSIsIml0ZW0iLCJkZWxldGVJdGVtIiwiZGVsZXRlSXRlbUNvbmZpcm0iLCJjbG9zZSIsImNsb3NlRGVsZXRlIiwic2F2ZSIsImVkaXRlZCIsIk9iamVjdCIsInB1dCIsInBvc3QiLCJzZWFyY2hWYWx1ZSIsInNlYXJjaENvbmNhdCIsInVwZGF0ZUFsZXJ0IiwidXBkYXRlVGltZU91dCIsImV2ZW50IiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsImF0dHJzIiwicmVkaXJlY3QiLCJvbiIsIiRldmVudCIsIl92Iiwic3RhdGljQ2xhc3MiLCJzaG93IiwiaXRlbXMiLCJzY29wZWRTbG90cyIsIl91Iiwia2V5IiwiZm4iLCJmbGF0IiwicGVyc2lzdGVudCIsImFsaWduIiwiX2ciLCJfYiIsInJvdW5kZWQiLCJkaXNhYmxlZCIsImNsaWNrIiwiJHYiLCIkcmVzZXQiLCJ4cyIsInNtIiwibWQiLCJkZW5zZSIsImxhYmVsIiwib3V0bGluZWQiLCJ0eXBlIiwia2V5dXAiLCJtb2RlbCIsImNhbGxiYWNrIiwiJCR2IiwiZXhwcmVzc2lvbiIsImhlaWdodCIsIl9zIiwiY29scyIsInZhbGlkYXRpb24iLCJ2YWxpZGF0aW9uVGV4dFR5cGUiLCJ2YWxpZGF0aW9uc0lucHV0IiwiJG1vZGVsIiwiJHNldCIsImNvbG9yIiwicHJveHkiLCJzbWFsbCIsImhyZWYiLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwidmVyaWZ5U2Vzc2lvbkZpbmlzaGVkIiwic3RhdHVzIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9