(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a273992"],{"4e4b":function(e,t,n){"use strict";n("e64d")},7544:function(e,t,n){"use strict";var o=n("246f"),c=n("7a23"),i={class:"title"},a=Object(c["defineComponent"])({props:{type:{type:String,default:"pannel"},warpper:{type:String,default:"sanbox-warpper"},title:{type:String,default:""},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup:function(e,t){var n=t.emit,a=e,l=Object(c["ref"])(),r=function(){n("update:visible",!1)};function u(e){var t=e.clientX,n=e.clientY;function o(e){var o=l.value,i=e.clientX-t,a=e.clientY-n;c(o,o.offsetLeft+i,o.offsetTop+a,e)}function c(e,o,c,i){var l=document.getElementById(a.warpper);o>0&&o+e.offsetWidth<l.offsetWidth&&(e.style.left=o+"px",t=i.clientX),c>0&&c+e.offsetHeight<l.offsetHeight&&(e.style.top=c+"px",n=i.clientY)}window.onmousemove=function(e){e.preventDefault(),o(e)},window.onmouseup=function(e){o(e),window.onmousemove=null,window.onmouseup=null}}return function(t,n){return Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])(["pannel fadeInRight",{"pannel-model":"model"===a.type}]),ref_key:"pannelBox",ref:l},["model"===a.type?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:0,ref:"modelHeader",class:"pannel-model__header",onMousedown:u},[Object(c["createElementVNode"])("span",i,Object(c["toDisplayString"])(e.title),1),Object(c["createVNode"])(Object(c["unref"])(o["a"]),{onClick:r,class:"close-btn"})],544)):Object(c["createCommentVNode"])("",!0),Object(c["renderSlot"])(t.$slots,"default")],2)),[[c["vShow"],"pannel"===a.type||e.visible]])}}}),l=(n("4e4b"),n("6b0d")),r=n.n(l);const u=r()(a,[["__scopeId","data-v-b885d716"]]);t["a"]=u},e1e8:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c=n("7544"),i=Object(o["createTextVNode"])("叠加图层"),a=Object(o["createTextVNode"])("移除图层"),l=Object(o["defineComponent"])({setup:function(e){var t=window.mapWork,n=function(){t.addLayer()},l=function(){t.removeLayer()};return function(e,t){var r=Object(o["resolveComponent"])("mars-button"),u=Object(o["resolveComponent"])("a-space");return Object(o["openBlock"])(),Object(o["createBlock"])(c["a"],{class:"infoView"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(r,{onClick:n},{default:Object(o["withCtx"])((function(){return[i]})),_:1}),Object(o["createVNode"])(r,{onClick:l},{default:Object(o["withCtx"])((function(){return[a]})),_:1})]})),_:1})]})),_:1})}}});const r=l;t["default"]=r},e64d:function(e,t,n){}}]);