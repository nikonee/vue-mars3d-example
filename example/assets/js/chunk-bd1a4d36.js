(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-bd1a4d36"],{

/***/ "0fbb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_build_example_vue_loader_js_index_vue_vue_type_style_index_0_id_7036530b_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d1cc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_build_example_vue_loader_js_index_vue_vue_type_style_index_0_id_7036530b_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_build_example_vue_loader_js_index_vue_vue_type_style_index_0_id_7036530b_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3747":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@icon-park/vue-next/es/icons/UploadOne.js
var UploadOne = __webpack_require__("975b");

// EXTERNAL MODULE: ./node_modules/@icon-park/vue-next/es/icons/Save.js
var Save = __webpack_require__("4ef5");

// EXTERNAL MODULE: ./node_modules/ant-design-vue/es/message/style/index.js
var style = __webpack_require__("3b18");

// EXTERNAL MODULE: ./node_modules/ant-design-vue/es/message/index.js + 2 modules
var message = __webpack_require__("f64c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 3 modules
var vue_runtime_esm_bundler = __webpack_require__("7a23");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./build/example-vue-loader.js!./src/components/mars-sample/data-manage.vue?vue&type=script&setup=true&lang=ts








var _hoisted_1 = /*#__PURE__*/Object(vue_runtime_esm_bundler["createElementVNode"])("span", {
  class: "pannel-item-label"
}, "数据管理:", -1);

var _hoisted_2 = /*#__PURE__*/Object(vue_runtime_esm_bundler["createTextVNode"])("清除");

var _hoisted_3 = /*#__PURE__*/Object(vue_runtime_esm_bundler["createTextVNode"])(" 保存 ");

var _hoisted_4 = /*#__PURE__*/Object(vue_runtime_esm_bundler["createTextVNode"])(" 打开 ");


// mapWork是map.js内定义的所有对象， 在项目中使用时可以改为import方式使用:  import * as mapWork from './map.js'
/* harmony default export */ var data_managevue_type_script_setup_true_lang_ts = (/*#__PURE__*/Object(vue_runtime_esm_bundler["defineComponent"])({
  setup: function setup(__props) {
    /**
     * 公共组件：用来运行或保存GEOJSON
     * @copyright 火星科技 mars3d.cn
     * @author 木遥 2021-11-01
     */
    var mapWork = window.mapWork; //  清除数据

    var btnClear = function btnClear() {
      mapWork.btnClear();
    }; // 保存geojson


    var btnExpFile = function btnExpFile() {
      mapWork.btnExpFile();
    }; // 打开geojson


    var beforeUploade = function beforeUploade(file) {
      // fileList.value = [file]
      return false;
    };

    var btnImpFile = function btnImpFile(info) {
      var item = info.file;
      var fileName = item.name;
      var fileType = fileName === null || fileName === void 0 ? void 0 : fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length).toLowerCase();

      if (fileType != "json") {
        message["a" /* default */].error("文件类型不合法,请选择json格式标注文件！");
      }

      mapWork.btnImpFile(item);
    };

    var fileList = Object(vue_runtime_esm_bundler["ref"])([]);
    return function (_ctx, _cache) {
      var _component_mars_button = Object(vue_runtime_esm_bundler["resolveComponent"])("mars-button");

      var _component_a_button = Object(vue_runtime_esm_bundler["resolveComponent"])("a-button");

      var _component_a_upload = Object(vue_runtime_esm_bundler["resolveComponent"])("a-upload");

      var _component_a_space = Object(vue_runtime_esm_bundler["resolveComponent"])("a-space");

      return Object(vue_runtime_esm_bundler["openBlock"])(), Object(vue_runtime_esm_bundler["createBlock"])(_component_a_space, null, {
        default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
          return [_hoisted_1, Object(vue_runtime_esm_bundler["createVNode"])(_component_mars_button, {
            onClick: btnClear
          }, {
            default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
              return [_hoisted_2];
            }),
            _: 1
          }), Object(vue_runtime_esm_bundler["createVNode"])(_component_mars_button, {
            onClick: btnExpFile,
            title: "保存GeoJSON"
          }, {
            default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
              return [Object(vue_runtime_esm_bundler["createVNode"])(Object(vue_runtime_esm_bundler["unref"])(Save["a" /* default */])), _hoisted_3];
            }),
            _: 1
          }), Object(vue_runtime_esm_bundler["createVNode"])(_component_a_upload, {
            multiple: false,
            name: "file",
            accept: "json,geojson",
            "file-list": fileList.value,
            showUploadList: false,
            supportServerRender: true,
            beforeUpload: beforeUploade,
            onChange: btnImpFile
          }, {
            default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
              return [Object(vue_runtime_esm_bundler["createVNode"])(_component_a_button, {
                title: "打开GeoJSON"
              }, {
                default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                  return [Object(vue_runtime_esm_bundler["createVNode"])(Object(vue_runtime_esm_bundler["unref"])(UploadOne["a" /* default */])), _hoisted_4];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["file-list"])];
        }),
        _: 1
      });
    };
  }
}));
// CONCATENATED MODULE: ./src/components/mars-sample/data-manage.vue?vue&type=script&setup=true&lang=ts
 
// CONCATENATED MODULE: ./src/components/mars-sample/data-manage.vue



const __exports__ = data_managevue_type_script_setup_true_lang_ts;

/* harmony default export */ var data_manage = __webpack_exports__["a"] = (__exports__);

/***/ }),

/***/ "4e4b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_build_example_vue_loader_js_pannel_vue_vue_type_style_index_0_id_b885d716_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e64d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_build_example_vue_loader_js_pannel_vue_vue_type_style_index_0_id_b885d716_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_build_example_vue_loader_js_pannel_vue_vue_type_style_index_0_id_b885d716_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7544":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@icon-park/vue-next/es/icons/Close.js
var Close = __webpack_require__("246f");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 3 modules
var vue_runtime_esm_bundler = __webpack_require__("7a23");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./build/example-vue-loader.js!./src/components/marsgis/pannel.vue?vue&type=script&lang=ts&setup=true




var pannelvue_type_script_lang_ts_setup_true_withScopeId = function _withScopeId(n) {
  return Object(vue_runtime_esm_bundler["pushScopeId"])("data-v-b885d716"), n = n(), Object(vue_runtime_esm_bundler["popScopeId"])(), n;
};

var _hoisted_1 = {
  class: "title"
};

/* harmony default export */ var pannelvue_type_script_lang_ts_setup_true = (/*#__PURE__*/Object(vue_runtime_esm_bundler["defineComponent"])({
  props: {
    type: {
      type: String,
      default: "pannel"
    },
    warpper: {
      type: String,
      default: "sanbox-warpper"
    },
    title: {
      type: String,
      default: ""
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:visible"],
  setup: function setup(__props, _ref) {
    var emits = _ref.emit;
    var props = __props;
    /**
     * 操作公共容器
     * @copyright 火星科技 mars3d.cn
     * @author 木遥 2021-11-01
     */

    var pannelBox = Object(vue_runtime_esm_bundler["ref"])();

    var closeModel = function closeModel() {
      emits("update:visible", false);
    };

    function mousedown(event) {
      var x = event.clientX;
      var y = event.clientY;

      window.onmousemove = function (ev) {
        ev.preventDefault();
        toPointerPosition(ev);
      };

      window.onmouseup = function (ev) {
        toPointerPosition(ev);
        window.onmousemove = null;
        window.onmouseup = null;
      };

      function toPointerPosition(ev) {
        var pb = pannelBox.value;
        var distanceX = ev.clientX - x;
        var distanceY = ev.clientY - y;
        toPosition(pb, pb.offsetLeft + distanceX, pb.offsetTop + distanceY, ev);
      }

      function toPosition(dom, left, top, e) {
        var warpper = document.getElementById(props.warpper);

        if (left > 0 && left + dom.offsetWidth < warpper.offsetWidth) {
          dom.style.left = left + "px";
          x = e.clientX;
        }

        if (top > 0 && top + dom.offsetHeight < warpper.offsetHeight) {
          dom.style.top = top + "px";
          y = e.clientY;
        }
      }
    }

    return function (_ctx, _cache) {
      return Object(vue_runtime_esm_bundler["withDirectives"])((Object(vue_runtime_esm_bundler["openBlock"])(), Object(vue_runtime_esm_bundler["createElementBlock"])("div", {
        class: Object(vue_runtime_esm_bundler["normalizeClass"])(["pannel fadeInRight", {
          'pannel-model': props.type === 'model'
        }]),
        ref_key: "pannelBox",
        ref: pannelBox
      }, [props.type === 'model' ? (Object(vue_runtime_esm_bundler["openBlock"])(), Object(vue_runtime_esm_bundler["createElementBlock"])("div", {
        key: 0,
        ref: "modelHeader",
        class: "pannel-model__header",
        onMousedown: mousedown
      }, [Object(vue_runtime_esm_bundler["createElementVNode"])("span", _hoisted_1, Object(vue_runtime_esm_bundler["toDisplayString"])(__props.title), 1), Object(vue_runtime_esm_bundler["createVNode"])(Object(vue_runtime_esm_bundler["unref"])(Close["a" /* default */]), {
        onClick: closeModel,
        class: "close-btn"
      })], 544)) : Object(vue_runtime_esm_bundler["createCommentVNode"])("", true), Object(vue_runtime_esm_bundler["renderSlot"])(_ctx.$slots, "default")], 2)), [[vue_runtime_esm_bundler["vShow"], props.type === 'pannel' || __props.visible]]);
    };
  }
}));
// CONCATENATED MODULE: ./src/components/marsgis/pannel.vue?vue&type=script&lang=ts&setup=true
 
// EXTERNAL MODULE: ./src/components/marsgis/pannel.vue?vue&type=style&index=0&id=b885d716&lang=less&scoped=true
var pannelvue_type_style_index_0_id_b885d716_lang_less_scoped_true = __webpack_require__("4e4b");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/marsgis/pannel.vue






const __exports__ = /*#__PURE__*/exportHelper_default()(pannelvue_type_script_lang_ts_setup_true, [['__scopeId',"data-v-b885d716"]])

/* harmony default export */ var pannel = __webpack_exports__["a"] = (__exports__);

/***/ }),

/***/ "92f9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_build_example_vue_loader_js_location_to_vue_vue_type_style_index_0_id_a6077f40_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("af22");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_build_example_vue_loader_js_location_to_vue_vue_type_style_index_0_id_a6077f40_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_build_example_vue_loader_js_location_to_vue_vue_type_style_index_0_id_a6077f40_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "af22":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bc30":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 3 modules
var vue_runtime_esm_bundler = __webpack_require__("7a23");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--7!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./build/example-vue-loader.js!./src/components/mars-sample/location-to.vue?vue&type=template&id=a6077f40&scoped=true


var location_tovue_type_template_id_a6077f40_scoped_true_withScopeId = function _withScopeId(n) {
  return Object(vue_runtime_esm_bundler["pushScopeId"])("data-v-a6077f40"), n = n(), Object(vue_runtime_esm_bundler["popScopeId"])(), n;
};

var _hoisted_1 = /*#__PURE__*/Object(vue_runtime_esm_bundler["createTextVNode"])("定位至山区");

var _hoisted_2 = /*#__PURE__*/Object(vue_runtime_esm_bundler["createTextVNode"])("定位至模型");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_mars_button = Object(vue_runtime_esm_bundler["resolveComponent"])("mars-button");

  var _component_a_space = Object(vue_runtime_esm_bundler["resolveComponent"])("a-space");

  var _component_pannel = Object(vue_runtime_esm_bundler["resolveComponent"])("pannel");

  return Object(vue_runtime_esm_bundler["openBlock"])(), Object(vue_runtime_esm_bundler["createBlock"])(_component_pannel, {
    class: "localBtn"
  }, {
    default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
      return [Object(vue_runtime_esm_bundler["createVNode"])(_component_a_space, null, {
        default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
          return [Object(vue_runtime_esm_bundler["createVNode"])(_component_mars_button, {
            onClick: _ctx.centerAtTerrain
          }, {
            default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
              return [_hoisted_1];
            }),
            _: 1
          }, 8, ["onClick"]), Object(vue_runtime_esm_bundler["createVNode"])(_component_mars_button, {
            onClick: _ctx.centerAtModel
          }, {
            default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
              return [_hoisted_2];
            }),
            _: 1
          }, 8, ["onClick"])];
        }),
        _: 1
      })];
    }),
    _: 1
  });
}
// CONCATENATED MODULE: ./src/components/mars-sample/location-to.vue?vue&type=template&id=a6077f40&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./src/components/marsgis/pannel.vue + 2 modules
var pannel = __webpack_require__("7544");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./build/example-vue-loader.js!./src/components/mars-sample/location-to.vue?vue&type=script&lang=js


/**
 * 公共组件：快捷定位
 * @copyright 火星科技 mars3d.cn
 * @author 木遥 2021-11-01
 */


/* harmony default export */ var location_tovue_type_script_lang_js = (Object(vue_runtime_esm_bundler["defineComponent"])({
  components: {
    Pannel: pannel["a" /* default */]
  },
  setup: function setup() {
    // mapWork是map.js内定义的所有对象， 在项目中使用时可以改为import方式使用:  import * as mapWork from './map.js'
    var mapWork = window.mapWork; // let modelTest
    //  定位至山区

    var centerAtTerrain = function centerAtTerrain() {
      mapWork.map.setCameraView({
        lat: 30.859414,
        lng: 116.28709,
        alt: 8617,
        heading: 18,
        pitch: -28
      });
    }; // 定位至模型


    var centerAtModel = function centerAtModel() {
      mapWork.centerAtModel();
      mapWork.map.setCameraView({
        lng: 114.019768,
        lat: 22.627935,
        alt: 80.6,
        heading: 359,
        pitch: -34
      });
    };

    return {
      centerAtTerrain: centerAtTerrain,
      centerAtModel: centerAtModel
    };
  }
}));
// CONCATENATED MODULE: ./src/components/mars-sample/location-to.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./src/components/mars-sample/location-to.vue?vue&type=style&index=0&id=a6077f40&lang=less&scoped=true
var location_tovue_type_style_index_0_id_a6077f40_lang_less_scoped_true = __webpack_require__("92f9");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/components/mars-sample/location-to.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(location_tovue_type_script_lang_js, [['render',render],['__scopeId',"data-v-a6077f40"]])

/* harmony default export */ var location_to = __webpack_exports__["a"] = (__exports__);

/***/ }),

/***/ "d1cc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "d8aa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@icon-park/vue-next/es/icons/DownC.js
var DownC = __webpack_require__("f271");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 3 modules
var vue_runtime_esm_bundler = __webpack_require__("7a23");

// EXTERNAL MODULE: ./src/components/marsgis/pannel.vue + 2 modules
var pannel = __webpack_require__("7544");

// EXTERNAL MODULE: ./src/components/mars-sample/data-manage.vue + 2 modules
var data_manage = __webpack_require__("3747");

// EXTERNAL MODULE: ./src/components/mars-sample/location-to.vue + 4 modules
var location_to = __webpack_require__("bc30");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./build/example-vue-loader.js!./src/example/graphic/space/rectangularSensor/index.vue?vue&type=script&lang=ts&setup=true




var rectangularSensorvue_type_script_lang_ts_setup_true_withScopeId = function _withScopeId(n) {
  return Object(vue_runtime_esm_bundler["pushScopeId"])("data-v-7036530b"), n = n(), Object(vue_runtime_esm_bundler["popScopeId"])(), n;
};

var _hoisted_1 = {
  class: "infoView-content"
};
var _hoisted_2 = {
  class: "f-mb"
};

var _hoisted_3 = /*#__PURE__*/rectangularSensorvue_type_script_lang_ts_setup_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["createElementVNode"])("span", {
    class: "pannel-item-label"
  }, "图层状态:", -1);
});

var _hoisted_4 = /*#__PURE__*/Object(vue_runtime_esm_bundler["createTextVNode"])("显示隐藏");

var _hoisted_5 = {
  class: "f-mb"
};

var _hoisted_6 = /*#__PURE__*/rectangularSensorvue_type_script_lang_ts_setup_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["createElementVNode"])("span", {
    class: "pannel-item-label"
  }, "数据维护:", -1);
});

var _hoisted_7 = /*#__PURE__*/Object(vue_runtime_esm_bundler["createTextVNode"])("图上标绘");

var _hoisted_8 = {
  class: "f-mb"
};
var _hoisted_9 = {
  class: "f-mb"
};

var _hoisted_10 = /*#__PURE__*/rectangularSensorvue_type_script_lang_ts_setup_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["createElementVNode"])("span", {
    class: "pannel-item-label"
  }, "半径(米)", -1);
});

var _hoisted_11 = {
  class: "f-mb"
};

var _hoisted_12 = /*#__PURE__*/rectangularSensorvue_type_script_lang_ts_setup_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["createElementVNode"])("span", {
    class: "pannel-item-label"
  }, "方向", -1);
});

var _hoisted_13 = {
  class: "f-mb"
};

var _hoisted_14 = /*#__PURE__*/rectangularSensorvue_type_script_lang_ts_setup_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["createElementVNode"])("span", {
    class: "pannel-item-label"
  }, "仰角", -1);
});

var _hoisted_15 = {
  class: "f-mb"
};

var _hoisted_16 = /*#__PURE__*/rectangularSensorvue_type_script_lang_ts_setup_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["createElementVNode"])("span", {
    class: "pannel-item-label"
  }, "左右(roll)", -1);
});

var _hoisted_17 = {
  class: "f-mb"
};

var _hoisted_18 = /*#__PURE__*/rectangularSensorvue_type_script_lang_ts_setup_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["createElementVNode"])("span", {
    class: "pannel-item-label"
  }, "上下夹角", -1);
});

var _hoisted_19 = {
  class: "f-mb"
};

var _hoisted_20 = /*#__PURE__*/rectangularSensorvue_type_script_lang_ts_setup_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["createElementVNode"])("span", {
    class: "pannel-item-label"
  }, "左右夹角", -1);
});

var _hoisted_21 = {
  class: "f-mb"
};

var _hoisted_22 = /*#__PURE__*/rectangularSensorvue_type_script_lang_ts_setup_true_withScopeId(function () {
  return /*#__PURE__*/Object(vue_runtime_esm_bundler["createElementVNode"])("span", {
    class: "pannel-item-label"
  }, "扫描面", -1);
});

var _hoisted_23 = /*#__PURE__*/Object(vue_runtime_esm_bundler["createTextVNode"])("是否扫描");





/* harmony default export */ var rectangularSensorvue_type_script_lang_ts_setup_true = (/*#__PURE__*/Object(vue_runtime_esm_bundler["defineComponent"])({
  setup: function setup(__props) {
    var mapWork = window.mapWork;
    var activeKey = Object(vue_runtime_esm_bundler["ref"])(["1", "2"]);
    var formState = Object(vue_runtime_esm_bundler["reactive"])({
      enabledShowHide: true,
      enabledShowScanPlane: true
    });
    var radius = Object(vue_runtime_esm_bundler["ref"])(100000); // 半径

    var headingValue = Object(vue_runtime_esm_bundler["ref"])(30); // 方向

    var pitchValue = Object(vue_runtime_esm_bundler["ref"])(0); // 仰角

    var rollValue = Object(vue_runtime_esm_bundler["ref"])(0); // 左右

    var xValue = Object(vue_runtime_esm_bundler["ref"])(50); // x轴方向

    var yValue = Object(vue_runtime_esm_bundler["ref"])(50); // y轴方向
    // 初始化加载模型

    mapWork.eventTarget.on("loadOk", function () {
      mapWork.addGraphic01(headingValue.value, pitchValue.value, rollValue.value, radius.value, xValue.value, yValue.value);
    });

    var radiusChange = function radiusChange() {
      // 半径发生改变
      mapWork.radiusChange(radius.value);
    };

    var headingChange = function headingChange() {
      // 方向发生改变
      mapWork.headingChange(headingValue.value);
    };

    var pitchChange = function pitchChange() {
      // 仰角发生改变
      mapWork.pitchChange(pitchValue.value);
    }; // roll发生改变


    var rollChange = function rollChange() {
      mapWork.rollChange(rollValue.value);
    };

    var xHalfAngle = function xHalfAngle() {
      mapWork.xHalfAngle(xValue.value);
    };

    var yHalfAngle = function yHalfAngle() {
      mapWork.yHalfAngle(yValue.value);
    }; // 是否显示扫描面


    var chkShowScanPlane = function chkShowScanPlane() {
      mapWork.ShowScanPlane(formState.enabledShowScanPlane);
    };

    var bindShowHide = function bindShowHide() {
      mapWork.bindShowHide(formState.enabledShowHide);
    }; // 图上标绘


    var startDraw = function startDraw() {
      mapWork.startDraw(headingValue.value, pitchValue.value, rollValue.value, radius.value, xValue.value, yValue.value);
    };

    return function (_ctx, _cache) {
      var _component_a_checkbox = Object(vue_runtime_esm_bundler["resolveComponent"])("a-checkbox");

      var _component_a_space = Object(vue_runtime_esm_bundler["resolveComponent"])("a-space");

      var _component_mars_button = Object(vue_runtime_esm_bundler["resolveComponent"])("mars-button");

      var _component_a_collapse_panel = Object(vue_runtime_esm_bundler["resolveComponent"])("a-collapse-panel");

      var _component_mars_input_number = Object(vue_runtime_esm_bundler["resolveComponent"])("mars-input-number");

      var _component_a_slider = Object(vue_runtime_esm_bundler["resolveComponent"])("a-slider");

      var _component_a_collapse = Object(vue_runtime_esm_bundler["resolveComponent"])("a-collapse");

      var _component_a_form = Object(vue_runtime_esm_bundler["resolveComponent"])("a-form");

      return Object(vue_runtime_esm_bundler["openBlock"])(), Object(vue_runtime_esm_bundler["createElementBlock"])(vue_runtime_esm_bundler["Fragment"], null, [Object(vue_runtime_esm_bundler["createVNode"])(pannel["a" /* default */], {
        class: "infoView"
      }, {
        default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
          return [Object(vue_runtime_esm_bundler["createElementVNode"])("div", _hoisted_1, [Object(vue_runtime_esm_bundler["createVNode"])(_component_a_form, null, {
            default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
              return [Object(vue_runtime_esm_bundler["createVNode"])(_component_a_collapse, {
                activeKey: activeKey.value,
                "onUpdate:activeKey": _cache[8] || (_cache[8] = function ($event) {
                  return activeKey.value = $event;
                })
              }, {
                expandIcon: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                  return [Object(vue_runtime_esm_bundler["createVNode"])(Object(vue_runtime_esm_bundler["unref"])(DownC["a" /* default */]))];
                }),
                default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                  return [Object(vue_runtime_esm_bundler["createVNode"])(_component_a_collapse_panel, {
                    key: "1",
                    header: "数据处理"
                  }, {
                    default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                      return [Object(vue_runtime_esm_bundler["createElementVNode"])("div", _hoisted_2, [Object(vue_runtime_esm_bundler["createVNode"])(_component_a_space, null, {
                        default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                          return [_hoisted_3, Object(vue_runtime_esm_bundler["createVNode"])(_component_a_checkbox, {
                            checked: Object(vue_runtime_esm_bundler["unref"])(formState).enabledShowHide,
                            "onUpdate:checked": _cache[0] || (_cache[0] = function ($event) {
                              return Object(vue_runtime_esm_bundler["unref"])(formState).enabledShowHide = $event;
                            }),
                            onChange: bindShowHide
                          }, {
                            default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                              return [_hoisted_4];
                            }),
                            _: 1
                          }, 8, ["checked"])];
                        }),
                        _: 1
                      })]), Object(vue_runtime_esm_bundler["createElementVNode"])("div", _hoisted_5, [Object(vue_runtime_esm_bundler["createVNode"])(_component_a_space, null, {
                        default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                          return [_hoisted_6, Object(vue_runtime_esm_bundler["createVNode"])(_component_mars_button, {
                            onClick: startDraw
                          }, {
                            default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                              return [_hoisted_7];
                            }),
                            _: 1
                          })];
                        }),
                        _: 1
                      })]), Object(vue_runtime_esm_bundler["createElementVNode"])("div", _hoisted_8, [Object(vue_runtime_esm_bundler["createVNode"])(data_manage["a" /* default */])])];
                    }),
                    _: 1
                  }), Object(vue_runtime_esm_bundler["createVNode"])(_component_a_collapse_panel, {
                    key: "2",
                    header: "参数调试"
                  }, {
                    default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                      return [Object(vue_runtime_esm_bundler["createElementVNode"])("div", _hoisted_9, [Object(vue_runtime_esm_bundler["createVNode"])(_component_a_space, null, {
                        default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                          return [_hoisted_10, Object(vue_runtime_esm_bundler["createVNode"])(_component_mars_input_number, {
                            onChange: radiusChange,
                            value: radius.value,
                            "onUpdate:value": _cache[1] || (_cache[1] = function ($event) {
                              return radius.value = $event;
                            }),
                            min: 1,
                            max: 999999999,
                            step: 1
                          }, null, 8, ["value"])];
                        }),
                        _: 1
                      })]), Object(vue_runtime_esm_bundler["createElementVNode"])("div", _hoisted_11, [Object(vue_runtime_esm_bundler["createVNode"])(_component_a_space, null, {
                        default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                          return [_hoisted_12, Object(vue_runtime_esm_bundler["createVNode"])(_component_a_slider, {
                            onChange: headingChange,
                            value: headingValue.value,
                            "onUpdate:value": _cache[2] || (_cache[2] = function ($event) {
                              return headingValue.value = $event;
                            }),
                            min: 0,
                            max: 360,
                            step: 0.01
                          }, null, 8, ["value", "step"]), Object(vue_runtime_esm_bundler["createTextVNode"])("当前值" + Object(vue_runtime_esm_bundler["toDisplayString"])(headingValue.value), 1)];
                        }),
                        _: 1
                      })]), Object(vue_runtime_esm_bundler["createElementVNode"])("div", _hoisted_13, [Object(vue_runtime_esm_bundler["createVNode"])(_component_a_space, null, {
                        default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                          return [_hoisted_14, Object(vue_runtime_esm_bundler["createVNode"])(_component_a_slider, {
                            onChange: pitchChange,
                            value: pitchValue.value,
                            "onUpdate:value": _cache[3] || (_cache[3] = function ($event) {
                              return pitchValue.value = $event;
                            }),
                            min: 0,
                            max: 360,
                            step: 0.01
                          }, null, 8, ["value", "step"]), Object(vue_runtime_esm_bundler["createTextVNode"])("当前值" + Object(vue_runtime_esm_bundler["toDisplayString"])(pitchValue.value), 1)];
                        }),
                        _: 1
                      })]), Object(vue_runtime_esm_bundler["createElementVNode"])("div", _hoisted_15, [Object(vue_runtime_esm_bundler["createVNode"])(_component_a_space, null, {
                        default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                          return [_hoisted_16, Object(vue_runtime_esm_bundler["createVNode"])(_component_a_slider, {
                            onChange: rollChange,
                            value: rollValue.value,
                            "onUpdate:value": _cache[4] || (_cache[4] = function ($event) {
                              return rollValue.value = $event;
                            }),
                            min: 0,
                            max: 360,
                            step: 0.01
                          }, null, 8, ["value", "step"]), Object(vue_runtime_esm_bundler["createTextVNode"])("当前值" + Object(vue_runtime_esm_bundler["toDisplayString"])(rollValue.value), 1)];
                        }),
                        _: 1
                      })]), Object(vue_runtime_esm_bundler["createElementVNode"])("div", _hoisted_17, [Object(vue_runtime_esm_bundler["createVNode"])(_component_a_space, null, {
                        default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                          return [_hoisted_18, Object(vue_runtime_esm_bundler["createVNode"])(_component_a_slider, {
                            onChange: xHalfAngle,
                            value: xValue.value,
                            "onUpdate:value": _cache[5] || (_cache[5] = function ($event) {
                              return xValue.value = $event;
                            }),
                            min: 0,
                            max: 89,
                            step: 0.01
                          }, null, 8, ["value", "step"]), Object(vue_runtime_esm_bundler["createTextVNode"])("当前值" + Object(vue_runtime_esm_bundler["toDisplayString"])(xValue.value), 1)];
                        }),
                        _: 1
                      })]), Object(vue_runtime_esm_bundler["createElementVNode"])("div", _hoisted_19, [Object(vue_runtime_esm_bundler["createVNode"])(_component_a_space, null, {
                        default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                          return [_hoisted_20, Object(vue_runtime_esm_bundler["createVNode"])(_component_a_slider, {
                            onChange: yHalfAngle,
                            value: yValue.value,
                            "onUpdate:value": _cache[6] || (_cache[6] = function ($event) {
                              return yValue.value = $event;
                            }),
                            min: 0,
                            max: 89,
                            step: 0.01
                          }, null, 8, ["value", "step"]), Object(vue_runtime_esm_bundler["createTextVNode"])("当前值" + Object(vue_runtime_esm_bundler["toDisplayString"])(yValue.value), 1)];
                        }),
                        _: 1
                      })]), Object(vue_runtime_esm_bundler["createElementVNode"])("div", _hoisted_21, [Object(vue_runtime_esm_bundler["createVNode"])(_component_a_space, null, {
                        default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                          return [_hoisted_22, Object(vue_runtime_esm_bundler["createVNode"])(_component_a_checkbox, {
                            onChange: chkShowScanPlane,
                            checked: Object(vue_runtime_esm_bundler["unref"])(formState).enabledShowScanPlane,
                            "onUpdate:checked": _cache[7] || (_cache[7] = function ($event) {
                              return Object(vue_runtime_esm_bundler["unref"])(formState).enabledShowScanPlane = $event;
                            })
                          }, {
                            default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                              return [_hoisted_23];
                            }),
                            _: 1
                          }, 8, ["checked"])];
                        }),
                        _: 1
                      })])];
                    }),
                    _: 1
                  })];
                }),
                _: 1
              }, 8, ["activeKey"])];
            }),
            _: 1
          })])];
        }),
        _: 1
      }), Object(vue_runtime_esm_bundler["createVNode"])(location_to["a" /* default */])], 64);
    };
  }
}));
// CONCATENATED MODULE: ./src/example/graphic/space/rectangularSensor/index.vue?vue&type=script&lang=ts&setup=true
 
// EXTERNAL MODULE: ./src/example/graphic/space/rectangularSensor/index.vue?vue&type=style&index=0&id=7036530b&scoped=true&lang=less
var rectangularSensorvue_type_style_index_0_id_7036530b_scoped_true_lang_less = __webpack_require__("0fbb");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/example/graphic/space/rectangularSensor/index.vue






const __exports__ = /*#__PURE__*/exportHelper_default()(rectangularSensorvue_type_script_lang_ts_setup_true, [['__scopeId',"data-v-7036530b"]])

/* harmony default export */ var rectangularSensor = __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "e64d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);