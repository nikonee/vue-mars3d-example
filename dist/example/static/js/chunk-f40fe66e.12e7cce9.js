(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f40fe66e"],{3747:function(e,t,n){"use strict";var c=n("975b"),o=n("4ef5"),r=(n("3b18"),n("f64c")),a=(n("b0c0"),n("7a23")),u=Object(a["createElementVNode"])("span",{class:"pannel-item-label"},"数据管理:",-1),i=Object(a["createTextVNode"])("清除"),l=Object(a["createTextVNode"])(" 保存 "),d=Object(a["createTextVNode"])(" 打开 "),b=Object(a["defineComponent"])({setup:function(e){var t=window.mapWork,n=function(){t.btnClear()},b=function(){t.btnExpFile()},f=function(e){return!1},j=function(e){var n=e.file,c=n.name,o=null===c||void 0===c?void 0:c.substring(c.lastIndexOf(".")+1,c.length).toLowerCase();"json"!=o&&r["a"].error("文件类型不合法,请选择json格式标注文件！"),t.btnImpFile(n)},O=Object(a["ref"])([]);return function(e,t){var r=Object(a["resolveComponent"])("mars-button"),s=Object(a["resolveComponent"])("a-button"),p=Object(a["resolveComponent"])("a-upload"),h=Object(a["resolveComponent"])("a-space");return Object(a["openBlock"])(),Object(a["createBlock"])(h,null,{default:Object(a["withCtx"])((function(){return[u,Object(a["createVNode"])(r,{onClick:n},{default:Object(a["withCtx"])((function(){return[i]})),_:1}),Object(a["createVNode"])(r,{onClick:b,title:"保存GeoJSON"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(Object(a["unref"])(o["a"])),l]})),_:1}),Object(a["createVNode"])(p,{multiple:!1,name:"file",accept:"json,geojson","file-list":O.value,showUploadList:!1,supportServerRender:!0,beforeUpload:f,onChange:j},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s,{title:"打开GeoJSON"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(Object(a["unref"])(c["a"])),d]})),_:1})]})),_:1},8,["file-list"])]})),_:1})}}});const f=b;t["a"]=f},"92f9":function(e,t,n){"use strict";n("af22")},a9ad:function(e,t,n){"use strict";var c=n("7a23"),o=Object(c["createElementVNode"])("span",{class:"pannel-item-label"},"图层状态:",-1),r=Object(c["createTextVNode"])("显示隐藏"),a=Object(c["createTextVNode"])("Popup绑定"),u=Object(c["createTextVNode"])("Tooltip"),i=Object(c["createTextVNode"])("右键绑定"),l=Object(c["defineComponent"])({setup:function(e){var t=window.mapWork,n=Object(c["reactive"])({enabledShowHide:!0,enabledPopup:!0,enabledTooltip:!1,enabledRightMenu:!0}),l=function(){t.bindShowHide(n.enabledShowHide)},d=function(){t.bindPopup(n.enabledPopup)},b=function(){t.bindTooltip(n.enabledTooltip)},f=function(){t.bindRightMenu(n.enabledRightMenu)};return function(e,t){var j=Object(c["resolveComponent"])("a-checkbox"),O=Object(c["resolveComponent"])("a-space");return Object(c["openBlock"])(),Object(c["createBlock"])(O,null,{default:Object(c["withCtx"])((function(){return[o,Object(c["createVNode"])(j,{checked:Object(c["unref"])(n).enabledShowHide,"onUpdate:checked":t[0]||(t[0]=function(e){return Object(c["unref"])(n).enabledShowHide=e}),onChange:l},{default:Object(c["withCtx"])((function(){return[r]})),_:1},8,["checked"]),Object(c["createVNode"])(j,{checked:Object(c["unref"])(n).enabledPopup,"onUpdate:checked":t[1]||(t[1]=function(e){return Object(c["unref"])(n).enabledPopup=e}),onChange:d},{default:Object(c["withCtx"])((function(){return[a]})),_:1},8,["checked"]),Object(c["createVNode"])(j,{checked:Object(c["unref"])(n).enabledTooltip,"onUpdate:checked":t[2]||(t[2]=function(e){return Object(c["unref"])(n).enabledTooltip=e}),onChange:b},{default:Object(c["withCtx"])((function(){return[u]})),_:1},8,["checked"]),Object(c["createVNode"])(j,{checked:Object(c["unref"])(n).enabledRightMenu,"onUpdate:checked":t[3]||(t[3]=function(e){return Object(c["unref"])(n).enabledRightMenu=e}),onChange:f},{default:Object(c["withCtx"])((function(){return[i]})),_:1},8,["checked"])]})),_:1})}}});const d=l;t["a"]=d},af22:function(e,t,n){},bc30:function(e,t,n){"use strict";var c=n("7a23"),o=Object(c["createTextVNode"])("定位至山区"),r=Object(c["createTextVNode"])("定位至模型");function a(e,t,n,a,u,i){var l=Object(c["resolveComponent"])("mars-button"),d=Object(c["resolveComponent"])("a-space"),b=Object(c["resolveComponent"])("pannel");return Object(c["openBlock"])(),Object(c["createBlock"])(b,{class:"localBtn"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(d,null,{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{onClick:e.centerAtTerrain},{default:Object(c["withCtx"])((function(){return[o]})),_:1},8,["onClick"]),Object(c["createVNode"])(l,{onClick:e.centerAtModel},{default:Object(c["withCtx"])((function(){return[r]})),_:1},8,["onClick"])]})),_:1})]})),_:1})}n("d81d");var u=n("7544"),i=Object(c["defineComponent"])({components:{Pannel:u["a"]},setup:function(){var e=window.mapWork,t=function(){e.map.setCameraView({lat:30.859414,lng:116.28709,alt:8617,heading:18,pitch:-28})},n=function(){e.centerAtModel(),e.map.setCameraView({lng:114.019768,lat:22.627935,alt:80.6,heading:359,pitch:-34})};return{centerAtTerrain:t,centerAtModel:n}}}),l=(n("92f9"),n("6b0d")),d=n.n(l);const b=d()(i,[["render",a],["__scopeId","data-v-a6077f40"]]);t["a"]=b},e753:function(e,t,n){"use strict";n.r(t);var c=n("1da1"),o=(n("96cf"),n("7a23")),r=n("7544"),a=n("3747"),u=n("bc30"),i=n("a9ad"),l=n("37f1"),d={class:"f-mb"},b={class:"f-mb"},f=Object(o["createElementVNode"])("span",{class:"pannel-item-label"},"数据维护:",-1),j=Object(o["createTextVNode"])("绘制墙"),O=Object(o["createTextVNode"])("闭合墙"),s=Object(o["createTextVNode"])("是否编辑"),p=Object(o["defineComponent"])({setup:function(e){var t=window.mapWork,n=function(){t.onClickDrawModel()},p=function(){t.onClickDrawModelClosure()},h=Object(o["ref"])(!1),w=function(){t.bindEdit(h.value)},C=Object(o["ref"])();return t.eventTarget.on("editorUI-draw",function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.value.setValue(t.graphic);case 2:n=e.sent,n&&C.value.showEditor();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.eventTarget.on("editorUI-SMR",function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,C.value.setValue(t.graphic);case 2:n=e.sent,n&&C.value.showEditor();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.eventTarget.on("editorUI-stop",function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:C.value.hideEditor();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),function(e,t){var c=Object(o["resolveComponent"])("mars-button"),m=Object(o["resolveComponent"])("a-checkbox"),v=Object(o["resolveComponent"])("a-space");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(r["a"],{class:"infoView"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",d,[Object(o["createVNode"])(i["a"])]),Object(o["createElementVNode"])("div",b,[Object(o["createVNode"])(v,null,{default:Object(o["withCtx"])((function(){return[f,Object(o["createVNode"])(c,{onClick:n},{default:Object(o["withCtx"])((function(){return[j]})),_:1}),Object(o["createVNode"])(c,{onClick:p},{default:Object(o["withCtx"])((function(){return[O]})),_:1}),Object(o["createVNode"])(m,{checked:h.value,"onUpdate:checked":t[0]||(t[0]=function(e){return h.value=e}),onChange:w},{default:Object(o["withCtx"])((function(){return[s]})),_:1},8,["checked"])]})),_:1})]),Object(o["createElementVNode"])("div",null,[Object(o["createVNode"])(a["a"])])]})),_:1}),Object(o["createVNode"])(u["a"]),Object(o["createVNode"])(l["a"],{ref_key:"editor",ref:C},null,512)],64)}}});const h=p;t["default"]=h}}]);