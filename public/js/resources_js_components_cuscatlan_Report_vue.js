(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_cuscatlan_Report_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertDialog.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertDialog.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/Report.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/Report.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var _ReportsCusca_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportsCusca.vue */ "./resources/js/components/cuscatlan/ReportsCusca.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ReportsCusca: _ReportsCusca_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      planifications: [{
        planification_name: "Plan Cuscatlán"
      }, {
        planification_name: "Política Crecer Juntos"
      }, {
        planification_name: "Plan Control Territorial"
      }, {
        planification_name: "Plan Desarrollo Social"
      }],
      param: {
        planification_name: ""
      }
    };
  },
  validations: {
    param: {
      planification_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__.minLength)(1)
      }
    }
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/ReportsCusca.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/ReportsCusca.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_axisCuscaApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/axisCuscaApi */ "./resources/js/apis/axisCuscaApi.js");
/* harmony import */ var _apis_organizationalUnitApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/organizationalUnitApi */ "./resources/js/apis/organizationalUnitApi.js");
/* harmony import */ var _apis_monthApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apis/monthApi */ "./resources/js/apis/monthApi.js");
/* harmony import */ var _apis_periodApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apis/periodApi */ "./resources/js/apis/periodApi.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var _base_components_AlertDialog_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-components/AlertDialog.vue */ "./resources/js/components/base-components/AlertDialog.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AlertDialog: _base_components_AlertDialog_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      reportTypes: [{
        text: "Reporte mensual"
      }, {
        text: "Reporte acumulado"
      }, {
        text: "Reporte despacho"
      }],
      parameters: {
        axis_description: "",
        ou_name: "",
        month_name: "",
        start_month_name: "",
        end_month_name: "",
        period_name: "",
        reportTypes: "Reporte mensual"
      },
      axis: [],
      organizationalUnits: [],
      months: [],
      periods: [],
      items: [],
      redirectSessionFinished: false,
      textAlert: "",
      alertEvent: "",
      showAlert: false,
      loading: false,
      textReportDialog: "",
      reportDialog: false
    };
  },
  validations: {
    parameters: {
      axis_description: {
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1)
      },
      ou_name: {
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1)
      },
      month_name: {
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1)
      },
      start_month_name: {
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1)
      },
      end_month_name: {
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1)
      },
      period_name: {
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1)
      },
      reportTypes: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.required,
        minLength: (0,vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__.minLength)(1)
      }
    }
  },
  mounted: function mounted() {
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
                requests = [_apis_axisCuscaApi__WEBPACK_IMPORTED_MODULE_0__["default"].get(), _apis_organizationalUnitApi__WEBPACK_IMPORTED_MODULE_1__["default"].get(), _apis_monthApi__WEBPACK_IMPORTED_MODULE_2__["default"].post("/monthsAllowed"), _apis_periodApi__WEBPACK_IMPORTED_MODULE_3__["default"].get()];
                _context.next = 4;
                return Promise.all(requests)["catch"](function (error) {
                  _this.updateAlert(true, "Campos obligatorios.", "fail");
                });

              case 4:
                responses = _context.sent;

                if (responses) {
                  _this.axis = responses[0].data.axisCuscas;

                  _this.axis.unshift("General");

                  _this.organizationalUnits = responses[1].data.organizationalUnits;
                  _this.months = responses[2].data.monthsAllowed;
                  _this.periods = responses[3].data.periods;
                  _this.parameters.axis_description = "General";
                  _this.parameters.ou_name = _this.organizationalUnits[0].ou_name;
                  _this.parameters.month_name = _this.months[new Date().getMonth()].month_name;
                  _this.parameters.period_name = _this.periods[0].period_name;
                }

                _this.loading = false;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    updateTimeOut: function updateTimeOut(event) {
      this.redirectSessionFinished = event;
    },
    generateReport: function generateReport() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.$v.$touch();

                if (!_this2.$v.$invalid) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                _context2.t0 = _this2.parameters.reportTypes;
                _context2.next = _context2.t0 === "Reporte mensual" ? 6 : _context2.t0 === "Reporte acumulado" ? 10 : _context2.t0 === "Reporte despacho" ? 14 : 18;
                break;

              case 6:
                _this2.reportDialog = true;
                _this2.textReportDialog = "Generando reporte mensual";

                _this2.showReport();

                return _context2.abrupt("break", 18);

              case 10:
                _this2.reportDialog = true;
                _this2.textReportDialog = "Generando reporte acumulado";

                _this2.showReport();

                return _context2.abrupt("break", 18);

              case 14:
                _this2.reportDialog = true;
                _this2.textReportDialog = "Generando reporte despacho";

                _this2.showReport();

                return _context2.abrupt("break", 18);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    showReport: function showReport() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(_this3.parameters);

                if (!(_this3.parameters.reportTypes == "Reporte mensual")) {
                  _context3.next = 4;
                  break;
                }

                setTimeout(function () {
                  window.open("/pdf/mensual?ou_name=".concat(_this3.parameters.ou_name, "&month_name=").concat(_this3.parameters.month_name, "&reportTypes=").concat(_this3.parameters.reportTypes));
                  _this3.reportDialog = false;
                }, 1000);
                return _context3.abrupt("return");

              case 4:
                if (!(_this3.parameters.reportTypes == "Reporte acumulado")) {
                  _context3.next = 7;
                  break;
                }

                setTimeout(function () {
                  window.open("/pdf/acumulado?ou_name=".concat(_this3.parameters.ou_name, "&start_month=").concat(_this3.parameters.start_month_name, "&end_month=").concat(_this3.parameters.end_month_name, "&reportTypes=").concat(_this3.parameters.reportTypes));
                  _this3.reportDialog = false;
                }, 1000);
                return _context3.abrupt("return");

              case 7:
                if (!(_this3.parameters.reportTypes == "Reporte despacho")) {
                  _context3.next = 10;
                  break;
                }

                setTimeout(function () {
                  window.open("/pdf/despacho?axis_description=".concat(_this3.parameters.axis_description, "&reportTypes=").concat(_this3.parameters.reportTypes));
                  _this3.reportDialog = false;
                }, 1000);
                return _context3.abrupt("return");

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    updateAlert: function updateAlert() {
      var show = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Alerta";
      var event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";
      this.textAlert = text;
      this.alertEvent = event;
      this.showAlert = show;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertDialog.vue?vue&type=template&id=40acffa8&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertDialog.vue?vue&type=template&id=40acffa8& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/Report.vue?vue&type=template&id=a3b115ec&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/Report.vue?vue&type=template&id=a3b115ec& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("v-container", [_c("v-card", {
    staticClass: "p-4",
    staticStyle: {
      "border-radius": "15px"
    }
  }, [_c("h3", [_vm._v("Reportes " + _vm._s(_vm.param.planification_name))]), _vm._v(" "), _c("hr"), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "6",
      "offset-md": "3"
    }
  }, [_c("base-select", {
    attrs: {
      label: "Tipo de proyecto",
      items: _vm.planifications,
      item: "planification_name",
      validation: _vm.$v.param.planification_name
    },
    model: {
      value: _vm.$v.param.planification_name.$model,
      callback: function callback($$v) {
        _vm.$set(_vm.$v.param.planification_name, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.param.planification_name.$model"
    }
  })], 1)], 1), _vm._v(" "), _c("hr"), _vm._v(" "), _vm.param.planification_name == "Plan Cuscatlán" ? _c("reports-cusca") : _vm._e()], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/ReportsCusca.vue?vue&type=template&id=60180336&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/ReportsCusca.vue?vue&type=template&id=60180336& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }), _vm._v(" "), _c("loader", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.loading,
      expression: "loading"
    }]
  }), _vm._v(" "), !_vm.loading ? _c("v-row", {
    staticClass: "pt-4"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "6",
      "offset-md": "3"
    }
  }, [_c("base-select", {
    attrs: {
      label: "Tipo de reporte",
      items: _vm.reportTypes,
      item: "text",
      validation: _vm.$v.parameters.reportTypes
    },
    model: {
      value: _vm.$v.parameters.reportTypes.$model,
      callback: function callback($$v) {
        _vm.$set(_vm.$v.parameters.reportTypes, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.parameters.reportTypes.$model"
    }
  })], 1), _vm._v(" "), _vm.parameters.reportTypes != "Reporte acumulado" && _vm.parameters.reportTypes != "Reporte mensual" ? _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "6",
      "offset-md": "3"
    }
  }, [_c("base-select", {
    attrs: {
      label: "Ejes",
      items: _vm.axis,
      item: "axis_description",
      validation: _vm.$v.parameters.axis_description
    },
    model: {
      value: _vm.$v.parameters.axis_description.$model,
      callback: function callback($$v) {
        _vm.$set(_vm.$v.parameters.axis_description, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.parameters.axis_description.$model"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.parameters.reportTypes != "Reporte despacho" ? _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "6",
      "offset-md": "3"
    }
  }, [_c("base-select", {
    attrs: {
      label: "Unidad/Dirección",
      items: _vm.organizationalUnits,
      item: "ou_name",
      validation: _vm.$v.parameters.ou_name
    },
    model: {
      value: _vm.$v.parameters.ou_name.$model,
      callback: function callback($$v) {
        _vm.$set(_vm.$v.parameters.ou_name, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.parameters.ou_name.$model"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.parameters.reportTypes != "Reporte acumulado" && _vm.parameters.reportTypes != "Reporte despacho" ? _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "6",
      "offset-md": "3"
    }
  }, [_c("base-select-search", {
    attrs: {
      label: "Mes",
      items: _vm.months,
      item: "month_name",
      validation: _vm.$v.parameters.month_name
    },
    model: {
      value: _vm.$v.parameters.month_name.$model,
      callback: function callback($$v) {
        _vm.$set(_vm.$v.parameters.month_name, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.parameters.month_name.$model"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.parameters.reportTypes != "Reporte mensual" && _vm.parameters.reportTypes != "Reporte despacho" ? _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "6",
      "offset-md": "3"
    }
  }, [_c("base-select-search", {
    attrs: {
      label: "Mes inicial",
      items: _vm.months,
      item: "month_name",
      validation: _vm.$v.parameters.start_month_name
    },
    model: {
      value: _vm.$v.parameters.start_month_name.$model,
      callback: function callback($$v) {
        _vm.$set(_vm.$v.parameters.start_month_name, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.parameters.start_month_name.$model"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.parameters.reportTypes != "Reporte mensual" && _vm.parameters.reportTypes != "Reporte despacho" ? _c("v-col", {
    attrs: {
      cols: "12",
      sm: "12",
      md: "6",
      "offset-md": "3"
    }
  }, [_c("base-select-search", {
    attrs: {
      label: "Mes final",
      items: _vm.months,
      item: "month_name",
      validation: _vm.$v.parameters.end_month_name
    },
    model: {
      value: _vm.$v.parameters.end_month_name.$model,
      callback: function callback($$v) {
        _vm.$set(_vm.$v.parameters.end_month_name, "$model", typeof $$v === "string" ? $$v.trim() : $$v);
      },
      expression: "$v.parameters.end_month_name.$model"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "6",
      md: "6",
      "offset-md": "3",
      align: "center"
    }
  }, [_c("v-btn", {
    staticClass: "btn btn-normal w-100",
    on: {
      click: function click($event) {
        return _vm.generateReport();
      }
    }
  }, [_vm._v("\n        Generar reporte\n      ")])], 1), _vm._v(" "), _c("alert-dialog", {
    attrs: {
      text: _vm.textReportDialog,
      dialog: _vm.reportDialog
    }
  })], 1) : _vm._e()], 1);
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

/***/ "./resources/js/components/base-components/AlertDialog.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/base-components/AlertDialog.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/components/cuscatlan/Report.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/cuscatlan/Report.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Report_vue_vue_type_template_id_a3b115ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Report.vue?vue&type=template&id=a3b115ec& */ "./resources/js/components/cuscatlan/Report.vue?vue&type=template&id=a3b115ec&");
/* harmony import */ var _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Report.vue?vue&type=script&lang=js& */ "./resources/js/components/cuscatlan/Report.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Report_vue_vue_type_template_id_a3b115ec___WEBPACK_IMPORTED_MODULE_0__.render,
  _Report_vue_vue_type_template_id_a3b115ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cuscatlan/Report.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/cuscatlan/ReportsCusca.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/cuscatlan/ReportsCusca.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReportsCusca_vue_vue_type_template_id_60180336___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportsCusca.vue?vue&type=template&id=60180336& */ "./resources/js/components/cuscatlan/ReportsCusca.vue?vue&type=template&id=60180336&");
/* harmony import */ var _ReportsCusca_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportsCusca.vue?vue&type=script&lang=js& */ "./resources/js/components/cuscatlan/ReportsCusca.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportsCusca_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportsCusca_vue_vue_type_template_id_60180336___WEBPACK_IMPORTED_MODULE_0__.render,
  _ReportsCusca_vue_vue_type_template_id_60180336___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cuscatlan/ReportsCusca.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/base-components/AlertDialog.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/base-components/AlertDialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlertDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cuscatlan/Report.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/cuscatlan/Report.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/Report.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cuscatlan/ReportsCusca.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/cuscatlan/ReportsCusca.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsCusca_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportsCusca.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/ReportsCusca.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsCusca_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/base-components/AlertDialog.vue?vue&type=template&id=40acffa8&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/base-components/AlertDialog.vue?vue&type=template&id=40acffa8& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDialog_vue_vue_type_template_id_40acffa8___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDialog_vue_vue_type_template_id_40acffa8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AlertDialog_vue_vue_type_template_id_40acffa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlertDialog.vue?vue&type=template&id=40acffa8& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/base-components/AlertDialog.vue?vue&type=template&id=40acffa8&");


/***/ }),

/***/ "./resources/js/components/cuscatlan/Report.vue?vue&type=template&id=a3b115ec&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/cuscatlan/Report.vue?vue&type=template&id=a3b115ec& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_a3b115ec___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_a3b115ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_a3b115ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Report.vue?vue&type=template&id=a3b115ec& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/Report.vue?vue&type=template&id=a3b115ec&");


/***/ }),

/***/ "./resources/js/components/cuscatlan/ReportsCusca.vue?vue&type=template&id=60180336&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/cuscatlan/ReportsCusca.vue?vue&type=template&id=60180336& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsCusca_vue_vue_type_template_id_60180336___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsCusca_vue_vue_type_template_id_60180336___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportsCusca_vue_vue_type_template_id_60180336___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportsCusca.vue?vue&type=template&id=60180336& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/cuscatlan/ReportsCusca.vue?vue&type=template&id=60180336&");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvcmVzb3VyY2VzX2pzX2NvbXBvbmVudHNfY3VzY2F0bGFuX1JlcG9ydF92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBLGlFQUFlO0VBQ2ZBLElBREEsa0JBQ0E7SUFDQTtNQUNBQyxhQURBO01BRUFDLFlBRkE7TUFHQUMsY0FIQTtNQUlBQyxZQUpBO01BS0FDO0lBTEE7RUFPQSxDQVRBO0VBVUFDO0lBQ0FDO01BQ0FDLGFBREE7TUFFQTtJQUZBLENBREE7SUFLQUM7TUFDQUQsWUFEQTtNQUVBO0lBRkEsQ0FMQTtJQVNBRTtNQUNBRixZQURBO01BRUE7SUFGQTtFQVRBLENBVkE7RUF5QkFHLE9BekJBLHFCQXlCQTtJQUNBO0VBQ0EsQ0EzQkE7RUE0QkFDLE1BNUJBLG9CQTRCQTtJQUNBQztJQUNBO0VBQ0EsQ0EvQkE7RUFnQ0FDO0lBQ0FDLFlBREEsMEJBQ0E7TUFBQTs7TUFDQTtRQUNBO1VBQ0E7VUFDQTtRQUNBLENBSEEsTUFHQTtVQUNBO1FBQ0E7O1FBQ0E7UUFDQTtNQUNBLENBVEEsRUFTQSxpQkFUQTtJQVVBO0VBWkE7QUFoQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaUIrRDtBQUNqQjtBQUU5QyxpRUFBZTtFQUNmQztJQUFBQyxjQUFBQSx5REFBQUE7RUFBQSxDQURBO0VBRUFqQixJQUZBLGtCQUVBO0lBQ0E7TUFDQWtCLGlCQUNBO1FBQUFDO01BQUEsQ0FEQSxFQUVBO1FBQUFBO01BQUEsQ0FGQSxFQUdBO1FBQUFBO01BQUEsQ0FIQSxFQUlBO1FBQUFBO01BQUEsQ0FKQSxDQURBO01BT0FDO1FBQ0FEO01BREE7SUFQQTtFQVdBLENBZEE7RUFnQkFFO0lBQ0FEO01BQ0FEO1FBQ0FHLFVBQUFBLDhEQURBO1FBRUFDLFdBQUFBLG1FQUFBQTtNQUZBO0lBREE7RUFEQSxDQWhCQTtFQXlCQVosT0F6QkEscUJBeUJBLEVBekJBO0VBMkJBRztBQTNCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDaUlBOzs7Ozs7QUFBbUQ7QUFDa0I7QUFDMUI7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VUFBVTtBQUNWO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TDZEO0FBQzNCO0FBQ0w7OztBQUcxRDtBQUNBLENBQWdH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QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmLGNBQWMsbUJBQU8sQ0FBQyxtRUFBVTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsa0JBQWU7Ozs7Ozs7Ozs7O0FDbEJGOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlOztBQUVmLGNBQWMsbUJBQU8sQ0FBQyxtRUFBVTs7QUFFaEMsdUZBQXVGLElBQUksRUFBRSxFQUFFLGlDQUFpQyxJQUFJLEVBQUUsRUFBRSxzQ0FBc0MsSUFBSSxFQUFFLEVBQUUsZ0RBQWdELElBQUksb0JBQW9CLEVBQUUsNkZBQTZGLEtBQUssaURBQWlELEdBQUcsWUFBWSxJQUFJOztBQUV0YTs7QUFFQSxrQkFBZTs7Ozs7Ozs7Ozs7O0FDYkY7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZixpQkFBaUIsT0FBTyx1QkFBdUIsZ0hBQXlDLEdBQUcsMEZBQThCO0FBQ3pIO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDUkY7O0FBRWIsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWtCOztBQUVsQix3QkFBd0IsMkJBQTJCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFcFcsMkRBQTJELHFCQUFNLG1CQUFtQixxQkFBTTs7QUFFMUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0Esa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50cy9BbGVydERpYWxvZy52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2N1c2NhdGxhbi9SZXBvcnQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jdXNjYXRsYW4vUmVwb3J0c0N1c2NhLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQWxlcnREaWFsb2cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2N1c2NhdGxhbi9SZXBvcnQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2N1c2NhdGxhbi9SZXBvcnRzQ3VzY2EudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9hcGlzL2F4aXNDdXNjYUFwaS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBpcy9tb250aEFwaS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYXBpcy9vcmdhbml6YXRpb25hbFVuaXRBcGkuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2FwaXMvcGVyaW9kQXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnRzL0FsZXJ0RGlhbG9nLnZ1ZT9lMDc1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2N1c2NhdGxhbi9SZXBvcnQudnVlP2QwOTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY3VzY2F0bGFuL1JlcG9ydHNDdXNjYS52dWU/YjIwNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQWxlcnREaWFsb2cudnVlPzIwZjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY3VzY2F0bGFuL1JlcG9ydC52dWU/NThjZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9jdXNjYXRsYW4vUmVwb3J0c0N1c2NhLnZ1ZT8zYzNkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2N1c2NhdGxhbi9SZXBvcnQudnVlPzY4MTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY3VzY2F0bGFuL1JlcG9ydHNDdXNjYS52dWU/MjcxMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2FscGhhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvYWxwaGFOdW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9hbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9iZXR3ZWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvZGVjaW1hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL2VtYWlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvaXBBZGRyZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWFjQWRkcmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21heExlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL21heFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWluTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvbWluVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9ub3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9udW1lcmljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3ZhbGlkYXRvcnMvb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9yZXF1aXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3JlcXVpcmVkSWYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZWxpZGF0ZS9saWIvdmFsaWRhdG9ycy9yZXF1aXJlZFVubGVzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3NhbWVBcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi92YWxpZGF0b3JzL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlbGlkYXRlL2xpYi93aXRoUGFyYW1zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWVsaWRhdGUvbGliL3dpdGhQYXJhbXNCcm93c2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8di1kaWFsb2cgdi1tb2RlbD1cImRpYWxvZ1wiIHdpZHRoPVwiNTAwXCIgcGVyc2lzdGVudD5cclxuICAgIDx2LWNhcmQ+XHJcbiAgICAgIDx2LWNhcmQtdGV4dD5cclxuICAgICAgICA8bG9hZGVyIC8+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwidGV4dC1jZW50ZXJcIj57eyB0aXRsZUNhcmQgfX08L2g0PlxyXG4gICAgICA8L3YtY2FyZC10ZXh0PlxyXG4gICAgPC92LWNhcmQ+XHJcbiAgPC92LWRpYWxvZz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGVDYXJkOiBcIlwiLFxyXG4gICAgICB0b3RhbERvdHM6IDQsXHJcbiAgICAgIGNvdW50ZXJEb3RzOiAwLFxyXG4gICAgICB0ZXh0RG90czogXCJcIixcclxuICAgICAgaW50ZXJ2YWw6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgcHJvcHM6IHtcclxuICAgIGRpYWxvZzoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICBkZWZhdWx0OiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGludGVydmFsVGltZToge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIGRlZmF1bHQ6IDUwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMuaW50ZXJ2YWxEb3RzKCk7XHJcbiAgfSxcclxuICB1cGRhdGUoKSB7XHJcbiAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgIHRoaXMuaW50ZXJ2YWxEb3RzKCk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBpbnRlcnZhbERvdHMoKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY291bnRlckRvdHMgPT09IHRoaXMudG90YWxEb3RzKSB7XHJcbiAgICAgICAgICB0aGlzLmNvdW50ZXJEb3RzID0gMDtcclxuICAgICAgICAgIHRoaXMudGV4dERvdHMgPSBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnRleHREb3RzICs9IFwiLlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpdGxlQ2FyZCA9IHRoaXMudGV4dCArIHRoaXMudGV4dERvdHM7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyRG90cysrO1xyXG4gICAgICB9LCB0aGlzLmludGVydmFsVGltZSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgZGF0YS1hcHA+XG4gICAgPHYtY29udGFpbmVyPlxuICAgICAgPHYtY2FyZCBjbGFzcz1cInAtNFwiIHN0eWxlPVwiYm9yZGVyLXJhZGl1czogMTVweFwiPlxuICAgICAgICA8aDM+UmVwb3J0ZXMge3sgcGFyYW0ucGxhbmlmaWNhdGlvbl9uYW1lIH19PC9oMz5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDx2LXJvdz5cbiAgICAgICAgICA8IS0tIFBsYW5pZmljYXRpb25zIC0tPlxuICAgICAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiBzbT1cIjEyXCIgbWQ9XCI2XCIgb2Zmc2V0LW1kPVwiM1wiPlxuICAgICAgICAgICAgPGJhc2Utc2VsZWN0XG4gICAgICAgICAgICAgIGxhYmVsPVwiVGlwbyBkZSBwcm95ZWN0b1wiXG4gICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cIiR2LnBhcmFtLnBsYW5pZmljYXRpb25fbmFtZS4kbW9kZWxcIlxuICAgICAgICAgICAgICA6aXRlbXM9XCJwbGFuaWZpY2F0aW9uc1wiXG4gICAgICAgICAgICAgIGl0ZW09XCJwbGFuaWZpY2F0aW9uX25hbWVcIlxuICAgICAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LnBhcmFtLnBsYW5pZmljYXRpb25fbmFtZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1jb2w+XG4gICAgICAgICAgPCEtLSBQbGFuaWZpY2F0aW9ucyAtLT5cbiAgICAgICAgPC92LXJvdz5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDwhLS0gUmVwb3J0cyBDb250ZW50IC0tPlxuICAgICAgICA8cmVwb3J0cy1jdXNjYSB2LWlmPVwicGFyYW0ucGxhbmlmaWNhdGlvbl9uYW1lID09ICdQbGFuIEN1c2NhdGzDoW4nXCIgLz5cbiAgICAgICAgPCEtLSBSZXBvcnRzIENvbnRlbnQgLS0+XG4gICAgICA8L3YtY2FyZD5cbiAgICA8L3YtY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyByZXF1aXJlZCwgbWluTGVuZ3RoIH0gZnJvbSBcInZ1ZWxpZGF0ZS9saWIvdmFsaWRhdG9yc1wiO1xuaW1wb3J0IFJlcG9ydHNDdXNjYSBmcm9tIFwiLi9SZXBvcnRzQ3VzY2EudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czogeyBSZXBvcnRzQ3VzY2EgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGxhbmlmaWNhdGlvbnM6IFtcbiAgICAgICAgeyBwbGFuaWZpY2F0aW9uX25hbWU6IFwiUGxhbiBDdXNjYXRsw6FuXCIgfSxcbiAgICAgICAgeyBwbGFuaWZpY2F0aW9uX25hbWU6IFwiUG9sw610aWNhIENyZWNlciBKdW50b3NcIiB9LFxuICAgICAgICB7IHBsYW5pZmljYXRpb25fbmFtZTogXCJQbGFuIENvbnRyb2wgVGVycml0b3JpYWxcIiB9LFxuICAgICAgICB7IHBsYW5pZmljYXRpb25fbmFtZTogXCJQbGFuIERlc2Fycm9sbG8gU29jaWFsXCIgfSxcbiAgICAgIF0sXG4gICAgICBwYXJhbToge1xuICAgICAgICBwbGFuaWZpY2F0aW9uX25hbWU6IFwiXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH0sXG5cbiAgdmFsaWRhdGlvbnM6IHtcbiAgICBwYXJhbToge1xuICAgICAgcGxhbmlmaWNhdGlvbl9uYW1lOiB7XG4gICAgICAgIHJlcXVpcmVkLFxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBtb3VudGVkKCkge30sXG5cbiAgbWV0aG9kczoge30sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgZGF0YS1hcHA+XG4gICAgPGFsZXJ0LXRpbWUtb3V0XG4gICAgICA6cmVkaXJlY3Q9XCJyZWRpcmVjdFNlc3Npb25GaW5pc2hlZFwiXG4gICAgICBAcmVkaXJlY3Q9XCJ1cGRhdGVUaW1lT3V0KCRldmVudClcIlxuICAgIC8+XG4gICAgPGFsZXJ0XG4gICAgICA6dGV4dD1cInRleHRBbGVydFwiXG4gICAgICA6ZXZlbnQ9XCJhbGVydEV2ZW50XCJcbiAgICAgIDpzaG93PVwic2hvd0FsZXJ0XCJcbiAgICAgIEBzaG93LWFsZXJ0PVwidXBkYXRlQWxlcnQoJGV2ZW50KVwiXG4gICAgICBjbGFzcz1cIm1iLTJcIlxuICAgIC8+XG5cbiAgICA8bG9hZGVyIHYtc2hvdz1cImxvYWRpbmdcIiAvPlxuICAgIDx2LXJvdyB2LWlmPVwiIWxvYWRpbmdcIiBjbGFzcz1cInB0LTRcIj5cbiAgICAgIDwhLS0gPGgzPlJlcG9ydGVzIFBsYW4gQ3VzY2F0bMOhbjwvaDM+IC0tPlxuICAgICAgPCEtLSBUeXBlIHJlcG9ydCAtLT5cbiAgICAgIDx2LWNvbCBjb2xzPVwiMTJcIiBzbT1cIjEyXCIgbWQ9XCI2XCIgb2Zmc2V0LW1kPVwiM1wiPlxuICAgICAgICA8YmFzZS1zZWxlY3RcbiAgICAgICAgICBsYWJlbD1cIlRpcG8gZGUgcmVwb3J0ZVwiXG4gICAgICAgICAgdi1tb2RlbC50cmltPVwiJHYucGFyYW1ldGVycy5yZXBvcnRUeXBlcy4kbW9kZWxcIlxuICAgICAgICAgIDppdGVtcz1cInJlcG9ydFR5cGVzXCJcbiAgICAgICAgICBpdGVtPVwidGV4dFwiXG4gICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5wYXJhbWV0ZXJzLnJlcG9ydFR5cGVzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdi1jb2w+XG5cbiAgICAgIDwhLS0gQXhpcyAtLT5cbiAgICAgIDx2LWNvbFxuICAgICAgICBjb2xzPVwiMTJcIlxuICAgICAgICBzbT1cIjEyXCJcbiAgICAgICAgbWQ9XCI2XCJcbiAgICAgICAgb2Zmc2V0LW1kPVwiM1wiXG4gICAgICAgIHYtaWY9XCJcbiAgICAgICAgICBwYXJhbWV0ZXJzLnJlcG9ydFR5cGVzICE9ICdSZXBvcnRlIGFjdW11bGFkbycgJiZcbiAgICAgICAgICBwYXJhbWV0ZXJzLnJlcG9ydFR5cGVzICE9ICdSZXBvcnRlIG1lbnN1YWwnXG4gICAgICAgIFwiXG4gICAgICA+XG4gICAgICAgIDxiYXNlLXNlbGVjdFxuICAgICAgICAgIGxhYmVsPVwiRWplc1wiXG4gICAgICAgICAgdi1tb2RlbC50cmltPVwiJHYucGFyYW1ldGVycy5heGlzX2Rlc2NyaXB0aW9uLiRtb2RlbFwiXG4gICAgICAgICAgOml0ZW1zPVwiYXhpc1wiXG4gICAgICAgICAgaXRlbT1cImF4aXNfZGVzY3JpcHRpb25cIlxuICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYucGFyYW1ldGVycy5heGlzX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdi1jb2w+XG4gICAgICA8IS0tIEF4aXMgLS0+XG5cbiAgICAgIDwhLS0gT3JnYW5pemF0aW9uYWwgVW5pdHMgLS0+XG4gICAgICA8di1jb2xcbiAgICAgICAgY29scz1cIjEyXCJcbiAgICAgICAgc209XCIxMlwiXG4gICAgICAgIG1kPVwiNlwiXG4gICAgICAgIG9mZnNldC1tZD1cIjNcIlxuICAgICAgICB2LWlmPVwicGFyYW1ldGVycy5yZXBvcnRUeXBlcyAhPSAnUmVwb3J0ZSBkZXNwYWNobydcIlxuICAgICAgPlxuICAgICAgICA8YmFzZS1zZWxlY3RcbiAgICAgICAgICBsYWJlbD1cIlVuaWRhZC9EaXJlY2Npw7NuXCJcbiAgICAgICAgICB2LW1vZGVsLnRyaW09XCIkdi5wYXJhbWV0ZXJzLm91X25hbWUuJG1vZGVsXCJcbiAgICAgICAgICA6aXRlbXM9XCJvcmdhbml6YXRpb25hbFVuaXRzXCJcbiAgICAgICAgICBpdGVtPVwib3VfbmFtZVwiXG4gICAgICAgICAgOnZhbGlkYXRpb249XCIkdi5wYXJhbWV0ZXJzLm91X25hbWVcIlxuICAgICAgICAvPlxuICAgICAgPC92LWNvbD5cbiAgICAgIDwhLS0gT3JnYW5pemF0aW9uYWwgVW5pdHMgLS0+XG5cbiAgICAgIDwhLS0gTW9udGggLS0+XG4gICAgICA8di1jb2xcbiAgICAgICAgY29scz1cIjEyXCJcbiAgICAgICAgc209XCIxMlwiXG4gICAgICAgIG1kPVwiNlwiXG4gICAgICAgIG9mZnNldC1tZD1cIjNcIlxuICAgICAgICB2LWlmPVwiXG4gICAgICAgICAgcGFyYW1ldGVycy5yZXBvcnRUeXBlcyAhPSAnUmVwb3J0ZSBhY3VtdWxhZG8nICYmXG4gICAgICAgICAgcGFyYW1ldGVycy5yZXBvcnRUeXBlcyAhPSAnUmVwb3J0ZSBkZXNwYWNobydcbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAgPGJhc2Utc2VsZWN0LXNlYXJjaFxuICAgICAgICAgIGxhYmVsPVwiTWVzXCJcbiAgICAgICAgICB2LW1vZGVsLnRyaW09XCIkdi5wYXJhbWV0ZXJzLm1vbnRoX25hbWUuJG1vZGVsXCJcbiAgICAgICAgICA6aXRlbXM9XCJtb250aHNcIlxuICAgICAgICAgIGl0ZW09XCJtb250aF9uYW1lXCJcbiAgICAgICAgICA6dmFsaWRhdGlvbj1cIiR2LnBhcmFtZXRlcnMubW9udGhfbmFtZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3YtY29sPlxuICAgICAgPCEtLSBNb250aCAtLT5cblxuICAgICAgPCEtLSBQZXJpb2RzIC0tPlxuICAgICAgPCEtLSA8di1jb2xcbiAgICAgICAgICAgIGNvbHM9XCIxMlwiXG4gICAgICAgICAgICBzbT1cIjEyXCJcbiAgICAgICAgICAgIG1kPVwiNlwiXG4gICAgICAgICAgICBvZmZzZXQtbWQ9XCIzXCJcbiAgICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgICAgcGFyYW1ldGVycy5yZXBvcnRUeXBlcyAhPSAnUmVwb3J0ZSBtZW5zdWFsJyAmJlxuICAgICAgICAgICAgICBwYXJhbWV0ZXJzLnJlcG9ydFR5cGVzICE9ICdSZXBvcnRlIGRlc3BhY2hvJ1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YmFzZS1zZWxlY3Qtc2VhcmNoXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGVyaW9kb1wiXG4gICAgICAgICAgICAgIHYtbW9kZWwudHJpbT1cIiR2LnBhcmFtZXRlcnMucGVyaW9kX25hbWUuJG1vZGVsXCJcbiAgICAgICAgICAgICAgOml0ZW1zPVwicGVyaW9kc1wiXG4gICAgICAgICAgICAgIGl0ZW09XCJwZXJpb2RfbmFtZVwiXG4gICAgICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYucGFyYW1ldGVycy5wZXJpb2RfbmFtZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvdi1jb2w+IC0tPlxuICAgICAgPCEtLSBQZXJpb2RzIC0tPlxuICAgICAgPCEtLSBTdGFydCBNb250aCAtLT5cbiAgICAgIDx2LWNvbFxuICAgICAgICBjb2xzPVwiMTJcIlxuICAgICAgICBzbT1cIjEyXCJcbiAgICAgICAgbWQ9XCI2XCJcbiAgICAgICAgb2Zmc2V0LW1kPVwiM1wiXG4gICAgICAgIHYtaWY9XCJcbiAgICAgICAgICBwYXJhbWV0ZXJzLnJlcG9ydFR5cGVzICE9ICdSZXBvcnRlIG1lbnN1YWwnICYmXG4gICAgICAgICAgcGFyYW1ldGVycy5yZXBvcnRUeXBlcyAhPSAnUmVwb3J0ZSBkZXNwYWNobydcbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAgPGJhc2Utc2VsZWN0LXNlYXJjaFxuICAgICAgICAgIGxhYmVsPVwiTWVzIGluaWNpYWxcIlxuICAgICAgICAgIHYtbW9kZWwudHJpbT1cIiR2LnBhcmFtZXRlcnMuc3RhcnRfbW9udGhfbmFtZS4kbW9kZWxcIlxuICAgICAgICAgIDppdGVtcz1cIm1vbnRoc1wiXG4gICAgICAgICAgaXRlbT1cIm1vbnRoX25hbWVcIlxuICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYucGFyYW1ldGVycy5zdGFydF9tb250aF9uYW1lXCJcbiAgICAgICAgLz5cbiAgICAgIDwvdi1jb2w+XG4gICAgICA8IS0tIFN0YXJ0IE1vbnRoIC0tPlxuICAgICAgPCEtLSBFbmQgTW9udGggLS0+XG4gICAgICA8di1jb2xcbiAgICAgICAgY29scz1cIjEyXCJcbiAgICAgICAgc209XCIxMlwiXG4gICAgICAgIG1kPVwiNlwiXG4gICAgICAgIG9mZnNldC1tZD1cIjNcIlxuICAgICAgICB2LWlmPVwiXG4gICAgICAgICAgcGFyYW1ldGVycy5yZXBvcnRUeXBlcyAhPSAnUmVwb3J0ZSBtZW5zdWFsJyAmJlxuICAgICAgICAgIHBhcmFtZXRlcnMucmVwb3J0VHlwZXMgIT0gJ1JlcG9ydGUgZGVzcGFjaG8nXG4gICAgICAgIFwiXG4gICAgICA+XG4gICAgICAgIDxiYXNlLXNlbGVjdC1zZWFyY2hcbiAgICAgICAgICBsYWJlbD1cIk1lcyBmaW5hbFwiXG4gICAgICAgICAgdi1tb2RlbC50cmltPVwiJHYucGFyYW1ldGVycy5lbmRfbW9udGhfbmFtZS4kbW9kZWxcIlxuICAgICAgICAgIDppdGVtcz1cIm1vbnRoc1wiXG4gICAgICAgICAgaXRlbT1cIm1vbnRoX25hbWVcIlxuICAgICAgICAgIDp2YWxpZGF0aW9uPVwiJHYucGFyYW1ldGVycy5lbmRfbW9udGhfbmFtZVwiXG4gICAgICAgIC8+XG4gICAgICA8L3YtY29sPlxuICAgICAgPCEtLSBFbmQgTW9udGggLS0+XG5cbiAgICAgIDwhLS0gR2VuZXJhdGUgcmVwb3J0IC0tPlxuICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIHNtPVwiNlwiIG1kPVwiNlwiIG9mZnNldC1tZD1cIjNcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8di1idG4gY2xhc3M9XCJidG4gYnRuLW5vcm1hbCB3LTEwMFwiIEBjbGljaz1cImdlbmVyYXRlUmVwb3J0KClcIj5cbiAgICAgICAgICBHZW5lcmFyIHJlcG9ydGVcbiAgICAgICAgPC92LWJ0bj5cbiAgICAgIDwvdi1jb2w+XG4gICAgICA8YWxlcnQtZGlhbG9nIDp0ZXh0PVwidGV4dFJlcG9ydERpYWxvZ1wiIDpkaWFsb2c9XCJyZXBvcnREaWFsb2dcIiAvPlxuICAgIDwvdi1yb3c+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlzQ3VzY2FBcGkgZnJvbSBcIi4uLy4uL2FwaXMvYXhpc0N1c2NhQXBpXCI7XG5pbXBvcnQgb3JnYW5pemF0aW9uYWxVbml0QXBpIGZyb20gXCIuLi8uLi9hcGlzL29yZ2FuaXphdGlvbmFsVW5pdEFwaVwiO1xuaW1wb3J0IG1vbnRoQXBpIGZyb20gXCIuLi8uLi9hcGlzL21vbnRoQXBpXCI7XG5pbXBvcnQgcGVyaW9kQXBpIGZyb20gXCIuLi8uLi9hcGlzL3BlcmlvZEFwaVwiO1xuaW1wb3J0IHsgcmVxdWlyZWQsIG1pbkxlbmd0aCwgbWF4TGVuZ3RoIH0gZnJvbSBcInZ1ZWxpZGF0ZS9saWIvdmFsaWRhdG9yc1wiO1xuaW1wb3J0IEFsZXJ0RGlhbG9nIGZyb20gXCIuLi9iYXNlLWNvbXBvbmVudHMvQWxlcnREaWFsb2cudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czogeyBBbGVydERpYWxvZyB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXBvcnRUeXBlczogW1xuICAgICAgICB7IHRleHQ6IFwiUmVwb3J0ZSBtZW5zdWFsXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIlJlcG9ydGUgYWN1bXVsYWRvXCIgfSxcbiAgICAgICAgeyB0ZXh0OiBcIlJlcG9ydGUgZGVzcGFjaG9cIiB9LFxuICAgICAgXSxcbiAgICAgIHBhcmFtZXRlcnM6IHtcbiAgICAgICAgYXhpc19kZXNjcmlwdGlvbjogXCJcIixcbiAgICAgICAgb3VfbmFtZTogXCJcIixcbiAgICAgICAgbW9udGhfbmFtZTogXCJcIixcbiAgICAgICAgc3RhcnRfbW9udGhfbmFtZTogXCJcIixcbiAgICAgICAgZW5kX21vbnRoX25hbWU6IFwiXCIsXG4gICAgICAgIHBlcmlvZF9uYW1lOiBcIlwiLFxuICAgICAgICByZXBvcnRUeXBlczogXCJSZXBvcnRlIG1lbnN1YWxcIixcbiAgICAgIH0sXG4gICAgICBheGlzOiBbXSxcbiAgICAgIG9yZ2FuaXphdGlvbmFsVW5pdHM6IFtdLFxuICAgICAgbW9udGhzOiBbXSxcbiAgICAgIHBlcmlvZHM6IFtdLFxuICAgICAgaXRlbXM6IFtdLFxuICAgICAgcmVkaXJlY3RTZXNzaW9uRmluaXNoZWQ6IGZhbHNlLFxuICAgICAgdGV4dEFsZXJ0OiBcIlwiLFxuICAgICAgYWxlcnRFdmVudDogXCJcIixcbiAgICAgIHNob3dBbGVydDogZmFsc2UsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHRleHRSZXBvcnREaWFsb2c6IFwiXCIsXG4gICAgICByZXBvcnREaWFsb2c6IGZhbHNlLFxuICAgIH07XG4gIH0sXG5cbiAgdmFsaWRhdGlvbnM6IHtcbiAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICBheGlzX2Rlc2NyaXB0aW9uOiB7XG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgfSxcbiAgICAgIG91X25hbWU6IHtcbiAgICAgICAgbWluTGVuZ3RoOiBtaW5MZW5ndGgoMSksXG4gICAgICB9LFxuICAgICAgbW9udGhfbmFtZToge1xuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcbiAgICAgIH0sXG4gICAgICBzdGFydF9tb250aF9uYW1lOiB7XG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgfSxcbiAgICAgIGVuZF9tb250aF9uYW1lOiB7XG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgfSxcbiAgICAgIHBlcmlvZF9uYW1lOiB7XG4gICAgICAgIG1pbkxlbmd0aDogbWluTGVuZ3RoKDEpLFxuICAgICAgfSxcbiAgICAgIHJlcG9ydFR5cGVzOiB7XG4gICAgICAgIHJlcXVpcmVkLFxuICAgICAgICBtaW5MZW5ndGg6IG1pbkxlbmd0aCgxKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBpbml0aWFsaXplKCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHJlcXVlc3RzID0gW1xuICAgICAgICBheGlzQ3VzY2FBcGkuZ2V0KCksXG4gICAgICAgIG9yZ2FuaXphdGlvbmFsVW5pdEFwaS5nZXQoKSxcbiAgICAgICAgbW9udGhBcGkucG9zdChcIi9tb250aHNBbGxvd2VkXCIpLFxuICAgICAgICBwZXJpb2RBcGkuZ2V0KCksXG4gICAgICBdO1xuXG4gICAgICBjb25zdCByZXNwb25zZXMgPSBhd2FpdCBQcm9taXNlLmFsbChyZXF1ZXN0cykuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlQWxlcnQodHJ1ZSwgXCJDYW1wb3Mgb2JsaWdhdG9yaW9zLlwiLCBcImZhaWxcIik7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlc3BvbnNlcykge1xuICAgICAgICB0aGlzLmF4aXMgPSByZXNwb25zZXNbMF0uZGF0YS5heGlzQ3VzY2FzO1xuICAgICAgICB0aGlzLmF4aXMudW5zaGlmdChcIkdlbmVyYWxcIik7XG4gICAgICAgIHRoaXMub3JnYW5pemF0aW9uYWxVbml0cyA9IHJlc3BvbnNlc1sxXS5kYXRhLm9yZ2FuaXphdGlvbmFsVW5pdHM7XG4gICAgICAgIHRoaXMubW9udGhzID0gcmVzcG9uc2VzWzJdLmRhdGEubW9udGhzQWxsb3dlZDtcbiAgICAgICAgdGhpcy5wZXJpb2RzID0gcmVzcG9uc2VzWzNdLmRhdGEucGVyaW9kcztcblxuICAgICAgICB0aGlzLnBhcmFtZXRlcnMuYXhpc19kZXNjcmlwdGlvbiA9IFwiR2VuZXJhbFwiO1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMub3VfbmFtZSA9IHRoaXMub3JnYW5pemF0aW9uYWxVbml0c1swXS5vdV9uYW1lO1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMubW9udGhfbmFtZSA9XG4gICAgICAgICAgdGhpcy5tb250aHNbbmV3IERhdGUoKS5nZXRNb250aCgpXS5tb250aF9uYW1lO1xuICAgICAgICB0aGlzLnBhcmFtZXRlcnMucGVyaW9kX25hbWUgPSB0aGlzLnBlcmlvZHNbMF0ucGVyaW9kX25hbWU7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICB1cGRhdGVUaW1lT3V0KGV2ZW50KSB7XG4gICAgICB0aGlzLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkID0gZXZlbnQ7XG4gICAgfSxcblxuICAgIGFzeW5jIGdlbmVyYXRlUmVwb3J0KCkge1xuICAgICAgdGhpcy4kdi4kdG91Y2goKTtcbiAgICAgIGlmICh0aGlzLiR2LiRpbnZhbGlkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoICh0aGlzLnBhcmFtZXRlcnMucmVwb3J0VHlwZXMpIHtcbiAgICAgICAgY2FzZSBcIlJlcG9ydGUgbWVuc3VhbFwiOlxuICAgICAgICAgIHRoaXMucmVwb3J0RGlhbG9nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnRleHRSZXBvcnREaWFsb2cgPSBcIkdlbmVyYW5kbyByZXBvcnRlIG1lbnN1YWxcIjtcbiAgICAgICAgICB0aGlzLnNob3dSZXBvcnQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlJlcG9ydGUgYWN1bXVsYWRvXCI6XG4gICAgICAgICAgdGhpcy5yZXBvcnREaWFsb2cgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudGV4dFJlcG9ydERpYWxvZyA9IFwiR2VuZXJhbmRvIHJlcG9ydGUgYWN1bXVsYWRvXCI7XG4gICAgICAgICAgdGhpcy5zaG93UmVwb3J0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJSZXBvcnRlIGRlc3BhY2hvXCI6XG4gICAgICAgICAgdGhpcy5yZXBvcnREaWFsb2cgPSB0cnVlO1xuICAgICAgICAgIHRoaXMudGV4dFJlcG9ydERpYWxvZyA9IFwiR2VuZXJhbmRvIHJlcG9ydGUgZGVzcGFjaG9cIjtcbiAgICAgICAgICB0aGlzLnNob3dSZXBvcnQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXN5bmMgc2hvd1JlcG9ydCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFyYW1ldGVycyk7XG4gICAgICBpZiAodGhpcy5wYXJhbWV0ZXJzLnJlcG9ydFR5cGVzID09IFwiUmVwb3J0ZSBtZW5zdWFsXCIpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd2luZG93Lm9wZW4oXG4gICAgICAgICAgICBgL3BkZi9tZW5zdWFsP291X25hbWU9JHt0aGlzLnBhcmFtZXRlcnMub3VfbmFtZX0mbW9udGhfbmFtZT0ke3RoaXMucGFyYW1ldGVycy5tb250aF9uYW1lfSZyZXBvcnRUeXBlcz0ke3RoaXMucGFyYW1ldGVycy5yZXBvcnRUeXBlc31gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlcG9ydERpYWxvZyA9IGZhbHNlO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucGFyYW1ldGVycy5yZXBvcnRUeXBlcyA9PSBcIlJlcG9ydGUgYWN1bXVsYWRvXCIpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd2luZG93Lm9wZW4oXG4gICAgICAgICAgICBgL3BkZi9hY3VtdWxhZG8/b3VfbmFtZT0ke3RoaXMucGFyYW1ldGVycy5vdV9uYW1lfSZzdGFydF9tb250aD0ke3RoaXMucGFyYW1ldGVycy5zdGFydF9tb250aF9uYW1lfSZlbmRfbW9udGg9JHt0aGlzLnBhcmFtZXRlcnMuZW5kX21vbnRoX25hbWV9JnJlcG9ydFR5cGVzPSR7dGhpcy5wYXJhbWV0ZXJzLnJlcG9ydFR5cGVzfWBcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMucmVwb3J0RGlhbG9nID0gZmFsc2U7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wYXJhbWV0ZXJzLnJlcG9ydFR5cGVzID09IFwiUmVwb3J0ZSBkZXNwYWNob1wiKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5vcGVuKFxuICAgICAgICAgICAgYC9wZGYvZGVzcGFjaG8/YXhpc19kZXNjcmlwdGlvbj0ke3RoaXMucGFyYW1ldGVycy5heGlzX2Rlc2NyaXB0aW9ufSZyZXBvcnRUeXBlcz0ke3RoaXMucGFyYW1ldGVycy5yZXBvcnRUeXBlc31gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnJlcG9ydERpYWxvZyA9IGZhbHNlO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVBbGVydChzaG93ID0gZmFsc2UsIHRleHQgPSBcIkFsZXJ0YVwiLCBldmVudCA9IFwic3VjY2Vzc1wiKSB7XG4gICAgICB0aGlzLnRleHRBbGVydCA9IHRleHQ7XG4gICAgICB0aGlzLmFsZXJ0RXZlbnQgPSBldmVudDtcbiAgICAgIHRoaXMuc2hvd0FsZXJ0ID0gc2hvdztcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1kaWFsb2dcIixcbiAgICB7XG4gICAgICBhdHRyczogeyB3aWR0aDogXCI1MDBcIiwgcGVyc2lzdGVudDogXCJcIiB9LFxuICAgICAgbW9kZWw6IHtcbiAgICAgICAgdmFsdWU6IF92bS5kaWFsb2csXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgX3ZtLmRpYWxvZyA9ICQkdlxuICAgICAgICB9LFxuICAgICAgICBleHByZXNzaW9uOiBcImRpYWxvZ1wiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY2FyZFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInYtY2FyZC10ZXh0XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwibG9hZGVyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGVDYXJkKSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBcImRhdGEtYXBwXCI6IFwiXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInYtY29udGFpbmVyXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidi1jYXJkXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInAtNFwiLCBzdGF0aWNTdHlsZTogeyBcImJvcmRlci1yYWRpdXNcIjogXCIxNXB4XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJSZXBvcnRlcyBcIiArIF92bS5fcyhfdm0ucGFyYW0ucGxhbmlmaWNhdGlvbl9uYW1lKSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInYtcm93XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZmZzZXQtbWRcIjogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVGlwbyBkZSBwcm95ZWN0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLnBsYW5pZmljYXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBcInBsYW5pZmljYXRpb25fbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBfdm0uJHYucGFyYW0ucGxhbmlmaWNhdGlvbl9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uJHYucGFyYW0ucGxhbmlmaWNhdGlvbl9uYW1lLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5wYXJhbS5wbGFuaWZpY2F0aW9uX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mICQkdiA9PT0gXCJzdHJpbmdcIiA/ICQkdi50cmltKCkgOiAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHYucGFyYW0ucGxhbmlmaWNhdGlvbl9uYW1lLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnBhcmFtLnBsYW5pZmljYXRpb25fbmFtZSA9PSBcIlBsYW4gQ3VzY2F0bMOhblwiXG4gICAgICAgICAgICAgICAgPyBfYyhcInJlcG9ydHMtY3VzY2FcIilcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2NcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBhdHRyczogeyBcImRhdGEtYXBwXCI6IFwiXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiYWxlcnQtdGltZS1vdXRcIiwge1xuICAgICAgICBhdHRyczogeyByZWRpcmVjdDogX3ZtLnJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgcmVkaXJlY3Q6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVGltZU91dCgkZXZlbnQpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYWxlcnRcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdGV4dDogX3ZtLnRleHRBbGVydCxcbiAgICAgICAgICBldmVudDogX3ZtLmFsZXJ0RXZlbnQsXG4gICAgICAgICAgc2hvdzogX3ZtLnNob3dBbGVydCxcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcInNob3ctYWxlcnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVBbGVydCgkZXZlbnQpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibG9hZGVyXCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubG9hZGluZyxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibG9hZGluZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhX3ZtLmxvYWRpbmdcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidi1yb3dcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHQtNFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbHM6IFwiMTJcIiwgc206IFwiMTJcIiwgbWQ6IFwiNlwiLCBcIm9mZnNldC1tZFwiOiBcIjNcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiYXNlLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVGlwbyBkZSByZXBvcnRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5yZXBvcnRUeXBlcyxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBfdm0uJHYucGFyYW1ldGVycy5yZXBvcnRUeXBlcyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLiR2LnBhcmFtZXRlcnMucmVwb3J0VHlwZXMuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LnBhcmFtZXRlcnMucmVwb3J0VHlwZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiAkJHYgPT09IFwic3RyaW5nXCIgPyAkJHYudHJpbSgpIDogJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiR2LnBhcmFtZXRlcnMucmVwb3J0VHlwZXMuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnBhcmFtZXRlcnMucmVwb3J0VHlwZXMgIT0gXCJSZXBvcnRlIGFjdW11bGFkb1wiICYmXG4gICAgICAgICAgICAgIF92bS5wYXJhbWV0ZXJzLnJlcG9ydFR5cGVzICE9IFwiUmVwb3J0ZSBtZW5zdWFsXCJcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sczogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc206IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2Zmc2V0LW1kXCI6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJhc2Utc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkVqZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5heGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBcImF4aXNfZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogX3ZtLiR2LnBhcmFtZXRlcnMuYXhpc19kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLiR2LnBhcmFtZXRlcnMuYXhpc19kZXNjcmlwdGlvbi4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYucGFyYW1ldGVycy5heGlzX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiAkJHYgPT09IFwic3RyaW5nXCIgPyAkJHYudHJpbSgpIDogJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiR2LnBhcmFtZXRlcnMuYXhpc19kZXNjcmlwdGlvbi4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ucGFyYW1ldGVycy5yZXBvcnRUeXBlcyAhPSBcIlJlcG9ydGUgZGVzcGFjaG9cIlxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZmZzZXQtbWRcIjogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVW5pZGFkL0RpcmVjY2nDs25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5vcmdhbml6YXRpb25hbFVuaXRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBcIm91X25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjogX3ZtLiR2LnBhcmFtZXRlcnMub3VfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLiR2LnBhcmFtZXRlcnMub3VfbmFtZS4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYucGFyYW1ldGVycy5vdV9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiAkJHYgPT09IFwic3RyaW5nXCIgPyAkJHYudHJpbSgpIDogJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiR2LnBhcmFtZXRlcnMub3VfbmFtZS4kbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ucGFyYW1ldGVycy5yZXBvcnRUeXBlcyAhPSBcIlJlcG9ydGUgYWN1bXVsYWRvXCIgJiZcbiAgICAgICAgICAgICAgX3ZtLnBhcmFtZXRlcnMucmVwb3J0VHlwZXMgIT0gXCJSZXBvcnRlIGRlc3BhY2hvXCJcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sczogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc206IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2Zmc2V0LW1kXCI6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJhc2Utc2VsZWN0LXNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJNZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IF92bS5tb250aHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IFwibW9udGhfbmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiBfdm0uJHYucGFyYW1ldGVycy5tb250aF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uJHYucGFyYW1ldGVycy5tb250aF9uYW1lLiRtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kdi5wYXJhbWV0ZXJzLm1vbnRoX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mICQkdiA9PT0gXCJzdHJpbmdcIiA/ICQkdi50cmltKCkgOiAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiJHYucGFyYW1ldGVycy5tb250aF9uYW1lLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5wYXJhbWV0ZXJzLnJlcG9ydFR5cGVzICE9IFwiUmVwb3J0ZSBtZW5zdWFsXCIgJiZcbiAgICAgICAgICAgICAgX3ZtLnBhcmFtZXRlcnMucmVwb3J0VHlwZXMgIT0gXCJSZXBvcnRlIGRlc3BhY2hvXCJcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInYtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sczogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc206IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1kOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2Zmc2V0LW1kXCI6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJhc2Utc2VsZWN0LXNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJNZXMgaW5pY2lhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLm1vbnRocyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogXCJtb250aF9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IF92bS4kdi5wYXJhbWV0ZXJzLnN0YXJ0X21vbnRoX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS4kdi5wYXJhbWV0ZXJzLnN0YXJ0X21vbnRoX25hbWUuJG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiR2LnBhcmFtZXRlcnMuc3RhcnRfbW9udGhfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgJCR2ID09PSBcInN0cmluZ1wiID8gJCR2LnRyaW0oKSA6ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIkdi5wYXJhbWV0ZXJzLnN0YXJ0X21vbnRoX25hbWUuJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnBhcmFtZXRlcnMucmVwb3J0VHlwZXMgIT0gXCJSZXBvcnRlIG1lbnN1YWxcIiAmJlxuICAgICAgICAgICAgICBfdm0ucGFyYW1ldGVycy5yZXBvcnRUeXBlcyAhPSBcIlJlcG9ydGUgZGVzcGFjaG9cIlxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWQ6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvZmZzZXQtbWRcIjogXCIzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYmFzZS1zZWxlY3Qtc2VhcmNoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1lcyBmaW5hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogX3ZtLm1vbnRocyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogXCJtb250aF9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IF92bS4kdi5wYXJhbWV0ZXJzLmVuZF9tb250aF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uJHYucGFyYW1ldGVycy5lbmRfbW9udGhfbmFtZS4kbW9kZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHYucGFyYW1ldGVycy5lbmRfbW9udGhfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJG1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgJCR2ID09PSBcInN0cmluZ1wiID8gJCR2LnRyaW0oKSA6ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIkdi5wYXJhbWV0ZXJzLmVuZF9tb250aF9uYW1lLiRtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidi1jb2xcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBjb2xzOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgIHNtOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgbWQ6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICBcIm9mZnNldC1tZFwiOiBcIjNcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidi1idG5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tbm9ybWFsIHctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2VuZXJhdGVSZXBvcnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBHZW5lcmFyIHJlcG9ydGVcXG4gICAgICBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImFsZXJ0LWRpYWxvZ1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLnRleHRSZXBvcnREaWFsb2csIGRpYWxvZzogX3ZtLnJlcG9ydERpYWxvZyB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBheGlzQ3VzY2FBcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IFwiL2FwaS9heGlzQ3VzY2FcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBheGlzQ3VzY2FBcGk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IG1vbnRoQXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBcIi9hcGkvbW9udGhcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb250aEFwaTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3Qgb3JnYW5pemF0aW9uYWxVbml0QXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiBcIi9hcGkvb3JnYW5pemF0aW9uYWxVbml0XCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgb3JnYW5pemF0aW9uYWxVbml0QXBpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCBwZXJpb2RBcGkgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IFwiL2FwaS9wZXJpb2RcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBwZXJpb2RBcGk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BbGVydERpYWxvZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDBhY2ZmYTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWxlcnREaWFsb2cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BbGVydERpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEluZm9ybcOhdGljYVxcXFxEb2N1bWVudHNcXFxccHJvamVjdHNNQ1xcXFxTSVNFLUNVU0NBLTIwMjItbWFpblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0MGFjZmZhOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MGFjZmZhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MGFjZmZhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWxlcnREaWFsb2cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQwYWNmZmE4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQwYWNmZmE4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudHMvQWxlcnREaWFsb2cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9SZXBvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWEzYjExNWVjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1JlcG9ydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1JlcG9ydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXEluZm9ybcOhdGljYVxcXFxEb2N1bWVudHNcXFxccHJvamVjdHNNQ1xcXFxTSVNFLUNVU0NBLTIwMjItbWFpblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhM2IxMTVlYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhM2IxMTVlYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhM2IxMTVlYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUmVwb3J0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hM2IxMTVlYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhM2IxMTVlYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvY3VzY2F0bGFuL1JlcG9ydC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlcG9ydHNDdXNjYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjAxODAzMzYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmVwb3J0c0N1c2NhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUmVwb3J0c0N1c2NhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSW5mb3Jtw6F0aWNhXFxcXERvY3VtZW50c1xcXFxwcm9qZWN0c01DXFxcXFNJU0UtQ1VTQ0EtMjAyMi1tYWluXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzYwMTgwMzM2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYwMTgwMzM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYwMTgwMzM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SZXBvcnRzQ3VzY2EudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwMTgwMzM2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYwMTgwMzM2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9jdXNjYXRsYW4vUmVwb3J0c0N1c2NhLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbGVydERpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNS51c2VbMF0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BbGVydERpYWxvZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVwb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcG9ydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTUudXNlWzBdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVwb3J0c0N1c2NhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcG9ydHNDdXNjYS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcG9ydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTNiMTE1ZWMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC01LnVzZVswXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlcG9ydHNDdXNjYS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjAxODAzMzYmXCIiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnYWxwaGEnLCAvXlthLXpBLVpdKiQvKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2FscGhhTnVtJywgL15bYS16QS1aMC05XSokLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWxpZGF0b3JzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbGlkYXRvcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdhbmQnXG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvcnMubGVuZ3RoID4gMCAmJiB2YWxpZGF0b3JzLnJlZHVjZShmdW5jdGlvbiAodmFsaWQsIGZuKSB7XG4gICAgICByZXR1cm4gdmFsaWQgJiYgZm4uYXBwbHkoX3RoaXMsIGFyZ3MpO1xuICAgIH0sIHRydWUpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobWluLCBtYXgpIHtcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnYmV0d2VlbicsXG4gICAgbWluOiBtaW4sXG4gICAgbWF4OiBtYXhcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSB8fCAoIS9cXHMvLnRlc3QodmFsdWUpIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgJiYgK21pbiA8PSArdmFsdWUgJiYgK21heCA+PSArdmFsdWU7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcSA9IGV4cG9ydHMucmVnZXggPSBleHBvcnRzLnJlZiA9IGV4cG9ydHMubGVuID0gdm9pZCAwO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFBhcmFtc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfd2l0aFBhcmFtcy5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF93aXRoUGFyYW1zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vd2l0aFBhcmFtc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxudmFyIHJlcSA9IGZ1bmN0aW9uIHJlcSh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiAhIXZhbHVlLmxlbmd0aDtcblxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gIWlzTmFOKHZhbHVlLmdldFRpbWUoKSk7XG4gIH1cblxuICBpZiAoX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgXyBpbiB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuICEhU3RyaW5nKHZhbHVlKS5sZW5ndGg7XG59O1xuXG5leHBvcnRzLnJlcSA9IHJlcTtcblxudmFyIGxlbiA9IGZ1bmN0aW9uIGxlbih2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZS5sZW5ndGg7XG5cbiAgaWYgKF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIFN0cmluZyh2YWx1ZSkubGVuZ3RoO1xufTtcblxuZXhwb3J0cy5sZW4gPSBsZW47XG5cbnZhciByZWYgPSBmdW5jdGlvbiByZWYocmVmZXJlbmNlLCB2bSwgcGFyZW50Vm0pIHtcbiAgcmV0dXJuIHR5cGVvZiByZWZlcmVuY2UgPT09ICdmdW5jdGlvbicgPyByZWZlcmVuY2UuY2FsbCh2bSwgcGFyZW50Vm0pIDogcGFyZW50Vm1bcmVmZXJlbmNlXTtcbn07XG5cbmV4cG9ydHMucmVmID0gcmVmO1xuXG52YXIgcmVnZXggPSBmdW5jdGlvbiByZWdleCh0eXBlLCBleHByKSB7XG4gIHJldHVybiAoMCwgX3dpdGhQYXJhbXMuZGVmYXVsdCkoe1xuICAgIHR5cGU6IHR5cGVcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICFyZXEodmFsdWUpIHx8IGV4cHIudGVzdCh2YWx1ZSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5yZWdleCA9IHJlZ2V4OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdkZWNpbWFsJywgL15bLV0/XFxkKihcXC5cXGQrKT8kLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIGVtYWlsUmVnZXggPSAvXig/OltBLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bQS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSp8XCIoPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2ZdfFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKlwiKUAoPzooPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XXsyLH0oPzpbYS16MC05LV0qW2EtejAtOV0pP3xcXFsoPzooPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldP3xbYS16MC05LV0qW2EtejAtOV06KD86W1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4MjEtXFx4NWFcXHg1My1cXHg3Zl18XFxcXFtcXHgwMS1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHg3Zl0pKylcXF0pJC9pO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NvbW1vbi5yZWdleCkoJ2VtYWlsJywgZW1haWxSZWdleCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhbHBoYVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYWxwaGEuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhbHBoYU51bVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYWxwaGFOdW0uZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhbmRcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2FuZC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImJldHdlZW5cIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2JldHdlZW4uZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNpbWFsXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9kZWNpbWFsLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZW1haWxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2VtYWlsLmRlZmF1bHQ7XG4gIH1cbn0pO1xuZXhwb3J0cy5oZWxwZXJzID0gdm9pZCAwO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaW50ZWdlclwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZWdlci5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlwQWRkcmVzc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaXBBZGRyZXNzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWFjQWRkcmVzc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWFjQWRkcmVzcy5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm1heExlbmd0aFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWF4TGVuZ3RoLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWF4VmFsdWVcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21heFZhbHVlLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWluTGVuZ3RoXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9taW5MZW5ndGguZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJtaW5WYWx1ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfbWluVmFsdWUuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJub3RcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX25vdC5kZWZhdWx0O1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm51bWVyaWNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX251bWVyaWMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJvclwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfb3IuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZXF1aXJlZFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcmVxdWlyZWQuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJyZXF1aXJlZElmXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9yZXF1aXJlZElmLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicmVxdWlyZWRVbmxlc3NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3JlcXVpcmVkVW5sZXNzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwic2FtZUFzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9zYW1lQXMuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ1cmxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3VybC5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9hbHBoYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYWxwaGFcIikpO1xuXG52YXIgX2FscGhhTnVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9hbHBoYU51bVwiKSk7XG5cbnZhciBfbnVtZXJpYyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbnVtZXJpY1wiKSk7XG5cbnZhciBfYmV0d2VlbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYmV0d2VlblwiKSk7XG5cbnZhciBfZW1haWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2VtYWlsXCIpKTtcblxudmFyIF9pcEFkZHJlc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2lwQWRkcmVzc1wiKSk7XG5cbnZhciBfbWFjQWRkcmVzcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWFjQWRkcmVzc1wiKSk7XG5cbnZhciBfbWF4TGVuZ3RoID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9tYXhMZW5ndGhcIikpO1xuXG52YXIgX21pbkxlbmd0aCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWluTGVuZ3RoXCIpKTtcblxudmFyIF9yZXF1aXJlZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmVxdWlyZWRcIikpO1xuXG52YXIgX3JlcXVpcmVkSWYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlcXVpcmVkSWZcIikpO1xuXG52YXIgX3JlcXVpcmVkVW5sZXNzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yZXF1aXJlZFVubGVzc1wiKSk7XG5cbnZhciBfc2FtZUFzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zYW1lQXNcIikpO1xuXG52YXIgX3VybCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXJsXCIpKTtcblxudmFyIF9vciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vb3JcIikpO1xuXG52YXIgX2FuZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYW5kXCIpKTtcblxudmFyIF9ub3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL25vdFwiKSk7XG5cbnZhciBfbWluVmFsdWUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL21pblZhbHVlXCIpKTtcblxudmFyIF9tYXhWYWx1ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbWF4VmFsdWVcIikpO1xuXG52YXIgX2ludGVnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2ludGVnZXJcIikpO1xuXG52YXIgX2RlY2ltYWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2RlY2ltYWxcIikpO1xuXG52YXIgaGVscGVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL2NvbW1vblwiKSk7XG5cbmV4cG9ydHMuaGVscGVycyA9IGhlbHBlcnM7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZShub2RlSW50ZXJvcCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZUJhYmVsSW50ZXJvcCA9IG5ldyBXZWFrTWFwKCk7IHZhciBjYWNoZU5vZGVJbnRlcm9wID0gbmV3IFdlYWtNYXAoKTsgcmV0dXJuIChfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApIHsgcmV0dXJuIG5vZGVJbnRlcm9wID8gY2FjaGVOb2RlSW50ZXJvcCA6IGNhY2hlQmFiZWxJbnRlcm9wOyB9KShub2RlSW50ZXJvcCk7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqLCBub2RlSW50ZXJvcCkgeyBpZiAoIW5vZGVJbnRlcm9wICYmIG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUobm9kZUludGVyb3ApOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChrZXkgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY29tbW9uLnJlZ2V4KSgnaW50ZWdlcicsIC8oXlswLTldKiQpfCheLVswLTldKyQpLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICB0eXBlOiAnaXBBZGRyZXNzJ1xufSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICghKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIG5pYmJsZXMgPSB2YWx1ZS5zcGxpdCgnLicpO1xuICByZXR1cm4gbmliYmxlcy5sZW5ndGggPT09IDQgJiYgbmliYmxlcy5ldmVyeShuaWJibGVWYWxpZCk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbnZhciBuaWJibGVWYWxpZCA9IGZ1bmN0aW9uIG5pYmJsZVZhbGlkKG5pYmJsZSkge1xuICBpZiAobmliYmxlLmxlbmd0aCA+IDMgfHwgbmliYmxlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChuaWJibGVbMF0gPT09ICcwJyAmJiBuaWJibGUgIT09ICcwJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICghbmliYmxlLm1hdGNoKC9eXFxkKyQvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBudW1lcmljID0gK25pYmJsZSB8IDA7XG4gIHJldHVybiBudW1lcmljID49IDAgJiYgbnVtZXJpYyA8PSAyNTU7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIHZhciBzZXBhcmF0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICc6JztcbiAgcmV0dXJuICgwLCBfY29tbW9uLndpdGhQYXJhbXMpKHtcbiAgICB0eXBlOiAnbWFjQWRkcmVzcydcbiAgfSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCEoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgcGFydHMgPSB0eXBlb2Ygc2VwYXJhdG9yID09PSAnc3RyaW5nJyAmJiBzZXBhcmF0b3IgIT09ICcnID8gdmFsdWUuc3BsaXQoc2VwYXJhdG9yKSA6IHZhbHVlLmxlbmd0aCA9PT0gMTIgfHwgdmFsdWUubGVuZ3RoID09PSAxNiA/IHZhbHVlLm1hdGNoKC8uezJ9L2cpIDogbnVsbDtcbiAgICByZXR1cm4gcGFydHMgIT09IG51bGwgJiYgKHBhcnRzLmxlbmd0aCA9PT0gNiB8fCBwYXJ0cy5sZW5ndGggPT09IDgpICYmIHBhcnRzLmV2ZXJ5KGhleFZhbGlkKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxudmFyIGhleFZhbGlkID0gZnVuY3Rpb24gaGV4VmFsaWQoaGV4KSB7XG4gIHJldHVybiBoZXgudG9Mb3dlckNhc2UoKS5tYXRjaCgvXlswLTlhLWZdezJ9JC8pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KGxlbmd0aCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtYXhMZW5ndGgnLFxuICAgIG1heDogbGVuZ3RoXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKDAsIF9jb21tb24ubGVuKSh2YWx1ZSkgPD0gbGVuZ3RoO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobWF4KSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21heFZhbHVlJyxcbiAgICBtYXg6IG1heFxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICghL1xccy8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSAmJiArdmFsdWUgPD0gK21heDtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KGxlbmd0aCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdtaW5MZW5ndGgnLFxuICAgIG1pbjogbGVuZ3RoXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAhKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgfHwgKDAsIF9jb21tb24ubGVuKSh2YWx1ZSkgPj0gbGVuZ3RoO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQobWluKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ21pblZhbHVlJyxcbiAgICBtaW46IG1pblxuICB9LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICghL1xccy8udGVzdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSAmJiArdmFsdWUgPj0gK21pbjtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jb21tb24gPSByZXF1aXJlKFwiLi9jb21tb25cIik7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHZhbGlkYXRvcikge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdub3QnXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSwgdm0pIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlcSkodmFsdWUpIHx8ICF2YWxpZGF0b3IuY2FsbCh0aGlzLCB2YWx1ZSwgdm0pO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCdudW1lcmljJywgL15bMC05XSokLyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWxpZGF0b3JzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbGlkYXRvcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdvcidcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdG9ycy5sZW5ndGggPiAwICYmIHZhbGlkYXRvcnMucmVkdWNlKGZ1bmN0aW9uICh2YWxpZCwgZm4pIHtcbiAgICAgIHJldHVybiB2YWxpZCB8fCBmbi5hcHBseShfdGhpcywgYXJncyk7XG4gICAgfSwgZmFsc2UpO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICB0eXBlOiAncmVxdWlyZWQnXG59LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gKDAsIF9jb21tb24ucmVxKSh2YWx1ZS50cmltKCkpO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfY29tbW9uLnJlcSkodmFsdWUpO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQocHJvcCkge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdyZXF1aXJlZElmJyxcbiAgICBwcm9wOiBwcm9wXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSwgcGFyZW50Vm0pIHtcbiAgICByZXR1cm4gKDAsIF9jb21tb24ucmVmKShwcm9wLCB0aGlzLCBwYXJlbnRWbSkgPyAoMCwgX2NvbW1vbi5yZXEpKHZhbHVlKSA6IHRydWU7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY29tbW9uID0gcmVxdWlyZShcIi4vY29tbW9uXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBmdW5jdGlvbiBfZGVmYXVsdChwcm9wKSB7XG4gIHJldHVybiAoMCwgX2NvbW1vbi53aXRoUGFyYW1zKSh7XG4gICAgdHlwZTogJ3JlcXVpcmVkVW5sZXNzJyxcbiAgICBwcm9wOiBwcm9wXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSwgcGFyZW50Vm0pIHtcbiAgICByZXR1cm4gISgwLCBfY29tbW9uLnJlZikocHJvcCwgdGhpcywgcGFyZW50Vm0pID8gKDAsIF9jb21tb24ucmVxKSh2YWx1ZSkgOiB0cnVlO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoZXF1YWxUbykge1xuICByZXR1cm4gKDAsIF9jb21tb24ud2l0aFBhcmFtcykoe1xuICAgIHR5cGU6ICdzYW1lQXMnLFxuICAgIGVxOiBlcXVhbFRvXG4gIH0sIGZ1bmN0aW9uICh2YWx1ZSwgcGFyZW50Vm0pIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICgwLCBfY29tbW9uLnJlZikoZXF1YWxUbywgdGhpcywgcGFyZW50Vm0pO1xuICB9KTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NvbW1vbiA9IHJlcXVpcmUoXCIuL2NvbW1vblwiKTtcblxudmFyIHVybFJlZ2V4ID0gL14oPzooPzooPzpodHRwcz98ZnRwKTopP1xcL1xcLykoPzpcXFMrKD86OlxcUyopP0ApPyg/Oig/ISg/OjEwfDEyNykoPzpcXC5cXGR7MSwzfSl7M30pKD8hKD86MTY5XFwuMjU0fDE5MlxcLjE2OCkoPzpcXC5cXGR7MSwzfSl7Mn0pKD8hMTcyXFwuKD86MVs2LTldfDJcXGR8M1swLTFdKSg/OlxcLlxcZHsxLDN9KXsyfSkoPzpbMS05XVxcZD98MVxcZFxcZHwyWzAxXVxcZHwyMlswLTNdKSg/OlxcLig/OjE/XFxkezEsMn18MlswLTRdXFxkfDI1WzAtNV0pKXsyfSg/OlxcLig/OlsxLTldXFxkP3wxXFxkXFxkfDJbMC00XVxcZHwyNVswLTRdKSl8KD86KD86W2EtejAtOVxcdTAwYTEtXFx1ZmZmZl1bYS16MC05XFx1MDBhMS1cXHVmZmZmXy1dezAsNjJ9KT9bYS16MC05XFx1MDBhMS1cXHVmZmZmXVxcLikrKD86W2EtelxcdTAwYTEtXFx1ZmZmZl17Mix9XFwuPykpKD86OlxcZHsyLDV9KT8oPzpbLz8jXVxcUyopPyQvaTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jb21tb24ucmVnZXgpKCd1cmwnLCB1cmxSZWdleCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIHdpdGhQYXJhbXMgPSBwcm9jZXNzLmVudi5CVUlMRCA9PT0gJ3dlYicgPyByZXF1aXJlKCcuL3dpdGhQYXJhbXNCcm93c2VyJykud2l0aFBhcmFtcyA6IHJlcXVpcmUoJy4vcGFyYW1zJykud2l0aFBhcmFtcztcbnZhciBfZGVmYXVsdCA9IHdpdGhQYXJhbXM7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMud2l0aFBhcmFtcyA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG52YXIgcm9vdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB7fTtcblxudmFyIGZha2VXaXRoUGFyYW1zID0gZnVuY3Rpb24gZmFrZVdpdGhQYXJhbXMocGFyYW1zT3JDbG9zdXJlLCBtYXliZVZhbGlkYXRvcikge1xuICBpZiAoX3R5cGVvZihwYXJhbXNPckNsb3N1cmUpID09PSAnb2JqZWN0JyAmJiBtYXliZVZhbGlkYXRvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG1heWJlVmFsaWRhdG9yO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtc09yQ2xvc3VyZShmdW5jdGlvbiAoKSB7fSk7XG59O1xuXG52YXIgd2l0aFBhcmFtcyA9IHJvb3QudnVlbGlkYXRlID8gcm9vdC52dWVsaWRhdGUud2l0aFBhcmFtcyA6IGZha2VXaXRoUGFyYW1zO1xuZXhwb3J0cy53aXRoUGFyYW1zID0gd2l0aFBhcmFtczsiXSwibmFtZXMiOlsiZGF0YSIsInRpdGxlQ2FyZCIsInRvdGFsRG90cyIsImNvdW50ZXJEb3RzIiwidGV4dERvdHMiLCJpbnRlcnZhbCIsInByb3BzIiwiZGlhbG9nIiwidHlwZSIsInRleHQiLCJpbnRlcnZhbFRpbWUiLCJtb3VudGVkIiwidXBkYXRlIiwid2luZG93IiwibWV0aG9kcyIsImludGVydmFsRG90cyIsImNvbXBvbmVudHMiLCJSZXBvcnRzQ3VzY2EiLCJwbGFuaWZpY2F0aW9ucyIsInBsYW5pZmljYXRpb25fbmFtZSIsInBhcmFtIiwidmFsaWRhdGlvbnMiLCJyZXF1aXJlZCIsIm1pbkxlbmd0aCIsIkFsZXJ0RGlhbG9nIiwicmVwb3J0VHlwZXMiLCJwYXJhbWV0ZXJzIiwiYXhpc19kZXNjcmlwdGlvbiIsIm91X25hbWUiLCJtb250aF9uYW1lIiwic3RhcnRfbW9udGhfbmFtZSIsImVuZF9tb250aF9uYW1lIiwicGVyaW9kX25hbWUiLCJheGlzIiwib3JnYW5pemF0aW9uYWxVbml0cyIsIm1vbnRocyIsInBlcmlvZHMiLCJpdGVtcyIsInJlZGlyZWN0U2Vzc2lvbkZpbmlzaGVkIiwidGV4dEFsZXJ0IiwiYWxlcnRFdmVudCIsInNob3dBbGVydCIsImxvYWRpbmciLCJ0ZXh0UmVwb3J0RGlhbG9nIiwicmVwb3J0RGlhbG9nIiwiaW5pdGlhbGl6ZSIsInJlcXVlc3RzIiwiYXhpc0N1c2NhQXBpIiwib3JnYW5pemF0aW9uYWxVbml0QXBpIiwibW9udGhBcGkiLCJwZXJpb2RBcGkiLCJQcm9taXNlIiwicmVzcG9uc2VzIiwidXBkYXRlVGltZU91dCIsImV2ZW50IiwiZ2VuZXJhdGVSZXBvcnQiLCJzaG93UmVwb3J0IiwiY29uc29sZSIsInNldFRpbWVvdXQiLCJ1cGRhdGVBbGVydCIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJhdHRycyIsIndpZHRoIiwicGVyc2lzdGVudCIsIm1vZGVsIiwidmFsdWUiLCJjYWxsYmFjayIsIiQkdiIsImV4cHJlc3Npb24iLCJfdiIsInN0YXRpY0NsYXNzIiwiX3MiLCJzdGF0aWNSZW5kZXJGbnMiLCJfd2l0aFN0cmlwcGVkIiwic3RhdGljU3R5bGUiLCJjb2xzIiwic20iLCJtZCIsImxhYmVsIiwiaXRlbSIsInZhbGlkYXRpb24iLCIkdiIsIiRtb2RlbCIsIiRzZXQiLCJ0cmltIiwiX2UiLCJyZWRpcmVjdCIsIm9uIiwiJGV2ZW50Iiwic2hvdyIsImRpcmVjdGl2ZXMiLCJuYW1lIiwicmF3TmFtZSIsImFsaWduIiwiY2xpY2siLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9