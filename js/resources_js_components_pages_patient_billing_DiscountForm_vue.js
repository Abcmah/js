"use strict";
(self["webpackChunkmedic_hospital_management"] = self["webpackChunkmedic_hospital_management"] || []).push([["resources_js_components_pages_patient_billing_DiscountForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/DiscountForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/DiscountForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/core */ "./resources/js/services/core.js");
/* harmony import */ var _plugins_money__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @plugins/money */ "./resources/js/plugins/money.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  filters: {
    toMoneyFormat: function toMoneyFormat(value) {
      if (!value) return 0.00;
      return (0,_plugins_money__WEBPACK_IMPORTED_MODULE_1__.toPrice)(value).toFormat('0,0.00');
    }
  },
  props: {
    invoice: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      form: new window.Form({
        ledger_id: this.invoice.id,
        item: null,
        // quantity: 1,
        unit_price: 0,
        // date: formatDate(new Date(), 'yyyy-MM-dd'),
        // comments: '',
        items: []
      }),
      discountItems: [],
      discountCalculations: [{
        name: 'Fixed Amount',
        id: 0
      }, {
        name: 'Percentage of Bill',
        id: 1
      }],
      selectedCalculation: 0,
      selectedPercentage: 0
    };
  },
  computed: {
    billsTable: function billsTable() {
      return this.$refs.billsTable;
    },
    netBalance: function netBalance() {
      if (this.selectedCalculation === 0) {
        return Number.parseInt(this.invoice.balance * 0.01) - Number.parseInt(this.form.unit_price);
      }
      var percentage = this.selectedPercentage * 0.01;
      var discountGiven = this.invoice.balance * 0.01 * percentage;
      this.form.unit_price = Math.round(discountGiven);
      return this.invoice.balance * 0.01 - Math.round(discountGiven);
      // const discount = toPrice(this.totalBill).multiply(percentage)

      // return toPrice(this.totalBill).subtract(discount).toFormat('0,0.00')
    }
  },

  methods: {
    applyDiscount: function applyDiscount() {
      if (!this.form.item) {
        this.$toast.warning('Please select the discount type');
        return;
      }
      if (this.selectedCalculation === 0) {
        // fixed amount
        if (this.form.unit_price > this.totalBill || this.form.unit_price === 0) {
          this.$toast.error('Discount cannot be zero or greater than total bill');
          return;
        }

        // this.saveDiscount()
      }

      if (this.selectedCalculation === 1) {
        // percentage based
        if (this.selectedPercentage > 100 || this.selectedPercentage <= 0) {
          this.$toast.warning('The discount rate exceeds the allowed range');
          return;
        }
        this.saveDiscount();
      }
    },
    saveDiscount: function saveDiscount() {
      var _this = this;
      this.form.items.push({
        item_id: this.form.item.id,
        description: this.form.item.name,
        unit_price: this.form.unit_price,
        quantity: 1
      });
      this.form.post('/patient-bills').then(function () {
        _this.$toast.success('Discount Applied');
        _this.$emit('bill:added');
        _this.$bvModal.hide('discount-modal');
      })["catch"]();
    },
    setup: function setup() {
      this.findAllDiscountProducts();
    },
    cleanup: function cleanup() {
      this.form.reset();
      this.selectedCalculation = 0;
      this.selectedPercentage = 0;
      this.totalBill = 0;
    },
    findAllDiscountProducts: function findAllDiscountProducts() {
      var _this2 = this;
      _services_core__WEBPACK_IMPORTED_MODULE_0__["default"].findAllItems({
        params: {
          filter: {
            discount: true
          }
        }
      }).then(function (_ref) {
        var data = _ref.data;
        _this2.discountItems = data.data;
      })["catch"](function (error) {
        console.error(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/DiscountForm.vue?vue&type=template&id=0adda899&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/DiscountForm.vue?vue&type=template&id=0adda899& ***!
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
  return _c("b-modal", {
    attrs: {
      id: "discount-modal",
      "title-class": "font-18",
      "no-close-on-backdrop": "",
      "footer-class": "d-flex justify-content-between bg-muted-lt border-top",
      "content-class": "bg-white rounded-3",
      "body-class": "px-4",
      "modal-class": "modal-blur",
      title: "Discount Allowed",
      "hide-header-close": "",
      "no-close-on-esc": "",
      "no-enforce-focus": ""
    },
    on: {
      shown: _vm.setup,
      hidden: _vm.cleanup
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn(_ref) {
        var cancel = _ref.cancel;
        return [_c("button", {
          staticClass: "btn btn-light",
          attrs: {
            disabled: _vm.form.processing
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return cancel.apply(null, arguments);
            }
          }
        }, [_vm._v("\n      Close\n    ")]), _vm._v(" "), _c("button", {
          staticClass: "btn btn-primary",
          attrs: {
            disabled: _vm.form.processing,
            type: "submit"
          },
          on: {
            click: function click($event) {
              $event.preventDefault();
              return _vm.applyDiscount.apply(null, arguments);
            }
          }
        }, [_vm._v("\n      Give Discount\n    ")])];
      }
    }])
  }, [_c("div", {
    staticClass: "form-group mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Discount type")]), _vm._v(" "), _c("v-select", {
    attrs: {
      id: "account_id",
      options: _vm.discountItems,
      label: "name",
      reduce: function reduce(option) {
        return option;
      },
      clearable: false
    },
    model: {
      value: _vm.form.item,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "item", $$v);
      },
      expression: "form.item"
    }
  }), _vm._v(" "), _vm.form.hasError("item_id") ? _c("span", {
    staticClass: "text-danger",
    domProps: {
      textContent: _vm._s(_vm.form.getError("item_id"))
    }
  }) : _vm._e()], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Discount Method")]), _vm._v(" "), _c("div", [_c("label", {
    staticClass: "form-check form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedCalculation,
      expression: "selectedCalculation"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio",
      checked: ""
    },
    domProps: {
      value: 0,
      checked: _vm._q(_vm.selectedCalculation, 0)
    },
    on: {
      change: function change($event) {
        _vm.selectedCalculation = 0;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "form-check-label"
  }, [_vm._v("Fixed Amount ")])]), _vm._v(" "), _c("label", {
    staticClass: "form-check form-check"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedCalculation,
      expression: "selectedCalculation"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "radio"
    },
    domProps: {
      value: 1,
      checked: _vm._q(_vm.selectedCalculation, 1)
    },
    on: {
      change: function change($event) {
        _vm.selectedCalculation = 1;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "form-check-label"
  }, [_vm._v("Percentage")])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-4"
  }, [_c("div", {
    staticClass: "form-group mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Bill")]), _vm._v(" "), _c("medic-money", {
    attrs: {
      disabled: true,
      value: _vm.invoice.balance * 0.01
    }
  })], 1)]), _vm._v(" "), _vm.selectedCalculation === 0 ? _c("div", {
    staticClass: "col-xl-4"
  }, [_c("div", {
    staticClass: "form-group mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Amount")]), _vm._v(" "), _c("medic-money", {
    on: {
      input: function input(payload) {
        _vm.form.unit_price = payload;
      }
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.selectedCalculation === 1 ? _c("div", {
    staticClass: "col-xl-4"
  }, [_c("div", {
    staticClass: "form-group mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "disc_rate"
    }
  }, [_vm._v("Rate (%)")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectedPercentage,
      expression: "selectedPercentage"
    }],
    staticClass: "form-control",
    attrs: {
      id: "disc_rate",
      type: "number",
      min: "1",
      max: "100"
    },
    domProps: {
      value: _vm.selectedPercentage
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.selectedPercentage = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-indigo small"
  }, [_vm._v("Kes " + _vm._s(_vm._f("toMoneyFormat")(_vm.form.unit_price)))])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-xl-4"
  }, [_c("div", {
    staticClass: "form-group mb-4"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Net Amount")]), _vm._v(" "), _c("medic-money", {
    attrs: {
      value: _vm.netBalance,
      disabled: ""
    }
  })], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/services/core.js":
/*!***************************************!*\
  !*** ./resources/js/services/core.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @plugins/axios */ "./resources/js/plugins/axios.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
/*
 * Copyright (c) 2020.  medic@medic.org
 *
 * This file is part of Medic.
 *
 * Medic is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  Medic is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with Medic. If not, see <http://www.gnu.org/licenses/>.
 */


// import jsonApi from '@plugins/devour-client'

var urlPrefix = '/api/v1';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  findAllMedia: function findAllMedia(mediable_id, mediable_type) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(process.env.VUE_APP_BACKEND_URL + '/media/' + mediable_id + '/' + mediable_type);
  },
  downloadMedia: function downloadMedia(id) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(process.env.VUE_APP_BACKEND_URL + '/media/' + id, {
      responseType: 'blob'
    });
  },
  deleteMedia: function deleteMedia(id) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](process.env.VUE_APP_BACKEND_URL + '/media/' + id);
  },
  findAllHeaders: function findAllHeaders() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/invoices', options);
    // return jsonApi.findAll('header', options)
  },
  findHeaderById: function findHeaderById(id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/invoices/' + id);
    // return jsonApi.find('header', id, options)
  },
  createHeader: function createHeader(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.create('header', data, options);
  },
  findAllDetail: function findAllDetail() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return jsonApi.findAll('detail', options);
  },
  findDetailById: function findDetailById(id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.find('detail', id, options);
  },
  createDetail: function createDetail(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.create('detail', data, options);
  },
  createAddress: function createAddress(data) {
    return jsonApi.create('address', data);
  },
  updateAddress: function updateAddress(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.update('address', data, options);
  },
  findAddressById: function findAddressById(id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.find('address', id, options);
  },
  updateSettings: function updateSettings(data) {
    return jsonApi.update('setting', data);
  },
  findAllSettings: function findAllSettings() {
    return jsonApi.findAll('setting');
  },
  updateSetting: function updateSetting(data) {
    return jsonApi.update('setting', data);
  },
  findSettingById: function findSettingById(id) {
    return jsonApi.find('setting', id);
  },
  findAllVisitTypes: function findAllVisitTypes() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/visits', option);
    // return jsonApi.findAll('visit', option)
  },
  updateOrganization: function updateOrganization(data) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put('/organizations/' + data.id + '/', data);
  },
  updateInstitutionPhoto: function updateInstitutionPhoto(form) {
    return form.post(urlPrefix + '/organization/update_logo');
  },
  findOrganization: function findOrganization() {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/organizations');
  },
  searchDepartments: function searchDepartments(search) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(urlPrefix + '/departments?name=' + search);
  },
  findAllDepartments: function findAllDepartments() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/departments', options);
    // return jsonApi.findAll('department', options)
  },
  findDepartmentById: function findDepartmentById(id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/departments/' + id);
    // return jsonApi.find('department', id, options)
  },
  createDepartment: function createDepartment(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/departments', data);
    // return jsonApi.create('department', data, options)
  },
  updateDepartment: function updateDepartment(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch("/departments/".concat(data.id), data);

    // return jsonApi.update('department', data, options)
  },
  findIdentification: function findIdentification(id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.find('identification', id, options || {});
  },
  createIdentification: function createIdentification(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/identifications', data);
    // return jsonApi.create('identification', data, options)
  },
  updateIdentification: function updateIdentification(data) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch('/identifications/' + data.id, data);
  },
  deleteIdentification: function deleteIdentification(id) {
    return jsonApi.destroy('identification', id);
  },
  findWardById: function findWardById(id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/wards/' + id, options);
  },
  findAllWards: function findAllWards() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/wards', options);
    // return jsonApi.findAll('wards', options)
  },
  createWard: function createWard(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/wards', data);
    // return jsonApi.create('ward', data, options)
  },
  updateWard: function updateWard(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch("/wards/".concat(data.id), data);

    // return jsonApi.update('ward', data, options)
  },
  deleteWard: function deleteWard(id) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](urlPrefix + '/wards/' + id);
  },
  getBranches: function getBranches() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/branches', options);
    // return jsonApi.findAll('branch', options)
  },
  findBranchById: function findBranchById(id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.find('branch', id, options);
  },
  createBranch: function createBranch(data) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/branches', data);
    // return jsonApi.create('branch', {
    //   name: data.name,
    //   code: data.code,
    //   telephone: data.telephone,
    //   email: data.email,
    //   currency_id: data.currency_id,
    //   country_id: data.country_id,
    //   postal_address: data.postal_address,
    //   physical_address: data.physical_address,
    // })
  },
  updateBranch: function updateBranch(data) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch("/branches/".concat(data.id), data);

    // return jsonApi.update('branch', {
    //   id: data.id,
    //   name: data.name,
    //   code: data.code,
    //   telephone: data.telephone,
    //   email: data.email,
    //   currency_id: data.currency_id,
    //   country_id: data.country_id,
    //   postal_address: data.postal_address,
    //   physical_address: data.physical_address,
    // })
  },
  getWards: function getWards(branchId) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(urlPrefix + '/wards?branchId=' + branchId);
  },
  getStores: function getStores() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return jsonApi.findAll('store', options);
  },
  searchStore: function searchStore(search) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(urlPrefix + '/stores?name=' + search);
  },
  findAllItemTypes: function findAllItemTypes() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/item_types', options);
    // return jsonApi.findAll('items_type', options)
  },
  createItemType: function createItemType(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.create('items_type', data, options);
  },
  updateItemType: function updateItemType(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.update('items_type', data, options);
  },
  findAllItemsGroups: function findAllItemsGroups() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/item_groups', options);
    // return jsonApi.findAll('items_group', options)
  },
  createItemGroup: function createItemGroup(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/item_groups', data);
    // return jsonApi.create('items_group', data, options)
  },
  updateItemGroup: function updateItemGroup(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch('/item_groups/' + data.id, data);

    // return jsonApi.update('items_group', data, options)
  },
  deleteItemGroup: function deleteItemGroup(id) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]('/item_groups/' + id);
  },
  findAllItems: function findAllItems() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/datatable/products', options);
  },
  findItemById: function findItemById(id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/items/' + id);
    // return jsonApi.find('item', id, options)
  },
  findAllPricesList: function findAllPricesList() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/price_lists', options);
  },
  createPriceList: function createPriceList(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/prices_lists', data);
    // return jsonApi.create('prices_list', data, options)
  },
  updatePriceList: function updatePriceList(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch('/prices_lists/' + data.id, data);

    // return jsonApi.update('prices_list', data, options)
  },
  deletePriceList: function deletePriceList(id) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]('/prices_lists/' + id);
    // return jsonApi.destroy('prices_list', id)
  },
  findAllItemsAssociation: function findAllItemsAssociation() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return jsonApi.findAll('items_association', options);
  },
  deleteItemsAssociation: function deleteItemsAssociation(id) {
    return jsonApi.destroy('items_association', id);
  },
  createItemsAssociation: function createItemsAssociation(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.create('items_association', data, options);
  },
  findAllDailyCharges: function findAllDailyCharges() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return jsonApi.findAll('daily_charge', options);
  },
  createDailyCharge: function createDailyCharge(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.create('daily_charge', data, options);
  },
  updateDailyCharge: function updateDailyCharge(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.update('daily_charge', data, options);
  },
  deleteDailyCharge: function deleteDailyCharge(id) {
    return jsonApi.destroy('daily_charge', id);
  },
  searchUOM: function searchUOM(search) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(urlPrefix + "/unit_of_measure?filter=".concat(search));
  },
  createItem: function createItem(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/items', data);
    // return jsonApi.create('item', data, options)
  },
  updateItem: function updateItem(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch("/items/".concat(data.id), data);
    // return jsonApi.update('item', data, options)
  },
  deleteItem: function deleteItem(id) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](urlPrefix + '/items/' + id);
  },
  findAllFormulations: function findAllFormulations() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/formulations', options);

    // return jsonApi.findAll('formulation', options)
  },
  createFormulation: function createFormulation(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/formulations', data);
    // return jsonApi.create('formulation', data, options)
  },
  updateFormulation: function updateFormulation(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch("/formulations/".concat(data.id), data);
    // return jsonApi.update('formulation', data, options)
  },
  createRoute: function createRoute(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.create('route', data, options);
  },
  updateRoute: function updateRoute(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.update('route', data, options);
  },
  findAllRoute: function findAllRoute() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return jsonApi.findAll('route', options);
  },
  createProductRoute: function createProductRoute(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.create('items_route', data, options);
  },
  deleteProductRoute: function deleteProductRoute(id) {
    return jsonApi.destroy('items_route', id);
  },
  findAllUOM: function findAllUOM() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/uoms', options);
    // return jsonApi.findAll('unit_of_measurement', options)
  },
  createUOM: function createUOM(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/unit_of_measurements', data);
    // return jsonApi.create('unit_of_measurement', data, options)
  },
  updateUOM: function updateUOM(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch("/unit_of_measurements/".concat(data.id), data);
    // return jsonApi.update('unit_of_measurement', data, options)
  },
  findAllItemsAssignment: function findAllItemsAssignment() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return jsonApi.findAll('item_assignment', options);
  },
  createItemAssignment: function createItemAssignment(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.create('item_assignment', data, options);
  },
  deleteItemAssignment: function deleteItemAssignment(itemId) {
    return jsonApi.destroy('item_assignment', itemId);
  },
  updateItemAssignment: function updateItemAssignment(form) {
    return form.put(urlPrefix + '/items/' + form.item_id + '/assignments/' + form.id);
  },
  createItemAssociation: function createItemAssociation(form) {
    return form.post(urlPrefix + '/items/' + form.item_id + '/associations');
  },
  deleteItemAssociation: function deleteItemAssociation(itemId, assignmentId) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](urlPrefix + '/items/' + itemId + '/associations/' + assignmentId);
  },
  updateItemAssociation: function updateItemAssociation(form) {
    return form.put(urlPrefix + '/items/' + form.item_id + '/associations/' + form.id);
  },
  deleteFormulation: function deleteFormulation(data) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](urlPrefix + '/formulations/' + data.id);
  },
  getUOM: function getUOM() {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(urlPrefix + '/unit_of_measure');
  },
  deleteUOM: function deleteUOM(data) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](urlPrefix + '/unit_of_measure/' + data.id);
  },
  createReligion: function createReligion(data) {
    return jsonApi.create('religion', {
      name: data.name
    });
  },
  updateReligion: function updateReligion(data) {
    return jsonApi.update('religion', {
      id: data.id,
      name: data.name
    });
  },
  deleteReligion: function deleteReligion(id) {
    return jsonApi.destroy('religion', id);
  },
  findAllReligion: function findAllReligion() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return jsonApi.findAll('religion', options);
  },
  findStoreById: function findStoreById(id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.find('store', id, options);
  },
  findAllStore: function findAllStore() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/stores', options);
    // return jsonApi.findAll('store', options)
  },
  createStore: function createStore(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/stores', data);
    // return jsonApi.create('store', data, options)
  },
  updateStore: function updateStore(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch("/stores/".concat(data.id), data);

    // return jsonApi.update('store', data, options)
  },
  findAllPrefixes: function findAllPrefixes() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return jsonApi.findAll('prefix', options);
  },
  findPrefixById: function findPrefixById(id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.find('prefix', id, options);
  },
  createPrefix: function createPrefix(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.create('prefix', data, data);
  },
  updatePrefix: function updatePrefix(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.update('prefix', data, options);
  },
  getWArdBeds: function getWArdBeds(wardId) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(urlPrefix + '/beds?ward_id=' + wardId);
  },
  findAllBeds: function findAllBeds() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return jsonApi.findAll('bed', options);
  },
  createBed: function createBed(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/beds', data);
    // return jsonApi.create('bed', data, options)
  },
  updateBed: function updateBed(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch("/beds/".concat(data.id), data);
  },
  findBedById: function findBedById(id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return jsonApi.find('bed', id, options);
  },
  deleteBed: function deleteBed(id) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](urlPrefix + '/beds/' + id);
  },
  searchCountries: function searchCountries(search) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(urlPrefix + "/countries?name=".concat(search));
  },
  findAllCountries: function findAllCountries() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return jsonApi.findAll('country', options);
  },
  findAllCurrencies: function findAllCurrencies() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return jsonApi.findAll('currency', options);
  },
  getRelationships: function getRelationships() {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(urlPrefix + '/relationships');
  },
  findAllIdentifications: function findAllIdentifications() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/identifications', options);
    // return jsonApi.findAll('identification', options)
  },
  findAllGender: function findAllGender() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/genders', options);
  },
  findAllProductType: function findAllProductType() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/item_types', options);
  },
  createProductType: function createProductType(form) {
    return form.post(urlPrefix + '/item-types');
  },
  updateProductType: function updateProductType(form) {
    return form.put(urlPrefix + '/item-types/' + form.id);
  },
  deleteProductType: function deleteProductType(id) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](urlPrefix + '/item-types/' + id);
  },
  createProductGroup: function createProductGroup(form) {
    return form.post(urlPrefix + '/item-groups');
  },
  updateProductGroup: function updateProductGroup(form) {
    return form.put(urlPrefix + '/item-groups/' + form.id);
  },
  deleteProductGroup: function deleteProductGroup(id) {
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](urlPrefix + '/item-groups/' + id);
  },
  findAllReligions: function findAllReligions() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/religions', options);
  },
  findReligionById: function findReligionById(id) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/religions/' + id);
  },
  findAllBloodGroups: function findAllBloodGroups() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return jsonApi.findAll('bloodGroup', options);
  },
  findAllMaritalStatuses: function findAllMaritalStatuses() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return _plugins_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/marital_statuses', options);
  },
  findAllRelationships: function findAllRelationships() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return jsonApi.findAll('relationship', options);
  }
});

/***/ }),

/***/ "./resources/js/components/pages/patient/billing/DiscountForm.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/pages/patient/billing/DiscountForm.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DiscountForm_vue_vue_type_template_id_0adda899___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiscountForm.vue?vue&type=template&id=0adda899& */ "./resources/js/components/pages/patient/billing/DiscountForm.vue?vue&type=template&id=0adda899&");
/* harmony import */ var _DiscountForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiscountForm.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/patient/billing/DiscountForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DiscountForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DiscountForm_vue_vue_type_template_id_0adda899___WEBPACK_IMPORTED_MODULE_0__.render,
  _DiscountForm_vue_vue_type_template_id_0adda899___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/patient/billing/DiscountForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/patient/billing/DiscountForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pages/patient/billing/DiscountForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscountForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DiscountForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/DiscountForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscountForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/patient/billing/DiscountForm.vue?vue&type=template&id=0adda899&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/pages/patient/billing/DiscountForm.vue?vue&type=template&id=0adda899& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscountForm_vue_vue_type_template_id_0adda899___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscountForm_vue_vue_type_template_id_0adda899___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DiscountForm_vue_vue_type_template_id_0adda899___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DiscountForm.vue?vue&type=template&id=0adda899& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/patient/billing/DiscountForm.vue?vue&type=template&id=0adda899&");


/***/ })

}]);
//# sourceMappingURL=resources_js_components_pages_patient_billing_DiscountForm_vue.js.map