"use strict";
(self["webpackChunkmedic_hospital_management"] = self["webpackChunkmedic_hospital_management"] || []).push([["resources_js_components_pages_doctor_patient_Note_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Note.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Note.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_patient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/patient */ "./resources/js/services/patient.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
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
        titleClass: 'text-right',
        dataClass: 'text-right',
        callback: this.$options.filters.DATE_MONTH_YEAR_HOUR_MINUTES
      }, {
        name: 'note',
        title: 'Note'
      }, {
        name: 'user.name',
        title: 'Written By'
      }, {
        name: '__slot:actions',
        dataClass: 'text-right '
      }],
      moreParams: {
        filter: {
          patient_id: this.visit.patient_id
        }
      },
      form: new window.Form({
        id: '',
        patient_visit_id: this.visit.id,
        status: 0,
        note: ''
      }),
      status: [{
        name: 'Shared',
        value: 0
      }, {
        name: 'Private',
        value: 1
      }],
      selectedMedicalNote: null,
      patientVisitRecords: this.patientVisits
    };
  },
  computed: {
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
    showCreateForm: function showCreateForm() {
      this.$bvModal.show('medical-modal');
    },
    viewMedicalNote: function viewMedicalNote(note) {
      this.selectedMedicalNote = note;
      this.$bvModal.show('view-medical-modal');
    },
    createMedical: function createMedical() {
      var _this = this;
      this.form.post('/medicals').then(function () {
        _this.$bvModal.hide('medical-modal');
        _this.$toast.success('Medical Note Saved');
      })["catch"]();
    },
    showUpdateForm: function showUpdateForm(note) {
      this.form.populate(note);
      this.$bvModal.show('medical-update-modal');
    },
    updateMedical: function updateMedical() {
      var _this2 = this;
      this.form.patch('/medicals/' + this.form.id).then(function () {
        _this2.$bvModal.hide('medical-update-modal');
        _this2.$toast.success('Changes Saved');
      })["catch"]();
    },
    deleteMedical: function deleteMedical(rowData) {
      var _this3 = this;
      this.$toast.question('Are you sure', 'You are deleting Medical Record').then(function () {
        _services_patient__WEBPACK_IMPORTED_MODULE_0__["default"].deleteMedical(rowData.id).then(function () {
          _this3.vuetable.reload();
          _this3.$toast.info('Medical record deleted');
        })["catch"](function () {
          _this3.$toast.error('The medical note could not be deleted');
        });
      });
    },
    cleanUp: function cleanUp() {
      this.vuetable.reload();
    },
    findAllPatientVisits: function findAllPatientVisits() {
      var _this4 = this;
      _services_patient__WEBPACK_IMPORTED_MODULE_0__["default"].findAllPatientsVisits({
        page: {
          size: 10000
        },
        filter: {
          patient_id: this.patientId
        },
        sort: '-date'
      }).then(function (_ref) {
        var data = _ref.data;
        _this4.patientVisits = data.data;
      })["catch"](function (error) {
        console.log(error);
        _this4.$toast.error('Failed loading patient visits');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Note.vue?vue&type=template&id=575328c6&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Note.vue?vue&type=template&id=575328c6& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("h2", [_vm._v("Notes")]), _vm._v(" "), _c("div", {
    staticClass: "card-actions"
  }, [_c("a", {
    staticClass: "btn",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.showCreateForm.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "uil uil-plus me-1"
  }), _vm._v(" Write Note\n        ")])])]), _vm._v(" "), _c("VueTable", {
    ref: "table",
    attrs: {
      "api-url": "/medicals",
      fields: _vm.fields,
      "append-params": _vm.moreParams
    },
    scopedSlots: _vm._u([{
      key: "date",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "media-body align-self-center"
        }, [_c("span", {
          staticClass: "text-sm"
        }, [_vm._v(_vm._s(_vm._f("date_DATE_MONTH_YEAR")(props.rowData.created_at)) + " ")]), _vm._v(" "), _c("div", {
          staticClass: "font-size-12 text-purple-400"
        }, [_c("div", {
          staticClass: "text-truncate d-flex justify-content-end",
          attrs: {
            id: "tooltip-target-1"
          }
        }, [_c("div", [_vm._v(_vm._s(_vm._f("TIME_HOUR_MINUTES")(props.rowData.created_at)))])])])])];
      }
    }, {
      key: "actions",
      fn: function fn(props) {
        return [_c("div", {
          staticClass: "dropdown"
        }, [_c("button", {
          staticClass: "btn dropdown-toggle align-text-top",
          attrs: {
            "data-bs-toggle": "dropdown"
          }
        }, [_vm._v("\n            Menu\n          ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-menu dropdown-menu-end"
        }, [_c("a", {
          staticClass: "dropdown-item",
          attrs: {
            href: "#"
          },
          on: {
            click: function click($event) {
              return _vm.viewMedicalNote(props.rowData);
            }
          }
        }, [_c("i", {
          staticClass: "uil uil-eye me-2"
        }), _vm._v(" View\n            ")]), _vm._v(" "), _c("div", {
          staticClass: "dropdown-divider"
        }), _vm._v(" "), _c("a", {
          staticClass: "dropdown-item",
          attrs: {
            href: "#"
          },
          on: {
            click: function click($event) {
              return _vm.showUpdateForm(props.rowData);
            }
          }
        }, [_c("i", {
          staticClass: "uil uil-edit me-2"
        }), _vm._v(" Update\n            ")])])])];
      }
    }])
  })], 1), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "medical-modal",
      title: "Write Note",
      "title-class": "font-18",
      "no-close-on-backdrop": "",
      size: "lg",
      "modal-class": "modal-blur",
      "hide-header-close": "",
      "footer-class": "bg-light-alpha border-top d-flex justify-content-end",
      lazy: ""
    },
    on: {
      hidden: _vm.cleanUp
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
            click: _vm.createMedical
          }
        }, [_vm._v("\n        Submit\n      ")])];
      }
    }])
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.note,
      expression: "form.note"
    }],
    staticClass: "form-control",
    attrs: {
      id: "note",
      type: "text",
      placeholder: "The medical notes go here ...",
      rows: "6",
      name: "note"
    },
    domProps: {
      value: _vm.form.note
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "note", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.errors.has("note") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.errors.first("note"))
    }
  }) : _vm._e()])]), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "medical-update-modal",
      title: "Medical Note",
      "title-class": "font-18",
      "no-close-on-backdrop": "",
      "hide-header-close": "",
      size: "lg",
      "footer-class": "d-flex justify-content-start",
      lazy: ""
    },
    on: {
      hidden: _vm.cleanUp
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn(_ref2) {
        var cancel = _ref2.cancel;
        return [_c("button", {
          staticClass: "btn btn-success",
          attrs: {
            form: "updateForm",
            type: "submit",
            disabled: _vm.form.processing
          }
        }, [_vm._v("\n        " + _vm._s(_vm.form.processing ? "Processing..." : "Save Changes") + "\n      ")]), _vm._v(" "), _c("button", {
          staticClass: "btn btn-light mx-2",
          attrs: {
            disabled: _vm.form.processing
          },
          on: {
            click: cancel
          }
        }, [_vm._v("\n        Close\n      ")])];
      }
    }])
  }, [_c("form", {
    attrs: {
      id: "updateForm"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updateMedical.apply(null, arguments);
      },
      keydown: function keydown(event) {
        return _vm.form.errors.clear(event.target.name);
      }
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.note,
      expression: "form.note"
    }],
    staticClass: "form-control",
    attrs: {
      id: "note",
      type: "text",
      placeholder: "The medical notes go here ...",
      rows: "6",
      name: "note"
    },
    domProps: {
      value: _vm.form.note
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "note", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.errors.has("note") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.errors.get("note"))
    }
  }) : _vm._e()])])]), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "view-medical-modal",
      title: "Notes Details",
      "title-class": "font-18",
      "no-close-on-backdrop": "",
      size: "lg",
      "modal-class": "modal-blur",
      "hide-header-close": "",
      "footer-class": "bg-light-alpha border-top d-flex justify-content-end",
      lazy: ""
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn(_ref3) {
        var cancel = _ref3.cancel;
        return [_c("a", {
          staticClass: "btn",
          attrs: {
            href: "#"
          },
          on: {
            click: cancel
          }
        }, [_vm._v("Dismiss")])];
      }
    }])
  }, [_vm.selectedMedicalNote ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticStyle: {
      "white-space": "pre-wrap"
    },
    domProps: {
      innerHTML: _vm._s(_vm.selectedMedicalNote.note)
    }
  })]) : _vm._e()])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/pages/doctor/patient/Note.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/pages/doctor/patient/Note.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Note_vue_vue_type_template_id_575328c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Note.vue?vue&type=template&id=575328c6& */ "./resources/js/components/pages/doctor/patient/Note.vue?vue&type=template&id=575328c6&");
/* harmony import */ var _Note_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Note.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/doctor/patient/Note.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Note_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Note_vue_vue_type_template_id_575328c6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Note_vue_vue_type_template_id_575328c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/doctor/patient/Note.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/doctor/patient/Note.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pages/doctor/patient/Note.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Note_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Note.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Note.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Note_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/doctor/patient/Note.vue?vue&type=template&id=575328c6&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/doctor/patient/Note.vue?vue&type=template&id=575328c6& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Note_vue_vue_type_template_id_575328c6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Note_vue_vue_type_template_id_575328c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Note_vue_vue_type_template_id_575328c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Note.vue?vue&type=template&id=575328c6& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Note.vue?vue&type=template&id=575328c6&");


/***/ })

}]);
//# sourceMappingURL=resources_js_components_pages_doctor_patient_Note_vue.js.map