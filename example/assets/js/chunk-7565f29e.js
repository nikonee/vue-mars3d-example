(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-7565f29e"],{

/***/ "4e4b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_build_example_vue_loader_js_pannel_vue_vue_type_style_index_0_id_b885d716_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e64d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_build_example_vue_loader_js_pannel_vue_vue_type_style_index_0_id_b885d716_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_build_example_vue_loader_js_pannel_vue_vue_type_style_index_0_id_b885d716_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5c77":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm-bundler.js + 3 modules
var vue_runtime_esm_bundler = __webpack_require__("7a23");

// EXTERNAL MODULE: ./src/components/marsgis/pannel.vue + 2 modules
var pannel = __webpack_require__("7544");

// EXTERNAL MODULE: ./src/components/mars-sample/location-to.vue + 4 modules
var location_to = __webpack_require__("bc30");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--15-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--15-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./build/example-vue-loader.js!./src/example/map/fun/changeMouseModel/index.vue?vue&type=script&setup=true&lang=ts



var _hoisted_1 = /*#__PURE__*/Object(vue_runtime_esm_bundler["createTextVNode"])("更换中键和右键 ");

var _hoisted_2 = /*#__PURE__*/Object(vue_runtime_esm_bundler["createTextVNode"])("Cesium操作习惯");




/* harmony default export */ var changeMouseModelvue_type_script_setup_true_lang_ts = (/*#__PURE__*/Object(vue_runtime_esm_bundler["defineComponent"])({
  setup: function setup(__props) {
    var mapWork = window.mapWork;
    var value = Object(vue_runtime_esm_bundler["ref"])(1);

    var shadingMaterials = function shadingMaterials() {
      mapWork.shadingMaterials(value.value);
    };

    return function (_ctx, _cache) {
      var _component_a_radio = Object(vue_runtime_esm_bundler["resolveComponent"])("a-radio");

      var _component_a_radio_group = Object(vue_runtime_esm_bundler["resolveComponent"])("a-radio-group");

      return Object(vue_runtime_esm_bundler["openBlock"])(), Object(vue_runtime_esm_bundler["createElementBlock"])(vue_runtime_esm_bundler["Fragment"], null, [Object(vue_runtime_esm_bundler["createVNode"])(pannel["a" /* default */], {
        class: "infoView"
      }, {
        default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
          return [Object(vue_runtime_esm_bundler["createVNode"])(_component_a_radio_group, {
            onChange: shadingMaterials,
            value: value.value,
            "onUpdate:value": _cache[0] || (_cache[0] = function ($event) {
              return value.value = $event;
            })
          }, {
            default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
              return [Object(vue_runtime_esm_bundler["createVNode"])(_component_a_radio, {
                value: 1
              }, {
                default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                  return [_hoisted_1];
                }),
                _: 1
              }), Object(vue_runtime_esm_bundler["createVNode"])(_component_a_radio, {
                value: 2
              }, {
                default: Object(vue_runtime_esm_bundler["withCtx"])(function () {
                  return [_hoisted_2];
                }),
                _: 1
              })];
            }),
            _: 1
          }, 8, ["value"])];
        }),
        _: 1
      }), Object(vue_runtime_esm_bundler["createVNode"])(location_to["a" /* default */])], 64);
    };
  }
}));
// CONCATENATED MODULE: ./src/example/map/fun/changeMouseModel/index.vue?vue&type=script&setup=true&lang=ts
 
// CONCATENATED MODULE: ./src/example/map/fun/changeMouseModel/index.vue



const __exports__ = changeMouseModelvue_type_script_setup_true_lang_ts;

/* harmony default export */ var changeMouseModel = __webpack_exports__["default"] = (__exports__);

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

/***/ "e64d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);