"use strict";
(self["webpackChunkmedic_hospital_management"] = self["webpackChunkmedic_hospital_management"] || []).push([["resources_js_components_pages_accounting_cashier_RefundForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/account */ "./resources/js/services/account.js");
/* harmony import */ var _services_patient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/patient */ "./resources/js/services/patient.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    banks: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    detail: {
      required: false,
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      refundForm: new window.Form({
        ledger_id: '',
        date: '',
        comments: '',
        header_id: '',
        source: '4',
        bank_account_id: '',
        details: []
      }),
      bills: []
    };
  },
  methods: {
    getPatientBills: function getPatientBills() {
      var _this = this;
      var vm = this;
      _services_patient__WEBPACK_IMPORTED_MODULE_1__["default"].findPatientBills(this.detail.hashid).then(function (_ref) {
        var data = _ref.data;
        console.log(data);
        _this.bills = data.bills.filter(function (bill) {
          return bill.payment_id === vm.detail.id;
        }).map(function (bill) {
          return {
            id: bill.id,
            description: bill.description,
            total: bill.total,
            selected: false
          };
        });
      })["catch"]();
    },
    setup: function setup() {
      this.refundForm.ledger_id = this.detail.invoice_id;
      this.getPatientBills();
    },
    cleanUp: function cleanUp() {
      this.bills = [];
      this.refundForm.reset();
    },
    refundTransaction: function refundTransaction() {
      var _this2 = this;
      if (!this.bills.length) {
        this.$toast.error('Please select the bills');
        return;
      }
      var selection = this.bills.find(function (bill) {
        return bill.selected === true;
      });
      if (!selection) {
        this.$toast.error('Please select the bills');
        return;
      }
      this.refundForm.details = this.bills.filter(function (bill) {
        return bill.selected === true;
      });
      this.refundForm.post('/patient-billing/refund').then(function () {
        _this2.$toast.success('Payment Refunded');
        _this2.$emit('bill:refunded');
        _this2.$bvModal.hide('refund-modal');
      })["catch"](function () {
        _this2.refundForm.processing = false;
        _this2.$toast.error('Something went wrong');
      });
    },
    toggleBulkReconcile: function toggleBulkReconcile() {
      var vm = this;
      if (this.bills.length) {
        this.bills.forEach(function (transaction) {
          transaction.selected = vm.$refs.bulkBill.checked;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=template&id=2060d07c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=template&id=2060d07c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b-modal", {
    attrs: {
      id: "refund-modal",
      title: "Refund Cash",
      "title-class": "font-18",
      "no-close-on-backdrop": "",
      "no-close-on-esc": "",
      "no-enforce-focus": true,
      "hide-header-close": "",
      "content-class": "bg-white rounded-3",
      "body-class": "px-4",
      "modal-class": "modal-blur",
      size: "lg",
      "footer-class": "d-flex justify-content-between"
    },
    on: {
      shown: _vm.setup,
      hidden: _vm.cleanUp
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn(_ref) {
        var cancel = _ref.cancel;
        return [_c("button", {
          staticClass: "btn btn-light",
          attrs: {
            disabled: _vm.refundForm.processing
          },
          on: {
            click: cancel
          }
        }, [_vm._v("\n        Close\n      ")]), _vm._v(" "), _c("button", {
          staticClass: "btn btn-primary",
          attrs: {
            type: "submit",
            disabled: _vm.refundForm.processing
          },
          on: {
            click: _vm.refundTransaction
          }
        }, [_vm._v("\n        Refund\n      ")])];
      }
    }])
  }, [_c("div", {
    staticClass: "row gx-4"
  }, [_c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Date")]), _vm._v(" "), _c("date-picker", {
    attrs: {
      "max-date": new Date(),
      value: _vm.refundForm.date
    },
    on: {
      "on-change": function onChange(dateObj, dateStr) {
        _vm.refundForm.date = dateStr;
      }
    }
  }), _vm._v(" "), _vm.refundForm.hasError("date") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.refundForm.getError("date"))
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "form-group mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "bank_account_id"
    }
  }, [_vm._v("Refund Method")]), _vm._v(" "), _c("v-select", {
    attrs: {
      id: "bank_account_id",
      options: _vm.banks,
      label: "name",
      reduce: function reduce(option) {
        return option.id;
      },
      clearable: false
    },
    model: {
      value: _vm.refundForm.bank_account_id,
      callback: function callback($$v) {
        _vm.$set(_vm.refundForm, "bank_account_id", $$v);
      },
      expression: "refundForm.bank_account_id"
    }
  }), _vm._v(" "), _vm.refundForm.hasError("bank_account_id") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.refundForm.getError("bank_account_id"))
    }
  }) : _vm._e()], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "comments"
    }
  }, [_vm._v("Reason")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.refundForm.comments,
      expression: "refundForm.comments"
    }],
    staticClass: "form-control",
    attrs: {
      id: "comments",
      required: "",
      type: "text",
      placeholder: "Please leave a brief description detailing your reason for refunding"
    },
    domProps: {
      value: _vm.refundForm.comments
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.refundForm, "comments", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.refundForm.hasError("comments") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.refundForm.getError("comments"))
    }
  }) : _vm._e(), _vm._v(" "), _vm.refundForm.hasError("ledger_id") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.refundForm.getError("ledger_id"))
    }
  }) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("h1", {
    staticClass: "h2 fw-bold mb-0 pb-0"
  }, [_vm._v("\n        Patient Bills\n      ")]), _vm._v(" "), _c("span", {
    staticClass: "text-muted"
  }, [_vm._v("Please check the bills to fund")]), _vm._v(" "), _c("br"), _vm._v(" "), _c("span", {
    staticClass: "text-danger small"
  }, [_vm._v("selected bills will be deleted, Payment will be refunded")])]), _vm._v(" "), _c("table", {
    staticClass: "styled-table table-hover"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "text-center",
    staticStyle: {
      width: "5%"
    }
  }, [_c("input", {
    ref: "bulkBill",
    attrs: {
      type: "checkbox"
    },
    on: {
      input: _vm.toggleBulkReconcile
    }
  })]), _vm._v(" "), _c("th", {
    staticClass: "ps-3",
    staticStyle: {
      width: "85%"
    }
  }, [_vm._v("\n            Description\n          ")]), _vm._v(" "), _c("th", {
    staticClass: "pe-3 text-end",
    staticStyle: {
      width: "15%"
    }
  }, [_vm._v("\n            Amount\n          ")])])]), _vm._v(" "), _c("tbody", _vm._l(_vm.bills, function (transaction, index) {
    return _c("tr", {
      key: index
    }, [_c("td", {
      staticClass: "text-center"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.bills[index].selected,
        expression: "bills[index].selected"
      }],
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: Array.isArray(_vm.bills[index].selected) ? _vm._i(_vm.bills[index].selected, null) > -1 : _vm.bills[index].selected
      },
      on: {
        change: function change($event) {
          var $$a = _vm.bills[index].selected,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;
          if (Array.isArray($$a)) {
            var $$v = null,
              $$i = _vm._i($$a, $$v);
            if ($$el.checked) {
              $$i < 0 && _vm.$set(_vm.bills[index], "selected", $$a.concat([$$v]));
            } else {
              $$i > -1 && _vm.$set(_vm.bills[index], "selected", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.$set(_vm.bills[index], "selected", $$c);
          }
        }
      }
    })]), _vm._v(" "), _c("td", {
      staticClass: "ps-3"
    }, [_vm._v("\n            " + _vm._s(_vm.bills[index].description) + "\n          ")]), _vm._v(" "), _c("td", {
      staticClass: "pe-3 text-end"
    }, [_vm._v("\n            " + _vm._s(_vm.bills[index].total) + "\n          ")])]);
  }), 0)]), _vm._v(" "), _vm.refundForm.hasError("details") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.refundForm.getError("details"))
    }
  }) : _vm._e(), _vm._v(" "), _vm.refundForm.processing ? _c("div", {
    staticClass: "progress mb-2"
  }, [_c("div", {
    staticClass: "progress"
  }, [_c("div", {
    staticClass: "progress-bar progress-bar-indeterminate bg-green"
  })])]) : _vm._e()]), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "refund-modal-form",
      "title-class": "font-18",
      "no-close-on-backdrop": "",
      "no-close-on-esc": "",
      "no-enforce-focus": true,
      "content-class": "rounded-lg",
      "hide-header": ""
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn(_ref2) {
        var cancel = _ref2.cancel;
        return [_c("b-overlay", {
          attrs: {
            show: _vm.refundForm.processing,
            "spinner-small": ""
          }
        }, [_c("button", {
          staticClass: "btn btn-light mr-3",
          attrs: {
            disabled: _vm.refundForm.processing
          },
          on: {
            click: cancel
          }
        }, [_vm._v("\n          Close\n        ")]), _vm._v(" "), _c("button", {
          staticClass: "btn btn-danger shadow-sm",
          attrs: {
            form: "refundForm",
            disabled: _vm.refundForm.processing
          },
          on: {
            click: _vm.refundTransaction
          }
        }, [_vm._v("\n          Refund\n        ")])])];
      }
    }])
  }, [_c("form", {
    attrs: {
      id: "refundForm"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.refundTransaction.apply(null, arguments);
      }
    }
  })])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=style&index=0&id=2060d07c&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=style&index=0&id=2060d07c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.styled-table[data-v-2060d07c] {\n    table-layout: fixed;\n    width: 100%;\n    border-collapse: collapse;\n    margin: 0 0;\n    font-size: 1em;\n//font-family: sans-serif; min-width: 100%;\n}\n.styled-table thead tr[data-v-2060d07c] {\n    background-color: #009879;\n    color: #ffffff;\n    text-align: left;\n}\n.styled-table th[data-v-2060d07c],\n.styled-table td[data-v-2060d07c] {\n    padding: 6px 10px;\n}\n.styled-table tbody tr[data-v-2060d07c] {\n//border-bottom: 1px solid #dddddd;\n}\n.styled-table tbody tr td[data-v-2060d07c] {\n    border: 1px solid #f3f3f3\n}\n.styled-table tbody tr[data-v-2060d07c]:nth-of-type(even) {\n//background-color: #f3f3f3;\n}\n.styled-table tbody tr.active-row[data-v-2060d07c] {\n    font-weight: bold;\n    color: #009879;\n}\n\n", "",{"version":3,"sources":["webpack://./resources/js/components/pages/accounting/cashier/RefundForm.vue"],"names":[],"mappings":";AAySA;IACA,mBAAA;IACA,WAAA;IACA,yBAAA;IACA,WAAA;IACA,cAAA;AACA,yBAAA,EAAA,eAAA;AACA;AAEA;IACA,yBAAA;IACA,cAAA;IACA,gBAAA;AACA;AAEA;;IAEA,iBAAA;AACA;AAEA;AACA,kCAAA;AACA;AAEA;IACA;AACA;AAEA;AACA,2BAAA;AACA;AAEA;IACA,iBAAA;IACA,cAAA;AACA","sourcesContent":["<script>\nimport AccountService from '@services/account'\nimport PatientService from '@services/patient'\n\nexport default {\n  props: {\n    banks: {\n      type: Array,\n      default: () => [],\n    },\n\n    detail: {\n      required: false,\n      type: Object,\n      default: () => {\n      },\n    },\n  },\n\n  data () {\n    return {\n      refundForm: new window.Form({\n        ledger_id: '',\n        date: '',\n        comments: '',\n        header_id: '',\n        source: '4',\n        bank_account_id: '',\n        details: [],\n      }),\n\n      bills: [],\n    }\n  },\n\n  methods: {\n    getPatientBills () {\n      const vm = this\n\n      PatientService.findPatientBills(this.detail.hashid)\n        .then(({ data }) => {\n          console.log(data)\n          this.bills = data.bills\n            .filter((bill) => bill.payment_id === vm.detail.id)\n            .map((bill) => {\n              return {\n                id: bill.id,\n                description: bill.description,\n                total: bill.total,\n                selected: false,\n              }\n            })\n        }).catch()\n    },\n\n    setup () {\n      this.refundForm.ledger_id = this.detail.invoice_id\n\n      this.getPatientBills()\n    },\n\n    cleanUp () {\n      this.bills = []\n\n      this.refundForm.reset()\n    },\n\n    refundTransaction () {\n      if (!this.bills.length) {\n        this.$toast.error('Please select the bills')\n\n        return\n      }\n\n      const selection = this.bills.find((bill) => bill.selected === true)\n\n      if (!selection) {\n        this.$toast.error('Please select the bills')\n\n        return\n      }\n\n      this.refundForm.details = this.bills.filter((bill) => bill.selected === true)\n\n      this.refundForm.post('/patient-billing/refund')\n        .then(() => {\n          this.$toast.success('Payment Refunded')\n\n          this.$emit('bill:refunded')\n\n          this.$bvModal.hide('refund-modal')\n        })\n        .catch(() => {\n          this.refundForm.processing = false\n\n          this.$toast.error('Something went wrong')\n        })\n    },\n\n    toggleBulkReconcile () {\n      const vm = this\n\n      if (this.bills.length) {\n        this.bills.forEach(function (transaction) {\n          transaction.selected = vm.$refs.bulkBill.checked\n        })\n      }\n    },\n  },\n}\n</script>\n\n<template>\n  <div>\n    <b-modal\n      id=\"refund-modal\"\n      title=\"Refund Cash\"\n      title-class=\"font-18\"\n      no-close-on-backdrop\n      no-close-on-esc\n      :no-enforce-focus=\"true\"\n      hide-header-close\n      content-class=\"bg-white rounded-3\"\n      body-class=\"px-4\"\n      modal-class=\"modal-blur\"\n      size=\"lg\"\n      footer-class=\"d-flex justify-content-between\"\n      @shown=\"setup\"\n      @hidden=\"cleanUp\"\n    >\n      <div class=\"row gx-4\">\n        <div class=\"col-xl-6\">\n          <div class=\"form-group mb-4\">\n            <label for=\"\" class=\"form-label\">Date</label>\n            <date-picker\n                :max-date=\"new Date()\"\n              :value=\"refundForm.date\"\n              @on-change=\"(dateObj, dateStr) => {refundForm.date = dateStr}\"\n            />\n\n            <span\n              v-if=\"refundForm.hasError('date')\"\n              class=\"text-danger\"\n              v-text=\"refundForm.getError('date')\"\n            />\n          </div>\n        </div>\n        <div class=\"col-xl-6\">\n          <div class=\"form-group mb-4\">\n            <label for=\"bank_account_id\" class=\"form-label\">Refund Method</label>\n            <v-select\n              id=\"bank_account_id\"\n              v-model=\"refundForm.bank_account_id\"\n              :options=\"banks\"\n              label=\"name\"\n              :reduce=\"(option) => option.id\"\n              :clearable=\"false\"\n            />\n            <span\n              v-if=\"refundForm.hasError('bank_account_id')\"\n              class=\"text-danger\"\n              v-text=\"refundForm.getError('bank_account_id')\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group mb-4\">\n        <label for=\"comments\" class=\"form-label\">Reason</label>\n        <textarea\n          id=\"comments\"\n          v-model=\"refundForm.comments\"\n          required\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"Please leave a brief description detailing your reason for refunding\"\n        />\n\n        <span\n          v-if=\"refundForm.hasError('comments')\"\n          class=\"text-danger\"\n          v-text=\"refundForm.getError('comments')\"\n        />\n\n        <span\n          v-if=\"refundForm.hasError('ledger_id')\"\n          class=\"text-danger\"\n          v-text=\"refundForm.getError('ledger_id')\"\n        />\n      </div>\n\n      <div class=\"mb-3\">\n        <h1 class=\"h2 fw-bold mb-0 pb-0\">\n          Patient Bills\n        </h1>\n        <span class=\"text-muted\">Please check the bills to fund</span> <br>\n        <span class=\"text-danger small\">selected bills will be deleted, Payment will be refunded</span>\n      </div>\n\n      <table class=\"styled-table table-hover\">\n        <thead>\n          <tr>\n            <th class=\"text-center\" style=\"width: 5%\">\n              <input ref=\"bulkBill\" type=\"checkbox\" @input=\"toggleBulkReconcile\">\n            </th>\n            <th class=\"ps-3\" style=\"width: 85%\">\n              Description\n            </th>\n            <th class=\"pe-3 text-end\" style=\"width: 15%\">\n              Amount\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr v-for=\"(transaction, index) in bills\" :key=\"index\">\n            <td class=\"text-center\">\n              <input v-model=\"bills[index].selected\" type=\"checkbox\">\n            </td>\n            <td class=\"ps-3\">\n              {{ bills[index].description }}\n            </td>\n\n            <td class=\"pe-3 text-end\">\n              {{ bills[index].total }}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <span\n        v-if=\"refundForm.hasError('details')\"\n        class=\"text-danger\"\n        v-text=\"refundForm.getError('details')\"\n      />\n\n        <div class=\"progress mb-2\" v-if=\"refundForm.processing\">\n            <div class=\"progress\">\n                <div class=\"progress-bar progress-bar-indeterminate bg-green\"></div>\n            </div>\n        </div>\n\n      <template #modal-footer=\"{cancel}\">\n        <button\n          class=\"btn btn-light\"\n          :disabled=\"refundForm.processing\"\n          @click=\"cancel\"\n        >\n          Close\n        </button>\n\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary\"\n          :disabled=\"refundForm.processing\"\n          @click=\"refundTransaction\"\n        >\n          Refund\n        </button>\n      </template>\n    </b-modal>\n\n    <b-modal\n      id=\"refund-modal-form\"\n      title-class=\"font-18\"\n      no-close-on-backdrop\n      no-close-on-esc\n      :no-enforce-focus=\"true\"\n      content-class=\"rounded-lg\"\n      hide-header\n    >\n      <form id=\"refundForm\" @submit.prevent=\"refundTransaction\" />\n\n      <template #modal-footer=\"{cancel}\">\n        <b-overlay :show=\"refundForm.processing\" spinner-small>\n          <button\n            class=\"btn btn-light mr-3\"\n            :disabled=\"refundForm.processing\"\n            @click=\"cancel\"\n          >\n            Close\n          </button>\n\n          <button\n            class=\"btn btn-danger shadow-sm\"\n            form=\"refundForm\"\n            :disabled=\"refundForm.processing\"\n            @click=\"refundTransaction\"\n          >\n            Refund\n          </button>\n        </b-overlay>\n      </template>\n    </b-modal>\n  </div>\n</template>\n\n<style scoped>\n.styled-table {\n    table-layout: fixed;\n    width: 100%;\n    border-collapse: collapse;\n    margin: 0 0;\n    font-size: 1em;\n//font-family: sans-serif; min-width: 100%;\n}\n\n.styled-table thead tr {\n    background-color: #009879;\n    color: #ffffff;\n    text-align: left;\n}\n\n.styled-table th,\n.styled-table td {\n    padding: 6px 10px;\n}\n\n.styled-table tbody tr {\n//border-bottom: 1px solid #dddddd;\n}\n\n.styled-table tbody tr td {\n    border: 1px solid #f3f3f3\n}\n\n.styled-table tbody tr:nth-of-type(even) {\n//background-color: #f3f3f3;\n}\n\n.styled-table tbody tr.active-row {\n    font-weight: bold;\n    color: #009879;\n}\n\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=style&index=0&id=2060d07c&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=style&index=0&id=2060d07c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundForm_vue_vue_type_style_index_0_id_2060d07c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RefundForm.vue?vue&type=style&index=0&id=2060d07c&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=style&index=0&id=2060d07c&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundForm_vue_vue_type_style_index_0_id_2060d07c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundForm_vue_vue_type_style_index_0_id_2060d07c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/accounting/cashier/RefundForm.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/pages/accounting/cashier/RefundForm.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RefundForm_vue_vue_type_template_id_2060d07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RefundForm.vue?vue&type=template&id=2060d07c&scoped=true& */ "./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=template&id=2060d07c&scoped=true&");
/* harmony import */ var _RefundForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RefundForm.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _RefundForm_vue_vue_type_style_index_0_id_2060d07c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RefundForm.vue?vue&type=style&index=0&id=2060d07c&scoped=true&lang=css& */ "./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=style&index=0&id=2060d07c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RefundForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RefundForm_vue_vue_type_template_id_2060d07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RefundForm_vue_vue_type_template_id_2060d07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2060d07c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/accounting/cashier/RefundForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RefundForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=template&id=2060d07c&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=template&id=2060d07c&scoped=true& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundForm_vue_vue_type_template_id_2060d07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundForm_vue_vue_type_template_id_2060d07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundForm_vue_vue_type_template_id_2060d07c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RefundForm.vue?vue&type=template&id=2060d07c&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=template&id=2060d07c&scoped=true&");


/***/ }),

/***/ "./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=style&index=0&id=2060d07c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=style&index=0&id=2060d07c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RefundForm_vue_vue_type_style_index_0_id_2060d07c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RefundForm.vue?vue&type=style&index=0&id=2060d07c&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/accounting/cashier/RefundForm.vue?vue&type=style&index=0&id=2060d07c&scoped=true&lang=css&");


/***/ })

}]);
//# sourceMappingURL=resources_js_components_pages_accounting_cashier_RefundForm_vue.js.map