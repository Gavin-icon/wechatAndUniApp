(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-nav-bar/index"],{

/***/ 102:
/*!*******************************************************************************!*\
  !*** E:/lagou-edu/uniapp_project/uniapp-pro/components/uni-nav-bar/index.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_388d9664___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=388d9664& */ 103);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 105);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ 107);
/* harmony import */ var _C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_388d9664___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_388d9664___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_388d9664___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/uni-nav-bar/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 103:
/*!**************************************************************************************************************!*\
  !*** E:/lagou-edu/uniapp_project/uniapp-pro/components/uni-nav-bar/index.vue?vue&type=template&id=388d9664& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_388d9664___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=388d9664& */ 104);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_388d9664___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_388d9664___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_388d9664___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_388d9664___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 104:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/lagou-edu/uniapp_project/uniapp-pro/components/uni-nav-bar/index.vue?vue&type=template&id=388d9664& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var s0 = _vm.__get_style([
    _vm.navBgColor
      ? {
          backgroundImage: _vm.navBgColor
        }
      : {},
    {
      paddingTop: _vm.statusBarHeight + "px",
      color: _vm.navFontColor,
      opacity: _vm.transparentValue
    }
  ])

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        s0: s0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 105:
/*!********************************************************************************************************!*\
  !*** E:/lagou-edu/uniapp_project/uniapp-pro/components/uni-nav-bar/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 106);
/* harmony import */ var _C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 106:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/lagou-edu/uniapp_project/uniapp-pro/components/uni-nav-bar/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//???????????????
var whiteList = ['#FFF', '#fff', '#FFFFFF', '#ffffff', 'white', 'rgb(255,255,255)', 'rgba(255,255,255,1)'];var _default2 =
{
  props: {
    //????????????????????????
    // 1000 ??????????????????
    // 2000 ?????????????????????
    // 3000 ??????????????????????????????????????????????????????????????????backClick??????
    backState: {
      type: [String, Number],
      default: function _default() {
        return 1000;
      } },

    //??????????????????????????????
    // 1000 ??????????????????
    // 2000 ?????????????????????
    // 3000 ??????????????????????????????????????????????????????????????????homeClick??????
    homeState: {
      type: [String, Number],
      default: function _default() {
        return 2000;
      } },

    //??????????????????????????????
    bgColor: {
      type: [String, Array],
      default: function _default() {
        return '#FFFFFF';
      } },

    // ???????????????????????????
    bgColorAngle: {
      type: [String, Number],
      default: function _default() {
        return 90;
      } },

    //?????????????????????????????????????????????????????????????????????????????????????????????????????????
    fontColor: {
      type: String,
      default: function _default() {
        return '#000000';
      } },

    //??????????????????
    titleCenter: {
      type: Boolean,
      default: function _default() {
        return true;
      } },

    //??????
    title: {
      type: String,
      default: function _default() {
        return '';
      } },

    //?????? fixed????????? ??????
    // ordinary ????????? ?????????
    // transparent ??????????????????
    //transparentFixed  ???????????????
    type: {
      type: String,
      default: function _default() {
        return 'fixed';
      } },

    //?????????????????????????????????
    transparentFixedFontColor: {
      type: String,
      default: function _default() {
        return '#000000';
      } },

    // ??????????????????????????????(????????????????????????)
    scrollTop: {
      type: Number,
      default: function _default() {
        return 0;
      } },

    // ??????????????????
    shadow: {
      type: Boolean,
      default: function _default() {
        return false;
      } } },


  data: function data() {
    return {
      //????????????????????????????????????
      firstPage: false,
      //????????????
      transparentValue: 1,
      //??????
      navTitle: '',
      //?????????
      navFontColor: '#000000',
      //?????????
      navBgColor: '',
      //??????????????????
      navTransparentFixedFontColor: '#000000',
      // ???????????????
      statusBarHeight: 0,
      // ??????????????????????????????
      lastFrontColor: '',
      themeBgColorName: '' };

  },
  computed: {
    // back() {
    // 	return this.backState == 1000 || this.backState == 3000;
    // },
    // home() {
    // 	return this.homeState == 1000;
    // },
    //????????????
    navFixed: function navFixed() {
      if (this.type == 'transparentFixed' || this.type == 'fixed') {
        return true;
      } else {
        return false;
      }
    },
    //???????????????????????????
    navShadow: function navShadow() {
      if (this.bgColor && typeof this.bgColor == 'string') {
        return this.shadow && this.type !== 'transparent' && whiteList.includes(this.bgColor);
      } else {
        return false;
      }
    },
    //?????????????????????????????????
    isWhite: function isWhite() {
      return whiteList.includes(this.navFontColor);
    },
    //??????????????????????????????
    isTwoBtn: function isTwoBtn() {
      return (this.backState == 1000 || this.backState == 3000) && this.homeState == 1000 && !this.firstPage;
    } },

  watch: {
    title: function title(val) {
      this.navTitle = val;
    },
    fontColor: function fontColor(val) {
      this.navFontColor = val;
      this.settingColor();
    },
    bgColor: function bgColor(val) {
      this.getNavBgColor(val);
    },
    transparentFixedFontColor: function transparentFixedFontColor(val) {
      this.navTransparentFixedFontColor = val;
    },
    scrollTop: function scrollTop(val) {
      this.pageScroll({
        scrollTop: val });

    } },

  //???????????????
  created: function created() {
    this.navTitle = this.title;
    this.navFontColor = this.fontColor;
    this.getNavBgColor(this.bgColor);
    this.navTransparentFixedFontColor = this.transparentFixedFontColor;
    //???????????????????????????
    this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
    var _this = this;
    this.pageScroll({
      scrollTop: this.scrollTop });

    //??????????????????
    var currentPages = getCurrentPages();
    var pageLen = currentPages.length;
    //???????????????????????????????????????????????????back???true??????????????????????????????????????????????????????????????????
    // if (pageLen == 1 && !mainPagePath.includes(currentPages[0].route)) {
    // 	this.firstPage = true;
    // }
  },
  //??????
  methods: {
    //??????????????????
    // onBackPage() {
    // 	if (this.backState == 3000) {
    // 		this.$emit('backClick');
    // 	} else {
    // 		uni.navigateBack();
    // 	}
    // },
    //????????????
    // onBackHome() {
    // 	if (this.homeState == 3000) {
    // 		this.$emit('homeClick');
    // 	} else {
    // 		uni.reLaunch({
    // 			url: homePath
    // 		});
    // 	}
    // },
    pageScroll: function pageScroll(e) {
      if (this.type == 'transparentFixed') {
        if (e.scrollTop && e.scrollTop > 0) {
          if (e.scrollTop > 180) {
            this.transparentValue = 1;
          } else {
            this.transparentValue = e.scrollTop / 180;
          }
        } else {
          this.transparentValue = 0;
        }
        this.settingColor();
      }
    },
    // ????????????????????????
    getNavBgColor: function getNavBgColor(val) {
      if (typeof val == 'string') {
        if (this.type == 'transparent') {
          this.navBgColor = '';
        } else if (/^#|rgb\(|rgba\(/.test(val)) {
          this.navBgColor = 'linear-gradient(90deg,' + val + ',' + val + ')';
        } else {
          this.themeBgColorName = val;
          this.navBgColor = '';
        }
      } else if (Array.isArray(val) && val.length >= 2) {
        var navBgColor = 'linear-gradient(' + this.bgColorAngle + 'deg';
        val.forEach(function (item) {
          if (typeof item == 'string') {
            navBgColor += ',' + item;
          } else if (typeof item == 'object') {
            navBgColor += ',' + item.color + ' ' + item.scale;
          }
        });
        navBgColor += ')';
        this.navBgColor = navBgColor;
      }
    },
    //???????????????????????????
    settingColor: function settingColor() {var _this2 = this;
      var navColor = this.navFontColor;
      if (this.type == 'transparentFixed' && this.transparentValue <= 0.5) {
        navColor = this.navTransparentFixedFontColor;
      }
      var frontColor = '#000000';
      if (whiteList.includes(navColor)) {
        frontColor = '#ffffff';
      }
      if (this.lastFrontColor == frontColor) {
        return;
      }
      setTimeout(function () {
        _this2.lastFrontColor = frontColor;
        // ???????????????????????????
        uni.setNavigationBarColor({
          frontColor: frontColor,
          backgroundColor: '#FFFFFF' });

      }, 150);
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 107:
/*!*****************************************************************************************************************!*\
  !*** E:/lagou-edu/uniapp_project/uniapp-pro/components/uni-nav-bar/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&lang=scss& */ 108);
/* harmony import */ var _C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_C_Users_Gavin_icon_Downloads_HBuilderX_3_5_3_20220729_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 108:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/lagou-edu/uniapp_project/uniapp-pro/components/uni-nav-bar/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/uni-nav-bar/index.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-nav-bar/index-create-component',
    {
        'components/uni-nav-bar/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(102))
        })
    },
    [['components/uni-nav-bar/index-create-component']]
]);
