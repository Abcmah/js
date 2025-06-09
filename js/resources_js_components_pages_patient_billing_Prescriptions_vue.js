"use strict";
(self["webpackChunkmedic_hospital_management"] = self["webpackChunkmedic_hospital_management"] || []).push([["resources_js_components_pages_patient_billing_Prescriptions_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/Prescriptions.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/Prescriptions.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['patientVisit', 'invoice', 'prescriptions', 'stores', 'items'],
  data: function data() {
    return {
      // prescriptions: [],
      prescriptionsField: [{
        key: 'prescription_date',
        label: 'DATE',
        formatter: this.$options.filters.date_DATE_MONTH_YEAR
      }, {
        key: 'item_name',
        label: 'DRUG'
      },
      // {
      //     key: 'prescription_quantity',
      //     label: 'QTY',
      //     variant: 'success',
      //     tdClass: 'text-center',
      //     thClass: 'text-center'
      // },
      // {
      //     key: 'prescription_issued_qty',
      //     label: 'ISSUED',
      //     variant: 'warning',
      //     tdClass: 'text-center',
      //     thClass: 'text-center'
      // },
      // {key: 'toIssue', label: 'TO ISSUE', variant: 'danger', tdClass: 'text-center', thClass: 'text-center'},
      {
        key: 'prescription_dosage',
        label: 'DOSAGE',
        tdClass: 'text-center',
        thClass: 'text-center'
      }, {
        key: 'prescription_frequency',
        label: 'FREQUENCY',
        tdClass: 'text-center',
        thClass: 'text-center'
      }, {
        key: 'prescription_duration',
        label: 'DURATION (DAYS)',
        tdClass: 'text-center',
        thClass: 'text-center'
      }, {
        key: 'action',
        label: '',
        tdClass: 'text-center'
      }],
      selectedPrescription: null,
      dispensingForm: new window.Form({
        ledger_id: this.invoice.id,
        store_id: null,
        item_id: null,
        vendor_id: null,
        date: new Date().toISOString().slice(0, 10),
        quantity: 1,
        unit_price: 0,
        prescription_id: '',
        comments: '',
        items: []
      }),
      availableStock: 0
    };
  },
  computed: {},
  watch: {
    'dispensingForm.store_id': function dispensingFormStore_id(storeId) {
      var _this = this;
      if (storeId) {
        this.$httpClient.get('/available_stock/' + this.selectedPrescription.item_id + '/' + storeId).then(function (_ref) {
          var data = _ref.data;
          _this.availableStock = data;
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    'dispensingForm.item_id': function dispensingFormItem_id(itemId) {
      if (itemId) {
        this.findProductPriceSetup(itemId);
      }
    }
  },
  methods: {
    setupStoreAndPrice: function setupStoreAndPrice() {
      var store = this.stores.find(function (store) {
        return store.name === 'Pharmacy';
      });
      this.dispensingForm.store_id = store.id;
    },
    showDispensingForm: function showDispensingForm(prescription) {
      this.reset();
      this.selectedPrescription = prescription;
      this.dispensingForm.prescription_id = prescription.prescription_id;
      this.dispensingForm.item_id = prescription.item_id;
      this.dispensingForm.quantity = parseInt(prescription.prescription_quantity) + parseInt(prescription.prescription_issued_qty);
      this.$bvModal.show('dispensing-modal');
    },
    dispense: function dispense() {
      var _this2 = this;
      var vm = this;
      var item = {
        description: this.items.find(function (item) {
          return item.id === vm.dispensingForm.item_id;
        }).name,
        item_id: this.dispensingForm.item_id,
        quantity: this.dispensingForm.quantity,
        unit_price: this.dispensingForm.unit_price,
        ledger_id: this.dispensingForm.ledger_id,
        store_id: this.dispensingForm.store_id,
        prescription_id: this.dispensingForm.prescription_id
      };
      this.dispensingForm.items.push(item);
      this.dispensingForm.post('/patient-bills').then(function () {
        _this2.$toast.success('Prescription has been dispensed');
        _this2.$bvModal.hide('dispensing-modal');
        _this2.$emit('bill-added');
      })["catch"]();
    },
    findProductPriceSetup: function findProductPriceSetup(itemId) {
      var item = this.items.find(function (item) {
        return item.id === itemId;
      });
      if (this.invoice.wallet.type === 0) {
        this.dispensingForm.unit_price = item.cash_price.charge_value * 0.01;
      }
      if (this.invoice.wallet.type === 1) {
        this.dispensingForm.unit_price = item.scheme_price.charge_value * 0.01;
      }
    },
    reset: function reset() {
      this.dispensingForm.store_id = '';
      this.availableStock = 0;
      this.selectedPrescription = '';
      this.dispensingForm.prescription_id = '';
      this.dispensingForm.item_id = '';
      this.dispensingForm.quantity = 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/Prescriptions.vue?vue&type=template&id=50b0d356&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/Prescriptions.vue?vue&type=template&id=50b0d356& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "prescriptions-modal",
      title: "Prescriptions",
      "no-close-on-backdrop": "",
      "footer-class": "d-flex justify-content-between bg-muted-lt border-top",
      "content-class": "bg-white rounded-3",
      "modal-class": "modal-blur",
      "body-class": "px-4",
      "hide-header-close": "",
      "no-close-on-esc": "",
      "no-enforce-focus": "",
      size: "lg"
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn(_ref) {
        var cancel = _ref.cancel;
        return [_c("button", {
          staticClass: "btn",
          on: {
            click: cancel
          }
        }, [_vm._v("\n        Close\n      ")])];
      }
    }])
  }, [_c("div", {
    staticClass: "row row-cards"
  }, [_c("div", {
    staticClass: "space-y"
  }, _vm._l(_vm.prescriptions, function (prescription) {
    return _c("div", {
      key: prescription.prescription_id,
      staticClass: "card"
    }, [_c("div", {
      staticClass: "row g-0"
    }, [_c("div", {
      staticClass: "col"
    }, [_c("div", {
      staticClass: "card-body"
    }, [_c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col"
    }, [_c("h3", {
      staticClass: "mb-0"
    }, [_c("a", {
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.showDispensingForm(prescription);
        }
      }
    }, [_vm._v("\n                        " + _vm._s(prescription.item_name))])])])]), _vm._v(" "), _c("div", {
      staticClass: "row"
    }, [_c("div", {
      staticClass: "col-md"
    }, [_c("div", {
      staticClass: "mt-2 list-inline list-inline-dots mb-0 text-muted d-sm-block d-none"
    }, [_c("div", {
      staticClass: "list-inline-item"
    }, [_c("i", {
      staticClass: "uil uil-prescription-bottle text-indigo"
    }), _vm._v("\n                        " + _vm._s(prescription.prescription_dosage) + "\n                      ")]), _vm._v(" "), _c("div", {
      staticClass: "list-inline-item"
    }, [_c("i", {
      staticClass: "uil uil-clock text-teal"
    }), _vm._v("\n                        " + _vm._s(prescription.prescription_frequency) + " times\n                      ")]), _vm._v(" "), _c("div", {
      staticClass: "list-inline-item"
    }, [_c("i", {
      staticClass: "uil uil-calender"
    }), _vm._v("\n                        " + _vm._s(prescription.prescription_duration) + " days\n                      ")])])]), _vm._v(" "), _c("div", {
      staticClass: "col-md-auto"
    }, [_c("div", {
      staticClass: "mt-3 badges"
    }, [_c("a", {
      staticClass: "badge badge-outline text-muted border fw-normal badge-pill",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          return _vm.showDispensingForm(prescription);
        }
      }
    }, [_vm._v("Dispense")])])])])])])])]);
  }), 0)])]), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "dispensing-modal",
      "hide-header-close": "",
      title: "Dispense Prescription",
      "no-close-on-backdrop": "",
      "content-class": "rounded-3 bg-white",
      "footer-class": "d-flex justify-content-end border-top bg-muted-lt pt-2",
      size: "lg"
    },
    on: {
      shown: _vm.setupStoreAndPrice,
      hidden: _vm.reset
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn(_ref2) {
        var cancel = _ref2.cancel;
        return [_c("button", {
          staticClass: "btn btn-light me-2",
          attrs: {
            disabled: _vm.dispensingForm.processing
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return cancel.apply(null, arguments);
            }
          }
        }, [_vm._v("\n        Close\n      ")]), _vm._v(" "), _c("button", {
          staticClass: "btn btn-primary",
          attrs: {
            disabled: _vm.dispensingForm.processing
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.dispense.apply(null, arguments);
            }
          }
        }, [_vm._v("\n        Dispense\n      ")])];
      }
    }])
  }, [_vm.selectedPrescription ? _c("div", [_c("div", {
    staticClass: "form-group mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Drug")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedPrescription.item_name,
      expression: "selectedPrescription.item_name"
    }],
    staticClass: "form-control bg-muted-lt",
    attrs: {
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.selectedPrescription.item_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.selectedPrescription, "item_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "item_id"
    }
  }, [_vm._v("Price")]), _vm._v(" "), _c("medic-money", {
    attrs: {
      disabled: "",
      value: _vm.dispensingForm.unit_price
    },
    on: {
      input: function input(value) {
        _vm.dispensingForm.unit_price = value;
      }
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Dispensing Store")]), _vm._v(" "), _c("v-select", {
    attrs: {
      id: "store_id",
      options: _vm.stores,
      label: "name",
      reduce: function reduce(option) {
        return option.id;
      },
      clearable: false
    },
    model: {
      value: _vm.dispensingForm.store_id,
      callback: function callback($$v) {
        _vm.$set(_vm.dispensingForm, "store_id", $$v);
      },
      expression: "dispensingForm.store_id"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "small text-indigo"
  }, [_vm._v("Available Stock: " + _vm._s(_vm.availableStock) + " Units")]), _vm._v(" "), _c("br"), _vm._v(" "), _vm.dispensingForm.hasError("store_id") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.dispensingForm.getError("store_id"))
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Quantity to Dispense")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dispensingForm.quantity,
      expression: "dispensingForm.quantity"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.dispensingForm.quantity
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.dispensingForm, "quantity", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.dispensingForm.errors.has("quantity") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.dispensingForm.getError("quantity"))
    }
  }) : _vm._e()]), _vm._v(" "), _c("p", {
    staticClass: "card-subtitle"
  }, [_vm._v("\n        The doctor has prescribed " + _vm._s(_vm.selectedPrescription.prescription_dosage) + "\n        to be taken "), _c("span", {
    staticClass: "text-indigo"
  }, [_vm._v(" " + _vm._s(_vm.selectedPrescription.prescription_frequency) + " times ")]), _vm._v("\n        a day for "), _c("span", {
    staticClass: "text-indigo"
  }, [_vm._v(" " + _vm._s(_vm.selectedPrescription.prescription_duration) + " day(s)")])])]) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/pages/patient/billing/Prescriptions.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/pages/patient/billing/Prescriptions.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Prescriptions_vue_vue_type_template_id_50b0d356___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Prescriptions.vue?vue&type=template&id=50b0d356& */ "./resources/js/components/pages/patient/billing/Prescriptions.vue?vue&type=template&id=50b0d356&");
/* harmony import */ var _Prescriptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prescriptions.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/patient/billing/Prescriptions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Prescriptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Prescriptions_vue_vue_type_template_id_50b0d356___WEBPACK_IMPORTED_MODULE_0__.render,
  _Prescriptions_vue_vue_type_template_id_50b0d356___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/patient/billing/Prescriptions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/patient/billing/Prescriptions.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pages/patient/billing/Prescriptions.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prescriptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prescriptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/Prescriptions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prescriptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/patient/billing/Prescriptions.vue?vue&type=template&id=50b0d356&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/pages/patient/billing/Prescriptions.vue?vue&type=template&id=50b0d356& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Prescriptions_vue_vue_type_template_id_50b0d356___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Prescriptions_vue_vue_type_template_id_50b0d356___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Prescriptions_vue_vue_type_template_id_50b0d356___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prescriptions.vue?vue&type=template&id=50b0d356& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/Prescriptions.vue?vue&type=template&id=50b0d356&");


/***/ })

}]);
//# sourceMappingURL=resources_js_components_pages_patient_billing_Prescriptions_vue.js.map