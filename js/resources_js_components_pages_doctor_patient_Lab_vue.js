"use strict";
(self["webpackChunkmedic_hospital_management"] = self["webpackChunkmedic_hospital_management"] || []).push([["resources_js_components_pages_doctor_patient_Lab_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Lab.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Lab.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_patient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/patient */ "./resources/js/services/patient.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    items: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    visit: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      fields: [{
        name: 'created_at',
        title: 'Date',
        titleClass: 'ps-3',
        dataclass: 'ps-3',
        width: '10%',
        callback: this.$options.filters.date_DATE_MONTH_YEAR
      }, {
        name: 'icd.description',
        title: 'Description',
        titleClass: 'ps-3',
        dataclass: 'ps-3 text-truncate',
        width: '40%'
      }, {
        name: 'icd.code',
        title: 'Done',
        titleClass: 'ps-3',
        dataclass: 'ps-3',
        width: '20%'
      }, {
        name: 'user.name',
        title: 'Requested by',
        titleClass: 'ps-3',
        dataclass: 'ps-3 ps-3 text-truncate',
        width: '20%'
      }, {
        name: '__slot:actions'
      }],
      moreParams: {
        filter: {
          patient_id: this.visit.patient_id
        }
      },
      diagnoses: [],
      icd10: [],
      form: new window.Form({
        patient_visit_id: this.visit.id,
        provisional_diagnosis: '',
        icd_id: '',
        remarks: '',
        //     new
        item_id: ''
      }),
      viewForm: false,
      patientVisitRecords: this.patientVisits
    };
  },
  computed: {
    productItems: function productItems() {
      return this.items.filter(function (item) {
        return item.department.is_laboratory;
      });
    },
    vuetable: function vuetable() {
      return this.$refs.table.$refs.vuetable;
    }
  },
  watch: {
    'moreParams.filter.patient_visit_id': function moreParamsFilterPatient_visit_id(newId) {
      if (newId) {
        this.vuetable.refresh();
      }
    }
  },
  methods: {
    createDiagnosis: function createDiagnosis() {
      var _this = this;
      this.form.post('/diagnosis').then(function () {
        _this.$bvModal.hide('request-test-modal');
        _this.$toast.success('Diagnosis added');
        _this.vuetable.refresh();
      })["catch"]();
    },
    deleteDiagnosis: function deleteDiagnosis(rowData) {
      var _this2 = this;
      this.$toast.question('Are you sure', 'Delete Diagnosis').then(function () {
        _services_patient__WEBPACK_IMPORTED_MODULE_0__["default"].deleteDiagnosis(rowData.id).then(function () {
          _this2.$toast.success('The diagnosis has been deleted');
          _this2.vuetable.refresh();
        })["catch"](function () {
          _this2.$toast.error('Sorry! The diagnosis could not be deleted');
        });
      });
    },
    getICD10: function getICD10() {
      var _this3 = this;
      this.$httpClient.get('/icd_codes').then(function (_ref) {
        var data = _ref.data;
        _this3.icd10 = data.data;
      })["catch"]();
    },
    onDiseaseSearch: function onDiseaseSearch(search, loading) {
      if (search) {
        loading(true);
        this.searchDisease(search, loading, this);
      }
    },
    searchDisease: lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function (search, loading, vm) {
      vm.$httpClient.get('/icd_codes', {
        params: {
          filter: {
            search: search
          }
        }
      }).then(function (_ref2) {
        var data = _ref2.data;
        vm.icd10 = data.data;
        loading(false);
      })["catch"](function () {
        loading(false);
      });
    }, 1000)
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Lab.vue?vue&type=template&id=5ac0422e&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Lab.vue?vue&type=template&id=5ac0422e& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("div", {
    staticClass: "card rounded-3 mt-3"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("h2", {
    staticClass: "page-title"
  }, [_vm._v("\n        Lab Tests\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "card-actions"
  }, [_c("button", {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal:request-test-modal",
      arg: "request-test-modal"
    }],
    staticClass: "btn btn-outline-primary",
    attrs: {
      disabled: _vm.visit.posted_at
    }
  }, [_vm._v("\n          Request Test\n        ")])])]), _vm._v("\n      " + _vm._s(_vm.items.filter(function (item) {
    return item.department.is_pharmacy && item.department.is_laboratory;
  })) + "\n    "), _c("VueTable", {
    ref: "table",
    attrs: {
      "api-url": "/diagnosis",
      fields: _vm.fields,
      "append-params": _vm.moreParams
    },
    scopedSlots: _vm._u([{
      key: "actions",
      fn: function fn(props) {
        return [_c("button", {
          staticClass: "btn btn-white py-1",
          on: {
            click: function click($event) {
              return _vm.deleteDiagnosis(props.rowData);
            }
          }
        }, [_c("i", {
          staticClass: "uil uil-trash-alt text-danger me-1"
        })])];
      }
    }])
  })], 1), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "request-test-modal",
      title: "Request Test Form",
      "title-class": "font-18",
      "no-close-on-backdrop": "",
      "hide-header-close": "",
      "footer-class": "d-flex justify-content-end bg-light-alpha border-top",
      "content-class": "rounded-3 bg-white",
      size: "lg"
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn(_ref) {
        var cancel = _ref.cancel;
        return [_c("button", {
          staticClass: "btn me-auto",
          attrs: {
            type: "button",
            disabled: _vm.form.processing
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return cancel.apply(null, arguments);
            }
          }
        }, [_vm._v("\n        Dismiss\n      ")]), _vm._v(" "), _c("button", {
          staticClass: "btn btn-primary",
          attrs: {
            type: "submit",
            disabled: _vm.form.processing
          },
          on: {
            click: _vm.createDiagnosis
          }
        }, [_vm._v("\n        Submit\n      ")])];
      }
    }])
  }, [_c("form", {
    attrs: {
      id: "diagnosisForm"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.createDiagnosis.apply(null, arguments);
      },
      keydown: function keydown(event) {
        return _vm.form.errors.clear(event.target.name);
      }
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "icd10_id"
    }
  }, [_vm._v("Products ")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.productItems,
      label: "name",
      clearable: false,
      reduce: function reduce(option) {
        return option.id;
      },
      name: "item_id"
    },
    scopedSlots: _vm._u([{
      key: "selected-option",
      fn: function fn(item) {
        return [_c("div", [_c("div", {
          staticClass: "font-weight-medium"
        }, [_vm._v("\n                          " + _vm._s(item.name) + "\n                      ")]), _vm._v(" "), _vm.invoice.cash_credit === 0 ? _c("div", {
          staticClass: "text-primary small"
        }, [_vm._v("\n                          KES " + _vm._s(_vm._f("toMoneyFormat")(item.cash_price ? item.cash_price.charge_value * 0.01 : 0)) + "\n                      ")]) : _c("div", {
          staticClass: "text-primary small"
        }, [_vm._v("\n                          KES " + _vm._s(_vm._f("toMoneyFormat")(item.scheme_price ? item.scheme_price.charge_value * 0.01 : 0)) + "\n                      ")])])];
      }
    }]),
    model: {
      value: _vm.form.item_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "item_id", $$v);
      },
      expression: "form.item_id"
    }
  }), _vm._v(" "), _vm.form.hasError("icd_id") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.getError("icd_id"))
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v(" Remarks "), _c("small", [_vm._v("(optional)")])]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.remarks,
      expression: "form.remarks"
    }],
    staticClass: "form-control",
    attrs: {
      rows: "5"
    },
    domProps: {
      value: _vm.form.remarks
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "remarks", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.hasError("remarks") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.getError("remarks"))
    }
  }) : _vm._e()])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/pages/doctor/patient/Lab.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/pages/doctor/patient/Lab.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Lab_vue_vue_type_template_id_5ac0422e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lab.vue?vue&type=template&id=5ac0422e& */ "./resources/js/components/pages/doctor/patient/Lab.vue?vue&type=template&id=5ac0422e&");
/* harmony import */ var _Lab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lab.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/doctor/patient/Lab.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Lab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Lab_vue_vue_type_template_id_5ac0422e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Lab_vue_vue_type_template_id_5ac0422e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/doctor/patient/Lab.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/doctor/patient/Lab.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pages/doctor/patient/Lab.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Lab.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Lab.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/doctor/patient/Lab.vue?vue&type=template&id=5ac0422e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pages/doctor/patient/Lab.vue?vue&type=template&id=5ac0422e& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lab_vue_vue_type_template_id_5ac0422e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lab_vue_vue_type_template_id_5ac0422e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lab_vue_vue_type_template_id_5ac0422e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Lab.vue?vue&type=template&id=5ac0422e& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Lab.vue?vue&type=template&id=5ac0422e&");


/***/ })

}]);
//# sourceMappingURL=resources_js_components_pages_doctor_patient_Lab_vue.js.map