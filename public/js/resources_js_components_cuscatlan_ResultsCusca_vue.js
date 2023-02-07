(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_cuscatlan_ResultsCusca_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/ResultsCusca.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/ResultsCusca.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_userApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/userApi */ "./resources/js/apis/userApi.js");
/* harmony import */ var _apis_organizationalUnitApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/organizationalUnitApi */ "./resources/js/apis/organizationalUnitApi.js");
/* harmony import */ var _apis_indicatorApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apis/indicatorApi */ "./resources/js/apis/indicatorApi.js");
/* harmony import */ var _apis_resultsCuscaApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apis/resultsCuscaApi */ "./resources/js/apis/resultsCuscaApi.js");
/* harmony import */ var _apis_periodApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../apis/periodApi */ "./resources/js/apis/periodApi.js");
/* harmony import */ var _apis_yearApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../apis/yearApi */ "./resources/js/apis/yearApi.js");
/* harmony import */ var _apis_unitApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../apis/unitApi */ "./resources/js/apis/unitApi.js");
/* harmony import */ var _apis_strategyCuscaApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../apis/strategyCuscaApi */ "./resources/js/apis/strategyCuscaApi.js");
/* harmony import */ var _libs_function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../libs/function */ "./resources/js/libs/function.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      search: "",
      dialog: false,
      dialogDelete: false,
      loading: false,
      headers: [{
        text: "RESULTADO",
        value: "result_description"
      }, {
        text: "UD. DE MEDIDA",
        value: "unit_name"
      }, // { text: "METAS AL AÑO", value: "year_goal" },
      {
        text: "USUARIO",
        value: "user_name"
      }, {
        text: "INDICADOR",
        value: "indicator_name"
      }, {
        text: "UD. ORGANIZATIVA",
        value: "ou_name"
      }, {
        text: "AÑO",
        value: "year_name"
      }, {
        text: "PERIODO",
        value: "period_name"
      }, {
        text: "ESTRATEGIA",
        value: "description_strategy"
      }, {
        text: "ACCIONES",
        value: "actions",
        sortable: false
      }],
      records: [],
      recordsFiltered: [],
      editedIndex: -1,
      editedItem: {
        result_description: "",
        unit_name: "",
        // year_goal: "",
        user_name: "",
        indicator_name: "",
        ou_name: "",
        period_name: "",
        year_name: "",
        description_strategy: ""
      },
      defaultItem: {
        result_description: "",
        unit_name: "",
        // year_goal: "",
        user_name: "",
        indicator_name: "",
        ou_name: "",
        period_name: "",
        year_name: "",
        description_strategy: ""
      },
      textAlert: "",
      alertEvent: "success",
      showAlert: false,
      users: [],
      units: [],
      indicators: [],
      organizationalUnits: [],
      periods: [],
      years: [],
      strategys: [],
      redirectSessionFinished: false,
      actualUser: {}
    };
  },
  // Validations
  validations: {
    editedItem: {
      result_description: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__.minLength)(1),
        maxLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__.maxLength)(500)
      },
      // year_goal: {
      //   required,
      //   minLength: minLength(1),
      //   maxLength: maxLength(10),
      // },
      user_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__.required
      },
      description_strategy: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__.required
      },
      indicator_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__.required
      },
      ou_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__.required
      },
      unit_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__.required
      },
      period_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__.required
      },
      year_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__.required
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
                requests = [_apis_resultsCuscaApi__WEBPACK_IMPORTED_MODULE_3__["default"].get(), _apis_userApi__WEBPACK_IMPORTED_MODULE_0__["default"].get(null, {
                  params: {
                    skip: 0,
                    take: 200
                  }
                }), _apis_strategyCuscaApi__WEBPACK_IMPORTED_MODULE_7__["default"].get(), _apis_organizationalUnitApi__WEBPACK_IMPORTED_MODULE_1__["default"].get(), _apis_indicatorApi__WEBPACK_IMPORTED_MODULE_2__["default"].get(), _apis_periodApi__WEBPACK_IMPORTED_MODULE_4__["default"].get(), _apis_yearApi__WEBPACK_IMPORTED_MODULE_5__["default"].get(), _apis_userApi__WEBPACK_IMPORTED_MODULE_0__["default"].post("/actualUser"), _apis_unitApi__WEBPACK_IMPORTED_MODULE_6__["default"].get()];
                _context.next = 6;
                return Promise.all(requests)["catch"](function (error) {
                  _this.updateAlert(true, "No fue posible obtener los registros.", "fail");

                  _this.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_8__["default"].verifySessionFinished(error.response.status, 401);
                });

              case 6:
                responses = _context.sent;

                if (responses && responses[0].data.message == "success") {
                  _this.records = responses[0].data.resultsCusca;
                  _this.users = responses[1].data.users;
                  _this.strategys = responses[2].data.strategy_cusca;
                  _this.organizationalUnits = responses[3].data.organizationalUnits;
                  _this.indicators = responses[4].data.indicators;
                  _this.periods = responses[5].data.periods;
                  _this.years = responses[6].data.years;
                  _this.actualUser = responses[7].data.user;
                  _this.units = responses[8].data.units;
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
      this.$v.editedItem.user_name.$model = this.editedItem.user_name;
      this.$v.editedItem.indicator_name.$model = this.editedItem.indicator_name;
      this.$v.editedItem.ou_name.$model = this.editedItem.ou_name;
      this.$v.editedItem.period_name.$model = this.editedItem.period_name;
      this.$v.editedItem.year_name.$model = this.editedItem.year_name;
      this.$v.editedItem.unit_name.$model = this.editedItem.unit_name;
      this.$v.editedItem.description_strategy.$model = this.editedItem.description_strategy;
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
                return _apis_resultsCuscaApi__WEBPACK_IMPORTED_MODULE_3__["default"]["delete"]("/".concat(_this2.editedItem.id))["catch"](function (error) {
                  _this2.updateAlert(true, "No fue posible eliminar el registros.", "fail");

                  _this2.close();
                });

              case 2:
                res = _context2.sent;

                if (res.data.message == "success") {
                  _this2.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_8__["default"].verifySessionFinished(res.status, 200);

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
                return _apis_resultsCuscaApi__WEBPACK_IMPORTED_MODULE_3__["default"].put("/".concat(_this5.editedItem.id), _this5.editedItem)["catch"](function (error) {
                  _this5.updateAlert(true, "No fue posible crear el registro.", "fail");

                  _this5.close();

                  _this5.redirectSessionFinished = _libs_function__WEBPACK_IMPORTED_MODULE_8__["default"].verifySessionFinished(error.response.status, 419);
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
                return _apis_resultsCuscaApi__WEBPACK_IMPORTED_MODULE_3__["default"].post(null, _this5.editedItem)["catch"](function (error) {
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

          for (var i = 0; i < record.result_description.length; i++) {
            searchConcat += record.result_description[i].toUpperCase();

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
      this.editedItem.result_description = "";
      this.editedItem.unit_name = this.units[0].unit_name; // this.editedItem.year_goal = 0;

      this.editedItem.indicator_name = this.indicators[0].indicator_name;
      this.editedItem.user_name = this.actualUser.user_name;
      this.editedItem.ou_name = this.organizationalUnits[0].ou_name;
      this.editedItem.year_name = new Date().getFullYear();
      this.editedItem.period_name = this.periods[0].period_name;
      this.editedItem.description_strategy = this.strategys[0].description_strategy;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/ResultsCusca.vue?vue&type=template&id=6e99a6df&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/ResultsCusca.vue?vue&type=template&id=6e99a6df& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
      href: "/strategyCusca",
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
      href: "/actionsCuscatlan",
      rounded: ""
    }
  }, [_vm._v("\n          Siguiente\n        ")])], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c("v-data-table", {
    staticClass: "elevation-3 shadow p-3 mt-3",
    attrs: {
      headers: _vm.headers,
      items: _vm.recordsFiltered,
      loading: _vm.loading,
      "sort-by": "result_description"
    },
    scopedSlots: _vm._u([{
      key: "top",
      fn: function fn() {
        return [_c("v-toolbar", {
          attrs: {
            flat: ""
          }
        }, [_c("v-toolbar-title", [_vm._v("Resultados")]), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("v-dialog", {
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
                  disabled: _vm.loading != false,
                  rounded: ""
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
            label: "Resultado",
            validation: _vm.$v.editedItem.result_description,
            validationTextType: "none",
            min: 1,
            max: 500,
            rows: 6
          },
          model: {
            value: _vm.$v.editedItem.result_description.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.result_description, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
            },
            expression: "$v.editedItem.result_description.$model"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("base-select-search", {
          attrs: {
            label: "Indicador",
            items: _vm.indicators,
            item: "indicator_name",
            validation: _vm.$v.editedItem.indicator_name
          },
          model: {
            value: _vm.$v.editedItem.indicator_name.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.indicator_name, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
            },
            expression: "$v.editedItem.indicator_name.$model"
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
        }, [_c("base-select", {
          attrs: {
            label: "Usuario",
            items: _vm.users,
            item: "user_name",
            validation: _vm.$v.editedItem.user_name,
            readonly: true
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
        }, [_c("base-select-search", {
          attrs: {
            label: "Unidad organizativa",
            items: _vm.organizationalUnits,
            item: "ou_name",
            validation: _vm.$v.editedItem.ou_name
          },
          model: {
            value: _vm.$v.editedItem.ou_name.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.ou_name, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
            },
            expression: "$v.editedItem.ou_name.$model"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "6",
            md: "6"
          }
        }, [_c("base-select", {
          attrs: {
            label: "Año",
            items: _vm.years,
            item: "year_name",
            validation: _vm.$v.editedItem.year_name
          },
          model: {
            value: _vm.$v.editedItem.year_name.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.year_name, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
            },
            expression: "$v.editedItem.year_name.$model"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "6",
            md: "6"
          }
        }, [_c("base-select-search", {
          attrs: {
            label: "Periodo",
            items: _vm.periods,
            item: "period_name",
            validation: _vm.$v.editedItem.period_name
          },
          model: {
            value: _vm.$v.editedItem.period_name.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.period_name, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
            },
            expression: "$v.editedItem.period_name.$model"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "12",
            md: "12"
          }
        }, [_c("base-select-search", {
          attrs: {
            label: "Estrategía",
            items: _vm.strategys,
            item: "description_strategy",
            validation: _vm.$v.editedItem.description_strategy
          },
          model: {
            value: _vm.$v.editedItem.description_strategy.$model,
            callback: function callback($$v) {
              _vm.$set(_vm.$v.editedItem.description_strategy, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
            },
            expression: "$v.editedItem.description_strategy.$model"
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

/***/ "./resources/js/apis/indicatorApi.js":
/*!*******************************************!*\
  !*** ./resources/js/apis/indicatorApi.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var indicatorApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api/indicator"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (indicatorApi);

/***/ }),

/***/ "./resources/js/apis/organizationalUnitApi.js":
/*!****************************************************!*\
  !*** ./resources/js/apis/organizationalUnitApi.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var organizationalUnitApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api/organizationalUnit"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (organizationalUnitApi);

/***/ }),

/***/ "./resources/js/apis/periodApi.js":
/*!****************************************!*\
  !*** ./resources/js/apis/periodApi.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var periodApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api/period"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (periodApi);

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

/***/ "./resources/js/apis/strategyCuscaApi.js":
/*!***********************************************!*\
  !*** ./resources/js/apis/strategyCuscaApi.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var strategyCuscaApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api/strategyCusca"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (strategyCuscaApi);

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

/***/ "./resources/js/apis/yearApi.js":
/*!**************************************!*\
  !*** ./resources/js/apis/yearApi.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var yearApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "/api/year"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (yearApi);

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

/***/ "./resources/js/components/cuscatlan/ResultsCusca.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/cuscatlan/ResultsCusca.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResultsCusca_vue_vue_type_template_id_6e99a6df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResultsCusca.vue?vue&type=template&id=6e99a6df& */ "./resources/js/components/cuscatlan/ResultsCusca.vue?vue&type=template&id=6e99a6df&");
/* harmony import */ var _ResultsCusca_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResultsCusca.vue?vue&type=script&lang=js& */ "./resources/js/components/cuscatlan/ResultsCusca.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResultsCusca_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResultsCusca_vue_vue_type_template_id_6e99a6df___WEBPACK_IMPORTED_MODULE_0__.render,
  _ResultsCusca_vue_vue_type_template_id_6e99a6df___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cuscatlan/ResultsCusca.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/cuscatlan/ResultsCusca.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/cuscatlan/ResultsCusca.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsCusca_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResultsCusca.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/ResultsCusca.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsCusca_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cuscatlan/ResultsCusca.vue?vue&type=template&id=6e99a6df&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/cuscatlan/ResultsCusca.vue?vue&type=template&id=6e99a6df& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsCusca_vue_vue_type_template_id_6e99a6df___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsCusca_vue_vue_type_template_id_6e99a6df___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsCusca_vue_vue_type_template_id_6e99a6df___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResultsCusca.vue?vue&type=template&id=6e99a6df& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/ResultsCusca.vue?vue&type=template&id=6e99a6df&");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfY3VzY2F0bGFuX1Jlc3VsdHNDdXNjYV92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0F1UUE7Ozs7OztBQUF5QztBQUM0QjtBQUNsQjtBQUNNO0FBQ1o7QUFDSjtBQUNBO0FBQ2tCO0FBQ3JCO0FBQ29DO0FBRTFFLGlFQUFlO0VBQ2ZBO0lBQUE7TUFDQUMsVUFEQTtNQUVBQyxhQUZBO01BR0FDLG1CQUhBO01BSUFDLGNBSkE7TUFLQUMsVUFDQTtRQUFBQztRQUFBQztNQUFBLENBREEsRUFFQTtRQUFBRDtRQUFBQztNQUFBLENBRkEsRUFHQTtNQUNBO1FBQUFEO1FBQUFDO01BQUEsQ0FKQSxFQUtBO1FBQUFEO1FBQUFDO01BQUEsQ0FMQSxFQU1BO1FBQUFEO1FBQUFDO01BQUEsQ0FOQSxFQU9BO1FBQUFEO1FBQUFDO01BQUEsQ0FQQSxFQVFBO1FBQUFEO1FBQUFDO01BQUEsQ0FSQSxFQVNBO1FBQUFEO1FBQUFDO01BQUEsQ0FUQSxFQVVBO1FBQUFEO1FBQUFDO1FBQUFDO01BQUEsQ0FWQSxDQUxBO01BaUJBQyxXQWpCQTtNQWtCQUMsbUJBbEJBO01BbUJBQyxlQW5CQTtNQW9CQUM7UUFDQUMsc0JBREE7UUFFQUMsYUFGQTtRQUdBO1FBQ0FDLGFBSkE7UUFLQUMsa0JBTEE7UUFNQUMsV0FOQTtRQU9BQyxlQVBBO1FBUUFDLGFBUkE7UUFTQUM7TUFUQSxDQXBCQTtNQStCQUM7UUFDQVIsc0JBREE7UUFFQUMsYUFGQTtRQUdBO1FBQ0FDLGFBSkE7UUFLQUMsa0JBTEE7UUFNQUMsV0FOQTtRQU9BQyxlQVBBO1FBUUFDLGFBUkE7UUFTQUM7TUFUQSxDQS9CQTtNQTJDQUUsYUEzQ0E7TUE0Q0FDLHFCQTVDQTtNQTZDQUMsZ0JBN0NBO01BOENBQyxTQTlDQTtNQStDQUMsU0EvQ0E7TUFnREFDLGNBaERBO01BaURBQyx1QkFqREE7TUFrREFDLFdBbERBO01BbURBQyxTQW5EQTtNQW9EQUMs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LG1FQUFVOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNsQkY7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7O0FBRWYsY0FBYyxtQkFBTyxDQUFDLG1FQUFVOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNsQkY7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7O0FBRWYsY0FBYyxtQkFBTyxDQUFDLG1FQUFVOztBQUVoQyx1RkFBdUYsSUFBSSxFQUFFLEVBQUUsaUNBQWlDLElBQUksRUFBRSxFQUFFLHNDQUFzQyxJQUFJLEVBQUUsRUFBRSxnREFBZ0QsSUFBSSxvQkFBb0IsRUFBRSw2RkFBNkYsS0FBSyxpREFBaUQsR0FBRyxZQUFZLElBQUk7O0FBRXRhOztBQUVBLGtCQUFlOzs7Ozs7Ozs7Ozs7QUNiRjs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmLGlCQUFpQixPQUFPLHVCQUF1QixnSEFBeUMsR0FBRywwRkFBOEI7QUFDekg7QUFDQSxrQkFBZTs7Ozs7Ozs7Ozs7QUNSRjs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBa0I7O0FBRWxCLHdCQUF3QiwyQkFBMkIsMkVBQTJFLGtDQUFrQyx3QkFBd0IsT0FBTyxrQ0FBa0MsbUlBQW1JOztBQUVwVywyREFBMkQscUJBQU0sbUJBQW1CLHFCQUFNOztBQUUxRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUM7QUFDdkM7O0FBRUE7QUFDQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY3VzY2F0bGFuL1Jlc3VsdHNDdXNjYS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY3VzY2F0bGFuL1Jlc3VsdHNDdXNjYS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwaXMvaW5kaWNhdG9yQXBpLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcGlzL29yZ2FuaXphdGlvbmFsVW5pdEFwaS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBpcy9wZXJpb2RBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwaXMvcmVzdWx0c0N1c2NhQXBpLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcGlzL3N0cmF0ZWd5Q3VzY2FBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwaXMvdW5pdEFwaS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBpcy91c2VyQXBpLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcGlzL3llYXJBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2xpYnMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jdXNjYXRsYW4vUmVzdWx0c0N1c2NhLnZ1ZT80YWE1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2N1c2NhdGxhbi9SZXN1bHRzQ3VzY2EudnVlPzU1MTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY3VzY2F0bGFuL1Jlc3VsdHNDdXNjYS52dWU/OTE2YyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2FscGhhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvYWxwaGFOdW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9hbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9iZXR3ZWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvZGVjaW1hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2VtYWlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvaXBBZGRyZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWFjQWRkcmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21heExlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21heFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWluVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9ub3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9udW1lcmljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3JlcXVpcmVkSWYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9yZXF1aXJlZFVubGVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3NhbWVBcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi93aXRoUGFyYW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3dpdGhQYXJhbXNCcm93c2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBkYXRhLWFwcD5cbiAgICA8YWxlcnQtdGltZS1vdXRcbiAgICAgIDpyZWRpcmVjdD1cInJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkXCJcbiAgICAgIEByZWRpcmVjdD1cInVwZGF0ZVRpbWVPdXQoJGV2ZW50KVwiXG4gICAgLz5cbiAgICA8YWxlcnRcbiAgICAgIDp0ZXh0PVwidGV4dEFsZXJ0XCJcbiAgICAgIDpldmVudD1cImFsZXJ0RXZlbnRcIlxuICAgICAgOnNob3c9XCJzaG93QWxlcnRcIlxuICAgICAgQHNob3ctYWxlcnQ9XCJ1cGRhdGVBbGVydCgkZXZlbnQpXCJcbiAgICAgIGNsYXNzPVwibWItMlwiXG4gICAgLz5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgdi1pZj1cImFjdHVhbFVzZXIucm9sZSA9PSAnQWRtaW5pc3RyYWRvcidcIj5cbiAgICAgIDx2LXJvdz5cbiAgICAgICAgPHYtY29sIGFsaWduPVwic3RhcnRcIiBjb2xzPVwiMTJcIiBtZD1cIjZcIiBzbT1cIjEyXCI+XG4gICAgICAgICAgPHYtYnRuIGhyZWY9XCIvc3RyYXRlZ3lDdXNjYVwiIGNsYXNzPVwiYnRuLW5vcm1hbC1jbG9zZVwiIHJvdW5kZWQ+XG4gICAgICAgICAgICBWb2x2ZXJcbiAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8L3YtY29sPlxuICAgICAgICA8di1jb2wgYWxpZ249XCJlbmRcIiBjb2xzPVwiMTJcIiBtZD1cIjZcIiBzbT1cIjEyXCI+XG4gICAgICAgICAgPHYtYnRuIGhyZWY9XCIvYWN0aW9uc0N1c2NhdGxhblwiIGNsYXNzPVwiYnRuLW5vcm1hbFwiIHJvdW5kZWQ+XG4gICAgICAgICAgICBTaWd1aWVudGVcbiAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8L3YtY29sPlxuICAgICAgPC92LXJvdz5cbiAgICA8L2Rpdj5cbiAgICA8di1kYXRhLXRhYmxlXG4gICAgICA6aGVhZGVycz1cImhlYWRlcnNcIlxuICAgICAgOml0ZW1zPVwicmVjb3Jkc0ZpbHRlcmVkXCJcbiAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICBzb3J0LWJ5PVwicmVzdWx0X2Rlc2NyaXB0aW9uXCJcbiAgICAgIGNsYXNzPVwiZWxldmF0aW9uLTMgc2hhZG93IHAtMyBtdC0zXCJcbiAgICA+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90OnRvcD5cbiAgICAgICAgPHYtdG9vbGJhciBmbGF0PlxuICAgICAgICAgIDx2LXRvb2xiYXItdGl0bGU+UmVzdWx0YWRvczwvdi10b29sYmFyLXRpdGxlPlxuICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9nXCIgbWF4LXdpZHRoPVwiNzAwcHhcIiBwZXJzaXN0ZW50PlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XCJ7fVwiPlxuICAgICAgICAgICAgICA8di1yb3c+XG4gICAgICAgICAgICAgICAgPHYtY29sIGFsaWduPVwiZW5kXCI+XG4gICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yIGJ0bi1ub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJsb2FkaW5nICE9IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib3Blbk1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBBZ3JlZ2FyXG4gICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgICAgPHYtY29sXG4gICAgICAgICAgICAgICAgICB4cz1cIjZcIlxuICAgICAgICAgICAgICAgICAgc209XCI2XCJcbiAgICAgICAgICAgICAgICAgIG1kPVwiNlwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImQtbm9uZSBkLW1kLWJsb2NrIGQtbGctYmxvY2tcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCdXNjYXJcIlxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIEBrZXl1cD1cInNlYXJjaFZhbHVlKClcIlxuICAgICAgICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgIDwvdi1yb3c+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHYtY2FyZCBjbGFzcz1cImZsZXhjYXJkXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICAgICAgICAgICAgICA8di1jYXJkLXRpdGxlPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm14LWF1dG8gcHQtMyBtYi0zIHRleHQtY2VudGVyIGJsYWNrLXNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAge3sgZm9ybVRpdGxlIH19XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPC92LWNhcmQtdGl0bGU+XG5cbiAgICAgICAgICAgICAgPHYtY2FyZC10ZXh0PlxuICAgICAgICAgICAgICAgIDx2LWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwhLS0gRm9ybSAtLT5cbiAgICAgICAgICAgICAgICAgIDwhLS0gVXNlciAtLT5cbiAgICAgICAgICAgICAgICAgIDx2LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBSZXN1bHQgLS0+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiBzbT1cIjEyXCIgbWQ9XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiYXNlLXRleHQtYXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZXN1bHRhZG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiJHYuZWRpdGVkSXRlbS5yZXN1bHRfZGVzY3JpcHRpb24uJG1vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS5yZXN1bHRfZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblRleHRUeXBlPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bWluPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bWF4PVwiNTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpyb3dzPVwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBSZXN1bHQgLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBZZWFyIEdvYWwgLS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiNlwiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiYXNlLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk7Dum1lcm8gZGUgbWV0YXMgYWwgYcOxb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCIkdi5lZGl0ZWRJdGVtLnllYXJfZ29hbC4kbW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLnllYXJfZ29hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1hc2s9XCInIyMjIydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gWWVhciBHb2FsIC0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gSW5kaWNhdG9yIC0tPlxuICAgICAgICAgICAgICAgICAgICA8di1jb2wgY29scz1cIjEyXCIgc209XCIxMlwiIG1kPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YmFzZS1zZWxlY3Qtc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkluZGljYWRvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCIkdi5lZGl0ZWRJdGVtLmluZGljYXRvcl9uYW1lLiRtb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aXRlbXM9XCJpbmRpY2F0b3JzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09XCJpbmRpY2F0b3JfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0uaW5kaWNhdG9yX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gSW5kaWNhdG9yIC0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gVW5pdCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiNlwiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiYXNlLXNlbGVjdC1zZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVW5pZGFkIGRlIG1lZGlkYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCIkdi5lZGl0ZWRJdGVtLnVuaXRfbmFtZS4kbW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwidW5pdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT1cInVuaXRfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0udW5pdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIFVuaXQgLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBVc2VycyAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiNlwiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiYXNlLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVc3VhcmlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cIiR2LmVkaXRlZEl0ZW0udXNlcl9uYW1lLiRtb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aXRlbXM9XCJ1c2Vyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtPVwidXNlcl9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYuZWRpdGVkSXRlbS51c2VyX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBVc2VycyAtLT5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIE9yZ2FuaXphdGlvbmFsIFVuaXQgLS0+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiBzbT1cIjEyXCIgbWQ9XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiYXNlLXNlbGVjdC1zZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVW5pZGFkIG9yZ2FuaXphdGl2YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCIkdi5lZGl0ZWRJdGVtLm91X25hbWUuJG1vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtcz1cIm9yZ2FuaXphdGlvbmFsVW5pdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbT1cIm91X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLm91X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gT3JnYW5pemF0aW9uYWwgVW5pdCAtLT5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIFllYXJzIC0tPlxuICAgICAgICAgICAgICAgICAgICA8di1jb2wgY29scz1cIjEyXCIgc209XCI2XCIgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJhc2Utc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkHDsW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiJHYuZWRpdGVkSXRlbS55ZWFyX25hbWUuJG1vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDppdGVtcz1cInllYXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09XCJ5ZWFyX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5lZGl0ZWRJdGVtLnllYXJfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBZZWFycyAtLT5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIFBlcmlvZCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiNlwiIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiYXNlLXNlbGVjdC1zZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGVyaW9kb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsLnRyaW09XCIkdi5lZGl0ZWRJdGVtLnBlcmlvZF9uYW1lLiRtb2RlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aXRlbXM9XCJwZXJpb2RzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09XCJwZXJpb2RfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0ucGVyaW9kX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gUGVyaW9kIC0tPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gU3RyYXRlZ3kgLS0+XG4gICAgICAgICAgICAgICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiBzbT1cIjEyXCIgbWQ9XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiYXNlLXNlbGVjdC1zZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRXN0cmF0ZWfDrWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbC50cmltPVwiJHYuZWRpdGVkSXRlbS5kZXNjcmlwdGlvbl9zdHJhdGVneS4kbW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOml0ZW1zPVwic3RyYXRlZ3lzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW09XCJkZXNjcmlwdGlvbl9zdHJhdGVneVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LmVkaXRlZEl0ZW0uZGVzY3JpcHRpb25fc3RyYXRlZ3lcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gU3RyYXRlZ3kgLS0+XG4gICAgICAgICAgICAgICAgICA8L3Ytcm93PlxuICAgICAgICAgICAgICAgICAgPCEtLSBGb3JtIC0tPlxuICAgICAgICAgICAgICAgICAgPHYtcm93PlxuICAgICAgICAgICAgICAgICAgICA8di1jb2wgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYnRuLW5vcm1hbCBuby11cHBlcmNhc2UgbXQtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzYXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBHdWFyZGFyXG4gICAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cblxuICAgICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJidG4tbm9ybWFsLWNsb3NlIG5vLXVwcGVyY2FzZSBtdC0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxhclxuICAgICAgICAgICAgICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgICAgICA8L3Ytcm93PlxuICAgICAgICAgICAgICAgIDwvdi1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvdi1jYXJkLXRleHQ+XG4gICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICA8L3YtZGlhbG9nPlxuICAgICAgICAgIDx2LWRpYWxvZyB2LW1vZGVsPVwiZGlhbG9nRGVsZXRlXCIgbWF4LXdpZHRoPVwiNDAwcHhcIj5cbiAgICAgICAgICAgIDx2LWNhcmQgY2xhc3M9XCJoLTEwMFwiPlxuICAgICAgICAgICAgICA8di1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiYmxhY2stc2Vjb25kYXJ5IHRleHQtY2VudGVyIG10LTMgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgRWxpbWluYXIgcmVnaXN0cm9cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDx2LXJvdz5cbiAgICAgICAgICAgICAgICAgIDx2LWNvbCBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8di1idG5cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlIG10LTMgbWItMyBwci01IHBsLTUgbXgtYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRlbGV0ZUl0ZW1Db25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICA+Q29uZmlybWFyPC92LWJ0blxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx2LWJ0blxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiYnRuLW5vcm1hbC1jbG9zZSBuby11cHBlcmNhc2UgbXQtMyBtYi0zXCJcbiAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2xvc2VEZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsYXJcbiAgICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgICAgICAgPC92LXJvdz5cbiAgICAgICAgICAgICAgPC92LWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvdi1jYXJkPlxuICAgICAgICAgIDwvdi1kaWFsb2c+XG4gICAgICAgIDwvdi10b29sYmFyPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6W2BpdGVtLmFjdGlvbnNgXT1cInsgaXRlbSB9XCI+XG4gICAgICAgIDx2LWljb24gc21hbGwgY2xhc3M9XCJtci0yXCIgQGNsaWNrPVwiZWRpdEl0ZW0oaXRlbSlcIj4gbWRpLXBlbmNpbCA8L3YtaWNvbj5cbiAgICAgICAgPHYtaWNvbiBzbWFsbCBAY2xpY2s9XCJkZWxldGVJdGVtKGl0ZW0pXCI+IG1kaS1kZWxldGUgPC92LWljb24+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDpuby1kYXRhPlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tbm9ybWFsLXNlY29uZGFyeSBuby1kZWNvcmF0aW9uXCJcbiAgICAgICAgICBAY2xpY2s9XCJpbml0aWFsaXplXCJcbiAgICAgICAgPlxuICAgICAgICAgIFJlaW5pY2lhclxuICAgICAgICA8L2E+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvdi1kYXRhLXRhYmxlPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgdXNlckFwaSBmcm9tIFwiLi4vLi4vYXBpcy91c2VyQXBpXCI7XG5pbXBvcnQgb3JnYW5pemF0aW9uYWxVbml0QXBpIGZyb20gXCIuLi8uLi9hcGlzL29yZ2FuaXphdGlvbmFsVW5pdEFwaVwiO1xuaW1wb3J0IGluZGljYXRvckFwaSBmcm9tIFwiLi4vLi4vYXBpcy9pbmRpY2F0b3JBcGlcIjtcbmltcG9ydCByZXN1bHRzQ3VzY2FBcGkgZnJvbSBcIi4uLy4uL2FwaXMvcmVzdWx0c0N1c2NhQXBpXCI7XG5pbXBvcnQgcGVyaW9kQXBpIGZyb20gXCIuLi8uLi9hcGlzL3BlcmlvZEFwaVwiO1xuaW1wb3J0IHllYXJBcGkgZnJvbSBcIi4uLy4uL2FwaXMveWVhckFwaVwiO1xuaW1wb3J0IHVuaXRBcGkgZnJvbSBcIi4uLy4uL2FwaXMvdW5pdEFwaVwiO1xuaW1wb3J0IHN0cmF0ZWd5Q3VzY2FBcGkgZnJvbSBcIi4uLy4uL2FwaXMvc3RyYXRlZ3lDdXNjYUFwaVwiO1xuaW1wb3J0IGxpYiBmcm9tIFwiLi4vLi4vbGlicy9mdW5jdGlvblwiO1xuaW1wb3J0IHsgcmVxdWlyZWQsIG1pbkxlbmd0aCwgbWF4TGVuZ3RoIH0gZnJvbSBcInZ1ZWxpZGF0ZS9saWIvdmFsaWRhdG9yc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGE6ICgpID0+ICh7XG4gICAgc2VhcmNoOiBcIlwiLFxuICAgIGRpYWxvZzogZmFsc2UsXG4gICAgZGlhbG9nRGVsZXRlOiBmYWxzZSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBoZWFkZXJzOiBbXG4gICAgICB7IHRleHQ6IFwiUkVTVUxUQURPXCIsIHZhbHVlOiBcInJlc3VsdF9kZXNjcmlwdGlvblwiIH0sXG4gICAgICB7IHRleHQ6IFwiVUQuIERFIE1FRElEQVwiLCB2YWx1ZTogXCJ1bml0X25hbWVcIiB9LFxuICAgICAgLy8geyB0ZXh0OiBcIk1FVEFTIEFMIEHDkU9cIiwgdmFsdWU6IFwieWVhcl9nb2FsXCIgfSxcbiAgICAgIHsgdGV4dDogXCJVU1VBUklPXCIsIHZhbHVlOiBcInVzZXJfbmFtZVwiIH0sXG4gICAgICB7IHRleHQ6IFwiSU5ESUNBRE9SXCIsIHZhbHVlOiBcImluZGljYXRvcl9uYW1lXCIgfSxcbiAgICAgIHsgdGV4dDogXCJVRC4gT1JHQU5JWkFUSVZBXCIsIHZhbHVlOiBcIm91X25hbWVcIiB9LFxuICAgICAgeyB0ZXh0OiBcIkHDkU9cIiwgdmFsdWU6IFwieWVhcl9uYW1lXCIgfSxcbiAgICAgIHsgdGV4dDogXCJQRVJJT0RPXCIsIHZhbHVlOiBcInBlcmlvZF9uYW1lXCIgfSxcbiAgICAgIHsgdGV4dDogXCJFU1RSQVRFR0lBXCIsIHZhbHVlOiBcImRlc2NyaXB0aW9uX3N0cmF0ZWd5XCIgfSxcbiAgICAgIHsgdGV4dDogXCJBQ0NJT05FU1wiLCB2YWx1ZTogXCJhY3Rpb25zXCIsIHNvcnRhYmxlOiBmYWxzZSB9LFxuICAgIF0sXG4gICAgcmVjb3JkczogW10sXG4gICAgcmVjb3Jkc0ZpbHRlcmVkOiBbXSxcbiAgICBlZGl0ZWRJbmRleDogLTEsXG4gICAgZWRpdGVkSXRlbToge1xuICAgICAgcmVzdWx0X2Rlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgdW5pdF9uYW1lOiBcIlwiLFxuICAgICAgLy8geWVhcl9nb2FsOiBcIlwiLFxuICAgICAgdXNlcl9uYW1lOiBcIlwiLFxuICAgICAgaW5kaWNhdG9yX25hbWU6IFwiXCIsXG4gICAgICBvdV9uYW1lOiBcIlwiLFxuICAgICAgcGVyaW9kX25hbWU6IFwiXCIsXG4gICAgICB5ZWFyX25hbWU6IFwiXCIsXG4gICAgICBkZXNjcmlwdGlvbl9zdHJhdGVneTogXCJcIixcbiAgICB9LFxuICAgIGRlZmF1bHRJdGVtOiB7XG4gICAgICByZXN1bHRfZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICB1bml0X25hbWU6IFwiXCIsXG4gICAgICAvLyB5ZWFyX2dvYWw6IFwiXCIsXG4gICAgICB1c2VyX25hbWU6IFwiXCIsXG4gICAgICBpbmRpY2F0b3JfbmFtZTogXCJcIixcbiAgICAgIG91X25hbWU6IFwiXCIsXG4gICAgICBwZXJpb2RfbmFtZTogXCJcIixcbiAgICAgIHllYXJfbmFtZTogXCJcIixcbiAgICAgIGRlc2NyaXB0aW9uX3N0cmF0ZWd5OiBcIlwiLFxuICAgIH0sXG5cbiAgICB0ZXh0QWxlcnQ6IFwiXCIsXG4gICAgYWxlcnRFdmVudDogXCJzdWNjZXNzXCIsXG4gICAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgICB1c2VyczogW10sXG4gICAgdW5pdHM6IFtdLFxuICAgIGluZGljYXRvcnM6IFtdLFxuICAgIG9yZ2FuaXphdGlvbmFsVW5pdHM6IFtdLFxuICAgIHBlcmlvZHM6IFtdLFxuICAgIHllYXJzOiBbXSxcbiAgICBzdHJhdGVneXM6IFtdLFxuICAgIHJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkOiBmYWxzZSxcbiAgICBhY3R1YWxVc2VyOiB7fSxcbiAgfSksXG5cbiAgLy8gVmFsaWRhdGlvbnNcbiAgdmFsaWRhdGlvbnM6IHtcbiAgICBlZGl0ZWRJdGVtOiB7XG4gICAgICByZXN1bHRfZGVzY3JpcHRpb246IHtcbiAgICAgICAgcmVxdWlyZWQsXG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aCg1MDApLFxuICAgICAgfSxcbiAgICAgIC8vIHllYXJfZ29hbDoge1xuICAgICAgLy8gICByZXF1aXJlZCxcbiAgICAgIC8vICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgoMSksXG4gICAgICAvLyAgIG1heExlbmd0aDogbWF4TGVuZ3RoKDEwKSxcbiAgICAgIC8vIH0sXG4gICAgICB1c2VyX25hbWU6IHtcbiAgICAgICAgcmVxdWlyZWQsXG4gICAgICB9LFxuICAgICAgZGVzY3JpcHRpb25fc3RyYXRlZ3k6IHtcbiAgICAgICAgcmVxdWlyZWQsXG4gICAgICB9LFxuICAgICAgaW5kaWNhdG9yX25hbWU6IHtcbiAgICAgICAgcmVxdWlyZWQsXG4gICAgICB9LFxuICAgICAgb3VfbmFtZToge1xuICAgICAgICByZXF1aXJlZCxcbiAgICAgIH0sXG4gICAgICB1bml0X25hbWU6IHtcbiAgICAgICAgcmVxdWlyZWQsXG4gICAgICB9LFxuICAgICAgcGVyaW9kX25hbWU6IHtcbiAgICAgICAgcmVxdWlyZWQsXG4gICAgICB9LFxuICAgICAgeWVhcl9uYW1lOiB7XG4gICAgICAgIHJlcXVpcmVkLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICAvLyBWYWxpZGF0aW9uc1xuICBjb21wdXRlZDoge1xuICAgIGZvcm1UaXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVkaXRlZEluZGV4ID09PSAtMSA/IFwiTnVldm8gcmVnaXN0cm9cIiA6IFwiRWRpdGFyIHJlZ2lzdHJvXCI7XG4gICAgfSxcbiAgfSxcblxuICB3YXRjaDoge1xuICAgIGRpYWxvZyh2YWwpIHtcbiAgICAgIHZhbCB8fCB0aGlzLmNsb3NlKCk7XG4gICAgfSxcbiAgICBkaWFsb2dEZWxldGUodmFsKSB7XG4gICAgICB2YWwgfHwgdGhpcy5jbG9zZURlbGV0ZSgpO1xuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgaW5pdGlhbGl6ZSgpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnJlY29yZHMgPSBbXTtcbiAgICAgIHRoaXMucmVjb3Jkc0ZpbHRlcmVkID0gW107XG5cbiAgICAgIGxldCByZXF1ZXN0cyA9IFtcbiAgICAgICAgcmVzdWx0c0N1c2NhQXBpLmdldCgpLFxuICAgICAgICB1c2VyQXBpLmdldChudWxsLCB7XG4gICAgICAgICAgcGFyYW1zOiB7IHNraXA6IDAsIHRha2U6IDIwMCB9LFxuICAgICAgICB9KSxcbiAgICAgICAgc3RyYXRlZ3lDdXNjYUFwaS5nZXQoKSxcbiAgICAgICAgb3JnYW5pemF0aW9uYWxVbml0QXBpLmdldCgpLFxuICAgICAgICBpbmRpY2F0b3JBcGkuZ2V0KCksXG4gICAgICAgIHBlcmlvZEFwaS5nZXQoKSxcbiAgICAgICAgeWVhckFwaS5nZXQoKSxcbiAgICAgICAgdXNlckFwaS5wb3N0KFwiL2FjdHVhbFVzZXJcIiksXG4gICAgICAgIHVuaXRBcGkuZ2V0KCksXG4gICAgICBdO1xuICAgICAgbGV0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKHJlcXVlc3RzKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVBbGVydCh0cnVlLCBcIk5vIGZ1ZSBwb3NpYmxlIG9idGVuZXIgbG9zIHJlZ2lzdHJvcy5cIiwgXCJmYWlsXCIpO1xuICAgICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gbGliLnZlcmlmeVNlc3Npb25GaW5pc2hlZChcbiAgICAgICAgICBlcnJvci5yZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgNDAxXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlc3BvbnNlcyAmJiByZXNwb25zZXNbMF0uZGF0YS5tZXNzYWdlID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgIHRoaXMucmVjb3JkcyA9IHJlc3BvbnNlc1swXS5kYXRhLnJlc3VsdHNDdXNjYTtcbiAgICAgICAgdGhpcy51c2VycyA9IHJlc3BvbnNlc1sxXS5kYXRhLnVzZXJzO1xuICAgICAgICB0aGlzLnN0cmF0ZWd5cyA9IHJlc3BvbnNlc1syXS5kYXRhLnN0cmF0ZWd5X2N1c2NhO1xuICAgICAgICB0aGlzLm9yZ2FuaXphdGlvbmFsVW5pdHMgPSByZXNwb25zZXNbM10uZGF0YS5vcmdhbml6YXRpb25hbFVuaXRzO1xuICAgICAgICB0aGlzLmluZGljYXRvcnMgPSByZXNwb25zZXNbNF0uZGF0YS5pbmRpY2F0b3JzO1xuICAgICAgICB0aGlzLnBlcmlvZHMgPSByZXNwb25zZXNbNV0uZGF0YS5wZXJpb2RzO1xuICAgICAgICB0aGlzLnllYXJzID0gcmVzcG9uc2VzWzZdLmRhdGEueWVhcnM7XG4gICAgICAgIHRoaXMuYWN0dWFsVXNlciA9IHJlc3BvbnNlc1s3XS5kYXRhLnVzZXI7XG4gICAgICAgIHRoaXMudW5pdHMgPSByZXNwb25zZXNbOF0uZGF0YS51bml0cztcblxuICAgICAgICB0aGlzLnJlY29yZHNGaWx0ZXJlZCA9IHRoaXMucmVjb3JkcztcbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBlZGl0SXRlbShpdGVtKSB7XG4gICAgICB0aGlzLmRpYWxvZyA9IHRydWU7XG4gICAgICB0aGlzLmVkaXRlZEluZGV4ID0gdGhpcy5yZWNvcmRzRmlsdGVyZWQuaW5kZXhPZihpdGVtKTtcbiAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIGl0ZW0pO1xuICAgICAgdGhpcy4kdi5lZGl0ZWRJdGVtLnVzZXJfbmFtZS4kbW9kZWwgPSB0aGlzLmVkaXRlZEl0ZW0udXNlcl9uYW1lO1xuICAgICAgdGhpcy4kdi5lZGl0ZWRJdGVtLmluZGljYXRvcl9uYW1lLiRtb2RlbCA9IHRoaXMuZWRpdGVkSXRlbS5pbmRpY2F0b3JfbmFtZTtcbiAgICAgIHRoaXMuJHYuZWRpdGVkSXRlbS5vdV9uYW1lLiRtb2RlbCA9IHRoaXMuZWRpdGVkSXRlbS5vdV9uYW1lO1xuICAgICAgdGhpcy4kdi5lZGl0ZWRJdGVtLnBlcmlvZF9uYW1lLiRtb2RlbCA9IHRoaXMuZWRpdGVkSXRlbS5wZXJpb2RfbmFtZTtcbiAgICAgIHRoaXMuJHYuZWRpdGVkSXRlbS55ZWFyX25hbWUuJG1vZGVsID0gdGhpcy5lZGl0ZWRJdGVtLnllYXJfbmFtZTtcbiAgICAgIHRoaXMuJHYuZWRpdGVkSXRlbS51bml0X25hbWUuJG1vZGVsID0gdGhpcy5lZGl0ZWRJdGVtLnVuaXRfbmFtZTtcbiAgICAgIHRoaXMuJHYuZWRpdGVkSXRlbS5kZXNjcmlwdGlvbl9zdHJhdGVneS4kbW9kZWwgPVxuICAgICAgICB0aGlzLmVkaXRlZEl0ZW0uZGVzY3JpcHRpb25fc3RyYXRlZ3k7XG4gICAgfSxcblxuICAgIGRlbGV0ZUl0ZW0oaXRlbSkge1xuICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IHRoaXMucmVjb3Jkc0ZpbHRlcmVkLmluZGV4T2YoaXRlbSk7XG4gICAgICB0aGlzLmVkaXRlZEl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKTtcbiAgICAgIHRoaXMuZGlhbG9nRGVsZXRlID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgYXN5bmMgZGVsZXRlSXRlbUNvbmZpcm0oKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXN1bHRzQ3VzY2FBcGlcbiAgICAgICAgLmRlbGV0ZShgLyR7dGhpcy5lZGl0ZWRJdGVtLmlkfWApXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIFwiTm8gZnVlIHBvc2libGUgZWxpbWluYXIgZWwgcmVnaXN0cm9zLlwiLFxuICAgICAgICAgICAgXCJmYWlsXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgIHRoaXMucmVkaXJlY3RTZXNzaW9uRmluaXNoZWQgPSBsaWIudmVyaWZ5U2Vzc2lvbkZpbmlzaGVkKFxuICAgICAgICAgIHJlcy5zdGF0dXMsXG4gICAgICAgICAgMjAwXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJSZWdpc3RybyBlbGltaW5hZG8uXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJObyBzZSBwdWRvIGVsaW1pbmFyIGVsIHJlZ2lzdHJvLlwiLCBcImZhaWxcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgdGhpcy5jbG9zZURlbGV0ZSgpO1xuICAgIH0sXG5cbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHRoaXMuZWRpdGVkSXRlbSA9IHRoaXMuZGVmYXVsdEl0ZW07XG4gICAgICAgIHRoaXMuZWRpdGVkSW5kZXggPSAtMTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjbG9zZURlbGV0ZSgpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgdGhpcy5lZGl0ZWRJdGVtID0gdGhpcy5kZWZhdWx0SXRlbTtcbiAgICAgICAgdGhpcy5lZGl0ZWRJbmRleCA9IC0xO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZGlhbG9nRGVsZXRlID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGFzeW5jIHNhdmUoKSB7XG4gICAgICB0aGlzLiR2LiR0b3VjaCgpO1xuICAgICAgaWYgKHRoaXMuJHYuJGludmFsaWQgfHwgdGhpcy5lZGl0ZWRJdGVtLnVzZXJfbmFtZSA9PSBcIlwiKSB7XG4gICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJDYW1wb3Mgb2JsaWdhdG9yaW9zLlwiLCBcImZhaWxcIik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lZGl0ZWRJbmRleCA+IC0xKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc3VsdHNDdXNjYUFwaVxuICAgICAgICAgIC5wdXQoYC8ke3RoaXMuZWRpdGVkSXRlbS5pZH1gLCB0aGlzLmVkaXRlZEl0ZW0pXG4gICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBbGVydCh0cnVlLCBcIk5vIGZ1ZSBwb3NpYmxlIGNyZWFyIGVsIHJlZ2lzdHJvLlwiLCBcImZhaWxcIik7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gbGliLnZlcmlmeVNlc3Npb25GaW5pc2hlZChcbiAgICAgICAgICAgICAgZXJyb3IucmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgICA0MTlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlcy5kYXRhLm1lc3NhZ2UgPT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUFsZXJ0KFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIFwiUmVnaXN0cm8gYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZS5cIixcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVzdWx0c0N1c2NhQXBpXG4gICAgICAgICAgLnBvc3QobnVsbCwgdGhpcy5lZGl0ZWRJdGVtKVxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJObyBmdWUgcG9zaWJsZSBjcmVhciBlbCByZWdpc3Ryby5cIiwgXCJmYWlsXCIpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXMuZGF0YS5tZXNzYWdlID09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVBbGVydChcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICBcIlJlZ2lzdHJvIGFsbWFjZW5hZG8gY29ycmVjdGFtZW50ZS5cIixcbiAgICAgICAgICAgIFwic3VjY2Vzc1wiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfSxcblxuICAgIHNlYXJjaFZhbHVlKCkge1xuICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWQgPSBbXTtcblxuICAgICAgaWYgKHRoaXMuc2VhcmNoICE9IFwiXCIpIHtcbiAgICAgICAgdGhpcy5yZWNvcmRzLmZvckVhY2goKHJlY29yZCkgPT4ge1xuICAgICAgICAgIGxldCBzZWFyY2hDb25jYXQgPSBcIlwiO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVjb3JkLnJlc3VsdF9kZXNjcmlwdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2VhcmNoQ29uY2F0ICs9IHJlY29yZC5yZXN1bHRfZGVzY3JpcHRpb25baV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgc2VhcmNoQ29uY2F0ID09PSB0aGlzLnNlYXJjaC50b1VwcGVyQ2FzZSgpICYmXG4gICAgICAgICAgICAgICF0aGlzLnJlY29yZHNGaWx0ZXJlZC5zb21lKChyZWMpID0+IHJlYyA9PSByZWNvcmQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWQucHVzaChyZWNvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZWNvcmRzRmlsdGVyZWQgPSB0aGlzLnJlY29yZHM7XG4gICAgfSxcblxuICAgIHVwZGF0ZUFsZXJ0KHNob3cgPSBmYWxzZSwgdGV4dCA9IFwiQWxlcnRhXCIsIGV2ZW50ID0gXCJzdWNjZXNzXCIpIHtcbiAgICAgIHRoaXMudGV4dEFsZXJ0ID0gdGV4dDtcbiAgICAgIHRoaXMuYWxlcnRFdmVudCA9IGV2ZW50O1xuICAgICAgdGhpcy5zaG93QWxlcnQgPSBzaG93O1xuICAgIH0sXG5cbiAgICB1cGRhdGVUaW1lT3V0KGV2ZW50KSB7XG4gICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gZXZlbnQ7XG4gICAgfSxcblxuICAgIG9wZW5Nb2RhbCgpIHtcbiAgICAgIHRoaXMuZGlhbG9nID0gdHJ1ZTtcbiAgICAgIHRoaXMuZWRpdGVkSXRlbS5yZXN1bHRfZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgICAgdGhpcy5lZGl0ZWRJdGVtLnVuaXRfbmFtZSA9IHRoaXMudW5pdHNbMF0udW5pdF9uYW1lO1xuICAgICAgLy8gdGhpcy5lZGl0ZWRJdGVtLnllYXJfZ29hbCA9IDA7XG4gICAgICB0aGlzLmVkaXRlZEl0ZW0uaW5kaWNhdG9yX25hbWUgPSB0aGlzLmluZGljYXRvcnNbMF0uaW5kaWNhdG9yX25hbWU7XG4gICAgICB0aGlzLmVkaXRlZEl0ZW0udXNlcl9uYW1lID0gdGhpcy5hY3R1YWxVc2VyLnVzZXJfbmFtZTtcbiAgICAgIHRoaXMuZWRpdGVkSXRlbS5vdV9uYW1lID0gdGhpcy5vcmdhbml6YXRpb25hbFVuaXRzWzBdLm91X25hbWU7XG4gICAgICB0aGlzLmVkaXRlZEl0ZW0ueWVhcl9uYW1lID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgdGhpcy5lZGl0ZWRJdGVtLnBlcmlvZF9uYW1lID0gdGhpcy5wZXJpb2RzWzBdLnBlcmlvZF9uYW1lO1xuICAgICAgdGhpcy5lZGl0ZWRJdGVtLmRlc2NyaXB0aW9uX3N0cmF0ZWd5ID1cbiAgICAgICAgdGhpcy5zdHJhdGVneXNbMF0uZGVzY3JpcHRpb25fc3RyYXRlZ3k7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBcImRhdGEtYXBwXCI6IFwiXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiYWxlcnQtdGltZS1vdXRcIiwge1xuICAgICAgICBhdHRyczogeyByZWRpcmVjdDogX3ZtLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgcmVkaXJlY3Q6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVGltZU91dCgkZXZlbnQpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYWxlcnRcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdGV4dDogX3ZtLnRleHRBbGVydCxcbiAgICAgICAgICBldmVudDogX3ZtLmFsZXJ0RXZlbnQsXG4gICAgICAgICAgc2hvdzogX3ZtLnNob3dBbGVydCxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcInNob3ctYWxlcnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVBbGVydCgkZXZlbnQpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5hY3R1YWxVc2VyLnJvbGUgPT0gXCJBZG1pbmlzdHJhZG9yXCJcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgYWxpZ246IFwic3RhcnRcIiwgY29sczogXCIxMlwiLCBtZDogXCI2XCIsIHNtOiBcIjEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tbm9ybWFsLWNsb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL3N0cmF0ZWd5Q3VzY2FcIiwgcm91bmRlZDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgVm9sdmVyXFxuICAgICAgICBcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImVuZFwiLCBjb2xzOiBcIjEyXCIsIG1kOiBcIjZcIiwgc206IFwiMTJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuLW5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9hY3Rpb25zQ3VzY2F0bGFuXCIsIHJvdW5kZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgIFNpZ3VpZW50ZVxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInYtZGF0YS10YWJsZVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImVsZXZhdGlvbi0zIHNoYWRvdyBwLTMgbXQtM1wiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGhlYWRlcnM6IF92bS5oZWFkZXJzLFxuICAgICAgICAgIGl0ZW1zOiBfdm0ucmVjb3Jkc0ZpbHRlcmVkLFxuICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nLFxuICAgICAgICAgIFwic29ydC1ieVwiOiBcInJlc3VsdF9kZXNjcmlwdGlvblwiLFxuICAgICAgICB9LFxuICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcInRvcFwiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2LXRvb2xiYXJcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBmbGF0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10b29sYmFyLXRpdGxlXCIsIFtfdm0uX3YoXCJSZXN1bHRhZG9zXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInYtc3BhY2VyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInYtZGlhbG9nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibWF4LXdpZHRoXCI6IFwiNzAwcHhcIiwgcGVyc2lzdGVudDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aXZhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKHt9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImVuZFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMiBidG4tbm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0ubG9hZGluZyAhPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9wZW5Nb2RhbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICBBZ3JlZ2FyXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtbm9uZSBkLW1kLWJsb2NrIGQtbGctYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHhzOiBcIjZcIiwgc206IFwiNlwiLCBtZDogXCI2XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidi10ZXh0LWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZW5zZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJCdXNjYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWFyY2hWYWx1ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlhbG9nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlhbG9nID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGV4Y2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaGVpZ2h0OiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2LWNhcmQtdGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImgxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibXgtYXV0byBwdC0zIG1iLTMgdGV4dC1jZW50ZXIgYmxhY2stc2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZvcm1UaXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNhcmQtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJhc2UtdGV4dC1hcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJlc3VsdGFkb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdWx0X2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVGV4dFR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heDogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzOiA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdWx0X2Rlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3VsdF9kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgJCR2ID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCR2LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiR2LmVkaXRlZEl0ZW0ucmVzdWx0X2Rlc2NyaXB0aW9uLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJhc2Utc2VsZWN0LXNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJJbmRpY2Fkb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5pbmRpY2F0b3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBcImluZGljYXRvcl9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRpY2F0b3JfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmluZGljYXRvcl9uYW1lLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5pbmRpY2F0b3JfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgJCR2ID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCR2LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiR2LmVkaXRlZEl0ZW0uaW5kaWNhdG9yX25hbWUuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sczogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc206IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJhc2Utc2VsZWN0LXNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJVbmlkYWQgZGUgbWVkaWRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0udW5pdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IFwidW5pdF9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW0udW5pdF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLnVuaXRfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51bml0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mICQkdiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkdi50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkdi5lZGl0ZWRJdGVtLnVuaXRfbmFtZS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVXN1YXJpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnVzZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBcInVzZXJfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLnVzZXJfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW0udXNlcl9uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVzZXJfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgJCR2ID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCR2LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiR2LmVkaXRlZEl0ZW0udXNlcl9uYW1lLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJhc2Utc2VsZWN0LXNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJVbmlkYWQgb3JnYW5pemF0aXZhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmdhbml6YXRpb25hbFVuaXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBcIm91X25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS5vdV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLm91X25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbS5vdV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiAkJHYgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHYudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJHYuZWRpdGVkSXRlbS5vdV9uYW1lLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJBw7FvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0ueWVhcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IFwieWVhcl9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW0ueWVhcl9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtLnllYXJfbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC55ZWFyX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mICQkdiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkdi50cmltKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkdi5lZGl0ZWRJdGVtLnllYXJfbmFtZS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbTogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZDogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1zZWxlY3Qtc2VhcmNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlBlcmlvZG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5wZXJpb2RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBcInBlcmlvZF9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wZXJpb2RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBlcmlvZF9uYW1lLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5lZGl0ZWRJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wZXJpb2RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgJCR2ID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCR2LnRyaW0oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiR2LmVkaXRlZEl0ZW0ucGVyaW9kX25hbWUuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sczogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc206IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1zZWxlY3Qtc2VhcmNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkVzdHJhdGVnw61hXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfdm0uc3RyYXRlZ3lzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBcImRlc2NyaXB0aW9uX3N0cmF0ZWd5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbl9zdHJhdGVneSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYuZWRpdGVkSXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uX3N0cmF0ZWd5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LmVkaXRlZEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uX3N0cmF0ZWd5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiAkJHYgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHYudHJpbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJHYuZWRpdGVkSXRlbS5kZXNjcmlwdGlvbl9zdHJhdGVneS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4tbm9ybWFsIG5vLXVwcGVyY2FzZSBtdC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5zYXZlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgR3VhcmRhclxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ub3JtYWwtY2xvc2Ugbm8tdXBwZXJjYXNlIG10LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsYXJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWRpYWxvZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm1heC13aWR0aFwiOiBcIjQwMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZ0RlbGV0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpYWxvZ0RlbGV0ZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkaWFsb2dEZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoLTEwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJsYWNrLXNlY29uZGFyeSB0ZXh0LWNlbnRlciBtdC0zIG1iLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBFbGltaW5hciByZWdpc3Ryb1xcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGFsaWduOiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1ub3JtYWwgbm8tdXBwZXJjYXNlIG10LTMgbWItMyBwci01IHBsLTUgbXgtYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogX3ZtLmRlbGV0ZUl0ZW1Db25maXJtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb25maXJtYXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInYtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuLW5vcm1hbC1jbG9zZSBuby11cHBlcmNhc2UgbXQtMyBtYi0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3VuZGVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZURlbGV0ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIENhbmNlbGFyXFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGBpdGVtLmFjdGlvbnNgLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKHsgaXRlbSB9KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNtYWxsOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWRpdEl0ZW0oaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBtZGktcGVuY2lsIFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzbWFsbDogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlbGV0ZUl0ZW0oaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiBtZGktZGVsZXRlIFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcIm5vLWRhdGFcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1ub3JtYWwtc2Vjb25kYXJ5IG5vLWRlY29yYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaW5pdGlhbGl6ZSB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBSZWluaWNpYXJcXG4gICAgICBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICksXG4gICAgICB9KSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgaW5kaWNhdG9yQXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBcIi9hcGkvaW5kaWNhdG9yXCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kaWNhdG9yQXBpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBvcmdhbml6YXRpb25hbFVuaXRBcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IFwiL2FwaS9vcmdhbml6YXRpb25hbFVuaXRcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBvcmdhbml6YXRpb25hbFVuaXRBcGk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IHBlcmlvZEFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogXCIvYXBpL3BlcmlvZFwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBlcmlvZEFwaTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgcmVzdWx0c0N1c2NhQXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBcIi9hcGkvcmVzdWx0c0N1c2NhXCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzdWx0c0N1c2NhQXBpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBzdHJhdGVneUN1c2NhQXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBcIi9hcGkvc3RyYXRlZ3lDdXNjYVwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmF0ZWd5Q3VzY2FBcGk7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCB1bml0QXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBcIi9hcGkvdW5pdFwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRBcGk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IHVzZXJBcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IFwiL2FwaS91c2VyXCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlckFwaTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgeWVhckFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogXCIvYXBpL3llYXJcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB5ZWFyQXBpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHZlcmlmeVNlc3Npb25GaW5pc2hlZDogKHN0YXR1cywgY29kZSA9IDIwMCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzdGF0dXMpO1xuICAgICAgICBpZiAoc3RhdHVzID09IDQxOSB8fCBzdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxcIiArIHN0YXR1cyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SZXN1bHRzQ3VzY2EudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlOTlhNmRmJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Jlc3VsdHNDdXNjYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Jlc3VsdHNDdXNjYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEluZm9ybcOhdGljYVxcXFxEb2N1bWVudHNcXFxccHJvamVjdHNNQ1xcXFxTSVNFLUNVU0NBLTIwMjItbWFpblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2ZTk5YTZkZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2ZTk5YTZkZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2ZTk5YTZkZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmVzdWx0c0N1c2NhLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZTk5YTZkZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2ZTk5YTZkZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY3VzY2F0bGFuL1Jlc3VsdHNDdXNjYS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVzdWx0c0N1c2NhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jlc3VsdHNDdXNjYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jlc3VsdHNDdXNjYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmU5OWE2ZGYmXCIiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnYWxwaGEnLCAvXlthLXpBLVpdKiQvKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2FscGhhTnVtJywgL15bYS16QS1aMC05XSokLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWxpZGF0b3JzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbGlkYXRvcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdhbmQnXG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvcnMubGVuZ3RoID4gMCAmJiB2YWxpZGF0b3JzLnJlZHVjZShmdW5jdGlvbiAodmFsaWQsIGZuKSB7XG4gICAgICByZXR1cm4gdmFsaWQgJiYgZm4uYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgIH0sIHRydWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobWluLCBtYXgpIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnYmV0d2VlbicsXG4gICAgbWluOiBtaW4sXG4gICAgbWF4OiBtYXhcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAoIS9cXHMvLnRlc3QodmFsdWUpIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgJiYgK21pbiA8PSArdmFsdWUgJiYgK21heCA+PSArdmFsdWU7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcSA9IGV4cG9ydHMucmVnZXggPSBleHBvcnRzLnJlZiA9IGV4cG9ydHMubGVuID0gdm9pZCAwO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFBhcmFtc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfd2l0aFBhcmFtcy5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF93aXRoUGFyYW1zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vd2l0aFBhcmFtc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIHJlcSA9IGZ1bmN0aW9uIHJlcSh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiAhIXZhbHVlLmxlbmd0aDtcblxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gIWlzTmFOKHZhbHVlLmdldFRpbWUoKSk7XG4gIH1cblxuICBpZiAoX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgXyBpbiB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuICEhU3RyaW5nKHZhbHVlKS5sZW5ndGg7XG59O1xuXG5leHBvcnRzLnJlcSA9IHJlcTtcblxudmFyIGxlbiA9IGZ1bmN0aW9uIGxlbih2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5sZW5ndGg7XG5cbiAgaWYgKF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIFN0cmluZyh2YWx1ZSkubGVuZ3RoO1xufTtcblxuZXhwb3J0cy5sZW4gPSBsZW47XG5cbnZhciByZWYgPSBmdW5jdGlvbiByZWYocmVmZXJlbmNlLCB2bSwgcGFyZW50Vm0pIHtcbiAgcmV0dXJuIHR5cGVvZiByZWZlcmVuY2UgPT09ICdmdW5jdGlvbicgPyByZWZlcmVuY2UuY2FsbCh2bSwgcGFyZW50Vm0pIDogcGFyZW50Vm1bcmVmZXJlbmNlXTtcbn07XG5cbmV4cG9ydHMucmVmID0gcmVmO1xuXG52YXIgcmVnZXggPSBmdW5jdGlvbiByZWdleCh0eXBlLCBleHByKSB7XG4gIHJldHVybiAoMCwgX3dpdGhQYXJhbXMuZGVmYXVsdCkoe1xuICAgIHR5cGU6IHR5cGVcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICFyZXEodmFsdWUpIHx8IGV4cHIudGVzdCh2YWx1ZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5yZWdleCA9IHJlZ2V4OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdkZWNpbWFsJywgL15bLV0/XFxkKihcXC5cXGQrKT8kLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIGVtYWlsUmVnZXggPSAvXig/OltBLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bQS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSp8XCIoPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2ZdfFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKlwiKUAoPzooPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XXsyLH0oPzpbYS16MC05LV0qW2EtejAtOV0pP3xcXFsoPzooPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldP3xbYS16MC05LV0qW2EtejAtOV06KD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjEtXFx4NWFcXHg1My1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKylcXF0pJC9pO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2VtYWlsJywgZW1haWxSZWdleCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhbHBoYVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYWxwaGEuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhbHBoYU51bVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYWxwaGFOdW0uZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhbmRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FuZC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImJldHdlZW5cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2JldHdlZW4uZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNpbWFsXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9kZWNpbWFsLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZW1haWxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2VtYWlsLmRlZmF1bHQ7XG4gIH1cbn0pO1xuZXhwb3J0cy5oZWxwZXJzID0gdm9pZCAwO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaW50ZWdlclwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZWdlci5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlwQWRkcmVzc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaXBBZGRyZXNzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWFjQWRkcmVzc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWFjQWRkcmVzcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1heExlbmd0aFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWF4TGVuZ3RoLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWF4VmFsdWVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21heFZhbHVlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWluTGVuZ3RoXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9taW5MZW5ndGguZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtaW5WYWx1ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWluVmFsdWUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJub3RcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX25vdC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm51bWVyaWNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX251bWVyaWMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJvclwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfb3IuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZXF1aXJlZFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcmVxdWlyZWQuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZXF1aXJlZElmXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yZXF1aXJlZElmLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVxdWlyZWRVbmxlc3NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JlcXVpcmVkVW5sZXNzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2FtZUFzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9zYW1lQXMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ1cmxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3VybC5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9hbHBoYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYWxwaGFcIikpO1xuXG52YXIgX2FscGhhTnVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hbHBoYU51bVwiKSk7XG5cbnZhciBfbnVtZXJpYyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbnVtZXJpY1wiKSk7XG5cbnZhciBfYmV0d2VlbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYmV0d2VlblwiKSk7XG5cbnZhciBfZW1haWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2VtYWlsXCIpKTtcblxudmFyIF9pcEFkZHJlc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lwQWRkcmVzc1wiKSk7XG5cbnZhciBfbWFjQWRkcmVzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWFjQWRkcmVzc1wiKSk7XG5cbnZhciBfbWF4TGVuZ3RoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYXhMZW5ndGhcIikpO1xuXG52YXIgX21pbkxlbmd0aCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWluTGVuZ3RoXCIpKTtcblxudmFyIF9yZXF1aXJlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVxdWlyZWRcIikpO1xuXG52YXIgX3JlcXVpcmVkSWYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlcXVpcmVkSWZcIikpO1xuXG52YXIgX3JlcXVpcmVkVW5sZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZXF1aXJlZFVubGVzc1wiKSk7XG5cbnZhciBfc2FtZUFzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zYW1lQXNcIikpO1xuXG52YXIgX3VybCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXJsXCIpKTtcblxudmFyIF9vciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vb3JcIikpO1xuXG52YXIgX2FuZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYW5kXCIpKTtcblxudmFyIF9ub3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25vdFwiKSk7XG5cbnZhciBfbWluVmFsdWUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21pblZhbHVlXCIpKTtcblxudmFyIF9tYXhWYWx1ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWF4VmFsdWVcIikpO1xuXG52YXIgX2ludGVnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2ludGVnZXJcIikpO1xuXG52YXIgX2RlY2ltYWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2RlY2ltYWxcIikpO1xuXG52YXIgaGVscGVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2NvbW1vblwiKSk7XG5cbmV4cG9ydHMuaGVscGVycyA9IGhlbHBlcnM7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnaW50ZWdlcicsIC8oXlswLTldKiQpfCheLVswLTldKyQpLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICB0eXBlOiAnaXBBZGRyZXNzJ1xufSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICghKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIG5pYmJsZXMgPSB2YWx1ZS5zcGxpdCgnLicpO1xuICByZXR1cm4gbmliYmxlcy5sZW5ndGggPT09IDQgJiYgbmliYmxlcy5ldmVyeShuaWJibGVWYWxpZCk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbnZhciBuaWJibGVWYWxpZCA9IGZ1bmN0aW9uIG5pYmJsZVZhbGlkKG5pYmJsZSkge1xuICBpZiAobmliYmxlLmxlbmd0aCA+IDMgfHwgbmliYmxlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChuaWJibGVbMF0gPT09ICcwJyAmJiBuaWJibGUgIT09ICcwJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghbmliYmxlLm1hdGNoKC9eXFxkKyQvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBudW1lcmljID0gK25pYmJsZSB8IDA7XG4gIHJldHVybiBudW1lcmljID49IDAgJiYgbnVtZXJpYyA8PSAyNTU7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIHZhciBzZXBhcmF0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICc6JztcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbWFjQWRkcmVzcydcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgcGFydHMgPSB0eXBlb2Ygc2VwYXJhdG9yID09PSAnc3RyaW5nJyAmJiBzZXBhcmF0b3IgIT09ICcnID8gdmFsdWUuc3BsaXQoc2VwYXJhdG9yKSA6IHZhbHVlLmxlbmd0aCA9PT0gMTIgfHwgdmFsdWUubGVuZ3RoID09PSAxNiA/IHZhbHVlLm1hdGNoKC8uezJ9L2cpIDogbnVsbDtcbiAgICByZXR1cm4gcGFydHMgIT09IG51bGwgJiYgKHBhcnRzLmxlbmd0aCA9PT0gNiB8fCBwYXJ0cy5sZW5ndGggPT09IDgpICYmIHBhcnRzLmV2ZXJ5KGhleFZhbGlkKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxudmFyIGhleFZhbGlkID0gZnVuY3Rpb24gaGV4VmFsaWQoaGV4KSB7XG4gIHJldHVybiBoZXgudG9Mb3dlckNhc2UoKS5tYXRjaCgvXlswLTlhLWZdezJ9JC8pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KGxlbmd0aCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtYXhMZW5ndGgnLFxuICAgIG1heDogbGVuZ3RoXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKDAsIF9jb21tb24ubGVuKSh2YWx1ZSkgPD0gbGVuZ3RoO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobWF4KSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21heFZhbHVlJyxcbiAgICBtYXg6IG1heFxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICghL1xccy8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSAmJiArdmFsdWUgPD0gK21heDtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KGxlbmd0aCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtaW5MZW5ndGgnLFxuICAgIG1pbjogbGVuZ3RoXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKDAsIF9jb21tb24ubGVuKSh2YWx1ZSkgPj0gbGVuZ3RoO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobWluKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21pblZhbHVlJyxcbiAgICBtaW46IG1pblxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICghL1xccy8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSAmJiArdmFsdWUgPj0gK21pbjtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHZhbGlkYXRvcikge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdub3QnXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSwgdm0pIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICF2YWxpZGF0b3IuY2FsbCh0aGlzLCB2YWx1ZSwgdm0pO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdudW1lcmljJywgL15bMC05XSokLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWxpZGF0b3JzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbGlkYXRvcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdvcidcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9ycy5sZW5ndGggPiAwICYmIHZhbGlkYXRvcnMucmVkdWNlKGZ1bmN0aW9uICh2YWxpZCwgZm4pIHtcbiAgICAgIHJldHVybiB2YWxpZCB8fCBmbi5hcHBseShfdGhpcywgYXJncyk7XG4gICAgfSwgZmFsc2UpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICB0eXBlOiAncmVxdWlyZWQnXG59LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gKDAsIF9jb21tb24ucmVxKSh2YWx1ZS50cmltKCkpO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfY29tbW9uLnJlcSkodmFsdWUpO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQocHJvcCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdyZXF1aXJlZElmJyxcbiAgICBwcm9wOiBwcm9wXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSwgcGFyZW50Vm0pIHtcbiAgICByZXR1cm4gKDAsIF9jb21tb24ucmVmKShwcm9wLCB0aGlzLCBwYXJlbnRWbSkgPyAoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSA6IHRydWU7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChwcm9wKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ3JlcXVpcmVkVW5sZXNzJyxcbiAgICBwcm9wOiBwcm9wXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSwgcGFyZW50Vm0pIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlZikocHJvcCwgdGhpcywgcGFyZW50Vm0pID8gKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgOiB0cnVlO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoZXF1YWxUbykge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdzYW1lQXMnLFxuICAgIGVxOiBlcXVhbFRvXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSwgcGFyZW50Vm0pIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICgwLCBfY29tbW9uLnJlZikoZXF1YWxUbywgdGhpcywgcGFyZW50Vm0pO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIHVybFJlZ2V4ID0gL14oPzooPzooPzpodHRwcz98ZnRwKTopP1xcL1xcLykoPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdTAwYTEtXFx1ZmZmZl1bYS16MC05XFx1MDBhMS1cXHVmZmZmXy1dezAsNjJ9KT9bYS16MC05XFx1MDBhMS1cXHVmZmZmXVxcLikrKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9XFwuPykpKD86OlxcZHsyLDV9KT8oPzpbLz8jXVxcUyopPyQvaTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCd1cmwnLCB1cmxSZWdleCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIHdpdGhQYXJhbXMgPSBwcm9jZXNzLmVudi5CVUlMRCA9PT0gJ3dlYicgPyByZXF1aXJlKCcuL3dpdGhQYXJhbXNCcm93c2VyJykud2l0aFBhcmFtcyA6IHJlcXVpcmUoJy4vcGFyYW1zJykud2l0aFBhcmFtcztcbnZhciBfZGVmYXVsdCA9IHdpdGhQYXJhbXM7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMud2l0aFBhcmFtcyA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgcm9vdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB7fTtcblxudmFyIGZha2VXaXRoUGFyYW1zID0gZnVuY3Rpb24gZmFrZVdpdGhQYXJhbXMocGFyYW1zT3JDbG9zdXJlLCBtYXliZVZhbGlkYXRvcikge1xuICBpZiAoX3R5cGVvZihwYXJhbXNPckNsb3N1cmUpID09PSAnb2JqZWN0JyAmJiBtYXliZVZhbGlkYXRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG1heWJlVmFsaWRhdG9yO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtc09yQ2xvc3VyZShmdW5jdGlvbiAoKSB7fSk7XG59O1xuXG52YXIgd2l0aFBhcmFtcyA9IHJvb3QudnVlbGlkYXRlID8gcm9vdC52dWVsaWRhdGUud2l0aFBhcmFtcyA6IGZha2VXaXRoUGFyYW1zO1xuZXhwb3J0cy53aXRoUGFyYW1zID0gd2l0aFBhcmFtczsiXSwibmFtZXMiOlsiZGF0YSIsInNlYXJjaCIsImRpYWxvZyIsImRpYWxvZ0RlbGV0ZSIsImxvYWRpbmciLCJoZWFkZXJzIiwidGV4dCIsInZhbHVlIiwic29ydGFibGUiLCJyZWNvcmRzIiwicmVjb3Jkc0ZpbHRlcmVkIiwiZWRpdGVkSW5kZXgiLCJlZGl0ZWRJdGVtIiwicmVzdWx0X2Rlc2NyaXB0aW9uIiwidW5pdF9uYW1lIiwidXNlcl9uYW1lIiwiaW5kaWNhdG9yX25hbWUiLCJvdV9uYW1lIiwicGVyaW9kX25hbWUiLCJ5ZWFyX25hbWUiLCJkZXNjcmlwdGlvbl9zdHJhdGVneSIsImRlZmF1bHRJdGVtIiwidGV4dEFsZXJ0IiwiYWxlcnRFdmVudCIsInNob3dBbGVydCIsInVzZXJzIiwidW5pdHMiLCJpbmRpY2F0b3JzIiwib3JnYW5pemF0aW9uYWxVbml0cyIsInBlcmlvZHMiLCJ5ZWFycyIsInN0cmF0ZWd5cyIsInJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkIiwiYWN0dWFsVXNlciIsInZhbGlkYXRpb25zIiwicmVxdWlyZWQiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJjb21wdXRlZCIsImZvcm1UaXRsZSIsIndhdGNoIiwidmFsIiwiY3JlYXRlZCIsIm1ldGhvZHMiLCJpbml0aWFsaXplIiwicmVxdWVzdHMiLCJyZXN1bHRzQ3VzY2FBcGkiLCJ1c2VyQXBpIiwicGFyYW1zIiwic2tpcCIsInRha2UiLCJzdHJhdGVneUN1c2NhQXBpIiwib3JnYW5pemF0aW9uYWxVbml0QXBpIiwiaW5kaWNhdG9yQXBpIiwicGVyaW9kQXBpIiwieWVhckFwaSIsInVuaXRBcGkiLCJQcm9taXNlIiwiZXJyb3IiLCJyZXNwb25zZXMiLCJlZGl0SXRlbSIsIml0ZW0iLCJkZWxldGVJdGVtIiwiZGVsZXRlSXRlbUNvbmZpcm0iLCJyZXMiLCJjbG9zZSIsImNsb3NlRGVsZXRlIiwic2F2ZSIsInB1dCIsInBvc3QiLCJzZWFyY2hWYWx1ZSIsInNlYXJjaENvbmNhdCIsInVwZGF0ZUFsZXJ0IiwidXBkYXRlVGltZU91dCIsImV2ZW50Iiwib3Blbk1vZGFsIiwicmVuZGVyIiwiX3ZtIiwiX2MiLCJfc2VsZiIsImF0dHJzIiwicmVkaXJlY3QiLCJvbiIsIiRldmVudCIsIl92Iiwic3RhdGljQ2xhc3MiLCJzaG93Iiwicm9sZSIsImFsaWduIiwiY29scyIsIm1kIiwic20iLCJocmVmIiwicm91bmRlZCIsIl9lIiwiaXRlbXMiLCJzY29wZWRTbG90cyIsIl91Iiwia2V5IiwiZm4iLCJmbGF0IiwicGVyc2lzdGVudCIsImRpc2FibGVkIiwiY2xpY2siLCJ4cyIsImRlbnNlIiwibGFiZWwiLCJvdXRsaW5lZCIsInR5cGUiLCJrZXl1cCIsIm1vZGVsIiwiY2FsbGJhY2siLCIkJHYiLCJleHByZXNzaW9uIiwiaGVpZ2h0IiwiX3MiLCJ2YWxpZGF0aW9uIiwiJHYiLCJ2YWxpZGF0aW9uVGV4dFR5cGUiLCJtaW4iLCJtYXgiLCJyb3dzIiwiJG1vZGVsIiwiJHNldCIsInRyaW0iLCJyZWFkb25seSIsImNvbG9yIiwicHJveHkiLCJzbWFsbCIsInN0YXRpY1JlbmRlckZucyIsIl93aXRoU3RyaXBwZWQiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJ2ZXJpZnlTZXNzaW9uRmluaXNoZWQiLCJzdGF0dXMiLCJjb2RlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=