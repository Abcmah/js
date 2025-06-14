"use strict";
(self["webpackChunkmedic_hospital_management"] = self["webpackChunkmedic_hospital_management"] || []).push([["resources_js_components_pages_admission_AdmissionDetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/admission/AdmissionDetails.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/admission/AdmissionDetails.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    rowData: {
      type: Object,
      required: true
    },
    rowIndex: {
      type: Number
    }
  },
  data: function data() {
    return {
      fields: [{
        name: 'description',
        title: 'DESCRIPTION',
        width: '40%',
        dataClass: 'text-truncate'
      }, {
        name: 'unit_cost',
        title: 'UNIT COST',
        dataClass: 'text-right',
        titleClass: 'text-right'
        // callback: this.$options.filters.toMoneyFormat
      }, {
        name: 'quantity',
        title: 'QUANTITY',
        dataClass: 'text-center',
        titleClass: 'text-center'
      }, {
        name: 'total',
        title: 'TOTAL',
        dataClass: 'text-right mr-2',
        titleClass: 'text-right'
        // callback: this.$options.filters.toMoneyFormat
      }, {
        name: '__slot:actions',
        dataClass: 'text-right mr-2',
        titleClass: 'text-right'
      }],
      moreParams: {
        filter: {
          header_id: this.rowData.id
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/admission/AdmissionDetails.vue?vue&type=template&id=c578d856&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/admission/AdmissionDetails.vue?vue&type=template&id=c578d856& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-8 ms-4"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row align-items-start mb-3"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "font-weight-medium"
  }, [_vm._v("\n                  " + _vm._s(_vm.rowData.bed.name) + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "text-muted"
  }, [_vm._v("\n                  Bed Number\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "font-weight-medium"
  }, [_vm._v("\n                  " + _vm._s(_vm.rowData.patient_visit.invoice.branch.organization.code) + "." + _vm._s(_vm.rowData.patient_visit.invoice.number) + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "text-muted"
  }, [_vm._v("\n                  Invoice Number\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "font-weight-medium"
  }, [_vm._v("\n                  " + _vm._s(_vm.rowData.patient_visit.invoice.branch.organization.code) + "." + _vm._s(_vm.rowData.patient.medical_record_number) + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "text-muted"
  }, [_vm._v("\n                  Patient Number\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "font-weight-medium"
  }, [_vm._v("\n                  " + _vm._s(_vm.rowData.patient.age) + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "text-muted"
  }, [_vm._v("\n                  Age\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "row align-items-start"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm.rowData.patient_visit.wallet.type === 1 ? _c("div", {
    staticClass: "font-weight-medium"
  }, [_vm._v("\n                  " + _vm._s(_vm.rowData.patient_visit.wallet.scheme.name) + "\n                ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "text-muted"
  }, [_vm._v("\n                  Scheme\n                ")])])])])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/pages/admission/AdmissionDetails.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/pages/admission/AdmissionDetails.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdmissionDetails_vue_vue_type_template_id_c578d856___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdmissionDetails.vue?vue&type=template&id=c578d856& */ "./resources/js/components/pages/admission/AdmissionDetails.vue?vue&type=template&id=c578d856&");
/* harmony import */ var _AdmissionDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdmissionDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/admission/AdmissionDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdmissionDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdmissionDetails_vue_vue_type_template_id_c578d856___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdmissionDetails_vue_vue_type_template_id_c578d856___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/admission/AdmissionDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/admission/AdmissionDetails.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pages/admission/AdmissionDetails.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdmissionDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdmissionDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/admission/AdmissionDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdmissionDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/admission/AdmissionDetails.vue?vue&type=template&id=c578d856&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/pages/admission/AdmissionDetails.vue?vue&type=template&id=c578d856& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdmissionDetails_vue_vue_type_template_id_c578d856___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdmissionDetails_vue_vue_type_template_id_c578d856___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdmissionDetails_vue_vue_type_template_id_c578d856___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdmissionDetails.vue?vue&type=template&id=c578d856& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/admission/AdmissionDetails.vue?vue&type=template&id=c578d856&");


/***/ })

}]);
//# sourceMappingURL=resources_js_components_pages_admission_AdmissionDetails_vue.js.map