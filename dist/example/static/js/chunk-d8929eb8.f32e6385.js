(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8929eb8"],{"4e4b":function(e,t,n){"use strict";n("e64d")},7544:function(e,t,n){"use strict";var o=n("246f"),c=n("7a23"),a={class:"title"},l=Object(c["defineComponent"])({props:{type:{type:String,default:"pannel"},warpper:{type:String,default:"sanbox-warpper"},title:{type:String,default:""},visible:{type:Boolean,default:!1}},emits:["update:visible"],setup:function(e,t){var n=t.emit,l=e,i=Object(c["ref"])(),r=function(){n("update:visible",!1)};function u(e){var t=e.clientX,n=e.clientY;function o(e){var o=i.value,a=e.clientX-t,l=e.clientY-n;c(o,o.offsetLeft+a,o.offsetTop+l,e)}function c(e,o,c,a){var i=document.getElementById(l.warpper);o>0&&o+e.offsetWidth<i.offsetWidth&&(e.style.left=o+"px",t=a.clientX),c>0&&c+e.offsetHeight<i.offsetHeight&&(e.style.top=c+"px",n=a.clientY)}window.onmousemove=function(e){e.preventDefault(),o(e)},window.onmouseup=function(e){o(e),window.onmousemove=null,window.onmouseup=null}}return function(t,n){return Object(c["withDirectives"])((Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])(["pannel fadeInRight",{"pannel-model":"model"===l.type}]),ref_key:"pannelBox",ref:i},["model"===l.type?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:0,ref:"modelHeader",class:"pannel-model__header",onMousedown:u},[Object(c["createElementVNode"])("span",a,Object(c["toDisplayString"])(e.title),1),Object(c["createVNode"])(Object(c["unref"])(o["a"]),{onClick:r,class:"close-btn"})],544)):Object(c["createCommentVNode"])("",!0),Object(c["renderSlot"])(t.$slots,"default")],2)),[[c["vShow"],"pannel"===l.type||e.visible]])}}}),i=(n("4e4b"),n("6b0d")),r=n.n(i);const u=r()(l,[["__scopeId","data-v-b885d716"]]);t["a"]=u},ce4d:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c=n("7544"),a=n("7368"),l=Object(o["createTextVNode"])("叠加图层"),i=Object(o["createTextVNode"])("移除图层"),r=Object(o["defineComponent"])({setup:function(e){var t=window.mapWork,n=function(){t.addLayer()},r=function(){t.removeLayer()};return function(e,u){var d=Object(o["resolveComponent"])("mars-button"),f=Object(o["resolveComponent"])("a-space");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(c["a"],{class:"infoView"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(f,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,{onClick:n},{default:Object(o["withCtx"])((function(){return[l]})),_:1}),Object(o["createVNode"])(d,{onClick:r},{default:Object(o["withCtx"])((function(){return[i]})),_:1})]})),_:1})]})),_:1}),Object(o["createVNode"])(a["a"],{mapWork:Object(o["unref"])(t)},null,8,["mapWork"])],64)}}});const u=r;t["default"]=u},e64d:function(e,t,n){}}]);