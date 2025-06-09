"use strict";
(self["webpackChunkmedic_hospital_management"] = self["webpackChunkmedic_hospital_management"] || []).push([["resources_js_components_pages_doctor_patient_Prescriptions_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Prescriptions.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Prescriptions.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    },
    invoice: {
      type: Object,
      required: true
    },
    items: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    stores: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      prescriptions: [],
      fields: [{
        name: 'prescribed_at',
        title: 'Date',
        titleClass: 'ps-3',
        dataClass: 'ps-3',
        callback: this.$options.filters.date_DATE_MONTH_YEAR,
        width: '10%'
      }, {
        name: 'item.name',
        title: 'Drug',
        titleClass: 'ps-3',
        dataClass: 'ps-3 text-truncate',
        width: '30%'
      }, {
        name: 'dosage',
        title: 'Dosage',
        titleClass: 'ps-3',
        dataClass: 'ps-3',
        width: '10%'
      }, {
        name: 'frequency',
        title: 'Frequency',
        titleClass: 'ps-3',
        dataClass: 'ps-3',
        width: '15%',
        callback: function callback(value) {
          return value + ' times';
        }
      }, {
        name: 'duration',
        title: 'Duration',
        titleClass: 'ps-3',
        dataClass: 'ps-3',
        width: '15%',
        callback: function callback(value) {
          return value + ' day(s)';
        }
      }, {
        name: 'user.name',
        title: 'Written By',
        titleClass: 'ps-3',
        dataClass: 'ps-3 text-truncate',
        width: '10%'
      }, {
        name: '__slot:actions',
        dataClass: 'text-center',
        width: '10%'
      }],
      moreParams: {
        filter: {
          patient_id: this.visit.patient_id
        },
        include: 'items,users',
        sort: '-created_at'
      },
      prescription: {},
      form: new window.Form({
        id: null,
        patient_visit_id: this.visit.id,
        item_id: '',
        intake_id: '',
        comments: '',
        dosage: '',
        frequency: 1,
        duration: 1,
        quantity: 0,
        unit_price: 0
      }),
      viewForm: false,
      // items: [],
      intakes: [],
      // patientVisitRecords: this.patientVisits,

      availableStock: 0,
      priceRecord: 0
    };
  },
  computed: {
    // vuetable () {
    //   return this.$refs.table.$refs.vuetable
    // },
    prescriptionsTotal: function prescriptionsTotal() {
      if (!this.prescriptions.length) {
        return 0;
      }
      var vm = this;
      return this.prescriptions.reduce(function (accumulator, current) {
        var price = Number(0);
        if (vm.invoice.cash_credit === 0) {
          price = current.item.cash_price ? current.item.cash_price.charge_value * 0.01 : 0;
        }
        if (vm.invoice.cash_credit === 1) {
          price = current.item.scheme_price ? current.item.scheme_price.charge_value * 0.01 : 0;
        }
        return Number.parseFloat(price) + accumulator;
      }, 0);
    }
  },
  watch: {
    'moreParams.filter.patient_visit_id': function moreParamsFilterPatient_visit_id(newId) {
      if (newId) {
        this.vuetable.refresh();
      }
    },
    'form.item_id': function formItem_id(newId) {
      if (newId) {
        var store = this.stores.find(function (store) {
          return store.name === 'Pharmacy';
        });
        if (store) {
          this.findAvailableStock(store.id);
        }
      }
    }
  },
  created: function created() {
    this.findPrescriptions();
  },
  // mounted () {
  //   this.findIntakes()
  // },

  methods: {
    findPrescriptions: function findPrescriptions() {
      var _this = this;
      this.$httpClient.get('/prescriptions', {
        params: {
          filter: {
            patient_id: this.visit.patient_id
          }
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this.prescriptions = data.data;
      })["catch"]();
    },
    showPrescriptionDetail: function showPrescriptionDetail(prescription) {
      this.prescription = prescription;
      this.$bvModal.show('prescription-detail-modal');
    },
    createPrescription: function createPrescription() {
      var _this2 = this;
      this.form.post('/prescriptions').then(function () {
        _this2.findPrescriptions();
        _this2.$toast.success('Prescription has been added');
      })["catch"](function (error) {});
    },
    updatePrescription: function updatePrescription() {
      var _this3 = this;
      this.form.patch('/prescriptions/' + this.form.id).then(function () {
        _this3.findPrescriptions();

        // this.vuetable.reload()

        _this3.$bvModal.hide('prescription-update-modal');
        _this3.$toast.success('Prescription updated');
      })["catch"]();
    },
    deletePrescription: function deletePrescription(rowData) {
      var _this4 = this;
      this.$toast.question('Are you sure', 'Delete Prescription').then(function () {
        _services_patient__WEBPACK_IMPORTED_MODULE_0__["default"].deletePrescription(rowData.id).then(function () {
          _this4.$toast.info('Prescription deleted');
          _this4.findPrescriptions();
        })["catch"](function () {
          _this4.$toast.error('Something went wrong! Prescription not deleted');
        });
      });
    },
    findIntakes: function findIntakes() {
      var _this5 = this;
      _services_patient__WEBPACK_IMPORTED_MODULE_0__["default"].findAllPrescriptionIntake().then(function (_ref2) {
        var data = _ref2.data;
        _this5.intakes = data;
      })["catch"]();
    },
    findAvailableStock: function findAvailableStock(storeId) {
      var _this6 = this;
      this.availableStock = 0;

      // if (this.form.item_id) {
      this.$httpClient.get('/available_stock/' + this.form.item_id + '/' + storeId).then(function (_ref3) {
        var data = _ref3.data;
        _this6.availableStock = data;
      })["catch"](function (error) {
        console.log(error);
      });
      // }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Prescriptions.vue?vue&type=template&id=3ff171f5&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Prescriptions.vue?vue&type=template&id=3ff171f5& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("\n        Prescriptions\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "card-actions"
  }, [_c("button", {
    directives: [{
      name: "b-modal",
      rawName: "v-b-modal:prescription-modal",
      arg: "prescription-modal"
    }],
    staticClass: "btn btn-outline-primary",
    attrs: {
      disabled: _vm.visit.posted_at
    }
  }, [_vm._v("\n          Prescribe\n        ")])])]), _vm._v(" "), _c("table", {
    staticClass: "table table-bordered"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.prescriptions, function (drug) {
    return _c("tr", [_c("td", {
      staticClass: "ps-3"
    }, [_vm._v("\n            " + _vm._s(_vm._f("date_DATE_MONTH_YEAR")(drug.prescribed_at)) + "\n          ")]), _vm._v(" "), _c("td", {
      staticClass: "ps-3"
    }, [_vm._v("\n            " + _vm._s(drug.item.name) + "\n          ")]), _vm._v(" "), _c("td", {
      staticClass: "ps-3"
    }, [_vm._v("\n            " + _vm._s(drug.dosage) + "\n          ")]), _vm._v(" "), _c("td", {
      staticClass: "ps-3"
    }, [_vm._v("\n            " + _vm._s(drug.frequency) + "\n          ")]), _vm._v(" "), _c("td", {
      staticClass: "ps-3"
    }, [_vm._v("\n            " + _vm._s(drug.duration) + "\n          ")]), _vm._v(" "), _c("td", {
      staticClass: "ps-3"
    }, [_vm._v("\n            " + _vm._s(drug.user.name) + "\n          ")]), _vm._v(" "), _vm.invoice.cash_credit === 0 ? _c("td", {
      staticClass: "ps-3"
    }, [_vm._v("\n            " + _vm._s(_vm._f("toMoneyFormat")(drug.item.cash_price ? drug.item.cash_price.charge_value * 0.01 : 0)) + "\n          ")]) : _vm._e(), _vm._v(" "), _vm.invoice.cash_credit === 1 ? _c("td", {
      staticClass: "ps-3"
    }, [_vm._v("\n            " + _vm._s(_vm._f("toMoneyFormat")(drug.item.scheme_price ? drug.item.scheme_price.charge_value * 0.01 : 0)) + "\n          ")]) : _vm._e(), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-white py-1",
      on: {
        click: function click($event) {
          return _vm.deletePrescription(drug);
        }
      }
    }, [_c("i", {
      staticClass: "uil uil-trash-alt text-danger me-1"
    })])])]);
  }), _vm._v(" "), _c("tr", [_c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    staticClass: "ps-2"
  }, [_vm._v("\n            " + _vm._s(_vm._f("toMoneyFormat")(_vm.prescriptionsTotal)) + "\n          ")])])], 2)])]), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "prescription-modal",
      title: "Prescription Form",
      "title-class": "font-18",
      "no-close-on-backdrop": "",
      "hide-header-close": "",
      "modal-class": "modal-blur",
      "content-class": "bg-white rounded-3",
      size: "lg",
      "footer-class": "d-flex justify-content-between bg-muted-lt border-top"
    },
    scopedSlots: _vm._u([{
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
            type: "submit",
            disabled: _vm.form.processing
          },
          on: {
            click: _vm.createPrescription
          }
        }, [_vm._v("\n        Prescribe\n      ")])];
      }
    }])
  }, [_c("div", {
    staticClass: "mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Medication\n        "), _vm.form.item_id ? _c("small", {
    staticClass: "form-label-description text-indigo"
  }, [_vm._v("Available stock:\n          " + _vm._s(_vm.availableStock) + " units ")]) : _vm._e()]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.items,
      label: "name",
      reduce: function reduce(option) {
        return option.id;
      },
      clearable: false,
      name: "item_id"
    },
    scopedSlots: _vm._u([{
      key: "selected-option",
      fn: function fn(item) {
        return [_c("div", [_c("div", {
          staticClass: "font-weight-medium"
        }, [_vm._v("\n              " + _vm._s(item.name) + "\n            ")]), _vm._v(" "), _vm.invoice.cash_credit === 0 ? _c("div", {
          staticClass: "text-primary small"
        }, [_vm._v("\n              KES " + _vm._s(_vm._f("toMoneyFormat")(item.cash_price ? item.cash_price.charge_value * 0.01 : 0)) + "\n            ")]) : _c("div", {
          staticClass: "text-primary small"
        }, [_vm._v("\n              KES " + _vm._s(_vm._f("toMoneyFormat")(item.scheme_price ? item.scheme_price.charge_value * 0.01 : 0)) + "\n            ")])])];
      }
    }]),
    model: {
      value: _vm.form.item_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "item_id", $$v);
      },
      expression: "form.item_id"
    }
  }), _vm._v(" "), _vm.form.hasError("item_id") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.getError("item_id"))
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-4"
  }, [_c("div", {
    staticClass: "mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Dosage")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.dosage,
      expression: "form.dosage"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      placeholder: "20mg"
    },
    domProps: {
      value: _vm.form.dosage
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "dosage", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.hasError("dosage") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.getError("dosage"))
    }
  }) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4"
  }, [_c("div", {
    staticClass: "mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Frequency")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.frequency,
      expression: "form.frequency"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number"
    },
    domProps: {
      value: _vm.form.frequency
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "frequency", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.hasError("frequency") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.getError("frequency"))
    }
  }) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Duration "), _c("small", {
    staticClass: "text-indigo"
  }, [_vm._v("(days)")])]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.duration,
      expression: "form.duration"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      min: "1"
    },
    domProps: {
      value: _vm.form.duration
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "duration", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.hasError("duration") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.getError("duration"))
    }
  }) : _vm._e()])])])]), _vm._v(" "), _c("b-modal", {
    attrs: {
      id: "prescription-update-modal",
      title: "Prescription Form",
      "title-class": "font-18",
      "no-close-on-backdrop": "",
      scrollable: "",
      "footer-bg-variant": "light",
      "hide-header-close": "",
      size: "lg"
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn(_ref2) {
        var cancel = _ref2.cancel;
        return [_c("div", {
          staticClass: "d-flex justify-content-between align-items-center bg-light-alpha"
        }, [_c("button", {
          staticClass: "btn btn-light mr-2",
          attrs: {
            disabled: _vm.form.processing
          },
          on: {
            click: cancel
          }
        }, [_vm._v("\n          Close\n        ")]), _vm._v(" "), _c("button", {
          staticClass: "btn btn-success",
          attrs: {
            form: "prescriptionUpdateForm",
            type: "submit",
            disabled: _vm.form.processing
          }
        }, [_vm._v("\n          " + _vm._s(_vm.form.processing ? "Processing..." : "Update") + "\n        ")])])];
      }
    }])
  }, [_c("form", {
    attrs: {
      id: "prescriptionUpdateForm"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updatePrescription.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-8"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "provisional_diagnosis"
    }
  }, [_vm._v("Medicine")]), _vm._v(" "), _c("v-select", {
    attrs: {
      options: _vm.items,
      label: "name",
      reduce: function reduce(option) {
        return option.id;
      },
      clearable: false,
      name: "item_id"
    },
    model: {
      value: _vm.form.item_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "item_id", $$v);
      },
      expression: "form.item_id"
    }
  }), _vm._v(" "), _vm.form.errors.has("item_id") ? _c("div", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.errors.first("item_id"))
    }
  }) : _vm._e(), _vm._v(" "), _vm.form.item_id ? _c("span", {
    staticClass: "small text-purple"
  }, [_vm._v("Available stock: " + _vm._s(_vm.availableStock))]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("div", {}, [_c("label", {
    "class": {
      "border-danger": _vm.form.errors.has("dosage")
    },
    attrs: {
      "for": "dosage"
    }
  }, [_vm._v("Dosage\n              ")])]), _vm._v(" "), _c("b-form-input", {
    attrs: {
      id: "dosage",
      type: "number",
      min: "1"
    },
    model: {
      value: _vm.form.dosage,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "dosage", $$v);
      },
      expression: "form.dosage"
    }
  }), _vm._v(" "), _vm.form.errors.has("dosage") ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("\n              " + _vm._s(_vm.form.errors.first("dosage")) + "\n            ")]) : _vm._e()], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-baseline"
  }, [_c("label", {
    "class": {
      "border-danger": _vm.form.errors.has("frequency")
    },
    attrs: {
      "for": "dosage"
    }
  }, [_vm._v("Frequency\n                "), _c("i", {
    staticClass: "uil uil-question-circle text-muted small",
    attrs: {
      id: "frequency_helpTex"
    }
  })]), _vm._v(" "), _c("b-tooltip", {
    attrs: {
      target: "frequency_helpTex",
      variant: "secondary"
    }
  }, [_vm._v("\n                How frequent should the drug be taken?\n              ")]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("\n                " + _vm._s(_vm.form.frequency) + " times")])], 1), _vm._v(" "), _c("b-form-input", {
    attrs: {
      id: "dosage",
      type: "number",
      min: "1",
      max: "20"
    },
    model: {
      value: _vm.form.frequency,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "frequency", $$v);
      },
      expression: "form.frequency"
    }
  }), _vm._v(" "), _vm.form.errors.has("frequency") ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("\n              " + _vm._s(_vm.form.errors.first("frequency")) + "\n            ")]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between align-items-baseline"
  }, [_c("label", {
    "class": {
      "border-danger": _vm.form.errors.has("duration")
    },
    attrs: {
      "for": "duration"
    }
  }, [_vm._v("\n                Duration\n                "), _c("i", {
    staticClass: "uil uil-question-circle text-muted small",
    attrs: {
      id: "duration_helpTex"
    }
  })]), _vm._v(" "), _c("b-tooltip", {
    attrs: {
      target: "duration_helpTex",
      variant: "secondary"
    }
  }, [_vm._v("\n                How long (in days) should the medicine be taken?\n              ")]), _vm._v(" "), _c("small", {
    staticClass: "text-muted"
  }, [_vm._v("\n                " + _vm._s(_vm.form.duration) + " day(s)")])], 1), _vm._v(" "), _c("b-form-input", {
    attrs: {
      id: "dosage",
      type: "number",
      min: "1",
      max: "20"
    },
    model: {
      value: _vm.form.duration,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "duration", $$v);
      },
      expression: "form.duration"
    }
  }), _vm._v(" "), _vm.form.errors.has("duration") ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("\n              " + _vm._s(_vm.form.errors.first("duration")) + "\n            ")]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-md-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    "class": {
      "border-danger": _vm.form.errors.has("intake_id")
    },
    attrs: {
      "for": "intake_id"
    }
  }, [_vm._v("\n              Intake\n              "), _c("i", {
    staticClass: "uil uil-question-circle text-muted small",
    attrs: {
      id: "intake_id_helpTex"
    }
  }), _vm._v(" "), _c("b-tooltip", {
    attrs: {
      target: "intake_id_helpTex",
      variant: "secondary"
    }
  }, [_vm._v("\n                On what condition should the prescription be taken?\n              ")])], 1), _vm._v(" "), _c("v-select", {
    attrs: {
      id: "intake_id",
      options: _vm.intakes,
      label: "name",
      reduce: function reduce(option) {
        return option.id;
      },
      clearable: false
    },
    model: {
      value: _vm.form.intake_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "intake_id", $$v);
      },
      expression: "form.intake_id"
    }
  }), _vm._v(" "), _vm.form.errors.has("intake_id") ? _c("small", {
    staticClass: "text-danger"
  }, [_vm._v("\n              " + _vm._s(_vm.form.errors.first("intake_id")) + "\n            ")]) : _vm._e()], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    attrs: {
      "for": "comments"
    }
  }, [_vm._v("Remarks")]), _vm._v(" "), _c("b-form-textarea", {
    staticClass: "shadow-sm",
    attrs: {
      id: "comments"
    },
    model: {
      value: _vm.form.comments,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "comments", $$v);
      },
      expression: "form.comments"
    }
  }), _vm._v(" "), _vm.form.errors.has("comments") ? _c("span", {
    staticClass: "text-danger"
  }, [_vm._v("\n          " + _vm._s(_vm.form.errors.first("comments")) + "\n        ")]) : _vm._e()], 1)])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "ps-2"
  }, [_vm._v("\n            Date\n          ")]), _vm._v(" "), _c("th", {
    staticClass: "ps-2"
  }, [_vm._v("\n            Drug\n          ")]), _vm._v(" "), _c("th", {
    staticClass: "ps-2"
  }, [_vm._v("\n            Dosage\n          ")]), _vm._v(" "), _c("th", {
    staticClass: "ps-2"
  }, [_vm._v("\n            Frequency\n          ")]), _vm._v(" "), _c("th", {
    staticClass: "ps-2"
  }, [_vm._v("\n            Duration (days)\n          ")]), _vm._v(" "), _c("th", {
    staticClass: "ps-2"
  }, [_vm._v("\n            Written By\n          ")]), _vm._v(" "), _c("th", {
    staticClass: "ps-2"
  }, [_vm._v("\n            Price\n          ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/pages/doctor/patient/Prescriptions.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/pages/doctor/patient/Prescriptions.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Prescriptions_vue_vue_type_template_id_3ff171f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Prescriptions.vue?vue&type=template&id=3ff171f5& */ "./resources/js/components/pages/doctor/patient/Prescriptions.vue?vue&type=template&id=3ff171f5&");
/* harmony import */ var _Prescriptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prescriptions.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/doctor/patient/Prescriptions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Prescriptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Prescriptions_vue_vue_type_template_id_3ff171f5___WEBPACK_IMPORTED_MODULE_0__.render,
  _Prescriptions_vue_vue_type_template_id_3ff171f5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/doctor/patient/Prescriptions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/doctor/patient/Prescriptions.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pages/doctor/patient/Prescriptions.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prescriptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prescriptions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Prescriptions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prescriptions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/doctor/patient/Prescriptions.vue?vue&type=template&id=3ff171f5&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/pages/doctor/patient/Prescriptions.vue?vue&type=template&id=3ff171f5& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Prescriptions_vue_vue_type_template_id_3ff171f5___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Prescriptions_vue_vue_type_template_id_3ff171f5___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Prescriptions_vue_vue_type_template_id_3ff171f5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Prescriptions.vue?vue&type=template&id=3ff171f5& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/doctor/patient/Prescriptions.vue?vue&type=template&id=3ff171f5&");


/***/ })

}]);
//# sourceMappingURL=resources_js_components_pages_doctor_patient_Prescriptions_vue.js.map