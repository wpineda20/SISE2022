(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_cuscatlan_AxisCusca_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/AxisCusca.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/AxisCusca.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_userApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/userApi */ "./resources/js/apis/userApi.js");
/* harmony import */ var _apis_institutionApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/institutionApi */ "./resources/js/apis/institutionApi.js");
/* harmony import */ var _apis_axisCuscaApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apis/axisCuscaApi */ "./resources/js/apis/axisCuscaApi.js");
/* harmony import */ var _libs_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/function */ "./resources/js/libs/function.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
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
        text: "EJE",
        value: "axis_description"
      }, {
        text: "INSTITUCION",
        value: "institution_name"
      }, {
        text: "USUARIO",
        value: "user_name"
      }, {
        text: "ACCIONES",
        value: "actions",
        sortable: false
      }],
      records: [],
      recordsFiltered: [],
      editedIndex: -1,
      editedItem: {
        user_name: "",
        institution_name: "",
        axis_description: ""
      },
      defaultItem: {
        user_name: "",
        institution_name: "",
        axis_description: ""
      },
      textAlert: "",
      alertEvent: "success",
      showAlert: false,
      users: [],
      institutions: [],
      redirectSessionFinished: false,
      actualUser: {}
    };
  },
  // Validations
  validations: {
    editedItem: {
      axis_description: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.minLength)(1),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.maxLength)(500)
      },
      user_name: {
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.minLength)(1),
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required
      },
      institution_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__.minLength)(1)
      }
    }
  },
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
  methods: {
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
                requests = [_apis_axisCuscaApi__WEBPACK_IMPORTED_MODULE_2__["default"].get(), _apis_userApi__WEBPACK_IMPORTED_MODULE_0__["default"].get(null, {
                  params: {
                    skip: 0,
                    take: 200
                  }
                }), _apis_institutionApi__WEBPACK_IMPORTED_MODULE_1__["default"].get(), _apis_userApi__WEBPACK_IMPORTED_MODULE_0__["default"].post("/actualUser")];
                _context.next = 6;
                return Promise.all(requests)["catch"](function (error) {
                  _this.updateAlert(true, "No fue posible obtener los registros.", "fail");

                  _this.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_3__["default"].verifySessionFinished(error.response.status, 401);
                });

              case 6:
                responses = _context.sent;

                if (responses && responses[0].data.message == "success") {
                  _this.records = responses[0].data.axisCuscas;
                  _this.users = responses[1].data.users;
                  _this.institutions = responses[2].data.institutions;
                  _this.actualUser = responses[3].data.user;
                  _this.recordsFiltered = _this.records;
                  _this.editedItem.user_name = _this.actualUser.user_name;
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
      this.editedItem.user_name = item.user_name;
      this.editedItem.institution_name = item.institution_name;
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
                return _apis_axisCuscaApi__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"]("/".concat(_this2.editedItem.id))["catch"](function (error) {
                  _this2.updateAlert(true, "No fue posible eliminar el registros.", "fail");

                  _this2.close();
                });

              case 2:
                res = _context2.sent;

                if (res.data.message == "success") {
                  _this2.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_3__["default"].verifySessionFinished(res.status, 200);

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

                if (!(_this5.$v.$invalid || _this5.editedItem.user_name == "")) {
                  _context3.next = 4;
                  break;
                }

                _this5.updateAlert(true, "Campos obligatorios.", "fail");

                return _context3.abrupt("return");

              case 4:
                if (!(_this5.editedIndex > -1)) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 7;
                return _apis_axisCuscaApi__WEBPACK_IMPORTED_MODULE_2__["default"].put("/".concat(_this5.editedItem.id), _this5.editedItem)["catch"](function (error) {
                  _this5.updateAlert(true, "No fue posible crear el registro.", "fail");

                  _this5.close();

                  _this5.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_3__["default"].verifySessionFinished(error.response.status, 419);
                });

              case 7:
                res = _context3.sent;

                if (res.data.message == "success") {
                  _this5.updateAlert(true, "Registro actualizado correctamente.", "success");
                }

                _context3.next = 15;
                break;

              case 11:
                _context3.next = 13;
                return _apis_axisCuscaApi__WEBPACK_IMPORTED_MODULE_2__["default"].post(null, _this5.editedItem)["catch"](function (error) {
                  _this5.updateAlert(true, "No fue posible crear el registro.", "fail");

                  _this5.close();
                });

              case 13:
                _res = _context3.sent;

                if (_res.data.message == "success") {
                  _this5.updateAlert(true, "Registro almacenado correctamente.", "success");
                }

              case 15:
                _this5.close();

                _this5.initialize();

              case 17:
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

          for (var i = 0; i < record.axis_description.length; i++) {
            searchConcat += record.axis_description[i].toUpperCase();

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
      this.editedItem.institution_name = this.institutions[0].institution_name;
      this.editedItem.axis_description = "";
      this.editedItem.user_name = this.actualUser.user_name;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/AxisCusca.vue?vue&type=template&id=4bcf52d8&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/AxisCusca.vue?vue&type=template&id=4bcf52d8& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
      align: "end",
      cols: "12",
      md: "12",
      sm: "12"
    }
  }, [_c("v-btn", {
    staticClass: "btn-normal",
    attrs: {
      href: "/programmaticObjective",
      rounded: ""
    }
  }, [_vm._v("\n          Siguiente\n        ")])], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c("v-data-table", {
    staticClass: "elevation-3 shadow p-3 mt-3",
    attrs: {
      headers: _vm.headers,
      loading: _vm.loading,
      items: _vm.recordsFiltered,
      "sort-by": "axis_description"
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function fn() {
        return [_c("v-toolbar", {
          attrs: {
            flat: ""
          }
        }, [_c("v-toolbar-title", [_vm._v("Ejes")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-dialog", {
          attrs: {
            "max-width": "600px",
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
            sm: "6",
            md: "12"
          }
        }, [_c("base-text-area", {
          attrs: {
            label: "Eje",
            validation: _vm.$v.editedItem.axis_description,
            validationTextType: "default",
            validationsInput: {
              required: true,
              minLength: true,
              maxLength: true
            },
            min: 1,
            max: 500,
            rows: 4
          },
          model: {
            value: _vm.$v.editedItem.axis_description.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.axis_description, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
            },
            expression: "$v.editedItem.axis_description.$model"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("base-select-search", {
          attrs: {
            label: "Institución",
            items: _vm.institutions,
            item: "institution_name",
            validation: _vm.$v.editedItem.institution_name,
            validationsInput: {
              required: true,
              minLength: true
            }
          },
          model: {
            value: _vm.$v.editedItem.institution_name.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.institution_name, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
            },
            expression: "$v.editedItem.institution_name.$model"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("base-select-search", {
          attrs: {
            label: "Usuario",
            items: _vm.users,
            item: "user_name",
            validation: _vm.$v.editedItem.user_name,
            validationsInput: {
              required: true,
              minLength: true
            },
            readonly: true
          },
          model: {
            value: _vm.$v.editedItem.user_name.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.user_name, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
            },
            expression: "$v.editedItem.user_name.$model"
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

/***/ "./resources/js/apis/axisCuscaApi.js":
/*!*******************************************!*\
  !*** ./resources/js/apis/axisCuscaApi.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var axisCuscaApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api/axisCusca"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axisCuscaApi);

/***/ }),

/***/ "./resources/js/apis/institutionApi.js":
/*!*********************************************!*\
  !*** ./resources/js/apis/institutionApi.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var institutionApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api/institution"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (institutionApi);

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

/***/ "./resources/js/components/cuscatlan/AxisCusca.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/cuscatlan/AxisCusca.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AxisCusca_vue_vue_type_template_id_4bcf52d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxisCusca.vue?vue&type=template&id=4bcf52d8& */ "./resources/js/components/cuscatlan/AxisCusca.vue?vue&type=template&id=4bcf52d8&");
/* harmony import */ var _AxisCusca_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AxisCusca.vue?vue&type=script&lang=js& */ "./resources/js/components/cuscatlan/AxisCusca.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AxisCusca_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AxisCusca_vue_vue_type_template_id_4bcf52d8___WEBPACK_IMPORTED_MODULE_0__.render,
  _AxisCusca_vue_vue_type_template_id_4bcf52d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cuscatlan/AxisCusca.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/cuscatlan/AxisCusca.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/cuscatlan/AxisCusca.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AxisCusca_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AxisCusca.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/AxisCusca.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AxisCusca_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cuscatlan/AxisCusca.vue?vue&type=template&id=4bcf52d8&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/cuscatlan/AxisCusca.vue?vue&type=template&id=4bcf52d8& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AxisCusca_vue_vue_type_template_id_4bcf52d8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AxisCusca_vue_vue_type_template_id_4bcf52d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AxisCusca_vue_vue_type_template_id_4bcf52d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AxisCusca.vue?vue&type=template&id=4bcf52d8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/AxisCusca.vue?vue&type=template&id=4bcf52d8&");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfY3VzY2F0bGFuX0F4aXNDdXNjYV92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBbU5BOzs7Ozs7QUFBeUM7QUFDYztBQUNKO0FBQ2I7QUFDb0M7QUFFMUUsaUVBQWU7RUFDZkE7SUFBQTtNQUNBQyxVQURBO01BRUFDLGFBRkE7TUFHQUMsY0FIQTtNQUlBQyxtQkFKQTtNQUtBQyxVQUNBO1FBQUFDO1FBQUFDO01BQUEsQ0FEQSxFQUVBO1FBQUFEO1FBQUFDO01BQUEsQ0FGQSxFQUdBO1FBQUFEO1FBQUFDO01BQUEsQ0FIQSxFQUlBO1FBQUFEO1FBQUFDO1FBQUFDO01BQUEsQ0FKQSxDQUxBO01BV0FDLFdBWEE7TUFZQUMsbUJBWkE7TUFhQUMsZUFiQTtNQWNBQztRQUNBQyxhQURBO1FBRUFDLG9CQUZBO1FBR0FDO01BSEEsQ0FkQTtNQW1CQUM7UUFDQUgsYUFEQTtRQUVBQyxvQkFGQTtRQUdBQztNQUhBLENBbkJBO01Bd0JBRSxhQXhCQTtNQXlCQUMscUJBekJBO01BMEJBQyxnQkExQkE7TUEyQkFDLFNBM0JBO01BNEJBQyxnQkE1QkE7TUE2QkFDLDhCQTdCQTtNQThCQUM7SUE5QkE7RUFBQSxDQURBO0VBa0NBO0VBQ0FDO0lBQ0FaO01BQ0FHO1FBQ0FVLFVBQUFBLDhEQURBO1FBRUFDLFdBQUFBLG1FQUFBQSxHQUZBO1FBR0FDLFdBQUFBLG1FQUFBQTtNQUhBLENBREE7TUFNQWQ7UUFDQWEsV0FBQUEsbUVBQUFBLEdBREE7UUFFQUQsVUFBQUEsOERBQUFBO01BRkEsQ0FOQTtNQVVBWDtRQUNBVyxVQUFBQSw4REFEQTtRQUVBQyxXQUFBQSxtRUFBQUE7TUFGQTtJQVZBO0VBREEsQ0FuQ0E7RUFvREE7RUFDQUU7SUFDQUMsU0FEQSx1QkFDQTtNQUNBO0lBQ0E7RUFIQSxDQXJEQTtFQTJEQUM7SUFDQTVCLE1BREEsa0JBQ0E2QixHQURBLEVBQ0E7TUFDQUE7SUFDQSxDQUhBO0lBSUEzQixZ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T0FBTyxDQUFDQyxHQUFSLENBQVksTUFBTUgsTUFBbEI7TUFDQSxPQUFPLElBQVA7SUFDSDs7SUFDRCxPQUFPLEtBQVA7RUFDSDtBQVJVLENBQWY7Ozs7Ozs7Ozs7QUNBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZMMkQ7QUFDM0I7QUFDTDs7O0FBR3hEO0FBQ0EsQ0FBZ0c7QUFDaEcsZ0JBQWdCLHVHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ0EsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QzhMLENBQUMsaUVBQWUsb01BQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRUFwTjs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTs7QUFFZixjQUFjLG1CQUFPLENBQUMsbUVBQVU7O0FBRWhDOztBQUVBLGtCQUFlOzs7Ozs7Ozs7OztBQ1hGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmLGNBQWMsbUJBQU8sQ0FBQyxtRUFBVTs7QUFFaEM7O0FBRUEsa0JBQWU7Ozs7Ozs7Ozs7O0FDWEY7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7O0FBRWYsY0FBYyxtQkFBTyxDQUFDLG1FQUFVOztBQUVoQztBQUNBLDRFQUE0RSxhQUFhO0FBQ3pGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSwyRUFBMkUsZUFBZTtBQUMxRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLGtCQUFlOzs7Ozs7Ozs7OztBQzdCRjs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTs7QUFFZixjQUFjLG1CQUFPLENBQUMsbUVBQVU7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsa0JBQWU7Ozs7Ozs7Ozs7O0FDbkJGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLFdBQVcsR0FBRyxhQUFhLEdBQUcsV0FBVyxHQUFHLFdBQVc7QUFDdkQsOENBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOztBQUVGLHlDQUF5QyxtQkFBTyxDQUFDLGlFQUFlOztBQUVoRSx1Q0FBdUMsdUNBQXVDOztBQUU5RSx3QkFBd0IsMkJBQTJCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFcFc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFdBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBLGFBQWE7Ozs7Ozs7Ozs7O0FDekVBOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmLGNBQWMsbUJBQU8sQ0FBQyxtRUFBVTs7QUFFaEM7O0FBRUEsa0JBQWU7Ozs7Ozs7Ozs7O0FDWEY7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7O0FBRWYsY0FBYyxtQkFBTyxDQUFDLG1FQUFVOztBQUVoQyw0Q0FBNEMsRUFBRSwrQkFBK0IsRUFBRSxpSkFBaUosR0FBRyx5RUFBeUUsRUFBRTs7QUFFOVM7O0FBRUEsa0JBQWU7Ozs7Ozs7Ozs7O0FDYkY7O0FBRWIsd0JBQXdCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLHdCQUF3QixPQUFPLGtDQUFrQyxtSUFBbUk7O0FBRXBXLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDRDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLHVDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLDJDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLGVBQWU7QUFDZiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw2Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw4Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw2Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw0Q0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw2Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw0Q0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRix1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRixzQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw0Q0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiw4Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRixrREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRiwwQ0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRix1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7O0FBRUYsb0NBQW9DLG1CQUFPLENBQUMsaUVBQVM7O0FBRXJELHVDQUF1QyxtQkFBTyxDQUFDLHVFQUFZOztBQUUzRCxzQ0FBc0MsbUJBQU8sQ0FBQyxxRUFBVzs7QUFFekQsc0NBQXNDLG1CQUFPLENBQUMscUVBQVc7O0FBRXpELG9DQUFvQyxtQkFBTyxDQUFDLGlFQUFTOztBQUVyRCx3Q0FBd0MsbUJBQU8sQ0FBQyx5RUFBYTs7QUFFN0QseUNBQXlDLG1CQUFPLENBQUMsMkVBQWM7O0FBRS9ELHdDQUF3QyxtQkFBTyxDQUFDLHlFQUFhOztBQUU3RCx3Q0FBd0MsbUJBQU8sQ0FBQyx5RUFBYTs7QUFFN0QsdUNBQXVDLG1CQUFPLENBQUMsdUVBQVk7O0FBRTNELHlDQUF5QyxtQkFBTyxDQUFDLDJFQUFjOztBQUUvRCw2Q0FBNkMsbUJBQU8sQ0FBQyxtRkFBa0I7O0FBRXZFLHFDQUFxQyxtQkFBTyxDQUFDLG1FQUFVOztBQUV2RCxrQ0FBa0MsbUJBQU8sQ0FBQyw2REFBTzs7QUFFakQsaUNBQWlDLG1CQUFPLENBQUMsMkRBQU07O0FBRS9DLGtDQUFrQyxtQkFBTyxDQUFDLDZEQUFPOztBQUVqRCxrQ0FBa0MsbUJBQU8sQ0FBQyw2REFBTzs7QUFFakQsdUNBQXVDLG1CQUFPLENBQUMsdUVBQVk7O0FBRTNELHVDQUF1QyxtQkFBTyxDQUFDLHVFQUFZOztBQUUzRCxzQ0FBc0MsbUJBQU8sQ0FBQyxxRUFBVzs7QUFFekQsc0NBQXNDLG1CQUFPLENBQUMscUVBQVc7O0FBRXpELHNDQUFzQyxtQkFBTyxDQUFDLG1FQUFVOztBQUV4RCxlQUFlOztBQUVmLGlEQUFpRCxnREFBZ0QsdUNBQXVDLHNDQUFzQyxvRkFBb0YsNERBQTREOztBQUU5VCxxREFBcUQsNkNBQTZDLGNBQWMsOEVBQThFLFNBQVMsa0JBQWtCLG1EQUFtRCwrQkFBK0IseUJBQXlCLGlCQUFpQixzRkFBc0YsdUJBQXVCLDJFQUEyRSxxRkFBcUYsc0NBQXNDLDRDQUE0QyxPQUFPLDhCQUE4QixzQkFBc0IsYUFBYSwwQkFBMEI7O0FBRXR4Qix1Q0FBdUMsdUNBQXVDOzs7Ozs7Ozs7OztBQ3pMakU7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7O0FBRWYsY0FBYyxtQkFBTyxDQUFDLG1FQUFVOztBQUVoQzs7QUFFQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNYRjs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTs7QUFFZixjQUFjLG1CQUFPLENBQUMsbUVBQVU7O0FBRWhDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxrQkFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6Q2E7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7O0FBRWYsY0FBYyxtQkFBTyxDQUFDLG1FQUFVOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlKQUF5SixFQUFFO0FBQzNKO0FBQ0EsR0FBRztBQUNIOztBQUVBLGtCQUFlOztBQUVmO0FBQ0EsNENBQTRDLEVBQUU7QUFDOUM7Ozs7Ozs7Ozs7O0FDL0JhOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmLGNBQWMsbUJBQU8sQ0FBQyxtRUFBVTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsa0JBQWU7Ozs7Ozs7Ozs7O0FDbEJGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmLGNBQWMsbUJBQU8sQ0FBQyxtRUFBVTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsa0JBQWU7Ozs7Ozs7Ozs7O0FDbEJGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmLGNBQWMsbUJBQU8sQ0FBQyxtRUFBVTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsa0JBQWU7Ozs7Ozs7Ozs7O0FDbEJGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmLGNBQWMsbUJBQU8sQ0FBQyxtRUFBVTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsa0JBQWU7Ozs7Ozs7Ozs7O0FDbEJGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmLGNBQWMsbUJBQU8sQ0FBQyxtRUFBVTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBLGtCQUFlOzs7Ozs7Ozs7OztBQ2pCRjs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTs7QUFFZixjQUFjLG1CQUFPLENBQUMsbUVBQVU7O0FBRWhDOztBQUVBLGtCQUFlOzs7Ozs7Ozs7OztBQ1hGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmLGNBQWMsbUJBQU8sQ0FBQyxtRUFBVTs7QUFFaEM7QUFDQSw0RUFBNEUsYUFBYTtBQUN6RjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsMkVBQTJFLGVBQWU7QUFDMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSxrQkFBZTs7Ozs7Ozs7Ozs7QUM3QkY7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7O0FBRWYsY0FBYyxtQkFBTyxDQUFDLG1FQUFVOztBQUVoQztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQsa0JBQWU7Ozs7Ozs7Ozs7O0FDbkJGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmLGNBQWMsbUJBQU8sQ0FBQyxtRUFBVTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsa0JBQWU7Ozs7Ozs7Ozs7O0FDbEJGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmLGNBQWMsbUJBQU8sQ0FBQyxtRUFBVTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsa0JBQWU7Ozs7Ozs7Ozs7O0FDbEJGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmLGNBQWMsbUJBQU8sQ0FBQyxtRUFBVTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsa0JBQWU7Ozs7Ozs7Ozs7O0FDbEJGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmLGNBQWMsbUJBQU8sQ0FBQyxtRUFBVTs7QUFFaEMsdUZBQXVGLElBQUksRUFBRSxFQUFFLGlDQUFpQyxJQUFJLEVBQUUsRUFBRSxzQ0FBc0MsSUFBSSxFQUFFLEVBQUUsZ0RBQWdELElBQUksb0JBQW9CLEVBQUUsNkZBQTZGLEtBQUssaURBQWlELEdBQUcsWUFBWSxJQUFJOztBQUV0YTs7QUFFQSxrQkFBZTs7Ozs7Ozs7Ozs7O0FDYkY7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZixpQkFBaUIsT0FBTyx1QkFBdUIsZ0hBQXlDLEdBQUcsMEZBQThCO0FBQ3pIO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDUkY7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWtCOztBQUVsQix3QkFBd0IsMkJBQTJCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFcFcsMkRBQTJELHFCQUFNLG1CQUFtQixxQkFBTTs7QUFFMUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0Esa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2N1c2NhdGxhbi9BeGlzQ3VzY2EudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2N1c2NhdGxhbi9BeGlzQ3VzY2EudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcGlzL2F4aXNDdXNjYUFwaS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBpcy9pbnN0aXR1dGlvbkFwaS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBpcy91c2VyQXBpLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9saWJzL2Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY3VzY2F0bGFuL0F4aXNDdXNjYS52dWU/YmU1MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jdXNjYXRsYW4vQXhpc0N1c2NhLnZ1ZT84NjQyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2N1c2NhdGxhbi9BeGlzQ3VzY2EudnVlP2EyYzAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9hbHBoYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2FscGhhTnVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvYW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvYmV0d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2RlY2ltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9lbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2lwQWRkcmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21hY0FkZHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9tYXhMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9tYXhWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21pbkxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21pblZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbm90LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbnVtZXJpYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL29yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9yZXF1aXJlZElmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvcmVxdWlyZWRVbmxlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9zYW1lQXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy91cmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvd2l0aFBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi93aXRoUGFyYW1zQnJvd3Nlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgZGF0YS1hcHA+XG4gICAgPGFsZXJ0LXRpbWUtb3V0XG4gICAgICA6cmVkaXJlY3Q9XCJyZWRpcmVjdFNlc3Npb25GaW5pc2hlZFwiXG4gICAgICBAcmVkaXJlY3Q9XCJ1cGRhdGVUaW1lT3V0KCRldmVudClcIlxuICAgIC8+XG4gICAgPGFsZXJ0XG4gICAgICA6dGV4dD1cInRleHRBbGVydFwiXG4gICAgICA6ZXZlbnQ9XCJhbGVydEV2ZW50XCJcbiAgICAgIDpzaG93PVwic2hvd0FsZXJ0XCJcbiAgICAgIEBzaG93LWFsZXJ0PVwidXBkYXRlQWxlcnQoJGV2ZW50KVwiXG4gICAgICBjbGFzcz1cIm1iLTJcIlxuICAgIC8+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHYtaWY9XCJhY3R1YWxVc2VyLnJvbGUgPT0gJ0FkbWluaXN0cmFkb3InXCI+XG4gICAgICA8di1yb3c+XG4gICAgICAgIDx2LWNvbCBhbGlnbj1cImVuZFwiIGNvbHM9XCIxMlwiIG1kPVwiMTJcIiBzbT1cIjEyXCI+XG4gICAgICAgICAgPHYtYnRuIGhyZWY9XCIvcHJvZ3JhbW1hdGljT2JqZWN0aXZlXCIgY2xhc3M9XCJidG4tbm9ybWFsXCIgcm91bmRlZD5cbiAgICAgICAgICAgIFNpZ3VpZW50ZVxuICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgIDwvdi1jb2w+XG4gICAgICA8L3Ytcm93PlxuICAgIDwvZGl2PlxuICAgIDx2LWRhdGEtdGFibGVcbiAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXG4gICAgICA6bG9hZGluZz1cImxvYWRpbmdcIlxuICAgICAgOml0ZW1zPVwicmVjb3Jkc0ZpbHRlcmVkXCJcbiAgICAgIHNvcnQtYnk9XCJheGlzX2Rlc2NyaXB0aW9uXCJcbiAgICAgIGNsYXNzPVwiZWxldmF0aW9uLTMgc2hhZG93IHAtMyBtdC0zXCJcbiAgICA+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90OnRvcD5cbiAgICAgICAgPHYtdG9vbGJhciBmbGF0PlxuICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGU+RWplczwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9nXCIgbWF4LXdpZHRoPVwiNjAwcHhcIiBwZXJzaXN0ZW50PlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XCJ7fVwiPlxuICAgICAgICAgICAgICA8di1yb3c+XG4gICAgICAgICAgICAgICAgPHYtY29sIGFsaWduPVwiZW5kXCI+XG4gICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yIGJ0bi1ub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImxvYWRpbmcgIT0gZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvcGVuTW9kYWxcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBZ3JlZ2FyXG4gICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgICAgPHYtY29sXG4gICAgICAgICAgICAgICAgICB4cz1cIjZcIlxuICAgICAgICAgICAgICAgICAgc209XCI2XCJcbiAgICAgICAgICAgICAgICAgIG1kPVwiNlwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImQtbm9uZSBkLW1kLWJsb2NrIGQtbGctYmxvY2tcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCdXNjYXJcIlxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cD1cInNlYXJjaFZhbHVlKClcIlxuICAgICAgICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgIDwvdi1yb3c+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cImZsZXhjYXJkXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm14LWF1dG8gcHQtMyBtYi0zIHRleHQtY2VudGVyIGJsYWNrLXNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAge3sgZm9ybVRpdGxlIH19XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG5cbiAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwhLS0gRm9ybSAtLT5cbiAgICAgICAgICAgICAgICAgIDwhLS0gVXNlciAtLT5cbiAgICAgICAgICAgICAgICAgIDx2LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBBeGlzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8di1jb2wgY29scz1cIjEyXCIgc209XCI2XCIgbWQ9XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiYXNlLXRleHQtYXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFamVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiJHYuZWRpdGVkSXRlbS5heGlzX2Rlc2NyaXB0aW9uLiRtb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0uYXhpc19kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWxpZGF0aW9uc0lucHV0PVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDptaW49XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDptYXg9XCI1MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJvd3M9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIEF4aXMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gT2JqZWN0aXZlcyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiMTJcIiBtZD1cIjEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJhc2Utc2VsZWN0LXNlYXJjaFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbnN0aXR1Y2nDs25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiJHYuZWRpdGVkSXRlbS5pbnN0aXR1dGlvbl9uYW1lLiRtb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aXRlbXM9XCJpbnN0aXR1dGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT1cImluc3RpdHV0aW9uX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLmluc3RpdHV0aW9uX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb25zSW5wdXQ9XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIE9iamVjdGl2ZXMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gVXNlcnMgLS0+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiBzbT1cIjEyXCIgbWQ9XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiYXNlLXNlbGVjdC1zZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVXN1YXJpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCIkdi5lZGl0ZWRJdGVtLnVzZXJfbmFtZS4kbW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwidXNlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT1cInVzZXJfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0udXNlcl9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWxpZGF0aW9uc0lucHV0PVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIFVzZXJzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIEV4ZWN1dGVkIC0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tXG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiBzbT1cIjZcIiBtZD1cIjZcIiBjbGFzcz1cInB0LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8di1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIiR2LmVkaXRlZEl0ZW0uZXhlY3V0ZWQuJG1vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRWplY3V0YWRvXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC92LWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgICAtLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBFeGVjdXRlZCAtLT5cbiAgICAgICAgICAgICAgICAgIDwvdi1yb3c+XG4gICAgICAgICAgICAgICAgICA8IS0tIEZvcm0gLS0+XG4gICAgICAgICAgICAgICAgICA8di1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJidG4tbm9ybWFsIG5vLXVwcGVyY2FzZSBtdC0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNhdmVcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEd1YXJkYXJcbiAgICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJ0bi1ub3JtYWwtY2xvc2Ugbm8tdXBwZXJjYXNlIG10LTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbGFyXG4gICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICAgIDwvdi1yb3c+XG4gICAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC92LWNhcmQtdGV4dD5cbiAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgIDwvdi1kaWFsb2c+XG4gICAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dEZWxldGVcIiBtYXgtd2lkdGg9XCI0MDBweFwiPlxuICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cImgtMTAwXCI+XG4gICAgICAgICAgICAgIDx2LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJibGFjay1zZWNvbmRhcnkgdGV4dC1jZW50ZXIgbXQtMyBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICBFbGltaW5hciByZWdpc3Ryb1xuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPHYtcm93PlxuICAgICAgICAgICAgICAgICAgPHYtY29sIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYnRuLW5vcm1hbCBuby11cHBlcmNhc2UgbXQtMyBtYi0zIHByLTUgcGwtNSBteC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVsZXRlSXRlbUNvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgID5Db25maXJtYXI8L3YtYnRuXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJidG4tbm9ybWFsLWNsb3NlIG5vLXVwcGVyY2FzZSBtdC0zIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjbG9zZURlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxhclxuICAgICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICA8L3Ytcm93PlxuICAgICAgICAgICAgICA8L3YtY29udGFpbmVyPlxuICAgICAgICAgICAgPC92LWNhcmQ+XG4gICAgICAgICAgPC92LWRpYWxvZz5cbiAgICAgICAgPC92LXRvb2xiYXI+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDpbYGl0ZW0uYWN0aW9uc2BdPVwieyBpdGVtIH1cIj5cbiAgICAgICAgPHYtaWNvbiBzbWFsbCBjbGFzcz1cIm1yLTJcIiBAY2xpY2s9XCJlZGl0SXRlbShpdGVtKVwiPiBtZGktcGVuY2lsIDwvdi1pY29uPlxuICAgICAgICA8di1pY29uIHNtYWxsIEBjbGljaz1cImRlbGV0ZUl0ZW0oaXRlbSlcIj4gbWRpLWRlbGV0ZSA8L3YtaWNvbj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90Om5vLWRhdGE+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1ub3JtYWwtc2Vjb25kYXJ5IG5vLWRlY29yYXRpb25cIlxuICAgICAgICAgIEBjbGljaz1cImluaXRpYWxpemVcIlxuICAgICAgICA+XG4gICAgICAgICAgUmVpbmljaWFyXG4gICAgICAgIDwvYT5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC92LWRhdGEtdGFibGU+XG4gICAgPCEtLSA8di1yb3cgY2xhc3M9XCJjYXJkLXJvdW5kZWRcIj5cbiAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiB4cz1cIjEyXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPGxvYWRlciAvPlxuICAgICAgPC92LWNvbD5cbiAgICA8L3Ytcm93PiAtLT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHVzZXJBcGkgZnJvbSBcIi4uLy4uL2FwaXMvdXNlckFwaVwiO1xuaW1wb3J0IGluc3RpdHV0aW9uQXBpIGZyb20gXCIuLi8uLi9hcGlzL2luc3RpdHV0aW9uQXBpXCI7XG5pbXBvcnQgYXhpc0N1c2NhQXBpIGZyb20gXCIuLi8uLi9hcGlzL2F4aXNDdXNjYUFwaVwiO1xuaW1wb3J0IGxpYiBmcm9tIFwiLi4vLi4vbGlicy9mdW5jdGlvblwiO1xuaW1wb3J0IHsgcmVxdWlyZWQsIG1pbkxlbmd0aCwgbWF4TGVuZ3RoIH0gZnJvbSBcInZ1ZWxpZGF0ZS9saWIvdmFsaWRhdG9yc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGE6ICgpID0+ICh7XG4gICAgc2VhcmNoOiBcIlwiLFxuICAgIGRpYWxvZzogZmFsc2UsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZGlhbG9nRGVsZXRlOiBmYWxzZSxcbiAgICBoZWFkZXJzOiBbXG4gICAgICB7IHRleHQ6IFwiRUpFXCIsIHZhbHVlOiBcImF4aXNfZGVzY3JpcHRpb25cIiB9LFxuICAgICAgeyB0ZXh0OiBcIklOU1RJVFVDSU9OXCIsIHZhbHVlOiBcImluc3RpdHV0aW9uX25hbWVcIiB9LFxuICAgICAgeyB0ZXh0OiBcIlVTVUFSSU9cIiwgdmFsdWU6IFwidXNlcl9uYW1lXCIgfSxcbiAgICAgIHsgdGV4dDogXCJBQ0NJT05FU1wiLCB2YWx1ZTogXCJhY3Rpb25zXCIsIHNvcnRhYmxlOiBmYWxzZSB9LFxuICAgIF0sXG4gICAgcmVjb3JkczogW10sXG4gICAgcmVjb3Jkc0ZpbHRlcmVkOiBbXSxcbiAgICBlZGl0ZWRJbmRleDogLTEsXG4gICAgZWRpdGVkSXRlbToge1xuICAgICAgdXNlcl9uYW1lOiBcIlwiLFxuICAgICAgaW5zdGl0dXRpb25fbmFtZTogXCJcIixcbiAgICAgIGF4aXNfZGVzY3JpcHRpb246IFwiXCIsXG4gICAgfSxcbiAgICBkZWZhdWx0SXRlbToge1xuICAgICAgdXNlcl9uYW1lOiBcIlwiLFxuICAgICAgaW5zdGl0dXRpb25fbmFtZTogXCJcIixcbiAgICAgIGF4aXNfZGVzY3JpcHRpb246IFwiXCIsXG4gICAgfSxcbiAgICB0ZXh0QWxlcnQ6IFwiXCIsXG4gICAgYWxlcnRFdmVudDogXCJzdWNjZXNzXCIsXG4gICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICB1c2VyczogW10sXG4gICAgaW5zdGl0dXRpb25zOiBbXSxcbiAgICByZWRpcmVjdFNlc3Npb25GaW5pc2hlZDogZmFsc2UsXG4gICAgYWN0dWFsVXNlcjoge30sXG4gIH0pLFxuXG4gIC8vIFZhbGlkYXRpb25zXG4gIHZhbGlkYXRpb25zOiB7XG4gICAgZWRpdGVkSXRlbToge1xuICAgICAgYXhpc19kZXNjcmlwdGlvbjoge1xuICAgICAgICByZXF1aXJlZCxcbiAgICAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgoMSksXG4gICAgICAgIG1heExlbmd0aDogbWF4TGVuZ3RoKDUwMCksXG4gICAgICB9LFxuICAgICAgdXNlcl9uYW1lOiB7XG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgICByZXF1aXJlZCxcbiAgICAgIH0sXG4gICAgICBpbnN0aXR1dGlvbl9uYW1lOiB7XG4gICAgICAgIHJlcXVpcmVkLFxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgLy8gVmFsaWRhdGlvbnNcbiAgY29tcHV0ZWQ6IHtcbiAgICBmb3JtVGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lZGl0ZWRJbmRleCA9PT0gLTEgPyBcIk51ZXZvIHJlZ2lzdHJvXCIgOiBcIkVkaXRhciByZWdpc3Ryb1wiO1xuICAgIH0sXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBkaWFsb2codmFsKSB7XG4gICAgICB2YWwgfHwgdGhpcy5jbG9zZSgpO1xuICAgIH0sXG4gICAgZGlhbG9nRGVsZXRlKHZhbCkge1xuICAgICAgdmFsIHx8IHRoaXMuY2xvc2VEZWxldGUoKTtcbiAgICB9LFxuICB9LFxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGluaXRpYWxpemUoKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5yZWNvcmRzID0gW107XG4gICAgICB0aGlzLnJlY29yZHNGaWx0ZXJlZCA9IFtdO1xuXG4gICAgICBsZXQgcmVxdWVzdHMgPSBbXG4gICAgICAgIGF4aXNDdXNjYUFwaS5nZXQoKSxcbiAgICAgICAgdXNlckFwaS5nZXQobnVsbCwge1xuICAgICAgICAgIHBhcmFtczogeyBza2lwOiAwLCB0YWtlOiAyMDAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIGluc3RpdHV0aW9uQXBpLmdldCgpLFxuICAgICAgICB1c2VyQXBpLnBvc3QoXCIvYWN0dWFsVXNlclwiKSxcbiAgICAgIF07XG4gICAgICBsZXQgcmVzcG9uc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KHRydWUsIFwiTm8gZnVlIHBvc2libGUgb2J0ZW5lciBsb3MgcmVnaXN0cm9zLlwiLCBcImZhaWxcIik7XG4gICAgICAgIHRoaXMucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgPSBsaWIudmVyaWZ5U2Vzc2lvbkZpbmlzaGVkKFxuICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICA0MDFcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzcG9uc2VzICYmIHJlc3BvbnNlc1swXS5kYXRhLm1lc3NhZ2UgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgdGhpcy5yZWNvcmRzID0gcmVzcG9uc2VzWzBdLmRhdGEuYXhpc0N1c2NhcztcbiAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlc1sxXS5kYXRhLnVzZXJzO1xuICAgICAgICB0aGlzLmluc3RpdHV0aW9ucyA9IHJlc3BvbnNlc1syXS5kYXRhLmluc3RpdHV0aW9ucztcbiAgICAgICAgdGhpcy5hY3R1YWxVc2VyID0gcmVzcG9uc2VzWzNdLmRhdGEudXNlcjtcblxuICAgICAgICB0aGlzLnJlY29yZHNGaWx0ZXJlZCA9IHRoaXMucmVjb3JkcztcblxuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0udXNlcl9uYW1lID0gdGhpcy5hY3R1YWxVc2VyLnVzZXJfbmFtZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBlZGl0SXRlbShpdGVtKSB7XG4gICAgICB0aGlzLmRpYWxvZyA9IHRydWU7XG4gICAgICB0aGlzLmVkaXRlZEluZGV4ID0gdGhpcy5yZWNvcmRzRmlsdGVyZWQuaW5kZXhPZihpdGVtKTtcbiAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pO1xuICAgICAgdGhpcy5lZGl0ZWRJdGVtLnVzZXJfbmFtZSA9IGl0ZW0udXNlcl9uYW1lO1xuICAgICAgdGhpcy5lZGl0ZWRJdGVtLmluc3RpdHV0aW9uX25hbWUgPSBpdGVtLmluc3RpdHV0aW9uX25hbWU7XG4gICAgfSxcblxuICAgIGRlbGV0ZUl0ZW0oaXRlbSkge1xuICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IHRoaXMucmVjb3Jkc0ZpbHRlcmVkLmluZGV4T2YoaXRlbSk7XG4gICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKTtcbiAgICAgIHRoaXMuZGlhbG9nRGVsZXRlID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgYXN5bmMgZGVsZXRlSXRlbUNvbmZpcm0oKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlzQ3VzY2FBcGlcbiAgICAgICAgLmRlbGV0ZShgLyR7dGhpcy5lZGl0ZWRJdGVtLmlkfWApXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIFwiTm8gZnVlIHBvc2libGUgZWxpbWluYXIgZWwgcmVnaXN0cm9zLlwiLFxuICAgICAgICAgICAgXCJmYWlsXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgIHRoaXMucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgPSBsaWIudmVyaWZ5U2Vzc2lvbkZpbmlzaGVkKFxuICAgICAgICAgIHJlcy5zdGF0dXMsXG4gICAgICAgICAgMjAwXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJSZWdpc3RybyBlbGltaW5hZG8uXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJObyBzZSBwdWRvIGVsaW1pbmFyIGVsIHJlZ2lzdHJvLlwiLCBcImZhaWxcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgdGhpcy5jbG9zZURlbGV0ZSgpO1xuICAgIH0sXG5cbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IHRoaXMuZGVmYXVsdEl0ZW07XG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjbG9zZURlbGV0ZSgpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gdGhpcy5kZWZhdWx0SXRlbTtcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGlhbG9nRGVsZXRlID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGFzeW5jIHNhdmUoKSB7XG4gICAgICB0aGlzLiR2LiR0b3VjaCgpO1xuICAgICAgaWYgKHRoaXMuJHYuJGludmFsaWQgfHwgdGhpcy5lZGl0ZWRJdGVtLnVzZXJfbmFtZSA9PSBcIlwiKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJDYW1wb3Mgb2JsaWdhdG9yaW9zLlwiLCBcImZhaWxcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWRpdGVkSW5kZXggPiAtMSkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlzQ3VzY2FBcGlcbiAgICAgICAgICAucHV0KGAvJHt0aGlzLmVkaXRlZEl0ZW0uaWR9YCwgdGhpcy5lZGl0ZWRJdGVtKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJObyBmdWUgcG9zaWJsZSBjcmVhciBlbCByZWdpc3Ryby5cIiwgXCJmYWlsXCIpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFNlc3Npb25GaW5pc2hlZCA9IGxpYi52ZXJpZnlTZXNzaW9uRmluaXNoZWQoXG4gICAgICAgICAgICAgIGVycm9yLnJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgNDE5XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVBbGVydChcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICBcIlJlZ2lzdHJvIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUuXCIsXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aXNDdXNjYUFwaVxuICAgICAgICAgIC5wb3N0KG51bGwsIHRoaXMuZWRpdGVkSXRlbSlcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KHRydWUsIFwiTm8gZnVlIHBvc2libGUgY3JlYXIgZWwgcmVnaXN0cm8uXCIsIFwiZmFpbFwiKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzLmRhdGEubWVzc2FnZSA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgIHRoaXMudXBkYXRlQWxlcnQoXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgXCJSZWdpc3RybyBhbG1hY2VuYWRvIGNvcnJlY3RhbWVudGUuXCIsXG4gICAgICAgICAgICBcInN1Y2Nlc3NcIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH0sXG5cbiAgICBzZWFyY2hWYWx1ZSgpIHtcbiAgICAgIHRoaXMucmVjb3Jkc0ZpbHRlcmVkID0gW107XG5cbiAgICAgIGlmICh0aGlzLnNlYXJjaCAhPSBcIlwiKSB7XG4gICAgICAgIHRoaXMucmVjb3Jkcy5mb3JFYWNoKChyZWNvcmQpID0+IHtcbiAgICAgICAgICBsZXQgc2VhcmNoQ29uY2F0ID0gXCJcIjtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlY29yZC5heGlzX2Rlc2NyaXB0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzZWFyY2hDb25jYXQgKz0gcmVjb3JkLmF4aXNfZGVzY3JpcHRpb25baV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgc2VhcmNoQ29uY2F0ID09PSB0aGlzLnNlYXJjaC50b1VwcGVyQ2FzZSgpICYmXG4gICAgICAgICAgICAgICF0aGlzLnJlY29yZHNGaWx0ZXJlZC5zb21lKChyZWMpID0+IHJlYyA9PSByZWNvcmQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWQucHVzaChyZWNvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWQgPSB0aGlzLnJlY29yZHM7XG4gICAgfSxcblxuICAgIHVwZGF0ZUFsZXJ0KHNob3cgPSBmYWxzZSwgdGV4dCA9IFwiQWxlcnRhXCIsIGV2ZW50ID0gXCJzdWNjZXNzXCIpIHtcbiAgICAgIHRoaXMudGV4dEFsZXJ0ID0gdGV4dDtcbiAgICAgIHRoaXMuYWxlcnRFdmVudCA9IGV2ZW50O1xuICAgICAgdGhpcy5zaG93QWxlcnQgPSBzaG93O1xuICAgIH0sXG5cbiAgICB1cGRhdGVUaW1lT3V0KGV2ZW50KSB7XG4gICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gZXZlbnQ7XG4gICAgfSxcblxuICAgIG9wZW5Nb2RhbCgpIHtcbiAgICAgIHRoaXMuZGlhbG9nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZWRpdGVkSXRlbS5pbnN0aXR1dGlvbl9uYW1lID0gdGhpcy5pbnN0aXR1dGlvbnNbMF0uaW5zdGl0dXRpb25fbmFtZTtcbiAgICAgIHRoaXMuZWRpdGVkSXRlbS5heGlzX2Rlc2NyaXB0aW9uID0gXCJcIjtcbiAgICAgIHRoaXMuZWRpdGVkSXRlbS51c2VyX25hbWUgPSB0aGlzLmFjdHVhbFVzZXIudXNlcl9uYW1lO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgYXR0cnM6IHsgXCJkYXRhLWFwcFwiOiBcIlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcImFsZXJ0LXRpbWUtb3V0XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgcmVkaXJlY3Q6IF92bS5yZWRpcmVjdFNlc3Npb25GaW5pc2hlZCB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHJlZGlyZWN0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVRpbWVPdXQoJGV2ZW50KVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFsZXJ0XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHRleHQ6IF92bS50ZXh0QWxlcnQsXG4gICAgICAgICAgZXZlbnQ6IF92bS5hbGVydEV2ZW50LFxuICAgICAgICAgIHNob3c6IF92bS5zaG93QWxlcnQsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJzaG93LWFsZXJ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlQWxlcnQoJGV2ZW50KVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uYWN0dWFsVXNlci5yb2xlID09IFwiQWRtaW5pc3RyYWRvclwiXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBhbGlnbjogXCJlbmRcIiwgY29sczogXCIxMlwiLCBtZDogXCIxMlwiLCBzbTogXCIxMlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tbm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvcHJvZ3JhbW1hdGljT2JqZWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIFNpZ3VpZW50ZVxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtZGF0YS10YWJsZVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0zIHNoYWRvdyBwLTMgbXQtM1wiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nLFxuICAgICAgICAgIGl0ZW1zOiBfdm0ucmVjb3Jkc0ZpbHRlcmVkLFxuICAgICAgICAgIFwic29ydC1ieVwiOiBcImF4aXNfZGVzY3JpcHRpb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJ0b3BcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi10b29sYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZmxhdDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdG9vbGJhci10aXRsZVwiLCBbX3ZtLl92KFwiRWplc1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LXNwYWNlclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjYwMHB4XCIsIHBlcnNpc3RlbnQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImFjdGl2YXRvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICh7fSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBhbGlnbjogXCJlbmRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTIgYnRuLW5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5sb2FkaW5nICE9IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcGVuTW9kYWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgQWdyZWdhclxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLW5vbmUgZC1tZC1ibG9jayBkLWxnLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB4czogXCI2XCIsIHNtOiBcIjZcIiwgbWQ6IFwiNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtdGV4dC1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVuc2U6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQnVzY2FyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VhcmNoVmFsdWUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleGNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhlaWdodDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi1jYXJkLXRpdGxlXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm14LWF1dG8gcHQtMyBtYi0zIHRleHQtY2VudGVyIGJsYWNrLXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5mb3JtVGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkLXRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJhc2UtdGV4dC1hcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkVqZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXhpc19kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlOiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnNJbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5heGlzX2Rlc2NyaXB0aW9uLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5heGlzX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiAkJHYgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHYudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJHYuZWRpdGVkSXRlbS5heGlzX2Rlc2NyaXB0aW9uLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJhc2Utc2VsZWN0LXNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJJbnN0aXR1Y2nDs25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pbnN0aXR1dGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IFwiaW5zdGl0dXRpb25fbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGl0dXRpb25fbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnNJbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RpdHV0aW9uX25hbWUuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RpdHV0aW9uX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mICQkdiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkdi50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkdi5lZGl0ZWRJdGVtLmluc3RpdHV0aW9uX25hbWUuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sczogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc206IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1zZWxlY3Qtc2VhcmNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlVzdWFyaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS51c2VycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogXCJ1c2VyX25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS51c2VyX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zSW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLnVzZXJfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51c2VyX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mICQkdiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkdi50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkdi5lZGl0ZWRJdGVtLnVzZXJfbmFtZS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4tbm9ybWFsIG5vLXVwcGVyY2FzZSBtdC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgR3VhcmRhclxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ub3JtYWwtY2xvc2Ugbm8tdXBwZXJjYXNlIG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsYXJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjQwMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZ0RlbGV0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ0RlbGV0ZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dEZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoLTEwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJsYWNrLXNlY29uZGFyeSB0ZXh0LWNlbnRlciBtdC0zIG1iLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBFbGltaW5hciByZWdpc3Ryb1xcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlIG10LTMgbWItMyBwci01IHBsLTUgbXgtYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogX3ZtLmRlbGV0ZUl0ZW1Db25maXJtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb25maXJtYXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuLW5vcm1hbC1jbG9zZSBuby11cHBlcmNhc2UgbXQtMyBtYi0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZURlbGV0ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbGFyXFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGBpdGVtLmFjdGlvbnNgLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKHsgaXRlbSB9KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNtYWxsOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWRpdEl0ZW0oaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBtZGktcGVuY2lsIFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzbWFsbDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZUl0ZW0oaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBtZGktZGVsZXRlIFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcIm5vLWRhdGFcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1ub3JtYWwtc2Vjb25kYXJ5IG5vLWRlY29yYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaW5pdGlhbGl6ZSB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBSZWluaWNpYXJcXG4gICAgICBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICksXG4gICAgICB9KSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgYXhpc0N1c2NhQXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBcIi9hcGkvYXhpc0N1c2NhXCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXhpc0N1c2NhQXBpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBpbnN0aXR1dGlvbkFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogXCIvYXBpL2luc3RpdHV0aW9uXCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGl0dXRpb25BcGk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IHVzZXJBcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IFwiL2FwaS91c2VyXCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlckFwaTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB2ZXJpZnlTZXNzaW9uRmluaXNoZWQ6IChzdGF0dXMsIGNvZGUgPSAyMDApID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coc3RhdHVzKTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PSA0MTkgfHwgc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMXCIgKyBzdGF0dXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG59O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQXhpc0N1c2NhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YmNmNTJkOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BeGlzQ3VzY2EudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BeGlzQ3VzY2EudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxJbmZvcm3DoXRpY2FcXFxcRG9jdW1lbnRzXFxcXHByb2plY3RzTUNcXFxcU0lTRS1DVVNDQS0yMDIyLW1haW5cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGJjZjUyZDgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGJjZjUyZDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGJjZjUyZDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0F4aXNDdXNjYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGJjZjUyZDgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGJjZjUyZDgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2N1c2NhdGxhbi9BeGlzQ3VzY2EudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0F4aXNDdXNjYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BeGlzQ3VzY2EudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BeGlzQ3VzY2EudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRiY2Y1MmQ4JlwiIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2FscGhhJywgL15bYS16QS1aXSokLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdhbHBoYU51bScsIC9eW2EtekEtWjAtOV0qJC8pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsaWRhdG9ycyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWxpZGF0b3JzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnYW5kJ1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0b3JzLmxlbmd0aCA+IDAgJiYgdmFsaWRhdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKHZhbGlkLCBmbikge1xuICAgICAgcmV0dXJuIHZhbGlkICYmIGZuLmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICB9LCB0cnVlKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KG1pbiwgbWF4KSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ2JldHdlZW4nLFxuICAgIG1pbjogbWluLFxuICAgIG1heDogbWF4XG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKCEvXFxzLy50ZXN0KHZhbHVlKSB8fCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUpICYmICttaW4gPD0gK3ZhbHVlICYmICttYXggPj0gK3ZhbHVlO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXEgPSBleHBvcnRzLnJlZ2V4ID0gZXhwb3J0cy5yZWYgPSBleHBvcnRzLmxlbiA9IHZvaWQgMDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhQYXJhbXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3dpdGhQYXJhbXMuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfd2l0aFBhcmFtcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3dpdGhQYXJhbXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbnZhciByZXEgPSBmdW5jdGlvbiByZXEodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gISF2YWx1ZS5sZW5ndGg7XG5cbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuICFpc05hTih2YWx1ZS5nZXRUaW1lKCkpO1xuICB9XG5cbiAgaWYgKF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAodmFyIF8gaW4gdmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhIVN0cmluZyh2YWx1ZSkubGVuZ3RoO1xufTtcblxuZXhwb3J0cy5yZXEgPSByZXE7XG5cbnZhciBsZW4gPSBmdW5jdGlvbiBsZW4odmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWUubGVuZ3RoO1xuXG4gIGlmIChfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcodmFsdWUpLmxlbmd0aDtcbn07XG5cbmV4cG9ydHMubGVuID0gbGVuO1xuXG52YXIgcmVmID0gZnVuY3Rpb24gcmVmKHJlZmVyZW5jZSwgdm0sIHBhcmVudFZtKSB7XG4gIHJldHVybiB0eXBlb2YgcmVmZXJlbmNlID09PSAnZnVuY3Rpb24nID8gcmVmZXJlbmNlLmNhbGwodm0sIHBhcmVudFZtKSA6IHBhcmVudFZtW3JlZmVyZW5jZV07XG59O1xuXG5leHBvcnRzLnJlZiA9IHJlZjtcblxudmFyIHJlZ2V4ID0gZnVuY3Rpb24gcmVnZXgodHlwZSwgZXhwcikge1xuICByZXR1cm4gKDAsIF93aXRoUGFyYW1zLmRlZmF1bHQpKHtcbiAgICB0eXBlOiB0eXBlXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhcmVxKHZhbHVlKSB8fCBleHByLnRlc3QodmFsdWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMucmVnZXggPSByZWdleDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnZGVjaW1hbCcsIC9eWy1dP1xcZCooXFwuXFxkKyk/JC8pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBlbWFpbFJlZ2V4ID0gL14oPzpbQS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKD86XFwuW0EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKykqfFwiKD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjFcXHgyMy1cXHg1YlxceDVkLVxceDdmXXxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSpcIilAKD86KD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV17Mix9KD86W2EtejAtOS1dKlthLXowLTldKT98XFxbKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT98W2EtejAtOS1dKlthLXowLTldOig/OltcXHgwMS1cXHgwOFxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDIxLVxceDVhXFx4NTMtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSspXFxdKSQvaTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdlbWFpbCcsIGVtYWlsUmVnZXgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYWxwaGFcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FscGhhLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYWxwaGFOdW1cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FscGhhTnVtLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYW5kXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9hbmQuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJiZXR3ZWVuXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9iZXR3ZWVuLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjaW1hbFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZGVjaW1hbC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVtYWlsXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9lbWFpbC5kZWZhdWx0O1xuICB9XG59KTtcbmV4cG9ydHMuaGVscGVycyA9IHZvaWQgMDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImludGVnZXJcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVnZXIuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpcEFkZHJlc3NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2lwQWRkcmVzcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1hY0FkZHJlc3NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21hY0FkZHJlc3MuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtYXhMZW5ndGhcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21heExlbmd0aC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1heFZhbHVlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9tYXhWYWx1ZS5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1pbkxlbmd0aFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWluTGVuZ3RoLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWluVmFsdWVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21pblZhbHVlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibm90XCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9ub3QuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJudW1lcmljXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9udW1lcmljLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwib3JcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX29yLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVxdWlyZWRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JlcXVpcmVkLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVxdWlyZWRJZlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcmVxdWlyZWRJZi5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlcXVpcmVkVW5sZXNzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yZXF1aXJlZFVubGVzcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNhbWVBc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfc2FtZUFzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidXJsXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF91cmwuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfYWxwaGEgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2FscGhhXCIpKTtcblxudmFyIF9hbHBoYU51bSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYWxwaGFOdW1cIikpO1xuXG52YXIgX251bWVyaWMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL251bWVyaWNcIikpO1xuXG52YXIgX2JldHdlZW4gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2JldHdlZW5cIikpO1xuXG52YXIgX2VtYWlsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9lbWFpbFwiKSk7XG5cbnZhciBfaXBBZGRyZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pcEFkZHJlc3NcIikpO1xuXG52YXIgX21hY0FkZHJlc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21hY0FkZHJlc3NcIikpO1xuXG52YXIgX21heExlbmd0aCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWF4TGVuZ3RoXCIpKTtcblxudmFyIF9taW5MZW5ndGggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21pbkxlbmd0aFwiKSk7XG5cbnZhciBfcmVxdWlyZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlcXVpcmVkXCIpKTtcblxudmFyIF9yZXF1aXJlZElmID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZXF1aXJlZElmXCIpKTtcblxudmFyIF9yZXF1aXJlZFVubGVzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVxdWlyZWRVbmxlc3NcIikpO1xuXG52YXIgX3NhbWVBcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2FtZUFzXCIpKTtcblxudmFyIF91cmwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3VybFwiKSk7XG5cbnZhciBfb3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL29yXCIpKTtcblxudmFyIF9hbmQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2FuZFwiKSk7XG5cbnZhciBfbm90ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ub3RcIikpO1xuXG52YXIgX21pblZhbHVlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9taW5WYWx1ZVwiKSk7XG5cbnZhciBfbWF4VmFsdWUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21heFZhbHVlXCIpKTtcblxudmFyIF9pbnRlZ2VyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9pbnRlZ2VyXCIpKTtcblxudmFyIF9kZWNpbWFsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9kZWNpbWFsXCIpKTtcblxudmFyIGhlbHBlcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9jb21tb25cIikpO1xuXG5leHBvcnRzLmhlbHBlcnMgPSBoZWxwZXJzO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGVCYWJlbEludGVyb3AgPSBuZXcgV2Vha01hcCgpOyB2YXIgY2FjaGVOb2RlSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHJldHVybiAoX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKSB7IHJldHVybiBub2RlSW50ZXJvcCA/IGNhY2hlTm9kZUludGVyb3AgOiBjYWNoZUJhYmVsSW50ZXJvcDsgfSkobm9kZUludGVyb3ApOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaiwgbm9kZUludGVyb3ApIHsgaWYgKCFub2RlSW50ZXJvcCAmJiBvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKG5vZGVJbnRlcm9wKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoa2V5ICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2ludGVnZXInLCAvKF5bMC05XSokKXwoXi1bMC05XSskKS8pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgdHlwZTogJ2lwQWRkcmVzcydcbn0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAoISgwLCBfY29tbW9uLnJlcSkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBuaWJibGVzID0gdmFsdWUuc3BsaXQoJy4nKTtcbiAgcmV0dXJuIG5pYmJsZXMubGVuZ3RoID09PSA0ICYmIG5pYmJsZXMuZXZlcnkobmliYmxlVmFsaWQpO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG52YXIgbmliYmxlVmFsaWQgPSBmdW5jdGlvbiBuaWJibGVWYWxpZChuaWJibGUpIHtcbiAgaWYgKG5pYmJsZS5sZW5ndGggPiAzIHx8IG5pYmJsZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobmliYmxlWzBdID09PSAnMCcgJiYgbmliYmxlICE9PSAnMCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoIW5pYmJsZS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbnVtZXJpYyA9ICtuaWJibGUgfCAwO1xuICByZXR1cm4gbnVtZXJpYyA+PSAwICYmIG51bWVyaWMgPD0gMjU1O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICB2YXIgc2VwYXJhdG9yID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnOic7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21hY0FkZHJlc3MnXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHBhcnRzID0gdHlwZW9mIHNlcGFyYXRvciA9PT0gJ3N0cmluZycgJiYgc2VwYXJhdG9yICE9PSAnJyA/IHZhbHVlLnNwbGl0KHNlcGFyYXRvcikgOiB2YWx1ZS5sZW5ndGggPT09IDEyIHx8IHZhbHVlLmxlbmd0aCA9PT0gMTYgPyB2YWx1ZS5tYXRjaCgvLnsyfS9nKSA6IG51bGw7XG4gICAgcmV0dXJuIHBhcnRzICE9PSBudWxsICYmIChwYXJ0cy5sZW5ndGggPT09IDYgfHwgcGFydHMubGVuZ3RoID09PSA4KSAmJiBwYXJ0cy5ldmVyeShoZXhWYWxpZCk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbnZhciBoZXhWYWxpZCA9IGZ1bmN0aW9uIGhleFZhbGlkKGhleCkge1xuICByZXR1cm4gaGV4LnRvTG93ZXJDYXNlKCkubWF0Y2goL15bMC05YS1mXXsyfSQvKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChsZW5ndGgpIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbWF4TGVuZ3RoJyxcbiAgICBtYXg6IGxlbmd0aFxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICgwLCBfY29tbW9uLmxlbikodmFsdWUpIDw9IGxlbmd0aDtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KG1heCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtYXhWYWx1ZScsXG4gICAgbWF4OiBtYXhcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAoIS9cXHMvLnRlc3QodmFsdWUpIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgJiYgK3ZhbHVlIDw9ICttYXg7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChsZW5ndGgpIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbWluTGVuZ3RoJyxcbiAgICBtaW46IGxlbmd0aFxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICgwLCBfY29tbW9uLmxlbikodmFsdWUpID49IGxlbmd0aDtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KG1pbikge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtaW5WYWx1ZScsXG4gICAgbWluOiBtaW5cbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAoIS9cXHMvLnRlc3QodmFsdWUpIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgJiYgK3ZhbHVlID49ICttaW47XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdCh2YWxpZGF0b3IpIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbm90J1xuICB9LCBmdW5jdGlvbiAodmFsdWUsIHZtKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAhdmFsaWRhdG9yLmNhbGwodGhpcywgdmFsdWUsIHZtKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnbnVtZXJpYycsIC9eWzAtOV0qJC8pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsaWRhdG9ycyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWxpZGF0b3JzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnb3InXG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvcnMubGVuZ3RoID4gMCAmJiB2YWxpZGF0b3JzLnJlZHVjZShmdW5jdGlvbiAodmFsaWQsIGZuKSB7XG4gICAgICByZXR1cm4gdmFsaWQgfHwgZm4uYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgIH0sIGZhbHNlKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgdHlwZTogJ3JlcXVpcmVkJ1xufSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuICgwLCBfY29tbW9uLnJlcSkodmFsdWUudHJpbSgpKTtcbiAgfVxuXG4gIHJldHVybiAoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHByb3ApIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAncmVxdWlyZWRJZicsXG4gICAgcHJvcDogcHJvcFxuICB9LCBmdW5jdGlvbiAodmFsdWUsIHBhcmVudFZtKSB7XG4gICAgcmV0dXJuICgwLCBfY29tbW9uLnJlZikocHJvcCwgdGhpcywgcGFyZW50Vm0pID8gKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgOiB0cnVlO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQocHJvcCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdyZXF1aXJlZFVubGVzcycsXG4gICAgcHJvcDogcHJvcFxuICB9LCBmdW5jdGlvbiAodmFsdWUsIHBhcmVudFZtKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZWYpKHByb3AsIHRoaXMsIHBhcmVudFZtKSA/ICgwLCBfY29tbW9uLnJlcSkodmFsdWUpIDogdHJ1ZTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KGVxdWFsVG8pIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnc2FtZUFzJyxcbiAgICBlcTogZXF1YWxUb1xuICB9LCBmdW5jdGlvbiAodmFsdWUsIHBhcmVudFZtKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAoMCwgX2NvbW1vbi5yZWYpKGVxdWFsVG8sIHRoaXMsIHBhcmVudFZtKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciB1cmxSZWdleCA9IC9eKD86KD86KD86aHR0cHM/fGZ0cCk6KT9cXC9cXC8pKD86XFxTKyg/OjpcXFMqKT9AKT8oPzooPyEoPzoxMHwxMjcpKD86XFwuXFxkezEsM30pezN9KSg/ISg/OjE2OVxcLjI1NHwxOTJcXC4xNjgpKD86XFwuXFxkezEsM30pezJ9KSg/ITE3MlxcLig/OjFbNi05XXwyXFxkfDNbMC0xXSkoPzpcXC5cXGR7MSwzfSl7Mn0pKD86WzEtOV1cXGQ/fDFcXGRcXGR8MlswMV1cXGR8MjJbMC0zXSkoPzpcXC4oPzoxP1xcZHsxLDJ9fDJbMC00XVxcZHwyNVswLTVdKSl7Mn0oPzpcXC4oPzpbMS05XVxcZD98MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC00XSkpfCg/Oig/OlthLXowLTlcXHUwMGExLVxcdWZmZmZdW2EtejAtOVxcdTAwYTEtXFx1ZmZmZl8tXXswLDYyfSk/W2EtejAtOVxcdTAwYTEtXFx1ZmZmZl1cXC4pKyg/OlthLXpcXHUwMGExLVxcdWZmZmZdezIsfVxcLj8pKSg/OjpcXGR7Miw1fSk/KD86Wy8/I11cXFMqKT8kL2k7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgndXJsJywgdXJsUmVnZXgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciB3aXRoUGFyYW1zID0gcHJvY2Vzcy5lbnYuQlVJTEQgPT09ICd3ZWInID8gcmVxdWlyZSgnLi93aXRoUGFyYW1zQnJvd3NlcicpLndpdGhQYXJhbXMgOiByZXF1aXJlKCcuL3BhcmFtcycpLndpdGhQYXJhbXM7XG52YXIgX2RlZmF1bHQgPSB3aXRoUGFyYW1zO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLndpdGhQYXJhbXMgPSB2b2lkIDA7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIHJvb3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDoge307XG5cbnZhciBmYWtlV2l0aFBhcmFtcyA9IGZ1bmN0aW9uIGZha2VXaXRoUGFyYW1zKHBhcmFtc09yQ2xvc3VyZSwgbWF5YmVWYWxpZGF0b3IpIHtcbiAgaWYgKF90eXBlb2YocGFyYW1zT3JDbG9zdXJlKSA9PT0gJ29iamVjdCcgJiYgbWF5YmVWYWxpZGF0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBtYXliZVZhbGlkYXRvcjtcbiAgfVxuXG4gIHJldHVybiBwYXJhbXNPckNsb3N1cmUoZnVuY3Rpb24gKCkge30pO1xufTtcblxudmFyIHdpdGhQYXJhbXMgPSByb290LnZ1ZWxpZGF0ZSA/IHJvb3QudnVlbGlkYXRlLndpdGhQYXJhbXMgOiBmYWtlV2l0aFBhcmFtcztcbmV4cG9ydHMud2l0aFBhcmFtcyA9IHdpdGhQYXJhbXM7Il0sIm5hbWVzIjpbImRhdGEiLCJzZWFyY2giLCJkaWFsb2ciLCJsb2FkaW5nIiwiZGlhbG9nRGVsZXRlIiwiaGVhZGVycyIsInRleHQiLCJ2YWx1ZSIsInNvcnRhYmxlIiwicmVjb3JkcyIsInJlY29yZHNGaWx0ZXJlZCIsImVkaXRlZEluZGV4IiwiZWRpdGVkSXRlbSIsInVzZXJfbmFtZSIsImluc3RpdHV0aW9uX25hbWUiLCJheGlzX2Rlc2NyaXB0aW9uIiwiZGVmYXVsdEl0ZW0iLCJ0ZXh0QWxlcnQiLCJhbGVydEV2ZW50Iiwic2hvd0FsZXJ0IiwidXNlcnMiLCJpbnN0aXR1dGlvbnMiLCJyZWRpcmVjdFNlc3Npb25GaW5pc2hlZCIsImFjdHVhbFVzZXIiLCJ2YWxpZGF0aW9ucyIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiY29tcHV0ZWQiLCJmb3JtVGl0bGUiLCJ3YXRjaCIsInZhbCIsImNyZWF0ZWQiLCJtZXRob2RzIiwiaW5pdGlhbGl6ZSIsInJlcXVlc3RzIiwiYXhpc0N1c2NhQXBpIiwidXNlckFwaSIsInBhcmFtcyIsInNraXAiLCJ0YWtlIiwiaW5zdGl0dXRpb25BcGkiLCJQcm9taXNlIiwiZXJyb3IiLCJyZXNwb25zZXMiLCJlZGl0SXRlbSIsIml0ZW0iLCJkZWxldGVJdGVtIiwiZGVsZXRlSXRlbUNvbmZpcm0iLCJyZXMiLCJjbG9zZSIsImNsb3NlRGVsZXRlIiwic2F2ZSIsInB1dCIsInBvc3QiLCJzZWFyY2hWYWx1ZSIsInNlYXJjaENvbmNhdCIsInVwZGF0ZUFsZXJ0IiwidXBkYXRlVGltZU91dCIsImV2ZW50Iiwib3Blbk1vZGFsIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsImF0dHJzIiwicmVkaXJlY3QiLCJvbiIsIiRldmVudCIsIl92Iiwic3RhdGljQ2xhc3MiLCJzaG93Iiwicm9sZSIsImFsaWduIiwiY29scyIsIm1kIiwic20iLCJocmVmIiwicm91bmRlZCIsIl9lIiwiaXRlbXMiLCJzY29wZWRTbG90cyIsIl91Iiwia2V5IiwiZm4iLCJmbGF0IiwicGVyc2lzdGVudCIsImRpc2FibGVkIiwiY2xpY2siLCJ4cyIsImRlbnNlIiwibGFiZWwiLCJvdXRsaW5lZCIsInR5cGUiLCJrZXl1cCIsIm1vZGVsIiwiY2FsbGJhY2siLCIkJHYiLCJleHByZXNzaW9uIiwiaGVpZ2h0IiwiX3MiLCJ2YWxpZGF0aW9uIiwiJHYiLCJ2YWxpZGF0aW9uVGV4dFR5cGUiLCJ2YWxpZGF0aW9uc0lucHV0IiwibWluIiwibWF4Iiwicm93cyIsIiRtb2RlbCIsIiRzZXQiLCJ0cmltIiwicmVhZG9ubHkiLCJjb2xvciIsInByb3h5Iiwic21hbGwiLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwidmVyaWZ5U2Vzc2lvbkZpbmlzaGVkIiwic3RhdHVzIiwiY29kZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9