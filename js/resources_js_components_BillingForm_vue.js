"use strict";
(self["webpackChunkmedic_hospital_management"] = self["webpackChunkmedic_hospital_management"] || []).push([["resources_js_components_BillingForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BillingForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BillingForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    visitId: {
      type: Number,
      required: true
    },
    invoice: {
      type: Object,
      required: true
    },
    customer: {
      type: Object,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    stores: {
      type: Array,
      required: true
    },
    doctors: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      form: new window.Form({
        ledger_id: this.invoice.id,
        store_id: null,
        item: null,
        vendor_id: null,
        quantity: 1,
        unit_price: 0,
        date: new Date().toISOString().slice(0, 10),
        comments: '',
        items: []
      }),
      showStore: false,
      showVendor: false,
      assignedTo: [],
      availableStock: 0,
      enableForm: false
    };
  },
  computed: {
    selectedProduct: function selectedProduct() {
      if (!this.form.item) {
        return false;
      }
      var vm = this;
      return this.items.find(function (item) {
        return item.id === vm.form.item.id;
      });
    },
    formFilledCorrectly: function formFilledCorrectly() {
      if (!this.form.item) {
        return false;
      }
      if (this.form.item.item_type.is_inventory && !this.form.store_id) {
        return false;
      }
      if (this.form.item.item_type.is_inventory && this.availableStock === 0) {
        return false;
      }
      if (this.form.item && this.assignedTo.length > 0 && !this.form.vendor_id) {
        return false;
      }
      return true;
    },
    totalDraftBills: function totalDraftBills() {
      if (!this.form.items.length) {
        return 0;
      }
      return this.form.items.reduce(function (acc, current) {
        return acc + current.unit_price * current.quantity;
      }, 0);
    }
  },
  watch: {
    'form.item': function formItem(item) {
      this.showStore = false;
      this.showVendor = false;
      this.assignedTo = [];
      this.form.vendor_id = null;
      this.form.store_id = null;
      if (item) {
        this.setupProductPriceSetup(item);
        this.displayStoreSelection(item);
        this.displayDoctorsAssigned();
        this.findAvailableStock();
      }
    },
    'form.store_id': function formStore_id(storeId) {
      if (storeId) {
        this.findAvailableStock();
      }
    }
  },
  created: function created() {
    this.$bvModa.show('billing-modal');
  },
  methods: {
    toggleForm: function toggleForm() {
      this.$bvModal.show('billing-modal');

      // this.enableForm = !this.enableForm
    },
    addBill: function addBill() {
      if (!this.formFilledCorrectly) {
        this.$toast.error('Please fill the form correctly');
        return;
      }
      this.form.items.push({
        item: this.form.item,
        item_id: this.form.item.id,
        quantity: this.form.quantity,
        unit_price: this.form.unit_price,
        vendor_id: this.form.vendor_id,
        store_id: this.form.store_id,
        description: this.form.item.name,
        instruction: null
      });
    },
    removeBill: function removeBill(bill) {
      var index = this.form.items.indexOf(bill);
      //
      if (index > -1) {
        this.form.items.splice(index, 1);
      }
    },
    chargePatient: function chargePatient() {
      var _this = this;
      if (!this.form.items.length) {
        this.$toast.error('Please select the product to be charged');
        return;
      }
      this.form.post('/patient-bills').then(function () {
        _this.$toast.success('The bill has been charged');
        _this.cleanUp();
        _this.$emit('bill-added');
      })["catch"](function (error) {
        _this.form.processing = false;
        _this.form.errors.record(error.response.data.errors);
      });
    },
    displayStoreSelection: function displayStoreSelection(item) {
      if (item.item_type.is_inventory === true) {
        this.showStore = true;
        var store = this.stores.find(function (store) {
          return store.name === 'Pharmacy';
        });
        this.form.store_id = store.id;
      }
    },
    displayDoctorsAssigned: function displayDoctorsAssigned() {
      var vm = this;
      var selectedProduct = this.items.find(function (item) {
        return item.id === vm.form.item.id;
      });
      if (selectedProduct && selectedProduct.assignments.length) {
        this.assignedTo = selectedProduct.assignments.map(function (assignment) {
          return assignment.vendor;
        });
        if (this.assignedTo.length === 1) {
          this.form.vendor_id = this.assignedTo[0].id;
        }
        this.showVendor = true;
      }
    },
    setupProductPriceSetup: function setupProductPriceSetup(item) {
      if (this.invoice.wallet.type === 0) {
        this.form.unit_price = item.cash_price.charge_value * 0.01;
      }
      if (this.invoice.wallet.type === 1) {
        this.form.unit_price = item.scheme_price.charge_value * 0.01;
      }
    },
    findAvailableStock: function findAvailableStock() {
      var _this2 = this;
      this.availableStock = 0;
      if (this.selectedProduct && this.form.store_id) {
        this.$httpClient.get('/available_stock/' + this.selectedProduct.id + '/' + this.form.store_id).then(function (_ref) {
          var data = _ref.data;
          _this2.availableStock = data;
        })["catch"]();
      }
    },
    cleanUp: function cleanUp() {
      this.form.reset();
      this.showStore = false;
      this.showVendor = false;

      // this.items = []
      this.assignedTo = [];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BillingForm.vue?vue&type=template&id=b8763d78&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BillingForm.vue?vue&type=template&id=b8763d78&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
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
      id: "billing-modal",
      title: "Billing",
      "footer-class": "d-flex justify-content-between bg-muted-lt border-top",
      "content-class": "bg-white rounded-3",
      "body-class": "px-4",
      size: "xl",
      "no-close-on-backdrop": "",
      "hide-header-close": "",
      "no-close-on-esc": "",
      "no-enforce-focus": ""
    },
    on: {
      hidden: _vm.cleanUp
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn(_ref) {
        var close = _ref.close;
        return [_c("button", {
          staticClass: "btn",
          attrs: {
            disabled: _vm.form.processing
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return close.apply(null, arguments);
            }
          }
        }, [_vm._v("Close")]), _vm._v(" "), _c("button", {
          staticClass: "btn btn-primary",
          attrs: {
            disabled: _vm.form.processing
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.chargePatient.apply(null, arguments);
            }
          }
        }, [_vm._v("Charge\n            ")])];
      }
    }])
  }, [_c("form", {
    attrs: {
      action: ""
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.chargePatient.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row gx-4"
  }, [_c("div", {
    staticClass: "col-xl-4"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      id: "item_id"
    }
  }, [_vm._v("Product")]), _vm._v(" "), _c("v-select", {
    attrs: {
      id: "item_id",
      options: _vm.items,
      label: "name",
      reduce: function reduce(option) {
        return option;
      },
      clearable: false
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(item) {
        return [_c("div", [_c("div", {
          staticClass: "font-weight-medium"
        }, [_vm._v("\n                                        " + _vm._s(item.name) + "\n                                    ")]), _vm._v(" "), item.item_type.name === "Inventory" ? _c("div", {
          staticClass: "text-teal small my-0"
        }, [_vm._v("\n                                        " + _vm._s(item.item_type.name) + "\n                                    ")]) : _vm._e(), _vm._v(" "), item.item_type.name === "Service" ? _c("div", {
          staticClass: "text-indigo small my-0"
        }, [_vm._v("\n                                        " + _vm._s(item.item_type.name) + "\n                                    ")]) : _vm._e()])];
      }
    }]),
    model: {
      value: _vm.form.item,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "item", $$v);
      },
      expression: "form.item"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-2"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "qty"
    }
  }, [_vm._v("Qty")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.quantity,
      expression: "form.quantity"
    }],
    staticClass: "form-control",
    attrs: {
      id: "qty",
      name: "quantity",
      type: "number",
      min: "1"
    },
    domProps: {
      value: _vm.form.quantity
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "quantity", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.item && _vm.invoice.wallet.type === 0 ? _c("span", {
    staticClass: "small"
  }, [_vm._v("Price: " + _vm._s(_vm._f("toMoneyFormat")(_vm.form.item.cash_price.charge_value * _vm.form.quantity * 0.01)))]) : _vm._e(), _vm._v(" "), _vm.form.item && _vm.invoice.wallet.type === 1 ? _c("span", {
    staticClass: "small"
  }, [_vm._v("Price:  " + _vm._s(_vm._f("toMoneyFormat")(_vm.form.item.scheme_price.charge_value * _vm.form.quantity * 0.01)))]) : _vm._e(), _vm._v(" "), _vm.form.hasError("quantity") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.getError("quantity"))
    }
  }) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "store_id"
    }
  }, [_vm._v("Store")]), _vm._v(" "), _c("v-select", {
    attrs: {
      id: "store_id",
      disabled: !_vm.form.item || _vm.form.item && _vm.form.item.item_type.is_inventory === false,
      options: _vm.stores,
      label: "name",
      reduce: function reduce(option) {
        return option.id;
      },
      clearable: true
    },
    model: {
      value: _vm.form.store_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "store_id", $$v);
      },
      expression: "form.store_id"
    }
  }), _vm._v(" "), _vm.form.item && _vm.form.item.item_type.is_inventory && _vm.form.store_id ? _c("span", {
    staticClass: "small text-indigo mt-2"
  }, [_vm._v("Available Stock: " + _vm._s(_vm.availableStock) + " units")]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3"
  }, [_c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "vendor_id"
    }
  }, [_vm._v("Assign to")]), _vm._v(" "), _c("v-select", {
    attrs: {
      id: "vendor_id",
      disabled: _vm.showVendor === false,
      options: _vm.assignedTo,
      label: "name",
      reduce: function reduce(option) {
        return option.id;
      },
      clearable: true
    },
    model: {
      value: _vm.form.vendor_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "vendor_id", $$v);
      },
      expression: "form.vendor_id"
    }
  })], 1)])]), _vm._v(" "), _c("button", {
    staticClass: "btn mt-2",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.addBill.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "uil uil-save me-1"
  }), _vm._v(" Save\n            ")]), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_c("table", {
    staticClass: "styled-table"
  }, [_c("thead", [_c("tr", [_c("th", {
    staticClass: "ps-3",
    staticStyle: {
      width: "60%"
    }
  }, [_vm._v("\n                            Description\n                        ")]), _vm._v(" "), _c("th", {
    staticClass: "pe-3 text-center",
    staticStyle: {
      width: "10%"
    }
  }, [_vm._v("\n                            Qty\n                        ")]), _vm._v(" "), _c("th", {
    staticClass: "pe-3 text-end",
    staticStyle: {
      width: "10%"
    }
  }, [_vm._v("\n                            Price\n                        ")]), _vm._v(" "), _c("th", {
    staticClass: "pe-3 text-end",
    staticStyle: {
      width: "10%"
    }
  }, [_vm._v("\n                            Amount\n                        ")]), _vm._v(" "), _c("th", {
    staticClass: "pe-3",
    staticStyle: {
      width: "10%"
    }
  })])]), _vm._v(" "), _c("tbody", _vm._l(_vm.form.items, function (bill) {
    return _c("tr", [_c("td", {
      staticClass: "ps-3"
    }, [_vm._v("\n                            " + _vm._s(bill.item.name) + "\n                        ")]), _vm._v(" "), _c("td", {
      staticClass: "pe-3 text-center"
    }, [_vm._v("\n                            " + _vm._s(bill.quantity) + "\n                        ")]), _vm._v(" "), _c("td", {
      staticClass: "pe-3 text-end"
    }, [_vm._v("\n                            " + _vm._s(_vm._f("toMoneyFormat")(bill.unit_price)) + "\n                        ")]), _vm._v(" "), _c("td", {
      staticClass: "pe-3 text-end"
    }, [_vm._v("\n                            " + _vm._s(_vm._f("toMoneyFormat")(bill.unit_price * bill.quantity)) + "\n                        ")]), _vm._v(" "), _c("td", {
      staticClass: "pe-3 text-center"
    }, [_c("a", {
      staticClass: "text-danger",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.removeBill(bill);
        }
      }
    }, [_vm._v("Remove")])])]);
  }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    staticClass: "text-end pe-3 text-indigo"
  }, [_vm._v("\n                            " + _vm._s(_vm._f("toMoneyFormat")(Math.round(_vm.totalDraftBills))) + "\n                        ")])])])])]), _vm._v(" "), _vm.form.processing ? _c("div", {
    staticClass: "progress mb-2"
  }, [_c("div", {
    staticClass: "progress"
  }, [_c("div", {
    staticClass: "progress-bar progress-bar-indeterminate bg-green"
  })])]) : _vm._e()])]), _vm._v(" "), _vm.enableForm ? _c("div", {
    staticClass: "card mb-4 card-stacked"
  }, [_c("div", {
    staticClass: "card-body px-4"
  }, [_c("div", {
    staticClass: "row gx-4 mb-4"
  }, [_c("div", {
    staticClass: "col-xl-4"
  }, [_c("div", {
    staticClass: "form-group mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      id: "item_id"
    }
  }, [_vm._v("Product")]), _vm._v(" "), _c("v-select", {
    attrs: {
      id: "item_id",
      options: _vm.items,
      label: "name",
      reduce: function reduce(option) {
        return option;
      },
      clearable: false
    },
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(item) {
        return [_c("div", [_c("div", {
          staticClass: "font-weight-medium"
        }, [_vm._v("\n                                        " + _vm._s(item.name) + "\n                                    ")]), _vm._v(" "), item.item_type.name === "Inventory" ? _c("div", {
          staticClass: "text-teal small my-0"
        }, [_vm._v("\n                                        " + _vm._s(item.item_type.name) + "\n                                    ")]) : _vm._e(), _vm._v(" "), item.item_type.name === "Service" ? _c("div", {
          staticClass: "text-indigo small my-0"
        }, [_vm._v("\n                                        " + _vm._s(item.item_type.name) + "\n                                    ")]) : _vm._e()])];
      }
    }], null, false, 396529591),
    model: {
      value: _vm.form.item,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "item", $$v);
      },
      expression: "form.item"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-1"
  }, [_c("div", {
    staticClass: "form-group mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "qty"
    }
  }, [_vm._v("Qty")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.quantity,
      expression: "form.quantity"
    }],
    staticClass: "form-control",
    attrs: {
      id: "qty",
      name: "quantity",
      type: "number",
      min: "1"
    },
    domProps: {
      value: _vm.form.quantity
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "quantity", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.form.item && _vm.invoice.wallet.type === 0 ? _c("span", {
    staticClass: "small"
  }, [_vm._v("Price: " + _vm._s(_vm._f("toMoneyFormat")(_vm.form.item.cash_price.charge_value * _vm.form.quantity * 0.01)))]) : _vm._e(), _vm._v(" "), _vm.form.item && _vm.invoice.wallet.type === 1 ? _c("span", {
    staticClass: "small"
  }, [_vm._v("Price:  " + _vm._s(_vm._f("toMoneyFormat")(_vm.form.item.scheme_price.charge_value * _vm.form.quantity * 0.01)))]) : _vm._e(), _vm._v(" "), _vm.form.hasError("quantity") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.getError("quantity"))
    }
  }) : _vm._e()])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3"
  }, [_c("div", {
    staticClass: "form-group mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "store_id"
    }
  }, [_vm._v("Store")]), _vm._v(" "), _c("v-select", {
    attrs: {
      id: "store_id",
      disabled: !_vm.form.item || _vm.form.item && _vm.form.item.item_type.is_inventory === false,
      options: _vm.stores,
      label: "name",
      reduce: function reduce(option) {
        return option.id;
      },
      clearable: true
    },
    model: {
      value: _vm.form.store_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "store_id", $$v);
      },
      expression: "form.store_id"
    }
  }), _vm._v(" "), _vm.form.item && _vm.form.item.item_type.is_inventory && _vm.form.store_id ? _c("span", {
    staticClass: "small text-indigo mt-2"
  }, [_vm._v("Available Stock: " + _vm._s(_vm.availableStock) + " units")]) : _vm._e()], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3"
  }, [_c("div", {
    staticClass: "form-group mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "vendor_id"
    }
  }, [_vm._v("Assign to")]), _vm._v(" "), _c("v-select", {
    attrs: {
      id: "vendor_id",
      disabled: _vm.showVendor === false,
      options: _vm.assignedTo,
      label: "name",
      reduce: function reduce(option) {
        return option.id;
      },
      clearable: true
    },
    model: {
      value: _vm.form.vendor_id,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "vendor_id", $$v);
      },
      expression: "form.vendor_id"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-1"
  }, [_c("button", {
    staticClass: "btn",
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.addBill.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "uil uil-plus"
  })])])]), _vm._v(" "), _c("table", {
    staticClass: "styled-table"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.form.items, function (bill) {
    return _c("tr", [_c("td", {
      staticClass: "ps-3"
    }, [_vm._v("\n                        " + _vm._s(bill.item.name) + "\n                    ")]), _vm._v(" "), _c("td", {
      staticClass: "pe-3 text-center"
    }, [_vm._v("\n                        " + _vm._s(bill.quantity) + "\n                    ")]), _vm._v(" "), _c("td", {
      staticClass: "pe-3 text-end"
    }, [_vm._v("\n                        " + _vm._s(_vm._f("toMoneyFormat")(bill.unit_price)) + "\n                    ")]), _vm._v(" "), _c("td", {
      staticClass: "pe-3 text-end"
    }, [_vm._v("\n                        " + _vm._s(_vm._f("toMoneyFormat")(bill.unit_price * bill.quantity)) + "\n                    ")]), _vm._v(" "), _c("td", {
      staticClass: "pe-3 text-end"
    }, [_vm._v("\n                        " + _vm._s(bill.vendor) + "\n                    ")]), _vm._v(" "), _c("td", {
      staticClass: "pe-3 text-center"
    }, [_c("div", {
      staticClass: "btn-list"
    }, [_c("button", {
      staticClass: "btn btn-icon py-1",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.removeBill(bill);
        }
      }
    }, [_c("i", {
      staticClass: "uil uil-trash-alt text-danger"
    })])])])]);
  }), 0), _vm._v(" "), _c("tfoot", [_c("tr", [_c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td"), _vm._v(" "), _c("td", {
    staticClass: "text-end pe-3 text-indigo"
  }, [_vm._v("\n                        " + _vm._s(_vm._f("toMoneyFormat")(Math.round(_vm.totalDraftBills))) + "\n                    ")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-footer"
  }, [_c("button", {
    staticClass: "btn btn-success",
    attrs: {
      disabled: _vm.form.processing
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.chargePatient.apply(null, arguments);
      }
    }
  }, [_vm._v("\n                Submit\n            ")]), _vm._v(" "), _c("button", {
    staticClass: "btn me-3",
    attrs: {
      disabled: _vm.form.processing
    },
    on: {
      click: _vm.toggleForm
    }
  }, [_vm._v("\n                Close\n            ")])])]) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    staticClass: "ps-3",
    staticStyle: {
      width: "45%"
    }
  }, [_vm._v("\n                        Description\n                    ")]), _vm._v(" "), _c("th", {
    staticClass: "pe-3 text-center",
    staticStyle: {
      width: "10%"
    }
  }, [_vm._v("\n                        Qty\n                    ")]), _vm._v(" "), _c("th", {
    staticClass: "pe-3 text-end",
    staticStyle: {
      width: "10%"
    }
  }, [_vm._v("\n                        Price\n                    ")]), _vm._v(" "), _c("th", {
    staticClass: "pe-3 text-end",
    staticStyle: {
      width: "10%"
    }
  }, [_vm._v("\n                        Amount\n                    ")]), _vm._v(" "), _c("th", {
    staticClass: "pe-3",
    staticStyle: {
      width: "15%"
    }
  }, [_vm._v("\n                        Assigned To\n                    ")]), _vm._v(" "), _c("th", {
    staticClass: "pe-3",
    staticStyle: {
      width: "10%"
    }
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BillingForm.vue?vue&type=style&index=0&id=b8763d78&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BillingForm.vue?vue&type=style&index=0&id=b8763d78&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.styled-table[data-v-b8763d78] {\n    border-collapse: collapse;\n    margin: 0 0;\n    min-width: 100%;\n//line-height: 10px;\n}\n.styled-table thead tr[data-v-b8763d78] {\n    background-color: #f4f5f7;\n    color: #111111;\n    text-align: left;\n}\n.styled-table th[data-v-b8763d78],\n.styled-table td[data-v-b8763d78] {\n    padding: 6px 10px;\n}\n.styled-table tbody tr[data-v-b8763d78] {\n//border-bottom: 1px solid #dddddd;\n}\n.styled-table tbody tr td[data-v-b8763d78] {\n    border: 1px solid #f3f3f3\n}\n.styled-table tbody tr[data-v-b8763d78]:nth-of-type(even) {\n//background-color: #f3f3f3;\n}\n.styled-table tbody tr.active-row[data-v-b8763d78] {\n    font-weight: bold;\n    color: #009879;\n}\n\n", "",{"version":3,"sources":["webpack://./resources/js/components/BillingForm.vue"],"names":[],"mappings":";AAu2BA;IACA,yBAAA;IACA,WAAA;IACA,eAAA;AACA,mBAAA;AACA;AAEA;IACA,yBAAA;IACA,cAAA;IACA,gBAAA;AACA;AAEA;;IAEA,iBAAA;AACA;AAEA;AACA,kCAAA;AACA;AAEA;IACA;AACA;AAEA;AACA,2BAAA;AACA;AAEA;IACA,iBAAA;IACA,cAAA;AACA","sourcesContent":["<script>\n\nexport default {\n\n    props: {\n        visitId: {\n            type: Number,\n            required: true,\n        },\n        invoice: {\n            type: Object,\n            required: true,\n        },\n        customer: {\n            type: Object,\n            required: true,\n        },\n        items: {\n            type: Array,\n            required: true,\n        },\n        stores: {\n            type: Array,\n            required: true,\n        },\n        doctors: {\n            type: Array,\n            default: () => [],\n        },\n    },\n\n    data () {\n        return {\n\n            form: new window.Form({\n                ledger_id: this.invoice.id,\n                store_id: null,\n                item: null,\n                vendor_id: null,\n                quantity: 1,\n                unit_price: 0,\n                date: new Date().toISOString().slice(0, 10),\n                comments: '',\n                items: [],\n            }),\n\n            showStore: false,\n            showVendor: false,\n\n            assignedTo: [],\n\n            availableStock: 0,\n\n            enableForm: false,\n        }\n    },\n\n    computed: {\n        selectedProduct () {\n            if (!this.form.item) {\n                return false\n            }\n\n            const vm = this\n\n            return this.items.find((item) => item.id === vm.form.item.id)\n        },\n\n        formFilledCorrectly () {\n            if (!this.form.item) {\n                return false\n            }\n\n            if (this.form.item.item_type.is_inventory && !this.form.store_id) {\n                return false\n            }\n\n            if (this.form.item.item_type.is_inventory && this.availableStock === 0) {\n                return false\n            }\n\n            if (this.form.item && this.assignedTo.length > 0 && !this.form.vendor_id) {\n                return false\n            }\n\n            return true\n        },\n\n        totalDraftBills () {\n            if (!this.form.items.length) {\n                return 0\n            }\n\n            return this.form.items.reduce((acc, current) => {\n                return acc + current.unit_price * current.quantity\n            }, 0)\n        },\n    },\n    watch: {\n        'form.item': function (item) {\n            this.showStore = false\n            this.showVendor = false\n            this.assignedTo = []\n            this.form.vendor_id = null\n            this.form.store_id = null\n\n            if (item) {\n                this.setupProductPriceSetup(item)\n\n                this.displayStoreSelection(item)\n\n                this.displayDoctorsAssigned()\n                this.findAvailableStock()\n            }\n        },\n        'form.store_id': function (storeId) {\n            if (storeId) {\n                this.findAvailableStock()\n            }\n        },\n    },\n\n    created () {\n        this.$bvModa.show('billing-modal')\n    },\n\n    methods: {\n        toggleForm () {\n            this.$bvModal.show('billing-modal')\n\n            // this.enableForm = !this.enableForm\n        },\n\n        addBill () {\n            if (!this.formFilledCorrectly) {\n                this.$toast.error('Please fill the form correctly')\n\n                return\n            }\n            this.form.items.push({\n                item: this.form.item,\n                item_id: this.form.item.id,\n                quantity: this.form.quantity,\n                unit_price: this.form.unit_price,\n                vendor_id: this.form.vendor_id,\n                store_id: this.form.store_id,\n                description: this.form.item.name,\n                instruction: null,\n            })\n        },\n        removeBill (bill) {\n            const index = this.form.items.indexOf(bill)\n            //\n            if (index > -1) {\n                this.form.items.splice(index, 1)\n            }\n        },\n        chargePatient () {\n            if (!this.form.items.length) {\n                this.$toast.error('Please select the product to be charged')\n                return\n            }\n\n            this.form.post('/patient-bills')\n                .then(() => {\n                    this.$toast.success('The bill has been charged')\n\n                    this.cleanUp()\n\n                    this.$emit('bill-added')\n                })\n                .catch((error) => {\n                    this.form.processing = false\n                    this.form.errors.record(error.response.data.errors)\n                })\n        },\n        displayStoreSelection (item) {\n            if (item.item_type.is_inventory === true) {\n                this.showStore = true\n\n                const store = this.stores.find((store) => store.name === 'Pharmacy')\n\n                this.form.store_id = store.id\n            }\n        },\n        displayDoctorsAssigned () {\n            const vm = this\n\n            const selectedProduct = this.items.find(item => item.id === vm.form.item.id)\n\n            if (selectedProduct && selectedProduct.assignments.length) {\n                this.assignedTo = selectedProduct.assignments.map((assignment) => {\n                    return assignment.vendor\n                })\n\n                if (this.assignedTo.length === 1) {\n                    this.form.vendor_id = this.assignedTo[0].id\n                }\n\n                this.showVendor = true\n            }\n        },\n        setupProductPriceSetup (item) {\n            if (this.invoice.wallet.type === 0) {\n                this.form.unit_price = item.cash_price.charge_value * 0.01\n            }\n\n            if (this.invoice.wallet.type === 1) {\n                this.form.unit_price = item.scheme_price.charge_value * 0.01\n            }\n        },\n        findAvailableStock () {\n            this.availableStock = 0\n\n            if (this.selectedProduct && this.form.store_id) {\n                this.$httpClient.get('/available_stock/' + this.selectedProduct.id + '/' + this.form.store_id)\n                    .then(({ data }) => {\n                        this.availableStock = data\n                    }).catch()\n            }\n        },\n\n        cleanUp () {\n            this.form.reset()\n\n            this.showStore = false\n            this.showVendor = false\n\n            // this.items = []\n            this.assignedTo = []\n        },\n\n    },\n}\n</script>\n<template>\n    <div>\n        <b-modal\n            id=\"billing-modal\"\n            title=\"Billing\"\n            footer-class=\"d-flex justify-content-between bg-muted-lt border-top\"\n            content-class=\"bg-white rounded-3\"\n            body-class=\"px-4\"\n            size=\"xl\"\n            no-close-on-backdrop\n            hide-header-close\n            no-close-on-esc\n            no-enforce-focus\n            @hidden=\"cleanUp\"\n        >\n            <form action=\"\" @submit.prevent=\"chargePatient\">\n                <div class=\"row gx-4\">\n                    <div class=\"col-xl-4\">\n                        <div class=\"form-group\">\n                            <label id=\"item_id\" class=\"form-label\">Product</label>\n                            <v-select\n                                id=\"item_id\"\n                                v-model=\"form.item\"\n                                :options=\"items\"\n                                label=\"name\"\n                                :reduce=\"(option) => option\"\n                                :clearable=\"false\"\n                            >\n                                <template #option=\"item\">\n                                    <div>\n                                        <div class=\"font-weight-medium\">\n                                            {{ item.name }}\n                                        </div>\n                                        <div v-if=\"item.item_type.name === 'Inventory'\" class=\"text-teal small my-0\">\n                                            {{ item.item_type.name }}\n                                        </div>\n                                        <div v-if=\"item.item_type.name === 'Service'\" class=\"text-indigo small my-0\">\n                                            {{ item.item_type.name }}\n                                        </div>\n                                    </div>\n                                </template>\n                            </v-select>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-2\">\n                        <div class=\"form-group\">\n                            <label for=\"qty\" class=\"form-label\">Qty</label>\n                            <input\n                                id=\"qty\"\n                                v-model=\"form.quantity\"\n                                name=\"quantity\"\n                                type=\"number\"\n                                min=\"1\"\n                                class=\"form-control\"\n                            >\n\n                            <span v-if=\"form.item && invoice.wallet.type === 0\" class=\"small\">Price: {{\n                                    (form.item.cash_price.charge_value * form.quantity * 0.01) | toMoneyFormat\n                                }}</span>\n                            <span v-if=\"form.item && invoice.wallet.type === 1\" class=\"small\">Price:  {{\n                                    (form.item.scheme_price.charge_value * form.quantity * 0.01) | toMoneyFormat\n                                }}</span>\n\n                            <span\n                                v-if=\"form.hasError('quantity')\"\n                                class=\"text-danger\"\n                                v-text=\"form.getError('quantity')\"\n                            />\n                        </div>\n                    </div>\n                    <div class=\"col-xl-3\">\n                        <div class=\"form-group\">\n                            <label for=\"store_id\" class=\"form-label\">Store</label>\n\n                            <v-select\n                                id=\"store_id\"\n                                v-model=\"form.store_id\"\n                                :disabled=\"!form.item || (form.item && form.item.item_type.is_inventory === false )\"\n                                :options=\"stores\"\n                                label=\"name\"\n                                :reduce=\"(option) => option.id\"\n                                :clearable=\"true\"\n                            />\n                            <span\n                                v-if=\"form.item && form.item.item_type.is_inventory && form.store_id\"\n                                class=\"small text-indigo mt-2\"\n                            >Available Stock: {{ availableStock }} units</span>\n                        </div>\n                    </div>\n                    <div class=\"col-xl-3\">\n                        <div class=\"form-group\">\n                            <label for=\"vendor_id\" class=\"form-label\">Assign to</label>\n                            <v-select\n                                id=\"vendor_id\"\n                                v-model=\"form.vendor_id\"\n                                :disabled=\"showVendor === false\"\n                                :options=\"assignedTo\"\n                                label=\"name\"\n                                :reduce=\"(option) => option.id\"\n                                :clearable=\"true\"\n                            />\n                        </div>\n                    </div>\n                </div>\n\n                <button class=\"btn mt-2\" @click.prevent=\"addBill\">\n                    <i class=\"uil uil-save me-1\"/> Save\n                </button>\n\n                <div class=\"mt-3\">\n                    <table class=\"styled-table\">\n                        <thead>\n                        <tr>\n                            <th style=\"width: 60%\" class=\"ps-3\">\n                                Description\n                            </th>\n                            <th style=\"width: 10%\" class=\"pe-3 text-center\">\n                                Qty\n                            </th>\n                            <th style=\"width: 10%\" class=\"pe-3 text-end\">\n                                Price\n                            </th>\n                            <th style=\"width: 10%\" class=\"pe-3 text-end\">\n                                Amount\n                            </th>\n\n                            <th style=\"width: 10%\" class=\"pe-3\"/>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr v-for=\"bill in form.items\">\n                            <td class=\"ps-3\">\n                                {{ bill.item.name }}\n                            </td>\n                            <td class=\"pe-3 text-center\">\n                                {{ bill.quantity }}\n                            </td>\n                            <td class=\"pe-3 text-end\">\n                                {{ bill.unit_price | toMoneyFormat }}\n                            </td>\n                            <td class=\"pe-3 text-end\">\n                                {{ (bill.unit_price * bill.quantity) | toMoneyFormat }}\n                            </td>\n\n                            <td class=\"pe-3 text-center\">\n                                <!--                  <div class=\"btn-list\">-->\n                                <a href=\"#\" class=\"text-danger\" @click.prevent=\"removeBill(bill)\">Remove</a>\n                                <!--                    <button class=\"btn btn-icon py-1\" @click.prevent=\"removeBill(bill)\">-->\n                                <!--                      <i class=\"uil uil-trash-alt text-danger\" />-->\n                                <!--                    </button>-->\n                                <!--                  </div>-->\n                            </td>\n                        </tr>\n                        </tbody>\n                        <tfoot>\n                        <tr>\n                            <td/>\n                            <td/>\n                            <td/>\n                            <td class=\"text-end pe-3 text-indigo\">\n                                {{ Math.round(totalDraftBills) | toMoneyFormat }}\n                            </td>\n                        </tr>\n                        </tfoot>\n                    </table>\n                </div>\n\n                <div v-if=\"form.processing\" class=\"progress mb-2\">\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-indeterminate bg-green\" />\n                    </div>\n                </div>\n            </form>\n\n            <template #modal-footer=\"{ close}\">\n                <button class=\"btn\" :disabled=\"form.processing\" @click.prevent=\"close\">Close</button>\n\n                <button class=\"btn btn-primary\" @click.prevent=\"chargePatient\" :disabled=\"form.processing\">Charge\n                </button>\n            </template>\n        </b-modal>\n\n        <div v-if=\"enableForm\" class=\"card mb-4 card-stacked\">\n            <div class=\"card-body px-4\">\n                <div class=\"row gx-4 mb-4\">\n                    <div class=\"col-xl-4\">\n                        <div class=\"form-group mb-4\">\n                            <label id=\"item_id\" class=\"form-label\">Product</label>\n                            <v-select\n                                id=\"item_id\"\n                                v-model=\"form.item\"\n                                :options=\"items\"\n                                label=\"name\"\n                                :reduce=\"(option) => option\"\n                                :clearable=\"false\"\n                            >\n                                <template #option=\"item\">\n                                    <div>\n                                        <div class=\"font-weight-medium\">\n                                            {{ item.name }}\n                                        </div>\n                                        <div v-if=\"item.item_type.name === 'Inventory'\" class=\"text-teal small my-0\">\n                                            {{ item.item_type.name }}\n                                        </div>\n                                        <div v-if=\"item.item_type.name === 'Service'\" class=\"text-indigo small my-0\">\n                                            {{ item.item_type.name }}\n                                        </div>\n                                    </div>\n                                </template>\n                            </v-select>\n                        </div>\n                    </div>\n\n                    <div class=\"col-xl-1\">\n                        <div class=\"form-group mb-4\">\n                            <label for=\"qty\" class=\"form-label\">Qty</label>\n                            <input\n                                id=\"qty\"\n                                v-model=\"form.quantity\"\n                                name=\"quantity\"\n                                type=\"number\"\n                                min=\"1\"\n                                class=\"form-control\"\n                            >\n\n                            <span v-if=\"form.item && invoice.wallet.type === 0\" class=\"small\">Price: {{\n                                    (form.item.cash_price.charge_value * form.quantity * 0.01) | toMoneyFormat\n                                }}</span>\n                            <span v-if=\"form.item && invoice.wallet.type === 1\" class=\"small\">Price:  {{\n                                    (form.item.scheme_price.charge_value * form.quantity * 0.01) | toMoneyFormat\n                                }}</span>\n\n                            <span\n                                v-if=\"form.hasError('quantity')\"\n                                class=\"text-danger\"\n                                v-text=\"form.getError('quantity')\"\n                            />\n                        </div>\n                    </div>\n\n                    <div class=\"col-xl-3\">\n                        <div class=\"form-group mb-4\">\n                            <label for=\"store_id\" class=\"form-label\">Store</label>\n\n                            <v-select\n                                id=\"store_id\"\n                                v-model=\"form.store_id\"\n                                :disabled=\"!form.item || (form.item && form.item.item_type.is_inventory === false )\"\n                                :options=\"stores\"\n                                label=\"name\"\n                                :reduce=\"(option) => option.id\"\n                                :clearable=\"true\"\n                            />\n                            <span\n                                v-if=\"form.item && form.item.item_type.is_inventory && form.store_id\"\n                                class=\"small text-indigo mt-2\"\n                            >Available Stock: {{ availableStock }} units</span>\n                        </div>\n                    </div>\n\n                    <div class=\"col-xl-3\">\n                        <div class=\"form-group mb-3\">\n                            <label for=\"vendor_id\" class=\"form-label\">Assign to</label>\n                            <v-select\n                                id=\"vendor_id\"\n                                v-model=\"form.vendor_id\"\n                                :disabled=\"showVendor === false\"\n                                :options=\"assignedTo\"\n                                label=\"name\"\n                                :reduce=\"(option) => option.id\"\n                                :clearable=\"true\"\n                            />\n                        </div>\n                    </div>\n\n                    <div class=\"col-xl-1\">\n                        <button class=\"btn\" @click.prevent=\"addBill\">\n                            <i class=\"uil uil-plus\"/>\n                        </button>\n                    </div>\n                </div>\n\n                <table class=\"styled-table\">\n                    <thead>\n                    <tr>\n                        <th style=\"width: 45%\" class=\"ps-3\">\n                            Description\n                        </th>\n                        <th style=\"width: 10%\" class=\"pe-3 text-center\">\n                            Qty\n                        </th>\n                        <th style=\"width: 10%\" class=\"pe-3 text-end\">\n                            Price\n                        </th>\n                        <th style=\"width: 10%\" class=\"pe-3 text-end\">\n                            Amount\n                        </th>\n                        <th style=\"width: 15%\" class=\"pe-3\">\n                            Assigned To\n                        </th>\n                        <th style=\"width: 10%\" class=\"pe-3\"/>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr v-for=\"bill in form.items\">\n                        <td class=\"ps-3\">\n                            {{ bill.item.name }}\n                        </td>\n                        <td class=\"pe-3 text-center\">\n                            {{ bill.quantity }}\n                        </td>\n                        <td class=\"pe-3 text-end\">\n                            {{ bill.unit_price | toMoneyFormat }}\n                        </td>\n                        <td class=\"pe-3 text-end\">\n                            {{ (bill.unit_price * bill.quantity) | toMoneyFormat }}\n                        </td>\n                        <td class=\"pe-3 text-end\">\n                            {{ bill.vendor }}\n                        </td>\n                        <td class=\"pe-3 text-center\">\n                            <div class=\"btn-list\">\n                                <button class=\"btn btn-icon py-1\" @click.prevent=\"removeBill(bill)\">\n                                    <i class=\"uil uil-trash-alt text-danger\"/>\n                                </button>\n                            </div>\n                        </td>\n                    </tr>\n                    </tbody>\n                    <tfoot>\n                    <tr>\n                        <td/>\n                        <td/>\n                        <td/>\n                        <td class=\"text-end pe-3 text-indigo\">\n                            {{ Math.round(totalDraftBills) | toMoneyFormat }}\n                        </td>\n                    </tr>\n                    </tfoot>\n                </table>\n                <!--        <div v-for=\"(bill, index) in bills\" :key=\"index\" class=\"row gx-4\">-->\n                <!--          <div class=\"col-xl-4\">-->\n                <!--            <div class=\"form-group mb-3\">-->\n                <!--              <label for=\"item_id\" class=\"form-label\">Product</label>-->\n                <!--              <v-select-->\n                <!--                id=\"item_id\"-->\n                <!--                v-model=\"bills[index].item\"-->\n                <!--                :options=\"items\"-->\n                <!--                label=\"name\"-->\n                <!--                :reduce=\"(option) => option\"-->\n                <!--                :clearable=\"false\"-->\n                <!--              >-->\n                <!--                <template #option=\"item\">-->\n                <!--                  <div>-->\n                <!--                    <div class=\"font-weight-medium\">-->\n                <!--                      {{ item.name }}-->\n                <!--                    </div>-->\n                <!--                    <div v-if=\"item.item_type.name === 'Inventory'\" class=\"text-teal small my-0\">-->\n                <!--                      {{ item.item_type.name }}-->\n                <!--                    </div>-->\n                <!--                    <div v-if=\"item.item_type.name === 'Service'\" class=\"text-indigo small my-0\">-->\n                <!--                      {{ item.item_type.name }}-->\n                <!--                    </div>-->\n                <!--                  </div>-->\n                <!--                </template>-->\n                <!--              </v-select>-->\n\n                <!--              <span-->\n                <!--                v-if=\"form.errors.has('item_id')\"-->\n                <!--                class=\"text-danger\"-->\n                <!--                v-text=\"form.errors.first('item_id')\"-->\n                <!--              />-->\n\n                <!--              <span-->\n                <!--                v-if=\"form.hasError('ledger_id')\"-->\n                <!--                class=\"text-danger\"-->\n                <!--                v-text=\"form.getError('ledger_id')\"-->\n                <!--              />-->\n                <!--            </div>-->\n                <!--          </div>-->\n\n                <!--          <div class=\"col-xl-1\">-->\n                <!--            <div class=\"form-group mb-3\">-->\n                <!--              <label for=\"qty\" class=\"form-label\">Qty</label>-->\n                <!--              <input-->\n                <!--                id=\"qty\"-->\n                <!--                v-model=\"bills[index].quantity\"-->\n                <!--                name=\"quantity\"-->\n                <!--                type=\"number\"-->\n                <!--                min=\"1\"-->\n                <!--                class=\"form-control\"-->\n                <!--              >-->\n\n                <!--              <span v-if=\"bills[index].item && invoice.wallet.type === 0\" class=\"small\">Price: {{ (bills[index].item.cash_price.charge_value * bills[index].quantity * 0.01) | toMoneyFormat }}</span>-->\n                <!--              <span v-if=\"bills[index].item && invoice.wallet.type === 1\" class=\"small\">Price:  {{ (bills[index].item.scheme_price.charge_value * bills[index].quantity * 0.01) | toMoneyFormat }}</span>-->\n\n                <!--              <span-->\n                <!--                v-if=\"form.hasError('quantity')\"-->\n                <!--                class=\"text-danger\"-->\n                <!--                v-text=\"form.getError('quantity')\"-->\n                <!--              />-->\n                <!--            </div>-->\n                <!--          </div>-->\n\n                <!--          <div class=\"col-xl-3\">-->\n                <!--            <div class=\"form-group mb-3\">-->\n                <!--              <label for=\"store_id\" class=\"form-label\">Store</label>-->\n\n                <!--              <v-select-->\n                <!--                id=\"item_id\"-->\n                <!--                v-model=\"bills[index].store_id\"-->\n                <!--                :disabled=\"!bills[index].item || (bills[index].item && bills[index].item.item_type.is_inventory === false )\"-->\n                <!--                :options=\"stores\"-->\n                <!--                label=\"name\"-->\n                <!--                :reduce=\"(option) => option.id\"-->\n                <!--                :clearable=\"true\"-->\n                <!--              />-->\n                <!--              <span v-if=\"bills[index].item && bills[index].item.item_type.is_inventory && bills[index].store_id\" class=\"small text-indigo mt-2\">Available Stock: {{ bills[index].stock }} units</span>-->\n                <!--            </div>-->\n                <!--          </div>-->\n\n                <!--          <div class=\"col-xl-3\">-->\n                <!--            <div class=\"form-group mb-3\">-->\n                <!--              <label for=\"vendor_id\" class=\"form-label\">Assign to</label>-->\n                <!--              <v-select-->\n                <!--                id=\"vendor_id\"-->\n                <!--                v-model=\"bills[index].vendor_id\"-->\n                <!--                :disabled=\"!bills[index].item || !bills[index].item.vendors.length\"-->\n                <!--                :options=\"bills[index].item ? bills[index].item.vendors : []\"-->\n                <!--                label=\"name\"-->\n                <!--                :reduce=\"(option) => option.id\"-->\n                <!--                :clearable=\"true\"-->\n                <!--              />-->\n                <!--            </div>-->\n                <!--          </div>-->\n\n                <!--          <div class=\"col-xl-1\">-->\n                <!--            <div class=\"text-center\">-->\n                <!--              <button v-if=\"bills.length > 1 && index !== 0\" class=\"btn\" @click=\"removeBill(bill)\">-->\n                <!--                <i class=\"uil uil-trash-alt text-danger\" />-->\n                <!--              </button>-->\n                <!--            </div>-->\n                <!--          </div>-->\n                <!--        </div>-->\n\n                <!--        <button class=\"btn rounded-3 btn-icon\" @click=\"addBill\">-->\n                <!--          <i class=\"uil uil-check-circle me-1\" /> Save Bill-->\n                <!--        </button>-->\n            </div>\n            <div class=\"card-footer\">\n                <button\n                    class=\"btn btn-success\"\n                    :disabled=\"form.processing\"\n                    @click.prevent=\"chargePatient\"\n                >\n                    Submit\n                </button>\n\n                <button\n                    :disabled=\"form.processing\"\n                    class=\"btn me-3\"\n                    @click=\"toggleForm\"\n                >\n                    Close\n                </button>\n            </div>\n        </div>\n\n        <!--    <b-modal-->\n        <!--      id=\"billing-modal\"-->\n        <!--      title=\"Billing Form\"-->\n        <!--      no-close-on-backdrop-->\n        <!--      footer-class=\"d-flex justify-content-between bg-muted-lt border-top\"-->\n        <!--      content-class=\"bg-white rounded-3\"-->\n        <!--      body-class=\"px-4\"-->\n        <!--      hide-header-close-->\n        <!--      no-close-on-esc-->\n        <!--      no-enforce-focus-->\n        <!--      @hidden=\"cleanUp\"-->\n        <!--    >-->\n        <!--      <div class=\"form-group mb-4\">-->\n        <!--        <label for=\"item_id\" class=\"form-label\">Product</label>-->\n        <!--        <v-select-->\n        <!--          id=\"item_id\"-->\n        <!--          v-model=\"form.item_id\"-->\n        <!--          :options=\"items\"-->\n        <!--          label=\"name\"-->\n        <!--          :reduce=\"(option) => option.id\"-->\n        <!--          :clearable=\"false\"-->\n        <!--        >-->\n        <!--          <template #option=\"item\">-->\n        <!--            <div>-->\n        <!--              <div class=\"font-weight-medium\">-->\n        <!--                {{ item.name }}-->\n        <!--              </div>-->\n        <!--              <div v-if=\"item.item_type.name === 'Inventory'\" class=\"text-teal small my-0\">-->\n        <!--                {{ item.item_type.name }}-->\n        <!--              </div>-->\n        <!--              <div v-if=\"item.item_type.name === 'Service'\" class=\"text-indigo small my-0\">-->\n        <!--                {{ item.item_type.name }}-->\n        <!--              </div>-->\n        <!--            </div>-->\n        <!--          </template>-->\n\n        <!--          <template #selected-option=\"item\">-->\n        <!--            <div>-->\n        <!--              <div class=\"font-weight-medium\">-->\n        <!--                {{ item.name }}-->\n        <!--              </div>-->\n        <!--              <div class=\"text-primary small\">-->\n        <!--                {{ item.department.name }}-->\n        <!--              </div>-->\n        <!--            </div>-->\n        <!--          </template>-->\n        <!--        </v-select>-->\n\n        <!--        <span-->\n        <!--          v-if=\"form.errors.has('item_id')\"-->\n        <!--          class=\"text-danger\"-->\n        <!--          v-text=\"form.errors.first('item_id')\"-->\n        <!--        />-->\n\n        <!--        <p-->\n        <!--          v-if=\"form.hasError('ledger_id')\"-->\n        <!--          class=\"text-danger\"-->\n        <!--          v-text=\"form.getError('ledger_id')\"-->\n        <!--        />-->\n        <!--      </div>-->\n\n        <!--      <div class=\"row gx-4\">-->\n        <!--        <div class=\"col-xl-6\">-->\n        <!--          <div class=\"form-group mb-4\">-->\n        <!--            <label for=\"item_id\" class=\"form-label\">Price</label>-->\n        <!--            <medic-money-->\n        <!--              :value=\"form.unit_price\"-->\n        <!--              @input=\"(value) => {-->\n        <!--                form.unit_price = value-->\n        <!--              }\"-->\n        <!--            />-->\n        <!--          </div>-->\n        <!--        </div>-->\n        <!--        <div class=\"col-xl-6\">-->\n        <!--          <div class=\"form-group mb-4\">-->\n        <!--            <label for=\"qty\" class=\"form-label\">Qty</label>-->\n        <!--            <input-->\n        <!--              id=\"qty\"-->\n        <!--              v-model=\"form.quantity\"-->\n        <!--              name=\"quantity\"-->\n        <!--              type=\"number\"-->\n        <!--              min=\"1\"-->\n        <!--              class=\"form-control\"-->\n        <!--            >-->\n        <!--            <span-->\n        <!--              v-if=\"form.hasError('quantity')\"-->\n        <!--              class=\"text-danger\"-->\n        <!--              v-text=\"form.getError('quantity')\"-->\n        <!--            />-->\n        <!--          </div>-->\n        <!--        </div>-->\n        <!--      </div>-->\n\n        <!--      <div v-if=\"showVendor\" class=\"form-group mb-4\">-->\n        <!--        <label for=\"vendor_id\" class=\"form-label\">Assigned Doctor</label>-->\n\n        <!--        <v-select-->\n        <!--          id=\"item_id\"-->\n        <!--          v-model=\"form.vendor_id\"-->\n        <!--          :options=\"assignedTo\"-->\n        <!--          label=\"name\"-->\n        <!--          :reduce=\"(option) => option.id\"-->\n        <!--          :clearable=\"true\"-->\n        <!--        />-->\n        <!--      </div>-->\n\n        <!--      <div v-if=\"showStore\" class=\"form-group mb-4\">-->\n        <!--        <label for=\"store_id\" class=\"form-label\">Dispensing Store-->\n        <!--          <span v-if=\"form.store_id\" class=\"form-label-description small text-indigo\">Available Stock: {{ availableStock }} Units</span>-->\n        <!--        </label>-->\n\n        <!--        <v-select-->\n        <!--          id=\"item_id\"-->\n        <!--          v-model=\"form.store_id\"-->\n        <!--          :options=\"stores\"-->\n        <!--          label=\"name\"-->\n        <!--          :reduce=\"(option) => option.id\"-->\n        <!--          :clearable=\"true\"-->\n        <!--        />-->\n        <!--      </div>-->\n\n        <!--      &lt;!&ndash;        <div class=\"row\">&ndash;&gt;-->\n        <!--      &lt;!&ndash;            <div class=\"col-xl-8\">&ndash;&gt;-->\n        <!--      &lt;!&ndash;                <div class=\"mb-3\">&ndash;&gt;-->\n        <!--      &lt;!&ndash;                    <label for=\"date\" class=\"form-label\">Date</label>&ndash;&gt;-->\n\n        <!--      &lt;!&ndash;                    <DatePicker&ndash;&gt;-->\n        <!--      &lt;!&ndash;                        id=\"date\"&ndash;&gt;-->\n        <!--      &lt;!&ndash;                        :value=\"form.date\"&ndash;&gt;-->\n        <!--      &lt;!&ndash;                        class=\"form-control\"&ndash;&gt;-->\n        <!--      &lt;!&ndash;                        :default-date=\"form.date\"&ndash;&gt;-->\n        <!--      &lt;!&ndash;                        :max-date=\"new Date()\"&ndash;&gt;-->\n        <!--      &lt;!&ndash;                        @on-change=\"(datObj, dateStr) => (form.date = dateStr)\">&ndash;&gt;-->\n        <!--      &lt;!&ndash;                    </DatePicker>&ndash;&gt;-->\n\n        <!--      &lt;!&ndash;                    <span&ndash;&gt;-->\n        <!--      &lt;!&ndash;                        v-if=\"form.hasError('date')\"&ndash;&gt;-->\n        <!--      &lt;!&ndash;                        class=\"text-danger\"&ndash;&gt;-->\n        <!--      &lt;!&ndash;                        v-text=\"form.getError('date')\"&ndash;&gt;-->\n        <!--      &lt;!&ndash;                    ></span>&ndash;&gt;-->\n        <!--      &lt;!&ndash;                </div>&ndash;&gt;-->\n        <!--      &lt;!&ndash;            </div>&ndash;&gt;-->\n        <!--      &lt;!&ndash;        </div>&ndash;&gt;-->\n\n        <!--      <div v-if=\"form.processing\" class=\"progress mb-2\">-->\n        <!--        <div class=\"progress\">-->\n        <!--          <div class=\"progress-bar progress-bar-indeterminate bg-green\" />-->\n        <!--        </div>-->\n        <!--      </div>-->\n\n        <!--      <template #modal-footer=\"{cancel}\">-->\n        <!--        <button type=\"button\" class=\"btn\" :disabled=\"form.processing\" @click.prevent=\"cancel\">-->\n        <!--          Close-->\n        <!--        </button>-->\n\n        <!--        <button-->\n        <!--          type=\"submit\" class=\"btn btn-primary\"-->\n        <!--          :disabled=\"form.processing\"-->\n        <!--          @click=\"chargePatient\"-->\n        <!--        >-->\n        <!--          Submit-->\n        <!--        </button>-->\n        <!--      </template>-->\n        <!--    </b-modal>-->\n    </div>\n</template>\n\n<style scoped>\n.styled-table {\n    border-collapse: collapse;\n    margin: 0 0;\n    min-width: 100%;\n//line-height: 10px;\n}\n\n.styled-table thead tr {\n    background-color: #f4f5f7;\n    color: #111111;\n    text-align: left;\n}\n\n.styled-table th,\n.styled-table td {\n    padding: 6px 10px;\n}\n\n.styled-table tbody tr {\n//border-bottom: 1px solid #dddddd;\n}\n\n.styled-table tbody tr td {\n    border: 1px solid #f3f3f3\n}\n\n.styled-table tbody tr:nth-of-type(even) {\n//background-color: #f3f3f3;\n}\n\n.styled-table tbody tr.active-row {\n    font-weight: bold;\n    color: #009879;\n}\n\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BillingForm.vue?vue&type=style&index=0&id=b8763d78&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BillingForm.vue?vue&type=style&index=0&id=b8763d78&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingForm_vue_vue_type_style_index_0_id_b8763d78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BillingForm.vue?vue&type=style&index=0&id=b8763d78&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BillingForm.vue?vue&type=style&index=0&id=b8763d78&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingForm_vue_vue_type_style_index_0_id_b8763d78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingForm_vue_vue_type_style_index_0_id_b8763d78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/BillingForm.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/BillingForm.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BillingForm_vue_vue_type_template_id_b8763d78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BillingForm.vue?vue&type=template&id=b8763d78&scoped=true& */ "./resources/js/components/BillingForm.vue?vue&type=template&id=b8763d78&scoped=true&");
/* harmony import */ var _BillingForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BillingForm.vue?vue&type=script&lang=js& */ "./resources/js/components/BillingForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _BillingForm_vue_vue_type_style_index_0_id_b8763d78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BillingForm.vue?vue&type=style&index=0&id=b8763d78&scoped=true&lang=css& */ "./resources/js/components/BillingForm.vue?vue&type=style&index=0&id=b8763d78&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BillingForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BillingForm_vue_vue_type_template_id_b8763d78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BillingForm_vue_vue_type_template_id_b8763d78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b8763d78",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/BillingForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/BillingForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/BillingForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BillingForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BillingForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/BillingForm.vue?vue&type=template&id=b8763d78&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/BillingForm.vue?vue&type=template&id=b8763d78&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingForm_vue_vue_type_template_id_b8763d78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingForm_vue_vue_type_template_id_b8763d78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingForm_vue_vue_type_template_id_b8763d78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BillingForm.vue?vue&type=template&id=b8763d78&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BillingForm.vue?vue&type=template&id=b8763d78&scoped=true&");


/***/ }),

/***/ "./resources/js/components/BillingForm.vue?vue&type=style&index=0&id=b8763d78&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/BillingForm.vue?vue&type=style&index=0&id=b8763d78&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BillingForm_vue_vue_type_style_index_0_id_b8763d78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BillingForm.vue?vue&type=style&index=0&id=b8763d78&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/BillingForm.vue?vue&type=style&index=0&id=b8763d78&scoped=true&lang=css&");


/***/ })

}]);
//# sourceMappingURL=resources_js_components_BillingForm_vue.js.map