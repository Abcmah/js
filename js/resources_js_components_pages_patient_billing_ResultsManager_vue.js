"use strict";
(self["webpackChunkmedic_hospital_management"] = self["webpackChunkmedic_hospital_management"] || []).push([["resources_js_components_pages_patient_billing_ResultsManager_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'ResultsManager',
  props: {
    selectedBill: {
      type: Object,
      "default": function _default() {
        return null;
      }
    },
    resultModalId: {
      type: String,
      "default": 'result-modal'
    },
    sampleModalId: {
      type: String,
      "default": 'sample-modal'
    }
  },
  data: function data() {
    return {
      resultsForm: new window.Form({
        results: [],
        remarks: '',
        transaction_id: ''
      }),
      templates: [],
      sampleForm: new window.Form({
        id: '',
        transaction_id: '',
        collection_date: '',
        received_date: '',
        from: 0,
        source_from: '',
        specimen: '',
        equipment_code: '',
        status: 0
      }),
      sampleSources: [{
        name: 'Internal',
        id: 0
      }, {
        name: 'Referral',
        id: 1
      }]
    };
  },
  methods: {
    findTemplates: function findTemplates() {
      var _this = this;
      this.resultsForm.results = [];
      this.$httpClient.get('/patient-bills/' + this.selectedBill.id + '/templates').then(function (_ref) {
        var data = _ref.data;
        var templates = data.data;
        if (templates.length) {
          _this.resultsForm.results = templates.map(function (template) {
            var data = {
              template_id: template.template_id,
              template_type: template.template_type
            };
            if (template.template_type === 0) {
              data.result = template.results;
            }
            if (template.template_type === 1) {
              data.result = template.template_narrative;
            }
            return data;
          });
          var resultWithRemarks = templates.find(function (template) {
            return template.result_remarks !== null;
          });
          if (resultWithRemarks) {
            _this.resultsForm.remarks = resultWithRemarks.result_remarks;
          }
        }
        _this.templates = templates;
        _this.sampleForm.transaction_id = _this.templates[0].transaction_id;
        _this.sampleForm.id = _this.templates[0].sample_id;
        _this.sampleForm.from = _this.templates[0].sample_from;
        _this.sampleForm.source_from = _this.templates[0].sample_source_from;
        _this.sampleForm.specimen = _this.templates[0].sample_specimen;
        _this.sampleForm.equipment_code = _this.templates[0].sample_equipment_code;
        _this.sampleForm.status = _this.templates[0].sample_status;
      })["catch"](function (error) {
        console.error(error.message);
      });
    },
    openResultsModal: function openResultsModal() {
      // this.selectedBill = bill

      this.resultsForm.transaction_id = this.selectedBill.id;
      this.findTemplates();
      if (this.selectedBill.samples_collected === 0) {
        this.$bvModal.show('sample-modal');
        return;
      }
      this.$bvModal.show('result-modal');
    },
    saveSamples: function saveSamples() {
      var _this2 = this;
      this.sampleForm.post('/samples').then(function () {
        _this2.$toast.success('The samples have been collected');
        _this2.$bvModal.hide('sample-modal');
        setTimeout(function () {
          window.location.reload();
        }, 300);
      })["catch"]();
    },
    saveResults: function saveResults() {
      var _this3 = this;
      this.resultsForm.post('/results').then(function () {
        _this3.$bvModal.hide('result-modal');
        _this3.$toast.success('The Results have been saved');
        setTimeout(function () {
          window.location.reload();
        }, 300);

        // this.retrievePatientBills()
      })["catch"]();
    },
    resetForm: function resetForm() {
      this.resultsForm.reset();
      this.sampleForm.reset();
    }
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=template&id=3403946a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=template&id=3403946a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "sample-modal",
      title: "Sample Collection",
      "no-close-on-backdrop": "",
      "footer-class": "d-flex justify-content-end bg-muted-lt pt-2 border-top",
      "content-class": "bg-white rounded-3",
      "modal-class": "modal-blur",
      "hide-header-close": "",
      "no-close-on-esc": "",
      "no-enforce-focus": ""
    },
    on: {
      hidden: _vm.resetForm
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn(_ref) {
        var cancel = _ref.cancel;
        return [_c("button", {
          staticClass: "btn me-auto",
          attrs: {
            type: "button",
            disabled: _vm.sampleForm.processing
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return cancel.apply(null, arguments);
            }
          }
        }, [_vm._v("\n                Close\n            ")]), _vm._v(" "), _c("button", {
          staticClass: "btn btn-success",
          attrs: {
            type: "submit",
            disabled: _vm.sampleForm.processing
          },
          on: {
            click: _vm.saveSamples
          }
        }, [_vm._v("\n                Submit\n            ")])];
      }
    }])
  }, [_vm.templates.length ? _c("div", [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Sample Source")]), _vm._v(" "), _c("div", [_c("v-select", {
    attrs: {
      label: "name",
      clearable: false,
      reduce: function reduce(option) {
        return option.id;
      },
      options: _vm.sampleSources
    },
    model: {
      value: _vm.sampleForm.from,
      callback: function callback($$v) {
        _vm.$set(_vm.sampleForm, "from", $$v);
      },
      expression: "sampleForm.from"
    }
  }), _vm._v(" "), _vm.sampleForm.hasError("from") ? _c("div", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.sampleForm.getError("from"))
    }
  }) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Request From")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sampleForm.source_from,
      expression: "sampleForm.source_from"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "Doctor's Name, Hospital Name"
    },
    domProps: {
      value: _vm.sampleForm.source_from
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.sampleForm, "source_from", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.sampleForm.hasError("source_from") ? _c("div", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.sampleForm.getError("source_from"))
    }
  }) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Specimen")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sampleForm.specimen,
      expression: "sampleForm.specimen"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.sampleForm.specimen
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.sampleForm, "specimen", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.sampleForm.hasError("specimen") ? _c("div", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.sampleForm.getError("specimen"))
    }
  }) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-6"
  }, [_c("div", {
    staticClass: "fv-row mb-10"
  }, [_c("label", {
    staticClass: "form-label"
  }, [_vm._v("Equipment Code")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.sampleForm.equipment_code,
      expression: "sampleForm.equipment_code"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.sampleForm.equipment_code
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.sampleForm, "equipment_code", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.sampleForm.hasError("equipment_code") ? _c("div", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.sampleForm.getError("equipment_code"))
    }
  }) : _vm._e()])])])]) : _vm._e()]), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "result-modal",
      title: "Results Management",
      "content-class": "bg-white rounded-3 80vh",
      "modal-class": "modal-blur",
      size: "xl",
      "hide-footer": "",
      "hide-header-close": "",
      "no-close-on-esc": "",
      scrollable: "",
      "no-enforce-focus": ""
    },
    on: {
      hidden: _vm.resetForm
    }
  }, [_vm.templates.length ? _c("div", [_c("table", {
    staticClass: "styled-table table-sm table-vcenter"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "ps-2",
    staticStyle: {
      "line-height": "1"
    }
  }, [_vm._v("TEST NAME")]), _vm._v(" "), _c("th", {
    staticClass: "ps-2",
    staticStyle: {
      "line-height": "1"
    }
  }, [_vm._v("UNITS")]), _vm._v(" "), _c("th", {
    staticClass: "ps-2",
    staticStyle: {
      "line-height": "1"
    }
  }, [_vm._v("REF. RANGE")]), _vm._v(" "), _c("th", {
    staticClass: "ps-2",
    staticStyle: {
      "line-height": "1"
    }
  }, [_vm._v("RESULTS")])])]), _vm._v(" "), _vm._l(_vm.templates, function (template, index) {
    return _c("tbody", {
      key: index
    }, [template.template_type === 0 ? _c("tr", {}, [_c("td", {
      staticClass: "ps-2",
      attrs: {
        width: "35%"
      }
    }, [_c("span", {
      staticStyle: {
        display: "block",
        "margin-bottom": "2px",
        "font-weight": "bold"
      }
    }, [_vm._v(_vm._s(template.name))]), _vm._v(" "), template.remarks ? _c("span", {
      staticStyle: {
        display: "inline-block",
        "white-space": "break-spaces",
        "margin-top": "5px",
        color: "blueviolet"
      },
      domProps: {
        innerHTML: _vm._s(template.remarks)
      }
    }) : _vm._e()]), _vm._v(" "), _c("td", {
      attrs: {
        width: "25%"
      }
    }, [_vm._v("\n                        " + _vm._s(template.units) + "\n                    ")]), _vm._v(" "), _c("td", {
      attrs: {
        width: "20%"
      }
    }, [template.template_type === 0 && template.reference_type === 0 ? _c("span", [_vm._v("\n                            " + _vm._s(template.reference_range) + "\n                        ")]) : _vm._e()]), _vm._v(" "), template.template_type === 0 && template.reference_type === 0 ? _c("td", {
      staticClass: "ps-2",
      attrs: {
        width: "20%"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.resultsForm.results[index].result,
        expression: "resultsForm.results[index].result"
      }],
      staticClass: "form-control form-control-sm",
      staticStyle: {
        padding: "0.2375rem 0.75rem"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: _vm.resultsForm.results[index].result
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.resultsForm.results[index], "result", $event.target.value);
        }
      }
    })]) : _vm._e(), _vm._v(" "), template.template_type === 0 && template.reference_type === 1 ? _c("td", {
      attrs: {
        width: "20%"
      }
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.resultsForm.results[index].result,
        expression: "resultsForm.results[index].result"
      }],
      staticClass: "form-control form-control-sm",
      attrs: {
        type: "text",
        list: template.template_id
      },
      domProps: {
        value: _vm.resultsForm.results[index].result
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.resultsForm.results[index], "result", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("datalist", {
      attrs: {
        id: template.template_id
      }
    }, _vm._l(template.non_range_flag, function (value) {
      return _c("option", {
        domProps: {
          value: value,
          textContent: _vm._s(value)
        }
      });
    }), 0)]) : _vm._e()]) : _vm._e(), _vm._v(" "), template.template_type === 1 ? _c("tr", [_c("td", {
      attrs: {
        width: "35%"
      }
    }, [_c("span", {
      staticStyle: {
        display: "block",
        "margin-bottom": "2px"
      }
    }, [_vm._v(_vm._s(template.name))]), _vm._v(" "), template.remarks ? _c("span", {
      staticStyle: {
        display: "inline-block",
        "white-space": "break-spaces",
        "margin-top": "5px",
        color: "blueviolet"
      },
      domProps: {
        innerHTML: _vm._s(template.remarks)
      }
    }) : _vm._e()]), _vm._v(" "), _c("td", {
      attrs: {
        width: "25%%"
      }
    }, [_vm._v("\n                        " + _vm._s(template.template_narrative) + "\n                    ")]), _vm._v(" "), _c("td", {
      attrs: {
        width: "20%"
      }
    }), _vm._v(" "), template.template_type === 1 ? _c("td", {
      staticClass: "w-25",
      attrs: {
        width: "20%"
      }
    }) : _vm._e()]) : _vm._e()]);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.resultsForm.remarks,
      expression: "resultsForm.remarks"
    }],
    staticClass: "form-control form-control-solid",
    attrs: {
      name: "",
      id: "",
      cols: "30",
      rows: "3",
      placeholder: "Remarks"
    },
    domProps: {
      value: _vm.resultsForm.remarks
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resultsForm, "remarks", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm.templates[0].template_type === 1 ? _c("div", {
    staticClass: "fv-row"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Please Enter the Results")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.resultsForm.results[0].result,
      expression: "resultsForm.results[0].result"
    }],
    staticClass: "form-control form-control-solid",
    attrs: {
      cols: "30",
      rows: "15"
    },
    domProps: {
      value: _vm.resultsForm.results[0].result
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.resultsForm.results[0], "result", $event.target.value);
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row mt-3"
  }, [_c("div", {
    staticClass: "col-4 mx-auto"
  }, [_c("div", {
    staticClass: "d-flex justify-content-center"
  }, [_c("button", {
    staticClass: "btn btn-light me-3 d-inline-block",
    attrs: {
      type: "submit",
      disabled: _vm.resultsForm.processing
    },
    on: {
      click: function click($event) {
        return _vm.$bvModal.hide("result-modal");
      }
    }
  }, [_vm._v("\n                            Close\n                        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn-primary d-block",
    attrs: {
      type: "submit",
      disabled: _vm.resultsForm.processing
    },
    on: {
      click: _vm.saveResults
    }
  }, [_vm._v("\n                            Submit\n                        ")])])])])]) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=style&index=0&id=3403946a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=style&index=0&id=3403946a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.styled-table[data-v-3403946a] {\n    border-collapse: collapse;\n    margin: 0 0;\n    font-size: 14px;\n//font-family: sans-serif; width: 100%;\n}\n.styled-table thead tr[data-v-3403946a] {\n    background-color: #009879;\n    color: #ffffff;\n    text-align: left;\n}\n.styled-table th[data-v-3403946a] {\n    padding: 10px;\n}\n.styled-table td[data-v-3403946a] {\n    padding: 5px 10px;\n}\n.styled-table tbody tr[data-v-3403946a] {\n//border-bottom: 1px solid #dddddd;\n}\n.styled-table tbody tr td[data-v-3403946a] {\n    border: 1px solid #f3f3f3\n}\n.styled-table tbody tr[data-v-3403946a]:nth-of-type(even) {\n//background-color: #f3f3f3;\n}\n.styled-table tbody tr.active-row[data-v-3403946a] {\n    font-weight: bold;\n    color: #009879;\n}\n\n\n", "",{"version":3,"sources":["webpack://./resources/js/components/pages/patient/billing/ResultsManager.vue"],"names":[],"mappings":";AAoaA;IACA,yBAAA;IACA,WAAA;IACA,eAAA;AACA,yBAAA,EAAA,WAAA;AACA;AAEA;IACA,yBAAA;IACA,cAAA;IACA,gBAAA;AACA;AAEA;IACA,aAAA;AACA;AAEA;IACA,iBAAA;AACA;AAEA;AACA,kCAAA;AACA;AAEA;IACA;AACA;AAEA;AACA,2BAAA;AACA;AAEA;IACA,iBAAA;IACA,cAAA;AACA","sourcesContent":["<script>\nimport { defineComponent } from 'vue'\n\nexport default defineComponent({\n    name: 'ResultsManager',\n\n    props: {\n        selectedBill: {\n            type: Object,\n            default: () => null,\n        },\n        resultModalId: {\n            type: String,\n            default: 'result-modal',\n        },\n        sampleModalId: {\n            type: String,\n            default: 'sample-modal',\n        },\n    },\n\n    data () {\n        return {\n            resultsForm: new window.Form({\n                results: [],\n                remarks: '',\n                transaction_id: '',\n            }),\n\n            templates: [],\n\n            sampleForm: new window.Form({\n                id: '',\n                transaction_id: '',\n                collection_date: '',\n                received_date: '',\n                from: 0,\n                source_from: '',\n                specimen: '',\n                equipment_code: '',\n                status: 0\n            }),\n\n            sampleSources: [{\n                name: 'Internal',\n                id: 0\n            }, {\n                name: 'Referral',\n                id: 1\n            }],\n        }\n    },\n\n    methods: {\n        findTemplates() {\n\n            this.resultsForm.results = []\n\n            this.$httpClient.get('/patient-bills/' + this.selectedBill.id + '/templates')\n                .then(({data}) => {\n\n                    let templates = data.data\n\n                    if (templates.length) {\n\n                        this.resultsForm.results = templates.map((template) => {\n\n                            let data = {\n                                template_id: template.template_id,\n                                template_type: template.template_type,\n                            }\n\n                            if (template.template_type === 0) {\n                                data.result = template.results\n                            }\n\n                            if (template.template_type === 1) {\n                                data.result = template.template_narrative;\n                            }\n\n                            return data;\n                        })\n\n                        let resultWithRemarks = templates.find((template) => template.result_remarks !== null);\n\n                        if (resultWithRemarks) {\n                            this.resultsForm.remarks = resultWithRemarks.result_remarks\n                        }\n\n                    }\n\n                    this.templates = templates\n\n                    this.sampleForm.transaction_id = this.templates[0].transaction_id\n                    this.sampleForm.id = this.templates[0].sample_id\n                    this.sampleForm.from = this.templates[0].sample_from\n                    this.sampleForm.source_from = this.templates[0].sample_source_from\n                    this.sampleForm.specimen = this.templates[0].sample_specimen\n                    this.sampleForm.equipment_code = this.templates[0].sample_equipment_code\n                    this.sampleForm.status = this.templates[0].sample_status\n\n                }).catch((error) => {\n\n                console.error(error.message)\n            })\n        },\n\n        openResultsModal() {\n            // this.selectedBill = bill\n\n            this.resultsForm.transaction_id = this.selectedBill.id\n\n            this.findTemplates()\n\n            if (this.selectedBill.samples_collected === 0) {\n\n                this.$bvModal.show('sample-modal')\n\n                return\n            }\n\n            this.$bvModal.show('result-modal')\n        },\n\n        saveSamples() {\n            this.sampleForm.post('/samples')\n                .then(() => {\n\n                    this.$toast.success('The samples have been collected')\n\n                    this.$bvModal.hide('sample-modal');\n\n                    setTimeout(() => {\n                        window.location.reload()\n                    }, 300)\n\n                }).catch()\n        },\n\n        saveResults() {\n            this.resultsForm.post('/results')\n                .then(() => {\n\n                    this.$bvModal.hide('result-modal');\n\n                    this.$toast.success('The Results have been saved')\n\n                    setTimeout(() => {\n                        window.location.reload()\n                    }, 300)\n\n                    // this.retrievePatientBills()\n\n                }).catch()\n        },\n\n        resetForm() {\n            this.resultsForm.reset()\n            this.sampleForm.reset()\n        }\n    }\n})\n\n</script>\n\n<template>\n    <div>\n        <!-- Sample Modal-->\n        <b-modal\n            id=\"sample-modal\"\n            title=\"Sample Collection\"\n            no-close-on-backdrop\n            footer-class=\"d-flex justify-content-end bg-muted-lt pt-2 border-top\"\n            content-class=\"bg-white rounded-3\"\n            modal-class=\"modal-blur\"\n            hide-header-close\n            no-close-on-esc\n            no-enforce-focus\n            @hidden=\"resetForm\">\n\n            <div v-if=\"templates.length\">\n\n                <div class=\"mb-3\">\n                    <label for=\"\" class=\"form-label\">Sample Source</label>\n\n                    <div>\n                        <v-select v-model=\"sampleForm.from\"\n                                  label=\"name\"\n                                  :clearable=\"false\"\n                                  :reduce=\"option => option.id\"\n                                  :options=\"sampleSources\">\n                        </v-select>\n\n                        <div class=\"text-danger\"\n                             v-if=\"sampleForm.hasError('from')\"\n                             v-text=\"sampleForm.getError('from')\">\n                        </div>\n\n                    </div>\n                </div>\n\n                <div class=\"mb-3\">\n                    <label class=\"form-label\">Request From</label>\n\n                    <input type=\"text\" class=\"form-control\"\n                           v-model=\"sampleForm.source_from\"\n                           placeholder=\"Doctor's Name, Hospital Name\">\n                    <div class=\"text-danger\"\n                         v-if=\"sampleForm.hasError('source_from')\"\n                         v-text=\"sampleForm.getError('source_from')\">\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-xl-6\">\n                        <div class=\"mb-3\">\n                            <label class=\"form-label\">Specimen</label>\n\n                            <input type=\"text\" class=\"form-control\"\n                                   v-model=\"sampleForm.specimen\">\n\n                            <div class=\"text-danger\"\n                                 v-if=\"sampleForm.hasError('specimen')\"\n                                 v-text=\"sampleForm.getError('specimen')\">\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"col-xl-6\">\n                        <div class=\"fv-row mb-10\">\n                            <label class=\"form-label\">Equipment Code</label>\n\n                            <input type=\"text\" class=\"form-control\"\n                                   v-model=\"sampleForm.equipment_code\">\n\n                            <div class=\"text-danger\"\n                                 v-if=\"sampleForm.hasError('equipment_code')\"\n                                 v-text=\"sampleForm.getError('equipment_code')\">\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n\n\n            <template #modal-footer=\"{cancel}\">\n                <button type=\"button\" class=\"btn me-auto\" @click.prevent=\"cancel\" :disabled=\"sampleForm.processing\">\n                    Close\n                </button>\n                <button type=\"submit\" class=\"btn btn-success\" :disabled=\"sampleForm.processing\"\n                        @click=\"saveSamples\">\n                    Submit\n                </button>\n            </template>\n\n        </b-modal>\n\n\n        <!-- Results Modal-->\n        <b-modal\n            id=\"result-modal\"\n            title=\"Results Management\"\n            content-class=\"bg-white rounded-3 80vh\"\n            modal-class=\"modal-blur\"\n            size=\"xl\"\n            hide-footer\n            hide-header-close\n            no-close-on-esc\n            scrollable\n            no-enforce-focus\n            @hidden=\"resetForm\">\n\n            <div v-if=\"templates.length\">\n                <table class=\"styled-table table-sm table-vcenter\">\n                    <thead>\n                    <tr>\n                        <th class=\"ps-2\" style=\"line-height: 1; \">TEST NAME</th>\n                        <th class=\"ps-2\" style=\"line-height: 1; \">UNITS</th>\n                        <th class=\"ps-2\" style=\"line-height: 1; \">REF. RANGE</th>\n                        <th class=\"ps-2\" style=\"line-height: 1; \">RESULTS</th>\n                    </tr>\n                    </thead>\n\n                    <tbody v-for=\"(template, index) in templates\" :key=\"index\">\n\n                    <tr v-if=\"template.template_type === 0\" class=\"\">\n\n                        <td class=\"ps-2\" width=\"35%\">\n\n                            <span style=\"display: block; margin-bottom: 2px; font-weight: bold\">{{\n                                    template.name\n                                }}</span>\n\n                            <span\n                                style=\"display: inline-block; white-space: break-spaces; margin-top: 5px; color: blueviolet\"\n                                v-if=\"template.remarks\"\n                                v-html=\"template.remarks\">\n\n                            </span>\n\n                        </td>\n\n                        <td width=\"25%\">\n                            {{ template.units }}\n                        </td>\n\n                        <td width=\"20%\">\n                            <span v-if=\"template.template_type === 0 && template.reference_type === 0\">\n                                {{ template.reference_range }}\n                            </span>\n                        </td>\n\n                        <td v-if=\"template.template_type === 0 && template.reference_type === 0\" width=\"20%\"\n                            class=\"ps-2\">\n                            <input type=\"text\" class=\"form-control form-control-sm\"\n                                   v-model=\"resultsForm.results[index].result\"\n                                   style=\"padding: 0.2375rem 0.75rem\">\n                        </td>\n\n                        <td v-if=\"template.template_type === 0 && template.reference_type === 1\" width=\"20%\">\n\n                            <input type=\"text\"\n                                   :list=\"template.template_id\"\n                                   class=\"form-control form-control-sm\"\n                                   v-model=\"resultsForm.results[index].result\">\n\n                            <datalist :id=\"template.template_id\">\n                                <option v-for=\"value in template.non_range_flag\"\n                                        :value=\"value\" v-text=\"value\">\n                                </option>\n                            </datalist>\n\n                        </td>\n\n                    </tr>\n\n                    <tr v-if=\"template.template_type === 1\">\n\n                        <td width=\"35%\">\n\n                            <span style=\"display: block; margin-bottom: 2px\">{{ template.name }}</span>\n\n                            <span\n                                style=\"display: inline-block; white-space: break-spaces; margin-top: 5px; color: blueviolet\"\n                                v-if=\"template.remarks\"\n                                v-html=\"template.remarks\">\n\n                            </span>\n\n                        </td>\n\n                        <td width=\"25%%\">\n                            {{ template.template_narrative }}\n                        </td>\n\n                        <td width=\"20%\"></td>\n\n                        <td width=\"20%\" class=\"w-25\" v-if=\"template.template_type === 1\">\n                            <!--                                <input type=\"text\" class=\"form-control form-control-sm form-control-solid\"-->\n                            <!--                                       v-model=\"resultsForm.results[index].narrative\">-->\n\n                            <!--                            <div class=\"fv-plugins-message-container invalid-feedback\"-->\n                            <!--                                 v-if=\"form.hasError('resultsForm.results[index].result')\"-->\n                            <!--                                 v-text=\"form.getError('resultsForm.results[index].result')\">-->\n                            <!--                            </div>-->\n                        </td>\n\n\n                    </tr>\n\n                    </tbody>\n                </table>\n\n                <div class=\"mt-3\">\n                    <textarea name=\"\" id=\"\" cols=\"30\" rows=\"3\"\n                              class=\"form-control form-control-solid\"\n                              placeholder=\"Remarks\"\n                              v-model=\"resultsForm.remarks\">\n                    </textarea>\n                </div>\n\n                <div class=\"fv-row\" v-if=\"templates[0].template_type === 1\">\n                    <label for=\"\" class=\"form-label\">Please Enter the Results</label>\n                    <textarea cols=\"30\" rows=\"15\"\n                              class=\"form-control form-control-solid\"\n                              v-model=\"resultsForm.results[0].result\">\n                    </textarea>\n                </div>\n\n                <div class=\"row mt-3\">\n                    <div class=\"col-4 mx-auto\">\n                        <div class=\"d-flex justify-content-center\">\n                            <button type=\"submit\"\n                                    class=\"btn btn-light me-3 d-inline-block\"\n                                    :disabled=\"resultsForm.processing\"\n                                    @click=\"$bvModal.hide('result-modal')\">\n                                Close\n                            </button>\n\n                            <button type=\"submit\"\n                                    class=\"btn btn-primary d-block\"\n                                    @click=\"saveResults\" :disabled=\"resultsForm.processing\">\n                                Submit\n                            </button>\n                        </div>\n\n                    </div>\n\n\n                </div>\n            </div>\n\n        </b-modal>\n\n    </div>\n</template>\n\n<style scoped>\n.styled-table {\n    border-collapse: collapse;\n    margin: 0 0;\n    font-size: 14px;\n//font-family: sans-serif; width: 100%;\n}\n\n.styled-table thead tr {\n    background-color: #009879;\n    color: #ffffff;\n    text-align: left;\n}\n\n.styled-table th {\n    padding: 10px;\n}\n\n.styled-table td {\n    padding: 5px 10px;\n}\n\n.styled-table tbody tr {\n//border-bottom: 1px solid #dddddd;\n}\n\n.styled-table tbody tr td {\n    border: 1px solid #f3f3f3\n}\n\n.styled-table tbody tr:nth-of-type(even) {\n//background-color: #f3f3f3;\n}\n\n.styled-table tbody tr.active-row {\n    font-weight: bold;\n    color: #009879;\n}\n\n\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=style&index=0&id=3403946a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=style&index=0&id=3403946a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsManager_vue_vue_type_style_index_0_id_3403946a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResultsManager.vue?vue&type=style&index=0&id=3403946a&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=style&index=0&id=3403946a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsManager_vue_vue_type_style_index_0_id_3403946a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsManager_vue_vue_type_style_index_0_id_3403946a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/patient/billing/ResultsManager.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/pages/patient/billing/ResultsManager.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResultsManager_vue_vue_type_template_id_3403946a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResultsManager.vue?vue&type=template&id=3403946a&scoped=true& */ "./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=template&id=3403946a&scoped=true&");
/* harmony import */ var _ResultsManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResultsManager.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=script&lang=js&");
/* harmony import */ var _ResultsManager_vue_vue_type_style_index_0_id_3403946a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResultsManager.vue?vue&type=style&index=0&id=3403946a&scoped=true&lang=css& */ "./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=style&index=0&id=3403946a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ResultsManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResultsManager_vue_vue_type_template_id_3403946a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ResultsManager_vue_vue_type_template_id_3403946a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3403946a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/patient/billing/ResultsManager.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResultsManager.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsManager_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=template&id=3403946a&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=template&id=3403946a&scoped=true& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsManager_vue_vue_type_template_id_3403946a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsManager_vue_vue_type_template_id_3403946a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsManager_vue_vue_type_template_id_3403946a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResultsManager.vue?vue&type=template&id=3403946a&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=template&id=3403946a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=style&index=0&id=3403946a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=style&index=0&id=3403946a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsManager_vue_vue_type_style_index_0_id_3403946a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResultsManager.vue?vue&type=style&index=0&id=3403946a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/ResultsManager.vue?vue&type=style&index=0&id=3403946a&scoped=true&lang=css&");


/***/ })

}]);
//# sourceMappingURL=resources_js_components_pages_patient_billing_ResultsManager_vue.js.map