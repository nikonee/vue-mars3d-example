(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1deda98"],{"4e4b":function(e,t,n){"use strict";n("e64d")},7544:function(e,t,n){"use strict";var o=n("246f"),c=n("7a23"),l={class:"title"},r=Object(c["defineComponent"])({props:{type:{type:String,default:"pannel"},warpper:{type:String,default:"sanbox-warpper"},title:{type:String,default:""},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup:function(e,t){var n=t.emit,r=e,a=Object(c["ref"])(),i=function(){n("update:visible",!1)};function d(e){var t=e.clientX,n=e.clientY;function o(e){var o=a.value,l=e.clientX-t,r=e.clientY-n;c(o,o.offsetLeft+l,o.offsetTop+r,e)}function c(e,o,c,l){var a=document.getElementById(r.warpper);o>0&&o+e.offsetWidth<a.offsetWidth&&(e.style.left=o+"px",t=l.clientX),c>0&&c+e.offsetHeight<a.offsetHeight&&(e.style.top=c+"px",n=l.clientY)}window.onmousemove=function(e){e.preventDefault(),o(e)},window.onmouseup=function(e){o(e),window.onmousemove=null,window.onmouseup=null}}return function(t,n){return Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])(["pannel fadeInRight",{"pannel-model":"model"===r.type}]),ref_key:"pannelBox",ref:a},["model"===r.type?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:0,ref:"modelHeader",class:"pannel-model__header",onMousedown:d},[Object(c["createElementVNode"])("span",l,Object(c["toDisplayString"])(e.title),1),Object(c["createVNode"])(Object(c["unref"])(o["a"]),{onClick:i,class:"close-btn"})],544)):Object(c["createCommentVNode"])("",!0),Object(c["renderSlot"])(t.$slots,"default")],2)),[[c["vShow"],"pannel"===r.type||e.visible]])}}}),a=(n("4e4b"),n("6b0d")),i=n.n(a);const d=i()(r,[["__scopeId","data-v-b885d716"]]);t["a"]=d},b10c:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c=n("7544"),l=Object(o["createTextVNode"])(" 提示：该示例目的演示交付的离线数据的效果"),r=Object(o["createElementVNode"])("br",null,null,-1),a=Object(o["createTextVNode"])(" 1) 包括全国12.5米地形(当前页面效果)"),i=Object(o["createElementVNode"])("br",null,null,-1),d=Object(o["createTextVNode"])(" 2) 包括0-12级影像底图(当前页面效果)"),u=Object(o["createElementVNode"])("br",null,null,-1),s=Object(o["createTextVNode"])(" 3) 包括所有模型数据： "),b=Object(o["createTextVNode"])("3dtiles模型"),f=Object(o["createTextVNode"])("gltf模型"),p=Object(o["createElementVNode"])("br",null,null,-1),j=Object(o["createTextVNode"])(" 4) 包括其他所有示例的json等文件 "),O=Object(o["defineComponent"])({setup:function(e){return function(e,t){var n=Object(o["resolveComponent"])("mars-button"),O=Object(o["resolveComponent"])("a-space");return Object(o["openBlock"])(),Object(o["createBlock"])(c["a"],{class:"infoView"},{default:Object(o["withCtx"])((function(){return[l,r,a,i,d,u,s,Object(o["createVNode"])(O,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(n,{href:"editor.html?id=layer-tileset/type/list",target:"_blank",class:"noBorder"},{default:Object(o["withCtx"])((function(){return[b]})),_:1}),Object(o["createVNode"])(n,{href:"editor.html?id=layer-graphic/draw/draw-model-list",target:"_blank",class:"noBorder"},{default:Object(o["withCtx"])((function(){return[f]})),_:1})]})),_:1}),p,j]})),_:1})}}});const m=O;t["default"]=m},e64d:function(e,t,n){}}]);