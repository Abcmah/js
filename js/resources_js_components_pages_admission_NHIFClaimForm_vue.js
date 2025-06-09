"use strict";
(self["webpackChunkmedic_hospital_management"] = self["webpackChunkmedic_hospital_management"] || []).push([["resources_js_components_pages_admission_NHIFClaimForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/admission/NHIFClaimForm.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/admission/NHIFClaimForm.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'NhifClaimForm',
  props: {
    admission: {
      type: Object,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      form: new window.Form({
        nhif_claim_auto: true,
        admission_id: '',
        nhif_quantity: 1,
        nhif_amount: 0,
        nhif_item_id: '',
        claim_no: 0,
        nhif_no: '',
        claim_period: ''
      }),
      items: []
    };
  },
  watch: {
    'form.nhif_item_id': function formNhif_item_id(itemId) {
      if (itemId) {
        var vm = this;
        var rebateItem = this.items.find(function (item) {
          return item.id === itemId;
        });
        if (this.admission.nhif_amount === 0) {
          if (this.admission.invoice.cash_credit === 0) {
            this.form.nhif_amount = rebateItem.cash_price.charge_value * 0.01;
          }
          if (this.admission.invoice.cash_credit === 1) {
            this.form.nhif_amount = rebateItem.scheme_price.charge_value * 0.01;
          }
        }
      }
    }
  },
  methods: {
    onModalShow: function onModalShow() {
      var _this = this;
      setTimeout(function () {
        var _this$admission$claim, _this$admission$nhif_;
        _this.form.admission_id = _this.admission.id;
        _this.form.claim_no = (_this$admission$claim = _this.admission.claim_no) !== null && _this$admission$claim !== void 0 ? _this$admission$claim : 0;
        _this.form.claim_period = _this.admission.claim_period;
        _this.form.nhif_no = _this.admission.nhif_no;
        _this.form.nhif_item_id = (_this$admission$nhif_ = _this.admission.nhif_item_id) !== null && _this$admission$nhif_ !== void 0 ? _this$admission$nhif_ : '';
        _this.form.nhif_amount = _this.admission.nhif_amount ? _this.admission.nhif_amount * 0.01 : 0;
      }, 200);
      this.findRebateItems();
    },
    findRebateItems: function findRebateItems() {
      var _this2 = this;
      this.$httpClient.get('/datatable/products', {
        params: {
          filter: {
            rebate: true
          }
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this2.items = data.data;
        if (data.data.length === 1) {
          _this2.form.nhif_item_id = data.data[0].id;
        }
      })["catch"]();
    },
    submitClaim: function submitClaim() {
      var _this3 = this;
      this.form.post('/nhif-claim').then(function () {
        _this3.$toast.success('The claim process completed successfully');
        _this3.$emit('claim:submitted');
        _this3.$bvModal.hide('nhif-claim-modal');
      })["catch"]();
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/admission/NHIFClaimForm.vue?vue&type=template&id=e3572506&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/admission/NHIFClaimForm.vue?vue&type=template&id=e3572506&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", [_c("b-modal", {
    attrs: {
      id: "nhif-claim-modal",
      title: "Discharge Form",
      lazy: "",
      "no-close-on-backdrop": "",
      "no-enforce-focus": true,
      "hide-header-close": "",
      "modal-class": "modal-blur",
      "content-class": "bg-white rounded-3",
      "footer-class": "d-flex justify-content-between border-top"
    },
    on: {
      show: _vm.onModalShow
    },
    scopedSlots: _vm._u([{
      key: "modal-title",
      fn: function fn() {
        return [_vm.admission ? _c("span", [_vm._v(_vm._s(_vm.admission.patient.name))]) : _vm._e()];
      },
      proxy: true
    }, {
      key: "modal-footer",
      fn: function fn(_ref) {
        var cancel = _ref.cancel;
        return [_c("button", {
          staticClass: "btn btn-light me-2",
          attrs: {
            disabled: _vm.form.processing
          },
          on: {
            click: cancel
          }
        }, [_vm._v("\n        Close\n      ")]), _vm._v(" "), _c("button", {
          staticClass: "btn btn-primary",
          attrs: {
            form: "claimForm",
            disabled: _vm.form.processing
          }
        }, [_vm._v("\n        Submit\n      ")])];
      }
    }])
  }, [_vm._v(" "), _vm.admission ? _c("form", {
    staticClass: "align-items-center",
    attrs: {
      id: "claimForm"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitClaim.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "mb-3 row"
  }, [_c("label", {
    staticClass: "col-4 col-form-label required"
  }, [_vm._v("Admission Date")]), _vm._v(" "), _c("div", {
    staticClass: "col-8"
  }, [_c("date-picker", {
    attrs: {
      "default-date": _vm.admission.date,
      disabled: "",
      value: _vm.admission.date
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 row"
  }, [_c("label", {
    staticClass: "col-4 col-form-label required"
  }, [_vm._v("Discharge Date")]), _vm._v(" "), _c("div", {
    staticClass: "col-8"
  }, [_c("date-picker", {
    attrs: {
      "default-date": _vm.admission.discharged_at,
      disabled: "",
      value: _vm.admission.discharged_at
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 row"
  }, [_c("label", {
    staticClass: "col-4 col-form-label required"
  }, [_vm._v("No of Days")]), _vm._v(" "), _c("div", {
    staticClass: "col-8"
  }, [_c("input", {
    staticClass: "form-control",
    attrs: {
      type: "number",
      disabled: ""
    },
    domProps: {
      value: _vm.admission.bed_days
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 row"
  }, [_c("label", {
    staticClass: "col-4 col-form-label"
  }, [_vm._v("Rebate Product")]), _vm._v(" "), _c("div", {
    staticClass: "col-8"
  }, [_c("v-select", {
    attrs: {
      disabled: _vm.admission.rebate_date !== null,
      label: "name",
      options: _vm.items,
      clearable: false,
      reduce: function reduce(option) {
        return option.id;
      }
    },
    model: {
      value: _vm.form.nhif_item_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "nhif_item_id", $$v);
      },
      expression: "form.nhif_item_id"
    }
  }), _vm._v(" "), _vm.form.hasError("nhif_item_id") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.getError("nhif_item_id"))
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mb-3 row"
  }, [_c("label", {
    staticClass: "col-4 col-form-label"
  }, [_vm._v("Amount & Qty")]), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("medic-money", {
    attrs: {
      disabled: _vm.admission.rebate_date !== null,
      value: _vm.form.nhif_amount
    },
    on: {
      input: function input(amount) {
        _vm.form.nhif_amount = amount;
      }
    }
  }), _vm._v(" "), _vm.form.hasError("nhif_amount") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.getError("nhif_amount"))
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "col-4"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.nhif_quantity,
      expression: "form.nhif_quantity"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      disabled: _vm.admission.rebate_date !== null
    },
    domProps: {
      value: _vm.form.nhif_quantity
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "nhif_quantity", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.hasError("nhif_quantity") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.getError("nhif_quantity"))
    }
  }) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("label", {
    staticClass: "col-4 col-form-label pt-0"
  }, [_vm._v("Membership Number")]), _vm._v(" "), _c("div", {
    staticClass: "col-8"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.nhif_no,
      expression: "form.nhif_no"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.form.nhif_no
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "nhif_no", $event.target.value);
      }
    }
  })])])]) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/pages/admission/NHIFClaimForm.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/pages/admission/NHIFClaimForm.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NHIFClaimForm_vue_vue_type_template_id_e3572506_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NHIFClaimForm.vue?vue&type=template&id=e3572506&scoped=true& */ "./resources/js/components/pages/admission/NHIFClaimForm.vue?vue&type=template&id=e3572506&scoped=true&");
/* harmony import */ var _NHIFClaimForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NHIFClaimForm.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/admission/NHIFClaimForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NHIFClaimForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NHIFClaimForm_vue_vue_type_template_id_e3572506_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NHIFClaimForm_vue_vue_type_template_id_e3572506_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "e3572506",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/admission/NHIFClaimForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/admission/NHIFClaimForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/admission/NHIFClaimForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NHIFClaimForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NHIFClaimForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/admission/NHIFClaimForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NHIFClaimForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/admission/NHIFClaimForm.vue?vue&type=template&id=e3572506&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/pages/admission/NHIFClaimForm.vue?vue&type=template&id=e3572506&scoped=true& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NHIFClaimForm_vue_vue_type_template_id_e3572506_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NHIFClaimForm_vue_vue_type_template_id_e3572506_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NHIFClaimForm_vue_vue_type_template_id_e3572506_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NHIFClaimForm.vue?vue&type=template&id=e3572506&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/admission/NHIFClaimForm.vue?vue&type=template&id=e3572506&scoped=true&");


/***/ })

}]);
//# sourceMappingURL=resources_js_components_pages_admission_NHIFClaimForm_vue.js.map