/**
 * Mars3D平台插件,结合heatmap可视化功能插件  mars3d-heatmap
 *
 * 版本信息：v3.3.11
 * 编译日期：2022-05-29 09:18:34
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：免费公开版 ，2022-06-01
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.mars3d || require('mars3d')), (window.h337 || require('@mars3d/heatmap.js'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'mars3d', '@mars3d/heatmap.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mars3d-heatmap"] = {}, global.mars3d, global.h337));
})(this, (function (exports, mars3d, h337) { 
'use strict';var _0x400822=_0x5613;(function(_0xbf6eef,_0x4342fe){var _0x4f4af9=_0x5613,_0x339a97=_0xbf6eef();while(!![]){try{var _0xa7aa54=-parseInt(_0x4f4af9(0x107))/0x1+-parseInt(_0x4f4af9(0xcd))/0x2*(parseInt(_0x4f4af9(0x12f))/0x3)+-parseInt(_0x4f4af9(0x13b))/0x4+-parseInt(_0x4f4af9(0x11d))/0x5+parseInt(_0x4f4af9(0x12b))/0x6*(parseInt(_0x4f4af9(0x116))/0x7)+parseInt(_0x4f4af9(0x100))/0x8+parseInt(_0x4f4af9(0x10d))/0x9;if(_0xa7aa54===_0x4342fe)break;else _0x339a97['push'](_0x339a97['shift']());}catch(_0x1ff85d){_0x339a97['push'](_0x339a97['shift']());}}}(_0x30ac,0x443ae));function _0x5613(_0x4eef86,_0x10ab2c){var _0x30acfc=_0x30ac();return _0x5613=function(_0x561390,_0x353603){_0x561390=_0x561390-0xbb;var _0x4e242e=_0x30acfc[_0x561390];if(_0x5613['dhcKiG']===undefined){var _0x4f3b7c=function(_0x19a69e){var _0x2fc516='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0xefbc31='',_0x3b8987='';for(var _0x163e97=0x0,_0xdfe74b,_0x353c9c,_0x53d19c=0x0;_0x353c9c=_0x19a69e['charAt'](_0x53d19c++);~_0x353c9c&&(_0xdfe74b=_0x163e97%0x4?_0xdfe74b*0x40+_0x353c9c:_0x353c9c,_0x163e97++%0x4)?_0xefbc31+=String['fromCharCode'](0xff&_0xdfe74b>>(-0x2*_0x163e97&0x6)):0x0){_0x353c9c=_0x2fc516['indexOf'](_0x353c9c);}for(var _0x7c1477=0x0,_0x3b4755=_0xefbc31['length'];_0x7c1477<_0x3b4755;_0x7c1477++){_0x3b8987+='%'+('00'+_0xefbc31['charCodeAt'](_0x7c1477)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3b8987);};_0x5613['FuzjCK']=_0x4f3b7c,_0x4eef86=arguments,_0x5613['dhcKiG']=!![];}var _0x18d0ad=_0x30acfc[0x0],_0x353391=_0x561390+_0x18d0ad,_0x36b198=_0x4eef86[_0x353391];return!_0x36b198?(_0x4e242e=_0x5613['FuzjCK'](_0x4e242e),_0x4eef86[_0x353391]=_0x4e242e):_0x4e242e=_0x36b198,_0x4e242e;},_0x5613(_0x4eef86,_0x10ab2c);}function _interopNamespace(_0x19a69e){var _0x1b4c29=_0x5613;if(_0x19a69e&&_0x19a69e['__esModule'])return _0x19a69e;var _0x2fc516=Object[_0x1b4c29(0xfe)](null);return _0x19a69e&&Object['keys'](_0x19a69e)[_0x1b4c29(0x11e)](function(_0xefbc31){var _0x3129c=_0x1b4c29;if(_0xefbc31!=='default'){var _0x3b8987=Object[_0x3129c(0xcb)](_0x19a69e,_0xefbc31);Object[_0x3129c(0xc0)](_0x2fc516,_0xefbc31,_0x3b8987[_0x3129c(0x11f)]?_0x3b8987:{'enumerable':!![],'get':function(){return _0x19a69e[_0xefbc31];}});}}),_0x2fc516[_0x1b4c29(0x13c)]=_0x19a69e,_0x2fc516;}var mars3d__namespace=_interopNamespace(mars3d),h337__namespace=_interopNamespace(h337);function ownKeys(_0x163e97,_0xdfe74b){var _0x35c603=_0x5613,_0x353c9c=Object[_0x35c603(0xf3)](_0x163e97);if(Object['getOwnPropertySymbols']){var _0x53d19c=Object[_0x35c603(0x134)](_0x163e97);_0xdfe74b&&(_0x53d19c=_0x53d19c[_0x35c603(0x155)](function(_0x7c1477){var _0x182181=_0x35c603;return Object[_0x182181(0xcb)](_0x163e97,_0x7c1477)[_0x182181(0xdb)];})),_0x353c9c[_0x35c603(0xc4)][_0x35c603(0x146)](_0x353c9c,_0x53d19c);}return _0x353c9c;}function _objectSpread2(_0x3b4755){var _0x599498=_0x5613;for(var _0x54b321=0x1;_0x54b321<arguments[_0x599498(0x11c)];_0x54b321++){var _0x2724fd=null!=arguments[_0x54b321]?arguments[_0x54b321]:{};_0x54b321%0x2?ownKeys(Object(_0x2724fd),!0x0)[_0x599498(0x11e)](function(_0x2587e3){_defineProperty(_0x3b4755,_0x2587e3,_0x2724fd[_0x2587e3]);}):Object[_0x599498(0x13e)]?Object['defineProperties'](_0x3b4755,Object[_0x599498(0x13e)](_0x2724fd)):ownKeys(Object(_0x2724fd))[_0x599498(0x11e)](function(_0x13799d){var _0x301a63=_0x599498;Object[_0x301a63(0xc0)](_0x3b4755,_0x13799d,Object[_0x301a63(0xcb)](_0x2724fd,_0x13799d));});}return _0x3b4755;}function _classCallCheck(_0x572cbe,_0x14d4ab){var _0x2bbc35=_0x5613;if(!(_0x572cbe instanceof _0x14d4ab))throw new TypeError(_0x2bbc35(0x144));}function _defineProperties(_0x52b5fa,_0x466151){var _0x53ea64=_0x5613;for(var _0x4de6b9=0x0;_0x4de6b9<_0x466151[_0x53ea64(0x11c)];_0x4de6b9++){var _0x595db1=_0x466151[_0x4de6b9];_0x595db1['enumerable']=_0x595db1[_0x53ea64(0xdb)]||![],_0x595db1[_0x53ea64(0x142)]=!![];if(_0x53ea64(0x13a)in _0x595db1)_0x595db1[_0x53ea64(0xe5)]=!![];Object[_0x53ea64(0xc0)](_0x52b5fa,_0x595db1['key'],_0x595db1);}}function _createClass(_0x3bd420,_0x41a267,_0x57bb8c){var _0xad0714=_0x5613;if(_0x41a267)_defineProperties(_0x3bd420[_0xad0714(0xf0)],_0x41a267);if(_0x57bb8c)_defineProperties(_0x3bd420,_0x57bb8c);return Object[_0xad0714(0xc0)](_0x3bd420,'prototype',{'writable':![]}),_0x3bd420;}function _defineProperty(_0x21471f,_0x3ac631,_0x2cbcbe){var _0x40848b=_0x5613;return _0x3ac631 in _0x21471f?Object[_0x40848b(0xc0)](_0x21471f,_0x3ac631,{'value':_0x2cbcbe,'enumerable':!![],'configurable':!![],'writable':!![]}):_0x21471f[_0x3ac631]=_0x2cbcbe,_0x21471f;}function _inherits(_0x4e9543,_0x5ec10b){var _0x4154c9=_0x5613;if(typeof _0x5ec10b!==_0x4154c9(0x131)&&_0x5ec10b!==null)throw new TypeError(_0x4154c9(0x14d));_0x4e9543['prototype']=Object['create'](_0x5ec10b&&_0x5ec10b['prototype'],{'constructor':{'value':_0x4e9543,'writable':!![],'configurable':!![]}}),Object[_0x4154c9(0xc0)](_0x4e9543,_0x4154c9(0xf0),{'writable':![]});if(_0x5ec10b)_setPrototypeOf(_0x4e9543,_0x5ec10b);}function _getPrototypeOf(_0x4b55af){var _0x557513=_0x5613;return _getPrototypeOf=Object[_0x557513(0xc6)]?Object[_0x557513(0x123)]:function _0x18860b(_0x22f136){var _0x37bd2c=_0x557513;return _0x22f136['__proto__']||Object[_0x37bd2c(0x123)](_0x22f136);},_getPrototypeOf(_0x4b55af);}function _setPrototypeOf(_0x286834,_0x1da01a){return _setPrototypeOf=Object['setPrototypeOf']||function _0x35808a(_0xfeb670,_0x155866){return _0xfeb670['__proto__']=_0x155866,_0xfeb670;},_setPrototypeOf(_0x286834,_0x1da01a);}function _isNativeReflectConstruct(){var _0x2848c0=_0x5613;if(typeof Reflect===_0x2848c0(0x141)||!Reflect[_0x2848c0(0xda)])return![];if(Reflect[_0x2848c0(0xda)][_0x2848c0(0x128)])return![];if(typeof Proxy===_0x2848c0(0x131))return!![];try{return Boolean[_0x2848c0(0xf0)][_0x2848c0(0x151)][_0x2848c0(0x133)](Reflect[_0x2848c0(0xda)](Boolean,[],function(){})),!![];}catch(_0x2fcf36){return![];}}function _assertThisInitialized(_0x21403c){var _0x63d070=_0x5613;if(_0x21403c===void 0x0)throw new ReferenceError(_0x63d070(0xc8));return _0x21403c;}function _possibleConstructorReturn(_0x2502c8,_0xa18382){var _0x205106=_0x5613;if(_0xa18382&&(typeof _0xa18382===_0x205106(0x114)||typeof _0xa18382==='function'))return _0xa18382;else{if(_0xa18382!==void 0x0)throw new TypeError(_0x205106(0x122));}return _assertThisInitialized(_0x2502c8);}function _createSuper(_0xc24bcc){var _0x1df0d8=_isNativeReflectConstruct();return function _0xe76b7(){var _0x3d3c52=_0x5613,_0x5aa7a0=_getPrototypeOf(_0xc24bcc),_0x494bab;if(_0x1df0d8){var _0x45cd8f=_getPrototypeOf(this)[_0x3d3c52(0x121)];_0x494bab=Reflect[_0x3d3c52(0xda)](_0x5aa7a0,arguments,_0x45cd8f);}else _0x494bab=_0x5aa7a0['apply'](this,arguments);return _possibleConstructorReturn(this,_0x494bab);};}var HeatMaterial=_0x400822(0xf1);if(!h337__namespace[_0x400822(0xfe)])throw new Error(_0x400822(0x117));var Cesium=mars3d__namespace['Cesium'],BaseLayer=mars3d__namespace[_0x400822(0xe3)][_0x400822(0x119)],DEF_HEATSTYLE={'maxOpacity':0.8,'minOpacity':0.1,'blur':0.85,'radius':0x19,'gradient':{0.4:'blue',0.6:_0x400822(0xc5),0.8:'yellow',0.9:_0x400822(0xd5)}},DEF_STYLE={'arcRadiusScale':1.5,'arcBlurScale':1.5,'vertexFormat':Cesium['EllipsoidSurfaceAppearance'][_0x400822(0x14a)]},HeatLayer=function(_0x3bfd67){var _0x3634ae=_0x400822;_inherits(_0x35680d,_0x3bfd67);var _0x5d2d05=_createSuper(_0x35680d);function _0x35680d(){var _0x1ecfbb=_0x5613,_0x6d5847,_0x128f69=arguments[_0x1ecfbb(0x11c)]>0x0&&arguments[0x0]!==undefined?arguments[0x0]:{};return _classCallCheck(this,_0x35680d),_0x6d5847=_0x5d2d05['call'](this,_0x128f69),_0x6d5847['options']['maxCanvasSize']=Cesium[_0x1ecfbb(0x113)](_0x6d5847[_0x1ecfbb(0x10e)][_0x1ecfbb(0x136)],document['body'][_0x1ecfbb(0x132)]),_0x6d5847[_0x1ecfbb(0x10e)]['maxCanvasSize']=Math[_0x1ecfbb(0x13f)](_0x6d5847[_0x1ecfbb(0x10e)]['maxCanvasSize'],0x1388),_0x6d5847['options']['minCanvasSize']=Cesium[_0x1ecfbb(0x113)](_0x6d5847['options'][_0x1ecfbb(0x126)],document['body'][_0x1ecfbb(0xff)]),_0x6d5847[_0x1ecfbb(0x10e)][_0x1ecfbb(0x126)]=Math[_0x1ecfbb(0xf2)](_0x6d5847['options'][_0x1ecfbb(0x126)],0x2bc),_0x6d5847[_0x1ecfbb(0x10e)][_0x1ecfbb(0xd6)]=_objectSpread2(_objectSpread2({},DEF_HEATSTYLE),_0x6d5847[_0x1ecfbb(0x10e)][_0x1ecfbb(0xd6)]||{}),_0x6d5847[_0x1ecfbb(0x10e)][_0x1ecfbb(0xd8)]=_objectSpread2(_objectSpread2({},DEF_STYLE),_0x6d5847[_0x1ecfbb(0x10e)]['style']||{}),_0x6d5847;}return _createClass(_0x35680d,[{'key':'layer','get':function _0xeb2835(){var _0x1b4633=_0x5613;return this[_0x1b4633(0xe9)];}},{'key':_0x3634ae(0xd6),'get':function _0x5f1dcf(){var _0x381c46=_0x3634ae;return this[_0x381c46(0x10e)][_0x381c46(0xd6)];},'set':function _0x1284f5(_0x4079e3){var _0x4df0a4=_0x3634ae;this['options'][_0x4df0a4(0xd6)]=mars3d__namespace[_0x4df0a4(0x108)][_0x4df0a4(0xed)](this[_0x4df0a4(0x10e)][_0x4df0a4(0xd6)],_0x4079e3),this[_0x4df0a4(0xbb)]&&(this[_0x4df0a4(0xbb)][_0x4df0a4(0xec)](this[_0x4df0a4(0x10e)][_0x4df0a4(0xd6)]),this[_0x4df0a4(0xd2)](!![]));}},{'key':_0x3634ae(0xd8),'get':function _0x3f2a0b(){var _0x49722a=_0x3634ae;return this['options'][_0x49722a(0xd8)];},'set':function _0x443e7a(_0x5a6a25){var _0x6b49d8=_0x3634ae;this[_0x6b49d8(0x10e)][_0x6b49d8(0xd8)]=mars3d__namespace[_0x6b49d8(0x108)][_0x6b49d8(0xed)](this['options'][_0x6b49d8(0xd8)],_0x5a6a25);}},{'key':_0x3634ae(0xf8),'get':function _0x51f826(){var _0x207bc3=_0x3634ae;return this[_0x207bc3(0x12d)];},'set':function _0x408abc(_0x59b226){var _0x363582=_0x3634ae;this[_0x363582(0xee)](_0x59b226);}},{'key':_0x3634ae(0x109),'get':function _0x3cc446(){var _0x495014=_0x3634ae,_0x48383d=[];return this['points'][_0x495014(0x11e)](function(_0x1eaa05){var _0x49d711=_0x495014;_0x48383d[_0x49d711(0xc4)](_0x1eaa05[_0x49d711(0x152)]());}),_0x48383d;}},{'key':'rectangle','get':function _0x4c5a8d(){var _0x55a993=_0x3634ae;return this[_0x55a993(0xcc)];}},{'key':_0x3634ae(0xfc),'value':function _0x11425d(_0x3e99c2){var _0x50e93b=_0x3634ae;_0x3e99c2[_0x50e93b(0xf8)]&&(this[_0x50e93b(0xf8)]=_0x3e99c2['positions']);}},{'key':_0x3634ae(0x118),'value':function _0x532c9d(){var _0x1823a0=_0x3634ae;this[_0x1823a0(0xe9)]=new mars3d__namespace[(_0x1823a0(0xe3))][(_0x1823a0(0xe2))]({'noLayerManage':!![]}),this[_0x1823a0(0xe9)][_0x1823a0(0xca)]=!![];}},{'key':_0x3634ae(0x10b),'value':function _0x43b414(){var _0x2c16a8=_0x3634ae;this[_0x2c16a8(0xe0)][_0x2c16a8(0xf7)](this[_0x2c16a8(0xe9)]),this['options'][_0x2c16a8(0xf8)]&&(this[_0x2c16a8(0xf8)]=this['options']['positions']),this[_0x2c16a8(0x10e)]['flyTo']&&this['flyToByAnimationEnd']();}},{'key':_0x3634ae(0xbc),'value':function _0x5ad4e1(){var _0xd095dd=_0x3634ae;this['heatStyle'][_0xd095dd(0x12c)]&&(mars3d__namespace[_0xd095dd(0xbe)]['remove'](this[_0xd095dd(0xd6)][_0xd095dd(0x12c)]),delete this[_0xd095dd(0xd6)]['container']),this[_0xd095dd(0xdc)](),this['_map']['removeLayer'](this[_0xd095dd(0xe9)]);}},{'key':_0x3634ae(0xde),'value':function _0x468476(_0xe50281,_0x4af763){var _0x21d5f3=_0x3634ae;this[_0x21d5f3(0x12d)]=this[_0x21d5f3(0x12d)]||[],this[_0x21d5f3(0x12d)][_0x21d5f3(0xc4)](_0xe50281),this['_updatePositionsHook'](_0x4af763);}},{'key':'setPositions','value':function _0x5e2a55(_0x53f56e,_0x500469){var _0x237112=_0x3634ae;this[_0x237112(0x12d)]=_0x53f56e,this[_0x237112(0xd2)](_0x500469);}},{'key':'clear','value':function _0x205ea5(){var _0x417413=_0x3634ae;this[_0x417413(0xc1)]&&(this['_layer'][_0x417413(0x10a)](this[_0x417413(0xc1)],!![]),delete this[_0x417413(0xc1)]);}},{'key':_0x3634ae(0xd2),'value':function _0x48f985(_0x5c48a7){var _0x427ce2=_0x3634ae;if(!this[_0x427ce2(0x127)]||!this['_map']||!this[_0x427ce2(0xf8)]||this[_0x427ce2(0xf8)][_0x427ce2(0x11c)]===0x0)return this;var _0x346ff1=this[_0x427ce2(0xce)]();return this[_0x427ce2(0xd8)]['arc']?this[_0x427ce2(0xc1)]&&_0x5c48a7?(this[_0x427ce2(0xc1)][_0x427ce2(0x10f)]['image']=_0x346ff1,this[_0x427ce2(0xc1)]['uniforms'][_0x427ce2(0x120)]=this[_0x427ce2(0xbf)]()):this['_createArcGraphic'](_0x346ff1):this[_0x427ce2(0xc1)]&&_0x5c48a7?this[_0x427ce2(0xc1)][_0x427ce2(0x10f)]['image']=_0x346ff1:this[_0x427ce2(0xd1)](_0x346ff1),this;}},{'key':_0x3634ae(0xd1),'value':function _0x147955(_0x475e78){var _0x4ffb18=_0x3634ae;this[_0x4ffb18(0xdc)](),this[_0x4ffb18(0xc1)]=new mars3d__namespace[(_0x4ffb18(0x150))]['RectanglePrimitive'](_objectSpread2(_objectSpread2({},this['options']),{},{'rectangle':this[_0x4ffb18(0xcc)],'appearance':new Cesium[(_0x4ffb18(0xe1))]({'material':new Cesium[(_0x4ffb18(0x143))]({'fabric':{'uniforms':{'image':_0x475e78},'source':HeatMaterial},'translucent':!![]}),'flat':!![]})})),this[_0x4ffb18(0xe9)][_0x4ffb18(0xd3)](this['_graphic']);}},{'key':_0x3634ae(0x129),'value':function _0xa2ed4e(_0x4a647d){var _0x1fdd0b=_0x3634ae;this['clear']();var _0x43d7c7=Cesium['RenderState'][_0x1fdd0b(0xdf)]({'cull':{'enabled':!![]},'depthTest':{'enabled':!![]},'stencilTest':{'enabled':!![],'frontFunction':Cesium['StencilFunction'][_0x1fdd0b(0x125)],'frontOperation':{'fail':Cesium[_0x1fdd0b(0x10c)][_0x1fdd0b(0x12e)],'zFail':Cesium[_0x1fdd0b(0x10c)][_0x1fdd0b(0x12e)],'zPass':Cesium['StencilOperation']['REPLACE']},'backFunction':Cesium[_0x1fdd0b(0xc7)][_0x1fdd0b(0x125)],'backOperation':{'fail':Cesium[_0x1fdd0b(0x10c)][_0x1fdd0b(0x12e)],'zFail':Cesium[_0x1fdd0b(0x10c)][_0x1fdd0b(0x12e)],'zPass':Cesium[_0x1fdd0b(0x10c)]['REPLACE']},'reference':0x2,'mask':0x2},'blending':Cesium[_0x1fdd0b(0x115)]['ALPHA_BLEND']}),_0x35be52=Math['floor'](Cesium[_0x1fdd0b(0x113)](this['style'][_0x1fdd0b(0x149)],this[_0x1fdd0b(0xf5)]*0.02))+0.1;this[_0x1fdd0b(0xd8)][_0x1fdd0b(0x149)]&&delete this['style'][_0x1fdd0b(0x149)];var _0x56a9a9=Cesium[_0x1fdd0b(0x113)](this[_0x1fdd0b(0xd8)][_0x1fdd0b(0xfb)],0x64),_0x122baa=Math['max'](this[_0x1fdd0b(0xcc)][_0x1fdd0b(0xc2)],this[_0x1fdd0b(0xcc)][_0x1fdd0b(0xc3)]);this[_0x1fdd0b(0xd8)][_0x1fdd0b(0xdd)]=_0x122baa/=_0x56a9a9,this['_graphic']=new mars3d__namespace[(_0x1fdd0b(0x150))][(_0x1fdd0b(0x110))](_objectSpread2(_objectSpread2({},this[_0x1fdd0b(0x10e)]),{},{'rectangle':this[_0x1fdd0b(0xcc)],'appearance':new Cesium[(_0x1fdd0b(0xe1))]({'aboveGround':!![],'renderState':_0x43d7c7,'material':new Cesium[(_0x1fdd0b(0x143))]({'fabric':{'uniforms':{'image':_0x4a647d,'repeat':new Cesium[(_0x1fdd0b(0xcf))](0x1,0x1),'color':new Cesium[(_0x1fdd0b(0xf6))](0x1,0x1,0x1,0.01),'bumpMap':this[_0x1fdd0b(0xbf)]()},'source':HeatMaterial},'translucent':!![]}),'vertexShaderSource':'attribute\x20vec3\x20position3DHigh;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec3\x20position3DLow;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20vec2\x20st;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20attribute\x20float\x20batchId;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20sampler2D\x20bumpMap_3;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20v_positionMC;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec3\x20v_positionEC;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20v_st;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20p\x20=\x20czm_computePosition();\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20v_positionMC\x20=\x20position3DHigh\x20+\x20position3DLow;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20v_positionEC\x20=\x20(czm_modelViewRelativeToEye\x20*\x20p).xyz;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20v_st\x20=\x20st;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20color\x20=\x20texture2D(bumpMap_3,\x20v_st);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20centerBump\x20=\x20distance(vec3(0.0),color.rgb);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20upDir\x20=\x20normalize(v_positionMC.xyz);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec3\x20disPos\x20=\x20upDir\x20*\x20centerBump\x20*\x20'[_0x1fdd0b(0x154)](_0x35be52,_0x1fdd0b(0x111)),'flat':!![]})})),this[_0x1fdd0b(0xe9)][_0x1fdd0b(0xd3)](this[_0x1fdd0b(0xc1)]);}},{'key':_0x3634ae(0x140),'value':function _0x17475e(_0x5aa87e){var _0x20f97f=_0x3634ae;return _0x5aa87e!==null&&_0x5aa87e!==void 0x0&&_0x5aa87e[_0x20f97f(0x103)]&&this[_0x20f97f(0xcc)]?mars3d__namespace[_0x20f97f(0xef)][_0x20f97f(0x106)](this[_0x20f97f(0xcc)]):this[_0x20f97f(0xcc)];}},{'key':_0x3634ae(0xce),'value':function _0xee715e(){var _0x40ec7f=_0x3634ae,_0xec2d7b=this,_0x5d8ab4,_0x2ec15b,_0x80c9fa=this['_positions'],_0x14630e=[],_0x1df34b,_0xa229c7,_0x197101,_0x4c7b9c;_0x80c9fa[_0x40ec7f(0x11e)](function(_0x1929a8){var _0x162021=_0x40ec7f,_0x3fbebe=mars3d__namespace[_0x162021(0xe7)][_0x162021(0x112)](_0x1929a8);if(!_0x3fbebe)return;_0x3fbebe[_0x162021(0x13a)]=_0x1929a8['value']||0x1,!_0xec2d7b[_0x162021(0x10e)][_0x162021(0x102)]&&(_0x1df34b===undefined?(_0x1df34b=_0x3fbebe['lng'],_0xa229c7=_0x3fbebe[_0x162021(0x105)],_0x197101=_0x3fbebe['lat'],_0x4c7b9c=_0x3fbebe[_0x162021(0x156)]):(_0x1df34b=Math[_0x162021(0x13f)](_0x1df34b,_0x3fbebe[_0x162021(0x105)]),_0xa229c7=Math['max'](_0xa229c7,_0x3fbebe[_0x162021(0x105)]),_0x197101=Math[_0x162021(0x13f)](_0x197101,_0x3fbebe[_0x162021(0x156)]),_0x4c7b9c=Math[_0x162021(0xf2)](_0x4c7b9c,_0x3fbebe[_0x162021(0x156)]))),_0x14630e[_0x162021(0xc4)](_0x3fbebe);});var _0x5f1dea=this[_0x40ec7f(0x10e)][_0x40ec7f(0x102)]||{'xmin':_0x1df34b,'xmax':_0xa229c7,'ymin':_0x197101,'ymax':_0x4c7b9c},_0x53dd0b=getMercatorBounds(_0x5f1dea),_0x4a9426=Math[_0x40ec7f(0x12a)](_0x53dd0b['xmax']-_0x53dd0b[_0x40ec7f(0x137)]),_0x50e096=Math[_0x40ec7f(0x12a)](_0x53dd0b[_0x40ec7f(0x130)]-_0x53dd0b[_0x40ec7f(0xc9)]),_0x22d6db=Math[_0x40ec7f(0xf2)](_0x4a9426,_0x50e096),_0xdc59cf=Math[_0x40ec7f(0x13f)](_0x4a9426,_0x50e096);this[_0x40ec7f(0xf5)]=_0x22d6db;var _0x5546c7=0x1;if(_0x22d6db>this[_0x40ec7f(0x10e)][_0x40ec7f(0x136)])_0x5546c7=_0x22d6db/this['options'][_0x40ec7f(0x136)],_0xdc59cf/_0x5546c7<this[_0x40ec7f(0x10e)][_0x40ec7f(0x126)]&&(_0x5546c7=_0xdc59cf/this['options'][_0x40ec7f(0x126)]);else _0xdc59cf<this[_0x40ec7f(0x10e)]['minCanvasSize']&&(_0x5546c7=_0xdc59cf/this[_0x40ec7f(0x10e)][_0x40ec7f(0x126)],_0x22d6db/_0x5546c7>this[_0x40ec7f(0x10e)][_0x40ec7f(0x136)]&&(_0x5546c7=_0x22d6db/this['options'][_0x40ec7f(0x136)]));var _0x350308=this[_0x40ec7f(0xd6)][_0x40ec7f(0x13d)]*1.5,_0x584926=_0x4a9426/_0x5546c7+_0x350308*0x2,_0x285aaf=_0x50e096/_0x5546c7+_0x350308*0x2,_0x5b7e7b=_0x350308*_0x5546c7;_0x53dd0b['xmin']-=_0x5b7e7b,_0x53dd0b['ymin']-=_0x5b7e7b,_0x53dd0b['xmax']+=_0x5b7e7b,_0x53dd0b[_0x40ec7f(0x130)]+=_0x5b7e7b,this[_0x40ec7f(0xd9)]=_0x5546c7,_0x5f1dea=geLatLngBounds(_0x53dd0b),this[_0x40ec7f(0xcc)]=Cesium[_0x40ec7f(0x14e)][_0x40ec7f(0xd4)](_0x5f1dea[_0x40ec7f(0x137)],_0x5f1dea[_0x40ec7f(0xc9)],_0x5f1dea[_0x40ec7f(0xe6)],_0x5f1dea[_0x40ec7f(0x130)]);var _0x361703=(_0x5d8ab4=_0x14630e[0x0][_0x40ec7f(0x13a)])!==null&&_0x5d8ab4!==void 0x0?_0x5d8ab4:0x1,_0x308ce6=(_0x2ec15b=_0x14630e[0x0][_0x40ec7f(0x13a)])!==null&&_0x2ec15b!==void 0x0?_0x2ec15b:0x0,_0x1a3df4=[];_0x14630e['forEach'](function(_0x1aaec8){var _0x24d546=_0x40ec7f,_0x856570=mars3d__namespace[_0x24d546(0xe4)][_0x24d546(0x147)]([_0x1aaec8[_0x24d546(0x105)],_0x1aaec8['lat']]),_0xff988a=_0x1aaec8[_0x24d546(0x13a)]||0x1,_0x173107=Math[_0x24d546(0x153)]((_0x856570[0x0]-_0x53dd0b[_0x24d546(0x137)])/_0x5546c7),_0x130dee=Math[_0x24d546(0x153)]((_0x53dd0b['ymax']-_0x856570[0x1])/_0x5546c7);_0x361703=Math['max'](_0x361703,_0xff988a),_0x308ce6=Math['min'](_0x308ce6,_0xff988a),_0x1a3df4['push']({'x':_0x173107,'y':_0x130dee,'value':_0xff988a});});var _0x3f7528={'min':_0x308ce6,'max':_0x361703,'data':_0x1a3df4};this[_0x40ec7f(0xfd)]=_0x3f7528;(!this[_0x40ec7f(0x148)]||_0x53dd0b['xmin']!==this[_0x40ec7f(0x148)][_0x40ec7f(0x137)]||_0x53dd0b[_0x40ec7f(0xc9)]!==this['_last_mBounds'][_0x40ec7f(0xc9)]||_0x53dd0b[_0x40ec7f(0xe6)]!==this[_0x40ec7f(0x148)][_0x40ec7f(0xe6)]||_0x53dd0b[_0x40ec7f(0x130)]!==this[_0x40ec7f(0x148)][_0x40ec7f(0x130)])&&(this['_last_mBounds']=_0x53dd0b,!this[_0x40ec7f(0xd6)][_0x40ec7f(0x12c)]&&(this[_0x40ec7f(0xd6)][_0x40ec7f(0x12c)]=mars3d__namespace[_0x40ec7f(0xbe)][_0x40ec7f(0xfe)](_0x40ec7f(0xd7),'mars3d-heatmap\x20mars3d-hideDiv',this[_0x40ec7f(0xe0)]['container'])),this[_0x40ec7f(0xd6)][_0x40ec7f(0x12c)]['style']['cssText']='width:'[_0x40ec7f(0x154)](_0x584926,_0x40ec7f(0xea))['concat'](_0x285aaf,_0x40ec7f(0x14c)),!this['_heat']?this[_0x40ec7f(0xbb)]=h337__namespace['create'](this['heatStyle']):this[_0x40ec7f(0xbb)][_0x40ec7f(0xec)](this[_0x40ec7f(0xd6)]));this[_0x40ec7f(0xbb)][_0x40ec7f(0xe8)](_0x3f7528);var _0x1397cb=mars3d__namespace[_0x40ec7f(0xbe)][_0x40ec7f(0x124)](this['_heat'][_0x40ec7f(0xf4)]['canvas']);return _0x1397cb;}},{'key':'_getArcHeatCanvas','value':function _0x5112af(){var _0x3890e5=_0x3634ae;this[_0x3890e5(0xbb)][_0x3890e5(0xec)]({'radius':this[_0x3890e5(0xd6)]['radius']*this['style']['arcRadiusScale'],'blur':this[_0x3890e5(0xd6)]['blur']*this[_0x3890e5(0xd8)][_0x3890e5(0xfa)],'gradient':this[_0x3890e5(0xd6)][_0x3890e5(0x11a)]||{0.25:_0x3890e5(0x11b),0.55:_0x3890e5(0x104),0.85:_0x3890e5(0x101),0x1:'rgb(255,255,255)'}});var _0xd1ee6c=mars3d__namespace[_0x3890e5(0xbe)][_0x3890e5(0x124)](this[_0x3890e5(0xbb)][_0x3890e5(0xf4)]['canvas']);return this['_heat'][_0x3890e5(0xec)](this[_0x3890e5(0x10e)][_0x3890e5(0xd6)]),_0xd1ee6c;}},{'key':_0x3634ae(0xd0),'value':function _0x43fcb9(_0xc6c4cb){var _0x2d3dcd=_0x3634ae,_0x13700e=mars3d__namespace[_0x2d3dcd(0xe7)]['parse'](_0xc6c4cb);if(!_0x13700e)return{};var _0x339d43=mars3d__namespace[_0x2d3dcd(0xe4)][_0x2d3dcd(0x147)]([_0x13700e[_0x2d3dcd(0x105)],_0x13700e[_0x2d3dcd(0x156)]]),_0x33ea04=this['_last_mBounds'],_0x38d143=Math[_0x2d3dcd(0x153)]((_0x339d43[0x0]-_0x33ea04[_0x2d3dcd(0x137)])/this[_0x2d3dcd(0xd9)]),_0x36360f=Math[_0x2d3dcd(0x153)]((_0x33ea04[_0x2d3dcd(0x130)]-_0x339d43[0x1])/this['_scale']),_0x454e54=this[_0x2d3dcd(0xbb)][_0x2d3dcd(0xeb)]({'x':_0x38d143,'y':_0x36360f}),_0x30db7d=this[_0x2d3dcd(0xbb)][_0x2d3dcd(0xf4)][_0x2d3dcd(0x138)][_0x2d3dcd(0x14b)](_0x38d143-0x1,_0x36360f-0x1,0x1,0x1)[_0x2d3dcd(0x145)];return{'x':_0x38d143,'y':_0x36360f,'value':_0x454e54,'color':_0x2d3dcd(0x14f)+_0x30db7d[0x0]+','+_0x30db7d[0x1]+','+_0x30db7d[0x2]+','+_0x30db7d[0x3]+')'};}}]),_0x35680d;}(BaseLayer);mars3d__namespace[_0x400822(0xe3)][_0x400822(0xf9)]=HeatLayer,mars3d__namespace['LayerUtil'][_0x400822(0xbd)](_0x400822(0x139),HeatLayer);function getMercatorBounds(_0x34190b){var _0x264026=_0x400822,_0x2a1822=mars3d__namespace['PointTrans']['lonlat2mercator']([_0x34190b[_0x264026(0x137)],_0x34190b[_0x264026(0xc9)]]),_0x167123=mars3d__namespace[_0x264026(0xe4)]['lonlat2mercator']([_0x34190b[_0x264026(0xe6)],_0x34190b[_0x264026(0x130)]]);return{'xmin':_0x2a1822[0x0],'ymin':_0x2a1822[0x1],'xmax':_0x167123[0x0],'ymax':_0x167123[0x1]};}function geLatLngBounds(_0x4d2698){var _0x5f3cb5=_0x400822,_0x5b159a=mars3d__namespace[_0x5f3cb5(0xe4)][_0x5f3cb5(0x135)]([_0x4d2698[_0x5f3cb5(0x137)],_0x4d2698[_0x5f3cb5(0xc9)]]),_0x40d2c5=mars3d__namespace[_0x5f3cb5(0xe4)][_0x5f3cb5(0x135)]([_0x4d2698[_0x5f3cb5(0xe6)],_0x4d2698[_0x5f3cb5(0x130)]]);return{'xmin':_0x5b159a[0x0],'ymin':_0x5b159a[0x1],'xmax':_0x40d2c5[0x0],'ymax':_0x40d2c5[0x1]};}exports[_0x400822(0xf9)]=HeatLayer,Object[_0x400822(0xc0)](exports,'__esModule',{'value':!![]});function _0x30ac(){var _0x5b0381=['x2XHEwvY','ChG7AgvPz2H0oG','z2v0vMfSDwvbDa','y29UzMLNDxjL','BwvYz2u','C2v0ug9ZAxrPB25Z','ug9SEvv0AwW','ChjVDg90ExbL','Dw5PzM9YBsbZyw1WBgvYmKqGAw1Hz2u7cMn6Bv9TyxrLCMLHBcbJEM1Fz2v0twf0zxjPywWOy3PTx21HDgvYAwfSsw5WDxqGBwf0zxjPywXjBNb1DcL7cIaGy3PTx21HDgvYAwfSig1HDgvYAwfSid0Gy3PTx2DLDerLzMf1BhrnyxrLCMLHBcHTyxrLCMLHBeLUChv0ktSkicb2zwmYihn0id0GBwf0zxjPywXjBNb1Dc5ZDdSkicb2zwm0ignVBg9Ysw1Hz2uGpsb0zxH0DxjLmKqOAw1Hz2uSC3qPoWOGigLMkgnVBg9Ysw1Hz2uUCMDIid09ihzLyZmOms4Wksb8FcbJB2XVCKLTywDLlNjNyIa9psb2zwmZkdaUmcKPEWOGicaGzgLZy2fYzdSkicb9cIaGBwf0zxjPywWUzgLMzNvZzsa9ignVBg9Ysw1Hz2uUCMDIoWOGig1HDgvYAwfSlMfSCgHHid0Gy29SB3jjBwfNzs5HoWOGihjLDhvYBIbTyxrLCMLHBdSkFqO','Bwf4','A2v5CW','x3jLBMrLCMvY','x21cB3vUzhnnyxG','q29SB3i','ywrKtgf5zxi','Cg9ZAxrPB25Z','sgvHDeXHEwvY','yxjJqMX1CLnJywXL','C3bSAxroDw0','x3nLDe9WDgLVBNniB29R','x2XHC3rFAgvHDerHDge','y3jLyxrL','y2XPzw50sgvPz2H0','mJiXmZq2nhjvufP3EG','CMDIkdiXnIWYmtySmJe2kq','CMvJDgfUz2XL','AxngB3jTyxq','CMDIkde0mcWXndaSmtqWkq','Bg5N','zM9YBwf0uMvJDgfUz2XL','mJyXmJu1Bersrwjp','vxrPBa','y29VCMrPBMf0zxm','CMvTB3zLr3jHCgHPyW','x2fKzgvKsg9VAW','u3rLBMnPBe9WzxjHDgLVBG','mte1mtCWmdnqBNHiAgy','B3b0Aw9UCW','Dw5PzM9YBxm','uMvJDgfUz2XLuhjPBwL0AxzL','oWOGicaGicaGicaGicbWicS9DMvJncHKAxnqB3mSmc4WktSkicaGicaGicaGicaGz2XFug9ZAxrPB24GpsbJEM1FBw9KzwXwAwv3uhjVAMvJDgLVBLjLBgf0AxzLvg9fEwuGkIbWoWOGicaGicaGicaGFqOGicaGicaGia','CgfYC2u','zgvMyxvSDfzHBhvL','B2jQzwn0','qMXLBMrPBMDtDgf0zq','mtrSsMnVAuC','6k+35BYv5ywLigHLyxrTyxaUANmG5BQtia','x21VDw50zwriB29R','qMfZzuXHEwvY','z3jHzgLLBNrbCMm','CMDIkdaSmcWWkq','BgvUz3rO','mty5nZq4nwnSrK5TAG','zM9YrwfJAa','z2v0','yNvTCe1HCa','y29UC3rYDwn0B3i','rgvYAxzLzcbJB25ZDhj1y3rVCNmGBwf5ig9UBhKGCMv0DxjUig9IAMvJDcbVCIb1BMrLzMLUzwq','z2v0uhjVDg90ExbLt2y','y29WEunHBNzHCW','quXxqvLt','BwLUq2fUDMfZu2L6zq','C2HVDW','C2HHBq','x2nYzwf0zufYy0DYyxbOAwm','ywjZ','mJyWmJjxC3jTBeu','y29UDgfPBMvY','x3bVC2L0Aw9UCW','s0vfua','mJmXmtuWCwjrzhvM','Ew1HEa','zNvUy3rPB24','y2XPzw50v2LKDgG','y2fSBa','z2v0t3DUuhjVCgvYDhLtEw1IB2XZ','BwvYy2f0B3iYBg9UBgf0','Bwf4q2fUDMfZu2L6zq','Eg1PBG','y3r4','AgvHDa','DMfSDwu','mJeYmJGWoe1TwwTJzq','zgvMyxvSDa','CMfKAxvZ','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9YCW','BwLU','z2v0uMvJDgfUz2XL','Dw5KzwzPBMvK','y29UzMLNDxjHyMXL','twf0zxjPywW','q2fUBM90ignHBgWGysbJBgfZCYbHCYbHigz1BMn0Aw9U','zgf0yq','yxbWBhK','Bg9UBgf0mM1LCMnHDg9Y','x2XHC3rFBujVDw5KCW','zgLMzKHLAwDODa','vKvsvevyx0zpuK1bva','z2v0sw1Hz2veyxrH','ChG7','u3vWzxiGzxHWCMvZC2LVBIbTDxn0igvPDgHLCIbIzsbUDwXSig9YigeGzNvUy3rPB24','uMvJDgfUz2XL','CMDIysG','z3jHCgHPyW','DMfSDwvpzG','Dg9bCNjHEq','CM91BMq','y29Uy2f0','zMLSDgvY','Bgf0','x2HLyxq','x3jLBw92zwriB29R','CMvNAxn0zxi','rg9TvxrPBa','x2DLDefYy0HLyxrdyw52yxm','zgvMAw5LuhjVCgvYDhK','x2DYyxbOAwm','AgvPz2H0','D2LKDgG','ChvZAa','z3jLzw4','C2v0uhjVDg90ExbLt2y','u3rLBMnPBez1BMn0Aw9U','DgHPCYbOyxnUj3qGyMvLBIbPBML0AwfSAxnLzcaTihn1CgvYkcKGAgfZBID0igjLzw4Gy2fSBgvK','Ew1PBG','x21HCNmZzf9WCML2yxrL','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9Y','x3jLy3rHBMDSzq','ne1Iq0vQvq','x2DLDeHLyxrdyw52yxm','q2fYDgvZAwfUmG','z2v0ug9PBNreyxrH','x2nYzwf0zuDYyxbOAwm','x3vWzgf0zvbVC2L0Aw9UC0HVB2S','ywrKr3jHCgHPyW','zNjVBurLz3jLzxm','CMvK','AgvHDfn0EwXL','zgL2','C3r5Bgu','x3nJywXL','y29UC3rYDwn0','zw51BwvYywjSzq','y2XLyxi','z3jHBNvSyxjPDhK','ywrKug9ZAxrPB24','zNjVBunHy2HL','x21HCa','rwXSAxbZB2LKu3vYzMfJzufWCgvHCMfUy2u','r3jHCgHPy0XHEwvY','Bgf5zxi','ug9PBNruCMfUCW','D3jPDgfIBgu','Eg1HEa','tg5Ntgf0ug9PBNq','C2v0rgf0yq'];_0x30ac=function(){return _0x5b0381;};return _0x30ac();}
}));
